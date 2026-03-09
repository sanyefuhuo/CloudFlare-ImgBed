import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const functionsDir = resolve(rootDir, 'functions');
const generatedDir = resolve(__dirname, 'generated');
const outputFile = resolve(generatedDir, 'manifest.js');

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(fullPath);
    }
  }

  return files;
}

function normalizePath(filePath) {
  return relative(rootDir, filePath).replace(/\\/g, '/');
}

function routeInfo(filePath) {
  const relativePath = normalizePath(filePath);
  const withoutPrefix = relativePath.replace(/^functions\//, '');
  const segments = withoutPrefix.replace(/\.js$/, '').split('/');
  const fileName = segments[segments.length - 1];

  if (fileName === '_middleware') {
    return {
      type: 'middleware',
      dirSegments: segments.slice(0, -1),
      relativePath,
    };
  }

  if (fileName === 'index') {
    return {
      type: 'index',
      routeSegments: segments.slice(0, -1),
      relativePath,
    };
  }

  if (fileName === '[[path]]') {
    return {
      type: 'catchall',
      routeSegments: segments.slice(0, -1),
      relativePath,
    };
  }

  return {
    type: 'exact',
    routeSegments: segments,
    relativePath,
  };
}

function isRoutableFile(filePath) {
  const source = readFileSync(filePath, 'utf8');
  return /export\s+(async\s+)?function\s+onRequest(?:[A-Z][a-z]+)?\s*\(|export\s+const\s+onRequest\s*=/.test(source);
}

const files = walk(functionsDir)
  .filter(isRoutableFile)
  .map(routeInfo)
  .sort((a, b) => a.relativePath.localeCompare(b.relativePath));

const imports = [];
const routes = [];
const middlewares = [];

files.forEach((entry, index) => {
  const importName = `module${index}`;
  imports.push(`import * as ${importName} from '../../${entry.relativePath}';`);

  if (entry.type === 'middleware') {
    middlewares.push(`  {
    dirSegments: ${JSON.stringify(entry.dirSegments)},
    relativePath: ${JSON.stringify(entry.relativePath)},
    mod: ${importName}
  }`);
    return;
  }

  routes.push(`  {
    type: ${JSON.stringify(entry.type)},
    routeSegments: ${JSON.stringify(entry.routeSegments)},
    relativePath: ${JSON.stringify(entry.relativePath)},
    mod: ${importName}
  }`);
});

const output = `${imports.join('\n')}

export const workerRoutes = [
${routes.join(',\n')}
];

export const workerMiddlewares = [
${middlewares.join(',\n')}
];
`;

mkdirSync(generatedDir, { recursive: true });
writeFileSync(outputFile, output, 'utf8');

console.log(`Generated worker manifest with ${routes.length} routes and ${middlewares.length} middleware files.`);
