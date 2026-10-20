import { build } from 'esbuild'
await build({
  entryPoints: ['test-offline.mjs'], bundle: true, format: 'esm',
  loader: { '.mjs': 'ts' },
  outfile: 'test-offline-bundle.mjs', nodePaths: ['node_modules'],
  external: ['node:fs'],
})
