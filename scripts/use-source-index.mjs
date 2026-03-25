import { copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

await copyFile(
  path.join(projectRoot, 'index.source.html'),
  path.join(projectRoot, 'index.html'),
);
