/**
 * Builds the verse index used by the offline text search in the Android app.
 * The search term is only known at runtime, so the whole text cannot be
 * pre-rendered per query; instead one compact row per verse is stored and the
 * app searches it directly.
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const DATA = 'C:/Users/bsd/Desktop/surp/bible/data'
const OUT = path.join(DATA, 'raw')

const index = JSON.parse(await readFile(path.join(DATA, 'index.json'), 'utf8'))

await mkdir(OUT, { recursive: true })

for (const translation of index) {
  const meta = JSON.parse(await readFile(path.join(DATA, translation.id, 'meta.json'), 'utf8'))
  const rows = []
  const dir = path.join(DATA, translation.id, 'books')

  for (const file of (await readdir(dir)).filter((f) => f.endsWith('.json')).sort()) {
    const bookNr = Number(file.replace('.json', ''))
    const info = meta.books.find((b) => b.nr === bookNr)
    if (!info) continue
    const book = JSON.parse(await readFile(path.join(dir, file), 'utf8'))
    for (const chapter of book.chapters) {
      for (const [verse, text] of chapter.v) {
        rows.push([bookNr, info.name, info.testament, chapter.c, verse, text])
      }
    }
  }

  const target = path.join(OUT, `search-${translation.id}.json`)
  await writeFile(target, JSON.stringify(rows), 'utf8')
  const bytes = (await readFile(target)).length
  console.log(
    `${translation.id}: ${rows.length} verses -> search-${translation.id}.json (${(bytes / 1048576).toFixed(1)} MB)`,
  )
}