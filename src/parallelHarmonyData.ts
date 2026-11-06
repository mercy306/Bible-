/**
 * Parallel Scripture Harmony & False Teaching Defense
 * (የተዛማጅ ክፍሎች ማነጻጸሪያና ውህደት — መጽሐፍ ቅዱስ ራሱን በራሱ ሲተረጉም)
 *
 * Explains why the same verse, story, or doctrine appears differently across scriptures,
 * the historical/linguistic reasons for the variation, how false teachers isolate one verse,
 * and how reading them together establishes the true, unbreakable biblical truth.
 */

export interface PassageSnapshot {
  refAm: string
  refEn: string
  bookNr: number
  chapter: number
  verse: number
  verseEnd?: number
  textAm: string
  textEn: string
  writerContextAm: string
  writerContextEn: string
}

export interface ParallelHarmonyEntry {
  id: string
  titleAm: string
  titleEn: string
  category: 'gospel_parallel' | 'ot_in_nt' | 'theological_balance' | 'historical_harmony'
  categoryLabelAm: string
  categoryLabelEn: string
  primaryKey: string // "book.chapter" or "book.chapter.verse" for quick lookup
  relatedKeys: string[] // other passages linked to this harmony

  // The passages to compare side-by-side
  passageA: PassageSnapshot
  passageB: PassageSnapshot
  passageC?: PassageSnapshot

  // 1. Why Did the Words Differ? (ለምን አገላለጹ ተለያየ?)
  whyDiffersAm: string
  whyDiffersEn: string

  // 2. The False Teaching Trap (የሐሰት ትምህርት ወጥመድ)
  falseTrapAm: string
  falseTrapEn: string

  // 3. The Harmonized Divine Truth (የተዛማጁ እውነተኛ ውህደት)
  harmonizedTruthAm: string
  harmonizedTruthEn: string
}

export const PARALLEL_HARMONY_ENTRIES: ParallelHarmonyEntry[] = [
  // 1. Matthew 23:23-24 vs Luke 11:42 (The Camel & The Gnat / Tithing)
  {
    id: 'harmony-camel-gnat',
    titleAm: 'ትንኝን ማጣራትና ግመልን መዋጥ — ማቴዎስ ወይስ ሉቃስ?',
    titleEn: 'Straining the Gnat & Swallowing the Camel — Matthew vs. Luke',
    category: 'gospel_parallel',
    categoryLabelAm: 'ተመሳሳይ የወንጌል ክፍል (Gospel Parallel)',
    categoryLabelEn: 'Synoptic Gospel Parallel',
    primaryKey: '40.23.24',
    relatedKeys: ['40.23.23', '42.11.42'],
    passageA: {
      refAm: 'የማቴዎስ ወንጌል 23:23-24',
      refEn: 'Matthew 23:23-24',
      bookNr: 40,
      chapter: 23,
      verse: 23,
      verseEnd: 24,
      textAm: 'እናንተ ግብዞች ጻፎችና ፈሪሳውያን፥ ከአዝሙድና ከእንስላል ከከሙንም አሥራት ስለምታወጡ፥ ፍርድንና ምሕረትን እምነትንም፥ በሕግ ያለውን ዋና ነገር ስለምትተዉ ወዮላችሁ፤ እናንተ ዕውሮች መሪዎች፤ ትንኝን የምታጠሩ ግመልንም የምትውጡ።',
      textEn: 'Woe unto you, scribes and Pharisees, hypocrites! for ye pay tithe of mint and anise and cummin, and have omitted the weightier matters of the law, judgment, mercy, and faith... Ye blind guides, which strain at a gnat, and swallow a camel.',
      writerContextAm: 'ማቴዎስ የጻፈው ለአይሁድ ምእመናን ነው። የአረማይክ ቃል ጨዋታውን («ጋምላ» ግመል እና «ቃምላ» ትንኝ) እና የዘሌዋውያን 11ን የርኩሰት ሕግ ጥቃቅን ዝርዝር ጠንቅቀው ስለሚያውቁ አስመሳይነታቸውን በጥልቀት አጋልጧል።',
      writerContextEn: 'Matthew wrote to a Jewish audience intimately familiar with Levitical dietary laws and the Semitic pun between Gamla (camel) and Qamla (gnat).'
    },
    passageB: {
      refAm: 'የሉቃስ ወንጌል 11:42',
      refEn: 'Luke 11:42',
      bookNr: 42,
      chapter: 11,
      verse: 42,
      textAm: 'ነገር ግን ፍርድንና የእግዚአብሔርን ፍቅር ስለምታልፉ ለእናንተ ለፈሪሳውያን ወዮላችሁ፤ ከአዝሙድና ከጤና አዳም ከአትክልትም ሁሉ አሥራት ታወጣላችሁ፥ ነገር ግን ይህን ልታደርጉ ያንም ሳትተዉ ይገባችሁ ነበር።',
      textEn: 'But woe unto you, Pharisees! for ye tithe mint and rue and all manner of herbs, and pass over judgment and the love of God: these ought ye to have done, and not to leave the other undone.',
      writerContextAm: 'ሉቃስ የጻፈው ለግሪካውያንና ለአሕዛብ ነው። ትኩረቱ በአይሁድ ፈሊጥ ላይ ሳይሆን የሕጉ እውነተኛ ማዕከል የሆነውን የእግዚአብሔርን ፍቅርና ፍትሕ መጣሳቸው ላይ ነው።',
      writerContextEn: 'Luke wrote to Greeks and Gentiles; he focuses not on Jewish verbal puns, but on the universal moral core: the love of God and divine justice.'
    },
    whyDiffersAm: 'ማቴዎስ ለአይሁድ ሲጽፍ ፈሪሳውያን በኩራት የሚቆጥሩትን ጥቃቅን የሕግ ዝርዝር (እንስላልና ከሙን) እና የአረማይክ ፈሊጡን አጎላ፤ ሉቃስ ደግሞ ለአሕዛብ ሲጽፍ የአትክልት ስሞችን ቀይሮ የእግዚአብሔር ፍቅር መጣሱን አጉልቶ አሳየ። ሁለቱም አንድ ዓይነት ተግሣጽ በአድማጭ ቋንቋ አቀረቡ።',
    whyDiffersEn: 'Matthew highlighted specific rabbinic spices and Semitic wordplay for Jews; Luke translated the principle for Gentiles, underscoring "the love of God" which was universally understood.',
    falseTrapAm: 'የሐሰት መምህራን ማቴዎስ 23ን ቆርጠው በመውሰድ «ትንኝን አታጥሩ ተብሏልና ጥቃቅን ኃጢአት ግድ የለም፣ ውጫዊ ሕይወት ምንም ዋጋ የለውም» ይላሉ። በሌላ በኩል ደግሞ አስራትን ለማስገደድ ብቻ ይጠቀሙበታል።',
    falseTrapEn: 'False teachers isolate "strain out a gnat" to mock ethical precision, claiming small moral choices do not matter as long as one is broadly "spiritual."',
    harmonizedTruthAm: 'ሁለቱም ክፍሎች በአንድነት ሲነበቡ ኢየሱስ የተናገረው ወርቃማ ሚዛን ይገለጣል፦ «ይህን ልታደርጉ ያንም ሳትተዉ ይገባችሁ ነበር!»። እውነተኛ ክርስትና ውጫዊ ታዛዥነትንና ውስጣዊ ፍቅርንና ፍትሕን አያጋጭም፤ ሁለቱንም ይጠብቃል።',
    harmonizedTruthEn: 'When harmonized, Christ’s true principle shines: "These ought ye to have done, and not to leave the other undone." Real faith joins inner justice with practical obedience.'
  },

  // 2. Matthew 7:1-2 vs John 7:24 vs 1 Cor 5:12 (Judging)
  {
    id: 'harmony-judging',
    titleAm: 'አትፍረዱ ወይስ በቅን ፍርድ ፍረዱ? — ማቴዎስ 7 ወይስ ዮሐንስ 7?',
    titleEn: '“Judge Not” vs. “Judge Righteous Judgment” — Matthew 7 vs. John 7',
    category: 'theological_balance',
    categoryLabelAm: 'ማመዛዘኛ ክፍሎች (Theological Balance)',
    categoryLabelEn: 'Doctrinal Balance',
    primaryKey: '40.7.1',
    relatedKeys: ['40.7.2', '43.7.24', '46.5.12', '42.6.37'],
    passageA: {
      refAm: 'የማቴዎስ ወንጌል 7:1-2',
      refEn: 'Matthew 7:1-2',
      bookNr: 40,
      chapter: 7,
      verse: 1,
      verseEnd: 2,
      textAm: 'በምትፈርዱበት ፍርድ ይፈረድባችኋልና፥ በምትሰፍሩበትም መስፈሪያ ይሰፈርባችኋል፤ እንዳይፈረድባችሁ አትፍረዱ።',
      textEn: 'Judge not, that ye be not judged. For with what judgment ye judge, ye shall be judged: and with what measure ye mete, it shall be measured to you again.',
      writerContextAm: 'በተራራው ስብከት ላይ ኢየሱስ የፈሪሳውያንን ራስን ጻድቅ አድርጎ ሌላውን በኩነኔ የመመልከት (Hypocritical Condemnation) መንፈስ አገደ። በራስህ ዓይን ምሰሶ እያለ በወንድምህ ዓይን ጉድፍ አትፈልግ አለ።',
      writerContextEn: 'Jesus forbids hypocritical, self-righteous condemnation that rejoices in finding fault while blinded to one’s own logs.'
    },
    passageB: {
      refAm: 'የዮሐንስ ወንጌል 7:24',
      refEn: 'John 7:24',
      bookNr: 43,
      chapter: 7,
      verse: 24,
      textAm: 'በቅን ፍርድ ፍረዱ እንጂ በመልክ አትፍረዱ።',
      textEn: 'Judge not according to the appearance, but judge righteous judgment.',
      writerContextAm: 'በበዓለ ዳስ በኢየሩሳሌም፤ ኢየሱስ በሰንበት የታመመውን ሰው በመፈወሱ ሊፈርዱበት ሲሞክሩ፦ በውጫዊ ወግ ሳይሆን በእግዚአብሔር እውነት ፍረዱ በማለት መንፈሳዊ ማስተዋልን (Righteous Discernment) አዘዘ።',
      writerContextEn: 'Jesus commands believers to exercise moral discernment according to God’s objective truth, rather than superficial human bias.'
    },
    passageC: {
      refAm: '1ኛ ቆሮንቶስ 5:12',
      refEn: '1 Corinthians 5:12',
      bookNr: 46,
      chapter: 5,
      verse: 12,
      textAm: 'በውጭ ባሉት ላይ መፍረድ ምን አግዶኝ? እናንተ በውስጥ ባሉት ላይ አትፈርዱምን?',
      textEn: 'For what have I to do to judge them also that are without? do not ye judge them that are within?',
      writerContextAm: 'ጳውሎስ በቤተክርስቲያን ውስጥ ግልጽ ኃጢአትና የሐሰት ትምህርት ሲኖር መሪዎችና ምእመናን እውነትን ከሐሰት እንዲለዩና ጉባኤውን እንዲጠብቁ ያዘ።',
      writerContextEn: 'Paul instructs the church to judge and guard itself from false teachers and unrepentant corruption within the fold.'
    },
    whyDiffersAm: 'ማቴዎስ 7 የግብዝነት ኩነኔን (Condemnation) ይከለክላል፤ ዮሐንስ 7 እና 1ኛ ቆሮንቶስ 5 ግን እውነትን ከሐሰት የመለየትን መንፈሳዊ ማስተዋል (Discernment & Discipline) ያዛሉ። የግሪክ ቃሉ «ክሪኖ» (krino) በዐውዱ መሠረት መለየት አለበት።',
    whyDiffersEn: 'Matthew 7 forbids Pharisaic fault-finding; John 7 and 1 Cor 5 command biblical discernment. The Greek word "krino" encompasses both, discerned only by immediate context.',
    falseTrapAm: 'የሐሰት መምህራንና የኑፋቄ አስተማሪዎች ኃጢአታቸው ሲጋለጥ «አትፍረዱ ተብሏል!» በማለት ማቴዎስ 7:1ን ጋሻ አድርገው ምእመናንን አፋቸውን ያስይዛሉ።',
    falseTrapEn: 'False teachers use "Judge not!" as an unassailable shield to silence exposure, paralyze church accountability, and normalize false doctrine.',
    harmonizedTruthAm: 'ክርስቲያን በግብዝነት ሰውን አይኮንንም፤ ነገር ግን የሰውን ትምህርትና ፍሬ በመጽሐፍ ቅዱስ ሚዛን «በቅን ፍርድ» መመርመር ግዴታው ነው። ማቴዎስ 7:15 ራሱ «ከሐሰተኞች ነቢያት ተጠንቀቁ» ይላልና!',
    harmonizedTruthEn: 'A Christian never condemns hypocritically, but is commanded to test all spirits and doctrines with righteous biblical discernment (1 Thess 5:21, 1 John 4:1).'
  },

  // 3. Romans 3:28 vs James 2:24 vs Ephesians 2:8-10 (Faith & Works)
  {
    id: 'harmony-faith-works',
    titleAm: 'በእምነት ብቻ ወይስ በሥራ? — ሮሜ 3 ወይስ ያዕቆብ 2?',
    titleEn: 'Justified by Faith or by Works? — Romans 3 vs. James 2',
    category: 'theological_balance',
    categoryLabelAm: 'ማመዛዘኛ ክፍሎች (Faith & Works)',
    categoryLabelEn: 'Soteriological Balance',
    primaryKey: '45.3.28',
    relatedKeys: ['59.2.24', '49.2.8', '49.2.9', '49.2.10', '45.4.3'],
    passageA: {
      refAm: 'ወደ ሮሜ ሰዎች 3:28',
      refEn: 'Romans 3:28',
      bookNr: 45,
      chapter: 3,
      verse: 28,
      textAm: 'ሰው ያለ ሕግ ሥራ በእምነት እንዲጸድቅ እንቆጥራለንና።',
      textEn: 'Therefore we conclude that a man is justified by faith without the deeds of the law.',
      writerContextAm: 'ጳውሎስ የሚከራከረው «የኦሪት ግዝረትንና ሥርዓትን በመፈጸም ድነትን በራስ ጥረት ማግኘት ይቻላል» ከሚሉ የሕግ አጥባቂዎች ጋር ነው። መዳን የጸጋ ስጦታ እንጂ የሰው ደመወዝ እንዳልሆነ አረጋገጠ።',
      writerContextEn: 'Paul is attacking legalism—the false belief that human merit and ceremonial Torah observance can earn salvation before God.'
    },
    passageB: {
      refAm: 'የያዕቆብ መልእክት 2:24',
      refEn: 'James 2:24',
      bookNr: 59,
      chapter: 2,
      verse: 24,
      textAm: 'ሰው በእምነት ብቻ ሳይሆን በሥራ እንዲጸድቅ ታያላችሁ።',
      textEn: 'Ye see then how that by works a man is justified, and not by faith only.',
      writerContextAm: 'ያዕቆብ የሚገሥጸው «በአፌ አምኛለሁ ስላልኩ ምንም የተለወጠ ሕይወትና መልካም ሥራ ባይኖረኝም እድናለሁ» የሚሉ ሰነፍ አማኞችን ነው። እውነተኛ እምነት በሕይወት ፍሬ እንደሚታይ አረጋገጠ።',
      writerContextEn: 'James is attacking antinomianism—the dead, intellectual lip-service that claims faith while remaining barren of love and obedience.'
    },
    passageC: {
      refAm: 'ወደ ኤፌሶን ሰዎች 2:8-10',
      refEn: 'Ephesians 2:8-10',
      bookNr: 49,
      chapter: 2,
      verse: 8,
      verseEnd: 10,
      textAm: 'ጸጋው በእምነት አድኖአችኋልና፤ ይህም የእግዚአብሔር ስጦታ ነው እንጂ ከእናንተ አይደለም፤ ማንም እንዳይመካ ከሥራ አይደለም። እኛ ፍጥረቱ ነንና፤ እንመላለስበት ዘንድ እግዚአብሔር አስቀድሞ ያዘጋጀውን መልካሙን ሥራ ለማድረግ በክርስቶስ ኢየሱስ ተፈጠርን።',
      textEn: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast. For we are his workmanship, created in Christ Jesus unto good works...',
      writerContextAm: 'ይህ ክፍል የጳውሎስንና የያዕቆብን ትምህርት በአንድ አንቀጽ ያዋህዳል፦ የምንድነው ያለ ሥራ በጸጋ ነው፤ የተፈጠርነው ግን ለመልካም ሥራ ነው።',
      writerContextEn: 'Ephesians harmonizes both: saved NOT of works (Paul), yet created UNTO good works (James).'
    },
    whyDiffersAm: 'ጳውሎስና ያዕቆብ «ሥራ» እና «ማጽደቅ» የሚሉትን ቃላት በተለያየ ውጊያ ተጠቀሙባቸው። ጳውሎስ ስለ ድነት ሥር (Root of Salvation — በእግዚአብሔር ፊት መጽደቅ) ተናገረ፤ ያዕቆብ ደግሞ ስለ ድነት ፍሬ (Fruit of Salvation — በሰው ፊት እምነት በሥራ መረጋገጡ) ተናገረ።',
    whyDiffersEn: 'Paul addresses the ROOT of justification before God (faith alone receives grace). James addresses the FRUIT of justification before men (genuine faith proves itself through active obedience).'
    ,
    falseTrapAm: 'አንደኞቹ «ምንም ሥራ አያስፈልግም በኃጢአት ብትመላለስም ድነሃል» በማለት ርካሽ ጸጋን ይሰብካሉ። ሌሎቹ ደግሞ «በራስህ ጥረት ካልተጋህ ድነትህ ይጠፋል» በማለት የክርስቶስን የዋጋ ሙሉነት ያፈርሳሉ።',
    falseTrapEn: 'Hyper-grace cults use Romans 3 to justify licentious living; legalistic sects use James 2 to teach works-righteousness and bondage.',
    harmonizedTruthAm: 'ማርቲን ሉተር እንዳለው፦ «የምንጸድቀው በእምነት ብቻ ነው፤ ነገር ግን ያጸደቀን እምነት መቼም ቢሆን ብቻውን አይቆምም!»። ዛፉ በእምነት ይተከላል፤ ሕይወቱ ግን በሥራ ፍሬ ይረጋገጣል።',
    harmonizedTruthEn: 'We are justified by faith alone, but the faith that justifies is never alone—it is always accompanied by the fruit of love, repentance, and good works.'
  },

  // 4. Matthew 19:16-17 vs Mark 10:17-18 vs John 10:30 (Christ's Goodness & Divinity)
  {
    id: 'harmony-christ-goodness',
    titleAm: 'ስለ ምን ቸር ትለኛለህ? — ማቴዎስ 19 ወይስ ማርቆስ 10?',
    titleEn: '“Why Callest Thou Me Good?” — Matthew 19 vs. Mark 10',
    category: 'gospel_parallel',
    categoryLabelAm: 'ተመሳሳይ የወንጌል ክፍል (Gospel Parallel)',
    categoryLabelEn: 'Christological Harmony',
    primaryKey: '40.19.17',
    relatedKeys: ['41.10.18', '42.18.19', '43.10.30'],
    passageA: {
      refAm: 'የማቴዎስ ወንጌል 19:16-17',
      refEn: 'Matthew 19:16-17',
      bookNr: 40,
      chapter: 19,
      verse: 16,
      verseEnd: 17,
      textAm: 'እነሆም፥ አንድ ሰው ቀርቦ፦ መምህር ሆይ፥ የዘላለምን ሕይወት እንዳገኝ ምን መልካም ነገር ላድርግ? አለው። እርሱም፦ ስለ መልካም ነገር ለምን ትጠይቀኛለህ? መልካም የሆነው አንዱ ብቻ ነው፤ ወደ ሕይወት መግባት ብትወድ ግን ትእዛዛትን ጠብቅ አለው።',
      textEn: 'And, behold, one came and said unto him, Good Master, what good thing shall I do, that I may have eternal life? And he said unto him, Why callest thou me good? there is none good but one, that is, God...',
      writerContextAm: 'ማቴዎስ የሰውየውን ጥያቄ «ምን መልካም ነገር ላድርግ?» ብሎ በመዘገብ፣ ሰው በራሱ ሥራ ጽድቅን ማግኘት እንደማይችልና ፍጹም መልካም እግዚአብሔር ብቻ እንደሆነ አመለከተ።',
      writerContextEn: 'Matthew focuses on the young man’s reliance on doing "some good thing" to secure life, redirecting his moral standard to God alone.'
    },
    passageB: {
      refAm: 'የማርቆስ ወንጌል 10:17-18',
      refEn: 'Mark 10:17-18',
      bookNr: 41,
      chapter: 10,
      verse: 17,
      verseEnd: 18,
      textAm: 'እርሱም በመንገድ ሲወጣ አንዱ ወደ እርሱ ሮጦ ተንበረከከለትና፦ ቸር መምህር ሆይ፥ የዘላለምን ሕይወት እወርስ ዘንድ ምን ላድርግ? ብሎ ጠየቀው። ኢየሱስም፦ ስለ ምን ቸር ትለኛለህ? ከአንዱ ከእግዚአብሔር በቀር ቸር ማንም የለም አለው።',
      textEn: 'There came one running, and kneeled to him, and asked him, Good Master, what shall I do that I may inherit eternal life? And Jesus said unto him, Why callest thou me good? there is none good but one, that is, God.',
      writerContextAm: 'ማርቆስ ሰውየው ለኢየሱስ የተንበረከከበትን ሁኔታ ዘገበ። ኢየሱስ አምላክነቱን አልካደም፤ ይልቁንም «እኔን ቸር ካልከኝ እግዚአብሔር መሆኔን አውቀሃልን?» ብሎ የሰውየውን ግንዛቤ ፈተነ።',
      writerContextEn: 'Mark captures the dramatic encounter: Jesus is not denying His goodness, but pressing the man to recognize that calling Him "Good Master" implies His divine identity.'
    },
    whyDiffersAm: 'ማቴዎስ የጥያቄውን ይዘት («ምን መልካም ላድርግ?») ሲያጎላ፣ ማርቆስ ደግሞ ሰውየው ለኢየሱስ የተጠቀመውን ማዕረግ («ቸር መምህር») አጎላ። ሁለቱም አንድ እውነት ያሳያሉ፦ ጽድቅ ከእግዚአብሔር እንጂ ከሰው ጥረት አይመጣም።',
    whyDiffersEn: 'Matthew highlights the man’s question about doing good deeds; Mark focuses on the title addressed to Jesus. Both converge on the divine standard of perfection.',
    falseTrapAm: 'የይሖዋ ምስክሮችና ሌሎች ኢየሱስን ተራ ፍጡር የሚያደርጉ ቡድኖች «ኢየሱስ ራሱ ቸር አይደለሁም አምላክም አይደለሁም አለ» በማለት ቃሉን ያጣምሙታል።',
    falseTrapEn: 'Arian sects claim Jesus denied His own goodness and deity in this passage, ignoring the Socratic method Christ used to reveal His identity.',
    harmonizedTruthAm: 'ኢየሱስ በዮሐንስ 10:11 ላይ «መልካም እረኛ እኔ ነኝ» ብሏል፤ በዮሐንስ 8:46 ላይ «ከእናንተ ስለ ኃጢአት የሚወቅሰኝ ማን ነው?» አለ። ኢየሱስ ሰውየው የተጠቀመበትን ቃል ወደ እውነተኛው መደምደሚያ አደረሰው፦ «እግዚአብሔር ብቻ ቸር ከሆነ፣ እኔ ደግሞ ቸር ከሆንኩ፣ እኔ ማን ነኝ?!»',
    harmonizedTruthEn: 'Jesus declared Himself "the Good Shepherd" (John 10:11). By asking "Why callest thou me good?", He forced the man to realize: If God alone is good, and Jesus is good, then Jesus is God.'
  },

  // 5. Matthew 28:19 vs Acts 2:38 (Trinitarian vs Apostolic Baptism)
  {
    id: 'harmony-baptism-formula',
    titleAm: 'በአብ በወልድ በመንፈስ ቅዱስ ወይስ በኢየሱስ ስም? — ማቴዎስ 28 ወይስ ሐዋርያት 2?',
    titleEn: 'Trinitarian vs. Jesus’ Name Baptism — Matthew 28 vs. Acts 2',
    category: 'theological_balance',
    categoryLabelAm: 'የሥላሴና የጥምቀት ውህደት',
    categoryLabelEn: 'Trinitarian & Missiological Harmony',
    primaryKey: '40.28.19',
    relatedKeys: ['44.2.38', '44.8.16', '44.10.48', '44.19.5'],
    passageA: {
      refAm: 'የማቴዎስ ወንጌል 28:19',
      refEn: 'Matthew 28:19',
      bookNr: 40,
      chapter: 28,
      verse: 19,
      textAm: 'እንግዲህ ሂዱና አሕዛብን ሁሉ በአብ በወልድና በመንፈስ ቅዱስ ስም እያጠመቃችኋቸው፥ ያዘዝኋችሁንም ሁሉ እንዲጠብቁ እያስተማራችኋቸው ደቀ መዛሙርት አድርጓቸው።',
      textEn: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost...',
      writerContextAm: 'ከትንሣኤ በኋላ ጌታችን ኢየሱስ ክርስቶስ ለቤተክርስቲያን የሰጣት ታላቁ ተልእኮ ሕጋዊ የጥምቀት ቀመር (Triune Covenant Formula) ነው። «ስም» የሚለው ቃል ነጠላ መሆኑ የአንድነቱን አምላክነት ያረጋግጣል።',
      writerContextEn: 'The resurrected Lord commands baptism into the single "name" (singular) of the Father, Son, and Holy Spirit—the foundational Trinitarian formula.'
    },
    passageB: {
      refAm: 'የሐዋርያት ሥራ 2:38',
      refEn: 'Acts 2:38',
      bookNr: 44,
      chapter: 2,
      verse: 38,
      textAm: 'ጴጥሮስም፦ ንስሐ ግቡ፥ ኃጢአታችሁም ይሰረይ ዘንድ እያንዳንዳችሁ በኢየሱስ ክርስቶስ ስም ተጠመቁ፤ የመንፈስ ቅዱስንም ስጦታ ትቀበላላችሁ አላቸው።',
      textEn: 'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.',
      writerContextAm: 'በበዓለ ኀምሳ ለሰቀሉት አይሁድ የተሰጠ ጥሪ። «በኢየሱስ ስም ተጠመቁ» ማለት በወቅቱ ኢየሱስን የናቁትን አይሁድ እርሱን እንደ መሲሕ በይፋ የማመን ባለቤትነት (Public Allegiance) ጥሪ እንጂ ቃሉን መለወጥ አልነበረም።',
      writerContextEn: 'Peter called Jews who rejected the Messiah to publicly identify with Jesus Christ as their Lord, contrasting Christian baptism from John’s baptism.'
    },
    whyDiffersAm: 'ማቴዎስ 28:19 የጥምቀቱን ሥርዓተ ቃል (Liturgical Formula) ሲሰጥ፤ የሐዋርያት ሥራ 2:38 ደግሞ የጥምቀቱን ባለቤትና ዓላማ (Authority & Allegiance) ይገልጻል። በአንድ ሰው ስም መደረግ ማለት በስልጣኑ ስር መሆን ማለት ነው።',
    whyDiffersEn: 'Matthew 28:19 specifies the liturgical formula of the triune Godhead; Acts describes the authority and allegiance under which Christian baptism was administered.'
    ,
    falseTrapAm: 'የ«ኢየሱስ ብቻ» (Oneness Pentecostal / Jesus Only) አስተማሪዎች ማቴዎስ 28:19ን በመካድ ሥላሴን ይክዳሉ፤ ሰዎችንም «በኢየሱስ ስም ብቻ ካልተጠመቃችሁ አልዳናችሁም» በማለት በድጋሚ ያጠምቃሉ።',
    falseTrapEn: 'Oneness groups pit Acts against Matthew 28:19 to deny the Trinity and force re-baptism under an exclusive sectarian formula.',
    harmonizedTruthAm: 'በሐዋርያት ሥራ 19:1-5 ላይ የዮሐንስን ጥምቀት ብቻ የተጠመቁ ሰዎች የጌታን የኢየሱስን ጥምቀት ሲቀበሉ ወዲያውኑ ስለ መንፈስ ቅዱስ ተጠይቀዋል። በኢየሱስ ስልጣን መጠመቅ ማለት እርሱ ባዘዘው በአብ፣ በወልድና በመንፈስ ቅዱስ ስም መጠመቅ ማለት ነው!',
    harmonizedTruthEn: 'To be baptized in the authority of Jesus is to obey the command of Jesus—which explicitly instructs baptism in the Name of the Father, Son, and Holy Spirit.'
  },

  // 6. Habakkuk 2:4 vs Romans 1:17 vs Galatians 3:11 vs Hebrews 10:38
  {
    id: 'harmony-righteous-faith',
    titleAm: 'ጻድቅ በእምነት ይኖራል — የብሉይ ኪዳን መነሻና የሐዲስ ኪዳን ፍሬ',
    titleEn: '“The Just Shall Live by Faith” — OT Root & NT Fulfillment',
    category: 'ot_in_nt',
    categoryLabelAm: 'ብሉይ በሐዲስ ሲጠቀስ (OT in NT)',
    categoryLabelEn: 'Prophetic Fulfillment',
    primaryKey: '35.2.4',
    relatedKeys: ['45.1.17', '48.3.11', '58.10.38'],
    passageA: {
      refAm: 'ትንቢተ ዕንባቆም 2:4',
      refEn: 'Habakkuk 2:4',
      bookNr: 35,
      chapter: 2,
      verse: 4,
      textAm: 'እነሆ፥ ነፍሱ በትዕቢት ተነፍታለች፥ በውስጡም ቅን አይደለችም፤ ጻድቅ ግን በእምነቱ በሕይወት ይኖራል።',
      textEn: 'Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.',
      writerContextAm: 'ዕንባቆም ባቢሎናውያን ይሁዳን ሊያጠፉ ሲመጡ በእግዚአብሔር ፊት በዋይታ ጮኸ። እግዚአብሔርም ትዕቢተኛው ጠላት እንደሚጠፋ፣ በእግዚአብሔር የታመነው ጻድቅ ግን በመከራው መሃል እንደሚተርፍ መለሰለት።',
      writerContextEn: 'Facing the terror of the Babylonian invasion, Habakkuk was told that while the proud collapse, the righteous person perseveres through steadfast trust in God.'
    },
    passageB: {
      refAm: 'ወደ ሮሜ ሰዎች 1:17',
      refEn: 'Romans 1:17',
      bookNr: 45,
      chapter: 1,
      verse: 17,
      textAm: 'ጻድቅ በእምነት ይኖራል ተብሎ እንደ ተጻፈ የእግዚአብሔር ጽድቅ ከእምነት ወደ እምነት በእርሱ ይገለጣልና።',
      textEn: 'For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.',
      writerContextAm: 'ጳውሎስ የዕንባቆምን ቃል ወስዶ በወንጌል የሚገኘውን የመዳን ጽድቅ መሠረት አደረገው፦ በእግዚአብሔር ፊት ጻድቅ ሆኖ መኖር የሚቻለው በክርስቶስ በማመን ብቻ ነው።',
      writerContextEn: 'Paul adopts Habakkuk’s divine axiom as the thesis statement of Romans: righteousness before God is received exclusively through faith.'
    },
    whyDiffersAm: 'በዕንባቆም ዘንድ «እምነት» (ዕብራይስጡ ኤሙናህ / Emunah) ማለት በመከራ ውስጥ ለእግዚአብሔር ታማኝ ሆኖ መጽናት ማለት ሲሆን፤ ጳውሎስ ደግሞ ያንን ታማኝነት በክርስቶስ ቤዛነት ላይ ወደ ማመን አሳደገው።',
    whyDiffersEn: 'Habakkuk emphasized steadfast fidelity (Emunah) amidst historical judgment; Paul expanded it to the foundational saving faith in the finished work of Christ.',
    falseTrapAm: 'የብልጽግና መምህራን «በእምነት ይኖራል» የሚለውን ወስደው «እምነት ማለት የፈለግከውን ሀብትና ጤና በቃልህ የምትፈጥርበት ኃይል ነው» በማለት ጣዖት ያደርጉታል።',
    falseTrapEn: 'Word-of-Faith movements turn "living by faith" into a magical talisman to demand personal wealth and guaranteed earthly comfort.',
    harmonizedTruthAm: 'በዕንባቆምም ሆነ በሮሜ፣ እምነት ማለት እግዚአብሔርን መቆጣጠር ሳይሆን፣ በዙሪያችን ያለው ዓለም ሲናወጥ እንኳ በእግዚአብሔር ሉዓላዊነትና ጸጋ ላይ ሙሉ በሙሉ መደገፍ ነው።',
    harmonizedTruthEn: 'In both Testaments, faith is not manipulation of circumstances, but unconditional, humble trust in God when everything around us is collapsing.'
  },

  // 7. 2 Samuel 24:1 vs 1 Chronicles 21:1 (The Census of David)
  {
    id: 'harmony-david-census',
    titleAm: 'ዳዊትን ሕዝብ እንዲቆጥር ያነሳሳው ማነው? — 2 ሳሙኤል ወይስ 1 ዜና መዋዕል?',
    titleEn: 'Who Incited David to Number Israel? — 2 Samuel vs. 1 Chronicles',
    category: 'historical_harmony',
    categoryLabelAm: 'የታሪክ ውህደት (Historical Harmony)',
    categoryLabelEn: 'Historical Perspective',
    primaryKey: '10.24.1',
    relatedKeys: ['13.21.1'],
    passageA: {
      refAm: '2ኛ ሳሙኤል 24:1',
      refEn: '2 Samuel 24:1',
      bookNr: 10,
      chapter: 24,
      verse: 1,
      textAm: 'የእግዚአብሔርም ቍጣ ደግሞ በእስራኤል ላይ ነደደ፤ ዳዊትንም፦ ሂድ፥ እስራኤልንና ይሁዳን ቍጠር ብሎ አነሣሣው።',
      textEn: 'And again the anger of the LORD was kindled against Israel, and he moved David against them to say, Go, number Israel and Judah.',
      writerContextAm: 'ሳሙኤል ታሪኩን የሚመለከተው ከመለኮታዊ ሉዓላዊነት (Divine Sovereignty) አንጻር ነው። እግዚአብሔር እስራኤልን ሊቀጣ ስለፈቀደ፣ ዳዊት በትዕቢት እንዲወድቅ የነበረውን መከላከያ አነሳ።',
      writerContextEn: 'Samuel writes from the theological viewpoint of God’s ultimate sovereignty—allowing circumstances as judgment upon Israel.'
    },
    passageB: {
      refAm: '1ኛ ዜና መዋዕል 21:1',
      refEn: '1 Chronicles 21:1',
      bookNr: 13,
      chapter: 21,
      verse: 1,
      textAm: 'ሰይጣንም በእስራኤል ላይ ተነሣ፥ ዳዊትንም እስራኤልን ይቈጥር ዘንድ አነሣሣው።',
      textEn: 'And Satan stood up against Israel, and provoked David to number Israel.',
      writerContextAm: 'ዜና መዋዕል የተጻፈው ከባቢሎን ምርኮ ለተመለሱ አይሁድ ሲሆን፣ የተፈጠረውን ቀጥተኛ መንፈሳዊ ፈተና (Direct Demonic Agency) አጋለጠ። ሰይጣን ዳዊትን ፈተነው፤ እግዚአብሔር ደግሞ ፈቀደው።',
      writerContextEn: 'Chronicles, written post-exile, exposes the proximate spiritual adversary: Satan actively tempted David’s pride.'
    },
    whyDiffersAm: 'ልክ እንደ ኢዮብ ታሪክ (ኢዮብ 1-2)፣ ሰይጣን ቀጥተኛ ፈታኝ ሲሆን፣ እግዚአብሔር ደግሞ ሁሉን በሉዓላዊ ቁጥጥሩ ስር የሚገዛ ነው። ሳሙኤል ሉዓላዊውን ፈቃድ (Primary Cause) ገለጠ፤ ዜና መዋዕል ደግሞ የፈታኙን እጅ (Secondary Cause) አጋለጠ።',
    whyDiffersEn: 'Just as in Job 1–2, Satan was the active tempter (secondary agent), while God sovereignly permitted it for righteous chastening (primary cause).',
    falseTrapAm: 'ተጠራጣሪዎችና የሐሰት መምህራን «መጽሐፍ ቅዱስ እርስ በርሱ ይጋጫል፤ እግዚአብሔርንና ሰይጣንን አንድ ያደርጋል» በማለት የሰዎችን እምነት ያናውጣሉ።',
    falseTrapEn: 'Skeptics use this parallel to claim biblical error; fatalistic sects misuse it to claim God directly authors moral sin.',
    harmonizedTruthAm: 'እግዚአብሔር ማንንም ለክፉ አይፈትንም (ያዕቆብ 1:13)፤ ነገር ግን የሰውን ትዕቢት ለመቅጣት ሰይጣን እንዲፈትን ይፈቅዳል (ሉቃስ 22:31)። ሁለቱ ክፍሎች ሲጣመሩ የእግዚአብሔር ሉዓላዊነትና የሰይጣን ክፋት ፍጹም ሚዛን አግኝተው ይገለጣሉ።',
    harmonizedTruthEn: 'God never tempts anyone with evil (James 1:13), but sovereignly allows the enemy to expose pride (Luke 22:31–32) to bring repentance.'
  },

  // 8. Isaiah 53:5 vs 1 Peter 2:24 vs Matthew 8:16-17 (Healing in Atonement)
  {
    id: 'harmony-healing-atonement',
    titleAm: 'በእርሱ ቁስል ተፈወስን — የመንፈስ ድነት ወይስ የሥጋ ፈውስ? — ኢሳይያስ ወይስ ጴጥሮስ?',
    titleEn: '“By His Stripes We Are Healed” — Spiritual or Physical? — Isaiah vs. Peter',
    category: 'ot_in_nt',
    categoryLabelAm: 'የስርየትና የፈውስ ውህደት',
    categoryLabelEn: 'Atonement & Healing Harmony',
    primaryKey: '23.53.5',
    relatedKeys: ['60.2.24', '40.8.17'],
    passageA: {
      refAm: 'ትንቢተ ኢሳይያስ 53:5',
      refEn: 'Isaiah 53:5',
      bookNr: 23,
      chapter: 53,
      verse: 5,
      textAm: 'እርሱ ግን ስለ መተላለፋችን ቈሰለ፥ ስለ በደላችንም ደቀቀ፤ የደኅንነታችንም ተግሣጽ በእርሱ ላይ ነበረ፥ በእርሱም ቍስል እኛ ተፈወስን።',
      textEn: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
      writerContextAm: 'ኢሳይያስ ስለ መሲሑ የኃጢአት መሥዋዕትነት የተነበየበት ዋና ምዕራፍ። ትኩረቱ የሰው ልጅ ከኃጢአት በደልና ከእግዚአብሔር ቁጣ ስለመዳኑ (የነፍስ ፈውስ) ነው።',
      writerContextEn: 'Isaiah prophesies the substitutionary atonement of Christ, where our deepest sickness—sin and rebellion against God—is healed.'
    },
    passageB: {
      refAm: '1ኛ የጴጥሮስ መልእክት 2:24',
      refEn: '1 Peter 2:24',
      bookNr: 60,
      chapter: 2,
      verse: 24,
      textAm: 'ለኃጢአት ሞተን ለጽድቅ እንድንኖር፥ እርሱ ራሱ በሥጋው ኃጢአታችንን በእንጨት ላይ ተሸከመ፤ በመገረፉም ቍስል ተፈወሳችሁ።',
      textEn: 'Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.',
      writerContextAm: 'ጴጥሮስ ኢሳይያስ 53ን ሲጠቅስ ዐውዱ ፍጹም መንፈሳዊ ነው፦ «ለኃጢአት ሞተን ለጽድቅ እንድንኖር»። ቁስሉ የፈወሰው የኃጢአታችንን ገዳይ በሽታ ነው።',
      writerContextEn: 'Peter explicitly quotes Isaiah 53:5 in the context of moral and spiritual restoration: dying to sin and living to righteousness.'
    },
    passageC: {
      refAm: 'የማቴዎስ ወንጌል 8:16-17',
      refEn: 'Matthew 8:16-17',
      bookNr: 40,
      chapter: 8,
      verse: 16,
      verseEnd: 17,
      textAm: 'በነቢዩ በኢሳይያስ፦ እርሱ ድካማችንን ተቀበለ ደዌያችንንም ተሸከመ የተባለው ይፈጸም ዘንድ፥ መናፍስትን በቃሉ አወጣ፥ የታመሙትንም ሁሉ ፈወሰ።',
      textEn: 'That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.',
      writerContextAm: 'ማቴዎስ ኢየሱስ በምድር አገልግሎቱ ያደረጋቸውን የሥጋ ፈውሶች የኢሳይያስ 53 ትንቢት ምልክትና ጅማሮ አድርጎ አሳየ።',
      writerContextEn: 'Matthew shows Jesus physically healing diseases during His earthly ministry as an advance sign of the Kingdom.'
    },
    whyDiffersAm: 'ኢሳይያስና ጴጥሮስ የዋናውን የኃጢአት ስርየት (Spiritual Healing from Sin) ሲያጎሉ፤ ማቴዎስ ደግሞ በክርስቶስ የመጣው መዳን የሥጋንም ደዌ የሚያስወግድ የወደፊት ፍጹም ትንሣኤ ምልክት መሆኑን አሳየ።',
    whyDiffersEn: 'Isaiah and Peter focus on the ultimate disease (sin and guilt); Matthew demonstrates that Christ’s kingdom also brings compassion for physical infirmities.',
    falseTrapAm: 'የብልጽግና መምህራን «ኢየሱስ በቁስሉ ፈውሶናል ስለዚህ እውነተኛ አማኝ በፍጹም አይታመምም፣ ከታመምክ እምነት የለህም» በማለት የታመሙ ቅዱሳንን በኩነኔና በጭንቀት ይጥላሉ።',
    falseTrapEn: 'Prosperity preachers twist Isaiah 53:5 to guarantee perfect physical health on demand, condemning sick believers as lacking faith.',
    harmonizedTruthAm: 'ክርስቶስ በዋጋው ሙሉውን ሰው (ነፍስን፣ መንፈስን፣ በመጨረሻም በትንሣኤ ሥጋን) ዋጅቷል። ዛሬ እግዚአብሔር በጸጋው በሥጋ ሊፈውሰን ይችላል፤ ነገር ግን የኢሳይያስ 53:5 ዋናውና ዘላለማዊው ፈውስ የኃጢአት ስርየት ነው።',
    harmonizedTruthEn: 'The cross completely secures our redemption: ultimate spiritual healing now, and the complete physical redemption of our bodies at the final resurrection (Rom 8:23).'
  }
]

/**
 * Find matching parallel harmonies for a specific book, chapter, and optional verse.
 */
export function findParallelHarmonies(
  bookNr: number,
  chapter: number,
  verse?: number
): ParallelHarmonyEntry[] {
  const targetExact = verse !== undefined ? `${bookNr}.${chapter}.${verse}` : null
  const targetChapter = `${bookNr}.${chapter}`

  return PARALLEL_HARMONY_ENTRIES.filter((entry) => {
    // Exact verse match prioritised
    if (targetExact && (entry.primaryKey === targetExact || entry.relatedKeys.includes(targetExact))) {
      return true
    }
    // Check primary key chapter prefix
    if (entry.primaryKey.startsWith(targetChapter)) return true
    // Check related keys
    if (entry.relatedKeys.some((k) => k.startsWith(targetChapter))) return true
    // Check passage book numbers
    if (entry.passageA.bookNr === bookNr && entry.passageA.chapter === chapter) return true
    if (entry.passageB.bookNr === bookNr && entry.passageB.chapter === chapter) return true
    if (entry.passageC && entry.passageC.bookNr === bookNr && entry.passageC.chapter === chapter) return true
    return false
  })
}
