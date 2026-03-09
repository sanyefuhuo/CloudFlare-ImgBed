import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const outputDir = resolve(rootDir, 'dist-worker');

const staticEntries = [
  'index.html',
  'index.html.gz',
  'logo.png',
  'logo-dark.png',
  'css',
  'js',
  'img',
  'fonts',
  'static',
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const entry of staticEntries) {
  const source = resolve(rootDir, entry);
  if (!existsSync(source)) {
    continue;
  }

  const destination = resolve(outputDir, entry);
  cpSync(source, destination, { recursive: true });
}

console.log(`Copied static assets into ${outputDir}.`);
