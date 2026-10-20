// Probe: which OT books can be found in the freshly OCR'd page text, and how.
//
// This only reports. It is a first look at whether the printed commentary can be
// cut into books and chapters automatically, or whether it needs a hand-written
// boundary list.

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const PAGES_ROOT = 'C:/Users/bsd/bible-ocr/ot/pages-text'
const BOOKS = JSON.parse(
  readFileSync('C:/Users/bsd/AppData/Local/Temp/opencode/ot-books.json', 'utf8'),
)

// The distinctive part of a name, without the Old Testament / book / prophet prefix.
const key = (name) => name.replace(/^(ኦሪት |መጽሐፈ |ትንቢተ |ሰቆቃው )/, '')

const volumes = readdirSync(PAGES_ROOT).filter((v) => statSync(path.join(PAGES_ROOT, v)).isDirectory())
const hits = new Map(BOOKS.map((b) => [b.nr, []]))

let totalPages = 0
for (const volume of volumes) {
  const dir = path.join(PAGES_ROOT, volume)
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.txt'))) {
    totalPages += 1
    const text = readFileSync(path.join(dir, file), 'utf8')
    for (const book of BOOKS) {
      const k = key(book.name)
      if (k.length < 3) continue
      if (text.includes(k)) hits.get(book.nr).push(`${volume}/${file}`)
    }
  }
}

const report = BOOKS.map((book) => ({
  nr: book.nr,
  name: book.name,
  key: key(book.name),
  chapters: book.chapters,
  pages: hits.get(book.nr).length,
  first: hits.get(book.nr)[0] ?? null,
}))

let found = 0
for (const row of report) {
  if (row.pages) found += 1
  console.log(
    `${String(row.nr).padStart(2)}  ${row.key.padEnd(22)} chapters=${String(row.chapters).padStart(3)}  pages=${String(row.pages).padStart(4)}  first=${row.first ?? '-'}`,
  )
}
console.log(`\nscanned ${totalPages} page files across ${volumes.length} volumes`)
console.log(`books mentioned at least once: ${found} of ${BOOKS.length}`)

writeFileSync(
  'C:/Users/bsd/AppData/Local/Temp/opencode/ot-book-hits.json',
  JSON.stringify(report, null, 1),
)
