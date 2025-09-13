import { existsSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const source = join(root, 'index.html');
const targetDir = join(root, 'build', 'client');
const target = join(targetDir, 'index.html');

if (!existsSync(source)) {
  console.error('[postbuild] index.html não encontrado em raiz');
  process.exit(1);
}
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}
copyFileSync(source, target);
console.log('[postbuild] index.html copiado (SPA) para build/client/index.html');
