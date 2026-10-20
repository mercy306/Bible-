import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const line = (s = '') => console.log(s)

/* ---------------- translations ---------------- */

line('='.repeat(64))
line('TRANSLATIONS')
line('='.repeat(64))

const index = JSON.parse(readFileSync('data/index.json', 'utf8'))
const dirSizes = {}

function dirSize(dir) {
  if (dirSizes[dir] != null) return dirSizes[dir]
  let total = 0
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    total += e.isDirectory() ? dirSize(p) : statSync(p).size
  }
  dirSizes[dir] = total
  return total
}

const mb = (n) => (n / 1024 / 1024).toFixed(1) + ' MB'
const kb = (n) => (n / 1024).toFixed(0) + ' KB'

for (const t of index) {
  const dir = path.join('data', t.id)
  const meta = JSON.parse(readFileSync(path.join(dir, 'meta.json'), 'utf8'))
  let chapters = 0
  let verses = 0
  let blanks = 0
  let dash = 0
  for (const f of readdirSync(path.join(dir, 'books'))) {
    const b = JSON.parse(readFileSync(path.join(dir, 'books', f), 'utf8'))
    chapters += b.chapters.length
    for (const c of b.chapters) {
      for (const [, text] of c.v) {
        verses += 1
        const s = String(text).trim()
        if (s === '') blanks += 1
        else if (s === '-') dash += 1
      }
    }
  }
  line()
  line(`${t.name}   [id: ${t.id}]`)
  line(`  language      ${meta.language} (${meta.lang})`)
  line(`  credit        ${meta.credit ?? 'n/a'}`)
  line(`  books         ${meta.books.length}`)
  line(`  chapters      ${chapters}`)
  line(`  verse slots   ${verses}`)
  line(`  empty slots   ${blanks}`)
  line(`  dash-only     ${dash}`)
  line(`  on disk       ${mb(dirSize(dir))}`)
}

/* ---------------- commentary and study ---------------- */

line()
line('='.repeat(64))
line('COMMENTARY AND STUDY MATERIAL')
line('='.repeat(64))

// Matthew Henry
const henryDir = 'data/guide/henry'
const henryFiles = readdirSync(henryDir).filter((f) => f.endsWith('.json') && !f.includes('.am.'))
let hBooks = 0
let hChapters = 0
let hGroups = 0
let hMapped = 0
let hChars = 0
let hAm = 0
for (const f of henryFiles) {
  const b = JSON.parse(readFileSync(path.join(henryDir, f), 'utf8'))
  hBooks += 1
  hChapters += Object.keys(b).length
  for (const c of Object.values(b)) {
    hGroups += c.g?.length ?? 0
    hChars += (c.g ?? []).reduce((s, g) => s + (g.t?.length ?? 0), 0)
    hMapped += Object.values(c.m ?? {}).length
  }
  try {
    if (statSync(path.join(henryDir, f.replace('.json', '.am.json'))).size > 40) hAm += 1
  } catch {
    // not translated yet
  }
}
line()
line('Matthew Henry (English, per verse)')
line(`  books covered     ${hBooks} of 66`)
line(`  chapters          ${hChapters}`)
line(`  note blocks       ${hGroups}`)
line(`  verse mappings    ${hMapped.toLocaleString()}`)
line(`  total characters  ${hChars.toLocaleString()}`)
line(`  Amharic translated ${hAm} books`)

// Amharic commentary
const amC = JSON.parse(readFileSync('data/guide/amharic.json', 'utf8'))
line()
line('Amharic commentary (your imported book)')
line(`  title            ${amC.title} (${amC.titleEn})`)
line(`  source           ${amC.source}`)
line(`  method           ${amC.method}`)
const chapterKeys = Object.keys(amC.chapters ?? {})
let blocks = 0
let chars = 0
for (const v of Object.values(amC.chapters ?? {})) {
  if (Array.isArray(v)) {
    for (const b of v) {
      if (b && typeof b.text === 'string') { blocks += 1; chars += b.text.length }
    }
  }
}
line(`  chapters covered ${chapterKeys.length}`)
line(`  text blocks      ${blocks}`)
line(`  characters       ${chars.toLocaleString()}`)
line(`  printed pages    ${amC.pdfPages}`)
line(`  general essays   ${(amC.general ?? []).length}`)
line(`  books covered    ${Object.keys(amC.coverage ?? {}).length}`)
line(`  on disk          ${kb(statSync('data/guide/amharic.json').size)} + ${kb(statSync('data/guide/amharic-pages.json').size)} pages`)

const strongsMap = JSON.parse(readFileSync('data/guide/strongs.json', 'utf8'))
const strongsVals = Object.values(strongsMap)
const strongsAm = JSON.parse(readFileSync('data/guide/strongs.am.json', 'utf8'))
const heb = strongsVals.filter((e) => e.lang === 'heb').length
const grk = strongsVals.length - heb
let senses = 0
for (const e of strongsVals) senses += e.senses?.length ?? 0
line()
line("Strong's lexicon")
line(`  entries          ${strongsVals.length.toLocaleString()}  (${heb.toLocaleString()} Hebrew, ${grk.toLocaleString()} Greek)`)
line(`  numbered senses  ${senses.toLocaleString()}`)
line(`  Amharic done     ${Object.keys(strongsAm).length}`)
line(`  on disk          ${mb(statSync('data/guide/strongs.json').size)}`)
// Cross references
const cross = JSON.parse(readFileSync('data/guide/crossrefs.json', 'utf8'))
line()
line('Cross references')
line(`  verse keys       ${Object.keys(cross).length.toLocaleString()}`)
line(`  on disk          ${mb(statSync('data/guide/crossrefs.json').size)}`)

/* ---------------- gaps ---------------- */

line()
line('='.repeat(64))
line('WHERE THE AMHARIC TEXT FALLS SHORT')
line('='.repeat(64))

const amBooks = {}
for (const f of readdirSync('data/am/books')) {
  const b = JSON.parse(readFileSync(path.join('data/am/books', f), 'utf8'))
  amBooks[b.nr] = b
}
const kjvBooks = {}
for (const f of readdirSync('data/kjv/books')) {
  const b = JSON.parse(readFileSync(path.join('data/kjv/books', f), 'utf8'))
  kjvBooks[b.nr] = b
}

let shortChapters = 0
let fallbackChapters = []
let groupedTotal = 0
for (const nr of Object.keys(amBooks)) {
  const a = amBooks[nr]
  const k = kjvBooks[nr]
  const kb = new Map(k.chapters.map((c) => [c.c, c]))
  for (const c of a.chapters) {
    const kc = kb.get(c.c)
    if (!kc) continue
    const have = c.v.length
    const want = kc.v.length
    const textOf = (n) => String(c.v.find(([v]) => v === n)?.[1] ?? '').trim()
    for (let v = 1; v <= Math.max(want, have); v += 1) if (!textOf(v)) groupedTotal += 1
    if (have < want) shortChapters += 1
    if (c.fallback === true) fallbackChapters.push(`${a.name} ${c.c}`)
  }
}
line()
line(`  chapters with fewer Amharic verses than English  ${shortChapters}`)
line(`  English numbers with no Amharic text               ${groupedTotal}`)
line(`  chapters taken from the earlier edition            ${fallbackChapters.length}`)
for (const f of fallbackChapters) line(`      ${f}`)

/* ---------------- bundle ---------------- */

line()
line('='.repeat(64))
line('OFFLINE BUNDLE')
line('='.repeat(64))

let total = 0
let files = 0
function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else {
      total += statSync(p).size
      files += 1
    }
  }
}
walk('data')
line()
line(`  files            ${files}`)
line(`  total            ${mb(total)}`)
for (const d of ['am', 'am54', 'kjv', 'guide', 'raw']) {
  line(`    ${d.padEnd(12)} ${mb(dirSize(path.join('data', d)))}`)
}
