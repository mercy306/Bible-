import { build } from 'esbuild'
await build({
  entryPoints: ['test-audit.tsx'], bundle: true, format: 'esm', jsx: 'automatic',
  loader: { '.css': 'empty' }, outfile: 'test-audit.mjs',
  nodePaths: ['node_modules'], external: ['jsdom', 'node:fs'],
  define: { __BUILD__: JSON.stringify('test') },
})
