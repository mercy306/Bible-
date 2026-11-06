import { CANON_66_BOOKS_MATRIX } from './perspectiveMatrixCanonData'
import { SAGA_ACTS } from './sagaData'
import { enrichPerspectiveMatrixItem } from './perspectiveMatrixExposition'

/**
 * Multidimensional Perspective Matrix (The POV Bible)
 * Core canonical dataset with 5 simultaneous real-time lenses:
 * 1. Geopolitical / Eyewitness (politics, logistics, empires, ordinary ground-level chronicler)
 * 2. Theological / Covenantal (divine meta-narrative, redemptive history, Christological typology)
 * 3. Linguistic / Hebrew-Greek Root (original language terms, etymology, theological depth, Strong's Concordance)
 * 4. Psychological / Human Experience (character emotional architecture, fear, grief, courage, modern resonance)
 * 5. Deep Exposition (scholarly narrative synthesis, archaeological dossier, key verse exegesis, Q&A)
 */

export type PerspectiveLensKey = 'geopolitical' | 'theological' | 'linguistic' | 'psychological' | 'exposition'

export interface ArchaeologicalEvidence {
  siteOrArtifactEn: string
  siteOrArtifactAm: string
  significanceEn: string
  significanceAm: string
  era?: string
}

export interface ScriptureCrossReference {
  ref: string
  noteEn: string
  noteAm: string
}

export interface KeyVerseExegesis {
  verseRef: string
  textAm: string
  textEn: string
  exegesisAm: string
  exegesisEn: string
}

export interface TypologicalSymbol {
  symbolAm: string
  symbolEn: string
  fulfillmentAm: string
  fulfillmentEn: string
  verseAnchor?: string
}

export interface TheologicalQA {
  questionAm: string
  questionEn: string
  answerAm: string
  answerEn: string
}

export interface DeepExpositionData {
  summaryAm: string
  summaryEn: string
  historicalDossierAm: string
  historicalDossierEn: string
  covenantalFrameworkAm: string
  covenantalFrameworkEn: string
  linguisticInsightsAm: string
  linguisticInsightsEn: string
  humanHeartAnalysisAm: string
  humanHeartAnalysisEn: string
  keyVersesExegesis?: KeyVerseExegesis[]
  archaeologicalEvidences?: ArchaeologicalEvidence[]
  theologicalQandA?: TheologicalQA[]
  transformativeTakeawaysAm: string[]
  transformativeTakeawaysEn: string[]
}

export interface LinguisticTerm {
  original: string
  translit: string
  language: 'Hebrew' | 'Greek' | 'Aramaic'
  amharicTerm: string
  literalMeaningEn: string
  literalMeaningAm: string
  theologicalDepthEn: string
  theologicalDepthAm: string
  canonicalUsageEn: string
  canonicalUsageAm: string
  strongsNumber?: string
  partOfSpeech?: string
  relatedScriptures?: string[]
}

export interface GeopoliticalLensData {
  titleEn: string
  titleAm: string
  empireEn: string
  empireAm: string
  timeframe: string
  eyewitnessPOVEn: string
  eyewitnessPOVAm: string
  historicalDynamicsEn: string
  historicalDynamicsAm: string
  groundRealitiesEn: string
  groundRealitiesAm: string
  archaeologicalEvidences?: ArchaeologicalEvidence[]
  socialCustomsAm?: string
  socialCustomsEn?: string
  rulingPowersDetailAm?: string
  rulingPowersDetailEn?: string
}

export interface TheologicalLensData {
  titleEn: string
  titleAm: string
  covenantStageEn: string
  covenantStageAm: string
  redemptiveThemeEn: string
  redemptiveThemeAm: string
  christForeshadowingEn: string
  christForeshadowingAm: string
  metaNarrativeAnchorEn: string
  metaNarrativeAnchorAm: string
  coreDoctrinesAm?: string[]
  coreDoctrinesEn?: string[]
  typologicalSymbols?: TypologicalSymbol[]
  crossReferences?: ScriptureCrossReference[]
}

export interface PsychologicalLensData {
  characterEn: string
  characterAm: string
  emotionalStateEn: string
  emotionalStateAm: string
  innerConflictEn: string
  innerConflictAm: string
  existentialQuestionEn: string
  existentialQuestionAm: string
  modernReflectionEn: string
  modernReflectionAm: string
  characterProfileAm?: string
  characterProfileEn?: string
  defenseMechanismsAm?: string
  defenseMechanismsEn?: string
  transformativeQuestionsAm?: string[]
  transformativeQuestionsEn?: string[]
}

export interface PerspectiveMatrixItem {
  id: string
  sceneId: string
  bookNr: number
  chapterStart: number
  chapterEnd?: number
  titleEn: string
  titleAm: string
  eraEn: string
  eraAm: string
  geopolitical: GeopoliticalLensData
  theological: TheologicalLensData
  linguistic: LinguisticTerm[]
  psychological: PsychologicalLensData
  deepExposition?: DeepExpositionData
}

export const PERSPECTIVE_MATRIX_DATA: PerspectiveMatrixItem[] = [
  // 1. CREATION & EDEN (Genesis 1-2)
  {
    id: 'matrix-creation',
    sceneId: 'act1-scene1',
    bookNr: 1,
    chapterStart: 1,
    chapterEnd: 2,
    titleEn: 'Creation & The Edenic Commission',
    titleAm: 'ፍጥረትና የኤደን ገነት ተልዕኮ',
    eraEn: 'In the Beginning',
    eraAm: 'በመጀመሪያ',
    geopolitical: {
      titleEn: 'The Anti-Pagan Polemic: Ancient Near Eastern Cosmology',
      titleAm: 'የጥንቱ መካከለኛው ምስራቅና የፍጥረት እውነት',
      empireEn: 'Pre-Imperial Ancient Near East',
      empireAm: 'ጥንታዊው የመስጴጦምያ ዘመን',
      timeframe: 'Dawn of History',
      eyewitnessPOVEn: 'In surrounding Babylonian and Canaanite cultures, creation was viewed as the bloody aftermath of warring, capricious monster-gods (Marduk slaying Tiamat). Humans were created merely as slave laborers to feed the gods. Genesis counters this by presenting one supreme Sovereign who speaks order into darkness without sweat or violence.',
      eyewitnessPOVAm: 'በጥንቷ ባቢሎንና ከነዓን ፍጥረት የተቆጠረው በጨካኞች አማልክት መካከል በተደረገ የደም ፍልሚያ እንደተገኘ ነበር። ሰዎችንም የፈጠሩት ለአማልክት ባሪያ እንዲሆኑ ነው። ኦሪት ዘፍጥረት ግን ይህን ሁሉ ውድቅ በማድረግ ብቸኛው ሉዓላዊ አምላክ ያለ ምንም ድካምና ጦርነት በቃሉ ብቻ ውበትንና ሥርዓትን እንደፈጠረ ያውጃል።',
      historicalDynamicsEn: 'Genesis 1 is an ideological declaration of human freedom: every person—not just the Pharaoh or the King—is the royal living statue of God.',
      historicalDynamicsAm: 'ዘፍጥረት 1 የሰው ልጅን ክብር ያበሠረ አዋጅ ነው፤ ንጉሡ ወይም ፈርዖን ብቻ ሳይሆን እያንዳንዱ የሰው ልጅ የእግዚአብሔር ንጉሣዊ መልክ ተሸካሚ ነው።',
      groundRealitiesEn: 'The sun and moon are deliberately called simply "greater light" and "lesser light"—refusing even to name them to demythologize the astral gods worshipped by neighboring superpowers.',
      groundRealitiesAm: 'ፀሐይና ጨረቃ በአካባቢው አሕዛብ ዘንድ እንደ አማልክት ይመለኩ ስለነበር፤ መጽሐፍ ቅዱስ አማልክት እንዳልሆኑ ለማሳየት “ታላቁ ብርሃን” እና “ታናሹ ብርሃን” ብሎ ብቻ ይጠራቸዋል።'
    },
    theological: {
      titleEn: 'The Cosmic Temple & The Sabbath Covenant',
      titleAm: 'የጽንፈ ዓለም ቤተ መቅደስና የሰንበት ቃል ኪዳን',
      covenantStageEn: 'The Edenic / Creation Covenant',
      covenantStageAm: 'የፍጥረትና የኤደን ቃል ኪዳን',
      redemptiveThemeEn: 'God does not create out of deficiency but overflowing communal trinitarian love. Creation is structured like a seven-day cosmic temple where God ascends his throne to rest and rule with humanity.',
      redemptiveThemeAm: 'እግዚአብሔር ፍጥረትን የፈጠረው ከጎደለው ሳይሆን ከማይነጥፍ የፍቅር ሙላቱ ነው። ዓለም በሰባት ቀናት የተዘጋጀች መለኮታዊ ቤተ መቅደስ ስትሆን፤ እግዚአብሔር በሰንበት አርፎ ከሰው ልጆች ጋር በኅብረት ነገሠ።',
      christForeshadowingEn: 'Christ is the true Last Adam (1 Cor 15:45), the Image of the Invisible God (Col 1:15), through whom and for whom all things were created.',
      christForeshadowingAm: 'ክርስቶስ እውነተኛው የኋለኛው አዳም (1 ቆሮ 15:45) እና የማይታየው አምላክ አምሳል ነው፤ ሁሉ በእርሱና ለእርሱ ተፈጥሯል።',
      metaNarrativeAnchorEn: 'The Bible opens in a Garden (Genesis 2) and ends in a Garden-City (Revelation 22), framing all 66 books as a journey from paradise lost to paradise redeemed.',
      metaNarrativeAnchorAm: 'መጽሐፍ ቅዱስ በገነት ይጀምራል (ዘፍ 2)፤ በመጨረሻም በገነት-ከተማ ይደመደማል (ራእይ 22)፤ መላው ቅዱሳት መጻሕፍት ከጠፋችው ገነት ወደ ተዋጀችው ዘላለማዊ ከተማ የመመለስ ጉዞ ነው።'
    },
    linguistic: [
      {
        original: 'בָּרָא',
        translit: 'Bara',
        language: 'Hebrew',
        amharicTerm: 'ፈጠረ (ከምንም)',
        literalMeaningEn: 'To shape, fashion, or bring into existence effortlessly',
        literalMeaningAm: 'ከምንም ነገር ወደ መኖር ማምጣት',
        theologicalDepthEn: 'In Hebrew scripture, "Bara" has exclusively God as its grammatical subject. Humans can "make" (Asah) or "form" (Yatsar), but only God can "Bara"—initiating reality out of absolute nothingness.',
        theologicalDepthAm: 'በዕብራይስጥ ቋንቋ “ባራ” የሚለው ቃል ባለቤት ሁልጊዜ እግዚአብሔር ብቻ ነው። ሰው ካለ ነገር ሊሠራ (ዓሣህ) ይችላል፤ ከምንም ወደ መኖር ግን መፍጠር የሚችለው አምላክ ብቻ ነው።',
        canonicalUsageEn: 'Gen 1:1, Ps 51:10 ("Create in me a clean heart"), Isa 65:17',
        canonicalUsageAm: 'ዘፍ 1:1፣ መዝ 51:10 (“ንጹሕ ልብን ፍጠርልኝ”)፣ ኢሳ 65:17'
      },
      {
        original: 'צֶלֶם',
        translit: 'Tselem',
        language: 'Hebrew',
        amharicTerm: 'መልከ-አምሳል (ንጉሣዊ ውክልና)',
        literalMeaningEn: 'Image, physical replica, representative statue',
        literalMeaningAm: 'አምሳል፣ ሕያው ተወካይ',
        theologicalDepthEn: 'In ancient Egypt, only the Pharaoh was the "tselem" of the sun-god. Genesis democratizes kingship: every human being is God’s living ambassador with inherent dignity.',
        theologicalDepthAm: 'በጥንቷ ግብፅ ፈርዖን ብቻ የአማልክት “ጸለም” (አምሳል) ይባል ነበር። ዘፍጥረት ግን እያንዳንዱ ሰው የተከበረ የእግዚአብሔር አምባሳደር መሆኑን በማወጅ ፍጹም እኩልነትን አወጀ።',
        canonicalUsageEn: 'Gen 1:26-27, Gen 9:6, Col 1:15',
        canonicalUsageAm: 'ዘፍ 1:26-27፣ ዘፍ 9:6፣ ቆላ 1:15'
      },
      {
        original: 'רוּחַ',
        translit: 'Ruach',
        language: 'Hebrew',
        amharicTerm: 'መንፈስ / እስትንፋስ / ነፋስ',
        literalMeaningEn: 'Wind, breath, invisible powerful life-force',
        literalMeaningAm: 'ሕያው እስትንፋስ፣ መንፈስ',
        theologicalDepthEn: 'The invisible, dynamic presence of God vibrating over the chaos to birth life, structure, and beauty.',
        theologicalDepthAm: 'በባዶነትና በጨለማ ላይ ሕይወትን፣ ብርሃንንና ውበትን ለማፍራት የተንቀሳቀሰው ሕያው መለኮታዊ እስትንፋስ።',
        canonicalUsageEn: 'Gen 1:2, Gen 2:7, Ezek 37:9, John 3:8',
        canonicalUsageAm: 'ዘፍ 1:2፣ ዘፍ 2:7፣ ሕዝ 37:9፣ ዮሐ 3:8'
      }
    ],
    psychological: {
      characterEn: 'The First Humans (Adam & Eve)',
      characterAm: 'አዳምና ሔዋን',
      emotionalStateEn: 'Unfiltered wonder, innocence, profound peace, safe vulnerability',
      emotionalStateAm: 'የማያቋርጥ አድናቆት፣ ቅድስና፣ ፍጹም ሰላምና ፍቅር',
      innerConflictEn: 'Before the fracture: zero identity anxiety. Their worth is anchored in being made in the Creator’s gaze, needing no performance or disguise.',
      innerConflictAm: 'ከውድቀት በፊት ምንም ዓይነት የጭንቀት ወይም የብቸኝነት ስሜት አልነበረም፤ ማንነታቸው በፈጣሪ ፍቅር የተጠበቀ ነበር።',
      existentialQuestionEn: '"Who are we in this vast sanctuary, and how do we steward this sacred garden with God?"',
      existentialQuestionAm: '“በዚህ ታላቅ መቅደስ ውስጥ እኛ እነማን ነን? ይህንስ የተቀደሰ ገነት ከፈጣሪያችን ጋር እንዴት እንጠብቃለን?”',
      modernReflectionEn: 'Modern humans are overwhelmed by constant identity fabrication and performance anxiety. Eden reveals that our original design was resting in belonging before doing.',
      modernReflectionAm: 'የዘመናችን ሰው በማንነት ጭንቀትና ራስን በማስመሰል ተጠምዷል። የኤደን ገነት እውነተኛ ዕረፍት የሚገኘው ከሥራ በፊት በፈጣሪ መወደድ ውስጥ መሆኑን ያስተምረናል።'
    }
  },

  // 2. THE FALL & PROTOEVANGELIUM (Genesis 3)
  {
    id: 'matrix-fall',
    sceneId: 'act1-scene2',
    bookNr: 1,
    chapterStart: 3,
    chapterEnd: 4,
    titleEn: 'The Fracture: The Fall & The Protoevangelium',
    titleAm: 'ውድቀት፣ የሰው ልጅ መለያየትና የመጀመሪያው የተስፋ ቃል',
    eraEn: 'The Dawn of History',
    eraAm: 'የቀደመው ዘመን',
    geopolitical: {
      titleEn: 'The Origins of Tribal Fear and Fortified Cities',
      titleAm: 'የጎሣ ፍርሃትና የከተሞች መቆርቆር ጅምር',
      empireEn: 'Early Pre-Dynastic Near East',
      empireAm: 'የጥንት የሰዎች ሰፈራ',
      timeframe: '~4000–3500 BC',
      eyewitnessPOVEn: 'Following the expulsion and Cain’s fratricide, humanity split. Cain’s line built the first fortified walled cities (Enoch) not out of communal joy, but out of paranoid terror of blood-feuds and revenge from roving clans.',
      eyewitnessPOVAm: 'ከገነት መባረርና ከአቤል መገደል በኋላ የሰው ልጅ ተከፋፈለ። የቃየል ዘሮች የመጀመሪያዎቹን ምሽግ ከተሞች የሠሩት በደስታ ሳይሆን፣ ደም አፍሳሽ የበቀል ጥቃትን በመፍራትና በስጋት ነበር።',
      historicalDynamicsEn: 'Weaponry and metallurgy (Tubal-Cain) developed alongside the rapid escalation of poetic boastfulness in retributive slaughter (Lamech’s song of 77-fold revenge).',
      historicalDynamicsAm: 'የጦር መሣሪያዎችና የብረት ሥራ የተስፋፉት የሰው ልጅ የበቀል ጥማት እየጨመረ ሲመጣ ነበር (የላሜክ የ77 እጥፍ የበቀል ዘፈን)።',
      groundRealitiesEn: 'Human civilization began with fear at its architectural core: walls, weapons, and ancestral grudges.',
      groundRealitiesAm: 'የሰው ልጅ ሥልጣኔ የጀመረው በፍርሃት ነበር፤ ግድግዳዎች፣ ጦሮችና የቂም በቀል መሠረቶች።'
    },
    theological: {
      titleEn: 'The Seed Promise (Protoevangelium) & Animal Sacrifice',
      titleAm: 'የሴቲቱ ዘር የተስፋ ቃልና የመጀመሪያው መስዋዕት',
      covenantStageEn: 'The Adamic Curse & Grace Counter-Measure',
      covenantStageAm: 'የአዳም መርገምና የመለኮታዊ ጸጋ ምላሽ',
      redemptiveThemeEn: 'God does not abandon the fractured cosmos to the serpent. Right inside the judgment, God embeds the first gospel promise (Genesis 3:15): the seed of the woman will crush the serpent’s head.',
      redemptiveThemeAm: 'እግዚአብሔር የወደቀውን ዓለም ለዲያብሎስ አልተወውም። በቅጣቱ መካከል የመጀመሪያውን የወንጌል ብሥራት (ዘፍ 3:15) ተከለ፤ የሴቲቱ ዘር የእባቡን ራስ ይቀጠቅጣል።',
      christForeshadowingEn: 'Christ’s heel was struck on the Cross, but in that very strike, he crushed the skull of sin, death, and Satan (Heb 2:14). God clothed the trembling sinners with animal skins, demonstrating that guilt requires the shedding of innocent blood.',
      christForeshadowingAm: 'በመስቀል ላይ የክርስቶስ ተረከዝ ቆሰለ፤ በዚያም መከራ የሞትን፣ የኃጢአትንና የዲያብሎስን ራስ ቀጠቀጠ (ዕብ 2:14)። እግዚአብሔር አዳምንና ሔዋንን በቁርበት አለበሳቸው፤ ይህም ያለ ንጹሕ ደም መፍሰስ ኃፍረት እንደማይሸፈን አሳየ።',
      metaNarrativeAnchorEn: 'The entire biblical narrative from Genesis 3 to Revelation 20 is the historical pursuit and triumph of this promised Seed.',
      metaNarrativeAnchorAm: 'ከዘፍጥረት 3 እስከ ራእይ 20 ያለው መላው የመጽሐፍ ቅዱስ ታሪክ ይህ የተስፋ ዘር በታሪክ ውስጥ የተገለጠበትና ድል የነሳበት ምስክር ነው።'
    },
    linguistic: [
      {
        original: 'זֶרַע',
        translit: 'Zera',
        language: 'Hebrew',
        amharicTerm: 'ዘር (ተስፋ የተሰጠበት ዘር)',
        literalMeaningEn: 'Seed, offspring, descendants',
        literalMeaningAm: 'ዘር፣ ትውልድ',
        theologicalDepthEn: 'The linchpin word of biblical covenants. It begins singular (the champion who crushes the serpent), expands plural through Abraham, and concentrates back into Christ (Gal 3:16).',
        theologicalDepthAm: 'የመጽሐፍ ቅዱስ ቃል ኪዳኖች ቁልፍ ቃል ነው። መጀመሪያ ነጠላ (እባቡን የሚቀጠቅጠው አዳኝ)፣ ከዚያ በአብርሃም ዘር ብዙ፣ በመጨረሻም በክርስቶስ ተፈጸመ (ገላ 3:16)።',
        canonicalUsageEn: 'Gen 3:15, Gen 12:7, Gal 3:16',
        canonicalUsageAm: 'ዘፍ 3:15፣ ዘፍ 12:7፣ ገላ 3:16'
      },
      {
        original: 'תְּשׁוּקָה',
        translit: 'Teshuqah',
        language: 'Hebrew',
        amharicTerm: 'የበላይ የመሆን ፍላጎት / መሻት',
        literalMeaningEn: 'An intense urge to overpower, master, or consume',
        literalMeaningAm: 'አሸንፎ የመግዛት ወይም የመቆጣጠር መሻት',
        theologicalDepthEn: 'Used only 3 times in the Old Testament. In Gen 3:16 and Gen 4:7, it describes the predatory urge of sin crouching at Cain’s door seeking to master him.',
        theologicalDepthAm: 'በብሉይ ኪዳን ውስጥ ሦስት ጊዜ ብቻ ተጠቅሷል። በዘፍ 3:16 እና ዘፍ 4:7 ኃጢአት በደጅ አድብቶ ሰውን በቁጥጥሩ ሥር ለማድረግ ያለውን አውሬያዊ ፍላጎት ያሳያል።',
        canonicalUsageEn: 'Gen 3:16, Gen 4:7, Song 7:10',
        canonicalUsageAm: 'ዘፍ 3:16፣ ዘፍ 4:7፣ መኃ 7:10'
      }
    ],
    psychological: {
      characterEn: 'Adam, Eve, and Cain',
      characterAm: 'አዳም፣ ሔዋን እና ቃየል',
      emotionalStateEn: 'Devastating shame, fear of exposure, alienation, bitter jealousy',
      emotionalStateAm: 'ብርቱ ኃፍረት፣ መጋለጥን መፍራት፣ ራስን ማግለል፣ መራራ ቅናት',
      innerConflictEn: 'For the first time, humans look at themselves and feel naked, inadequate, and terrified of God. Cain battles toxic comparison: "Why was my brother accepted and not me?"',
      innerConflictAm: 'የሰው ልጅ ለመጀመሪያ ጊዜ ራሱን ተመልክቶ ኃፍረት ተሰማው፤ ከእግዚአብሔርም ሸሸ። ቃየል ደግሞ መርዘኛ ንጽጽር ውስጥ ገባ፡ “የወንድሜ መሥዋዕት ለምን ተወደደ? የእኔስ ለምን ተናቀ?”',
      existentialQuestionEn: '"Where can I hide from the light now that my innocence is gone?"',
      existentialQuestionAm: '“ቅድስናዬ ከጠፋ በኋላ ከእግዚአብሔር ፊት የት ልደበቅ?”',
      modernReflectionEn: 'The psychology of shame always drives humans into hiding behind masks, perfectionism, and projecting blame onto others—a cycle that only radical grace can break.',
      modernReflectionAm: 'የኃፍረት ስሜት ሁልጊዜ ሰውን ወደ መደበቅ፣ ጭንብል ወደ ማጥለቅና ሌሎችን ወደ መውቀስ ይገፋል። ይህን የውድቀት አዙሪት መስበር የሚችለው የእግዚአብሔር ይቅርታ ብቻ ነው።'
    }
  },

  // 3. THE PATRIARCHS: ABRAHAM ON MOUNT MORIAH (Genesis 22)
  {
    id: 'matrix-moriah',
    sceneId: 'act2-scene2',
    bookNr: 1,
    chapterStart: 22,
    chapterEnd: 22,
    titleEn: 'Mount Moriah: The Akedah & The Provided Lamb',
    titleAm: 'የሞሪያ ተራራ፡ የይስሐቅ መታሰርና የተዘጋጀው በግ',
    eraEn: '~2000 BC',
    eraAm: '~2000 ዓ.ዓ',
    geopolitical: {
      titleEn: 'Bronze Age Child-Sacrifice Cults of Canaan',
      titleAm: 'የከነዓን አሕዛብና የሕፃናት መሥዋዕት አምልኮ',
      empireEn: 'Canaanite City-States',
      empireAm: 'የከነዓን ከተሞች',
      timeframe: 'Middle Bronze Age',
      eyewitnessPOVEn: 'To the surrounding pagan world (Molech and Baal worship), sacrificing your firstborn was seen as the supreme demonstration of appeasement to fickle deities. God’s call to Abraham subverted this entire brutal ancient industry: God demonstrated that unlike pagan gods, the God of Israel provides the sacrifice rather than demanding human slaughter.',
      eyewitnessPOVAm: 'በከነዓን ጣዖታት አምልኮ (እንደ ሞሎክና ባአል) የመጀመሪያውን ልጅ ማረድ የአማልክት ቁጣን ለማብረድ ከፍተኛ መሥዋዕት ተደርጎ ይታሰብ ነበር። እግዚአብሔር አብርሃምን የፈተነበት መንገድ ግን ይህንን አረመኔያዊ ሥርዓት ሙሉ በሙሉ ሰበረው፤ እርሱ ሰው የማይሰዋ፣ ይልቁንም ራሱ መሥዋዕቱን የሚያዘጋጅ አምላክ መሆኑን አሳየ።',
      historicalDynamicsEn: 'Mount Moriah is the exact geographic ridge that 1,000 years later became the Temple Mount in Jerusalem, and 2,000 years later Golgotha.',
      historicalDynamicsAm: 'የሞሪያ ተራራ ከ1,000 ዓመታት በኋላ የኢየሩሳሌም ቤተ መቅደስ፣ ከ2,000 ዓመታት በኋላ ደግሞ የቀራንዮ ኮረብታ የሆነው ያው ቦታ ነው።',
      groundRealitiesEn: 'A lone elderly nomad and his teen son hiking three silent days across limestone hills with wood, fire, and a knife.',
      groundRealitiesAm: 'አንድ አረጋዊ አባትና ታዳጊ ልጁ እንጨት፣ እሳትና ቢላዋ ይዘው በኖራ ኮረብቶች ላይ ያደረጉት የሦስት ቀናት አስጨናቂ ጉዞ።'
    },
    theological: {
      titleEn: 'The Substituted Ram & The Mount of the Lord',
      titleAm: 'የተተካው በግና የእግዚአብሔር አቅርቦት',
      covenantStageEn: 'The Sealed Abrahamic Covenant',
      covenantStageAm: 'የጸናው የአብርሃም ቃል ኪዳን',
      redemptiveThemeEn: 'God tests Abraham’s faith to show that he loves the Giver more than the gift. When the knife is raised, the ram caught in the thicket by its horns steps into Isaac’s place.',
      redemptiveThemeAm: 'እግዚአብሔር አብርሃምን የፈተነው ስጦታውን ከሰጪው አብልጦ እንዳይወድ ነው። ቢላዋው በተነሳበት ቅጽበት ቀንዶቹ በዕፀ ሳቤቅ የተያዘው በግ በይስሐቅ ፈንታ ተተካ።',
      christForeshadowingEn: 'God spared Abraham’s son, but "did not spare his own Son, but gave him up for us all" (Rom 8:32). Isaac carrying the wood up the hill foreshadows Jesus carrying his wooden cross to Golgotha.',
      christForeshadowingAm: 'እግዚአብሔር የአብርሃምን ልጅ ማረ፤ “ለገዛ ልጁ ግን አልራራም፣ ስለ ሁላችን አሳልፎ ሰጠው እንጂ” (ሮሜ 8:32)። ይስሐቅ እንጨት ተሸክሞ ወደ ተራራው መውጣቱ ኢየሱስ መስቀሉን ተሸክሞ ወደ ቀራንዮ የመውጣቱ ጥላ ነው።',
      metaNarrativeAnchorEn: 'Yahweh-Yireh ("The Lord Will Provide"): On the mountain of the Lord, redemption will be provided forever.',
      metaNarrativeAnchorAm: 'ያህዌ ይርኤ (“እግዚአብሔር ያዘጋጃል”)፤ በእግዚአብሔር ተራራ ላይ ዘላለማዊ ድነት ተዘጋጅቷል።'
    },
    linguistic: [
      {
        original: 'יְהוָה יִרְאֶה',
        translit: 'Yahweh-Yireh',
        language: 'Hebrew',
        amharicTerm: 'ያህዌ ይርኤ (እግዚአብሔር ያዘጋጃል)',
        literalMeaningEn: 'The Lord sees / The Lord will see to it / The Lord will provide',
        literalMeaningAm: 'እግዚአብሔር ይመለከታል / ያዘጋጃል',
        theologicalDepthEn: 'In Hebrew, "to see" (Raah) and "to provide" are intimately linked. Because God sees our deepest mortal dilemma, he provides the ultimate substitute.',
        theologicalDepthAm: 'በዕብራይስጥ “ማየት” እና “ማዘጋጀት” አንድ ናቸው። እግዚአብሔር የሰውን ልጅ የመዳን ችግር አስቀድሞ ስለሚያይ፣ ራሱ ፍጹም ምትክ ያዘጋጃል።',
        canonicalUsageEn: 'Gen 22:14, 1 Sam 16:1, Rom 8:32',
        canonicalUsageAm: 'ዘፍ 22:14፣ 1 ሳሙ 16:1፣ ሮሜ 8:32'
      },
      {
        original: 'חָסַךְ',
        translit: 'Khasakh',
        language: 'Hebrew',
        amharicTerm: 'አልራራም / አላስቀረም',
        literalMeaningEn: 'To withhold, spare, keep back',
        literalMeaningAm: 'አላስቀረም፣ አልከለከለም',
        theologicalDepthEn: 'God says to Abraham: "You have not withheld (khasakh) your only son from me." Paul quotes this exact word in Romans 8:32 describing the Father giving up Christ.',
        theologicalDepthAm: 'እግዚአብሔር አብርሃምን “አንድ ልጅህን አልከለከልከኝም” አለው። ሐዋርያው ጳውሎስ በሮሜ 8:32 አብ ልጁን ስለ እኛ መስጠቱን ሲገልጽ ይህንኑ ቃል ተጠቀመ።',
        canonicalUsageEn: 'Gen 22:12, Gen 22:16, Rom 8:32',
        canonicalUsageAm: 'ዘፍ 22:12፣ ዘፍ 22:16፣ ሮሜ 8:32'
      }
    ],
    psychological: {
      characterEn: 'Abraham & Isaac',
      characterAm: 'አብርሃም እና ይስሐቅ',
      emotionalStateEn: 'Unspeakable heartbreak, resolute trust, bewildered obedience',
      emotionalStateAm: 'የሚከብድ የልብ ስብራት፣ ጽኑ እምነት፣ ድምፅ አልባ መታዘዝ',
      innerConflictEn: 'Abraham walked for 3 days in agony: "How can God fulfill his promise through Isaac if Isaac is slaughtered?" He reasoned that God was able even to raise him from the dead (Heb 11:19).',
      innerConflictAm: 'አብርሃም ለሦስት ቀናት በታላቅ ጭንቀት ተጓዘ፤ “ይስሐቅ ከሞተ እግዚአብሔር ተስፋውን እንዴት ይፈጽማል?” ነገር ግን እግዚአብሔር ከሙታን እንኳ ሊያስነሣው እንደሚችል አመነ (ዕብ 11:19)።',
      existentialQuestionEn: '"Do I love the covenant gift more than the Covenant Giver?"',
      existentialQuestionAm: '“ከፈጣሪ ይልቅ ስጦታውን አብልጬ እወዳለሁን?”',
      modernReflectionEn: 'Every person faces a Mount Moriah where they must place their most cherished dreams, relationships, or securities on the altar to discover that God alone is their true life.',
      modernReflectionAm: 'እያንዳንዱ ሰው ውድ የሆነውን ሕልሙን ወይም ደኅንነቱን በእግዚአብሔር መሠዊያ ላይ የሚያስቀምጥበት የሞሪያ ተራራ ፈተና ይገጥመዋል። ያን ጊዜ እግዚአብሔር ብቻ እውነተኛ ሕይወት መሆኑ ይገለጣል።'
    }
  },

  // 4. THE EXODUS: PASSOVER & RED SEA (Exodus 12-14)
  {
    id: 'matrix-exodus',
    sceneId: 'act2-scene5',
    bookNr: 2,
    chapterStart: 12,
    chapterEnd: 14,
    titleEn: 'Exodus: The Passover Blood & The Red Sea Deliverance',
    titleAm: 'ዘጸአት፡ የፋሲካው ደም እና የቀይ ባሕር መከፈል',
    eraEn: '~1446 BC',
    eraAm: '~1446 ዓ.ዓ',
    geopolitical: {
      titleEn: 'The Shattering of Egypt’s Imperial Pantheon',
      titleAm: 'የግብፅ ኃያል መንግሥትና ጣዖታት መውደቅ',
      empireEn: 'New Kingdom Egypt (18th Dynasty)',
      empireAm: 'የጥንቷ ኃያል ግብፅ',
      timeframe: 'Late Bronze Age',
      eyewitnessPOVEn: 'Egypt was the undisputed superpower of the Mediterranean basin, backed by elite chariot battalions and divine kingship. The plagues systematically targeted Egyptian gods: the Nile turned to blood (disgracing Hapi), darkness covering the land (disgracing the sun-god Ra), and the death of Pharaoh’s firstborn (crushing Pharaoh’s claim to divinity).',
      eyewitnessPOVAm: 'ግብፅ በሜዲትራኒያን አካባቢ በሠረገላ ሠራዊቷና በፈርዖን አምላክነት የምትመካ ልዕለ-ኃያል ነበረች። አሥሩ መቅሠፍቶች ግን አማልክቶቿን አንድ በአንድ አዋረዱ፤ አባይ ወደ ደም ተቀየረ (የሐፒ ውርደት)፣ ምድሪቱ ጨለመች (የፀሐዩ አምላክ ራ ውርደት)፣ የበኩር ልጆች ሞቱ (የፈርዖን አምላክነት ፍጻሜ)።',
      historicalDynamicsEn: '600 elite Egyptian chariots chased runaway slave families, pinning them against the sea. The miraculous wind parted the waters, and the muddy seabed became a graveyard for bronze armor.',
      historicalDynamicsAm: '600 ምርጥ የግብፅ ሠረገሎች ባሪያ የነበሩ ምስኪን ሕዝቦችን ወደ ባሕሩ ገፉአቸው፤ እግዚአብሔር ግን ባሕሩን ከፍሎ መንገደኛ አደረጋቸው፤ የፈርዖን ሠራዊት ግን በባሕሩ ውስጥ ሰመጠ።',
      groundRealitiesEn: 'Terrified families packing flat bread with no yeast in the middle of the night, their doors smeared with fresh red blood.',
      groundRealitiesAm: 'እኩለ ሌሊት ላይ ያልቦካ ቂጣ ይዘው የሚሸሹ እና በደጃፋቸው ላይ የቀይ በግ ደም የቀቡ የተጨነቁ ቤተሰቦች።'
    },
    theological: {
      titleEn: 'The Slain Lamb, Cosmic Blood Shield & Liberation',
      titleAm: 'የታረደው በግ፣ የደሙ ጥበቃና ነፃነት',
      covenantStageEn: 'The Mosaic / Sinai Covenant Inauguration',
      covenantStageAm: 'የሙሴና የሲና ቃል ኪዳን መባቻ',
      redemptiveThemeEn: 'Yahweh wages war against slavery and oppression. Salvation is by substitution: the judgment fell either on the firstborn or on the unblemished lamb in their place.',
      redemptiveThemeAm: 'እግዚአብሔር በባርነትና በጭቆና ላይ ፈረደ። ድነት የተገኘው በምትክ ነው፤ ፍርዱ የወደቀው በበኩሩ ላይ ካልሆነ በንጹሑ በግ ላይ ነበር።',
      christForeshadowingEn: '"Christ our Passover lamb has been sacrificed for us" (1 Cor 5:7). Not a bone was broken; his blood applied to the doorposts of our hearts delivers us from the angel of eternal death.',
      christForeshadowingAm: '“ፋሲካችን ክርስቶስ ታርዶልናልና” (1 ቆሮ 5:7)። አጥንቱ አልተሰበረም፤ በልባችን መቃን ላይ የተቀባው ደሙ ከዘላለም ሞት አዳነን።',
      metaNarrativeAnchorEn: 'The Exodus is the foundational archetype of salvation in the Old Testament, just as the Cross is in the New.',
      metaNarrativeAnchorAm: 'የቀይ ባሕር መሻገር በብሉይ ኪዳን ትልቁ የድነት ምሳሌ ሲሆን፣ በአዲስ ኪዳን ደግሞ የመስቀሉ ቤዛነት ዋና መሠረት ነው።'
    },
    linguistic: [
      {
        original: 'פֶּסַח',
        translit: 'Pesach',
        language: 'Hebrew',
        amharicTerm: 'ፋሲካ (ማለፍ / መጠበቅ)',
        literalMeaningEn: 'To pass over, spring over, hover protectively',
        literalMeaningAm: 'ማለፍ፣ ጠብቆ ማዳን',
        theologicalDepthEn: 'Pesach does not mean a passive skipping; it suggests the Lord hovering protectively over the blood-marked house, blocking the destroyer from entering.',
        theologicalDepthAm: 'ፋሲካ ዝም ብሎ ማለፍ ብቻ ሳይሆን፤ እግዚአብሔር በደሙ በተቀባው ቤት ላይ ተጋርዶ አጥፊው እንዳይገባ መከላከሉን ያመለክታል።',
        canonicalUsageEn: 'Exod 12:11, 12:27, 1 Cor 5:7',
        canonicalUsageAm: 'ዘጸ 12:11፣ 12:27፣ 1 ቆሮ 5:7'
      },
      {
        original: 'גָּאַל',
        translit: 'Ga\'al',
        language: 'Hebrew',
        amharicTerm: 'ዋጀ / ቤዛ ሆነ',
        literalMeaningEn: 'To redeem, buy back family from slavery',
        literalMeaningAm: 'ከባርነት በዋጋ መዋጀት',
        theologicalDepthEn: 'God acts as Israel’s Go\'el—the closest wealthy relative who pays the ransom price to free impoverished enslaved kin.',
        theologicalDepthAm: 'እግዚአብሔር ለእስራኤል እንደ ቅርብ ዘመድ ዋጋ ከፍሎ ከባርነት ቀንበር ነፃ አወጣቸው።',
        canonicalUsageEn: 'Exod 6:6, Ruth 3:13, Job 19:25',
        canonicalUsageAm: 'ዘጸ 6:6፣ ሩት 3:13፣ ኢዮ 19:25'
      }
    ],
    psychological: {
      characterEn: 'The Enslaved Israelites & Moses',
      characterAm: 'የእስራኤል ምርኮኞችና ሙሴ',
      emotionalStateEn: 'Generational trauma, panic, paralysis, soaring euphoria',
      emotionalStateAm: 'የዘመናት የባርነት ስብራት፣ ከፍተኛ ድንጋጤ፣ ድልና እልልታ',
      innerConflictEn: 'Trapped at the sea, centuries of slave mindset instantly erupted: "Was it because there were no graves in Egypt that you took us to die in the wilderness?" They wanted to surrender back into bondage.',
      innerConflictAm: 'በባሕሩ ዳርቻ ሲጨነቁ የባርነት መንፈስ ተቀሰቀሰባቸው፡ “በግብፅ መቃብር ስለሌለ ነው በምድረ በዳ እንድንሞት ያመጣኸን?” ወደ ግብፅ ባርነት መመለስን ተመኙ።',
      existentialQuestionEn: '"Can a broken slave nation ever truly be free, or is our fear stronger than God’s sea-splitting wind?"',
      existentialQuestionAm: '“የተሰበረ ልብ ያለው የባሪያ ሕዝብ በእውነት ነፃ ሊወጣ ይችላልን?”',
      modernReflectionEn: 'Physical chains are easier to break than mental slavery. When facing new obstacles, humans often crave familiar dysfunctions over the terrifying freedom of faith.',
      modernReflectionAm: 'የእጅና የእግር ሰንሰለት ከልብና ከአእምሮ ባርነት ይልቅ ቶሎ ይሰበራል። ችግር ሲገጥመን ብዙ ጊዜ ወደ ቀደመው ጎጂ ልማዳችን ለመመለስ የምንፈተነው ለዚህ ነው።'
    }
  },

  // 5. THE KINGDOM CRISIS: DAVID IN THE CAVE (1 Samuel 22 & Psalm 57)
  {
    id: 'matrix-adullam',
    sceneId: 'act3-scene5',
    bookNr: 9,
    chapterStart: 22,
    chapterEnd: 22,
    titleEn: 'In the Cave of Adullam: Outlaws & The Hidden King',
    titleAm: 'በአዶላም ዋሻ ውስጥ፡ የተጨነቁት ሰዎችና የተሰወረው ንጉሥ',
    eraEn: '~1015 BC',
    eraAm: '~1015 ዓ.ዓ',
    geopolitical: {
      titleEn: 'Iron Age Chieftain Rivalries & Philistine Borderlands',
      titleAm: 'የብረት ዘመን የሳኦል ዘመቻና የፍልስጥኤማውያን ድንበር',
      empireEn: 'Early United Kingdom vs Philistines',
      empireAm: 'የጥንቷ እስራኤልና ፍልስጥኤም',
      timeframe: 'Early Iron Age II',
      eyewitnessPOVEn: 'David was hunted by King Saul’s national security apparatus across the limestone ravines of Judah. Stripped of his wife, royal status, and best friend Jonathan, he took refuge in the caves near the Philistine frontier. Around him gathered 400 social outcasts: men in debt, men in distress, and men bitter of soul.',
      eyewitnessPOVAm: 'ዳዊት በንጉሥ ሳኦል ሰላዮችና ሠራዊት በይሁዳ ተራሮች ላይ እንደ አውሬ ታደነ። ሚስቱን፣ ክብሩንና ዮናታንን ተነጥቆ በፍልስጥኤም ድንበር አቅራቢያ በሚገኝ ዋሻ ተደበቀ። በዚያም የተጨነቁ፣ ዕዳ ያለባቸውና ነፍሳቸው ያረረች 400 ምስኪን ሰዎች ወደ እርሱ ተሰበሰቡ።',
      historicalDynamicsEn: 'David forged this motley crew of bankrupt refugees into his legendary "Mighty Men" (Gibborim) who would later conquer Jerusalem.',
      historicalDynamicsAm: 'ዳዊት እነዚህን የተጣሉና ዕዳ ያለባቸውን ሰዎች ቀርፆ በኋላ ላይ ኢየሩሳሌምን የተቆጣጠሩ ታላላቅ ጀግኖች አደረጋቸው።',
      groundRealitiesEn: 'Cold, damp bat caves smelling of woodsmoke and damp dust, keeping absolute silence whenever Saul’s scout patrols rode past.',
      groundRealitiesAm: 'የሳኦል ፈረሰኞች በአካባቢው ሲያልፉ ድምፅ ሳያሰሙ በጨለማና በብርድ ዋሻ ውስጥ ተደብቆ ማደር።'
    },
    theological: {
      titleEn: 'The Suffering Anointed King (Typology of Christ)',
      titleAm: 'መከራን የተቀበለው ቅቡዕ ንጉሥ (የክርስቶስ ጥላ)',
      covenantStageEn: 'Pre-Davidic Covenant Forging',
      covenantStageAm: 'የዳዊት ቃል ኪዳን መሠረት',
      redemptiveThemeEn: 'The pattern of biblical kingship: the true king is anointed in secret, rejected by the official establishment, suffers in the wilderness, and embraces the broken before ascending the throne.',
      redemptiveThemeAm: 'የመጽሐፍ ቅዱስ የመሪነት ሥርዓት ይኸው ነው፤ እውነተኛው ንጉሥ በስውር ይቀባል፣ በመንግሥቱ ባለሥልጣናት ይናቃል፣ በምድረ በዳ መከራ ይቀበላል፣ የተሰበሩትን ያቅፋል፤ ከዚያም ወደ ዙፋኑ ይወጣል።',
      christForeshadowingEn: 'Jesus is the true Son of David who was despised and rejected, gathering the poor, tax collectors, and sinners into his cave of refuge before his resurrection kingdom.',
      christForeshadowingAm: 'ኢየሱስ እውነተኛው የዳዊት ልጅ ነው፤ እርሱም በምድር ላይ የተናቀ ነበር፤ ኃጢአተኞችን፣ ደካሞችንና የታመሙትን ወደ እርሱ ሰብስቦ በጸጋው አዳናቸው።',
      metaNarrativeAnchorEn: 'The cave was where David wrote Psalms 57 and 142: "Be merciful to me, O God, for in you my soul takes refuge; in the shadow of your wings I will take refuge till destruction passes by."',
      metaNarrativeAnchorAm: 'ዳዊት በዋሻው ውስጥ መዝሙር 57 እና 142ን ጻፈ፡ “አምላክ ሆይ ማረኝ፤ ነፍሴ በአንተ ትታመናለችና፣ መከራ እስኪያልፍ ድረስ በክንፎችህ ጥላ ሥር እጠለላለሁ።”'
    },
    linguistic: [
      {
        original: 'מְצוּדָה',
        translit: 'Metsudah',
        language: 'Hebrew',
        amharicTerm: 'አምባ / ምሽግ',
        literalMeaningEn: 'Fastness, cliff stronghold, mountain fortress',
        literalMeaningAm: 'ጽኑ ምሽግ፣ አለት',
        theologicalDepthEn: 'David hides in the limestone caves, but repeatedly confesses that physical caves are useless without the Lord: "Yahweh is my rock and my Metsudah" (Ps 18:2).',
        theologicalDepthAm: 'ዳዊት በዋሻ ውስጥ ቢያድርም ዋሻው ሳይሆን እግዚአብሔር እውነተኛ መጠጊያው እንደሆነ መሰከረ፡ “እግዚአብሔር ዓለቴ፣ አምባዬም (መጹዳህ) ነው” (መዝ 18:2)።',
        canonicalUsageEn: '1 Sam 22:4, Ps 18:2, Ps 91:2',
        canonicalUsageAm: '1 ሳሙ 22:4፣ መዝ 18:2፣ መዝ 91:2'
      },
      {
        original: 'חָסָה',
        translit: 'Khasah',
        language: 'Hebrew',
        amharicTerm: 'ተጠጋ / ታመነ',
        literalMeaningEn: 'To seek refuge, take shelter like chicks under wings',
        literalMeaningAm: 'መጠለል፣ በክንፍ ሥር መሸሸግ',
        theologicalDepthEn: 'A poignant image of desperate trust. When exposed to mortal danger, one dashes under protective wings.',
        theologicalDepthAm: 'ጭንቅ በበዛበት ሰዓት ጫጩት በእናቷ ክንፍ ሥር እንደምትሸሸግ ሁሉ፤ ሰው በእግዚአብሔር ጥላ ሥር መሸሸጉን ያሳያል።',
        canonicalUsageEn: 'Ps 57:1, Ps 36:7, Ruth 2:12',
        canonicalUsageAm: 'መዝ 57:1፣ መዝ 36:7፣ ሩት 2:12'
      }
    ],
    psychological: {
      characterEn: 'David',
      characterAm: 'ዳዊት',
      emotionalStateEn: 'Profound isolation, panic, crushing responsibility, defiant praise',
      emotionalStateAm: 'ብቸኝነት፣ ፍርሃት፣ የኃላፊነት ክብደት፣ በመከራ ውስጥ የሚዘመር ምስጋና',
      innerConflictEn: 'The agonizing gap between Samuel’s oil and the cave’s dust: "Samuel anointed me king over Israel, so why am I freezing in a hole running for my life?"',
      innerConflictAm: 'ሳሙኤል በቀባው የንጉሥ ዘይትና በዋሻው አቧራ መካከል ያለው የጭንቀት ገደል፡ “ንጉሥ እንደምሆን ከተነገረኝ ለምንድነው ዛሬ በብርድ ዋሻ ውስጥ ለነፍሴ የምሮጠው?”',
      existentialQuestionEn: '"Will God’s promise survive this dark valley, and can I stay righteous when treated with sheer injustice?"',
      existentialQuestionAm: '“በዚህ የጨለማ ሸለቆ ውስጥ የእግዚአብሔር ተስፋ አይጠፋምን? በበደሉኝ ሰዎችስ ፊት ጽድቄን መጠበቅ እችላለሁን?”',
      modernReflectionEn: 'Almost every great calling endures an "Adullam season"—a period where your former identity is stripped away, forcing you to find your security in God alone.',
      modernReflectionAm: 'እያንዳንዱ ሰው የራሱ “የአዶላም ዋሻ ዘመን” አለው፤ ክብሩና መመኪያዎቹ ተነጥቀው እውነተኛ ዋስትናው እግዚአብሔር ብቻ መሆኑን የሚማርበት ወቅት ነው።'
    }
  },

  // 6. THE INCARNATION: GETHSEMANE & CALVARY (Matthew 26-27 & John 19)
  {
    id: 'matrix-passion',
    sceneId: 'act4-scene7',
    bookNr: 40,
    chapterStart: 26,
    chapterEnd: 27,
    titleEn: 'Gethsemane & Golgotha: The Cup, The Cross & "It Is Finished"',
    titleAm: 'ጌቴሴማኒ እና ቀራንዮ፡ ጽዋው፣ መስቀሉ እና “ተፈጸመ”',
    eraEn: '~33 AD',
    eraAm: '~33 ዓ.ም',
    geopolitical: {
      titleEn: 'Roman Colonial Power, Sanhedrin Politics & Imperial Execution',
      titleAm: 'የሮማ ቅኝ አገዛዝ፣ የካህናት ሸንጎና የሮማውያን ስቅላት',
      empireEn: 'The Roman Empire (Julio-Claudian Dynasty)',
      empireAm: 'የሮማ ግዛት በቄሣር ቲቤሪዎስ ዘመን',
      timeframe: 'Passover, AD 30–33',
      eyewitnessPOVEn: 'Jerusalem swelled with over half a million Passover pilgrims, creating an explosive political powder keg. Pontius Pilate, stationed with Roman legionaries at the Antonia Fortress, cared only about preventing insurrection. The Sanhedrin feared a populist uprising that would bring Roman annihilation. Crucifixion was Rome’s supreme psychological terror weapon—designed to display rebel bodies naked, bleeding, and suffocating along busy highways.',
      eyewitnessPOVAm: 'በፋሲካ በዓል ከግማሽ ሚሊዮን በላይ ሕዝብ ወደ ኢየሩሳሌም ስለሚጎርፍ የፖለቲካ ውጥረት ነግሦ ነበር። የሮማው ገዢ ጳንጥዮስ ጲላጦስ ዓመፅ እንዳይነሳ ብቻ ይጨነቅ ነበር፤ የካህናት አለቆችም ሮማውያን እንዳያጠፏቸው ፈሩ። ስቅላት በሮማውያን ዘንድ ሰውን እርቃኑን አንጠልጥሎ በአደባባይ በማሰቃየት ሕዝቡን ለማስፈራራት የሚጠቀሙበት አሰቃቂ የቅጣት መሣሪያ ነበር።',
      historicalDynamicsEn: 'Justice was traded for political expedience: Pilate washed his hands to preserve his career; the crowd demanded Barabbas the violent insurgent.',
      historicalDynamicsAm: 'ፍርድ ለፖለቲካ ጥቅም ሲባል ተዛባ፤ ጲላጦስ ወንበሩን ላለማጣት እጁን ታጠበ፤ ሕዝቡም በአዳኙ ፈንታ ነፍሰ ገዳዩን በርባንን መረጡ።',
      groundRealitiesEn: 'The smell of crushed olive leaves in Gethsemane; cold night air in the high priest’s courtyard; Roman scourges embedded with bone and lead ripping flesh.',
      groundRealitiesAm: 'በጌቴሴማኒ የወይራ ቅጠሎች ጠረን፤ በሊቀ ካህናቱ ግቢ ያለው ብርድ፤ በብረትና በአጥንት የተገመደው የሮማውያን ጅራፍ ሥጋን ሲተለትል የሚሰማው ድምፅ።'
    },
    theological: {
      titleEn: 'The Drinking of the Cup & The Torn Veil',
      titleAm: 'የቁጣው ጽዋ መጎንጨትና የተቀደደው መጋረጃ',
      covenantStageEn: 'The New Covenant Inaugurated in Blood',
      covenantStageAm: 'በክቡር ደም የተመሠረተው አዲስ ኪዳን',
      redemptiveThemeEn: 'The climax of cosmic history. In Gethsemane, Jesus looks into the cup of divine wrath against cosmic rebellion and chooses obedience. At 3 PM on Golgotha, as he cries "Tetelestai", the massive temple veil splits from top to bottom, ending the sacrificial system.',
      redemptiveThemeAm: 'የጽንፈ ዓለም ታሪክ ታላቅ ማዕከል። በጌቴሴማኒ ኢየሱስ ስለ ሰው ልጅ የኃጢአት ፍርድ የሆነውን መራራ ጽዋ ተመልክቶ አባቱን ታዘዘ። በቀራንዮ “ተፈጸመ” ብሎ በጮኸ ጊዜ የቤተ መቅደሱ መጋረጃ ከላይ እስከ ታች ተቀደደ፤ ወደ ቅድስተ ቅዱሳን የሚወስደው በር ለዘላለም ተከፈተ።',
      christForeshadowingEn: 'Every shadow finds its substance: the Passover lamb slain, Isaac spared because Jesus was not, the scapegoat carrying sin outside the camp, the bronze serpent lifted up.',
      christForeshadowingAm: 'ሁሉም የብሉይ ኪዳን ጥላዎች በእርሱ ተፈጸሙ፤ የታረደው የፋሲካ በግ፣ ይስሐቅ የዳነበት መሥዋዕት፣ ኃጢአትን ተሸክሞ ከከተማ ውጪ የወጣው ፍየል፣ በምድረ በዳ የተሰቀለው የነሐስ እባብ።',
      metaNarrativeAnchorEn: 'The barrier between Holy God and fallen humanity is obliterated by the spotless blood of the Lamb.',
      metaNarrativeAnchorAm: 'በቅዱሱ እግዚአብሔርና በወደቀው የሰው ልጅ መካከል የነበረው የኃጢአት ግድግዳ በንጹሑ በግ ደም ለዘላለም ፈረሰ።'
    },
    linguistic: [
      {
        original: 'τετέλεσται',
        translit: 'Tetelestai',
        language: 'Greek',
        amharicTerm: 'ተፈጸመ (ዕዳው ሙሉ በሙሉ ተከፈለ)',
        literalMeaningEn: 'It is finished, completed, paid in full',
        literalMeaningAm: 'ተፈጸመ፣ ዕዳው ሙሉ በሙሉ ተከፈለ',
        theologicalDepthEn: 'In ancient Greco-Roman commerce, when a debt was completely paid off, they wrote "TETELESTAI" across the invoice—meaning "nothing remains owed". Jesus stamped this across humanity’s cosmic guilt.',
        theologicalDepthAm: 'በጥንቱ የሮማ ግዛት አንድ ሰው ዕዳውን ሙሉ በሙሉ ሲከፍል በሰነዱ ላይ “ቴቴለስታይ” (ተከፍሎ አለቀ) ተብሎ ይጻፍበት ነበር። ኢየሱስ በመስቀል ላይ የሰው ልጆችን የኃጢአት ዕዳ እንደዚሁ ሰረዘው።',
        canonicalUsageEn: 'John 19:30, Col 2:14, Heb 10:14',
        canonicalUsageAm: 'ዮሐ 19:30፣ ቆላ 2:14፣ ዕብ 10:14'
      },
      {
        original: 'ἀγάπη',
        translit: 'Agape',
        language: 'Greek',
        amharicTerm: 'አጋፔ (ራስን አሳልፎ የሚሰጥ መለኮታዊ ፍቅር)',
        literalMeaningEn: 'Self-giving, unconditional, covenantal love',
        literalMeaningAm: 'መስዋዕት የሚሆን ቅዱስ ፍቅር',
        theologicalDepthEn: 'Not emotional affection (Philia) or romantic passion (Eros), but the stubborn divine will that seeks the ultimate good of the beloved at immense personal cost.',
        theologicalDepthAm: 'ስሜታዊ ወይም ጊዜያዊ ፍቅር ሳይሆን፤ በደለኛውንና ጠላትን ለማዳን ራስን አሳልፎ የሚሰጥ ፍጹም መለኮታዊ ፍቅር።',
        canonicalUsageEn: 'John 3:16, Rom 5:8, 1 John 4:10',
        canonicalUsageAm: 'ዮሐ 3:16፣ ሮሜ 5:8፣ 1 ዮሐ 4:10'
      }
    ],
    psychological: {
      characterEn: 'Jesus, Peter & The Disciples',
      characterAm: 'ኢየሱስ፣ ጴጥሮስ እና ደቀ መዛሙርቱ',
      emotionalStateEn: 'Excruciating agony, crushing abandonment, bitter shame, ultimate surrender',
      emotionalStateAm: 'የማይታመን ጭንቀት፣ መካድና መተው፣ መራራ ኃፍረት፣ ጽኑ ፍቅር',
      innerConflictEn: 'In the Garden, the human soul of Jesus trembled in horror at the spiritual darkness he was about to absorb: "Father, if you are willing, remove this cup from me; yet not my will, but yours be done." Peter wept bitterly outside the courtyard at his own cowardly failure.',
      innerConflictAm: 'በጌቴሴማኒ ኢየሱስ ወደር በሌለው ጭንቀት ውስጥ ሆኖ ጸለየ፡ “አባት ሆይ፤ ቢቻልህ ይህ ጽዋ ከእኔ ይለፍ፤ ነገር ግን የእኔ ፈቃድ ሳይሆን የአንተ ፈቃድ ይሁን።” ጴጥሮስም ጌታውን ከካደ በኋላ በከፍተኛ የጸጸት ስብራት አለቀሰ።',
      existentialQuestionEn: '"My God, my God, why have you forsaken me?"—The absolute abyss of human alienation endured on our behalf.',
      existentialQuestionAm: '“አምላኬ አምላኬ፤ ስለ ምን ተውከኝ?” የሰው ልጅ ከፈጣሪው የተለየበትን የጨለማ ገደል ኢየሱስ ስለ እኛ ዋጠው።',
      modernReflectionEn: 'When you feel abandoned, betrayed by close friends, or drowning in pain, Gethsemane proves that God did not remain an aloof spectator—he entered our deepest agony.',
      modernReflectionAm: 'በብቸኝነት ስትዋጥ፣ በወዳጆችህ ስትከዳ ወይም በመከራ ስትደቆስ፤ እግዚአብሔር ከሩቅ ሆኖ የሚያይህ ሳይሆን በጌቴሴማኒ ያንኑ መከራህ የተካፈለ አምላክ መሆኑን አስታውስ።'
    }
  }
]

export function getPerspectiveMatrixForChapter(bookNr: number, chapter: number): PerspectiveMatrixItem | undefined {
  const milestone = PERSPECTIVE_MATRIX_DATA.find((m) => {
    if (m.bookNr !== bookNr) return false
    const end = m.chapterEnd ?? m.chapterStart
    return chapter >= m.chapterStart && chapter <= end
  })
  if (milestone) {
    return enrichPerspectiveMatrixItem(milestone, bookNr, chapter)
  }

  const canon = CANON_66_BOOKS_MATRIX[bookNr]
  if (canon) {
    const item: PerspectiveMatrixItem = {
      ...canon,
      chapterStart: chapter,
      chapterEnd: chapter
    }
    return enrichPerspectiveMatrixItem(item, bookNr, chapter)
  }
  return undefined
}

export function getPerspectiveMatrixForScene(sceneId: string): PerspectiveMatrixItem | undefined {
  const milestone = PERSPECTIVE_MATRIX_DATA.find((m) => m.sceneId === sceneId)
  if (milestone) {
    return enrichPerspectiveMatrixItem(milestone, milestone.bookNr, milestone.chapterStart)
  }

  for (const act of SAGA_ACTS) {
    const scene = act.scenes.find((s) => s.id === sceneId)
    if (scene && scene.passages && scene.passages.length > 0) {
      const p = scene.passages[0]
      const item = getPerspectiveMatrixForChapter(p.bookNr, p.chapter)
      if (item) {
        return {
          ...item,
          sceneId: scene.id
        }
      }
    }
  }

  return undefined
}
