/**
 * Serves the reader's data from inside the app package instead of from the
 * Express server, so the Android build works with no computer attached.
 *
 * `installOfflineApi()` wraps window.fetch. Requests for /api/... are answered
 * from the bundled JSON in `data/`, mirroring the server's response shapes
 * exactly so the interface needs no changes.
 *
 * On the desktop the real server is still used when it answers, and the bundled
 * copy is only a fallback, so one build serves both.
 */

type Json = Record<string, unknown>

/** One entry per translation, as listed in data/index.json. */
interface TranslationEntry {
  id: string
  name: string
  language: string
  lang: string
  direction: string
  complete: boolean
  books: number
}

interface BookInfo {
  nr: number
  name: string
  group: string
  testament: 'OT' | 'NT'
  chapters: number
  verses: number
}

/** One translation's metadata, from data/&lt;id&gt;/meta.json. */
interface Meta {
  id: string
  name: string
  lang: string
  language: string
  direction: string
  credit?: string
  complete: boolean
  groups: Json[]
  books: BookInfo[]
}

/**
 * The reading-order groups the sidebar uses. The server keeps the same list, so
 * both builds label the library identically.
 */
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

const cache = new Map<string, Promise<unknown>>()

async function load<T>(path: string): Promise<T> {
  let pending = cache.get(path)
  if (!pending) {
    pending = fetch(new URL(`data/${path}`, document.baseURI).href).then(async (res) => {
      if (!res.ok) throw new Error(`bundled data missing: ${path} (${res.status})`)
      if (typeof res.text !== 'function') return res.json()
      const body = await res.text()
      try {
        return JSON.parse(body)
      } catch {
        // Usually a server error page or the app shell being served instead of
        // the data file. Say so rather than failing as a parse error.
        throw new Error(`bundled data unreadable: ${path} (${body.slice(0, 40)})`)
      }
    })
    // A failed read must not be cached, or every later attempt fails the same
    // way even after the underlying problem clears.
    pending.catch(() => cache.delete(path))
    cache.set(path, pending)
  }
  return pending as Promise<T>
}

const index = () => load<TranslationEntry[]>('index.json')
const meta = (id: string) => load<Meta>(`${id}/meta.json`)

/** Book names from every bundled translation, so labels follow what is read. */
async function bookNames(): Promise<Map<number, string>> {
  const list = await index()
  const names = new Map<number, string>()
  for (const entry of list) {
    try {
      const m = await meta(entry.id)
      for (const b of m.books) if (!names.has(b.nr)) names.set(b.nr, b.name)
    } catch {
      // A translation that is not bundled simply contributes no names.
    }
  }
  return names
}

interface RawBook {
  chapters: { c: number; v: [number, string][]; fallback?: boolean }[]
  gaps?: Record<string, { have: number; want: number; blank: number }>
}

const bookKey = (nr: number) => String(nr).padStart(2, '0')

// Mirrors the server. A printed edition marks a verse it has merged into its
// neighbour with a lone dash rather than leaving it empty.
const PLACEHOLDER = /^[\s‐-―−\-–—.…⋯·*_]+$/

function isPlaceholder(text: unknown): boolean {
  return typeof text !== 'string' || text.trim() === '' || PLACEHOLDER.test(text)
}

/** Chapter order across the whole Bible, for prev/next at book boundaries. */
async function flatOrder(m: Meta) {
  const order: { book: number; chapter: number }[] = []
  for (const info of m.books) {
    const raw = await load<RawBook>(`${m.id}/books/${bookKey(info.nr)}.json`).catch(() => null)
    for (const c of raw?.chapters ?? []) order.push({ book: info.nr, chapter: c.c })
  }
  return order
}

// --- endpoints ---------------------------------------------------------------

async function translations() {
  return index()
}

async function books(translation: string) {
  const m = await meta(translation).catch(() => null)
  if (!m) throw new HttpError(404, `Translation not downloaded: ${translation}`)
  return {
    translation: {
      id: m.id,
      name: m.name,
      lang: m.lang,
      language: m.language,
      direction: m.direction,
      credit: m.credit,
      complete: m.complete,
    },
    groups: GROUPS,
    // Passed through unchanged so fields like gapChapters survive.
    books: m.books,
  }
}

async function chapter(translation: string, bookNr: number, chapterNr: number) {
  const m = await meta(translation).catch(() => null)
  if (!m) throw new HttpError(404, 'Translation not downloaded')
  const info = m.books.find((b) => b.nr === bookNr)
  if (!info) throw new HttpError(404, `No book ${bookNr} in ${translation}`)

  const raw = await load<RawBook>(`${translation}/books/${bookKey(bookNr)}.json`)
  const found = raw.chapters.find((c) => c.c === chapterNr)
  if (!found) throw new HttpError(404, `${info.name} has no chapter ${chapterNr}`)

  const totalChapters = raw.chapters.length
  const order = await flatOrder(m)
  const at = order.findIndex((p) => p.book === bookNr && p.chapter === chapterNr)
  const prev =
    chapterNr > 1
      ? { book: bookNr, chapter: chapterNr - 1 }
      : at > 0
        ? order[at - 1]
        : null
  const next =
    chapterNr < totalChapters
      ? { book: bookNr, chapter: chapterNr + 1 }
      : at >= 0 && at < order.length - 1
        ? order[at + 1]
        : null

  // Mirrors the server: English numbering is the grid, and any position the
  // translation does not carry separately is listed rather than dropped.
  const englishVerses = raw.gaps?.[String(chapterNr)]?.want ?? found.v.length
  const present = new Set(found.v.map(([v]) => v))
  const grouped: number[] = []
  for (let v = 1; v <= englishVerses; v += 1) {
    const text = found.v.find(([n]) => n === v)?.[1]
    if (!present.has(v) || isPlaceholder(text)) grouped.push(v)
  }
  const slots = Math.max(englishVerses, found.v.length)

  return {
    translation: {
      id: m.id,
      name: m.name,
      lang: m.lang,
      language: m.language,
      credit: m.credit,
    },
    book: { nr: bookNr, name: info.name, group: info.group, testament: info.testament },
    chapter: chapterNr,
    verseCount: info.verses,
    chapterCount: totalChapters,
    reference: `${info.name} ${chapterNr}`,
    englishVerses,
    slots,
    grouped,
    verses: found.v.map(([verse, text]) => ({ verse, text: isPlaceholder(text) ? '' : text })),
    prev,
    next,
    gap: raw.gaps?.[String(chapterNr)] ?? null,
    blankVerses: grouped.length,
    fallback: found.fallback === true,
  }
}

async function english(bookNr: number, chapterNr: number, translation: string) {
  const raw = await load<RawBook>(`${translation}/books/${bookKey(bookNr)}.json`)
  const found = raw.chapters.find((c) => c.c === chapterNr)
  if (!found) throw new HttpError(404, `No chapter ${chapterNr}`)
  return {
    book: bookNr,
    chapter: chapterNr,
    translation,
    verses: found.v.map(([verse, text]) => ({ verse, text })),
  }
}

interface SearchRow extends Array<number | string> {
  0: number
  1: string
  2: 'OT' | 'NT'
  3: number
  4: number
  5: string
}

async function search(
  translation: string,
  query: string,
  testament: string,
  onlyBook: number,
) {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return { query, total: 0, results: [] }

  const rows = await load<SearchRow[]>(`raw/search-${translation}.json`)
  const limit = 200
  let total = 0
  const results: Json[] = []

  for (const row of rows) {
    const [book, bookName, test, chap, verse, text] = row
    if (testament === 'OT' || testament === 'NT') {
      if (test !== testament) continue
    }
    if (onlyBook > 0 && book !== onlyBook) continue
    const lower = text.toLowerCase()
    const position = lower.indexOf(needle)
    if (position === -1) continue
    total += 1
    if (results.length >= limit) continue
    results.push({
      book,
      bookName,
      testament: test,
      chapter: chap,
      verse,
      reference: `${bookName} ${chap}:${verse}`,
      text,
      snippet: snippet(text, position, needle.length),
    })
  }
  return { query, total, results }
}

function snippet(text: string, position: number, length: number) {
  const start = Math.max(0, position - 45)
  const end = Math.min(text.length, position + length + 65)
  return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${end < text.length ? '…' : ''}`
}

async function guideList() {
  // The file is a bare array; the server wraps it so the shape matches.
  return { guides: await load<Json[]>('guide/meta.json') }
}

interface HenryData {
  [chapter: string]: { m: Record<string, number>; g: { h: string; v: number[]; t: string }[] }
}

/** The Amharic translation of Henry's notes, which are plain strings. */
type HenryAm = Record<string, string[]>

async function guideVerse(
  translation: string,
  bookNr: number,
  chapterNr: number,
  verse: number,
) {
  const key = bookKey(bookNr)
  const [names, henry, henryAm, crossrefs] = await Promise.all([
    bookNames(),
    load<HenryData>(`guide/henry/${key}.json`).catch(() => null),
    load<HenryAm>(`guide/henry/${key}.am.json`).catch(() => null),
    load<Record<string, [number, number, number, number, number][]>>('guide/crossrefs.json'),
  ])

  const chapterData = henry?.[String(chapterNr)] ?? null
  const amChapter = henryAm?.[String(chapterNr)] ?? null

  let groupIndex = chapterData?.m?.[String(verse)]
  let nearestVerse: number | null = null
  if (groupIndex === undefined && chapterData?.m) {
    let best = Infinity
    for (const k of Object.keys(chapterData.m)) {
      const candidate = Number(k)
      const distance = Math.abs(candidate - verse)
      if (distance < best) {
        best = distance
        groupIndex = chapterData.m[k]
        nearestVerse = candidate
      }
    }
  }
  const group = groupIndex === undefined ? null : chapterData!.g[groupIndex]

  const links = (crossrefs?.[`${bookNr}.${chapterNr}.${verse}`] ?? []).map(
    ([b, c, from, to, votes]) => ({
      book: b,
      bookName: names.get(b) ?? String(b),
      chapter: c,
      from,
      to,
      label: `${names.get(b) ?? b} ${c}:${from}${to !== from ? `-${to}` : ''}`,
      votes,
    }),
  )

  return {
    book: bookNr,
    chapter: chapterNr,
    verse,
    commentary: group
      ? {
          heading: group.h,
          covers: group.v,
          text: group.t,
          exact: nearestVerse === null,
          nearestVerse,
          amharic: (amChapter ?? [])[groupIndex!] || null,
        }
      : null,
    hasAmharicGuide: Boolean(henryAm),
    crossrefs: links,
  }
  void translation
}

interface AmharicData {
  title: string
  titleEn?: string
  method?: string
  chapters: Record<string, { first: number; last: number; pages: number[]; text: string }[]>
  general?: { first: number; last: number; pages: number[]; text: string }[]
  coverage?: Record<string, number[]>
}

const amharicData = () => load<AmharicData>('guide/amharic.json')

async function amharicChapter(bookNr: number, chapterNr: number, wantGeneral: boolean) {
  const data = await amharicData()
  const key = `${bookNr}.${chapterNr}`
  const blocks = data.chapters[key]
  const covered = Object.keys(data.chapters).length

  if (wantGeneral) {
    return {
      title: data.title,
      available: Boolean(data.general?.length),
      general: true,
      blocks: (data.general ?? []).map((b) => ({
        first: b.first,
        last: b.last,
        pages: b.pages ?? [],
        text: b.text,
      })),
      covered,
      coverage: data.coverage?.[bookNr] ?? [],
    }
  }

  if (!blocks) {
    return {
      title: data.title,
      available: false,
      general: false,
      blocks: [],
      covered,
      coverage: data.coverage?.[bookNr] ?? [],
      hasGeneral: Boolean(data.general?.length),
    }
  }

  return {
    title: data.title,
    titleEn: data.titleEn,
    method: data.method,
    available: true,
    general: false,
    blocks: blocks.map((b) => ({ first: b.first, last: b.last, pages: b.pages, text: b.text })),
    covered,
    coverage: data.coverage?.[bookNr] ?? [],
  }
}

async function amharicPage(page: number) {
  const pages = await load<Record<string, string>>('guide/amharic-pages.json')
  const text = pages[String(page)]
  if (!text) throw new HttpError(404, `Page ${page} has no text`)
  return { page, text }
}

async function commentarySearch(query: string) {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return { query, total: 0, results: [] }

  const [data, names] = await Promise.all([amharicData(), bookNames()])
  const limit = 80
  const results: Json[] = []
  // The server stops collecting once it has three screens of chapter hits, then
  // adds every front-matter section that mentions the word. Its reported total
  // is simply how many hits it collected, so the same rule is applied here.
  const chapterCap = limit * 3

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
          bookName: names.get(book) ?? String(book),
          reference: `${names.get(book) ?? book} ${chapter}:${block.first}`,
          pages: block.pages ?? [],
          general: false,
          snippet: `${start > 0 ? '…' : ''}${block.text
            .slice(start, at + needle.length + 90)
            .trim()}…`,
        })
        from = at + needle.length
        if (results.length >= chapterCap) break
      }
      // Once the cap is reached this stops collecting repeats, but later blocks
      // that mention the word still contribute one hit each, which is what the
      // server's reported total reflects.
      if (results.length >= chapterCap) continue
    }
  }

  ;(data.general ?? []).forEach((block, i) => {
    const at = block.text.toLowerCase().indexOf(needle)
    if (at === -1) return
    const start = Math.max(0, at - 70)
    results.push({
      book: 0,
      chapter: 0,
      bookName: data.title,
      reference: `General section ${i + 1}`,
      pages: block.pages ?? [],
      general: true,
      snippet: `${start > 0 ? '…' : ''}${block.text.slice(start, at + needle.length + 90).trim()}…`,
    })
  })

  return { query, total: results.length, results: results.slice(0, limit) }
}

function generalPreview(block: { text: string }, index: number) {
  const body = block.text.replace(/\s+/g, ' ').trim()
  const label = `General section ${index + 1}`
  return `${label} — ${body.slice(0, 160)}${body.length > 160 ? '…' : ''}`
}

async function amharicIndex() {
  const [data, names] = await Promise.all([amharicData(), bookNames()])

  const books = Object.entries(data.coverage ?? {}).map(([book, chapters]) => {
    const nr = Number(book)
    return { book: nr, name: names.get(nr) ?? String(nr), chapters: [...chapters].sort((a, b) => a - b) }
  })
  books.sort((a, b) => a.book - b.book)

  return {
    title: data.title,
    generalCount: (data.general ?? []).length,
    generalSections: (data.general ?? []).map((b, i) => ({
      label: `General section ${i + 1}`,
      pages: b.pages ?? [],
      preview: generalPreview(b, i),
    })),
    books,
  }
}

async function amharicCoverage() {
  const data = await amharicData()
  const chapters: Record<string, number[]> = {}
  for (const key of Object.keys(data.chapters)) {
    const [book, chapter] = key.split('.').map(Number)
    if (!chapters[book]) chapters[book] = []
    chapters[book].push(chapter)
  }
  for (const list of Object.values(chapters)) list.sort((a, b) => a - b)
  return { chapters }
}

interface StrongsEntry {
  n: number
  lang: 'grk' | 'heb'
  word: string
  translit: string
  senses: string[]
  kjv: string
  derivation: string
  sensesAmharic?: string
}

async function strongs(query: string, isWordLookup: boolean) {
  if (!query) return { query, total: 0, results: [] }
  const [entries, amEntries] = await Promise.all([
    load<Record<string, StrongsEntry>>('guide/strongs.json'),
    load<Record<string, { senses: string; kjv: string; derivation: string }>>(
      'guide/strongs.am.json',
    ).catch(() => null),
  ])

  const upper = query.toUpperCase()
  const isNumber = /^([GH])\s*-?\s*(\d{1,5})$/i.test(query)
  const wanted = query.toLowerCase().replace(/[^a-z'-]/g, '')
  const scored: { entry: StrongsEntry; number: string; score: number }[] = []

  for (const [number, entry] of Object.entries(entries)) {
    let score: number | null = null
    if (isNumber) {
      if (number.toUpperCase() === `${upper[0]}${Number(upper.slice(1))}`) score = 0
    } else if (isWordLookup) {
      const glossWords = entry.kjv.toLowerCase().split(/[^a-z'-]+/).filter(Boolean)
      const exactGloss = entry.kjv.toLowerCase().replace(/[^a-z'-]/g, '') === wanted
      if (entry.word === query) score = 1
      else if (entry.translit?.toLowerCase() === wanted) score = 1
      else if (exactGloss) score = 2
      else if (glossWords.includes(wanted)) score = 3
      else if (entry.translit?.toLowerCase().startsWith(wanted)) score = 4
    } else if (entry.word === query) score = 1
    else if (entry.translit?.toLowerCase().startsWith(query.toLowerCase())) score = 2
    else if (entry.senses.some((s) => s.toLowerCase().includes(query.toLowerCase()))) score = 3
    if (score !== null) scored.push({ entry, number, score })
  }

  scored.sort((a, b) =>
    isWordLookup
      ? a.score - b.score ||
        a.entry.kjv.split(/\s+/).length - b.entry.kjv.split(/\s+/).length ||
        a.entry.n - b.entry.n
      : a.score - b.score || a.entry.n - b.entry.n,
  )

  const limit = isWordLookup ? 8 : 40
  return {
    query,
    total: scored.length,
    hasAmharic: Boolean(amEntries),
    results: scored.slice(0, limit).map(({ entry, number }) => {
      const am = amEntries?.[number]
      return am
        ? { ...entry, number, sensesAmharic: am.senses, kjvAmharic: am.kjv, derivationAmharic: am.derivation }
        : { ...entry, number }
    }),
  }
}

// --- dispatch ----------------------------------------------------------------

class HttpError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

async function handle(url: string): Promise<unknown> {
  const parsed = new URL(url, 'http://local')
  const p = parsed.searchParams
  const num = (name: string, fallback = 0) => Number(p.get(name) ?? fallback)

  const path = parsed.pathname

  if (path === '/api/translations') return translations()
  if (path === '/api/books') return books(p.get('translation') ?? 'kjv')
  if (path === '/api/chapter') return chapter(p.get('translation') ?? 'kjv', num('book'), num('chapter'))
  if (path === '/api/english') return english(num('book'), num('chapter'), p.get('translation') ?? 'kjv')
  if (path === '/api/search')
    return search(p.get('translation') ?? 'kjv', p.get('q') ?? '', p.get('testament') ?? '', num('book'))
  if (path === '/api/guide') return guideList()
  if (path === '/api/guide/verse')
    return guideVerse(p.get('translation') ?? 'kjv', num('book'), num('chapter'), num('verse'))
  if (path === '/api/guide/amharic')
    return amharicChapter(num('book'), num('chapter'), p.get('general') === '1')
  if (path === '/api/guide/amharic/page') return amharicPage(num('page'))
  if (path === '/api/guide/amharic/search') return commentarySearch(p.get('q') ?? '')
  if (path === '/api/guide/amharic/index') return amharicIndex()
  if (path === '/api/guide/amharic/coverage') return amharicCoverage()
  if (path === '/api/guide/strongs') return strongs(p.get('q') ?? '', p.get('word') === '1')

  throw new HttpError(404, `No offline handler for ${path}`)
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

/**
 * Installs the bundled data layer, but only inside the Android package.
 *
 * On the desktop and over the network the Express server answers, so touching
 * the bundled copy there would only waste requests. Inside the app there is no
 * server at all, so every /api/... request is served from the package instead.
 */
let installed = false

export function installOfflineApi() {
  if (installed) return

  const scope: typeof globalThis =
    typeof window !== 'undefined' && typeof window.fetch === 'function' ? window : globalThis
  if (typeof scope.fetch !== 'function') return

  installed = true

  const native = Boolean((scope as any).Capacitor?.isNativePlatform?.())

  const original = scope.fetch.bind(scope)

  /** The reader's own data, from the files shipped with the app. */
  async function fromBundled(url: string) {
    try {
      return jsonResponse(await handle(url))
    } catch (error) {
      if (error instanceof HttpError) return jsonResponse({ error: error.message }, error.status)
      throw error
    }
  }

  async function fromNetwork(input: RequestInfo | URL, init?: RequestInit) {
    const res = await original(input as RequestInfo, init)
    if (!res.ok && (res.status === 502 || res.status === 503 || res.status === 504)) {
      throw new Error(`Server unavailable (${res.status})`)
    }
    return res
  }

  scope.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url

    // Only the reader's own endpoints are handled here; app assets and any
    // future real endpoint pass straight through.
    if (!url.includes('/api/')) return original(input as RequestInfo, init)

    // Inside the package there is no server at all, so the bundled files are
    // the only source. Elsewhere the server is asked first, but if it cannot
    // be reached the same bundled files answer instead, so the reader keeps
    // working rather than failing with a bare network error.
    const first = native ? fromBundled(url) : fromNetwork(input, init)
    try {
      return await first
    } catch {
      try {
        return native ? await fromNetwork(input, init) : await fromBundled(url)
      } catch {
        return jsonResponse({ error: 'This data is not available offline.' }, 503)
      }
    }
  }
}