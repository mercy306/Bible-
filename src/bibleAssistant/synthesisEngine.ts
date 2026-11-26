import type { LanguageMode } from '../prefs'
import type { ExegesisResponse, BibleVerse } from './types'
import {
  parseScriptureReference,
  getExactPassage,
  getSurroundingContext,
  getCrossReferencesForVerse,
  searchBibleConcordance,
  CANONICAL_BOOKS,
} from './retrievalEngine'
import { BIBLICAL_ENTITIES, type BiblicalEntity } from './biblicalKnowledge'

// Non-biblical keywords for boundary checking
const NON_BIBLICAL_PATTERNS = [
  /\b(javascript|python|coding|html|css|programming|software)\b/i,
  /\b(weather|football|soccer|crypto|bitcoin|stock market)\b/i,
  /\b(recipe|movie review|celebrity|horoscope|zodiac)\b/i,
]

export interface AssistantQueryContext {
  lastEntityId?: string
  lastReference?: string
}

/**
 * Main Offline Exegesis Synthesis Engine
 * Answers natural language Bible questions using ONLY Scripture.
 */
export async function answerBibleQuestion(
  question: string,
  language: LanguageMode = 'am',
  translation: string = 'am',
  context?: AssistantQueryContext,
): Promise<ExegesisResponse> {
  const isEn = language === 'en'
  const trimmed = question.trim()

  // 1. NON-BIBLICAL QUESTION GUARDRAIL
  for (const pattern of NON_BIBLICAL_PATTERNS) {
    if (pattern.test(trimmed)) {
      return {
        directAnswer: isEn
          ? 'This assistant is exclusively designed for Bible study using Scripture alone. It does not answer secular, technical, or non-biblical queries. Please ask questions about biblical passages, people, events, teachings, or prophecies.'
          : 'ይህ የመጽሐፍ ቅዱስ ረዳት የተዘጋጀው መጽሐፍ ቅዱስን ብቻ መሠረት በማድረግ ቅዱሳት መጻሕፍትን ለማጥናት፣ ለመረዳትና ለማሰላሰል ነው። ስለ ዓለማዊ ወይም ከመጽሐፍ ቅዱስ ውጭ ስላሉ ነገሮች አይመልስም። እባክዎ ስለ መጽሐፍ ቅዱስ ጥቅሶች፣ ሰዎች፣ ታሪኮች ወይም ትምህርቶች ይጠይቁ።',
        primaryPassages: [],
        contextExplanation: '',
        relatedVerses: [],
        reflectionQuestions: [],
        isSilentOrUncertain: false,
        language,
      }
    }
  }

  // 2. REFERENCE EXPLANATION INTENT ("Explain John 3:16", "Romans 8:28", "መዝሙር 23", "ዘፍ 1:1-3", "ዮሐንስ 3:16ን አብራራልኝ")
  const parsedRef = parseScriptureReference(trimmed)
  if (parsedRef) {
    const verses = await getExactPassage(parsedRef, translation)
    if (verses.length > 0) {
      let displayVerses = verses
      if (parsedRef.verseStart && (!parsedRef.verseEnd || parsedRef.verseStart === parsedRef.verseEnd)) {
        const surrounding = await getSurroundingContext(
          parsedRef.bookNr,
          parsedRef.chapter,
          parsedRef.verseStart,
          2,
          translation,
        )
        if (surrounding.length > 0) {
          displayVerses = surrounding
        }
      }

      // Fetch TSK Cross References for the first verse
      const crossRefs = await getCrossReferencesForVerse(
        parsedRef.bookNr,
        parsedRef.chapter,
        parsedRef.verseStart || 1,
        translation,
        4,
      )

      const relatedVerses: BibleVerse[] = []
      for (const cr of crossRefs) {
        if (cr.verseText) {
          const targetBook = CANONICAL_BOOKS[cr.targetBook - 1]
          relatedVerses.push({
            bookNr: cr.targetBook,
            bookName: translation.startsWith('am') ? targetBook.nameAm : targetBook.nameEn,
            testament: targetBook.testament,
            chapter: cr.targetChapter,
            verse: cr.targetFromVerse,
            text: cr.verseText,
            translation,
          })
        }
      }

      const book = CANONICAL_BOOKS[parsedRef.bookNr - 1]
      const bookName = translation.startsWith('am') ? book.nameAm : book.nameEn
      const displayRef = isEn
        ? parsedRef.fullRefString
        : (parsedRef.verseStart
          ? `${book.nameAm} ${parsedRef.chapter}:${parsedRef.verseStart}${parsedRef.verseEnd && parsedRef.verseEnd !== parsedRef.verseStart ? `-${parsedRef.verseEnd}` : ''}`
          : `${book.nameAm} ${parsedRef.chapter}`)

      const cleanBookLoc = translation.startsWith('am') && bookName.startsWith('የ')
        ? `በ${bookName.slice(1)}`
        : `በ${bookName}`

      let explanationText = ''
      if (isEn) {
        explanationText = `This passage is located in ${bookName} (Chapter ${parsedRef.chapter}), situated within the ${book.testament === 'OT' ? 'Old Testament' : 'New Testament'}. When reading in its biblical context, Scripture interprets this text in light of God's overarching covenant and character. Notice how the surrounding narrative reinforces the immediate meaning without contradiction.`
      } else {
        explanationText = `ይህ ክፍል ${cleanBookLoc} (ምዕራፍ ${parsedRef.chapter}) ውስጥ የሚገኝ ሲሆን፣ በ${book.testament === 'OT' ? 'ብሉይ ኪዳን' : 'አዲስ ኪዳን'} ቀኖና ውስጥ የተካተተ ነው። በመጽሐፍ ቅዱሳዊ አገባቡ ሲነበብ፣ ቅዱሳት መጻሕፍት ቃሉን ከእግዚአብሔር የኪዳን ታሪክና አጠቃላይ የእውነት መርህ ጋር በማስተሳሰር ያብራሩታል።`
      }

      const reflectionQuestions = isEn
        ? [
            `How does ${displayRef} deepen your understanding of God's character?`,
            `What clear action or obedience does this passage call for in daily faith?`,
          ]
        : [
            `${displayRef} ስለ እግዚአብሔር ማንነት ያለዎትን መረዳት እንዴት ያሳድገዋል?`,
            `ይህ የመጽሐፍ ቅዱስ ቃል በዕለት ተዕለት ሕይወትዎ ምን ዓይነት ተግባራዊ መታዘዝን ይጠይቃል?`,
          ]

      return {
        directAnswer: isEn
          ? `Scripture reading & context for ${displayRef}:`
          : (displayRef.startsWith('የ')
            ? `${displayRef} የመጽሐፍ ቅዱስ ንባብና አገባብ፦`
            : `የ${displayRef} የመጽሐፍ ቅዱስ ንባብና አገባብ፦`),
        primaryPassages: displayVerses,
        contextExplanation: explanationText,
        relatedVerses,
        reflectionQuestions,
        isSilentOrUncertain: false,
        language,
      }
    }
  }

  // 3. RESOLVE FOLLOW-UP PRONOUNS ("he", "him", "what happened next?")
  let normalizedQuery = trimmed.toLowerCase()
  if (context?.lastEntityId && (normalizedQuery.includes(' he ') || normalizedQuery.includes(' him ') || normalizedQuery.includes('እርሱ') || normalizedQuery.includes('ከዚያስ'))) {
    normalizedQuery = `${context.lastEntityId} ${normalizedQuery}`
  }

  // 4. BIBLICAL ENTITY INTENT (People, Events, Teachings, OT/NT Connections)
  const matchedEntity = findMatchingEntity(normalizedQuery)
  if (matchedEntity) {
    // Fetch verses for the entity's key chapters
    const primaryVerses: BibleVerse[] = []
    for (const kc of matchedEntity.keyChapters.slice(0, 2)) {
      const vList = await getExactPassage(
        {
          bookNr: kc.book,
          bookName: '',
          chapter: kc.chapter,
          verseStart: 1,
          verseEnd: 5,
          fullRefString: '',
        },
        translation,
      )
      primaryVerses.push(...vList)
    }

    return {
      directAnswer: isEn ? matchedEntity.summaryEn : matchedEntity.summaryAm,
      primaryPassages: primaryVerses,
      contextExplanation: isEn
        ? `Biblical Record: Found primarily in ${matchedEntity.keyChapters.map((k) => k.labelEn).join(', ')}.`
        : `የመጽሐፍ ቅዱስ ምስክርነት፦ በዋናነት በ${matchedEntity.keyChapters.map((k) => k.labelAm).join('፣ ')} ውስጥ ይገኛል።`,
      otNtConnections: matchedEntity.otNtConnectionsEn
        ? [
            {
              explanation: isEn
                ? matchedEntity.otNtConnectionsEn
                : matchedEntity.otNtConnectionsAm || matchedEntity.otNtConnectionsEn,
            },
          ]
        : undefined,
      relatedVerses: [],
      reflectionQuestions: isEn
        ? matchedEntity.reflectionQuestionsEn
        : matchedEntity.reflectionQuestionsAm,
      isSilentOrUncertain: false,
      language,
    }
  }

  // 5. CONCORDANCE / THEMATIC KEYWORD SEARCH ACROSS ALL 66 BOOKS
  const searchResults = await searchBibleConcordance(trimmed, translation, 6)
  if (searchResults.length > 0) {
    const firstVerse = searchResults[0]
    const crossRefs = await getCrossReferencesForVerse(
      firstVerse.bookNr,
      firstVerse.chapter,
      firstVerse.verse,
      translation,
      3,
    )

    const relatedVerses: BibleVerse[] = []
    for (const cr of crossRefs) {
      if (cr.verseText) {
        const targetBook = CANONICAL_BOOKS[cr.targetBook - 1]
        relatedVerses.push({
          bookNr: cr.targetBook,
          bookName: translation.startsWith('am') ? targetBook.nameAm : targetBook.nameEn,
          testament: targetBook.testament,
          chapter: cr.targetChapter,
          verse: cr.targetFromVerse,
          text: cr.verseText,
          translation,
        })
      }
    }

    return {
      directAnswer: isEn
        ? `The Holy Bible teaches on this topic across the following key passages (${searchResults.length} verses found):`
        : `መጽሐፍ ቅዱስ ስለዚህ ርዕስ በሚከተሉት ቁልፍ ክፍሎች ውስጥ በቀጥታ ያስተምራል (${searchResults.length} ጥቅሶች ተገኝተዋል)፦`,
      primaryPassages: searchResults,
      contextExplanation: isEn
        ? `Scripture reveals this truth across both testaments. Notice how these passages harmonize in their testimony regarding God's will and wisdom.`
        : `ቅዱሳት መጻሕፍት ይህንን እውነት በብሉይና በአዲስ ኪዳን ክፍሎች ውስጥ በስምምነት ያሳያሉ። ቃሉ በእግዚአብሔር ፈቃድና ጥበብ ዙሪያ የሚያስተላልፈውን መልእክት አስተውሉ።`,
      relatedVerses,
      reflectionQuestions: isEn
        ? [
            'What consistent message do these verses give regarding this topic?',
            'How can you apply these scriptures to your daily walk with the Lord?',
          ]
        : [
            'እነዚህ ጥቅሶች በዚህ ርዕስ ዙሪያ የሚያስተላልፉት አንድ ወጥ የሆነ መጽሐፍ ቅዱሳዊ መልእክት ምንድን ነው?',
            'ይህንን የመጽሐፍ ቅዱስ እውነት በዕለት ተዕለት ሕይወትዎ እንዴት በተግባር ያውሉታል?',
          ],
      isSilentOrUncertain: false,
      language,
    }
  }

  // 6. SILENCE OF SCRIPTURE / INSUFFICIENT BIBLICAL EVIDENCE GUARDRAIL
  return {
    directAnswer: isEn
      ? 'The available biblical text does not provide enough information to answer this question with certainty. Scripture is silent on this specific detail, and as a faithful Bible study tool, we must not invent, speculate, or introduce external theories beyond what is written in the Word of God (Deuteronomy 29:29).'
      : 'የቀረበው የመጽሐፍ ቅዱስ ቃል ለዚህ ጥያቄ በእርግጠኝነት መልስ ለመስጠት በቂ መረጃ አይሰጥም። መጽሐፍ ቅዱስ በዚህ የተለየ ነጥብ ላይ ዝም ስላለ፣ በእግዚአብሔር ቃል ላይ ከተጻፈው ውጭ የፈጠራ ግምቶችን ወይም የውጭ ትምህርቶችን ማከል አይገባንም (ዘዳግም 29፥29)።',
    primaryPassages: [],
    contextExplanation: isEn
      ? 'Deuteronomy 29:29 reminds us: "The secret things belong unto the Lord our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law."'
      : 'ዘዳግም 29፥29 እንዲህ ያስተምረናል፦ "ምሥጢሩ ለአምላካችን ለእግዚአብሔር ነው፤ የተገለጠው ግን የዚህን ሕግ ቃሎች ሁሉ እናደርግ ዘንድ ለእኛ ለዘላለምም ለልጆቻችን ነው።"',
    relatedVerses: [],
    reflectionQuestions: isEn
      ? ['How does accepting the silence of Scripture protect us from false teachings and speculation?']
      : ['መጽሐፍ ቅዱስ ዝም ባለበት ነገር ላይ ዝም ማለታችን ከተሳሳቱ የፈጠራ ትምህርቶች እንዴት ይጠብቀናል?'],
    isSilentOrUncertain: true,
    language,
  }
}

function findMatchingEntity(query: string): BiblicalEntity | null {
  const lower = query.toLowerCase()
  for (const entity of BIBLICAL_ENTITIES) {
    for (const alias of entity.aliasesEn) {
      if (lower.includes(alias)) return entity
    }
    for (const alias of entity.aliasesAm) {
      if (query.includes(alias)) return entity
    }
  }
  return null
}
