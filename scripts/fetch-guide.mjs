#!/usr/bin/env node
// Downloads study / reference material into data/guide/.
//
//   node scripts/fetch-guide.mjs                  # everything
//   node scripts/fetch-guide.mjs crossrefs        # one dataset
//   node scripts/fetch-guide.mjs strongs henry
//   node scripts/fetch-guide.mjs --list
//
// Cross-references : Scrollmapper/bible_databases (openbible.info, CC-BY 2024)
// Strong's        : taylorwaddell/strongs-concordance (public domain, 1890)
// Matthew Henry   : lyteword/mhenry-complete (public domain, 1706-1710)

import { mkdir, writeFile, readdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const GUIDE = path.join(ROOT, 'data', 'guide')

const CROSSREFS_URL =
  'https://raw.githubusercontent.com/Scrollmapper/bible_databases/master/sources/extras/cross_references.txt'
const GREEK_URL =
  'https://raw.githubusercontent.com/taylorwaddell/strongs-concordance/master/greek/StrongsGreekDictionaryXML_1.4/strongsgreek.xml'
const HEBREW_URL =
  'https://raw.githubusercontent.com/taylorwaddell/strongs-concordance/master/hebrew/StrongHebrewG.xml'
const MHENRY_RAW = 'https://raw.githubusercontent.com/lyteword/mhenry-complete/main/'

const CONCURRENCY = 10
const MAX_XREFS_PER_VERSE = 60

// Standard openbible abbreviations, canonical order — index + 1 = book number.
const BOOK_ABBR = [
  'Gen', 'Exod', 'Lev', 'Num', 'Deut', 'Josh', 'Judg', 'Ruth', '1Sam', '2Sam', '1Kgs', '2Kgs',
  '1Chr', '2Chr', 'Ezra', 'Neh', 'Esth', 'Job', 'Ps', 'Prov', 'Eccl', 'Song', 'Isa', 'Jer', 'Lam',
  'Ezek', 'Dan', 'Hos', 'Joel', 'Amos', 'Obad', 'Jonah', 'Mic', 'Nah', 'Hab', 'Zeph', 'Hag',
  'Zech', 'Mal', 'Matt', 'Mark', 'Luke', 'John', 'Acts', 'Rom', '1Cor', '2Cor', 'Gal', 'Eph',
  'Phil', 'Col', '1Thess', '2Thess', '1Tim', '2Tim', 'Titus', 'Phlm', 'Heb', 'Jas', '1Pet',
  '2Pet', '1John', '2John', '3John', 'Jude', 'Rev',
]
const BOOK_NR = new Map(BOOK_ABBR.map((abbr, i) => [abbr, i + 1]))

const SUPERSCRIPTS = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
}

function clean(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\\([.,;:])/g, '$1')
    .replace(/\s+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

// Lexicon fields are prose fragments, not paragraphs — collapse every run of
// whitespace to a single space and drop stubs left behind by stripped tags
// (Strong's derivation renders as "from  ;" once <strongsref> is removed).
function flat(text) {
  const value = text.replace(/\s+/g, ' ').trim()
  if (/^(from|of|see also)?\s*[;,.]*$/i.test(value)) return ''
  return value.replace(/\s+([;,])/g, '$1').trim()
}

function unsuperscript(token) {
  return [...token].map((c) => SUPERSCRIPTS[c] ?? c).join('')
}

async function text(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'bible-66-fetcher' } })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.text()
}

// Same as text() but a 404 yields null instead of throwing — the Henry source
// legitimately omits some chapters.
async function softText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'bible-66-fetcher' } })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.text()
}

async function pool(items, worker) {
  const queue = [...items]
  const runners = Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    while (queue.length > 0) {
      const item = queue.shift()
      try {
        await worker(item)
      } catch (error) {
        console.log(`  ! ${item}: ${error.message}`)
      }
    }
  })
  await Promise.all(runners)
}

/* ---------------- cross references ---------------- */

function parseRef(value) {
  const m = /^([0-9]*[A-Za-z]+)\.(\d+)\.(\d+)$/.exec(value)
  if (!m) return null
  const book = BOOK_NR.get(m[1])
  if (!book) return null
  return [book, Number(m[2]), Number(m[3])]
}

function parseTarget(value) {
  const single = parseRef(value)
  if (single) return [single[0], single[1], single[2], single[2]]
  const range = /^([0-9]*[A-Za-z]+)\.(\d+)\.(\d+)-(\d+)$/.exec(value)
  if (!range) return null
  const book = BOOK_NR.get(range[1])
  if (!book) return null
  return [book, Number(range[2]), Number(range[3]), Number(range[4])]
}

async function fetchCrossrefs() {
  console.log('cross-references (openbible.info, CC-BY) …')
  const raw = await text(CROSSREFS_URL)
  const map = {}
  let rows = 0

  for (const line of raw.split('\n').slice(1)) {
    if (!line.trim()) continue
    const [from, to, votes] = line.split('\t')
    const source = parseRef(from)
    const targets = to.split(',').map((t) => parseTarget(t.trim())).filter(Boolean)
    if (!source || targets.length === 0) continue
    const key = source.join('.')
    const weight = Number(votes) || 0
    const list = (map[key] ??= [])
    for (const t of targets) list.push([...t, weight])
    rows += targets.length
  }

  for (const key of Object.keys(map)) {
    map[key].sort((a, b) => b[4] - a[4])
    map[key] = map[key].slice(0, MAX_XREFS_PER_VERSE)
  }

  const file = path.join(GUIDE, 'crossrefs.json')
  if (existsSync(file) && Object.keys(map).length === 0) {
    console.log('  no references parsed, keeping existing file')
    return
  }
  await writeFile(file, JSON.stringify(map))
  console.log(
    `  ${Object.keys(map).length} verses, ${rows} links → ${path.relative(ROOT, file)}`,
  )
}

/* ---------------- strong's ---------------- */

// Strips markup. strongsref elements carry the root word's number, which is the
// point of a derivation line, so they are turned back into readable numbers.
function xmlText(fragment, refPrefix = '') {
  const withRefs = refPrefix
    ? fragment.replace(/<strongsref\b[^>]*strongs="(\d+)"[^>]*\/?>/g, (_m, n) => `${refPrefix}${n}`)
    : fragment
  return clean(withRefs.replace(/<[^>]+>/g, ' '))
}

function attr(tag, name) {
  const m = new RegExp(`${name}="([^"]*)"`).exec(tag)
  return m ? m[1] : ''
}

async function fetchGreek() {
  console.log('strong’s — greek …')
  const xml = await text(GREEK_URL)
  const entries = {}
  const blocks = xml.split('<entry strongs="').slice(1)

  for (const block of blocks) {
    const num = /^(\d+)/.exec(block)?.[1]
    if (!num) continue
    const greek = /<greek\b[^>]*\/>/.exec(block)?.[0] ?? ''
    const word = attr(greek, 'unicode')
    const translit = attr(greek, 'translit')
    const pronunciation = /<pronunciation[^>]*strongs="([^"]*)"/.exec(block)?.[1] ?? ''
    const def = flat(xmlText(/<strongs_def>([\s\S]*?)<\/strongs_def>/.exec(block)?.[1] ?? '', 'G'))
    const derivation = flat(
      xmlText(/<strongs_derivation>([\s\S]*?)<\/strongs_derivation>/.exec(block)?.[1] ?? '', 'G'),
    )
    const kjv = flat(xmlText(/<kjv_def>([\s\S]*?)<\/kjv_def>/.exec(block)?.[1] ?? '', 'G'))

    entries[`G${Number(num)}`] = {
      n: Number(num),
      lang: 'grk',
      word,
      translit,
      pronunciation,
      senses: def ? [def] : [],
      derivation,
      kjv,
    }
  }

  console.log(`  ${Object.keys(entries).length} greek entries`)
  return entries
}

async function fetchHebrew() {
  console.log('strong’s — hebrew …')
  const xml = await text(HEBREW_URL)
  const entries = {}
  const blocks = xml.split('<div type="entry"').slice(1)

  for (const block of blocks) {
    const nr = Number(attr(block.slice(0, 60), 'n'))
    if (!nr) continue
    // Some entries write <w …/> (self-closing), others <w …>word</w>.
const wTag = /<w\b[^>]*\/?>/.exec(block)?.[0] ?? ''
    const id = attr(wTag, 'ID')
    const word = attr(wTag, 'lemma') || /<w\b[^>]*>([^<]*)<\/w>/.exec(block)?.[1] || ''
    const translit = attr(wTag, 'xlit')
    const senses = [...block.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => flat(m[1]))
    const derivation = flat(
      xmlText(/<note type="exegesis">([\s\S]*?)<\/note>/.exec(block)?.[1] ?? '', 'H'),
    )
    const kjv = flat(xmlText(/<note type="explanation">([\s\S]*?)<\/note>/.exec(block)?.[1] ?? '', 'H'))

    entries[id || `H${nr}`] = {
      n: nr,
      lang: 'heb',
      word,
      translit,
      pronunciation: '',
      senses,
      derivation,
      kjv,
    }
  }

  console.log(`  ${Object.keys(entries).length} hebrew entries`)
  return entries
}

async function fetchStrongs() {
  const [greek, hebrew] = await Promise.all([fetchGreek(), fetchHebrew()])
  const entries = { ...hebrew, ...greek }
  const file = path.join(GUIDE, 'strongs.json')
  await writeFile(file, JSON.stringify(entries))
  console.log(`  ${Object.keys(entries).length} total → ${path.relative(ROOT, file)}`)
}

/* ---------------- matthew henry ---------------- */

// A chapter becomes { g: [group…], m: { verse: groupIndex } } rather than
// repeating each group's text once per verse, which would balloon the file ~4x.
function parseHenry(markdown) {
  const body = markdown.replace(/^---\n[\s\S]*?\n---\n/, '')
  const sections = body.split(/^## /m).slice(1)
  const groups = []
  const map = {}

  for (const section of sections) {
    const newline = section.indexOf('\n')
    const heading = clean((newline === -1 ? section : section.slice(0, newline)).replace(/^#+\s*/, ''))
    const rest = newline === -1 ? '' : section.slice(newline + 1)

    const verses = []
    const prose = []
    for (const line of rest.split('\n')) {
      const quoted = /^>\s*\*\*([⁰¹²³⁴⁵⁶⁷⁸⁹]+)\*\*\s*(.*)$/.exec(line)
      if (quoted) {
        const n = Number(unsuperscript(quoted[1]))
        if (Number.isInteger(n)) {
          verses.push(n)
          prose.push('')
          continue
        }
      }
      prose.push(line)
    }

    const text = clean(prose.join('\n'))
    if (verses.length === 0 || !text) continue

    const index = groups.length
    groups.push({ h: heading, v: verses, t: text })
    for (const v of verses) if (map[v] === undefined) map[v] = index
  }

  return { g: groups, m: map }
}

// Folder layout of lyteword/mhenry-complete, canonical order.
// Resolved by hand against the repository so the fetcher needs no GitHub API
// calls (unauthenticated API is limited to 60 requests/hour per IP).
// Psalms uses psalm-N.md instead of chapter-N.md.
const HENRY_BOOKS = [
  "genesis", "exodus", "leviticus", "numbers",
  "deuteronomy", "joshua", "judges", "ruth",
  "1-samuel", "2-samuel", "1-kings", "2-kings",
  "1-chronicles", "2-chronicles", "ezra", "nehemiah",
  "esther", "job", "psalms", "proverbs",
  "ecclesiastes", "song-of-solomon", "isaiah", "jeremiah",
  "lamentations", "ezekiel", "daniel", "hosea",
  "joel", "amos", "obadiah", "jonah",
  "micah", "nahum", "habakkuk", "zephaniah",
  "haggai", "zechariah", "malachi", "matthew",
  "mark", "luke", "john", "acts",
  "romans", "1-corinthians", "2-corinthians", "galatians",
  "ephesians", "philippians", "colossians", "1-thessalonians",
  "2-thessalonians", "1-timothy", "2-timothy", "titus",
  "philemon", "hebrews", "james", "1-peter",
  "2-peter", "1-john", "2-john", "3-john",
  "jude", "revelation",
]

function henryFileName(bookNr, chapter) {
  const prefix = bookNr === 19 ? 'psalm' : 'chapter'
  return `${prefix}-${chapter}.md`
}

async function kjvChapterCounts() {
  const file = path.join(ROOT, 'data', 'kjv', 'meta.json')
  if (!existsSync(file)) return []
  const meta = JSON.parse(await readFile(file, 'utf8'))
  return meta.books.map((b) => b.chapters)
}

async function fetchHenry(limit) {
  console.log("matthew henry's commentary (public domain, 1706-1710) …")
  const dir = path.join(GUIDE, 'henry')
  await mkdir(dir, { recursive: true })

  const chapterCounts = await kjvChapterCounts()
  if (chapterCounts.length !== 66) {
    throw new Error('need data/kjv/meta.json first — run: npm run fetch')
  }

  const books = limit > 0 ? HENRY_BOOKS.slice(0, limit) : HENRY_BOOKS
  console.log(`  ${books.length} books`)

  let written = 0
  let skipped = 0
  let verses = 0

  for (const [index, folder] of books.entries()) {
    const bookNr = index + 1
    const file = path.join(dir, `${String(bookNr).padStart(2, '0')}.json`)
    if (existsSync(file)) {
      written += 1
      continue
    }

    const volume = volumeFor(bookNr)
    const chapters = {}
    let found = 0

    await pool(
      Array.from({ length: chapterCounts[bookNr - 1] }, (_, i) => i + 1),
      async (chapter) => {
        const name = henryFileName(bookNr, chapter)
        const markdown = await softText(`${MHENRY_RAW}volume-${volume}/${folder}/${name}`)
        if (!markdown) return
        const parsed = parseHenry(markdown)
        if (parsed.g.length === 0) return
        chapters[String(chapter)] = parsed
        found += 1
        verses += Object.keys(parsed.m).length
      },
    )

    if (found === 0) {
      skipped += 1
      continue
    }

    await writeFile(file, JSON.stringify(chapters))
    written += 1
    console.log(
      `  ${String(bookNr).padStart(2, '0')} ${folder.padEnd(22)} ${found} chapters` +
        `  (total ${verses} verses annotated)`,
    )
  }

  console.log(`  ${written} books written${skipped ? `, ${skipped} skipped` : ''}`)
}

function volumeFor(bookNr) {
  if (bookNr <= 5) return 1
  if (bookNr <= 17) return 2
  if (bookNr <= 22) return 3
  if (bookNr <= 39) return 4
  if (bookNr <= 43) return 5
  return 6
}

/* ---------------- meta ---------------- */

async function writeMeta() {
  const file = path.join(GUIDE, 'meta.json')
  const guides = [
    {
      id: 'henry',
      name: "Matthew Henry's Commentary",
      description: 'Verse-by-verse exposition, all 66 books (1706–1710).',
      author: 'Matthew Henry',
      year: 1706,
      lang: 'en',
      language: 'English',
      license: 'Public domain',
      credit: "Matthew Henry's Commentary on the Whole Bible",
      file: 'henry',
    },
    {
      id: 'strongs',
      name: "Strong's Exhaustive Concordance",
      description: '8,674 Hebrew and 5,624 Greek entries with senses and derivation.',
      author: 'James Strong',
      year: 1890,
      lang: 'en',
      language: 'English',
      license: 'Public domain',
      credit: "Strong's Exhaustive Concordance of the Bible",
      file: 'strongs.json',
    },
    {
      id: 'crossrefs',
      name: 'Cross References',
      description:
        'Verse to verse links, ranked by community votes. Follows English versification, so numbers may differ slightly from Amharic.',
      author: 'openbible.info',
      year: 2024,
      lang: 'links',
      language: 'Language-neutral links',
      license: 'CC-BY 4.0',
      credit: 'openbible.info',
      file: 'crossrefs.json',
    },
  ]

  const present = []
  for (const guide of guides) {
    const target = path.join(GUIDE, guide.file)
    if (!existsSync(target)) continue
    if (guide.file === 'henry') {
      const entries = await readdir(target).catch(() => [])
      if (entries.filter((f) => f.endsWith('.json')).length === 0) continue
    }
    present.push(guide)
  }

  await mkdir(GUIDE, { recursive: true })
  await writeFile(file, JSON.stringify(present))
  console.log(`\nguides available: ${present.map((g) => g.id).join(', ') || 'none'}`)
}

/* ---------------- main ---------------- */

async function main() {
  await mkdir(GUIDE, { recursive: true })

  if (process.argv.includes('--list')) {
    const dir = existsSync(GUIDE) ? await readdir(GUIDE) : []
    console.log('in data/guide:', dir.join(', ') || 'nothing — run without --list')
    return
  }

  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
  const limitArg = process.argv.find((a) => a.startsWith('--limit='))
  const limit = limitArg ? Number(limitArg.split('=')[1]) : 0
  const wanted = new Set(args.length > 0 ? args : ['crossrefs', 'strongs', 'henry'])

  if (wanted.has('crossrefs')) await fetchCrossrefs()
  if (wanted.has('strongs')) await fetchStrongs()
  if (wanted.has('henry')) await fetchHenry(limit)

  await writeMeta()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})