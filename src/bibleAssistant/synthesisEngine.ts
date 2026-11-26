import type { LanguageMode } from '../prefs'
import type { ExegesisResponse, BibleVerse, AssistantQueryContext } from './types'
import {
  parseScriptureReference,
  getExactPassage,
  getSurroundingContext,
  getCrossReferencesForVerse,
  searchBibleConcordance,
  CANONICAL_BOOKS,
} from './retrievalEngine'
import { findCanonicalTopics } from './biblicalKnowledge'

// Non-biblical keywords for boundary checking
const NON_BIBLICAL_PATTERNS = [
  /\b(javascript|python|coding|html|css|programming|software|react|vue|angular)\b/i,
  /\b(weather|football|soccer|crypto|bitcoin|stock market|cryptocurrency)\b/i,
  /\b(recipe|movie review|celebrity|horoscope|zodiac|astrology)\b/i,
]

// Follow-up indicator words
const FOLLOW_UP_PRONOUNS_EN = /\b(he|she|they|him|her|them|his|their|that place|what happened next|who was his|who was her|who was born|tell me more|more verses)\b/i
const FOLLOW_UP_PRONOUNS_AM = /(?:እርሱ|እርሷ|እነርሱ|ከዚያስ|የዚያን ጊዜ|ምን ሆነ|ማን ነበረች|ማን ነበር|የተወለደው|የተወለደችው|ማን ወለደ|ተጨማሪ ጥቅስ|የበለጠ ንገረኝ)/

/**
 * Main Offline Exegesis Synthesis Engine
 * Answers natural language Bible questions using ONLY Scripture dynamically.
 * Zero hardcoded answers. All claims are grounded in actual retrieved verses.
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
          ? 'This assistant is exclusively dedicated to Bible study using the Holy Scriptures alone. It does not answer secular, technical, or non-biblical queries. Please ask questions about biblical passages, people, events, covenants, or teachings.'
          : 'ይህ የመጽሐፍ ቅዱስ ረዳት የተዘጋጀው መጽሐፍ ቅዱስን ብቻ መሠረት በማድረግ ቅዱሳት መጻሕፍትን ለማጥናት፣ ለመረዳትና ለማሰላሰል ነው። ስለ ዓለማዊ ወይም ከመጽሐፍ ቅዱስ ውጭ ስላሉ ነገሮች አይመልስም። እባክዎ ስለ መጽሐፍ ቅዱስ ክፍሎች፣ ሰዎች፣ ታሪኮች ወይም ትምህርቶች ይጠይቁ።',
        primaryPassages: [],
        contextExplanation: '',
        relatedVerses: [],
        reflectionQuestions: [],
        isSilentOrUncertain: false,
        language,
      }
    }
  }

  // 2. REFERENCE EXPLANATION INTENT (e.g. "John 3:16", "Romans 8:28", "መዝሙር 23", "ዘፍ 1:1-3")
  const parsedRef = parseScriptureReference(trimmed)
  if (parsedRef) {
    const verses = await getExactPassage(parsedRef, translation)
    if (verses.length > 0) {
      let displayVerses = verses
      // If single verse requested, retrieve surrounding context so it's not isolated
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

      // Dynamic contextual explanation derived from biblical location & narrative
      let explanationText = ''
      if (isEn) {
        explanationText = `This scripture is located in ${bookName} (Chapter ${parsedRef.chapter}) within the ${book.testament === 'OT' ? 'Old Testament' : 'New Testament'}. When reading in biblical context (verses ${displayVerses[0].verse}–${displayVerses[displayVerses.length - 1].verse}), Scripture illuminates this passage without isolating it from the author's primary testimony and God's covenantal revelation.`
      } else {
        explanationText = `ይህ ክፍል ${cleanBookLoc} (ምዕራፍ ${parsedRef.chapter}) ውስጥ የሚገኝ ሲሆን፣ በ${book.testament === 'OT' ? 'ብሉይ ኪዳን' : 'አዲስ ኪዳን'} ቀኖና ውስጥ የተካተተ ነው። ክፍሉ በሙሉ አገባቡ (ከቁጥር ${displayVerses[0].verse}–${displayVerses[displayVerses.length - 1].verse}) ሲነበብ፣ ቃሉ ከእግዚአብሔር የኪዳን ታሪክና አጠቃላይ የእውነት መርህ ጋር ተስማምቶ መልእክቱን በግልጽ ያሳያል።`
      }

      // Dynamic OT/NT connections if cross references span both testaments
      const otNtConnections: { otPassage?: string; ntPassage?: string; explanation: string }[] = []
      const otCross = relatedVerses.filter((v) => v.testament === 'OT')
      const ntCross = relatedVerses.filter((v) => v.testament === 'NT')
      if (book.testament === 'OT' && ntCross.length > 0) {
        otNtConnections.push({
          otPassage: `${displayRef}`,
          ntPassage: `${ntCross[0].bookName} ${ntCross[0].chapter}:${ntCross[0].verse}`,
          explanation: isEn
            ? `This Old Testament passage finds its fulfillment and doctrinal echo in the New Testament in ${ntCross[0].bookName} ${ntCross[0].chapter}:${ntCross[0].verse}.`
            : `ይህ የብሉይ ኪዳን ቃል በአዲስ ኪዳን በ${ntCross[0].bookName} ${ntCross[0].chapter}፥${ntCross[0].verse} ላይ ተያይዞ ፍጻሜውንና ትምህርቱን ያብራራል።`,
        })
      } else if (book.testament === 'NT' && otCross.length > 0) {
        otNtConnections.push({
          otPassage: `${otCross[0].bookName} ${otCross[0].chapter}:${otCross[0].verse}`,
          ntPassage: `${displayRef}`,
          explanation: isEn
            ? `This New Testament teaching directly builds upon the Old Testament foundation in ${otCross[0].bookName} ${otCross[0].chapter}:${otCross[0].verse}.`
            : `ይህ የአዲስ ኪዳን ትምህርት በ${otCross[0].bookName} ${otCross[0].chapter}፥${otCross[0].verse} ላይ በተመሠረተው የብሉይ ኪዳን ቃል ላይ በቀጥታ የተገነባ ነው።`,
        })
      }

      const reflectionQuestions = isEn
        ? [
            `How does reading ${displayRef} in its surrounding context clarify its true biblical message?`,
            `What action or response of faith does God's Word require from you in this passage?`,
          ]
        : [
            `${displayRef}ን በዙሪያው ካለው ሙሉ አገባብ ጋር ማንበብ ትክክለኛ የመጽሐፍ ቅዱስ መልእክቱን እንዴት ግልጽ ያደርገዋል?`,
            `ይህ የመጽሐፍ ቅዱስ ቃል በሕይወትዎ ምን ዓይነት የእምነት መታዘዝን ይጠይቃል?`,
          ]

      return {
        directAnswer: isEn
          ? `Scripture reading & context for ${displayRef}:`
          : (displayRef.startsWith('የ')
            ? `${displayRef} የመጽሐፍ ቅዱስ ንባብና አገባብ፦`
            : `የ${displayRef} የመጽሐፍ ቅዱስ ንባብና አገባብ፦`),
        primaryPassages: displayVerses,
        contextExplanation: explanationText,
        otNtConnections: otNtConnections.length > 0 ? otNtConnections : undefined,
        relatedVerses,
        reflectionQuestions,
        isSilentOrUncertain: false,
        language,
      }
    }
  }

  // 3. TARGETED CONVERSATION FOLLOW-UP INTENT
  // Checks if the user is asking a specific follow-up question related to the previous topic/person
  const isFollowUp = FOLLOW_UP_PRONOUNS_EN.test(trimmed) || FOLLOW_UP_PRONOUNS_AM.test(trimmed)
  if (isFollowUp && context?.lastBookNr) {
    // Search the relevant book (and gospel lineage connections) specifically for the follow-up question terms
    const targetBooks = [context.lastBookNr]
    if (context.lastBookNr <= 39) {
      targetBooks.push(40, 42, 58) // Matthew, Luke, Hebrews for OT figures
    }

    // Combine entity context with follow-up query so specific references (e.g. Matthew 1:5 "from Ruth") score highest
    const queryWithEntity = context.lastTopic ? `${context.lastTopic} ${trimmed}` : trimmed

    const followUpMatches = await searchBibleConcordance(
      queryWithEntity,
      translation,
      5,
      undefined,
      targetBooks,
    )

    if (followUpMatches.length > 0) {
      const citedBooks = Array.from(new Set(followUpMatches.map((v) => v.bookName))).join(isEn ? ', ' : '፣ ')
      const topMatch = followUpMatches[0]
      const crossRefs = await getCrossReferencesForVerse(
        topMatch.bookNr,
        topMatch.chapter,
        topMatch.verse,
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
          ? `Regarding your follow-up question, the Scriptures in ${citedBooks} directly record the following (${followUpMatches.length} passages found):`
          : `ላቀረቡት ተከታይ ጥያቄ መጽሐፍ ቅዱስ በ${citedBooks} ውስጥ የሚከተለውን ቀጥተኛ መልስ ይሰጣል (${followUpMatches.length} ጥቅሶች ተገኝተዋል)፦`,
        primaryPassages: followUpMatches,
        contextExplanation: isEn
          ? `These passages specifically address the continuation of the biblical account, confirming the names, events, and lineage as preserved in the text.`
          : `እነዚህ ጥቅሶች የቀደመውን የመጽሐፍ ቅዱስ ታሪክ ቀጣይነት፣ የተወለዱትን፣ የተፈጸሙትን ክስተቶችና የትውልድ ሐረግ በመጽሐፍ ቅዱስ ቃል በቀጥታ ያረጋግጣሉ።`,
        relatedVerses,
        reflectionQuestions: isEn
          ? [
              'How does this continuation of the biblical record show God working through generations?',
              'What do these verses teach you about God’s faithfulness to His covenant promises?',
            ]
          : [
              'ይህ የመጽሐፍ ቅዱስ ታሪክ ቀጣይነት እግዚአብሔር በትውልዶች ውስጥ እንዴት እንደሚሠራ ምን ያሳያል?',
              'እነዚህ ጥቅሶች ስለ እግዚአብሔር የኪዳን ታማኝነት ምን ያስተምሩዎታል?',
            ],
        isSilentOrUncertain: false,
        language,
      }
    }
  }

  // 4. DYNAMIC CANONICAL TOPIC RETRIEVAL (People, Events, Teachings)
  const matchedTopics = findCanonicalTopics(trimmed)
  if (matchedTopics.length > 0) {
    const primaryTopic = matchedTopics[0]
    const retrievedVerses: BibleVerse[] = []

    // Load actual verses dynamically from Scripture coordinates
    for (const p of primaryTopic.primaryPassages.slice(0, 3)) {
      const vList = await getExactPassage(
        {
          bookNr: p.book,
          bookName: '',
          chapter: p.chapter,
          verseStart: p.verseStart || 1,
          verseEnd: p.verseEnd || Math.min((p.verseStart || 1) + 4, 15),
          fullRefString: '',
        },
        translation,
      )
      retrievedVerses.push(...vList)
    }

    if (retrievedVerses.length > 0) {
      // Collect cross-references for the first primary verse
      const crossRefs = await getCrossReferencesForVerse(
        retrievedVerses[0].bookNr,
        retrievedVerses[0].chapter,
        retrievedVerses[0].verse,
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

      // Identify OT and NT verse sets
      const otVerses = retrievedVerses.filter((v) => v.testament === 'OT')
      const ntVerses = retrievedVerses.filter((v) => v.testament === 'NT')

      const topicDisplayName = isEn ? primaryTopic.nameEn : primaryTopic.nameAm

      // Dynamically formulate biblical testimony from actual retrieved passages
      let dynamicDirectAnswer = ''
      let dynamicExplanation = ''

      if (isEn) {
        const citedBooks = Array.from(new Set(retrievedVerses.map((v) => v.bookName))).join(', ')
        dynamicDirectAnswer = `The Holy Scriptures testify concerning ${topicDisplayName} across ${citedBooks}. Here is the biblical record as recorded in God's Word:`
        dynamicExplanation = `Biblical Context: Scripture establishes this account across ${retrievedVerses.length} passages. When comparing Scripture with Scripture, the testimony remains consistent and unified in God's covenant purpose.`
      } else {
        const citedBooks = Array.from(new Set(retrievedVerses.map((v) => v.bookName))).join('፣ ')
        dynamicDirectAnswer = `መጽሐፍ ቅዱስ ስለ ${topicDisplayName} በ${citedBooks} ውስጥ የሚከተለውን ቀጥተኛ ምስክርነት ይሰጣል፦`
        dynamicExplanation = `የመጽሐፍ ቅዱስ አገባብ፦ ቅዱሳት መጻሕፍት ይህንን እውነት በ${retrievedVerses.length} ጥቅሶች ውስጥ በግልጽ ይመሰክራሉ። አንዱ ክፍል ከሌላው ጋር ሲነጻጸር የእግዚአብሔር ቃል አንድ ወጥ የሆነውን መለኮታዊ እውነት ያሳያል።`
      }

      // Dynamic OT ↔ NT connections
      const otNtConnections: { otPassage?: string; ntPassage?: string; explanation: string }[] = []
      if (otVerses.length > 0 && ntVerses.length > 0) {
        otNtConnections.push({
          otPassage: `${otVerses[0].bookName} ${otVerses[0].chapter}:${otVerses[0].verse}`,
          ntPassage: `${ntVerses[0].bookName} ${ntVerses[0].chapter}:${ntVerses[0].verse}`,
          explanation: isEn
            ? `Scripture connects the Old Testament testimony (${otVerses[0].bookName} ${otVerses[0].chapter}) with the New Testament revelation (${ntVerses[0].bookName} ${ntVerses[0].chapter}), demonstrating the continuity of God's redemptive plan.`
            : `ቅዱሳት መጻሕፍት የብሉይ ኪዳኑን ምስክርነት (${otVerses[0].bookName} ${otVerses[0].chapter}) ከአዲስ ኪዳን መገለጥ (${ntVerses[0].bookName} ${ntVerses[0].chapter}) ጋር በማስተሳሰር የእግዚአብሔርን የማዳን እቅድ አንድነት ያረጋግጣሉ።`,
        })
      }

      const reflectionQuestions = isEn
        ? [
            `What does the biblical record of ${topicDisplayName} reveal about God’s faithfulness and sovereignty?`,
            `How does this Scripture encourage or challenge your personal walk with Christ today?`,
          ]
        : [
            `ስለ ${topicDisplayName} የተጻፈው የመጽሐፍ ቅዱስ ቃል ስለ እግዚአብሔር ታማኝነትና ሉዓላዊነት ምን ያስተምረናል?`,
            `ይህ የመጽሐፍ ቅዱስ እውነት በዕለት ተዕለት የክርስትና ሕይወትዎ ምን ዓይነት ማበረታቻ ወይም መታዘዝን ይሰጥዎታል?`,
          ]

      return {
        directAnswer: dynamicDirectAnswer,
        primaryPassages: retrievedVerses,
        contextExplanation: dynamicExplanation,
        otNtConnections: otNtConnections.length > 0 ? otNtConnections : undefined,
        relatedVerses,
        reflectionQuestions,
        isSilentOrUncertain: false,
        language,
      }
    }
  }

  // 5. DYNAMIC CONCORDANCE KEYWORD SEARCH ACROSS ALL 66 BOOKS
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

    const booksFound = Array.from(new Set(searchResults.map((v) => v.bookName))).join(isEn ? ', ' : '፣ ')

    return {
      directAnswer: isEn
        ? `The Holy Bible teaches on this subject across the following passages in ${booksFound} (${searchResults.length} verses retrieved):`
        : `መጽሐፍ ቅዱስ በዚህ ርዕስ ዙሪያ በ${booksFound} ውስጥ በሚገኙ ክፍሎች በቀጥታ ያስተምራል (${searchResults.length} ጥቅሶች ተገኝተዋል)፦`,
      primaryPassages: searchResults,
      contextExplanation: isEn
        ? `These passages from God's Word directly contain the key terms of your inquiry. Compare how different biblical authors harmonize on this teaching.`
        : `እነዚህ ከመጽሐፍ ቅዱስ የተገኙ ክፍሎች የጥያቄዎን ዋና ቃል በቀጥታ የያዙ ናቸው። የተለያዩ የመጽሐፍ ቅዱስ ጸሐፊዎች በዚህ እውነት ዙሪያ ያላቸውን ስምምነት አስተውሉ።`,
      relatedVerses,
      reflectionQuestions: isEn
        ? [
            'What core biblical principle connects these verses together?',
            'How can you actively apply these Scriptures to your life today?',
          ]
        : [
            'እነዚህን ጥቅሶች አንድ የሚያደርጋቸው ዋናው የመጽሐፍ ቅዱስ መርህ ምንድን ነው?',
            'ይህንን የመጽሐፍ ቅዱስ ቃል ዛሬ በሕይወትዎ ውስጥ እንዴት በተግባር ያውሉታል?',
          ],
      isSilentOrUncertain: false,
      language,
    }
  }

  // 6. STRICT SCRIPTURE SILENCE RULE (Deuteronomy 29:29)
  // If no biblical text in the database establishes the answer, state silence honestly without speculation.
  return {
    directAnswer: isEn
      ? 'The available biblical text does not provide enough information to answer this question with certainty.'
      : 'የቀረበው የመጽሐፍ ቅዱስ ቃል ለዚህ ጥያቄ በእርግጠኝነት መልስ ለመስጠት በቂ መረጃ አይሰጥም።',
    primaryPassages: [
      {
        bookNr: 5,
        bookName: isEn ? 'Deuteronomy' : 'ኦሪት ዘዳግም',
        testament: 'OT',
        chapter: 29,
        verse: 29,
        text: isEn
          ? 'The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law.'
          : 'ምሥጢሩ ለአምላካችን ለእግዚአብሔር ነው፤ የተገለጠው ግን የዚህን ሕግ ቃሎች ሁሉ እናደርግ ዘንድ ለእኛ ለዘላለምም ለልጆቻችን ነው።',
        translation,
      },
    ],
    contextExplanation: isEn
      ? 'Deuteronomy 29:29 establishes the boundary of biblical study: where God’s Word speaks, we listen; where Scripture is silent, we must refrain from human speculation, personal opinions, or outside teachings.'
      : 'ዘዳግም 29፥29 የመጽሐፍ ቅዱስ ጥናት ወሰንን ያሳያል፦ የእግዚአብሔር ቃል በተናገረበት እንማራለን፤ ቅዱሳት መጻሕፍት ባልተናገሩበት ግን ከሰው ግምትና ከመጽሐፍ ቅዱስ ውጭ ከሆኑ ትምህርቶች እንቆጠባለን።',
    relatedVerses: [],
    reflectionQuestions: isEn
      ? ['Why is it important to trust God’s revealed Word rather than seeking beyond what is written?']
      : ['ከተጻፈው በላይ ከመፈለግ ይልቅ እግዚአብሔር በገለጠው ቃል ላይ መደገፍ ለምን አስፈላጊ ነው?'],
    isSilentOrUncertain: true,
    language,
  }
}
