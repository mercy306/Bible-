/**
 * The Living Ethics & Ancient Wisdom Sandbox (The Applied Dilemma Bible)
 *
 * Reframes Scripture as an interactive ethical, leadership, and philosophical case-study framework.
 * Bridges ancient biblical dilemmas directly with modern professional, ethical, and personal decision-making.
 */

export interface DilemmaOption {
  id: string
  labelEn: string
  labelAm: string
  descriptionEn: string
  descriptionAm: string
  isHistoricalChoice: boolean
  consequenceSummaryEn: string
  consequenceSummaryAm: string
}

export interface HistoricalAnalysis {
  chosenOptionId: string
  characterTitleEn: string
  characterTitleAm: string
  shortTermCostEn: string
  shortTermCostAm: string
  longTermFruitEn: string
  longTermFruitAm: string
  psychologicalInsightEn: string
  psychologicalInsightAm: string
  biblicalAnchorRef: string
  biblicalAnchorTextEn: string
  biblicalAnchorTextAm: string
  modernLeadershipTakeawayEn: string
  modernLeadershipTakeawayAm: string
}

export interface DilemmaCase {
  id: string
  bookNr: number
  chapterStart: number
  chapterEnd?: number
  sceneId?: string
  titleEn: string
  titleAm: string
  heroEn: string
  heroAm: string
  category: 'leadership' | 'ethics' | 'crisis_management' | 'courage' | 'justice'
  categoryLabelEn: string
  categoryLabelAm: string
  scenarioEn: string
  scenarioAm: string
  geopoliticalPressureEn: string
  geopoliticalPressureAm: string
  stakeholdersEn: string[]
  stakeholdersAm: string[]
  coreDilemmaQuestionEn: string
  coreDilemmaQuestionAm: string
  options: DilemmaOption[]
  historicalAnalysis: HistoricalAnalysis
}

export const DILEMMA_CASES: DilemmaCase[] = [
  // 1. DAVID IN EN-GEDI CAVE (1 Samuel 24)
  {
    id: 'dilemma-david-saul-cave',
    bookNr: 9, // 1 Samuel
    chapterStart: 24,
    chapterEnd: 24,
    sceneId: 'act3-scene4',
    titleEn: 'David in En-Gedi: Expediency vs. Covenant Principle',
    titleAm: 'ዳዊት በዓይንጋዲ ዋሻ፡ አቋራጭ በቀል ወይስ የመርሕ የበላይነት?',
    heroEn: 'David, Hunted Outlaw Commander',
    heroAm: 'ዳዊት፥ የተሰደደው የሠራዊት መሪ',
    category: 'leadership',
    categoryLabelEn: 'High-Stakes Leadership & Integrity',
    categoryLabelAm: 'የአመራር ጥበብና የማይናወጥ ታማኝነት',
    scenarioEn:
      'King Saul has mobilized 3,000 elite troops to hunt you down like a dog in the crags of the wild goats. You and your desperate men are crouching in the pitch-black recesses of a limestone cave. Unbeknownst to Saul, he enters your exact cave alone to relieve himself. Your men whisper urgently: "This is the day the Lord spoke of! God has delivered your mortal enemy into your hand. Strike him dead now and claim your promised crown!"',
    scenarioAm:
      'ንጉሥ ሳኦል 3,000 የተመረጡ ወታደሮችን አስከትሎ በዓይንጋዲ ተራሮች እንደ አውሬ እያደነህ ነው። አንተና ወታደሮችህ በዋሻው ጨለማ ጥግ ተሸሽጋችኋል። ሳኦል ሳያውቅ ለጉዳዩ ብቻውን ወደ ዋሻው ገባ። ሰዎችህ በሹክሹክታ፡ “እግዚአብሔር ጠላትህን በእጅህ አሳልፎ የሚሰጥበት ቀን ዛሬ ነው! በአንድ ሰይፍ ግደለውና ይህን መከራ አቁመህ ንገሥ!” እያሉህ ነው።',
    geopoliticalPressureEn:
      'Years of living as a hunted fugitive with a bounty on your head; your 600 soldiers are exhausted, traumatized, and demanding results.',
    geopoliticalPressureAm:
      'ለዓመታት በዋሻ መሰደድ፣ 600 የሚሆኑ የተጨነቁና የተራቡ ወታደሮችህ ውጤትና ድል መፈለጋቸው፣ እና ሳኦል ከወደቀ ዙፋኑ በቀጥታ ለአንተ ክፍት መሆኑ።',
    stakeholdersEn: [
      'David (Future of the Dynasty & Conscience)',
      'King Saul (Anointed Reigning Monarch)',
      'The 600 Outlaw Soldiers (Seeking relief and rewards)',
      'The Nation of Israel (Watching for legitimacy vs. violent coup)'
    ],
    stakeholdersAm: [
      'ዳዊት (የወደፊቱ መንግሥት ሕጋዊነትና ንጹሕ ሕሊና)',
      'ንጉሥ ሳኦል (የተቀባው ገዢ ንጉሥ)',
      '600ዎቹ ወታደሮች (ከስደትና ከረሃብ ማረፍ የሚፈልጉ)',
      'መላው የእስራኤል ሕዝብ (የመፈንቅለ መንግሥት አደጋ ወይስ ሕጋዊ ሽግግር?)'
    ],
    coreDilemmaQuestionEn:
      'You hold a drawn blade in the darkness behind your mortal enemy. What is your move?',
    coreDilemmaQuestionAm:
      'በጨለማ ውስጥ ሰይፍህን ይዘህ በጠላትህ ጀርባ ቆመሃል። ያንተ ውሳኔ ምንድን ነው?',
    options: [
      {
        id: 'opt-strike-kill',
        labelEn: 'Strike Saul Dead Instantly',
        labelAm: 'ሳኦልን ወዲያውኑ ግደለው',
        descriptionEn:
          'End the fugitive nightmare immediately, avenge yourself, and claim the throne your prophet promised you (Pragmatic / Machiavellian).',
        descriptionAm:
          'ስደቱንና መከራውን በአንድ ሰይፍ ጨርስ፤ በነቢዩ ሳሙኤል የተነገረልህን ዙፋን ያዝ፤ ጠላትህን አጥፋ (የፖለቲካ አቋራጭ)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'You become king through assassination. Every future general learns that assassinating the king is the accepted path to power, creating endless violent coups.',
        consequenceSummaryAm:
          'በግድያና በመፈንቅለ መንግሥት ንጉሥ ትሆናለህ፤ ነገር ግን መጪው ትውልድ ንጉሥን ገድሎ መንገሥን ይማራል፤ መንግሥትህም በደም ይረክሳል።'
      },
      {
        id: 'opt-cut-robe',
        labelEn: 'Cut the Corner of His Robe & Spare His Life',
        labelAm: 'የልብሱን ጫፍ ብቻ ቆርጠህ ነፍሱን ማረው',
        descriptionEn:
          'Refuse to lay a hand on the Lord’s anointed; take only a swatch of cloth to prove your innocence and moral superiority in the open light of day.',
        descriptionAm:
          '“በእግዚአብሔር በተቀባው ላይ እጄን አልዘረጋም” ብለህ በመርህ ቁም፤ ንጹሕ መሆንህን ለማሳየት የልብሱን ጫፍ ብቻ ቆርጠህ ተው (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'David proves to Saul, the army, and history that he is innocent of treason. He retains a clean conscience and establishes the sanctity of royal authority.',
        consequenceSummaryAm:
          'ዳዊት በሳኦልና በመላው ሕዝብ ፊት ንጹሕ መሆኑን አረጋገጠ፤ በግድያ ሳይሆን በሕጋዊና በመለኮታዊ ክብር ለዙፋኑ ብቁ ሆነ።'
      },
      {
        id: 'opt-flee-silently',
        labelEn: 'Slip Away in Silence Without Touching Him',
        labelAm: 'ሳትንከውና ሳታናግረው በዝምታ ሾልከህ ውጣ',
        descriptionEn:
          'Avoid all risk of confrontation or guilt, retreating deeper into the desert to keep surviving (Passive / Risk-Averse).',
        descriptionAm:
          'ምንም አደጋ ሳትፈጥር በዝምታ ከዋሻው ሸሽተህ ውጣ፤ በረሃ ውስጥ መደበቅህን ቀጥል (ገለልተኛ አቋም)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'You remain a hunted outlaw. Saul continues to believe you want to kill him, and no moral breakthrough occurs.',
        consequenceSummaryAm:
          'እንደተሰደድክ ትቀጥላለህ፤ ሳኦል አሁንም ልትገድለው እንደምትፈልግ ያምናል፤ ምንም ዓይነት የሞራል ለውጥ አይመጣም።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-cut-robe',
      characterTitleEn: 'David spared Saul and his heart struck him even for cutting the robe.',
      characterTitleAm: 'ዳዊት የሳኦልን ነፍስ ማረ፤ ነገር ግን የልብሱን ጫፍ በመቁረጡ እንኳ ልቡ ወቀሰው።',
      shortTermCostEn:
        'David remained an outlaw in the wilderness for months longer; the immediate danger did not vanish.',
      shortTermCostAm:
        'ዳዊት ወዲያው ንጉሥ አልሆነም፤ አሁንም ለወራት በበረሃና በስደት መከራን መታገሥ ነበረበት።',
      longTermFruitEn:
        'David established the moral legitimacy of his dynasty. Because he refused to seize power by murder, his throne became the eternal prototype of righteous kingship culminating in Christ.',
      longTermFruitAm:
        'ዳዊት የመንግሥቱን የሞራልና የሕግ የበላይነት አጸና፤ በግድያ ሥልጣን ለመያዝ ፈቃደኛ ባለመሆኑ፣ ዙፋኑ ለመሲሑ መንግሥት ምሳሌ ሆኖ ለዘላለም ጸና።',
      psychologicalInsightEn:
        'Expediency tempts leaders to take shortcuts when under extreme stress. True strength of character is defined by what you refuse to do when you have absolute power and zero accountability.',
      psychologicalInsightAm:
        'ሰው በከባድ ጭንቀት ውስጥ ሲሆን አቋራጭ መንገድ ይፈተናል፤ የእውነተኛ መሪ ጥንካሬ የሚመዘነው ማንም ሳያየውና ማንም ሳይጠይቀው ሙሉ ኃይል እጁ ላይ ባለበት ቅጽበት በሚያደርገው ምርጫ ነው።',
      biblicalAnchorRef: 'Proverbs 16:32 / ምሳሌ 16:32',
      biblicalAnchorTextEn:
        '"Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city."',
      biblicalAnchorTextAm:
        '“ትዕግሥተኛ ሰው ከኃያል ሰው ይሻላል፥ መንፈሱንም የሚገዛ ከተማ ከሚወስድ ይበልጣል።”',
      modernLeadershipTakeawayEn:
        'Never sacrifice long-term integrity for short-term tactical victory. In the boardroom, career, or politics, how you win matters as much as winning itself; an illicit shortcut will eventually poison your legacy.',
      modernLeadershipTakeawayAm:
        'ለጊዜያዊ ድል ብለህ ዘላለማዊ ክብርህንና ንጹሕ ሕሊናህን አሳልፈህ አትስጥ፤ በሥራ ቦታህ፣ በንግድህ ወይም በአመራርህ እንዴት እንዳሸነፍክ ማሸነፍህ ያህል ወሳኝ ነው፤ በአቋራጭ የመጣ ስኬት መጨረሻው ውድቀት ነው።'
    }
  },

  // 2. JOSEPH IN EGYPT (Genesis 39 & 41)
  {
    id: 'dilemma-joseph-integrity',
    bookNr: 1, // Genesis
    chapterStart: 39,
    chapterEnd: 41,
    sceneId: 'act2-scene3',
    titleEn: 'Joseph & Potiphar’s House: Career Suicide vs. Moral Treason',
    titleAm: 'ዮሴፍ በጲጥፋራ ቤት፡ የሥራ ስኬት ወይስ በእግዚአብሔር ፊት ኃጢአት?',
    heroEn: 'Joseph, Enslaved Chief Steward',
    heroAm: 'ዮሴፍ፥ አገልጋይና ዋና የበላይ ተመልካች',
    category: 'ethics',
    categoryLabelEn: 'Workplace Ethics & Sexual Integrity',
    categoryLabelAm: 'በሥራ ቦታ የሚገጥም ፈተናና የቅድስና ጽናት',
    scenarioEn:
      'You are a young foreign slave sold by your brothers, but by supreme competence you have risen to chief executive of Potiphar’s massive estate. Potiphar’s wife corners you daily, offering you influence, pleasure, and safety if you sleep with her. If you refuse, she has the legal and social power to accuse you of attempted rape and throw you into a subterranean death-dungeon. You are alone in the empty house with her.',
    scenarioAm:
      'በወንድሞችህ የተሸጥክ ባዕድ ባሪያ ነህ፤ በትጋትህ ምክንያት የግብፃዊው ባለሥልጣን የጲጥፋራ ቤት ሙሉ ሥራ አስኪያጅ ሆነሃል። የጲጥፋራ ሚስት በየቀኑ አብረሃት እንድትተኛ ትለምንሃለች። እሺ ካልክ ሥልጣንና ምቾት ታገኛለህ፤ እምቢ ካልክ ግን በሐሰት ከሳ ወደ ወህኒ ቤት እንደምትጥልህ ታውቃለህ። ቤቱ ባዶ ሆኖ ብቻችሁን ተገናኝታችኋል።',
    geopoliticalPressureEn:
      'No family to protect you, no legal human rights as a Hebrew slave, zero witnesses in the room.',
    geopoliticalPressureAm:
      'የሚጠይቅህ ቤተሰብ የለም፣ እንደ ባሪያ ምንም ዓይነት የሕግ ከለላ የለህም፣ በክፍሉ ውስጥ ማንም የሚያይ ምስክር የለም።',
    stakeholdersEn: [
      'Joseph (Conscience & Relationship with God)',
      'Potiphar (Master who trusted everything into Joseph’s hands)',
      'Potiphar’s Wife (Spurned powerful aristocrat)',
      'The Future of Israel (Hidden in Joseph’s destiny)'
    ],
    stakeholdersAm: [
      'ዮሴፍ (ከእግዚአብሔር ጋር ያለው ኪዳንና ንጹሕ ሕሊና)',
      'ጲጥፋራ (ሁሉን አምኖ በእጁ ያስረከበው ጌታ)',
      'የጲጥፋራ ሚስት (የተናቀች ተበቃይ ሴት)',
      'የመላው እስራኤል ሕዝብ የወደፊት ዕጣ ፈንታ'
    ],
    coreDilemmaQuestionEn:
      'She catches you by the cloak, demanding intimacy. What is your move?',
    coreDilemmaQuestionAm:
      'ልብስህን ይዛ “ከእኔ ጋር ተኛ” ብላ አስጨንቃሃለች። ያንተ ውሳኔ ምንድን ነው?',
    options: [
      {
        id: 'opt-comply-secrecy',
        labelEn: 'Comply Quietly to Protect Your Life and Career',
        labelAm: 'ሥራህንና ሕይወትህን ለማዳን በስውር ፈቃዷን ፈጽም',
        descriptionEn:
          'Rationalize that you are a helpless slave with no choice; secure your high executive position and avoid the dungeon (Compromise / Self-Preservation).',
        descriptionAm:
          '“እኔ ባሪያ ነኝ ምንም ምርጫ የለኝም፤ እግዚአብሔርም ያውቃል” ብለህ ራስህን አሳምነህ ክብረ-ሥራህንና ሕይወትህን ጠብቅ (የአቋም መሸርሸር)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'You remain a comfortable slave, living in constant fear of blackmail and losing your spiritual destiny.',
        consequenceSummaryAm:
          'የተመቸህ ባሪያ ሆነህ ትቀጥላለህ፤ ነገር ግን ሁልጊዜ በመሸማቀቅና በመፈራት ትኖራለህ፤ ወደ ታላቁ የእግዚአብሔር ጥሪ ፈጽሞ አትደርስም።'
      },
      {
        id: 'opt-flee-naked',
        labelEn: 'Leave Your Cloak and Run for Your Life',
        labelAm: 'ልብስህን በእጇ ጥለህ ሮጠህ አምልጥ',
        descriptionEn:
          'Proclaim: "How can I do this great wickedness and sin against God?" Sprint out the door, accepting the immediate risk of prison to preserve moral purity.',
        descriptionAm:
          '“እንዴት ይህን ታላቅ ክፋት አደርጋለሁ በእግዚአብሔርም ፊት ኃጢአት እሠራለሁ?” ብለህ ልብስህን ጥለህ ሽሽ፤ ወህኒ መውረድ ቢመጣ እንኳ በቅድስና ቁም (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'Joseph is framed, stripped of rank, and imprisoned for years. Yet in that very prison, he interprets dreams that lead directly to the throne of Egypt.',
        consequenceSummaryAm:
          'ዮሴፍ ተከሰሰ፣ ማዕረጉን አጣ፣ ወደ ወህኒ ወረደ፤ ነገር ግን ያ ወህኒ በቀጥታ የፈርዖንን ሕልም ወደ መፍታትና ወደ ጠቅላይ ሚኒስትርነት አደረሰው።'
      },
      {
        id: 'opt-negotiate',
        labelEn: 'Attempt to Negotiate and Delay Her Politely',
        labelAm: 'በለስላሳ ቃል ለማግባባትና ጊዜ ለመግዛት ሞክር',
        descriptionEn:
          'Try to placate her with diplomatic delays without giving a firm "No", hoping she loses interest (Diplomatic Hesitation).',
        descriptionAm:
          'ቀጥተኛ እምቢታ ሳታሳይ በዘዴ ጊዜ ለመግዛት ሞክር (አጣብቂኝ ውስጥ መቅረት)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Ambiguity emboldens temptation. A delayed refusal inevitably leads to either entrapment or worse disgrace.',
        consequenceSummaryAm:
          'ግልጽ ያልሆነ አቋም ፈተናውን ያባብሰዋል፤ በቆራጥነት ያልተወገዘ ኃጢአት በመጨረሻ ወደ ውድቀት ያመራል።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-flee-naked',
      characterTitleEn: 'Joseph fled the room, leaving his garment in her hand.',
      characterTitleAm: 'ዮሴፍ ልብሱን በእጇ ትቶ ሸሽቶ ወጣ።',
      shortTermCostEn:
        'Falsely accused, sentenced to royal prison without trial; lost his executive title, comfort, and reputation.',
      shortTermCostAm:
        'ያለ ምንም ፍርድ ቤት ወደ ጨለማ ወህኒ ተጣለ፤ ክብሩን፣ ሀብቱንና መልካም ስሙን በሰው ፊት ለጊዜው አጣ።',
      longTermFruitEn:
        'In prison, God was with him. His uncompromising integrity opened the door to Pharaoh’s court, saving the entire Middle East from catastrophic starvation and preserving the messianic family.',
      longTermFruitAm:
        'እግዚአብሔር በወህኒ ከእርሱ ጋር ነበረ፤ ያ የንጽሕና ጽናት መላውን ዓለም ከከባድ ረሃብ ያዳነና መሲሐዊውን ቤተሰብ የታደገ የግብፅ ታላቅ መሪ አደረገው።',
      psychologicalInsightEn:
        'Some temptations cannot be negotiated with; they must be physically fled. Integrity is not the absence of desire, but the presence of a transcendent loyalty greater than the temptation.',
      psychologicalInsightAm:
        'አንዳንድ ፈተናዎች በንግግር አይፈቱም፤ መሸሽ ብቻ ነው መፍትሔው፤ እውነተኛ ቅድስና ማለት ፈተና አለመኖሩ ሳይሆን፣ ከፈተናው እጅግ የሚበልጥ ለእግዚአብሔር ያለ ታማኝነት መኖር ነው።',
      biblicalAnchorRef: 'Genesis 39:9 / ዘፍጥረት 39:9',
      biblicalAnchorTextEn:
        '"How then can I do this great wickedness and sin against God?"',
      biblicalAnchorTextAm:
        '“እንዴት ይህን ታላቅ ክፋት አደርጋለሁ በእግዚአብሔርም ፊት ኃጢአት እሠራለሁ?”',
      modernLeadershipTakeawayEn:
        'In corporate life or public service, ethical compromise is often packaged as career advancement. Losing your position while keeping your soul is an infinite gain; God can promote you from a prison cell to the boardroom when your foundation is clean.',
      modernLeadershipTakeawayAm:
        'በዘመናዊ የሥራ ዓለም የሥነ-ምግባር ብልሽት ብዙውን ጊዜ እንደ እድገት ዕድል ይቀርባል፤ ንጹሕ ሕሊናህን ጠብቀህ ቦታህን ማጣት ትልቅ ትርፍ ነው፤ እግዚአብሔር ከወህኒ ወደ ቤተ መንግሥት ሊያወጣህ ኃይል አለው።'
    }
  },

  // 3. ESTHER BEFORE AHASUERUS (Esther 4)
  {
    id: 'dilemma-esther-advocacy',
    bookNr: 17, // Esther
    chapterStart: 4,
    chapterEnd: 5,
    sceneId: 'act3-scene11',
    titleEn: 'Esther in Susa: Royal Security vs. Sacrificial Advocacy',
    titleAm: 'አስቴር በሱሳ ቤተ መንግሥት፡ የግል ምቾት ወይስ ሕይወትን ለሕዝብ አሳልፎ መስጠት?',
    heroEn: 'Queen Esther (Hadassah)',
    heroAm: 'ንግሥት አስቴር',
    category: 'courage',
    categoryLabelEn: 'Courageous Whistleblowing & Advocacy',
    categoryLabelAm: 'ደፋር ተሟጋችነትና ሕዝብን የመታደግ ቁርጠኝነት',
    scenarioEn:
      'An irrevocable Persian imperial decree has been signed with the King’s signet ring: every Jewish man, woman, and child across 127 provinces will be slaughtered on a single day. Mordecai begs you to go before King Xerxes to plead for your people. But Persian law mandates instant execution for anyone who approaches the inner court unsummoned, unless the king extends his golden scepter. The king has not called you for 30 days.',
    scenarioAm:
      'በ127 የፋርስ አውራጃዎች የሚኖሩ አይሁድ በሙሉ በአንድ ቀን እንዲገደሉ የንጉሡ አዋጅ ወጥቷል። መርዶክዮስ ለሕዝብሽ ወደ ንጉሡ ግቢ ገብተሽ እንድትማልጂ ጠይቆሻል። ነገር ግን የፋርስ ሕግ ሳይጠራ ወደ ንጉሡ አዳራሽ የገባ ማንም ሰው ወዲያውኑ በሞት ይቀጣል፤ ንጉሡ የወርቅ በትር ካልዘረጋለት በቀር። ንጉሡ አንቺን ካልጠራሽ 30 ቀናት አልፈዋል።',
    geopoliticalPressureEn:
      'Xerxes is volatile (having already deposed Queen Vashti for disobedience); Haman the prime minister is ruthless and watches the palace court closely.',
    geopoliticalPressureAm:
      'ንጉሥ ጠረክሲስ ንግሥት አስጢንን በቁጣ ያባረረ ጨካኝ ነው፤ ጠቅላይ ሚኒስትሩ ሐማ ደግሞ በቤተ መንግሥቱ ዙሪያ ሰላዮቹን አሰማርቷል።',
    stakeholdersEn: [
      'Esther (Her own life, royal crown, and identity)',
      'The Jewish Nation (Facing genocide)',
      'Mordecai (Her adoptive father in sackcloth)',
      'Haman & Xerxes (Imperial legal machinery)'
    ],
    stakeholdersAm: [
      'አስቴር (የገዛ ሕይወቷ፣ ዘውዷና ማንነቷ)',
      'የአይሁድ ሕዝብ (የዘር ማጥፋት አደጋ የተደቀነበት)',
      'መርዶክዮስ (ማቅ ለብሶ በደጅ የሚያለቅሰው አሳዳጊዋ)',
      'ንጉሡና የፋርስ ግዛት የሕግ ሥርዓት'
    ],
    coreDilemmaQuestionEn:
      'Do you keep silent in palace luxury, or break the imperial law and walk uninvited into the throne room?',
    coreDilemmaQuestionAm:
      'በቤተ መንግሥቱ ምቾት ውስጥ ዝም ብለሽ ትቀመጫለሽ፣ ወይስ ሕጉን ጥሰሽ ወደ ንጉሡ ዙፋን ትገባለሽ?',
    options: [
      {
        id: 'opt-remain-silent',
        labelEn: 'Keep Silent to Preserve Your Life and Queen Status',
        labelAm: 'ሕይወትሽንና የንግሥትነት ክብርሽን ለማዳን ዝም በይ',
        descriptionEn:
          'Conceal your Jewish identity; hope that the genocide decree does not affect the queen inside the palace walls (Self-Preservation).',
        descriptionAm:
          'ማንነትሽን ደብቀሽ ዝም በይ፤ አዋጁ በቤተ መንግሥት ውስጥ ያለችውን ንግሥት እንደማይነካ ተስፋ አድርጊ (የግል ደህንነትን ማስቀደም)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Mordecai warned: "Do not think in your heart that you will escape in the king’s palace... relief will arise from another place, but you will perish."',
        consequenceSummaryAm:
          'መርዶክዮስ እንዳስጠነቀቀው፡ “በንጉሥ ቤት ስላለሽ ብቻ ከሁሉም አይሁድ ይልቅ እንደምታመልጪ በልብሽ አታስቢ፤ ማዳን ከሌላ ቦታ ይነሣል አንቺ ግን ትጠፊያለሽ።”'
      },
      {
        id: 'opt-enter-throne',
        labelEn: 'Fast Three Days, Step Forward: "If I Perish, I Perish!"',
        labelAm: '3 ቀን ጹሚና ወደ ንጉሡ ግቢ ግቢ፡ “ከጠፋሁም ልጥፋ!”',
        descriptionEn:
          'Mobilize all Jews in Susa to fast and pray; dress in royal robes and risk immediate execution to intercede for the condemned (Sacrificial Courage).',
        descriptionAm:
          'በሱሳ ያሉትን ሁሉ ሰብስበሽ በጾም ከእግዚአብሔር ረዳትነትን ፈልጊ፤ ሕይወትሽን አደጋ ላይ ጥለሽ ለወገኖችሽ በንጉሡ ፊት ቁሚ (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'The King extends the golden scepter. Esther tactfully exposes Haman, the genocide decree is reversed, and an entire nation is saved.',
        consequenceSummaryAm:
          'ንጉሡ የወርቅ በትሩን ዘረጋላት፤ አስቴር በታላቅ ጥበብ የሐማን ተንኮል አጋለጠች፤ የጥፋቱ አዋጅ ተገለበጠ መላው ሕዝብም ዳነ።'
      },
      {
        id: 'opt-fund-rebellion',
        labelEn: 'Secretly Smuggle Weapons and Gold for an Insurgency',
        labelAm: 'በስውር የጦር መሣሪያና ወርቅ በመላክ አመጽ አስነሺ',
        descriptionEn:
          'Use royal funds to finance a guerrilla militia without exposing yourself personally to the king (Covert Proxy Tactics).',
        descriptionAm:
          'ራስሽን አደጋ ላይ ሳትጥይ በድብቅ ገንዘብ በመላክ ሕዝቡ በጦርነት ራሱን እንዲከላከል አድርጊ (የተዘዋዋሪ መንገድ)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'The fragmented Jewish minority would have been crushed by the full weight of the Persian imperial army.',
        consequenceSummaryAm:
          'ያልተዘጋጀው አናሳ ሕዝብ በግዙፉ የፋርስ ሠራዊት በቀላሉ ይደመሰስ ነበር።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-enter-throne',
      characterTitleEn: 'Esther declared: "I will go to the king... and if I perish, I perish."',
      characterTitleAm: 'አስቴር “ወደ ንጉሡ እገባለሁ፤ ከጠፋሁም ልጥፋ!” በማለት በድፍረት ወሰነች።',
      shortTermCostEn:
        'Endured three days of intense fasting and terror; stepped into the courtyard knowing guards were ordered to execute trespassers on sight.',
      shortTermCostAm:
        'ለሦስት ቀናት ያለ ምግብና ውኃ በታላቅ ጭንቀት መቆየት፤ ዘበኞቹ ወዲያውኑ ሊገድሏት እንደሚችሉ እያወቀች ወደ አዳራሹ መግባት።',
      longTermFruitEn:
        'Haman was hanged on his own gallows; the Jews were granted legal authority to defend themselves; the feast of Purim was inaugurated.',
      longTermFruitAm:
        'ሐማ በገዛ ስቅላቱ ላይ ተሰቀለ፤ የአይሁድ ሕዝብ ሙሉ በሙሉ ከጥፋት ዳነ፤ የፉሪም በዓል ለትውልድ መታሰቢያ ሆኖ ተመሠረተ።',
      psychologicalInsightEn:
        'Privilege creates a powerful illusion of safety. Mordecai pierced Esther’s complacency by pointing out that silent complicity never protects anyone in the long run. Purpose must always outweigh comfort.',
      psychologicalInsightAm:
        'ምቾትና ሥልጣን የውሸት የደህንነት ስሜት ይፈጥራሉ፤ መርዶክዮስ “አንቺ ወደ መንግሥት የመጣሽው እንደዚህ ላለው ጊዜ እንደ ሆነ ማን ያውቃል?” በማለት የእውነተኛ ጥሪዋን ዓላማ አስገነዘባት።',
      biblicalAnchorRef: 'Esther 4:14 / አስቴር 4:14',
      biblicalAnchorTextEn:
        '"And who knows whether you have not come to the kingdom for such a time as this?"',
      biblicalAnchorTextAm:
        '“ማን ያውቃል? አንቺ ወደ መንግሥት የመጣሽው እንደዚህ ላለው ጊዜ እንደ ሆነ ማን ያውቃል?”',
      modernLeadershipTakeawayEn:
        'Influence and status are not given for your personal insulation; they are capital meant to be spent defending the defenseless. When institutional corruption strikes, silence is consent; true leaders risk their seat at the table to do what is right.',
      modernLeadershipTakeawayAm:
        'ያለህ ሥልጣን፣ እውቀትና ሀብት ለራስህ ምቾት ብቻ የተሰጠ አይደለም፤ የተበደሉትንና ድምፅ የሌላቸውን ለመታደግ የተሰጠህ አደራ ነው፤ ግፍ ሲፈጸም ዝም ማለት ከተባባሪነት አይተናነስም።'
    }
  },

  // 4. NEHEMIAH AT JERUSALEM (Nehemiah 4 & 5)
  {
    id: 'dilemma-nehemiah-crisis',
    bookNr: 16, // Nehemiah
    chapterStart: 4,
    chapterEnd: 5,
    sceneId: 'act3-scene12',
    titleEn: 'Nehemiah: Hostile External Threat vs. Internal Economic Corruption',
    titleAm: 'ነህምያ፡ የውጭ ጦርነት ሥጋት ወይስ የውስጥ የኢኮኖሚ ብዝበዛ?',
    heroEn: 'Nehemiah, Governor & Master Builder',
    heroAm: 'ነህምያ፥ አገረ ገዢና የግንባታ መሪ',
    category: 'crisis_management',
    categoryLabelEn: 'Crisis Governance & Social Justice',
    categoryLabelAm: 'የቀውስ አስተዳደርና የማኅበረሰብ ፍትሕ',
    scenarioEn:
      'You are leading the rebuilding of Jerusalem’s broken walls. Hostile neighboring governors (Sanballat and Tobiah) have assembled allied troops to launch a surprise slaughter on your workers. Simultaneously, a domestic humanitarian crisis explodes: poor Jewish families cry out that the wealthy Jewish nobles are exploiting the food shortage, charging exorbitant interest, and confiscating their ancestral lands and selling their children into debt-slavery.',
    scenarioAm:
      'የፈረሰውን የኢየሩሳሌም ቅጥር መልሰህ እየገነባህ ነው። የአካባቢው ጠላቶች (ሰንባላጥና ጦቢያ) ሠራዊታቸውን አሰልፈው ሠራተኞችህን በድንገት ለመግደል አቅደዋል። በዚያው ቅጽበት በከተማይቱ ውስጥ ሌላ አሰቃቂ ቀውስ ፈነዳ፡ ድሆች አባቶች መጥተው “ባለጸጎቹ የይሁዳ መኳንንት በረሃቡ ወቅት ልጆቻችንን በዕዳ ወስደው ባሪያ እያደረጓቸው ነው፥ እርሻችንንም ቀሙን” ብለው አለቀሱ።',
    geopoliticalPressureEn:
      'Any split in the wall-building labor force allows foreign invaders to breach the city; yet ignoring the poor means God’s judgment falls on the community.',
    geopoliticalPressureAm:
      'ሥራው ቢቆም ጠላት ከተማይቱን ያፈርሳታል፤ የድሆችን በደል ችላ ካልክ ደግሞ የእግዚአብሔር ፍርድ በማኅበረሰቡ ላይ ይወርዳል።',
    stakeholdersEn: [
      'Nehemiah (Governor accountable to God and King Artaxerxes)',
      'The Builders (Exhausted, terrified of assassination)',
      'The Poor Peasants (Losing children to debt slavery)',
      'The Wealthy Nobles & Creditors (Profiting from crisis inflation)'
    ],
    stakeholdersAm: [
      'ነህምያ (ለእግዚአብሔርና ለፋርስ ንጉሥ ተጠያቂ መሪ)',
      'ሠራተኞቹ (በከባድ ድካምና በጦርነት ፍርሃት ውስጥ ያሉ)',
      'ድሆቹ ቤተሰቦች (ልጆቻቸው በባርነት የተወሰዱባቸው)',
      'ባለጸጎቹ አበዳሪዎች (ከቀውሱ ትርፍ የሚያጋብሱ)'
    ],
    coreDilemmaQuestionEn:
      'Do you focus purely on the military defense, or stop and confront the wealthy elite who fund your city?',
    coreDilemmaQuestionAm:
      'ትኩረትህን በውጭው ጠላት መከላከያ ላይ ብቻ ታደርጋለህ፣ ወይስ ሥራውን አቁመህ ከተማዋን የሚረዱትን ባለጸጎች ትገሥጻለህ?',
    options: [
      {
        id: 'opt-ignore-economy',
        labelEn: 'Suppress the Complaints Until the Wall is Finished',
        labelAm: 'ግንቡ እስኪያልቅ ድረስ የድሆችን ጩኸት ዝም አሰኝ',
        descriptionEn:
          'Tell the poor to endure their suffering for the greater national security priority; keep the wealthy nobles happy so construction continues (Pure Pragmatism).',
        descriptionAm:
          '“አሁን የሀገር ደህንነት ይበልጣል፤ ግንቡ ሲያልቅ ጉዳያችሁን እናየዋለን” ብለህ የድሆችን አቤቱታ ለጊዜው ወደ ጎን ተወው (ጊዜያዊ ስልት)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'The wall might get built, but the community rots from the inside out; divine blessing is forfeited.',
        consequenceSummaryAm:
          'ግንቡ ቢሠራ እንኳ ማኅበረሰቡ ከውስጥ በግፍ ይበሰብሳል፤ የእግዚአብሔርም በረከት ከከተማይቱ ይርቃል።'
      },
      {
        id: 'opt-bifurcated-strategy',
        labelEn: 'Arm the Builders & Ruthlessly Abolish Usury Immediately',
        labelAm: 'ሠራተኞቹን አስታጥቅ፤ ወለድና ብዝበዛን ወዲያውኑ አስቁም',
        descriptionEn:
          'Order workers to build with one hand and hold a spear in the other. Then confront the nobles publicly: demand they cancel all debts, return lands, and restore children (Dual Focus).',
        descriptionAm:
          'ሠራተኞቹ በአንድ እጃቸው መሣሪያ በሌላው እጃቸው ግንብ እንዲገነቡ አድርግ፤ ወዲያውኑ መኳንንቱን ሰብስበህ የድሆችን ዕዳ እንዲሰርዙና መሬታቸውን እንዲመልሱ አስገድድ (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'The wall is completed in record time (52 days). The rich repent and restore the poor; unity and justice empower supernatural speed.',
        consequenceSummaryAm:
          'ቅጥሩ በ52 ቀናት ውስጥ በአስደናቂ ፍጥነት ተጠናቀቀ፤ ባለጸጎቹ ንስሐ ገብተው ለድሆች ገንዘባቸውን መለሱ፤ ማኅበረሰቡ በአንድነት በረታ።'
      },
      {
        id: 'opt-surrender-talks',
        labelEn: 'Halt Construction to Enter Diplomatic Negotiations',
        labelAm: 'ሥራውን አቁመህ ከጠላቶች ጋር ድርድር ጀምር',
        descriptionEn:
          'Send delegates to Sanballat to negotiate a truce and de-escalate tensions (Appeasement).',
        descriptionAm:
          'ጦርነቱን ለማስቀረት ግንባታውን አቁመህ ከሰንባላጥና ከጦቢያ ጋር የሰላም ስምምነት ፈልግ (ተስፋ መቁረጥ)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Sanballat intended to assassinate Nehemiah in the plain of Ono. Compromising project momentum would have ended the restoration.',
        consequenceSummaryAm:
          'ሰንባላጥ ሊገድለው አድብቶ ስለነበር፣ ነህምያ በድርድር ወጥመድ ውስጥ ወድቆ ይገደልና ሥራው ይፈርስ ነበር።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-bifurcated-strategy',
      characterTitleEn: 'Nehemiah armed every builder with a sword and forced nobles to return all usury.',
      characterTitleAm: 'ነህምያ ሠራተኞቹን በሰይፍ አስታጠቀ፤ ባለጸጎቹም የድሆችን ርስትና ወለድ እንዲመልሱ አደረገ።',
      shortTermCostEn:
        'Massive friction with powerful financial donors; workers had to endure 12-hour shifts sleeping in their clothes with weapons beside them.',
      shortTermCostAm:
        'ከሀብታሞቹ መኳንንት ጋር ከባድ ግጭት ተፈጠረ፤ ሠራተኞቹ ልብሳቸውን ሳይቀይሩ መሣሪያቸውን እንደታጠቁ ሌትና ቀን ደከሙ።',
      longTermFruitEn:
        'The wall was finished in just 52 days; the surrounding enemies realized this work was done with the help of God; Jerusalem was secured for centuries.',
      longTermFruitAm:
        'ቅጥሩ በ52 ቀናት ተጠናቀቀ፤ ጠላቶችም ሥራው በእግዚአብሔር እጅ እንደተሠራ ተረድተው ፈሩ፤ ከተማይቱ ለዘመናት አስተማማኝ ምሽግ አገኘች።',
      psychologicalInsightEn:
        'True leaders do not use external crises as an excuse to tolerate internal abuse. You cannot mobilize people to defend a community if that community is exploiting them.',
      psychologicalInsightAm:
        'እውነተኛ መሪ የውጭ ጠላትን ምክንያት በማድረግ በውስጥ ያለውን ግፍና ብዝበዛ ቸል አይልም፤ ሕዝቡ በውስጡ ፍትሕና ፍቅር ሲያይ ብቻ ነው ለአገሩ ሕይወቱን ሰጥቶ የሚዋጋው።',
      biblicalAnchorRef: 'Nehemiah 4:17–18 / ነህምያ 4:17–18',
      biblicalAnchorTextEn:
        '"Those who carried burdens were loaded in such a way that each labored on the work with one hand and held his weapon with the other."',
      biblicalAnchorTextAm:
        '“ሸክም ተሸካሚዎች በአንድ እጃቸው ይሠሩ ነበር፥ በሌላውም እጃቸው መሣሪያቸውን ይዘው ነበር።”',
      modernLeadershipTakeawayEn:
        'Great project managers manage both external competition and internal workplace culture simultaneously. Defending your organization from market threats while permitting toxic internal exploitation is fatal; fix the internal injustice first to unleash unstoppable team momentum.',
      modernLeadershipTakeawayAm:
        'ታላቅ መሪ የውጭ ተግዳሮቶችን ሲጋፈጥ የውስጥ ቡድኑን ፍትሕና ክብር እኩል ይጠብቃል፤ የውስጥ በደልና ብዝበዛ ያለበት ተቋም የቱንም ያህል ጥረት ቢያደርግ ውድቀቱ አይቀሬ ነው፤ ፍትሕን አስፍን ድልም ያንተ ይሆናል።'
    }
  },

  // 5. SOLOMON AND THE TWO MOTHERS (1 Kings 3)
  {
    id: 'dilemma-solomon-discernment',
    bookNr: 11, // 1 Kings
    chapterStart: 3,
    chapterEnd: 3,
    sceneId: 'act3-scene6',
    titleEn: 'Solomon’s Court: The Stolen Child & Forensic Psychology',
    titleAm: 'የሰሎሞን ችሎት፡ የተሰረቀው ሕፃንና እውነተኛዋ እናት',
    heroEn: 'King Solomon',
    heroAm: 'ጠቢቡ ሰሎሞን',
    category: 'justice',
    categoryLabelEn: 'Discerning Justice & Behavioral Testing',
    categoryLabelAm: 'ጥልቅ ማስተዋልና እውነተኛ ፍርድ',
    scenarioEn:
      'Two prostitutes live alone in one house. Each gave birth to a baby boy within three days. One infant dies during the night because the mother suffocated him in sleep. The mother of the dead child secretly switches the corpses while the other slept. In the morning, both women appear before the royal throne claiming the living child as their own. There are no witnesses, no DNA tests, and no written evidence. Both scream that the other is lying.',
    scenarioAm:
      'ሁለት አመንዝራ ሴቶች በአንድ ቤት ውስጥ ይኖራሉ። በሦስት ቀናት ልዩነት ሁለቱም ወንድ ልጆችን ወለዱ። አንደኛዋ ሴት በሌሊት ተኝታ ሳለች ልጇን ታንቃ ገደለችው። ሞቱን ባየች ጊዜ የሞተውን ልጅ በእንቅልፍ ላይ ባለው እናት እቅፍ አድርጋ፣ ሕያውን ልጅ ወስዳ ደረቷ ላይ አደረገች። ማለዳ ላይ ሁለቱም በሰሎሞን ችሎት ቆመው “ሕያው ልጄ የእኔ ነው” እያሉ ይከራከራሉ። ምንም ምስክር የለም፣ ሁለቱም በእኩል ጩኸት ይሟገታሉ።',
    geopoliticalPressureEn:
      'The entire nation of Israel has just watched young Solomon ascend the throne after David; this is his first public supreme court trial to prove whether God gave him wisdom.',
    geopoliticalPressureAm:
      'ወጣቱ ሰሎሞን በዳዊት እግር እንደነገሠ የተካሄደ የመጀመሪያው ታላቅ የፍርድ ችሎት፤ ሕዝቡ ሁሉ ንጉሡ በእውነት መለኮታዊ ጥበብ እንዳለው ለማየት በጉጉት የሚጠብቅበት ቅጽበት።',
    stakeholdersEn: [
      'The Living Infant (Destiny of an innocent life)',
      'The Real Mother (Agonizing love facing loss)',
      'The False Mother (Bitter grief and envious spite)',
      'The Nation of Israel (Testing the King’s judicial capability)'
    ],
    stakeholdersAm: [
      'ሕያው ሕፃን (የንጹሑ ሕፃን ሕይወትና ዕጣ ፈንታ)',
      'እውነተኛዋ እናት (ልቧ በጭንቀትና በፍቅር የተቃጠለች)',
      'የሞተባት ሴት (በቅናትና በኀዘን የተደነቆረች)',
      'የእስራኤል ሕዝብ (የንጉሡን የፍርድ ጥበብ የሚመዝኑ)'
    ],
    coreDilemmaQuestionEn:
      'Two mothers claim one baby with identical testimony. How do you uncover the truth without evidence?',
    coreDilemmaQuestionAm:
      'ምንም ዓይነት የውጭ ማስረጃ በሌለበት ሁኔታ የእውነተኛዋን እናት ማንነት እንዴት ታረጋግጣለህ?',
    options: [
      {
        id: 'opt-flip-coin',
        labelEn: 'Divide Assets or Award Custody to the Accuser',
        labelAm: 'በዕጣ ወስን ወይም የመጀመሪያዋን ከሳሽ እመን',
        descriptionEn:
          'Make an arbitrary procedural ruling based on who filed the court complaint first (Bureaucratic Proceduralism).',
        descriptionAm:
          'አስቀድማ ለከሰሰችው ወስን ወይም የፍርድ ሂደቱን በዘፈቀደ አጠናቅቅ (ደካማ ዳኝነት)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'A 50% chance of handing a baby to a lying killer; undermines the integrity of royal justice.',
        consequenceSummaryAm:
          'ሕፃኑን ለገዳይዋ ሴት የመስጠት 50% አደጋ ይፈጠራል፤ የንጉሡ የፍርድ ክብርም ይወድቃል።'
      },
      {
        id: 'opt-sword-test',
        labelEn: 'Command a Sword: "Cut the Living Child in Two!"',
        labelAm: 'ሰይፍ አምጡ፡ “ሕፃኑን ለሁለት ቆርጣችሁ አካፍሏቸው!”',
        descriptionEn:
          'Create a radical behavioral stress test: threaten the life of the child to trigger instinctive maternal self-sacrifice vs. envious spite (Psychological Shock).',
        descriptionAm:
          'ሰይፍ እንዲመጣ በማዘዝ ሕፃኑ እንዲቆረጥ አዋጅ፤ እውነተኛዋ እናት ልጇ እንዳይሞት ራሷን አሳልፋ እንድትሰጥ፣ ሐሰተኛዋ ደግሞ በቅናት እንድትስማማ የሚያደርግ ሥነ-ልቦናዊ ፈተና (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'The real mother cries: "Give her the baby, do not kill him!" The false mother says: "Neither mine nor yours; divide him!" Solomon instantly identifies the true mother.',
        consequenceSummaryAm:
          'እውነተኛዋ እናት “እባክህ ጌታዬ ሕፃኑን ለእርስዋ ስጣት እንጂ አትግደለው” ብላ አለቀሰች፤ ሌላኛዋ ግን “ለእኔም ለአንቺም አይሁን ቍረጡት” አለች፤ ሰሎሞንም ወዲያውኑ እውነተኛዋን እናት ለይቶ አወቀ።'
      },
      {
        id: 'opt-ward-orphanage',
        labelEn: 'Place the Child in Royal Wardship / Foster Care',
        labelAm: 'ሕፃኑን በቤተ መንግሥት አሳዳጊ ቤት አስቀምጠው',
        descriptionEn:
          'Deprive both women of the child and raise him as a ward of the state to avoid making a wrong decision (Indecision).',
        descriptionAm:
          'ስህተት ላለመሥራት ብለህ ሕፃኑን ከሁለቱም ነጥቀህ በንጉሡ ቤት እንዲያድግ አድርግ (ውሳኔ ማጣት)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Punishes the innocent mother and avoids the judicial duty of seeking the truth.',
        consequenceSummaryAm:
          'እውነተኛዋን እናት በግፍ ያስለቅሳል፤ ዳኛው እውነትን የማውጣት ኃላፊነቱን ከመወጣት ይሸሻል።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-sword-test',
      characterTitleEn: 'Solomon ordered: "Give the living child to the first woman... she is his mother."',
      characterTitleAm: 'ሰሎሞን “ለእርስዋ ስጧት፥ እናቱ እርሷ ናትና አትግደሉት” ብሎ ፈረደ።',
      shortTermCostEn:
        'A moment of sheer terror in the courtroom as a royal guard raised a naked blade over an infant.',
      shortTermCostAm:
        'ወታደሩ በሕፃኑ ላይ ሰይፉን ሲመዝ በችሎቱ አዳራሽ የነበረው አስደንጋጭ ድንጋጤ።',
      longTermFruitEn:
        'All Israel heard of the judgment and they feared the king, because they saw that the wisdom of God was in him to administer justice.',
      longTermFruitAm:
        'መላው እስራኤል ይህን ፍርድ ሰምተው ንጉሡን አከበሩት፤ የእግዚአብሔር ጥበብ ፍርድን ለማድረግ በእርሱ ውስጥ እንዳለች ተረዱ።',
      psychologicalInsightEn:
        'When competing claims appear identical on paper, create a situation where sacrifice is required. True love is always willing to lose self-interest for the beloved’s flourishing, while malice cares only about leveling down.',
      psychologicalInsightAm:
        'ክርክሮች እኩል በሚመስሉበት ጊዜ፣ እውነተኛውን ፍቅር ለመለየት የመስዋዕትነት ፈተና ማምጣት ወሳኝ ነው፤ እውነተኛ ፍቅር ለተወዳጁ ደህንነት ሲል ራሱን ዝቅ ያደርጋል፤ ቅናት ግን ሁሉም እንዲያጣ ይፈልጋል።',
      biblicalAnchorRef: '1 Kings 3:28 / 1 ነገሥት 3:28',
      biblicalAnchorTextEn:
        '"And all Israel heard of the judgment that the king had rendered, and they stood in awe of the king, because they perceived that the wisdom of God was in him to do justice."',
      biblicalAnchorTextAm:
        '“እስራኤልም ሁሉ ንጉሡ የፈረደውን ፍርድ ሰሙ፤ ፍርድንም ለማድረግ የእግዚአብሔር ጥበብ በውስጡ እንደ ነበረች አይተዋልና ንጉሡን ፈሩት።”',
      modernLeadershipTakeawayEn:
        'When resolving toxic organizational disputes where both sides present polished arguments, look beneath the data to incentives and self-sacrifice. The person truly devoted to the mission will prioritize the company’s life over their own ego; the toxic party will happily see the project split or killed so long as the other side doesn’t win.',
      modernLeadershipTakeawayAm:
        'በተቋም ውስጥ የከረረ ግጭት ሲፈጠር የተናጋሪዎችን ውበት ሳይሆን የልብ ዝንባሌያቸውን መርምር፤ ለተቋሙ ዓላማ በእውነት የሚተጋ ሰው ለሥራው ስኬት ሲል ክብሩን ዝቅ ያደርጋል፤ ተንኮለኛው ግን እርሱ ካላሸነፈ ድርጅቱ ቢፈርስ አይገደውም።'
    }
  },

  // 6. DANIEL IN BABYLON (Daniel 1)
  {
    id: 'dilemma-daniel-assimilation',
    bookNr: 27, // Daniel
    chapterStart: 1,
    chapterEnd: 1,
    sceneId: 'act3-scene11',
    titleEn: 'Daniel in Babylon: Imperial Assimilation vs. Consecrated Identity',
    titleAm: 'ዳንኤል በባቢሎን ቤተ መንግሥት፡ የግዛት ውህደት ወይስ የተለየ ማንነት?',
    heroEn: 'Daniel (Belteshazzar)',
    heroAm: 'ነቢዩ ዳንኤል (ብልጣሶር)',
    category: 'ethics',
    categoryLabelEn: 'Cultural Integrity & Principled Negotiation',
    categoryLabelAm: 'የባህል ውህደት ፈተናና መርህን የማስከበር ጥበብ',
    scenarioEn:
      'After the siege of Jerusalem, King Nebuchadnezzar captures the finest royal youth of Judah to be re-educated in the Babylonian court for three years. You are given Babylonian names, taught their language and literature, and assigned daily rations of the King’s rich meat and royal wine—food sacrificed to Babylonian idols and violating Levitical law. If you openly defy the royal diet, the chief official fears the king will execute him for your weakened appearance.',
    scenarioAm:
      'ባቢሎናውያን ኢየሩሳሌምን ከከበቡ በኋላ፣ ንጉሥ ናቡከደነፆር መልከ መልካም የሆኑትን የይሁዳ ምርኮኛ ወጣቶች በቤተ መንግሥት ለሦስት ዓመታት እንዲማሩ መረጠ። የባቢሎን ስም ተሰጣችሁ፤ ትምህርታቸውንም እንድትማሩ ተወሰነ። ነገር ግን ከጣዖት ከተሠዋውና ከረከሰው ከንጉሡ ማዕድና የወይን ጠጅ እንድትመገቡ ታዘዛችሁ። እምቢ ካላችሁ የጃንደረቦቹ አለቃ “መልካችሁ ከሌሎች ወጣቶች ከሳስቶ ንጉሡ ራሴን እንዳይቀስፈኝ እፈራለሁ” አላችሁ።',
    geopoliticalPressureEn:
      'Nebuchadnezzar is an absolute autocratic tyrant who executes dissenters without trial; Babylon’s cultural re-education is total and psychological.',
    geopoliticalPressureAm:
      'ናቡከደነፆር የሚቃወሙትን ወዲያውኑ የሚቀስፍ ጨካኝ አምባገነን ነው፤ የባቢሎን የባህል ውህደት ፕሮግራም ማንነትን ፈጽሞ ለመደምሰስ የተዘጋጀ ነበር።',
    stakeholdersEn: [
      'Daniel & His 3 Companions (Conscience & Jewish identity)',
      'Ashpenaz / The Chief Steward (Risking his head if captives fail)',
      'King Nebuchadnezzar (Demands total cultural conformity)'
    ],
    stakeholdersAm: [
      'ዳንኤልና ሦስቱ ጓደኞቹ (ሕሊናቸውና የእግዚአብሔር ቃል)',
      'የጃንደረቦቹ አለቃ (ወጣቶቹ ቢከሱ አንገቱ በሰይፍ የሚቀላ)',
      'ንጉሥ ናቡከደነፆር (ፍጹም ተገዥነትን የሚሻ ንጉሥ)'
    ],
    coreDilemmaQuestionEn:
      'Do you quietly eat the royal food to survive and advance, loudly stage a hunger strike, or negotiate a low-risk trial period?',
    coreDilemmaQuestionAm:
      'ሕይወትህንና እድገትህን ለማስጠበቅ የንጉሡን ምግብ ትበላለህ፣ ወይስ ረብሻ በማስነሳት ትቃወማለህ፣ ወይስ ጥበብ የተሞላበት የሙከራ ጊዜ ትጠይቃለህ?',
    options: [
      {
        id: 'opt-eat-quietly',
        labelEn: 'Eat the Royal Food to Keep Peace and Rise in Rank',
        labelAm: 'የንጉሡን ምግብ ብላ፤ ራስህን ሳታጋልጥ በቤተ መንግሥት ተደላደል',
        descriptionEn:
          'Rationalize that captive circumstances excuse ritual law; gain the king’s favor to preserve your life and security (Pragmatic Assimilation).',
        descriptionAm:
          '“ምርኮኛ ነን፤ አሁን ሌላ አማራጭ የለንም” በማለት ሕሊናህን አሳምነህ ከማዕዱ ብላና በባቢሎን ሥርዓት ውስጥ ተዋሐድ (የዓለም መንገድ)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Loss of covenant fidelity; gradual spiritual compromise leading to complete loss of unique divine destiny in Babylon.',
        consequenceSummaryAm:
          'ከእግዚአብሔር ጋር ያለው ኪዳን ይፈርሳል፤ ማንነት ይጠፋል፤ ዳንኤልም የእግዚአብሔር ድንቅ ምስክር የመሆን ዕድሉን ያጣ ነበር።'
      },
      {
        id: 'opt-rebel-strike',
        labelEn: 'Publicly Denounce the King and Refuse All Cooperation',
        labelAm: 'የንጉሡን ማዕድ በግልጽ አውግዘህ የረሃብ አድማ አድርግ',
        descriptionEn:
          'Loudly declare Babylonian food unclean, staging an open confrontation with guards (Aggressive Martyrdom).',
        descriptionAm:
          'የባቢሎን ምግብ ርኩስ ነው ብለህ ጮክ ብለህ ተቃወም፤ በጠባቂዎቹ ፊት አመጽ አስነሣ (ያልተመዘነ ግልፍተኛነት)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'The chief steward would have felt cornered and executed the captives immediately to protect his own skin.',
        consequenceSummaryAm:
          'የጃንደረቦቹ አለቃ ለገዛ ራሱ ደህንነት ሲል ወጣቶቹን ወዲያውኑ ያስገድላቸው ነበር።'
      },
      {
        id: 'opt-pilot-trial',
        labelEn: 'Propose a 10-Day Controlled Pilot Test of Vegetables & Water',
        labelAm: 'የ10 ቀናት የአታክልትና ውኃ የሙከራ ጊዜ በዘዴ ጠይቅ',
        descriptionEn:
          'Show deep empathy for the steward’s dilemma; ask for an empirical 10-day pilot test to prove God will honor health without compromising law (Principled Diplomacy).',
        descriptionAm:
          'ለጃንደረባው ፍርሃት አሳቢነትን በማሳየት፣ የ10 ቀናት የሙከራ ጊዜ ጠይቅ፤ “ከ10 ቀን በኋላ መልካችንን ከሌሎቹ ጋር መዝንና እንደ አየኸው አድርግ” በለው (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'After 10 days they appeared healthier than all the others; God gave them knowledge, skill, and wisdom 10 times greater than all magicians in Babylon.',
        consequenceSummaryAm:
          'ከ10 ቀናት በኋላ መልካቸው ከሌሎቹ እጅግ በልጦ ታየ፤ እግዚአብሔርም በባቢሎን ካሉ ጠቢባን ይልቅ አሥር እጥፍ የሚበልጥ ጥበብና ማስተዋልን ሰጣቸው።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-pilot-trial',
      characterTitleEn: 'Daniel purposed in his heart not to defile himself, and negotiated a wise 10-day test.',
      characterTitleAm: 'ዳንኤል በንጉሡ ማዕድ እንዳይረክስ በልቡ አሰበ፤ በታላቅ ጥበብም የ10 ቀን የሙከራ መንገድ አቀረበ።',
      shortTermCostEn:
        'Ate plain vegetables and drank water for three years instead of lavish royal delicacies; carried daily tension under imperial scrutiny.',
      shortTermCostAm:
        'ለሦስት ዓመታት የንጉሡን የቅንጦት ምግብ ትቶ ጥራጥሬና ውኃ ብቻ መመገብ፤ በማንኛውም ሰዓት ሊመጣ የሚችልን የሞት አደጋ ተቋቁሞ መቆየት።',
      longTermFruitEn:
        'Daniel survived four imperial administrations (Babylonian & Persian); became prime minister and recorded the greatest apocalyptic visions of the Old Testament.',
      longTermFruitAm:
        'ዳንኤል አራት ግዙፍ መንግሥታትን (ባቢሎን፣ ሜዶን፣ ፋርስ) አሳልፎ በጠቅላይ ሚኒስትርነት አገለገለ፤ ታላላቅ የትንቢት ራእዮችንም ተቀበለ።',
      psychologicalInsightEn:
        'Principled conviction without diplomatic empathy leads to unnecessary martyrdom. Daniel respected his supervisor’s genuine fears and offered a low-risk, measurable pilot program that removed fear for both sides.',
      psychologicalInsightAm:
        'ያለ ጥበብ የሚደረግ ግትርነት ሰውን ያለጊዜው ለአደጋ ይዳርጋል፤ ዳንኤል ግን የበላይ ተመልካቹን ፍርሃት ተረድቶ፣ ፍርሃቱን የሚያስወግድ ተግባራዊ የሙከራ አማራጭ አቀረበ።',
      biblicalAnchorRef: 'Daniel 1:8 / ዳንኤል 1:8',
      biblicalAnchorTextEn:
        '"But Daniel resolved that he would not defile himself with the king’s food, or with the wine that he drank."',
      biblicalAnchorTextAm:
        '“ዳንኤልም በንጉሡ ማዕድና በሚጠጣው የወይን ጠጅ እንዳይረክስ በልቡ አሰበ፤ እንዳይረክስም የጃንደረቦቹን አለቃ ለመነ።”',
      modernLeadershipTakeawayEn:
        'In corporate or secular environments hostile to your core values, do not compromise your conscience, but do not attack your peers either. Offer evidence-based, low-risk pilot solutions that solve the team’s problem while safeguarding your core integrity.',
      modernLeadershipTakeawayAm:
        'የሥራ ቦታህ ወይም ማኅበረሰብህ እሴትህን የሚቃወም ቢሆን እንኳ፣ መርሕህን አታጉድፍ፤ ሰዎችንም አትዝለፍ። የሁሉንም ሰው ችግር የሚፈታና እምነትህን የሚያስጠብቅ ጥበባዊ የሙከራ መፍትሔ አቅርብ።'
    }
  },

  // 7. MOSES AT THE RED SEA (Exodus 14)
  {
    id: 'dilemma-moses-redsea',
    bookNr: 2, // Exodus
    chapterStart: 14,
    chapterEnd: 14,
    sceneId: 'act2-scene5',
    titleEn: 'Moses at the Red Sea: Panicked Mutiny vs. Stand-Still Command',
    titleAm: 'ሙሴ በኤርትራ ባሕር ፊት፡ የሕዝቡ ዓመፅ ወይስ የእምነት ፀጥታ?',
    heroEn: 'Moses, Deliverer & Leader',
    heroAm: 'ሙሴ፥ መሪና ነቢይ',
    category: 'crisis_management',
    categoryLabelEn: 'High-Stakes Crisis Leadership',
    categoryLabelAm: 'በከፍተኛ ቀውስ ወቅት የሚሰጥ ውሳኔና አመራር',
    scenarioEn:
      'Two million unarmed Israelite refugees are trapped. Before you lies the impassable Red Sea; rugged mountains flank the left and right; behind you, the rumbling war-chariots of Pharaoh’s elite armored cavalry are charging to annihilate you. The people descend into hysterical panic and terror, shrieking: "Was it because there were no graves in Egypt that you took us away to die in the desert? It would have been better to serve the Egyptians than die here!"',
    scenarioAm:
      'ሁለት ሚሊዮን የሚሆኑ ያልታጠቁ የእስራኤል ሕዝብ በወጥመድ ውስጥ ገብተዋል። ከፊታቸው የማይሻገር የቀይ ባሕር ማዕበል አለ፤ በግራና በቀኝ ቋጥኝ ተራሮች ከበዋቸዋል፤ ከኋላቸው ደግሞ የፈርዖን 600 ምርጥ የጦር ሠረገላዎች ሊደመስሷቸው እያጓሩ እየመጡ ነው። ሕዝቡ በፍርሃት ተውጦ በለቅሶ “በግብፅ መቃብር ስላልነበረ ነውን በምድረ በዳ እንድንሞት ያወጣኸን? በምድረ በዳ ከምንሞት ለግብፃውያን ብንገዛ ይሻለን ነበር!” እያሉ በሙሴ ላይ አመጹ።',
    geopoliticalPressureEn:
      'Pharaoh’s elite military technology is unmatched; one military clash means total slaughter or re-enslavement within hours.',
    geopoliticalPressureAm:
      'የፈርዖን የጦር ሠረገላዎች በወቅቱ የነበረው ከፍተኛው የጦር ኃይል ነው፤ ጦርነት ቢገጠም ያልታጠቀው ሕዝብ በጥቂት ሰዓታት ውስጥ ያልቃል ወይም ዳግም ባሪያ ይሆናል።',
    stakeholdersEn: [
      'Moses (The leader whose instructions led them to this exact spot)',
      'The Israelite Multitude (Panicked, demoralized, mutinous)',
      'Pharaoh & The Egyptian Army (Seeking vengeance and restoration of slave labor)'
    ],
    stakeholdersAm: [
      'ሙሴ (ሕዝቡን ወደዚህ ወጥመድ የመራው መሪ)',
      'የእስራኤል ሕዝብ (ተስፋ የቆረጡ፣ በፍርሃት የሚያለቅሱ)',
      'ፈርዖንና የግብፅ ሠራዊት (የቀደመ የበላይነታቸውን ለማስመለስ የሚገሰግሱ)'
    ],
    coreDilemmaQuestionEn:
      'When trapped between an impossible sea and an advancing army while your team revolts, what is your executive command?',
    coreDilemmaQuestionAm:
      'ከፊት ባሕር ከኋላ ጠላት ከበቦህ መላው ሕዝብ ሊወግርህ ሲነሣ፣ የምትሰጠው አመራርና ውሳኔ ምንድን ነው?',
    options: [
      {
        id: 'opt-surrender-slaves',
        labelEn: 'Wave White Flag and Negotiate Re-Enslavement Terms',
        labelAm: 'ነጭ ባንዲራ አውለብልበህ በሕይወት ለመትረፍ እጅ ስጥ',
        descriptionEn:
          'Send an envoy to Pharaoh agreeing to return to the brick kilns of Egypt in exchange for mercy and saving civilian lives (Capitulation).',
        descriptionAm:
          '“ሕዝቡ እንዳያልቅ እጃችንን ሰጥተን ወደ ባርነት እንመለስ” በማለት ከፈርዖን ጋር የሰላም ድርድር ጀምር (የተሸናፊነት ምርጫ)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Israel would have spent generations in permanent humiliation; the covenant promises to Abraham would have been aborted.',
        consequenceSummaryAm:
          'ሕዝቡ ለዘመናት ወደ ባሰ መከራና ባርነት ይመለስ ነበር፤ ለአብርሃም የተገባውም የተስፋ ኪዳን ይሰናከል ነበር።'
      },
      {
        id: 'opt-pitched-fight',
        labelEn: 'Arm Every Man with Sticks and Stones for a Desperate Last Stand',
        labelAm: 'ሕዝቡ በእንጨትና በድንጋይ እስከ መጨረሻው የሞት ሽረት ጦርነት እንዲያደርግ እዘዝ',
        descriptionEn:
          'Order civilians into defensive combat ranks to die fighting rather than surrender (Suicide Defiance).',
        descriptionAm:
          '“በክብር እንሙት!” ብለህ ያልታጠቀውን ሕዝብ ከሠረገላ ሠራዊት ጋር ፊት ለፊት አጋጭ (ስሜታዊ ራስን ማጥፋት)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Annihilation of entire generations of Hebrew families by iron-armored cavalry within thirty minutes.',
        consequenceSummaryAm:
          'በጥቂት ደቂቃዎች ውስጥ ሕዝቡ በሙሉ በግብፃውያን የጦር ሠረገላዎች ተረግጦ ያልቅ ነበር።'
      },
      {
        id: 'opt-stand-still-forward',
        labelEn: '"Fear Not, Stand Still... Lift Up Your Staff & Go Forward!"',
        labelAm: '“አትፍሩ፥ ቁሙና የእግዚአብሔርን ማዳን እዩ... በትህን አንሣና ወደ ፊት ሂዱ!”',
        descriptionEn:
          'Absorb the panic with supernatural serenity; anchor the people’s eyes on God; stretch out the staff over the sea and march straight into the waters (Transcendental Courage).',
        descriptionAm:
          'የሕዝቡን ጭንቀት በረጋ መንፈስ አረጋጋ፤ ዓይናቸውን ወደ እግዚአብሔር እንዲያነሡ አድርግ፤ በትሩን ወደ ባሕሩ ዘርግተህ ሕዝቡ ወደ ፊት እንዲገሰግስ እዘዝ (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'The waters parted; Israel crossed on dry land; the pursuing Egyptian army was swallowed by the sea; God’s glory was revealed to the whole world.',
        consequenceSummaryAm:
          'ባሕሩ ለሁለት ተከፈለ፤ ሕዝቡ በደረቅ ምድር ተሻገረ፤ አሳዳጆቹ በባሕር ውስጥ ሰጠሙ፤ የእግዚአብሔርም ክብር በዓለም ሁሉ ታወቀ።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-stand-still-forward',
      characterTitleEn: 'Moses proclaimed: "Do not be afraid. Stand firm and see the salvation of the Lord... Go forward!"',
      characterTitleAm: 'ሙሴ “አትፍሩ፥ ዛሬ የምታዩአቸውን ግብፃውያንን ለዘላለም አታዩአቸውምና ፀጥ ብላችሁ ቁሙ” በማለት ድልን አወጀ።',
      shortTermCostEn:
        'Carried the staggering emotional burden of a mutinous, wailing multitude while facing imminent cavalry slaughter without earthly reinforcements.',
      shortTermCostAm:
        'ሁለት ሚሊዮን የሚያለቅሱና ሊወግሩት የተዘጋጁ ሰዎችን ጩኸት በብቸኝነት መቋቋም፤ ከፊቱ ሞት ከኋላው ሞት እያየ በእምነት መቆም።',
      longTermFruitEn:
        'The birth of Israel as a free covenant nation; the breaking of Egypt’s imperial power; the Song of Moses sung for millennia.',
      longTermFruitAm:
        'እስራኤል ከባርነት ነፃ የወጣች ሉዓላዊት የኪዳን ሕዝብ ሆነች፤ የግብፅ የጦር አቅም ተሰበረ፤ የሙሴ የምስጋና መዝሙር ለዘመናት ተዘመረ።',
      psychologicalInsightEn:
        'Under acute life-threatening stress, mobs regress into panic, longing for the familiar certainty of slavery over the risk of freedom. The true leader’s job is emotional regulation: absorb the panic, declare vision, and convert paralysis into momentum.',
      psychologicalInsightAm:
        'በከባድ ድንጋጤ ወቅት ሰዎች ነፃነትን ትተው የቀደመውን ባርነታቸውን እንደ አማራጭ ይመኛሉ፤ የእውነተኛ መሪ ዋነኛ ባሕርይ የሕዝቡን ፍርሃት በረጋ መንፈስ ማርገብና ወደ ፊት እንዲራመዱ ተስፋ መስጠት ነው።',
      biblicalAnchorRef: 'Exodus 14:13–14 / ዘጸአት 14:13–14',
      biblicalAnchorTextEn:
        '"And Moses said to the people, “Fear not, stand firm, and see the salvation of the Lord, which he will work for you today... The Lord will fight for you, and you have only to be silent.”"',
      biblicalAnchorTextAm:
        '“ሙሴም ለሕዝቡ፡- አትፍሩ፥ ዛሬ የምታዩአቸውን ግብፃውያንን ለዘላለም አታዩአቸውምና ቁሙ፥ ዛሬ ለእናንተ የሚያደርጋትን የእግዚአብሔርን ማዳን እዩ። እግዚአብሔር ስለ እናንተ ይዋጋል፥ እናንተም ዝም ትላላችሁ አላቸው።”',
      modernLeadershipTakeawayEn:
        'When your enterprise hits a catastrophic bottleneck with stakeholders in total revolt, do not panic-pivot into toxic compromises or lash out in anger. Silence the hysterical chatter, maintain non-anxious presence, and command the organization to step boldly into the untried path ahead.',
      modernLeadershipTakeawayAm:
        'ድርጅትህ ወይም ቤተሰብህ ከባድ የቀውስ አጣብቂኝ ውስጥ ሲገባ በፍርሃት ተነሥተህ አፍራሽ ውሳኔዎችን አትውሰድ፤ አትደናገጥ፤ መረጋጋትን ፍጠርና ወደ ፊት መራመድህን ቀጥል።'
    }
  },

  // 8. PETER AND JOHN BEFORE THE SANHEDRIN (Acts 4 & 5)
  {
    id: 'dilemma-apostles-sanhedrin',
    bookNr: 44, // Acts
    chapterStart: 4,
    chapterEnd: 5,
    sceneId: 'act5-scene2',
    titleEn: 'Peter & The Sanhedrin: Institutional Silencing vs. Supreme Authority',
    titleAm: 'ጴጥሮስ በሸንጎው ፊት፡ የሥልጣን ማስፈራሪያ ወይስ የእውነት ምስክርነት?',
    heroEn: 'Peter & John, Galilean Apostles',
    heroAm: 'ሐዋርያት ጴጥሮስና ዮሐንስ',
    category: 'courage',
    categoryLabelEn: 'Principled Civil Disobedience',
    categoryLabelAm: 'መርሕን ማስከበርና ለመለኮታዊ እውነት መቆም',
    scenarioEn:
      'After healing the lame man at the Temple Gate Beautiful, you are arrested and thrown into overnight custody. In the morning, you stand before the Supreme Religious Council (Caiaphas, Annas, and the high priestly dynasty)—the same body that orchestrated the crucifixion of Jesus weeks earlier. They threaten you with severe judicial flogging, confiscation of goods, and imprisonment, commanding: "Do not speak or teach at all in the name of Jesus!"',
    scenarioAm:
      'በቤተ መቅደሱ ደጅ ሽባውን ሰው ከፈወሳችሁ በኋላ፣ በሌሊት ታስራችሁ አደራችሁ። በማግስቱ በታላቁ የሃይማኖት ሸንጎ (ሐና፣ ቀያፋና የካህናቱ አለቆች) ፊት ቀረባችሁ—ኢየሱስን ለስቅለት አሳልፈው በሰጡት ዳኞች መሐል። ሸንጎው ገርፎ ሊያስራችሁ እየዛተ “ከእንግዲህ ወዲህ በዚህ ስም ለማንም ሰው እንዳትናገሩና እንዳታስተምሩ” ብሎ በጥብቅ አዘዛችሁ።',
    geopoliticalPressureEn:
      'The Sanhedrin commands temple police, capital authority under Roman delegation, and total judicial supremacy in Judea.',
    geopoliticalPressureAm:
      'ሸንጎው የቤተ መቅደስ ፖሊስና ከፍተኛ የሕግ ሥልጣን ያለው ሲሆን፣ ትእዛዙን ያልጠበቀ በግዞትና በሞት ይቀጣ ነበር።',
    stakeholdersEn: [
      'Peter & John (Untrained Galilean fishermen with a divine mandate)',
      'The High Priest & Sadducees (Desperate to extinguish the resurrection message)',
      'The Nascent Church (Waiting anxiously in prayer for their leaders)'
    ],
    stakeholdersAm: [
      'ጴጥሮስና ዮሐንስ (ተራ ዓሣ አጥማጆች የነበሩ የእውነት ምስክሮች)',
      'ቀያፋና የሸንጎው አባላት (የትንሣኤው ዜና ከተማይቱን እንዳያናውጥ የሚፈሩ)',
      'የጥንቷ ቤተክርስቲያን (በጸሎት መሪዎቿን የምትጠባበቅ)'
    ],
    coreDilemmaQuestionEn:
      'Do you sign the gag order to walk free, go into violent underground rebellion, or announce nonviolent obedience to God?',
    coreDilemmaQuestionAm:
      'ነፃ ለመውጣት ዝምታን መርጠህ ትፈራረማለህ፣ ወይስ በድብቅ ጦርነት ትጀምራለህ፣ ወይስ በእግዚአብሔር ፊት ለእውነት መቆምህን በይፋ ትናገራለህ?',
    options: [
      {
        id: 'opt-sign-gag',
        labelEn: 'Accept the Gag Order to Avoid Prison and Flogging',
        labelAm: 'ከእስራትና ከግርፋት ለመዳን “ዝም እንላለን” ብለህ ተስማማ',
        descriptionEn:
          'Promise the council you will cease public speaking; whisper teachings in private to survive (Pragmatic Retreat).',
        descriptionAm:
          'የሸንጎውን ማስጠንቀቂያ ተቀብለህ በግልጽ ማስተማርን አቁም፤ በድብቅ ብቻ ለቅርብ ሰዎች ተናገር (የፍርሃት ማፈግፈግ)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'The early church would have withered into a timid, forgotten Jewish sect suppressed by fear.',
        consequenceSummaryAm:
          'የጥንቷ ቤተክርስቲያን ድምጿ ታፍኖ በፍርሃት የምትሸማቀቅ ትንሽ ቡድን ሆና ትቀር ነበር።'
      },
      {
        id: 'opt-violent-insurgency',
        labelEn: 'Recruit Temple Crowds for an Armed Popular Revolt',
        labelAm: 'የተሰበሰበውን ሕዝብ በማነሣሣት በሸንጎው ላይ አመጽ አስነሣ',
        descriptionEn:
          'Leverage your popularity among the 5,000 believers to overthrow the temple guard by force (Zealot Insurgency).',
        descriptionAm:
          'ሕዝቡ ስለወደዳችሁ ተጠቅማችሁ ኃይልን በኃይል ለመመከት አመጽ አስነሡ (የፖለቲካ ግጭት)።',
        isHistoricalChoice: false,
        consequenceSummaryEn:
          'Roman legionnaires from the Antonia Fortress would have intervened with brutal military massacre.',
        consequenceSummaryAm:
          'የሮም ሠራዊት ወዲያውኑ ጣልቃ ገብቶ በሺዎች የሚቆጠሩ ሰዎችን በደም ያጥለቀልቅ ነበር።'
      },
      {
        id: 'opt-respectful-defiance',
        labelEn: '"Judge for yourselves whether it is right to obey you rather than God!"',
        labelAm: '“ከእግዚአብሔር ይልቅ እናንተን እንሰማ ዘንድ በእግዚአብሔር ፊት የሚገባ እንደ ሆነ እናንተው ፍረዱ!”',
        descriptionEn:
          'Look the high priests in the eye with profound respect yet unyielding resolve; declare that supreme allegiance belongs to God (Nonviolent Civil Courage).',
        descriptionAm:
          'በሙሉ ክብርና በታላቅ ድፍረት ለሸንጎው መልሱ፤ “እኛስ ያየነውንና የሰማነውን ከመናገር ዝም ማለት አንችልም” በማለት ቆራጥ አቋም ያዙ (የታሪክ ምርጫ)።',
        isHistoricalChoice: true,
        consequenceSummaryEn:
          'The council was stunned by their boldness; seeing the healed man standing with them, they had nothing to say; the word of God multiplied exponentially.',
        consequenceSummaryAm:
          'ሸንጎው በድፍረታቸው ተደነቀ፤ የተፈወሰውም ሰው ከእነርሱ ጋር ቆሞ ስላዩ የሚቃወሙትን አጡ፤ የወንጌልም ቃል በታላቅ ኃይል ተስፋፋ።'
      }
    ],
    historicalAnalysis: {
      chosenOptionId: 'opt-respectful-defiance',
      characterTitleEn: 'Peter declared: "We must obey God rather than any human authority."',
      characterTitleAm: 'ጴጥሮስ “ከሰው ይልቅ ለእግዚአብሔር ልንታዘዝ ይገባል” በማለት መለሰ።',
      shortTermCostEn:
        'They were arrested again, beaten with 39 lashes in Acts 5, and ordered to bleed for their message; they left rejoicing.',
      shortTermCostAm:
        'እንደገና ታሰሩ፣ በከባድ አለንጋ ተገረፉ፤ ነገር ግን ስለ ስሙ መከራን ለመቀበል የተገባቸው ሆነው ስለተቆጠሩ ደስ እያላቸው ወጡ።',
      longTermFruitEn:
        'The global spread of the Gospel across the Roman Empire; an unbreakable theological foundation that conscience under God supersedes state tyranny.',
      longTermFruitAm:
        'ወንጌል በሮም ግዛትና በመላው ዓለም በኃይል ተስፋፋ፤ የመንፈስ ነፃነትና ለእግዚአብሔር መታዘዝ ከሰብዓዊ ማስፈራሪያ የበላይ መሆኑ ለትውልድ ታወቀ።',
      psychologicalInsightEn:
        'Fear of institutional retaliation evaporates when an individual has found a transcendent authority higher than human gatekeepers. True courage does not yell or threaten violence; it calmly states truth and willingly accepts the consequences.',
      psychologicalInsightAm:
        'የሰው ልጅ ከምድራዊ ባለሥልጣናት የበለጠውን እውነተኛ ጌታ ሲያውቅ፣ የማስፈራሪያ ፍርሃት ከልቡ ይወገዳል፤ እውነተኛ ድፍረት አይጮህም ወይም ሁከት አያስነሣም፤ እውነትን በግልጽ ይመሰክራል፤ መከራውንም በክብር ይቀበላል።',
      biblicalAnchorRef: 'Acts 4:19–20 & 5:29 / ሐዋርያት 4:19–20 እና 5:29',
      biblicalAnchorTextEn:
        '"Peter and John answered them, “Whether it is right in the sight of God to listen to you rather than to God, you must judge, for we cannot but speak of what we have seen and heard.”"',
      biblicalAnchorTextAm:
        '“ጴጥሮስና ዮሐንስ ግን መልሰው፡- እግዚአብሔርን ከመስማት ይልቅ እናንተን እንሰማ ዘንድ በእግዚአብሔር ፊት የሚገባ እንደ ሆነ ፍረዱ፤ እኛስ ያየነውንና የሰማነውን ከመናገር ዝም ማለት አንችልም አሉአቸው።”',
      modernLeadershipTakeawayEn:
        'When powerful systems demand that you suppress ethical facts or participate in institutional dishonesty, remember that human authority is always derivative, never ultimate. State the truth calmly, respectfully, and without compromise.',
      modernLeadershipTakeawayAm:
        'ተቋማዊ ሥርዓቶች እውነትን እንድትደብቅ ወይም በደልን እንድትደግፍ ጫና ሲያደርጉብህ፣ ሰብዓዊ ሥልጣን ውሱን መሆኑን አስታውስ፤ እውነትን በክብርና በግልጽ ተናገር እንጂ የውሸት ተባባሪ አትሁን።'
    }
  }
]

/**
 * Helper to fetch a dilemma for a specific chapter
 */
export function getDilemmaForChapter(bookNr: number, chapter: number): DilemmaCase | undefined {
  return DILEMMA_CASES.find((d) => {
    if (d.bookNr !== bookNr) return false
    const end = d.chapterEnd ?? d.chapterStart
    return chapter >= d.chapterStart && chapter <= end
  })
}

/**
 * Helper to fetch a dilemma for a specific saga scene
 */
export function getDilemmaForScene(sceneId: string): DilemmaCase | undefined {
  return DILEMMA_CASES.find((d) => d.sceneId === sceneId)
}
