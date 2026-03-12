#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const packageJsonPath = path.join(root, 'package.json');
const wranglerConfigPath = path.join(root, 'wrangler.toml');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const WORKER_NAME = process.env.CF_WORKER_NAME || packageJson.name || 'cloudflare-imgbed';
const KV_BINDING = 'img_url';
const DEFAULT_NAMESPACE_TITLE = `${WORKER_NAME}-img-url`;
const NAMESPACE_TITLE = process.env.CF_KV_NAMESPACE_TITLE || DEFAULT_NAMESPACE_TITLE;
const ENV_NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID || process.env.IMG_URL_KV_NAMESPACE_ID || '';
const DEFAULT_COMPATIBILITY_DATE = process.env.CF_COMPATIBILITY_DATE || '2026-03-09';
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || '';

function runWrangler(args) {
  const command = ['npx', 'wrangler', ...args].map(arg => {
    if (/^[a-zA-Z0-9_./:-]+$/.test(arg)) return arg;
    return JSON.stringify(arg);
  }).join(' ');

  return execSync(command, {
    cwd: root,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
  });
}

function createDefaultConfig() {
  return [
    `name = ${JSON.stringify(WORKER_NAME)}`,
    `main = ${JSON.stringify('src/worker.js')}`,
    `compatibility_date = ${JSON.stringify(DEFAULT_COMPATIBILITY_DATE)}`,
    '',
    'kv_namespaces = []',
    '',
    '[assets]',
    `directory = ${JSON.stringify('.wrangler-assets')}`,
    `binding = ${JSON.stringify('ASSETS')}`,
    'run_worker_first = true',
    '',
  ].join('\n');
}

function ensureBaseConfig() {
  if (!fs.existsSync(wranglerConfigPath)) {
    fs.writeFileSync(wranglerConfigPath, createDefaultConfig(), 'utf8');
    console.log(`[kv] Created ${path.basename(wranglerConfigPath)} with default Worker settings.`);
  }
}

function findTopLevelArrayRange(content, key) {
  const keyPattern = new RegExp(`(^|\\n)${key}\\s*=\\s*\\[`, 'm');
  const match = keyPattern.exec(content);
  if (!match) return null;

  const arrayStart = content.indexOf('[', match.index);
  if (arrayStart < 0) return null;

  let depth = 0;
  let inString = false;
  let quoteChar = '';

  for (let index = arrayStart; index < content.length; index++) {
    const char = content[index];
    const previous = content[index - 1];

    if (inString) {
      if (char === quoteChar && previous !== '\\') {
        inString = false;
        quoteChar = '';
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quoteChar = char;
      continue;
    }

    if (char === '[') depth++;
    if (char === ']') {
      depth--;
      if (depth === 0) {
        return {
          start: arrayStart,
          end: index,
        };
      }
    }
  }

  return null;
}

function buildKvEntry(namespaceId) {
  return `{ binding = ${JSON.stringify(KV_BINDING)}, id = ${JSON.stringify(namespaceId)} }`;
}

function getKvBindingMatch(content) {
  const range = findTopLevelArrayRange(content, 'kv_namespaces');
  if (!range) return null;

  const arrayContent = content.slice(range.start + 1, range.end);
  const bindingPattern = new RegExp(`\\{[^{}]*binding\\s*=\\s*"${KV_BINDING}"[^{}]*\\}`, 'm');
  const match = bindingPattern.exec(arrayContent);
  if (!match) return null;

  const entry = match[0];
  const namespaceIdMatch = entry.match(/(?:namespace_id|id)\s*=\s*"([^"]+)"/);
  const previewIdMatch = entry.match(/preview_id\s*=\s*"([^"]+)"/);

  return {
    range,
    entry,
    namespaceId: namespaceIdMatch?.[1] || '',
    previewId: previewIdMatch?.[1] || '',
    usesLegacyNamespaceId: /namespace_id\s*=/.test(entry),
  };
}

function readKvBindingDetails() {
  const content = fs.readFileSync(wranglerConfigPath, 'utf8');
  return getKvBindingMatch(content);
}

function upsertKvBinding(namespaceId) {
  const content = fs.readFileSync(wranglerConfigPath, 'utf8');
  const range = findTopLevelArrayRange(content, 'kv_namespaces');
  const nextEntry = buildKvEntry(namespaceId);

  if (!range) {
    const firstTableIndex = content.search(/^\s*\[[^\]]+\]\s*$/m);
    const insertAt = firstTableIndex >= 0 ? firstTableIndex : content.length;
    const before = content.slice(0, insertAt).trimEnd();
    const after = content.slice(insertAt).replace(/^\s*/, '');
    const nextContent = `${before}\n\nkv_namespaces = [\n  ${nextEntry}\n]\n\n${after}`.trimEnd() + '\n';
    fs.writeFileSync(wranglerConfigPath, nextContent, 'utf8');
    return;
  }

  const arrayBody = content.slice(range.start + 1, range.end);
  const bindingPattern = new RegExp(`\\{[^{}]*binding\\s*=\\s*"${KV_BINDING}"[^{}]*\\}`, 'm');

  let nextArrayBody;
  if (bindingPattern.test(arrayBody)) {
    nextArrayBody = arrayBody.replace(bindingPattern, nextEntry);
  } else {
    const trimmed = arrayBody.trim();
    if (!trimmed) {
      nextArrayBody = `\n  ${nextEntry}\n`;
    } else {
      const normalized = arrayBody.trimEnd().replace(/,\s*$/, '');
      nextArrayBody = `${normalized},\n  ${nextEntry}\n`;
      if (!nextArrayBody.startsWith('\n')) {
        nextArrayBody = `\n${nextArrayBody}`;
      }
    }
  }

  const nextContent = `${content.slice(0, range.start + 1)}${nextArrayBody}${content.slice(range.end)}`;
  fs.writeFileSync(wranglerConfigPath, nextContent, 'utf8');
}

function parseNamespaceList(output) {
  const trimmed = output.trim();
  if (!trimmed) return [];

  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed
        .map(item => ({
          id: item.id || item.namespace_id || '',
          title: item.title || item.name || '',
        }))
        .filter(item => item.id && item.title);
    }
  } catch {
    // Fallback to text parsing below.
  }

  return trimmed
    .split(/\r?\n/)
    .map(line => line.replace(/[│|]/g, ' ').trim())
    .map(line => {
      const match = line.match(/([0-9a-f]{32}|[0-9a-f-]{36})\s+(.+)/i);
      if (!match) return null;
      return { id: match[1], title: match[2].trim() };
    })
    .filter(Boolean);
}

function findExistingNamespaceId() {
  try {
    const output = runWrangler(['kv', 'namespace', 'list']);
    const namespaces = parseNamespaceList(output);
    const existing = namespaces.find(namespace => namespace.title === NAMESPACE_TITLE);
    return existing?.id || '';
  } catch (error) {
    const stderr = error.stderr?.toString?.() || error.message;
    throw new Error(`[kv] Failed to list KV namespaces: ${stderr.trim()}`);
  }
}

function readBoundNamespaceId() {
  return readKvBindingDetails()?.namespaceId || '';
}

function createNamespaceAndBind() {
  try {
    runWrangler([
      'kv',
      'namespace',
      'create',
      NAMESPACE_TITLE,
      '--binding',
      KV_BINDING,
      '--update-config',
      '--config',
      path.basename(wranglerConfigPath),
    ]);
  } catch (error) {
    const stderr = error.stderr?.toString?.() || error.message;
    throw new Error(`[kv] Failed to create KV namespace ${JSON.stringify(NAMESPACE_TITLE)}: ${stderr.trim()}`);
  }

  const namespaceId = readBoundNamespaceId();
  if (!namespaceId) {
    throw new Error('[kv] Wrangler reported success but did not write the img_url binding into wrangler.toml.');
  }

  return namespaceId;
}

function assertCloudflareCredentials() {
  if (CLOUDFLARE_API_TOKEN) {
    return;
  }

  throw new Error(
    '[kv] Missing CLOUDFLARE_API_TOKEN. To auto-create or discover a missing KV namespace during deploy, set CLOUDFLARE_API_TOKEN, or provide an existing namespace id via CF_KV_NAMESPACE_ID.'
  );
}

function ensureKvBinding() {
  ensureBaseConfig();

  const existingBinding = readKvBindingDetails();
  const existingNamespaceId = existingBinding?.namespaceId || '';
  if (existingNamespaceId) {
    if (existingBinding?.usesLegacyNamespaceId) {
      upsertKvBinding(existingNamespaceId);
      console.log('[kv] Normalized legacy kv_namespaces entry to Wrangler v4 id format.');
    }
    console.log(`[kv] Reusing existing img_url binding: ${existingNamespaceId}`);
    return existingNamespaceId;
  }

  if (ENV_NAMESPACE_ID) {
    upsertKvBinding(ENV_NAMESPACE_ID);
    console.log(`[kv] Bound img_url using CF_KV_NAMESPACE_ID: ${ENV_NAMESPACE_ID}`);
    return ENV_NAMESPACE_ID;
  }

  assertCloudflareCredentials();

  const namespaceIdFromList = findExistingNamespaceId();
  if (namespaceIdFromList) {
    upsertKvBinding(namespaceIdFromList);
    console.log(`[kv] Found existing KV namespace ${JSON.stringify(NAMESPACE_TITLE)} and bound it to img_url.`);
    return namespaceIdFromList;
  }

  const createdNamespaceId = createNamespaceAndBind();
  console.log(`[kv] Created and bound KV namespace ${JSON.stringify(NAMESPACE_TITLE)}: ${createdNamespaceId}`);
  return createdNamespaceId;
}

ensureKvBinding();
