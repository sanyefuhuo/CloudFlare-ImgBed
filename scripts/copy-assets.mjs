#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dest = path.resolve(root, '.wrangler-assets');

function loadIgnore() {
  const ignoreFile = path.join(root, '.assetsignore');
  if (!fs.existsSync(ignoreFile)) return new Set();
  return new Set(
    fs.readFileSync(ignoreFile, 'utf8')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'))
  );
}

const ignored = loadIgnore();
ignored.add('.wrangler-assets');
ignored.add('.wrangler-assets/');

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });

let copied = 0;
for (const entry of fs.readdirSync(root)) {
  if (ignored.has(entry) || ignored.has(`${entry}/`)) continue;
  const src = path.join(root, entry);
  const dst = path.join(dest, entry);

  try {
    fs.cpSync(src, dst, { recursive: true });
    copied++;
  } catch (error) {
    console.warn(`skip ${entry}: ${error.message}`);
  }
}

console.log(`Copied ${copied} entries to .wrangler-assets/`);
