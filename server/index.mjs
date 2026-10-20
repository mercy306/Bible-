import express from 'express'
import cors from 'cors'
import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'data')
const DIST = path.join(ROOT, 'dist')
const PORT = Number(process.env.PORT ?? 4001)

const GROUPS = [
  { id: 'pentateuch', name: 'The Pentateuch', from: 1, to: 5 },
  { id: 'historical', name: 'Historical Books', from: 6, to: 17 },
  { id: 'wisdom', name: 'Wisdom & Poetry', from: 18, to: 22 },
  { id: 'major-prophets', name: 'Major Prophets', from: 23, to: 27 },
  { id: 'minor-prophets', name: 'Minor Prophets', from: 28, to: 39 },
  { id: 'gospels', name: 'The Gospels & Acts', from: 40, to: 44 },
  { id: 'epistles', name: 'Epistles', from: 45, to: 65 },
  { id: 'apocalypse', name: 'Prophecy', from: 66, to: 66 },
]

const metaCache = new Map()
const bookCache = new Map()
const guideCache = new Map()

async function readJSON(file) {
  return JSON.parse(await readFile(file, 'utf8'))
}

// --- study / reference data (data/guide) ---

async function getGuideMeta() {
  const file = path.join(DATA, 'guide', 'meta.json')
  if (!existsSync(file)) return []
  return readJSON(file)
}

async function getGuideFile(name) {
  if (guideCache.has(name)) return guideCache.get(name)
  const file = path.join(DATA, 'guide', name)
  if (!existsSync(file)) return null
  const value = await readJSON(file)
  guideCache.set(name, value)
  return value
}

async function getHenryBook(bookNr, suffix = '') {
  const key = `henry${suffix}:${bookNr}`
  if (guideCache.has(key)) return guideCache.get(key)
  const file = path.join(
    DATA,
    'guide',
    'henry',
    `${String(bookNr).padStart(2, '0')}${suffix}.json`,
  )
  if (!existsSync(file)) return null
  const value = await readJSON(file)
  guideCache.set(key, value)
  return value
}

async function getIndex() {
  const file = path.join(DATA, 'index.json')
  if (!existsSync(file)) return []
  return readJSON(file)
}

// A printed edition marks a verse it has merged into its neighbour with a
// lone dash rather than leaving it empty. Showing that dash as scripture would
// read as an accident, so it is treated as missing text instead.
const PLACEHOLDER = /^[\s‐-―−\-–—.…⋯·*_]+$/

function isPlaceholder(text) {
  return typeof text !== 'string' || text.trim() === '' || PLACEHOLDER.test(text)
}

async function getMeta(translation) {
  if (metaCache.has(translation)) return metaCache.get(translation)
  const file = path.join(DATA, translation, 'meta.json')
  if (!existsSync(file)) return null
  const meta = await readJSON(file)
  metaCache.set(translation, meta)
  return meta
}

async function getBook(translation, nr) {
  const key = `${translation}/${nr}`
  if (bookCache.has(key)) return bookCache.get(key)
  const file = path.join(DATA, translation, 'books', `${String(nr).padStart(2, '0')}.json`)
  if (!existsSync(file)) return null
  const book = await readJSON(file)
  bookCache.set(key, book)
  return book
}

const app = express()
app.use(cors())

app.get('/api/translations', async (_req, res) => {
  res.json(await getIndex())
})

app.get('/api/books', async (req, res) => {
  const meta = await getMeta(String(req.query.translation ?? 'kjv'))
  if (!meta) return res.status(404).json({ error: 'Translation not downloaded. Run: npm run fetch' })
  res.json({
    translation: {
      id: meta.id,
      name: meta.name,
      lang: meta.lang,
      language: meta.language,
      direction: meta.direction,
      credit: meta.credit,
      complete: meta.complete,
    },
    groups: GROUPS,
    books: meta.books,
  })
})

app.get('/api/chapter', async (req, res) => {
  const translation = String(req.query.translation ?? 'kjv')
  const nr = Number(req.query.book)
  const chapter = Number(req.query.chapter)
  if (!Number.isInteger(nr) || !Number.isInteger(chapter)) {
    return res.status(400).json({ error: 'book and chapter are required' })
  }

  const meta = await getMeta(translation)
  if (!meta) return res.status(404).json({ error: 'Translation not downloaded' })

  const bookInfo = meta.books.find((b) => b.nr === nr)
  if (!bookInfo) return res.status(404).json({ error: `No book ${nr} in ${translation}` })

  const book = await getBook(translation, nr)
  const found = book?.chapters.find((c) => c.c === chapter)
  if (!found) {
    return res.status(404).json({ error: `${bookInfo.name} has no chapter ${chapter}` })
  }

  const totalChapters = book.chapters.length
  const prev = chapter > 1 ? { book: nr, chapter: chapter - 1 } : previousLocation(meta, nr)
  const next = chapter < totalChapters ? { book: nr, chapter: chapter + 1 } : nextLocation(meta, nr)

  // The English verse numbering is the reference grid. Some Amharic editions
  // absorb short clauses into the preceding verse, so a chapter can have fewer
  // slots than English numbers. Every English position is accounted for here so
  // the reader can show all of them rather than silently dropping the rest.
  const englishVerses = book.gaps?.[String(chapter)]?.want ?? found.v.length
  const present = new Set(found.v.map(([v]) => v))
  const grouped = []
  for (let v = 1; v <= englishVerses; v += 1) {
    const text = found.v.find(([n]) => n === v)?.[1]
    if (!present.has(v) || isPlaceholder(text)) grouped.push(v)
  }
  const slots = Math.max(englishVerses, found.v.length)

  res.json({
    translation: {
      id: meta.id,
      name: meta.name,
      lang: meta.lang,
      language: meta.language,
      credit: meta.credit,
    },
    book: { nr, name: bookInfo.name, group: bookInfo.group, testament: bookInfo.testament },
    chapter,
    verseCount: bookInfo.verses,
    chapterCount: totalChapters,
    reference: `${bookInfo.name} ${chapter}`,
    englishVerses,
    slots,
    grouped,
    verses: found.v.map(([v, text]) => ({ verse: v, text: isPlaceholder(text) ? '' : text })),
    prev,
    next,
    // Present when the source is known to be missing text for this chapter.
    gap: book.gaps?.[String(chapter)] ?? null,
    blankVerses: grouped.length,
    // Chapters the primary Amharic source does not carry are taken from the
    // earlier Ethiopian Bible Society edition.
    fallback: found.fallback === true,
  })
})

// English (KJV) text for a chapter, used to show what the reader is missing
// from a translation that groups verses together.
app.get('/api/english', async (req, res) => {
  const book = Number(req.query.book)
  const chapter = Number(req.query.chapter)
  const translation = String(req.query.translation ?? 'kjv')
  if (!Number.isInteger(book) || !Number.isInteger(chapter)) {
    return res.status(400).json({ error: 'book and chapter are required' })
  }

  const data = await getBook(translation, book)
  const found = data?.chapters.find((c) => c.c === chapter)
  if (!found) {
    const status = data ? 404 : 404
    return res.status(status).json({
      error: data ? `No chapter ${chapter}` : `${translation} not downloaded`,
    })
  }

  res.json({
    book,
    chapter,
    translation,
    verses: found.v.map(([v, text]) => ({ verse: v, text })),
  })
})

app.get('/api/search', async (req, res) => {
  const translation = String(req.query.translation ?? 'kjv')
  const query = String(req.query.q ?? '').trim().toLowerCase()
  const limit = Math.min(Number(req.query.limit ?? 50), 500)
  // Narrowing the search to one book or one testament makes it far quicker to
  // find the handful of verses actually wanted.
  const onlyBook = Number(req.query.book)
  const onlyTestament = String(req.query.testament ?? '')

  if (query.length < 2) return res.json({ query: '', total: 0, results: [] })

  const meta = await getMeta(translation)
  if (!meta) return res.status(404).json({ error: 'Translation not downloaded' })

  const results = []
  let total = 0

  const wanted =
    Number.isInteger(onlyBook) && onlyBook > 0
      ? meta.books.filter((b) => b.nr === onlyBook)
      : onlyTestament === 'OT' || onlyTestament === 'NT'
        ? meta.books.filter((b) => b.testament === onlyTestament)
        : meta.books

  for (const bookInfo of wanted) {
    const book = await getBook(translation, bookInfo.nr)
    if (!book) continue
    for (const chapter of book.chapters) {
      for (const [verse, text] of chapter.v) {
        const position = text.toLowerCase().indexOf(query)
        if (position === -1) continue
        total += 1
        if (results.length < limit) {
          results.push({
            book: bookInfo.nr,
            bookName: bookInfo.name,
            testament: bookInfo.testament,
            chapter: chapter.c,
            verse,
            reference: `${bookInfo.name} ${chapter.c}:${verse}`,
            text,
            snippet: snippet(text, position, query.length),
          })
        }
      }
    }
  }

  res.json({ query: req.query.q, total, results })
})

function snippet(text, position, length) {
  const start = Math.max(0, position - 40)
  const end = Math.min(text.length, position + length + 40)
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '')
}

function previousLocation(meta, nr) {
  const before = meta.books.filter((b) => b.nr < nr).pop()
  return before ? { book: before.nr, chapter: before.chapters } : null
}

function nextLocation(meta, nr) {
  const after = meta.books.find((b) => b.nr > nr)
  return after ? { book: after.nr, chapter: 1 } : null
}

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.get('/api/guide/amharic', async (req, res) => {
  const data = await getGuideFile('amharic.json')
  if (!data) return res.status(404).json({ error: 'Amharic commentary not imported yet' })

  const book = Number(req.query.book)
  const chapter = Number(req.query.chapter)
  const key = `${book}.${chapter}`
  const blocks = data.chapters[key]

  // Word studies, topic sections and the front matter are not tied to one
  // passage. They are opt-in, otherwise they appear under every chapter that
  // lacks commentary and read as if they belonged to that book.
  // This must be checked before the availability test below, otherwise a
  // chapter with no commentary returns "unavailable" for the general request
  // and the caller retries forever without ever reaching these notes.
  if (req.query.general === '1') {
    return res.json({
      title: data.title,
      available: Boolean(data.general?.length),
      general: true,
      blocks: data.general ?? [],
      covered: Object.keys(data.chapters).length,
      coverage: data.coverage?.[book] ?? [],
    })
  }

  if (!blocks) {
    return res.json({
      title: data.title,
      available: false,
      general: false,
      blocks: [],
      covered: Object.keys(data.chapters).length,
      coverage: data.coverage?.[book] ?? [],
      hasGeneral: Boolean(data.general?.length),
    })
  }

  res.json({
    title: data.title,
    titleEn: data.titleEn,
    method: data.method,
    available: true,
    general: false,
    blocks: blocks.map((b) => ({
      first: b.first,
      last: b.last,
      pages: b.pages,
      text: b.text,
    })),
    covered: Object.keys(data.chapters).length,
    coverage: data.coverage?.[book] ?? [],
  })
})

// Which chapters of a book have Amharic commentary, so the UI can flag gaps.
app.get('/api/guide/amharic/coverage', async (_req, res) => {
  const data = await getGuideFile('amharic.json')
  if (!data) return res.json({ chapters: {} })

  const chapters = {}
  for (const key of Object.keys(data.chapters)) {
    const [book, chapter] = key.split('.').map(Number)
    if (!chapters[book]) chapters[book] = []
    chapters[book].push(chapter)
  }
  for (const list of Object.values(chapters)) list.sort((a, b) => a - b)
  res.json({ chapters })
})

app.get('/api/guide', async (_req, res) => {
  const guides = await getGuideMeta()
  res.json({ guides })
})

// The OCR of the front matter is too poor for its opening lines to be trusted
// as headings, so show a short preview and the printed page range instead of
// inventing titles.
function generalPreview(block, index) {
  const body = block.text.replace(/\s+/g, ' ').trim()
  const label = block.heading ?? `General section ${index + 1}`
  return `${label} — ${body.slice(0, 160)}${body.length > 160 ? '…' : ''}`
}

// Full-text search across the imported Amharic commentary. The Bible text search
// only covers scripture, so without this there is no way to find where the
// commentary discusses a given word or topic.
app.get('/api/guide/amharic/search', async (req, res) => {
  const q = String(req.query.q ?? '').trim()
  if (q.length < 2) return res.json({ query: q, total: 0, results: [] })

  const data = await getGuideFile('amharic.json')
  if (!data) return res.json({ query: q, total: 0, results: [] })

  const meta = await getMeta('am')
  const names = meta ? new Map(meta.books.map((b) => [b.nr, b.name])) : null

  const needle = q.toLowerCase()
  const limit = Math.min(Number(req.query.limit ?? 80) || 80, 300)
  const results = []

  for (const [key, blocks] of Object.entries(data.chapters)) {
    const [book, chapter] = key.split('.').map(Number)
    for (const block of blocks) {
      const lower = block.text.toLowerCase()
      let from = 0
      for (;;) {
        const at = lower.indexOf(needle, from)
        if (at === -1) break
        const start = Math.max(0, at - 70)
        results.push({
          book,
          chapter,
          bookName: names?.get(book) ?? String(book),
          reference: `${names?.get(book) ?? book} ${chapter}:${block.first}`,
          pages: block.pages,
          general: false,
          snippet: `${start > 0 ? '…' : ''}${block.text.slice(start, at + q.length + 90).trim()}…`,
        })
        from = at + needle.length
        if (results.length >= limit * 3) break
      }
      if (results.length >= limit * 3) break
    }
  }

  // Front-matter word studies carry no chapter, so label them by their heading.
  for (const [i, block] of (data.general ?? []).entries()) {
    const lower = block.text.toLowerCase()
    const at = lower.indexOf(needle)
    if (at === -1) continue
    const start = Math.max(0, at - 70)
    results.push({
      book: 0,
      chapter: 0,
      bookName: data.title,
      reference: block.heading ?? `General section ${i + 1}`,
      pages: block.pages ?? [],
      general: true,
      snippet: `${start > 0 ? '…' : ''}${block.text.slice(start, at + q.length + 90).trim()}…`,
    })
  }

  res.json({ query: q, total: results.length, results: results.slice(0, limit) })
})

// One printed page of the commentary at a time. The imported blocks hold whole
// runs of text, so a block spanning 99 pages reads as one wall of text; this
// serves a single page so the reader can show just what was asked for.
app.get('/api/guide/amharic/page', async (req, res) => {
  const page = Number(req.query.page)
  if (!Number.isInteger(page) || page < 1) {
    return res.status(400).json({ error: 'page is required' })
  }

  const index = await getGuideFile('amharic-pages.json')
  if (!index) {
    return res.status(404).json({
      error: 'Page index not built. Run: npm run build:pages',
    })
  }

  const text = index[String(page)]
  if (!text) return res.status(404).json({ error: `Page ${page} has no text` })

  res.json({ page, text })
})

// Contents list for the Amharic book: which chapters it covers, the verse
// ranges, and where each block sits in the printed PDF.
app.get('/api/guide/amharic/index', async (_req, res) => {
  const data = await getGuideFile('amharic.json')
  if (!data) return res.status(404).json({ error: 'Amharic commentary not imported yet' })

  const meta = await getMeta('am')
  const names = meta ? new Map(meta.books.map((b) => [b.nr, b.name])) : null

  const books = []
  for (const [book, chapters] of Object.entries(data.coverage ?? {})) {
    const nr = Number(book)
    books.push({
      book: nr,
      name: names?.get(nr) ?? String(nr),
      chapters: [...chapters].sort((a, b) => a - b),
    })
  }
  books.sort((a, b) => a.book - b.book)

  res.json({
    title: data.title,
generalCount: (data.general ?? []).length,
    generalSections: (data.general ?? []).map((b, i) => ({
      label: `General section ${i + 1}`,
      pages: b.pages ?? [],
      preview: generalPreview(b, i),
    })),
    books,
  })
})

app.get('/api/guide/verse', async (req, res) => {
  const translation = String(req.query.translation ?? 'kjv')
  const book = Number(req.query.book)
  const chapter = Number(req.query.chapter)
  const verse = Number(req.query.verse)
  if (![book, chapter, verse].every(Number.isInteger)) {
    return res.status(400).json({ error: 'book, chapter and verse are required' })
  }

  const meta = await getMeta(translation)
  const names = meta ? new Map(meta.books.map((b) => [b.nr, b.name])) : null

  const [henry, henryAm, crossrefs] = await Promise.all([
    getHenryBook(book),
    getHenryBook(book, '.am'),
    getGuideFile('crossrefs.json'),
  ])

  const chapterData = henry?.[String(chapter)] ?? null
  const amChapter = henryAm?.[String(chapter)] ?? null
  const hasAmharic = Boolean(henryAm)

  // Henry writes commentary for grouped verse ranges and skips some verses
  // entirely. Rather than leave those blank, fall back to the nearest note he
  // did write in the same chapter and say which verse that was.
  let groupIndex = chapterData?.m?.[String(verse)]
  let nearestVerse = null

  if (groupIndex === undefined && chapterData?.m) {
    let bestDistance = Infinity
    for (const key of Object.keys(chapterData.m)) {
      const candidate = Number(key)
      const distance = Math.abs(candidate - verse)
      if (distance < bestDistance) {
        bestDistance = distance
        groupIndex = chapterData.m[key]
        nearestVerse = candidate
      }
    }
  }

  const group = groupIndex === undefined ? null : chapterData.g[groupIndex]

  const links = (crossrefs?.[`${book}.${chapter}.${verse}`] ?? []).map(([b, c, from, to, votes]) => ({
    book: b,
    bookName: names?.get(b) ?? String(b),
    chapter: c,
    from,
    to,
    label:
      names?.get(b) !== undefined
        ? `${names.get(b)} ${c}:${from}${to !== from ? `-${to}` : ''}`
        : `${b} ${c}:${from}${to !== from ? `-${to}` : ''}`,
    votes,
  }))

  res.json({
    book,
    chapter,
    verse,
    commentary: group
      ? {
          heading: group.h,
          covers: group.v,
          text: group.t,
          exact: nearestVerse === null,
          // Set when this is the closest note Henry wrote, not the verse itself.
          nearestVerse,
          // Machine translation of the same note, when available.
          amharic: (amChapter ?? [])[groupIndex] || null,
        }
      : null,
    hasAmharicGuide: hasAmharic,
    crossrefs: links,
  })
})

app.get('/api/guide/strongs', async (req, res) => {
  const entries = await getGuideFile('strongs.json')
  if (!entries) return res.status(404).json({ error: 'Strong’s not downloaded. Run: npm run fetch:guide' })
  const amEntries = await getGuideFile('strongs.am.json')

  const q = String(req.query.q ?? '').trim()
  const limit = Math.min(Number(req.query.limit ?? 40), 200)

  if (!q) {
    return res.json({ query: '', total: 0, results: [] })
  }

  const upper = q.toUpperCase()
  const isNumber = /^([GH])\s*-?\s*(\d{1,5})$/i.test(q)
  const results = []

  // Tapping a word in the English text asks for the Strong's entry behind it.
  // The word will not be the original language, so match it against the
  // English gloss instead.
  const isWordLookup = req.query.word === '1'
  const wanted = q.toLowerCase().replace(/[^a-z'-]/g, '')

  for (const [number, entry] of Object.entries(entries)) {
    let score = null
    if (isNumber) {
      if (number.toUpperCase() === `${upper[0]}${Number(upper.slice(1))}`) score = 0
    } else if (isWordLookup) {
      const glossWords = entry.kjv.toLowerCase().split(/[^a-z'-]+/).filter(Boolean)
      const isGlossExactly = entry.kjv.toLowerCase().replace(/[^a-z'-]/g, '') === wanted
      if (entry.word === q) score = 1
      else if (entry.translit?.toLowerCase() === wanted) score = 1
      else if (isGlossExactly) score = 2
      else if (glossWords.includes(wanted)) score = 3
      else if (entry.translit?.toLowerCase().startsWith(wanted)) score = 4
    } else if (entry.word === q) score = 1
    else if (entry.translit?.toLowerCase().startsWith(q.toLowerCase())) score = 2
    else if (entry.senses.some((s) => s.toLowerCase().includes(q.toLowerCase()))) score = 3
    if (score !== null) results.push({ number, ...entry, score })
  }

  results.sort((a, b) =>
    isWordLookup
      ? a.score - b.score ||
        a.kjv.split(/\s+/).length - b.kjv.split(/\s+/).length ||
        a.n - b.n
      : a.score - b.score || a.n - b.n,
  )
  const limitOut = isWordLookup ? Math.min(limit, 8) : limit
  res.json({
    query: q,
    total: results.length,
    hasAmharic: Boolean(amEntries),
    results: results.slice(0, limitOut).map(({ score, ...rest }) => {
      const am = amEntries?.[rest.number]
      return am
        ? { ...rest, sensesAmharic: am.senses, kjvAmharic: am.kjv, derivationAmharic: am.derivation }
        : rest
    }),
  })
})

if (existsSync(DIST)) {
  app.use(express.static(DIST))
  app.get(/.*/, (_req, res) => res.sendFile(path.join(DIST, 'index.html')))
}

app.listen(PORT, () => {
  console.log(`api  http://localhost:${PORT}`)
  if (!existsSync(DATA)) console.log('note: run "npm run fetch" to download Bible text')
})