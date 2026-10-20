import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const dir = 'C:/Users/bsd/bible-ocr/pages-text'
const files = readdirSync(dir).filter((f) => f.endsWith('.txt')).sort()

let totalChars = 0
let totalEthiopic = 0
let totalLatin = 0
const empty = []
const thin = []
const pages = []

for (const f of files) {
  const text = readFileSync(path.join(dir, f), 'utf8')
  const page = Number(f.replace('.txt', ''))
  const eth = (text.match(/[\u1200-\u137F]/g) ?? []).length
  const latin = (text.match(/[A-Za-z]/g) ?? []).length
  totalChars += text.length
  totalEthiopic += eth
  totalLatin += latin

  if (text.trim().length === 0) empty.push(page)
  else if (eth < 40) thin.push({ page, chars: text.trim().length, eth })

  pages.push({ page, text, eth })
}

console.log(`pages: ${files.length}`)
console.log(`total characters: ${totalChars.toLocaleString()}`)
console.log(`Ethiopic characters: ${totalEthiopic.toLocaleString()} (${((totalEthiopic / totalChars) * 100).toFixed(1)}%)`)
console.log(`Latin characters: ${totalLatin.toLocaleString()}`)
console.log(`empty pages: ${empty.length}${empty.length ? ' -> ' + empty.join(',') : ''}`)
console.log(`pages with little Amharic (<40 chars): ${thin.length}`)
for (const t of thin.slice(0, 12)) console.log(`   page ${t.page}: ${t.chars} chars, ${t.eth} Ethiopic`)

// concatenate with page markers, keeping every page traceable to the scan
const merged = pages
  .sort((a, b) => a.page - b.page)
  .map((p) => `\n\n=== page ${p.page} ===\n${p.text}`)
  .join('')
writeFileSync('C:/Users/bsd/bible-ocr/commentary-amharic.txt', merged, 'utf8')
console.log(`\nwrote commentary-amharic.txt (${(merged.length / 1024 / 1024).toFixed(1)} MB)`)

// look for book / chapter headings to plan the import
const heading = /^\s*(?:=== page (\d+) ===)?\s*([^\n]{0,60})$/gm
const bookish = []
for (const p of pages) {
  for (const line of p.text.split('\n')) {
    const s = line.trim()
    if (s.length < 3 || s.length > 60) continue
    // Amharic book titles: መጽሐፍ / የማቴዎስ style, or a bare number + colon
    if (/^(መጽሐፍ|የ|ኦሪት)/.test(s) && /[\u1200-\u137F]/.test(s)) {
      bookish.push({ page: p.page, line: s })
    }
  }
}
console.log(`\ncandidate heading lines: ${bookish.length}`)
for (const b of bookish.slice(0, 30)) console.log(`   p${b.page}: ${b.line}`)