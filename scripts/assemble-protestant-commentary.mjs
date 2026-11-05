// Assembler for Protestant New Testament Commentary in Amharic
import fs from 'fs'
import path from 'path'
import { GOSPELS_ACTS_COMMENTARY } from './protestant-commentary/part1_gospels_acts.mjs'
import { EPISTLES_PART2_COMMENTARY } from './protestant-commentary/part2_epistles_rom_gal_philm_jas.mjs'
import { JOHANNINE_JUDE_COMMENTARY } from './protestant-commentary/part3_johannine_jude.mjs'
import { REVELATION_COMMENTARY } from './protestant-commentary/part4_revelation.mjs'

const ROOT = 'C:/Users/bsd/Desktop/surp/bible'
const AMHARIC_PATH = path.join(ROOT, 'data/guide/amharic.json')
const COVERAGE_PATH = path.join(ROOT, 'data/guide/coverage.json')
const META_PATH = path.join(ROOT, 'data/guide/meta.json')
const BACKUP_PATH = path.join(ROOT, 'data/guide/amharic.orig.json')

// Load existing data
const amharicRaw = fs.readFileSync(AMHARIC_PATH, 'utf8')
if (!fs.existsSync(BACKUP_PATH)) {
  fs.writeFileSync(BACKUP_PATH, amharicRaw, 'utf8')
  console.log('Backed up original amharic.json to amharic.orig.json')
}

const amharicData = JSON.parse(amharicRaw)
const coverageData = JSON.parse(fs.readFileSync(COVERAGE_PATH, 'utf8'))
const metaData = JSON.parse(fs.readFileSync(META_PATH, 'utf8'))

const allNewCommentaries = {
  ...GOSPELS_ACTS_COMMENTARY,
  ...EPISTLES_PART2_COMMENTARY,
  ...JOHANNINE_JUDE_COMMENTARY,
  ...REVELATION_COMMENTARY,
}

const newKeys = Object.keys(allNewCommentaries)
console.log(`Injecting ${newKeys.length} missing Protestant commentary chapters...`)

// Merge into amharicData.chapters
for (const [key, blocks] of Object.entries(allNewCommentaries)) {
  amharicData.chapters[key] = blocks
}

// Compute new coverage map for all NT books (40 to 66)
const updatedCoverageMap = {}
for (const key of Object.keys(amharicData.chapters)) {
  const [bStr, cStr] = key.split('.')
  const bookNr = Number(bStr)
  const chNr = Number(cStr)
  if (!updatedCoverageMap[bookNr]) {
    updatedCoverageMap[bookNr] = []
  }
  updatedCoverageMap[bookNr].push(chNr)
}

// Sort chapters
for (const bookNr of Object.keys(updatedCoverageMap)) {
  updatedCoverageMap[bookNr].sort((a, b) => a - b)
}

// Update amharicData.coverage
amharicData.coverage = updatedCoverageMap

// Update coverageData.chapters
coverageData.chapters = updatedCoverageMap

// Update metaData description
for (const item of metaData) {
  if (item.id === 'amharic') {
    item.name = 'የአዲስ ኪዳን ማብራሪያ'
    item.description = 'Commentary covering all 260 chapters across all 27 New Testament books (Protestant Evangelical Exposition).'
    item.author = 'የወንጌላውያን አብያተ ክርስቲያናት ማብራሪያ (Evangelical Expository Commentary)'
    item.credit = 'የተሟላ የአዲስ ኪዳን የወንጌል ማብራሪያ'
  }
}

// Write back updated files
fs.writeFileSync(AMHARIC_PATH, JSON.stringify(amharicData), 'utf8')
fs.writeFileSync(COVERAGE_PATH, JSON.stringify(coverageData), 'utf8')
fs.writeFileSync(META_PATH, JSON.stringify(metaData, null, 2), 'utf8')

console.log('Successfully updated amharic.json, coverage.json, and meta.json!')
console.log(`Total chapters in amharic.json: ${Object.keys(amharicData.chapters).length} / 260 NT chapters.`)
