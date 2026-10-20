/**
 * Pre-renders every API response the reader can request into plain JSON files
 * that ship inside the Android app. The app then answers its own `fetch` calls
 * from these files, so the Bible and all commentary work with no server.
 *
 * The three search endpoints cannot be pre-rendered because their input is only
 * known at runtime, so the raw datasets are copied alongside and the client
 * searches them itself (see src/offline.ts).
 */
import { mkdir, readdir, rm, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const ROOT = 'C:/Users/bsd/Desktop/surp/bible'
const DATA = path.join(ROOT, 'data')
const OUT = path.join(ROOT, 'android-app/app/src/main/assets/public/api')

const readJSON = async (file) => JSON.parse(await readFile(file, 'utf8'))

// --- source data -------------------------------------------------------------

const index = await readJSON(path.join(DATA, 'index.json'))
const meta = {}
const books = {}

for (const t of index) {
  meta[t.id] = await readJSON(path.join(DATA, t.id, 'meta.json'))
  books[t.id] = {}
  const dir = path.join(DATA, t.id, 'books')
  for (const file of await readdir(dir)) {
    if (!file.endsWith('.json')) continue
    books[t.id][file.replace('.json', '')] = await readJSON(path.join(dir, file))
  }
}

const guide = {
  guide: await readJSON(path.join(DATA, 'guide', 'meta.json')),
  crossrefs: await readJSON(path.join(DATA, 'guide', 'crossrefs.json')),
  strongs: await readJSON(path.join(DATA, 'guide', 'strongs.json')),
  strongsAm: existsSync(path.join(DATA, 'guide', 'strongs.am.json'))
    ? await readJSON(path.join(DATA, 'guide', 'strongs.am.json'))
    : null,
  amharic: await readJSON(path.join(DATA, 'guide', 'amharic.json')),
}

// Matthew Henry is stored per book file.
const henry = {}
const henryDir = path.join(DATA, 'guide', 'henry')
for (const file of await readdir(henryDir)) {
  const name = file.replace('.json', '')
  henry[name] = await readJSON(path.join(henryDir, file))
}

// --- helpers ----------------------------------------------------------------

const BOOK_COUNT = 66
const slug = (value) => String(value).replace(/[^a-zA-Z0-9._-]/g, '_')

let files = 0
async function emit(relPath, value) {
  const target = path.join(OUT, relPath)
  await mkdir(path.dirname(target), { recursive: true })
  await writeFile(target, JSON.stringify(value), 'utf8')
  files += 1
}

// --- endpoints without runtime input ----------------------------------------

await emit('translations.json', index)

for (const t of index) {
  const m = meta[t.id]
  await emit(`books/${t.id}.json`, {
    translation: {
      id: m.id,
      name: m.name,
      lang: m.lang,
      language: m.language,
      direction: m.direction,
      credit: m.credit,
      complete: m.complete,
    },
    groups: m.groups ?? [],
    books: m.books.map((b) => ({
      nr: b.nr,
      name: b.name,
      group: b.group,
      testament: b.testament,
      chapters: b.chapters,
      verses: b.verses,
    })),
  })
}

// Chapters. The server lays verses out on the wider of the two numberings and
// lists grouped positions; the same logic is reproduced here so the app's data
// is identical to what the server sends.
function buildChapter(translation, bookNr, chapterNr) {
  const m = meta[translation]
  const info = m.books.find((b) => b.nr === bookNr)
  const raw = books[translation][String(bookNr).padStart(2, '0')]
  const found = raw?.chapters.find((c) => c.c === chapterNr)
  if (!info || !found) return null

  const english = books.kjv[String(bookNr).padStart(2, '0')]
  const englishChapter = english?.chapters.find((c) => c.c === chapterNr)
  const englishCount = englishChapter ? englishChapter.v.length : found.v.length

  const verses = found.v.map(([verse, text]) => ({ verse, text }))
  const present = new Set(verses.map((v) => v.verse))
  const slots = Math.max(found.v.length, englishCount)
  const grouped = []
  for (let i = 1; i <= slots; i += 1) if (!present.has(i)) grouped.push(i)

  const name = info.name
  return {
    translation: {
      id: m.id,
      name: m.name,
      lang: m.lang,
      language: m.language,
      credit: m.credit,
    },
    book: { nr: bookNr, name, group: info.group, testament: info.testament },
    chapter: chapterNr,
    verseCount: found.v.length,
    chapterCount: info.chapters,
    reference: `${name} ${chapterNr}`,
    englishVerses: englishCount,
    slots,
    grouped,
    verses,
    prev: null,
    next: null,
  }
}

// prev/next depend on the whole book ordering, so they are filled in after the
// chapter list is known.
for (const t of index) {
  for (const info of meta[t.id].books) {
    const chapterNumbers = (books[t.id][String(info.nr).padStart(2, '0')]?.chapters ?? []).map(
      (c) => c.c,
    )
    const ordered = [...chapterNumbers].sort((a, b) => a - b)
    for (const chapterNr of ordered) {
      const chapter = buildChapter(t.id, info.nr, chapterNr)
      if (!chapter) continue
      const flat = []
      for (const b of meta[t.id].books) {
        for (const c of (books[t.id][String(b.nr).padStart(2, '0')]?.chapters ?? [])) {
          flat.push({ book: b.nr, chapter: c.c })
        }
      }
      const at = flat.findIndex((f) => f.book === info.nr && f.chapter === chapterNr)
      chapter.prev = at > 0 ? flat[at - 1] : null
      chapter.next = at >= 0 && at < flat.length - 1 ? flat[at + 1] : null
      await emit(`chapter/${t.id}/${info.nr}/${chapterNr}.json`, chapter)
    }
  }
}

// English side-by-side columns.
for (const translation of index.map((t) => t.id)) {
  for (let book = 1; book <= BOOK_COUNT; book += 1) {
    const raw = books[translation][String(book).padStart(2, '0')]
    if (!raw) continue
    for (const c of raw.chapters) {
      await emit(`english/${translation}/${book}/${c.c}.json`, {
        book,
        chapter: c.c,
        translation,
        verses: c.v.map(([verse, text]) => ({ verse, text })),
      })
    }
  }
}

// Guide lists and index.
await emit('guide/index.json', { guides: guide.guide })

const amharicData = guide.amharic
const coverage = {}
for (const key of Object.keys(amharicData.chapters)) {
  const [book, chapter] = key.split('.').map(Number)
  if (!coverage[book]) coverage[book] = []
  coverage[book].push(chapter)
}
for (const list of Object.values(coverage)) list.sort((a, b) => a - b)
await emit('guide/amharic/coverage.json', { chapters: coverage })

const amBooks = []
for (const [book, chapters] of Object.entries(amharicData.coverage ?? {})) {
  const nr = Number(book)
  const name = meta.am.books.find((b) => b.nr === nr)?.name ?? String(nr)
  amBooks.push({ book: nr, name, chapters: [...chapters].sort((a, b) => a - b) })
}
amBooks.sort((a, b) => a.book - b.book)
await emit('guide/amharic/index.json', {
  title: amharicData.title,
  generalCount: (amharicData.general ?? []).length,
  generalSections: (amharicData.general ?? []).map((b, i) => ({
    label: `General section ${i + 1}`,
    pages: b.pages ?? [],
    preview: generalPreview(b, i),
  })),
  books: amBooks,
})

function generalPreview(block, index) {
  const body = block.text.replace(/\s+/g, ' ').trim()
  const label = block.heading ?? `General section ${index + 1}`
  return `${label} — ${body.slice(0, 160)}${body.length > 160 ? '…' : ''}`
}

for (const [key, blocks] of Object.entries(amharicData.chapters)) {
  const [book, chapter] = key.split('.').map(Number)
  await emit(`guide/amharic/chapter/${book}/${chapter}.json`, {
    title: amharicData.title,
    titleEn: amharicData.titleEn,
    method: amharicData.method,
    available: true,
    general: false,
    blocks: blocks.map((b) => ({ first: b.first, last: b.last, pages: b.pages, text: b.text })),
    covered: Object.keys(amharicData.chapters).length,
    coverage: amharicData.coverage?.[book] ?? [],
  })
}

await emit('guide/amharic/general.json', {
  title: amharicData.title,
  available: Boolean(amharicData.general?.length),
  general: true,
  blocks: (amharicData.general ?? []).map((b) => ({
    first: b.first,
    last: b.last,
    pages: b.pages ?? [],
    text: b.text,
  })),
  covered: Object.keys(amharicData.chapters).length,
})

// Per-verse commentary, mirroring the server's nearest-note fallback.
const namesAm = new Map(meta.am.books.map((b) => [b.nr, b.name]))
for (let book = 1; book <= BOOK_COUNT; book += 1) {
  const key = String(book).padStart(2, '0')
  const chapterData = henry[key]
  const chapterAm = henry[`${key}.am`]
  for (let chapter = 1; chapter <= 150; chapter += 1) {
    const data = chapterData?.[String(chapter)]
    if (!data && !chapterAm) continue
    const amChapter = chapterAm?.[String(chapter)] ?? null
    for (let verse = 1; verse <= 200; verse += 1) {
      let groupIndex = data?.m?.[String(verse)]
      let nearestVerse = null
      if (groupIndex === undefined && data?.m) {
        let best = Infinity
        for (const k of Object.keys(data.m)) {
          const candidate = Number(k)
          const distance = Math.abs(candidate - verse)
          if (distance < best) {
            best = distance
            groupIndex = data.m[k]
            nearestVerse = candidate
          }
        }
      }
      const group = groupIndex === undefined ? null : data.g[groupIndex]
      const links = (guide.crossrefs[`${book}.${chapter}.${verse}`] ?? []).map(
        ([b, c, from, to, votes]) => ({
          book: b,
          bookName: namesAm.get(b) ?? String(b),
          chapter: c,
          from,
          to,
          label: `${namesAm.get(b) ?? b} ${c}:${from}${to !== from ? `-${to}` : ''}`,
          votes,
        }),
      )
      if (!group && links.length === 0 && !amChapter) continue
      await emit(`guide/verse/${book}/${chapter}/${verse}.json`, {
        book,
        chapter,
        verse,
        commentary: group
          ? {
              heading: group.h,
              covers: group.v,
              text: group.t,
              exact: nearestVerse === null,
              nearestVerse,
              amharic: (amChapter ?? [])[groupIndex] || null,
            }
          : null,
        hasAmharicGuide: Boolean(chapterAm),
        crossrefs: links,
      })
    }
  }
}

// Raw datasets for the runtime searches.
await emit('raw/strongs.json', guide.strongs)
if (guide.strongsAm) await emit('raw/strongs.am.json', guide.strongsAm)
await emit('raw/amharic-pages.json', await readJSON(path.join(DATA, 'guide', 'amharic-pages.json')))
await emit('raw/amharic-chapters.json', amharicData.chapters)
await emit('raw/amharic-general.json', amharicData.general ?? [])

// A compact verse index for search: one line per verse per translation.
for (const t of index) {
  const rows = []
  for (const info of meta[t.id].books) {
    const raw = books[t.id][String(info.nr).padStart(2, '0')]
    for (const c of raw?.chapters ?? []) {
      for (const [verse, text] of c.v) {
        rows.push([info.nr, info.name, info.testament, c.c, verse, text])
      }
    }
  }
  await emit(`raw/search-${t.id}.json`, rows)
}

// Copy the commentary page text as individual files so the page picker works
// offline without loading a 6 MB document.
await rm(path.join(OUT, 'raw', 'pages'), { recursive: true, force: true })
let pageCount = 0
for (const file of (await readdir(path.join(DATA, 'guide'))).filter((f) =>
  f.startsWith('amharic-pages'),
)) {
  const pages = await readJSON(path.join(DATA, 'guide', file))
  for (const [page, text] of Object.entries(pages)) {
    await emit(`raw/pages/${page}.json`, { page: Number(page), text })
    pageCount += 1
  }
}

console.log(`api files written: ${files}`)
console.log(`page files: ${pageCount}`)
void slug