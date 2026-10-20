import { readFileSync } from 'node:fs'

const data = JSON.parse(readFileSync('data/guide/amharic.json', 'utf8'))
const meta = JSON.parse(readFileSync('data/kjv/meta.json', 'utf8'))

// Every block must sit in the book/chapter its own pages declare.
let wrong = 0
let checked = 0

for (const [key, blocks] of Object.entries(data.chapters)) {
  const [book, chapter] = key.split('.').map(Number)
  const maxCh = meta.books[book - 1].chapters
  if (chapter < 1 || chapter > maxCh) {
    console.log(`IMPOSSIBLE ${key}: book has ${maxCh} chapters`)
    wrong += 1
  }

  // blocks for one chapter must be in ascending page order and non-overlapping
  let prevLast = 0
  for (const b of blocks) {
    checked += 1
    if (b.first <= prevLast) {
      console.log(`OUT OF ORDER ${key}: ${b.first} after ${prevLast}`)
      wrong += 1
    }
    prevLast = b.last
  }
}

console.log(`blocks checked: ${checked}, problems: ${wrong}`)
console.log(`general blocks: ${data.general.length} covering ${data.general.reduce((n, b) => n + b.pages.length, 0)} pages`)

// Spot-check that a book's pages really contain that book's name
for (const [book, label] of [[40, 'Matthew'], [45, 'Romans'], [43, 'John']]) {
  const keys = Object.keys(data.chapters).filter((k) => Number(k.split('.')[0]) === book)
  let pages = 0
  let hits = 0
  for (const k of keys) {
    for (const b of data.chapters[k]) {
      pages += b.pages.length
      const name = label === 'Matthew' ? 'ማቴዎስ' : label === 'Romans' ? 'ሮሜ' : 'ዮሐንስ'
      if (b.text.includes(name) || b.text.includes(name.slice(0, 4))) hits += b.pages.length
    }
  }
  console.log(`${label}: ${keys.length} chapters, ${pages} pages, ${hits} mention the book name`)
}