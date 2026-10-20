#!/usr/bin/env node
// Downloads Bible texts from the getbible.net v2 API and stores them locally
// under data/<translation>/ so the app runs fully offline afterwards.
//
//   node scripts/fetch-bible.mjs                 # KJV (default)
//   node scripts/fetch-bible.mjs kkjv web am     # specific translations
//   node scripts/fetch-bible.mjs --list          # show available ids
//   node scripts/fetch-bible.mjs --force kjv     # re-download even if cached
//
// One HTTP request per book (66 per translation), except translations listed in
// FILE_SOURCES below which arrive as one JSON document.

import { mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATA = path.join(ROOT, 'data')
const API = 'https://api.getbible.net/v2'
const DEFAULT = ['kjv']

// Translations the getbible.net API does not carry.
const FILE_SOURCES = {
  // The 2009 Ethiopian Bible Society text, served one chapter at a time. Its
  // content is complete: where the printed Amharic Bible uses a ditto mark in
  // genealogical and census lists, the API returns a placeholder, but no
  // passage is actually absent.
  am: {
    kind: 'chapters',
    api: 'https://openamharicbible.vercel.app/api/am',
    name: 'የአማርኛ መጽሐፍ ቅዱስ (2009)',
    lang: 'am',
    language: 'Amharic',
    direction: 'LTR',
    credit: 'Ethiopian Bible Society',
  },
  // Earlier Ethiopian Bible Society text. Kept because it is a single download,
  // but it is missing 480 verses outright, so it is not the default.
  am54: {
    name: 'የአማርኛ መጽሐፍ ቅዱስ (ብሉይ ኪዳን)',
    lang: 'am',
    language: 'Amharic',
    direction: 'LTR',
    credit: 'Ethiopian Bible Society',
    url: 'https://raw.githubusercontent.com/magna25/amharic-bible-json/main/amharic_bible.json',
    pick: (doc) => doc.books,
  },
}

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

function groupOf(nr) {
  return GROUPS.find((g) => nr >= g.from && nr <= g.to) ?? { id: 'other', name: 'Other' }
}

async function getJSON(url) {
  const res = await fetch(url, { headers: { accept: 'application/json' } })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}

async function getJSONWithRetry(url, tries = 3) {
  let lastError
  for (let attempt = 1; attempt <= tries; attempt += 1) {
    try {
      return await getJSON(url)
    } catch (error) {
      lastError = error
      if (attempt < tries) await new Promise((r) => setTimeout(r, 400 * attempt))
    }
  }
  throw lastError
}

async function listTranslations() {
  const raw = await getJSONWithRetry(`${API}/translations.json`)
  return Object.values(raw)
    .map((t) => ({ id: t.abbreviation, name: t.translation, lang: t.lang, language: t.language }))
    .sort((a, b) => a.id.localeCompare(b.id))
}

async function fetchBook(translation, nr) {
  const book = await getJSONWithRetry(`${API}/${translation}/${nr}.json`)
  if (!Array.isArray(book.chapters) || book.chapters.length === 0) {
    throw new Error(`empty book ${nr}`)
  }
  return {
    nr: book.nr ?? nr,
    name: book.name,
    lang: book.lang ?? 'en',
    language: book.language ?? 'English',
    direction: book.direction ?? 'LTR',
    group: groupOf(book.nr ?? nr).id,
    chapters: book.chapters.map((ch) => ({
      c: ch.chapter,
      v: ch.verses.map((vs) => [vs.verse, (vs.text ?? '').trim()]),
    })),
  }
}

// Per-chapter verse counts for the KJV, used only to report how far a
// translation's own versification sits from the English one.
async function kjvVerseCounts() {
  const books = []
  for (let nr = 1; nr <= 66; nr += 1) {
    const file = path.join(DATA, 'kjv', 'books', `${String(nr).padStart(2, '0')}.json`)
    if (!existsSync(file)) return null
    const book = JSON.parse(await readFile(file, 'utf8'))
    books.push(book.chapters.map((ch) => ch.v.length))
  }
  return books
}

// Amharic book names in canonical order, used to line up the chapter API (which
// lists books alphabetically) with our own book numbers.
const AMHARIC_BOOKS = [
  'ኦሪት ዘፍጥረት', 'ኦሪት ዘጸአት', 'ኦሪት ዘሌዋውያን', 'ኦሪት ዘኍልቍ', 'ኦሪት ዘዳግም',
  'መጽሐፈ ኢያሱ ወልደ ነዌ', 'መጽሐፈ መሣፍንት', 'መጽሐፈ ሩት', 'መጽሐፈ ሳሙኤል ቀዳማዊ',
  'መጽሐፈ ሳሙኤል ካል', 'መጽሐፈ ነገሥት ቀዳማዊ', 'መጽሐፈ ነገሥት ካልዕ', 'መጽሐፍ ዜና መዋዕል ቀዳማዊ',
  'መጽሐፍ ዜና መዋዕል ካልዕ', 'መጽሐፈ ዕዝራ', 'መጽሐፈ ነህምያ', 'መጽሐፈ አስቴር',
  'መጽሐፈ ኢዮብ', 'መዝሙረ ዳይት', 'መጽሐፈ ምሳሌ', 'መጽሐፈ መክብብ',
  'መኃልየ መኃልይ ዘሰሎሞን', 'ትንቢተ ኢሳይያስ', 'ትንቢተ ኤርምያስ', 'ሰቆቃው ኤርምያስ',
  'ትንቢተ ንዝቅኤል', 'ትንቢተ ዳንኤል', 'ትንቢተ ሆሴዕ', 'ትንቢተ ኢዮኤል',
  'ትንቢተ አሞጽ', 'ትንቢተ አብድዩ', 'ትንቢተ ዮናስ', 'ትንቢተ ሚክያስ',
  'ትንቢተ ናሆም', 'ትንቢተ እንባቆም', 'ትንቢተ ሶፎንያስ', 'ትንቢተ ኃጌ',
  'ትንቢተ ዘካርያስ', 'ትንቢተ ሚልክያ', 'የማቴዎስ ወንጌል', 'የማርቆስ ወንጌል',
  'የሉቃስ ወንጌል', 'የዮሐንስ ወንጌል', 'የሐዋርያት ሥራ', 'ወደ ሮሜ ሰዎች',
  '1ኛ ወደ ቆሮንቶስ ሰዎች', '2ኛ ወደ ቆሮንቶስ ሰዎች', 'ወደ ገላትያ ሰዎች', 'ወደ ኤፌሶን ሰዎች',
  'ወደ ፊልጵስዩስ ሰዎች', 'ወደ ቆላስይስ ሰዎች', '1ኛ ወደ ተሰሎንቄ ሰዎች', '2ኛ ወደ ተሰሎንቄ ሰዎች',
  '1ኛ ወደ ጢሞቴዎስ', '2ኛ ወደ ጢሞቴዎስ', 'ወደ ቲቶ', 'ወደ ፊልሞና',
  'ወደ እብራውያን', 'የያዕቆብ መልእክት', '1ኛ የጴጥሮስ መልእክት', '2ኛ የጴጥሮስ መልእክት',
  '1ኛ የዮሐንስ መልእክት', '2ኛ የዮሐንስ መልእክት', '3ኛ የዮሐንስ መልእክት', 'የይሁዳ መልእክት',
  'የዮሐንስ ራእይ',
]

// Chapter counts come from the KJV metadata; names are Amharic.
async function sourceBookOrder() {
  const file = path.join(DATA, 'kjv', 'meta.json')
  if (!existsSync(file)) {
    throw new Error('need data/kjv/meta.json first — run: npm run fetch')
  }
  const meta = JSON.parse(await readFile(file, 'utf8'))
  return meta.books.map((b, i) => ({
    nr: b.nr,
    name: AMHARIC_BOOKS[i] ?? b.name,
    chapters: b.chapters,
  }))
}

// Record where a source has no text. A lower verse count than the KJV is normal
// for Amharic versification; a verse with empty text is a placeholder the
// printed text renders as a ditto mark, and must be surfaced, not rendered blank.
function annotateGaps(books, expected) {
  for (const book of books) {
    const gaps = {}
    let blank = 0

    book.chapters.forEach((ch, ci) => {
      const blanks = ch.v.filter(([, text]) => text === '').length
      const have = ch.v.length
      const want = expected?.[book.nr - 1]?.[ci] ?? have
      if (blanks > 0 || have < want) gaps[ch.c] = { have, want, blank: blanks }
      blank += blanks
    })

    if (Object.keys(gaps).length > 0) book.gaps = gaps
    if (blank > 0) book.blankVerses = blank
  }
}

// Reads chapters of the fallback Amharic edition from data/am54.
async function loadBackupChapters(_id, bookNr) {
  const file = path.join(DATA, 'am54', 'books', `${String(bookNr).padStart(2, '0')}.json`)
  if (!existsSync(file)) return new Map()
  const book = JSON.parse(await readFile(file, 'utf8'))
  return new Map(book.chapters.map((ch) => [ch.c, ch.v]))
}

// Recomputes gap metadata for already-downloaded translations without touching
// the network. Useful after fixing a parser bug, since the stored book files
// carry the chapter text and only the derived fields need rebuilding.
async function annotateExisting(ids) {
  const expected = await kjvVerseCounts()
  const metas = []

  for (const id of ids) {
    const dir = path.join(DATA, id)
    const metaPath = path.join(dir, 'meta.json')
    if (!existsSync(metaPath)) continue

    const meta = JSON.parse(await readFile(metaPath, 'utf8'))
    const books = []

    for (const info of meta.books) {
      const file = path.join(dir, 'books', `${String(info.nr).padStart(2, '0')}.json`)
      if (!existsSync(file)) continue
      const book = JSON.parse(await readFile(file, 'utf8'))
      books.push(book)
    }

    annotateGaps(books, expected)

    for (const book of books) {
      await writeFile(
        path.join(dir, 'books', `${String(book.nr).padStart(2, '0')}.json`),
        JSON.stringify(book),
      )
    }

    const blankTotal = books.reduce((sum, b) => sum + (b.blankVerses ?? 0), 0)
    meta.blankVerses = blankTotal
    meta.books = meta.books.map((info) => {
      const book = books.find((b) => b.nr === info.nr)
      return {
        ...info,
        verses: book ? book.chapters.reduce((s, ch) => s + ch.v.length, 0) : info.verses,
        blankVerses: book?.blankVerses ?? 0,
        gapChapters: book?.gaps ? Object.keys(book.gaps).length : 0,
      }
    })

    await writeFile(metaPath, JSON.stringify(meta))
    metas.push(meta)
    const affected = meta.books.filter((b) => b.gapChapters > 0).length
    console.log(
      `  ${id.padEnd(8)} annotated  ${meta.books.length} books, ${blankTotal} verse(s) without text` +
        `, ${affected} book(s) affected`,
    )
  }

  return metas
}

async function fetchTranslation(id, { force }) {
  const dir = path.join(DATA, id)
  const metaPath = path.join(dir, 'meta.json')

  if (!force && existsSync(metaPath)) {
    const cached = JSON.parse(await readFile(metaPath, 'utf8'))
    console.log(`  ${id.padEnd(10)} cached  ${cached.books.length} books`)
    return cached
  }

  await rm(dir, { recursive: true, force: true })
  await mkdir(path.join(dir, 'books'), { recursive: true })

  const source = FILE_SOURCES[id]
  const books = []
  const failures = []

  if (source?.kind === 'chapters') {
    const expected = await kjvVerseCounts()
    const list = await getJSONWithRetry(`${source.api}/books`)

    // The API lists books alphabetically, so order it into our canonical
    // sequence. Spelling varies between Amharic editions ("ሆሴዕ" vs "ኆሴክ"),
    // so match on shared affixes and then require the chapter counts to agree —
    // a wrong pairing is far more damaging than a failed fetch.
    const norm = (s) => s.replace(/[፡።፣\s]/g, '')
    const stem = (s) => norm(s).replace(/^[0-9ኛበገኛኤምቀንቡ]+/, '')
    const order = await sourceBookOrder()

    // No duplicate titles in the API, so no dedup pass. Scoring gives a large
    // bonus to a matching leading digit, which is what separates 2 John
    // ("2ዮሐ") from 3 John ("3ኛ የዮሐንስ መልእክት") — both share the same tail.
    const pool = list.filter((b) => b.chapters > 0)
    const plan = []

    for (const book of order) {
      // Only consider books with the same chapter count. Without this, a
      // one-chapter book like Jude competes with Revelation on name similarity
      // and can be left without a match.
      const sameSize = pool.filter((b) => !b.used && b.chapters === book.chapters)
      if (sameSize.length === 0) {
        throw new Error(
          `no unused ${book.chapters}-chapter book left for ${book.nr} (${book.name})`,
        )
      }

      const target = norm(book.name)
      let best = null
      let bestScore = -1

      for (const candidate of sameSize) {
        const other = norm(candidate.title)
        let prefix = 0
        while (prefix < target.length && prefix < other.length && target[prefix] === other[prefix]) {
          prefix += 1
        }
        let suffix = 0
        while (
          suffix < target.length - prefix &&
          suffix < other.length - prefix &&
          target[target.length - 1 - suffix] === other[other.length - 1 - suffix]
        ) {
          suffix += 1
        }
        const score =
          (target[0] === other[0] && /[0-9]/.test(target[0] ?? '') ? 100 : 0) + prefix * 2 + suffix
        if (score > bestScore) {
          bestScore = score
          best = candidate
        }
      }

      if (!best || bestScore < 2) {
        throw new Error(
          `could not place book ${book.nr} (${book.name}, ${book.chapters} chapters): ` +
            `best match "${best?.title}" score ${bestScore}`,
        )
      }

      best.used = true
      plan.push({ book, hit: best })
    }

    let done = 0
    const mixed = []
    const apiAbsent = []
    for (const { book, hit } of plan) {
      const chapters = []
      const jobs = Array.from({ length: book.chapters }, (_, i) => i + 1)
      const queue = [...jobs]

      await Promise.all(
        Array.from({ length: Math.min(6, queue.length) }, async () => {
          while (queue.length > 0) {
            const chapter = queue.shift()
            // 2 John is listed with an empty abbreviation, so fall back to its title.
            const key = hit.abbv || hit.title
            try {
              const body = await getJSONWithRetry(
                `${source.api}/books/${encodeURIComponent(key)}/chapters/${chapter}`,
              )
              chapters.push({
                c: chapter,
                // A ditto mark or dash in the printed text becomes a
                // placeholder; keep the slot so numbering stays honest.
                v: (body.verses ?? []).map((text, i) => [i + 1, String(text).trim()]),
              })
            } catch (error) {
              if (chapter <= book.chapters) apiAbsent.push(`${book.name} ${chapter}`)
              else failures.push(`${book.name} (${error.message})`)
            }
          }
        }),
      )

      chapters.sort((a, b) => a.c - b.c)

      // The chapter API is missing a handful of chapters outright (Matthew 5,
      // John 6, Philippians 2-4, Revelation 14 and 21, among others). Fall back
      // to the earlier Ethiopian Bible Society text for those, and record which
      // chapters are mixed so the reader can say so.
      const wanted = Array.from({ length: book.chapters }, (_, i) => i + 1)
      const got = new Set(chapters.map((c) => c.c))
      const absent = wanted.filter((c) => !got.has(c))
      if (absent.length > 0) {
        const backup = await loadBackupChapters(id, book.nr)
        for (const c of absent) {
          const found = backup.get(c)
          if (!found) continue
          chapters.push({ c, v: found, fallback: true })
        }
        chapters.sort((a, b) => a.c - b.c)
        for (const c of absent) {
          if (!backup.has(c)) {
            failures.push(`${book.name} ${c} (absent from both Amharic sources)`)
            continue
          }
          if (!mixed.includes(`${book.name} ${c}`)) mixed.push(`${book.name} ${c}`)
        }
      }

      const record = { nr: book.nr, name: book.name, lang: source.lang, language: source.language, direction: source.direction, group: groupOf(book.nr).id, chapters }
      annotateGaps([record], expected)
      books.push(record)
      await writeFile(
        path.join(dir, 'books', `${String(book.nr).padStart(2, '0')}.json`),
        JSON.stringify(record),
      )
      done += 1
      process.stdout.write(`\r  ${id}  book ${done}/66  ${book.name.padEnd(22)}`)
    }

    process.stdout.write('\r' + ' '.repeat(72) + '\r')
    if (mixed.length > 0) {
      console.log(
        `  ${' '.repeat(10)} filled  ${mixed.length} chapter(s) the API does not carry, ` +
          `using the earlier Amharic edition: ${mixed.join(', ')}`,
      )
    }
    if (apiAbsent.length > 0) {
      console.log(`  ${' '.repeat(10)} note    ${apiAbsent.length} chapter request(s) returned 404`)
    }
  } else if (source) {
    const doc = await getJSONWithRetry(source.url)
    const entries = source.pick(doc)
    const expected = await kjvVerseCounts()

    entries.forEach((entry, index) => {
      const nr = index + 1
      const book = {
        nr,
        name: entry.title,
        lang: source.lang,
        language: source.language,
        direction: source.direction,
        group: groupOf(nr).id,
        chapters: entry.chapters.map((ch, i) => {
          // Six chapters (Matthew 5, Luke 24, John 6, John 11, Revelation 14
          // and 21) come out of this source with no usable chapter number.
          // They are in order, so fall back to the position — otherwise the
          // whole chapter is written out with a null key and can never be read.
          const declared = Number(ch.chapter)
          const c = Number.isInteger(declared) && declared > 0 ? declared : i + 1
          return {
            c,
            v: ch.verses.map((text, j) => [j + 1, String(text).trim()]),
          }
        }),
      }
      annotateGaps([book], expected)
      books.push(book)
      writeFile(
        path.join(dir, 'books', `${String(nr).padStart(2, '0')}.json`),
        JSON.stringify(book),
      )
    })
    console.log(`  ${id.padEnd(10)} file    ${doc.title ?? source.name}`)
  } else {
    for (let nr = 1; nr <= 66; nr += 1) {
      try {
        const book = await fetchBook(id, nr)
        books.push(book)
        await writeFile(
          path.join(dir, 'books', `${String(nr).padStart(2, '0')}.json`),
          JSON.stringify(book),
        )
        process.stdout.write(
          `\r  ${id}  book ${String(nr).padStart(2, '0')}/66  ${book.name.padEnd(22)}`,
        )
      } catch (error) {
        failures.push(`${nr} (${error.message})`)
      }
    }
    process.stdout.write('\r' + ' '.repeat(72) + '\r')
  }

  if (failures.length > 0) {
    console.log(`  ${id.padEnd(10)} missing ${failures.length} book(s): ${failures.join(', ')}`)
  }

  const sample = books[0]
  const blankTotal = books.reduce((sum, b) => sum + (b.blankVerses ?? 0), 0)
  const meta = {
    id,
    name: source ? source.name : await translationName(id),
    lang: source?.lang ?? sample?.lang ?? 'en',
    language: source?.language ?? sample?.language ?? 'English',
    direction: source?.direction ?? sample?.direction ?? 'LTR',
    credit: source?.credit ?? 'getbible.net',
    complete: books.length === 66,
    blankVerses: blankTotal,
    books: books.map((b) => ({
      nr: b.nr,
      name: b.name,
      group: b.group,
      testament: b.nr <= 39 ? 'OT' : 'NT',
      chapters: b.chapters.length,
      verses: b.chapters.reduce((sum, ch) => sum + ch.v.length, 0),
      blankVerses: b.blankVerses ?? 0,
      gapChapters: b.gaps ? Object.keys(b.gaps).length : 0,
    })),
  }

  await writeFile(metaPath, JSON.stringify(meta))
  const gapBooks = meta.books.filter((b) => b.gapChapters > 0).length
  console.log(
    `  ${id.padEnd(10)} saved   ${books.length}/66 books, ` +
      `${meta.books.reduce((s, b) => s + b.verses, 0)} verses`,
  )
  if (blankTotal > 0) {
    console.log(
      `  ${' '.repeat(10)} note    ${blankTotal} verse(s) have no text in this source ` +
        `across ${gapBooks} book(s) — Amharic versification also merges some English verses.`,
    )
  }
  return meta
}

async function translationName(id) {
  const all = await listTranslations()
  return all.find((t) => t.id === id)?.name ?? id
}

async function writeIndex(metas) {
  const indexPath = path.join(DATA, 'index.json')

  let existing = []
  if (existsSync(indexPath)) {
    try {
      existing = JSON.parse(await readFile(indexPath, 'utf8'))
    } catch {
      existing = []
    }
  }

  const merged = new Map()
  for (const entry of existing) {
    if (existsSync(path.join(DATA, entry.id, 'meta.json'))) merged.set(entry.id, entry)
  }
  for (const meta of metas) {
    merged.set(meta.id, {
      id: meta.id,
      name: meta.name,
      language: meta.language,
      lang: meta.lang,
      direction: meta.direction,
      complete: meta.complete,
      books: meta.books.length,
    })
  }

  const list = [...merged.values()].sort((a, b) => a.id.localeCompare(b.id))
  await mkdir(DATA, { recursive: true })
  await writeFile(indexPath, JSON.stringify(list))
}

async function main() {
  const args = process.argv.slice(2)

  if (args.includes('--list')) {
    const all = await listTranslations()
    const extra = Object.entries(FILE_SOURCES).map(([id, s]) => ({
      id,
      name: s.name,
      language: s.language,
    }))
    const list = [...all, ...extra].sort((a, b) => a.id.localeCompare(b.id))
    console.log(`${list.length} translations available:\n`)
    for (const t of list) console.log(`  ${t.id.padEnd(10)} ${t.name} (${t.language})`)
    return
  }

  const annotate = process.argv.includes('--annotate')
  const ids = args.filter((a) => !a.startsWith('--'))
  const wanted = ids.length > 0 ? ids : DEFAULT

  if (annotate) {
    const metas = await annotateExisting(wanted)
    await writeIndex(metas)
    console.log('\nDone.')
    return
  }

  console.log(`Fetching: ${wanted.join(', ')}`)
  const force = args.includes('--force')
  const metas = []
  for (const id of wanted) {
    try {
      metas.push(await fetchTranslation(id, { force }))
    } catch (error) {
      console.error(`  ${id.padEnd(10)} FAILED  ${error.message}`)
    }
  }

  if (metas.length === 0) {
    console.error('\nNo translations downloaded.')
    process.exitCode = 1
    return
  }

  await writeIndex(metas)
  console.log(`\nDone. ${metas.length} translation(s) in data/.`)
}

main()