import fs from 'fs'

const am = JSON.parse(fs.readFileSync('data/am/meta.json', 'utf8')).books
const kjv = JSON.parse(fs.readFileSync('data/kjv/meta.json', 'utf8')).books

for (let i = 0; i < kjv.length; i++) {
  console.log(`${kjv[i].nr}: ${kjv[i].name} | ${am[i].name}`)
}
