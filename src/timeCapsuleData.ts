/**
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

export const TIME_CAPSULE_ENTRIES: TimeCapsuleEntry[] = [
  {
    "id": "capsule-b1",
    "bookNr": 1,
    "chapter": 3,
    "verseStart": 4,
    "verseEnd": 5,
    "verseRefAm": "ኦሪት ዘፍጥረት 3:4-5",
    "verseRefEn": "Genesis 3:4-5",
    "verseTextAm": "እባብም ለሴቲቱ አላት። ሞትን አትሞቱም፤ ከእርስዋ በበላችሁ ቀን ዓይኖቻችሁ እንዲከፈቱ እንደ እግዚአብሔርም መልካምንና ክፉን የምታውቁ እንድትሆኑ እግዚአብሔር ስለሚያውቅ ነው እንጂ።",
    "verseTextEn": "And the serpent said unto the woman, Ye shall not surely die: For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil.",
    "titleAm": "እንደ አማልክት ትሆናላችሁ — የመጀመሪያው የሐሰት ትምህርት",
    "titleEn": "You Shall Be as Gods — The Original Deception",
    "taglineAm": "ሰውን ራሱን አምላክ ለማድረግ የተሸረበው የመጀመሪያው የሐሰት ቃል ኪዳን",
    "taglineEn": "The primal lie promising autonomy and divinity apart from God",
    "eraAm": "የጥንቱ የሰው ዘር መጀመሪያ",
    "eraEn": "Primeval Era",
    "locationAm": "ኤደን ገነት",
    "locationEn": "Garden of Eden",
    "yearApprox": "የፍጥረት መጀመሪያ",
    "keyIcon": "🍎",
    "sceneAm": {
      "setting": "ሰው ከፈጣሪው ጋር ፍጹም ኅብረት በነበረው በኤደን ገነት ውስጥ፤ ፍጹም ሰላምና በረከት በነገሠበት ሥፍራ።",
      "dailyLife": "ሰው ፍጥረትን የመንከባከብና የመግዛት ኃላፊነት ነበረው፤ ምንም ድካም፣ ሞትና የሕሊና ፍርሃት አልነበረም።",
      "socialTension": "የእባቡ ፈተና የተነሳው በእግዚአብሔር ቸርነትና እውነተኛነት ላይ ጥርጣሬ በመዝራት የእግዚአብሔርን ቃል በማዛባት ነበር።"
    },
    "sceneEn": {
      "setting": "The Garden of Eden, where humanity enjoyed unhindered communion with the Creator in unbroken peace.",
      "dailyLife": "Man exercised joyful stewardship over creation with no death, toil, shame, or guilt.",
      "socialTension": "The serpent introduced doubt regarding God’s goodness and truthfulness, subtly distorting divine speech."
    },
    "metaphorAm": {
      "origin": "«የመልካምና የክፉ እውቀት» የሚለው የዕብራይስጥ ፈሊጥ መልካምና ክፉን በራስ ፈቃድ የመወሰንና ራስን በፈጣሪ ዙፋን ላይ የማስቀመጥ ምኞት ነው።",
      "linguisticNuance": "በዕብራይስጥ «ከኤሎሂም» (እንደ አምላክ) ማለት የራስን ሕግ አውጪነትና ራስን መቻልን መሻት ነው።",
      "crowdReaction": "አዳምና ሔዋን ወደ ራሳቸው ሉዓላዊነትና እውቀት ያመራሉ ብለው ሲያምኑ ወዲያው የዕርቃናቸውን ኀፍረት አዩ።"
    },
    "metaphorEn": {
      "origin": "The \"knowledge of good and evil\" in ancient Hebrew idiom signifies autonomous moral determination without God.",
      "linguisticNuance": "The Hebrew phrase \"k’Elohim\" (like God) seduces with the promise of divine self-sufficiency and moral legislative power.",
      "crowdReaction": "Believing they were ascending to divine autonomy, humanity immediately plunged into shame, alienation, and vulnerability."
    },
    "distortionAm": {
      "claim": "ዘመናዊ \"የእምነት እንቅስቃሴ\" (Word-of-Faith) እና አዲስ ዘመን (New Age) አስተማሪዎች \"እኛ ትናንሽ አማልክት (little gods) ነን፤ በአፋችን እውነታን መፍጠር እንችላለን\" በማለት ይህን የተሳሳተ ፍልስፍና ያስተምራሉ።",
      "damage": "ሰውን በፈጣሪው ቦታ ያስቀምጣል፤ ንስሐንና ትህትናን አጥፍቶ የትዕቢትንና የዓመፅን መንፈስ ያሰርጻል።"
    },
    "distortionEn": {
      "claim": "Modern Word-of-Faith and New Age gurus claim \"we are little gods with sovereign creative spoken power to manifest our desires.\"",
      "damage": "It dethrones God, elevates human pride, and replicates the ancient serpent’s rebellion rather than biblical humility."
    },
    "truthAm": {
      "contextSummary": "ዘፍጥረት 3 የሰው ልጅ ውድቀትና የኃጢአት መግቢያ ታሪክ እንጂ የሰው ልጅ አምላክ የመሆን የምስራች አይደለም።",
      "surroundingVerses": "በቁጥር 19 ላይ «አፈር ነህና ወደ አፈርም ትመለሳለህ» ተብሎ የሰው ልጅ ደካማነትና ሟችነት ተረጋግጧል።",
      "timelessPrinciple": "እግዚአብሔር ብቻ ሉዓላዊ አምላክ ነው፤ የሰው ልጅ ፍጡር እንጂ ፈጣሪ አይደለም፤ መዳኑም በክርስቶስ በሚሰጥ ጸጋ ብቻ ነው።"
    },
    "truthEn": {
      "contextSummary": "Genesis 3 records humanity’s tragic rebellion and fall, not an elevation to divine power.",
      "surroundingVerses": "Verse 19 emphatically seals creaturely mortality: \"For dust you are, and to dust you shall return.\"",
      "timelessPrinciple": "God alone is God; humanity is creaturely and dependent, saved solely by sovereign grace through Jesus Christ."
    },
    "crossReferences": [
      {
        "ref": "ኢሳይያስ 14:14",
        "noteAm": "«በልዑልም እመሰላለሁ አልህ፤ ነገር ግን ወደ ሲኦል ትወርዳለህ»",
        "noteEn": "“I will make myself like the Most High; yet you are brought down to Sheol.”"
      },
      {
        "ref": "ሮሜ 1:22-23",
        "noteAm": "«ጥበበኞች ነን ሲሉ ደንቆሮ ሆኑ፤ የማይጠፋውንም የእግዚአብሔር ክብር ለወጡ»",
        "noteEn": "“Claiming to be wise, they became fools, and exchanged the glory of the immortal God.”"
      },
      {
        "ref": "ሐዋርያት 12:22-23",
        "noteAm": "«የእግዚአብሔር ድምፅ ነው የሰውም አይደለም ባሉ ጊዜ ለእግዚአብሔር ክብር ስላልሰጠ ትል በልቶት ሞተ»",
        "noteEn": "“He did not give God the glory, and was eaten by worms and died.”"
      }
    ]
  },
  {
    "id": "capsule-b2",
    "bookNr": 2,
    "chapter": 21,
    "verseStart": 24,
    "verseEnd": 25,
    "verseRefAm": "ኦሪት ዘጸአት 21:24-25",
    "verseRefEn": "Exodus 21:24-25",
    "verseTextAm": "ዓይን በዓይን፥ ጥርስ በጥርስ፥ እጅ በእጅ፥ እግር በእግር፥ መቃጠል በመቃጠል፥ ቍስል በቍስል፥ ግርፋት በግርፋት ይከፈል።",
    "verseTextEn": "Eye for eye, tooth for tooth, hand for hand, foot for foot, Burning for burning, wound for wound, stripe for stripe.",
    "titleAm": "ዓይን ስለ ዓይን — የበቀል ፍቃድ ወይስ የበቀል ገደብ?",
    "titleEn": "Eye for an Eye — License for Revenge or Ceiling on Retaliation?",
    "taglineAm": "የጎሣ የደም በቀልን ለመግታት የወጣው የፍትሕ ወሰን በዘመናችን ለጭካኔ ማመካኛ ሲደረግ",
    "taglineEn": "An ancient legal ceiling checking runaway blood feuds, misunderstood as personal retaliation",
    "eraAm": "የሲና በረሃ የቃል ኪዳን ዘመን",
    "eraEn": "Mosaic Covenant at Sinai",
    "locationAm": "የሲና ተራራ ግርጌ",
    "locationEn": "Foot of Mount Sinai",
    "yearApprox": "1446 ዓ.ዓ.",
    "keyIcon": "⚖️",
    "sceneAm": {
      "setting": "ከግብፅ ባርነት የወጣው እስራኤል በሲና በረሃ ሲሰፍር፤ ጎሣዎች በደል ሲደርስባቸው ሙሉ ጎሣን እስከ ማጥፋት የሚደርስ የደም በቀል ይፈጽሙበት በነበረው የጥንቱ ዓለም።",
      "dailyLife": "በጥንቱ ቅርብ ምስራቅ አንድ ሰው የአንድን ሰው ጥርስ ቢሰብር፣ የተበዳዩ ቤተሰብ ጥፋተኛውን ብቻ ሳይሆን ልጆቹንና ከብቶቹን ጭምር ይገድል ነበር (እንደ ላሜክ በቀል ዘፍ 4:24)።",
      "socialTension": "የፍትሕ ሥርዓት በሌለበት ምድረ በዳ ያልተመጣጠነ የበቀል ውጊያ ጎሣዎችን እንዳያጠፋ ገደብ ያስፈልግ ነበር።"
    },
    "sceneEn": {
      "setting": "The newly liberated nation camped at Sinai, surrounded by ancient cultures dominated by unbounded clan blood feuds.",
      "dailyLife": "In the ancient Near East, an offense against one person provoked vengeance against whole families (e.g., Lamech’s 77-fold vengeance).",
      "socialTension": "Without civil restraint, tribal escalations would destroy communities through violent over-retaliation."
    },
    "metaphorAm": {
      "origin": "«ሌክስ ታሊዮኒስ» (Lex Talionis) የሚባለው ሕግ ፍትሐዊ ማካካሻን የሚወስን የፍርድ ቤት ሕግ እንጂ የግል የበቀል ፈቃድ አይደለም።",
      "linguisticNuance": "«ዓይን ስለ ዓይን» ማለት ቅጣቱ ከተፈጸመው ጥፋት መብለጥ የለበትም የሚል ከፍተኛ የቅጣት ጣሪያ (maximum ceiling) ነው።",
      "crowdReaction": "እስራኤላውያን በዳዩን ከመጠን በላይ እንዳይቀጡ በፍርድ ሸንጎ ፊት የፍትሕ ሚዛን እንዲኖር ተማሩ።"
    },
    "metaphorEn": {
      "origin": "Known as \"Lex Talionis,\" this civil statute for judges established a maximum proportion of restitution, not personal vigilantism.",
      "linguisticNuance": "The phrase established an absolute legal ceiling: punishment must never exceed the crime, ending generational feuds.",
      "crowdReaction": "It restrained private vendettas, forcing cases into community elders and fair judicial arbitration."
    },
    "distortionAm": {
      "claim": "ዘመናዊ ሰዎች ጥቅሱን ለግል ቂም መበቀያና ለጭካኔ አጸፋ ማጽደቂያ በማድረግ «ብሉይ ኪዳን የጭካኔና የበቀል መጽሐፍ ነው» ይላሉ።",
      "damage": "የክርስቶስን ይቅርታና የሕጉን የፍትሕ ምሕረት ያዛባል፤ በግል ግንኙነት ውስጥ ቂም በቀልን ያበረታታል።"
    },
    "distortionEn": {
      "claim": "Critics and vengeful individuals cite \"eye for an eye\" to justify private vengeance, portraying the Old Testament as barbaric cruelty.",
      "damage": "It justifies bitterness and private payback while concealing the profound restraint and protection of human life inherent in the law."
    },
    "truthAm": {
      "contextSummary": "ዘጸአት 21 የዳኞች የፍርድ ደንብ እንጂ የግለሰብ በቀል አይደለም፤ ዋና አላማውም በዳዩ ከተገቢው በላይ እንዳይቀጣ መጠበቅ ነው።",
      "surroundingVerses": "በዘጸአት 23:4-5 ላይ «የጠላትህ በሬ ወይም አህያ ጠፍቶ ብታገኝ ወደ እርሱ መልስለት» ተብሎ በግል ሕይወት ፍቅር ታዟል።",
      "timelessPrinciple": "እግዚአብሔር ፍትሕ የተመጣጠነ እንዲሆን ይፈልጋል፤ በሐዲስ ኪዳን ደግሞ ክርስቶስ የግል በቀልን ሙሉ ለሙሉ በማስወገድ ይቅርታን አስተምሯል።"
    },
    "truthEn": {
      "contextSummary": "Exodus 21 served as guidelines for civil magistrates, curbing vigilante excess and demanding exact proportionality.",
      "surroundingVerses": "Exodus 23:4-5 explicitly commanded personal kindness: \"If you meet your enemy’s ox or his donkey going astray, you shall bring it back.\"",
      "timelessPrinciple": "God demands impartial proportionality in civil justice, while calling His people to personal forgiveness and love."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 5:38-39",
        "noteAm": "«ዓይን ስለ ዓይን እንደ ተባለ ሰምታችኋል፤ እኔ ግን እላችኋለሁ፥ ክፉውን አትቃወሙ»",
        "noteEn": "“You have heard that it was said, ‘An eye for an eye’... But I say to you, do not resist the one who is evil.”"
      },
      {
        "ref": "ሮሜ 12:19",
        "noteAm": "«ተወዳጆች ሆይ፥ ራሳችሁ አትበቀሉ፤ በቀል የእኔ ነው እኔ ብድራትን እመልሳለሁ ይላል ጌታ»",
        "noteEn": "“Beloved, never avenge yourselves... ‘Vengeance is mine, I will repay, says the Lord.’”"
      },
      {
        "ref": "ምሳሌ 20:22",
        "noteAm": "«ክፉ እመልሳለሁ አትበል፤ እግዚአብሔርን ተስፋ አድርግ፥ እርሱም ያድንሃል»",
        "noteEn": "“Do not say, ‘I will repay evil’; wait for the Lord, and he will deliver you.”"
      }
    ]
  },
  {
    "id": "capsule-b3",
    "bookNr": 3,
    "chapter": 19,
    "verseStart": 28,
    "verseEnd": 28,
    "verseRefAm": "ኦሪት ዘሌዋውያን 19:28",
    "verseRefEn": "Leviticus 19:28",
    "verseTextAm": "ስለ ሞተውም ሥጋችሁን አትንጩ፥ ገላችሁንም አትንቀሱት፤ እኔ እግዚአብሔር ነኝ።",
    "verseTextEn": "Ye shall not make any cuttings in your flesh for the dead, nor print any marks upon you: I am the Lord.",
    "titleAm": "ስለ ሙታን ሰውነታችሁን አትቧጩ — የጣዖት አምልኮ ወይስ የሕግ ጭቆና?",
    "titleEn": "No Marks for the Dead — Pagan Necromancy vs Legalistic Weaponization",
    "taglineAm": "የከነዓናውያንን የሙታን መጥሪያ አምልኮ ለመከልከል የተሰጠው ትእዛዝ ዛሬ ሰዎችን ለማውገዝ ሲውል",
    "taglineEn": "A prohibition of Canaanite underworld necromancy twisted into legalistic pharisaism",
    "eraAm": "የበረሃ የቅድስናና የአምልኮ ሥርዓት ዘመን",
    "eraEn": "Sinai Holiness Code",
    "locationAm": "የእስራኤል የድንኳን ሰፈር",
    "locationEn": "Wilderness Tabernacle Camp",
    "yearApprox": "1445 ዓ.ዓ.",
    "keyIcon": "🌿",
    "sceneAm": {
      "setting": "በከነዓንና በግብፅ አሕዛብ መካከል የተቀደሰ ሕዝብ ሆኖ እንዲኖር ለተጠራው ለእስራኤል ማኅበር የተሰጠ የአምልኮ መመሪያ።",
      "dailyLife": "በጥንቱ ከነዓን አንድ ዘመድ ሲሞት ሰዎች ሰውነታቸውን በስለት ይሸነሽኑና በሥጋቸው ላይ በከሰልና በቀለም ምልክት በመቅረጽ የሙታንን መንፈስ (የሞትን አምላክ ሞትን) ለማስደሰት ይጣሩ ነበር።",
      "socialTension": "እስራኤላውያን ሞትንና መቃብርን ተስፋ ወደሌለው አረማዊ የድግምት ሥርዓት እንዳይለውጡት መከላከል የግድ ነበር።"
    },
    "sceneEn": {
      "setting": "God called Israel out of Egypt to be a holy nation distinct from surrounding pagan nations.",
      "dailyLife": "Canaanite mourning rituals involved ritual laceration and tattooing as necromantic covenants to appease underworld deities (like Mot).",
      "socialTension": "Israel had to be safeguarded against syncretism and demonic death-cults practiced by neighboring tribes."
    },
    "metaphorAm": {
      "origin": "«ስለ ሙታን ሰውነታችሁን አትቧጩ» የሚለው በቀጥታ ከሙታን መንፈስ ጋር የሚደረግ ቃል ኪዳናዊ ምልክትን (Necromantic marking) ያመለክታል።",
      "linguisticNuance": "በዕብራይስጥ «ካዕቃ» ማለት ለጣዖት መሰጠት ማረጋገጫ ተደርጎ በቆዳ ላይ የሚታተም ሥርዓታዊ ምልክት ነው።",
      "crowdReaction": "እስራኤላውያን የሕያው አምላክ ንብረት መሆናቸውንና ሥጋቸው የሙታን አምልኮ ማረፊያ እንዳይሆን ተረዱ።"
    },
    "metaphorEn": {
      "origin": "The phrase \"for the dead\" links tattoos directly to cultic rites where blood and ink were offered to appease spirits of the deceased.",
      "linguisticNuance": "The Hebrew \"qa‘aqa‘\" denotes ritual tattooing binding an individual to pagan gods of the netherworld.",
      "crowdReaction": "Israel recognized that their bodies belonged to Yahweh, the Living God, not ancestral spirits."
    },
    "distortionAm": {
      "claim": "አንዳንድ አስተማሪዎች ጥቅሱን ከሙታን ጣዖታዊ አምልኮ ነጥለው ሰዎችን ለመኮነንና በውጫዊ ሕግጋት ሕሊናን ለማሰር ብቻ ይጠቀሙበታል።",
      "damage": "ትክክለኛውን የጣዖት አምልኮ አደጋ ይሸፍናል፤ መጽሐፍ ቅዱስን ወደ ውጫዊ ፈሪሳዊ የቁጥጥር መሣሪያነት ይለውጣል።"
    },
    "distortionEn": {
      "claim": "Legalistic teachers rip the verse out of its pagan necromantic context to police modern aesthetics and condemn consciences.",
      "damage": "It obscures the true biblical concern against idolatry and transforms Christian discipleship into superficial Pharisaism."
    },
    "truthAm": {
      "contextSummary": "ዘሌዋውያን 19 የእግዚአብሔር ሕዝብ እንደ ከነዓን አረማውያን ሞትን በድግምትና በደም መስዋዕት እንዳያመልኩ የተሰጠ የቅድስና ጥሪ ነው።",
      "surroundingVerses": "በቁጥር 26 ላይ «ሟርተኛ አትሁኑ፥ ሞራ ገላጭም አትሁኑ» ተብሎ ጥንቆላና ድግምት ተወግዟል።",
      "timelessPrinciple": "ክርስቲያን አካሉ የእግዚአብሔር ቤተ መቅደስ ነው፤ አኗኗሩም ከሞትና ከጨለማ አሠራር የተለየ የሕይወት ምስክር መሆን አለበት።"
    },
    "truthEn": {
      "contextSummary": "Leviticus 19 is a call to holiness, commanding God’s people to renounce demonic mourning rites and occult practices.",
      "surroundingVerses": "Verse 26 forbids omens, divination, and soothsaying, identifying the entire passage as warfare against the occult.",
      "timelessPrinciple": "The believer’s body is a temple of the Holy Spirit, set apart to glorify the Living God rather than symbols of death and pagan deities."
    },
    "crossReferences": [
      {
        "ref": "1 ቆሮንቶስ 6:19-20",
        "noteAm": "«ሥጋችሁ የመንፈስ ቅዱስ ማደሪያ እንደ ሆነ አታውቁምን? በዋጋ ተገዝታችኋልና በሥጋችሁ እግዚአብሔርን አክብሩ»",
        "noteEn": "“Your body is a temple of the Holy Spirit... You were bought with a price. So glorify God in your body.”"
      },
      {
        "ref": "1 ተሰሎንቄ 4:13",
        "noteAm": "«ተስፋ እንደሌላቸው እንደ ሌሎች እንዳታዝኑ፥ ስለ አንቀላፉቱ ታውቁ ዘንድ እንወዳለን»",
        "noteEn": "“That you may not grieve as others do who have no hope.”"
      },
      {
        "ref": "ዘዳግም 14:1",
        "noteAm": "«እናንተ የአምላካችሁ የእግዚአብሔር ልጆች ናችሁ፤ ስለ ሞተ ሰው ሰውነታችሁን አትቧጩ»",
        "noteEn": "“You are the sons of the Lord your God. You shall not cut yourselves for the dead.”"
      }
    ]
  },
  {
    "id": "capsule-b4",
    "bookNr": 4,
    "chapter": 23,
    "verseStart": 19,
    "verseEnd": 19,
    "verseRefAm": "ኦሪት ዘኍልቍ 23:19",
    "verseRefEn": "Numbers 23:19",
    "verseTextAm": "ሐሰትን ይናገር ዘንድ እግዚአብሔር ሰው አይደለም፥  ይጸጸትም ዘንድ የሰው ልጅ አይደለም።  እርሱ ያለውን አያደርገውምን?  የተናገረውንስ አይፈጽመውምን?",
    "verseTextEn": "God is not a man, that he should lie; neither the son of man, that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?",
    "titleAm": "እግዚአብሔር ይዋሽ ዘንድ ሰው አይደለም — ሉዓላዊ ቃል ኪዳን ወይስ የሰው ትእዛዝ?",
    "titleEn": "God is Not a Man to Lie — Sovereign Promise vs Human Manifestation",
    "taglineAm": "በለዓም እስራኤልን ለመርገም ሲሞክር የተገለጠው መለኮታዊ ሉዓላዊነት በዘመናችን እግዚአብሔርን ለማዘዝ ሲጣመም",
    "taglineEn": "Balaam’s frustrated curse revealing God’s unshakeable covenant, twisted into claiming God must obey human spoken decrees",
    "eraAm": "የሞአብ ሜዳና የበለዓም ዘመን",
    "eraEn": "Plains of Moab & Balaam",
    "locationAm": "የፌጎር ተራራ ራስ",
    "locationEn": "Top of Mount Peor",
    "yearApprox": "1406 ዓ.ዓ.",
    "keyIcon": "⛰️",
    "sceneAm": {
      "setting": "የሞአብ ንጉሥ ባላቅ ገንዘብ ከፍሎ ነቢዩ በለዓም እስራኤልን እንዲረግምለት በከፍታ ቦታዎች መሠዊያ ባዘጋጀበት ወቅት።",
      "dailyLife": "በጥንቱ ዓለም ጠንቋዮችና አስማተኞች አማልክትን በመሥዋዕትና በቃላት ድግምት አግባብተው ሰዎችን ለመርገም ወይም ዕድልን ለማስቀየር ይሞክሩ ነበር።",
      "socialTension": "ባላቅ በለዓም እስራኤልን እንዲያጠፋለት ሲወተውተው፣ እግዚአብሔር የተናገረው የመመረጥ በረከት በማንም ድግምት እንደማይለወጥ ታወቀ።"
    },
    "sceneEn": {
      "setting": "Balak king of Moab hired Balaam to place a spiritual hex upon Israel from the heights of Peor.",
      "dailyLife": "Ancient Near Eastern sorcerers believed pagan deities could be manipulated through sacrifices and magical formulas.",
      "socialTension": "Balak pressured Balaam to curse the multitude, but God demonstrated that His electing love cannot be altered by human bargaining."
    },
    "metaphorAm": {
      "origin": "እግዚአብሔር እንደ ሟች ሰው በገንዘብ፣ በስሜት ወይም በድግምት ሀሳቡን የማይለውጥ ታማኝ ኪዳነ-ፈጣሪ መሆኑን ማሳየት ነው።",
      "linguisticNuance": "በዕብራይስጥ «ሎ ኢሽ ኤል» ማለት «አምላክ ሰው አይደለም» — ባሕርዩ ከሰው ፍጡራዊ ውሱንነትና ተለዋዋጭነት ፍጹም የራቀ ነው።",
      "crowdReaction": "በለዓም ደንግጦ ባላቅን፦ «እርሱ የተናገረውን አያደርገውምን?» በማለት የእግዚአብሔርን ሉዓላዊነት አወጀ።"
    },
    "metaphorEn": {
      "origin": "God stands wholly distinct from fickle pagan idols and changeable mortals; His covenant oath cannot be bought or bribed.",
      "linguisticNuance": "The Hebrew \"Lo ish El\" underscores God’s transcendent immutability—He neither lies nor experiences regretful whims.",
      "crowdReaction": "Balaam stood humbled before Balak, confessing: \"Has He said, and will He not do it? He has blessed, and I cannot reverse it.\""
    },
    "distortionAm": {
      "claim": "የአዎንታዊ አዋጅ (Word-of-Faith) አስተማሪዎች ይህን ጥቅስ ወስደው «እኛ በአፋችን ካወጅን እግዚአብሔር የተናገርነውን ለመፈጸም በቃሉ ታስሯል፤ እምቢ ማለት አይችልም» ይላሉ።",
      "damage": "ፈጣሪን የሰው አገልጋይና ታዛዥ ያደርጋል፤ የእግዚአብሔርን ሉዓላዊ ፈቃድ ወደ ሰው ቁጥጥር ዝቅ ያደርጋል።"
    },
    "distortionEn": {
      "claim": "Word-of-Faith teachers invert this text, claiming \"God is legally bound by our spoken words and forced to perform whatever we decree.\"",
      "damage": "It reduces the Almighty to a cosmic genie bound to human whim, usurping divine sovereignty."
    },
    "truthAm": {
      "contextSummary": "ዘኍልቍ 23 የሚያሳየው የእግዚአብሔርን የማይናወጥ የቃል ኪዳን ታማኝነት እንጂ የሰው ልጅ ቃላት በእግዚአብሔር ላይ ያላቸውን ኃይል አይደለም።",
      "surroundingVerses": "በቁጥር 20 ላይ «እነሆ፥ መባረክን ተቀበልሁ፤ እርሱ ባርኮአል፥ እኔም እለውጠው ዘንድ አልችልም» ይላል።",
      "timelessPrinciple": "እግዚአብሔር የገባቸውን ተስፋዎች የሚፈጽመው እርሱ ራሱ ሉዓላዊና ታማኝ ስለ ሆነ እንጂ በሰው ጥያቄ ተገዶ አይደለም።"
    },
    "truthEn": {
      "contextSummary": "Numbers 23 celebrates Yahweh’s faithfulness to protect His covenant people against demonic cursing, not human manipulation.",
      "surroundingVerses": "Verse 20: \"Behold, I received a command to bless: he has blessed, and I cannot revoke it.\"",
      "timelessPrinciple": "God keeps His promises because of His immutable holy character and sovereign grace, not because man coerces Him."
    },
    "crossReferences": [
      {
        "ref": "2 ጢሞቴዎስ 2:13",
        "noteAm": "«እኛ ባናምነው፥ እርሱ የታመነ ሆኖ ይኖራል፤ ራሱን ሊክድ አይችልምና»",
        "noteEn": "“If we are faithless, he remains faithful—for he cannot deny himself.”"
      },
      {
        "ref": "ዕብራውያን 6:17-18",
        "noteAm": "«እግዚአብሔር ሊዋሽ በማይቻለው በሁለት በማይለወጥ ነገር ታላቅ መጽናናት ይሆንልን ዘንድ»",
        "noteEn": "“So that by two unchangeable things, in which it is impossible for God to lie, we might have strong encouragement.”"
      },
      {
        "ref": "ቲቶ 1:2",
        "noteAm": "«የማይዋሸው እግዚአብሔር ከዘላለም ዘመናት በፊት ተስፋ የሰጠው የዘላለም ሕይወት»",
        "noteEn": "“Eternal life, which God, who never lies, promised before the ages began.”"
      }
    ]
  },
  {
    "id": "capsule-b5",
    "bookNr": 5,
    "chapter": 28,
    "verseStart": 1,
    "verseEnd": 2,
    "verseRefAm": "ኦሪት ዘዳግም 28:1-2",
    "verseRefEn": "Deuteronomy 28:1-2",
    "verseTextAm": "እንዲህም ይሆናል፤ የአምላክህን የእግዚአብሔርን ቃል ብትሰማ፥ ዛሬም ያዘዝሁህን ትእዛዙን ሁሉ ብታደርግ ብትጠብቅም አምላክህ እግዚአብሔር ከምድር አሕዛብ ሁሉ ላይ ከፍ ከፍ ያደርግሃል። የአምላክህንም የእግዚአብሔርን ቃል ብትሰማ እነዚህ በረከቶች ሁሉ ይመጡልሃል፤ ያገኙህማል።",
    "verseTextEn": "And it shall come to pass, if thou shalt hearken diligently unto the voice of the Lord thy God, to observe and to do all his commandments which I command thee this day, that the Lord thy God will set thee on high above all nations of the earth: And all these blessings shall come on thee, and overtake thee, if thou shalt hearken unto the voice of the Lord thy God.",
    "titleAm": "የዘዳግም 28 በረከቶች — የብልጽግና ወንጌል ዋስትና ወይስ የብሉይ ኪዳን የግብርና ኪዳን?",
    "titleEn": "The Deuteronomy 28 Blessings — Prosperity Gospel Guarantee vs Agrarian Theocracy",
    "taglineAm": "በከነዓን ምድር ለነበረችው ለእስራኤል ማኅበር የተሰጠው የግብርና ኪዳን በዘመናችን ለግል ሀብት ማግኛ ሲተረጎም",
    "taglineEn": "Ancient conditional blessings for an agricultural theocracy twisted into modern automatic wealth formulas",
    "eraAm": "የተስፋይቱ ምድር መግቢያ ዋዜማ",
    "eraEn": "Threshold of the Promised Land",
    "locationAm": "የሞአብ ሜዳ በዮርዳኖስ ማዶ",
    "locationEn": "Plains of Moab across Jordan",
    "yearApprox": "1406 ዓ.ዓ.",
    "keyIcon": "📜",
    "sceneAm": {
      "setting": "ሙሴ እስራኤልን ወደ ተስፋይቱ ምድር ከማስገባቱ በፊት የመጨረሻውን የስንብት ንግግር ሲያደርግና የኪዳኑን ውል ሲያድስ።",
      "dailyLife": "እስራኤላውያን ገበሬዎችና እረኞች ነበሩ፤ ዝናብ፣ አዝመራ፣ የበግና የቀንድ ከብት መራባት በቀጥታ ከእግዚአብሔር በረከት ጋር የተያያዘ ነበር።",
      "socialTension": "ከነዓናውያን ዝናብና አዝመራ ለማግኘት የበዓልንና የአስታሮትን ጣዖታት ያመልኩ ነበር፤ ሙሴ ግን እውነተኛ በረከት የሚገኘው እግዚአብሔርን ብቻ በመታዘዝ መሆኑን አሳሰበ።"
    },
    "sceneEn": {
      "setting": "Moses delivering his farewell address renewing the covenant before Israel crossed into Canaan.",
      "dailyLife": "Israel was an agrarian society whose survival depended completely on rainfall, fertile soil, and livestock reproduction.",
      "socialTension": "Canaanites worshiped fertility idols (Baal and Asherah) for crops; Moses insisted rain and prosperity came solely from Yahweh."
    },
    "metaphorAm": {
      "origin": "በረከትና መርገም በጥንቱ ቅርብ ምስራቅ በነገሥታትና በገባሮች መካከል በሚደረገው የሱዜሪን ኪዳን (Suzerainty Treaty) ቅጽ የተዘጋጀ ነው።",
      "linguisticNuance": "«በከተማ የተባረክህ ትሆናለህ፥ በእርሻም የተባረክህ ትሆናለህ» የሚለው መላውን የብሔራዊ ኑሮ መስክ ያጠቃልላል።",
      "crowdReaction": "ሕዝቡ የኤባልና የገሪዛን ተራራዎችን እያዩ «አሜን!» በማለት ኪዳኑን ተቀበሉ።"
    },
    "metaphorEn": {
      "origin": "Framed in the standard form of ancient Near Eastern Suzerainty treaties between a sovereign Great King and vassal people.",
      "linguisticNuance": "“Blessed in the city and blessed in the field” covered the entirety of national civic and agricultural spheres.",
      "crowdReaction": "The congregation stood between Mount Ebal and Mount Gerizim, ratifying the solemn covenant with a resounding \"Amen!\""
    },
    "distortionAm": {
      "claim": "የብልጽግና ሰባኪዎች ዘዳግም 28ን ወስደው «አስራት ከከፈላችሁ መኪና፣ ቪላና የባንክ አካውንት በረከት ይከተላችኋል፤ ድህነትና በሽታ የክርስቲያን ድርሻ አይደለም» ይላሉ።",
      "damage": "ደሃ ክርስቲያኖችን «እምነት ስለሌላችሁ ነው የተረገማችሁት» ብሎ ያሳዝናል፤ የሐዲስ ኪዳን አማኞች በመከራ ውስጥ የሚኖራቸውን የጸጋ ክብር ይነጥቃል።"
    },
    "distortionEn": {
      "claim": "Prosperity preachers market Deuteronomy 28 as a personal financial contract: \"Give tithes and claim lavish cars, luxury homes, and physical invulnerability.\"",
      "damage": "It torments suffering and impoverished saints with false guilt (\"you lack faith\"), denying the noble fellowship of Christ’s sufferings."
    },
    "truthAm": {
      "contextSummary": "ዘዳግም 28 በብሉይ ኪዳን ጥላ ስር ለነበረችው ብሔራዊት እስራኤል ምድራዊት ከነዓን ውስጥ ለተሰጠው የሕግ ኪዳን ማስጠንቀቂያ ነው።",
      "surroundingVerses": "ቁጥር 15-68 ደግሞ እስራኤል ሕጉን ባለመጠበቋ ምክንያት ወደ ባቢሎን ምርኮ እንደምትሄድ የተነገረ ከባድ መርገም ነው።",
      "timelessPrinciple": "በሐዲስ ኪዳን በረከታችን በክርስቶስ በሰማያዊ ስፍራ በመንፈሳዊ በረከት ሁሉ የተባረከ ነው (ኤፌ 1:3)፤ በምድር ግን መከራ እንዳለብን ጌታ አስጠንቅቋል።"
    },
    "truthEn": {
      "contextSummary": "Deuteronomy 28 defines the corporate covenant blessings and curses for the nation of Israel living under the Sinai theocracy in Canaan.",
      "surroundingVerses": "Verses 15-68 reveal devastating curses of famine, siege, and exile, fulfilled when Israel turned to idols.",
      "timelessPrinciple": "In Christ, believers possess \"every spiritual blessing in heavenly places\" (Eph 1:3), while expecting trials in this fallen world."
    },
    "crossReferences": [
      {
        "ref": "ኤፌሶን 1:3",
        "noteAm": "«በክርስቶስ በሰማያዊ ስፍራ በመንፈሳዊ በረከት ሁሉ የባረከን የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት ይባረክ»",
        "noteEn": "“Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places.”"
      },
      {
        "ref": "2 ጢሞቴዎስ 3:12",
        "noteAm": "«በክርስቶስ ኢየሱስ እግዚአብሔርን እየመሰሉ ሊኖሩ የሚወዱ ሁሉ ይሰደዳሉ»",
        "noteEn": "“Indeed, all who desire to live a godly life in Christ Jesus will be persecuted.”"
      },
      {
        "ref": "ዕብራውያን 11:36-37",
        "noteAm": "«ሌሎችም መዘበቻ በመሆንና በመገረፍ ታገሱ፤ የበግና የፍየል ሌጦ ለብሰው ዞሩ፤ ተጨነቁ፥ መከራን ተቀበሉ»",
        "noteEn": "“Others suffered mocking and flogging... they went about in skins of sheep and goats, destitute, afflicted, mistreated.”"
      }
    ]
  },
  {
    "id": "capsule-b6",
    "bookNr": 6,
    "chapter": 1,
    "verseStart": 9,
    "verseEnd": 9,
    "verseRefAm": "መጽሐፈ ኢያሱ ወልደ ነዌ 1:9",
    "verseRefEn": "Joshua 1:9",
    "verseTextAm": "በምትሄድበት ሁሉ አምላክህ እግዚአብሔር ከአንተ ጋር ነውና ጽና፥ አይዞህ፤ አትፍራ፥ አትደንግጥ ብዬ አላዘዝሁህምን?",
    "verseTextEn": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.",
    "titleAm": "በርታ አይዞህ — የግል ስኬት መርህ ወይስ የተቀደሰ ተልዕኮ?",
    "titleEn": "Be Strong and Courageous — Corporate Motivation vs Sacred Commission",
    "taglineAm": "ለኢያሱ የተሰጠው ቅዱስ የመሪነት ኃላፊነት በዘመናችን ለግል ቢዝነስና ለራስ መተማመን ስልጠና ሲውል",
    "taglineEn": "A divine military commission to subdue Canaan reduced to secular self-help pep-talks",
    "eraAm": "ዮርዳኖስን የመሻገርና የድል ዘመን",
    "eraEn": "Conquest of Canaan",
    "locationAm": "የዮርዳኖስ ወንዝ ዳርቻ",
    "locationEn": "Banks of Jordan River",
    "yearApprox": "1405 ዓ.ዓ.",
    "keyIcon": "🛡️",
    "sceneAm": {
      "setting": "ሙሴ ከሞተ በኋላ ታላቁ መሪ ኢያሱ እስራኤልን በዮርዳኖስ አሻግሮ ኃያላን የከነዓን ከተሞችን ለመውጋት በተዘጋጀበት ፍርሃት የሞላበት ወቅት።",
      "dailyLife": "የከነዓን ከተሞች ረዣዥም ቅጥሮችና የብረት ሠረገላዎች ነበሯቸው፤ እስራኤላውያን በምድረ በዳ የተጓዙ እረኞች እንጂ የጦር ማሽኖች አልነበሯቸውም።",
      "socialTension": "ኢያሱ በሙሴ ምትክ የመቆም ትልቅ ሸክምና ሕዝቡን በጦርነት የመምራት ታላቅ ስጋት ነበረበት።"
    },
    "sceneEn": {
      "setting": "Following the death of Moses, Joshua faced the daunting responsibility of leading Israel across Jordan against fortified pagan strongholds.",
      "dailyLife": "Canaanite city-states possessed iron chariots and towering fortifications; Israel was an unequipped former slave population.",
      "socialTension": "Joshua carried the immense weight of succeeding Moses while facing terrifying military odds."
    },
    "metaphorAm": {
      "origin": "ድፍረት የሚገኘው ከራስ ችሎታ ሳይሆን «አምላክህ እግዚአብሔር ከሚሄድክበት ሁሉ ከአንተ ጋር ነው» ከሚለው መለኮታዊ ቃል ኪዳን ነው።",
      "linguisticNuance": "«ሐዛቅ ቬኤማጽ» (በርታ ጽና) የእግዚአብሔርን ሕግጋት በሙሉ በትጋት ለመጠበቅ የሚጠይቅ መንፈሳዊ ጽናት እንጂ የዕብሪት ድፍረት አይደለም።",
      "crowdReaction": "እስራኤላውያን ኢያሱን «እግዚአብሔር ከአንተ ጋር ይሁን፤ ብቻ በርታ አይዞህ» በማለት አበረታቱት።"
    },
    "metaphorEn": {
      "origin": "Courage was anchored not in personal swagger, but in the sovereign promise: \"for the Lord your God is with you wherever you go.\"",
      "linguisticNuance": "The Hebrew \"Chazak ve’ematz\" demands steadfast devotion to meditating on Torah day and night, not reckless bravado.",
      "crowdReaction": "The officers rallied behind Joshua, declaring: \"Only be strong and courageous; the Lord your God be with you as He was with Moses.\""
    },
    "distortionAm": {
      "claim": "ዘመናዊ የሞቲቬሽን አነቃቂዎች ጥቅሱን ወስደው «በራስህ እመን፤ በማንኛውም የንግድ ውድድር ላይ አትሸነፍም» በማለት ለግል የገንዘብና የስልጣን ስኬት ይጠቀሙበታል።",
      "damage": "ትክክለኛውን የእግዚአብሔር ቃል የመታዘዝ ቅድመ ሁኔታ ያጠፋል፤ ሰውን ወደ ራስ መታመን (self-reliance) ይገፋል።"
    },
    "distortionEn": {
      "claim": "Secular motivational speakers brandish Joshua 1:9 as a mantra for corporate ambition, athletic supremacy, and self-confidence.",
      "damage": "It decouples divine presence from total obedience to Scripture, replacing holy humility with carnal arrogance."
    },
    "truthAm": {
      "contextSummary": "ኢያሱ 1 የሚያሳየው ጥንካሬ የሚገኘው የእግዚአብሔርን የሕግ መጽሐፍ ከማሰብና ከመታዘዝ ብቻ መሆኑን ነው (ቁ. 8)።",
      "surroundingVerses": "በቁጥር 7 ላይ «ወደ ቀኝም ወደ ግራም አትበል፤ የተጻፈውንም ሁሉ ጠብቅ» ተብሎ የመታዘዝ ቅድመ ሁኔታ ተቀምጧል።",
      "timelessPrinciple": "እውነተኛ ድፍረት የሚመነጨው በክርስቶስ ከሚገኝ መለኮታዊ ኅብረትና የእግዚአብሔርን ፈቃድ ከመታዘዝ እንጂ ከግል አቅም አይደለም።"
    },
    "truthEn": {
      "contextSummary": "Joshua 1 explicitly ties all success to radical, unswerving adherence to the Book of the Law (v. 8).",
      "surroundingVerses": "Verse 7 commands: \"Do not turn from it to the right hand or to the left, that you may have good success.\"",
      "timelessPrinciple": "Spiritual courage stems solely from abiding in God’s Word and relying upon His sovereign presence through Christ."
    },
    "crossReferences": [
      {
        "ref": "2 ቆሮንቶስ 12:9",
        "noteAm": "«ጸጋዬ ይበቃሃል፥ ኃይሌ በድካም ይፈጸማልና አለኝ፤ እንግዲህ የክርስቶስ ኃይል ያድርብኝ ዘንድ በደስታ በድካሜ እመካለሁ»",
        "noteEn": "“My grace is sufficient for you, for my power is made perfect in weakness.”"
      },
      {
        "ref": "መዝሙር 27:1",
        "noteAm": "«እግዚአብሔር ብርሃኔና መድኃኒቴ ነው፤ የሚያስፈራኝ ማን ነው?»",
        "noteEn": "“The Lord is my light and my salvation; whom shall I fear?”"
      },
      {
        "ref": "ዕብራውያን 13:5-6",
        "noteAm": "«እርሱ ራሱ። አልለቅህም ከቶም አልተውህም ብሎአልና፤ ስለዚህ በድፍረት፦ ጌታ ረዳቴ ነው አልፈራም እንላለን»",
        "noteEn": "“For he has said, ‘I will never leave you nor forsake you.’ So we can confidently say, ‘The Lord is my helper; I will not fear.’”"
      }
    ]
  },
  {
    "id": "capsule-b7",
    "bookNr": 7,
    "chapter": 6,
    "verseStart": 36,
    "verseEnd": 40,
    "verseRefAm": "መጽሐፈ መሣፍንት 6:36-40",
    "verseRefEn": "Judges 6:36-40",
    "verseTextAm": "ጌዴዎንም እግዚአብሔርን። እንደ ተናገርህ የእስራኤልን ልጆች በእኔ እጅ ታድን እንደ ሆነ፥ እነሆ፥ በአውድማው ላይ የተባዘተ የበግ ጠጕር አኖራለሁ፤ በጠጕሩ ብቻ ላይ ጠል ቢሆን በምድሩም ሁሉ ደረቅ ቢሆን፥ እንደ ተናገርህ የእስራኤልን ልጆች በእኔ እጅ እንድታድናቸው አውቃለሁ አለ። እንዲሁም ሆነ፤ በነጋውም ማልዶ ተነሣ፥ ጠጕሩንም ጨመቀው፥ ከጠጕሩም የተጨመቀው ጠል ቆሬ ሙሉ ውኃ ሆነ። ጌዴዎንም እግዚአብሔርን። እኔ ይህን አንድ ጊዜ ስናገር አትቈጣኝ፤ እኔ ይህን አንድ ጊዜ በጠጕሩ፥ እባክህ፥ ልፈትን፤ አሁንም በጠጕሩ ብቻ ላይ ደረቅ ይሁን፥ በምድሩም ሁሉ ላይ ጠል ይሁን አለው። እግዚአብሔርም በዚያ ሌሊት እንዲሁ አደረገ፤ በጠጕሩ ብቻ ላይ ደረቅ ነበረ፥ በምድሩም ሁሉ ላይ ጠል ነበረ። a",
    "verseTextEn": "And Gideon said unto God, If thou wilt save Israel by mine hand, as thou hast said, Behold, I will put a fleece of wool in the floor; and if the dew be on the fleece only, and it be dry upon all the earth beside, then shall I know that thou wilt save Israel by mine hand, as thou hast said. And it was so: for he rose up early on the morrow, and thrust the fleece together, and wringed the dew out of the fleece, a bowl full of water. And Gideon said unto God, Let not thine anger be hot against me, and I will speak but this once: let me prove, I pray thee, but this once with the fleece; let it now be dry only upon the fleece, and upon all the ground let there be dew. And God did so that night: for it was dry upon the fleece only, and there was dew on all the ground.",
    "titleAm": "የጌዴዎን የበግ ጠጉር — የእግዚአብሔርን ፈቃድ የመጠየቂያ ቀመር ወይስ የጥርጣሬ ድካም?",
    "titleEn": "Gideon’s Fleece — Biblical Guidance Formula or Hesitant Doubt?",
    "taglineAm": "ጌዴዎን በፍርሃትና ባለማመን ያቀረበው ምልክት ዛሬ የእግዚአብሔርን ፈቃድ ማወቂያ ቀመር ተደርጎ ሲሰበክ",
    "taglineEn": "Gideon’s hesitant doubt mistakenly exalted as a standard prescription for discovering God’s will",
    "eraAm": "የመሳፍንት የመከራና የግርግር ዘመን",
    "eraEn": "Era of the Judges",
    "locationAm": "የአብሬዜራውያን መንደር ኦፍራ",
    "locationEn": "Ophrah of the Abiezrites",
    "yearApprox": "1160 ዓ.ዓ.",
    "keyIcon": "🐑",
    "sceneAm": {
      "setting": "ምድያማውያን እስራኤልን ለሰባት ዓመታት ያህል እያጠፉ አዝመራቸውንና ከብቶቻቸውን ሙሉ በሙሉ ይዘርፉበት በነበረበት ጨለማ ዘመን።",
      "dailyLife": "እስራኤላውያን በዋሻዎችና በተራራዎች ይሸሸጉ ነበር፤ ጌዴዎንም ስንዴውን በወይን መጥመቂያ ውስጥ በድብቅ ያበጥር ነበር።",
      "socialTension": "እግዚአብሔር ጌዴዎንን አስቀድሞ በግልጽ «ምድያምን ታጠፋለህ» ብሎ ቃል ቢገባለትም፣ ጌዴዎን በፍርሃት ተውጦ ምልክት ደጋግሞ ፈለገ።"
    },
    "sceneEn": {
      "setting": "Midianite hordes invaded Israel annually like locusts, stripping the land bare and driving Israel into mountain caves.",
      "dailyLife": "Gideon was secretly beating out wheat in a sunken winepress to conceal it from Midianite marauders.",
      "socialTension": "Though Yahweh explicitly appeared and commanded him to save Israel, Gideon trembled in persistent hesitation and fear."
    },
    "metaphorAm": {
      "origin": "የበግ ጠጉር ጠዋት በጤዛ እንዲረጥብ ከዚያም ደረቅ እንዲሆን የጠየቀው የእግዚአብሔርን ግልጽ ቃል ለማመን በመቸገሩ ነበር።",
      "linguisticNuance": "ጌዴዎን «ቁጣህ በእኔ ላይ አይንደድ» (ቁ. 39) በማለት ጥያቄው ድፍረትና የእምነት ማነስ እንደሆነ ራሱ ተረድቶታል።",
      "crowdReaction": "እግዚአብሔር በትዕግሥት ምልክት ቢሰጠውም፣ የጌዴዎንን 32,000 ሠራዊት ወደ 300 ዝቅ በማድረግ ድሉ በሰው ጥበብ እንዳይሆን አደረገ።"
    },
    "metaphorEn": {
      "origin": "Testing dew on the fleece was an expression of timid faith demanding signs despite previous miraculous confirmation.",
      "linguisticNuance": "Gideon’s confession in verse 39 (\"Let not your anger burn against me; let me test just once more\") proves he knew he was overstepping.",
      "crowdReaction": "God graciously condescended to Gideon’s weakness, but later pared down his army from 32,000 to 300 to strip away all human reliance."
    },
    "distortionAm": {
      "claim": "ብዙ ክርስቲያኖች «የእግዚአብሔርን ፈቃድ ለማወቅ ልክ እንደ ጌዴዎን ጠጉር ምልክት እናስቀምጥ፤ ለምሳሌ ነገ ዝናብ ከጣለ አገባታለሁ» የሚል አደገኛ ፈሊጥ ይጠቀማሉ።",
      "damage": "የእግዚአብሔርን ቃል፣ ጸሎትንና መንፈሳዊ ጥበብን ወደ ሟርትና ምልክት ፍለጋ ይለውጣል፤ ሰዎችን ወደ ስህተት ውሳኔ ይዳርጋል።"
    },
    "distortionEn": {
      "claim": "Christians treat \"putting out a fleece\" as a legitimate formula for decision-making (e.g., \"if that person calls today, it means I should take the job\").",
      "damage": "It substitutes arbitrary signs and superstitious fleece-tests for biblical wisdom, prayer, and Spirit-led counsel."
    },
    "truthAm": {
      "contextSummary": "መሳፍንት 6 የሚያሳየው የጌዴዎንን የእምነት ድካምና የእግዚአብሔርን ታላቅ ትዕግሥት እንጂ ለውሳኔ የሚሆን አርዓያ አይደለም።",
      "surroundingVerses": "በመሳፍንት 6:14 ላይ እግዚአብሔር በግልጽ «በዚህ በኃይልህ ሂድ፤ ምድያምን ታድናለህ፤ የላክሁህ እኔ አይደለሁምን?» ብሎት ነበር።",
      "timelessPrinciple": "የእግዚአብሔር ፈቃድ የሚታወቀው በተገለጠው ቃሉ፣ በመንፈስ ቅዱስ መሪነትና በመንፈሳዊ ጥበብ እንጂ ምልክት በማስቀመጥ አይደለም።"
    },
    "truthEn": {
      "contextSummary": "Judges 6 records God’s gracious patience with a weak, anxious servant, not a biblical mandate to demand physical signs.",
      "surroundingVerses": "Verse 14 had already settled the issue: \"Go in this might of yours and save Israel... do I not send you?\"",
      "timelessPrinciple": "God guides His people through His revealed Word, renewed minds, and godly counsel, not superstitious sign-seeking."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 12:39",
        "noteAm": "«ክፉና አመንዝራ ትውልድ ምልክት ይሻል፥ ከነቢዩም ከዮናስ ምልክት በቀር ምልክት አይሰጠውም»",
        "noteEn": "“An evil and adulterous generation seeks for a sign, but no sign will be given to it except the sign of Jonah.”"
      },
      {
        "ref": "ሮሜ 12:2",
        "noteAm": "«የእግዚአብሔር ፈቃድ እርሱም በጎና ደስ የሚያሰኝ ፍጹምም የሆነው ነገር ምን እንደ ሆነ ፈትናችሁ ታውቁ ዘንድ በአእምሮአችሁ መታደስ ተለወጡ»",
        "noteEn": "“Be transformed by the renewal of your mind, that by testing you may discern what is the will of God.”"
      },
      {
        "ref": "ምሳሌ 3:5-6",
        "noteAm": "«በፍጹም ልብህ በእግዚአብሔር ታመን፥ በራስህም ማስተዋል አትደገፍ፤ በመንገድህ ሁሉ እርሱን እወቅ፥ እርሱም ጎዳናህን ያቀናልሃል»",
        "noteEn": "“Trust in the Lord with all your heart, and do not lean on your own understanding; in all your ways acknowledge him.”"
      }
    ]
  },
  {
    "id": "capsule-b8",
    "bookNr": 8,
    "chapter": 1,
    "verseStart": 16,
    "verseEnd": 17,
    "verseRefAm": "መጽሐፈ ሩት 1:16-17",
    "verseRefEn": "Ruth 1:16-17",
    "verseTextAm": "ሩትም። ወደምትሄጅበት እሄዳለሁና፥ በምታድሪበትም አድራለሁና እንድተውሽ ከአንቺም ዘንድ እንድመለስ አታስቸግሪኝ፤ ሕዝብሽ ሕዝቤ፥ አምላክሽም አምላኬ ይሆናል፤ በምትሞችበትም ስፍራ እሞታለሁ፥ በዚያም እቀበራለሁ፤ ከሞት በቀር አንቺንና እኔን አንዳች ቢለየን እግዚአብሔር ይህን ያድርግብኝ እንዲሁም ይጨምርብኝ አለች።",
    "verseTextEn": "And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God: Where thou diest, will I die, and there will I be buried: the Lord do so to me, and more also, if ought but death part thee and me.",
    "titleAm": "አምላክሽ አምላኬ ይሆናል — የሰርግ የፍቅር ቃል ወይስ የቃል ኪዳን መለወጥ?",
    "titleEn": "Your God Shall Be My God — Wedding Romance vs Covenant Conversion",
    "taglineAm": "የሞአባዊቷ ሩት ኪዳናዊ ወደ እግዚአብሔር መመለስ ዛሬ ለፍቅር ሰርግ ቃለ መሐላ ብቻ ሲውል",
    "taglineEn": "Ruth’s costly covenant renunciation of pagan Moab reduced to sentimental wedding vows",
    "eraAm": "የመሳፍንት ዘመን የረሃብና የምሕረት ወቅት",
    "eraEn": "Days When the Judges Ruled",
    "locationAm": "የሞአብ ምድር መንገድ ወደ ቤተልሔም",
    "locationEn": "Border Road from Moab to Bethlehem",
    "yearApprox": "1100 ዓ.ዓ.",
    "keyIcon": "🌾",
    "sceneAm": {
      "setting": "በእስራኤል ረሃብ በነበረበት ጊዜ ወደ ሞአብ የሄደው የኤሊሜሌክ ቤተሰብ ወንዶች በሙሉ ሞተው ኑኃሚን ከሁለት የሞአብ ምራቶቿ ጋር በቀረችበት ወቅት።",
      "dailyLife": "ባልቴት የሆናት ሴት በጥንቱ ዓለም ምንም ዓይነት የኑሮ ዋስትና፣ ማኅበራዊ መብትና ምግብ ማግኛ መንገድ አልነበራትም።",
      "socialTension": "ኑኃሚን ወደ ቤተልሔም ባዶዋን ስትመለስ ዖርፋ ወደ አረማዊ አማልክቷ ተመለሰች፤ ሩት ግን የትውልድ አገሯንና ጣዖቷን ክዳ ተከተለቻት።"
    },
    "sceneEn": {
      "setting": "During a severe famine, an Israelite family fled to pagan Moab; the father and both sons died, leaving Naomi with two foreign daughters-in-law.",
      "dailyLife": "In antiquity, childless widows were destitute outcasts with zero financial safety net, inheritance, or protection.",
      "socialTension": "Orpah returned to her pagan people and gods; Ruth made an astonishing, irrevocable break with Moab to embrace Yahweh."
    },
    "metaphorAm": {
      "origin": "የሩት መሐላ ለፍቅር ሳይሆን ለእስራኤል አምላክ ለእግዚአብሔር ኪዳን የተሰጠ ሙሉ የልብ መገዛትና መለወጥ (conversion) ነው።",
      "linguisticNuance": "«ሕዝብሽ ሕዝቤ፥ አምላክሽ አምላኬ ይሆናል» — ጣዖትን ክዶ የከሞሽን አምልኮ ጥሎ ወደ ሕያው አምላክ መሸሸግ ነው።",
      "crowdReaction": "ቦዔዝ በኋላ ላይ «በክንፎቹ በታች ልትጠጊ ወደ መጣሽበት ወደ እስራኤል አምላክ በረከትሽ ይብዛ» በማለት እምነቷን አደነቀ።"
    },
    "metaphorEn": {
      "origin": "Ruth’s confession was not sentimental romantic devotion, but a profound theological conversion to the God of Israel.",
      "linguisticNuance": "“Your people my people, your God my God” meant a total forsaking of Chemosh and Moabite pagan heritage.",
      "crowdReaction": "Boaz later marveled at her faith: \"The Lord repay you for what you have done, under whose wings you have come to take refuge.\""
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ በሰርግ ሥነ-ሥርዓት ላይ የባልና የሚስት የፍቅር ማሰሪያ አድርገው ብቻ ይጠቀሙበታል፤ ዋናውን የመዳንና የኪዳን መልእክት ይዘነጉታል።",
      "damage": "የመጽሐፉን ክርስቶሳዊ የዋጅነት (Kinsman-Redeemer) ምስጢርና የአሕዛብን ወደ እግዚአብሔር መንግሥት የመግባት ታላቅ ጸጋ ይደብቃል።"
    },
    "distortionEn": {
      "claim": "Used almost exclusively as sentimental romantic vows at modern weddings between brides and grooms.",
      "damage": "It obscures the staggering spiritual cost of conversion and empties the story of its redemptive-historical glory (the lineage of Christ)."
    },
    "truthAm": {
      "contextSummary": "የመጽሐፈ ሩት ዋና ዓላማ እግዚአብሔር በአሕዛብ ላይ ያለውን ምሕረትና የዳዊትን የዘር ሐረግ (በመጨረሻም የክርስቶስን መወለድ) ማሳየት ነው።",
      "surroundingVerses": "ሩት በቤተልሔም አዝመራ እየለቀመች እግዚአብሔር በቦዔዝ በኩል ዋጃት፤ የዳዊትም ቅድመ አያት ሆነች።",
      "timelessPrinciple": "እውነተኛ እምነት ሁሉን ትቶ ወደ እግዚአብሔር መሸሸግ ነው፤ ጌታም የተናቁትንና የባዕድ አገር ሰዎችን በጸጋው ወደ ቤተሰቡ ይቀበላል።"
    },
    "truthEn": {
      "contextSummary": "Ruth depicts God’s sovereign providential mercy drawing a Gentile outcast into the covenant line of King David and Jesus Christ.",
      "surroundingVerses": "Through the kinsman-redeemer Boaz, Ruth the destitute foreigner is redeemed, entering the messianic genealogy (Ruth 4:21-22).",
      "timelessPrinciple": "Saving faith involves abandoning every idolatrous refuge to rest beneath the wings of Yahweh’s redeeming grace."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 1:5",
        "noteAm": "«ቦዔዝም ከሩት ኢዮቤድን ወለደ፤ ኢዮቤድም እሴይን ወለደ፤ እሴይም ንጉሥ ዳዊትን ወለደ»",
        "noteEn": "“And Boaz the father of Obed by Ruth, and Obed the father of Jesse, and Jesse the father of David the king.”"
      },
      {
        "ref": "ሉቃስ 14:26",
        "noteAm": "«ማንም ወደ እኔ የሚመጣ አባቱንና እናቱን ሚስቱንም ልጆቹንም ወንድሞቹንም እኅቶቹንም የገዛ ሕይወቱን እንኳ ባይጠላ፥ ደቀ መዝሙሬ ሊሆን አይችልም»",
        "noteEn": "“If anyone comes to me and does not hate his own father and mother... he cannot be my disciple.”"
      },
      {
        "ref": "መዝሙር 36:7",
        "noteAm": "«አምላክ ሆይ፥ ምሕረትህ ምንኛ ክቡር ነው! የሰው ልጆች በክንፎችህ ጥላ ሥር ይታመናሉ»",
        "noteEn": "“How precious is your steadfast love, O God! The children of mankind take refuge in the shadow of your wings.”"
      }
    ]
  },
  {
    "id": "capsule-b9",
    "bookNr": 9,
    "chapter": 16,
    "verseStart": 7,
    "verseEnd": 7,
    "verseRefAm": "መጽሐፈ ሳሙኤል ቀዳማዊ 16:7",
    "verseRefEn": "1 Samuel 16:7",
    "verseTextAm": "እግዚአብሔር ግን ሳሙኤልን። ፊቱን የቁመቱንም ዘለግታ አትይ፤ ሰው እንዲያይ እግዚአብሔር አያይምና ናቅሁት፤ ሰው ፊትን ያያል፥ እግዚአብሔር ግን ልብን ያያል አለው።",
    "verseTextEn": "But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.",
    "titleAm": "እግዚአብሔር ልብን ያያል — የሞራል ስድነት ፈቃድ ወይስ የእውነተኛ ቅድስና ፍተሻ?",
    "titleEn": "God Looks at the Heart — Moral Laxity Excuse vs Deep Heart Examination",
    "taglineAm": "ሳኦል በቁመቱ ሳለ ዳዊት በልቡ የታየበት መለኮታዊ ሚዛን ዛሬ ለኃጢአት ማመካኛ ሲደረግ",
    "taglineEn": "God’s rejection of carnal outward appearance twisted into excusing blatant sinful disobedience",
    "eraAm": "የእስራኤል ንግሥና መጀመሪያ ዘመን",
    "eraEn": "Inauguration of the Monarchy",
    "locationAm": "የቤተልሔማዊው የእሴይ ቤት",
    "locationEn": "Jesse’s House in Bethlehem",
    "yearApprox": "1025 ዓ.ዓ.",
    "keyIcon": "👑",
    "sceneAm": {
      "setting": "ሳሙኤል እግዚአብሔር የጣለውን ንጉሥ ሳኦልን ተክቶ አዲስ ንጉሥ እንዲቀባ በእግዚአብሔር ታዞ ወደ እሴይ ቤት የሄደበት ወቅት።",
      "dailyLife": "በጥንቱ ዓለም ንጉሥ የሚሆነው ረጅም፣ ኃያል፣ ፊተ መልካምና በጦርነት አስፈሪ የሆነ ሰው ነበር፤ ሳኦልም ከትከሻው ወደ ላይ ከሕዝቡ ሁሉ ይረዝም ነበር።",
      "socialTension": "ሳሙኤል የበኩር ልጁን የኤልያብን ቁመትና ግርማ አይቶ «ይህ ነው» ሲል እግዚአብሔር ውጫዊውን ውበት ውድቅ አደረገው።"
    },
    "sceneEn": {
      "setting": "Samuel arrived in Bethlehem under divine orders to anoint God’s chosen king after the rejection of Saul.",
      "dailyLife": "Ancient monarchies prized towering stature, physical beauty, and military presence (Saul was head and shoulders taller than all Israel).",
      "socialTension": "Samuel was captivated by Eliab’s impressive outward appearance, but God warned the prophet against superficial human metrics."
    },
    "metaphorAm": {
      "origin": "ሰው በአይን በሚታይ ቁመት፣ ልብስና ግርማ ሲደነቅ፣ እግዚአብሔር ግን በውስጥ ያለውን እውነተኛ እምነት፣ ታማኝነትና ትህትና ይመዝናል ማለት ነው።",
      "linguisticNuance": "«ሰው ፊትን ያያል፥ እግዚአብሔር ግን ልብን ያያል» — «ልብ» በዕብራይስጥ የሐሳብ፣ የፍላጎትና የውሳኔ ሁሉ ማዕከል ነው።",
      "crowdReaction": "በሜዳ በጎችን ሲጠብቅ የነበረው ታናሹ ዳዊት ተጠርቶ በወንድሞቹ ፊት ተቀባ።"
    },
    "metaphorEn": {
      "origin": "Human eyes are easily seduced by charm, prestige, and charisma, whereas Yahweh weighs the hidden motives and inner faith.",
      "linguisticNuance": "The Hebrew \"levav\" (heart) represents the core seat of conscience, will, and affection, not mere emotionalism.",
      "crowdReaction": "The youngest boy, tending sheep in obscurity, was summoned and anointed before his astonished older brothers."
    },
    "distortionAm": {
      "claim": "ብዙ ሰዎች በግልጽ ኃጢአት፣ ዓመፅና ዓለማዊነት ውስጥ ሆነው ሲገሰጹ «ዋናው ልብ ነው! ሰው ፊትን ያያል እግዚአብሔር ግን ልቤን ያውቃል» በማለት ንስሐ ላለመግባት ይጠቀሙበታል።",
      "damage": "የውሸት የሰላም ስሜት ይሰጣል፤ ንስሐን፣ እውነተኛ ቅድስናንና የመንፈስ ፍሬን ያጠፋል።"
    },
    "distortionEn": {
      "claim": "Rebellious individuals confronted over unbiblical conduct retort: \"Don’t judge me, God only looks at my heart, not my lifestyle!\"",
      "damage": "It justifies ongoing hypocrisy and sin, ignoring Jesus’ truth that corrupt fruit reveals a corrupt heart tree."
    },
    "truthAm": {
      "contextSummary": "1 ሳሙኤል 16 እግዚአብሔር ውጫዊ አስመሳይነትን እንደሚንቅና በውስጥ እውነተኛ እምነት ያለውን እንደሚፈልግ የሚያሳይ ነው።",
      "surroundingVerses": "ኢየሱስ በማቴዎስ 12:34 ላይ «በልብ የሞላውን አፍ ይናገራልና፤ ፍሬዋም በዛፏ ትታወቃለች» በማለት የልብ እውነታ በሕይወት እንደሚገለጥ አስተምሯል።",
      "timelessPrinciple": "እግዚአብሔር ልብን ያያል ማለት ኃጢአታችንን አያይም ማለት አይደለም፤ ይልቁንም የተሰወረውን ክፋታችንን ሁሉ በግልጽ ይመለከታል ማለት ነው።"
    },
    "truthEn": {
      "contextSummary": "1 Samuel 16 exposes the folly of superficial human judgment and shows that God seeks genuine covenant loyalty.",
      "surroundingVerses": "Jesus warned in Matthew 12:34-35: \"Out of the abundance of the heart the mouth speaks... the tree is known by its fruit.\"",
      "timelessPrinciple": "God looking at the heart is a terrifying warning for the hypocrite, for nothing is hidden from His all-searching holy gaze."
    },
    "crossReferences": [
      {
        "ref": "ኤርምያስ 17:9-10",
        "noteAm": "«የሰው ልብ ከሁሉ ይልቅ ተንኮለኛ እጅግም ክፉ ነው፤ እኔ እግዚአብሔር ልብን እመረምራለሁ ኩላሊትንም እፈትናለሁ»",
        "noteEn": "“The heart is deceitful above all things... I the Lord search the heart and test the mind.”"
      },
      {
        "ref": "ማቴዎስ 23:25-26",
        "noteAm": "«የጽዋውንና የወጭቱን ውጭ የምታጸዱ፥ ውስጡ ግን ቅሚያና ስስት የሞላበት እናንተ ግብዞች»",
        "noteEn": "“Woe to you, scribes and Pharisees, hypocrites! For you clean the outside of the cup and the plate, but inside they are full of greed.”"
      },
      {
        "ref": "ዕብራውያን 4:13",
        "noteAm": "«እኛን በሚቆጣጠር በእርሱ ዓይኖቹ ፊት ሁሉ ነገር የተራቆተና የተገለጠ ነው እንጂ፥ በእርሱ ፊት የተሰወረ ፍጥረት የለም»",
        "noteEn": "“No creature is hidden from his sight, but all are naked and exposed to the eyes of him to whom we must give account.”"
      }
    ]
  },
  {
    "id": "capsule-b10",
    "bookNr": 10,
    "chapter": 12,
    "verseStart": 7,
    "verseEnd": 7,
    "verseRefAm": "መጽሐፈ ሳሙኤል ካል 12:7",
    "verseRefEn": "2 Samuel 12:7",
    "verseTextAm": "ናታንም ዳዊትን አለው። ያ ሰው አንተ ነህ። የእስራኤል አምላክ እግዚአብሔር እንዲህ ይላል። በእስራኤል ላይ ንጉሥ ልትሆን ቀባሁህ፥ ከሳኦልም እጅ አዳንሁህ፤",
    "verseTextEn": "And Nathan said to David, Thou art the man. Thus saith the Lord God of Israel, I anointed thee king over Israel, and I delivered thee out of the hand of Saul;",
    "titleAm": "አንተ ነህ ያ ሰው — የሥልጣን አለመጠየቅ ወይስ የነቢያት ተግሣጽ?",
    "titleEn": "You Are the Man — Sovereign Immunity vs Prophetic Accountability",
    "taglineAm": "ናታን ንጉሡን በድፍረት የገሰጸበት ታሪክ ዛሬ \"የእግዚአብሔርን የተቀባ አትንኩ\" ተብሎ መሪዎችን ከመጠየቅ ለማዳን ሲገለበጥ",
    "taglineEn": "Nathan’s fearless exposure of royal abuse twisted by modern authoritarian pastors to evade accountability",
    "eraAm": "የዳዊት መንግሥት የክብርና የውድቀት ዘመን",
    "eraEn": "Davidic Kingdom & Bathsheba Crisis",
    "locationAm": "የኢየሩሳሌም ቤተ መንግሥት",
    "locationEn": "Royal Palace in Jerusalem",
    "yearApprox": "995 ዓ.ዓ.",
    "keyIcon": "🐑",
    "sceneAm": {
      "setting": "ንጉሥ ዳዊት ከቤርሳቤህ ጋር አመንዝሮ ታማኙን የጦር አለቃ ኦርዮን በጦር ግንባር በሴራ ካስገደለ በኋላ በቤተ መንግሥቱ ዝም ብሎ ተቀምጦ በነበረበት ወቅት።",
      "dailyLife": "በጥንቱ ዓለም ነገሥታት ፍጹም ገዢዎች ስለነበሩ ማንም ሊወቅሳቸው፣ ሊጠይቃቸው ወይም ፍርድ ቤት ሊያቀርባቸው አይችልም ነበር።",
      "socialTension": "ነቢዩ ናታን ስለ አንዲት ትንሽ የበግ ጠቦት ምሳሌ ተናግሮ ዳዊትን በቁጣ እንዲፈርድ ካደረገ በኋላ ጣቱን ቀስሮ «አንተ ነህ ያ ሰው!» በማለት አጋለጠው።"
    },
    "sceneEn": {
      "setting": "King David committed adultery with Bathsheba and engineered the cold-blooded battlefield murder of Uriah the Hittite.",
      "dailyLife": "Ancient monarchs possessed autocratic power; speaking truth to a king frequently resulted in immediate execution.",
      "socialTension": "Nathan confronted the king using a parable of a rich man slaughtering a poor neighbor’s solitary beloved ewe lamb."
    },
    "metaphorAm": {
      "origin": "የናታን ምሳሌ ዳዊት የነበረውን እጅግ የበዛ ሀብትና ንብረት እየረሳ የደሃውን ብቸኛ ሀብት የዘረፈውን የሥልጣን ጥጋብ ቁልጭ አድርጎ አሳየው።",
      "linguisticNuance": "«አታ ሃኢሽ» (አንተ ነህ ያ ሰው!) — ምንም ዓይነት ማምለጫ የማያስቀር ቀጥተኛ መለኮታዊ ክስ ነው።",
      "crowdReaction": "ዳዊት እንደ ሳኦል ሰበብ አልፈለገም፤ ወዲያው ተንበርክኮ «እግዚአብሔርን በድያለሁ» በማለት ንስሐ ገባ።"
    },
    "metaphorEn": {
      "origin": "The ewe lamb parable exposed David’s grotesque abuse of sovereign privilege in plundering Uriah’s only treasure.",
      "linguisticNuance": "The thunderous Hebrew phrase \"Attah ha’ish!\" shattered all royal defenses and excuses.",
      "crowdReaction": "Unlike Saul, David fell under conviction and wept: \"I have sinned against the Lord,\" penning Psalm 51."
    },
    "distortionAm": {
      "claim": "አንዳንድ አምባገነን መጋቢዎችና የቤተክርስቲያን መሪዎች «እኔ የተቀባሁ ነኝ፤ ማንም ሊገስጸኝ ወይም ስህተቴን ሊያጋልጥ አይችልም» በማለት ሥልጣናቸውን ያላግባብ ይጠቀማሉ።",
      "damage": "በቤተክርስቲያን ውስጥ የገንዘብና የስነ-ምግባር ብልሹነት እንዲስፋፋ ያደርጋል፤ በደል የደረሰባቸውን ምእመናን አፍ ያዘጋል።"
    },
    "distortionEn": {
      "claim": "Authoritarian church leaders claim absolute immunity, screaming \"Touch not God’s anointed!\" to silence whistleblower scrutiny.",
      "damage": "It protects predatory leadership, fosters institutional abuse, and silences victims of ecclesiastical injustice."
    },
    "truthAm": {
      "contextSummary": "2 ሳሙኤል 12 በእግዚአብሔር መንግሥት ማንም ሰው (ንጉሥም ቢሆን) ከሕግ በላይ እንዳልሆነና ሁሉም ለእግዚአብሔር ቃል ተጠያቂ መሆኑን ያሳያል።",
      "surroundingVerses": "ዳዊት ንስሐ ቢገባም እግዚአብሔር «ሰይፍ ከቤትህ አይርቅም» በማለት የኃጢአቱን ከባድ መዘዝ አሳልፎ ሰጠው።",
      "timelessPrinciple": "የእግዚአብሔር አገልጋይ በሥልጣን ላይ በወጣ ቁጥር ይበልጥ ለቅድስናና ለተጠያቂነት መገዛት አለበት እንጂ ከሕግ በላይ አይሆንም።"
    },
    "truthEn": {
      "contextSummary": "2 Samuel 12 proves that in the Kingdom of God, no leader—not even King David—is immune from moral accountability.",
      "surroundingVerses": "Though forgiven upon repentance, God decreed severe temporal consequences: \"The sword shall never depart from your house.\"",
      "timelessPrinciple": "Christian leaders are stewards under Christ, subject to biblical correction, transparency, and holy scrutiny."
    },
    "crossReferences": [
      {
        "ref": "1 ጢሞቴዎስ 5:19-20",
        "noteAm": "«በሽማግሌ ላይ ክስ ከሁለት ወይም ከሦስት ምስክር በቀር አትቀበል፤ ኃጢአት የሚሠሩትን ሌሎች ደግሞ እንዲፈሩ በሁሉ ፊት ገሥጻቸው»",
        "noteEn": "“As for those who persist in sin, rebuke them in the presence of all, so that the rest may stand in fear.”"
      },
      {
        "ref": "መዝሙር 51:3-4",
        "noteAm": "«እኔ መተላለፌን አውቃለሁና፥ ኃጢአቴም ሁልጊዜ በፊቴ ነውና፤ አንተን ብቻ በደልሁ፥ በቤትህም ክፉ ነገርን አደረግሁ»",
        "noteEn": "“For I know my transgressions, and my sin is ever before me. Against you, you only, have I sinned.”"
      },
      {
        "ref": "ገላትያ 2:11",
        "noteAm": "«ኬፋ ግን ወደ አንጾኪያ በመጣ ጊዜ ይወቀስበት ዘንድ ስለ ነበረው ፊት ለፊት ተቃወምሁት»",
        "noteEn": "“When Cephas came to Antioch, I opposed him to his face, because he stood condemned.”"
      }
    ]
  },
  {
    "id": "capsule-b11",
    "bookNr": 11,
    "chapter": 17,
    "verseStart": 13,
    "verseEnd": 13,
    "verseRefAm": "መጽሐፈ ነገሥት ቀዳማዊ 17:13",
    "verseRefEn": "1 Kings 17:13",
    "verseTextAm": "ኤልያስም አላት። አትፍሪ፤ ይልቅስ ሄደሽ እንዳልሺው አድርጊ፤ አስቀድመሽ ግን ከዱቄቱ ለእኔ ታናሽ እንጎቻ አድርገሽ አምጭልኝ፥ ከዚያም በኋላ ለአንቺና ለልጅሽ አድርጊ፤",
    "verseTextEn": "And Elijah said unto her, Fear not; go and do as thou hast said: but make me thereof a little cake first, and bring it unto me, and after make for thee and for thy son.",
    "titleAm": "አስቀድመሽ ለእኔ ትንሽ እንጀራ አድርጊ — የዘራፊዎች መጠቀሚያ ወይስ የእምነት ፈተና?",
    "titleEn": "Make Me a Small Cake First — Pastoral Extortion vs Miraculous Faith",
    "taglineAm": "ኤልያስ በሰራፕታ ባልቴት ቤት ያሳየው የእምነት ፈተና ዛሬ የብልጽግና ሰባኪዎች ከደሃው የመጨረሻውን ሳንቲም ለመቀበል ሲጠቀሙበት",
    "taglineEn": "Elijah’s trial of faith at Zarephath exploited by prosperity wolves to drain the final pennies of the destitute",
    "eraAm": "የአክዓብና የኤልያስ የድርቅ ዘመን",
    "eraEn": "Ahab & Elijah Drought Crisis",
    "locationAm": "የሲዶናዋ ሰራፕታ መንደር",
    "locationEn": "Zarephath of Sidon",
    "yearApprox": "860 ዓ.ዓ.",
    "keyIcon": "🏺",
    "sceneAm": {
      "setting": "በእስራኤል ምድር ለሦስት ዓመት ተኩል ዝናብ ሳይዘንብ የከፋ ረሃብና ድርቅ በነገሠበት ወቅት፤ ኤልያስ በሲዶና ግዛት ወደምትገኝ ወደ አረማዊቷ ባልቴት ቤት ሲላክ።",
      "dailyLife": "ሴቲቱ ከልጇ ጋር በልተው ለመሞት የቀራቸውን የመጨረሻ ጭብጥ ዱቄትና ጥቂት ዘይት ለመጋገር እንጨት ትለቅም ነበር።",
      "socialTension": "ንጉሥ አክዓብ ኤልያስን በየአገሩ እያሳደደ ሊገድለው ይፈልግ ነበር፤ እግዚአብሔር ግን ነቢዩን በድሃዋ ባልቴት ቤት ደበቀው።"
    },
    "sceneEn": {
      "setting": "A devastating 3.5-year drought parched the land under Ahab’s Baal worship; God directed Elijah to a Gentile widow in Phoenician territory.",
      "dailyLife": "The widow was gathering sticks to prepare her final handful of flour and drop of oil before starving to death with her boy.",
      "socialTension": "While King Ahab hunted Elijah to murder him, God sustained His fugitive prophet through an impoverished foreign widow."
    },
    "metaphorAm": {
      "origin": "ኤልያስ «አስቀድመሽ ለእኔ አድርጊ» ያለው ለራሱ ሆድ አስቦ ሳይሆን ሴቲቱ በእስራኤል አምላክ ላይ እንድትደገፍና ተአምር እንድትቀበል የእምነት ፈተና ሰጥቷት ነው።",
      "linguisticNuance": "እግዚአብሔር «የዱቄቱ ማድጋ አይጨረስም፥ የዘይቱም ማሰሮ አይጎድልም» ብሎ በገባው ቃል መሠረት ተአምሩ ተፈጸመ።",
      "crowdReaction": "ባልቴቷ በኤልያስ ቃል አምና አደረገች፤ ቤቷም በድርቁ ዘመን ሁሉ ተመገበ።"
    },
    "metaphorEn": {
      "origin": "Elijah’s demand tested her allegiance to Yahweh before releasing miraculous sustenance in famine.",
      "linguisticNuance": "The divine promise was unconditional: \"The jar of flour shall not be spent, and the jug of oil shall not empty.\"",
      "crowdReaction": "The widow trusted the word of the prophet, and her household ate miraculously for the remainder of the drought."
    },
    "distortionAm": {
      "claim": "የብልጽግና ሰባኪዎች ደሃ ምእመናን የቤት ኪራያቸውንና የምግብ ገንዘባቸውን ለሰባኪው እንዲሰጡ «የመጀመሪያውን ለእኔ ስጡ» በማለት ይህን ጥቅስ እንደ ማስገደጃ ይጠቀሙበታል።",
      "damage": "ደሃዎችን ይበዘብዛል፤ እግዚአብሔርን በገንዘብ ተደራዳሪ አድርጎ ያቀርባል፤ ወንጌልን ያሰድባል።"
    },
    "distortionEn": {
      "claim": "Prosperity charlatans coerce impoverished believers to hand over rent and food money, shouting: \"Give your seed to the man of God first!\"",
      "damage": "It extorts vulnerable families, misrepresents God as a mercenary, and brings blasphemy upon the pastoral office."
    },
    "truthAm": {
      "contextSummary": "1 ነገሥት 17 የእግዚአብሔርን መለኮታዊ አቅርቦትና ለአሕዛብ የተገለጠውን ጸጋ ያሳያል (ሉቃስ 4:25-26)።",
      "surroundingVerses": "ኤልያስ ሀብት አልሰበሰበም፤ ለቅንጦት አልጠየቀም፤ የነበረው የእግዚአብሔርን ሕዝብ ከጣዖት ወደ አምላክ መመለስ ነበር።",
      "timelessPrinciple": "እግዚአብሔር በችግር ውስጥ ያሉትን ይታደጋል፤ የአገልጋዮች ኃላፊነት ደግሞ መንጋውን ማገልገል እንጂ መበዝበዝ አይደለም።"
    },
    "truthEn": {
      "contextSummary": "1 Kings 17 highlights God’s sovereign grace to an undeserving Gentile widow in Phoenicia, as Jesus noted in Luke 4:25-26.",
      "surroundingVerses": "Elijah sought no personal riches; he lived in a modest attic room wholly consecrated to the glory of God.",
      "timelessPrinciple": "God faithfully provides for His saints in adversity, while true shepherds sacrifice for the flock rather than fleece them."
    },
    "crossReferences": [
      {
        "ref": "ሉቃስ 4:25-26",
        "noteAm": "«በኤልያስ ዘመን በሰማይ ሦስት ዓመት ከስድስት ወር ዝናብ ሳይዘንብ... ኤልያስ በሲዶና አገር ወዳለች ወደ ሰራፕታ ባልቴት እንጂ ወደ አንዲቷም አልተላከም»",
        "noteEn": "“There were many widows in Israel in the days of Elijah... and Elijah was sent to none of them but only to Zarephath.”"
      },
      {
        "ref": "2 ቆሮንቶስ 12:14",
        "noteAm": "«እናንተን እንጂ ገንዘባችሁን አልሻምና... ወላጆች ለልጆች እንጂ ልጆች ለወላጆች ገንዘብ ሊያከማቹ አይገባቸውም»",
        "noteEn": "“For I seek not what is yours but you... children are not obligated to save up for their parents, but parents for their children.”"
      },
      {
        "ref": "ያዕቆብ 1:27",
        "noteAm": "«ንጹሕ የሆነ ነውርም የሌለበት አምልኮ በእግዚአብሔር አብ ዘንድ ይህ ነው፤ ወላጅ የሌላቸውን ልጆች ባልቴቶችንም በመከራቸው መጠየቅ»",
        "noteEn": "“Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction.”"
      }
    ]
  },
  {
    "id": "capsule-b12",
    "bookNr": 12,
    "chapter": 2,
    "verseStart": 23,
    "verseEnd": 24,
    "verseRefAm": "መጽሐፈ ነገሥት ካልዕ 2:23-24",
    "verseRefEn": "2 Kings 2:23-24",
    "verseTextAm": "ዘወርም ብሎ አያቸው፥ በእግዚአብሔርም ስም ረገማቸው፤ ከዱርም ሁለት ድቦች ወጥተው ከብላቴኖች አርባ ሁለቱን ሰባበሩአቸው። ከዚያም ወደ ቀርሜሎስ ተራራ ሄደ፥ ከዚያም ወደ ሰማርያ ተመለሰ።",
    "verseTextEn": "And he went up from thence unto Beth–el: and as he was going up by the way, there came forth little children out of the city, and mocked him, and said unto him, Go up, thou bald head; go up, thou bald head. And he turned back, and looked on them, and cursed them in the name of the Lord. And there came forth two she bears out of the wood, and tare forty and two children of them.",
    "titleAm": "የኤልሳዕ ድቦች — ንጹሐን ልጆችን መርገም ወይስ የጣዖት አምልኮ አመፅ?",
    "titleEn": "Elisha and the Bears — Cursing Children vs Defiance of Bethel Apostasy",
    "taglineAm": "ኤልሳዕን የተሳለቁበት ወንበዴዎች ታሪክ ዛሬ የሐሰት ነቢያት ተቺዎቻቸውን ለማስፈራሪያ ሲጠቀሙበት",
    "taglineEn": "Bethel’s idolatrous youth gang mocking Yahweh’s prophet twisted by cult leaders to threaten critics with divine curses",
    "eraAm": "የኤልሳዕ ዘመንና የቤቴል ጣዖት አምልኮ",
    "eraEn": "Elisha’s Ministry & Bethel Apostasy",
    "locationAm": "ወደ ቤቴል በሚወስደው መንገድ ላይ",
    "locationEn": "Ascent to Bethel",
    "yearApprox": "850 ዓ.ዓ.",
    "keyIcon": "🐻",
    "sceneAm": {
      "setting": "ቤቴል በኢዮርብዓም የተሠራው የወርቅ ጥጃ የሚመለክባት የእስራኤል የከፋ የጣዖት ማዕከል በነበረችበት ዘመን፤ ኤልሳዕ ኤልያስን ተክቶ በይፋ ማገልገል ሲጀምር።",
      "dailyLife": "በጥንቱ ዓለም የመንገድ ላይ የወጣት ወንበዴዎች ቡድን (young men/gangs) ተጓዦችን በማስፈራራትና በመዝረፍ ይታወቁ ነበር።",
      "socialTension": "ከ50 በላይ የሚሆኑ ወጣቶች ከከተማ ወጥተው ኤልሳዕን በመክበብ «አንተ ራሰ በራ ውጣ! (እንደ ኤልያስ ወደ ሰማይ ሂድና ጥፋልን)» እያሉ በያህዌህ ነቢይ ላይ ዓመፁ።"
    },
    "sceneEn": {
      "setting": "Bethel was the premier sanctuary of golden calf idolatry, violently hostile to Yahweh’s true prophets.",
      "dailyLife": "Bands of young adult men roamed city outskirts as dangerous gangs harassing travelers and enforcing pagan cult dominance.",
      "socialTension": "A mob of over forty young men surrounded Elisha, menacingly shouting: \"Go up, baldhead!\"—taunting him to vanish like Elijah."
    },
    "metaphorAm": {
      "origin": "«ውጣ» የሚለው ቃል ኤልያስ በእሳት ሰረገላ ወደ ሰማይ እንደ ሄደው አንተም ከምድር ጥፋ የሚል የእግዚአብሔርን ኃይል የመሳለቅ ዓመፅ ነበር።",
      "linguisticNuance": "በዕብራይስጥ «ነዓሪም ቀታኒም» የሚለው ቃል ጨቅላ ሕፃናትን ሳይሆን እስከ 20-30 ዓመት ያሉ ወጣት ወንዶችን (እንደ ሰሎሞን 1ነገ 3:7) ሊያመለክት ይችላል።",
      "crowdReaction": "ሁለት ድቦች ከዱር ወጥተው 42ቱን ቀደዷቸው፤ የቤቴል ከተማም በእግዚአብሔር ቅድስና ተንቀጠቀጠች።"
    },
    "metaphorEn": {
      "origin": "“Go up!” ridiculed Elijah’s miraculous ascension, mocking the supernatural power and authority of Yahweh.",
      "linguisticNuance": "The Hebrew \"ne’arim qetannim\" refers to young men/adolescents (like Solomon when he took the throne in 1 Kings 3:7), not innocent toddlers.",
      "crowdReaction": "Two she-bears emerged from the woods mauling forty-two mockers, striking terror into apostate Bethel."
    },
    "distortionAm": {
      "claim": "የሐሰት ነቢያትና አገልጋዮች «እኔን የነካ ወይም የገሰጸ በድንገት ይሞታል፤ በኤልሳዕ ዘመን ልጆቹን ድብ እንደበላቸው ትቀሰፋላችሁ» በማለት ሰዎችን ያስፈራራሉ።",
      "damage": "ሰዎች የሐሰት ትምህርትን እንዳይመረምሩ ሽብር ይፈጥራል፤ መጽሐፍ ቅዱስን ወደ አስፈራሪ ድግምትነት ይለውጣል።"
    },
    "distortionEn": {
      "claim": "Cultish preachers scream: \"If you question my prophecies, God will send bears or cancer upon your family!\"",
      "damage": "It instills paralyzing terror, silences legitimate theological discernment, and shields false prophets from biblical testing."
    },
    "truthAm": {
      "contextSummary": "2 ነገሥት 2 የቤቴል ጣዖት አምላኪዎች በእግዚአብሔር ነቢይ ላይ ያሳዩትን ህዝባዊ ዓመፅ እግዚአብሔር በጽድቅ እንደፈረደበት የሚያሳይ ታሪክ ነው።",
      "surroundingVerses": "በዚያው ምዕራፍ ኤልሳዕ የኢያሪኮን መርዘኛ ውሃ በጨው አድሶ ሕይወትን ሰጥቷል፤ ፍርዱ የጣዖታውያን ዓመፅ ውጤት ነው።",
      "timelessPrinciple": "የእግዚአብሔርን ቃልና ቅድስና ማቃለል ከባድ ፍርድ ያመጣል፤ ነገር ግን በሐዲስ ኪዳን ጠላቶቻችንን እንድንባርክ እንጂ እንድንረግም አልተጠራንም።"
    },
    "truthEn": {
      "contextSummary": "2 Kings 2 demonstrates Yahweh vindicating His prophetic authority against organized pagan contempt at the shrine of Bethel.",
      "surroundingVerses": "In the same chapter, Elisha miraculously healed Jericho’s poisoned water supply, displaying God’s mercy alongside judgment.",
      "timelessPrinciple": "Mocking God invites holy judgment, but under the New Covenant believers are commanded to bless persecutors, not curse them."
    },
    "crossReferences": [
      {
        "ref": "ሉቃስ 9:54-55",
        "noteAm": "«ደቀ መዛሙርቱ ያዕቆብና ዮሐንስ አይተው፦ ጌታ ሆይ፥ እሳት ከሰማይ ወርዶ ያጥፋቸው እንል ዘንድ ትወዳለህን? አሉት፤ እርሱ ግን ዘወር ብሎ ገሠጻቸው»",
        "noteEn": "“Lord, do you want us to tell fire to come down from heaven and consume them? But he turned and rebuked them.”"
      },
      {
        "ref": "ሮሜ 12:14",
        "noteAm": "«የሚያሳድዷችሁን መርቁ፥ መርቁ እንጂ አትርገሙ»",
        "noteEn": "“Bless those who persecute you; bless and do not curse them.”"
      },
      {
        "ref": "2 ዜና 36:16",
        "noteAm": "«የእግዚአብሔርን መልእክተኞች ይሳለቁ ነበር፥ ቃሉንም ያቃልሉ ነበር፤ ፈውስም እስካልተገኘ ድረስ የእግዚአብሔር ቁጣ በሕዝቡ ላይ ወጣ»",
        "noteEn": "“They kept mocking the messengers of God, despising his words and scoffing at his prophets, until wrath arose.”"
      }
    ]
  },
  {
    "id": "capsule-b13",
    "bookNr": 13,
    "chapter": 4,
    "verseStart": 9,
    "verseEnd": 10,
    "verseRefAm": "መጽሐፍ ዜና መዋዕል ቀዳማዊ 4:9-10",
    "verseRefEn": "1 Chronicles 4:9-10",
    "verseTextAm": "ያቤጽም ከወንድሞቹ ይልቅ የተከበረ ነበረ፤ እናቱም። በጣር ወልጄዋለሁና ብላ ስሙን። ያቤጽ ብላ ጠራችው። ያቤጽም። እባክህ፥ መባረክን ባርከኝ፥ አገሬንም አስፋው፤ እጅህም ከእኔ ጋር ትሁን፤ እንዳያሳዝነኝም ከክፋት ጠብቀኝ ብሎ የእስራኤልን አምላክ ጠራ፤ እግዚአብሔርም የለመነውን ሰጠው።",
    "verseTextEn": "And Jabez was more honourable than his brethren: and his mother called his name Jabez, saying, Because I bare him with sorrow. And Jabez called on the God of Israel, saying, Oh that thou wouldest bless me indeed, and enlarge my coast, and that thine hand might be with me, and that thou wouldest keep me from evil, that it may not grieve me! And God granted him that which he requested.",
    "titleAm": "የያዕቤጽ ጸሎት — የድንበር ማስፋፊያ ድግምት ወይስ ከኀዘን የመውጣት ጩኸት?",
    "titleEn": "The Prayer of Jabez — Magical Prosperity Mantra vs Cry of Grief",
    "taglineAm": "ያዕቤጽ ከስሙ ኀዘን ለመዳን ያቀረበው የግል ጩኸት በዘመናችን ለሪል-እስቴትና ለሀብት ማስፋፊያ ቀመር ሲደረግ",
    "taglineEn": "A poignant prayer of an afflicted man transformed into a best-selling magical formula for territorial and financial expansion",
    "eraAm": "የይሁዳ የዘር ሐረግና የያዕቤጽ ጸሎት",
    "eraEn": "Genealogies of Judah & Jabez",
    "locationAm": "በደቡብ ይሁዳ ምድር",
    "locationEn": "Southern Judah Territory",
    "yearApprox": "1000 ዓ.ዓ.",
    "keyIcon": "🗺️",
    "sceneAm": {
      "setting": "በይሁዳ ነገድ የዘር ሐረግ ስሞች መካከል የተጠቀሰ አጭር ታሪክ፤ ያዕቤጽ እናቱ «በኀዘን ወልጄዋለሁና» ብላ ስም ያወጣችለት ሰው ነበር።",
      "dailyLife": "በጥንቱ እስራኤል ስም የአንድን ሰው ማንነት፣ እጣ ፈንታና ባህሪ ያመለክት ነበር፤ «ያዕቤጽ» ማለት «ኀዘን/ህመም የሚያመጣ» ማለት ነበር።",
      "socialTension": "ያዕቤጽ የስሙ መርገም በሕይወቱ ላይ እንዳይሰለጥንና ለሌሎችም ኀዘን እንዳይሆን ወደ እስራኤል አምላክ ጮኸ።"
    },
    "sceneEn": {
      "setting": "Embedded in the lengthy genealogies of Judah, the chronicler pauses to highlight the pious plea of an otherwise obscure man.",
      "dailyLife": "In ancient Israel, names carried destiny and social identity; Jabez literally meant \"he causes sorrow/pain.\"",
      "socialTension": "Stigmatized from birth by maternal anguish, Jabez turned to Yahweh so his sorrow would not define or curse his future."
    },
    "metaphorAm": {
      "origin": "«ድንበሬን ብታሰፋ» የሚለው ጸሎት በይሁዳ ነገድ ውስጥ የተሰጠውን የርስት ድርሻ በሰላም ለመያዝ እንጂ የሌሎችን መሬት በስግብግብነት ለመውሰድ አይደለም።",
      "linguisticNuance": "«እጅህ ከእኔ ጋር ብትሆን፥ እንዳያሳዝነኝም ከክፉ ብትጠብቀኝ» — ያዕቤጽ ከስሙ ስቃይና ኀዘን ለመጠበቅ ነው የጸለየው።",
      "crowdReaction": "እግዚአብሔር የለመነውን ሰጠው፤ እርሱም ከወንድሞቹ ይልቅ የከበረ ሆነ።"
    },
    "metaphorEn": {
      "origin": "Enlarging territory meant securing his rightful tribal inheritance peacefully in Canaan, free from destructive pagan raids.",
      "linguisticNuance": "“Keep me from harm that it may not bring me pain” plays directly upon his name (Otzeb), pleading to break the cycle of suffering.",
      "crowdReaction": "God granted his humble request, distinguishing him as an honorable man of quiet faith."
    },
    "distortionAm": {
      "claim": "የምዕራባውያን የብልጽግና መጻሕፍት ይህን ጸሎት «በየቀኑ ጠዋት ከደገማችሁት ሀብታችሁ፣ ቢዝነሳችሁና ተጽዕኖአችሁ በድንገት ይሰፋል» የሚል ድግምት አደረጉት።",
      "damage": "ጸሎትን ወደ ሜካኒካል ቀመር ይቀይራል፤ የስግብግብነትን ምኞት በመጽሐፍ ቅዱስ ጥቅስ ያሸልማል።"
    },
    "distortionEn": {
      "claim": "Marketed by prosperity bestsellers as a daily recited spiritual incantation guaranteeing corporate expansion, wealth, and territory.",
      "damage": "It turns biblical prayer into self-serving pagan incantation and sanctifies naked greed under religious vocabulary."
    },
    "truthAm": {
      "contextSummary": "1 ዜና 4 ያዕቤጽ በኀዘንና በጭንቀት ውስጥ ሆኖ ወደ ቃል ኪዳኑ አምላክ ያቀረበውን ቅን ጸሎት እግዚአብሔር እንደሰማ የሚያሳይ ነው።",
      "surroundingVerses": "ጸሎቱ የአንድ ጊዜ ልመና እንጂ በየቀኑ የሚደገም አስማታዊ ማንትራ አልነበረም።",
      "timelessPrinciple": "እግዚአብሔር ከተሰበረ ልብ የሚወጣውን ቅን ጸሎት ይሰማል፤ ጸሎት ግን የእግዚአብሔር ፈቃድ የሚፈጸምበት እንጂ የሰው ስግብግብነት የሚረካበት አይደለም።"
    },
    "truthEn": {
      "contextSummary": "1 Chronicles 4 illustrates God’s gracious compassion on a sorrowful son crying out for deliverance, not a business expansion mantra.",
      "surroundingVerses": "The text simply notes: \"And God granted what he asked\"—a singular answer to sincere faith.",
      "timelessPrinciple": "Biblical prayer aligns human brokenness with divine mercy, whereas treating verses as magical incantations is pagan superstition."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 6:7-8",
        "noteAm": "«አሕዛብ በመደጋገማቸው እንዲሰሙ ይመስላቸዋልና በምትጸልዩበት ጊዜ እንደ እነርሱ በከንቱ አትድገሙ»",
        "noteEn": "“When you pray, do not heap up empty phrases as the Gentiles do, for they think that they will be heard for their many words.”"
      },
      {
        "ref": "1 ዮሐንስ 5:14",
        "noteAm": "«እንደ ፈቃዱ አንዳች ብንለምን ይሰማናል፤ በእርሱ ዘንድ ያለን ድፍረት ይህ ነው»",
        "noteEn": "“If we ask anything according to his will he hears us.”"
      },
      {
        "ref": "ፊልጵስዩስ 4:6",
        "noteAm": "«በነገር ሁሉ በጸሎትና በምልጃ ከምስጋና ጋር ልመናችሁን በእግዚአብሔር ፊት አስታውቁ እንጂ በአንዳች አትጨነቁ»",
        "noteEn": "“Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.”"
      }
    ]
  },
  {
    "id": "capsule-b14",
    "bookNr": 14,
    "chapter": 7,
    "verseStart": 14,
    "verseEnd": 14,
    "verseRefAm": "መጽሐፍ ዜና መዋዕል ካልዕ 7:14",
    "verseRefEn": "2 Chronicles 7:14",
    "verseTextAm": "በስሜ የተጠሩት ሕዝቤ ሰውነታቸውን አዋርደው ቢጸልዩ፥ ፊቴንም ቢፈግሉ፥ ከክፉ መንገዳቸውም ቢመለሱ፥ በሰማይ ሆኜ እሰማለሁ፥ ኃጢአታቸውንም ይቅር እላለሁ፥ ምድራቸውንም እፈውሳለሁ።",
    "verseTextEn": "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.",
    "titleAm": "በስሜ የተጠሩት ሕዝቤ ቢጸልዩ — የብሔርተኝነት መፈክር ወይስ የመቅደሱ ኪዳን?",
    "titleEn": "If My People Pray — Political Nationalism vs Temple Covenant",
    "taglineAm": "ለሰሎሞን ቤተ መቅደስ የተሰጠው መለኮታዊ ምላሽ ዛሬ ለዘመናዊ ዓለማዊ መንግሥታት የፖለቲካ ዘመቻ ሲውል",
    "taglineEn": "God’s covenant promise to Solomon regarding the Jerusalem Temple co-opted into modern nationalistic political slogans",
    "eraAm": "የሰሎሞን ቤተ መቅደስ ምረቃ ዘመን",
    "eraEn": "Solomonic Temple Dedication",
    "locationAm": "በኢየሩሳሌም ቤተ መቅደስ",
    "locationEn": "Temple Mount in Jerusalem",
    "yearApprox": "950 ዓ.ዓ.",
    "keyIcon": "🏛️",
    "sceneAm": {
      "setting": "ሰሎሞን ታላቁን የኢየሩሳሌም ቤተ መቅደስ ሰርቶ ሲጨርስ እግዚአብሔር በሌሊት ተገልጦ የሰሎሞንን የቅዳሴ ጸሎት እንደተቀበለው በነገረው ወቅት።",
      "dailyLife": "በእስራኤል በድርቅ፣ በአንበጣ ወይም በቸነፈር መቅሠፍት ሲመጣ ሕዝቡ ፊቱን ወደ ቤተ መቅደሱ አዙሮ ንስሐ ይገባ ነበር።",
      "socialTension": "እግዚአብሔር «ሰማይን ብዘጋ፥ ዝናብም እንዳይዘንብ... ቸነፈርንም በሕዝቤ ላይ ብሰድድ» በማለት ፍርዱ በኃጢአታቸው ምክንያት እንደሚመጣ አስጠነቀቀ።"
    },
    "sceneEn": {
      "setting": "Following the consecration of the Jerusalem Temple, Yahweh appeared to Solomon at night to ratify the sacred sanctuary covenant.",
      "dailyLife": "Whenever Israel experienced national catastrophes (drought, locust plagues, pestilence), they assembled at the Temple for corporate repentance.",
      "socialTension": "Yahweh declared that national distress was divine disciplinary chastisement designed to break sinful idolatry."
    },
    "metaphorAm": {
      "origin": "«በስሜ የተጠሩት ሕዝቤ» የሚለው ቃል በቀጥታ የሲናን ቃል ኪዳን የተጋሩትን የእስራኤልን ሕዝብና ወደ ቤተ መቅደሱ የሚመለከቱትን ያመለክታል።",
      "linguisticNuance": "«ምድራቸውንም እፈውሳለሁ» — በዘዳግም 28 የተጠቀሰውን ድርቅ አስወግጄ ምድሪቱ አዝመራ እንድትሰጥ አደርጋለሁ የሚል የከነዓን ምድር ተስፋ ነው።",
      "crowdReaction": "የእግዚአብሔር ክብር መቅደሱን ሞላው፤ ካህናቱም በእግዚአብሔር ክብር የተነሳ ሊያገለግሉ አልቻሉም።"
    },
    "metaphorEn": {
      "origin": "“My people who are called by my name” specifically identified covenant Israel, uniquely bound to the Jerusalem sacrificial altar.",
      "linguisticNuance": "“Heal their land” referred directly to restoring agricultural rainfall and banishing locust swarms according to Deuteronomy 28.",
      "crowdReaction": "Fire fell from heaven consuming the sacrifices, and the priests fell face down worshiping: \"For He is good, His love endures forever.\""
    },
    "distortionAm": {
      "claim": "ዘመናዊ ፖለቲከኞችና ሰባኪዎች ጥቅሱን ለዘመናዊ ዓለማዊ አገራት ወስደው «እኛ አገራችንን በጸሎት ታላቅ እናደርጋታለን» የሚል የብሔርተኝነት የፖለቲካ መፈክር ያደርጉታል።",
      "damage": "ቤተክርስቲያንን ወደ ፖለቲካዊ እንቅስቃሴ ይለውጣል፤ ክርስቶስ በመስቀል ላይ የፈጠረውን አዲሱን ሁለንተናዊ ቅዱስ ሕዝብ ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Secular political groups and patriotic preachers slap this verse onto modern geopolitical nations as a roadmap for military or economic dominance.",
      "damage": "It confuses secular nation-states with the biblical theocracy and supplants Christ’s spiritual kingdom with worldly civil religion."
    },
    "truthAm": {
      "contextSummary": "2 ዜና 7 የኢየሩሳሌም ቤተ መቅደስ የንስሐና የስርየት ማዕከል መሆኑን የሚያረጋግጥ የእግዚአብሔር ምላሽ ነው።",
      "surroundingVerses": "በቁጥር 19-20 ላይ እስራኤል ጣዖት ካመለከች «ይህን ቤት ከፊቴ እጥላለሁ» በማለት መቅደሱ እንደሚፈርስ እግዚአብሔር አስጠንቅቋል።",
      "timelessPrinciple": "ዛሬ «በስሙ የተጠራው የእግዚአብሔር ሕዝብ» በክርስቶስ ደም የተዋጀችው ሁለንተናዊት ቤተክርስቲያን እንጂ አንድ የተወሰነ ምድራዊ አገር አይደለም።"
    },
    "truthEn": {
      "contextSummary": "2 Chronicles 7 outlines the sacrificial role of the physical Temple in Jerusalem as a house of repentance for covenant Israel.",
      "surroundingVerses": "Verses 19-22 solemnly warn that if Israel turns to idols, God will pluck them up and make the Temple a laughingstock (fulfilled in 586 BC).",
      "timelessPrinciple": "In the New Covenant, the \"people called by His name\" is the redeemed Church of Jesus Christ from every tribe, tongue, and nation."
    },
    "crossReferences": [
      {
        "ref": "1 ጴጥሮስ 2:9",
        "noteAm": "«እናንተ ግን ከጨለማ ወደሚደነቅ ብርሃኑ የጠራችሁን የእርሱን በጎነት እንድትናገሩ የተመረጠ ትውልድ፥ የንጉሥ ካህናት፥ ቅዱስ ሕዝብ፥ ለርስቱ የተለየ ወገን ናችሁ»",
        "noteEn": "“You are a chosen race, a royal priesthood, a holy nation, a people for his own possession.”"
      },
      {
        "ref": "ዮሐንስ 18:36",
        "noteAm": "«ኢየሱስም መልሶ፦ መንግሥቴ ከዚህ ዓለም አይደለችም፤ መንግሥቴስ ከዚህ ዓለም ብትሆን... ሎሌዎቼ ይዋጉልኝ ነበር አለ»",
        "noteEn": "“Jesus answered, ‘My kingdom is not of this world. If my kingdom were of this world, my servants would have been fighting.’”"
      },
      {
        "ref": "ዕብራውያን 12:28",
        "noteAm": "«ስለዚህ የማይናወጥን መንግሥት ስለምንቀበል በማክበርና በፍርሃት እግዚአብሔርን ደስ እያሰኘን የምናመልክበትን ጸጋ እንያዝ»",
        "noteEn": "“Therefore let us be grateful for receiving a kingdom that cannot be shaken, and thus let us offer to God acceptable worship.”"
      }
    ]
  },
  {
    "id": "capsule-b15",
    "bookNr": 15,
    "chapter": 9,
    "verseStart": 1,
    "verseEnd": 2,
    "verseRefAm": "መጽሐፈ ዕዝራ 9:1-2",
    "verseRefEn": "Ezra 9:1-2",
    "verseTextAm": "ይህም ከተፈጸመ በኋላ አለቆቹ ወደ እኔ ቀርበው። የእስራኤል ሕዝብ ካህናቱም ሌዋውያኑም እንደ ከነዓናውያን እንደ ኬጢያውያን እንደ ፌርዛውያን እንደ ኢያቡሳውያን እንደ አሞናውያን እንደ ሞዓባውያን እንደ ግብጻውያንና እንደ አሞራውያን ርኵሰት ያደርጋሉ እንጂ ከምድር አሕዛብ አልተለዩም፤ ለራሳቸውና ለልጆቻቸውም ሴቶች ልጆቻቸውን ወስደዋል፥ የተቀደሰውንም ዘር ከምድር አሕዛብ ጋር ደባልቀዋል፤ አስቀድሞም አለቆቹና ሹማምቶቹ በዚህ መተላለፍ መጀመሪያ ሆነዋል አሉኝ።",
    "verseTextEn": "Now when these things were done, the princes came to me, saying, The people of Israel, and the priests, and the Levites, have not separated themselves from the people of the lands, doing according to their abominations, even of the Canaanites, the Hittites, the Perizzites, the Jebusites, the Ammonites, the Moabites, the Egyptians, and the Amorites. For they have taken of their daughters for themselves, and for their sons: so that the holy seed have mingled themselves with the people of those lands: yea, the hand of the princes and rulers hath been chief in this trespass.",
    "titleAm": "የተቀደሰው ዘር ከምድር አሕዛብ ጋር ተደባለቀ — የዘረኝነት ማጽደቂያ ወይስ የጣዖት አምልኮ መከላከያ?",
    "titleEn": "The Holy Seed Mingled — Racial Segregation vs Spiritual Idolatry",
    "taglineAm": "ዕዝራ ጣዖት አምላኪዎችን እንዳያገቡ የከለከለበት ቅዱስ ኪዳን ዛሬ ለዘረኝነትና ለጎሣ ጥላቻ ሲጣመም",
    "taglineEn": "Ezra’s grief over covenant intermarriage with idolaters twisted into justifications for racial segregation",
    "eraAm": "ከባቢሎን ምርኮ የመመለስ ዘመን",
    "eraEn": "Post-Exilic Restoration",
    "locationAm": "በዳግመኛ በተሠራው የኢየሩሳሌም መቅደስ",
    "locationEn": "Rebuilt Temple in Jerusalem",
    "yearApprox": "458 ዓ.ዓ.",
    "keyIcon": "📜",
    "sceneAm": {
      "setting": "ከ70 ዓመት የባቢሎን ምርኮ በኋላ ጥቂት ቀሪዎች ወደ ኢየሩሳሌም ተመልሰው መቅደሱን ሰርተው ሳለ፣ አለቆቹና ካህናቱ በአካባቢው ከነበሩት አረማውያን ጋር ሲጋቡ።",
      "dailyLife": "በከነዓን የቀሩት አሕዛብ አስጸያፊ የጣዖት አምልኮና የልጆች መሥዋዕት ያቀርቡ ነበር፤ እስራኤልን ወደ ምርኮ የጣፋትም ይኸው ጣዖት አምልኮ ነበር።",
      "socialTension": "ዕዝራ ይህንን ክህደት በሰማ ጊዜ ልብሱንና መጎናጸፊያውን ቀዶ፣ የራሱን ጠጉርና ጢም ነጭቶ በድንጋጤ እስከ ማታ ድረስ ተቀመጠ።"
    },
    "sceneEn": {
      "setting": "A fragile Jewish remnant returned from Babylon to rebuild Jerusalem; the leaders and priests promptly intermarried with neighboring pagans.",
      "dailyLife": "Surrounding peoples practiced abhorrent polytheistic cults, the very abominations that had led to the destruction of Jerusalem in 586 BC.",
      "socialTension": "Ezra was shattered by the discovery, tearing his garments and plucking hair from his head and beard in grief-stricken horror."
    },
    "metaphorAm": {
      "origin": "«የተቀደሰው ዘር» የሚለው አገላለጽ ባዮሎጂካል ወይም የቆዳ ቀለም ዘረኝነት ሳይሆን መሲሑ የሚወጣበትን የቃል ኪዳን መስመር ከጣዖት መጠበቅ ነው።",
      "linguisticNuance": "«እንደ አሕዛብ ርኵሰት አደረጉ» — ችግሩ የዘር ልዩነት ሳይሆን የእነዚያ ሕዝቦች አስጸያፊ አረማዊ የአምልኮ ልማድ ወደ እስራኤል መግባቱ ነበር።",
      "crowdReaction": "ሕዝቡ በሙሉ ከዕዝራ ጋር እያለቀሰ በታላቅ ንስሐ ወደ እግዚአብሔር ተመለሰ።"
    },
    "metaphorEn": {
      "origin": "“Holy seed” designates the consecrated covenant line through whom the Messiah would be born, preserved from pagan extinction.",
      "linguisticNuance": "The issue was explicitly \"their abominations\"—the spiritual pollution of Canaanite idolatry, not biological ethnicity.",
      "crowdReaction": "A great assembly of men, women, and children wept bitterly with Ezra, resolving to put away the idolatrous syncretism."
    },
    "distortionAm": {
      "claim": "ታሪክ እንደሚያሳየው ዘረኞች (ለምሳሌ በአፓርታይድና በባርነት ዘመን) ይህን ጥቅስ ወስደው «የተለያየ የቆዳ ቀለም ያላቸው ሰዎች መጋባት የለባቸውም፤ መጽሐፍ ቅዱስ ዘርን መደባለቅ ይከለክላል» ብለው አስተምረዋል።",
      "damage": "ጭካኔ የተሞላበት ዘረኝነትን በሃይማኖት ስም ያጸድቃል፤ ክርስቶስ የመሰረተውን የአንድነት ቤተሰብ ይሰብራል።"
    },
    "distortionEn": {
      "claim": "White supremacists and Apartheid theologians weaponized Ezra 9 to outlaw interracial marriage and enforce racial segregation.",
      "damage": "It sanctifies wicked racial prejudice under biblical terminology and directly violates the Gospel unity accomplished at the Cross."
    },
    "truthAm": {
      "contextSummary": "ዕዝራ 9 የሚያሳየው የሃይማኖት ንጽሕናን እንጂ የዘር መድልዎን አይደለም፤ ሩት ሞአባዊት፣ ራኬብ ከነዓናዊት ሆነው እግዚአብሔርን ስላመኑ በክርስቶስ የዘር ሐረግ ገብተዋል።",
      "surroundingVerses": "ዕዝራ በቁጥር 14 ላይ «እነዚህን ርኩሰቶች ከሚሠሩ አሕዛብ ጋር መጋባት ይገባናልን?» በማለት ችግሩ ርኩስ አምልኮ መሆኑን በግልጽ አስቀምጧል።",
      "timelessPrinciple": "የሐዲስ ኪዳን መመሪያ አማኝ ከማያምን ጋር በማይመች ቀንበር እንዳይጠመድ ማሳሰብ ነው (2 ቆሮ 6:14) እንጂ የዘር ልዩነት ክልከላ የለም።"
    },
    "truthEn": {
      "contextSummary": "Ezra 9 addresses spiritual apostasy, not biological racism; Rahab the Canaanite and Ruth the Moabitess were honored in the messianic lineage because of their faith.",
      "surroundingVerses": "Verse 14 identifies the sole danger: \"Should we again break your commandments and join in marriage with the people who practice these abominations?\"",
      "timelessPrinciple": "The New Testament counterpart is spiritual, not ethnic: believers must not be unequally yoked with unbelievers (2 Cor 6:14)."
    },
    "crossReferences": [
      {
        "ref": "2 ቆሮንቶስ 6:14",
        "noteAm": "«ከማያምኑ ጋር በማይመች ቀንበር አትጠመዱ፤ ጽድቅ ከዓመፅ ጋር ምን ተካፋይነት አለው? ብርሃንም ከጨለማ ጋር ምን ኅብረት አለው?»",
        "noteEn": "“Do not be unequally yoked with unbelievers. For what partnership has righteousness with lawlessness?”"
      },
      {
        "ref": "ገላትያ 3:28",
        "noteAm": "«አይሁዳዊ ወይም የግሪክ ሰው የለም፥ ባሪያ ወይም ጨዋ ሰው የለም፥ ወንድም ሴትም የለም፤ ሁላችሁ በክርስቶስ ኢየሱስ አንድ ሰው ናችሁና»",
        "noteEn": "“There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.”"
      },
      {
        "ref": "ሐዋርያት 17:26",
        "noteAm": "«የሰውንም ወገኖች ሁሉ በአንድ ደም ፈጠረ በምድርም ሁሉ ላይ እንዲኖሩ አደረገ»",
        "noteEn": "“And he made from one man every nation of mankind to live on all the face of the earth.”"
      }
    ]
  },
  {
    "id": "capsule-b16",
    "bookNr": 16,
    "chapter": 2,
    "verseStart": 20,
    "verseEnd": 20,
    "verseRefAm": "መጽሐፈ ነህምያ 2:20",
    "verseRefEn": "Nehemiah 2:20",
    "verseTextAm": "እኔም መልሼ። የሰማይ አምላክ ያከናውንልናል፥ እኛም ባሪያዎቹ ተነሥተን እንሠራለን፤ እናንተ ግን በኢየሩሳሌም እድል ፈንታና መብት መታሰቢያም የላችሁም አልኋቸው።",
    "verseTextEn": "Then answered I them, and said unto them, The God of heaven, he will prosper us; therefore we his servants will arise and build: but ye have no portion, nor right, nor memorial, in Jerusalem.",
    "titleAm": "የሰማይ አምላክ ያከናውንልናል — የኮርፖሬት ቢዝነስ መፈክር ወይስ የተቀደሰ ትጋት?",
    "titleEn": "The God of Heaven Will Prosper Us — Business Slogan vs Sacrificial Rebuilding",
    "taglineAm": "ነህምያ ጠላቶችን የተጋፈጠበት የእምነት አዋጅ ዛሬ ለግል ኩባንያዎች የገንዘብ ትርፍ ማበረታቻ ሲደረግ",
    "taglineEn": "Nehemiah’s holy resolve against hostile mockers repurposed as a corporate prosperity slogan",
    "eraAm": "የኢየሩሳሌም ቅጥር ዳግመኛ የመገንባት ዘመን",
    "eraEn": "Rebuilding the Walls of Jerusalem",
    "locationAm": "በፈራረሰው የኢየሩሳሌም ቅጥር ፊት ለፊት",
    "locationEn": "Ruins of Jerusalem’s Walls",
    "yearApprox": "445 ዓ.ዓ.",
    "keyIcon": "🧱",
    "sceneAm": {
      "setting": "የፋርስ ንጉሥ የአርጤክስስ መጠጥ አሳላፊ የነበረው ነህምያ የኢየሩሳሌም ቅጥር ፈርሶ በሮቿም በእሳት ተቃጥለው ሕዝቡ በመከራ መሆኑን በሰማ ጊዜ።",
      "dailyLife": "በጥንቱ ዓለም ቅጥር የሌላት ከተማ ለሌቦች፣ ለጠላት ጦርና ለአራዊት የተጋለጠች ነበረች፤ ኗሪዎቿም ክብረት አልነበራቸውም።",
      "socialTension": "ሰንባላጥ፣ ጦቢያና ጌሼም የተባሉት ጠላቶች ነህምያን «በንጉሡ ላይ ታምጻላችሁን?» እያሉ ሲያፌዙበትና ሲያስፈራሩት ነህምያ በድፍረት መለሰላቸው።"
    },
    "sceneEn": {
      "setting": "Nehemiah, cupbearer to Artaxerxes, learned that Jerusalem lay in charred ruins, its gates burned and its remnant exposed to violent disgrace.",
      "dailyLife": "An ancient city without protective walls was utterly defenseless against raids, bandits, and predatory regional warlords.",
      "socialTension": "Sanballat, Tobiah, and Geshem fiercely opposed the work, mocking the builders and threatening accusations of treason against Persia."
    },
    "metaphorAm": {
      "origin": "«የሰማይ አምላክ ያከናውንልናል» ያለው ለግል ጥቅም ሳይሆን የእግዚአብሔር ከተማና ሕዝብ ከውርደት እንዲወጡ ሕይወቱን አደጋ ላይ ጥሎ ሲሰራ ነው።",
      "linguisticNuance": "«እኛ ባሪያዎቹ ተነስተን እንሠራለን፤ እናንተ ግን በኢየሩሳሌም እድልና መብት መታሰቢያም የላችሁም» — ጠላቶችን ከእግዚአብሔር ስራ መለየት ነበር።",
      "crowdReaction": "ሕዝቡ በአንድ እጃቸው መሳሪያ ይዘው በሌላ እጃቸው እየገነቡ ቅጥሩን በ52 ቀናት ውስጥ ፈጸሙት።"
    },
    "metaphorEn": {
      "origin": "The declaration expressed holy confidence while risking life and limb to rebuild God’s sanctuary city, not seeking personal gain.",
      "linguisticNuance": "“We his servants will arise and build, but you have no portion or right or memorial in Jerusalem” drew an uncompromising line against apostasy.",
      "crowdReaction": "The people worked tirelessly with trowel in one hand and spear in the other, completing the massive fortifications in just 52 days."
    },
    "distortionAm": {
      "claim": "ዘመናዊ ሰባኪዎችና የንግድ ድርጅቶች ጥቅሱን ወስደው «ይህንን ቢዝነስ ጀምሩ፤ የሰማይ አምላክ ያከናውንላችኋል፤ ሚሊየነር ትሆናላችሁ» በማለት ለግል ትርፍ ይጠቀሙበታል።",
      "damage": "የነህምያን ራስን የመስዋዕት ማድረግ መንፈስ ይደብቃል፤ ኪዳናዊውን የእግዚአብሔር ስራ ወደ ግል ገንዘብ ማግኛ ዘዴነት ይለውጣል።"
    },
    "distortionEn": {
      "claim": "Prosperity motivational speakers exploit the verse as a guarantee of financial success for secular start-ups and business ventures.",
      "damage": "It erases Nehemiah’s profound self-denial and transforms a battle for the holy city into a hollow pep-talk for personal enrichment."
    },
    "truthAm": {
      "contextSummary": "ነህምያ 2 የሚያሳየው በእግዚአብሔር መንግሥት ስራ ውስጥ ያለውን እውነተኛ ትጋት፣ ጸሎትና ራስን ለወገን አሳልፎ መስጠትን ነው።",
      "surroundingVerses": "ነህምያ ለ12 ዓመታት ገዥ ሆኖ ሳለ የሕዝቡ ሸክም እንዳይከብድ የአገረ ገዥውን ደመወዝ እንዳልበላ በምዕራፍ 5:14-15 ገልጿል።",
      "timelessPrinciple": "የእግዚአብሔር በረከት የሚገለጠው የእርሱን መንግሥት በቅድስናና በታማኝነት ስናገለግል እንጂ ለግል ስግብግብነታችን ዋስትና ሆኖ አይደለም።"
    },
    "truthEn": {
      "contextSummary": "Nehemiah 2 showcases extraordinary sacrificial leadership, rigorous prayer, and courageous defense of God’s covenant community.",
      "surroundingVerses": "In Nehemiah 5:14-15, Nehemiah refused to take the governor’s food allowance for 12 years to spare the impoverished people financial burden.",
      "timelessPrinciple": "True kingdom prosperity is found in self-denial, prayerful labor, and the building up of the church for God’s glory."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 6:33",
        "noteAm": "«ነገር ግን አስቀድማችሁ የእግዚአብሔርን መንግሥት ጽድቁንም ፈልጉ፥ ይህም ሁሉ ይጨመርላችኋል»",
        "noteEn": "“Seek first the kingdom of God and his righteousness, and all these things will be added to you.”"
      },
      {
        "ref": "1 ቆሮንቶስ 15:58",
        "noteAm": "«ድካማችሁ በጌታ ከንቱ እንዳልሆነ አውቃችኋልና፥ የምትደላደሉ፥ የማትነቃነቁም፥ የጌታም ሥራ ሁልጊዜ የሚበዛላችሁ ሁኑ»",
        "noteEn": "“Always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.”"
      },
      {
        "ref": "መዝሙር 127:1",
        "noteAm": "«እግዚአብሔር ቤትን ካልሠራ፥ ሠራተኞች በከንቱ ይደክማሉ፤ እግዚአብሔር ከተማን ካልጠበቀ፥ ጠባቂ በከንቱ ይተጋል»",
        "noteEn": "“Unless the Lord builds the house, those who build it labor in vain.”"
      }
    ]
  },
  {
    "id": "capsule-b17",
    "bookNr": 17,
    "chapter": 4,
    "verseStart": 14,
    "verseEnd": 14,
    "verseRefAm": "መጽሐፈ አስቴር 4:14",
    "verseRefEn": "Esther 4:14",
    "verseTextAm": "በዚህ ጊዜ ቸል ብትዪ ዕረፍትና መዳን ለአይሁድ ከሌላ ስፍራ ይሆንላቸዋል፥ አንቺና የአባትሽ ቤት ግን ትጠፋላችሁ፤ ደግሞስ ወደ መንግሥት የመጣሽው እንደዚህ ላለው ጊዜ እንደ ሆነ ማን ያውቃል?",
    "verseTextEn": "For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father’s house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?",
    "titleAm": "እንደዚህ ላለው ጊዜ — የራስ ከፍታ ወይስ የሞት አደጋን የመጋፈጥ መስዋዕትነት?",
    "titleEn": "For Such a Time as This — Self-Promotion vs Mortal Sacrifice",
    "taglineAm": "መርዶክዮስ ለአስቴር ያስጠነቀቃት የሞት ጥሪ ዛሬ ለግል ዝናና ዝናብ መድረክ ማሞቂያ ሲደረግ",
    "taglineEn": "Mordecai’s stark warning of providential responsibility twisted into a slogan for celebrity self-actualization",
    "eraAm": "የፋርስ ግዞትና የሐማ ሴራ ዘመን",
    "eraEn": "Persian Exile & Haman’s Plot",
    "locationAm": "በሱሳ የፋርስ ቤተ መንግሥት",
    "locationEn": "Citadel of Susa",
    "yearApprox": "479 ዓ.ዓ.",
    "keyIcon": "👑",
    "sceneAm": {
      "setting": "ክፉው ሐማ በመላው የፋርስ ግዛት ውስጥ የሚገኙትን አይሁድ በሙሉ በአንድ ቀን እንዲገደሉና ንብረታቸው እንዲዘረፍ የንጉሡን ማህተም ባስመታበት አስፈሪ ወቅት።",
      "dailyLife": "አይሁድ ማቅ ለብሰው አመድ ላይ ተቀምጠው በታላቅ ልቅሶ ይጾሙ ነበር፤ አስቴር ደግሞ በቤተ መንግሥት ንግሥት ሆና ተቀምጣ ነበር።",
      "socialTension": "ያለ ጥሪ ወደ ንጉሡ ፊት የገባ ማንኛውም ሰው ንጉሡ የወርቅ በትር ካልዘረጋለት በቀር በሞት ይቀጣ ነበር፤ አስቴርም ለ30 ቀን አልተጠራችም ነበር።"
    },
    "sceneEn": {
      "setting": "Haman secured a royal edict from King Ahasuerus to exterminate every Jewish man, woman, and child across 127 provinces of Persia.",
      "dailyLife": "Jews wept in sackcloth and ashes across the empire; Queen Esther sat in protected imperial luxury within the palace harem.",
      "socialTension": "Unbidden entry into the inner royal court carried an automatic death penalty unless the king extended his golden scepter; Esther had not been called for thirty days."
    },
    "metaphorAm": {
      "origin": "መርዶክዮስ ለአስቴር የነገራት፦ «አንቺ ዝም ብትዪ ረድኤትና ማዳን ከሌላ ስፍራ ይነሳል፤ አንቺና የአባትሽ ቤት ግን ትጠፋላችሁ» በማለት የእግዚአብሔር ሉዓላዊ አሰራር በሰው ፈቃድ እንደማይታገድ አሳሰባት።",
      "linguisticNuance": "«እንደዚህ ላለው ጊዜ» ማለት የራስሽን ክብር እንድታገኚ ሳይሆን ሕይወትሽን ለወገንሽ አደጋ ላይ እንድትጥዪ የተሰጠ መለኮታዊ ኃላፊነት ነው።",
      "crowdReaction": "አስቴር «ከጠፋሁም ልጥፋ!» በማለት ለሦስት ቀን ከፆመች በኋላ ሕይወቷን አስይዛ ወደ ንጉሡ ገባች።"
    },
    "metaphorEn": {
      "origin": "Mordecai reminded Esther that God’s covenant promise would prevail with or without her: \"relief and deliverance will rise for the Jews from another place.\"",
      "linguisticNuance": "“For such a time as this” was not a promise of celebrity royalty, but a terrifying summons to risk execution for the redemption of God’s people.",
      "crowdReaction": "Esther made her heroic resolve: \"Fast for me... and if I perish, I perish!\"—risking death to approach the Persian monarch."
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ ለግል ስኬታቸው፣ ለስልጣን ማግኛቸው ወይም ለዝና መድረካቸው «እግዚአብሔር እንደዚህ ላለው ጊዜ ከፍ አድርጎኛል!» እያሉ ለራስ ማወደሻ ይጠቀሙበታል።",
      "damage": "የመስቀሉንና የመስዋዕትነቱን ጥሪ ወደ ራስ ወዳድነት ይለውጣል፤ የመርዶክዮስን ከባድ የማስጠንቀቂያ ቃል ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Used constantly by influencers and social media figures to baptize career ambition and celebrity status (\"God placed me on this stage for such a time as this!\").",
      "damage": "It flips a summons to bloody self-sacrifice into an anthem for vanity, self-promotion, and comfort."
    },
    "truthAm": {
      "contextSummary": "የመጽሐፈ አስቴር ማዕከል የእግዚአብሔር ድብቅ አያያዝ (Providence) እና አገልጋዮቹ ሕይወታቸውን ለአምላካቸው አሳልፈው መስጠታቸው ነው።",
      "surroundingVerses": "አስቴር የመረጠችው መሞትን እንጂ በቤተ መንግሥት ተደብቆ በምቾት መኖርን አልነበረም።",
      "timelessPrinciple": "እግዚአብሔር በእኛ ሕይወት ውስጥ ዕድልና ቦታ የሚሰጠን ሌሎችን እንድንታደግና እርሱን በመስዋዕትነት እንድናከብር እንጂ ለግል ዝናችን አይደለም።"
    },
    "truthEn": {
      "contextSummary": "The Book of Esther reveals God’s unseen providential rule preserving His covenant people from genocide through costly sacrifice.",
      "surroundingVerses": "Esther’s defining posture was not self-actualization, but willing martyrdom: \"If I perish, I perish.\"",
      "timelessPrinciple": "God entrusts influence and privilege to His people not for personal luxury, but to lay them down for the rescue and edification of others."
    },
    "crossReferences": [
      {
        "ref": "ማርቆስ 8:35",
        "noteAm": "«ነፍሱን ሊያድን የሚወድ ሁሉ ያጠፋታልና፥ ስለ እኔና ስለ ወንጌል ነፍሱን የሚያጠፋ ሁሉ ግን ያድናታል»",
        "noteEn": "“Whoever would save his life will lose it, but whoever loses his life for my sake and the gospel’s will save it.”"
      },
      {
        "ref": "1 ዮሐንስ 3:16",
        "noteAm": "«እርሱ ስለ እኛ ነፍሱን አሳልፎ ሰጥቶአልና በዚህ ፍቅርን አውቀናል፤ እኛም ስለ ወንድሞቻችን ነፍሳችንን አሳልፈን እንድንሰጥ ይገባናል»",
        "noteEn": "“By this we know love, that he laid down his life for us, and we ought to lay down our lives for the brothers.”"
      },
      {
        "ref": "ፊልጵስዩስ 2:5-7",
        "noteAm": "«በክርስቶስ ኢየሱስ የነበረ ይህ አሳብ በእናንተ ዘንድ ደግሞ ይሁን፤ እርሱ የእግዚአብሔር መልክ ሲሆን ሳለ... የባሪያን መልክ ይዞ ራሱን ባዶ አደረገ»",
        "noteEn": "“Have this mind among yourselves, which is yours in Christ Jesus, who... emptied himself, by taking the form of a servant.”"
      }
    ]
  },
  {
    "id": "capsule-b18",
    "bookNr": 18,
    "chapter": 22,
    "verseStart": 28,
    "verseEnd": 28,
    "verseRefAm": "መጽሐፈ ኢዮብ 22:28",
    "verseRefEn": "Job 22:28",
    "verseTextAm": "ነገርንም ትመክራለህ፥ እርሱም ይሳካልሃል፤  ብርሃንም በመንገድህ ላይ ይበራል።",
    "verseTextEn": "Thou shalt also decree a thing, and it shall be established unto thee: and the light shall shine upon thy ways.",
    "titleAm": "ነገርን ትቆርጣለህ ይጸናልሃልም — የእግዚአብሔር ተስፋ ወይስ የተወገዘው የኤልፋዝ ስህተት?",
    "titleEn": "You Will Decree a Thing and It Will Be Established — Divine Promise or Rebuked False Theology?",
    "taglineAm": "እግዚአብሔር በመጽሐፉ መጨረሻ ያወገዘው የኤልፋዝ ንግግር ዛሬ በአዎንታዊ አዋጅ ሰባኪዎች እንደ ዶክትሪን ሲሰበክ",
    "taglineEn": "Words spoken by Eliphaz—whom God explicitly rebuked for speaking falsehood—twisted into the cornerstone of positive confession theology",
    "eraAm": "የአበው ዘመንና የኢዮብ ታላቅ መከራ",
    "eraEn": "Patriarchal Era & Job’s Suffering",
    "locationAm": "የዑፅ ምድር አመድ ላይ",
    "locationEn": "Ash Heap in the Land of Uz",
    "yearApprox": "2000 ዓ.ዓ.",
    "keyIcon": "🌪️",
    "sceneAm": {
      "setting": "ጻድቁ ኢዮብ ልጆቹን፣ ከብቶቹንና ጤናውን ሙሉ በሙሉ አጥቶ በአመድ ላይ ተቀምጦ በሸክላ ገላውን እየፋቀ ሳለ ሦስቱ ጓደኞቹ ሊያጽናኑት መጥተው ሊከሱት በጀመሩበት ወቅት።",
      "dailyLife": "በጥንቱ ዓለም መከራ የደረሰበት ሰው «በድብቅ የሰራው ኃጢአት አለ» ተብሎ ይፈረድበት ነበር፤ ኤልፋዝም ኢዮብን «ኃጢአትህን ተናዘዝ» እያለ ወቀሰው።",
      "socialTension": "ኤልፋዝ «ከእግዚአብሔር ጋር ታረቅ፤ ወርቅህንም በአፈር ውስጥ ጣለው፤ ያን ጊዜ ነገርን ትቆርጣለህ ይጸናልሃልም» በማለት የውሸት ቀመር አቀረበለት።"
    },
    "sceneEn": {
      "setting": "Righteous Job sat in agonizing grief on the village ash heap, scraping boils with broken pottery, bereaved of his ten children and entire livelihood.",
      "dailyLife": "Ancient retribution theology assumed that severe tragedy was always the direct consequence of secret personal sin.",
      "socialTension": "Eliphaz rebuked Job with cold moralism, assuring him that if he just repented and discarded his gold, he could command the universe at will."
    },
    "metaphorAm": {
      "origin": "ኤልፋዝ «ነገርን ትቆርጣለህ ይጸናልሃል» ያለው እግዚአብሔርን በጽድቅህ ከተደራደርክ የፈለግኸውን ማዘዝ ትችላለህ የሚል የተሳሳተ የሰው ፍልስፍና ነበር።",
      "linguisticNuance": "በዕብራይስጥ «ቲግዛር ኦመር» (አዋጅን ታውጃለህ) — ኤልፋዝ ያስቀመጠው ቀመር በመጽሐፉ መጨረሻ በእግዚአብሔር ዘንድ «ስለ እኔ ቅን ነገር አልተናገራችሁም» ተብሎ ተወግዟል (ኢዮብ 42:7)።",
      "crowdReaction": "ኢዮብ ይህን የውሸት ማጽናኛ ውድቅ በማድረግ በእግዚአብሔር ሉዓላዊነት ላይ ብቻ ተማመነ።"
    },
    "metaphorEn": {
      "origin": "Eliphaz was pitching a simplistic transactional formula: reform your behavior, and God will rubber-stamp your spoken decrees.",
      "linguisticNuance": "The Hebrew \"Tigzar-omer\" (you will decree an utterance) was specifically denounced by the Lord in Job 42:7: \"You have not spoken of me what is right, as my servant Job has.\"",
      "crowdReaction": "Job rejected their heartless mechanical formulas, stubbornly appealing to his living Redeemer."
    },
    "distortionAm": {
      "claim": "የአዎንታዊ አዋጅ (Word-of-Faith) ሰባኪዎች ይህን ጥቅስ የትምህርታቸው ዋና መሠረት በማድረግ «አንተ የነገርኸውን ሁሉ እግዚአብሔር የማጽናት ግዴታ አለበት፤ ፍጠርና እዘዝ» ይላሉ።",
      "damage": "እግዚአብሔር ራሱ ያወገዘውን ንግግር የእግዚአብሔር ቃል አድርጎ ማስተማር እጅግ የከፋ የሐሰት ትምህርት ነው፤ ሰዎችን ወደ እብሪትና ውድቀት ይወስዳል።"
    },
    "distortionEn": {
      "claim": "Positive confession and \"decree and declare\" movements treat this verse as their premier proof-text: \"Whatever you decree with your mouth, God must establish!\"",
      "damage": "It builds an entire doctrinal system on words spoken by a man God condemned for heresy, dethroning God and exalting human speech into magic."
    },
    "truthAm": {
      "contextSummary": "የኢዮብ መጽሐፍ ሙሉ መልእክት የሰው ልጅ የእግዚአብሔርን ጥልቅ ጥበብና ሉዓላዊነት መቆጣጠር እንደማይችል ማሳየት ነው።",
      "surroundingVerses": "በኢዮብ 42:7 ላይ እግዚአብሔር ለቴማናዊው ለኤልፋዝ፦ «እንደ ባሪያዬ እንደ ኢዮብ ቅን ነገር ስለ እኔ አልተናገራችሁምና ቍጣዬ በአንተና በሁለቱ ባልንጀሮችህ ላይ ነድዶአል» ብሎታል።",
      "timelessPrinciple": "እኛ የእግዚአብሔርን ፈቃድ አገልጋዮች እንጂ እግዚአብሔርን የምናዝዝ ጌቶች አይደለንም፤ ትክክለኛ ጸሎት «ፈቃድህ ይሁን» የሚል ትህትና ነው።"
    },
    "truthEn": {
      "contextSummary": "The Book of Job destroys mechanistic theology, proving that righteous people suffer in God’s mysterious, sovereign providence.",
      "surroundingVerses": "In Job 42:7, God declares to Eliphaz: \"My anger burns against you and your two friends, for you have not spoken of me what is right!\"",
      "timelessPrinciple": "Human beings do not sovereignly decree reality; God alone decrees, while faithful saints humbly pray: \"Your will be done.\""
    },
    "crossReferences": [
      {
        "ref": "ኢዮብ 42:7",
        "noteAm": "«እግዚአብሔርም ይህን ቃል ለኢዮብ ከተናገረ በኋላ፥ እግዚአብሔር ቴማናዊውን ኤልፋዝን እንዲህ አለው፦ እንደ ባሪያዬ እንደ ኢዮብ ቅን ነገር ስለ እኔ አልተናገራችሁምና ቍጣዬ በአንተና በሁለቱ ባልንጀሮችህ ላይ ነድዶአል»",
        "noteEn": "“The Lord said to Eliphaz the Temanite: ‘My anger burns against you and against your two friends, for you have not spoken of me what is right, as my servant Job has.’”"
      },
      {
        "ref": "ያዕቆብ 4:13-15",
        "noteAm": "«ዛሬ ወይም ነገ ወደዚህ ከተማ እንሄዳለን... እንነግዳለን እንተርፋለንም የምትሉ እናንተ፥ አሁን ስሙ፤ ጌታ ቢፈቅድ ብንኖርም ይህን ወይም ያን እናደርጋለን ማለት ይገባችኋል»",
        "noteEn": "“Instead you ought to say, ‘If the Lord wills, we will live and do this or that.’ As it is, you boast in your arrogance.”"
      },
      {
        "ref": "ሉቃስ 22:42",
        "noteAm": "«አባት ሆይ፥ ብትፈቅድ ይህችን ጽዋ ከእኔ ውሰድ፤ ነገር ግን የእኔ ፈቃድ አይሁን የአንተ እንጂ አለ»",
        "noteEn": "“Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.”"
      }
    ]
  },
  {
    "id": "capsule-b19",
    "bookNr": 19,
    "chapter": 91,
    "verseStart": 11,
    "verseEnd": 12,
    "verseRefAm": "መዝሙረ ዳይት 91:11-12",
    "verseRefEn": "Psalms 91:11-12",
    "verseTextAm": "በመንገድህ ሁሉ ይጠብቁህ ዘንድ መላእክቱን ስለ አንተ ያዝዛቸዋልና፤ እግርህም በድንጋይ እንዳትሰናከል በእጆቻቸው ያነሡሃል።",
    "verseTextEn": "For he shall give his angels charge over thee, to keep thee in all thy ways. They shall bear thee up in their hands, lest thou dash thy foot against a stone.",
    "titleAm": "መላእክቱን ስለ አንተ ያዝዛል — የሰይጣን ጥቅስ ወይስ የእውነተኛ እምነት መጠጊያ?",
    "titleEn": "He Will Command His Angels — Satan’s Temptation vs Genuine Trust",
    "taglineAm": "ሰይጣን በምድረ በዳ ኢየሱስን የፈተነበት ይኸው ጥቅስ ዛሬ ሰዎችን ለእብሪትና ለእግዚአብሔር መፈታተን ሲዳርግ",
    "taglineEn": "The exact verse quoted by the Devil in the wilderness, twisted into reckless presumption and putting God to the test",
    "eraAm": "የመዝሙራት ዘመንና የመጠለያ መዝሙር",
    "eraEn": "Era of the Psalms & Divine Refuge",
    "locationAm": "በልዑል መጠጊያ ስር",
    "locationEn": "Secret Place of the Most High",
    "yearApprox": "1000 ዓ.ዓ.",
    "keyIcon": "🦅",
    "sceneAm": {
      "setting": "በጦርነት፣ በወረርሽኝና በድንገተኛ አደጋዎች መካከል እግዚአብሔር ለሚታመኑበት ሰዎች ጋሻና መጠጊያ መሆኑን የሚያውጅ ታላቅ የመዝሙር ጸሎት።",
      "dailyLife": "በጥንቱ ዓለም የቀስት ጥቃት፣ የሌሊት አስፈሪ ወረራና ገዳይ ቸነፈር በማንኛውም ቅጽበት ሰዎችን ይጨርስ ነበር።",
      "socialTension": "መዝሙረኛው እውነተኛ ደህንነት የሚገኘው በወታደራዊ ሠራዊት ሳይሆን በልዑል እግዚአብሔር ክንፍ ጥላ ሥር በመሸሸግ መሆኑን መሰከረ።"
    },
    "sceneEn": {
      "setting": "A majestic psalm celebrating Yahweh as an impenetrable shield against sudden terror, pestilence, and battlefield destruction.",
      "dailyLife": "Ancient inhabitants faced relentless peril: venomous vipers, marauding archers, and devastating infectious plagues.",
      "socialTension": "The psalmist directed believers away from earthly fortresses to dwell securely under the shadow of the Almighty."
    },
    "metaphorAm": {
      "origin": "መላእክት እግዚአብሔርን የሚያገለግሉበት መንገድ እርሱን በመታዘዝ በሚጓዙበት መንገድ ሁሉ ቅዱሳንን ለመጠበቅ እንጂ ሆን ብለው እራሳቸውን አደጋ ላይ ለሚጥሉ አይደለም።",
      "linguisticNuance": "ሰይጣን ኢየሱስን ሲፈትን ሆን ብሎ «በመንገድህ ሁሉ ይጠብቁህ ዘንድ» የሚለውን የቅድስና ቃል ዘሎታል (ማቴ 4:6)።",
      "crowdReaction": "ኢየሱስ ሰይጣንን፦ «ጌታን አምላክህን አትፈታተነው ተብሎ ደግሞ ተጽፎአል» በማለት በቃሉ መለሰለት።"
    },
    "metaphorEn": {
      "origin": "Angelic protection accompanies the faithful walking obediently in God’s ways, not those leaping into reckless danger to force God’s hand.",
      "linguisticNuance": "When Satan quoted this verse to Jesus on the Temple pinnacle, he deliberately clipped the crucial phrase: \"to keep you in all your ways.\"",
      "crowdReaction": "Jesus silenced the Devil with Scripture: \"Again it is written, ‘You shall not put the Lord your God to the test.’\""
    },
    "distortionAm": {
      "claim": "አንዳንድ አስተማሪዎች «እውነተኛ እምነት ያለው ክርስቲያን መድኃኒት አይወስድም፣ ጥንቃቄ አያደርግም፤ እግዚአብሔር ይጠብቀኛል ብሎ ወደ እሳት ይገባል» በማለት ሰዎችን ለእብሪት ይገፋሉ።",
      "damage": "ብዙዎችን ያለጊዜያቸው ለሞትና ለበሽታ ዳርጓል፤ መጽሐፍ ቅዱስን ወደ አስማታዊ ከለላነት ይቀይራል።"
    },
    "distortionEn": {
      "claim": "Extremists teach that authentic faith rejects medicine, medical treatment, or wisdom: \"I can drink poison and play with serpents because Psalm 91 guarantees immunity!\"",
      "damage": "It tempts God, leads naive believers into preventable tragedy, and repeats the exact sin Satan urged upon Jesus."
    },
    "truthAm": {
      "contextSummary": "መዝሙር 91 በእግዚአብሔር ላይ ያለን ጽኑ መታመን የሚያሳይ እንጂ እግዚአብሔርን እንድንፈታተን የተሰጠ ፈቃድ አይደለም።",
      "surroundingVerses": "እግዚአብሔር በቁጥር 15 ላይ «በመከራው ጊዜ ከእርሱ ጋር እሆናለሁ» ይላል እንጂ አማኞች መከራን አያዩም አላለም።",
      "timelessPrinciple": "እምነት በእግዚአብሔር ጥበቃ መታመን ነው፤ እብሪት ግን እግዚአብሔር እኔን ለማዳን ተአምር እንዲሰራ እፈታተነዋለሁ ብሎ መዝለል ነው።"
    },
    "truthEn": {
      "contextSummary": "Psalm 91 describes childlike reliance upon God’s sovereign providence, not a license to stage reckless theatrical spectacles.",
      "surroundingVerses": "Verse 15 promises: \"I will be with him in trouble\"—affirming that believers do walk through trials with God by their side.",
      "timelessPrinciple": "Faith trusts God’s watchful protection while exercising wisdom; presumption carelessly tests God and demands miraculous bailouts."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 4:5-7",
        "noteAm": "«ሰይጣን ወደ መቅደስ ጫፍ አወጣውና፦ የእግዚአብሔር ልጅ ከሆንህ፥ ወደ ታች ራስህን ወርውር... መላእክቱን ስለ አንተ ያዝዛል ተብሎ ተጽፎአልና አለው፤ ኢየሱስም፦ ጌታን አምላክህን አትፈታተነው ተብሎ ደግሞ ተጽፎአል አለው»",
        "noteEn": "“The devil threw him onto the pinnacle... Jesus said to him, ‘Again it is written, You shall not put the Lord your God to the test.’”"
      },
      {
        "ref": "ዘጸአት 17:7",
        "noteAm": "«እግዚአብሔር በመካከላችን ነው ወይስ አይደለም? ብለው እግዚአብሔርን ስለ ተፈታተኑት የስፍራውን ስም ማሳህና መሪባ ብሎ ጠራው»",
        "noteEn": "“Because they tested the Lord by saying, ‘Is the Lord among us or not?’”"
      },
      {
        "ref": "ዕብራውያን 1:14",
        "noteAm": "«ሁሉ መዳንን ይወርሱ ዘንድ ስላላቸው ለማገዝ የሚላኩ የሚያገለግሉም መናፍስት አይደሉምን?»",
        "noteEn": "“Are they not all ministering spirits sent out to serve for the sake of those who are to inherit salvation?”"
      }
    ]
  },
  {
    "id": "capsule-b20",
    "bookNr": 20,
    "chapter": 23,
    "verseStart": 7,
    "verseEnd": 7,
    "verseRefAm": "መጽሐፈ ምሳሌ 23:7",
    "verseRefEn": "Proverbs 23:7",
    "verseTextAm": "በልቡ እንዳሰበ እንዲሁ ነውና፤ ብላ ጠጣ ይልሃል፥ ልቡ ግን ካንተ ጋር አይደለም።",
    "verseTextEn": "For as he thinketh in his heart, so is he: Eat and drink, saith he to thee; but his heart is not with thee.",
    "titleAm": "በልቡ እንዳሰበ እንዲሁ ነው — የአስተሳሰብ መስህብ ሕግ ወይስ የስስታም አስተናጋጅ ማስጠንቀቂያ?",
    "titleEn": "As a Man Thinks in His Heart — Law of Attraction vs The Miser’s Feast",
    "taglineAm": "ሰሎሞን ስስታም ሰውን እንዳንቀርብ የሰጠው ማስጠንቀቂያ ዛሬ ለኒው ኤጅ የአእምሮ ማኒፌስቴሽን ሲገለበጥ",
    "taglineEn": "Solomon’s practical warning against dining with a miser hijacked by New Age and prosperity teachers as the \"Law of Attraction\"",
    "eraAm": "የሰሎሞን የጥበብ ዘመን",
    "eraEn": "Era of Solomonic Wisdom",
    "locationAm": "በሰሎሞን ቤተ መንግሥት",
    "locationEn": "Royal Courts of Solomon",
    "yearApprox": "970 ዓ.ዓ.",
    "keyIcon": "💭",
    "sceneAm": {
      "setting": "ሰሎሞን ወጣቶችን በዕለት ተዕለት ሕይወታቸው ከግብዞች፣ ከአታላዮችና ከስስታሞች ጋር በሚኖራቸው ግንኙነት እንዲጠነቀቁ ያስተማረበት የጥበብ ምክር።",
      "dailyLife": "በጥንቱ ዓለም ታላላቅ ግብዣዎች የክብርና የጓደኝነት መግለጫ ነበሩ፤ ነገር ግን አንዳንዶች በልባቸው እየቆጩ በአፋቸው «ብላ ጠጣ» እያሉ ያታልሉ ነበር።",
      "socialTension": "ስስታሙ አስተናጋጅ በልቡ የብሉቱን ዋጋ እያሰላ ያዝናል፤ ሰሎሞንም «ከቀናተኛ ሰው ጋር እንጀራ አትብላ» በማለት አስጠነቀቀ።"
    },
    "sceneEn": {
      "setting": "Solomon training young men in discernment when navigating relationships with manipulative, stingy hosts.",
      "dailyLife": "Banqueting in antiquity was sacred; yet selfish men used hospitality to manipulate guests while begrudging every mouthful.",
      "socialTension": "The host smiles outward hospitality, but inwardly counts the financial cost of every bite consumed by his guest."
    },
    "metaphorAm": {
      "origin": "«በልቡ እንዳሰበ እንዲሁ ነው» የሚለው ቃል በአፉ «ብላ ጠጣ» ቢልህም በልቡ ግን ስስታምና አስመሳይ ስለሆነ እውነተኛ ማንነቱ ያ በልቡ ያለው ክፋት ነው ማለት ነው።",
      "linguisticNuance": "በዕብራይስጥ «ሻአር በነፍሾ» ማለት ወጪውንና ዋጋውን በስስት ያሰላል ማለት ነው፤ ቀጣዩ ቁጥር «ብላ ጠጣ ይልሃል፥ ልቡ ግን ከአንተ ጋር አይደለም» ይላል።",
      "crowdReaction": "ሰሚዎቹ አስመሳይ ሰዎችን ከውጫዊ ፈገግታቸው ሳይሆን ከልባቸው ክፋት መለየት እንደሚገባቸው ተረዱ።"
    },
    "metaphorEn": {
      "origin": "The phrase describes a treacherous host who urges you to eat, while inwardly begrudging the expense of the meal.",
      "linguisticNuance": "The Hebrew \"sha‘ar benapsho\" refers to calculating costs like a miser; verse 7 finishes: \"‘Eat and drink!’ he says to you, but his heart is not with you.\"",
      "crowdReaction": "Students learned to avoid deceptive dinners where outward flattery masked inward stinginess."
    },
    "distortionAm": {
      "claim": "የአዲስ ዘመን (New Age) እና የአስተሳሰብ መስህብ ሕግ (Law of Attraction) ሰባኪዎች ጥቅሱን ወስደው «በአእምሮህ ሀብት ካሰብክ ሀብታም ትሆናለህ፤ ድህነት ካሰብክ ድሃ ትሆናለህ፤ እውነታ በአስተሳሰብህ ይፈጠራል» ይላሉ።",
      "damage": "መጽሐፍ ቅዱስን ወደ ምስጢራዊ የአእምሮ አስማት ይለውጣል፤ የሰው ልጅ አስተሳሰብ ዓለምን እንደሚፈጥር የሐሰት እምነት ያሰርጻል።"
    },
    "distortionEn": {
      "claim": "Mind-science, New Thought, and Law of Attraction writers quote this half-verse to assert that metaphysical thoughts manifest physical reality.",
      "damage": "It turns the Bible into occult visualization, convincing people that sickness and poverty are merely bad vibrational thoughts."
    },
    "truthAm": {
      "contextSummary": "ምሳሌ 23:6-8 ሙሉ በሙሉ የሚያወራው ስስታም ሰው ወደ ግብዣ ሲጠራህ አስመሳይነቱን እንድትጠነቀቅ እንጂ የአእምሮ ማኒፌስቴሽን አይደለም።",
      "surroundingVerses": "በቁጥር 6 ላይ «መልኩ ክፉ ከሆነ ሰው ጋር እንጀራ አትብላ» ይላል፤ በቁጥር 8 ላይ ደግሞ «የበላኸውን ቁራሽ ትተፋዋለህ» በማለት ያስጠነቅቃል።",
      "timelessPrinciple": "የሰው እውነተኛ ማንነት በውጫዊ ፈገግታ ሳይሆን በልቡ ባሕርይ ይወሰናል፤ እግዚአብሔርም ከአስመሳይነት የራቀ ቅን ልብን ይፈልጋል።"
    },
    "truthEn": {
      "contextSummary": "Proverbs 23:6-8 warns against the hospitality of a tight-fisted hypocrite whose pleasant words mask inward selfishness.",
      "surroundingVerses": "Verse 6: \"Do not eat the bread of a man who is stingy\"; Verse 8: \"You will vomit up the morsels that you have eaten, and waste your pleasant words.\"",
      "timelessPrinciple": "A person’s true character is revealed by their inward convictions rather than their superficial flattery."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 15:8",
        "noteAm": "«ይህ ሕዝብ በከንፈሩ ያከብረኛል፥ ልቡ ግን ከእኔ በጣም የራቀ ነው»",
        "noteEn": "“This people honors me with their lips, but their heart is far from me.”"
      },
      {
        "ref": "ሮሜ 12:3",
        "noteAm": "«እግዚአብሔር ለእያንዳንዱ የእምነትን መጠን እንዳካፈለው፥ እንደ ባለ አእምሮ እንዲያስብ እንጂ ማንም ከሚገባው በላይ እንዳያስብ»",
        "noteEn": "“Not to think of himself more highly than he ought to think, but to think with sober judgment.”"
      },
      {
        "ref": "ሉቃስ 12:15",
        "noteAm": "«ተጠንቀቁ፥ ከመጎምጀትም ሁሉ ተጠበቁ፤ የሰው ሕይወት በገንዘቡ ብዛት አይደለምና»",
        "noteEn": "“Take care, and be on your guard against all covetousness, for one’s life does not consist in the abundance of his possessions.”"
      }
    ]
  },
  {
    "id": "capsule-b21",
    "bookNr": 21,
    "chapter": 10,
    "verseStart": 19,
    "verseEnd": 19,
    "verseRefAm": "መጽሐፈ መክብብ 10:19",
    "verseRefEn": "Ecclesiastes 10:19",
    "verseTextAm": "እንጀራን ለሳቅ የወይን ጠጅንም ለሕይወት ደስታ ያደርጉታል፥ ሁሉም ለገንዘብ ይገዛል።",
    "verseTextEn": "A feast is made for laughter, and wine maketh merry: but money answereth all things.",
    "titleAm": "ገንዘብ ለሁሉ መልስ ይሰጣል — የዓለማዊ ሥርዓት ምልከታ ወይስ መለኮታዊ ትእዛዝ?",
    "titleEn": "Money Answers Everything — Cynical Observation vs Divine Command",
    "taglineAm": "ሰባኪው መክብብ በፀሐይ በታች ያለውን የዓለም ከንቱ አሠራር ያየበት ቃል ዛሬ ገንዘብን ለማምለክ ሲውል",
    "taglineEn": "The Preacher’s cynical observation of corrupt worldly systems misused as a divine mandate to pursue money",
    "eraAm": "የጥበብና የዓለም ከንቱነት ምርመራ ዘመን",
    "eraEn": "Solomonic Search for Meaning",
    "locationAm": "በኢየሩሳሌም ቤተ መንግሥት",
    "locationEn": "Jerusalem Royal Court",
    "yearApprox": "935 ዓ.ዓ.",
    "keyIcon": "🪙",
    "sceneAm": {
      "setting": "ንጉሥ ሰሎሞን በእርጅናው ዘመን በፀሐይ በታች ያሉትን የሰው ልጆች ድካም፣ የሥልጣን ብልሹነትና የዓለምን ከንቱነት ሲመረምር።",
      "dailyLife": "በጥንቱ ዓለም ሰነፎች ገዢዎችና ባለሥልጣናት አገር እየፈረሰች በግብዣና በስካር ይደሰቱ ነበር፤ ጉቦና ገንዘብም ሁሉንም ነገር የሚፈታ መስሎ ይታይ ነበር።",
      "socialTension": "ሰባኪው «መሪዎችህ ጠዋት የሚሰክሩባት አንቺ ምድር ወዮልሽ!» (ቁ. 16) በማለት የሞኙን መንግሥት ብልሹነት አጋልጧል።"
    },
    "sceneEn": {
      "setting": "An aging king examining the vanity, systemic injustice, and futility of human life \"under the sun.\"",
      "dailyLife": "Foolish rulers and corrupt officials squandered national treasury on carousing while public infrastructure collapsed.",
      "socialTension": "The Preacher mourned: \"Woe to you, O land, when your king is a child and your princes feast in the morning!\" (v. 16)."
    },
    "metaphorAm": {
      "origin": "«ገንዘብ ለሁሉ መልስ ይሰጣል» ያለው ዓለማዊ ሰዎች ገንዘብ ካለህ ሁሉንም ችግር መፍታት ትችላለህ ብለው እንደሚያምኑ ለማሳየት እንጂ የእግዚአብሔር ፈቃድ ነው ብሎ አይደለም።",
      "linguisticNuance": "በዕብራይስጥ «ሀከሴፍ ያአነህ ኤት-ሃኮል» — በፀሐይ በታች ያለውን የሞኞች ዓለማዊ አመለካከት የሚያሳይ ምጸት (irony) ነው።",
      "crowdReaction": "አንባቢው የገንዘብን ከንቱነትና በስተመጨረሻ እግዚአብሔርን መፍራት ብቻ ዋና ነገር እንደሆነ ይረዳል (መክ 12:13)።"
    },
    "metaphorEn": {
      "origin": "The statement observes how worldly, hedonistic men operate—believing cash provides a cynical fix for every carnal problem.",
      "linguisticNuance": "The Hebrew \"ha-kesef ya’aneh et-hakkol\" expresses weary irony describing corrupt bureaucracy, not spiritual doctrine.",
      "crowdReaction": "Readers are driven to see through the illusion of materialism to the true conclusion: \"Fear God and keep his commandments\" (Eccl 12:13)."
    },
    "distortionAm": {
      "claim": "የብልጽግና አስተማሪዎች ጥቅሱን ቆርጠው «መጽሐፍ ቅዱስ ራሱ ገንዘብ ለሁሉም ነገር መልስ ነው ይላል፤ ስለዚህ ገንዘብ አምልክ፣ ገንዘብ ፈልግ» በማለት ስግብግብነትን ያጸድቃሉ።",
      "damage": "ገንዘብን ወደ አምላክነት ይለውጣል፤ የክርስቶስን «ለእግዚአብሔርና ለገንዘብ መገዛት አትችሉም» የሚለውን ማስጠንቀቂያ ይጥሳል።"
    },
    "distortionEn": {
      "claim": "Materialistic preachers isolate this half-verse to validate greed: \"See, the Bible explicitly tells you money is the answer to every problem!\"",
      "damage": "It enthrones Mammon as a deity, encourages reckless consumerism, and defies Jesus’ warning that one cannot serve both God and money."
    },
    "truthAm": {
      "contextSummary": "መክብብ 10:16-19 ሰነፎችና ሰካራሞች መሪዎች አገርን በድግስ ሲያፈርሱ ገንዘብን እንደ መፍትሔ እንደሚቆጥሩ የሚያሳይ ተግሣጽ ነው።",
      "surroundingVerses": "በመክብብ 5:10 ላይ «ገንዘብን የሚወድ ሰው ገንዘብን አይጠግብም፤ ብልጽግናንም የሚወድ ትርፉን አይጠግብም፤ ይህም ደግሞ ከንቱ ነው» ተብሏል።",
      "timelessPrinciple": "ገንዘብ የነፍስን ድነት፣ ሰላምን ወይም ዘላለማዊ ሕይወትን ሊመልስ አይችልም፤ እውነተኛው መልስ ክርስቶስ ብቻ ነው።"
    },
    "truthEn": {
      "contextSummary": "Ecclesiastes 10:16-19 satirizes foolish, drunken rulers whose decaying palaces leak while they party, relying on bribes and money to cover their negligence.",
      "surroundingVerses": "Ecclesiastes 5:10 had already dismantled the myth: \"He who loves money will not be satisfied with money, nor he who loves wealth with his income; this also is vanity.\"",
      "timelessPrinciple": "Money cannot purchase redemption, peace, holiness, or eternal life; Christ alone satisfies the immortal human soul."
    },
    "crossReferences": [
      {
        "ref": "1 ጢሞቴዎስ 6:10",
        "noteAm": "«ገንዘብን መውደድ የክፋት ሁሉ ሥር ነውና፥ አንዳንዶች ይህን ሲመኙ፥ ከሃይማኖት ተሳስተው በብዙ ሥቃይ ራሳቸውን ወጉ»",
        "noteEn": "“For the love of money is a root of all kinds of evils. It is through this craving that some have wandered away from the faith.”"
      },
      {
        "ref": "ማቴዎስ 6:24",
        "noteAm": "«ለሁለት ጌቶች መገዛት የሚቻለው ማንም የለም... ለእግዚአብሔርና ለገንዘብ መገዛት አትችሉም»",
        "noteEn": "“No one can serve two masters... You cannot serve God and money.”"
      },
      {
        "ref": "መክብብ 12:13",
        "noteAm": "«የነገሩን ሁሉ ፍጻሜ እንስማ፤ ይህ የሰው ሁለተኛው ግዴታ ነውና፤ እግዚአብሔርን ፍራ፥ ትእዛዛቱንም ጠብቅ»",
        "noteEn": "“The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man.”"
      }
    ]
  },
  {
    "id": "capsule-b22",
    "bookNr": 22,
    "chapter": 2,
    "verseStart": 4,
    "verseEnd": 4,
    "verseRefAm": "መኃልየ መኃልይ ዘሰሎሞን 2:4",
    "verseRefEn": "Song of Songs 2:4",
    "verseTextAm": "ወደ ወይን ጠጁም ቤት አገባኝ፥ በእኔ ላይ ያለው ዓላማውም ፍቅር ነው።",
    "verseTextEn": "He brought me to the banqueting house, and his banner over me was love.",
    "titleAm": "በእኔ ላይ ያለው ዓላማው ፍቅር ነው — ሚስጥራዊ መንፈሳዊ ውዳሴ ወይስ የጋብቻ ቅድስና?",
    "titleEn": "His Banner Over Me Was Love — Mystical Allegory vs Marital Sanctity",
    "taglineAm": "ሰሎሞን ለሱላማጢስ ያሳየው የጋብቻ ፍቅር ዛሬ ተጨባጩን የጋብቻ ቅድስና ንቆ ወደ ግልብ አሌጎሪ ሲለወጥ",
    "taglineEn": "The rich celebration of God-given marital love spiritualized away into an esoteric mystical trance",
    "eraAm": "የንጉሥ ሰሎሞን ዘመንና የጋብቻ ፍቅር ቅኔ",
    "eraEn": "Solomonic Era & Poetic Romance",
    "locationAm": "በንጉሡ የወይን ጠጅ ቤት",
    "locationEn": "Royal Banqueting House",
    "yearApprox": "960 ዓ.ዓ.",
    "keyIcon": "🌹",
    "sceneAm": {
      "setting": "በሰሎሞንና በገጠሬዋ ሱላማጢስ መካከል የተደረገ ንጹሕ፣ የተቀደሰና የተደላደለ የጋብቻ ፍቅር መግለጫ።",
      "dailyLife": "በጥንቱ እስራኤል ሰርግ ለአንድ ሳምንት ሙሉ በወይን ጠጅ፣ በዘፈንና በታላቅ የቤተሰብ ደስታ ይከበር ነበር።",
      "socialTension": "ሙሽራይቱ በንጉሡ ቤተ መንግሥት ባለው የግብዣ አዳራሽ በክብር ተቀምጣ በፍቅሩ መጠለሏን በደስታ ገለጸች።"
    },
    "sceneEn": {
      "setting": "A poetic celebration of pure, covenantal marital romance between King Solomon and the Shulammite woman.",
      "dailyLife": "Ancient Israelite weddings spanned seven days of joyful banqueting, song, and feasting under festive wedding banners.",
      "socialTension": "The bride revels in public affirmation, led into the banquet hall with the groom’s banner of tender devotion waving over her."
    },
    "metaphorAm": {
      "origin": "«ዓላማ» (ባነር/ሰንደቅ) የሠራዊት ምልክት ነው፤ ነገር ግን በዚህ ሥፍራ ንጉሡ በጦርነት ሳይሆን በፍቅርና በክብር ሙሽራይቱን እንደከበባት ያሳያል።",
      "linguisticNuance": "በዕብራይስጥ «ደጋል» ማለት ሰንደቅ ዓላማ ወይም የጦር ሰራዊት መለያ ነው፤ እዚህ ግን ፍቅሩ እሷን የመጠበቂያና የማክበሪያ መለያው ነው።",
      "crowdReaction": "የኢየሩሳሌም ቆነጃጅት በጋብቻው ውበትና ፍቅር ተደነቁ።"
    },
    "metaphorEn": {
      "origin": "Banners typically identified military divisions, but here the bridegroom’s protective escort is sovereign love and devotion.",
      "linguisticNuance": "The Hebrew \"diglo\" denotes a military rallying standard; transformed into an emblem of tender matrimonial shelter.",
      "crowdReaction": "The daughters of Jerusalem looked on with admiration at the dignity and beauty of covenant marital love."
    },
    "distortionAm": {
      "claim": "ታሪክ እንደሚያሳየው ብዙዎች የመጽሐፉን የጋብቻና የግብረ-ገብነት እውነታ ሙሉ በሙሉ አጥፍተው «ይህ የሰው ፍቅር አይደለም፤ ስለ ጋብቻም አያወራም፤ መንፈሳዊ ድግምት ብቻ ነው» በማለት ጋብቻን እንደ ርኩስ ነገር ይቆጥራሉ።",
      "damage": "እግዚአብሔር የፈጠረውን የጋብቻ ቅድስና ያቃልላል፤ መጽሐፍ ቅዱስን ወደማይጨበጥ ህልመኛ አሌጎሪ ይለውጣል።"
    },
    "distortionEn": {
      "claim": "Hyper-allegorists historically spiritualized away the text, claiming marital sexuality is unholy and treating the poem solely as an individual soul ecstasy.",
      "damage": "It devalues God’s holy design for physical covenant marriage and marital intimacy as ordained in Genesis."
    },
    "truthAm": {
      "contextSummary": "መኃልየ መኃልይ እግዚአብሔር በወንድና በሴት መካከል በጋብቻ ውስጥ የፈጠረውን ንጹሕ ፍቅር የሚያወድስ የጥበብ መጽሐፍ ነው።",
      "surroundingVerses": "በመኃልይ 8:6-7 ላይ «ፍቅር እንደ ሞት የበረታች ናትና... ብዙ ውኃ ፍቅርን ሊያጠፋት አይችልም» ተብሎ የኪዳን ታማኝነት ተገልጿል።",
      "timelessPrinciple": "እግዚአብሔር የጋብቻን ፍቅር ቀድሷል፤ ይህ ፍቅር ደግሞ በሐዲስ ኪዳን የክርስቶስና የቤተክርስቲያን ምስጢር ጥላ መሆኑን ጳውሎስ ገልጧል (ኤፌ 5:31-32)።"
    },
    "truthEn": {
      "contextSummary": "Song of Solomon is wisdom literature celebrating God-ordained sexual fidelity and passionate love within covenant marriage.",
      "surroundingVerses": "Song 8:6-7 declares the invincible power of faithful love: \"Love is strong as death... Many waters cannot quench love, neither can floods drown it.\"",
      "timelessPrinciple": "God honors holy marital intimacy, which in the New Testament serves as a sacred portrait of Christ and the Church (Eph 5:31-32)."
    },
    "crossReferences": [
      {
        "ref": "ዕብራውያን 13:4",
        "noteAm": "«መጋባት በሁሉ ዘንድ ክቡር መኝታውም ንጹሕ ይሁን፤ ሴሰኞችንና አመንዝሮችን ግን እግዚአብሔር ይፈርድባቸዋል»",
        "noteEn": "“Let marriage be held in honor among all, and let the marriage bed be undefiled, for God will judge the sexually immoral.”"
      },
      {
        "ref": "ኤፌሶን 5:31-32",
        "noteAm": "«ስለዚህ ሰው አባቱንና እናቱን ይተዋል ከሚስቱም ጋር ይተባበራል ሁለቱም አንድ ሥጋ ይሆናሉ፤ ይህ ምስጢር ታላቅ ነው፥ እኔ ግን ይህን ስለ ክርስቶስና ስለ ቤተ ክርስቲያን እላለሁ»",
        "noteEn": "“This mystery is profound, and I am saying that it refers to Christ and the church.”"
      },
      {
        "ref": "ምሳሌ 5:18-19",
        "noteAm": "«ምንጭህ የተባረከ ይሁን፥ ከጉብዝናህም ሚስት ጋር ደስ ይበልህ... በፍቅርዋም ሁልጊዜ ጥገብ»",
        "noteEn": "“Let your fountain be blessed, and rejoice in the wife of your youth... be intoxicated always in her love.”"
      }
    ]
  },
  {
    "id": "capsule-b23",
    "bookNr": 23,
    "chapter": 53,
    "verseStart": 5,
    "verseEnd": 5,
    "verseRefAm": "ትንቢተ ኢሳይያስ 53:5",
    "verseRefEn": "Isaiah 53:5",
    "verseTextAm": "እርሱ ግን ስለ መተላለፋችን ቈሰለ፥ ስለ በደላችንም ደቀቀ፤ የደኅንነታችንም ተግሣጽ በእርሱ ላይ ነበረ፥ በእርሱም ቍስል እኛ ተፈወስን።",
    "verseTextEn": "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
    "titleAm": "በእርሱ ቍስል እኛ ተፈወስን — የሥጋ በሽታ ዋስትና ወይስ የኃጢአት ስርየት?",
    "titleEn": "By His Wounds We Are Healed — Physical Immunity vs Spiritual Atonement",
    "taglineAm": "የክርስቶስ የመስቀል ስርየት ታላቅ መስዋዕትነት ዛሬ \"እውነተኛ አማኝ ፈጽሞ አይታመምም\" ለሚል የሐሰት ትምህርት ሲውል",
    "taglineEn": "Christ’s supreme substitutionary atonement for sin reduced to a contract guaranteeing physical immunity from disease",
    "eraAm": "የአሦር ወረራና የአገልጋዩ መከራ ትንቢት ዘመን",
    "eraEn": "Prophecy of the Suffering Servant",
    "locationAm": "በኢየሩሳሌም",
    "locationEn": "Jerusalem",
    "yearApprox": "700 ዓ.ዓ.",
    "keyIcon": "✝️",
    "sceneAm": {
      "setting": "ነቢዩ ኢሳይያስ የይሁዳን ኃጢአትና ወደፊት የሚመጣውን መሲሕ መከራ በመንፈስ ቅዱስ አሻግሮ የተመለከተበት ታላቅ ትንቢት።",
      "dailyLife": "በብሉይ ኪዳን የበግ መሥዋዕት ለኃጢአት ስርየት ይቀርብ ነበር፤ ሆኖም የእንስሳት ደም የሰውን የልብ ኃጢአት ለአንዴና ለመጨረሻ ማስወገድ አይችልም ነበር።",
      "socialTension": "ሕዝቡ መሲሑን ሲመጣ የሮማን ቀንበር የሚሰብር ኃያል ተዋጊ ጠብቀው ነበር፤ ኢሳይያስ ግን «የተናቀ የተጠላም፥ የሕማም ሰው» ሆኖ ለኃጢአታችን እንደሚቆስል ተነበየ።"
    },
    "sceneEn": {
      "setting": "Isaiah looking through the prophetic lens across seven centuries to behold the substitutionary sacrifice of the Servant of Yahweh.",
      "dailyLife": "Levitical priests offered daily animal sacrifices for guilt, yet the conscience remained defiled and alienated from God.",
      "socialTension": "Israel anticipated a political warrior king; Isaiah prophesied a despised servant crushed under the wrath of God for human transgressions."
    },
    "metaphorAm": {
      "origin": "«ፈውስ» በመጽሐፍ ቅዱስ ብዙውን ጊዜ ከኃጢአት በሽታ መዳንንና ከእግዚአብሔር ጋር መታረቅን ያመለክታል (ለምሳሌ መዝ 41:4፦ «ነፍሴን ፈውሳት፥ አንተን በድያለሁና»)።",
      "linguisticNuance": "«እርሱ ግን ስለ መተላለፋችን ቈሰለ፥ ስለ በደላችንም ደቀቀ፤ የደኅንነታችንም ተግሣጽ በእርሱ ላይ ነበረ» — አውዱ በሙሉ ስለ ኃጢአት ስርየት ነው።",
      "crowdReaction": "ሐዋርያው ጴጥሮስ ይህንን ጥቅስ ሲጠቅስ፦ «ለኃጢአት ሞተን ለጽድቅ እንድንኖር፥ እርሱ ራሱ በሥጋው ኃጢአታችንን በእንጨት ላይ ተሸከመ፤ በመገረፉ ቁስል ተፈወሳችሁ» ብሏል (1 ጴጥ 2:24)።"
    },
    "metaphorEn": {
      "origin": "In biblical prophecy, \"healing\" frequently describes spiritual reconciliation from the deadly plague of sin (e.g., Psalm 41:4: \"Heal my soul, for I have sinned against you\").",
      "linguisticNuance": "The poetic parallelism is explicit: \"pierced for our transgressions... crushed for our iniquities... upon him was the chastisement that brought us peace.\"",
      "crowdReaction": "Peter applies this directly to moral regeneration: \"He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness\" (1 Peter 2:24)."
    },
    "distortionAm": {
      "claim": "የብልጽግና አስተማሪዎች «ኢየሱስ በመስቀል ላይ የሞተው ለሥጋችን በሽታ ነው፤ ስለዚህ አማኝ ጉንፋንም ሆነ ካንሰር ሊይዘው አይችልም፤ ከታመመ እምነት አጥቷል» በማለት በሽተኞችን ይኮንናሉ።",
      "damage": "የታመሙ ቅዱሳንን «እምነት የላችሁም» እያሉ በከንቱ ያሳዝናል፤ የዘመኑን ፍጡራዊ ድካምና የትንሣኤን ተስፋ ይክዳል፤ መስቀሉን ያረክሳል።"
    },
    "distortionEn": {
      "claim": "Faith healers dogmatically claim Isaiah 53:5 guarantees complete physical health right now: \"If you are sick, you are in sin or lack faith!\"",
      "damage": "It devastates suffering believers with toxic guilt, denies the reality of mortal decay in this fallen world, and minimizes Christ’s atonement for eternal soul damnation."
    },
    "truthAm": {
      "contextSummary": "ኢሳይያስ 53 የክርስቶስ የመስቀል ስርየት ዋና ዓላማ የሰው ልጆችን ከዘላለም ሞትና ከኃጢአት ኩነኔ ማዳን መሆኑን ያረጋግጣል።",
      "surroundingVerses": "እግዚአብሔር በጸሎት ሥጋዊ ፈውስን በምሕረቱ ሊሰጥ ይችላል፤ ነገር ግን ፍጹም ሥጋዊ ፈውስ የሚፈጸመው በመጨረሻው ቀን በሙታን ትንሣኤ ነው (ሮሜ 8:23)።",
      "timelessPrinciple": "የመስቀሉ ዋነኛ ድል የኃጢአት ስርየት ነው፤ በዚህ ዓለም በሥጋ ብንታመምም በክርስቶስ የዘላለም ሕይወትና የትንሣኤ ተስፋ አለን።"
    },
    "truthEn": {
      "contextSummary": "Isaiah 53 is the Holy of Holies of prophetic scripture, revealing Christ dying under divine justice to reconcile sinful rebels to God.",
      "surroundingVerses": "While God graciously heals physical ailments according to His sovereign will, complete bodily redemption awaits the final resurrection (Rom 8:23).",
      "timelessPrinciple": "The primary cure purchased at Calvary is atonement for our sins; physical weakness reminds us to long for the glorious resurrection body."
    },
    "crossReferences": [
      {
        "ref": "1 ጴጥሮስ 2:24",
        "noteAm": "«ለኃጢአት ሞተን ለጽድቅ እንድንኖር፥ እርሱ ራሱ በሥጋው ኃጢአታችንን በእንጨት ላይ ተሸከመ፤ በመገረፉም ቍስል ተፈወሳችሁ»",
        "noteEn": "“He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.”"
      },
      {
        "ref": "ሮሜ 8:23",
        "noteAm": "«የመንፈስ በኩራት ያለን ራሳችን ደግሞ የሰውነታችንን ቤዛነት የሆነውን የልጅነትን ክብር እየተጠባበቅን በውስጣችን እንቃትታለን»",
        "noteEn": "“We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies.”"
      },
      {
        "ref": "2 ቆሮንቶስ 4:16",
        "noteAm": "«ስለዚህ አንታክትም፤ የውጭው ሰውነታችን ቢጠፋ እንኳ፥ የውስጡ ሰውነታችን ዕለት ዕለት ይታደሳል»",
        "noteEn": "“Though our outer self is wasting away, our inner self is being renewed day by day.”"
      }
    ]
  },
  {
    "id": "capsule-b24",
    "bookNr": 24,
    "chapter": 29,
    "verseStart": 11,
    "verseEnd": 11,
    "verseRefAm": "ትንቢተ ኤርምያስ 29:11",
    "verseRefEn": "Jeremiah 29:11",
    "verseTextAm": "ለእናንተ የማስባትን አሳብ እኔ አውቃለሁ፤ ፍጻሜና ተስፋ እሰጣችሁ ዘንድ የሰላም አሳብ ነው እንጂ የክፉ ነገር አይደለም።",
    "verseTextEn": "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.",
    "titleAm": "ለእናንተ የማስባትን አሳብ አውቃለሁ — የቅንጦት ዋስትና ወይስ የ70 ዓመት ምርኮ ተስፋ?",
    "titleEn": "Plans to Prosper You — Personal Luxury vs 70-Year Exile Promise",
    "taglineAm": "በምርኮ ለተጨነቁ አይሁድ የተላከው የመጽናናት ደብዳቤ ዛሬ ለምድራዊ ምቾትና ሀብት ሲተረጎም",
    "taglineEn": "A sovereign promise to Babylonian captives stripped of its 70-year exile context to sell instant personal success",
    "eraAm": "የባቢሎን ምርኮ መጀመሪያ ዘመን",
    "eraEn": "Babylonian Captivity Crisis",
    "locationAm": "ከኢየሩሳሌም ወደ ባቢሎን የተላከ ደብዳቤ",
    "locationEn": "Prophetic Letter sent to Babylon",
    "yearApprox": "597 ዓ.ዓ.",
    "keyIcon": "⛓️",
    "sceneAm": {
      "setting": "ባቢሎናውያን የኢየሩሳሌምን መኳንንት፣ አንጥረኞችና ወጣቶች (ዳንኤልንና ሕዝቅኤልን ጨምሮ) ማርከው ወደ ባቢሎን በወሰዱበት ወቅት።",
      "dailyLife": "ምርኮኞቹ በአረማዊ አገር ባዕድ ሆነው በባርነትና በጭንቀት ይኖሩ ነበር፤ የትውልድ አገራቸውንና ቤተ መቅደሳቸውን ናፍቀው ያለቅሱ ነበር።",
      "socialTension": "ሐናንያ የተባለው የሐሰት ነቢይ «እግዚአብሔር በሁለት ዓመት ውስጥ ምርኮውን ይመልሳል» እያለ በሐሰት ሲያጽናና፣ ኤርምያስ ግን «70 ዓመት በባቢሎን ትቀመጣላችሁ፤ ቤቶችን ስሩ ልጆችንም አግቡ» ብሎ ደብዳቤ ጻፈ።"
    },
    "sceneEn": {
      "setting": "Nebuchadnezzar deported Jerusalem’s royalty, craftsmen, and youth to Babylon, leaving a devastated city behind.",
      "dailyLife": "Exiles lived as displaced foreigners in idolatrous Mesopotamia, weeping by the rivers of Babylon as captors mocked them.",
      "socialTension": "False prophets like Hananiah promised an instant two-year liberation, while Jeremiah sent a sober letter commanding them to settle down for seventy years."
    },
    "metaphorAm": {
      "origin": "«የሰላም አሳብ እንጂ የክፉ አይደለም» የተባለው ምርኮኞቹ በባቢሎን ተስፋ ቆርጠው እንዳይጠፉና እግዚአብሔር ከ70 ዓመት በኋላ ሕዝቡን ወደ አገሩ እንደሚመልስ ቃል ኪዳኑን ለማረጋገጥ ነው።",
      "linguisticNuance": "በዕብራይስጥ «ማክሻቮት ሻሎም» ማለት የቃል ኪዳን ሰላም፣ መረጋጋትና የእግዚአብሔር ማዳን እንጂ የቁሳቁስ ሀብታም መሆን አይደለም።",
      "crowdReaction": "ምርኮኞቹ የሐሰት ነቢያትን ተስፋ ትተው በባቢሎን ከተማ ሰላም እንዲሆን መጸለይ ጀመሩ (ቁ. 7)።"
    },
    "metaphorEn": {
      "origin": "God assured the exiles that the seventy-year captivity was not extermination, but purifying covenant discipline leading to restoration.",
      "linguisticNuance": "The Hebrew \"machshevot shalom\" promises wholeness, spiritual safety, and national restoration, not rapid material wealth.",
      "crowdReaction": "The exiles were forced to abandon false optimism, pray for Babylon’s welfare, and patiently trust God’s generational timetable."
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ ለራሳቸው የግል ሕይወት ወስደው «እግዚአብሔር በምድር ላይ ስኬታማ፣ ባለጠጋና ከችግር ነጻ ያደርገኛል» በማለት ለግል ምኞታቸው ይጠቀሙበታል።",
      "damage": "ክርስቲያን በመከራ ውስጥ ሲያልፍ «እግዚአብሔር ጥሎኛል» ብሎ እንዲጠራጠር ያደርገዋል፤ የትንቢቱን ታሪካዊና ኪዳናዊ ክብደት ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Plastered across graduation mugs and greeting cards as a personal guarantee of immediate financial prosperity, career success, and painless living.",
      "damage": "It sets up believers for profound disillusionment when persecution and suffering strike, ignoring that the original recipients died in exile."
    },
    "truthAm": {
      "contextSummary": "ኤርምያስ 29 የእግዚአብሔር ሕዝብ በምርኮና በመከራ ውስጥ ሳሉ በትዕግሥት እንዲጸኑ የተሰጠ የተስፋ ቃል ነው።",
      "surroundingVerses": "በቁጥር 10 ላይ «ሰባው ዓመት በባቢሎን በተፈጸመ ጊዜ እጎበኛችኋለሁ» በማለት ያ ትውልድ ሳይሆን ልጆቻቸው እንደሚመለሱ አስጠንቅቋል።",
      "timelessPrinciple": "እግዚአብሔር በመከራና በፈተና ውስጥ ቢያሳልፈንም ዘላለማዊ አላማው በክርስቶስ የዘላለም ተስፋን ሊሰጠን እንጂ ሊያጠፋን አይደለም።"
    },
    "truthEn": {
      "contextSummary": "Jeremiah 29 is a summons to long-term endurance in pagan exile, promising national return to Jerusalem after seventy long years.",
      "surroundingVerses": "Verse 10 reveals the sober reality: \"When seventy years are completed for Babylon, I will visit you\"—meaning most of the adults would die in exile.",
      "timelessPrinciple": "God’s ultimate plans for His people are eternal redemption and hope in Christ, even when earthly circumstances involve exile and suffering."
    },
    "crossReferences": [
      {
        "ref": "ዕብራውያን 11:13",
        "noteAm": "«እነዚህ ሁሉ አምነው ሞቱ፥ የተሰጣቸውን የተስፋ ቃል አላገኙምና፤ ዳሩ ግን ከሩቅ ሆነው አዩትና ተሳለሙት፥ በምድርም እንግዶችና መጻተኞች እንደ ሆኑ ታመኑ»",
        "noteEn": "“These all died in faith, not having received the things promised, but having seen them and greeted them from afar.”"
      },
      {
        "ref": "ሮሜ 8:18",
        "noteAm": "«ለእኛ ሊገለጥ ካለው ክብር ጋር ቢመዛዘን የዚህ ዘመን ሥቃይ ምንም እንዳልሆነ እቆጥራለሁ»",
        "noteEn": "“For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.”"
      },
      {
        "ref": "1 ጴጥሮስ 1:6-7",
        "noteAm": "«በዚህም እጅግ ደስ ይላችኋል፥ ምንም እንኳ አሁን ለጥቂት ጊዜ በተለያዩ ፈተናዎች ማዘን ቢያስፈልጋችሁ»",
        "noteEn": "“In this you rejoice, though now for a little while, if necessary, you have been grieved by various trials.”"
      }
    ]
  },
  {
    "id": "capsule-b25",
    "bookNr": 25,
    "chapter": 3,
    "verseStart": 22,
    "verseEnd": 23,
    "verseRefAm": "ሰቆቃው ኤርምያስ 3:22-23",
    "verseRefEn": "Lamentations 3:22-23",
    "verseTextAm": "ሔት። ያልጠፋነው ከእግዚአብሔር ምሕረት የተነሣ ነው፤ ርኅራኄው አያልቅምና። ማለዳ ማለዳ አዲስ ነው፤ ታማኝነትህ ብዙ ነው።",
    "verseTextEn": "It is of the Lord’s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
    "titleAm": "ምሕረቱ በማለዳ አዲስ ነው — ርካሽ ፈገግታ ወይስ ከጥፋት አመድ የወጣ ጽናት?",
    "titleEn": "His Mercies are New Every Morning — Superficial Optimism vs Faith Amidst Ashes",
    "taglineAm": "ኤርምያስ በኢየሩሳሌም አመድ ላይ እያለቀሰ የተናገረው የመጽናናት ቃል ዛሬ ለመከራ ግድ የለሽ በሆነ ስሜታዊነት ሲዘመር",
    "taglineEn": "Jeremiah’s tear-stained declaration amidst famine, cannibalism, and rubble reduced to a light-hearted greeting card quote",
    "eraAm": "የኢየሩሳሌም ጥፋትና የሰቆቃ ዘመን",
    "eraEn": "Fall of Jerusalem & Ashes of Zion",
    "locationAm": "በተቃጠለችው በኢየሩሳሌም ቅጥር ላይ",
    "locationEn": "Smoldering Ruins of Jerusalem",
    "yearApprox": "586 ዓ.ዓ.",
    "keyIcon": "💧",
    "sceneAm": {
      "setting": "ባቢሎናውያን የሰሎሞንን ቤተ መቅደስ አቃጥለው፣ የኢየሩሳሌምን ቅጥር አፍርሰው፣ ሕዝቡን በሰይፍና በረሃብ ፈጅተው ከተማዋ የምድረ በዳ አመድ በሆነችበት ወቅት።",
      "dailyLife": "እናቶች በረሃብ የተነሳ የገዛ ልጆቻቸውን ያበስሉ ነበር (ሰቆ 4:10)፤ የካህናትና የነቢያት አስከሬን በመንገድ ላይ ወድቆ ነበር።",
      "socialTension": "ኤርምያስ በዚህ ሁሉ አስፈሪ ጥፋት መካከል ሆኖ «አልጠፋንምና የእግዚአብሔር ምሕረት ነው» በማለት ወደ እግዚአብሔር ጮኸ።"
    },
    "sceneEn": {
      "setting": "Babylonian troops razed Solomon’s Temple, tore down Jerusalem’s walls, and slaughtered citizens, leaving the Holy City a charred graveyard.",
      "dailyLife": "Famine was so horrific that starving mothers boiled their own infant children (Lam 4:10); corpses littered the desolate streets.",
      "socialTension": "Amidst choking smoke and unfathomable trauma, the weeping prophet sat on the ruins, fixing his soul on Yahweh’s faithfulness."
    },
    "metaphorAm": {
      "origin": "«አልጠፋንምና የእግዚአብሔር ምሕረት ነው» ያለው ሕዝቡ በሙሉ ሊጠፋ ሲገባው ጥቂት ቀሪዎች በምሕረቱ መትረፋቸውን በማሰብ ነው።",
      "linguisticNuance": "በዕብራይስጥ «ሐሰድ» (የቃል ኪዳን ታማኝ ፍቅር) — ከተማዋ ብትፈርስም እግዚአብሔር ከዳዊት ጋር የገባው ኪዳን አልፈረሰም።",
      "crowdReaction": "በምርኮ የተበተኑት አይሁድ ይህን ሰቆቃ እያነበቡ ንስሐ ገቡና ወደ አምላካቸው ተመለሱ።"
    },
    "metaphorEn": {
      "origin": "“We are not consumed” was a raw confession: covenant infidelity deserved total annihilation, yet God preserved a holy remnant.",
      "linguisticNuance": "The Hebrew \"chesed\" underscores loyal, unconditional covenant love that outlasts fire, siege, and judgment.",
      "crowdReaction": "The surviving remnant clung to this hymn of lament, repenting in exile as they looked forward to God’s dawn."
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ ምንም ዓይነት መከራ፣ ኃጢአትና ንስሐ ሳይኖር «ዛሬ ጥሩ ቀን ነው፣ ምሕረቱ አዲስ ነው!» በማለት ለቀላል ስሜታዊ መጽናኛ ብቻ ይጠቀሙበታል።",
      "damage": "የመጽሐፉን ጥልቅ የኀዘንና የንስሐ መልእክት ያደበዝዛል፤ በከባድ መከራ ውስጥ ያሉ አማኞች እውነተኛውን የጩኸት ጸሎት (Lament) እንዳይማሩ ያደርጋል።"
    },
    "distortionEn": {
      "claim": "Sung as a cheery, carefree morning anthem, totally disconnected from grief, national disaster, and heart-wrenching loss.",
      "damage": "It robs the church of the biblical language of lament, preventing saints in deep pain from processing sorrow before a holy God."
    },
    "truthAm": {
      "contextSummary": "ሰቆቃወ ኤርምያስ 3 በመከራ ጥልቁ ውስጥ እግዚአብሔርን የመጠበቅና የመታመን ትምህርት ነው።",
      "surroundingVerses": "በቁጥር 26 ላይ «ሰው ዝም ብሎ የእግዚአብሔርን ማዳን ተስፋ ቢያደርግ መልካም ነው» በማለት ትዕግሥትን ያስተምራል።",
      "timelessPrinciple": "የእግዚአብሔር ታማኝነት የሚታወቀው ሁሉም ነገር በተመቻቸበት ጊዜ ብቻ ሳይሆን በሕይወታችን ሁሉም ነገር ሲፈርስና በጨለማ ውስጥ ስንሆን ጭምር ነው።"
    },
    "truthEn": {
      "contextSummary": "Lamentations 3 is the theological summit of biblical lament, teaching believers how to anchor hope in God when everything collapses.",
      "surroundingVerses": "Verse 26 commands quiet endurance: \"It is good that one should wait quietly for the salvation of the Lord.\"",
      "timelessPrinciple": "God’s faithfulness shines brightest not in shallow luxury, but when we cling to Him amidst brokenness and the ashes of human ruin."
    },
    "crossReferences": [
      {
        "ref": "መዝሙር 30:5",
        "noteAm": "«ቍጣው ለቅጽበት ነውና፥ ሞገሱ ግን ለሕይወት ዘመን ነው፤ ማልቀስ በማታ ይመጣል፥ ደስታ ግን በማለዳ ይሆናል»",
        "noteEn": "“For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning.”"
      },
      {
        "ref": "2 ቆሮንቶስ 1:3-4",
        "noteAm": "«የርኅራኄ አባት የመጽናናትም ሁሉ አምላክ... በመከራችን ሁሉ ያጽናናናል»",
        "noteEn": "“The Father of mercies and God of all comfort, who comforts us in all our affliction.”"
      },
      {
        "ref": "ዕብራውያን 12:6",
        "noteAm": "«ጌታ የሚወደውን ይገሥጸዋልና፥ የሚቀበለውንም ልጅ ሁሉ ይገርፈዋል»",
        "noteEn": "“For the Lord disciplines the one he loves, and chastises every son whom he receives.”"
      }
    ]
  },
  {
    "id": "capsule-b26",
    "bookNr": 26,
    "chapter": 18,
    "verseStart": 20,
    "verseEnd": 20,
    "verseRefAm": "ትንቢተ ንዝቅኤል 18:20",
    "verseRefEn": "Ezekiel 18:20",
    "verseTextAm": "ኃጢአትን የምትሠራ ነፍስ እርስዋ ትሞታለች፤ ልጅ የአባቱን ኃጢአት አይሸከምም፥ አባትም የልጁን ኃጢአት አይሸከምም፤ የጻድቁ ጽድቅ በራሱ ላይ ይሆናል፥ የኃጢአተኛውም ኃጢአት በራሱ ላይ ይሆናል።",
    "verseTextEn": "The soul that sinneth, it shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son: the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him.",
    "titleAm": "ኃጢአት የሠራች ነፍስ እርሷ ትሞታለች — የትውልድ እርግማን ድግምት ወይስ የግል ተጠያቂነት?",
    "titleEn": "The Soul Who Sins Shall Die — Generational Curse Myths vs Individual Responsibility",
    "taglineAm": "ሕዝቅኤል «የአባቶች ኃጢአት በልጆች ላይ ይተላለፋል» የሚለውን የሐሰት ምሳሌ ያፈረሰበት እውነት ዛሬ መልሶ በቤተክርስቲያን ሲሰበክ",
    "taglineEn": "Ezekiel’s direct smashing of generational curse fatalism resurrected by modern deliverance ministries",
    "eraAm": "የባቢሎን ምርኮኞች መንደር በኮቦር ወንዝ ዳር",
    "eraEn": "Exilic Ministry by the Chebar Canal",
    "locationAm": "ቴል-አቢብ በባቢሎን",
    "locationEn": "Tel-abib by Chebar Canal",
    "yearApprox": "592 ዓ.ዓ.",
    "keyIcon": "⚖️",
    "sceneAm": {
      "setting": "ካህኑና ነቢዩ ሕዝቅኤል በባቢሎን ምርኮ ከነበሩት ከአይሁድ ጋር በኮቦር ወንዝ ዳርቻ ሳለ ምርኮኞቹ በእግዚአብሔር ፍትሕ ላይ ሲያጉረመርሙ።",
      "dailyLife": "በምርኮ የነበሩት አይሁድ «አባቶች የበለሱትን ኮምጣጣ በለስ በሉ፥ የልጆችም ጥርስ ጠረሰ» የሚል የፈሊጥ ምሳሌ እየደጋገሙ የገዛ ኃጢአታቸውን ይክዱ ነበር።",
      "socialTension": "ሕዝቡ «እኛ ንጹሐን ነን፤ ወደ ባቢሎን የመጣነው በአባቶቻችን በምናሴ ኃጢአት ምክንያት ነው እንጂ በእኛ ጥፋት አይደለም» እያሉ እግዚአብሔርን ከሰሱ።"
    },
    "sceneEn": {
      "setting": "Ezekiel ministering among bitter Jewish exiles camped along the irrigation canals of Babylon.",
      "dailyLife": "The exiles popularized a fatalistic proverb: \"The fathers eat sour grapes, and the children’s teeth are set on edge,\" blaming their ancestors for their exile.",
      "socialTension": "They refused to repent of their own idolatry, accusing God of unfairness and claiming they were innocent victims of generational curses."
    },
    "metaphorAm": {
      "origin": "እግዚአብሔር በሕያውነቱ ማለ፦ «ይህን ምሳሌ በእስራኤል ዘንድ ዳግመኛ አትናገሩም፤ ኃጢአት የሠራች ነፍስ እርሷ ትሞታለች፤ ልጅ የአባቱን በደል አይሸከምም» በማለት አፈረሰው።",
      "linguisticNuance": "«የጻድቁ ጽድቅ በራሱ ላይ ይሆናል፥ የኃጢአተኛውም ኃጢአት በራሱ ላይ ይሆናል» — እያንዳንዱ ሰው በፊቴ ተጠያቂ ነው።",
      "crowdReaction": "ምርኮኞቹ ሰበብ ማቅረባቸውን አቆሙ፤ የእግዚአብሔር ፍትሕ ንስሐን እንደሚፈልግ ተገነዘቡ።"
    },
    "metaphorEn": {
      "origin": "Yahweh swore by His life to banish the sour grapes proverb forever: each individual stands responsible before God.",
      "linguisticNuance": "“The righteousness of the righteous shall be upon himself, and the wickedness of the wicked upon himself”—absolute individual moral accountability.",
      "crowdReaction": "The exiles were stripped of their ancestral excuses, forced to confront their own unfaithfulness before the holy judge."
    },
    "distortionAm": {
      "claim": "ዘመናዊ \"የእርግማን ሰባሪ\" (Generational Curse Deliverance) ሰባኪዎች «አማኝ ብትሆንም ቅድመ አያትህ የሰራው ኃጢአት እርግማን ይዞብሃል፤ ልዩ ጸሎትና ገንዘብ ከፍለህ ካልተሰበረ አትድንም» ይላሉ።",
      "damage": "የክርስቶስን የመስቀል ሙሉ ነጻ አውጪነት ያቃልላል፤ አማኞችን በቅድመ አያት ፍርሃትና ጭንቀት ውስጥ ያስራል፤ ንስሐን በድግምት ይተካል።"
    },
    "distortionEn": {
      "claim": "Popular \"deliverance ministries\" teach that born-again believers carry generational demonic curses from ancestors requiring special paid deliverance rites.",
      "damage": "It undermines the sufficiency of Christ’s atonement, resurrects pagan fatalism, and binds believers in perpetual paranoia."
    },
    "truthAm": {
      "contextSummary": "ሕዝቅኤል 18 የትውልድ እርግማንን አስተሳሰብ ሙሉ በሙሉ የሚያፈርስና እያንዳንዱ ሰው በገዛ ድርጊቱ እንደሚፈረድበት የሚያረጋግጥ ነው።",
      "surroundingVerses": "በቁጥር 21-22 ላይ «ኃጢአተኛው ከሠራው ኃጢአት ሁሉ ቢመለስ... በሕይወት ይኖራል እንጂ አይሞትም» ተብሎ የንስሐ በረከት ተገልጧል።",
      "timelessPrinciple": "በክርስቶስ ኢየሱስ ያመነ ሰው አዲስ ፍጥረት ነው፤ እርግማኑ ሁሉ በመስቀል ላይ ተሰብሯል (ገላትያ 3:13)፤ ምንም ዓይነት የቀደመ እርግማን አይገዛውም።"
    },
    "truthEn": {
      "contextSummary": "Ezekiel 18 totally abolishes ancestral curse dogmas, establishing individual responsibility and immediate pardon upon personal repentance.",
      "surroundingVerses": "Verse 21: \"If a wicked person turns away from all his sins... he shall surely live; he shall not die. None of the transgressions that he has committed shall be remembered.\"",
      "timelessPrinciple": "In Christ, every curse is shattered; whoever is in Christ is a new creation with no ancestral demonic baggage binding their eternal destiny."
    },
    "crossReferences": [
      {
        "ref": "ገላትያ 3:13",
        "noteAm": "«በእንጨት የሚሰቀል ሁሉ የተረገመ ነው ተብሎ ተጽፎአልና ክርስቶስ ስለ እኛ እርግማን ሆኖ ከሕግ እርግማን ዋጀን»",
        "noteEn": "“Christ redeemed us from the curse of the law by becoming a curse for us—for it is written, ‘Cursed is everyone who is hanged on a tree.’”"
      },
      {
        "ref": "2 ቆሮንቶስ 5:17",
        "noteAm": "«ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል»",
        "noteEn": "“Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.”"
      },
      {
        "ref": "ሮሜ 8:1",
        "noteAm": "«እንግዲህ በክርስቶስ ኢየሱስ ላሉት አሁን ምንም ኩነኔ የለባቸውም»",
        "noteEn": "“There is therefore now no condemnation for those who are in Christ Jesus.”"
      }
    ]
  },
  {
    "id": "capsule-b27",
    "bookNr": 27,
    "chapter": 1,
    "verseStart": 8,
    "verseEnd": 8,
    "verseRefAm": "ትንቢተ ዳንኤል 1:8",
    "verseRefEn": "Daniel 1:8",
    "verseTextAm": "ዳንኤልም በንጉሡ መብልና በሚጠጣው ጠጅ እንዳይረክስ በልቡ አሰበ፤ እንዳይረክስም የጃንደረቦቹን አለቃ ለመነ።",
    "verseTextEn": "But Daniel purposed in his heart that he would not defile himself with the portion of the king’s meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.",
    "titleAm": "የዳንኤል ጾም — የክብደት መቀነሻ ዲቶክስ ወይስ የጣዖት አምልኮ እምቢተኝነት?",
    "titleEn": "The Daniel Fast — Modern Detox Diet vs Covenant Defiance of Idolatry",
    "taglineAm": "ዳንኤል ከጣዖት መሥዋዕት ሥጋ ለመጠበቅ ያደረገው ቅዱስ ውሳኔ ዛሬ ለክብደት መቀነሻ አመጋገብ ሲገለበጥ",
    "taglineEn": "Daniel’s heroic refusal to defile himself with royal food sacrificed to Marduk co-opted as a commercial weight-loss trend",
    "eraAm": "የባቢሎን ቤተ መንግሥት የትምህርት ዘመን",
    "eraEn": "Babylonian Royal Academy",
    "locationAm": "በባቢሎን ቤተ መንግሥት",
    "locationEn": "Palace of Babylon",
    "yearApprox": "605 ዓ.ዓ.",
    "keyIcon": "🦁",
    "sceneAm": {
      "setting": "ናቡከደነፆር ከይሁዳ ምርኮኞች መካከል መልከ መልካም፣ ብልህና የተማሩ ወጣቶችን መርጦ የባቢሎንን ቋንቋ፣ አስማትና ሳይንስ እንዲያጠኑ ባዘዘበት ወቅት።",
      "dailyLife": "በንጉሡ ማዕድ የሚቀርበው ሥጋና ወይን አስቀድሞ ለባቢሎን ጣዖታት (ለመርዶክና ለቤል) የተሰዋና የኦሪት የምግብ ሕግን ያልጠበቀ (ያልታረደ) ርኩስ ነበር።",
      "socialTension": "ዳንኤልና ሦስቱ ጓደኞቹ የንጉሡን ምግብ መብላት ከጣዖት ጋር ኅብረት ማድረግ መሆኑን ተረድተው ሕይወታቸውን ለአደጋ አጋለጡ።"
    },
    "sceneEn": {
      "setting": "Nebuchadnezzar indoctrinated elite Judean youth in Chaldean language, culture, and royal court etiquette.",
      "dailyLife": "Royal meat and wine were consecrated to pagan Babylonian deities (Marduk and Nebo) and violated biblical dietary laws regarding unbled, unclean meats.",
      "socialTension": "Eating the royal menu symbolized total allegiance and covenant assimilation to the Babylonian empire and its gods."
    },
    "metaphorAm": {
      "origin": "«በንጉሡ መብል እንዳይረክስ በልቡ አሰበ» — ጥያቄው ስለ ጤናማ አመጋገብ ወይም ስለ ቬጀቴሪያንነት ሳይሆን ከጣዖት ርኵሰት መጠበቅ ነበር።",
      "linguisticNuance": "«ዘርዖይም» (ጥራጥሬ/አትክልት) የጠየቁት ንጹሕ ውሃና እፅዋት በጣዖት አምልኮ ሊረክሱ ስለማይችሉ የኪዳን ንጽሕናቸውን ለመጠበቅ ነበር።",
      "crowdReaction": "እግዚአብሔር ለወጣቶቹ ጥበብንና እውቀትን ሰጣቸው፤ በንጉሡም ፊት ከአስማተኞች ሁሉ አሥር እጅ በልጠው ተገኙ።"
    },
    "metaphorEn": {
      "origin": "Daniel \"resolved that he would not defile himself\"—the issue was spiritual contamination with pagan cults, not physical dieting.",
      "linguisticNuance": "Vegetables and water (\"zero‘im\") were requested solely because unprocessed grain and water could not be defiled by idolatrous rituals.",
      "crowdReaction": "God honored their covenant fidelity, granting them supernatural wisdom, physical vigor, and discernment ten times greater than all the Chaldean astrologers."
    },
    "distortionAm": {
      "claim": "ዘመናዊ የጤናና የአመጋገብ መጻሕፍት ይህንን «የዳንኤል ጾም፦ በ21 ቀን ውስጥ ክብደት መቀነሻና የሰውነት ማጽጃ (detox)» በማለት ለግል የሰውነት ቅርጽና ጤና ያውሉታል።",
      "damage": "የዳንኤልን ኪዳናዊ ሰማዕትነትና እምነት ወደ ምድራዊ የአካል ብቃት ፕሮግራም ዝቅ ያደርገዋል፤ መንፈሳዊውን ተጋድሎ ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Marketed by lifestyle and diet industries as \"The 21-Day Daniel Fast\" for secular weight loss, holistic detoxification, and beach-body fitness.",
      "damage": "It trivializes an act of courageous, life-risking defiance against Babylonian idolatry into narcissistic body-shaping."
    },
    "truthAm": {
      "contextSummary": "ዳንኤል 1 የሚያሳየው በእግዚአብሔር ላይ ያለን ጽኑ ታማኝነትና ከዓለም ሥርዓት ጋር ላለመደባለቅ የሚደረገውን የተቀደሰ አቋም ነው።",
      "surroundingVerses": "ዳንኤል በኋላ በምዕራፍ 6 ወደ አንበሳ ጉድጓድ፣ ጓደኞቹም በምዕራፍ 3 ወደ እሳት እቶን የገቡት በዚሁ በጣዖት አለመንበርከክ አቋማቸው ነው።",
      "timelessPrinciple": "የክርስቲያን ዋና ጥሪ በየትኛውም አረማዊና ዓለማዊ ባህል ውስጥ ቢኖር ራሱን ለእግዚአብሔር ብቻ ለይቶ በቅድስና መመላለስ ነው።"
    },
    "truthEn": {
      "contextSummary": "Daniel 1 displays unwavering covenant loyalty in the lion’s den of pagan empire, setting the stage for the fiery furnace (ch 3) and lions’ den (ch 6).",
      "surroundingVerses": "The youth risked capital execution rather than compromise their biblical identity before the global superpower of the age.",
      "timelessPrinciple": "Believers are called to holy non-conformity to the idolatrous patterns of the world, refusing to defile their spiritual allegiance."
    },
    "crossReferences": [
      {
        "ref": "ሮሜ 12:2",
        "noteAm": "«የእግዚአብሔር ፈቃድ እርሱም በጎና ደስ የሚያሰኝ ፍጹምም የሆነው ነገር ምን እንደ ሆነ ፈትናችሁ ታውቁ ዘንድ በአእምሮአችሁ መታደስ ተለወጡ እንጂ ይህን ዓለም አትምሰሉ»",
        "noteEn": "“Do not be conformed to this world, but be transformed by the renewal of your mind.”"
      },
      {
        "ref": "1 ቆሮንቶስ 10:20-21",
        "noteAm": "«አሕዛብ የሚሠዉት ለአጋንንት እንዲሆን እንጂ ለእግዚአብሔር እንዳይሆን እላለሁ፤ ከአጋንንትም ጋር ማኅበረተኞች እንድትሆኑ አልወድም»",
        "noteEn": "“What pagans sacrifice they offer to demons and not to God. I do not want you to be participants with demons.”"
      },
      {
        "ref": "ያዕቆብ 4:4",
        "noteAm": "«ከዓለም ጋር ወዳጅ መሆን ለእግዚአብሔር ጥል እንዲሆን አታውቁምን? እንግዲህ የዓለም ወዳጅ ሊሆን የሚፈቅድ ሁሉ የእግዚአብሔር ጠላት ሆኖአል»",
        "noteEn": "“Do you not know that friendship with the world is enmity with God? Therefore whoever wishes to be a friend of the world makes himself an enemy of God.”"
      }
    ]
  },
  {
    "id": "capsule-b28",
    "bookNr": 28,
    "chapter": 4,
    "verseStart": 6,
    "verseEnd": 6,
    "verseRefAm": "ትንቢተ ሆሴዕ 4:6",
    "verseRefEn": "Hosea 4:6",
    "verseTextAm": "ሕዝቤ እውቀት ከማጣቱ የተነሣ ጠፍቶአል፤ አንተም እውቀትን ጠልተሃልና እኔ ካህን እንዳትሆነኝ እጠላሃለሁ፤ የአምላክህንም ሕግ ረስተሃልና እኔ ደግሞ ልጆችህን እረሳለሁ።",
    "verseTextEn": "My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children.",
    "titleAm": "ሕዝቤ እውቀት ከማጣቱ የተነሳ ጠፍቷል — ሚስጥራዊ ራዕይ ወይስ የእግዚአብሔርን ቃል መተው?",
    "titleEn": "My People are Destroyed for Lack of Knowledge — Gnostic Secret Knowledge vs Covenant Torah Rejection",
    "taglineAm": "ካህናት የእግዚአብሔርን ሕግ በመናቃቸው የተሰጠው ፍርድ ዛሬ ለ\"ልዩ ራዕይና የድብቅ እውቀት\" ማግኛ ሲጣመም",
    "taglineEn": "God’s rebuke of corrupt priests rejecting the written Law twisted into seeking esoteric \"revelation knowledge\"",
    "eraAm": "የሰሜን እስራኤል ውድቀት ዋዜማ",
    "eraEn": "Twilight of the Northern Kingdom",
    "locationAm": "በሰማርያ",
    "locationEn": "Samaria",
    "yearApprox": "750 ዓ.ዓ.",
    "keyIcon": "💔",
    "sceneAm": {
      "setting": "የሰሜኑ መንግሥት (እስራኤል) በኢዮርብዓም ዳግማዊ ዘመን በሀብት የደለበች ነገር ግን በጣዖት አምልኮ፣ በዝሙትና በጭካኔ የበሰበሰችበት ወቅት።",
      "dailyLife": "ካህናቱ የሕዝቡን የኃጢአት መሥዋዕት በመብላት ያተርፉ ነበር፤ ሕዝቡን የእግዚአብሔርን ቃል ከማስተማር ይልቅ በጣዖት ሰክረው ይደሰቱ ነበር።",
      "socialTension": "ሆሴዕ «በምድሪቱ እውነትና ምሕረት፥ እግዚአብሔርንም ማወቅ የለም፤ መርገምና ሐሰት፥ መግደልና መስረቅ አመንዝራም ሞልቶአል» በማለት አጋለጠ።"
    },
    "sceneEn": {
      "setting": "Northern Israel enjoyed dazzling economic boom under Jeroboam II while rotting internally through rampant Baal worship and moral decay.",
      "dailyLife": "Priests greedily fed on the sin offerings of the people, refusing to teach the Law because widespread sin generated lucrative sacrifices for their pockets.",
      "socialTension": "Hosea proclaimed God’s lawsuit: \"There is no faithfulness or steadfast love, and no knowledge of God in the land; there is swearing, lying, murder, stealing, and committing adultery\" (Hos 4:1-2)."
    },
    "metaphorAm": {
      "origin": "«እውቀት» ማለት ሚስጥራዊ ወይም ፍልስፍናዊ መረጃ ሳይሆን የእግዚአብሔርን ሕግ ማወቅና ከእርሱ ጋር በኪዳን ፍቅር መኖር (Covenant relational intimacy) ነው።",
      "linguisticNuance": "ቀጣዩ ዓረፍተ ነገር በግልጽ ያብራራዋል፦ «አንተ እውቀትን ጠልተሃልና... የአምላክህንም ሕግ ረስተሃልና እኔ ደግሞ ልጆችህን እረሳለሁ»።",
      "crowdReaction": "እስራኤል በ722 ዓ.ዓ. በአሦር ሠራዊት ሙሉ በሙሉ ተደምስሳ ወደ ምርኮ ተበተነች።"
    },
    "metaphorEn": {
      "origin": "“Knowledge” (Da’at Elohim) was not mystical data or esoteric Gnosticism, but faithful, relational obedience to Yahweh’s revealed Torah.",
      "linguisticNuance": "The verse defines itself in the immediate parallel clause: \"Because you have rejected knowledge... and forgotten the law of your God, I also will forget your children.\"",
      "crowdReaction": "Because priests and people despised God’s commandments, the Northern Kingdom was annihilated by Assyria in 722 BC."
    },
    "distortionAm": {
      "claim": "የአዎንታዊ አዋጅ ሰባኪዎች ጥቅሱን ወስደው «ሕዝቡ የጠፋው የብልጽግናን ሚስጥርና ራዕይ (revelation knowledge) ስላላወቀ ነው፤ ይህን ሚስጥር ካወቃችሁ ባለጠጋ ትሆናላችሁ» ይላሉ።",
      "damage": "መጽሐፍ ቅዱስን ወደ ግኖስቲክ ድብቅ እውቀት ይቀይራል፤ የኃጢአትንና የሕግን መጣስ አደጋ ይሸፍናል።"
    },
    "distortionEn": {
      "claim": "Prosperity preachers quote the half-verse to argue that poverty and illness are due to missing financial secrets: \"You need my secret revelation knowledge to unlock wealth!\"",
      "damage": "It replaces biblical repentance with esoteric Gnosticism and hides the terrifying danger of willful disobedience to God’s holy commandments."
    },
    "truthAm": {
      "contextSummary": "ሆሴዕ 4 የእግዚአብሔርን ቃልና ትእዛዛት የናቀ ማኅበረሰብ በሞራልና በሥነ-ምግባር እንደሚፈርስ የሚያስጠነቅቅ የፍርድ ቃል ነው።",
      "surroundingVerses": "በሆሴዕ 6:6 ላይ እግዚአብሔር «ከመሥዋዕት ይልቅ ምሕረትን፥ ከሚቃጠልም መሥዋዕት ይልቅ እግዚአብሔርን ማወቅ እወዳለሁ» በማለት ፍላጎቱን ገልጿል።",
      "timelessPrinciple": "እውነተኛው እውቀት በእግዚአብሔር ቃል ላይ የተመሠረተ ቅድስናና ታማኝነት ነው፤ ቃሉን የሚጥል ግን በመጨረሻ ወደ ውድቀት ያመራል።"
    },
    "truthEn": {
      "contextSummary": "Hosea 4 is a severe indictment against religious leaders who suppress Scripture, resulting in the moral rot and destruction of the nation.",
      "surroundingVerses": "Hosea 6:6 reiterates God’s heart: \"For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings.\"",
      "timelessPrinciple": "True knowledge is humble, covenantal submission to the revealed Word of God; forsaking Scripture inevitably leads to spiritual ruin."
    },
    "crossReferences": [
      {
        "ref": "ምሳሌ 1:7",
        "noteAm": "«የጥበብ መጀመሪያ እግዚአብሔርን መፍራት ነው፤ ሰነፎች ግን ጥበብንና ተግሣጽን ይንቃሉ»",
        "noteEn": "“The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction.”"
      },
      {
        "ref": "ዮሐንስ 17:3",
        "noteAm": "«እውነተኛ አምላክ ብቻ የሆንህ አንተን የላክኸውንም ኢየሱስ ክርስቶስን ያውቁ ዘንድ ይህች የዘላለም ሕይወት ናት»",
        "noteEn": "“And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent.”"
      },
      {
        "ref": "ቆላስይስ 1:9-10",
        "noteAm": "«በመንፈሳዊ ጥበብና አእምሮ ሁሉ የፈቃዱ እውቀት ይሞላባችሁ ዘንድ... በእግዚአብሔርም እውቀት እያደጋችሁ በበጎ ሥራ ሁሉ ፍሬ እንድታፈሩ»",
        "noteEn": "“Filled with the knowledge of his will in all spiritual wisdom and understanding... increasing in the knowledge of God.”"
      }
    ]
  },
  {
    "id": "capsule-b29",
    "bookNr": 29,
    "chapter": 2,
    "verseStart": 25,
    "verseEnd": 25,
    "verseRefAm": "ትንቢተ ኢዮኤል 2:25",
    "verseRefEn": "Joel 2:25",
    "verseTextAm": "የሰደድሁባችሁ ታላቁ ሠራዊቴ አንበጣና ደጎብያ ኩብኩባና ተምች የበላቸውን ዓመታት እመልስላችኋለሁ።",
    "verseTextEn": "And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpiller, and the palmerworm, my great army which I sent among you.",
    "titleAm": "አንበጣ የበላውን ዓመታት እመልስላችኋለሁ — የገንዘብ ተመላሽ ቀመር ወይስ የንስሐ በረከት?",
    "titleEn": "Restore the Years the Locusts Have Eaten — Financial Payback vs Grace After Repentance",
    "taglineAm": "ሕዝቡ በጾምና በልቅሶ ንስሐ ከገባ በኋላ የተሰጠው የተስፋ ቃል ዛሬ ያለ ንስሐ ለገንዘብ መመለስ ሲሰበክ",
    "taglineEn": "God’s gracious restoration following tearful national repentance cheapened into an automatic financial recovery formula",
    "eraAm": "የአንበጣው መቅሠፍትና የንስሐ ዘመን",
    "eraEn": "Locust Plague & Solemn Assembly",
    "locationAm": "በይሁዳ ምድር",
    "locationEn": "Land of Judah",
    "yearApprox": "830 ዓ.ዓ.",
    "keyIcon": "🦗",
    "sceneAm": {
      "setting": "በይሁዳ ምድር ታይቶ የማይታወቅ አሰቃቂ የአንበጣ መንጋ ወርሮ እርሻውን፣ ወይኑንና ዛፎቹን በሙሉ በልቶ ምድሪቱን ባዶ ባደረገበት አስፈሪ ወቅት።",
      "dailyLife": "በቤተ መቅደስ ለእግዚአብሔር የሚቀርበው የእህልና የመጠጥ መሥዋዕት እንኳ ጠፍቶ ካህናቱና ገበሬዎቹ በታላቅ ረሃብ አለቀሱ።",
      "socialTension": "ነቢዩ ኢዮኤል «በጾም፥ በልቅሶና በዋይታ በፍጹም ልባችሁ ወደ እኔ ተመለሱ፤ ልብሳችሁን ሳይሆን ልባችሁን ቅደዱ» በማለት የንስሐ ጥሪ አቀረበ (ቁ. 12-13)።"
    },
    "sceneEn": {
      "setting": "Unprecedented apocalyptic swarms of locusts devoured Judah’s vineyards, fig trees, and wheat fields down to bare bark.",
      "dailyLife": "Famine was so absolute that grain and drink offerings ceased at the Temple; cattle groaned and farmers wept in utter ruin.",
      "socialTension": "Joel sounded the trumpet in Zion: \"Return to me with all your heart, with fasting, with weeping, and with mourning; rend your hearts and not your garments\" (Joel 2:12-13)."
    },
    "metaphorAm": {
      "origin": "አንበጣው የእግዚአብሔር የፍርድ ሠራዊት ነበር፤ እግዚአብሔር «የበላውን እመልስላችኋለሁ» ያለው ሕዝቡ በንስሐ ወደ እርሱ ሲመለስ ዝናቡንና አዝመራውን ዳግመኛ እንደሚሰጣቸው ለማረጋገጥ ነው።",
      "linguisticNuance": "እግዚአብሔር «በመካከላችሁ የሰደድሁት ታላቁ ሠራዊቴ» በማለት አንበጣዎቹ የገዛ ፍርዱ እንደነበሩ ተናግሯል።",
      "crowdReaction": "ሕዝቡ ተሰብስቦ ማቅ ለብሶ ንስሐ ገባ፤ እግዚአብሔርም ለምድሩ ቀናላት፥ ለሕዝቡም አዘነላቸው (ቁ. 18)።"
    },
    "metaphorEn": {
      "origin": "The locusts were God’s disciplinary army; restoration was promised strictly as the supernatural fruit of genuine national repentance.",
      "linguisticNuance": "God specifically called the locust swarms \"my great army, which I sent among you\"—affirming His sovereign hand behind the calamity.",
      "crowdReaction": "Judah assembled from nursing infants to elders, crying between vestibule and altar: \"Spare your people, O Lord!\""
    },
    "distortionAm": {
      "claim": "ሰባኪዎች ጥቅሱን ወስደው «ባለፉት ዓመታት ያጣችሁትን ገንዘብ፣ ንብረትና ካፒታል እግዚአብሔር በሁለት እጥፍ የገንዘብ ቼክ ይመልስላችኋል፤ ዘር ዝሩ» እያሉ ገንዘብ ይሰበስባሉ።",
      "damage": "የንስሐውንና የተሰበረውን ልብ ጥሪ ሙሉ በሙሉ ይዘነጋል፤ መጽሐፍ ቅዱስን ወደ ኢንሹራንስ ተመላሽ ገንዘብ ዝቅ ያደርገዋል።"
    },
    "distortionEn": {
      "claim": "Preachers pitch this verse as an automatic financial payback contract: \"Sow your seed today and God will double your lost investments, bad divorces, and failed businesses!\"",
      "damage": "It discards the cross and the call to repentance, turning God into a cosmic insurance agent refunding poor worldly choices."
    },
    "truthAm": {
      "contextSummary": "ኢዮኤል 2 ከእውነተኛ ንስሐ በኋላ የሚመጣውን የእግዚአብሔርን ጸጋና የመንፈስ ቅዱስን መፍሰስ (ቁ. 28) የሚያበስር ታላቅ ትንቢት ነው።",
      "surroundingVerses": "እግዚአብሔር ምግብን ብቻ ሳይሆን በቁጥር 28 ላይ «መንፈሴን በሥጋ ለባሽ ሁሉ ላይ አፈሳለሁ» በማለት የጰንጠቆስጤን በረከት ተስፋ ሰጥቷል።",
      "timelessPrinciple": "እግዚአብሔር በንስሐ የተሰበረውን ልብ ይቅር ይላል፤ ያጣነውንም በመንፈሳዊ በረከትና በክርስቶስ ህልውና ይተካዋል።"
    },
    "truthEn": {
      "contextSummary": "Joel 2 promises divine restoration conditional on authentic repentance, culminating in the ultimate gift: the outpouring of the Holy Spirit (v. 28).",
      "surroundingVerses": "Verse 28 transcends agricultural grain: \"And it shall come to pass afterward, that I will pour out my Spirit on all flesh\" (fulfilled at Pentecost).",
      "timelessPrinciple": "God abundantly restores broken sinners who mourn their rebellion, filling them not with cheap earthly gold, but with the Holy Spirit."
    },
    "crossReferences": [
      {
        "ref": "ሐዋርያት 2:16-17",
        "noteAm": "«ነገር ግን ይህ በነቢዩ በኢዮኤል የተባለው ነው፦ እግዚአብሔር ይላል፦ በመጨረሻው ቀን እንዲህ ይሆናል፤ ሥጋ በለበሰ ሁሉ ላይ ከመንፈሴ አፈሳለሁ»",
        "noteEn": "“This is what was uttered through the prophet Joel: ‘And in the last days it shall be, God declares, that I will pour out my Spirit on all flesh.’”"
      },
      {
        "ref": "2 ቆሮንቶስ 7:10",
        "noteAm": "«እንደ እግዚአብሔር ፈቃድ የሆነ ኀዘን ጸጸት የሌለበትን ወደ መዳን የሚያደርሰውን ንስሐ ያደርጋልና»",
        "noteEn": "“For godly grief produces a repentance that leads to salvation without regret.”"
      },
      {
        "ref": "ኢሳይያስ 57:15",
        "noteAm": "«የተቀጠቀጡትንና የተዋረዱትን መንፈስ ሕያው አደርግ ዘንድ... በተሰበረና በተዋረደ መንፈስ ዘንድ እቀመጣለሁ»",
        "noteEn": "“I dwell in the high and holy place, and also with him who is of a contrite and lowly spirit, to revive the heart of the contrite.”"
      }
    ]
  },
  {
    "id": "capsule-b30",
    "bookNr": 30,
    "chapter": 6,
    "verseStart": 1,
    "verseEnd": 1,
    "verseRefAm": "ትንቢተ አሞጽ 6:1",
    "verseRefEn": "Amos 6:1",
    "verseTextAm": "በጽዮን ላሉ ዓለመኞች፥ በሰማርያም ተራራ ላይ ተዘልለው ለተቀመጡ፥ የእስራኤልም ቤት ወደ እነርሱ ለመጡባቸው ለአሕዛብ አለቆች ወዮላቸው!",
    "verseTextEn": "Woe to them that are at ease in Zion, and trust in the mountain of Samaria, which are named chief of the nations, to whom the house of Israel came!",
    "titleAm": "በጽዮን ተዘልለው ለሚቀመጡ ወዮላቸው — ምቾት ወይስ የመንፈሳዊ ድንዛዜ አደጋ?",
    "titleEn": "Woe to Those at Ease in Zion — Luxury Comfort vs Spiritual Apathy",
    "taglineAm": "የእረኛው አሞጽ የሀብታሞች ግድየለሽነት ተግሣጽ ዛሬ የቅንጦት ኑሮን ለሚያሳድዱ አማኞች የተሰጠ ማስጠንቀቂያ",
    "taglineEn": "The Tekoa shepherd’s blistering rebuke of consumerist self-indulgence confronting modern church apathy",
    "eraAm": "የሰማርያ የጥጋብና የቅንጦት ዘመን",
    "eraEn": "Decadence of Jeroboam II’s Samaria",
    "locationAm": "በሰማርያ የዝሆን ጥርስ አልጋዎች ላይ",
    "locationEn": "Ivory Palaces of Samaria",
    "yearApprox": "760 ዓ.ዓ.",
    "keyIcon": "🛋️",
    "sceneAm": {
      "setting": "በሰሜን እስራኤል መሪዎች በዝሆን ጥርስ በተሸለሙ አልጋዎች ላይ ተኝተው፣ የተመረጡ ጥጃዎችን እየበሉ፣ በወይን ጠጅ ሰክረው በደስታ በሚዘፍኑበት ወቅት።",
      "dailyLife": "ሀብታሞች ድሆችን በጫማ ዋጋ ይሸጡ ነበር (አሞጽ 2:6)፤ በፍርድ አደባባይ ጉቦ እየተቀበሉ የድሆችን ፍርድ ያጣምሙ ነበር።",
      "socialTension": "አሞጽ የተባለው የበግ እረኛ ከመንደሩ ከቴቁሔ ተነስቶ በቤቴል መቅደስ ፊት ቆሞ ፍርድን አወጀ።"
    },
    "sceneEn": {
      "setting": "Israelite elite lounged upon luxurious ivory-inlaid beds, feasting on prime stall-fed calves and drinking wine from sacred bowls.",
      "dailyLife": "The wealthy ruthlessly trampled the poor, selling the destitute into debt-slavery for the price of a pair of sandals (Amos 2:6).",
      "socialTension": "Amos, a rugged shepherd from Tekoa, invaded the royal sanctuary of Bethel, announcing impending devastation upon indifferent aristocrats."
    },
    "metaphorAm": {
      "origin": "«በጽዮን ተዘልለው የሚቀመጡ» የሚለው ቃል አገር እየፈረሰችና ድሆች እየተጨቆኑ በራስ ምቾትና ሀብት ብቻ የሚኩራሩትን የሞራል ድንዛዜ ያመለክታል።",
      "linguisticNuance": "«ስለ ዮሴፍ መከራ ግን አያዝኑም» (ቁ. 6) — የማኅበረሰቡ መንፈሳዊ ውድቀትና የድሆች ስቃይ ቅንጣት ታክል የማይገዳቸው ራስ ወዳዶች ነበሩ።",
      "crowdReaction": "የቤቴል ካህን አሜስያስ አሞጽን «ወደ ይሁዳ ምድር ሽሽ፥ በዚያም እንጀራህን ብላ» በማለት ሊያባርረው ሞከረ።"
    },
    "metaphorEn": {
      "origin": "“At ease in Zion” condemned wealthy elites who insulated themselves from social reality, blind to approaching foreign invasion.",
      "linguisticNuance": "Verse 6 reveals their fatal heart sickness: \"but are not grieved over the ruin of Joseph!\"",
      "crowdReaction": "Amaziah, the corrupt high priest of Bethel, ordered Amos to shut up and flee: \"O seer, go, flee away to the land of Judah, and earn your bread there!\""
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ ይዘነጉታል፤ እንዲያውም «የክርስቲያን መለያ የቅንጦት ቪላ፣ ውድ ልብስና በምቾት መዘባነን ነው፤ እግዚአብሔር ሊያደላድለን ይፈልጋል» በማለት ተቃራኒውን ያስተምራሉ።",
      "damage": "ክርስቲያኖችን ለድሆች ግድየለሽ ያደርጋል፤ ፍርድን ያመጣል፤ ቤተክርስቲያንን ወደ ምድራዊ ክበብነት ይለውጣል።"
    },
    "distortionEn": {
      "claim": "Largely ignored by modern churches, or inverted into celebrating ostentatious billionaire lifestyles as \"kingdom favor.\"",
      "damage": "It breeds callous contempt for the poor, blinds churchgoers to systemic injustice, and invites the righteous judgment of God."
    },
    "truthAm": {
      "contextSummary": "አሞጽ 6 እግዚአብሔር በራስ ወዳድነት የሚዘባነኑትን እንደሚቀጣና ፍትሕ እንደ ወንዝ እንዲፈስ እንደሚፈልግ የሚያሳይ ነው።",
      "surroundingVerses": "በአሞጽ 5:24 ላይ «ነገር ግን ፍርድ እንደ ውኃ፥ ጽድቅም እንደማይደርቅ ፈሳሽ ይፍሰስ» ተብሎ እውነተኛው አምልኮ ተገልጧል።",
      "timelessPrinciple": "ሀብትና ምቾት ለድሆችና ለመንፈሳዊው ውድቀት ግድየለሽ ካደረገን ለእግዚአብሔር ፍርድ ያጋልጠናል።"
    },
    "truthEn": {
      "contextSummary": "Amos 6 dismantles the illusion of security purchased by earthly luxury, promising that self-indulgent elites would be the first to march into exile.",
      "surroundingVerses": "Amos 5:24 trumpets God’s standard of acceptable worship: \"Let justice roll down like waters, and righteousness like an ever-flowing stream.\"",
      "timelessPrinciple": "Self-absorbed luxury in the presence of systemic suffering invites divine wrath; authentic faith bears fruit in compassionate justice."
    },
    "crossReferences": [
      {
        "ref": "ሉቃስ 12:19-20",
        "noteAm": "«ነፍሴንም፦ ነፍሴ ሆይ፥ ለብዙ ዘመን የሚበቃ ብዙ በረከት ተከማችቶልሻል፤ ዕረፊ፥ ብዪ፥ ጠጪ፥ ደስ ይበልሽ እላታለሁ፤ እግዚአብሔር ግን፦ አንተ ሰነፍ፥ በዚች ሌሊት ነፍስህን ከአንተ ሊወስዷት ይፈልጓታል አለው»",
        "noteEn": "“Soul, you have ample goods laid up for many years; relax, eat, drink, be merry. But God said to him, ‘Fool! This night your soul is required of you.’”"
      },
      {
        "ref": "ያዕቆብ 5:1-5",
        "noteAm": "«እናንተ ባለጠጎች ሆይ፥ ስለሚደርስባችሁ መከራ ዋይ ዋይ እያላችሁ አልቅሱ... በምድር ላይ ተቀማጥላችኋል በደስታም ኖራችኋል፤ ለእርድ ቀን ልባችሁን አደልባችኋል»",
        "noteEn": "“Come now, you rich, weep and howl for the miseries that are coming upon you... You have lived on the earth in luxury and in self-indulgence.”"
      },
      {
        "ref": "1 ዮሐንስ 3:17",
        "noteAm": "«የዚህ ዓለም ገንዘብ ያለው፥ ወንድሙም ሲቸገር አይቶ ልቡን የሚዘጋበት ማንም ቢሆን፥ የእግዚአብሔር ፍቅር በእርሱ እንዴት ይኖራል?»",
        "noteEn": "“If anyone has the world’s goods and sees his brother in need, yet closes his heart against him, how does God’s love abide in him?”"
      }
    ]
  },
  {
    "id": "capsule-b31",
    "bookNr": 31,
    "chapter": 1,
    "verseStart": 3,
    "verseEnd": 4,
    "verseRefAm": "ትንቢተ አብድዩ 1:3-4",
    "verseRefEn": "Obadiah 1:3-4",
    "verseTextAm": "በተሰነጠቀ ዓለት ውስጥ የምትኖር፥ ማደሪያህንም ከፍ ከፍ ያደረግህ፥ በልብህም። ወደ ምድር የሚያወርደኝ ማን ነው? የምትል አንተ ሆይ፥ የልብህ ትዕቢት አታልሎሃል። እንደ ንስር መጥቀህ ብትወጣ፥ ቤትህም በከዋክብት መካከል ቢሆን፥ ከዚያ አወርድሃለሁ፥ ይላል እግዚአብሔር።",
    "verseTextEn": "The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground? Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the Lord.",
    "titleAm": "የልብህ ትዕቢት አሳተህ — የዓለት ምሽግ ዋስትና ወይስ የእግዚአብሔር ፍርድ?",
    "titleEn": "The Pride of Your Heart Has Deceived You — Mountain Fortress vs Divine Reckoning",
    "taglineAm": "ኤዶማውያን በተራራ ቋጥኝ ምሽጋቸው ታምነው ወንድማቸውን እስራኤልን ሲያጠፉ የተሰጠ መለኮታዊ ፍርድ",
    "taglineEn": "Edom’s arrogance in their impregnable canyon fortress of Petra shattered by sovereign divine retribution",
    "eraAm": "የኢየሩሳሌም ውድቀትና የኤዶምያስ ክህደት ዘመን",
    "eraEn": "Sack of Jerusalem & Edomite Betrayal",
    "locationAm": "በሴይር ተራራ አለቶች ላይ (ፔትራ)",
    "locationEn": "Rock Cliffs of Petra / Mount Seir",
    "yearApprox": "585 ዓ.ዓ.",
    "keyIcon": "🦅",
    "sceneAm": {
      "setting": "ባቢሎናውያን ኢየሩሳሌምን ሲያጠፉ የያዕቆብ መንታ ወንድም የኤሳው ዘሮች (ኤዶማውያን) በደስታ ሲያጨበጭቡና ያመለጡትን አይሁድ አሳልፈው ለጠላት ሲሰጡ።",
      "dailyLife": "ኤዶማውያን በፔትራ (ሴላ) በተሰነጠቁ የቀይ ዓለት ቋጥኞች ውስጥ ተደላድለው ይኖሩ ነበር፤ ምሽጋቸው ከሰው ጥቃት የማይደፈር ይመስል ነበር።",
      "socialTension": "ኤዶማውያን በልባቸው «እስከ ምድር የሚያወርደኝ ማን ነው?» እያሉ በትዕቢት ይመኩ ነበር።"
    },
    "sceneEn": {
      "setting": "When Babylon sacked Jerusalem, Edom (descendants of Esau) rejoiced, ambushing fleeing Judean survivors and handing them over to slaughter.",
      "dailyLife": "Edom inhabited the high red sandstone canyons of Mount Seir (later Petra), an impregnable natural fortress towering hundreds of feet high.",
      "socialTension": "Secure behind narrow gorge approaches, Edom mocked the world: \"Who will bring me down to the ground?\""
    },
    "metaphorAm": {
      "origin": "«እንደ ንስር ከፍ ብለህ ብትወጣ፥ ጎጆህም በከዋክብት መካከል ቢሆን፥ ከዚያ አወርድሃለሁ» — የሰው ምድራዊ መመኪያ በእግዚአብሔር ፊት ገለባ ነው።",
      "linguisticNuance": "«የልብህ ትዕቢት አሳተህ» — ትዕቢት ሰውን እውነተኛ ማንነቱን እንዳያይ የሚያሳውር ገዳይ መርዝ ነው።",
      "crowdReaction": "ኤዶማውያን በናባታውያንና በባቢሎናውያን ተወርረው ከምድረ ገጽ ጠፉ፤ ትንቢቱም ተፈጸመ።"
    },
    "metaphorEn": {
      "origin": "“Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down”—God dethrones arrogant self-exaltation.",
      "linguisticNuance": "“The pride of your heart has deceived you”—pride is self-delusion, convincing mortals that worldly shields render them invincible.",
      "crowdReaction": "Edom was eventually driven from Petra by the Nabataeans, obliterated as an independent people precisely as Obadiah foretold."
    },
    "distortionAm": {
      "claim": "ብዙዎች የራሳቸውን የባንክ አካውንት፣ የፖለቲካ ግንኙነት ወይም ወታደራዊ አቅም እንደ ዓለት ምሽግ በመቁጠር «እኔን ማንም ሊነካኝ አይችልም» በሚል ትዕቢት ይኖራሉ።",
      "damage": "ሰውን ከእግዚአብሔር ጥገኝነት ያርቃል፤ ለወንድም መከራ ግድየለሽ ያደርጋል፤ ድንገተኛ ጥፋትን ያመጣል።"
    },
    "distortionEn": {
      "claim": "People trust in financial portfolios, political connections, and technological fortresses, adopting Edom’s boast: \"Nothing can touch me!\"",
      "damage": "It fosters toxic hubris, desensitizes the conscience toward vulnerable neighbors, and guarantees sudden humiliation."
    },
    "truthAm": {
      "contextSummary": "የአብድዩ መጽሐፍ ትዕቢተኞችና በወንድማቸው መከራ የሚደሰቱ ሁሉ በእግዚአብሔር ፍርድ እንደሚጠፉ ያረጋግጣል።",
      "surroundingVerses": "በቁጥር 15 ላይ «የእግዚአብሔር ቀን በአሕዛብ ሁሉ ላይ ቀርቧልና፤ እንዳደረግኸው ይደረግብሃል፤ ፍርድህ በራስህ ላይ ይመለሳል» ተብሏል።",
      "timelessPrinciple": "እውነተኛው መጠጊያ እግዚአብሔር ብቻ ነው፤ በትዕቢት የተነሳ ግን በእግዚአብሔር እጅ ይዋረዳል።"
    },
    "truthEn": {
      "contextSummary": "Obadiah proclaims the Day of the Lord against all unrepentant pride and callous cruelty against God’s covenant family.",
      "surroundingVerses": "Verse 15 establishes poetic divine justice: \"As you have done, it shall be done to you; your deeds shall return on your own head.\"",
      "timelessPrinciple": "God alone is an unshakeable rock of refuge; whoever exalts themselves in earthly arrogance will be brought low."
    },
    "crossReferences": [
      {
        "ref": "ምሳሌ 16:18",
        "noteAm": "«ትዕቢት ጥፋትን፥ የኵራት መንፈስም ውድቀትን ይቀድማል»",
        "noteEn": "“Pride goes before destruction, and a haughty spirit before a fall.”"
      },
      {
        "ref": "ያዕቆብ 4:6",
        "noteAm": "«እግዚአብሔር ትዕቢተኞችን ይቃወማል፥ ለትሑታን ግን ጸጋን ይሰጣል»",
        "noteEn": "“God opposes the proud, but gives grace to the humble.”"
      },
      {
        "ref": "ሉቃስ 1:51-52",
        "noteAm": "«በትዕቢተኞች የልባቸውን አሳብ በተነ፤ ገዢዎችን ከዙፋናቸው አዋረደ፥ ትሑታንንም ከፍ አደረገ»",
        "noteEn": "“He has scattered the proud in the thoughts of their hearts; he has brought down the mighty from their thrones and exalted those of humble estate.”"
      }
    ]
  },
  {
    "id": "capsule-b32",
    "bookNr": 32,
    "chapter": 4,
    "verseStart": 2,
    "verseEnd": 2,
    "verseRefAm": "ትንቢተ ዮናስ 4:2",
    "verseRefEn": "Jonah 4:2",
    "verseTextAm": "ወደ እግዚአብሔርም ጸለየና። አቤቱ፥ እለምንሃለሁ፤ በአገሬ ሳለሁ የተናገርሁት ይህ አልነበረምን? አንተ ቸርና ይቅር ባይ፥ ታጋሽም፥ ምሕረትህም የበዛ፥ ከክፉው ነገርም የተነሣ የምትጸጸት አምላክ እንደ ሆንህ አውቄ ነበርና ስለዚህ ወደ ተርሴስ ለመኰብለል ፈጥኜ ነበር።",
    "verseTextEn": "And he prayed unto the Lord, and said, I pray thee, O Lord, was not this my saying, when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil.",
    "titleAm": "አንተ መሐሪ አምላክ እንደ ሆንህ አውቄ ነበር — ብሔርተኝነት ወይስ ዓለም አቀፍ ምሕረት?",
    "titleEn": "I Knew That You are a Gracious God — Nationalist Bigotry vs Universal Grace",
    "taglineAm": "ዮናስ በጠላቶቹ መዳን ተቆጥቶ የተናገረው ቃል ዛሬ የክርስቶስን ወንጌል ለገዛ ወገናችን ብቻ ለማጠር ሲሞከር",
    "taglineEn": "Jonah’s rage over God’s mercy to brutal enemies exposing ethnocentric religion that hates grace for outsiders",
    "eraAm": "የአሦር ንጉሣዊ ከተማ የነነዌ ዘመን",
    "eraEn": "Imperial Nineveh & Prophetic Flight",
    "locationAm": "ከነነዌ ከተማ በስተ ምሥራቅ ዳስ ውስጥ",
    "locationEn": "East of Nineveh under a Booth",
    "yearApprox": "770 ዓ.ዓ.",
    "keyIcon": "🐋",
    "sceneAm": {
      "setting": "ነነዌ የአሦር ዋና ከተማ ስትሆን በጭካኔዋ፣ በደም ማፍሰሷና ሰዎችን በቁማቸው ቆዳቸውን በመግፈፍ የምትታወቅ ጨካኝ አረማዊት ከተማ ነበረች።",
      "dailyLife": "ዮናስ ወደ ነነዌ ሄዶ ፍርድን ሲያውጅ ንጉሡ ከዙፋኑ ወርዶ፣ ማቅ ለብሶ፣ ከብቶቹ እንኳ ሳይቀሩ እንዲጾሙ አወጀ።",
      "socialTension": "ነነዌ ንስሐ ገብታ እግዚአብሔር ምሕረት ሲያደርግላት ዮናስ እጅግ ተበሳጭቶ «ከመኖር ሞት ይሻለኛልና ውሰደኝ» በማለት ሞቱን ተመኘ።"
    },
    "sceneEn": {
      "setting": "Nineveh was the terror of the ancient Near East, notorious for impaling captives, skinning victims alive, and mass slaughter.",
      "dailyLife": "When Jonah proclaimed coming destruction, the pagan king stepped down from his throne, covering even royal livestock in sackcloth and ashes.",
      "socialTension": "When God relented of disaster, Jonah erupted in furious resentment, enraged that his despised geopolitical enemies were forgiven."
    },
    "metaphorAm": {
      "origin": "ዮናስ የእግዚአብሔርን ጸጋ፣ ምሕረትና ርኅራኄ በቃሉ ጠንቅቆ ያውቃል፤ ነገር ግን ያ ምሕረት ለጠላቶቹ እንዲሰጥ ፈጽሞ አልፈለገም ነበር።",
      "linguisticNuance": "«አንተ ቸርና መሐሪ፥ ቁጣህ የዘገየ፥ ምሕረትህም የበዛ፥ ከክፉውም ነገር የተነሳ የምትጸጸት አምላክ እንደ ሆንህ አውቄ ነበር» — የእግዚአብሔርን ባሕርይ ተናግሮ ተቃወመው!።",
      "crowdReaction": "እግዚአብሔር በቅል እፅዋትና በትል ምሳሌ የዮናስን ራስ ወዳድነት አጋለጠው።"
    },
    "metaphorEn": {
      "origin": "Jonah possessed flawless orthodox theology—quoting Exodus 34:6 word for word—yet his tribalistic heart hated the sovereign grace he preached.",
      "linguisticNuance": "“For I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love”—he weaponized God’s character as an accusation!",
      "crowdReaction": "God used a wilting plant, a scorching east wind, and a tiny worm to expose the pathetic pettiness of Jonah’s nationalist heart."
    },
    "distortionAm": {
      "claim": "ብዙ ክርስቲያኖች የእግዚአብሔርን ጸጋ ለራሳቸው ቡድን፣ ጎሣ ወይም ቤተ እምነት ብቻ ወስደው ጠላቶቻቸውና ሌሎች ወገኖች እንዲጠፉና እንዲረገሙ ይመኛሉ።",
      "damage": "የወንጌልን ዓለም አቀፋዊ ተልዕኮ ያጠፋል፤ በቤተክርስቲያን ውስጥ የጎሣና የፖለቲካ ጥላቻን ያሰርጻል።"
    },
    "distortionEn": {
      "claim": "Religious believers hoard divine favor for their own ethnic, national, or ideological clan while celebrating vengeance upon their political enemies.",
      "damage": "It poisons evangelism, breeds malicious tribal hatred in the church, and replicates the bitter, graceless spirit of the older brother in Luke 15."
    },
    "truthAm": {
      "contextSummary": "የዮናስ መጽሐፍ የሚያሳየው እግዚአብሔር ጠላቶቻቸውን ጨምሮ ለሚጠፉት ሰዎች ሁሉ ያለውን ጥልቅ ርኅራኄ ነው።",
      "surroundingVerses": "በመጨረሻው ቁጥር (4:11) ላይ እግዚአብሔር «ቀኛቸውንና ግራቸውን የማይለዩ ከመቶ ሃያ ሺህ የሚበልጡ ሰዎች ላሉባት ለታላቂቱ ከተማ ለነነዌ አላዝንምን?» በማለት ዮናስን አስተማረ።",
      "timelessPrinciple": "የእግዚአብሔር ልብ ለጠፉት ሁሉ ይመታል፤ የክርስቶስ ደቀ መዝሙር ጠላቶቹን መውደድና ለሚጠሉት መጸለይ አለበት።"
    },
    "truthEn": {
      "contextSummary": "The Book of Jonah concludes with an open-ended divine question revealing God’s immense compassion for unreached, morally confused pagan multitudes.",
      "surroundingVerses": "Jonah 4:11: \"And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left?\"",
      "timelessPrinciple": "God’s heart beats for all nations; Christ commands His followers to love their enemies and carry the gospel of reconciliation to every tribe and tongue."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 5:44",
        "noteAm": "«እኔ ግን እላችኋለሁ፥ ጠላቶቻችሁን ውደዱ፥ የሚረግሟችሁንም መርቁ፥ ለሚጠሏችሁም መልካም አድርጉ»",
        "noteEn": "“Love your enemies and pray for those who persecute you.”"
      },
      {
        "ref": "ሉቃስ 15:28",
        "noteAm": "«እርሱ ግን ተቆጣ ሊገባም አልወደደም፤ አባቱም ወጥቶ ለመነው»",
        "noteEn": "“He was angry and refused to go in. His father came out and entreated him.”"
      },
      {
        "ref": "2 ጴጥሮስ 3:9",
        "noteAm": "«ሁሉ ወደ ንስሐ እንዲደርሱ እንጂ ማንም እንዳይጠፋ ወዶ ስለ እናንተ ይታገሣል»",
        "noteEn": "“Not wishing that any should perish, but that all should reach repentance.”"
      }
    ]
  },
  {
    "id": "capsule-b33",
    "bookNr": 33,
    "chapter": 6,
    "verseStart": 8,
    "verseEnd": 8,
    "verseRefAm": "ትንቢተ ሚክያስ 6:8",
    "verseRefEn": "Micah 6:8",
    "verseTextAm": "ሰው ሆይ፥ መልካሙን ነግሮሃል፤ እግዚአብሔርም ከአንተ ዘንድ የሚሻው ምንድር ነው? ፍርድን ታደርግ ዘንድ፥ ምሕረትንም ትወድድ ዘንድ፥ ከአምላክህም ጋር በትሕትና ትሄድ ዘንድ አይደለምን?",
    "verseTextEn": "He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
    "titleAm": "እግዚአብሔር ከአንተ የሚፈልገው ምንድን ነው — ዓለማዊ ማኅበራዊ ፍትሕ ወይስ ቅዱስ ኪዳን?",
    "titleEn": "What Does the Lord Require — Secular Social Activism vs Covenant Wholeheartedness",
    "taglineAm": "ፍትሕን ማድረግና ምሕረትን መውደድ የተባለው መለኮታዊ ጥሪ ዛሬ እምነትንና ክርስቶስን ወደ ፖለቲካዊ አክቲቪዝም ዝቅ ሲደረግ",
    "taglineEn": "Micah’s profound summary of covenant discipleship stripped of theological faith to justify secular political activism",
    "eraAm": "የይሁዳ የሞራል ብልሹነትና የነቢያት ዘመን",
    "eraEn": "Judah’s Social Crisis under Ahaz & Hezekiah",
    "locationAm": "በይሁዳ ገጠር ሞሬሼት",
    "locationEn": "Moresheth-Gath in Judah",
    "yearApprox": "735 ዓ.ዓ.",
    "keyIcon": "⚖️",
    "sceneAm": {
      "setting": "የይሁዳ ባለጠጎችና መሪዎች ቤቶችንና እርሻዎችን በግፍ እየነጠቁ፣ መበለቶችንና ድሆችን እያፈናቀሉ፣ በቤተ መቅደስ ግን በሺዎች የሚቆጠሩ ፍየሎችንና የበግ ጠቦቶችን መሥዋዕት በሚያቀርቡበት ወቅት።",
      "dailyLife": "የሐሰት ነቢያት በገንዘብ ይተነብዩ ነበር፤ ካህናት በደመወዝ ያስተምሩ ነበር፤ «እግዚአብሔር በመካከላችን ነውና ክፉ ነገር አያገኘንም» እያሉ ይደነፉ ነበር (ሚክ 3:11)።",
      "socialTension": "እግዚአብሔር ተራሮችን ምስክር አድርጎ ከሕዝቡ ጋር የፍርድ ክርክር ጀመረ (ሚክ 6:1-2)።"
    },
    "sceneEn": {
      "setting": "Judah’s corrupt aristocracy foreclosed on vulnerable farmsteads, violently robbing widows and orphans while maintaining lavish temple sacrifices.",
      "dailyLife": "Priests taught for cash, prophets prophesied for money, yet boldly presumed upon God: \"Is not the Lord in the midst of us? No disaster shall come upon us!\" (Mic 3:11).",
      "socialTension": "Yahweh summoned the enduring foundations of the mountains as jury in a cosmic legal lawsuit against His hypocritical covenant people."
    },
    "metaphorAm": {
      "origin": "ሕዝቡ «በሺህ በሚቆጠሩ አውራ በጎች ደስ ይለዋልን?» እያሉ የውጭ መሥዋዕትን ሲያቀርቡ፣ ሚክያስ እውነተኛው መሥዋዕት ምን እንደሆነ ገለጠ።",
      "linguisticNuance": "ሦስቱ መለኮታዊ ጥያቄዎች፦ 1) ፍትሕን ማድረግ (ሚሽፓት)፣ 2) ምሕረትን መውደድ (ቼሴድ)፣ 3) ከአምላክ ጋር በትሕትና መሄድ።",
      "crowdReaction": "የግብዞች ሃይማኖት ተጋለጠ፤ ያለ እውነተኛ ፍትሕና ትሕትና የሚደረግ አምልኮ ሁሉ በእግዚአብሔር ዘንድ አስጸያፊ መሆኑ ታወቀ።"
    },
    "metaphorEn": {
      "origin": "The hypocrites asked whether offering 10,000 rivers of oil or sacrificing their firstborn would appease God; Micah shattered their ritualistic bargaining.",
      "linguisticNuance": "The three pillars: 1) Do justice (\"mishpat\"), 2) Love loyal mercy (\"chesed\"), 3) Walk humbly with your God (\"hatzne’a lechet\").",
      "crowdReaction": "External sacrificial rituals were unmasked as worthless unless accompanied by practical righteousness and heartfelt submission to Yahweh."
    },
    "distortionAm": {
      "claim": "ዘመናዊ የሊበራል አስተማሪዎች ይህን ጥቅስ ወስደው «ኢየሱስ፣ መስቀል፣ ንስሐና እምነት አያስፈልጉም፤ ማኅበራዊ ፍትሕ ብቻ ከሠራህ ይበቃል» በማለት ወንጌልን ወደ ዓለማዊ ፖለቲካዊ አክቲቪዝም ይለውጡታል።",
      "damage": "ሰውን በራሱ ስራ ሊጸድቅ እንደሚችል በማታለል የክርስቶስን የመስቀል ድነት ያጠፋል፤ «ከአምላክህ ጋር በትሕትና ሂድ» የሚለውን የመጀመሪያ ኪዳን ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Liberal theologians strip the verse of its theological core, claiming: \"Doctrine, the Cross, and repentance don’t matter; all God requires is secular social welfare work!\"",
      "damage": "It reduces the Gospel to a political action committee, promotes self-righteous moralism, and shears social justice from humble submission to God."
    },
    "truthAm": {
      "contextSummary": "ሚክያስ 6 አምልኮ በቤተ መቅደስ በሚደረግ ሥርዓት ብቻ ሳይሆን በዕለት ተዕለት ሕይወት ለድሆች በሚደረግ ፍትሕና በእግዚአብሔር ፊት በሚታይ ትሕትና እንደሚረጋገጥ ያሳያል።",
      "surroundingVerses": "ሚክያስ በምዕራፍ 7:18-19 ላይ በመጨረሻ ማዳን የሚገኘው በደላችንን ይቅር በሚለውና ኃጢአታችንን ወደ ባሕር ጥልቅ በሚጥለው በእግዚአብሔር ጸጋ ብቻ እንደሆነ ይመሰክራል።",
      "timelessPrinciple": "እውነተኛ እምነት በክርስቶስ ጸጋ ተለውጦ ለተጨቆኑት የሚቆም፣ ምሕረትን የሚያሳይና በእግዚአብሔር ፊት በትሕትና የሚመላለስ ሕይወት ነው።"
    },
    "truthEn": {
      "contextSummary": "Micah 6 exposes dead sacramental ritualism devoid of horizontal righteousness and vertical humility before the Living God.",
      "surroundingVerses": "The book concludes in Micah 7:18-19 with sovereign grace: \"Who is a God like you, pardoning iniquity... He will tread our iniquities underfoot.\"",
      "timelessPrinciple": "True biblical justice flows from a heart regenerated by divine mercy, walking in reverent, holy humility before God."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 23:23",
        "noteAm": "«የሕግን ዋና ነገር፥ ፍርድንና ምሕረትን ታማኝነትንም ትታችኋልና ወዮላችሁ፤ ይህን ልታደርጉ ያንም ሳትተዉ ይገባችሁ ነበር»",
        "noteEn": "“You have neglected the weightier matters of the law: justice and mercy and faithfulness.”"
      },
      {
        "ref": "ያዕቆብ 1:27",
        "noteAm": "«ንጹሕ የሆነ ነውርም የሌለበት አምልኮ በእግዚአብሔር አብ ዘንድ ይህ ነው፤ ወላጅ የሌላቸውን ልጆች ባልቴቶችንም በመከራቸው መጠየቅ»",
        "noteEn": "“Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction.”"
      },
      {
        "ref": "ኤፌሶን 2:10",
        "noteAm": "«እኛ ፍጥረቱ ነንና፤ እንመላለስበት ዘንድ እግዚአብሔር አስቀድሞ ያዘጋጀውን መልካሙን ሥራ ለማድረግ በክርስቶስ ኢየሱስ ተፈጠርን»",
        "noteEn": "“For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand.”"
      }
    ]
  },
  {
    "id": "capsule-b34",
    "bookNr": 34,
    "chapter": 1,
    "verseStart": 7,
    "verseEnd": 7,
    "verseRefAm": "ትንቢተ ናሆም 1:7",
    "verseRefEn": "Nahum 1:7",
    "verseTextAm": "እግዚአብሔር መልካም ነው፥ በመከራ ቀንም መሸሸጊያ ነው፤ በእርሱ የሚታመኑትንም ያውቃል።",
    "verseTextEn": "The Lord is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
    "titleAm": "እግዚአብሔር ቸር ነው፥ በመከራ ቀንም መጠጊያ ነው — ርካሽ ፍቅር ወይስ የጨቋኞች ፍርድ?",
    "titleEn": "The Lord is Good, a Stronghold in the Day of Trouble — Cheap Love vs Deliverance from Tyranny",
    "taglineAm": "ጨካኟ ነነዌ በምትጠፋበት ፍርድ መካከል የተነገረው መጽናናት ዛሬ የእግዚአብሔርን ቅዱስ ቁጣ ለመካድ ሲጣመም",
    "taglineEn": "A comfort forged amidst the fiery doom of Assyrian terrorists sanitized into modern sentimental god-is-never-angry theology",
    "eraAm": "የአሦር ግዛት ጭካኔና የመጨረሻ ፍርድ ዘመን",
    "eraEn": "Doom of the Assyrian Empire",
    "locationAm": "በኤልቆሽ",
    "locationEn": "Elkosh",
    "yearApprox": "620 ዓ.ዓ.",
    "keyIcon": "⚡",
    "sceneAm": {
      "setting": "አሦር ዓለምን በጭካኔ ስትገዛ የሰሜኑን መንግሥት ካጠፋች ከ100 ዓመታት በኋላ፤ ነነዌ በኃጢአቷ ተመልሳ ወደ ጥፋት እየገሰገሰች በነበረችበት ወቅት።",
      "dailyLife": "የይሁዳ ሕዝብ በአሦር ወታደራዊ ጫና፣ በግብርና በሽብር ተጨንቆ ይኖር ነበር፤ ነነዌ «የደም ከተማ» (ናሆም 3:1) ተብላ ትጠራ ነበር።",
      "socialTension": "ናሆም የእግዚአብሔርን አስፈሪ ቁጣ ያወጀው ለጠላቶቹ ሲሆን፣ ለተጨቆኑት ቅዱሳን ግን እርሱ መጠጊያ መሆኑን መሰከረ።"
    },
    "sceneEn": {
      "setting": "A century after Jonah, Assyria returned to violent depravity, terrorizing the Near East with atrocities; Nineveh earned the title \"city of blood\" (Nah 3:1).",
      "dailyLife": "Judah lived under constant terror of Assyrian siege, plunder, and brutal deportation.",
      "socialTension": "Nahum proclaimed the terrifying vengeance of God upon bloody oppressors, bringing fierce comfort to His battered people."
    },
    "metaphorAm": {
      "origin": "እግዚአብሔር ቸር መሆኑ የተገለጠው ጨካኙንና ገዳዩን የአሦር አምባገነን መንግሥት ከምድር ገጽ ጠራርጎ በማጥፋት ለተጨነቁት ነጻነትን ሲሰጥ ነው።",
      "linguisticNuance": "በቁጥር 2 ላይ «እግዚአብሔር ቀናተኛና ተበቃይ አምላክ ነው፤ እግዚአብሔር ተበቃይና መዓትን የተሞላ ነው» ከሚለው ኃይለኛ የቁጣ አውድ ጋር ተያይዞ ነው «ቸር ነው» የተባለው!።",
      "crowdReaction": "ተጨቋኙ ሕዝብ የጭቆናው ቀንበር ሊሰበር እንደሆነ ሰምቶ በደስታ ተነፈሰ (ናሆም 1:15)።"
    },
    "metaphorEn": {
      "origin": "God’s \"goodness\" is demonstrated by crushing monstrous tyrants who butcher the innocent, establishing justice for the defenseless.",
      "linguisticNuance": "Verse 7 sits in the immediate context of verse 2: \"The Lord is a jealous and avenging God; the Lord is avenging and wrathful\"—goodness requires wrath against evil!",
      "crowdReaction": "Oppressed nations clapped their hands with joy upon hearing of Nineveh’s imminent overthrow (Nah 3:19)."
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ ነጥለው ወስደው «እግዚአብሔር ፍቅር ብቻ ነው፤ ማንንም አይቀጣም፤ ቁጣና ፍርድ የሚባል ነገር የለም» በማለት መለኮታዊ ፍትሕን ይክዳሉ።",
      "damage": "የእግዚአብሔርን ቅድስናና ፍትሕ ያረክሳል፤ ኃጢአተኞች ሳይፈሩ በክፋት እንዲቀጥሉ ያበረታታል።"
    },
    "distortionEn": {
      "claim": "Sentimentalist theologians quote Nahum 1:7 to insist God is incapable of holy anger, judgment, or hell: \"God is only smiles and hugs.\"",
      "damage": "It eviscerates divine justice, comforts unrepentant abusers, and robs victims of the righteous vindication of God."
    },
    "truthAm": {
      "contextSummary": "የናሆም መጽሐፍ የእግዚአብሔር ቸርነት ለሚታመኑበት መጠጊያ ሲሆን ለክፉዎች ግን ፍጹም የሚያጠፋ የእሳት ነበልባል መሆኑን ያሳያል።",
      "surroundingVerses": "በቁጥር 8 ላይ «ነገር ግን በጎርፍ ውኃ ስፍራዋን ፈጽሞ ያጠፋል፥ ጠላቶቹንም ወደ ጨለማ ያሳድዳቸዋል» በማለት ፍርዱን አረጋግጧል።",
      "timelessPrinciple": "እግዚአብሔር ፍቅር ነው፤ ክፋትን ግን በጽድቅ ይቀጣል፤ እውነተኛው መጠጊያ በክርስቶስ በመታመን ብቻ ይገኛል።"
    },
    "truthEn": {
      "contextSummary": "Nahum reveals that God’s holy wrath against evil is the guarantee of His covenant goodness to the oppressed.",
      "surroundingVerses": "Verse 8 immediately follows: \"But with an overflowing flood he will make a complete end of the adversaries, and will pursue his enemies into darkness.\"",
      "timelessPrinciple": "God’s goodness protects the humble, while His holy justice will eradicate all evil from His universe."
    },
    "crossReferences": [
      {
        "ref": "ሮሜ 11:22",
        "noteAm": "«እንግዲህ የእግዚአብሔርን ቸርነትና ጭካኔ ተመልከት፤ ጭካኔው በወደቁት ላይ ነው፥ ቸርነቱ ግን በቸርነቱ ብትኖር በአንተ ላይ ነው»",
        "noteEn": "“Note then the kindness and the severity of God: severity toward those who have fallen, but God’s kindness to you.”"
      },
      {
        "ref": "ዕብራውያን 10:30-31",
        "noteAm": "«በቀል የእኔ ነው፥ እኔ ብድራትን እመልሳለሁ ያለውን እናውቃለንና፤ በሕያው እግዚአብሔር እጅ መውደቅ የሚያስፈራ ነው»",
        "noteEn": "“For we know him who said, ‘Vengeance is mine; I will repay.’ It is a fearful thing to fall into the hands of the living God.”"
      },
      {
        "ref": "መዝሙር 46:1",
        "noteAm": "«እግዚአብሔር መጠጊያችንና ኃይላችን፥ በሚደርስብን መከራ ሁሉ ታላቅ ረዳታችን ነው»",
        "noteEn": "“God is our refuge and strength, a very present help in trouble.”"
      }
    ]
  },
  {
    "id": "capsule-b35",
    "bookNr": 35,
    "chapter": 2,
    "verseStart": 2,
    "verseEnd": 2,
    "verseRefAm": "ትንቢተ እንባቆም 2:2",
    "verseRefEn": "Habakkuk 2:2",
    "verseTextAm": "እግዚአብሔርም መለሰልኝ እንዲህም አለ። አንባቢው ይፈጥን ዘንድ ራእዩን ጻፍ፥ በጽላትም ላይ ግለጠው።",
    "verseTextEn": "And the Lord answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it.",
    "titleAm": "ራእዩን ጻፍ በጽላትም ላይ ቅረጸው — የቪዥን ቦርድ ስኬት ወይስ የመጪው ፍርድ ጽናት?",
    "titleEn": "Write the Vision and Make it Plain — Vision Board Goals vs Imminent Judgment",
    "taglineAm": "የባቢሎን ወረራ ሲመጣ ጻድቅ በእምነቱ እንዲድን የተሰጠው መመሪያ ዛሬ ለግል ምኞት ማኒፌስቴሽን ሲገለበጥ",
    "taglineEn": "A terrifying prophecy of Babylonian invasion inscribed on clay tablets co-opted as a blueprint for personal \"vision boards\"",
    "eraAm": "የባቢሎን ወረራ ዋዜማና የነቢዩ ክርክር",
    "eraEn": "Impending Chaldean Invasion",
    "locationAm": "በጠባቂው ማማ ላይ",
    "locationEn": "Watchtower of Judah",
    "yearApprox": "607 ዓ.ዓ.",
    "keyIcon": "📜",
    "sceneAm": {
      "setting": "ነቢዩ ዕንባቆም «አምላክ ሆይ፥ በይሁዳ ያለውን ግፍና ክፋት ለምን ዝም ብለህ ታያለህ?» ብሎ ሲጠይቅ፣ እግዚአብሔር «ጨካኞችንና አስፈሪዎችን ባቢሎናውያንን (ከለዳውያንን) አስነሳለሁ» ብሎ የመለሰበት ወቅት።",
      "dailyLife": "ዕንባቆም እግዚአብሔር ከይሁዳ ይልቅ እጅግ ጨካኝ በሆነው አረማዊ ሕዝብ እንዴት እንደሚፈርድ ሊረዳው ባለመቻሉ በማማው ላይ ቆሞ መልስ ይጠብቅ ነበር።",
      "socialTension": "እግዚአብሔር ዕንባቆምን ራእዩን እንዲጽፍ አዘዘው፤ ራእዩ ግን መጪው የባቢሎን የጦር ወረራና ጥፋት ነበር!።"
    },
    "sceneEn": {
      "setting": "Habakkuk protested Judah’s violence; God shocked him by revealing He was raising up the ruthless, bloodthirsty Chaldeans (Babylonians) as His instrument of judgment.",
      "dailyLife": "Perplexed that a holy God would use a wicked pagan empire to discipline Judah, Habakkuk climbed onto his watchtower waiting for God’s rebuke.",
      "socialTension": "God commanded Habakkuk to write the vision on tablets—the vision was the terrifying, inescapable onslaught of Babylon!"
    },
    "metaphorAm": {
      "origin": "«የሚያነበው እንዲሮጥ ራእዩን በጽላት ላይ ቅረጸው» ማለት ወታደራዊ መልእክተኛው አደጋው መድረሱን አንብቦ ለሕዝቡ ማስጠንቀቂያ ለመስጠት በፍጥነት እንዲሮጥ ለማስቻል ነው።",
      "linguisticNuance": "«ጻድቅ ግን በእምነቱ በሕይወት ይኖራል» (ቁ. 4) — በዚያ አስፈሪ ጥፋት መካከል የሚተርፈው በገዛ ጥንካሬው ሳይሆን በእግዚአብሔር ላይ በእውነተኛ እምነት የታመነው ብቻ ነው።",
      "crowdReaction": "ዕንባቆም ደነገጠ፤ ሆኖም «በለስ ባታፈራ፥ በወይንም ፍሬ ባይገኝ... እኔ በእግዚአብሔር ደስ ይለኛል» በማለት በምዕራፍ 3 ላይ በእምነት ዘመረ።"
    },
    "metaphorEn": {
      "origin": "“So he may run who reads it” meant a herald could read the large warning placard at a glance and run through the streets sounding the alarm.",
      "linguisticNuance": "The heart of the tablet was Habakkuk 2:4: \"The righteous shall live by his faith\"—trusting Yahweh even while society is reduced to rubble.",
      "crowdReaction": "Habakkuk trembled to his bones, yet resolved: \"Though the fig tree should not blossom... yet I will rejoice in the Lord\" (Hab 3:17-18)."
    },
    "distortionAm": {
      "claim": "ዘመናዊ አነቃቂዎችና የብልጽግና አስተማሪዎች «የምትፈልጉትን የመኪና፣ የቤትና የገንዘብ ምስል በቦርድ (Vision Board) ላይ ለጥፉ፤ ያኔ ይፈጸምላችኋል» በማለት ጥቅሱን ይጠቀማሉ።",
      "damage": "መጽሐፍ ቅዱስን ወደ ኒው ኤጅ ምስላዊ አስማት (visual manifestation) ይለውጣል፤ የመስቀሉን የእምነት ጽናት ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Motivational speakers urge clients: \"Create a Vision Board and write down your dream mansion and luxury car so the universe can deliver it!\"",
      "damage": "It trivializes an oracle of terrifying national judgment into a visual consumer shopping list, erasing the biblical call to live by faith amidst catastrophe."
    },
    "truthAm": {
      "contextSummary": "ዕንባቆም 2 ዓለም በሙሉ በሚናወጥበት ጊዜ እውነተኛ አማኝ በእግዚአብሔር ጽድቅና ቃል ላይ ተደግፎ በእምነት መኖር እንዳለበት የሚያስተምር መሠረታዊ የወንጌል ጽሑፍ ነው።",
      "surroundingVerses": "ሐዋርያው ጳውሎስ ይህንን ጥቅስ በሮሜ 1:17 እና በገላትያ 3:11 ላይ በመጥቀስ ሰው የሚጸድቀው በክርስቶስ በማመን ብቻ መሆኑን አስረድቷል።",
      "timelessPrinciple": "ክርስቲያን በስሜት ወይም በምቾት ሳይሆን በክርስቶስ በማመን ይኖራል፤ በዙሪያችን ያለው ሁሉ ቢፈርስም እግዚአብሔር የታመነ ነው።"
    },
    "truthEn": {
      "contextSummary": "Habakkuk 2:4 is the foundational Old Testament cornerstone of New Testament justification: \"The righteous shall live by faith.\"",
      "surroundingVerses": "Paul cites this in Romans 1:17 and Galatians 3:11 to prove that salvation is by faith alone in Christ, not by human striving.",
      "timelessPrinciple": "Faith is steadfast fidelity to God when circumstances are dire, trusting His sovereign promises even in the darkest valley."
    },
    "crossReferences": [
      {
        "ref": "ሮሜ 1:17",
        "noteAm": "«ጻድቅ በእምነት ይኖራል ተብሎ እንደ ተጻፈ የእግዚአብሔር ጽድቅ ከእምነት ወደ እምነት በእርሱ ይገለጣልና»",
        "noteEn": "“As it is written, ‘The righteous shall live by faith.’”"
      },
      {
        "ref": "ገላትያ 3:11",
        "noteAm": "«ጻድቅ በእምነት ይኖራል ተብሎአልና ማንም በእግዚአብሔር ፊት በሕግ እንዳይጸድቅ ግልጥ ነው»",
        "noteEn": "“Now it is evident that no one is justified before God by the law, for ‘The righteous shall live by faith.’”"
      },
      {
        "ref": "ዕብራውያን 10:37-38",
        "noteAm": "«ሊመጣ ያለው ገና ጥቂት ጊዜ ነው አይዘገይምም፤ ጻድቄ ግን በእምነት ይኖራል»",
        "noteEn": "“For yet a little while, and the coming one will come and will not delay; but my righteous one shall live by faith.”"
      }
    ]
  },
  {
    "id": "capsule-b36",
    "bookNr": 36,
    "chapter": 1,
    "verseStart": 12,
    "verseEnd": 12,
    "verseRefAm": "ትንቢተ ሶፎንያስ 1:12",
    "verseRefEn": "Zephaniah 1:12",
    "verseTextAm": "በዚያም ዘመን ኢየሩሳሌምን በመብራት እመረምራለሁ፤ በአተላቸውም ላይ የሚቀመጡትን፥ በልባቸውም። እግዚአብሔር መልካምን አያደርግም፥ ክፉም አያደርግም የሚሉትን ሰዎች እቀጣለሁ።",
    "verseTextEn": "And it shall come to pass at that time, that I will search Jerusalem with candles, and punish the men that are settled on their lees: that say in their heart, The Lord will not do good, neither will he do evil.",
    "titleAm": "እግዚአብሔር መልካም አያደርግም ክፉም አያደርግም — የዘመኑ ግዴለሽነት ወይስ ታላቁ የጌታ ቀን?",
    "titleEn": "The Lord Will Not Do Good, Nor Ill — Practical Deism vs The Day of the Lord",
    "taglineAm": "እግዚአብሔር በሰው ጉዳይ ውስጥ ጣልቃ አይገባም ብለው በደለቡት ሰዎች ላይ የተሰጠ መለኮታዊ ፍርድ",
    "taglineEn": "The ancient practical deism of complacent elites who thought God was passive, shattered by the Day of the Lord",
    "eraAm": "የኢዮስያስ ዘመን መጀመሪያና የይሁዳ ጣዖት አምልኮ",
    "eraEn": "Reign of Josiah & The Great Day of the Lord",
    "locationAm": "በኢየሩሳሌም ጎዳናዎች",
    "locationEn": "Streets of Jerusalem",
    "yearApprox": "630 ዓ.ዓ.",
    "keyIcon": "🕯️",
    "sceneAm": {
      "setting": "ኢዮስያስ ተሐድሶ ከማድረጉ በፊት በኢየሩሳሌም ውስጥ የበዓል አምልኮ፣ የከዋክብት ሰጋጆችና የሞሎክ አምልኮ ተስፋፍቶ በነበረበት ዘመን።",
      "dailyLife": "ነጋዴዎችና መኳንንት በአረማዊ ልብስ አጊጠው፣ ጉቦ እየበሉ፣ «እግዚአብሔር ምንም አያደርግም፤ ዝም ብላችሁ ኑሩ» እያሉ በኃጢአት ሰክረው ይኖሩ ነበር።",
      "socialTension": "እግዚአብሔር «ኢየሩሳሌምን በመብራት እመረምራለሁ፤ በጠለቀ አተላቸው ላይ የተዘረጉትን ሰዎች እቀጣለሁ» በማለት ፍርዱን አወጀ።"
    },
    "sceneEn": {
      "setting": "Prior to Josiah’s revival, Jerusalem was choked with Baal altars, celestial star-worship, and child sacrifices to Molech.",
      "dailyLife": "Merchants and royalty flaunted foreign pagan garments, cheating in the markets and muttering that God was an absentee deity who neither blesses nor judges.",
      "socialTension": "Yahweh declared: \"I will search Jerusalem with lamps, and I will punish the men who are complacent, settled like dregs on their wine.\""
    },
    "metaphorAm": {
      "origin": "«በአተላቸው ላይ የረጋጉ» — ወይን ሳይነቃነቅ ለረጅም ጊዜ ሲቀመጥ አተላው እንደሚረጋ ሁሉ፣ እነዚህም ሰዎች በመደላደልና በኃጢአት ደንድነዋል።",
      "linguisticNuance": "«እግዚአብሔር መልካም አያደርግም ክፉም አያደርግም» — ይኸውም ዘመናዊው ዲኢዝም (Deism) ማለትም «አምላክ ፈጥሮ ትቶናል እንጂ በምድር ጣልቃ አይገባም» የሚል ግድየለሽነት ነው።",
      "crowdReaction": "ሶፎንያስ «ታላቁ የእግዚአብሔር ቀን ቀርቧል፤ ፈጥኖም ይደርሳል» በማለት ምድርን ሁሉ የሚያናውጠውን ፍርድ አስጠነቀቀ።"
    },
    "metaphorEn": {
      "origin": "“Settling on dregs” depicts wine left undisturbed until the bottom sediments thicken, representing hardened spiritual complacency.",
      "linguisticNuance": "“The Lord will not do good, nor will he do ill” was practical atheism: treating God as completely irrelevant to everyday moral life.",
      "crowdReaction": "Zephaniah shattered their apathy, proclaiming the terrifying blast of the ram’s horn against fortified battlements."
    },
    "distortionAm": {
      "claim": "ዛሬ ብዙዎች ምንም እንኳን በአፋቸው «አማኝ ነኝ» ቢሉም በሕይወታቸው ግን «እግዚአብሔር እኔ በምሰራው ነገር ውስጥ ጣልቃ አይገባም፤ ምንም አያደርግም» በማለት በስድነት ይኖራሉ።",
      "damage": "መንፈሳዊ እንቅልፍና ግድየለሽነትን ያመጣል፤ የፍርድንና የንስሐን አስፈላጊነት ይሸፍናል።"
    },
    "distortionEn": {
      "claim": "Modern culture professes nominal belief while living in practical deism, assuming God is an indifferent cosmic grandfather who never judges sin.",
      "damage": "It breeds spiritual paralysis, desensitizes consciences, and blinds people to the suddenness of eternal judgment."
    },
    "truthAm": {
      "contextSummary": "ሶፎንያስ 1 እግዚአብሔር ሁሉን የሚያይና የሰውን የተሰወረ ኃጢአት ሁሉ በመብራት ፈትሾ በጽድቅ የሚፈርድ ንቁ አምላክ መሆኑን ያስተምራል።",
      "surroundingVerses": "በምዕራፍ 2:3 ላይ «በምድር ያላችሁ የዋሆች ሆይ፥ ሁላችሁ እግዚአብሔርን ፈልጉ፤ ምናልባት በእግዚአብሔር ቁጣ ቀን ትሰወሩ ይሆናል» በማለት መፍትሔውን ይሰጣል።",
      "timelessPrinciple": "እግዚአብሔር ዝም ቢልም ግድየለሽ አይደለም፤ እያንዳንዱ ሰው ለሰራው ስራ ሁሉ በእርሱ ፊት መልስ ይሰጣል።"
    },
    "truthEn": {
      "contextSummary": "Zephaniah 1 warns that God actively inspects every hidden corner of the human heart, executing righteous judgment upon all sin.",
      "surroundingVerses": "Zephaniah 2:3 offers the only shelter: \"Seek the Lord, all you humble of the land... seek righteousness, seek humility; perhaps you may be hidden on the day of the anger of the Lord.\"",
      "timelessPrinciple": "God’s patience is not apathy; Christ will return in glory to judge the living and the dead."
    },
    "crossReferences": [
      {
        "ref": "2 ጴጥሮስ 3:3-4",
        "noteAm": "«በመጨረሻው ዘመን እንደ ራሳቸው ምኞት የሚመላለሱ ዘባቾች በመዘበት እንዲህ እያሉ ይመጣሉ፦ የመምጣቱ የተስፋ ቃል ወዴት አለ?»",
        "noteEn": "“Scoffers will come in the last days... saying, ‘Where is the promise of his coming? For ever since the fathers fell asleep, all things continue as they were.’”"
      },
      {
        "ref": "ገላትያ 6:7",
        "noteAm": "«አትሳቱ፤ እግዚአብሔር አይዘበትበትም፤ ሰው የሚዘራውን ሁሉ ያንኑ ደግሞ ያጭዳልና»",
        "noteEn": "“Do not be deceived: God is not mocked, for whatever one sows, that will he also reap.”"
      },
      {
        "ref": "ዕብራውያን 9:27",
        "noteAm": "«ለሰዎች አንድ ጊዜ መሞት ከእርሱ በኋላም ፍርድ እንደ ተመደበባቸው»",
        "noteEn": "“And just as it is appointed for man to die once, and after that comes judgment.”"
      }
    ]
  },
  {
    "id": "capsule-b37",
    "bookNr": 37,
    "chapter": 1,
    "verseStart": 9,
    "verseEnd": 9,
    "verseRefAm": "ትንቢተ ኃጌ 1:9",
    "verseRefEn": "Haggai 1:9",
    "verseTextAm": "እናንተ ብዙ ነገርን ተስፋ አደረጋችሁ፥ እነሆም፥ ጥቂት ሆነ፤ ወደ ቤትም ባገባችሁት ጊዜ እፍ አልሁበት። ይህ ስለ ምንድር ነው? ይላል የሠራዊት ጌታ እግዚአብሔር። እናንተ ሁሉ ወደ እየቤታችሁ እየሮጣችሁ የእኔ ቤት ፈርሶ ስለ ተቀመጠ ነው።",
    "verseTextEn": "Ye looked for much, and, lo, it came to little; and when ye brought it home, I did blow upon it. Why? saith the Lord of hosts. Because of mine house that is waste, and ye run every man unto his own house.",
    "titleAm": "የእኔ ቤት ፈርሶ ሳለ — የገንዘብ ማሰባሰቢያ ማስፈራሪያ ወይስ የእግዚአብሔር ቅድሚያ ጥሪ?",
    "titleEn": "Because of My House That Lies in Ruins — Aggressive Church Fundraising vs God-First Priorities",
    "taglineAm": "ሐጌ ሕዝቡን የእግዚአብሔርን ክብር እንዲያስቀድሙ የገሰጸበት ቃል ዛሬ የቤተክርስቲያን ህንጻ ግንባታ ገንዘብ ማስገደጃ ሲደረግ",
    "taglineEn": "Haggai’s prophetic summons to honor God before personal luxury weaponized into modern fundraising blackmail",
    "eraAm": "ከምርኮ መልስ የመቅደሱ ግንባታ መቆም ዘመን",
    "eraEn": "Post-Exilic Temple Neglect",
    "locationAm": "በፈረሰው የኢየሩሳሌም መቅደስ አጠገብ",
    "locationEn": "Ruins of the Temple Altar",
    "yearApprox": "520 ዓ.ዓ.",
    "keyIcon": "🪵",
    "sceneAm": {
      "setting": "አይሁድ ከባቢሎን ከተመለሱ 16 ዓመታት ቢያልፉም፣ የመቅደሱን ግንባታ በጠላቶች ተቃውሞ ምክንያት አቁመው የገዛ ቤቶቻቸውን በማሳመር ተጠምደው በነበረበት ወቅት።",
      "dailyLife": "ሕዝቡ ያማሩ የተሸለሙ የእንጨት ቤቶችን ሰርተዋል፤ ሆኖም ዘርተው ጥቂት አጨዱ፣ በልተው አልጠገቡም፣ ያገኙትንም ደመወዝ በተበሳ መያዣ ውስጥ እንዳስቀመጠ ሰው ከሰሩ።",
      "socialTension": "ሕዝቡ «የእግዚአብሔር ቤት የሚሠራበት ጊዜ ገና አልደረሰም» እያሉ ሰበብ ይፈጥሩ ነበር።"
    },
    "sceneEn": {
      "setting": "Sixteen years after returning from Babylon, the Jewish remnant abandoned Temple reconstruction due to opposition, focusing on private wealth.",
      "dailyLife": "People built paneled cedar homes while economic disaster struck: crops failed, clothes did not keep them warm, and wages leaked through bags with holes.",
      "socialTension": "The exiles rationalized their worldly materialism: \"The time has not yet come to rebuild the house of the Lord\" (Hag 1:2)."
    },
    "metaphorAm": {
      "origin": "«የእኔ ቤት ፈርሶ ሳለ እናንተ በተሸለሙ ቤቶቻችሁ ትኖራላችሁን?» — ጥያቄው ስለ ሕንፃ ግዝፈት ሳይሆን የእግዚአብሔር ክብርና አምልኮ በሕይወታቸው ቸል መባሉ ነበር።",
      "linguisticNuance": "«መንገዳችሁን በልባችሁ አስቡ» (ቁ. 5) — እግዚአብሔርን ሁለተኛ ካደረጋችሁ በረከታችሁ በሙሉ እንደ ጉም እንደሚበን አስጠነቀቀ።",
      "crowdReaction": "ዘሩባቤልና ኢያሱ ከሕዝቡ ጋር የእግዚአብሔርን ቃል ፈሩ፤ ተነስተውም የመቅደሱን ግንባታ ቀጠሉ።"
    },
    "metaphorEn": {
      "origin": "“Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?”—the core issue was spiritual priorities.",
      "linguisticNuance": "“Consider your ways!” (Hag 1:5)—Yahweh explained that their financial inflation and agricultural drought were divine chastisements.",
      "crowdReaction": "Zerubbabel and Joshua rallied the whole remnant, and within twenty-four days they resumed construction on the Lord’s house."
    },
    "distortionAm": {
      "claim": "ፓስተሮችና የገንዘብ ሰብሳቢዎች ይህን ጥቅስ ወስደው «ለቤተክርስቲያን አዳራሽ ግንባታ ገንዘብ ካልሰጣችሁ ደመወዛችሁ በተበሳ ኪስ ይገባል፤ ትረገማላችሁ» በማለት ምእመናንን ያስፈራራሉ።",
      "damage": "ሰዎችን በፍርሃት ገንዘብ እንዲሰጡ ያስገድዳል፤ የመጽሐፉን ክርስቶሳዊ የቅድሚያ መንፈስ ወደ ቁሳዊ ሕንፃ አምልኮ ይለውጠዋል።"
    },
    "distortionEn": {
      "claim": "Pastors quote Haggai 1:9 as an extortion club during building campaigns: \"If you don’t pledge to our megachurch auditorium, your bank account will be cursed with holes!\"",
      "damage": "It coerces giving through religious intimidation and guilt, confusing physical brick-and-mortar buildings with the true spiritual Temple."
    },
    "truthAm": {
      "contextSummary": "የሐጌ መጽሐፍ የእግዚአብሔርን መንግሥትና ጽድቅ በሕይወታችን ውስጥ የመጀመሪያው ቅድሚያ እንድናደርግ የሚያስተምር ነው።",
      "surroundingVerses": "በምዕራፍ 2:7-9 ላይ እግዚአብሔር «የዚህ የኋለኛው ቤት ክብር ከፊተኛው ይበልጣል» በማለት በመሲሑ የሚመጣውን ታላቅ ክብር ተነበየ።",
      "timelessPrinciple": "ዛሬ የእግዚአብሔር ቤተ መቅደስ የሲሚንቶ ሕንፃ ሳይሆን በክርስቶስ የተገነባችው ቤተክርስቲያን ናት፤ ቅድሚያችንም የእርሱን መንግሥት መፈለግ ነው።"
    },
    "truthEn": {
      "contextSummary": "Haggai exposes the foolishness of prioritizing selfish luxury over the honor of God, culminating in the messianic promise of Haggai 2:9.",
      "surroundingVerses": "Haggai 2:7-9 looks beyond stones: \"The latter glory of this house shall be greater than the former, says the Lord of hosts. And in this place I will give peace.\"",
      "timelessPrinciple": "In the New Covenant, the Temple is the living Body of Christ; believers are called to seek first God’s kingdom with glad, generous hearts."
    },
    "crossReferences": [
      {
        "ref": "ማቴዎስ 6:33",
        "noteAm": "«ነገር ግን አስቀድማችሁ የእግዚአብሔርን መንግሥት ጽድቁንም ፈልጉ፥ ይህም ሁሉ ይጨመርላችኋል»",
        "noteEn": "“Seek first the kingdom of God and his righteousness, and all these things will be added to you.”"
      },
      {
        "ref": "2 ቆሮንቶስ 9:7",
        "noteAm": "«እግዚአብሔር በደስታ የሚሰጠውን ይወዳልና እያንዳንዱ በልቡ እንዳሰበ ይስጥ፥ በኀዘን ወይም በግድ አይደለም»",
        "noteEn": "“Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.”"
      },
      {
        "ref": "1 ቆሮንቶስ 3:16",
        "noteAm": "«የእግዚአብሔር ቤተ መቅደስ እንደ ሆናችሁ የእግዚአብሔርም መንፈስ እንዲኖርባችሁ አታውቁምን?»",
        "noteEn": "“Do you not know that you are God’s temple and that God’s Spirit dwells in you?”"
      }
    ]
  },
  {
    "id": "capsule-b38",
    "bookNr": 38,
    "chapter": 4,
    "verseStart": 6,
    "verseEnd": 6,
    "verseRefAm": "ትንቢተ ዘካርያስ 4:6",
    "verseRefEn": "Zechariah 4:6",
    "verseTextAm": "መልሶም። ለዘሩባቤል የተባለው የእግዚአብሔር ቃል ይህ ነው። በመንፈሴ እንጂ በኃይልና በብርታት አይደለም፥ ይላል የሠራዊት ጌታ እግዚአብሔር።",
    "verseTextEn": "Then he answered and spake unto me, saying, This is the word of the Lord unto Zerubbabel, saying, Not by might, nor by power, but by my spirit, saith the Lord of hosts.",
    "titleAm": "በመንፈሴ እንጂ በኃይልና በብርታት አይደለም — የሰነፎች ድካም ወይስ የመለኮታዊ ጸጋ ድል?",
    "titleEn": "Not by Might Nor by Power, But by My Spirit — Passivity Excuse vs Sovereign Grace Over Rubble",
    "taglineAm": "ዘሩባቤል የፈራረሰውን ተራራ በመንፈስ ቅዱስ ኃይል እንዲሰራ የተሰጠው ብርታት ዛሬ ለስንፍና ማመካኛ ሲደረግ",
    "taglineEn": "God’s encouragement to Zerubbabel facing political mountain of rubble twisted into passive, do-nothing anti-intellectualism",
    "eraAm": "የመቅደሱ ዳግመኛ ግንባታና የዘሩባቤል ተግዳሮት",
    "eraEn": "Post-Exilic Visions & Zerubbabel’s Mountain",
    "locationAm": "በኢየሩሳሌም ፍርስራሽ መካከል",
    "locationEn": "Rubble of Jerusalem",
    "yearApprox": "519 ዓ.ዓ.",
    "keyIcon": "🕯️",
    "sceneAm": {
      "setting": "ዘሩባቤል የተባለው የይሁዳ ገዥ ጥቂት ገንዘብና ደካማ ሠራተኞች ይዞ በፊቱ የቆመውን ታላቅ የተቃውሞ ተራራና የፈራረሰውን መቅደስ እያየ በተጨነቀበት ወቅት።",
      "dailyLife": "የፋርስ ባለሥልጣናት ግንባታው እንዲቆም ደብዳቤ ጽፈው ነበር፤ በዙሪያው የነበሩት ጠላቶችም በጦርነት ያስፈራሩ ነበር።",
      "socialTension": "ዘካርያስ የወርቅ መቅረዝንና ሁለቱን የወይራ ዛፎች በራዕይ አየ፤ እግዚአብሔርም ድሉ በሰው ጦር ሳይሆን በመንፈሱ እንደሚሆን አረጋገጠለት።"
    },
    "sceneEn": {
      "setting": "Governor Zerubbabel faced crippling financial poverty, small manpower, and fierce Persian political opposition threatening the Temple work.",
      "dailyLife": "Neighboring Samaritans bribed imperial counselors and threatened military force to paralyze the reconstruction.",
      "socialTension": "Zechariah saw a vision of a solid gold lampstand constantly supplied with oil by two living olive trees—symbolizing divine empowerment."
    },
    "metaphorAm": {
      "origin": "«በኃይል አይደለም» (በወታደራዊ ሠራዊት አይደለም)፥ «በብርታትም አይደለም» (በሰው ሀብትና ጉልበት አይደለም)፤ የእግዚአብሔር ስራ የሚፈጸመው በመንፈስ ቅዱስ ጸጋ ብቻ ነው።",
      "linguisticNuance": "«ታላቅ ተራራ ሆይ፥ አንተ ምንድር ነህ? በዘሩባቤል ፊት ሜዳ ትሆናለህ፤ እርሱም፦ ሞገስ፥ ሞገስ ይሁንለት እያለ የማዕዘኑን ራስ ድንጋይ ያወጣል» (ቁ. 7)።",
      "crowdReaction": "ሕዝቡ ተበረታታ፤ የመቅደሱም መሠረት በታላቅ የደስታ ጩኸት ተፈጸመ።"
    },
    "metaphorEn": {
      "origin": "“Not by might” (military army), “nor by power” (human financial/physical muscle)—the kingdom of God advances by the sovereign Holy Spirit.",
      "linguisticNuance": "“Who are you, O great mountain? Before Zerubbabel you shall become a plain! And he shall bring forward the top stone amid shouts of ‘Grace, grace to it!’” (Zech 4:7).",
      "crowdReaction": "The remnant cast aside their discouragement, beholding the final capstone put into place with tears of joy."
    },
    "distortionAm": {
      "claim": "አንዳንዶች ይህን ጥቅስ ጥናት፣ እቅድ፣ ትጋትና ኃላፊነትን ለመጣል «በመንፈስ ነው እንጂ በሰው ጥረት አይደለም፤ ስለዚህ አትማሩ፣ አትስሩ፣ አታቅዱ» በማለት ለስንፍና ይጠቀሙበታል።",
      "damage": "ሰነፍና ዝግጅት የሌለው ክርስትናን ያበረታታል፤ እግዚአብሔር የሰጠንን አእምሮና ትጋት ያቃልላል።"
    },
    "distortionEn": {
      "claim": "Anti-intellectual and hyper-spiritual teachers use this to despise planning, education, theological training, and hard labor: \"Don’t study, just wait for the Spirit!\"",
      "damage": "It baptizes laziness, produces incompetent leadership, and ignores that Zerubbabel had to pick up real stones and build."
    },
    "truthAm": {
      "contextSummary": "ዘካርያስ 4 እግዚአብሔር ታማኝ አገልጋዮቹን በሰው አቅም የማይቻለውን ተራራ በመንፈስ ቅዱስ ኃይል እንዲወጡ እንደሚያበረታታ የሚያሳይ ነው።",
      "surroundingVerses": "በቁጥር 10 ላይ «የትንሹን ነገር ቀን የናቀ ማን ነው?» በማለት ትናንሽ የሚመስሉ ጅማሮዎችን በመንፈስ ቅዱስ መታመን እንዳለብን ያስተምራል።",
      "timelessPrinciple": "የእግዚአብሔርን ስራ በትጋት እንሰራለን፤ ነገር ግን ውጤቱንና ድሉን የምንጠብቀው ከገዛ ችሎታችን ሳይሆን ከመንፈስ ቅዱስ ኃይል ብቻ ነው።"
    },
    "truthEn": {
      "contextSummary": "Zechariah 4 teaches complete reliance upon the supernatural power of the Holy Spirit while engaging in concrete, persistent obedience.",
      "surroundingVerses": "Verse 10 rebukes cynical unbelief: \"For whoever has despised the day of small things shall rejoice, and shall see the plumb line in the hand of Zerubbabel.\"",
      "timelessPrinciple": "Believers work with all their might, yet boast only in the Lord, knowing spiritual victory is won by the Spirit of God alone."
    },
    "crossReferences": [
      {
        "ref": "1 ቆሮንቶስ 2:4-5",
        "noteAm": "«እምነታችሁ በእግዚአብሔር ኃይል እንጂ በሰው ጥበብ እንዳይሆን፥ ቃሌም ስብከቴም መንፈስንና ኃይልን በመግለጥ ነበረ እንጂ በሚያባብል የጥበብ ቃል አልነበረም»",
        "noteEn": "“My speech and my message were not in plausible words of wisdom, but in demonstration of the Spirit and of power.”"
      },
      {
        "ref": "ቆላስይስ 1:29",
        "noteAm": "«ለዚህም ነገር ደግሞ፥ በእኔ በኃይል እንደሚሠራ እንደ አሠራሩ እየተጋደልሁ፥ እደክማለሁ»",
        "noteEn": "“For this I toil, struggling with all his energy that he powerfully works within me.”"
      },
      {
        "ref": "2 ቆሮንቶስ 10:4",
        "noteAm": "«የጦር ዕቃችን ሥጋዊ አይደለምና፥ ምሽግን ለማፍረስ ግን በእግዚአብሔር ፊት ብርቱ ነው»",
        "noteEn": "“For the weapons of our warfare are not of the flesh but have divine power to destroy strongholds.”"
      }
    ]
  },
  {
    "id": "capsule-b39",
    "bookNr": 39,
    "chapter": 3,
    "verseStart": 10,
    "verseEnd": 10,
    "verseRefAm": "ትንቢተ ሚልክያ 3:10",
    "verseRefEn": "Malachi 3:10",
    "verseTextAm": "በቤቴ ውስጥ መብል እንዲሆን አሥራቱን ሁሉ ወደ ጎተራ አግቡ፤ የሰማይንም መስኮት ባልከፍትላችሁ፥ በረከትንም አትረፍርፌ ባላፈስስላችሁ በዚህ ፈትኑኝ፥ ይላል የሠራዊት ጌታ እግዚአብሔር።",
    "verseTextEn": "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.",
    "titleAm": "አስራቱን ሁሉ ወደ ጎተራ አግቡ — የካህናት ዘረፋ ወይስ የዘመናችን አስራት ማስገደጃ?",
    "titleEn": "Bring the Whole Tithe into the Storehouse — Corrupt Priests vs Modern Tithing Extortion",
    "taglineAm": "ካህናት ሌዋውያንን አስርበው መጋዘኑን ሲያዶሉ የተሰጠው ተግሣጽ ዛሬ ምእመናንን በእርግማን ለማስፈራሪያ ሲውል",
    "taglineEn": "A rebuke of corrupt priests starving Levites in an agrarian theocracy weaponized into modern financial blackmail",
    "eraAm": "የፋርስ ዘመን ማብቂያና የብሉይ ኪዳን መዘጋጃ",
    "eraEn": "Late Persian Era & Close of OT Canon",
    "locationAm": "በኢየሩሳሌም ሁለተኛው ቤተ መቅደስ",
    "locationEn": "Second Temple in Jerusalem",
    "yearApprox": "430 ዓ.ዓ.",
    "keyIcon": "🌾",
    "sceneAm": {
      "setting": "በኢየሩሳሌም መቅደስ የነበሩት ካህናት የታመሙና የተሰበሩ እንስሳትን እየሰዉ፣ ለእግዚአብሔር ክብር የሌላቸው ሆነው ሌዋውያንን በረሃብ ጥለዋቸው በነበረበት ወቅት።",
      "dailyLife": "በእስራኤል አስራት የሚከፈለው ከገንዘብ ሳይሆን ከእህል፣ ከወይን፣ ከዘይትና ከከብት ነበር፤ ይህም በመቅደሱ ጎተራ (Storehouse) ተከማችቶ ለሌዋውያን፣ ለመበለቶች፣ ለድሆችና ለእንግዶች መመገቢያ ይውል ነበር።",
      "socialTension": "ካህናቱና መሪዎቹ አስራቱን ለራሳቸው እየወሰዱ ጎተራው ባዶ ስለነበር ሌዋውያን መቅደሱን ትተው ወደ እርሻቸው ሸሽተው ነበር (ነህ 13:10)።"
    },
    "sceneEn": {
      "setting": "Corrupt Second Temple priests offered blind and lame animal sacrifices, showing contempt for Yahweh’s altar.",
      "dailyLife": "Biblical tithes were agricultural produce (grain, wine, oil, livestock) stored in Temple warehouse chambers to feed landless Levites, orphans, and widows.",
      "socialTension": "Temple leaders hoarded the grain chambers, starving the Levites who were forced to abandon ministry to survive as manual field laborers (Neh 13:10)."
    },
    "metaphorAm": {
      "origin": "«በቤቴ ውስጥ ምግብ እንዲሆን» — ጎተራው ምግብ የያዘ የግብርና መጋዘን እንጂ የገንዘብ ባንክ አልነበረም፤ ዓላማውም በቤተ መቅደስ የሚያገለግሉት ሌዋውያን እንዳይራቡ ነበር።",
      "linguisticNuance": "«በእኔ ዘንድ ሌብነት አድርጋችኋል» — የተወገዙት በዋናነት ሕዝቡን አሳስተው መባውን የሰረቁት ካህናቱና አለቆቹ ነበሩ (ሚል 1:6፣ 2:1)።",
      "crowdReaction": "ነህምያ ወደ ኢየሩሳሌም ተመልሶ የጦቢያን ዕቃ ከመቅደሱ ክፍል አውጥቶ በመጣል ሌዋውያንን ወደ ስፍራቸው መለሰ።"
    },
    "metaphorEn": {
      "origin": "“That there may be food in my house”—the storehouse was an agrarian granary feeding the Levites, not a commercial money vault.",
      "linguisticNuance": "“You are robbing me”—the lawsuit specifically targeted the corrupt priestly hierarchy (Mal 1:6; 2:1) who withheld portions from the poor.",
      "crowdReaction": "Nehemiah threw Tobiah’s furniture out of the Temple storehouses, restoring the tithe distribution system to the Levites."
    },
    "distortionAm": {
      "claim": "ዘመናዊ ሰባኪዎች «10% የደመወዝ አስራት ካልከፈላችሁ በገንዘባችሁና በጤናችሁ ላይ መርገም ይመጣል፤ ከከፈላችሁ ግን የሰማይ መስኮት ተከፍቶ ሀብታም ትሆናላችሁ» በማለት ሰዎችን ያስፈራራሉ።",
      "damage": "ደሃዎችን ይበዘብዛል፤ ክርስቶስ በመስቀል ላይ የሻረውን የሕግ መርገም መልሶ በማምጣት አማኞችን በፍርሃት ቀንበር ያስራል።"
    },
    "distortionEn": {
      "claim": "Preachers claim failure to give 10% of gross salary places families under a divine demonic curse, while paying guarantees luxury and health.",
      "damage": "It extorts the poor, resurrects Old Covenant legalistic curses that Christ abolished at the Cross, and corrupts joyful New Testament generosity."
    },
    "truthAm": {
      "contextSummary": "ሚልክያስ 3 በብሉይ ኪዳን የግብርና ስርዓት ውስጥ ካህናትና እስራኤላውያን ለእግዚአብሔር አምልኮና ለሌዋውያን የተገባውን ምግብ በታማኝነት እንዲያቀርቡ የተሰጠ ተግሣጽ ነው።",
      "surroundingVerses": "በሐዲስ ኪዳን ክርስቶስ ከሕግ እርግማን ዋጅቶናል (ገላትያ 3:13)፤ አዲስ ኪዳናዊ መስጠት ደግሞ በደስታ፣ በልግስናና በፍቅር እንጂ በግዴታና በፍርሃት አይደለም (2 ቆሮ 9:7)።",
      "timelessPrinciple": "እግዚአብሔር ለስራውና ለተቸገሩት በታማኝነትና በደስታ እንድንሰጥ ይፈልጋል፤ አማኝ ግን በጸጋ እንጂ በእርግማን ፍርሃት ስር አይኖርም።"
    },
    "truthEn": {
      "contextSummary": "Malachi 3 addresses agricultural tithes supporting the Levitical priesthood under the Old Covenant theocracy.",
      "surroundingVerses": "In the New Covenant, Christ redeemed us from the curse of the law (Gal 3:13); giving is driven by joyful grace, not legal compulsion (2 Cor 9:7).",
      "timelessPrinciple": "Believers are called to radical, cheerful generosity to advance the Gospel and care for the needy, free from guilt, manipulation, or curse threats."
    },
    "crossReferences": [
      {
        "ref": "2 ቆሮንቶስ 9:7",
        "noteAm": "«እግዚአብሔር በደስታ የሚሰጠውን ይወዳልና እያንዳንዱ በልቡ እንዳሰበ ይስጥ፥ በኀዘን ወይም በግድ አይደለም»",
        "noteEn": "“Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.”"
      },
      {
        "ref": "ገላትያ 3:13",
        "noteAm": "«ክርስቶስ ስለ እኛ እርግማን ሆኖ ከሕግ እርግማን ዋጀን»",
        "noteEn": "“Christ redeemed us from the curse of the law by becoming a curse for us.”"
      },
      {
        "ref": "1 ጢሞቴዎስ 5:17-18",
        "noteAm": "«በመልካም የሚያስተዳድሩ ሽማግሌዎች... የክብር እጥፍ ይገባቸዋል፤ ለሚያበራው በሬ አፉን አትሰር ተብሎአልና»",
        "noteEn": "“Let the elders who rule well be considered worthy of double honor... ‘You shall not muzzle an ox when it treads out the grain.’”"
      }
    ]
  },
  {
    "id": "capsule-b40-gnat",
    "bookNr": 40,
    "chapter": 23,
    "verseStart": 24,
    "verseEnd": 24,
    "verseRefAm": "የማቴዎስ ወንጌል 23:24",
    "verseRefEn": "Matthew 23:24",
    "verseTextAm": "እናንተ ዕውሮች መሪዎች፥ ትንኝን የምታጠሩ ግመልንም የምትውጡ።",
    "verseTextEn": "Ye blind guides, which strain at a gnat, and swallow a camel.",
    "titleAm": "ቅንጭብጫቢቷን የምታጣሩ ግመሉንም የምትውጡ",
    "titleEn": "Straining Out a Gnat and Swallowing a Camel",
    "taglineAm": "የፈሪሳውያን ጥቃቅን የሕግ አስመሳይነትና የአረማይክ ቃል ጨዋታ",
    "taglineEn": "Pharisaic legalistic absurdity and Jesus’ sharp Aramaic pun",
    "eraAm": "የ1ኛው መቶ ክፍለ ዘመን ሮማዊ ይሁዳ",
    "eraEn": "1st Century Roman Judea",
    "locationAm": "በኢየሩሳሌም ቤተ መቅደስ አደባባይ",
    "locationEn": "Temple Courts, Jerusalem",
    "yearApprox": "30 ዓ.ም.",
    "keyIcon": "🐪",
    "sceneAm": {
      "setting": "በኢየሩሳሌም ቤተ መቅደስ ውስጥ ከፋሲካ ጥቂት ቀናት በፊት ኢየሱስ በጻፎችና በፈሪሳውያን ላይ ሰባቱን የ«ወዮላችሁ» ፍርዶች ባወጀበት ወቅት።",
      "dailyLife": "በ1ኛው መቶ ክፍለ ዘመን አይሁድ ወይናቸውን በማጣሪያ ጨርቅ ያጣሩ ነበር፤ ምክንያቱም በዘሌዋውያን 11:23 መሠረት በራሪ ነፍሳት (ቅንጭብጫቢት) ርኩስ ናቸው።",
      "socialTension": "ፈሪሳውያንና ጻፎች የአዝሙድና የሰናፍጭ አስራት እየከፈሉ ድሆችንና መበለቶችን ግን ይበዘብዙ ነበር።"
    },
    "sceneEn": {
      "setting": "The Temple courts during Passion Week; Jesus delivers His climactic \"Seven Woes\" against religious hypocrisy.",
      "dailyLife": "Wine was filtered through fine cloth strainers to avoid ingesting dead insects, forbidden as unclean under Leviticus 11:23.",
      "socialTension": "Religious authorities paraded microscopic legal precision over spice seeds while bankrupting vulnerable widows."
    },
    "metaphorAm": {
      "origin": "ቅንጭብጫቢት (Gnat) በኦሪት ከተከለከሉት ጥቃቅኑ ርኩስ ነፍሳት አንዷ ስትሆን፣ ግመል (Camel) ደግሞ በምድሪቱ ካሉት ርኩስ እንስሳት ትልቁ ነበር (ዘሌ 11:4)።",
      "linguisticNuance": "በአረማይክ ቋንቋ «ቅንጭብጫቢት» «ቃልማ» (Qalmā) ስትባል «ግመል» ደግሞ «ጋምላ» (Gamlā) ትባላለች፤ ኢየሱስ አድማጩን የሚማርክ ጥበበኛ ምጸታዊ ቃል-ጨዋታ ተጠቅሟል።",
      "crowdReaction": "አድማጩ ሕዝብ የፈሪሳውያንን አስመሳይነት ቁልጭ አድርጎ የሚያሳየውን ይህን የአረማይክ ቃል-ጨዋታ በሰሙ ጊዜ እጅግ ተደንቀዋል።"
    },
    "metaphorEn": {
      "origin": "The gnat represented the tiniest forbidden unclean creature (Lev 11:23), whereas the camel was the largest unclean mammal (Lev 11:4).",
      "linguisticNuance": "In Aramaic, gnat is \"Qalmā\" and camel is \"Gamlā\"—a memorable poetic wordplay: straining out a QalmA to swallow a Gamla.",
      "crowdReaction": "The crowd immediately grasped the biting irony exposing the Pharisees’ grotesque moral inversion."
    },
    "distortionAm": {
      "claim": "ብዙዎች ጥቅሱን ወስደው «መጽሐፍ ቅዱስ ጥቃቅን ትእዛዛትንና ስነ-ስርዓቶችን አይጠይቅም፤ ዋናው ልብ ብቻ ነው» በማለት ኃጢአትን ለማጽደቅ ይጠቀሙበታል።",
      "damage": "ሕዝቡ የእግዚአብሔርን ቃል ንቆ የራሱን ምቾት እንዲከተልና ጽድቅንና ፍርድን እንደቀላል ነገር እንዲቆጥር ያደርጋል።"
    },
    "distortionEn": {
      "claim": "Often twisted to argue that detailed obedience and moral discipline do not matter (\"God only looks at the heart, relax about the details\").",
      "damage": "Fosters antinomianism, leading people to dismiss biblical commandments under the guise of \"not being legalistic.\""
    },
    "truthAm": {
      "contextSummary": "ኢየሱስ በአስራትና በስርዓት ላይ አልተቃወመም (ቁ. 23 ላይ «ይህን ልታደርጉ ያንም ሳትተዉ ይገባችሁ ነበር» ብሏል)፤ ዋናው ተግሣጽ ፍርድን፣ ምሕረትንና ታማኝነትን እንዳይተዉ ነው።",
      "surroundingVerses": "በቁጥር 23 ላይ ዋና ዋናዎቹ የሕግ ነገሮች ፍርድ (ፍትሕ)፣ ምሕረትና እምነት መሆናቸውን አረጋግጧል።",
      "timelessPrinciple": "ውጫዊ የአምልኮ ትርኢት ከውስጣዊ ፍትሕና እውነተኛ ምሕረት ጋር ካልተዋሃደ በእግዚአብሔር ፊት ከንቱና አስመሳይነት ነው።"
    },
    "truthEn": {
      "contextSummary": "Jesus did not abolish minor commands (\"these you ought to have done without neglecting the others\"), but rebuked elevating ritual minutiae over justice.",
      "surroundingVerses": "Verse 23 identifies the weightier matters of the Torah: justice (mishpat), mercy (chesed), and faithfulness (emunah).",
      "timelessPrinciple": "Authentic faith honors God in the details while anchoring the heart in sacrificial justice, mercy, and truth."
    },
    "crossReferences": [
      {
        "ref": "ሚክያስ 6:8",
        "noteAm": "«ፍትሕን ታደርግ ዘንድ፥ ምሕረትንም ትወድድ ዘንድ፥ ከአምላክህም ጋር በትሕትና ትሄድ ዘንድ አይደለምን?»",
        "noteEn": "“What does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?”"
      },
      {
        "ref": "ሆሴዕ 6:6",
        "noteAm": "«ከመሥዋዕት ይልቅ ምሕረትን እወዳለሁና»",
        "noteEn": "“For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings.”"
      },
      {
        "ref": "ማቴዎስ 9:13",
        "noteAm": "«ምሕረትን እወዳለሁ መሥዋዕትንም አይደለም ያለው ምን እንደ ሆነ ተማሩ»",
        "noteEn": "“Go and learn what this means: ‘I desire mercy, and not sacrifice.’”"
      }
    ]
  },
  {
    "id": "capsule-b40-judge",
    "bookNr": 40,
    "chapter": 7,
    "verseStart": 1,
    "verseEnd": 2,
    "verseRefAm": "የማቴዎስ ወንጌል 7:1-2",
    "verseRefEn": "Matthew 7:1-2",
    "verseTextAm": "እንዳይፈረድባችሁ አትፍረዱ፤ በምትፈርዱበት ፍርድ ይፈረድባችኋልና፥ በምትሰፍሩበትም መስፈሪያ ይሰፈርባችኋል።",
    "verseTextEn": "Judge not, that ye be not judged. For with what judgment ye judge, ye shall be judged: and with what measure ye mete, it shall be measured to you again.",
    "titleAm": "እንዳይፈረድባችሁ አትፍረዱ — የግብዝነት ፍርድ ወይስ ማመዛዘን መከልከል?",
    "titleEn": "Judge Not That You Be Not Judged — Hypocrisy vs Moral Discernment",
    "taglineAm": "ኢየሱስ ግብዞችን የገሰጸበት ቃል ዛሬ የሐሰት ትምህርትን እንዳይጋለጥ ማፈኛ ሲደረግ",
    "taglineEn": "Jesus’ condemnation of self-righteous fault-finding twisted to forbid moral and theological discernment",
    "eraAm": "የገሊላ ተራራ ስብከት ዘመን",
    "eraEn": "Galilean Ministry & Sermon on the Mount",
    "locationAm": "በገሊላ ተራራ ላይ",
    "locationEn": "Mount of Beatitudes, Galilee",
    "yearApprox": "28 ዓ.ም.",
    "keyIcon": "⚖️",
    "sceneAm": {
      "setting": "በገሊላ ኮረብታ ላይ ኢየሱስ ለተሰበሰበው እጅግ ብዙ ሕዝብ የመንግሥቱን ሕገ-መንግሥት ባስተማረበት ወቅት።",
      "dailyLife": "ፈሪሳውያን ሌላውን ሕዝብ «ይህ ሕጉን የማያውቅ ሕዝብ ርጉም ነው» እያሉ በንቀት ያዩ ነበር።",
      "socialTension": "ራሳቸውን ጻድቅ አድርገው በሌሎች ላይ ፈራጆች የነበሩትን ሰዎች ኢየሱስ «ግብዞች» በማለት አጋለጣቸው።"
    },
    "sceneEn": {
      "setting": "The hillside overlooking the Sea of Galilee; Jesus preaches the manifesto of the Kingdom of God.",
      "dailyLife": "Pharisaic circles viewed ordinary commoners with sneering condescension: \"This crowd that does not know the law is accursed\" (John 7:49).",
      "socialTension": "Hyper-critical religious elites condemned others for trivial speck-faults while harboring massive timber logs of pride."
    },
    "metaphorAm": {
      "origin": "በወንድም ዓይን ያለችውን ጉድፍ ለማውጣት መሞከር በገዛ ዓይን ውስጥ ምሰሶ እያለ አስቂኝና የማይቻል ነገር ነው።",
      "linguisticNuance": "«ክሪኖ» የሚለው የግሪክ ቃል የማውገዝ፣ የመኮነንና ራስን በዳኝነት ዙፋን ላይ የማስቀመጥ ፍርድን ያመለክታል።",
      "crowdReaction": "ሰዎቹ የፈሪሳውያንን አስመሳይ ኩነኔ በሚገባ ስለሚያውቁ በኢየሱስ ምሳሌ እጅግ ተደነቁ።"
    },
    "metaphorEn": {
      "origin": "Performing delicate eye surgery to extract a splinter while a lumber beam protrudes from one’s own eye is ludicrous farce.",
      "linguisticNuance": "The Greek \"krino\" here denotes vindictive, hypocritical condemnation and playing the role of supreme judge.",
      "crowdReaction": "The crowd smiled at the hyperbole, immediately recognizing the self-righteous arrogance of their religious leaders."
    },
    "distortionAm": {
      "claim": "ብዙ ሰዎች «ማንም በእኔ ላይ መፍረድ አይችልም፤ ኃጢአቴን ወይም ስህተቴን አትናገሩ፤ መጽሐፍ ቅዱስ አትፍረዱ ይላል» ይላሉ።",
      "damage": "የሐሰት አስተማሪዎችን እንዳይጋለጡ ያደርጋል፤ የክርስቲያኖችን ማመዛዘን ያጠፋል፤ ንስሐን ይከለክላል።"
    },
    "distortionEn": {
      "claim": "Frequently used as an absolute shield against moral correction: \"Don’t judge me! The Bible says you cannot evaluate my behavior!\"",
      "damage": "Paralyzes church discipline, shields wolves in sheep’s clothing, and silences biblical discernment."
    },
    "truthAm": {
      "contextSummary": "ኢየሱስ ያስጠነቀቀው ስለ ግብዝነት ፍርድ እንጂ ስለ ጻድቅ ማመዛዘን አይደለም።",
      "surroundingVerses": "በዚያው ምዕራፍ በቁጥር 15 ላይ «ከሐሰተኞች ነቢያት ተጠበቁ፤ በፍሬያቸው ታውቋቸዋላችሁ» በማለት እንድንመረምር አዞናል።",
      "timelessPrinciple": "በቅድሚያ የገዛ ራሳችንን ኃጢአት በንስሐ መመልከት አለብን፤ ከዚያ በኋላ ሌሎችን በፍቅርና በቅንነት ለማረም እንችላለን።"
    },
    "truthEn": {
      "contextSummary": "Jesus forbids hypocritical censoriousness, not moral or doctrinal evaluation; verse 5 commands removing the log so you can see clearly to help.",
      "surroundingVerses": "Just verses later (Matt 7:15-16), Jesus commands active judgment: \"Beware of false prophets... you will recognize them by their fruits.\"",
      "timelessPrinciple": "Humble self-examination must precede loving correction; we must evaluate truth and fruit without assuming God’s judgment throne."
    },
    "crossReferences": [
      {
        "ref": "ዮሐንስ 7:24",
        "noteAm": "«የቅን ፍርድ ፍረዱ እንጂ በመልክ አትፍረዱ»",
        "noteEn": "“Do not judge by appearances, but judge with right judgment.”"
      },
      {
        "ref": "1 ቆሮንቶስ 5:12",
        "noteAm": "«በውጭ ባሉ ሰዎች ላይ መፍረድ ምን አግዶኝ? እናንተ በውስጥ ባሉ ሰዎች ላይ አትፈርዱምን?»",
        "noteEn": "“For what have I to do with judging outsiders? Is it not those inside the church whom you are to judge?”"
      },
      {
        "ref": "ገላትያ 6:1",
        "noteAm": "«ሰው በማናቸውም በደል እንኳ ቢገኝ፥ መንፈሳውያን የሆናችሁ እናንተ እንደዚህ ያለውን ሰው በየዋህነት መንፈስ አቅኑት»",
        "noteEn": "“Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness.”"
      }
    ]
  },
  {
    "id": "capsule-b41",
    "bookNr": 41,
    "chapter": 11,
    "verseStart": 24,
    "verseEnd": 24,
    "verseRefAm": "የማርቆስ ወንጌል 11:24",
    "verseRefEn": "Mark 11:24",
    "verseTextAm": "ስለዚህ እላችኋለሁ፥ የጸለያችሁትን የለመናችሁትንም ሁሉ እንዳገኛችሁት እመኑ፥ ይሆንላችሁማል።",
    "verseTextEn": "Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.",
    "titleAm": "የጸለያችሁትን እንዳገኛችሁት እመኑ — የባዶ ቼክ ቀመር ወይስ የእግዚአብሔር ፈቃድ እምነት?",
    "titleEn": "Whatever You Ask in Prayer, Believe — Blank Check Formula vs Praying God’s Will",
    "taglineAm": "ኢየሱስ ተራራን ስለማፍለስ የተናገረው የመለኮታዊ ስልጣን ቃል ዛሬ ለስግብግብነት ጥያቄ ባዶ ቼክ ሲደረግ",
    "taglineEn": "Jesus’ call to mountain-moving faith in God twisted into a magical blank-check guarantee for carnal wishes",
    "eraAm": "የኢየሩሳሌም የመጨረሻ ሳምንትና የደረቀችው በለስ",
    "eraEn": "Passion Week & The Withered Fig Tree",
    "locationAm": "በደብረ ዘይት ተራራ መንገድ",
    "locationEn": "Mount of Olives Pathway",
    "yearApprox": "30 ዓ.ም.",
    "keyIcon": "⛰️",
    "sceneAm": {
      "setting": "ኢየሱስ በመቅደሱ ያሉትን ነጋዴዎች ካባረረና ፍሬ የሌላትን የበለስ ዛፍ ከረገመ በኋላ በለሲቱ ከስሯ ደርቃ በተገኘችበት ወቅት።",
      "dailyLife": "በለሲቱ ፍሬ የሌለባትን የኢየሩሳሌምን መቅደስ የግብዝነት ስርዓት የምታሳይ ነበረች፤ ኢየሱስም የድሮው ስርዓት እንደሚያልፍ አስተማረ።",
      "socialTension": "ደቀ መዛሙርቱ በለሲቱ ደርቃ በማየታቸው ሲደነቁ ኢየሱስ «በእግዚአብሔር እመኑ» በማለት እውነተኛውን የእምነት ምንጭ አመለከተ።"
    },
    "sceneEn": {
      "setting": "Morning after Jesus cleansed the Temple; Peter notices the cursed barren fig tree withered from its very roots.",
      "dailyLife": "The barren fig tree symbolized the fruit-barren Temple cult about to be overthrown by divine judgment.",
      "socialTension": "Jesus harnessed the disciples’ astonishment to redirect their trust away from the doomed Temple establishment to Yahweh Himself."
    },
    "metaphorAm": {
      "origin": "«ይህንን ተራራ ተነቅለህ ወደ ባሕር ተወርወር ቢለው» የሚለው የአይሁድ ረቢዎች የማይቻሉ መሰናክሎችን መለኮታዊ ኃይል እንደሚያስወግዳቸው የሚያሳዩበት ፈሊጥ ነበር።",
      "linguisticNuance": "«የጸለያችሁትን ሁሉ እንዳገኛችሁት እመኑ» — ቅድመ ሁኔታው በቁጥር 22 ላይ ያለው «በእግዚአብሔር እመኑ» (Pistin Theou - የእግዚአብሔር እምነት ይኑራችሁ) ነው።",
      "crowdReaction": "ደቀ መዛሙርቱ ተራራ የሚመስሉ የመቅደስና የሮማ መሰናክሎች በወንጌል ኃይል እንደሚወገዱ ተረዱ።"
    },
    "metaphorEn": {
      "origin": "“Moving mountains” was a common rabbinic idiom for resolving seemingly insurmountable obstacles through divine agency.",
      "linguisticNuance": "The entire promise rests upon the opening command in verse 22: \"Have faith in God\"—faith anchored in God’s holy character and sovereign will.",
      "crowdReaction": "Disciples learned that the approaching storm of imperial persecution and Temple ruin would be conquered through bold prayer."
    },
    "distortionAm": {
      "claim": "የአዎንታዊ አዋጅ ሰባኪዎች «ይህ ጥቅስ እግዚአብሔር የፈረመላችሁ ባዶ ቼክ ነው፤ የፈለጋችሁትን የገንዘብ መጠንና መኪና በጸሎት ካመናችሁ አግኝታችኋል» ይላሉ።",
      "damage": "እግዚአብሔርን የሰው ምኞት አገልጋይ ያደርጋል፤ ያልተመለሱ ጸሎቶችን «እምነት ስለሌለህ ነው» ብሎ ሰዎችን ወደ ተስፋ መቁረጥ ይጥላል።"
    },
    "distortionEn": {
      "claim": "Prosperity preachers market the text as a cosmic blank check: \"Name anything you want, believe you already have it in your driveway, and God must give it!\"",
      "damage": "It reduces prayer to sorcery, treats God as a cosmic vending machine, and devastates saints when selfish prayers go unanswered."
    },
    "truthAm": {
      "contextSummary": "ማርቆስ 11 እምነት በእግዚአብሔር ሉዓላዊነትና ፈቃድ ላይ የሚደገፍ ኃይል እንጂ የራስን ስግብግብነት ማርኪያ እንዳልሆነ ያረጋግጣል።",
      "surroundingVerses": "በቁጥር 25 ላይ ወዲያውኑ «በጸሎት በቆማችሁ ጊዜ በሰማያት ያለው አባታችሁ በደላችሁን ይቅር እንዲላችሁ ቅር የተሰኛችሁበት ካለ ይቅር በሉ» ተብሎ የልብ ቅድስና ታዟል።",
      "timelessPrinciple": "ትክክለኛ እምነት ከእግዚአብሔር ፈቃድ ጋር የሚስማማ ጸሎት ነው (1 ዮሐ 5:14)፤ ጌታ የገባውን ተስፋ በጊዜው ይፈጽማል።"
    },
    "truthEn": {
      "contextSummary": "Mark 11 teaches radical trust in God’s kingdom purposes, immediately wedded to a forgiving heart in verse 25.",
      "surroundingVerses": "Verse 25 establishes a non-negotiable spiritual prerequisite: \"Whenever you stand praying, forgive, if you have anything against anyone.\"",
      "timelessPrinciple": "Biblical prayer is not imposing human will upon God, but conforming human desire to God’s sovereign, revealed will (1 John 5:14)."
    },
    "crossReferences": [
      {
        "ref": "1 ዮሐንስ 5:14",
        "noteAm": "«እንደ ፈቃዱ አንዳች ብንለምን ይሰማናል፤ በእርሱ ዘንድ ያለን ድፍረት ይህ ነው»",
        "noteEn": "“If we ask anything according to his will he hears us.”"
      },
      {
        "ref": "ያዕቆብ 4:3",
        "noteAm": "«ትለምናላችሁ፥ በምኞቶቻችሁም ልታባክኑ በክፉ ትለምናላችሁና አትቀበሉም»",
        "noteEn": "“You ask and do not receive, because you ask wrongly, to spend it on your passions.”"
      },
      {
        "ref": "ማቴዎስ 26:39",
        "noteAm": "«የእኔ ፈቃድ አይሁን የአንተ እንጂ»",
        "noteEn": "“Nevertheless, not as I will, but as you will.”"
      }
    ]
  },
  {
    "id": "capsule-b42",
    "bookNr": 42,
    "chapter": 6,
    "verseStart": 38,
    "verseEnd": 38,
    "verseRefAm": "የሉቃስ ወንጌል 6:38",
    "verseRefEn": "Luke 6:38",
    "verseTextAm": "ስጡ ይሰጣችሁማል፤ በምትሰፍሩበት መስፈሪያ ተመልሶ ይሰፈርላችኋልና፥ የተጨቈነና የተነቀነቀ የተትረፈረፈም መልካም መስፈሪያ በእቅፋችሁ ይሰጣችኋል።",
    "verseTextEn": "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again.",
    "titleAm": "ስጡ ይሰጣችሁማል — የካፒታል ኢንቨስትመንት ወይስ የተትረፈረፈ ምሕረት?",
    "titleEn": "Give and It Will Be Given Unto You — Financial ROI Scheme vs Overflowing Mercy",
    "taglineAm": "ኢየሱስ ስለ ይቅርታና ምሕረት የተናገረው ቃል ዛሬ በሰባኪዎች የገንዘብ ማባዣ ቀመር ተደርጎ ሲሰበክ",
    "taglineEn": "Jesus’ call to radical mercy and non-judgmental generosity hijacked as a high-yield financial return scheme",
    "eraAm": "የገሊላ ሜዳ ስብከት ዘመን",
    "eraEn": "Sermon on the Plain in Galilee",
    "locationAm": "በገሊላ ሜዳማ ስፍራ",
    "locationEn": "A Level Place in Galilee",
    "yearApprox": "28 ዓ.ም.",
    "keyIcon": "🌾",
    "sceneAm": {
      "setting": "ኢየሱስ በሜዳ ላይ ከደቀ መዛሙርቱና ከታመሙት እጅግ ብዙ ሰዎች ጋር በነበረበት ወቅት የፍቅርንና የምሕረትን አኗኗር ሲያስተምር።",
      "dailyLife": "በጥንቱ ገበያ እህል ሲሸጥ ሻጩ መስፈሪያውን ያንቀጠቅጠዋል፣ ይደቀድቀዋል፣ ከዚያም እስኪፈስ ድረስ በገዥው ልብስ ጉያ (Lap) ላይ ይሞላዋል (የተትረፈረፈ ልግስና)።",
      "socialTension": "ሰዎች ቂም በሚይዙበት፣ በሚፋረዱበትና በጠላትነት በሚተያዩበት ዓለም ኢየሱስ «ጠላቶቻችሁን ውደዱ፥ ለሚጠሏችሁም መልካም አድርጉ» በማለት አስደነገጣቸው።"
    },
    "sceneEn": {
      "setting": "Jesus addressing a vast multitude on a level plain, outlining the radical upside-down ethics of the Kingdom.",
      "dailyLife": "Grain merchants in Eastern bazaars demonstrated lavish honesty by shaking, pressing down, and heaping measure into the buyer’s folded robe-lap.",
      "socialTension": "In a society marked by unforgiving social scores, Jesus demanded boundless mercy: \"Be merciful, even as your Father is merciful\" (v. 36)."
    },
    "metaphorAm": {
      "origin": "«የተጨቆነና የተነቀነቀ የተትረፈረፈም መልካም መስፈሪያ» የሚለው እግዚአብሔር ለምሕረተኛ ሰው የሚሰጠውን የመንፈስና የጸጋ ሙላት ያሳያል።",
      "linguisticNuance": "የአንቀጹ ዋና ጭብጥ በቁጥር 37 ላይ «አትፍረዱ፥ አትኮንኑ፥ ይቅር በሉ» የሚለው የምሕረትና የይቅርታ አውድ ነው እንጂ የባንክ ገንዘብ አይደለም።",
      "crowdReaction": "ሰሚዎቹ የእግዚአብሔር አብ ምሕረት ምን ያህል ታላቅ እንደሆነና ምሕረትን መስጠት እንዴት የተባረከ እንደሆነ ተረዱ።"
    },
    "metaphorEn": {
      "origin": "The imagery portrays an honorable grain merchant who refuses to skimp, shaking and packing the basket to maximize the buyer’s portion.",
      "linguisticNuance": "Verse 38 sits squarely inside the paragraph on forgiveness: verse 37 commands: \"Judge not... condemn not... forgive, and you will be forgiven.\"",
      "crowdReaction": "The crowd saw that mercy is reciprocal: those who bestow generous grace upon others will receive God’s overwhelming mercy."
    },
    "distortionAm": {
      "claim": "የብልጽግና ሰባኪዎች «100 ዶላር ከሰጣችሁ እግዚአብሔር ተጭኖ የተነቀነቀ 1000 ዶላር ይሰጣችኋል፤ ስለዚህ ገንዘብ አፍስሱ» በማለት እንደ ሎተሪ ወይም ካዚኖ ኢንቨስትመንት ያቀርቡታል።",
      "damage": "የክርስቲያንን ልግስና ወደ ስግብግብነት ኢንቨስትመንት ይቀይራል፤ ዋናውን የይቅርታና የምሕረት ትእዛዝ ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Televangelists twist the verse into a Ponzi-scheme formula: \"Sow $1,000 into my ministry and God will press down and pour $10,000 back into your bank account!\"",
      "damage": "It converts holy generosity into carnal gambling, hides the context of relational forgiveness, and preys upon desperate poor families."
    },
    "truthAm": {
      "contextSummary": "ሉቃስ 6:35-38 የሚያስተምረው ክርስቲያን እንደ ሰማዩ አባቱ መሐሪ እንዲሆንና ለሌሎች ያለ ስስት ይቅርታን፣ ምሕረትንና ፍቅርን እንዲሰጥ ነው።",
      "surroundingVerses": "በቁጥር 35 ላይ «ምንም ተስፋ ሳታደርጉ አበድሩ፤ ዋጋችሁም ታላቅ ይሆናል፥ የልዑልም ልጆች ትሆናላችሁ» በማለት ያለ ተመላሽ ምኞት መስጠትን ያዛል።",
      "timelessPrinciple": "እውነተኛ ክርስቲያናዊ መስጠት ከልብ የሚወጣ ምሕረትና ፍቅር እንጂ አትርፌ እወስዳለሁ የሚል የንግድ ስሌት አይደለም።"
    },
    "truthEn": {
      "contextSummary": "Luke 6:35-38 establishes the standard of kingdom mercy: lavish, non-calculating grace mirroring the Father’s kindness to the ungrateful.",
      "surroundingVerses": "Verse 35 explicitly forbids calculated investment mindsets: \"Lend, expecting nothing in return, and your reward will be great.\"",
      "timelessPrinciple": "Believers give time, money, and forgiveness because they have received infinite grace from God, not as a transaction to extract more cash."
    },
    "crossReferences": [
      {
        "ref": "2 ቆሮንቶስ 9:6-7",
        "noteAm": "«በበረከት የሚዘራ በበረከት ደግሞ ያጭዳል... እያንዳንዱ በልቡ እንዳሰበ ይስጥ፥ በኀዘን ወይም በግድ አይደለም»",
        "noteEn": "“Whoever sows bountifully will also reap bountifully. Each one must give as he has decided in his heart, not reluctantly or under compulsion.”"
      },
      {
        "ref": "ማቴዎስ 5:7",
        "noteAm": "«የሚምሩ ብፁዓን ናቸው፥ ይማራሉና»",
        "noteEn": "“Blessed are the merciful, for they shall receive mercy.”"
      },
      {
        "ref": "ምሳሌ 19:17",
        "noteAm": "«ለድሀ ቸርነት የሚያደርግ ለእግዚአብሔር ያበድራል፥ በጎነቱንም ይመልስለታል»",
        "noteEn": "“Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.”"
      }
    ]
  },
  {
    "id": "capsule-b43",
    "bookNr": 43,
    "chapter": 10,
    "verseStart": 10,
    "verseEnd": 10,
    "verseRefAm": "የዮሐንስ ወንጌል 10:10",
    "verseRefEn": "John 10:10",
    "verseTextAm": "ሌባው ሊሰርቅና ሊያርድ ሊያጠፋም እንጂ ስለ ሌላ አይመጣም፤ እኔ ሕይወት እንዲሆንላቸው እንዲበዛላቸውም መጣሁ።",
    "verseTextEn": "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.",
    "titleAm": "ሕይወት እንዲሆንላቸው እንዲበዛላቸውም መጣሁ — ቁሳዊ ቅንጦት ወይስ የዘላለም ሕይወት?",
    "titleEn": "Life More Abundantly — Material Luxury vs Eternal Zoe Life in Christ",
    "taglineAm": "መልካሙ እረኛ ስለ በጎቹ ነፍሱን መስጠቱ ዛሬ ለመኪናና ለቪላ ብልጽግና ማስረጃ ሲደረግ",
    "taglineEn": "The Good Shepherd laying down His life for the sheep cheapened into a promise of lavish consumerist wealth",
    "eraAm": "የኢየሩሳሌም የመገናኛ በዓል ዘመን",
    "eraEn": "Feast of Dedication in Jerusalem",
    "locationAm": "በሰሎሞን ደጅ መመላለሻ",
    "locationEn": "Solomon’s Colonnade, Temple",
    "yearApprox": "29 ዓ.ም.",
    "keyIcon": "🐑",
    "sceneAm": {
      "setting": "በኢየሩሳሌም ቤተ መቅደስ በክረምት ወቅት ኢየሱስ በሰሎሞን ደጅ መመላለሻ እያስተማረ ሳለ የሐሰት እረኞችን (ፈሪሳውያንን) ካጋለጠበት ንግግር በኋላ።",
      "dailyLife": "በጥንቱ ይሁዳ ሌቦችና ተኩላዎች የበጎቹን መንጋ ሰብረው ገብተው ያርዱና ያጠፉ ነበር፤ እረኛው ግን በበሩ አጠገብ ተኝቶ ሕይወቱን አደጋ ላይ ጥሎ ይጠብቃቸው ነበር።",
      "socialTension": "የአይሁድ መሪዎች ኢየሱስን «እስከ መቼ ድረስ በጥርጣሬ ታቆየናለህ? አንተ ክርስቶስ እንደ ሆንህ በግልጥ ንገረን» እያሉ ሊወግሩት ድንጋይ አነሱ።"
    },
    "sceneEn": {
      "setting": "Winter in Jerusalem during Hanukkah; Jesus walks in Solomon’s Colonnade, surrounded by hostile religious leaders.",
      "dailyLife": "Shepherds in Judea slept across the single entryway of sheepfolds, literally acting as the living door to absorb wolf attacks.",
      "socialTension": "The corrupt ruling elite devoured the flock for personal status; Jesus unveiled Himself as the True Shepherd who dies for His sheep."
    },
    "metaphorAm": {
      "origin": "«ሌባው» የተባሉት መንጋውን የሚዘርፉት የሐሰት መሪዎች ሲሆኑ፣ «እኔ ሕይወት እንዲሆንላቸው እንዲበዛላቸውም መጣሁ» ያለው ስለ ነፍስ ድነትና ስለ ዘላለም ሕይወት ነው።",
      "linguisticNuance": "በግሪክ ቋንቋ «ዞኤ» (Zoe - መለኮታዊና ዘላለማዊ ሕይወት) እንጂ «ቢዮስ» (Bios - ምድራዊ ሥጋዊ ኑሮ) አልተጠቀመም፤ የተትረፈረፈው ሕይወት ከእግዚአብሔር ጋር ያለው ኅብረት ነው።",
      "crowdReaction": "ደቀ መዛሙርቱ ኢየሱስ ነፍሱን ስለ በጎቹ አሳልፎ የሚሰጥ መልካም እረኛ መሆኑን አወቁ (ቁ. 11)።"
    },
    "metaphorEn": {
      "origin": "The thief represents predatory religious hypocrites; Jesus offers abundant spiritual vitality through union with Himself.",
      "linguisticNuance": "The Greek word used is \"Zoe\" (eternal, uncreated divine life in God), not \"Bios\" (earthly, material biological sustenance).",
      "crowdReaction": "Believers recognized the voice of the Shepherd, discovering that true abundance is salvation and eternal communion with Christ."
    },
    "distortionAm": {
      "claim": "የብልጽግና ሰባኪዎች ጥቅሱን ወስደው «የተረፈረፈ ሕይወት ማለት ውድ መኪና፣ የቅንጦት ቤትና የባንክ አካውንት መሙላት ነው፤ ድሃ መሆን የሰይጣን ስርቆት ነው» ይላሉ።",
      "damage": "የክርስቶስን መስቀል ወደ ዓለማዊ ሸቀጥ ይቀይራል፤ በድህነትና በስደት ውስጥ ያሉ ታማኝ ቅዱሳንን እንደተሰረቁ አድርጎ ያሳዝናል።"
    },
    "distortionEn": {
      "claim": "Prosperity salesmen define \"abundant life\" exclusively in terms of private jets, luxury mansions, and diamond jewelry.",
      "damage": "It carnalizes the Gospel, insults persecuted and impoverished Christians around the globe, and replaces Christ with consumerism."
    },
    "truthAm": {
      "contextSummary": "ዮሐንስ 10 ኢየሱስ ክርስቶስ በጎቹን ከዘላለም ሞትና ከተኩላ ለማዳን ነፍሱን የሚሰጥ መልካም እረኛ መሆኑን የሚያረጋግጥ ነው።",
      "surroundingVerses": "በቁጥር 28 ላይ «እኔም የዘላለምን ሕይወት እሰጣቸዋለሁ፥ ለዘላለምም አይጠፉም፥ ከእጄም ማንም አይነጥቃቸውም» በማለት የተትረፈረፈውን ሕይወት ገልጾታል።",
      "timelessPrinciple": "የተረፈረፈ ሕይወት በክርስቶስ ያለ መንፈሳዊ ሰላም፣ ደስታ፣ የኃጢአት ይቅርታና የዘላለም ሕይወት እንጂ የቁሳቁስ መከመር አይደለም።"
    },
    "truthEn": {
      "contextSummary": "John 10 reveals Jesus as the Good Shepherd who willingly sacrifices His life to rescue His sheep from demonic destruction.",
      "surroundingVerses": "Verse 28 defines this abundance: \"I give them eternal life, and they will never perish, and no one will snatch them out of my hand.\"",
      "timelessPrinciple": "Abundant life is the indestructible joy of knowing Christ, experiencing forgiveness of sins, and possessing eternal fellowship with God."
    },
    "crossReferences": [
      {
        "ref": "ሉቃስ 12:15",
        "noteAm": "«ተጠንቀቁ፥ ከመጎምጀትም ሁሉ ተጠበቁ፤ የሰው ሕይወት በገንዘቡ ብዛት አይደለምና አላቸው»",
        "noteEn": "“Take care, and be on your guard against all covetousness, for one’s life does not consist in the abundance of his possessions.”"
      },
      {
        "ref": "ሮሜ 14:17",
        "noteAm": "«የእግዚአብሔር መንግሥት ጽድቅና ሰላም በመንፈስ ቅዱስም የሆነ ደስታ ናት እንጂ መብልና መጠጥ አይደለችምና»",
        "noteEn": "“For the kingdom of God is not a matter of eating and drinking but of righteousness and peace and joy in the Holy Spirit.”"
      },
      {
        "ref": "1 ዮሐንስ 5:12",
        "noteAm": "«ልጁ ያለው ሕይወት አለው፤ የእግዚአብሔር ልጅ የሌለው ሕይወት የለውም»",
        "noteEn": "“Whoever has the Son has life; whoever does not have the Son of God does not have life.”"
      }
    ]
  },
  {
    "id": "capsule-b44",
    "bookNr": 44,
    "chapter": 2,
    "verseStart": 44,
    "verseEnd": 45,
    "verseRefAm": "የሐዋርያት ሥራ 2:44-45",
    "verseRefEn": "Acts 2:44-45",
    "verseTextAm": "ያላቸውንም ሁሉ አንድነት አደረጉ። መሬታቸውንና ጥሪታቸውንም እየሸጡ፥ ማንኛውም እንደሚፈልግ ለሁሉ ያካፍሉት ነበር። በየቀኑም በአንድ ልብ ሆነው በመቅደስ እየተጉ በቤታቸውም እንጀራ እየቈረሱ፥ በደስታና በጥሩ ልብ ምግባቸውን ይመገቡ ነበር፤",
    "verseTextEn": "And all that believed were together, and had all things common; And sold their possessions and goods, and parted them to all men, as every man had need.",
    "titleAm": "ሁሉን በጋራ አደረጉ — የግዴታ ኮሙኒዝም ወይስ የፈቃደኝነት ቅዱስ ፍቅር?",
    "titleEn": "Had All Things in Common — Forced Marxist Communism vs Spontaneous Holy Love",
    "taglineAm": "የመጀመሪያይቱ ቤተክርስቲያን በረሃብና በችግር ጊዜ ያሳየችው የፍቅር ልግስና ዛሬ ለመንግሥት የኮሙኒዝም ፖለቲካ ሲጣመም",
    "taglineEn": "The early church’s spontaneous, voluntary charity distorted into political justifications for coercive state communism",
    "eraAm": "የኢየሩሳሌም የመጀመሪያይቱ ቤተክርስቲያን ዘመን",
    "eraEn": "Early Jerusalem Pentecostal Church",
    "locationAm": "በኢየሩሳሌም ቤቶች",
    "locationEn": "Homes in Jerusalem",
    "yearApprox": "30 ዓ.ም.",
    "keyIcon": "🤝",
    "sceneAm": {
      "setting": "በበዓለ ኀምሳ መንፈስ ቅዱስ ወርዶ 3,000 ሰዎች ባመኑበት ወቅት፤ ከሩቅ አገር ለመጡትና በኢየሩሳሌም ለቀሩት አዳዲስ አማኞች ምግብና መጠለያ ባስፈለገበት ጊዜ።",
      "dailyLife": "አማኞች በየቤቱ እንጀራ እየቆረሱ፣ ሐዋርያት የሚያስተምሩትን እየሰሙና በመቅደስ በአንድ ልብ ሆነው በታላቅ ደስታ ይመላለሱ ነበር።",
      "socialTension": "ክርስቶስን በማመናቸው ከቤተሰቦቻቸውና ከሥራቸው የተባረሩ በርካታ ደሃ አማኞች በረሃብ እንዳይጠፉ የተደረገ የተቀደሰ የፍቅር መረዳዳት ነበር።"
    },
    "sceneEn": {
      "setting": "Immediately after Pentecost, 3,000 new converts—many foreign pilgrims stranded in Jerusalem without resources—gathered in daily fellowship.",
      "dailyLife": "Believers devoted themselves to apostolic teaching, breaking bread from house to house with glad and sincere hearts.",
      "socialTension": "Jewish converts faced social ostracism and loss of livelihood from synagogue authorities, necessitating emergency community relief."
    },
    "metaphorAm": {
      "origin": "«ሁሉን በጋራ አደረጉ» — ማንም ሰው የግል ንብረቱን እንዲሰጥ በመንግሥት ወይም በሕግ አልተገደደም፤ ሁሉም በፍቅር ተነሳስቶ ለተቸገረ ወንድሙ በፈቃደኝነት አካፈለ።",
      "linguisticNuance": "በሐዋርያት 5:4 ላይ ጴጥሮስ ለአናንያ ሲናገር «ሳትሸጠው የአንተ አልነበረምን? ከሸጥኸውስ በኋላ በሥልጣንህ አልነበረምን?» በማለት የግል ንብረት መብትን አረጋግጧል።",
      "crowdReaction": "ሕዝቡ ሁሉ አከበሯቸው፤ እግዚአብሔርም የሚድኑትን በየዕለቱ ወደ ቤተክርስቲያን ይጨምር ነበር።"
    },
    "metaphorEn": {
      "origin": "“Had all things in common” was not state-enforced redistribution, but radical, spontaneous Christian generosity prompted by the Holy Spirit.",
      "linguisticNuance": "In Acts 5:4, Peter affirms private property rights to Ananias: \"While it remained unsold, did it not remain your own? And after it was sold, was it not at your disposal?\"",
      "crowdReaction": "The surrounding city looked on with awe; the Lord added daily to their number those being saved."
    },
    "distortionAm": {
      "claim": "የፖለቲካ አስተማሪዎች ጥቅሱን ወስደው «መጽሐፍ ቅዱስ የኮሙኒዝም መጽሐፍ ነው፤ መንግሥት የሰዎችን የግል ሀብት በግድ ነጥቆ ለሁሉም እኩል ማከፋፈል አለበት» ይላሉ።",
      "damage": "መንፈስ ቅዱስ የሰራውን የፍቅር ልግስና ወደ መንግሥታዊ የኃይል ጭቆና ይለውጣል፤ የመስጠትን የተቀደሰ ነጻ ፈቃድ ያጠፋል።"
    },
    "distortionEn": {
      "claim": "Marxist and liberation theologians cite Acts 2 to argue that the Bible endorses state socialism and the forced abolition of private property.",
      "damage": "It replaces Spirit-led, voluntary generosity with coercive governmental tyranny, stripping giving of its moral and loving nature."
    },
    "truthAm": {
      "contextSummary": "የሐዋርያት ሥራ 2 የክርስቶስ ፍቅር የለወጣቸው አማኞች በፈቃዳቸው የተቸገሩትን ቅዱሳን ለመርዳት ንብረታቸውን እንዴት እንደተጋሩ የሚያሳይ ውብ ምሳሌ ነው።",
      "surroundingVerses": "መስጠቱ የተደረገው ለቤተክርስቲያን እንጂ ለመንግሥት አልነበረም፤ ማንም ንብረቱን እንዲሸጥ አልተገደደም።",
      "timelessPrinciple": "ክርስቲያናዊ ልግስና ከልብ ፍቅር የሚመነጭ የፈቃደኝነት በረከት እንጂ በኃይልና በሕግ የሚጫን ግዴታ አይደለም።"
    },
    "truthEn": {
      "contextSummary": "Acts 2 demonstrates the power of the Gospel to dissolve selfishness, inspiring believers to care voluntarily for vulnerable brothers and sisters.",
      "surroundingVerses": "Giving was local, church-based, and completely voluntary; no imperial magistrate or state bureaucracy was involved.",
      "timelessPrinciple": "Kingdom charity is born of a regenerated heart overflowing with Christian love, not external legal coercion."
    },
    "crossReferences": [
      {
        "ref": "ሐዋርያት 5:3-4",
        "noteAm": "«ጴጥሮስም፦ አናንያ ሆይ... ሳትሸጠው የአንተ አልነበረምን? ከሸጥኸውስ በኋላ በሥልጣንህ አልነበረምን? ሰውን ሳይሆን እግዚአብሔርን ዋሸህ አለው»",
        "noteEn": "“While it remained unsold, did it not remain your own? You have not lied to man but to God.”"
      },
      {
        "ref": "2 ቆሮንቶስ 9:7",
        "noteAm": "«እግዚአብሔር በደስታ የሚሰጠውን ይወዳልና እያንዳንዱ በልቡ እንዳሰበ ይስጥ፥ በኀዘን ወይም በግድ አይደለም»",
        "noteEn": "“Each one must give as he has decided in his heart, not reluctantly or under compulsion.”"
      },
      {
        "ref": "1 ጢሞቴዎስ 6:17-18",
        "noteAm": "«ባለጠጎች በጎ ነገርን እንዲያደርጉ፥ በበጎም ሥራ ባለጠጎች እንዲሆኑ፥ ሊያካፍሉም የተዘጋጁ እንዲሆኑ እዘዛቸው»",
        "noteEn": "“As for the rich... they are to do good, to be rich in good works, to be generous and ready to share.”"
      }
    ]
  },
  {
    "id": "capsule-b45",
    "bookNr": 45,
    "chapter": 8,
    "verseStart": 28,
    "verseEnd": 28,
    "verseRefAm": "ወደ ሮሜ ሰዎች 8:28",
    "verseRefEn": "Romans 8:28",
    "verseTextAm": "እግዚአብሔርንም ለሚወዱት እንደ አሳቡም ለተጠሩት ነገር ሁሉ ለበጎ እንዲደረግ እናውቃለን።",
    "verseTextEn": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    "titleAm": "ሁሉ ነገር ለበጎ እንዲደረግ እናውቃለን — ዓለማዊ ምቾት ወይስ የክርስቶስን መልክ መምሰል?",
    "titleEn": "All Things Work Together for Good — Worldly Happy Endings vs Conformed to Christ",
    "taglineAm": "ጳውሎስ በሮም ለሚሰደዱ ቅዱሳን የሰጠው የትንሣኤ መጽናናት ዛሬ ለጊዜያዊ ምድራዊ ስኬት ሲተረጎም",
    "taglineEn": "Paul’s glorious anchor amidst martyrdom and suffering reduced to a shallow promise of worldly good outcomes",
    "eraAm": "የሮም ኢምፓየር የስደትና የመከራ ዘመን",
    "eraEn": "Roman Imperial Suffering & The Golden Chain",
    "locationAm": "ከቆሮንቶስ ወደ ሮም የተላከ ደብዳቤ",
    "locationEn": "Letter from Corinth to Rome",
    "yearApprox": "57 ዓ.ም.",
    "keyIcon": "🔗",
    "sceneAm": {
      "setting": "ሐዋርያው ጳውሎስ በቄሳር ዋና ከተማ በሮም ውስጥ ለሚገኙትና በቅርቡ ለሚመጣው የኔሮ አስፈሪ ስደት ለሚዘጋጁት አማኞች የደኅንነትን ጥልቅ ምስጢር ሲያብራራላቸው።",
      "dailyLife": "ክርስቲያኖች በሮም አደባባዮች ለጣዖት አንሰግድም በማለታቸው ይገረፉ፣ ለነብሮች ይጣሉና በእንጨት ላይ ተሰቅለው በእሳት ይቃጠሉ ነበር።",
      "socialTension": "ጳውሎስ «የዚህ ዘመን ሥቃይ ለእኛ ሊገለጥ ካለው ክብር ጋር ቢመዛዘን ምንም እንዳልሆነ እቆጥራለሁ» በማለት መከራቸውን በመለኮታዊ ሚዛን አየው።"
    },
    "sceneEn": {
      "setting": "Paul writing to Christians living in the shadows of the imperial palace in Rome, soon to face Nero’s brutal, bloodthirsty persecution.",
      "dailyLife": "Believers risked confiscation of property, public flogging, being torn apart by beasts, and burned as living human torches.",
      "socialTension": "Paul grounds their suffering in cosmic purpose: \"The sufferings of this present time are not worth comparing with the glory to be revealed to us\" (v. 18)."
    },
    "metaphorAm": {
      "origin": "«ሁሉ ነገር ለበጎ እንዲደረግ» የተባለው ክርስቲያን የሚያጋጥመው መከራ፣ ስደት፣ ረሃብ ወይም ሞት እንኳ እግዚአብሔር ለዘላለማዊ ክብራቸው እንዲሰራ ያደርገዋል ማለት ነው።",
      "linguisticNuance": "«በጎ» (አጋቶን) ምንድን ነው? ቀጣዩ ቁጥር (ቁ. 29) በግልጽ ይመልሳል፦ «የልጁን መልክ እንዲመስሉ አስቀድሞ ወስኖአልና» — በጎ የተባለው የክርስቶስን መልክ መምሰል ነው!።",
      "crowdReaction": "አማኞች በመከራ፣ በሰይፍና በሞት ፊት እንኳ «በሚወደን በአንዱ ከአሸናፊዎች እንበልጣለን» በማለት በደስታ ዘመሩ (ቁ. 37)።"
    },
    "metaphorEn": {
      "origin": "“All things work together for good” encompasses tribulations, distress, persecution, famine, nakedness, danger, and sword (v. 35).",
      "linguisticNuance": "What is the \"good\"? Verse 29 explicitly defines it: \"to be conformed to the image of his Son\"—Christlikeness, not earthly comfort!",
      "crowdReaction": "The Roman church was fortified to face the Colosseum lions, shouting: \"In all these things we are more than conquerors through him who loved us!\""
    },
    "distortionAm": {
      "claim": "ብዙዎች ጥቅሱን ወስደው «ስራ ብታጣ፣ ወይም ቢዝነስህ ቢከስር አትጨነቅ፤ እግዚአብሔር የተሻለ ደመወዝ ይሰጥሃል፤ ሁሉም ለጥሩ ነው» በማለት ለቁሳዊ ስኬት ዋስትና ያደርጉታል።",
      "damage": "ክርስቲያን በመከራ ውስጥ ሲያልፍ እውነተኛውን የቅድስናና የትዕግሥት ትምህርት እንዳያገኝ ያደርጋል፤ የቁጥር 29ን ክርስቶሳዊ ቅርጽ ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Treated as a bumper-sticker cliché promising that every earthly tragedy will resolve in financial advancement or romance (\"Don’t worry, it all works out!\").",
      "damage": "It trivializes profound grief, ignores martyrdom, and decouples God’s sovereignty from His ultimate goal: conforming our character to Christ."
    },
    "truthAm": {
      "contextSummary": "ሮሜ 8 እግዚአብሔር በመከራችን ሁሉ ውስጥ የሚሰራው ታላቅ አላማ እኛን ልጁን ኢየሱስ ክርስቶስን እንድንመስልና ወደ ዘላለም ክብር ሊያደርሰን መሆኑን ያረጋግጣል።",
      "surroundingVerses": "በቁጥር 35-39 ላይ «መከራ ወይም ጭንቀት ወይም ስደት ወይም ራብ... ከክርስቶስ ፍቅር ማን ይለየናል?» በማለት ድሉ በመከራ ውስጥ ማለፍ መሆኑን ይመሰክራል።",
      "timelessPrinciple": "እግዚአብሔር ለሚወዱት የሚሰራው በጎ ነገር እኛን ይበልጥ ወደ ቅድስናና ወደ ክርስቶስ አምሳል መለወጥ ነው፤ እርሱ ታማኝ ነው።"
    },
    "truthEn": {
      "contextSummary": "Romans 8:28-30 is the unbreakable \"Golden Chain\" of redemption: foreknown, predestined, called, justified, and glorified.",
      "surroundingVerses": "Verses 35-39 prove that \"all things\" includes slaughter: \"For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.\"",
      "timelessPrinciple": "God orchestrates both joy and painful trials for the supreme good of His saints: to sanctify them into the image of Jesus Christ for eternal glory."
    },
    "crossReferences": [
      {
        "ref": "ሮሜ 8:29",
        "noteAm": "«ልጁ በብዙ ወንድሞች መካከል በኩር ይሆን ዘንድ፥ አስቀድሞ ያወቃቸውን የልጁን መልክ እንዲመስሉ አስቀድሞ ደግሞ ወስኖአልና»",
        "noteEn": "“For those whom he foreknew he also predestined to be conformed to the image of his Son.”"
      },
      {
        "ref": "2 ቆሮንቶስ 4:17",
        "noteAm": "«የማይታየውን እንጂ የሚታየውን የማንመለከት ከሆንን፥ ቀላል የሆነ የጊዜው መከራችን የክብርን የዘላለም ብዛት ከሁሉ መጠን ይልቅ ያዘጋጅልናልና»",
        "noteEn": "“For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison.”"
      },
      {
        "ref": "ያዕቆብ 1:2-3",
        "noteAm": "«የእምነታችሁ መፈተን ትዕግሥትን እንዲያደርግ አውቃችሁ፥ በተለያየ ፈተና ውስጥ ስትወድቁ እንደ ሙሉ ደስታ ቍጠሩት»",
        "noteEn": "“Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness.”"
      }
    ]
  },
  {
    "id": "capsule-b46",
    "bookNr": 46,
    "chapter": 3,
    "verseStart": 16,
    "verseEnd": 17,
    "verseRefAm": "1ኛ ወደ ቆሮንቶስ ሰዎች 3:16-17",
    "verseRefEn": "1 Corinthians 3:16-17",
    "verseTextAm": "የእግዚአብሔር ቤተ መቅደስ እንደ ሆናችሁ የእግዚአብሔርም መንፈስ እንዲኖርባችሁ አታውቁምን? ማንም የእግዚአብሔርን ቤተ መቅደስ ቢያፈርስ እግዚአብሔር እርሱን ያፈርሰዋል፤ የእግዚአብሔር ቤተ መቅደስ ቅዱስ ነውና፥ ያውም እናንተ ናችሁ።",
    "verseTextEn": "Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you? If any man defile the temple of God, him shall God destroy; for the temple of God is holy, which temple ye are.",
    "titleAm": "የእግዚአብሔር ቤተ መቅደስ ናችሁ — የጂም ስፖርት መመሪያ ወይስ የቤተክርስቲያን አንድነት?",
    "titleEn": "You Are God’s Temple — Gym Diet Shaming vs Corporate Church Unity",
    "taglineAm": "ጳውሎስ መከፋፈልንና ኑፋቄን ያወገዘበት የቤተክርስቲያን አንድነት ቃል ዛሬ ለስፖርትና ለምግብ ፖሊስ ሲገለበጥ",
    "taglineEn": "Paul’s warning against destroying church unity by partisan factions co-opted into personal fitness and diet guilt",
    "eraAm": "የቆሮንቶስ ከተማ መከፋፈልና ብልሹነት ዘመን",
    "eraEn": "Corinthian Factionalism & Moral Turmoil",
    "locationAm": "በቆሮንቶስ ቤተክርስቲያን",
    "locationEn": "Church at Corinth",
    "yearApprox": "55 ዓ.ም.",
    "keyIcon": "🏛️",
    "sceneAm": {
      "setting": "ቆሮንቶስ በንግድ፣ በዝሙትና በፈላስፎች የምትታወቅ የወደብ ከተማ ስትሆን በቤተክርስቲያኒቱ ውስጥ ሰዎች «እኔ የጳውሎስ ነኝ፥ እኔ የአጵሎስ ነኝ፥ እኔም የኬፋ ነኝ» እያሉ ተከፋፍለው ነበር።",
      "dailyLife": "በጥንቱ ዓለም አረማዊ ቤተ መቅደሶች የጣዖት አምልኮና የዝሙት ማዕከላት ነበሩ፤ ጳውሎስ ግን ቤተክርስቲያን የመንፈስ ቅዱስ ማደሪያ እንደ ሆነች አስጠነቀቀ።",
      "socialTension": "መሪዎች የራሳቸውን ቡድን በመፍጠር የእግዚአብሔርን ቤተክርስቲያን ሲያፈርሱ ጳውሎስ «ማንም የእግዚአብሔርን ቤተ መቅደስ ቢያፈርስ እግዚአብሔር እርሱን ያፈርሰዋል» በማለት ፍርድ አወጀ።"
    },
    "sceneEn": {
      "setting": "Corinth was a hedonistic commercial metropolis; the church was fractured into competitive personality cults of Paul, Apollos, and Cephas.",
      "dailyLife": "Pagan temples dominated the city skyline, hosting cultic prostitution and idolatrous banquets.",
      "socialTension": "Carnal factions were tearing the fellowship apart; Paul confronted them with the terrifying sanctity of the corporate body of Christ."
    },
    "metaphorAm": {
      "origin": "«የእግዚአብሔር ቤተ መቅደስ ናችሁ» የሚለው በግሪክ ብዙ ቁጥር (Plural - \"You all collectively\") ሲሆን መላዋን የአማኞች ማኅበር (ቤተክርስቲያንን) እንጂ የግለሰብን ሥጋ አያመለክትም።",
      "linguisticNuance": "በቁጥር 17 ላይ «የእግዚአብሔር ቤተ መቅደስ ቅዱስ ነውና፥ ያውም እናንተ ናችሁ» — ቤተክርስቲያንን በቡድንተኝነትና በሐሰት ትምህርት የሚያፈርሱ ሰዎችን ፍርድ ያመለክታል።",
      "crowdReaction": "የቆሮንቶስ አማኞች የቡድንተኝነት ክርክራቸውን አቁመው በክርስቶስ አንድ መሆናቸውን እንዲያስቡ ተገሰጹ።"
    },
    "metaphorEn": {
      "origin": "“You are God’s temple” uses plural Greek pronouns (\"Hymeis este\")—referring to the corporate congregation as a dwelling place of the Spirit, not private anatomy.",
      "linguisticNuance": "Verse 17 warns: \"If anyone destroys God’s temple, God will destroy him\"—aimed directly at sectarian troublemakers splitting the flock.",
      "crowdReaction": "Partisan factions were silenced, forced to recognize that dividing the local church amounts to sacrilegious desecration of God’s holy temple."
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ ወስደው «ሰውነትህ ቤተ መቅደስ ስለሆነ ስኳር አትብላ፣ ካፌይን አትጠጣ፣ በየቀኑ ጂም ስፖርት ስራ፤ አለበለዚያ እግዚአብሔር ያጠፋሃል» በማለት ለግል የአካል ብቃት ይጠቀሙበታል።",
      "damage": "የመጽሐፉን ከባድ የቤተክርስቲያን አንድነትና የቅድስና መልእክት ያጠፋል፤ ጥቅሱን ወደ ውጫዊ የጤና ሕግጋት ያወርደዋል።"
    },
    "distortionEn": {
      "claim": "Constantly cited to shame Christians over diet, caffeine, gym routines, and carbs: \"Your body is a temple, so don’t eat that junk food or God will destroy you!\"",
      "damage": "It trivializes an apostolic warning against dividing the body of Christ into petty food-policing, obscuring the grave danger of church schism."
    },
    "truthAm": {
      "contextSummary": "1 ቆሮንቶስ 3:16-17 የሚያወራው ስለ ቤተክርስቲያን አንድነትና ማኅበራዊ ቅድስና እንጂ ስለ ግለሰብ የአካል ብቃት እንቅስቃሴ አይደለም።",
      "surroundingVerses": "ጳውሎስ በምዕራፍ 6:19-20 ላይ ስለ ግለሰብ ሥጋዊ ቅድስና የተናገረው ከሴሰኝነትና ከዝሙት እንድንሸሽ ለማሳሰብ እንጂ ለስፖርት አይደለም።",
      "timelessPrinciple": "የእግዚአብሔር ቤተክርስቲያን ቅድስት ናት፤ በቡድንተኝነትና በሐሰት ትምህርት ቤተክርስቲያንን የሚከፋፍል በእግዚአብሔር ፍርድ ስር ይወድቃል።"
    },
    "truthEn": {
      "contextSummary": "1 Corinthians 3:16-17 establishes the corporate holiness of the local church; destroying the temple means fracturing the church through worldly divisions.",
      "surroundingVerses": "While 1 Corinthians 6:19 later addresses individual sexual purity (\"flee sexual immorality\"), chapter 3 focuses entirely on corporate congregational unity.",
      "timelessPrinciple": "The Church is the blood-bought temple of the Living God; sowers of discord, schism, and false doctrine invite divine destruction."
    },
    "crossReferences": [
      {
        "ref": "1 ቆሮንቶስ 1:10",
        "noteAm": "«ሁላችሁ አንድ ንግግር እንድትናገሩ በአንድ ልብና በአንድ አሳብም ተባብራችሁ እንድትቆሙ እንጂ መለያየት በመካከላችሁ እንዳይሆን... እለምናችኋለሁ»",
        "noteEn": "“I appeal to you, brothers... that all of you agree, and that there be no divisions among you, but that you be united in the same mind.”"
      },
      {
        "ref": "ኤፌሶን 2:21-22",
        "noteAm": "«በእርሱም ሕንጻ ሁሉ እየተጋጠመ በጌታ ቅዱስ ቤተ መቅደስ እንዲሆን ያድጋል፤ በእርሱም እናንተ ደግሞ መንፈስ ቅዱስ የሚኖርበት የእግዚአብሔር ማደሪያ ለመሆን አብራችሁ ትሠራላችሁ»",
        "noteEn": "“In whom the whole structure, being joined together, grows into a holy temple in the Lord.”"
      },
      {
        "ref": "ምሳሌ 6:16-19",
        "noteAm": "«እግዚአብሔር የሚጠላቸው ስድስት ነገሮች ናቸው... በወንድማማቾች መካከል ጥልን የሚዘራ»",
        "noteEn": "“There are six things that the Lord hates... one who sows discord among brothers.”"
      }
    ]
  },
  {
    "id": "capsule-b47",
    "bookNr": 47,
    "chapter": 8,
    "verseStart": 9,
    "verseEnd": 9,
    "verseRefAm": "2ኛ ወደ ቆሮንቶስ ሰዎች 8:9",
    "verseRefEn": "2 Corinthians 8:9",
    "verseTextAm": "የጌታችንን የኢየሱስ ክርስቶስን ቸር ስጦታ አውቃችኋልና፤ ሀብታም ሲሆን፥ እናንተ በእርሱ ድህነት ባለ ጠጎች ትሆኑ ዘንድ ስለ እናንተ ድሀ ሆነ።",
    "verseTextEn": "For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich.",
    "titleAm": "በእርሱ ድህነት እናንተ ባለጠጎች ትሆኑ ዘንድ ድሀ ሆነ — የዶላር ሚሊየነርነት ወይስ የመዳን ጸጋ?",
    "titleEn": "Through His Poverty You Might Become Rich — Material Millionaire Status vs Riches of Grace",
    "taglineAm": "የክርስቶስ የሥጋ መገለጥና የመስቀል ትህትና ዛሬ በብልጽግና ሰባኪዎች የባንክ አካውንት ማደለቢያ ሲደረግ",
    "taglineEn": "The supreme kenosis and condescension of the Incarnate Christ co-opted to promise cash, gold, and designer clothes",
    "eraAm": "የኢየሩሳሌም ድሆች ቅዱሳን የእርዳታ ማሰባሰቢያ ዘመን",
    "eraEn": "Relief Collection for Impoverished Jerusalem Saints",
    "locationAm": "ከመቄዶንያ ወደ ቆሮንቶስ የተላከ መልእክት",
    "locationEn": "Written from Macedonia to Corinth",
    "yearApprox": "56 ዓ.ም.",
    "keyIcon": "💰",
    "sceneAm": {
      "setting": "በኢየሩሳሌም በረሃብና በስደት ለተቸገሩት ድሃ አማኞች ጳውሎስ ከአሕዛብ አብያተ ክርስቲያናት የእርዳታ ገንዘብ በማሰባሰብ ላይ በነበረበት ወቅት።",
      "dailyLife": "የመቄዶንያ አማኞች በከባድ ድህነትና መከራ ውስጥ ሆነው ሳለ በታላቅ ደስታና ልግስና ለኢየሩሳሌም ቅዱሳን ገንዘባቸውን አዋጡ (ቁ. 1-2)።",
      "socialTension": "ባለጠጎቹ የቆሮንቶስ አማኞች የገቡትን የልግስና ቃል ዘንግተውት ስለነበር ጳውሎስ የክርስቶስን መስዋዕትነት በማሳየት አነቃቃቸው።"
    },
    "sceneEn": {
      "setting": "Paul organizing a major famine-relief fund from Gentile churches for the starving, persecuted Jewish saints in Jerusalem.",
      "dailyLife": "Macedonian believers in extreme poverty begged with much entreaty for the privilege of sharing in this relief ministry (vv. 1-4).",
      "socialTension": "The wealthy Corinthians had promised generous financial relief a year prior but slacked off in consumer apathy."
    },
    "metaphorAm": {
      "origin": "ክርስቶስ ባለጠጋ ሳለ ድሀ ሆነ የተባለው የሰማዩን ክብርና ሉዓላዊ አምላክነቱን ትቶ የባሪያን መልክ ይዞ በግርግም መወለዱንና በመስቀል መሞቱን ያመለክታል (ፊል 2:6-8)።",
      "linguisticNuance": "«እናንተ በእርሱ ድህነት ባለጠጎች ትሆኑ ዘንድ» — የተሰጠን ሀብት የዘላለም ሕይወት፣ የጽድቅ ክብርና የእግዚአብሔር ልጅነት እንጂ የብርና የወርቅ ከረጢት አይደለም።",
      "crowdReaction": "የቆሮንቶስ አማኞች አፍረው በፈቃደኝነት የኢየሩሳሌምን ድሆች ለመርዳት ገንዘባቸውን ሰበሰቡ።"
    },
    "metaphorEn": {
      "origin": "Christ’s \"richness\" was His pre-incarnate eternal glory as God; His \"poverty\" was the Incarnation, born in a feeding trough and executed on a cross.",
      "linguisticNuance": "Believers becoming \"rich\" signifies justification, adoption, spiritual heirship with Christ, and eternal life—not sports cars and mansions.",
      "crowdReaction": "Corinthians were deeply convicted by Christ’s humility, moving them to fulfill their relief pledges for the starving saints."
    },
    "distortionAm": {
      "claim": "የብልጽግና ሰባኪዎች «ኢየሱስ ድሃ የሆነው እኛ ሚሊየነር፣ ባለ ቪላና የቅንጦት ባለቤት እንድንሆን ነው፤ ድሃ መሆን የክርስቶስን ስራ መካድ ነው» ይላሉ።",
      "damage": "የክርስቶስን ቅዱስ የሥጋ መገለጥና የመስቀል ሞት ወደ ቁሳዊ ስግብግብነት ይቀይራል፤ ድሃ አማኞችን ያሳዝናል።"
    },
    "distortionEn": {
      "claim": "Prosperity televangelists proclaim: \"Jesus became poor on the cross so that you can drive a Rolls-Royce and live as a multi-millionaire!\"",
      "damage": "It profanes the sacred mystery of the Incarnation, turns the Cross into an ATM, and heaps condemnation on impoverished believers."
    },
    "truthAm": {
      "contextSummary": "2 ቆሮንቶስ 8 ክርስቲያኖች እንደ ክርስቶስ ራሳቸውን ባዶ አድርገው ለተራቡትና ለተቸገሩት ቅዱሳን በልግስና እንዲሰጡ የሚያስተምር ምዕራፍ ነው።",
      "surroundingVerses": "በቁጥር 13-14 ላይ «ሌሎችን እንድታቀሉ ለእናንተም እንዳይከብድ፥ ነገር ግን እኩልነት እንዲሆን ነው» በማለት ማካፈልን እንጂ የራስን ማደለብ እንዳልሆነ አስረድቷል።",
      "timelessPrinciple": "ክርስቶስ ከሰጠን እጅግ የከበረ መንፈሳዊ ሀብት የተነሳ እኛ ደግሞ በምድር ያሉትን ድሆችና የተቸገሩትን በልግስና መርዳት አለብን።"
    },
    "truthEn": {
      "contextSummary": "2 Corinthians 8:9 provides the supreme christological motive for sacrificial financial giving to relieve poverty, not accumulating personal wealth.",
      "surroundingVerses": "Verses 13-14 articulate the goal: \"fair balance... that your abundance at the present time should supply their need.\"",
      "timelessPrinciple": "Believers, enriched with the infinite spiritual treasures of Christ, are called to sacrifice earthly resources to sustain the needy."
    },
    "crossReferences": [
      {
        "ref": "ፊልጵስዩስ 2:6-8",
        "noteAm": "«የባሪያን መልክ ይዞ በሰውም ምሳሌ ሆኖ ራሱን ባዶ አደረገ... እስከ ሞት ድረስ ታዛዥ ሆነ»",
        "noteEn": "“Emptied himself, by taking the form of a servant, being born in the likeness of men... he humbled himself by becoming obedient to the point of death.”"
      },
      {
        "ref": "ኤፌሶን 1:7-8",
        "noteAm": "«እንደ ጸጋው ባለጠግነት መጠን፥ በደሙ በተደረገ ቤዛነቱ የኃጢአትን ስርየት አገኘን»",
        "noteEn": "“In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace.”"
      },
      {
        "ref": "ያዕቆብ 2:5",
        "noteAm": "«እግዚአብሔር በእምነት ባለጠጎች እንዲሆኑ... በዚህ ዓለም ድሆች የሆኑትን አልመረጠምን?»",
        "noteEn": "“Has not God chosen those who are poor in the world to be rich in faith and heirs of the kingdom?”"
      }
    ]
  },
  {
    "id": "capsule-b48",
    "bookNr": 48,
    "chapter": 3,
    "verseStart": 13,
    "verseEnd": 13,
    "verseRefAm": "ወደ ገላትያ ሰዎች 3:13",
    "verseRefEn": "Galatians 3:13",
    "verseTextAm": "በእንጨት የሚሰቀል ሁሉ የተረገመ ነው ተብሎ ተጽፎአልና ክርስቶስ ስለ እኛ እርግማን ሆኖ ከሕግ እርግማን ዋጀን፤",
    "verseTextEn": "Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree:",
    "titleAm": "ክርስቶስ ስለ እኛ እርግማን ሆኖ ዋጀን — የበሽታ አለመታመም ዋስትና ወይስ የሕግ ኩነኔ ስርየት?",
    "titleEn": "Christ Redeemed Us from the Curse of the Law — Immunity from Illness vs Justification from Law’s Condemnation",
    "taglineAm": "ክርስቶስ ከኦሪት ሕግ ፍርድና ኩነኔ ነጻ ያወጣን ታላቅ እውነት ዛሬ \"አማኝ ፈጽሞ አይታመምም አይደኸይም\" ለሚል ቅዠት ሲጣመም",
    "taglineEn": "Redemption from the legal curse of Torah condemnation perverted into a claim that believers never experience illness or hardship",
    "eraAm": "የገላትያ የሕግና የጸጋ ክርክር ዘመን",
    "eraEn": "Judaizing Crisis in Galatia",
    "locationAm": "በደቡብ ገላትያ አብያተ ክርስቲያናት",
    "locationEn": "Churches of Galatia",
    "yearApprox": "49 ዓ.ም.",
    "keyIcon": "✝️",
    "sceneAm": {
      "setting": "የሐሰት አስተማሪዎች (አይሁዳውያን) ወደ ገላትያ ገብተው «ክርስቶስን ማመን ብቻ አይበቃም፤ ካልተገረዛችሁና የሙሴን ሕግ በሙሉ ካልጠበቃችሁ አትድኑም» እያሉ አማኞችን ባወኩበት ወቅት።",
      "dailyLife": "በኦሪት ዘዳግም 27:26 መሠረት በሕጉ መጽሐፍ የተጻፉትን ሁሉ የማያደርግ የተረገመ ነበር፤ ማንም ሰው ደግሞ ሕጉን ፍጹም አድርጎ ሊጠብቅ አይችልም ነበር።",
      "socialTension": "ጳውሎስ በታላቅ ቁጣ «እናንተ የማታስተውሉ የገላትያ ሰዎች ሆይ፥ በዓይናችሁ ፊት ኢየሱስ ክርስቶስ እንደ ተሰቀለ ሆኖ ተስሎ ነበር፤ ማን አሰናከላችሁ?» በማለት ጮኸ።"
    },
    "sceneEn": {
      "setting": "Judaizing heretics invaded the Galatian churches, insisting that Gentile converts must be circumcised and obey the Mosaic Law to be saved.",
      "dailyLife": "Under Deuteronomy 27:26, anyone failing to keep every single commandment of the Torah fell under divine curse and condemnation.",
      "socialTension": "Paul erupted in apostolic fury: \"O foolish Galatians! Who has bewitched you? Before your eyes Jesus Christ was publicly portrayed as crucified!\" (Gal 3:1)."
    },
    "metaphorAm": {
      "origin": "«የሕግ እርግማን» ማለት በዘዳግም 27 የተጠቀሰው የሕግን ትእዛዛት መፈጸም ባለመቻላችን በእኛ ላይ የመጣው የዘላለም ሞትና የፍርድ እርግማን ነው።",
      "linguisticNuance": "ክርስቶስ በእንጨት (በመስቀል) ላይ ተሰቅሎ ስለ እኛ እርግማን ሆነ፤ ዓላማውም በቁጥር 14 ላይ «የአብርሃም በረከት ወደ አሕዛብ ይደርስ ዘንድ» የመንፈስን ተስፋ በእምነት እንድንቀበል ነው።",
      "crowdReaction": "አማኞች ከሕግ ባርነትና ኩነኔ ነጻ ወጥተው በክርስቶስ ጸጋ ብቻ መጽደቃቸውን አወቁ።"
    },
    "metaphorEn": {
      "origin": "The \"curse of the law\" is eternal condemnation and separation from God incurred by failing to keep the whole Mosaic covenant.",
      "linguisticNuance": "Christ became a curse for us by dying on the cross (Deut 21:23) so that \"the blessing of Abraham might come to the Gentiles... through faith\" (v. 14).",
      "crowdReaction": "Gentile believers rejoiced, casting off the crushing yoke of legalism to rest solely in justification by faith."
    },
    "distortionAm": {
      "claim": "የእምነት እንቅስቃሴ አስተማሪዎች «ዘዳግም 28 ላይ ትኩሳትና ድህነት እርግማን ናቸው፤ ስለዚህ ክርስቶስ ስለ እኛ እርግማን ሆኗልና አማኝ ካንሰር፣ ጉንፋን ወይም የገንዘብ ችግር አይደርስበትም» ይላሉ።",
      "damage": "የመጽደቅንና የመዳንን መንፈሳዊ ምስጢር ወደ ሥጋዊ ዋስትና ያወርደዋል፤ የታመሙ አማኞችን በእምነት ማነስ ይከሳል።"
    },
    "distortionEn": {
      "claim": "Word-of-Faith teachers cite Galatians 3:13 to declare: \"Since sickness and poverty are curses in Deuteronomy 28, a Christian can never be sick or poor!\"",
      "damage": "It shifts the curse from eternal spiritual damnation to physical flu, tormenting sick saints with false accusations of unbelief."
    },
    "truthAm": {
      "contextSummary": "ገላትያ 3 ሰው የሚጸድቀው የሕግን ሥራ በመሥራት ሳይሆን በክርስቶስ በማመን ብቻ መሆኑን የሚያረጋግጥ የወንጌል ምሰሶ ነው።",
      "surroundingVerses": "ጳውሎስ ራሱ በገላትያ 4:13 ላይ «በሥጋዬ ድካም (ሕመም) መጀመሪያ ወንጌልን እንደ ሰበክሁላችሁ ታውቃላችሁ» በማለት በታመመ ሥጋ እንዳገለገለ መስክሯል።",
      "timelessPrinciple": "ክርስቶስ የዋጀን ከዘላለም ሞትና ከኃጢአት ፍርድ ነው፤ በምድር በሥጋ ድካም ውስጥ ብናልፍም በእግዚአብሔር ፊት ጻድቃን ነን።"
    },
    "truthEn": {
      "contextSummary": "Galatians 3 defends justification by faith alone apart from Torah works: Christ absorbed the divine penalty of our lawbreaking on the Cross.",
      "surroundingVerses": "Paul himself reminds the Galatians in Galatians 4:13: \"You know it was because of a bodily illness that I preached the gospel to you at first.\"",
      "timelessPrinciple": "Christ redeemed us from eternal damnation; while our mortal bodies still groan under fallen creation, our justification is secure forever."
    },
    "crossReferences": [
      {
        "ref": "ሮሜ 3:28",
        "noteAm": "«ሰው ያለ ሕግ ሥራ በእምነት እንዲጸድቅ እንቈጥራለንና»",
        "noteEn": "“For we hold that one is justified by faith apart from works of the law.”"
      },
      {
        "ref": "ገላትያ 2:16",
        "noteAm": "«ሰው በኢየሱስ ክርስቶስ በማመን እንዲጸድቅ እንጂ በሕግ ሥራ እንዳይሆን አውቀን... እኛ ራሳችን በክርስቶስ ኢየሱስ አምነናል»",
        "noteEn": "“Yet we know that a person is not justified by works of the law but through faith in Jesus Christ.”"
      },
      {
        "ref": "2 ቆሮንቶስ 5:21",
        "noteAm": "«እኛ በእርሱ ሆነን የእግዚአብሔር ጽድቅ እንሆን ዘንድ ኃጢአት ያላወቀውን እርሱን ስለ እኛ ኃጢአት አደረገው»",
        "noteEn": "“For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.”"
      }
    ]
  },
  {
    "id": "capsule-b49",
    "bookNr": 49,
    "chapter": 4,
    "verseStart": 29,
    "verseEnd": 29,
    "verseRefAm": "ወደ ኤፌሶን ሰዎች 4:29",
    "verseRefEn": "Ephesians 4:29",
    "verseTextAm": "ለቤዛም ቀን የታተማችሁበትን ቅዱሱን የእግዚአብሔርን መንፈስ አታሳዝኑ።",
    "verseTextEn": "Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.",
    "titleAm": "ክፉ ቃል ከአፋችሁ ከቶ አይውጣ — የፈሪሳውያን ጨዋነት ወይስ የሚያንጽ የጸጋ ንግግር?",
    "titleEn": "Let No Corrupting Talk Come Out of Your Mouths — Victorian Prudishness vs Grace-Filled Speech",
    "taglineAm": "ጳውሎስ ወንድምን የሚያፈርስና የሚያረክስ ንግግርን ያስጠነቀቀበት ቃል ዛሬ እውነትን በግልጽ ከመናገር ማፈኛ ሲደረግ",
    "taglineEn": "Paul’s command against rotting speech weaponized by false teachers to silence necessary biblical confrontation",
    "eraAm": "የኤፌሶን ጣዖት አምላኪ ማኅበረሰብና አዲሱ ሰው",
    "eraEn": "Ephesian Pagan Metropolis & The New Self",
    "locationAm": "ከሮም እስር ቤት ወደ ኤፌሶን የተላከ መልእክት",
    "locationEn": "Written from Prison in Rome",
    "yearApprox": "62 ዓ.ም.",
    "keyIcon": "🗣️",
    "sceneAm": {
      "setting": "ኤፌሶን የአርጤምስ ጣዖት ዋና ማዕከል በነበረችበት ወቅት፤ ከጨለማው አረማዊ የአኗኗር ዘይቤ ወጥተው በክርስቶስ አዲስ ሰው ለሆኑት አማኞች የተሰጠ ተግባራዊ መመሪያ።",
      "dailyLife": "በጥንቱ አረማዊ ማኅበረሰብ ስድብ፣ ሐሜት፣ መርዘኛ ንግግርና ማታለል የዕለት ተዕለት የገበያና የመጠጥ ቤት ልማድ ነበር።",
      "socialTension": "ጳውሎስ አሮጌውን ሰው አስወግደው አዲሱን ሰው እንዲለብሱና የመንፈስ ቅዱስን ማደሪያ በሆነው አፋቸው ወንድሞቻቸውን እንዲያንጹ አዘዘ።"
    },
    "sceneEn": {
      "setting": "Ephesus was a hotbed of sorcery and Artemis cults; converts were summoned to strip off pagan habits and walk as children of light.",
      "dailyLife": "Greco-Roman street life was drenched in slander, bitter curses, obscene mockery, and destructive verbal betrayal.",
      "socialTension": "Paul urged the church to display the supernatural transformation of Christ in the very way they spoke to one another in community."
    },
    "metaphorAm": {
      "origin": "«ክፉ ቃል» (ሳፕሮስ) የሚለው የግሪክ ቃል የበሰበሰ፣ የተበላሸና የሚገማ ፍሬን ወይም አሳን ያመለክታል፤ በሰሚው ልብ ውስጥ ብስባሽ የሚዘራ ንግግር ነው።",
      "linguisticNuance": "ተቃራኒው «ለሚያስፈልገው ማነጽ የሚጠቅም፥ ለሚሰሙትም ጸጋን የሚሰጥ» — ንግግራችን ሌላውን የሚያንጽና ጸጋን የሚሰጥ ስጦታ መሆን አለበት።",
      "crowdReaction": "አማኞች አፋቸውን ለወንድሞቻቸው ማበረታቻና ለእግዚአብሔር ምስጋና እንዲያውሉ ተማሩ።"
    },
    "metaphorEn": {
      "origin": "The Greek word \"sapros\" denotes rotten, putrid, decaying fish or rotten wood—speech that spreads moral rot and toxicity in the hearer.",
      "linguisticNuance": "The counter-command is breathtaking: \"only such as is good for building up, as fits the occasion, that it may give grace to those who hear.\"",
      "crowdReaction": "The Ephesian church abandoned pagan verbal vitriol to become a sanctuary of uplifting, grace-giving encouragement."
    },
    "distortionAm": {
      "claim": "አንዳንድ የሐሰት አስተማሪዎች ስህተታቸው በቃሉ ሲጋለጥ «ክፉ ቃል ከአፋችሁ አይውጣ ተብሏል፤ ስለዚህ እኔን መንካት ወይም ስህተቴን መናገር አትችሉም» በማለት እውነትን ያፍናሉ።",
      "damage": "መጽሐፍ ቅዱሳዊውን ተግሣጽና የሐሰት ትምህርት መጋለጥን ያቆማል፤ የቤተክርስቲያንን ንጽሕና ያበላሻል።"
    },
    "distortionEn": {
      "claim": "Manipulative leaders weaponize this verse against whistleblowers: \"Rebuking my false doctrine is ‘corrupt talk,’ so keep quiet!\"",
      "damage": "It silences righteous biblical correction, confuses biblical truth-telling with sin, and shields wolves from apostolic exposure."
    },
    "truthAm": {
      "contextSummary": "ኤፌሶን 4:25-32 የሚያሳየው አማኞች እርስ በርሳቸው በታማኝነት፣ በፍቅርና በይቅርታ እንዲነጋገሩ እንጂ እውነትን መደበቅ እንዳልሆነ ነው።",
      "surroundingVerses": "በቁጥር 25 ላይ «እርስ በርሳችን ብልቶች ሆነናልና እያንዳንዳችሁ ከባልንጀሮቻችሁ ጋር እውነትን ተነጋገሩ» ተብሎ በግልጽ ታዟል።",
      "timelessPrinciple": "ክርስቲያን እውነትን በፍቅር መናገር አለበት፤ ንግግራችን ሌላውን የሚያንጽና የሚያበረታታ እንጂ በቁጣና በሐሜት የሚያፈርስ መሆን የለበትም።"
    },
    "truthEn": {
      "contextSummary": "Ephesians 4:25-32 outlines healthy covenant community life, built on speaking the truth in love and putting away bitterness.",
      "surroundingVerses": "Verse 25 explicitly commands: \"Therefore, having put away falsehood, let each one of you speak the truth with his neighbor.\"",
      "timelessPrinciple": "Christian speech must be seasonable, truthful, and saturated with grace, rejecting slander while fearlessly declaring God’s truth."
    },
    "crossReferences": [
      {
        "ref": "ቆላስይስ 4:6",
        "noteAm": "«ለእያንዳንዱ እንዴት እንድትመልሱ እንደሚገባችሁ ታውቁ ዘንድ ንግግራችሁ ሁልጊዜ በጨው የተቀመመ በጸጋ ይሁን»",
        "noteEn": "“Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.”"
      },
      {
        "ref": "ኤፌሶን 4:15",
        "noteAm": "«እውነትን በፍቅር እየያዝን በነገር ሁሉ ወደ እርሱ ራስ ወደሚሆን ወደ ክርስቶስ እንደግ»",
        "noteEn": "“Speaking the truth in love, we are to grow up in every way into him who is the head, into Christ.”"
      },
      {
        "ref": "ምሳሌ 15:1",
        "noteAm": "«የየዋህ መልስ ቍጣን ትመልሳለች፤ የበረታ ቃል ግን ቁጣን ታስነሳለች»",
        "noteEn": "“A soft answer turns away wrath, but a harsh word stirs up anger.”"
      }
    ]
  },
  {
    "id": "capsule-b50",
    "bookNr": 50,
    "chapter": 4,
    "verseStart": 13,
    "verseEnd": 13,
    "verseRefAm": "ወደ ፊልጵስዩስ ሰዎች 4:13",
    "verseRefEn": "Philippians 4:13",
    "verseTextAm": "ኃይልን በሚሰጠኝ በክርስቶስ ሁሉን እችላለሁ።",
    "verseTextEn": "I can do all things through Christ which strengtheneth me.",
    "titleAm": "ኃይልን በሚሰጠኝ በክርስቶስ ሁሉን እችላለሁ",
    "titleEn": "I Can Do All Things Through Christ Who Strengthens Me",
    "taglineAm": "በእስር ቤትና በረሃብ ውስጥ ያለ ክርስቲያናዊ የይበቃኛል ምስጢር",
    "taglineEn": "Christian contentment in prison and hunger, not sports superpowers",
    "eraAm": "የጳውሎስ የሮም እስር ቤት ዘመን",
    "eraEn": "Paul’s Roman Imprisonment",
    "locationAm": "በሮም እሥር ቤት በሰንሰለት ታስሮ",
    "locationEn": "Roman Dungeon / Chained to Guard",
    "yearApprox": "61 ዓ.ም.",
    "keyIcon": "⛓️",
    "sceneAm": {
      "setting": "ሐዋርያው ጳውሎስ በሮም ወታደር ታስሮ በሞት ፍርድ ጥላ ሥር ሳለ ለፊልጵስዩስ ቅዱሳን የላከው የደስታ መልእክት።",
      "dailyLife": "በሮም እስር ቤቶች ውስጥ ምንም ምግብ አይሰጥም ነበር፤ የታሳሪው ህልውና በጓደኞች እርዳታ ላይ የተመሠረተ ነበር።",
      "socialTension": "ጳውሎስ ድህነትን፣ ረሃብንና መከራን እየተጋፈጠ የክርስቶስ ኃይል በውስጡ እንዴት እንደሚሠራ አመለከተ።"
    },
    "sceneEn": {
      "setting": "Paul writing from chains in Rome under imperial guard, awaiting possible execution.",
      "dailyLife": "Roman prisoners depended entirely on outside charity for food, clothing, and water.",
      "socialTension": "Despite starvation, isolation, and legal peril, Paul radiates unconquerable joy in Christ."
    },
    "metaphorAm": {
      "origin": "«ሁሉን እችላለሁ» ያለው ስፖርት ማሸነፍን ወይም ሀብት ማካበትን ሳይሆን በማንኛውም የኑሮ ሁኔታ (በጥጋብም በረሃብም) በክርስቶስ ረክቶ መኖርን ነው።",
      "linguisticNuance": "«በሚሰጠኝ ኃይል» (ኢንዲናሙንቲ) — የውስጥ መንፈሳዊ ጽናትና ብርታት እንጂ ውጫዊ ተዓምራዊ ማጂክ አይደለም።",
      "crowdReaction": "የፊልጵስዩስ አማኞች ጳውሎስ በሰንሰለት ሳለ የነበረውን ደስታ አይተው እጅግ ተበረታቱ።"
    },
    "metaphorEn": {
      "origin": "“All things” refers directly to weathering extreme deprivation, hunger, and abundance without despair.",
      "linguisticNuance": "The Greek \"endynamounti\" means an inward infusing of strength to endure hardship, not superhuman athletic feats.",
      "crowdReaction": "The Philippian church was electrified by Paul’s unshakable contentment amidst dire poverty."
    },
    "distortionAm": {
      "claim": "አትሌቶች፣ ተማሪዎችና ነጋዴዎች ጥቅሱን ለፈተና ማለፊያ፣ ለውድድር ማሸነፊያና ለግል ምኞት ማሳኪያ እንደ ማጂክ ቃል ይጠቀሙበታል።",
      "damage": "ክርስቲያን በመከራ ውስጥ ሲወድቅ እምነቱ እንዲናወጥ ያደርጋል፤ የመስቀሉን የመጽናት ጥሪ ወደ ምድራዊ ድል ያወርደዋል።"
    },
    "distortionEn": {
      "claim": "Printed on athletic shoes and weightlifting belts as a magical talisman to win football games, pass exams, or close business deals.",
      "damage": "Sets believers up for crisis of faith when they fail, trivializing Christ’s sustaining grace in suffering."
    },
    "truthAm": {
      "contextSummary": "አውዱ (ቁጥር 11-12) የሚያወራው ስለ ክርስቲያናዊ የይበቃኛል ባሕርይ (Contentment) ነው፤ ማጣትም ሆነ ማግኘት ክርስቶስን ሊተካ አይችልም።",
      "surroundingVerses": "በቁጥር 12 ላይ «መዋረድንም አውቃለሁ፥ መብዛትንም አውቃለሁ፤ በጥጋብና በራብም... መማርን ተምሬአለሁ» ይላል።",
      "timelessPrinciple": "የክርስቶስ ኃይል የሚገለጠው በማንኛውም አስቸጋሪ ሁኔታ ውስጥ እግዚአብሔርን አመስግኖ በመጽናት ነው።"
    },
    "truthEn": {
      "contextSummary": "Verses 11-12 reveal the secret: \"I have learned in whatever situation I am to be content... I have learned the secret of facing plenty and hunger.\"",
      "surroundingVerses": "Paul contrasts being brought low and abounding, hunger and plenty, proving \"all things\" means enduring any circumstance.",
      "timelessPrinciple": "Christ provides supernatural endurance to rejoice in Him whether living in starvation or abundance."
    },
    "crossReferences": [
      {
        "ref": "2 ቆሮንቶስ 12:9-10",
        "noteAm": "«ጸጋዬ ይበቃሃል፥ ኃይሌ በድካም ይፈጸማልና»",
        "noteEn": "“My grace is sufficient for you, for my power is made perfect in weakness.”"
      },
      {
        "ref": "1 ጢሞቴዎስ 6:6",
        "noteAm": "«ኑሮዬ ይበቃኛል ለሚለው ግን እግዚአብሔርን መምሰል ታላቅ ማትረፊያ ነው»",
        "noteEn": "“Godliness with contentment is great gain.”"
      },
      {
        "ref": "ዕብራውያን 13:5",
        "noteAm": "«አካሄዳችሁ ገንዘብን ያለ መውደድ ይሁን፥ ያላችሁም ይበቃችኋል በሉ»",
        "noteEn": "“Keep your life free from love of money, and be content with what you have.”"
      }
    ]
  },
  {
    "id": "capsule-b51",
    "bookNr": 51,
    "chapter": 2,
    "verseStart": 20,
    "verseEnd": 22,
    "verseRefAm": "ወደ ቆላስይስ ሰዎች 2:20-22",
    "verseRefEn": "Colossians 2:20-22",
    "verseTextAm": " እንደ ሰው ሥርዓትና ትምህርት። አትያዝ፥ አትቅመስ፥ አትንካ ለሚሉት ትእዛዛት በዓለም እንደምትኖሩ ስለ ምን ትገዛላችሁ? እነዚህ ሁሉ በመደረግ ሊጠፉ ተወስነዋልና። ይህ እንደ ገዛ ፈቃድህ በማምለክና በትሕትና ሥጋንም በመጨቆን ጥበብ ያለው ይመስላል፥ ነገር ግን ሥጋ ያለ ልክ እንዳይጠግብ ለመከልከል ምንም አይጠቅምም።",
    "verseTextEn": "Wherefore if ye be dead with Christ from the rudiments of the world, why, as though living in the world, are ye subject to ordinances, (Touch not; taste not; handle not; Which all are to perish with the using;) after the commandments and doctrines of men?",
    "titleAm": "አትንካ አትቅመስ አትያዝ — መለኮታዊ ትእዛዛት ወይስ ጳውሎስ ያፌዘበት የሐሰት ስርዓት?",
    "titleEn": "Do Not Handle, Do Not Taste, Do Not Touch — Divine Mandate or Rebuked Asceticism?",
    "taglineAm": "ጳውሎስ የሐሰት አስተማሪዎችን ሕግጋት ያጋለጠበት ቃል ዛሬ የእግዚአብሔር ትእዛዝ ተደርጎ ሲሰበክ",
    "taglineEn": "Words quoted by Paul to mock human ascetic legalism mistakenly preached as God’s strict commandments",
    "eraAm": "የቆላስይስ ግኖስቲክና አስቄቲክ ፍልስፍና ዘመን",
    "eraEn": "Colossian Ascetic Heresy",
    "locationAm": "ከሮም እስር ቤት ወደ ፍርግያ (ቆላስይስ)",
    "locationEn": "Written to Colossae in Phrygia",
    "yearApprox": "62 ዓ.ም.",
    "keyIcon": "🚫",
    "sceneAm": {
      "setting": "በቆላስይስ ቤተክርስቲያን ውስጥ የሐሰት ፍልስፍና ያላቸው አስተማሪዎች ገብተው «ሥጋችሁን ካላሰቃያችሁ፣ አንዳንድ ምግቦችን ካልተዋችሁና መላእክትን ካላመለካችሁ ቅዱሳን አትሆኑም» እያሉ በነበረበት ወቅት።",
      "dailyLife": "አረማውያን አስቄቲኮች ራሳቸውን በማስራብና ሥጋቸውን በመጎዳት ሰው ሰራሽ መንፈሳዊ ከፍታን ይፈልጉ ነበር።",
      "socialTension": "ጳውሎስ አማኞች በክርስቶስ ሙሉ እንደ ሆኑና ለዓለም የመጀመሪያ ትምህርት ከሞቱ እንደገና በሰው ስርዓት እንዳይታሰሩ አስጠነቀቀ።"
    },
    "sceneEn": {
      "setting": "The church at Colossae was targeted by a syncretistic heresy blending Jewish ceremonialism, pagan asceticism, and angel worship.",
      "dailyLife": "Ascetic teachers boasted of harsh bodily deprivation, strict food taboos, and visionary mystical trances.",
      "socialTension": "Paul confronted their elitism, insisting that believers are already complete in Christ, the Head of all rule and authority."
    },
    "metaphorAm": {
      "origin": "«አትያዝ፥ አትቅመስ፥ አትንካ» የሚሉት ቃላት የእግዚአብሔር ትእዛዛት ሳይሆኑ ጳውሎስ ያጋለጣቸው የሐሰት አስተማሪዎች የፈጠሯቸው ሰው ሰራሽ ህጎች ነበሩ!።",
      "linguisticNuance": "በቁጥር 22 ላይ «ይህ ሁሉ እንደ ሰው ትእዛዝና ትምህርት... በመበላሸት የሚጠፋ ነው» በማለት ምንጩ ሰው መሆኑን አረጋግጧል።",
      "crowdReaction": "አማኞች በክርስቶስ ነጻ መውጣታቸውንና የሰው ስርዓት የሥጋን ምኞት ለመከልከል ምንም ዋጋ እንደሌለው ተረዱ (ቁ. 23)።"
    },
    "metaphorEn": {
      "origin": "“Do not handle, do not taste, do not touch” were NOT God’s commandments; Paul was directly quoting the ascetic catchphrases of the heretics!",
      "linguisticNuance": "Verse 22 refutes them: \"referring to things that all perish as they are used—according to human precepts and teachings.\"",
      "crowdReaction": "Believers realized that severe bodily asceticism has an appearance of wisdom but is of no value in stopping sensual indulgence (v. 23)."
    },
    "distortionAm": {
      "claim": "አንዳንድ የሃይማኖት ሰባኪዎች ጥቅሱን ወስደው «መጽሐፍ ቅዱስ አትንካ አትቅመስ አትያዝ ይላል፤ ስለዚህ ይሄን ምግብ አትንኩ፣ ይሄን አታድርጉ» እያሉ ጳውሎስ ያወገዘውን ስርዓት የእግዚአብሔር ቃል አድርገው ይሰብካሉ።",
      "damage": "ሰዎችን በሰው ሰራሽ የሕግ ቀንበር ያስራል፤ የክርስቶስን ሙሉ አዳኝነትና በጸጋ የመዳንን ነጻነት ያጠፋል።"
    },
    "distortionEn": {
      "claim": "Legalistic preachers lift this quote out of context to enforce behavioral prohibitions: \"The Bible commands: Touch not, taste not, handle not!\"",
      "damage": "It turns the Gospel into oppressive Pharisaic rule-keeping, preaching as divine law the very heresy the apostle wrote the epistle to destroy."
    },
    "truthAm": {
      "contextSummary": "ቆላስይስ 2 ክርስቶስ በመስቀል ላይ የዕዳ ጽሕፈቱን እንደደመሰሰውና አማኝ በክርስቶስ ፍጹም ሙላት እንዳለው የሚያስተምር ታላቅ የነጻነት ምዕራፍ ነው።",
      "surroundingVerses": "በቁጥር 16 ላይ «በመብል ወይም በመጠጥ ወይም ስለ በዓል... ማንም አይፍረድባችሁ፤ እነዚህ ሊመጡ ያሉት ነገሮች ጥላ ናቸውና አካሉ ግን የክርስቶስ ነው» ተብሏል።",
      "timelessPrinciple": "እውነተኛ ቅድስና በክርስቶስ ከመኖርና ከመንፈስ ቅዱስ ፍሬ የሚመጣ እንጂ በሰው ሰራሽ የምግብና የውጭ ክልከላዎች አይገኝም።"
    },
    "truthEn": {
      "contextSummary": "Colossians 2 demonstrates that Christ canceled the record of debt on the Cross; believers are totally complete in Him.",
      "surroundingVerses": "Verse 16: \"Therefore let no one pass judgment on you in questions of food and drink, or with regard to a festival... These are a shadow, but the substance belongs to Christ.\"",
      "timelessPrinciple": "Sanctification is the supernatural fruit of union with the risen Christ, not external ascetic regulations that fail to change the heart."
    },
    "crossReferences": [
      {
        "ref": "1 ጢሞቴዎስ 4:3-4",
        "noteAm": "«መጋባትን ይከለክላሉ፥ አምነውም እውነትን ለሚያውቁ ከምስጋና ጋር ይቀበሉት ዘንድ እግዚአብሔር ከፈጠረው መብል እንዲርቁ ያዝዛሉ፤ እግዚአብሔር የፈጠረው ሁሉ መልካም ነውና»",
        "noteEn": "“Who forbid marriage and require abstinence from foods that God created to be received with thanksgiving... For everything created by God is good.”"
      },
      {
        "ref": "ገላትያ 5:1",
        "noteAm": "«በነጻነት ልንኖር ክርስቶስ ነጻ አወጣን፤ እንግዲህ ጸንታችሁ ቁሙ እንደ ገናም በባርነት ቀንበር አትያዙ»",
        "noteEn": "“For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery.”"
      },
      {
        "ref": "ሮሜ 14:17",
        "noteAm": "«የእግዚአብሔር መንግሥት ጽድቅና ሰላም በመንፈስ ቅዱስም የሆነ ደስታ ናት እንጂ መብልና መጠጥ አይደለችምና»",
        "noteEn": "“For the kingdom of God is not a matter of eating and drinking but of righteousness and peace and joy in the Holy Spirit.”"
      }
    ]
  },
  {
    "id": "capsule-b52",
    "bookNr": 52,
    "chapter": 5,
    "verseStart": 22,
    "verseEnd": 22,
    "verseRefAm": "1ኛ ወደ ተሰሎንቄ ሰዎች 5:22",
    "verseRefEn": "1 Thessalonians 5:22",
    "verseTextAm": "ወንድሞች ሆይ፥ ስለ እኛ ጸልዩ።",
    "verseTextEn": "Abstain from all appearance of evil.",
    "titleAm": "ከክፉ ነገር ሁሉ ራቁ — በፍርሃት መሸበር ወይስ የትንቢት ትምህርትን መመርመር?",
    "titleEn": "Abstain from Every Form of Evil — Paranoid Phobia vs Discerning Prophetic Teaching",
    "taglineAm": "ጳውሎስ የትንቢት መልእክትን መርምሮ ክፉውን ለመጣል የሰጠው ምክር ዛሬ ሰዎችን በፍርሃት ለማሰር ሲጣመም",
    "taglineEn": "A balanced apostolic rule for evaluating prophetic utterances turned into hyper-paranoid pharisaism",
    "eraAm": "የተሰሎንቄ ቤተክርስቲያን ስደትና የጌታ ቀን ጥበቃ",
    "eraEn": "Thessalonian Persecution & The Day of the Lord",
    "locationAm": "ከቆሮንቶስ ወደ ተሰሎንቄ የተላከ ደብዳቤ",
    "locationEn": "Written from Corinth to Thessalonica",
    "yearApprox": "51 ዓ.ም.",
    "keyIcon": "🔍",
    "sceneAm": {
      "setting": "በተሰሎንቄ በከባድ ስደት ውስጥ ለነበረችው ወጣት ቤተክርስቲያን ጳውሎስ ስለ ጌታ ቀን መምጣትና ስለ መንፈሳዊ ስጦታዎች አጠቃቀም ሲያስተምር።",
      "dailyLife": "በቤተክርስቲያኑ ጉባኤ ውስጥ የተለያዩ ሰዎች ትንቢት ይናገሩ ነበር፤ አንዳንዶች ግን ትንቢትን ፈጽሞ ይንቁ ነበር።",
      "socialTension": "ጳውሎስ ሚዛናዊ የሆነ መመሪያ ሰጠ፦ «ትንቢትን አትንቁ፤ ሁሉን ፈትኑ መልካሙን ያዙ፤ ከማናቸውም ዓይነት ክፉ ነገር ራቁ» (ቁ. 20-22)።"
    },
    "sceneEn": {
      "setting": "Paul instructing a young, persecuted church in Macedonia awaiting the return of Christ.",
      "dailyLife": "Spiritual gifts were active in their assemblies, but some members were skeptical and began despising prophecies altogether.",
      "socialTension": "Paul established apostolic balance: \"Do not despise prophecies, but test everything; hold fast what is good. Abstain from every form of evil\" (1 Thess 5:20-22)."
    },
    "metaphorAm": {
      "origin": "«ከማናቸውም ዓይነት ክፉ ነገር ራቁ» የሚለው ወርቅን ከቆሻሻ እንደሚያጣራ ሰው ትንቢቱን መርምራችሁ ክፉ የሆነውን የሐሰት ትምህርት ጣሉት ማለት ነው።",
      "linguisticNuance": "በግሪክ «ፓንቶስ ኢዱስ ፖኔሩ» ማለት «ከማንኛውም የክፋት ዓይነት/ቅርጽ» እንጂ አሮጌው እንግሊዝኛ (KJV) እንደሚለው «ከሚመስል ነገር ሁሉ» (appearance of evil) ማለት አይደለም።",
      "crowdReaction": "አማኞች የሐሰት ትንቢትንና ክፋትን በመንፈሳዊ ማመዛዘን መለየትን ተማሩ።"
    },
    "metaphorEn": {
      "origin": "The imagery derives from metal assayers testing gold: test the prophetic teaching, keep the pure gold, and discard every form of slag/evil.",
      "linguisticNuance": "The Greek \"pantos eidous ponerou\" means \"every sort/kind of evil,\" not the mistranslated KJV \"every appearance of evil.\"",
      "crowdReaction": "Believers embraced sober theological discernment without succumbing to anti-charismatic cynicism or gullibility."
    },
    "distortionAm": {
      "claim": "ብዙዎች «ከክፉ አምሳል ሁሉ ራቁ» የሚለውን የተሳሳተ ትርጉም ይዘው «ሰዎች በስህተት ክፉ እንዳይመስላቸው መጠንቀቅ አለባችሁ፤ ለምሳሌ ሬስቶራንት አትግቡ መጠጥ ቤት ይመስላል» እያሉ ሰዎችን በጭንቀት ያስራሉ።",
      "damage": "ክርስቲያኖችን በሌሎች ሰዎች የተሳሳተ ግምትና ወሬ ባሪያ ያደርጋል፤ የክርስቶስን የወንጌል ተልዕኮ ወደ ፈሪሳዊ ፍርሃት ይለውጣል።"
    },
    "distortionEn": {
      "claim": "Hyper-fundamentalists misuse the KJV rendering (\"appearance of evil\") to enforce ridiculous taboos: \"Never enter a restaurant that serves beer, because someone might think you’re drinking!\"",
      "damage": "It enslaves believers to the paranoid opinions of gossipers, paralyzes cultural engagement, and substitutes man-made phobias for real holiness."
    },
    "truthAm": {
      "contextSummary": "1 ተሰሎንቄ 5:19-22 መንፈስ ቅዱስን ሳያጠፉ ነገር ግን ትንቢትንና ትምህርትን በእግዚአብሔር ቃል መርምሮ ክፉውን የመለየት መመሪያ ነው።",
      "surroundingVerses": "ኢየሱስ ራሱ ከቀራጮችና ከኃጢአተኞች ጋር በላ፤ ፈሪሳውያን «ይህ ሰው በላተኛና ጠጪ ነው» ቢሉትም ኢየሱስ ከክፉ አምሳል አልሸሸም፤ እውነተኛ ኃጢአትን ግን አልሰራም።",
      "timelessPrinciple": "ክርስቲያን ከእውነተኛ ኃጢአትና ከሐሰት ትምህርት መራቅ አለበት እንጂ በሰው የተሳሳተ ወሬና ግምት መሸበር የለበትም።"
    },
    "truthEn": {
      "contextSummary": "1 Thessalonians 5:19-22 provides a framework for testing claims of spiritual revelation against Scripture, retaining the good and rejecting the false.",
      "surroundingVerses": "Jesus ate with tax collectors and prostitutes; the Pharisees accused Him of looking evil, yet Christ engaged sinners without committing evil.",
      "timelessPrinciple": "Believers must flee actual moral and doctrinal evil, rather than living in paralyzed fear of false impressions created by legalistic observers."
    },
    "crossReferences": [
      {
        "ref": "1 ዮሐንስ 4:1",
        "noteAm": "«ወዳጆች ሆይ፥ መንፈስን ሁሉ አትመኑ፥ ነገር ግን መናፍስት ከእግዚአብሔር ሆነው እንደ ሆነ መርምሩ፤ ብዙዎች ሐሰተኞች ነቢያት ወደ ዓለም ወጥተዋልና»",
        "noteEn": "“Beloved, do not believe every spirit, but test the spirits to see whether they are from God.”"
      },
      {
        "ref": "ሐዋርያት 17:11",
        "noteAm": "«ነገሩ እንደዚሁ ይሆንን? ብለው ዕለት ዕለት መጻሕፍትን እየመረመሩ ቃሉን በሙሉ ፈቃድ ተቀበሉ»",
        "noteEn": "“Examining the Scriptures daily to see if these things were so.”"
      },
      {
        "ref": "ዕብራውያን 5:14",
        "noteAm": "«ጠንካራ ምግብ ግን መልካሙንና ክፉውን ለመለየት በማገልገል የለመደውን ልቡና ላላቸው ለፍጹማን ሰዎች ነው»",
        "noteEn": "“Solid food is for the mature, for those who have their powers of discernment trained by constant practice to distinguish good from evil.”"
      }
    ]
  },
  {
    "id": "capsule-b53",
    "bookNr": 53,
    "chapter": 3,
    "verseStart": 10,
    "verseEnd": 10,
    "verseRefAm": "2ኛ ወደ ተሰሎንቄ ሰዎች 3:10",
    "verseRefEn": "2 Thessalonians 3:10",
    "verseTextAm": "ደግሞ ከእናንተ ጋር ሳለን። ሊሠራ የማይወድ አይብላ ብለን አዘናችሁ ነበርና።",
    "verseTextEn": "For even when we were with you, this we commanded you, that if any would not work, neither should he eat.",
    "titleAm": "ሊሠራ የማይወድ አይብላ — ድሆችን ማግለል ወይስ ሰነፎችን መገሠጽ?",
    "titleEn": "If Anyone Will Not Work, Let Him Not Eat — Denying Charity vs Rebuking Idle Meddlers",
    "taglineAm": "ጳውሎስ ሥራ ፈትተው በሰው ወሬ የሚኖሩትን የገሰጸበት ቃል ዛሬ ድሆችንና የታመሙትን ለመጨቆን ሲጣመም",
    "taglineEn": "Paul’s rebuke of able-bodied end-times loafers weaponized to deny mercy to the sick, disabled, and unemployed",
    "eraAm": "የተሰሎንቄ የሐሰት ፍጻሜ ትምህርትና የስንፍና ችግር",
    "eraEn": "Eschatological Fanaticism & Idleness at Thessalonica",
    "locationAm": "ከቆሮንቶስ ወደ ተሰሎንቄ የተላከ ሁለተኛ ደብዳቤ",
    "locationEn": "Second Letter to Thessalonica",
    "yearApprox": "51 ዓ.ም.",
    "keyIcon": "🍞",
    "sceneAm": {
      "setting": "በተሰሎንቄ አንዳንድ አማኞች «የጌታ ቀን ደርሷል፤ ዓለም ልታልፍ ነው» በሚል የሐሰት ወሬ ስራቸውን አቁመው በሌሎች አማኞች ኪስ መኖር በጀመሩበት ወቅት።",
      "dailyLife": "እነዚህ ስራ ፈቶች በየቤቱ እየዞሩ ወሬ ያወሩ፣ በሰው ጉዳይ ጣልቃ ይገቡና ማኅበሩን ይረብሹ ነበር።",
      "socialTension": "ጳውሎስና አብረውት የነበሩት ሌሊትና ቀን በጉልበታቸው እየሰሩ እንጀራቸውን ይበሉ እንደነበር በማስታወስ እነዚህን ሰነፎች ገሰጻቸው።"
    },
    "sceneEn": {
      "setting": "Fanatics in Thessalonica spread forged letters claiming the Day of the Lord had already arrived, quitting their jobs to wait on rooftops.",
      "dailyLife": "Refusing manual labor, these loafers sponged off working church members, meddling in everyone’s business as disruptive busybodies.",
      "socialTension": "Paul reminded them of his own model: weaving tents day and night so as not to be a financial burden to anyone."
    },
    "metaphorAm": {
      "origin": "«ሊሠራ የማይወድ አይብላ» ያለው መሥራት እየቻለ በስንፍናና በሐሰት መንፈሳዊነት ሰበብ የሌሎችን ድካም ለሚበዘብዝ ሰው እንጂ አቅም ለሌለው ድሃ አይደለም።",
      "linguisticNuance": "ቁልፍ ቃሉ «የማይወድ» (Does not WILL to work) የሚለው ነው እንጂ «መሥራት የማይችል» (Cannot work) አይደለም።",
      "crowdReaction": "ስራ ፈቶቹ በጸጥታ ሰርተው የገዛ እንጀራቸውን እንዲበሉ ታዘዙ (ቁ. 12)።"
    },
    "metaphorEn": {
      "origin": "Paul targeted stubborn, able-bodied parasites who exploited the church’s charity while refusing to work.",
      "linguisticNuance": "The Greek specifies willingness: \"If anyone is not WILLING to work (ou thelei ergazesthai)\"—not those physically disabled or unable to find work.",
      "crowdReaction": "The loafers were commanded in the name of Jesus Christ to do their work quietly and earn their own living (v. 12)."
    },
    "distortionAm": {
      "claim": "ጨካኝ ፖለቲከኞችና ሰዎች ይህን ጥቅስ ወስደው «መጽሐፍ ቅዱስ የማይሰራ አይብላ ይላል፤ ስለዚህ ለተራቡት፣ ለአረጋውያንና ለታመሙት ምግብና እርዳታ መስጠት ስህተት ነው» ይላሉ።",
      "damage": "እውነተኛ ድሆችንና ረዳት የሌላቸውን በጭካኔ ያስርባል፤ የክርስቶስን የምሕረትና የፍቅር ወንጌል ያጠፋል።"
    },
    "distortionEn": {
      "claim": "Hard-hearted politicians and individuals quote this to shut down soup kitchens and deny welfare to disabled, sick, or laid-off people.",
      "damage": "It twists an apostolic rule against manipulative busybodies into cruel indifference toward genuinely vulnerable and suffering human beings."
    },
    "truthAm": {
      "contextSummary": "2 ተሰሎንቄ 3:6-15 ስራ ፈትተው በሰው ወሬ የሚኖሩ ሰነፎችን ማረም እንጂ መበለቶችንና ችግረኞችን መርዳት እንደማይከለክል ያረጋግጣል።",
      "surroundingVerses": "ወዲያው በቁጥር 13 ላይ «እናንተ ግን፥ ወንድሞች ሆይ፥ መልካም ሥራን ለመሥራት አትታክቱ» በማለት ለተቸገሩት ቸርነት ማድረግን አዟል።",
      "timelessPrinciple": "ክርስቲያን በጉልበቱ ሰርቶ የገዛ እንጀራውን መብላትና ለተቸገረው ማካፈል አለበት፤ ማኅበረሰቡም ደካሞችንና ድሆችን በምሕረት መደገፍ ይገባዋል።"
    },
    "truthEn": {
      "contextSummary": "2 Thessalonians 3 confronts disruptive freeloaders abusing church generosity while upholding diligent labor as a Christian witness.",
      "surroundingVerses": "Verse 13 immediately balances the rule: \"As for you, brothers, do not grow weary in doing good\" to genuine sufferers.",
      "timelessPrinciple": "Able-bodied believers must labor honestly to provide for themselves and share with the needy, while the church extends mercy to the destitute."
    },
    "crossReferences": [
      {
        "ref": "ኤፌሶን 4:28",
        "noteAm": "«የሰረቀ ከእንግዲህ ወዲህ አይስረቅ፥ ነገር ግን ለጎደለው የሚያካፍለው እንዲኖረው በገዛ እጆቹ መልካምን እየሠራ ይድከም»",
        "noteEn": "“Let the thief no longer steal, but rather let him labor, doing honest work with his own hands, so that he may have something to share with anyone in need.”"
      },
      {
        "ref": "1 ጢሞቴዎስ 5:8",
        "noteAm": "«ነገር ግን ማንም ስለ ራሱ ሰዎች ይልቁንም ስለ ቤተሰቦቹ የማያስብ ቢሆን፥ ሃይማኖትን የካደ ከማያምንም ሰው ይልቅ የሚከፋ ነው»",
        "noteEn": "“If anyone does not provide for his relatives, and especially for members of his household, he has denied the faith and is worse than an unbeliever.”"
      },
      {
        "ref": "ያዕቆብ 2:15-16",
        "noteAm": "«ወንድም ወይም እኅት ራቁታቸውን ቢሆኑ የዕለት ምግብም ቢጎድላቸው... ለሰውነታቸው ግን የሚያስፈልጉትን ባትሰጧቸው ምን ይጠቅማቸዋል?»",
        "noteEn": "“If a brother or sister is poorly clothed and lacking in daily food... and you do not give them the things needed for the body, what good is that?”"
      }
    ]
  },
  {
    "id": "capsule-b54",
    "bookNr": 54,
    "chapter": 6,
    "verseStart": 10,
    "verseEnd": 10,
    "verseRefAm": "1ኛ ወደ ጢሞቴዎስ 6:10",
    "verseRefEn": "1 Timothy 6:10",
    "verseTextAm": "ገንዘብን መውደድ የክፋት ሁሉ ሥር ነውና፥ አንዳንዶች ይህን ሲመኙ፥ ከሃይማኖት ተሳስተው በብዙ ሥቃይ ራሳቸውን ወጉ።",
    "verseTextEn": "For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows.",
    "titleAm": "ገንዘብን መውደድ የክፋት ሁሉ ሥር ነው",
    "titleEn": "The Love of Money is a Root of All Kinds of Evil",
    "taglineAm": "ወንጌልን የትርፍ መነገጃ ያደረጉትን የኤፌሶን ሰባኪዎች ማጋለጥ",
    "taglineEn": "Exposing false teachers who treat godliness as a means of financial gain",
    "eraAm": "የኤፌሶን የሐሰት አስተማሪዎችና የወንጌል ንግድ ዘመን",
    "eraEn": "Pastoral Oversight at Ephesus",
    "locationAm": "ከመቄዶንያ ወደ ኤፌሶን የተላከ መመሪያ",
    "locationEn": "Letter to Timothy in Ephesus",
    "yearApprox": "64 ዓ.ም.",
    "keyIcon": "🪙",
    "sceneAm": {
      "setting": "ወጣቱ ጢሞቴዎስ በኤፌሶን ቤተክርስቲያን ያለውን ትምህርት እንዲያስተካክል ጳውሎስ በላከው ወቅት።",
      "dailyLife": "በኤፌሶን የነበሩ የሐሰት አስተማሪዎች ሃይማኖትን ለግል ሀብት ማግኛ (ንግድ) ያደርጉ ነበር።",
      "socialTension": "ጳውሎስ «እግዚአብሔርን መምሰል ማትረፊያ መስሎ የሚታያቸው አእምሮአቸው የጠፋባቸው ሰዎች» በማለት አጋለጣቸው።"
    },
    "sceneEn": {
      "setting": "Timothy leads the strategic church at Ephesus amid rising theological and financial corruption.",
      "dailyLife": "Itinerant charlatans peddled religious myths and secret genealogies for lucrative speaker fees.",
      "socialTension": "Paul warns that these wolves imagine \"that godliness is a means of financial gain\" (1 Tim 6:5)."
    },
    "metaphorAm": {
      "origin": "ገንዘብ በራሱ ገለልተኛ የልውውጥ መሣሪያ ነው፤ ክፋት የሚመነጨው ግን በልብ ውስጥ ካለው ስግብግብነትና የገንዘብ ፍቅር ነው።",
      "linguisticNuance": "«ፊላርጊሪያ» (የገንዘብ ፍቅር) — ችግሩ ገንዘቡ ሳይሆን ገንዘብን መውደድና ማምለክ ነው።",
      "crowdReaction": "ጢሞቴዎስና አማኞች ከእንዲህ ዓይነት ስግብግብ አስተማሪዎች እንዲርቁ ጥብቅ መመሪያ ተሰጣቸው።"
    },
    "metaphorEn": {
      "origin": "Money is an inanimate medium of exchange; the spiritual venom resides in the idolatrous affection of the human heart.",
      "linguisticNuance": "The Greek is \"philargyria\" (the love of silver/money), not currency itself; and it is \"a root of all kinds of evil,\" not the sole origin of every single evil.",
      "crowdReaction": "Timothy was charged as a man of God to flee this covetousness and pursue righteousness."
    },
    "distortionAm": {
      "claim": "አንዳንዶች «ገንዘብ ራሱ እርጉም ነው፤ ክርስቲያን ሀብታም መሆን የለበትም፤ ገንዘብ ካለህ ወደ ሲኦል ትሄዳለህ» በማለት ድህነትን እንደ ቅድስና ይቆጥራሉ።",
      "damage": "ሰዎች በትጋት እንዳይሰሩ ያደርጋል፤ ሀብታም የሆኑ ቅን አማኞችን ያሳፍራል፤ የስግብግብነትን እውነተኛ ምንጭ ይሸፍናል።"
    },
    "distortionEn": {
      "claim": "Often misquoted as \"Money is the root of all evil,\" leading to an unbiblical ascetic guilt that condemns legitimate wealth and business.",
      "damage": "Blinds people to the true spiritual danger: one can be dirt-poor and thoroughly consumed by the love of money, or wealthy and deeply generous."
    },
    "truthAm": {
      "contextSummary": "1 ጢሞቴዎስ 6:6-10 የሚያስተምረው እውነተኛ ማትረፊያ ኑሮዬ ይበቃኛል ከማለት ጋር እግዚአብሔርን መምሰል መሆኑን ነው።",
      "surroundingVerses": "በቁጥር 17-19 ላይ ጳውሎስ ባለጠጎች «በሚሰጠን በአምላክ እንዲታመኑ እንጂ በትዕቢት እንዳይኖሩ... በበጎ ሥራ ባለጠጎች እንዲሆኑ» አዟል እንጂ ሀብታቸውን እንዲጥሉ አላዘዘም።",
      "timelessPrinciple": "ገንዘብ የአገልግሎት መሣሪያ እንጂ ልብ የሚሰቀልበት አምላክ አይደለም፤ ዋናው ነገር በክርስቶስ ረክቶ መኖር ነው።"
    },
    "truthEn": {
      "contextSummary": "The text targets the soul-destroying trap of covetousness: \"those who desire to be rich fall into temptation, into a snare\" (v. 9).",
      "surroundingVerses": "In verses 17-19, Paul commands the wealthy not to be haughty or trust in uncertain riches, but to be rich in good works and generous.",
      "timelessPrinciple": "Wealth is a dangerous stewardship to be deployed generously for God’s kingdom; loving it destroys the soul."
    },
    "crossReferences": [
      {
        "ref": "ዕብራውያን 13:5",
        "noteAm": "«አካሄዳችሁ ገንዘብን ያለ መውደድ ይሁን፥ ያላችሁም ይበቃችኋል በሉ»",
        "noteEn": "“Keep your life free from love of money, and be content with what you have.”"
      },
      {
        "ref": "ሉቃስ 12:15",
        "noteAm": "«ተጠንቀቁ፥ ከመጎምጀትም ሁሉ ተጠበቁ፤ የሰው ሕይወት በገንዘቡ ብዛት አይደለምና»",
        "noteEn": "“Take care, and be on your guard against all covetousness, for one’s life does not consist in the abundance of his possessions.”"
      },
      {
        "ref": "ምሳሌ 30:8-9",
        "noteAm": "«ድህነትንና ባለጠግነትን አትስጠኝ፤ የሚያስፈልገኝን እንጀራ መግበኝ»",
        "noteEn": "“Give me neither poverty nor riches; feed me with the food that is needful for me.”"
      }
    ]
  },
  {
    "id": "capsule-b55",
    "bookNr": 55,
    "chapter": 1,
    "verseStart": 7,
    "verseEnd": 7,
    "verseRefAm": "2ኛ ወደ ጢሞቴዎስ 1:7",
    "verseRefEn": "2 Timothy 1:7",
    "verseTextAm": "እግዚአብሔር የኃይልና የፍቅር ራስንም የመግዛት መንፈስ እንጂ የፍርሃት መንፈስ አልሰጠንምና።",
    "verseTextEn": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    "titleAm": "እግዚአብሔር የኃይልና የፍቅር ራስንም የመግዛት መንፈስ ሰጠን — የደፋሮች እብሪት ወይስ በስደት የመጽናት ድፍረት?",
    "titleEn": "Not a Spirit of Fear — Reckless Bravado vs Holy Courage under Martyrdom",
    "taglineAm": "ጳውሎስ ለሞት እየተዘጋጀ ለጢሞቴዎስ የሰጠው የሰማዕትነት ጥሪ ዛሬ ጥንቃቄንና የሕክምና እርዳታን ለመናቅ ሲጣመም",
    "taglineEn": "Paul’s farewell call to embrace martyrdom without shame co-opted to brand basic wisdom and medicine as \"fear\"",
    "eraAm": "የኔሮ ስደትና የጳውሎስ የመጨረሻ ሰማዕትነት ዋዜማ",
    "eraEn": "Neronian Bloodshed & Paul’s Final Farewell",
    "locationAm": "ከማመርቲን ጨለማ እስር ቤት (ሮም)",
    "locationEn": "Mamertine Prison Dungeon, Rome",
    "yearApprox": "67 ዓ.ም.",
    "keyIcon": "🔥",
    "sceneAm": {
      "setting": "ንጉሥ ኔሮ ሮምን ካቃጠለ በኋላ ክርስቲያኖችን በግፍ እየፈጀ ሳለ፤ ጳውሎስ በቀዝቃዛ የከርሰ ምድር እስር ቤት በአንገት መቆረጥ ሊገደል ጥቂት ቀናት በቀሩት ወቅት።",
      "dailyLife": "በሮም ብዙ ክርስቲያኖች በፍርሃት ተውጠው ጳውሎስን ጥለው ሸሽተው ነበር (ቁ. 15)፤ ጢሞቴዎስም በኤፌሶን ወጣትና ዓይናፋር ስለነበር ስጋት ገብቶት ነበር።",
      "socialTension": "ጳውሎስ «በጌታችን ምስክርነት ወይም በእኔ በእስረኛው አትፈር፤ ነገር ግን እንደ እግዚአብሔር ኃይል መጠን ለወንጌል አብረኸኝ መከራን ተቀበል» በማለት አበረታታው (ቁ. 8)።"
    },
    "sceneEn": {
      "setting": "Nero’s horrific pogrom was slaughtering Christians; Paul sat freezing in the Mamertine dungeon awaiting public beheading.",
      "dailyLife": "Terrified by arrests, all of Asia deserted Paul (v. 15); young Timothy was naturally timid, sensitive, and weeping (v. 4).",
      "socialTension": "Paul passed the apostolic torch, commanding Timothy to embrace suffering rather than shrinking back in terror from imperial persecution."
    },
    "metaphorAm": {
      "origin": "«የፍርሃት መንፈስ» ማለት ለወንጌል መከራን ከመቀበል ወደ ኋላ የሚያፈገፍግ ፈሪነት ነው፤ እግዚአብሔር ግን በውስጣችን የሰጠው የመንፈስ ቅዱስ ኃይል፣ ፍቅርና ራስን የመግዛት (ጥበብ) ነው።",
      "linguisticNuance": "«ሶፍሮኒስሞስ» (ራስን መግዛት/መልካም አእምሮ) — እውነተኛ ድፍረት ጥበብንና ማስተዋልን የተላበሰ እንጂ እብሪተኛ ስሜታዊነት አይደለም።",
      "crowdReaction": "ጢሞቴዎስ እንባውን አበሰ፤ ለወንጌል እስከ መጨረሻው በታማኝነት ቆመ።"
    },
    "metaphorEn": {
      "origin": "“Spirit of fear” (deilia) refers to cowardly shrinking back from shame and martyrdom for the name of Jesus.",
      "linguisticNuance": "The antidote is threefold: power (dynamis), love (agape), and self-control / sound mind (sophronismos)—disciplined biblical wisdom.",
      "crowdReaction": "Timothy wiped away his tears, rekindled the gift of God, and boldly proclaimed Christ in the face of imperial terror."
    },
    "distortionAm": {
      "claim": "ብዙዎች ይህን ጥቅስ ወስደው «ክርስቲያን ከታመመ መድኃኒት አይወስድም፣ ጥንቃቄ አያደርግም፤ ጥንቃቄ ማድረግ የፍርሃት መንፈስ ነው» በማለት ሰዎችን ወደ እብሪት ይገፋሉ።",
      "damage": "ሰዎችን ያለ ጥበብ ለአደጋ ያጋልጣል፤ የቁጥር 7ን «ራስን የመግዛትና የጥበብ» (sound mind) መለኮታዊ ስጦታ ይጥሳል።"
    },
    "distortionEn": {
      "claim": "Weaponized to shame Christians who wear seatbelts, take doctor-prescribed medicine, or exercise prudence: \"If you take medicine, you have a spirit of fear!\"",
      "damage": "It confuses foolhardy presumption with faith, completely ignoring the third divine gift in the verse: a sound, sober, prudent mind."
    },
    "truthAm": {
      "contextSummary": "2 ጢሞቴዎስ 1:7-8 ስለ ክርስቶስ መከራንና ስደትን ያለ ኀፍረት በድፍረት ለመቀበል የተሰጠ የተቀደሰ አደራ ነው።",
      "surroundingVerses": "ጳውሎስ ራሱ በ1 ጢሞቴዎስ 5:23 ላይ ለጢሞቴዎስ «ስለ ሆድህና ስለ ድካምህ ጥቂት የወይን ጠጅ ጠጣ» በማለት የሕክምና ጥበብን እንዳዘዘው መዘንጋት የለብንም።",
      "timelessPrinciple": "እውነተኛ ድፍረት ለእግዚአብሔር እውነት በቅድስናና በጥበብ መቆም ነው እንጂ ሰዎችንና እግዚአብሔርን መፈታተን አይደለም።"
    },
    "truthEn": {
      "contextSummary": "2 Timothy 1:7 summons believers to unashamed boldness in Gospel proclamation amidst violent persecution, not reckless medical defiance.",
      "surroundingVerses": "Paul himself prescribed medical treatment for Timothy in 1 Timothy 5:23: \"Use a little wine for the sake of your stomach and your frequent ailments.\"",
      "timelessPrinciple": "God delivers us from cowardly compromise, giving us supernatural love, courage to endure suffering, and a sound, sober mind of biblical wisdom."
    },
    "crossReferences": [
      {
        "ref": "2 ጢሞቴዎስ 1:8",
        "noteAm": "«እንግዲህ በጌታችን ምስክርነት ወይም በእስረኛው በእኔ አትፈር፥ ነገር ግን እንደ እግዚአብሔር ኃይል መጠን ስለ ወንጌል አብረኸኝ መከራን ተቀበል»",
        "noteEn": "“Therefore do not be ashamed of the testimony about our Lord, nor of me his prisoner, but share in suffering for the gospel by the power of God.”"
      },
      {
        "ref": "ሮሜ 8:15",
        "noteAm": "«አባ አባት ብለን የምንጮኽበትን የልጅነት መንፈስ ተቀበላችሁ እንጂ እንደገና ለፍርሃት የባርነትን መንፈስ አልተቀበላችሁምና»",
        "noteEn": "“For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons.”"
      },
      {
        "ref": "1 ዮሐንስ 4:18",
        "noteAm": "«ፍጹም ፍቅር ፍርሃትን አውጥቶ ይጥላል እንጂ በፍቅር ፍርሃት የለም፤ ፍርሃት ቅጣት አለውና»",
        "noteEn": "“There is no fear in love, but perfect love casts out fear. For fear has to do with punishment.”"
      }
    ]
  },
  {
    "id": "capsule-b56",
    "bookNr": 56,
    "chapter": 1,
    "verseStart": 12,
    "verseEnd": 13,
    "verseRefAm": "ወደ ቲቶ 1:12-13",
    "verseRefEn": "Titus 1:12-13",
    "verseTextAm": "የገዛ ራሳቸው ነቢይ የሆነ ከእነርሱ አንዱ። የቀርጤስ ሰዎች ዘወትር ውሸተኞች፥ ክፉዎች አራዊት፥ በላተኞች፥ ሥራ ፈቶች ናቸው ብሎአል። ",
    "verseTextEn": "One of themselves, even a prophet of their own, said, The Cretians are alway liars, evil beasts, slow bellies. This witness is true. Wherefore rebuke them sharply, that they may be sound in the faith;",
    "titleAm": "የቀርጤስ ሰዎች ሁልጊዜ ውሸተኞች ናቸው — የዘር ስድብ ወይስ የገዛ ገጣሚያቸው ጥቅስ?",
    "titleEn": "Cretans are Always Liars — Ethnic Prejudice vs Quoting Local Epimenides Paradox",
    "taglineAm": "ጳውሎስ የቀርጤስን ነዋሪዎች ባህል ያጋለጠበት ጥቅስ ዛሬ ለዘረኝነትና ለሕዝብ ጥላቻ ሲጣመም",
    "taglineEn": "Paul citing the famous Epimenides paradox to confront deceptive false teachers weaponized into racist stereotypes",
    "eraAm": "የቀርጤስ ደሴት ቤተክርስቲያን አመራር ዘመን",
    "eraEn": "Pastoral Leadership in Crete",
    "locationAm": "ወደ ቀርጤስ ደሴት የተላከ መመሪያ",
    "locationEn": "Island of Crete",
    "yearApprox": "63 ዓ.ም.",
    "keyIcon": "🏝️",
    "sceneAm": {
      "setting": "ቲቶ በቀርጤስ ደሴት አብያተ ክርስቲያናት ውስጥ ሽማግሌዎችን እንዲሾምና የቀሩትን ስርዓቶች እንዲያስተካክል ጳውሎስ ባዘዘው ወቅት።",
      "dailyLife": "ቀርጤሳውያን በጥንቱ የግሪክ ዓለም በውሸት፣ በወንበዴነትና በስግብግብነት ዝነኛ ነበሩ፤ የገዛ ባለቅኔአቸው ኤፒሜኒደስ (Epimenides) ይህን ጽፎት ነበር።",
      "socialTension": "በቤተክርስቲያኒቱ ውስጥ የአይሁድ ተረት የሚያወሩና በገንዘብ ትርፍ ቤቶችን የሚያፈርሱ አታላዮች ነበሩ (ቁ. 10-11)።"
    },
    "sceneEn": {
      "setting": "Titus stationed on the rugged Mediterranean island of Crete to appoint godly elders and silence subversive false teachers.",
      "dailyLife": "In classical Greco-Roman culture, Cretans were proverbial for deceit, piracy, and drunkenness (a local Greek poet, Epimenides, coined the famous line).",
      "socialTension": "Greedy deceivers were upsetting whole families, teaching shameful falsehood for illicit monetary gain (Titus 1:11)."
    },
    "metaphorAm": {
      "origin": "«የቀርጤስ ሰዎች ሁልጊዜ ውሸተኞች፥ ክፉዎች አራዊት፥ ቦዘኔዎች ሆዳሞች ናቸው» ያለው ጳውሎስ ራሱ ሳይሆን የገዛ አገራቸው ገጣሚ ኤፒሜኒደስ በ6ኛው መቶ ክፍለ ዘመን ዓ.ዓ. የተናገረው የታወቀ ምሳሌ ነው።",
      "linguisticNuance": "ጳውሎስ ይህን የጠቀሰው የአካባቢውን የባህል በሽታ ለመግለጽና «ስለዚህ በእምነት ጤናሞች እንዲሆኑ በብርቱ ገሥጻቸው» (ቁ. 13) ለማለት ነው።",
      "crowdReaction": "ቀርጤሳውያን አማኞች አረማዊ ልማዳቸውን ትተው በቅድስናና በታማኝነት እንዲመላለሱ ተበረታቱ።"
    },
    "metaphorEn": {
      "origin": "Paul was not venting personal racial hatred; he was quoting a celebrated Cretan philosopher (Epimenides of Knossos, 6th c. BC) renowned in classical logic.",
      "linguisticNuance": "Paul cited their own cultural prophet to diagnose a systemic cultural sickness: \"Therefore rebuke them sharply, that they may be sound in the faith\" (v. 13).",
      "crowdReaction": "Cretan converts were challenged to break free from generational vices and live as adorned examples of the Gospel."
    },
    "distortionAm": {
      "claim": "ዘረኞች ይህን ጥቅስ ወስደው «መጽሐፍ ቅዱስ ራሱ አንዳንድ ሕዝቦችና ጎሣዎች በተፈጥሯቸው ውሸታም፣ ሌባና አውሬ ናቸው ይላል» በማለት የጎሣ መድልዎን ያጸድቃሉ።",
      "damage": "የክርስቶስን አዳኝ ጸጋ ያቃልላል፤ መጽሐፍ ቅዱስን ለዘረኝነትና ለጥላቻ መሣሪያ ያደርጋል።"
    },
    "distortionEn": {
      "claim": "Bigots cite Titus 1:12 to prove that the Bible sanctions ethnic generalizations and racial supremacy over specific nations.",
      "damage": "It sanctifies sinful racial prejudice, denies the transforming power of the Gospel for every culture, and misinterprets an ancient philosophical quotation."
    },
    "truthAm": {
      "contextSummary": "የቲቶ መልእክት የወንጌል ጸጋ ሰዎችን ከማንኛውም የባህል ብልሹነት አውጥቶ በቅድስናና በጽድቅ እንዲኖሩ እንደሚያስተምር ያረጋግጣል (ቲቶ 2:11-12)።",
      "surroundingVerses": "በቲቶ 2:11 ላይ «ሰዎችን ሁሉ የሚያድን የእግዚአብሔር ጸጋ ተገልጦአልና» በማለት ማዳኑ ለሁሉም ሕዝቦች ያለ አድልዎ መሆኑን ይመሰክራል።",
      "timelessPrinciple": "የእግዚአብሔር ጸጋ ማንኛውንም የባህል ክፋትና ኃጢአት ሰብሮ አዲስ ቅዱስ ሕዝብ የማድረግ ኃይል አለው።"
    },
    "truthEn": {
      "contextSummary": "The Epistle to Titus celebrates the transforming power of God’s grace to redeem people out of pagan depravity into zealous lovers of good works.",
      "surroundingVerses": "Titus 2:11 shatters ethnocentrism: \"For the grace of God has appeared, bringing salvation for all people.\"",
      "timelessPrinciple": "The Gospel confronts sinful cultural patterns in every society, redeeming individuals from every background to walk in holiness."
    },
    "crossReferences": [
      {
        "ref": "ቲቶ 2:11-12",
        "noteAm": "«ሰዎችን ሁሉ የሚያድን የእግዚአብሔር ጸጋ ተገልጦአልና፤ ይህም ጸጋ፥ ኃጢአተኝነትንና ዓለማዊን ምኞት ክደን... ራሳችንን በመግዛትና በጽድቅ እግዚአብሔርንም በመምሰል እንድንኖር ያስተምረናል»",
        "noteEn": "“For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions.”"
      },
      {
        "ref": "ሐዋርያት 10:34-35",
        "noteAm": "«እግዚአብሔር ለሰው ፊት እንዳያደላ በእውነት አስተዋልሁ፤ ነገር ግን በአሕዛብ ሁሉ እርሱን የሚፈራና ጽድቅን የሚያደርግ በእርሱ የተወደደ ነው»",
        "noteEn": "“Truly I understand that God shows no partiality, but in every nation anyone who fears him and does what is right is acceptable to him.”"
      },
      {
        "ref": "ቆላስይስ 3:11",
        "noteAm": "«በዚያም የግሪክ ሰውና አይሁዳዊ... የዱር ሰውም፥ እስኩቴስም፥ ባሪያም፥ ጨዋ ሰውም መሆን የለም፥ ነገር ግን ክርስቶስ ሁሉ ነው፥ በሁሉም ነው»",
        "noteEn": "“Here there is not Greek and Jew, barbarian, Scythian, slave, free; but Christ is all, and in all.”"
      }
    ]
  },
  {
    "id": "capsule-b57",
    "bookNr": 57,
    "chapter": 1,
    "verseStart": 15,
    "verseEnd": 16,
    "verseRefAm": "ወደ ፊልሞና 1:15-16",
    "verseRefEn": "Philemon 1:15-16",
    "verseTextAm": "ከእንግዲህ ወዲህ እንደ ባሪያ አይሆንም፥ ነገር ግን ለእኔ በተለየ የተወደደ ወንድም ከሆነ፥ ለአንተማ ይልቅ በስጋውም በጌታም ዘንድ ከባሪያ የሚሻል የተወደደ ወንድም እንዴት አይሆንም። እንግዲህ እንደ ባልንጀራ ብትቈጥረኝ፥ እንደ እኔ አድርገህ ተቀበለው።",
    "verseTextEn": "For perhaps he therefore departed for a season, that thou shouldest receive him for ever; Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord?",
    "titleAm": "እንደ ባሪያ ሳይሆን እንደ ተወደደ ወንድም — የባርነት ማጽደቂያ ወይስ የሮም ሥርዓት መናድ?",
    "titleEn": "No Longer as a Slave but a Beloved Brother — Pro-Slavery Myth vs Subversion of Roman Empire",
    "taglineAm": "ጳውሎስ የሸሸውን ባሪያ አናሲሞስን በክርስቶስ እኩል ወንድም አድርጎ የመለሰበት ድንቅ ታሪክ ዛሬ ባርነትን ይደግፋል ተብሎ ሲወቀስ",
    "taglineEn": "Paul’s radical gospel elevation of a runaway slave to equal brother twisted to claim the Bible endorses chattel slavery",
    "eraAm": "የሮም ባርነትና የክርስቲያናዊ ወንድማማችነት አብዮት",
    "eraEn": "Roman Slavery & Subversive Brotherhood",
    "locationAm": "ከሮም እስር ቤት ወደ ቆላስይስ የተላከ ደብዳቤ",
    "locationEn": "Written to Philemon in Colossae",
    "yearApprox": "62 ዓ.ም.",
    "keyIcon": "🕊️",
    "sceneAm": {
      "setting": "በሮም ኢምፓየር ከአንድ ሶስተኛ በላይ የሚሆነው ሕዝብ ባሪያ በነበረበትና የሸሸ ባሪያ በሮም ሕግ በግንባሩ በጋለ ብረት ታትሞ ወይም ተሰቅሎ በሚገደልበት ዘመን።",
      "dailyLife": "አናሲሞስ ከጌታው ከፊልሞና ቤት ሰርቆ ወደ ሮም ከሸሸ በኋላ ጳውሎስን በእስር ቤት አግኝቶ ክርስቶስን አመነ።",
      "socialTension": "ጳውሎስ አናሲሞስን ወደ ፊልሞና ሲመልሰው በባለቤትነት ሳይሆን «እንደ ተወደደ ወንድም፥ እንደ እኔ አድርገህ ተቀበለው» በማለት የሮምን ማኅበራዊ መደብ ሰበረው።"
    },
    "sceneEn": {
      "setting": "Over a third of the Roman Empire were slaves; runaway slaves (fugitivi) faced branding on the forehead with \"F\" or crucifixions.",
      "dailyLife": "Onesimus stole from his master Philemon and escaped into the crowded anonymity of Rome, where he met Paul in prison and was converted.",
      "socialTension": "Paul sent Onesimus back, not to return to chains, but demanding Philemon receive him as a beloved brother in Christ, equal to Paul himself."
    },
    "metaphorAm": {
      "origin": "«ከእንግዲህ ወዲህ እንደ ባሪያ ሳይሆን፥ ከባሪያ የሚበልጥ እንደ ተወደደ ወንድም» — ክርስቶስ በጌታና በባሪያ መካከል የነበረውን የመደብ ግድግዳ አፈረሰው።",
      "linguisticNuance": "ጳውሎስ ለፊልሞና «እንደ እኔ አድርገህ ተቀበለው፤ የበደለህ ነገር ቢኖር በእኔ ላይ ቁጠረው፥ እኔ እከፍላለሁ» በማለት የክርስቶስን የዋጅነት ምሳሌ ሆነ።",
      "crowdReaction": "ፊልሞና አናሲሞስን በደስታ እንደ ወንድም ተቀበለው፤ አናሲሞስም በኋላ በኤፌሶን ታላቅ የቤተክርስቲያን መሪ ሆነ።"
    },
    "metaphorEn": {
      "origin": "“No longer as a bondservant but more than a bondservant, as a beloved brother”—dynamited the entire legal premise of ancient chattel slavery from within.",
      "linguisticNuance": "Paul tells Philemon: \"Receive him as you would receive me. If he has wronged you or owes you anything, charge that to my account. I will repay it.\"",
      "crowdReaction": "Philemon embraced Onesimus as a brother; church tradition records Onesimus later serving as bishop of Ephesus."
    },
    "distortionAm": {
      "claim": "ተቺዎች «መጽሐፍ ቅዱስ ባርነትን አይደግፍምን? ጳውሎስ የሸሸውን ባሪያ ወደ ጌታው መለሰው እንጂ ነጻ አላወጣውም» በማለት ክርስትናን ይከሳሉ።",
      "damage": "የወንጌልን አብዮታዊ የፍቅር ኃይል ያደበዝዛል፤ ጳውሎስ የሮምን አስፈሪ የባርነት ሥርዓት በወንድማማችነት ፍቅር እንዴት እንዳፈረሰው ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Skeptics claim the New Testament condones slavery because Paul sent Onesimus back instead of launching an armed political rebellion.",
      "damage": "It ignores first-century legal reality (sending him without legal release meant fugitive death) and misses how Christian brotherhood planted the seeds that destroyed slavery."
    },
    "truthAm": {
      "contextSummary": "የፊልሞና መልእክት በክርስቶስ የተገኘው አዲስ ማንነት ማኅበራዊ፣ ዘራዊና መደባዊ ልዩነቶችን ሁሉ በፍቅር እንደሚሽር የሚያረጋግጥ ነው።",
      "surroundingVerses": "ጳውሎስ በቁጥር 21 ላይ «ከምልህ ይልቅ አብልጠህ እንድታደርግ አውቄአለሁ» በማለት ፊልሞና አናሲሞስን ሙሉ በሙሉ ነጻ እንደሚያወጣው ፍንጭ ሰጥቷል።",
      "timelessPrinciple": "በክርስቶስ ማንም የበላይ ወይም የበታች የለም፤ ሁላችንም በአንድ መስቀል ስር በእኩልነት የተወደድን የእግዚአብሔር ልጆች ነን።"
    },
    "truthEn": {
      "contextSummary": "Philemon is a masterwork of pastoral subversion: transforming a slave into a beloved brother and commanding a master to treat him as Christ Himself.",
      "surroundingVerses": "Verse 21 hints at full manumission: \"Confident of your obedience, I write to you, knowing that you will do even more than I say.\"",
      "timelessPrinciple": "In Christ, all worldly hierarchies of exploitation are demolished; every human being possesses equal dignity as an image-bearer redeemed by blood."
    },
    "crossReferences": [
      {
        "ref": "ገላትያ 3:28",
        "noteAm": "«አይሁዳዊ ወይም የግሪክ ሰው የለም፥ ባሪያ ወይም ጨዋ ሰው የለም፥ ወንድም ሴትም የለም፤ ሁላችሁ በክርስቶስ ኢየሱስ አንድ ሰው ናችሁና»",
        "noteEn": "“There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.”"
      },
      {
        "ref": "1 ቆሮንቶስ 7:22",
        "noteAm": "«ባሪያ ሆኖ በጌታ የተጠራ የጌታ ነጻ ሰው ነውና፤ እንዲሁም ጨዋ ሆኖ የተጠራ የክርስቶስ ባሪያ ነው»",
        "noteEn": "“For he who was called in the Lord as a slave is a freedman of the Lord. Likewise he who was free when called is a slave of Christ.”"
      },
      {
        "ref": "ቆላስይስ 4:9",
        "noteAm": "«ከእናንተ ወገን ከሆነው ከታመነውና ከተወደደው ወንድም ከአናሲሞስ ጋር ሰደድሁት»",
        "noteEn": "“And with him Onesimus, our faithful and beloved brother, who is one of you.”"
      }
    ]
  },
  {
    "id": "capsule-b58",
    "bookNr": 58,
    "chapter": 6,
    "verseStart": 4,
    "verseEnd": 6,
    "verseRefAm": "ወደ እብራውያን 6:4-6",
    "verseRefEn": "Hebrews 6:4-6",
    "verseTextAm": "አንድ ጊዜ ብርሃን የበራላቸውን ሰማያዊውንም ስጦታ የቀመሱትን ከመንፈስ ቅዱስም ተካፋዮች ሆነው የነበሩትን መልካሙንም የእግዚአብሔርን ቃልና ሊመጣ ያለውን የዓለም ኃይል የቀመሱትን በኋላም የካዱትን እንደገና ለንስሐ እነርሱን ማደስ የማይቻል ነው፤ ለራሳቸው የእግዚአብሔርን ልጅ ይሰቅሉታልና ያዋርዱትማልና።",
    "verseTextEn": "For it is impossible for those who were once enlightened, and have tasted of the heavenly gift, and were made partakers of the Holy Ghost, And have tasted the good word of God, and the powers of the world to come, If they shall fall away, to renew them again unto repentance; seeing they crucify to themselves the Son of God afresh, and put him to an open shame.",
    "titleAm": "ዳግመኛ ለንስሐ ሊታደሱ የማይቻል ነው — የመዳን እርግጠኝነት ማጣት ወይስ ክርስቶስን ትቶ ወደ እንስሳት መሥዋዕት መመለስ?",
    "titleEn": "Impossible to Restore to Repentance — Paranoia of Losing Salvation vs Total Apostasy to Temple Cult",
    "taglineAm": "ጸሐፊው ወደ ብሉይ እንስሳት መሥዋዕት እንዳይመለሱ ያስጠነቀቀው ቃል ዛሬ በድካም የወደቁ አማኞችን ወደ ተስፋ መቁረጥ ሲጥል",
    "taglineEn": "A terrifying warning against trading Christ for obsolete animal sacrifices twisted into terrorizing struggling believers",
    "eraAm": "የኢየሩሳሌም መቅደስ መፍረስ ዋዜማና የአይሁድ ክርስቲያኖች ፈተና",
    "eraEn": "Pre-70 AD Temple Crisis & Threat of Apostasy",
    "locationAm": "ወደ ዕብራውያን አማኞች ማኅበር የተላከ መልእክት",
    "locationEn": "To Jewish-Christian Assembly",
    "yearApprox": "66 ዓ.ም.",
    "keyIcon": "⚓",
    "sceneAm": {
      "setting": "በሮም ስደት የተነሳ የአይሁድ ክርስቲያኖች በቤተሰቦቻቸውና በማኅበረሰባቸው ተገፍተው የክርስቶስን መስቀል ትተው ወደ ደላላው የኢየሩሳሌም ቤተ መቅደስ ስርዓት ለመመለስ በተፈተኑበት ወቅት።",
      "dailyLife": "በኢየሩሳሌም መቅደስ በየቀኑ የበጎችና የበሬዎች ደም ይፈስ ነበር፤ አይሁዳውያንም ክርስቲያኖችን «የሚታይ መሠዊያና ካህን የላችሁም» እያሉ ያፌዙባቸው ነበር።",
      "socialTension": "ጸሐፊው ክርስቶስ ከእንስሳት መሥዋዕት ሁሉ የሚበልጥ ፍጹም ሊቀ ካህን መሆኑን አስረድቶ ወደ ኋላ መመለስ ራስን ለዘላለም ጥፋት አሳልፎ መስጠት እንደሆነ አስጠነቀቀ።"
    },
    "sceneEn": {
      "setting": "Jewish converts faced relentless societal ostracism, property confiscation, and familial shame, tempting them to retreat to the safety of the Levitical Temple cult.",
      "dailyLife": "The visible splendour of the Jerusalem Temple offered safety from Roman persecution, whereas Christianity seemed poor and lacked physical altars.",
      "socialTension": "The author warned that forsaking the finished atonement of Jesus to seek salvation in animal blood amounted to trampling the Son of God underfoot."
    },
    "metaphorAm": {
      "origin": "«አንድ ጊዜ የበሩትን... ሰማያዊውንም ስጦታ የቀመሱትን... ከወደቁ በኋላ እንደገና ለንስሐ ሊያድሷቸው አይቻልም» — ክርስቶስን አውቆ ሆን ብሎ ክዶ ወደ እንስሳት ደም የሚመለስ ሰው ሌላ ሁለተኛ የኃጢአት ስርየት የለውም ማለት ነው።",
      "linguisticNuance": "«የእግዚአብሔርን ልጅ ለራሳቸው እንደ ገና ይሰቅሉታልና፥ ያዋርዱትማልና» — ኢየሱስ እንደ ሐሰተኛ ወንጀለኛ ተሰቀለ ብለው ከአይሁድ አለቆች ጋር መስማማታቸው ነው።",
      "crowdReaction": "አንባቢዎቹ ደነገጡ፤ ነገር ግን በቁጥር 9 ላይ «ወዳጆች ሆይ፥ ምንም እንኳ እንዲህ ብንናገር፥ ስለ እናንተ ከመዳን ጋር የሚተባበረውን የሚሻለውን ነገር እናምናለን» በማለት አጽናናቸው።"
    },
    "metaphorEn": {
      "origin": "Apostasy here is not a struggling saint stumbling into moral weakness, but a deliberate, decisive public repudiation of Jesus Christ to embrace Judaism.",
      "linguisticNuance": "“Crucifying once again the Son of God on their own and holding him up to contempt”—siding publicly with the Sanhedrin that Jesus was a fraud.",
      "crowdReaction": "The author immediately reassures the congregation in verse 9: \"Though we speak in this way, yet in your case, beloved, we feel sure of better things—things that belong to salvation.\""
    },
    "distortionAm": {
      "claim": "ብዙ አማኞች በድካም ኃጢአት በሰሩ ቁጥር ወይም ፈተና በገጠማቸው ጊዜ «ዕብራውያን 6 ላይ ተጽፏል፤ ዳግመኛ ንስሐ መግባት አልችልም፤ ተጥያለሁ፤ ከእንግዲህ የመዳን ዕድል የለኝም» እያሉ በጭንቀት ይወድቃሉ።",
      "damage": "የንስሐን መንገድ ይዘጋል፤ በክርስቶስ የተሰጠንን የዘላለም የድነት ዋስትናና የካህናችንን የክርስቶስን ምልጃ ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Sensitive Christians who backslide or struggle with chronic temptation conclude they have committed the unpardonable sin: \"Hebrews 6 proves I am eternally doomed and cannot repent!\"",
      "damage": "It drives repentant souls to suicidal despair, ignoring that anyone who genuinely desires to repent has not committed hard-hearted apostasy."
    },
    "truthAm": {
      "contextSummary": "የዕብራውያን መልእክት ክርስቶስ ብቸኛውና የመጨረሻው የኃጢአት ስርየት መሆኑን ያረጋግጣል፤ እርሱን ከጣሉ ሌላ መሥዋዕት ከቶ አይገኝም (ዕብ 10:26)።",
      "surroundingVerses": "በምዕራፍ 7:25 ላይ «ስለ እነርሱ ሊያማልድ ሁልጊዜ በሕይወት ይኖራልና ስለዚህ ደግሞ በእርሱ ወደ እግዚአብሔር የሚመጡትን ፈጽሞ ሊያድናቸው ይችላል» ይላል።",
      "timelessPrinciple": "የተሰበረ ልብ ይዞ ወደ ክርስቶስ የሚመጣ ማንም አይጣልም፤ ፍርዱ ክርስቶስን ሆን ብለው ክደው የሚተዉት ላይ ነው።"
    },
    "truthEn": {
      "contextSummary": "Hebrews 6 warns against apostasy—abandoning the Cross to seek salvation in obsolete animal shadows where no sacrifice remains.",
      "surroundingVerses": "Hebrews 7:25 guarantees unfailing security to those who trust Him: \"He is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.\"",
      "timelessPrinciple": "Anyone with a tender heart desiring repentance is not an apostate; Christ’s blood cleanses all who flee to Him for refuge."
    },
    "crossReferences": [
      {
        "ref": "ዕብራውያን 7:25",
        "noteAm": "«ስለ እነርሱ ሊያማልድ ሁልጊዜ በሕይወት ይኖራልና ስለዚህ ደግሞ በእርሱ ወደ እግዚአብሔር የሚመጡትን ፈጽሞ ሊያድናቸው ይችላል»",
        "noteEn": "“Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.”"
      },
      {
        "ref": "ዮሐንስ 6:37",
        "noteAm": "«አብ የሚሰጠኝ ሁሉ ወደ እኔ ይመጣል፥ ወደ እኔም የሚመጣውን ከቶ ወደ ውጭ አላወጣውም»",
        "noteEn": "“All that the Father gives me will come to me, and whoever comes to me I will never cast out.”"
      },
      {
        "ref": "1 ዮሐንስ 2:1-2",
        "noteAm": "«ማንም ኃጢአት ቢሠራ ከአብ ዘንድ ጠበቃ አለን እርሱም ጻድቅ የሆነ ኢየሱስ ክርስቶስ ነው»",
        "noteEn": "“If anyone does sin, we have an advocate with the Father, Jesus Christ the righteous.”"
      }
    ]
  },
  {
    "id": "capsule-b59",
    "bookNr": 59,
    "chapter": 2,
    "verseStart": 24,
    "verseEnd": 24,
    "verseRefAm": "የያዕቆብ መልእክት 2:24",
    "verseRefEn": "James 2:24",
    "verseTextAm": "ሰው በእምነት ብቻ ሳይሆን በሥራ እንዲጸድቅ ታያላችሁ።",
    "verseTextEn": "Ye see then how that by works a man is justified, and not by faith only.",
    "titleAm": "ሰው በሥራ እንዲጸድቅ በእምነት ብቻ እንዳልሆነ ታያላችሁ — ጳውሎስና ያዕቆብ ይቃረናሉን?",
    "titleEn": "Justified by Works and Not by Faith Alone — Do Paul and James Contradict?",
    "taglineAm": "ያዕቆብ ስራ የሌለውን የሞተ እምነት ያጋለጠበት ቃል ዛሬ በጸጋ የመዳንን ወንጌል ለማፍረስ ሲጠቀስ",
    "taglineEn": "James’ exposure of counterfeit intellectual assent misused to attack justification by grace alone through faith",
    "eraAm": "የኢየሩሳሌም የመጀመሪያይቱ ቤተክርስቲያንና የድሆች መከራ ዘመን",
    "eraEn": "Early Jerusalem Church & James the Just",
    "locationAm": "ከኢየሩሳሌም ወደ ተበተኑት 12 ነገዶች የተላከ መልእክት",
    "locationEn": "Written from Jerusalem to Jewish Diaspora",
    "yearApprox": "48 ዓ.ም.",
    "keyIcon": "🌱",
    "sceneAm": {
      "setting": "የጌታ ወንድም ያዕቆብ በኢየሩሳሌም ጉባኤ መሪ ሳለ፤ በአሕዛብ አገራት የተበተኑት አይሁድ አማኞች ድሆችን እያዳሉ «እምነት አለን» እያሉ በግድየለሽነት ሲኖሩ።",
      "dailyLife": "አንዳንድ ሰዎች በከንፈራቸው «እግዚአብሔር አንድ እንደ ሆነ አንተ ታምናለህ» (የአይሁድ ሸማዕ ጸሎት) እያሉ ለተራቡና ለታረዙ ወንድሞች ግን ምንም ምግብ አይሰጡም ነበር።",
      "socialTension": "ያዕቆብ «አጋንንትም ያምናሉ ይንቀጠቀጣሉም» በማለት ባዶ የአእምሮ እውቀት እውነተኛ እምነት እንዳልሆነ አጋለጠ (ቁ. 19)።"
    },
    "sceneEn": {
      "setting": "James, the brother of the Lord and pillar of the Jerusalem church, writing to Jewish Christian communities dispersed across the Roman world.",
      "dailyLife": "Church members recited orthodox creeds (the Shema: \"God is one\") while turning away freezing, starving brothers and sisters without bread or coat.",
      "socialTension": "Antinomian hypocrites claimed: \"We have faith, so righteous deeds don’t matter!\" James thundered that demons also possess orthodox theology and shudder!"
    },
    "metaphorAm": {
      "origin": "ያዕቆብ «ሥራ የሌለው እምነት በራሱ የሞተ ነው» (ቁ. 17) አለ፤ እውነተኛ እምነት በሥራ ይገለጣል እንጂ በቃል ብቻ አይቆምም።",
      "linguisticNuance": "ጳውሎስ «መጽደቅ» ሲል በእግዚአብሔር ፊት ስለሚደረግ የኃጢአት ስርየት (Justification before God) ሲናገር፣ ያዕቆብ ግን «መጽደቅ» ሲል በሰዎች ፊት እምነት ፍሬ በማፍራት ስለመታየቱ (Vindication of faith before men) ይናገራል!።",
      "crowdReaction": "አንባቢዎች አብርሃም ይስሐቅን በመሰዊያው ላይ ባቀረበ ጊዜ እምነቱ በተግባር እንደተረጋገጠ ተረዱ (ቁ. 21)።"
    },
    "metaphorEn": {
      "origin": "“Faith by itself, if it does not have works, is dead”—like a corpse without a spirit (v. 26), mere intellectual agreement saves no one.",
      "linguisticNuance": "Paul uses \"justify\" in the judicial sense: declared righteous before God by Christ’s imputed merits. James uses \"justify\" in the demonstrative sense: vindicated as genuinely alive by visible deeds.",
      "crowdReaction": "Hypocrites were stripped of false assurance, learning that genuine saving faith always produces righteous fruit."
    },
    "distortionAm": {
      "claim": "ተቺዎችና አንዳንድ አስተማሪዎች «መጽሐፍ ቅዱስ እርስ በርሱ ይቃረናል፤ ጳውሎስ ሰው ያለ ሥራ በእምነት ይጸድቃል ሲል ያዕቆብ ደግሞ በሥራ ይጸድቃል ይላል» ይላሉ።",
      "damage": "በጸጋና በእምነት ብቻ የመዳንን የወንጌል መሠረት ያናውጣል፤ ሰዎችን ወደ ስራ ባርነት ወይም ወደ ጥርጣሬ ይጥላል።"
    },
    "distortionEn": {
      "claim": "Critics claim an irreconcilable doctrinal civil war between Paul and James, while legalists use James 2:24 to claim we earn salvation by good deeds.",
      "damage": "It destroys the assurance of the Cross, confounds justification with sanctification, and plunges souls back into legalistic performance anxiety."
    },
    "truthAm": {
      "contextSummary": "ያዕቆብና ጳውሎስ አይቃረኑም፤ ጳውሎስ እምነት የሚያድነው ከሥራ በፊት መሆኑን ያስተምራል፣ ያዕቆብ ደግሞ እውነተኛው እምነት ከዳነ በኋላ በሥራ እንደሚገለጥ ያረጋግጣል።",
      "surroundingVerses": "ማርቲን ሉተር እንዳለው፦ «የምናድነው በእምነት ብቻ ነው፤ ነገር ግን የሚያድነው እምነት ብቻውን አይቀመጥም (ሁልጊዜ ፍሬ አለው)»።",
      "timelessPrinciple": "እውነተኛ እምነት በክርስቶስ ብቻ ይታመናል፤ ያመነ ልብ ደግሞ ለተራቡት ምሕረትንና መልካም ሥራን ያፈራል።"
    },
    "truthEn": {
      "contextSummary": "Paul fights legalism (salvation earned by works); James fights antinomianism (counterfeit faith devoid of works). They are back-to-back fighting different enemies.",
      "surroundingVerses": "As the reformers famously stated: \"We are saved by faith alone, but the faith that saves is never alone—it is always accompanied by works.\"",
      "timelessPrinciple": "Faith alone justifies, but genuine saving faith inevitably produces a changed life of sacrificial love and good deeds."
    },
    "crossReferences": [
      {
        "ref": "ኤፌሶን 2:8-10",
        "noteAm": "«ጸጋው በእምነት አድኖአችኋልና... መልካሙን ሥራ ለማድረግ በክርስቶስ ኢየሱስ ተፈጠርን»",
        "noteEn": "“For by grace you have been saved through faith... created in Christ Jesus for good works.”"
      },
      {
        "ref": "ሮሜ 3:28",
        "noteAm": "«ሰው ያለ ሕግ ሥራ በእምነት እንዲጸድቅ እንቈጥራለንና»",
        "noteEn": "“For we hold that one is justified by faith apart from works of the law.”"
      },
      {
        "ref": "ማቴዎስ 7:20",
        "noteAm": "«ስለዚህ በፍሬያቸው ታውቋቸዋላችሁ»",
        "noteEn": "“Thus you will recognize them by their fruits.”"
      }
    ]
  },
  {
    "id": "capsule-b60",
    "bookNr": 60,
    "chapter": 2,
    "verseStart": 13,
    "verseEnd": 14,
    "verseRefAm": "1ኛ የጴጥሮስ መልእክት 2:13-14",
    "verseRefEn": "1 Peter 2:13-14",
    "verseTextAm": "ስለ ጌታ ብላችሁ ለሰው ሥርዓት ሁሉ ተገዙ፤ ለንጉሥም ቢሆን፥ ከሁሉ በላይ ነውና፤ ለመኳንንትም ቢሆን፥ ክፉ የሚያደርጉትን ለመቅጣት በጎም የሚያደርጉትን ለማመስገን ከእርሱ ተልከዋልና ተገዙ።",
    "verseTextEn": "Submit yourselves to every ordinance of man for the Lord’s sake: whether it be to the king, as supreme; Or unto governors, as unto them that are sent by him for the punishment of evildoers, and for the praise of them that do well.",
    "titleAm": "ስለ ጌታ ብላችሁ ለሰው ሥርዓት ሁሉ ተገዙ — አምባገነንነትን በጭፍን መከተል ወይስ ክርስቲያናዊ ምስክርነት?",
    "titleEn": "Be Subject to Every Human Institution — Blind Submission to Tyranny vs Godly Public Witness",
    "taglineAm": "ጴጥሮስ በሮም ኢምፓየር ስር መልካም ምስክር እንዲሆኑ የሰጠው ትእዛዝ ዛሬ ግፈኛ ገዢዎችን በጭፍን ለመታዘዝ ሲጣመም",
    "taglineEn": "Peter’s pastoral strategy to silence pagan slander co-opted to demand unquestioning Christian obedience to wicked regimes",
    "eraAm": "የኔሮ ስደት ዋዜማና የአሕዛብ አገዛዝ",
    "eraEn": "Fiery Trials under Imperial Rome",
    "locationAm": "ከሮም (ባቢሎን) ወደ እስያ አብያተ ክርስቲያናት",
    "locationEn": "Written from Rome (\"Babylon\")",
    "yearApprox": "64 ዓ.ም.",
    "keyIcon": "👑",
    "sceneAm": {
      "setting": "ንጉሥ ኔሮ በሚገዛበት በዚያ አስፈሪ አረማዊ ዘመን፤ በአናቶሊያ (ቱርክ) የተበተኑት ክርስቲያኖች እንደ «ክፉ አድራጊዎች» እና የሮማ ጠላቶች ተደርገው በሐሰት ይከሰሱ በነበረበት ወቅት።",
      "dailyLife": "ሮማውያን ክርስቲያኖችን «የቄሳርን አምላክነት አይቀበሉም፣ የአገሪቱን ሰላም ያናውጣሉ» በማለት በስርቆትና በክህደት ይከሷቸው ነበር።",
      "socialTension": "ጴጥሮስ አማኞች በመልካም ኑሯቸው የሰነፎችን አፍ እንዲዘጉና አገዛዙ የእግዚአብሔርን ትእዛዝ እስካልጣሰ ድረስ ሰላማዊ ዜጎች እንዲሆኑ መከራቸው።"
    },
    "sceneEn": {
      "setting": "Believers scattered across modern-day Turkey were slandered as subversive criminals, atheists, and threats to the Pax Romana under Nero.",
      "dailyLife": "Pagan neighbors viewed Christians with suspicion because they boycotted civic pagan festivals and emperor cult shrines.",
      "socialTension": "Peter urged them to live blameless, honorable civic lives to silence ignorant accusations, while refusing to compromise their allegiance to God."
    },
    "metaphorAm": {
      "origin": "«ስለ ጌታ ብላችሁ ለሰው ሥርዓት ተገዙ» — ታዛዥነታቸው ለገዢው ክብር ሳይሆን «ስለ ጌታ ክብር» እና የወንጌል ምስክርነት እንዳይሰደብ ነው።",
      "linguisticNuance": "በቁጥር 17 ላይ የመጨረሻውን ሚዛን ያስቀምጣል፦ «ሁሉን አክብሩ፥ ወንድሞችን ውደዱ፥ እግዚአብሔርን ፍሩ፥ ንጉሥን አክብሩ» — አምልኮና ፍርሃት ለእግዚአብሔር ብቻ ነው!።",
      "crowdReaction": "አማኞች በመልካም ሥራቸው የሮማን ከሳሾች አፍ ዘጉ፤ ጴጥሮስና ጳውሎስ ራሳቸው ግን ገዢዎች ክርስቶስን ክዱ ባሉ ጊዜ ለእግዚአብሔር ታዘው በሰማዕትነት ሞቱ።"
    },
    "metaphorEn": {
      "origin": "“For the Lord’s sake”—civic submission is conditioned upon honoring God, not deifying human state power.",
      "linguisticNuance": "Verse 17 sets the eternal boundary: \"Honor everyone. Love the brotherhood. Fear God. Honor the emperor\"—God alone is feared and worshiped; the emperor is merely honored.",
      "crowdReaction": "The early church out-loved and out-served their pagan critics, yet fearlessly disobeyed when Rome commanded idolatry."
    },
    "distortionAm": {
      "claim": "አምባገነን ገዢዎችና ፈሪ ሰባኪዎች «መጽሐፍ ቅዱስ ለመንግሥት በሁሉ ተገዙ ይላል፤ ስለዚህ መንግሥት ክፉ ቢያደርግ፣ ንጹሐንን ቢገድል ወይም ወንጌልን ቢከለክል በዝምታ መታዘዝ አለባችሁ» ይላሉ።",
      "damage": "ቤተክርስቲያንን የጭቆና ተባባሪ ያደርጋል፤ ሐዋርያት «ከሰው ይልቅ ለእግዚአብሔር ልንታዘዝ ይገባል» በማለት የከፈሉትን ሰማዕትነት ይክዳል።"
    },
    "distortionEn": {
      "claim": "Authoritarian regimes and compliant church leaders use 1 Peter 2:13 to demand unconditional silence when the state murders, oppresses, or outlaws Christianity.",
      "damage": "It turns the church into a pawn of state terror, erasing the biblical principle of civil disobedience whenever human laws command sin."
    },
    "truthAm": {
      "contextSummary": "1 ጴጥሮስ 2 አማኞች በምድር ሳሉ እንደ መጻተኞች መልካም ዜጎች ሆነው እንዲኖሩ የሚያስተምር እንጂ የእግዚአብሔርን ሕግ ለሚጥሱ ገዢዎች እንዲሰግዱ አያዝዝም።",
      "surroundingVerses": "ጴጥሮስ ራሱ በሐዋርያት 5:29 ላይ በሸንጎው ፊት ቆሞ «ከሰው ይልቅ ለእግዚአብሔር ልንታዘዝ ይገባል» በማለት በድፍረት ተናግሯል።",
      "timelessPrinciple": "ክርስቲያን መልካም ዜጋ ሆኖ ማኅበረሰቡን ያገለግላል፤ መንግሥት ግን ከእግዚአብሔር ቃል ጋር የሚጋጭ ትእዛዝ ሲሰጥ ቅድሚያ ለእግዚአብሔር ይሰጣል።"
    },
    "truthEn": {
      "contextSummary": "1 Peter 2 instructs pilgrims to maintain spotless civic integrity so pagans glorify God; it does not sanctify state idolatry or tyranny.",
      "surroundingVerses": "Peter himself lived this out in Acts 5:29: when forbidden by rulers to speak of Jesus, he declared: \"We must obey God rather than men.\"",
      "timelessPrinciple": "Believers honor civic authorities and pay taxes, but absolute allegiance belongs to King Jesus alone."
    },
    "crossReferences": [
      {
        "ref": "ሐዋርያት 5:29",
        "noteAm": "«ጴጥሮስና ሐዋርያትም መልሰው አሉ፦ ከሰው ይልቅ ለእግዚአብሔር ልንታዘዝ ይገባል»",
        "noteEn": "“Peter and the apostles answered, ‘We must obey God rather than men.’”"
      },
      {
        "ref": "ሮሜ 13:1-4",
        "noteAm": "«ባለሥልጣናት ለክፉ አድራጊዎች የሚያስፈሩ ናቸው እንጂ ለመልካም ሥራ አይደለም... የእግዚአብሔር አገልጋይ ነውና»",
        "noteEn": "“For rulers are not a terror to good conduct, but to bad... for he is the servant of God, an avenger who carries out God’s wrath on the wrongdoer.”"
      },
      {
        "ref": "ዳንኤል 3:18",
        "noteAm": "«ንጉሥ ሆይ፥ አማልክትህን እንዳናመልክ፥ ላቆምኸውም ለወርቁ ምስል እንዳንሰግድለት እወቅ»",
        "noteEn": "“Be it known to you, O king, that we will not serve your gods or worship the golden image that you have set up.”"
      }
    ]
  },
  {
    "id": "capsule-b61",
    "bookNr": 61,
    "chapter": 3,
    "verseStart": 8,
    "verseEnd": 8,
    "verseRefAm": "2ኛ የጴጥሮስ መልእክት 3:8",
    "verseRefEn": "2 Peter 3:8",
    "verseTextAm": "እናንተ ግን ወዳጆች ሆይ፥ በጌታ ዘንድ አንድ ቀን እንደ ሺህ ዓመት፥ ሺህ ዓመትም እንደ አንድ ቀን እንደ ሆነ ይህን አንድ ነገር አትርሱ።",
    "verseTextEn": "But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as one day.",
    "titleAm": "በጌታ ዘንድ አንድ ቀን እንደ ሺህ ዓመት ነው — የቀን ቀመር ስሌት ወይስ የመለኮታዊ ትዕግሥት ምስጢር?",
    "titleEn": "With the Lord One Day is as a Thousand Years — End-Times Math Charts vs Divine Patience",
    "taglineAm": "ጴጥሮስ የእግዚአብሔርን ዘላለማዊ ትዕግሥት የገለጠበት ቃል ዛሬ የፍጻሜውን ቀን ለመተንበይ የቀን መቁጠሪያ ሲደረግ",
    "taglineEn": "Peter’s defense of God’s patient timetable against scoffers twisted into chronological charts calculating the date of the Rapture",
    "eraAm": "የጴጥሮስ ሰማዕትነት ዋዜማና የዘባቾች መነሳት",
    "eraEn": "Peter’s Final Testament & Rise of Scoffers",
    "locationAm": "ከሮም የተላከ የመጨረሻ መልእክት",
    "locationEn": "Final Epistle from Rome",
    "yearApprox": "67 ዓ.ም.",
    "keyIcon": "⏳",
    "sceneAm": {
      "setting": "ሐዋርያት እያረጁ ሲሞቱ ዘባቾች ተነስተው «የመምጣቱ የተስፋ ቃል ወዴት አለ? አባቶች ከሞቱበት ጊዜ ጀምሮ ሁሉም እንዳለ ይኖራል» እያሉ በይፋ በሚሳለቁበት ወቅት።",
      "dailyLife": "ክርስቲያኖች በስደት እየተሰቃዩ «ጌታ መቼ ይመጣል?» እያሉ በጉጉት ይጠብቁ ነበር፤ ዘባቾች ግን የፍርድ ቀን እንደሌለ አድርገው በሥጋ ምኞት ሰክረው ይኖሩ ነበር።",
      "socialTension": "ጴጥሮስ የእግዚአብሔር መዘግየት አለመቻል ሳይሆን ሰዎች ሁሉ ንስሐ እንዲገቡ የሚሰጥ ታላቅ ምሕረት መሆኑን መሰከረ።"
    },
    "sceneEn": {
      "setting": "As the first generation of apostles was dying, false teachers arose mocking the Parousia: \"Where is the promise of his coming? For all things continue as they were from creation!\"",
      "dailyLife": "Persecuted saints cried out in agony waiting for Christ’s return, while scoffers rationalized indulging their sinful lusts.",
      "socialTension": "Peter unveiled God’s relationship to time, reframing the apparent delay as long-suffering mercy to gather the elect."
    },
    "metaphorAm": {
      "origin": "«አንድ ቀን እንደ ሺህ ዓመት፥ ሺህ ዓመትም እንደ አንድ ቀን ነው» — ከመዝሙር 90:4 የተወሰደ ቅኔ ሲሆን እግዚአብሔር ከሰው የሰዓትና የቀን ቆጠራ በላይ ዘላለማዊ መሆኑን ያሳያል።",
      "linguisticNuance": "ቀጣዩ ቁጥር (ቁ. 9) ትክክለኛውን ምክንያት ይነግረናል፦ «ሁሉ ወደ ንስሐ እንዲደርሱ እንጂ ማንም እንዳይጠፋ ወዶ ስለ እናንተ ይታገሣል»።",
      "crowdReaction": "አማኞች የፍጻሜውን ቀን ከመቁጠር ወጥተው በተቀደሰ ኑሮና በእግዚአብሔርን መምሰል መኖር ጀመሩ (ቁ. 11)።"
    },
    "metaphorEn": {
      "origin": "Drawn from Psalm 90:4, the poetic simile demonstrates that Yahweh is unconstrained by human biological watches or calendar years.",
      "linguisticNuance": "Verse 9 delivers the theological punchline: \"The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.\"",
      "crowdReaction": "Believers turned from speculative anxiety to holy anticipation and diligent evangelism."
    },
    "distortionAm": {
      "claim": "ብዙ የፍጻሜ ዘመን ተንታኞች ጥቅሱን ወስደው «አንድ ቀን 1000 ዓመት ከሆነ የዓለም ታሪክ 6000 ዓመት ነው፤ ስለዚህ ኢየሱስ በዚህ ዓመት በዚህ ወር ይመጣል» በማለት የቀን ቀመር ያሰላሉ።",
      "damage": "ትንቢቱ ሲከሽፍ ብዙዎችን ወደ ክህደትና ተስፋ መቁረጥ ይጥላል፤ ኢየሱስ «ያችን ቀንና ሰዓት ማንም አያውቅም» ያለውን ቃል ይጥሳል።"
    },
    "distortionEn": {
      "claim": "Eschatological date-setters treat the poetic simile as a literal mathematical formula to chart the exact timeline of human history and predict Christ’s return.",
      "damage": "Repeated failed date predictions bring mockery upon Christianity, breed cynicism, and defy Jesus’ warning that no one knows the day or hour."
    },
    "truthAm": {
      "contextSummary": "2 ጴጥሮስ 3 የእግዚአብሔር ቀን እንደ ሌባ በድንገት እንደሚመጣና እስከዚያው ድረስ በቅድስና መዘጋጀት እንዳለብን የሚያስተምር ነው።",
      "surroundingVerses": "በቁጥር 10 ላይ «የጌታ ቀን እንደ ሌባ ሆኖ ይመጣል፤ በዚያም ቀን ሰማያት በታላቅ ድምፅ ያልፋሉ... ምድርም በእርስዋም ላይ የተደረገው ሁሉ ይቃጠላል» ተብሏል።",
      "timelessPrinciple": "የእግዚአብሔር ትዕግሥት ለድነት ነው፤ ጥሪያችን የቀን ቀመር ማውጣት ሳይሆን በቅድስናና በንጽሕና ጌታችንን መጠባበቅ ነው።"
    },
    "truthEn": {
      "contextSummary": "2 Peter 3 urges believers to live holy and godly lives in light of the sudden, apocalyptic arrival of the Day of the Lord.",
      "surroundingVerses": "Verse 10 warns: \"The day of the Lord will come like a thief, and then the heavens will pass away with a roar, and the heavenly bodies will be burned up and dissolved.\"",
      "timelessPrinciple": "God’s patience is our salvation; rather than calculating calendars, we are to be found by Him without spot or blemish."
    },
    "crossReferences": [
      {
        "ref": "መዝሙር 90:4",
        "noteAm": "«ሺህ ዓመት በዓይንህ ፊት እንዳለፈች እንደ ትናንት ቀን፥ እንደ ሌሊትም አንዲት ትጋት ነውና»",
        "noteEn": "“For a thousand years in your sight are but as yesterday when it is past, or as a watch in the night.”"
      },
      {
        "ref": "ማቴዎስ 24:36",
        "noteAm": "«ስለዚያች ቀንና ስለዚያች ሰዓት ግን ከአባት ብቻ በቀር የሰማይ መላእክትም ቢሆኑ ልጅም ቢሆን የሚያውቅ የለም»",
        "noteEn": "“Concerning that day and hour no one knows, not even the angels of heaven, nor the Son, but the Father only.”"
      },
      {
        "ref": "2 ጴጥሮስ 3:11-12",
        "noteAm": "«ይህ ሁሉ እንዲህ የሚቀልጥ ከሆነ፥ የእግዚአብሔርን ቀን መምጣት እየጠበቃችሁና እያስቸኮላችሁ በቅዱስ ኑሮና እግዚአብሔርን በመምሰል እንደ ምን ልትሆኑ ይገባችኋል!»",
        "noteEn": "“Since all these things are thus to be dissolved, what sort of people ought you to be in lives of holiness and godliness!”"
      }
    ]
  },
  {
    "id": "capsule-b62",
    "bookNr": 62,
    "chapter": 1,
    "verseStart": 8,
    "verseEnd": 9,
    "verseRefAm": "1ኛ የዮሐንስ መልእክት 1:8-9",
    "verseRefEn": "1 John 1:8-9",
    "verseTextAm": "ኃጢአት የለብንም ብንል ራሳችንን እናስታለን፥ እውነትም በእኛ ውስጥ የለም። በኃጢአታችን ብንናዘዝ ኃጢአታችንን ይቅር ሊለን ከዓመፃም ሁሉ ሊያነጻን የታመነና ጻድቅ ነው።",
    "verseTextEn": "If we say that we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
    "titleAm": "ኃጢአት የለብንም ብንል ራሳችንን እናስታለን — ፍጹማን ነን ባዮች ወይስ የዕለት ተዕለት የደም ዕርገት?",
    "titleEn": "If We Say We Have No Sin — Sinless Perfectionism vs Daily Cleansing",
    "taglineAm": "ዮሐንስ «ኃጢአት የለብንም» የሚሉትን ግኖስቲኮች ያጋለጠበት ቃል ዛሬ በዘመናዊ \"ፍጹም ኃጢአት አልባ ነኝ\" ባዮች ሲጣመም",
    "taglineEn": "John confronting early Gnostic perfectionists who claimed sin was an illusion, refuting modern \"sinless perfection\" cults",
    "eraAm": "የኤፌሶን ግኖስቲክ ኑፋቄና የሐዋርያው ዮሐንስ እርጅና ዘመን",
    "eraEn": "Gnostic Heresies & Johannine Pastoral Care",
    "locationAm": "ከኤፌሶን ወደ እስያ አብያተ ክርስቲያናት",
    "locationEn": "Ephesus to Asian Churches",
    "yearApprox": "90 ዓ.ም.",
    "keyIcon": "🧼",
    "sceneAm": {
      "setting": "ሐዋርያው ዮሐንስ በእርጅናው ዘመን በኤፌሶን እያገለገለ ሳለ የሐሰት አስተማሪዎች (የጥንት ግኖስቲኮች) ተነስተው «መንፈሳችን ንጹሕ ነው፤ ሥጋችን የፈለገውን ቢያደርግ ኃጢአት አይሆንብንም» እያሉ በነበረበት ወቅት።",
      "dailyLife": "እነዚህ ኑፋቄዎች ክርስቶስ በሥጋ መምጣቱን ይክዱ ነበር፤ ራሳቸውንም «ከኃጢአት በላይ የሆንን ፍጹማን ነን» በማለት በስድነት ይመላለሱ ነበር።",
      "socialTension": "ዮሐንስ «እግዚአብሔር ብርሃን ነው፥ ጨለማም በእርሱ ዘንድ ከቶ የለም» በማለት ከእርሱ ጋር ኅብረት ያለው በብርሃን መመላለስ እንዳለበት ገለጠ።"
    },
    "sceneEn": {
      "setting": "The aged apostle John combating proto-Gnostic deceivers in Asia Minor who claimed moral elitism beyond sin.",
      "dailyLife": "Gnostics taught that the physical body was irrelevant evil matter, leading to the perverse conclusion that physical sins did not pollute the \"enlightened\" spirit.",
      "socialTension": "They bragged of having achieved sinless enlightenment while abandoning brotherly love and walking in moral darkness."
    },
    "metaphorAm": {
      "origin": "«ኃጢአት የለብንም ብንል» — ራሳችንን እናታልላለን፤ እውነትም በእኛ ውስጥ የለም፤ ነገር ግን «ኃጢአታችንን ብንናዘዝ ኃጢአታችንን ይቅር ሊለን ከአመፃም ሁሉ ሊያነጻን የታመነና ጻድቅ ነው»።",
      "linguisticNuance": "በግሪክ «ሃማርቲያን ኡክ ኤኾመን» (ኃጢአት የለብንም) — በውስጣችን አሁንም የኃጢአት ተፈጥሮ እንዳለ መካድ ሐሰተኝነት ነው።",
      "crowdReaction": "እውነተኛ አማኞች የኃጢአታቸውን ድካም በእግዚአብሔር ፊት በንስሐ ተናዘዙ፤ በክርስቶስ ደምም የዕለት ተዕለት ንጽሕናን አገኙ።"
    },
    "metaphorEn": {
      "origin": "Denying our ongoing propensity to sin is self-deception; walking in the light means honest confession, where Christ’s blood continuously cleanses us.",
      "linguisticNuance": "The present continuous tense in 1 John 1:7 (\"cleanses us from all sin\") indicates an ongoing, daily fountain of cleansing, not a one-time static event.",
      "crowdReaction": "Humble saints abandoned perfectionist pretenses, coming openly to the Throne of Grace with contrite hearts."
    },
    "distortionAm": {
      "claim": "አንዳንድ የሐሰት ጸጋ (Hyper-Grace) አስተማሪዎች «አማኝ አንዴ ከዳነ ዳግመኛ ኃጢአቱን መናዘዝ አያስፈልገውም፤ ኃጢአትህን ከተናዘዝክ እምነት አጥተሃል» በማለት ንስሐን ያስቀራሉ።",
      "damage": "ሰዎችን በድብቅ ኃጢአትና አስመሳይነት ውስጥ ያስራል፤ የቁጥር 9ን መለኮታዊ የይቅርታና የማንጻት ተስፋ ይጥሳል።"
    },
    "distortionEn": {
      "claim": "Hyper-grace teachers argue that Christians should never confess their sins after conversion: \"Confession denies your righteous identity!\"",
      "damage": "It inoculates believers against conviction of the Holy Spirit, hardens hearts in unrepentant sin, and directly contradicts verse 9."
    },
    "truthAm": {
      "contextSummary": "1 ዮሐንስ 1 ክርስቲያን በብርሃን ሲመላለስ ኃጢአቱን በእግዚአብሔር ፊት በግልጽ በመናዘዝ ከእግዚአብሔር ጋር ያለውን የኅብረት ሰላም እንደሚጠብቅ ያረጋግጣል።",
      "surroundingVerses": "በምዕራፍ 2:1 ላይ «ልጆቼ ሆይ፥ ኃጢአት እንዳትሠሩ ይህን እጽፍላችኋለሁ፤ ማንም ኃጢአት ቢሠራ ከአብ ዘንድ ጠበቃ አለን እርሱም ጻድቅ የሆነ ኢየሱስ ክርስቶስ ነው» በማለት አጽናንቷል።",
      "timelessPrinciple": "በክርስቶስ ደም ሁልጊዜ የሚታጠብ ልብ በብርሃን ይመላለሳል፤ ኃጢአቱን የሚናዘዝ ደግሞ ሙሉ ይቅርታንና ንጽሕናን ያገኛል።"
    },
    "truthEn": {
      "contextSummary": "1 John 1 shows that walking in the light involves constant, transparent confession of our daily sins to maintain intimate fellowship with the Father.",
      "surroundingVerses": "1 John 2:1 provides pastoral comfort: \"My little children, I am writing these things to you so that you may not sin. But if anyone does sin, we have an advocate with the Father, Jesus Christ the righteous.\"",
      "timelessPrinciple": "True saints do not claim sinless perfection; they run swiftly to their Heavenly Advocate, confessing sins and experiencing daily cleansing."
    },
    "crossReferences": [
      {
        "ref": "1 ዮሐንስ 2:1-2",
        "noteAm": "«ማንም ኃጢአት ቢሠራ ከአብ ዘንድ ጠበቃ አለን እርሱም ጻድቅ የሆነ ኢየሱስ ክርስቶስ ነው፤ እርሱም የኃጢአታችን ማስተስሪያ ነው»",
        "noteEn": "“If anyone does sin, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins.”"
      },
      {
        "ref": "ምሳሌ 28:13",
        "noteAm": "«ኃጢአቱን የሚሰውር አይለማም፤ የሚናዘዝባትና የሚተዋት ግን ምሕረትን ያገኛል»",
        "noteEn": "“Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.”"
      },
      {
        "ref": "መዝሙር 32:5",
        "noteAm": "«ኃጢአቴን ለአንተ አስታወቅሁ፥ በደሌንም አልሸፈንሁም፤ ለእግዚአብሔር መተላለፌን እናዘዛለሁ አልሁ፤ አንተም የልቤን ኃጢአት ይቅር አልህ»",
        "noteEn": "“I acknowledged my sin to you, and I did not cover my iniquity... and you forgave the iniquity of my sin.”"
      }
    ]
  },
  {
    "id": "capsule-b63",
    "bookNr": 63,
    "chapter": 1,
    "verseStart": 10,
    "verseEnd": 11,
    "verseRefAm": "2ኛ የዮሐንስ መልእክት 1:10-11",
    "verseRefEn": "2 John 1:10-11",
    "verseTextAm": "ማንም ወደ እናንተ ቢመጣ ይህንም ትምህርት ባያመጣ በቤታችሁ አትቀበሉት ሰላምም አትበሉት፤ ሰላም የሚለው ሰው በክፉ ሥራው ይካፈላልና።",
    "verseTextEn": "If there come any unto you, and bring not this doctrine, receive him not into your house, neither bid him God speed: For he that biddeth him God speed is partaker of his evil deeds.",
    "titleAm": "ወደ ቤታችሁ አታስገቡት ሰላምም አትበሉት — ዘመዶችን ማግለል ወይስ የኑፋቄ መምህራንን አለመርዳት?",
    "titleEn": "Do Not Receive Him into Your House — Shunning Unsaved Relatives vs Funding Heretical Missionaries",
    "taglineAm": "ዮሐንስ የክርስቶስን ሥጋ መገለጥ የሚክዱ የሐሰት አስተማሪዎችን እንዳይቀበሉ የሰጠው ትእዛዝ ዛሬ ለማኅበራዊ ጥላቻ ሲጣመም",
    "taglineEn": "A strict apostolic prohibition against funding and endorsing travelling heretics weaponized to cut off family relationships",
    "eraAm": "የተጓዥ ሰባኪዎችና የዶሴቲዝም ኑፋቄ ዘመን",
    "eraEn": "Docetic Heresy & Itinerant Preachers",
    "locationAm": "ለተመረጠችው እመቤትና ለልጆቿ የተላከ መልእክት",
    "locationEn": "To the Elect Lady & Her Children",
    "yearApprox": "92 ዓ.ም.",
    "keyIcon": "🚪",
    "sceneAm": {
      "setting": "በጥንቷ ቤተክርስቲያን ሆቴልና ማረፊያ ባልነበረበት ወቅት ተጓዥ አስተማሪዎች በክርስቲያኖች የግል ቤት እየታረፉ፣ እየተመገቡና በጉባኤው እያስተማሩ ይጓዙ በነበረበት ጊዜ።",
      "dailyLife": "የክርስቶስን በሥጋ መምጣት የሚክዱ የሐሰት አስተማሪዎች (Docetists) ወደ ክርስቲያኖች ቤት እየገቡ ምእመናንን ያሳስቱና ወንጌልን ያፈርሱ ነበር።",
      "socialTension": "ዮሐንስ «ይህንን ትምህርት ሳይዝ ወደ እናንተ የሚመጣውን ማንም ወደ ቤታችሁ አታስገቡት ሰላምም አትበሉት፤ ሰላም የሚለው በክፉ ሥራው ይካፈላልና» በማለት አስጠነቀቀ።"
    },
    "sceneEn": {
      "setting": "Early Christian ministry depended on hospitality: itinerant preachers stayed in private home-churches, funded by believers.",
      "dailyLife": "Docetic deceivers denied that Jesus Christ came in genuine human flesh, traveling from town to town exploiting Christian hospitality.",
      "socialTension": "John warned the local church that opening their doors to host and fund these heretics constituted active complicity in demonic deception."
    },
    "metaphorAm": {
      "origin": "«ወደ ቤት አለማስገባትና ሰላም አለማለት» ማለት በቤት ቤተክርስቲያን መድረክ ሰጥቶ አለማስተናገድና በፋይናንስ አለመርዳት (Official ecclesiastical endorsement) ማለት ነው።",
      "linguisticNuance": "«ሰላም» (ካይሬይን) በጥንቱ ዓለም ይፋዊ ቡራኬና የአገልግሎት አጋርነት ማረጋገጫ ነበር፤ ለሐሰተኛ ሰባኪ ሰላምታ መስጠት ስህተቱን እንደ መደገፍ ይቆጠር ነበር።",
      "crowdReaction": "ቤተክርስቲያኒቱ እውነተኛውን የወንጌል ትምህርት ከሚክዱ ሰዎች ጋር ያለውን የአገልግሎት ኅብረት አቋረጠች።"
    },
    "metaphorEn": {
      "origin": "“Do not receive him into your house” meant do not host him as an endorsed teacher in your house-church or sponsor his mission with funds.",
      "linguisticNuance": "Giving the formal greeting (\"Chairein\") was an official blessing of good speed upon their heretical mission, making one a partner in evil deeds (v. 11).",
      "crowdReaction": "Churches protected vulnerable flocks by vetting itinerant evangelists against the apostolic christology of the Incarnation."
    },
    "distortionAm": {
      "claim": "አክራሪ ቡድኖች ይህን ጥቅስ ወስደው «የማያምኑ ዘመዶቻችሁን፣ ልጆቻችሁን ወይም ወላጆቻችሁን ወደ ቤታችሁ አታስገቡ፤ ሰላምም አትበሏቸው፤ አግልሏቸው» በማለት ቤተሰብን ያፈርሳሉ።",
      "damage": "የክርስቶስን የፍቅርና የምሕረት ባሕርይ ያጠፋል፤ ጥቅሱ የተጻፈው ስለ ሐሰት መምህራን አገልግሎት እንጂ ስለ ተራ ዘመዶች እንዳልሆነ ይዘነጋል።"
    },
    "distortionEn": {
      "claim": "Cults use this text to enforce draconian shunning policies: \"Sever all contact with unsaved parents or doubting children—do not let them step foot in your home!\"",
      "damage": "It destroys families, alienates unsaved neighbors, and twists a ban on sponsoring traveling heretics into cruel emotional abuse."
    },
    "truthAm": {
      "contextSummary": "2 ዮሐንስ የሚያስጠነቅቀው የክርስቶስን እውነተኛ ማንነት የሚክዱ የሐሰት መምህራንን መድረክ ከመስጠትና በገንዘብ ከመደገፍ እንጂ ማኅበራዊ ጥላቻን አያስተምርም።",
      "surroundingVerses": "በቁጥር 7 ላይ «ኢየሱስ ክርስቶስ በሥጋ እንደ መጣ የማያምኑ ብዙዎች አሳቾች ወደ ዓለም ወጥተዋልና፤ አሳቹና የክርስቶስ ተቃዋሚው ይህ ነው» በማለት የታገዱትን በግልጽ ለይቷል።",
      "timelessPrinciple": "ክርስቲያን እውነትን ከሐሰት መለየት አለበት፤ ለሐሰት ትምህርት መስፋፋት መድረክም ሆነ የገንዘብ ድጋፍ መስጠት አይገባውም።"
    },
    "truthEn": {
      "contextSummary": "2 John protects the integrity of apostolic doctrine by forbidding financial and organizational sponsorship of teachers who deny the Incarnation.",
      "surroundingVerses": "Verse 7 defines the precise target: \"For many deceivers have gone out into the world, those who do not confess the coming of Jesus Christ in the flesh.\"",
      "timelessPrinciple": "Believers must never finance, platform, or validate false teachers who assault the deity and humanity of Jesus Christ."
    },
    "crossReferences": [
      {
        "ref": "ሮሜ 16:17",
        "noteAm": "«እናንተ የተማራችሁትን ትምህርት የሚቃወሙትን መለያየትንና ማሰናከያን የሚያደርጉትን ሰዎች እንድትመለከቱ እለምናችኋለሁ፥ ከእነርሱም ዘወር በሉ»",
        "noteEn": "“Watch out for those who cause divisions and create obstacles contrary to the doctrine that you have been taught; avoid them.”"
      },
      {
        "ref": "ገላትያ 1:8-9",
        "noteAm": "«እኛ ብንሆን እንኳ ወይም ከሰማይ መልአክ፥ ከሰበክንላችሁ ወንጌል የሚለይ ወንጌልን ቢሰብክላችሁ፥ የተረገመ ይሁን»",
        "noteEn": "“Even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, let him be accursed.”"
      },
      {
        "ref": "1 ቆሮንቶስ 5:9-10",
        "noteAm": "«ከዚህ ዓለም አመንዝሮች ወይም ከስስታሞች ጋር ፈጽሞ እንዳትደባለቁ አላልሁም፤ ይህ ቢሆን ከዓለም ልትወጡ ይገባችሁ ነበርና»",
        "noteEn": "“Not at all meaning the sexually immoral of this world... since then you would need to go out of the world.”"
      }
    ]
  },
  {
    "id": "capsule-b64",
    "bookNr": 64,
    "chapter": 1,
    "verseStart": 2,
    "verseEnd": 2,
    "verseRefAm": "3ኛ የዮሐንስ መልእክት 1:2",
    "verseRefEn": "3 John 1:2",
    "verseTextAm": "ወዳጅ ሆይ፥ ነፍስህ እንደሚከናወን፥ በነገር ሁሉ እንዲከናወንልህና ጤና እንዲኖርህ እጸልያለሁ።",
    "verseTextEn": "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
    "titleAm": "በነገር ሁሉ ይከናወንልህ ዘንድ ጤናህም እንዲጠበቅ እጸልያለሁ — የብልጽግና ዶክትሪን ወይስ የዘመኑ የደብዳቤ ሰላምታ?",
    "titleEn": "Prosper in All Things and Be in Health — Prosperity Dogma vs Standard Greco-Roman Letter Greeting",
    "taglineAm": "ዮሐንስ ለወዳጁ ለጋይዮስ የላከው የተለመደ የጤና ሰላምታ ዛሬ የብልጽግና ወንጌል ዋና መሠረት ተደርጎ ሲሰበክ",
    "taglineEn": "A conventional first-century polite letter greeting transformed into the supreme dogmatic cornerstone of the prosperity gospel",
    "eraAm": "የ1ኛው መቶ ክፍለ ዘመን የደብዳቤ ሰላምታና የጋይዮስ እንግዳ ተቀባይነት",
    "eraEn": "Standard 1st-Century Epistolary Greeting & Gaius",
    "locationAm": "ለተወደደው ለጋይዮስ የተላከ የግል ደብዳቤ",
    "locationEn": "Personal Letter to Beloved Gaius",
    "yearApprox": "92 ዓ.ም.",
    "keyIcon": "✉️",
    "sceneAm": {
      "setting": "ሐዋርያው ዮሐንስ በታማኝነትና በእንግዳ ተቀባይነት ለሚታወቀው ለወዳጁ ለጋይዮስ አጭር የግል ደብዳቤ በጻፈበት ወቅት።",
      "dailyLife": "በ1ኛው መቶ ክፍለ ዘመን በግሪክና በሮም ዓለም ማንኛውም ሰው ደብዳቤ ሲጽፍ «ጤናህ እንዲጠበቅና ነገሮችህ ሁሉ እንዲሳኩ እመኛለሁ» (Valetudo bonum sit) የሚል ጨዋነት የተሞላበት መደበኛ ሰላምታ ማስቀደም የተለመደ ነበር።",
      "socialTension": "በቤተክርስቲያኒቱ ውስጥ ዲዮጥራጢስ የተባለው አምባገነን መሪ ሐዋርያትን እየሰደበ አማኞችን ከማኅበር ያስወጣ ነበር፤ ጋይዮስ ግን ታማኝ ደጋፊ ነበር።"
    },
    "sceneEn": {
      "setting": "The apostle John writing a warm pastoral letter to his beloved friend Gaius, commending his hospitality to traveling missionaries.",
      "dailyLife": "Every standard ancient Greco-Roman papyrus letter opened with a polite wish for the recipient’s physical health and general welfare (the \"health wish\").",
      "socialTension": "A power-hungry church dictator named Diotrephes was slandering the apostles and excommunicating hospitable believers; Gaius remained steadfast."
    },
    "metaphorAm": {
      "origin": "«ነፍስህ እንደሚከናወን በነገር ሁሉ ይከናወንልህ ዘንድ ጤናህም እንዲጠበቅ እጸልያለሁ» — ጋይዮስ በመንፈስ የደመቀ ነገር ግን በሥጋው ታማሚ ሳይሆን አይቀርም፤ ዮሐንስም እንደ ነፍሱ ጥንካሬ ሥጋውም ጤናማ እንዲሆን ተመኘለት።",
      "linguisticNuance": "በግሪክ «ዩኦዱስታይ» ማለት መልካም መንገድ እንዲሆንልህ ወይም በጉዞህ እንዲሳካልህ መመኘት ነው፤ «ሁግያይኔይን» ማለት ጤነኛ ሁን ማለት ነው፤ ይኸውም መደበኛ ሰላምታ እንጂ ዶክትሪን አይደለም።",
      "crowdReaction": "ጋይዮስ የሐዋርያውን ፍቅርና የሰላምታ ቃል በደስታ ተቀበለ።"
    },
    "metaphorEn": {
      "origin": "A heartfelt pastoral greeting: Gaius’ soul was flourishing in truth (v. 3), so John prayed that his physical health might match his robust spiritual maturity.",
      "linguisticNuance": "The Greek \"euodousthai\" means \"to have a good journey / prosper\" and \"hygiainein\" means \"to be in good health\"—the universal opening formula of ancient correspondence.",
      "crowdReaction": "Gaius received the warm personal letter, encouraged to continue showing hospitality to missionaries."
    },
    "distortionAm": {
      "claim": "የብልጽግና ወንጌል መስራቾች (ለምሳሌ ኦራል ሮበርትስ) ይህን ጥቅስ ወስደው «ይህ ጥቅስ እግዚአብሔር ለሁሉም ክርስቲያኖች የሰጠው የሦስትዮሽ በረከት ነው፦ 1) የገንዘብ ብልጽግና፣ 2) ፍጹም የሥጋ ጤና፣ 3) የነፍስ ድነት» በማለት የሙሉ እንቅስቃሴያቸው መሠረት አደረጉት።",
      "damage": "አንድን ተራ የደብዳቤ ሰላምታ ወደ አስገዳጅ መለኮታዊ ቃል ኪዳን ይቀይራል፤ በበሽታና በችግር ውስጥ ያሉ ቅዱሳንን እምነት አልባ ያደርጋል።"
    },
    "distortionEn": {
      "claim": "Prosperity movement pioneers (such as Oral Roberts) elevated 3 John 2 to the absolute foundation of their movement: \"God’s will is 3-D prosperity: financial wealth, physical health, and spiritual salvation!\"",
      "damage": "It erects a massive theological dogma upon a standard epistolary greeting, misleading millions into believing sickness indicates spiritual failure."
    },
    "truthAm": {
      "contextSummary": "3 ዮሐንስ 2 ሐዋርያው ለወዳጁ ያቀረበው የግል ጸሎትና ሰላምታ እንጂ ለሁሉም አማኞች የተሰጠ ሁለንተናዊ የገንዘብና የጤና ዋስትና ዶክትሪን አይደለም።",
      "surroundingVerses": "በቁጥር 4 ላይ ዮሐንስ እውነተኛውን ታላቅ ደስታውን ገልጿል፦ «ልጆቼ በእውነት እንዲሄዱ ከመስማት የሚበልጥ ደስታ የለኝም»።",
      "timelessPrinciple": "ለወዳጆቻችን ጤናና ስኬት መጸለይ መልካም ነው፤ ነገር ግን ከሁሉ የሚበልጠው በእግዚአብሔር እውነትና ቅድስና መመላለስ ነው።"
    },
    "truthEn": {
      "contextSummary": "3 John 2 is a tender pastoral blessing and prayer for a specific friend, not a universal contractual guarantee of earthly wealth.",
      "surroundingVerses": "Verse 4 reveals John’s supreme priority: \"I have no greater joy than to hear that my children are walking in the truth.\"",
      "timelessPrinciple": "Praying for the physical health and daily needs of loved ones is beautiful and biblical, but spiritual fidelity to the truth remains the supreme treasure."
    },
    "crossReferences": [
      {
        "ref": "3 ዮሐንስ 1:4",
        "noteAm": "«ልጆቼ በእውነት እንዲሄዱ ከመስማት የሚበልጥ ደስታ የለኝም»",
        "noteEn": "“I have no greater joy than to hear that my children are walking in the truth.”"
      },
      {
        "ref": "2 ቆሮንቶስ 12:7-9",
        "noteAm": "«ስለዚህ እንዳይመካ በሥጋዬ መውጊያ ተሰጠኝ... ጸጋዬ ይበቃሃል፥ ኃይሌ በድካም ይፈጸማልና አለኝ»",
        "noteEn": "“A thorn was given me in the flesh... ‘My grace is sufficient for you, for my power is made perfect in weakness.’”"
      },
      {
        "ref": "ፊልጵስዩስ 2:25-27",
        "noteAm": "«አፍሮዲጡስ ታሞ ለሞት ቀርቦ ነበርና... እግዚአብሔር ግን ማረው»",
        "noteEn": "“Epaphroditus... was ill, near to death. But God had mercy on him.”"
      }
    ]
  },
  {
    "id": "capsule-b65",
    "bookNr": 65,
    "chapter": 1,
    "verseStart": 9,
    "verseEnd": 9,
    "verseRefAm": "የይሁዳ መልእክት 1:9",
    "verseRefEn": "Jude 1:9",
    "verseTextAm": "የመላእክት አለቃ ሚካኤል ግን ከዲያብሎስ ጋር በተከራከረ ጊዜ ስለ ሙሴ ሥጋ ሲነጋገር። ጌታ ይገሥጽህ አለው እንጂ የስድብን ፍርድ ሊናገረው አልደፈረም።",
    "verseTextEn": "Yet Michael the archangel, when contending with the devil he disputed about the body of Moses, durst not bring against him a railing accusation, but said, The Lord rebuke thee.",
    "titleAm": "የመላእክት አለቃ ሚካኤል ስድብን ሊያመጣበት አልደፈረም — የአጋንንት ስድብ ድፍረት ወይስ መለኮታዊ አክብሮት?",
    "titleEn": "Archangel Michael Did Not Presume to Pronounce a Reviling Judgment — Flippant Warfare vs Holy Reverence",
    "taglineAm": "የመላእክት አለቃ ሚካኤል ሰይጣንን ሳይሰድብ «ጌታ ይገሥጽህ» ያለው ትህትና ዛሬ በአጋንንት አስወጪዎች ድፍረት ሲጣመም",
    "taglineEn": "The archangel Michael’s restrained reverence twisted by modern spiritual warfare preachers who arrogantly mock and insult demons",
    "eraAm": "የክህደት መነሳትና የአዋልድ መጻሕፍት ማጣቀሻ",
    "eraEn": "Apostolic Battle for the Faith",
    "locationAm": "ወደ ተጠሩትና በተወደዱት ቅዱሳን የተላከ መልእክት",
    "locationEn": "General Epistle to the Church",
    "yearApprox": "68 ዓ.ም.",
    "keyIcon": "⚔️",
    "sceneAm": {
      "setting": "በቤተክርስቲያን ውስጥ የእግዚአብሔርን ጸጋ ወደ ሴሰኝነት የለወጡና መንፈሳዊ ሥልጣናትን የሚሳደቡ ደፋሮች የሐሰት አስተማሪዎች በተነሱበት ወቅት።",
      "dailyLife": "እነዚህ ሐሰተኞች በህልማቸውና በራዕያቸው እየተመኩ «እኛ መናፍስትን እናዛለን» እያሉ ክብራውያንን (መላእክትንና ሥልጣናትን) ይሳደቡ ነበር።",
      "socialTension": "ይሁዳ «ለቅዱሳን አንድ ጊዜ ፈጽሞ ስለ ተሰጠ ሃይማኖት እንድትጋደሉ» በማለት የሐሰተኞቹን እብሪት አጋለጠ (ቁ. 3)።"
    },
    "sceneEn": {
      "setting": "Carnal heretics infiltrated the church, turning the grace of God into sensuality and boasting of their esoteric authority over spirits.",
      "dailyLife": "These dreamers reviled celestial beings, strutting with arrogant, flippant contempt toward the invisible spiritual world.",
      "socialTension": "Jude urged believers to contend earnestly for the faith once delivered to the saints, contrasting these boasters with the archangel Michael."
    },
    "metaphorAm": {
      "origin": "የመላእክት አለቃ ሚካኤል ስለ ሙሴ ሥጋ ከዲያብሎስ ጋር በተከራከረ ጊዜ እንኳ ስድብን አልተናገረም፤ ይልቁንም «ጌታ ይገሥጽህ» በማለት ፍርዱን ለእግዚአብሔር ተወ።",
      "linguisticNuance": "«ክብራውያንን ይሳደባሉ» — ሐሰተኞቹ የመላእክት አለቃ ሚካኤል ያላደረገውን ድፍረት እያደረጉ በማያውቁት ነገር ላይ ይሳደባሉ።",
      "crowdReaction": "አማኞች በእውነተኛው መንፈሳዊ ውጊያ ውስጥ ያለውን ትህትናና በእግዚአብሔር ስልጣን ብቻ መታመንን ተማሩ።"
    },
    "metaphorEn": {
      "origin": "Even the mighty archangel Michael did not presume to pronounce an abusive, flippant slander against the Devil, but submitted to God: \"The Lord rebuke you!\"",
      "linguisticNuance": "Jude contrasts Michael’s holy restraint with the heretics who \"blaspheme all that they do not understand\" (v. 10).",
      "crowdReaction": "The church was warned against arrogant theatrics in spiritual warfare, recognizing that victory belongs solely to the sovereign Lord."
    },
    "distortionAm": {
      "claim": "ዘመናዊ \"የመንፈሳዊ ውጊያ\" (Spiritual Warfare) ሰባኪዎች በመድረክ ላይ ቆመው ዲያብሎስንና አጋንንትን በስድብ፣ በፌዝና በፉጨት በማዋረድ «እኔ ሰይጣንን እንደ ኳስ እጫወትበታለሁ» በማለት እብሪት ያሳያሉ።",
      "damage": "የይሁዳን ማስጠንቀቂያ ይጥሳል፤ ሰዎችን ወደ አደገኛ መንፈሳዊ እብሪት ይገፋል፤ እውነተኛውን የክርስቶስን ስልጣን ያቃልላል።"
    },
    "distortionEn": {
      "claim": "Showman spiritual warfare preachers scream theatrical insults, mockery, and profanities at Satan: \"I stomp the devil under my shoes and kick him around!\"",
      "damage": "It commits the exact sin Jude condemned: arrogant, flippant presumption toward unseen powers, replacing the Lord’s authority with human swagger."
    },
    "truthAm": {
      "contextSummary": "የይሁዳ መልእክት እውነተኛ አማኞች በመንፈስ ቅዱስ እየጸለዩ፣ ራሳቸውን በእግዚአብሔር ፍቅር እየጠበቁ በክርስቶስ ምሕረት እንዲተማመኑ የሚያስተምር ነው።",
      "surroundingVerses": "በቁጥር 24-25 ላይ «ሳትሰናከሉም እንዲጠብቃችሁ... ለብቻው አምላክ ለሚሆን ለአዳኛችን በኢየሱስ ክርስቶስ ክብር ይሁን» በማለት ድሉ የእግዚአብሔር መሆኑን አረጋግጧል።",
      "timelessPrinciple": "በመንፈሳዊ ውጊያ ውስጥ ስልጣኑ የክርስቶስ ብቻ ነው፤ እኛ በትህትና በእርሱ ቃልና በደሙ እንታመናለን እንጂ በገዛ ራሳችን እብሪት አንመካም።"
    },
    "truthEn": {
      "contextSummary": "Jude summons believers to humble, steadfast fidelity to apostolic truth, anchoring their defense in the sovereign keeping power of God.",
      "surroundingVerses": "Verses 24-25 close with an immortal doxology: \"Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy.\"",
      "timelessPrinciple": "Spiritual authority is grounded in humble submission to Jesus Christ and His Word, not carnal arrogance or theatrical shouting."
    },
    "crossReferences": [
      {
        "ref": "ዘካርያስ 3:2",
        "noteAm": "«እግዚአብሔርም ሰይጣንን፦ ሰይጣን ሆይ፥ እግዚአብሔር ይገሥጽህ... አለው»",
        "noteEn": "“And the Lord said to Satan, ‘The Lord rebuke you, O Satan! The Lord who has chosen Jerusalem rebuke you!’”"
      },
      {
        "ref": "2 ጴጥሮስ 2:10-11",
        "noteAm": "«ደፋሮችና ራሳቸውን ደስ የሚያሰኙ ሆነው ክብራውያንን ሲሳደቡ አይንቀጠቀጡም፤ መላእክት እንኳ በጌታ ፊት በእነርሱ ላይ የስድብን ፍርድ አያመጡም»",
        "noteEn": "“Bold and willful, they do not tremble as they blaspheme the glorious ones, whereas angels... do not bring a reviling judgment against them.”"
      },
      {
        "ref": "ያዕቆብ 4:7",
        "noteAm": "«እንግዲህ ለእግዚአብሔር ተገዙ፤ ዲያብሎስን ግን ተቃወሙ ከእናንተም ይሸሻል»",
        "noteEn": "“Submit yourselves therefore to God. Resist the devil, and he will flee from you.”"
      }
    ]
  },
  {
    "id": "capsule-b66",
    "bookNr": 66,
    "chapter": 3,
    "verseStart": 20,
    "verseEnd": 20,
    "verseRefAm": "የዮሐንስ ራእይ 3:20",
    "verseRefEn": "Revelation 3:20",
    "verseTextAm": "እነሆ በደጅ ቆሜ አንኳኳለሁ፤ ማንም ድምፄን ቢሰማ ደጁንም ቢከፍትልኝ፥ ወደ እርሱ እገባለሁ ከእርሱም ጋር እራት እበላለሁ እርሱም ከእኔ ጋር ይበላል።",
    "verseTextEn": "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.",
    "titleAm": "እነሆ በደጅ ቆሜ አንኳኳለሁ",
    "titleEn": "Behold, I Stand at the Door and Knock",
    "taglineAm": "ክርስቶስ በራሷ በር ላይ ለቆለፈችባት የሎዶቅያ ቤተክርስቲያን የተሰጠ ተግሣጽ",
    "taglineEn": "Christ locked outside His own lukewarm, self-satisfied church in Laodicea",
    "eraAm": "የሮም ንጉሠ-ነገሥት ዶሚቲያን ስደት ዘመን",
    "eraEn": "Domitianic Persecution of the Seven Churches",
    "locationAm": "በፍጥሞ ደሴት ለሎዶቅያ ቤተክርስቲያን የተላከ ራዕይ",
    "locationEn": "Patmos Vision to Laodicea",
    "yearApprox": "95 ዓ.ም.",
    "keyIcon": "🚪",
    "sceneAm": {
      "setting": "ሐዋርያው ዮሐንስ በፍጥሞ ደሴት በግዞት ሳለ በትንሿ እስያ (ቱርክ) ላሉት ሰባት አብያተ ክርስቲያናት የመጨረሻውን የክርስቶስ መገለጥ በጻፈበት ወቅት።",
      "dailyLife": "ሎዶቅያ በባንክ ሀብቷ፣ በጥቁር የበግ ጠጉር ልብሷና በዓይን መድኃኒቷ (የፍርግያ ዱቄት) እጅግ ባለጠጋ ከተማ ነበረች፤ ከተማዋ የውሃ ቦይ ሲኖራት ውሃው ለብ ያለ ነበር።",
      "socialTension": "ቤተክርስቲያኗ በከተማዋ ሀብት ተደልላ «ሀብታም ነኝና ባለጠጋ ሆኜአለሁ አንድም ስንኳ አያስፈልገኝም» በማለት ክርስቶስን ከውጭ ዘግታበት ነበር።"
    },
    "sceneEn": {
      "setting": "The apostle John exiled on the penal colony of Patmos receives the apocalyptic vision of the glorified Christ for seven Asian churches.",
      "dailyLife": "Laodicea was a fabulously wealthy banking hub, famed for soft black wool garments and an eye-salve powder; its piped aqueduct water arrived lukewarm and emetic.",
      "socialTension": "The Laodicean church mirrored its municipal smugness: \"I am rich, I have prospered, and I need nothing\" (Rev 3:17), locking Christ outside His own sanctuary."
    },
    "metaphorAm": {
      "origin": "ኢየሱስ በበሩ ቆሞ የሚያንኳኳው የማያምኑትን ወደ ድነት ለመጥራት ብቻ ሳይሆን፣ እርሱን ከውጪ ዘግታ በራሷ ሀብት ለተኩራራችው ለክርስቲያን ቤተክርስቲያን ኅብረት ለመመለስ ነው።",
      "linguisticNuance": "«ከእርሱ ጋር እራት እበላለሁ እርሱም ከእኔ ጋር ይበላል» — በመካከለኛው ምሥራቅ ባህል አብሮ መብላት ጥልቅ የወዳጅነት፣ የሰላምና የዕርቅ ማረጋገጫ ነው።",
      "crowdReaction": "ሎዶቅያውያን ንስሐ እንዲገቡና ከክርስቶስ በእሳት የነጠረውን እውነተኛ ወርቅና ነጭ ልብስ እንዲገዙ ተጣሩ።"
    },
    "metaphorEn": {
      "origin": "Christ standing outside knocking is not primarily an altar call for individual conversion, but the tragedy of the King locked out of His own local congregation.",
      "linguisticNuance": "Dining together (\"eat with him, and he with me\") evokes ancient Near Eastern table fellowship—reconciliation, covenant restoration, and shared intimacy.",
      "crowdReaction": "The Laodiceans were summoned to buy from Christ gold refined by fire, white garments to cover their shame, and eye salve to heal their blindness."
    },
    "distortionAm": {
      "claim": "ጥቅሱ በወንጌል ስብከት ላይ ለማያምኑ ሰዎች «ኢየሱስ በልባችሁ በር ቆሟል፤ ልባችሁን ክፈቱለት» ተብሎ ለግል መዳን ጥሪ ብቻ ይውላል።",
      "damage": "የጥቅሱን ዋና መልእክት ይደብቃል፤ ለብ ያሉ፣ በሀብት የሰከሩና ክርስቶስን ከአገልግሎታቸው ያገለሉ አብያተ ክርስቲያናትን የመገሰጽ ኃይሉን ያጠፋል።"
    },
    "distortionEn": {
      "claim": "Almost exclusively co-opted as an individualistic evangelistic slogan: \"Jesus is standing at the door of your unsaved heart begging you to let Him in.\"",
      "damage": "Blinds affluent, lukewarm churches to the terrifying reality that Christ may be completely absent from their programs, standing on the sidewalk outside."
    },
    "truthAm": {
      "contextSummary": "ራእይ 3:14-22 ለብ ያለችውን፣ በቁሳቁስ የደለበችውን ነገር ግን በመንፈስ «ጎስቋላና ምስኪን ድሀም ዕውርም የተራቆትህም» የሆነችውን ቤተክርስቲያን የሚገስጽ ነው።",
      "surroundingVerses": "በቁጥር 19 ላይ «እኔ የምወዳቸውን ሁሉ እገሥጻቸዋለሁ እቀጣቸውማለሁ፤ እንግዲህ ቅና ንስሐም ግባ» በማለት የክርስቶስን የፍቅር ተግሣጽ ያሳያል።",
      "timelessPrinciple": "ቤተክርስቲያን በቁሳቁስና በፕሮግራም ልትደልብ ትችላለች፤ ነገር ግን ክርስቶስ በመካከሏ ከሌለ ባዶ ናት፤ ጌታ ዛሬም ወደ ልባችንና ወደ ጉባኤያችን ለመግባት ያንኳኳል።"
    },
    "truthEn": {
      "contextSummary": "Revelation 3:14-22 is a blistering wake-up call to comfortable, materialistic congregations boasting of success while spiritually destitute.",
      "surroundingVerses": "Verse 19 reveals the motivation of the Knock: \"Those whom I love, I reprove and discipline, so be zealous and repent.\"",
      "timelessPrinciple": "A church can possess millions in the bank and packed pews while Jesus stands locked outside on the curb; true revival begins when we open the door to Him."
    },
    "crossReferences": [
      {
        "ref": "ራእይ 3:17",
        "noteAm": "«ሀብታም ነኝና ባለጠጋ ሆኜአለሁ አንድም ስንኳ አያስፈልገኝም የምትል ስለ ሆንህ፥ ጐስቋላና ምስኪንም ድሀም ዕውርም የተራቆትህም መሆንህን ስለማታውቅ»",
        "noteEn": "“For you say, I am rich, I have prospered, and I need nothing, not realizing that you are wretched, pitiable, poor, blind, and naked.”"
      },
      {
        "ref": "መኃልየ መኃልይ 5:2",
        "noteAm": "«እኔ ተኝቼ ነበር፥ ልቤ ግን ነቅቶ ነበር፤ የእጮኛዬ ድምፅ ነው፥ እርሱ ደጁን ያንኳኳል»",
        "noteEn": "“I slept, but my heart was awake. A sound! My beloved is knocking: ‘Open to me, my sister, my love.’”"
      },
      {
        "ref": "ሉቃስ 12:36",
        "noteAm": "«ጌታቸው ከመርዓት እስኪመለስ ድረስ የሚጠብቁትን ሰዎች ምሰሉ፥ በመጣና ባንኳኳ ጊዜ ወዲያው ይከፍቱለት ዘንድ»",
        "noteEn": "“Be like men who are waiting for their master to come home from the wedding feast, so that they may open the door to him at once when he comes and knocks.”"
      }
    ]
  }
]

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
