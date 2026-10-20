import { build } from 'esbuild'
await build({
  entryPoints: ['test-search-parity.mjs'], bundle: true, format: 'esm',
  loader: { '.mjs': 'ts' },
  outfile: 'test-search-parity-bundle.mjs', nodePaths: ['node_modules'],
  external: ['node:fs'],
})
