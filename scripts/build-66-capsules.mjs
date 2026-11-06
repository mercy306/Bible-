import fs from 'fs'
import path from 'path'
import { OT1_ENTRIES } from './capsule-data-ot1.mjs'
import { OT2_ENTRIES } from './capsule-data-ot2.mjs'
import { NT_ENTRIES } from './capsule-data-nt.mjs'

function pad(n) {
  return n < 10 ? '0' + n : '' + n
}

const amMeta = JSON.parse(fs.readFileSync('data/am/meta.json', 'utf8')).books
const kjvMeta = JSON.parse(fs.readFileSync('data/kjv/meta.json', 'utf8')).books

function getVerseText(bookNr, chapter, verseStart, verseEnd) {
  const fileNr = pad(bookNr) + '.json'
  const amPath = path.join('data', 'am', 'books', fileNr)
  const kjvPath = path.join('data', 'kjv', 'books', fileNr)

  let textAm = ''
  let textEn = ''

  if (fs.existsSync(amPath)) {
    const data = JSON.parse(fs.readFileSync(amPath, 'utf8'))
    const ch = data.chapters.find((c) => c.c === chapter)
    if (ch) {
      const vList = ch.v.filter(
        (v) => v[0] >= verseStart && (!verseEnd || v[0] <= verseEnd)
      )
      textAm = vList.map((v) => v[1]).join(' ')
    }
  }

  if (fs.existsSync(kjvPath)) {
    const data = JSON.parse(fs.readFileSync(kjvPath, 'utf8'))
    const ch = data.chapters.find((c) => c.c === chapter)
    if (ch) {
      const vList = ch.v.filter(
        (v) => v[0] >= verseStart && (!verseEnd || v[0] <= verseEnd)
      )
      textEn = vList.map((v) => v[1]).join(' ')
    }
  }

  return { textAm, textEn }
}

const rawList = [...OT1_ENTRIES, ...OT2_ENTRIES, ...NT_ENTRIES]

const processed = rawList.map((entry) => {
  const amBook = amMeta.find((b) => b.nr === entry.bookNr) || { name: 'መጽሐፍ' }
  const kjvBook = kjvMeta.find((b) => b.nr === entry.bookNr) || { name: 'Book' }

  const rangeStr =
    entry.verseEnd && entry.verseEnd !== entry.verseStart
      ? `${entry.verseStart}-${entry.verseEnd}`
      : `${entry.verseStart}`

  const verseRefAm = `${amBook.name} ${entry.chapter}:${rangeStr}`
  const verseRefEn = `${kjvBook.name} ${entry.chapter}:${rangeStr}`

  const { textAm, textEn } = getVerseText(
    entry.bookNr,
    entry.chapter,
    entry.verseStart,
    entry.verseEnd
  )

  let id = `capsule-b${entry.bookNr}`
  if (entry.bookNr === 40) {
    if (entry.chapter === 23) id = 'capsule-b40-gnat'
    else if (entry.chapter === 7) id = 'capsule-b40-judge'
  }

  return {
    id,
    bookNr: entry.bookNr,
    chapter: entry.chapter,
    verseStart: entry.verseStart,
    verseEnd: entry.verseEnd,
    verseRefAm,
    verseRefEn,
    verseTextAm: textAm || 'የጥቅስ ጽሑፍ',
    verseTextEn: textEn || 'Scripture verse text',
    titleAm: entry.titleAm,
    titleEn: entry.titleEn,
    taglineAm: entry.taglineAm,
    taglineEn: entry.taglineEn,
    eraAm: entry.eraAm,
    eraEn: entry.eraEn,
    locationAm: entry.locationAm,
    locationEn: entry.locationEn,
    yearApprox: entry.yearApprox,
    keyIcon: entry.keyIcon,
    sceneAm: entry.sceneAm,
    sceneEn: entry.sceneEn,
    metaphorAm: entry.metaphorAm,
    metaphorEn: entry.metaphorEn,
    distortionAm: entry.distortionAm,
    distortionEn: entry.distortionEn,
    truthAm: entry.truthAm,
    truthEn: entry.truthEn,
    crossReferences: entry.crossReferences || [],
  }
})

console.log(`Processed ${processed.length} dossiers across all 66 books!`)

const fileHeader = `/**
 * The Generation Time-Capsule & Context Lens (የዘመኑ እውነታና የጥቅስ አውድ)
 * Comprehensive 66-Book Dossiers: Historical setting, original language nuances,
 * exposure of modern distortions / false teachings, surrounding biblical context,
 * and balancing cross references for every canonical book (Genesis to Revelation).
 */

export interface TimeCapsuleEntry {
  id: string
  bookNr: number
  chapter: number
  verseStart: number
  verseEnd?: number
  verseRefAm: string
  verseRefEn: string
  verseTextAm: string
  verseTextEn: string
  titleAm: string
  titleEn: string
  taglineAm: string
  taglineEn: string
  eraAm: string
  eraEn: string
  locationAm: string
  locationEn: string
  yearApprox: string
  keyIcon: string

  // 1. The Generation Snapshot (በዚያ ዘመን ምን እየተካሄደ ነበር?)
  sceneAm: {
    setting: string
    dailyLife: string
    socialTension: string
  }
  sceneEn: {
    setting: string
    dailyLife: string
    socialTension: string
  }

  // 2. Why That Specific Picture Was Used (ይህ ምሳሌ ለምን ተመረጠ?)
  metaphorAm: {
    origin: string
    linguisticNuance: string
    crowdReaction: string
  }
  metaphorEn: {
    origin: string
    linguisticNuance: string
    crowdReaction: string
  }

  // 3. The Modern Distortion (በዘመናችን እንዴት ይዛባል?)
  distortionAm: {
    claim: string
    damage: string
  }
  distortionEn: {
    claim: string
    damage: string
  }

  // 4. The Biblical Truth in Context (ትክክለኛው የመጽሐፍ ቅዱስ አውድ)
  truthAm: {
    contextSummary: string
    surroundingVerses: string
    timelessPrinciple: string
  }
  truthEn: {
    contextSummary: string
    surroundingVerses: string
    timelessPrinciple: string
  }

  // 5. Scripture Interprets Scripture (ማመዛዘኛ ጥቅሶች)
  crossReferences: Array<{
    ref: string
    noteAm: string
    noteEn: string
    bookNr?: number
    chapter?: number
    verse?: number
  }>
}

export const TIME_CAPSULE_ENTRIES: TimeCapsuleEntry[] = ${JSON.stringify(
  processed,
  null,
  2
)}

/** Find Time Capsule entry for a specific book and chapter (exact or fallback to book) */
export function getTimeCapsuleForChapter(
  bookNr: number,
  chapter: number
): TimeCapsuleEntry | undefined {
  return (
    TIME_CAPSULE_ENTRIES.find(
      (entry) => entry.bookNr === bookNr && entry.chapter === chapter
    ) || TIME_CAPSULE_ENTRIES.find((entry) => entry.bookNr === bookNr)
  )
}

/** Find Time Capsule entry for a specific verse */
export function getTimeCapsuleForVerse(
  bookNr: number,
  chapter: number,
  verse: number
): TimeCapsuleEntry | undefined {
  const exact = TIME_CAPSULE_ENTRIES.find(
    (entry) =>
      entry.bookNr === bookNr &&
      entry.chapter === chapter &&
      verse >= entry.verseStart &&
      (!entry.verseEnd || verse <= entry.verseEnd)
  )
  if (exact) return exact
  return TIME_CAPSULE_ENTRIES.find((entry) => entry.bookNr === bookNr)
}
`

fs.writeFileSync('src/timeCapsuleData.ts', fileHeader, 'utf8')
console.log('Successfully wrote src/timeCapsuleData.ts!')
