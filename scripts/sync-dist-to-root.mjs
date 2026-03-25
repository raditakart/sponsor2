import { cp, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.join(projectRoot, 'dist');

const copyTargets = [
  ['index.html', 'index.html'],
  ['legacy-page.html', 'legacy-page.html'],
  ['CNAME', 'CNAME'],
  ['assets', 'assets'],
  ['images', 'images'],
];

async function pathExists(targetPath) {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
}

for (const [, destination] of copyTargets) {
  const destinationPath = path.join(projectRoot, destination);

  if (await pathExists(destinationPath)) {
    await rm(destinationPath, { force: true, recursive: true });
  }
}

for (const [source, destination] of copyTargets) {
  const sourcePath = path.join(distRoot, source);
  const destinationPath = path.join(projectRoot, destination);

  await cp(sourcePath, destinationPath, { recursive: true });
}
