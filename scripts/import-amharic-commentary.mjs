#!/usr/bin/env node
// Builds data/guide/amharic.json from the OCR output in C:\Users\bsd\bible-ocr.
//
// The commentary is organised by book and chapter (running heads such as
// "የማቴዎስ ወንጌል 4"), not by verse, so it is stored per chapter. Each segment
// keeps the PDF page numbers it came from so the reader can be checked against
// the printed book.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OCR_DIR = 'C:/Users/bsd/bible-ocr/pages-text'
const OUT = path.join(ROOT, 'data', 'guide', 'amharic.json')
const PDF = 'C:/Users/bsd/Downloads/የአድስ ኪዳን ማብራሪያ.pdf'

// book name -> [numbers it may refer to]
const BOOKS = [
  ['ማቴዎስ', [40]],
  ['ማርቆስ', [41]],
  ['ሉቃስ', [42]],
  ['ዮሐንስ', [43, 62, 63, 64]],
  ['ሐዋርያት', [44]],
  ['ሮሜ', [45]],
  ['ቆሮንቶስ', [46, 47]],
  ['ገላትያ', [48]],
  ['ኤፌሶን', [49]],
  ['ፊልጵስዩስ', [50]],
  ['ቆላስይስ', [51]],
  ['ተሰሎንቄ', [52, 53]],
  ['ጢሞቴዎስ', [54, 55]],
  ['ቲቶ', [56]],
  ['ፊልሞና', [57]],
  ['እብራውያን', [58]],
  ['ያዕቆብ', [59]],
  ['ጴጥሮስ', [60, 61]],
  ['ይሁዳ', [65]],
  ['ራእይ', [66]],
]

// OCR often mangles the running head ("የማቴዎስ ወንጌል 4" -> "የማቴዎስ ወንጌሥ 4"),
// so book names are matched with a similarity window rather than exactly.
function fuzzyFind(line, name, threshold = 0.72) {
  if (line.includes(name)) return line.indexOf(name)
  for (let i = 0; i + name.length <= line.length; i += 1) {
    let same = 0
    for (let j = 0; j < name.length; j += 1) if (line[i + j] === name[j]) same += 1
    if (same / name.length >= threshold) return i
  }
  return -1
}

// The word that introduces a chapter in a running head: ወንጌል / መልእክት.
// OCR varies it, so accept anything close in length and shape.
const MARKER = /ወ[ንኒጥ]{1,2}[ገጊ]{1,2}ል|መልእክት|ወንግጊል/

function detectHead(pageText, { fuzzy = false } = {}) {
  const lines = pageText.split('\n').map((l) => l.trim()).filter(Boolean).slice(0, 6)

  for (const line of lines) {
    if (line.length > 45) continue
    const digitPrefix = /^\s*([123])\s*ኛ/.exec(line)
    const hasMarker = MARKER.test(line)

    for (const [name, numbers] of BOOKS) {
      const at = fuzzy ? fuzzyFind(line, name, 0.8) : line.indexOf(name)
      if (at === -1) continue
      // Fuzzy book names are only trusted when the line also carries the
      // "Gospel of ..." marker; chapter validity is checked separately below.
      if (fuzzy && !hasMarker && line.length > 26) continue

      let nr = numbers[0]
      if (numbers.length > 1) {
        nr = digitPrefix ? (numbers[Number(digitPrefix[1]) - 1] ?? numbers[0]) : numbers[0]
      }

      const after = line.slice(at + name.length)
      const m = /(?:ወ[ንኒጥ]{1,2}[ገጊ]{1,2}ል|መልእክት|ወንግጊል)?\s*(\d{1,3})/.exec(after)
      const chapter = m ? Number(m[1]) : null
      // A chapter number must exist in that book. This is the strongest guard
      // against OCR and fuzzy-match mistakes, so apply it to every pass.
      if (chapter === null || chapter < 1 || chapter > maxChapter(nr)) continue

      return { nr, name, chapter, head: line }
    }
  }
  return null
}

// Chapter counts come from the KJV metadata so validation is consistent.
const KJV_META = path.join(ROOT, 'data', 'kjv', 'meta.json')
const CHAPTER_COUNTS = new Map(
  existsSync(KJV_META)
    ? JSON.parse(readFileSync(KJV_META, 'utf8')).books.map((b) => [b.nr, b.chapters])
    : [],
)
const FALLBACK_MAX = 150

function maxChapter(nr) {
  return CHAPTER_COUNTS.get(nr) ?? FALLBACK_MAX
}

if (!existsSync(OCR_DIR)) {
  console.error(`OCR output missing: ${OCR_DIR}`)
  process.exit(1)
}

const segments = []
let carried = null
let carry = 0
let anchored = 0
const headByPage = new Map()

// Pass 1: exact book-name matches only. These are trustworthy.
// Pass 2: fuzzy matches, but only for pages pass 1 could not place.
for (let p = 1; p <= 659; p += 1) {
  const file = path.join(OCR_DIR, `${String(p).padStart(4, '0')}.txt`)
  if (!existsSync(file)) continue
  headByPage.set(p, detectHead(readFileSync(file, 'utf8')))
}
for (let p = 1; p <= 659; p += 1) {
  if (headByPage.get(p)) continue
  const file = path.join(OCR_DIR, `${String(p).padStart(4, '0')}.txt`)
  if (!existsSync(file)) continue
  headByPage.set(p, detectHead(readFileSync(file, 'utf8'), { fuzzy: true }))
}

// Only place a page when we actually read its running head. Guessing (even for
// a few pages) puts one book's commentary under another, which is worse than
// showing that some pages are unplaced.
const MAX_CARRY = 0

for (let p = 1; p <= 659; p += 1) {
  const file = path.join(OCR_DIR, `${String(p).padStart(4, '0')}.txt`)
  if (!existsSync(file)) continue
  const text = readFileSync(file, 'utf8')
  const head = headByPage.get(p)

  if (head) {
    anchored += 1
    carried = head
    carry = 0
  } else if (carried && carry < MAX_CARRY) {
    carry += 1
  } else {
    carried = null
    carry = 0
  }

  if (!carried) {
    // Front matter, word studies, and any run of pages we cannot place
    // confidently. Kept as general material rather than guessed at.
    segments.push({ pages: [p], text: text.trim() })
    continue
  }

  segments.push({
    book: carried.nr,
    chapter: carried.chapter,
    pages: [p],
    text: text.trim(),
  })
}

// Group consecutive pages of the same book/chapter into one segment.
const merged = []
for (const seg of segments) {
  const last = merged.at(-1)
  if (
    last &&
    seg.book &&
    last.book === seg.book &&
    last.chapter === seg.chapter &&
    last.pages.at(-1) === seg.pages[0] - 1
  ) {
    last.pages.push(...seg.pages)
    last.text += `\n${seg.text}`
  } else {
    merged.push({ ...seg, pages: [...seg.pages], text: seg.text })
  }
}

// Collect by book/chapter, keeping each block's page range.
const byChapter = new Map()
const general = []

for (const seg of merged) {
  if (!seg.book) {
    // Front matter, word studies and topic sections: real content, but not
    // tied to a single book/chapter. Keep it rather than dropping it.
    general.push({
      first: seg.pages[0],
      last: seg.pages.at(-1),
      pages: seg.pages,
      text: seg.text,
    })
    continue
  }
  const key = `${seg.book}.${seg.chapter}`
  if (!byChapter.has(key)) byChapter.set(key, [])
  byChapter.get(key).push({
    pages: seg.pages,
    first: seg.pages[0],
    last: seg.pages.at(-1),
    text: seg.text,
  })
}

// Merge the general blocks into contiguous runs.
const generalMerged = []
for (const block of general) {
  const last = generalMerged.at(-1)
  if (last && last.last === block.first - 1) {
    last.last = block.last
    last.pages.push(...block.pages)
    last.text += `\n${block.text}`
  } else {
    generalMerged.push({ ...block, pages: [...block.pages] })
  }
}

const coverage = {}
for (const key of byChapter.keys()) {
  const [book, chapter] = key.split('.').map(Number)
  if (!coverage[book]) coverage[book] = []
  coverage[book].push(chapter)
}
for (const list of Object.values(coverage)) list.sort((a, b) => a - b)

const output = {
  id: 'amharic-commentary',
  title: 'የአዲስ ኪዳን ማብራሪያ',
  titleEn: 'New Testament Commentary',
  lang: 'am',
  language: 'Amharic',
  source: 'OCR of a scanned print copy supplied by the reader',
  method: 'machine transcription (Tesseract amh) — verify against the printed book',
  pdfPages: 659,
  chapters: Object.fromEntries(byChapter),
  general: generalMerged,
  coverage,
}

mkdirSync(path.dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify(output))

const booksCovered = new Set(
  [...byChapter.entries()].map(([k]) => Number(k.split('.')[0])),
)
console.log(`running heads matched: ${anchored}/659`)
console.log(`segments: ${merged.length}`)
console.log(`chapters with commentary: ${byChapter.size}`)
console.log(`distinct books: ${booksCovered.size} -> ${[...booksCovered].sort((a, b) => a - b).join(', ')}`)
console.log(
  `general (untethered) blocks: ${generalMerged.length}, pages: ${generalMerged.reduce((n, b) => n + b.pages.length, 0)}`,
)
console.log(`written: ${OUT} (${(JSON.stringify(output).length / 1024 / 1024).toFixed(1)} MB)`)
console.log(`PDF for page links: ${PDF}`)

// Register the commentary in the guide catalogue so the reader lists it.
const metaPath = path.join(ROOT, 'data', 'guide', 'meta.json')
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : []
const entry = {
  id: 'amharic',
  name: 'የአዲስ ኪዳን ማብራሪያ',
  description: `Commentary by ${byChapter.size} chapters across ${booksCovered.size} New Testament books.`,
  author: 'printed commentary, machine transcribed',
  year: 0,
  lang: 'am',
  language: 'Amharic',
  license: 'Reader-supplied copy',
  credit: 'Your printed copy — transcribed with Tesseract, verify before relying on it',
  file: 'amharic.json',
}
const mergedMeta = [...meta.filter((g) => g.id !== 'amharic'), entry]
writeFileSync(metaPath, JSON.stringify(mergedMeta))
console.log(`catalogue updated: ${mergedMeta.map((g) => g.id).join(', ')}`)