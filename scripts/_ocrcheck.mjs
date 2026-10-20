import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const dir = 'C:/Users/bsd/bible-ocr/test'
const files = readdirSync(dir)
  .filter((f) => f.endsWith('-ocr.txt'))
  .sort()

for (const f of files) {
  const text = readFileSync(path.join(dir, f), 'utf8')
  const ethiopic = (text.match(/[\u1200-\u137F]/g) ?? []).length
  const replacement = (text.match(/\uFFFD/g) ?? []).length
  const question = (text.match(/\?/g) ?? []).length
  const latin = (text.match(/[A-Za-z]/g) ?? []).length

  console.log(`${f}: chars=${text.length} ethiopic=${ethiopic} replacement=${replacement} question=${question} latin=${latin}`)
  console.log(text.slice(0, 500))
  console.log('---')
}