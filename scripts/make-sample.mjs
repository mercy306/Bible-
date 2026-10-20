import { readFileSync, writeFileSync } from 'node:fs'

const dir = 'C:/Users/bsd/bible-ocr/pages-text'
const pages = [101, 103, 200, 350, 585]

let out = 'SAMPLE FOR YOUR CHECKING\n'
out += 'Compare these against the printed book (PDF pages shown).\n'
out += '='.repeat(70) + '\n\n'

for (const p of pages) {
  const text = readFileSync(`${dir}/${String(p).padStart(4, '0')}.txt`, 'utf8')
  out += `\n########## PDF page ${p} ##########\n\n`
  out += text.slice(0, 900).trim() + '\n'
}

writeFileSync('C:/Users/bsd/bible-ocr/SAMPLE-CHECK.txt', out, 'utf8')
console.log('wrote C:/Users/bsd/bible-ocr/SAMPLE-CHECK.txt')
console.log('sample pages:', pages.join(', '))