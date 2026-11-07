/**
 * Offline Amharic Biblical Lexicon (የመጽሐፍ ቅዱስ ቃላት መፍቻ)
 * Provides biblical definitions, Ge'ez etymology, Hebrew/Greek Strong's equivalents,
 * morphological decomposition (prefixes/suffixes), and cross-references.
 */

export interface AmharicLexiconEntry {
  word: string
  category: 'መለኮት' | 'ስነ-መለኮት' | 'ፍጥረት' | 'ኪዳንና አምልኮ' | 'ቅዱሳን ሰዎች' | 'ቅዱሳን ቦታዎች' | 'መንፈሳዊ ሕይወት' | 'ትንቢትና ፍርድ'
  geezRoot?: string
  originalTerm?: string
  strongs?: string
  phonetic?: string
  meaning: string
  meaningEn: string
  biblicalContext?: string
  references: string[]
  forms?: string[]
}

export interface AmharicLookupResult {
  query: string
  cleanWord: string
  entry?: AmharicLexiconEntry
  morphology?: {
    stem: string
    prefixes: { text: string; meaning: string }[]
    suffixes: { text: string; meaning: string }[]
  }
}

export const AMHARIC_LEXICON: AmharicLexiconEntry[] = [
  // --- መለኮት (Godhead & Divinity) ---
  {
    word: 'እግዚአብሔር',
    category: 'መለኮት',
    geezRoot: 'እግዚእ (ገዥ፣ ጌታ) + ብሔር (ዓለም፣ ሀገር) = የዓለም ገዥ/ጌታ',
    originalTerm: 'יהוה (Yahweh) / אֱלֹהִים (Elohim)',
    strongs: 'H3068 / H430',
    phonetic: "Egzi'abher",
    meaning: 'ፍጹም ሉዓላዊ፣ ፈጣሪ፣ የዓለማት ሁሉ ጌታና ባለቤት የሆነው የአንድ አምላክ ስም። በግዕዝ «እግዚእ» ማለት ጌታ ወይም ገዥ ሲሆን «ብሔር» ማለት ደግሞ ዓለም ነው። ስለዚህ እግዚአብሔር ማለት «የዓለም ገዥ ወይም የዓለም ጌታ» ማለት ነው።',
    meaningEn: 'God, Lord of the Universe. From Ge\'ez "Egzi" (Lord/Ruler) + "Bher" (Land/World) = Ruler of the Universe. The covenant name representing Yahweh and Elohim.',
    biblicalContext: 'በመጽሐፍ ቅዱስ የመጀመሪያው ቃል (ዘፍ 1:1) ጀምሮ እስከ መጨረሻው ድረስ የተገለጠው የዘላለም አምላክ ነው።',
    references: ['ዘፍጥረት 1:1', 'ዘጸአት 3:14', 'መዝሙር 23:1', 'ዮሐንስ 1:1', 'ራእይ 1:8'],
    forms: ['እግዚአብሔር', 'ለእግዚአብሔር', 'ከእግዚአብሔር', 'የእግዚአብሔር', 'በእግዚአብሔር', 'እግዚአብሔርን', 'እንደእግዚአብሔር'],
  },
  {
    word: 'ኢየሱስ',
    category: 'መለኮት',
    geezRoot: 'ከዕብራይስጡ «የሹዓ» (ኢያሱ) የተወሰደ፤ «እግዚአብሔር መድኃኒት ነው» ማለት ነው',
    originalTerm: 'Ἰησοῦς (Iesous) / יְהוֹשׁוּעַ (Yeshua)',
    strongs: 'G2424 / H3091',
    phonetic: 'Iyesus',
    meaning: 'የሰው ልጆች መድኃኒት፣ የእግዚአብሔር አንድያ ልጅ፣ ሥጋ የለበሰው አካላዊ ቃል ስም። መልአኩ ቅዱስ ገብርኤል «ሕዝቡን ከኃጢአታቸው ያድናቸዋልና ስሙን ኢየሱስ ትለዋለህ» ብሏል (ማቴ 1:21)።',
    meaningEn: 'Jesus, Yahweh is Salvation. The personal name of the incarnate Son of God.',
    biblicalContext: 'የአዲስ ኪዳን ማዕከልና የመዳናችን ራስ፤ በመስቀል ላይ ቤዛ ሆኖ ዓለምን ያዳነ ጌታ።',
    references: ['ማቴዎስ 1:21', 'ሉቃስ 1:31', 'ዮሐንስ 14:6', 'የሐዋርያት ሥራ 4:12', 'ፊልጵስዩስ 2:9-11'],
    forms: ['ኢየሱስ', 'ለኢየሱስ', 'ከኢየሱስ', 'የኢየሱስ', 'በኢየሱስ', 'ኢየሱስን'],
  },
  {
    word: 'ክርስቶስ',
    category: 'መለኮት',
    geezRoot: 'ከግሪኩ «ክሪስቶስ» እና ከዕብራይስጡ «መሺያሕ» የተወሰደ፤ «የተቀባው» (መሲሕ) ማለት ነው',
    originalTerm: 'Χριστός (Christos) / מָשִׁיחַ (Mashiach)',
    strongs: 'G5547 / H4899',
    phonetic: 'Kristos',
    meaning: 'የተቀባው፣ መሲሕ፣ በብሉይ ኪዳን የተነገረለት ንጉሥ፣ ካህንና ነቢይ ሆኖ የተገለጠው የዓለም መድኃኒት ማዕረግ።',
    meaningEn: 'Christ, the Anointed One, Messiah. The fulfiller of the prophetic, priestly, and kingly offices.',
    biblicalContext: 'በመንፈስ ቅዱስ ቅባት ያለ ልክ የተቀባ፣ ዘላለማዊውን የእግዚአብሔር መንግሥት የመሠረተ ጌታ።',
    references: ['ማቴዎስ 16:16', 'ዮሐንስ 1:41', 'ሮሜ 1:4', '1 ቆሮንቶስ 15:3'],
    forms: ['ክርስቶስ', 'ለክርስቶስ', 'የክርስቶስ', 'በክርስቶስ', 'ክርስቶስን', 'ከክርስቶስ'],
  },
  {
    word: 'መንፈስ ቅዱስ',
    category: 'መለኮት',
    geezRoot: 'መንፈስ (እስትንፋስ፣ ሕይወት ሰጪ) + ቅዱስ (ልዩ፣ ንጹሕ)',
    originalTerm: 'πνεῦμα ἅγιον (Pneuma Hagion) / רוּחַ הַקֹּדֶשׁ (Ruach Ha-Qodesh)',
    strongs: 'G4151 + G40 / H7307 + H6944',
    phonetic: 'Menfes Qeddus',
    meaning: 'ከአብ የሠረፀ፣ ከአብና ከወልድ ጋር በአንድ መለኮት የሚሰገድለትና የሚመሰገን፣ ሕይወት ሰጪና አጽናኝ የሆነው ሦስተኛው የመለኮት አካል።',
    meaningEn: 'Holy Spirit, the third Person of the Holy Trinity, the Comforter and Life-Giver.',
    biblicalContext: 'ቤተክርስቲያንን የሚመራ፣ አማኞችን የሚያጸና፣ የጸጋ ስጦታዎችን የሚያድል እውነተኛ መንፈስ።',
    references: ['ዮሐንስ 14:26', 'ዮሐንስ 16:13', 'የሐዋርያት ሥራ 2:4', 'ገላትያ 5:22'],
    forms: ['መንፈስ', 'መንፈሱ', 'ለመንፈስ', 'የመንፈስ', 'በመንፈስ', 'መንፈስን'],
  },
  {
    word: 'አብ',
    category: 'መለኮት',
    geezRoot: 'አብ (አባት፣ አስገኝ፣ ምንጭ)',
    originalTerm: 'πατήር (Pater) / אָב (Av)',
    strongs: 'G3962 / H1',
    phonetic: 'Ab',
    meaning: 'የቅድስት ሥላሴ የመጀመሪያ አካል፣ ለወልድ ወላጅ ለመንፈስ ቅዱስ ሠራፂ የሆነ የሁሉም አባትና ምንጭ።',
    meaningEn: 'God the Father, the unbegotten fountainhead of the Trinity.',
    biblicalContext: 'ፍጥረታትን የፈጠረ፣ ፍቅሩን በልጁ ልኮ የገለጠ የፍቅር አባት።',
    references: ['ማቴዎስ 6:9', 'ዮሐንስ 17:1', '1 ቆሮንቶስ 8:6'],
    forms: ['አብ', 'አባት', 'አባታችን', 'ለአብ', 'የአብ', 'በአብ'],
  },
  {
    word: 'ወልድ',
    category: 'መለኮት',
    geezRoot: 'ተወልደ (ተወለደ) ከሚለው የግዕዝ ግስ የተገኘ፤ ልጅ ማለት ነው',
    originalTerm: 'υἱός (Huios) / בֵּן (Ben)',
    strongs: 'G5207 / H1121',
    phonetic: 'Wold',
    meaning: 'ከአብ ቅድመ ዓለም ያለ እናት የተወለደ፣ በኋለኛው ዘመን ከቅድስት ድንግል ማርያም ያለ አባት በሥጋ የተወለደ ሁለተኛው የመለኮት አካል።',
    meaningEn: 'God the Son, eternally begotten of the Father, incarnate for the salvation of mankind.',
    biblicalContext: 'የእግዚአብሔር ክብር መንጸባረቅና የባሕርዩ ምሳሌ የሆነ አንድያ ልጅ።',
    references: ['ዮሐንስ 1:14', 'ዮሐንስ 3:16', 'ዕብራውያን 1:2'],
    forms: ['ወልድ', 'ልጅ', 'ልጁ', 'ለወልድ', 'የወልድ', 'በወልድ'],
  },
  {
    word: 'ሥላሴ',
    category: 'መለኮት',
    geezRoot: 'ሠለሰ (ሦስት ሆነ) ከሚለው የግዕዝ ግስ የተገኘ፤ አንድነትና ሦስትነት',
    originalTerm: 'Τριάς (Trias) / Trinity',
    phonetic: 'Silassie',
    meaning: 'በስም፣ በአካል፣ በግብር ሦስት፤ በባሕርይ፣ በፈቃድ፣ በመለኮት፣ በህልውና አንድ የሆነው የአምላካችን ምስጢር።',
    meaningEn: 'The Holy Trinity, One God in three distinct Persons (Father, Son, and Holy Spirit).',
    biblicalContext: 'ዘፍ 1:26 «ሰውን በመልካችን እንደ ምሳሌአችን እንፍጠር»፤ ማቴ 28:19 «በአብ በወልድ በመንፈስ ቅዱስ ስም።»',
    references: ['ዘፍጥረት 1:26', 'ዘፍጥረት 11:7', 'ማቴዎስ 28:19', '2 ቆሮንቶስ 13:14', '1 ዮሐንስ 5:7'],
    forms: ['ሥላሴ', 'ለሥላሴ', 'የሥላሴ', 'በሥላሴ'],
  },
  {
    word: 'አምላክ',
    category: 'መለኮት',
    geezRoot: 'መለከ (ገዛ፣ ሠለጠነ) ከሚለው የግዕዝ ሥር የተገኘ፤ ገዥ፣ ጌታ፣ ኃያል',
    originalTerm: 'אֱלֹהִים (Elohim) / θεός (Theos)',
    strongs: 'H430 / G2316',
    phonetic: 'Amlak',
    meaning: 'ፍጹም ገዥና ኃያል፣ ለፍጥረቱ ሁሉ የሚሳሳ፣ የሚመግብና የሚጠብቅ ዘላለማዊ አምላክ።',
    meaningEn: 'God, Deity, the Supreme Sovereign Ruler who cares for His creation.',
    biblicalContext: 'የሰማይና የምድር ባለቤት የሆነው ብቸኛ እውነተኛ አምላክ።',
    references: ['ዘዳግም 6:4', 'ኢሳይያስ 45:5', '1 ጢሞቴዎስ 2:5'],
    forms: ['አምላክ', 'አምላኬ', 'አምላካችን', 'አምላክህ', 'አምላኩ', 'ለአምላክ', 'የአምላክ', 'በአምላክ'],
  },
  {
    word: 'ጌታ',
    category: 'መለኮት',
    geezRoot: 'እግዚእ (ገዥ፣ አለቃ፣ የበላይ)',
    originalTerm: 'אֲדֹנָי (Adonai) / κύριος (Kyrios)',
    strongs: 'H136 / G2962',
    phonetic: 'Geta',
    meaning: 'የሁሉ የበላይ ገዥ፣ ሉዓላዊ ጌታ። በመጽሐፍ ቅዱስ የእግዚአብሔር እና የኢየሱስ ክርስቶስ የማዕረግ ስም ሆኖ ያገለግላል።',
    meaningEn: 'Lord, Master, Sovereign. Translation of Kyrios and Adonai.',
    biblicalContext: 'በክርስቶስ ጌትነት ማመን የመዳን መሠረት ነው (ሮሜ 10:9)።',
    references: ['ሮሜ 10:9', '1 ቆሮንቶስ 12:3', 'ራእይ 19:16'],
    forms: ['ጌታ', 'ጌታዬ', 'ጌታችን', 'ለጌታ', 'የጌታ', 'በጌታ', 'ጌታን'],
  },
  {
    word: 'ቃል',
    category: 'መለኮት',
    geezRoot: 'ቃል (ነገር፣ ድምፅ፣ ሎጎስ)',
    originalTerm: 'λόγος (Logos) / דָּבָר (Davar)',
    strongs: 'G3056 / H1697',
    phonetic: 'Qal',
    meaning: 'በዮሐንስ ወንጌል መጀመሪያ ላይ የተገለጠው ዘላለማዊው የእግዚአብሔር ጥበብና ልጅ (ክርስቶስ)። እንዲሁም የእግዚአብሔር ቅዱስ ትእዛዝና መገለጥ።',
    meaningEn: 'The Word (Logos), the eternal Son of God, divine utterance, and scriptural revelation.',
    biblicalContext: '«በመጀመሪያ ቃል ነበረ፥ ቃልም በእግዚአብሔር ዘንድ ነበረ፥ ቃልም እግዚአብሔር ነበረ» (ዮሐ 1:1)።',
    references: ['ዮሐንስ 1:1', 'ዮሐንስ 1:14', 'ዕብራውያን 4:12', 'ራእይ 19:13'],
    forms: ['ቃል', 'ቃሉ', 'ቃሌ', 'ቃላት', 'ቃሉን', 'ለቃል', 'የቃል', 'በቃል'],
  },
  {
    word: 'አማኑኤል',
    category: 'መለኮት',
    geezRoot: 'ከዕብራይስጡ «ኢማኑኤል» የተወሰደ፤ «እግዚአብሔር ከእኛ ጋር ነው» ማለት ነው',
    originalTerm: 'עִמָּנוּאֵל (Immanuel) / Ἐμμανουήλ',
    strongs: 'H6005 / G1694',
    phonetic: 'Amanuel',
    meaning: 'እግዚአብሔር ከእኛ ጋር ሆነ፤ የክርስቶስ የሰው መሆን (ሥጋ መልበስ) ታላቅ የምስሥጢር ስም።',
    meaningEn: 'Immanuel, "God with us", representing the incarnation of Christ.',
    biblicalContext: 'ነቢዩ ኢሳይያስ የተነበየውና በክርስቶስ ልደት የተፈጸመው የተስፋ ስም (ኢሳ 7:14፣ ማቴ 1:23)።',
    references: ['ኢሳይያስ 7:14', 'ማቴዎስ 1:23'],
    forms: ['አማኑኤል', 'ለአማኑኤል', 'የአማኑኤል', 'በአማኑኤል'],
  },
  {
    word: 'መድኃኒት',
    category: 'መለኮት',
    geezRoot: 'ድኅነ (ዳነ) ከሚለው ሥር የወጣ፤ ፈዋሽ፣ አዳኝ፣ ድነት ሰጪ',
    originalTerm: 'σωτήρ (Soter) / יֵשַׁע (Yesha)',
    strongs: 'G4990 / H3468',
    phonetic: 'Medhanit',
    meaning: 'የሕይወት ፈውስና መዳን ሰጪ፣ ነፍስንና ሥጋን ከዘላለም ሞት የሚያድን አዳኝ (መድኃኔዓለም)።',
    meaningEn: 'Savior, Deliverer, Medicine of Life. Soter in Greek.',
    biblicalContext: 'ክርስቶስ የዓለም መድኃኒት ሆኖ በሥጋ ተገልጧል (ዮሐ 4:42)።',
    references: ['ሉቃስ 1:47', 'ሉቃስ 2:11', 'ዮሐንስ 4:42', 'ቲቶ 2:13'],
    forms: ['መድኃኒት', 'መድኃኒቴ', 'መድኃኒታችን', 'ለመድኃኒት', 'የመድኃኒት', 'በመድኃኒት'],
  },

  // --- ፍጥረት (Creation & Cosmos) ---
  {
    word: 'መጀመሪያ',
    category: 'ፍጥረት',
    geezRoot: 'ቀደመ፣ ጀመረ፤ የጊዜ፣ የፍጥረት ወይም የሁኔታ መነሻ',
    originalTerm: 'בְּרֵאשִׁית (Bereshit) / ἀρχή (Arche)',
    strongs: 'H7225 / G746',
    phonetic: 'Mejemeriya',
    meaning: 'የፍጥረት፣ የዘመን ወይም የሁሉ ነገር መነሻና መጀመሪያ። በዘፍጥረት 1:1 እና በዮሐንስ 1:1 ላይ የተገለጸው የመጀመሪያ ሰዓት።',
    meaningEn: 'Beginning, Origin, Genesis. From the Hebrew "Bereshit" and Greek "Arche".',
    biblicalContext: 'እግዚአብሔር ሁሉን ነገር ካለመኖር ወደ መኖር ያመጣበት የፍጥረት መጀመሪያ።',
    references: ['ዘፍጥረት 1:1', 'ምሳሌ 8:22', 'ዮሐንስ 1:1', 'ቆላስይስ 1:18', 'ራእይ 22:13'],
    forms: ['መጀመሪያ', 'በመጀመሪያ', 'ለመጀመሪያ', 'የመጀመሪያ', 'መጀመሪያው', 'መጀመሪያውን'],
  },
  {
    word: 'ሰማይ',
    category: 'ፍጥረት',
    geezRoot: 'ሰማይ (ጠፈር፣ የከፍታ ስፍራ፣ የእግዚአብሔር ዙፋን)',
    originalTerm: 'שָׁמַיִם (Shamayim) / οὐρανός (Ouranos)',
    strongs: 'H8064 / G3772',
    phonetic: 'Semay',
    meaning: 'የተዘረጋው ጠፈር፣ ከፍታ፣ የመላእክት መኖሪያና የእግዚአብሔር የክብሩ ዙፋን ስፍራ።',
    meaningEn: 'Heaven, Firmament, the dwelling place of God and celestial angels.',
    biblicalContext: 'እግዚአብሔር በሁለተኛው ቀን የፈጠረውና ዙፋኑ ያደረገው ቅዱስ ስፍራ።',
    references: ['ዘፍጥረት 1:1', 'መዝሙር 19:1', 'ማቴዎስ 6:9', 'ራእይ 21:1'],
    forms: ['ሰማይ', 'ሰማያት', 'ሰማየ', 'ሰማይን', 'በሰማይ', 'የሰማይ', 'ከሰማይ'],
  },
  {
    word: 'ምድር',
    category: 'ፍጥረት',
    geezRoot: 'ምድር (መሬት፣ ዓለም፣ የሰው መኖሪያ)',
    originalTerm: 'אֶרֶץ (Eretz) / γῆ (Ge)',
    strongs: 'H776 / G1093',
    phonetic: 'Midir',
    meaning: 'እግዚአብሔር የሰውን ልጅ አበጅቶ ያኖረባት መሬት፤ የፍጥረት ዓለም መድረክ።',
    meaningEn: 'Earth, Land, Soil. The dwelling place created for humanity.',
    biblicalContext: 'በእግዚአብሔር የተፈጠረችና የእግሩ መረገጫ የሆነች ስፍራ (ኢሳ 66:1)።',
    references: ['ዘፍጥረት 1:1', 'ዘፍጥረት 1:10', 'መዝሙር 24:1', 'ኢሳይያስ 66:1'],
    forms: ['ምድር', 'ምድርን', 'በምድር', 'የምድር', 'ከምድር', 'ምድርና'],
  },
  {
    word: 'ብርሃን',
    category: 'ፍጥረት',
    geezRoot: 'በርሃ (አበራ፣ ፈካ) ከሚለው የግዕዝ ግስ የተገኘ፤ መገለጥ፣ ዕውቀት፣ ሕይወት',
    originalTerm: 'אוֹר (Or) / φῶς (Phos)',
    strongs: 'H216 / G5457',
    phonetic: 'Berhan',
    meaning: 'ጨለማን የሚያጠፋ አንጸባራቂ ኃይል፤ በእግዚአብሔር መጀመሪያ የተፈጠረና የቅድስና፣ የእውነትና የመለኮት መገለጫ ምልክት።',
    meaningEn: 'Light, Illumination, Divine Radiance. The first command of creation.',
    biblicalContext: '«እግዚአብሔርም፦ ብርሃን ይሁን አለ፤ ብርሃንም ሆነ» (ዘፍ 1:3)፤ «እኔ የዓለም ብርሃን ነኝ» (ዮሐ 8:12)።',
    references: ['ዘፍጥረት 1:3', 'መዝሙር 119:105', 'ዮሐንስ 1:4-9', 'ዮሐንስ 8:12', '1 ዮሐንስ 1:5'],
    forms: ['ብርሃን', 'ብርሃኑ', 'ብርሃኔ', 'ብርሃንን', 'በብርሃን', 'የብርሃን', 'ብርሃንም'],
  },
  {
    word: 'ጨለማ',
    category: 'ፍጥረት',
    geezRoot: 'ጸልመ (ጨለመ)፤ የብርሃን አለመኖር፣ የኃጢአትና የሞት ምሳሌ',
    originalTerm: 'חֹשֶׁךְ (Choshek) / σκότος (Skotos)',
    strongs: 'H2822 / G4655',
    phonetic: 'Chelema',
    meaning: 'የብርሃን እጦት፤ በመንፈሳዊ አነጋገር ድንቁርናን፣ ኃጢአትንና ከእግዚአብሔር መለየትን የሚያመለክት ቃል ነው።',
    meaningEn: 'Darkness, Absence of Light; metaphor for ignorance, sin, and spiritual death.',
    biblicalContext: 'ክርስቶስ በጨለማ ለሚኖሩ ሕዝቦች ታላቅ ብርሃን ሆኖ ወጥቷል (ኢሳ 9:2)።',
    references: ['ዘፍጥረት 1:2', 'ኢሳይያስ 9:2', 'ዮሐንስ 1:5', 'ኤፌሶን 5:8'],
    forms: ['ጨለማ', 'ጨለማው', 'በጨለማ', 'የጨለማ', 'ጨለማን', 'ጨለማም'],
  },
  {
    word: 'ነፍስ',
    category: 'ፍጥረት',
    geezRoot: 'ነፍስ (እስትንፋስ፣ ሕያውነት፣ የማይሞተው የሰው ማንነት)',
    originalTerm: 'נֶפֶשׁ (Nephesh) / ψυχή (Psyche)',
    strongs: 'H5315 / G5590',
    phonetic: 'Nefs',
    meaning: 'እግዚአብሔር በሰው አፍንጫ እፍ ያለበት ሕያው እስትንፋስ፤ የማይሞተው፣ አእምሮ ያለው፣ የሚያስበውና የሚረዳው የውስጥ ማንነት።',
    meaningEn: 'Soul, Living being, Breath of life, the immortal spiritual essence of a human.',
    biblicalContext: '«ሰው ዓለሙን ሁሉ ቢያተርፍ ነፍሱንም ቢያጎድል ምን ይጠቅመዋል?» (ማቴ 16:26)።',
    references: ['ዘፍጥረት 2:7', 'መዝሙር 42:1', 'ማቴዎስ 16:26', 'ዕብራውያን 4:12'],
    forms: ['ነፍስ', 'ነፍሴ', 'ነፍሱ', 'ነፍሳችን', 'ነፍስን', 'በነፍስ', 'የነፍስ'],
  },
  {
    word: 'ሕይወት',
    category: 'ፍጥረት',
    geezRoot: 'ሐይወ (ዳነ፣ በሕይወት ኖረ)፤ ሕያውነት፣ ዘላለማዊ ኑሮ',
    originalTerm: 'חַיִּים (Chayim) / ζωή (Zoe)',
    strongs: 'H2416 / G2222',
    phonetic: 'Hiwot',
    meaning: 'እውነተኛ ህልውና፣ መንፈሳዊና ዘላለማዊ ኑሮ። ክርስቶስ ራሱ የሕይወት ምንጭና ሕይወት ነው።',
    meaningEn: 'Life, Eternal existence, Vitality. Christ is the Way, Truth, and Life.',
    biblicalContext: '«በእርሱ ሕይወት ነበረች፥ ሕይወትም የሰው ብርሃን ነበረች» (ዮሐ 1:4)።',
    references: ['ዘፍጥረት 2:9', 'ዮሐንስ 1:4', 'ዮሐንስ 11:25', 'ዮሐንስ 14:6', '1 ዮሐንስ 5:12'],
    forms: ['ሕይወት', 'ሕይወቴ', 'ሕይወቱ', 'ሕይወትን', 'በሕይወት', 'የሕይወት', 'ለሕይወት'],
  },
  {
    word: 'መልአክ',
    category: 'ፍጥረት',
    geezRoot: 'ላከ (ላከ)፤ ተላላኪ፣ አገልጋይ፣ የእግዚአብሔር መልእክተኛ',
    originalTerm: 'מַלְאָךְ (Malakh) / ἄγγελος (Angelos)',
    strongs: 'H4397 / G32',
    phonetic: "Mel'ak",
    meaning: 'የእግዚአብሔርን ፈቃድ የሚፈጽሙ፣ ሰዎችን የሚጠብቁና ምስጋና የሚያቀርቡ እሳታውያንና ረቂቃን የሰማይ አገልጋዮች።',
    meaningEn: 'Angel, Heavenly Messenger, ministering spirit sent to serve God and protect the faithful.',
    biblicalContext: 'ለመዳን የታጩትን ለማገልገል የሚላኩ አገልጋይ መናፍስት ናቸው (ዕብ 1:14)።',
    references: ['መዝሙር 91:11', 'ዳንኤል 6:22', 'ሉቃስ 1:26', 'ዕብራውያን 1:14'],
    forms: ['መልአክ', 'መልአኩ', 'መላእክት', 'መላእክቱን', 'የመልአክ', 'በመልአክ'],
  },

  // --- ስነ-መለኮትና ድነት (Theology & Salvation) ---
  {
    word: 'ጸጋ',
    category: 'ስነ-መለኮት',
    geezRoot: 'ጸገወ (ሰጠ፣ ለገሰ)፤ በነጻ የሚሰጥ መለኮታዊ ስጦታና በረከት',
    originalTerm: 'חֵן (Chen) / χάρις (Charis)',
    strongs: 'H2580 / G5485',
    phonetic: 'Tsega',
    meaning: 'ያለ ምንም ዋጋና ብቃት በእግዚአብሔር አጋዥነትና ፍቅር ለሰው ልጅ የሚሰጥ መለኮታዊ ስጦታና ኃይል፤ የመዳናችን መሠረት።',
    meaningEn: 'Grace, Unmerited divine favor and empowering presence given freely by God.',
    biblicalContext: '«ጸጋው በእምነት አድኖአችኋልና፤ ይህም የእግዚአብሔር ስጦታ ነው እንጂ ከእናንተ አይደለም» (ኤፌ 2:8)።',
    references: ['ዮሐንስ 1:16-17', 'ሮሜ 3:24', 'ሮሜ 5:1-2', '2 ቆሮንቶስ 12:9', 'ኤፌሶን 2:8'],
    forms: ['ጸጋ', 'ጸጋው', 'ጸጋዬ', 'ጸጋን', 'በጸጋ', 'የጸጋ', 'ለጸጋ'],
  },
  {
    word: 'እምነት',
    category: 'ስነ-መለኮት',
    geezRoot: 'አመነ (ታመነ፣ እውነት አለ)፤ መታመን፣ ተስፋን ማረጋገጥ',
    originalTerm: 'אֱמוּנָה (Emunah) / πίστις (Pistis)',
    strongs: 'H530 / G4102',
    phonetic: 'Imnet',
    meaning: 'የማይታየውን ነገር እንደተጨበጠ አድርጎ ማመን፤ በእግዚአብሔር ቃል ላይ ሙሉ ልብን መጣልና መታመን።',
    meaningEn: 'Faith, Trust, Conviction, and assurance of things hoped for.',
    biblicalContext: '«እምነትም ተስፋ ስለምናደርገው ነገር የሚያስረግጥ፥ የማናየውንም ነገር የሚያስረዳ ነው» (ዕብ 11:1)።',
    references: ['ሮሜ 1:17', 'ሮሜ 10:17', 'ገላትያ 2:20', 'ዕብራውያን 11:1', 'ያዕቆብ 2:17'],
    forms: ['እምነት', 'እምነቴ', 'እምነቱ', 'እምነትን', 'በእምነት', 'የእምነት', 'ለእምነት'],
  },
  {
    word: 'ሰላም',
    category: 'ስነ-መለኮት',
    geezRoot: 'ሰለመ (ተስማማ፣ ጤነኛ ሆነ)፤ እርቅ፣ ጸጥታ፣ ፍጹም ሙላት',
    originalTerm: 'שָׁלוֹם (Shalom) / εἰρήνη (Eirene)',
    strongs: 'H7965 / G1515',
    phonetic: 'Selam',
    meaning: 'ከእግዚአብሔር ጋር የሚደረግ እርቅ፣ የልብ እረፍት፣ ሰላማዊ ኅብረትና የአእምሮ ጸጥታ።',
    meaningEn: 'Peace, Wholeness, Reconciliation (Shalom). The peace of God surpassing understanding.',
    biblicalContext: '«ሰላምን እተውላችኋለሁ፥ ሰላሜን እሰጣችኋለሁ፤ እኔ የምሰጣችሁ ዓለም እንደሚሰጥ አይደለም» (ዮሐ 14:27)።',
    references: ['መዝሙር 29:11', 'ኢሳይያስ 9:6', 'ዮሐንስ 14:27', 'ሮሜ 5:1', 'ፊልጵስዩስ 4:7'],
    forms: ['ሰላም', 'ሰላሜ', 'ሰላሙ', 'ሰላምን', 'በሰላም', 'የሰላም', 'ለሰላም'],
  },
  {
    word: 'ፍቅር',
    category: 'ስነ-መለኮት',
    geezRoot: 'አፍቀረ (ወደደ)፤ ቅንና ራስን አሳልፎ የሚሰጥ ፍጹም ፍቅር',
    originalTerm: 'אַהֲבָה (Ahavah) / ἀγάπη (Agape)',
    strongs: 'H160 / G26',
    phonetic: 'Fiqir',
    meaning: 'የሕግ ሁሉ ፍጻሜና ትልቁ ትእዛዝ፤ እግዚአብሔር ራሱ ፍቅር ነው (1 ዮሐ 4:8)። ራስን መስዋዕት አድርጎ ለሌሎች የሚሰጥ አጋፔ ፍቅር።',
    meaningEn: 'Love, Divine Charity (Agape). The very essence of God\'s nature and the greatest commandment.',
    biblicalContext: '«በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና» (ዮሐ 3:16)።',
    references: ['ዮሐንስ 3:16', 'ሮሜ 13:10', '1 ቆሮንቶስ 13:4-8', '1 ዮሐንስ 4:8', '1 ዮሐንስ 4:19'],
    forms: ['ፍቅር', 'ፍቅሩ', 'ፍቅሬ', 'ፍቅርን', 'በፍቅር', 'የፍቅር', 'ለፍቅር'],
  },
  {
    word: 'ጽድቅ',
    category: 'ስነ-መለኮት',
    geezRoot: 'ጸደቀ (እውነተኛ ሆነ፣ ታመነ)፤ ቅንነት፣ ፍትሕ፣ በእግዚአብሔር ፊት መታመን',
    originalTerm: 'צֶדֶק (Tzedek) / δικαιοσύνη (Dikaiosyne)',
    strongs: 'H6664 / G1343',
    phonetic: 'Tsedeq',
    meaning: 'በእግዚአብሔር ፊት ንጹሕና ቅን ሆኖ መገኘት፤ በእምነት አማካኝነት በክርስቶስ ደም የሚገኝ የኃጢአት ዕዳ ስርየትና ንጽሕና።',
    meaningEn: 'Righteousness, Justice, Justification. Conformity to the divine character and will.',
    biblicalContext: '«ጻድቅ በእምነት በሕይወት ይኖራል» (ዕን 2:4፣ ሮሜ 1:17)።',
    references: ['ዘፍጥረት 15:6', 'መዝሙር 23:3', 'ማቴዎስ 6:33', 'ሮሜ 3:21-22', '2 ቆሮንቶስ 5:21'],
    forms: ['ጽድቅ', 'ጽድቁ', 'ጽድቄ', 'ጽድቅን', 'በጽድቅ', 'የጽድቅ', 'ለጽድቅ'],
  },
  {
    word: 'ምሕረት',
    category: 'ስነ-መለኮት',
    geezRoot: 'መሐረ (ይቅር አለ፣ አዘነ)፤ ርኅራኄ፣ ይቅርታ፣ አለመበቀል',
    originalTerm: 'חֶסֶድ (Hesed) / ἔλεος (Eleos)',
    strongs: 'H2617 / G1656',
    phonetic: 'Mihret',
    meaning: 'የሚገባንን ቅጣት ሳይሆን ይቅርታን የሚያደርግ የእግዚአብሔር ታላቅ ርኅራኄና ቸርነት።',
    meaningEn: 'Mercy, Loving-kindness, Hesed. God\'s compassionate withholding of deserved punishment.',
    biblicalContext: '«ምሕረቱ ለዘላለም ነውና እግዚአብሔርን አመስግኑ» (መዝ 136:1)።',
    references: ['ዘጸአት 34:6', 'መዝሙር 103:8', 'መዝሙር 136:1', 'ኤፌሶን 2:4', 'ቲቶ 3:5'],
    forms: ['ምሕረት', 'ምሕረቱ', 'ምሕረትህ', 'ምሕረትን', 'በምሕረት', 'የምሕረት', 'ለምሕረት'],
  },
  {
    word: 'ንስሐ',
    category: 'ስነ-መለኮት',
    geezRoot: 'ነሰሐ (ተጸጸተ፣ ተመለሰ)፤ አእምሮንና ልብን ከክፋት ወደ እግዚአብሔር መመለስ',
    originalTerm: 'תְּשׁוּבָה (Teshuvah) / μετάνοια (Metanoia)',
    strongs: 'H7725 / G3341',
    phonetic: 'Nisiha',
    meaning: 'ከኃጢአት መንገድ ተመልሶ በጸጸትና በእንባ ወደ አምላክ መቅረብ፤ የአእምሮና የሕይወት አቅጣጫን መለወጥ።',
    meaningEn: 'Repentance (Metanoia / Teshuvah). A radical change of heart, mind, and direction back to God.',
    biblicalContext: '«መንግሥተ ሰማያት ቀርባለችና ንስሐ ግቡ» (ማቴ 4:17)።',
    references: ['ምሳሌ 28:13', 'ማቴዎስ 3:8', 'ማቴዎስ 4:17', 'ሉቃስ 15:7', 'የሐዋርያት ሥራ 3:19'],
    forms: ['ንስሐ', 'ንስሐን', 'በንስሐ', 'የንስሐ', 'ለንስሐ'],
  },
  {
    word: 'ኃጢአት',
    category: 'ስነ-መለኮት',
    geezRoot: 'ኃጥአ (አጣ፣ ሳተ፣ ተሳሳተ)፤ ግብን መሳት፣ የእግዚአብሔርን ሕግ መተላለፍ',
    originalTerm: 'חַטָּאָה (Chattah) / ἁμαρτία (Hamartia)',
    strongs: 'H2403 / G266',
    phonetic: "Hati'at",
    meaning: 'የእግዚአብሔርን ሕግ መጣስ፣ የታለመውን የቅድስና ግብ መሳት፣ ከፈጣሪ ፈቃድ ማፈንገጥ።',
    meaningEn: 'Sin (Hamartia). Missing the mark of God\'s holiness; transgression of divine law.',
    biblicalContext: '«ሁሉ ኃጢአትን ሠርተዋልና የእግዚአብሔርም ክብር ጎድሎአቸዋል» (ሮሜ 3:23)።',
    references: ['ዘፍጥረት 4:7', 'መዝሙር 51:3', 'ሮሜ 3:23', 'ሮሜ 6:23', '1 ዮሐንስ 1:8-9'],
    forms: ['ኃጢአት', 'ኃጢአቴ', 'ኃጢአቱ', 'ኃጢአታችን', 'ኃጢአትን', 'በኃጢአት', 'የኃጢአት', 'ከኃጢአት'],
  },
  {
    word: 'ትንሣኤ',
    category: 'ስነ-መለኮት',
    geezRoot: 'ተንሥአ (ተነሣ)፤ ከሞት መነሣት፣ ሕያው መሆን',
    originalTerm: 'תְּחִיָּה (Techiyah) / ἀνάστασις (Anastasis)',
    strongs: 'G386',
    phonetic: 'Tinsae',
    meaning: 'ከመቃብር መነሣት፤ የክርስቶስ የትንሣኤው በዓልና የሰው ልጆች ሁሉ በኋለኛው ቀን የሚያገኙት የዘላለም የሥጋ ትንሣኤ።',
    meaningEn: 'Resurrection (Anastasis). Rising from the dead; Christ\'s victory over death and the future resurrection of believers.',
    biblicalContext: '«ትንሣኤና ሕይወት እኔ ነኝ፤ የሚያምንብኝ ቢሞት እንኳ ሕያው ይሆናል» (ዮሐ 11:25)።',
    references: ['ዮሐንስ 11:25', '1 ቆሮንቶስ 15:12-20', 'ፊልጵስዩስ 3:10', '1 ጴጥሮስ 1:3'],
    forms: ['ትንሣኤ', 'ትንሣኤው', 'ትንሣኤን', 'በትንሣኤ', 'የትንሣኤ', 'ለትንሣኤ'],
  },
  {
    word: 'ቅዱስ',
    category: 'ስነ-መለኮት',
    geezRoot: 'ቀደሰ (ለየ፣ አከበረ፣ አነጻ)፤ የተለየ፣ ክቡር፣ ንጹሕ',
    originalTerm: 'קָדוֹשׁ (Qadosh) / ἅγιος (Hagios)',
    strongs: 'H6918 / G40',
    phonetic: 'Qeddus',
    meaning: 'ከኃጢአትና ከርኩሰት ፍጹም የራቀ፣ ለእግዚአብሔር ክብር የተለየና የተለገሰ ንጹሕ።',
    meaningEn: 'Holy, Sanctified, Set apart (Qadosh / Hagios). Free from all blemish or defilement.',
    biblicalContext: '«እኔ እግዚአብሔር አምላካችሁ ቅዱስ ነኝና እናንተም ቅዱሳን ሁኑ» (ዘሌ 19:2)።',
    references: ['ዘሌዋውያን 19:2', 'ኢሳይያስ 6:3', '1 ጴጥሮስ 1:15-16', 'ራእይ 4:8'],
    forms: ['ቅዱስ', 'ቅዱሳን', 'ቅድስት', 'ቅድስና', 'ቅዱስን', 'ለቅዱስ', 'የቅዱስ', 'በቅዱስ'],
  },
  {
    word: 'ክብር',
    category: 'ስነ-መለኮት',
    geezRoot: 'ከበረ (ከፍ ከፍ አለ፣ ታላቅ ሆነ)፤ ግርማ፣ ሞገስ፣ ዕፁብ ድንቅነት',
    originalTerm: 'כָּבוֹד (Kavod) / δόξα (Doxa)',
    strongs: 'H3519 / G1391',
    phonetic: 'Kibir',
    meaning: 'መለኮታዊ ግርማ፣ የክብረ-መለኮት ብርሃን፣ ለእግዚአብሔር የሚገባው ውዳሴና አክብሮት።',
    meaningEn: 'Glory, Majesty, Radiance (Kavod / Doxa). The visible splendor of the divine presence.',
    biblicalContext: '«ሰማያት የእግዚአብሔርን ክብር ይናገራሉ» (መዝ 19:1)።',
    references: ['ዘጸአት 33:18', 'መዝሙር 19:1', 'ኢሳይያስ 60:1', 'ሉቃስ 2:14', 'ዮሐንስ 1:14'],
    forms: ['ክብር', 'ክብሩ', 'ክብሬ', 'ክብርን', 'በክብር', 'የክብር', 'ለክብር'],
  },
  {
    word: 'በረከት',
    category: 'ስነ-መለኮት',
    geezRoot: 'ባረከ (ባረከ፣ አበዛ፣ ሰላም ሰጠ)፤ መለኮታዊ ሞገስና ስጦታ',
    originalTerm: 'בְּרָכָה (Berakhah) / εὐλογία (Eulogia)',
    strongs: 'H1293 / G2129',
    phonetic: 'Bereket',
    meaning: 'ከእግዚአብሔር የሚሰጥ መንፈሳዊና ሥጋዊ ስጦታ፣ ረድኤት፣ ሙላትና ጥበቃ።',
    meaningEn: 'Blessing (Berakhah / Eulogia). Divine favor, abundance, and prosperity bestowed by God.',
    biblicalContext: '«የእግዚአብሔር በረከት ባለጠጋ ታደርጋለች፥ ኀዘንንም ከእርስዋ ጋር አይጨምርም» (ምሳ 10:22)።',
    references: ['ዘፍጥረት 12:2', 'ዘዳግም 28:2', 'ምሳሌ 10:22', 'ኤፌሶን 1:3'],
    forms: ['በረከት', 'በረከቱ', 'በረከቴ', 'በረከትን', 'በበረከት', 'የበረከት', 'ለበረከት'],
  },

  // --- ኪዳንና አምልኮ (Covenant & Worship) ---
  {
    word: 'ኪዳን',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ተካየደ (ተስማማ፣ ውል አደረገ)፤ ቃል ኪዳን፣ የማይናወጥ መሐላ',
    originalTerm: 'בְּרִית (Berith) / διαθήκη (Diatheke)',
    strongs: 'H1285 / G1242',
    phonetic: 'Kidan',
    meaning: 'በእግዚአብሔርና በሰው መካከል የሚደረግ ቅዱስ ውል፤ የማይታጠፍ መለኮታዊ የተስፋ ቃል (ብሉይ ኪዳን እና ሐዲስ ኪዳን)።',
    meaningEn: 'Covenant (Berith / Diatheke). A sacred divine pledge and alliance established between God and His people.',
    biblicalContext: 'ክርስቶስ በደሙ የዘላለም አዲስ ኪዳን መሠረተ (ሉቃ 22:20)።',
    references: ['ዘፍጥረት 9:11', 'ዘጸአት 24:7', 'ኤርምያስ 31:31', 'ሉቃስ 22:20', 'ዕብራውያን 8:6'],
    forms: ['ኪዳን', 'ኪዳኑ', 'ኪዳኔ', 'ኪዳንን', 'በኪዳን', 'የኪዳን', 'ለኪዳን'],
  },
  {
    word: 'ታቦት',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ታቦት (ማደሪያ፣ የጽላት ሣጥን፣ የማደሪያው ማዕከል)',
    originalTerm: 'אָרוֹן (Aron) / κιβωτός (Kibotos)',
    strongs: 'H727 / G2787',
    phonetic: 'Tabot',
    meaning: 'የቃል ኪዳኑ ማደሪያ፤ በብሉይ ኪዳን የአሥሩ ቃላት ጽላት የተቀመጠበትና የእግዚአብሔር ክብር የሚገለጥበት ቅዱስ ታቦት። በኢትዮጵያ ቤተክርስቲያን የመሠዊያው ማዕከል ነው።',
    meaningEn: 'Ark of the Covenant (Aron / Tabot). The sacred repository of the tablets of the Ten Commandments.',
    biblicalContext: 'በዘጸአት 25 ላይ በዝርዝር የተገለጠው የተቀደሰ የእግዚአብሔር ማደሪያ።',
    references: ['ዘጸአት 25:10-22', 'ኢያሱ 3:3', '1 ሳሙኤል 4:3', 'ዕብራውያን 9:4', 'ራእይ 11:19'],
    forms: ['ታቦት', 'ታቦቱ', 'ታቦተ', 'ታቦትን', 'በታቦት', 'የታቦት'],
  },
  {
    word: 'መሥዋዕት',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ሠውዐ (ሰዋ፣ አቀረበ)፤ ለእግዚአብሔር የሚቀርብ ስጦታ፣ የደም ወይም የእህል ቁርባን',
    originalTerm: 'זֶבַח (Zevach) / θυσία (Thysia)',
    strongs: 'H2077 / G2378',
    phonetic: "Meswa'et",
    meaning: 'ለኃጢአት ማስተስረያ ወይም ለእግዚአብሔር ምስጋና የሚቀርብ ቅዱስ ስጦታ፤ የክርስቶስ የመስቀል ላይ መስዋዕትነት ፍጹም ማጠቃለያው ነው።',
    meaningEn: 'Sacrifice, Offering (Thysia / Zevach). An act of dedication and atonement, ultimately fulfilled in Christ\'s crucifixion.',
    biblicalContext: '«ክርስቶስ ለእግዚአብሔር የመዓዛ ሽታ የሚሆን መባንና መሥዋዕትን አድርጎ ስለ እናንተ ራሱን አሳልፎ ሰጠ» (ኤፌ 5:2)።',
    references: ['ዘፍጥረት 4:4', 'ዘሌዋውያን 1:2', 'መዝሙር 51:17', 'ሮሜ 12:1', 'ዕብራውያን 9:26'],
    forms: ['መሥዋዕት', 'መሥዋዕቱ', 'መሥዋዕቴ', 'መሥዋዕትን', 'በመሥዋዕት', 'የመሥዋዕት'],
  },
  {
    word: 'ቁርባን',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'አቀረበ (አቀረበ፣ አቀረበው)፤ ወደ እግዚአብሔር መቅረብ፣ ቅዱስ ሥጋውና ደሙ',
    originalTerm: 'קָרְבָּן (Qorban) / εὐχαριστία (Eucharistia)',
    strongs: 'H7133 / G2169',
    phonetic: 'Qurban',
    meaning: 'ወደ እግዚአብሔር የሚቀርብ ቅዱስ መባ፤ በአዲስ ኪዳን የክርስቶስ ክቡር ሥጋና ቅዱስ ደም የሚፈተትበት ቅዱስ ምስጢር (ቅዱስ ቁርባን)።',
    meaningEn: 'Eucharist, Holy Communion, Offering (Qorban). The sacrament of the Lord\'s Supper.',
    biblicalContext: '«ሥጋዬን የሚበላ ደሜንም የሚጠጣ የዘላለም ሕይወት አለው» (ዮሐ 6:54)።',
    references: ['ማርቆስ 7:11', 'ማቴዎስ 26:26-28', 'ዮሐንስ 6:53-56', '1 ቆሮንቶስ 11:23-26'],
    forms: ['ቁርባን', 'ቁርባኑ', 'ቁርባኔ', 'ቁርባንን', 'በቁርባን', 'የቁርባን'],
  },
  {
    word: 'ጥምቀት',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ጠመቀ (ነከረ፣ አጠመቀ)፤ በውኃና በመንፈስ ቅዱስ ዳግም መወለድ',
    originalTerm: 'βάπτισμα (Baptisma) / טְבִילָה (Tevilah)',
    strongs: 'G908',
    phonetic: 'Timqet',
    meaning: 'ከውኃና ከመንፈስ ቅዱስ ተወልዶ የእግዚአብሔር ልጅ የመሆንና የኃጢአት ስርየት ማግኛ ታላቅ ምስጢር።',
    meaningEn: 'Baptism (Baptisma). The sacrament of regeneration by water and the Holy Spirit.',
    biblicalContext: '«ያመነ የተጠመቀም ይድናል» (ማር 16:16)፤ «አንድ ጌታ፥ አንድ እምነት፥ አንዲት ጥምቀት» (ኤፌ 4:5)።',
    references: ['ማቴዎስ 28:19', 'ማርቆስ 16:16', 'ዮሐንስ 3:5', 'ሮሜ 6:3-4', 'ኤፌሶን 4:5'],
    forms: ['ጥምቀት', 'ጥምቀቱ', 'ጥምቀቴ', 'ጥምቀትን', 'በጥምቀት', 'የጥምቀት'],
  },
  {
    word: 'ጸሎት',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ጸለየ (ለመነ፣ ተማጸነ)፤ ከእግዚአብሔር ጋር መነጋገርና ምልጃ',
    originalTerm: 'תְּפִלָּה (Tefillah) / προσευχή (Proseuche)',
    strongs: 'H8605 / G4335',
    phonetic: 'Tselot',
    meaning: 'የልብን ሐሳብ ለእግዚአብሔር መግለጥ፣ ምልጃ፣ ምስጋናና ልመና፤ የነፍስ እስትንፋስ።',
    meaningEn: 'Prayer (Tefillah / Proseuche). Direct communion, petition, and adoration addressed to God.',
    biblicalContext: '«ሳታቋርጡ ጸልዩ፤ በሁሉ አመስግኑ» (1 ተሰ 5:17)።',
    references: ['መዝሙር 5:3', 'ማቴዎስ 6:6-9', 'ፊልጵስዩስ 4:6', '1 ተሰሎንቄ 5:17', 'ያዕቆብ 5:16'],
    forms: ['ጸሎት', 'ጸሎቴ', 'ጸሎቱ', 'ጸሎታችን', 'ጸሎትን', 'በጸሎት', 'የጸሎት', 'ለጸሎት'],
  },
  {
    word: 'ጾም',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ጾመ (ከምግብና ከመጥፎ ነገር ተከለከለ)',
    originalTerm: 'צוֹם (Tzom) / νηστεία (Nesteia)',
    strongs: 'H6685 / G3521',
    phonetic: 'Tsom',
    meaning: 'ለተወሰነ ጊዜ ከምግብና መጠጥ መታቀብ፤ ሥጋን ለመንፈስ በማስገዛት ወደ እግዚአብሔር በጸሎት መቅረብ።',
    meaningEn: 'Fasting (Tzom / Nesteia). Voluntary abstinence for spiritual purification and communion with God.',
    biblicalContext: '«በፍጹም ልባችሁ በጾምና በልቅሶ ወደ እኔ ተመለሱ» (ኢዮ 2:12)።',
    references: ['ዘጸአት 34:28', 'ኢዮኤል 2:12', 'ማቴዎስ 4:2', 'ማቴዎስ 6:16-18', 'የሐዋርያት ሥራ 13:2-3'],
    forms: ['ጾም', 'ጾሙ', 'ጾሜ', 'ጾምን', 'በጾም', 'የጾም'],
  },
  {
    word: 'ቤተክርስቲያን',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ቤት (ማደሪያ) + ክርስቲያን (የክርስቶስ ወገን) = የክርስቶስ አካልና ማኅበር',
    originalTerm: 'ἐκκλησία (Ekklesia) / קָהָל (Qahal)',
    strongs: 'G1577 / H6951',
    phonetic: 'Betekristiyan',
    meaning: 'የምእመናን አንድነት፣ የክርስቶስ አካል የሆነችው የተቀደሰች ማኅበር፤ እንዲሁም የእግዚአብሔር የጸሎት ቤት።',
    meaningEn: 'Church (Ekklesia). The assembly of called-out believers, the Body of Christ.',
    biblicalContext: '«በዚህች ዓለት ላይ ቤተ ክርስቲያኔን እሠራለሁ፥ የገሃነም ደጆችም አይችሉአትም» (ማቴ 16:18)።',
    references: ['ማቴዎስ 16:18', 'የሐዋርያት ሥራ 2:47', 'ኤፌሶን 1:22-23', '1 ጢሞቴዎስ 3:15'],
    forms: ['ቤተክርስቲያን', 'ቤተ ክርስቲያን', 'ለቤተክርስቲያን', 'የቤተክርስቲያን', 'በቤተክርስቲያን'],
  },
  {
    word: 'ወንጌል',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ከግሪኩ «ኤቫንጌሊዮን» የተወሰደ፤ «የምሥራች፣ የደስታ ዜና» ማለት ነው',
    originalTerm: 'εὐαγγέλιον (Euangelion) / בְּשׂוֹרָה (Besorah)',
    strongs: 'G2098 / H1309',
    phonetic: 'Wengel',
    meaning: 'በኢየሱስ ክርስቶስ የማዳን ሥራ በኩል ለሰው ልጆች ሁሉ የታወጀው የደስታ፣ የድነትና የሰላም የምሥራች ቃል (አራቱ ወንጌላት)።',
    meaningEn: 'Gospel (Euangelion), the Good News of salvation through Jesus Christ.',
    biblicalContext: '«ወደ ዓለም ሁሉ ሂዱ ወንጌልንም ለፍጥረት ሁሉ ስበኩ» (ማር 16:15)።',
    references: ['ማርቆስ 1:1', 'ማርቆስ 16:15', 'ሮሜ 1:16', '1 ቆሮንቶስ 15:1-4'],
    forms: ['ወንጌል', 'ወንጌሉ', 'ወንጌልን', 'በወንጌል', 'የወንጌል', 'ለወንጌል'],
  },
  {
    word: 'ሕግ',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ሐገገ (ወሰነ፣ ደነገገ)፤ መመሪያ፣ ሥርዓት፣ ቶራህ',
    originalTerm: 'תּוֹרָה (Torah) / νόμος (Nomos)',
    strongs: 'H8451 / G3551',
    phonetic: 'Hig',
    meaning: 'እግዚአብሔር ለሕዝቡ የሰጠው የሕይወት መመሪያና ትእዛዝ፤ በሲና ተራራ ለሙሴ የተሰጠው ሕገ-ኦሪት።',
    meaningEn: 'Law, Torah, Commandments (Nomos). Divine instruction given to guide humanity.',
    biblicalContext: '«ሕጉንና ነቢያትን ለመሻር የመጣሁ አይምሰላችሁ፤ ልፈጽም እንጂ ለመሻር አልመጣሁም» (ማቴ 5:17)።',
    references: ['ዘጸአት 20:1-17', 'መዝሙር 1:2', 'ማቴዎስ 5:17', 'ሮሜ 7:12', 'ገላትያ 3:24'],
    forms: ['ሕግ', 'ሕጉ', 'ሕጌ', 'ሕግን', 'በሕግ', 'የሕግ', 'ለሕግ'],
  },

  // --- መንፈሳዊ ሰዎችና ማዕረጋት (Biblical People & Roles) ---
  {
    word: 'ካህን',
    category: 'መንፈሳዊ ሕይወት',
    geezRoot: 'ከሀነ (አገለገለ፣ ሰዋ)፤ ለእግዚአብሔር የተሾመ አገልጋይ',
    originalTerm: 'כֹּהֵን (Kohen) / ἱερεύς (Hiereus)',
    strongs: 'H3548 / G2409',
    phonetic: 'Kahin',
    meaning: 'በእግዚአብሔርና በሕዝቡ መካከል ቆሞ መሥዋዕትና ጸሎት የሚያቀርብ፣ ሕዝቡን የሚባርክ የተሾመ አገልጋይ (ካህናት)።',
    meaningEn: 'Priest (Kohen / Hiereus). Ordained mediator who offers sacrifices and prayers on behalf of the people.',
    biblicalContext: 'ክርስቶስ እንደ መልከ ጼዴቅ ሥርዓት የዘላለም ሊቀ ካህናት ነው (ዕብ 5:6)።',
    references: ['ዘጸአት 28:1', 'መዝሙር 110:4', 'ዕብራውያን 4:14', '1 ጴጥሮስ 2:9'],
    forms: ['ካህን', 'ካህኑ', 'ካህናት', 'ለካህን', 'የካህን', 'በካህን'],
  },
  {
    word: 'ነቢይ',
    category: 'መንፈሳዊ ሕይወት',
    geezRoot: 'ነበበ (ተናገረ)፤ የእግዚአብሔር ቃል አቀባይ፣ መጪውን የሚናገር',
    originalTerm: 'נָבִיא (Navi) / προφήτης (Prophetes)',
    strongs: 'H5030 / G4396',
    phonetic: 'Nebiy',
    meaning: 'በመንፈስ ቅዱስ ተመርቶ የእግዚአብሔርን ቃል፣ ተግሣጽና መጪውን ዘመን የሚያስተላልፍ የእግዚአብሔር መልእክተኛ።',
    meaningEn: 'Prophet (Navi / Prophetes). Inspired spokesman called to declare God\'s word and will.',
    biblicalContext: 'እግዚአብሔር በነቢያት አድሮ ለሰው ልጆች መንገዱን ገልጧል (ዕብ 1:1)።',
    references: ['ዘዳግም 18:18', 'ኢሳይያስ 6:8', 'ኤርምያስ 1:5', 'ዕብራውያን 1:1'],
    forms: ['ነቢይ', 'ነቢያት', 'ነቢዩ', 'ለነቢይ', 'የነቢይ', 'በነቢይ'],
  },
  {
    word: 'ሐዋርያ',
    category: 'መንፈሳዊ ሕይወት',
    geezRoot: 'ሖረ (ሄደ)፤ የተላከ፣ አምባሳደር፣ መልእክተኛ',
    originalTerm: 'ἀπόστολος (Apostolos) / שָׁלִיחַ (Shaliach)',
    strongs: 'G652 / H7971',
    phonetic: 'Hawarya',
    meaning: 'በኢየሱስ ክርስቶስ በቀጥታ ተመርጦና ተልኮ ወንጌልን ለማስተማር የተሰማራ ደቀ መዝሙር (አሥራ ሁለቱ ሐዋርያት)።',
    meaningEn: 'Apostle (Apostolos). Commissioned envoy sent forth by Christ to establish the Church.',
    biblicalContext: 'በሐዋርያትና በነቢያት መሠረት ላይ ታንጻችኋል (ኤፌ 2:20)።',
    references: ['ማቴዎስ 10:2', 'የሐዋርያት ሥራ 1:8', '1 ቆሮንቶስ 12:28', 'ኤፌሶን 2:20'],
    forms: ['ሐዋርያ', 'ሐዋርያት', 'ሐዋርያው', 'ለሐዋርያ', 'የሐዋርያ', 'በሐዋርያ'],
  },
  {
    word: 'አዳም',
    category: 'ቅዱሳን ሰዎች',
    geezRoot: 'ከዕብራይስጡ «አዳማ» (ቀይ አፈር/መሬት) የተወሰደ፤ ሰው ማለት ነው',
    originalTerm: 'אָדָם (Adam)',
    strongs: 'H120',
    phonetic: 'Adam',
    meaning: 'የመጀመሪያው ሰው፤ በእግዚአብሔር መልክና ምሳሌ ከአፈር የተፈጠረ የሰው ልጆች ሁሉ አባት።',
    meaningEn: 'Adam, the first man created from dust (Adamah) in God\'s image.',
    biblicalContext: '«በአዳም ሁሉ እንደሚሞቱ እንዲሁ በክርስቶስ ሁሉ ሕያዋን ይሆናሉ» (1 ቆሮ 15:22)።',
    references: ['ዘፍጥረት 1:26-27', 'ዘፍጥረት 2:7', 'ሮሜ 5:14', '1 ቆሮንቶስ 15:22'],
    forms: ['አዳም', 'ለአዳም', 'የአዳም', 'በአዳም', 'ከአዳም'],
  },
  {
    word: 'ሔዋን',
    category: 'ቅዱሳን ሰዎች',
    geezRoot: 'ከዕብራይስጡ «ሐዋ» (ሕያው) የተወሰደ፤ የሕያዋን ሁሉ እናት',
    originalTerm: 'חַוָּה (Chavah)',
    strongs: 'H2332',
    phonetic: 'Hewan',
    meaning: 'የመጀመሪያይቱ ሴት፤ ከአዳም ጎን ተፈጥራ የአዳም ረዳትና የሰው ልጆች እናት የሆነች።',
    meaningEn: 'Eve, Mother of all living (from root for "living").',
    biblicalContext: '«አዳምም ለሚስቱ ሔዋን ብሎ ስም አወጣ፥ የሕያዋን ሁሉ እናት ናትና» (ዘፍ 3:20)።',
    references: ['ዘፍጥረት 2:21-23', 'ዘፍጥረት 3:20', '2 ቆሮንቶስ 11:3', '1 ጢሞቴዎስ 2:13'],
    forms: ['ሔዋን', 'ለሔዋን', 'የሔዋን', 'በሔዋን'],
  },
  {
    word: 'አብርሃም',
    category: 'ቅዱሳን ሰዎች',
    geezRoot: 'ከዕብራይስጡ «አብ-ራሃም»፤ የብዙ ሕዝቦች አባት ማለት ነው',
    originalTerm: 'אַבְרָהָם (Avraham)',
    strongs: 'H85',
    phonetic: 'Abraham',
    meaning: 'የእምነት አባት፤ እግዚአብሔር ኪዳን የገባለትና በዘሩ የምድር አሕዛብ ሁሉ እንደሚባረኩ ቃል የተገባለት ታላቅ አባት።',
    meaningEn: 'Abraham, Father of a multitude. The father of faith and covenant patriarch.',
    biblicalContext: '«አብርሃምም እግዚአብሔርን አመነ ጽድቅም ሆኖ ተቆጠረለት» (ዘፍ 15:6)።',
    references: ['ዘፍጥረት 12:1-3', 'ዘፍጥረት 15:6', 'ዘፍጥረት 17:5', 'ሮሜ 4:3', 'ገላትያ 3:7'],
    forms: ['አብርሃም', 'ለአብርሃም', 'የአብርሃም', 'በአብርሃም'],
  },
  {
    word: 'ሙሴ',
    category: 'ቅዱሳን ሰዎች',
    geezRoot: 'ከዕብራይስጡ «ሞሼ»፤ «ከውኃ ያወጣሁት» ማለት ነው',
    originalTerm: 'מֹשֶׁה (Mosheh)',
    strongs: 'H4872',
    phonetic: 'Muse',
    meaning: 'የእስራኤልን ሕዝብ ከግብጽ ባርነት ያወጣ፣ በደብረ ሲና ከእግዚአብሔር አሥሩን ትእዛዛት የተቀበለ ታላቅ ነቢይና መሪ።',
    meaningEn: 'Moses, drawn from water. The prophet and lawgiver of the Old Covenant.',
    biblicalContext: 'ሕግ በሙሴ ተሰጥቶ ነበር፤ ጸጋና እውነት ግን በኢየሱስ ክርስቶስ ሆነ (ዮሐ 1:17)።',
    references: ['ዘጸአት 2:10', 'ዘጸአት 3:10', 'ዘዳግም 34:10', 'ዮሐንስ 1:17', 'ዕብራውያን 3:5'],
    forms: ['ሙሴ', 'ለሙሴ', 'የሙሴ', 'በሙሴ'],
  },
  {
    word: 'ዳዊት',
    category: 'ቅዱሳን ሰዎች',
    geezRoot: 'ከዕብራይስጡ «ዳቪድ»፤ ተወዳጅ ማለት ነው',
    originalTerm: 'דָּוִד (David)',
    strongs: 'H1732',
    phonetic: 'Dawit',
    meaning: 'እንደ እግዚአብሔር ልብ የሆነ የእስራኤል ንጉሥ፤ የመዝሙራት ደራሲና የክርስቶስ የዘር ሐረግ ቅድመ-አያት።',
    meaningEn: 'David, "Beloved". King of Israel, psalmist, and ancestor of Christ.',
    biblicalContext: 'ክርስቶስ «የዳዊት ልጅ» ተብሎ ይጠራል (ማቴ 1:1፣ ማቴ 20:30)።',
    references: ['1 ሳሙኤል 13:14', '1 ሳሙኤል 16:13', 'መዝሙር 23:1', 'ማቴዎስ 1:1'],
    forms: ['ዳዊት', 'ለዳዊት', 'የዳዊት', 'በዳዊት'],
  },
  {
    word: 'ማርያም',
    category: 'ቅዱሳን ሰዎች',
    geezRoot: 'ከዕብራይስጡ «ሚርያም»፤ እመቤት፣ ከፍ ያለች ማለት ነው',
    originalTerm: 'Μαριάም (Mariam) / מִרְיָם (Miryam)',
    strongs: 'G3137 / H4813',
    phonetic: 'Maryam',
    meaning: 'የእግዚአብሔር እናት (ወላዲተ አምላክ)፤ ጌታችን ኢየሱስ ክርስቶስን ያለ ወንድ ዘር በመንፈስ ቅዱስ ግብር በንጽሕና የወለደች እመቤታችን።',
    meaningEn: 'Mary, Mother of God (Theotokos), chosen handmaid who gave birth to Christ.',
    biblicalContext: '«ትውልድ ሁሉ ብፅዕት ይሉኛል፤ ብርቱ የሆነ እርሱ በእኔ ታላቅ ሥራ አድርጓልና» (ሉቃ 1:48-49)።',
    references: ['ሉቃስ 1:28', 'ሉቃስ 1:46-49', 'ዮሐንስ 19:26-27', 'የሐዋርያት ሥራ 1:14'],
    forms: ['ማርያም', 'ለማርያም', 'የማርያም', 'በማርያም'],
  },

  // --- ቅዱሳን ቦታዎችና ቃላት (Biblical Places & Sacred Words) ---
  {
    word: 'ጽዮን',
    category: 'ቅዱሳን ቦታዎች',
    geezRoot: 'ጽዮን (ምሽግ፣ የተመሸገ ቦታ፣ የእግዚአብሔር ተራራ)',
    originalTerm: 'צִיּוֹן (Tziyon) / Σιών (Sion)',
    strongs: 'H6726 / G4622',
    phonetic: 'Tsiyon',
    meaning: 'በኢየሩሳሌም የሚገኘው ቅዱስ ተራራ፤ የእግዚአብሔር ማደሪያ፣ የቤተክርስቲያን ምሳሌና የሰማያዊቷ ከተማ ጥላ።',
    meaningEn: 'Zion, Mount of the Lord, symbol of God\'s holy city, dwelling place, and Church.',
    biblicalContext: '«እግዚአብሔር ጽዮንን መርጦአታልና፥ ማደሪያውም ትሆነው ዘንድ ወድዶአታልና» (መዝ 132:13)።',
    references: ['2 ሳሙኤል 5:7', 'መዝሙር 132:13', 'ኢሳይያስ 2:3', 'ዕብራውያን 12:22', 'ራእይ 14:1'],
    forms: ['ጽዮን', 'ለጽዮን', 'የጽዮን', 'በጽዮን', 'ጽዮንን'],
  },
  {
    word: 'ኢየሩሳሌም',
    category: 'ቅዱሳን ቦታዎች',
    geezRoot: 'ይሩ (መሠረት) + ሻሎም (ሰላም) = የሰላም መሠረት/ከተማ',
    originalTerm: 'יְרוּשָׁלַיִם (Yerushalayim) / Ἱερουσαλήም',
    strongs: 'H3389 / G2419',
    phonetic: 'Iyerusalem',
    meaning: 'የሰላም ከተማ፤ የዳዊትና የሰሎሞን መናገሻ፣ ቤተ መቅደስ የታነጸባት ቅድስት ከተማ፤ በአዲስ ኪዳን የሰማያዊት መንግሥት ምሳሌ (አዲሲቱ ኢየሩሳሌም)።',
    meaningEn: 'Jerusalem, City of Peace. The holy city of kings and temple, and prototype of the Heavenly Jerusalem.',
    biblicalContext: '«ስለ ኢየሩሳሌም ሰላም ለምኑ» (መዝ 122:6)፤ «ቅድስቲቱ ከተማ አዲሲቱ ኢየሩሳሌም» (ራእ 21:2)።',
    references: ['መዝሙር 122:6', 'ኢሳይያስ 62:1', 'ማቴዎስ 23:37', 'ራእይ 21:2'],
    forms: ['ኢየሩሳሌም', 'ለኢየሩሳሌም', 'የኢየሩሳሌም', 'በኢየሩሳሌም', 'ወደ ኢየሩሳሌም'],
  },
  {
    word: 'አሜን',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'አመነ (እውነት ነው፣ ይሁን፣ ይጽና)፤ እውነተኛ ማረጋገጫ',
    originalTerm: 'אָמֵן (Amen) / ἀμήን',
    strongs: 'H543 / G281',
    phonetic: 'Amen',
    meaning: 'እውነት ነው፣ ይሁን፣ ይጽና፤ በጸሎትና በምስጋና ማጠቃለያ ላይ የሚነገር የእምነትና የታማኝነት ማረጋገጫ ቃል።',
    meaningEn: 'Amen, Truly, So be it. A solemn affirmation of faith and truth.',
    biblicalContext: '«በእርሱም ስለ ሆነ ለእግዚአብሔር ክብር በእኛ የሚሆነው አሜን በእርሱ ነው» (2 ቆሮ 1:20)።',
    references: ['ዘኍልቍ 5:22', 'መዝሙር 106:48', '2 ቆሮንቶስ 1:20', 'ራእይ 3:14', 'ራእይ 22:20'],
    forms: ['አሜን'],
  },
  {
    word: 'ሃሌ ሉያ',
    category: 'ኪዳንና አምልኮ',
    geezRoot: 'ሃሌሉ (አመስግኑ) + ያህ (እግዚአብሔር) = እግዚአብሔርን አመስግኑ',
    originalTerm: 'הַלְלוּ־יָהּ (Hallelu-Yah) / ἁλληλούϊα',
    strongs: 'H1984 + H3050 / G239',
    phonetic: 'Halleluya',
    meaning: 'እግዚአብሔርን አመስግኑ! የድል፣ የደስታና የመላእክት የዘላለም የውዳሴ ቃል ነው።',
    meaningEn: 'Hallelujah, Praise Yahweh! A shout of joy, triumph, and celestial praise.',
    biblicalContext: 'በመዝሙረ ዳዊት እና በራእይ ምዕራፍ 19 በሰማያት የሚሰማ ታላቅ የምስጋና ድምፅ።',
    references: ['መዝሙር 104:35', 'መዝሙር 150:1', 'ራእይ 19:1-6'],
    forms: ['ሃሌ ሉያ', 'ሃሌሉያ'],
  },
  {
    word: 'መንግሥት',
    category: 'ትንቢትና ፍርድ',
    geezRoot: 'ነግሠ (ነገሠ)፤ ሉዓላዊ ግዛት፣ የእግዚአብሔር አገዛዝ (መንግሥተ ሰማያት)',
    originalTerm: 'מַלְכוּת (Malkhut) / βασιλεία (Basileia)',
    strongs: 'H4438 / G932',
    phonetic: 'Mengist',
    meaning: 'የእግዚአብሔር የዘላለም አገዛዝና ሉዓላዊነት፤ የክርስቶስ የጽድቅና የሰላም ግዛት (መንግሥተ ሰማያት)።',
    meaningEn: 'Kingdom, Reign, Sovereignty (Basileia / Malkhut). The rule of God in hearts and eternity.',
    biblicalContext: '«አስቀድማችሁ የእግዚአብሔርን መንግሥትና ጽድቁን ፈልጉ» (ማቴ 6:33)።',
    references: ['መዝሙር 145:13', 'ማቴዎስ 6:10', 'ማቴዎስ 6:33', 'ዮሐንስ 18:36', 'ራእይ 11:15'],
    forms: ['መንግሥት', 'መንግሥቱ', 'መንግሥቴ', 'መንግሥትን', 'በመንግሥት', 'የመንግሥት'],
  },
]

// Map headwords and inflected forms for rapid O(1) lookup
const LEXICON_INDEX = new Map<string, AmharicLexiconEntry>()
for (const entry of AMHARIC_LEXICON) {
  LEXICON_INDEX.set(entry.word, entry)
  if (entry.forms) {
    for (const f of entry.forms) {
      if (!LEXICON_INDEX.has(f)) {
        LEXICON_INDEX.set(f, entry)
      }
    }
  }
}

const COMMON_PREFIXES: { prefix: string; meaning: string }[] = [
  { prefix: 'እንደ', meaning: 'እንደ (like / according to)' },
  { prefix: 'ስለ', meaning: 'ስለ (about / for the sake of)' },
  { prefix: 'ወደ', meaning: 'ወደ (towards / unto)' },
  { prefix: 'እስከ', meaning: 'እስከ (until / unto)' },
  { prefix: 'በ', meaning: 'በ- (in / by / with)' },
  { prefix: 'ለ', meaning: 'ለ- (to / for)' },
  { prefix: 'ከ', meaning: 'ከ- (from / out of)' },
  { prefix: 'የ', meaning: 'የ- (of / belonging to)' },
  { prefix: 'እየ', meaning: 'እየ- (while / each)' },
]

const COMMON_SUFFIXES: { suffix: string; meaning: string }[] = [
  { suffix: 'ዎችን', meaning: '-ዎችን (plural definite direct object)' },
  { suffix: 'ቸው', meaning: '-ቸው (their / them)' },
  { suffix: 'ዎች', meaning: '-ዎች (plural marker)' },
  { suffix: 'አችን', meaning: '-አችን (our)' },
  { suffix: 'ውን', meaning: '-ውን (the - direct object)' },
  { suffix: 'ትን', meaning: '-ትን (direct object)' },
  { suffix: 'በት', meaning: '-በት (in it / on it)' },
  { suffix: 'ናት', meaning: '-ናት (and / plural)' },
  { suffix: 'ና', meaning: '-ና (and)' },
  { suffix: 'ም', meaning: '-ም (also / and)' },
  { suffix: 'ን', meaning: '-ን (direct object marker)' },
  { suffix: 'ው', meaning: '-ው (the / his)' },
  { suffix: 'ዋ', meaning: '-ዋ (her / the feminine)' },
  { suffix: 'ህ', meaning: '-ህ (your masculine)' },
  { suffix: 'ሽ', meaning: '-ሽ (your feminine)' },
  { suffix: 'ዬ', meaning: '-ዬ (my)' },
  { suffix: 'ኤ', meaning: '-ኤ (my)' },
]

/**
 * Strips punctuation and decomposes prefixes/suffixes to find the root entry
 */
export function lookupAmharicWord(rawWord: string): AmharicLookupResult {
  const clean = rawWord
    .replace(/^[\s፡፦፤።፥፧?!,.;:"'«»‹›()[\]{}]+|[\s፡፦፤።፥፧?!,.;:"'«»‹›()[\]{}]+$/g, '')
    .trim()

  if (!clean) {
    return { query: rawWord, cleanWord: '' }
  }

  // 1. Direct index check
  const exact = LEXICON_INDEX.get(clean)
  if (exact) {
    return { query: rawWord, cleanWord: clean, entry: exact }
  }

  // 2. Morphological decomposition
  let workingStem = clean
  const prefixes: { text: string; meaning: string }[] = []
  const suffixes: { text: string; meaning: string }[] = []

  // Check prefixes
  for (const p of COMMON_PREFIXES) {
    if (workingStem.startsWith(p.prefix) && workingStem.length > p.prefix.length + 2) {
      prefixes.push({ text: p.prefix, meaning: p.meaning })
      workingStem = workingStem.slice(p.prefix.length)
      break
    }
  }

  // Check if stem now matches
  let candidate = LEXICON_INDEX.get(workingStem)
  if (candidate) {
    return {
      query: rawWord,
      cleanWord: clean,
      entry: candidate,
      morphology: { stem: workingStem, prefixes, suffixes },
    }
  }

  // Check suffixes
  for (const s of COMMON_SUFFIXES) {
    if (workingStem.endsWith(s.suffix) && workingStem.length > s.suffix.length + 2) {
      suffixes.push({ text: s.suffix, meaning: s.meaning })
      workingStem = workingStem.slice(0, -s.suffix.length)
      break
    }
  }

  candidate = LEXICON_INDEX.get(workingStem)
  if (candidate) {
    return {
      query: rawWord,
      cleanWord: clean,
      entry: candidate,
      morphology: { stem: workingStem, prefixes, suffixes },
    }
  }

  // Check for contracted forms (e.g. በእግዚአብሔር -> እግዚአብሔር, ለእግዚአብሔር -> እግዚአብሔር)
  for (const entry of AMHARIC_LEXICON) {
    if (clean.includes(entry.word) || entry.word.includes(workingStem)) {
      return {
        query: rawWord,
        cleanWord: clean,
        entry,
        morphology: { stem: entry.word, prefixes, suffixes },
      }
    }
  }

  // Return clean morphology even if not in theological lexicon
  return {
    query: rawWord,
    cleanWord: clean,
    morphology: {
      stem: workingStem,
      prefixes,
      suffixes,
    },
  }
}
