// Regenerates test-offline-bundle.mjs from test-offline.mjs and src/offline.ts.
//
// The bundle is a checked-in artifact. Without this, it silently keeps testing
// an old copy of the offline layer and reports failures that have nothing to
// do with the current code.
import { build } from 'esbuild'

const result = await build({
  entryPoints: ['test-offline.mjs'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node18',
  outfile: 'test-offline-bundle.mjs',
  logLevel: 'info',
})

console.log(`regenerated test-offline-bundle.mjs (${result.errors.length} errors)`)
