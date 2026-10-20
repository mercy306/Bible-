/**
 * Builds a page-level index of the Amharic commentary from the OCR output, so
 * the reader can show one printed page at a time instead of one long run of
 * text spanning dozens of pages.
 *
 * Input:  C:/Users/bsd/bible-ocr/pages-text/NNNN.txt
 * Output: data/guide/amharic-pages.json  ->  { "<page>": "<text>" }
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const SOURCE = 'C:/Users/bsd/bible-ocr/pages-text'
const OUT = 'data/guide/amharic-pages.json'

const files = (await readdir(SOURCE)).filter((f) => f.endsWith('.txt')).sort()
const pages = {}
let empty = 0

for (const file of files) {
  const page = Number(path.basename(file, '.txt'))
  if (!Number.isInteger(page)) continue
  const text = (await readFile(path.join(SOURCE, file), 'utf8')).trim()
  if (!text) {
    empty += 1
    continue
  }
  pages[String(page)] = text
}

await mkdir(path.dirname(OUT), { recursive: true })
await writeFile(OUT, JSON.stringify(pages), 'utf8')

const keys = Object.keys(pages).map(Number).sort((a, b) => a - b)
const chars = keys.reduce((sum, k) => sum + pages[String(k)].length, 0)
console.log(`pages written: ${keys.length}`)
console.log(`skipped as empty: ${empty}`)
console.log(`range: ${keys[0]} to ${keys[keys.length - 1]}`)
console.log(`total characters: ${chars.toLocaleString()}`)