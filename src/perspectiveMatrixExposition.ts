import type {
  DeepExpositionData,
  PerspectiveMatrixItem
} from './perspectiveMatrixData'

/**
 * Handcrafted comprehensive deep-dive dossiers for landmark biblical passages
 */
const DETAILED_CHAPTER_DOSSIERS: Record<string, DeepExpositionData> = {
  // 1. Matthew 1: The Messianic Lineage & Virgin Birth
  '40-1': {
    summaryEn:
      'Matthew 1 functions as the grand gateway to the New Testament. It establishes Jesus Christ as the legitimate heir to the Davidic Throne and the Abrahamic Promise through a revolutionary 42-generation genealogy, culminating in the miraculous Virgin Birth under the shadow of the Roman Empire.',
    summaryAm:
      'የማቴዎስ ወንጌል ምዕራፍ 1 የአዲስ ኪዳን ታላቅ መግቢያ ነው። ኢየሱስ ክርስቶስ የአብርሃምና የዳዊት ሕጋዊ ወራሽ መሆኑን በ42ቱ የዘር ሐረግ የሚያረጋግጥ ሲሆን፤ በሮማ ግዛት ጥላ ሥር በድንግል ማርያም በኩል የተፈጸመውን መለኮታዊ ልደት በዝርዝር ያስቀምጣል።',
    historicalDossierEn:
      'Written in the context of first-century Roman-occupied Judea. King Herod the Great—an Idumean puppet of Rome—ruled with paranoid terror, heavily taxing the populace. The Jewish people desperately longed for the prophesied Davidic King who would shatter imperial oppression. In Jewish culture, genealogies were essential legal documents determining tribal identity, royal claims, and temple inheritance.',
    historicalDossierAm:
      'የተጻፈው በመጀመሪያው መቶ ክፍለ ዘመን በሮማውያን ቅኝ ግዛት በነበረችው ይሁዳ ነው። በሮም የተሾመው ጨካኙ ንጉሥ ሄሮድስ በጭካኔና በከባድ ግብር ሕዝቡን ያስጨንቅ ነበር። ሕዝቡ የሮምን ቀንበር የሚሰብር የዳዊት ዘር የሆነ መሲሕ በናፍቆት ይጠብቁ ነበር። በአይሁድ ባህል የዘር ሐረግ የጎሳ ማንነትንና የንጉሥነት መብትን የሚያረጋግጥ ሕጋዊ ሰነድ ነበር።',
    covenantalFrameworkEn:
      'Matthew deliberately fuses the two greatest OT covenants: the Abrahamic Covenant (Gen 12:3—blessing to all nations) and the Davidic Covenant (2 Sam 7:12–16—an eternal dynasty). The structure of 14 generations highlights David\'s name (DVD in Hebrew gematria: 4+6+4=14). Strikingly, four marginalized or Gentile women (Tamar, Rahab, Ruth, Bathsheba) are boldly embedded, prefiguring the universal scope of the Gospel.',
    covenantalFrameworkAm:
      'ማቴዎስ ሁለቱን ታላላቅ የብሉይ ኪዳን ኪዳናት ያዋሕዳል፡ የአብርሃም ኪዳን (ዘፍ 12:3 - ለአሕዛብ ሁሉ የሚሆን በረከት) እና የዳዊት ኪዳን (2 ሳሙ 7:12-16 - ዘላለማዊ ዙፋን)። የ14 ትውልዶች አወቃቀር የዳዊትን ስም ያደምቃል (በዕብራይስጥ ፊደላት ድምር ዳዊት = 4+6+4 = 14)። አራት የውጭ አገር ወይም የተገለሉ ሴቶች (ትዕማር፣ ረዓብ፣ ሩት፣ ቤርሳቤህ) መካተታቸው ወንጌል ለሰው ሁሉ መሆኑን ያበስራል።',
    linguisticInsightsEn:
      'The opening phrase "Biblos geneseos" mirrors Genesis 2:4 and 5:1 in the Greek Septuagint, signaling not just an ancestry list, but a "Genesis of the New Creation". The name Jesus (Iēsous) is the Greek form of the Hebrew Yeshua (Joshua), meaning "Yahweh is Salvation".',
    linguisticInsightsAm:
      '“የኢየሱስ ክርስቶስ የትውልድ መጽሐፍ” (ቢብሎስ ጌኔሴዎስ) የሚለው ቃል በኦሪት ዘፍጥረት 2:4 እና 5:1 ላይ ያለውን የፍጥረት ቃል በቀጥታ በማስተጋባት፤ በክርስቶስ በኩል “አዲስ የፍጥረት ጅማሬ” መጀመሩን ያውጃል። “ኢየሱስ” (ዬሹዋ) ማለትም “እግዚአብሔር ማዳን ነው” ማለት ነው።',
    humanHeartAnalysisEn:
      'Joseph faces a catastrophic honor-shame dilemma: his betrothed is pregnant before marriage. Under Deuteronomy 22, public exposure meant stoning or lifelong disgrace. Joseph resolves to divorce her quietly—an act of profound righteousness and mercy. When God speaks in a dream, he surrenders his cultural reputation to adopt the Messiah as his legal son.',
    humanHeartAnalysisAm:
      'ዮሴፍ በመካከለኛው ምስራቅ ታላቅ የክብርና የኃፍረት ቀውስ ውስጥ ገባ፡ የታጨችለት ድንግል ማርያም በፅንስ ተገኘች። በሕጉ መሠረት በይፋ መክሰስ በድንጋይ መወገርን ወይም የዕድሜ ልክ ውርደትን ያስከትል ነበር። ዮሴፍ በምሕረት ተሞልቶ በስውር ሊተዋት ወሰነ፤ የእግዚአብሔር መልአክ በሕልም በተናገረው ጊዜ ግን ስሙንና ክብሩን ለክርስቶስ ሲል መስዋዕት አደረገ።',
    keyVersesExegesis: [
      {
        verseRef: 'ማቴዎስ 1:1',
        textAm: 'የዳዊት ልጅ የአብርሃም ልጅ የኢየሱስ ክርስቶስ ትውልድ መጽሐፍ።',
        textEn: 'The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.',
        exegesisAm: 'የአዲስ ኪዳን የመክፈቻ አዋጅ። ኢየሱስ በታሪክ ውስጥ የተገለጠ እውነተኛ ሰው፣ የመንግሥቱ ወራሽ የዳዊት ልጅ፣ እና የአሕዛብ ሁሉ በረከት የአብርሃም ልጅ መሆኑን ያረጋግጣል።',
        exegesisEn: 'The monumental proclamation of the New Testament. Establishes Jesus as historical reality, royal heir to David, and the divine seed of Abraham to bless all nations.'
      },
      {
        verseRef: 'ማቴዎስ 1:21',
        textAm: 'ልጅም ትወልዳለች፤ እርሱ ሕዝቡን ከኃጢአታቸው ያድናቸዋልና ስሙን ኢየሱስ ትለዋለህ።',
        textEn: 'She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.',
        exegesisAm: 'የመሲሑ ዋና ተልዕኮ ፖለቲካዊ ነፃነት ብቻ ሳይሆን፤ የሰውን ልጅ ከተቆጣጠረው የኃጢአትና የሞት እስራት ነፃ ማውጣት እንደሆነ ይገልጻል።',
        exegesisEn: 'Defines the Messiah’s core mission: not mere geopolitical liberation from Rome, but cosmic liberation from the spiritual tyranny of sin and death.'
      },
      {
        verseRef: 'ማቴዎስ 1:23',
        textAm: 'እነሆ፥ ድንግል ትፀንሳለች ልጅም ትወልዳለች፥ ስሙንም አማኑኤል ይሉታል የተባለው ይፈጸም ዘንድ ይህ ሁሉ ሆኖአል፥ ትርጓሜውም፡- እግዚአብሔር ከእኛ ጋር የሚል ነው።',
        textEn: '"Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel" (which means, God with us).',
        exegesisAm: 'የኢሳይያስ 7:14 ትንቢት ፍጻሜ። የማይመረመረው ፈጣሪ በሰው አካል ተገልጦ ከመካከላችን እንደሚያድር የተነገረው ታላቅ ሚስጥር።',
        exegesisEn: 'Fulfillment of Isaiah 7:14. The supreme mystery of the Incarnation: the transcendent Creator tabernacles in human flesh to dwell forever with his people.'
      }
    ],
    archaeologicalEvidences: [
      {
        siteOrArtifactEn: 'Coins of King Herod the Great (37–4 BC)',
        siteOrArtifactAm: 'የንጉሥ ሄሮድስ ሳንቲሞች (ከክርስቶስ ልደት በፊት 37–4)',
        significanceEn: 'Excavated in Jerusalem, confirming Herod’s political reign, Hellenistic client-king titles, and the absolute historical setting of Matthew 1–2.',
        significanceAm: 'በኢየሩሳሌም የተገኙ ሲሆኑ፤ የሄሮድስን የንግሥና ዘመንና የማቴዎስ ወንጌል ምዕራፍ 1 እና 2 ታሪካዊ ትክክለኛነት ያረጋግጣሉ።',
        era: '1st Century BC'
      },
      {
        siteOrArtifactEn: 'Dead Sea Scroll 4Q521 (Messianic Apocalypse)',
        siteOrArtifactAm: 'የሙት ባሕር ጥቅልል 4Q521 (የመሲሑ ትንቢታዊ ሰነድ)',
        significanceEn: 'Discovered at Qumran, proving that 1st-century Jews expected the Davidic Messiah to heal the broken, raise the dead, and preach good news to the poor.',
        significanceAm: 'በቁምራን የተገኘ ሲሆን፤ የአንደኛው መቶ ክፍለ ዘመን አይሁድ የዳዊት ዘር የሆነው መሲሕ ሙታንን እንደሚያስነሣና ለድሆች ወንጌልን እንደሚሰብክ ይጠብቁ እንደነበር ያረጋግጣል።',
        era: 'c. 100 BC'
      },
      {
        siteOrArtifactEn: '1st-Century Nazareth Residential Courtyard Excavations',
        siteOrArtifactAm: 'በናዝሬት የተገኙ የአንደኛው መቶ ክፍለ ዘመን ቤቶችና ቁሳቁሶች',
        significanceEn: 'Proves Nazareth was an active Jewish agricultural village with limestone vessels showing strict adherence to Mosaic purity laws.',
        significanceAm: 'ናዝሬት በጥንት ዘመን የነበረች መንደር መሆኗንና ነዋሪዎቿም በንጽሕና ሕግ የሚኖሩ ታማኝ አይሁድ እንደነበሩ ያረጋግጣል።',
        era: 'Early Roman Period'
      }
    ],
    theologicalQandA: [
      {
        questionAm: 'ማቴዎስ በዘር ሐረጉ ውስጥ የውጭ አገርና ችግር ያለባቸውን ሴቶች ለምን አካተተ?',
        questionEn: 'Why did Matthew include controversial and Gentile women in the royal genealogy?',
        answerAm: 'በጥንቱ የሮማና የአይሁድ ባህል ሴቶች በዘር ሐረግ አይካተቱም ነበር። ማቴዎስ ግን ትዕማርን፣ ረዓብን፣ ሩትን እና የኦርዮን ሚስት ቤርሳቤህን ሆን ብሎ አካተተ፤ ይህም የእግዚአብሔር ጸጋ የዘር፣ የኃጢአትና የባህል ድንበሮችን አፍርሶ ማንኛውንም በደለኛ እንደሚቀበል ያሳያል።',
        answerEn: 'In Greco-Roman and Jewish genealogies, women were routinely omitted. Matthew intentionally includes four women whose backgrounds involved scandal, Gentile roots, or vulnerability to broadcast that God\'s grace redeems human messiness and embraces all nations.'
      },
      {
        questionAm: 'ድንግላዊ ልደት ለክርስትና እምነት ለምን እጅግ አስፈላጊ ሆነ?',
        questionEn: 'Why is the Virgin Birth foundational to Christian doctrine?',
        answerAm: 'ኢየሱስ ክርስቶስ ከተፈጥሮ አባታዊ ዘር የተወለደ ተራ ሰው ቢሆን ኖሮ የአዳምን የወደቀ ኃጢአት ይወርስ ነበር። ድንግላዊ ልደት ግን ኢየሱስ በመንፈስ ቅዱስ የተፀነሰ ፍጹም አምላክና ፍጹም ንጹሕ ሰው መሆኑን ያረጋግጣል።',
        answerEn: 'If Jesus were merely the biological son of a human father, he would inherit the fallen solidarity of Adam. The Virgin Birth ensures he is truly human through Mary yet sinless and truly God through the Holy Spirit.'
      }
    ],
    transformativeTakeawaysAm: [
      'እግዚአብሔር የተስፋ ቃሉን ለመፈጸም በመቶዎች የሚቆጠሩ ዓመታት ቢያልፉም፤ በታሪክ ውስጥ በታማኝነት ይሠራል (የ42ቱ ትውልድ ምስክርነት)።',
      'ያለፈው የቤተሰብ ታሪክህ ወይም ስህተትህ በእግዚአብሔር እንዳትጠቀም አያግድህም፤ የክርስቶስ የዘር ሐረግ በጸጋ የተሞላ ነው።',
      'ዮሴፍ የሰውን ወቀሳና ኃፍረት ወደ ጎን ትቶ የእግዚአብሔርን ድምፅ እንደታዘዘ፤ እኛም በሕይወታችን ለእግዚአብሔር ፈቃድ ቅድሚያ እንድንሰጥ ይጠራናል።'
    ],
    transformativeTakeawaysEn: [
      'God is relentlessly faithful across centuries; divine promises never expire despite human delay (testimony of the 42 generations).',
      'Your broken lineage or past failures do not disqualify you from God\'s kingdom; grace rewrites every heritage.',
      'Like Joseph choosing divine obedience over human reputation, we are called to embrace God\'s will even when society misunderstands.'
    ]
  },

  // 2. Genesis 1: Creation & Cosmic Sanctuary
  '1-1': {
    summaryEn:
      'Genesis 1 is the majestic temple-inauguration liturgy of the cosmos. Far from a primitive myth, it is an anti-pagan manifesto revealing that the universe is not the byproduct of violent chaotic deities, but the deliberate, handcrafted sanctuary of the One Sovereign Creator.',
    summaryAm:
      'ኦሪት ዘፍጥረት ምዕራፍ 1 የጽንፈ ዓለም መለኮታዊ ቤተ መቅደስ ምረቃ ነው። ከአፈ ታሪክ የራቀና ጥንታዊ ጣዖታትን ውድቅ የሚያደርግ እውነት ሲሆን፤ ዓለም በአማልክት ጦርነት የተፈጠረች ሳትሆን በአንዱ ሉዓላዊ አምላክ ቃል ፍጹም በሆነ ውበትና ሥርዓት እንደተፈጠረች ያውጃል።',
    historicalDossierEn:
      'In the Ancient Near East, surrounding Mesopotamian and Canaanite epics (such as Enuma Elish) depicted creation as the bloody dismemberment of the sea-dragon Tiamat by Marduk. Humans were created as wretched slaves to feed lazy deities. Genesis 1 demolishes this theology: Yahweh commands with sovereign peace, and every human bears royal dignity.',
    historicalDossierAm:
      'በጥንቷ ባቢሎንና መስጴጦምያ (እንደ ኤኑማ ኤሊሽ ባሉ ድርሳናት) ዓለም የተፈጠረችው አማልክት እርስ በርሳቸው ተዋግተው አንዱ አንዱን ሲገድል በተረፈው ደምና ሥጋ እንደሆነ ይታመን ነበር። ሰዎችንም የፈጠሩት ለአማልክት ምግብ የሚያዘጋጁ ባሪያዎች እንዲሆኑ ነው። ዘፍጥረት 1 ግን ይህን ክፉ አመለካከት በመሻር፤ እግዚአብሔር በሰላምና በሥልጣን እንደፈጠረ እንዲሁም እያንዳንዱን ሰው የክብር አምሳሉ እንዳደረገ ያስተምራል።',
    covenantalFrameworkEn:
      'Establishes the Edenic Creation Covenant. The cosmos is constructed as a 3-tiered cosmic temple (Heavens, Earth, Seas) over six days of forming and filling, culminating in the Sabbath (Day 7) where God rests—not from exhaustion, but to take his throne and rule in covenantal intimacy with humanity.',
    covenantalFrameworkAm:
      'የፍጥረትና የኤደን ቃል ኪዳን መሠረት። ጽንፈ ዓለም እንደ ታላቅ መቅደስ በስድስት ቀናት ውስጥ ተዘጋጅታ ተሞላች፤ በሰባተኛው ቀን እግዚአብሔር አረፈ፤ ማረፉም ስለ ደከመው ሳይሆን የሥራውን ፍጹምነት አረጋግጦ በዙፋኑ ላይ ከሰው ልጆች ጋር በኅብረት ለመንገሥ ነው።',
    linguisticInsightsEn:
      'The Hebrew verb "Bara" (בָּרָא) appears exclusively with God as subject, signifying ex-nihilo origination. The phrase "Tohu wa-Bohu" (formless and void) is systematically dismantled in days 1–3 (forming realms) and days 4–6 (filling inhabitants).',
    linguisticInsightsAm:
      '“ባራ” (ፈጠረ) የሚለው ቃል ባለቤት ሁልጊዜ እግዚአብሔር ብቻ ነው። “ቶሁ ዋ-ቦሁ” (ባዶና ውጥንቅጥ) የነበረውን ዓለም እግዚአብሔር በመጀመሪያዎቹ 3 ቀናት ሥርዓት ሰጣት፤ በቀጣዮቹ 3 ቀናት ደግሞ በሕይወትና በውበት ሞላት።',
    humanHeartAnalysisEn:
      'Before sin entered, humanity experienced zero identity anxiety, shame, or competition. To be human was to be unconditionally loved, royally commissioned, and safe within the Creator\'s presence.',
    humanHeartAnalysisAm:
      'ኃጢአት ወደ ዓለም ከመግባቱ በፊት የሰው ልጅ ምንም ዓይነት የብቸኝነት፣ የፍርሃት ወይም የኃፍረት ስሜት አልነበረውም። ሰው መሆን ማለት በፈጣሪ መወደድ፣ መከበርና በፊቱ በሰላም መኖር ነበር።',
    keyVersesExegesis: [
      {
        verseRef: 'ዘፍጥረት 1:1',
        textAm: 'በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።',
        textEn: 'In the beginning, God created the heavens and the earth.',
        exegesisAm: 'የጊዜ፣ የሕዋና የቁስ ጅማሬ ሁሉ በቅዱሱ አምላክ ብቻ እንደሆነ የሚያረጋግጥ መሠረታዊ አዋጅ።',
        exegesisEn: 'The absolute foundation of reality: time, space, and matter are brought into existence by the uncaused Creator.'
      },
      {
        verseRef: 'ዘፍጥረት 1:27',
        textAm: 'እግዚአብሔርም ሰውን በመልኩ ፈጠረ፤ በእግዚአብሔር መልክ ፈጠረው፤ ወንድና ሴት አድርጎ ፈጠራቸው።',
        textEn: 'So God created man in his own image, in the image of God he created him; male and female he created them.',
        exegesisAm: 'ወንድና ሴት እኩል የእግዚአብሔር ክብርና ንጉሣዊ ውክልና ያላቸው የተቀደሱ ፍጥረታት መሆናቸውን ያረጋግጣል።',
        exegesisEn: 'The Magna Carta of human dignity: both male and female equally reflect the divine essence and share royal stewardship.'
      }
    ],
    archaeologicalEvidences: [
      {
        siteOrArtifactEn: 'Enuma Elish Babylonian Creation Tablets',
        siteOrArtifactAm: 'የባቢሎን የፍጥረት ጽላቶች (ኤኑማ ኤሊሽ)',
        significanceEn: '7 clay tablets from Nineveh contrasting pagan chaos-theology with the effortless, peaceful authority of Yahweh in Genesis 1.',
        significanceAm: 'በነነዌ የተገኙ 7 የሸክላ ጽላቶች ሲሆኑ፤ ከዘፍጥረት 1 ፍጹም ሰላማዊና ንጹሕ የፍጥረት እውነት ጋር ያላቸውን ልዩነት በግልጽ ያሳያሉ።',
        era: 'c. 1750 BC'
      }
    ],
    theologicalQandA: [
      {
        questionAm: 'እግዚአብሔር በሰባተኛው ቀን አረፈ ሲባል ምን ማለት ነው?',
        questionEn: 'What does it mean that God "rested" on the seventh day?',
        answerAm: 'እግዚአብሔር አረፈ ሲባል ድካም ተሰምቶት አይደለም፤ ምክንያቱም እግዚአብሔር አይደክምም። ማረፉ የፍጥረትን ሥራ ፍጹም አድርጎ በማጠናቀቁ በዙፋኑ ላይ ተቀምጦ ከፍጥረቱ ጋር በኅብረት መኖር መጀመሩን ያመለክታል።',
        answerEn: 'God’s Sabbath rest denotes divine enthronement, not recovery from exhaustion. In ancient temple imagery, a king rests when his sanctuary is finished and he assumes sovereign rule over his domain.'
      }
    ],
    transformativeTakeawaysAm: [
      'ሕይወትህ በአጋጣሚ የተገኘች ሳትሆን በእግዚአብሔር ፍቅርና ዓላማ የታቀደች ናት።',
      'እግዚአብሔር በውጥንቅጥና በጨለማ ውስጥ ብርሃንና ውበት የማምጣት ኃይል አለው።',
      'እውነተኛ ዋጋህ በምትሠራው ሥራ ሳይሆን በእግዚአብሔር አምሳል በመፈጠርህ ላይ የተመሠረተ ነው።'
    ],
    transformativeTakeawaysEn: [
      'Your existence is not an accident of nature but an intentional masterpiece of divine love.',
      'God has sovereign power to speak light, order, and life into your darkest chaos.',
      'Your ultimate worth is anchored in being made in the image of God, not in human performance.'
    ]
  }
}

/**
 * Intelligent Deep-Dive Generator for ANY Bible chapter
 */
export function getDeepExpositionForChapter(
  bookNr: number,
  chapter: number,
  item?: PerspectiveMatrixItem
): DeepExpositionData {
  const key = `${bookNr}-${chapter}`
  if (DETAILED_CHAPTER_DOSSIERS[key]) {
    return DETAILED_CHAPTER_DOSSIERS[key]
  }

  const isGospelActs = bookNr >= 40 && bookNr <= 44
  const isEpistle = bookNr >= 45 && bookNr <= 65
  const isRevelation = bookNr === 66
  const isWisdom = bookNr >= 18 && bookNr <= 22
  const isProphet = bookNr >= 23 && bookNr <= 39

  const baseTitleAm = item?.titleAm || `ምዕራፍ ${chapter}`
  const baseTitleEn = item?.titleEn || `Chapter ${chapter}`
  const empireAm = item?.geopolitical.empireAm || 'የመጽሐፍ ቅዱስ ዘመን የታሪክ ድባብ'
  const empireEn = item?.geopolitical.empireEn || 'Ancient Biblical Era'

  if (isRevelation) {
    return {
      summaryAm: `${baseTitleAm} የክርስቶስን ታላቅ የመጨረሻ ድል፣ የኃጢአትና የጨለማ ውድቀት፣ እንዲሁም አዲሲቷ ኢየሩሳሌም ከሰማይ ወደ ምድር የምትወርድበትን ዘላለማዊ ተስፋ ያበስራል።`,
      summaryEn: `In ${baseTitleEn}, the cosmic unveiling (Apocalypse) reveals the final victory of the Lamb, the ultimate destruction of evil, and the descent of the New Jerusalem.`,
      historicalDossierAm: `የተጻፈው በሮማው ቄሣር ዶሚሽያን አረመኔያዊ የስደት ዘመን ለታመሙት 7ቱ የእስያ አብያተ ክርስቲያናት ሲሆን፤ ቄሳርን ማምለክ በተገደዱበት ወቅት ክርስቶስ ብቸኛው ንጉሥ መሆኑን ያውጃል።`,
      historicalDossierEn: `Composed during intense Roman imperial persecution under Domitian. Believers refused emperor worship, looking to the triumphant exalted Lamb.`,
      covenantalFrameworkAm: `የፍጥረትና የቤዛነት ታሪክ ፍጻሜ። በኤደን ገነት የጠፋው ሕይወት በአዲሱ ሰማይና በአዲሲቷ ምድር ለዘላለም ተመለሰ።`,
      covenantalFrameworkEn: `The consummation of all biblical covenants. Paradise lost in Genesis is glorified into the cosmic Garden-City where God dwells with his people forever.`,
      linguisticInsightsAm: `የግሪክ ቃላት፡ አፖካሊፕሲስ (መገለጥ / መጋረጃው መከፈት)፣ ኒካኦ (ማሸነፍ / ድል መንሣት)፣ እና አርኒዮን (የታረደው በግ)።`,
      linguisticInsightsEn: `Core Greek apocalypse vocabulary: Apokalypsis (Unveiling), Nikao (To Overcome/Conquer), and Arnion (The Victorious Slain Lamb).`,
      humanHeartAnalysisAm: `በመከራና በስደት ውስጥ ላሉ አማኞች ታላቅ የመጽናናት ምንጭ፤ ክርስቶስ በመጨረሻ እንደሚያሸንፍ በማወቅ በጽናት መቆም።`,
      humanHeartAnalysisEn: `Fortifies the persecuted soul against compromise with worldly empire, promising that the Lamb has already overcome the world.`,
      transformativeTakeawaysAm: [
        'የዓለም ኢምፓየሮችና የክፋት ኃይሎች ሁሉ ጊዜያዊ ናቸው፤ የክርስቶስ መንግሥት ግን ዘላለማዊ ናት።',
        'የቱንም ያህል ጨለማ ቢበረታ፤ የመጨረሻው ድል የእግዚአብሔርና የቅዱሳኑ ነው።',
        'አምባሳደር ሆነህ የክርስቶስን ተስፋ በታማኝነት በመጠበቅ ዛሬም በቅድስና ኑር።'
      ],
      transformativeTakeawaysEn: [
        'All worldly empires and tyrannies are transient; the Kingdom of God alone is eternal.',
        'No matter how fierce the darkness appears, final cosmic victory belongs to the Lamb.',
        'Live in holy vigilance and joyful hope, knowing your labor in Christ is never in vain.'
      ]
    }
  }

  if (isWisdom) {
    return {
      summaryAm: `${baseTitleAm} የእግዚአብሔርን ጥበብ፣ የልብን ቅንነትና በመከራና በደስታ ውስጥ ወደ ፈጣሪ የሚቀርብ ጸሎትና ውዳሴን ያቀርባል።`,
      summaryEn: `In ${baseTitleEn}, biblical wisdom and worship guide the soul through the complexities of suffering, praise, righteousness, and daily practical godliness.`,
      historicalDossierAm: `የጥንቱ እስራኤል የንግሥና ዘመንና የቤተ መቅደስ አምልኮ፤ የዳዊት፣ የሰሎሞንና የመዝሙራውያን ዘመን ጥልቅ መንፈሳዊ ልምምድ።`,
      historicalDossierEn: `The golden era of the united monarchy and temple liturgy in ancient Jerusalem under David, Solomon, and the temple guilds.`,
      covenantalFrameworkAm: `የዳዊት ቃል ኪዳን ልብ የሆነው ምስጋናና ጸሎት፤ የወደፊቱን የክርስቶስን ስቃይና ትንሣኤ በመዝሙር ትንቢት ያመለክታል።`,
      covenantalFrameworkEn: `The devotional heart of the Davidic covenant, prophetically voicing the sufferings, coronation, and eternal priesthood of the Messiah.`,
      linguisticInsightsAm: `የዕብራይስጥ ቃላት፡ ቾክማህ (ጥበብ)፣ ቴሂላህ (ምስጋና)፣ እና ሚዝሞር (የዜማ መዝሙር)።`,
      linguisticInsightsEn: `Core Hebrew poetic vocabulary: Chokmah (Divine Wisdom), Tehillah (Praise), and Mizmor (Sacred Melody).`,
      humanHeartAnalysisAm: `የሰው ልጅ ስሜት ሁሉ—ከጥልቅ ሐዘንና ጩኸት እስከ ታላቅ ደስታና እልልታ—በእግዚአብሔር ፊት በቅንነት ሲቀርብ ሰላምን ያገኛል።`,
      humanHeartAnalysisEn: `Validates every human emotion: raw grief, despair, confusion, and exuberant joy brought transparently before God.`,
      transformativeTakeawaysAm: [
        'እግዚአብሔር እውነተኛውን የልብህን ስሜትና ጩኸት መስማት ይፈልጋል።',
        'እውነተኛ ጥበብ የሚጀምረው እግዚአብሔርን በመፍራትና በቃሉ በመታመን ነው።',
        'በማንኛውም ሁኔታ ውስጥ እግዚአብሔርን ማመስገን የነፍስህን ሰላም ይጠብቃል።'
      ],
      transformativeTakeawaysEn: [
        'God welcomes your most transparent prayers and honest struggles in times of distress.',
        'The fear of the Lord and trust in his righteousness is the beginning of all true wisdom.',
        'Praise is an act of spiritual warfare that recalibrates the soul toward divine truth.'
      ]
    }
  }

  if (isProphet) {
    return {
      summaryAm: `${baseTitleAm} የእግዚአብሔርን ፍትሕ፣ ኃጢአትን የሚገስጽ የፍርድ አዋጅና ንስሐ ለሚገቡ የተዘጋጀውን የመዳንና የመሲሑን የተስፋ ቃል ያውጃል።`,
      summaryEn: `In ${baseTitleEn}, the prophetic voice of Yahweh confronts societal injustice and covenant rebellion, while broadcasting glorious promises of the coming Messiah.`,
      historicalDossierAm: `የአሦርና የባቢሎን ግዙፍ ኢምፓየሮች እስራኤልንና ይሁዳን የከበቡበት፣ የስደትና የፍርድ ዘመን የነገሠበት ጥንታዊ ዓለም።`,
      historicalDossierEn: `The stormy era of the Neo-Assyrian, Babylonian, and Persian superpowers threatening Israel with siege, destruction, and exile.`,
      covenantalFrameworkAm: `የቃል ኪዳኑን ጥሰት የሚገስጽ፣ ነገር ግን እግዚአብሔር በክርስቶስ በኩል የሚያመጣውን አዲስ የዘላለም ኪዳን የሚያበስር ነው።`,
      covenantalFrameworkEn: `Prosecutes covenant violations of the Mosaic Law, while pointing forward to the New Covenant written on human hearts.`,
      linguisticInsightsAm: `የዕብራይስጥ ቃላት፡ ናቪ (ነቢይ / መልእክተኛ)፣ ሚሽፓት (ፍትሕ)፣ እና ጸዳቃህ (ጽድቅ)።`,
      linguisticInsightsEn: `Prophetic Hebrew vocabulary: Navi (Prophetic Herald), Mishpat (Justice), and Tsedeqah (Righteousness).`,
      humanHeartAnalysisAm: `በሐሰተኛ ደኅንነትና በጣዖት የታወረው ልብ እንዲነቃ የሚጣራ የእግዚአብሔር አባታዊ ፍቅርና ናፍቆት።`,
      humanHeartAnalysisEn: `Pierces religious complacency and superficial worship, revealing God’s passionate grief over human self-destruction.`,
      transformativeTakeawaysAm: [
        'እግዚአብሔር ከውጫዊ የአምልኮ ሥርዓት ይልቅ እውነተኛ ፍቅርን፣ ምሕረትንና ፍትሕን ይፈልጋል።',
        'የቱንም ያህል ብትርቅ፤ በእውነተኛ ንስሐ ወደ እግዚአብሔር ስትመለስ ምሕረቱ ዝግጁ ነው።',
        'የእግዚአብሔር የትንቢት ቃል በታሪክ ውስጥ እንደተፈጸመ፤ የወደፊቱም በእጁ የተጠበቀ ነው።'
      ],
      transformativeTakeawaysEn: [
        'God prioritizes genuine heart repentance, justice, and mercy above external religious ritual.',
        'No matter how far you have wandered, God’s restorative grace is ready to forgive.',
        'Every promise of God is rock-solid; the prophetic word unfailingly comes to pass.'
      ]
    }
  }

  if (isGospelActs) {
    return {
      summaryAm: `${baseTitleAm} ውስጥ ኢየሱስ ክርስቶስ የአምላክን መንግሥት በኃይልና በእውነት ሲገልጥ እናያለን። በሮማ ግዛትና በአይሁድ ሃይማኖታዊ ሥርዓት መካከል የዘላለም ሕይወትና የኃጢአት ስርየት የሚገኝበትን ብቸኛውን የመዳን መንገድ በግልጽ ያሳያል።`,
      summaryEn: `In ${baseTitleEn}, Jesus Christ inaugurates the Kingdom of God amidst the Roman imperial occupation and Jewish religious establishment, revealing the path of redemption, divine authority, and eternal life.`,
      historicalDossierAm: `የመጀመሪያው መቶ ክፍለ ዘመን ይሁዳና ገሊላ በሮማውያን ቄሳሮችና በአካባቢው ገዢዎች (እንደ ሄሮድስና ጲላጦስ) ቁጥጥር ሥር ነበሩ። ፈሪሳውያንና ሰዱቃውያን የሃይማኖቱን ሥልጣን ይዘው ሕዝቡን በከባድ ሕግ ሲያስጨንቁ፤ ተራው ሕዝብ የነፃነት መሲሕን ይናፍቅ ነበር።`,
      historicalDossierEn: `First-century Roman Judea and Galilee under Roman prefects, client kings, and the Sanhedrin. Heavy Roman taxation, military presence, and intense religious-political sectarianism shaped everyday life.`,
      covenantalFrameworkAm: `በብሉይ ኪዳን የተነገሩ ትንቢቶችና የተስፋ ቃላት ሁሉ በክርስቶስ አካልና አገልግሎት ፍጻሜያቸውን እያገኙ ነው። የአብርሃም የበረከት ቃል ኪዳንና የዳዊት ዘላለማዊ ዙፋን በአዲስ ኪዳን እውን ሆነዋል።`,
      covenantalFrameworkEn: `All Old Testament shadows, prophetic promises, and covenantal frameworks find their definitive climax in Jesus Christ, establishing the New Covenant promised in Jeremiah 31.`,
      linguisticInsightsAm: `በአዲስ ኪዳን የግሪክ ቋንቋ ቁልፍ ቃላት (እንደ ባሲሌያ - መንግሥት፣ ፒስቲስ - እምነት፣ አጋፔ - መለኮታዊ ፍቅር፣ ሶቴሪያ - መዳን) የክርስቶስን ወንጌል ጥልቀት በግልጽ ያሳያሉ።`,
      linguisticInsightsEn: `Original Koine Greek vocabulary (such as Basileia - Kingdom, Pistis - Faith, Agape - Divine Self-Giving Love, Sotēria - Salvation) delivers precision and theological weight to every verse.`,
      humanHeartAnalysisAm: `የክርስቶስ ቃልና ተአምራት የሰዎችን ልብ ያጋልጣሉ፡ ትዕቢተኞችና ባለሥልጣናት ሲቃወሙት፤ ድሆች፣ በሽተኞችና ኃጢአተኞች በእምነት ወደ እርሱ በመቅረብ ምሕረትንና ፈውስን ይቀበላሉ።`,
      humanHeartAnalysisEn: `Encountering Christ confronts the human heart: religious pride breeds resistance, while humble brokenness receives grace, healing, and forgiveness.`,
      transformativeTakeawaysAm: [
        'የእግዚአብሔር መንግሥት በምድራዊ ኃይል ሳይሆን በእውነት፣ በቅድስናና በፍቅር ትገዛለች።',
        'ክርስቶስ ዛሬም ወደ ሕይወትህ በመምጣት የተሰበረውን ልብ ለመጠገንና ኃጢአትን ይቅር ለማለት ኃይል አለው።',
        'የዓለምን ተግዳሮት በጽናት ለማለፍ ሕይወትህን በክርስቶስ ቃል ላይ መመሥረት ብቸኛው ዋስትና ነው።'
      ],
      transformativeTakeawaysEn: [
        'The Kingdom of God triumphs not through political force but through sacrificial love, truth, and righteousness.',
        'Christ remains ready to forgive, heal, and transform every broken heart that approaches him in faith.',
        'Anchoring your identity in Christ’s living word is the only unshakable foundation in an unstable world.'
      ]
    }
  }

  if (isEpistle) {
    return {
      summaryAm: `${baseTitleAm} ለቀደምት አብያተ ክርስቲያናት የተጻፈ መንፈሳዊ መልእክት ሲሆን፤ የክርስቶስን ቤዛነት፣ የጸጋውን ጥልቀትና በዕለት ተዕለት ሕይወት የሚገለጥ ቅዱስ አኗኗርን በዝርዝር ያብራራል።`,
      summaryEn: `${baseTitleEn} provides apostolic instruction to early believers, unpacking the deep theology of justification, Christian unity, spiritual warfare, and daily holy conduct in a hostile empire.`,
      historicalDossierAm: `ሐዋርያት መልእክታቸውን የጻፉት በጥንቷ ሮም ግዛት ለነበሩት አዳዲስ አማኞች ነው። አማኞች ከጣዖት አምልኮ፣ ከአይሁዳውያን የሕግ ክርክርና ከሮማውያን ስደት ጋር እየታገሉ የክርስቶስን ምስክርነት በጽናት እንዲጠብቁ ተጽፏል።`,
      historicalDossierEn: `Written to nascent Christian communities across the Greco-Roman world navigating pagan imperial culture, syncretism, Judaizing legalism, and sporadic persecution.`,
      covenantalFrameworkAm: `በክርስቶስ ደም የተመሠረተው አዲስ ኪዳን አማኞችን የእግዚአብሔር ልጆችና የጸጋው ወራሾች አድርጓቸዋል። ከሕግ ባርነት ነፃ ወጥተን በመንፈስ ቅዱስ ኃይል ለጽድቅ እንድንኖር ያስተምራል።`,
      covenantalFrameworkEn: `The New Covenant guarantees believers full adoption, justification by faith alone through grace, and the indwelling of the Holy Spirit for sanctification.`,
      linguisticInsightsAm: `የሐዋርያት ቋንቋ በነገረ-መለኮታዊ ቃላት የተሞላ ነው፡ ቻሪስ (ጸጋ)፣ ዲካዮሲኔ (ጽድቅ)፣ ኤክሌሲያ (ቤተ ክርስቲያን)፣ እና ፓራክሌቶስ (አጽናኝ መንፈስ ቅዱስ)።`,
      linguisticInsightsEn: `Rich Pauline and apostolic vocabulary including Charis (Grace), Dikaiosynē (Justification/Righteousness), and Paraklētos (The Comforter/Advocate).`,
      humanHeartAnalysisAm: `የአማኝ ውስጣዊ ትግል ከሥጋ ፈቃድና ከዓለም ተጽዕኖ ጋር ነው። መልእክቱ ተስፋ ሳንቆርጥ አእምሮአችንን በእግዚአብሔር ቃል በማደስ በእምነት እንድንመላለስ ያበረታታናል።`,
      humanHeartAnalysisEn: `Addresses the believer’s inner struggle between the fallen flesh and the renewed spirit, calling for mind-renewal and steadfast endurance.`,
      transformativeTakeawaysAm: [
        'መዳን በክርስቶስ ላይ ባለን እምነት የተሰጠ ነፃ የጸጋ ስጦታ እንጂ በሥራ የሚገኝ አይደለም።',
        'መንፈሳዊ ዕድገት የሚመጣው አእምሮአችንን በቃሉ በመለወጥና በመንፈስ ቅዱስ በመመራት ነው።',
        'የክርስቶስ ፍቅር ከማንኛውም መከራና ፈተና በላይ አሸናፊ ያደርገናል።'
      ],
      transformativeTakeawaysEn: [
        'Salvation is an unearned gift of grace through faith in Christ alone, leaving no room for human boasting.',
        'Spiritual transformation occurs as the Holy Spirit renews our minds through Scripture.',
        'Christ’s steadfast love guarantees ultimate victory over every affliction and trial.'
      ]
    }
  }

  // General OT / Wisdom / Prophet fallback
  return {
    summaryAm: `${baseTitleAm} የእግዚአብሔርን ሉዓላዊ አገዛዝ፣ ፍጹም ቅድስናና ከሕዝቡ ጋር የገባውን ጽኑ ቃል ኪዳን በታሪክ ውስጥ በግልጽ ያሳያል።`,
    summaryEn: `${baseTitleEn} reveals the supreme holiness, covenant faithfulness, and providential sovereignty of God directing human history toward his redemptive purposes.`,
    historicalDossierAm: `የተጻፈው በጥንቱ መካከለኛው ምስራቅ ታሪካዊ ሁኔታ ውስጥ ነው (${empireAm})። ሕዝቡ በጦርነት፣ በስደትና በፈተና ውስጥ ሆነው የእግዚአብሔርን ታማኝነት ያዩበት ዘመን ነበር።`,
    historicalDossierEn: `Set within the ancient Near Eastern historical landscape (${empireEn}), amidst imperial conflicts, exile, covenant struggles, and miraculous divine preservation.`,
    covenantalFrameworkAm: `እግዚአብሔር ለአባቶችና ለሕዝቡ የገባውን የማይታጠፍ ቃል ኪዳን ይጠብቃል። ኃጢአትን እየገሠጸ ንስሐ ለሚገቡት ምሕረቱን የሚያሳይና የወደፊቱን የክርስቶስን ቤዛነት የሚያመለክት ነው።`,
    covenantalFrameworkEn: `Illustrates Yahweh’s steadfast covenant love (Hesed), disciplining rebellion yet preserving the holy remnant pointing forward to the ultimate Redeemer.`,
    linguisticInsightsAm: `የዕብራይስጥ ቃላት ጥልቀት (እንደ ሄሴድ - ጽኑ ፍቅር፣ ሻሎም - ፍጹም ሰላም፣ ያህዌ - ራሱ ኖሮ የሚኖር አምላክ) የእግዚአብሔርን ማንነት በግልጽ ያሳያሉ።`,
    linguisticInsightsEn: `Core Hebrew roots such as Hesed (Steadfast Covenant Love), Shalom (Wholeness/Peace), and Yahweh (The Self-Existent Covenant Lord).`,
    humanHeartAnalysisAm: `የሰው ልጅ ድካም፣ አለማመንና ፍርሃት ከእግዚአብሔር ትዕግሥትና ታማኝነት ጋር ሲገናኝ፤ እውነተኛ እምነት እግዚአብሔርን ብቻ በመታመን እንደሚገኝ ያስተምረናል።`,
    humanHeartAnalysisEn: `Human frailty and fear juxtaposed with God’s unwavering patience, calling the soul to radical trust in the Lord rather than human strength.`,
    transformativeTakeawaysAm: [
      'እግዚአብሔር በታሪክና በሁኔታዎች ሁሉ ላይ ፍጹም ሉዓላዊ ጌታ ነው።',
      'የሰው ታማኝነት ቢጎድል እንኳ የእግዚአብሔር የቃል ኪዳን ፍቅር ለዘላለም ጸንቶ ይኖራል።',
      'በችግርና በመከራ ጊዜ ወደ እግዚአብሔር መጸለይና መመለስ እውነተኛውን ሰላም ያመጣል።'
    ],
    transformativeTakeawaysEn: [
      'God reigns supreme over all kings, empires, and individual human circumstances.',
      'Even when human faithfulness falters, God’s steadfast covenant love endures forever.',
      'Turning to God in honest prayer during seasons of trial brings true comfort and deliverance.'
    ]
  }
}

/**
 * Enriches a PerspectiveMatrixItem with deep chapter-specific exposition
 */
export function enrichPerspectiveMatrixItem(
  item: PerspectiveMatrixItem,
  bookNr: number,
  chapter: number
): PerspectiveMatrixItem {
  const deep = item.deepExposition || getDeepExpositionForChapter(bookNr, chapter, item)
  
  // Also enrich archaeological and key verse data if missing
  const enrichedGeo = {
    ...item.geopolitical,
    archaeologicalEvidences: item.geopolitical.archaeologicalEvidences || deep.archaeologicalEvidences,
    socialCustomsAm: item.geopolitical.socialCustomsAm || (bookNr >= 40 ? 'የሮማ ግብር አከፋፈል፣ የመንደር ገበያዎች፣ የአይሁድ የሰንበትና የበዓላት ሥርዓት' : 'የአባቶች የድንኳን ኑሮ፣ የከብቶች እርባታ፣ የቃል ኪዳን መሥዋዕት'),
    socialCustomsEn: item.geopolitical.socialCustomsEn || (bookNr >= 40 ? 'Roman taxation system, village markets, Jewish Sabbath synagogue assemblies' : 'Pastoral nomadism, tribal councils, sacrificial covenant ceremonies')
  }

  const enrichedTheo = {
    ...item.theological,
    coreDoctrinesAm: item.theological.coreDoctrinesAm || ['መለኮታዊ ሉዓላዊነት (Sovereignty)', 'የጸጋ ስጦታ (Grace Alone)', 'የክርስቶስ ቤዛነት (Redemption)', 'የእግዚአብሔር ታማኝነት (Faithfulness)'],
    coreDoctrinesEn: item.theological.coreDoctrinesEn || ['Divine Sovereignty', 'Sola Gratia', 'Substitutionary Atonement', 'Covenant Faithfulness'],
    crossReferences: item.theological.crossReferences || [
      { ref: 'ዘፍጥረት 12:3', noteAm: 'በአብርሃም ዘር የምድር አሕዛብ ሁሉ እንደሚባረኩ የተገባ ቃል', noteEn: 'All families of the earth blessed through the Seed' },
      { ref: '2 ሳሙኤል 7:16', noteAm: 'የዳዊት መንግሥትና ዙፋን ለዘላለም እንደሚጸና የተሰጠ ኪዳን', noteEn: 'Davidic royal dynasty established forever in Christ' },
      { ref: 'ዮሐንስ 1:14', noteAm: 'ቃል ሥጋ ሆነ፥ በጸጋና በእውነትም ተሞልቶ በእኛ አደረ', noteEn: 'The Word became flesh and tabernacled among us' }
    ]
  }

  const enrichedPsych = {
    ...item.psychological,
    transformativeQuestionsAm: item.psychological.transformativeQuestionsAm || [
      'በዚህ ታሪክ ውስጥ የእግዚአብሔርን ድምፅ ለመስማት ምን ዓይነት የልብ ዝግጁነት ያስፈልግሃል?',
      'ፍርሃትህን ወይም ጭንቀትህን ለእግዚአብሔር አስረክበህ በሙሉ እምነት እንድትጓዝ የሚያግድህ ምንድን ነው?',
      'ይህ ቃል ዛሬ ላለህበት ውሳኔ ወይም ፈተና ምን ዓይነት ግልጽ መመሪያ ይሰጥሃል?'
    ],
    transformativeQuestionsEn: item.psychological.transformativeQuestionsEn || [
      'What heart posture is needed to hear God’s voice clearly in this passage?',
      'What fears or anxieties do you need to surrender to trust God completely today?',
      'How does this truth speak directly into the decisions or challenges facing you this week?'
    ]
  }

  return {
    ...item,
    geopolitical: enrichedGeo,
    theological: enrichedTheo,
    psychological: enrichedPsych,
    deepExposition: deep
  }
}
