import fs from 'fs'
import path from 'path'
import { PART1_PENTATEUCH } from './canon-data/part1_pentateuch.mjs'
import { PART2_HISTORY } from './canon-data/part2_history.mjs'
import { PART3_WISDOM } from './canon-data/part3_wisdom.mjs'
import { PART4A_MAJOR_PROPHETS } from './canon-data/part4a_major_prophets.mjs'
import { PART4B_MINOR_PROPHETS } from './canon-data/part4b_minor_prophets.mjs'
import { PART5_GOSPELS } from './canon-data/part5_gospels.mjs'
import { PART6A_PAULINE } from './canon-data/part6a_pauline_epistles.mjs'
import { PART6B_PASTORAL } from './canon-data/part6b_pauline_pastoral.mjs'
import { PART7_GENERAL_APOCALYPSE } from './canon-data/part7_general_apocalypse.mjs'

const OUT_PATH = 'src/perspectiveMatrixCanonData.ts'

const ALL_PARTS = {
  ...PART1_PENTATEUCH,
  ...PART2_HISTORY,
  ...PART3_WISDOM,
  ...PART4A_MAJOR_PROPHETS,
  ...PART4B_MINOR_PROPHETS,
  ...PART5_GOSPELS,
  ...PART6A_PAULINE,
  ...PART6B_PASTORAL,
  ...PART7_GENERAL_APOCALYPSE
}

const amBooks = JSON.parse(fs.readFileSync('data/am/meta.json', 'utf8')).books
const kjvBooks = JSON.parse(fs.readFileSync('data/kjv/meta.json', 'utf8')).books

let ts = `import type { PerspectiveMatrixItem } from './perspectiveMatrixData'

/**
 * Canon-Wide Multidimensional Perspective Matrix Dataset
 * Covers all 66 books of the Holy Bible with 4 simultaneous real-time lenses:
 * 1. Geopolitical / Eyewitness
 * 2. Theological / Covenantal
 * 3. Linguistic (Hebrew / Aramaic / Greek roots)
 * 4. Psychological / Human Experience
 */

export const CANON_66_BOOKS_MATRIX: Record<number, PerspectiveMatrixItem> = {\n`

let count = 0
for (let i = 0; i < 66; i++) {
  const nr = i + 1
  const spec = ALL_PARTS[nr]
  const kjv = kjvBooks[i]
  const am = amBooks[i]

  if (!spec) {
    console.error(`Missing spec for book ${nr} (${kjv.name})`)
    process.exit(1)
  }

  count++
  ts += `  // ${nr}. ${kjv.name.toUpperCase()} (${am.name})\n`
  ts += `  ${nr}: {\n`
  ts += `    id: 'canon-book-${nr}',\n`
  ts += `    sceneId: 'book-${nr}',\n`
  ts += `    bookNr: ${nr},\n`
  ts += `    chapterStart: 1,\n`
  ts += `    titleEn: ${JSON.stringify(spec.titleEn)},\n`
  ts += `    titleAm: ${JSON.stringify(spec.titleAm)},\n`
  ts += `    eraEn: ${JSON.stringify(spec.eraEn)},\n`
  ts += `    eraAm: ${JSON.stringify(spec.eraAm)},\n`
  ts += `    geopolitical: {\n`
  ts += `      titleEn: ${JSON.stringify(spec.geoTitleEn)},\n`
  ts += `      titleAm: ${JSON.stringify(spec.geoTitleAm)},\n`
  ts += `      empireEn: ${JSON.stringify(spec.empireEn)},\n`
  ts += `      empireAm: ${JSON.stringify(spec.empireAm)},\n`
  ts += `      timeframe: ${JSON.stringify(spec.timeframe)},\n`
  ts += `      eyewitnessPOVEn: ${JSON.stringify(spec.eyewitnessPOVEn)},\n`
  ts += `      eyewitnessPOVAm: ${JSON.stringify(spec.eyewitnessPOVAm)},\n`
  ts += `      historicalDynamicsEn: ${JSON.stringify(spec.histDynamicsEn)},\n`
  ts += `      historicalDynamicsAm: ${JSON.stringify(spec.histDynamicsAm)},\n`
  ts += `      groundRealitiesEn: ${JSON.stringify(spec.groundRealitiesEn)},\n`
  ts += `      groundRealitiesAm: ${JSON.stringify(spec.groundRealitiesAm)}\n`
  ts += `    },\n`
  ts += `    theological: {\n`
  ts += `      titleEn: ${JSON.stringify(spec.theoTitleEn)},\n`
  ts += `      titleAm: ${JSON.stringify(spec.theoTitleAm)},\n`
  ts += `      covenantStageEn: ${JSON.stringify(spec.covenantEn)},\n`
  ts += `      covenantStageAm: ${JSON.stringify(spec.covenantAm)},\n`
  ts += `      redemptiveThemeEn: ${JSON.stringify(spec.redemptiveThemeEn)},\n`
  ts += `      redemptiveThemeAm: ${JSON.stringify(spec.redemptiveThemeAm)},\n`
  ts += `      christForeshadowingEn: ${JSON.stringify(spec.christEn)},\n`
  ts += `      christForeshadowingAm: ${JSON.stringify(spec.christAm)},\n`
  ts += `      metaNarrativeAnchorEn: ${JSON.stringify(spec.metaEn)},\n`
  ts += `      metaNarrativeAnchorAm: ${JSON.stringify(spec.metaAm)}\n`
  ts += `    },\n`
  ts += `    linguistic: [\n`
  for (let tIdx = 0; tIdx < spec.terms.length; tIdx++) {
    const t = spec.terms[tIdx]
    ts += `      {\n`
    ts += `        original: ${JSON.stringify(t.original)},\n`
    ts += `        translit: ${JSON.stringify(t.translit)},\n`
    ts += `        language: ${JSON.stringify(t.language)},\n`
    ts += `        amharicTerm: ${JSON.stringify(t.amharicTerm)},\n`
    ts += `        literalMeaningEn: ${JSON.stringify(t.literalMeaningEn)},\n`
    ts += `        literalMeaningAm: ${JSON.stringify(t.literalMeaningAm)},\n`
    ts += `        theologicalDepthEn: ${JSON.stringify(t.theologicalDepthEn)},\n`
    ts += `        theologicalDepthAm: ${JSON.stringify(t.theologicalDepthAm)},\n`
    ts += `        canonicalUsageEn: ${JSON.stringify(t.canonicalUsageEn)},\n`
    ts += `        canonicalUsageAm: ${JSON.stringify(t.canonicalUsageAm)}\n`
    ts += `      }${tIdx < spec.terms.length - 1 ? ',' : ''}\n`
  }
  ts += `    ],\n`
  ts += `    psychological: {\n`
  ts += `      characterEn: ${JSON.stringify(spec.charEn)},\n`
  ts += `      characterAm: ${JSON.stringify(spec.charAm)},\n`
  ts += `      emotionalStateEn: ${JSON.stringify(spec.emotionalStateEn)},\n`
  ts += `      emotionalStateAm: ${JSON.stringify(spec.emotionalStateAm)},\n`
  ts += `      innerConflictEn: ${JSON.stringify(spec.innerConflictEn)},\n`
  ts += `      innerConflictAm: ${JSON.stringify(spec.innerConflictAm)},\n`
  ts += `      existentialQuestionEn: ${JSON.stringify(spec.existentialQuestionEn)},\n`
  ts += `      existentialQuestionAm: ${JSON.stringify(spec.existentialQuestionAm)},\n`
  ts += `      modernReflectionEn: ${JSON.stringify(spec.modernReflectionEn)},\n`
  ts += `      modernReflectionAm: ${JSON.stringify(spec.modernReflectionAm)}\n`
  ts += `    }\n`
  ts += `  }${nr < 66 ? ',' : ''}\n\n`
}

ts += `}\n`

fs.writeFileSync(OUT_PATH, ts, 'utf8')
console.log(`Successfully assembled ALL ${count} books into ${OUT_PATH}!`)
