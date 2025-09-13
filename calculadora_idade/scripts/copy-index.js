import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const source = join(root, 'index.html');
const targetDir = join(root, 'build', 'client');
const assetsDir = join(targetDir, 'assets');
const target = join(targetDir, 'index.html');

if (!existsSync(source)) {
  console.error('[postbuild] index.html não encontrado em raiz');
  process.exit(1);
}
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

let html = readFileSync(source, 'utf-8');

// Localiza arquivos principais gerados
let cssFile = null;
let entryClient = null;
let rootBundle = null;
if (existsSync(assetsDir)) {
  const files = readdirSync(assetsDir);
  cssFile = files.find(f => f.startsWith('root-') && f.endsWith('.css')) || null;
  entryClient = files.find(f => f.startsWith('entry.client-') && f.endsWith('.js')) || null;
  rootBundle = files.find(f => f.startsWith('root-') && f.endsWith('.js')) || null;
}

// Injeta tags antes de </head> e antes de </body>
const headInject = [
  cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : null,
].filter(Boolean).join('\n    ');

const bodyInject = [
  rootBundle ? `<script type="module" src="/assets/${rootBundle}"></script>` : null,
  entryClient ? `<script type="module" src="/assets/${entryClient}"></script>` : null,
].filter(Boolean).join('\n    ');

if (headInject) {
  html = html.replace('</head>', `  ${headInject}\n</head>`);
}
if (bodyInject) {
  html = html.replace('</body>', `  ${bodyInject}\n</body>`);
}

writeFileSync(target, html);
console.log('[postbuild] index.html gerado com injeção de assets em build/client/index.html');
