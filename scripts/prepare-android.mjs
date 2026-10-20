/**
 * Prepares the Android package: builds the web app, then copies it together with
 * the whole Bible and all commentary into the app's assets so it works with no
 * server and no computer attached.
 */
import { cp, mkdir, rm, readdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const ROOT = 'C:/Users/bsd/Desktop/surp/bible'
const PUBLIC = path.join(ROOT, 'android/app/src/main/assets/public')

if (!existsSync(path.join(ROOT, 'dist/index.html'))) {
  throw new Error('Run "npm run build" before this script.')
}

await rm(PUBLIC, { recursive: true, force: true })
await mkdir(PUBLIC, { recursive: true })

// The web app itself.
await cp(path.join(ROOT, 'dist'), PUBLIC, { recursive: true })

// The data the offline layer reads, at data/<file> as the app requests it.
await cp(path.join(ROOT, 'data'), path.join(PUBLIC, 'data'), { recursive: true })

async function sizeOf(dir) {
  let total = 0
  let count = 0
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry)
    const info = await stat(full)
    if (info.isDirectory()) {
      const nested = await sizeOf(full)
      total += nested.total
      count += nested.count
    } else {
      total += info.size
      count += 1
    }
  }
  return { total, count }
}

const app = await sizeOf(path.join(ROOT, 'dist'))
const data = await sizeOf(path.join(ROOT, 'data'))
console.log(`web app:  ${app.count} files, ${(app.total / 1048576).toFixed(1)} MB`)
console.log(`data:     ${data.count} files, ${(data.total / 1048576).toFixed(1)} MB`)
console.log(`packaged: ${(app.total + data.total) / 1048576 < 90 ? 'within the 100 MB cap' : 'OVER 90 MB — check Play Store limits'}`)