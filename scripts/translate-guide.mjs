#!/usr/bin/env node
// Machine-translates the English guide material into Amharic, storing the result
// beside the original so the reader can show either language.
//
//   node scripts/translate-guide.mjs strongs
//   node scripts/translate-guide.mjs henry
//   node scripts/translate-guide.mjs all --concurrency=6
//   node scripts/translate-guide.mjs --stats
//
// Resumable: anything already translated is skipped, so an interrupted run can
// simply be repeated. Uses the public Google Translate endpoint, which is not
// intended for bulk use — point --endpoint at a self-hosted LibreTranslate or
// your own service if you need one at scale.

import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const GUIDE = path.join(ROOT, 'data', 'guide')

const GOOGLE =
  'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=am&dt=t'
const CHUNK = 1800

async function readJSON(file, fallback) {
  if (!existsSync(file)) return fallback
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch {
    return fallback
  }
}

async function translate(text, endpoint, tries = 3) {
  if (!text || !text.trim()) return ''
  const chunks = chunkText(text)
  const parts = []

  for (const chunk of chunks) {
    parts.push(await translateChunk(chunk, endpoint, tries))
  }

  return parts.join('')
}

function chunkText(text) {
  if (text.length <= CHUNK) return [text]
  const chunks = []
  let rest = text

  while (rest.length > CHUNK) {
    let cut = rest.lastIndexOf(' ', CHUNK)
    if (cut < CHUNK / 2) cut = CHUNK
    chunks.push(rest.slice(0, cut))
    rest = rest.slice(cut)
  }
  if (rest) chunks.push(rest)
  return chunks
}

async function translateChunk(text, endpoint, tries) {
  let lastError

  for (let attempt = 1; attempt <= tries; attempt += 1) {
    try {
      // The public endpoint answers GET only. A POST to the same URL is
      // rejected with 429, which is why every run used to fail at once.
      const url = new URL(endpoint)
      url.searchParams.set('q', text)
      const res = await fetch(url.toString(), {
        headers: { accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))

      if (endpoint.includes('googleapis')) {
        const data = await res.json()
        return (data[0] ?? []).map((part) => part[0]).join('')
      }
      return await res.text()
    } catch (error) {
      lastError = error
      if (attempt < tries) await new Promise((r) => setTimeout(r, 700 * attempt))
    }
  }

  throw lastError
}

async function pool(items, worker, size) {
  const queue = [...items]
  let done = 0
  let failed = 0

  await Promise.all(
    Array.from({ length: Math.min(size, queue.length) }, async () => {
      while (queue.length > 0) {
        const item = queue.shift()
        try {
          await worker(item)
          done += 1
        } catch (error) {
          failed += 1
          console.log(`  ! ${item.label ?? ''} ${error.message}`)
        }
        if (done % 25 === 0) process.stdout.write(`\r  ${done}/${items.length}  `)
      }
    }),
  )

  process.stdout.write('\r' + ' '.repeat(40) + '\r')
  return { done, failed }
}

/* ---------------- strong's ---------------- */

async function translateStrongs(endpoint, concurrency, limit) {
  const source = path.join(GUIDE, 'strongs.json')
  const target = path.join(GUIDE, 'strongs.am.json')
  const entries = await readJSON(source, null)
  if (!entries) {
    console.log('  strongs.json not found — run: npm run fetch:guide strongs')
    return
  }

  const out = await readJSON(target, {})
  let todo = Object.entries(entries).filter(([number]) => !out[number])
  if (limit > 0) todo = todo.slice(0, limit)

  console.log(
    `strong’s: ${todo.length} to translate of ${Object.keys(entries).length} ` +
      `(${Object.keys(out).length} already done)`,
  )
  if (todo.length === 0) return

  let pending = todo
  const result = await pool(
    todo,
    async ([number, entry]) => {
      const joined = entry.senses.join('\n')
      const senses = await translate(joined, endpoint)
      const kjv = await translate(entry.kjv ?? '', endpoint)
      const derivation = await translate(entry.derivation ?? '', endpoint)
      out[number] = { senses, kjv, derivation }
      if (Object.keys(out).length % 50 === 0) await writeJSON(target, out)
    },
    concurrency,
  )

  await writeJSON(target, out)
  console.log(`  strong’s: translated ${result.done}, failed ${result.failed}`)
}

async function writeJSON(file, value) {
  await writeFile(file, JSON.stringify(value))
}

/* ---------------- matthew henry ---------------- */

async function translateHenry(endpoint, concurrency, limit) {
  const dir = path.join(GUIDE, 'henry')
  if (!existsSync(dir)) {
    console.log('  henry/ not found — run: npm run fetch:guide henry')
    return
  }

  const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort()
  let totalDone = 0
  let totalFailed = 0
  let capped = limit > 0

  for (const file of files) {
    if (file.endsWith('.am.json')) continue
    const bookPath = path.join(dir, file)
    const outPath = path.join(dir, file.replace('.json', '.am.json'))

    const book = await readJSON(bookPath, null)
    if (!book) continue
    // A missing .am.json is simply a book that has not been translated yet,
    // so it starts empty rather than being skipped.
    const out = await readJSON(outPath, {})

    let todo = []
    for (const [chapter, data] of Object.entries(book)) {
      data.g.forEach((group, index) => {
        if (!out[chapter]) out[chapter] = []
        if (out[chapter][index]) return
        todo.push({ chapter, index, text: group.t, heading: group.h })
      })
    }

    if (todo.length === 0) continue
    if (capped) todo = todo.slice(0, Math.max(1, Math.floor(limit / files.length)))
    capped = false

    console.log(`  ${file} — ${todo.length} passages`)

    const result = await pool(
      todo,
      async ({ chapter, index, text }) => {
        const am = await translate(text, endpoint)
        out[chapter][index] = am
        await writeJSON(outPath, out)
      },
      concurrency,
    )

    totalDone += result.done
    totalFailed += result.failed
  }

  console.log(`  henry: translated ${totalDone}, failed ${totalFailed}`)
}

/* ---------------- stats ---------------- */

async function stats() {
  const strongs = await readJSON(path.join(GUIDE, 'strongs.am.json'), null)
  if (strongs) {
    console.log(`strong’s: ${Object.keys(strongs).length} of ${
      Object.keys(await readJSON(path.join(GUIDE, 'strongs.json'), {})).length
    } entries translated`)
  } else {
    console.log('strong’s: not started')
  }

  const dir = path.join(GUIDE, 'henry')
  if (existsSync(dir)) {
    const files = (await readdir(dir)).filter((f) => f.endsWith('.am.json'))
    let done = 0
    let todo = 0
    for (const f of files) {
      const out = await readJSON(path.join(dir, f), {})
      const book = await readJSON(path.join(dir, f.replace('.am.json', '.json')), {})
      const total = Object.values(book).reduce((s, c) => s + (c.g?.length ?? 0), 0)
      const got = Object.values(out).reduce((s, arr) => s + (Array.isArray(arr) ? arr.filter(Boolean).length : 0), 0)
      done += got
      todo += total - got
    }
    console.log(`henry: ${done} passages translated, ${todo} remaining (across ${files.length} books)`)
  }
}

/* ---------------- main ---------------- */

async function main() {
  const args = process.argv.slice(2)

  if (args.includes('--stats')) {
    await stats()
    return
  }

  const endpointArg = args.find((a) => a.startsWith('--endpoint='))
  const endpoint = endpointArg ? endpointArg.split('=').slice(1).join('=') : GOOGLE
  const concurrencyArg = args.find((a) => a.startsWith('--concurrency='))
  const concurrency = concurrencyArg ? Number(concurrencyArg.split('=')[1]) : 6
  const limitArg = args.find((a) => a.startsWith('--limit='))
  const limit = limitArg ? Number(limitArg.split('=')[1]) : 0
  const targets = args.filter((a) => !a.startsWith('--'))

  await mkdir(GUIDE, { recursive: true })

  const wanted = new Set(targets.length > 0 ? targets : ['strongs', 'henry'])
  if (wanted.has('strongs')) await translateStrongs(endpoint, concurrency, limit)
  if (wanted.has('henry')) await translateHenry(endpoint, concurrency, limit)

  console.log('done.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})