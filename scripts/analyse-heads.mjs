import { readFileSync } from 'node:fs'

const dir = 'C:/Users/bsd/bible-ocr/pages-text'

const BOOKS = [
  ['ማቴዎስ', 40], ['ማርቆስ', 41], ['ሉቃስ', 42], ['ዮሐንስ', 43], ['ሐዋርያት', 44],
  ['ሮሜ', 45], ['ቆሮንቶስ', 46], ['ገላትያ', 48], ['ኤፌሶን', 49], ['ፊልጵስዩስ', 50],
  ['ቆላስይስ', 51], ['ተሰሎንቄ', 52], ['ጢሞቴዎስ', 54], ['ቲቶ', 56], ['ፊልሞና', 57],
  ['እብራውያን', 58], ['ያዕቆብ', 59], ['ጴጥሮስ', 60], ['ዮሐንስ', 62], ['ይሁዳ', 65],
  ['ራእይ', 66], ['ምርቀፍ', 2], ['አጸንጻ', 17], ['ቆይሎን', 43],
]

const re = /([\u1200-\u137F]+?)\s*(?:ወንጌል|መልእክት|ወንግጌል)?\s*(\d{1,3})/

const heads = []
let mapped = 0

for (let p = 1; p <= 659; p += 1) {
  const text = readFileSync(`${dir}/${String(p).padStart(4, '0')}.txt`, 'utf8')
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean).slice(0, 6)

  let found = null
  for (const line of lines) {
    // a running head is short and names a book
    if (line.length > 40) continue
    for (const [name, nr] of BOOKS) {
      if (line.includes(name)) {
        const m = /(\d{1,3})/.exec(line.replace(name, ''))
        found = { book: name, nr, chapter: m ? Number(m[1]) : null, line }
        break
      }
    }
    if (found) break
  }
  if (found) mapped += 1
  heads.push({ page: p, ...(found ?? {}) })
}

console.log(`pages with a recognisable running head: ${mapped}/659`)
console.log(`\nfirst 24:`)
for (const h of heads.slice(0, 24)) {
  console.log(`  p${h.page}: ${h.book ?? '(none)'} ch${h.chapter ?? '?'}   ${JSON.stringify((h.line ?? '').slice(0, 45))}`)
}

const byBook = new Map()
for (const h of heads) {
  if (!h.book) continue
  const key = `${h.nr} ${h.book}`
  if (!byBook.has(key)) byBook.set(key, { first: h.page, chapters: new Set() })
  const e = byBook.get(key)
  e.first = Math.min(e.first, h.page)
  if (h.chapter) e.chapters.add(h.chapter)
}
console.log('\nbook coverage:')
for (const [k, v] of [...byBook.entries()].sort((a, b) => a[1].first - b[1].first)) {
  console.log(`  ${k.padEnd(16)} from page ${String(v.first).padStart(3)}  chapters seen: ${v.chapters.size}`)
}