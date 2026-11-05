import type { PerspectiveMatrixItem } from './perspectiveMatrixData'

/**
 * Canon-Wide Multidimensional Perspective Matrix Dataset
 * Covers all 66 books of the Holy Bible with 4 simultaneous real-time lenses:
 * 1. Geopolitical / Eyewitness
 * 2. Theological / Covenantal
 * 3. Linguistic (Hebrew / Aramaic / Greek roots)
 * 4. Psychological / Human Experience
 */

export const CANON_66_BOOKS_MATRIX: Record<number, PerspectiveMatrixItem> = {
  // 1. GENESIS (ኦሪት ዘፍጥረት)
  1: {
    id: 'canon-book-1',
    sceneId: 'book-1',
    bookNr: 1,
    chapterStart: 1,
    titleEn: "Genesis: Origins, Ancient Empires & The Abrahamic Call",
    titleAm: "ኦሪት ዘፍጥረት፡ መጀመሪያዎች፣ ጥንታዊ ግዛቶችና የአብርሃም ጥሪ",
    eraEn: "Patriarchal & Primeval Era",
    eraAm: "የጥንት አበው ዘመን",
    geopolitical: {
      titleEn: "Ancient Near East, Ur of the Chaldees & Egypt",
      titleAm: "ጥንታዊቷ መካከለኛው ምስራቅ፣ የከለዳውያን ዑርና ግብፅ",
      empireEn: "Sumerian, Old Babylonian & Middle Kingdom Egypt",
      empireAm: "የሱሜሪያን፣ የቀድሞዋ ባቢሎንና የመካከለኛው መንግሥት ግብፅ",
      timeframe: "c. 2100 – 1800 BC",
      eyewitnessPOVEn: "Nomadic clans moving through fertile river valleys amidst city-states worshipping pantheons of sun, moon, and river deities. Abram leaves Ur—a sophisticated metropolitan hub—to live in tents as a stranger guided by a single unseen Voice.",
      eyewitnessPOVAm: "የአብርሃም ዘመን ሰዎች የፀሐይና የጨረቃ አማልክትን በሚያመልኩ የከተማ-ግዛቶች መካከል ይኖሩ ነበር። አብርሃም ከታላቋ ከተማ ከዑር ወጥቶ በማይታየው አምላክ ድምፅ እየተመራ በድንኳን መኖር ጀመረ።",
      historicalDynamicsEn: "Major trade corridors connecting Mesopotamia to the Nile Delta; constant tribal raiding, caravan diplomacy, and local city-state alliances (Gen 14).",
      historicalDynamicsAm: "ከመስጴጦምያ ወደ አባይ ሸለቆ የሚዘልቁ የንግድ መስመሮች፣ የጎሳ ግጭቶችና የድንበር ከተሞች ፖለቲካዊ ውጥረት የነገሠበት ዘመን ነበር።",
      groundRealitiesEn: "Pastoral nomadism, covenant-making by passing through severed animal carcasses, clay tablet legal adoptions, and famine-driven migrations to Egypt.",
      groundRealitiesAm: "የእንስሳት እርባታ ሕይወት፣ የተቆረጡ እንስሳትን በማለፍ የሚደረግ ጽኑ የቃል ኪዳን ሥርዓት፣ እና በድርቅ ምክንያት ወደ ግብፅ የሚደረግ ስደት።"
    },
    theological: {
      titleEn: "The Sovereignty of Yahweh & The Covenant of Promise",
      titleAm: "የእግዚአብሔር ሉዓላዊነትና የተስፋው ቃል ኪዳን",
      covenantStageEn: "Edenic to Abrahamic Covenant",
      covenantStageAm: "ከኤደን እስከ አብርሃም ቃል ኪዳን",
      redemptiveThemeEn: "God chooses one frail family to be the conduit of blessing to all scattered nations on earth (Gen 12:1–3), preserving the promised Seed.",
      redemptiveThemeAm: "እግዚአብሔር በምድር ላይ ላሉ አሕዛብ ሁሉ የበረከት ምንጭ እንድትሆን አንዲትን ቤተሰብ በአብርሃም በኩል መረጠ (ዘፍ 12:1–3)።",
      christForeshadowingEn: "The Seed of the woman crushing the serpent (Gen 3:15); Isaac as the beloved son offered on the altar; Melchizedek the royal priest; Joseph rejected by brothers then exalted to save them.",
      christForeshadowingAm: "የእባቡን ራስ የሚቀጠቅጠው የሴቲቱ ዘር (ዘፍ 3:15)፤ በመሰዊያው ላይ የተሰዋው ይስሐቅ፤ የሰላም ንጉሥና ካህን መልከ ጼዴቅ፤ በወንድሞቹ ተሽጦ ለዓለም መዳን ምክንያት የሆነው ዮሴፍ።",
      metaNarrativeAnchorEn: "Genesis lays the foundational grammar for the entire Bible: Creation, Fall, Promise, Election, and Providence.",
      metaNarrativeAnchorAm: "ኦሪት ዘፍጥረት የሙሉው መጽሐፍ ቅዱስ መሠረት ነው፡ ፍጥረት፣ ውድቀት፣ ተስፋ፣ ምርጫ እና መለኮታዊ ጥበቃ።"
    },
    linguistic: [
      {
        original: "בְּרֵאשִׁית",
        translit: "Bereshit",
        language: "Hebrew",
        amharicTerm: "በመጀመሪያ",
        literalMeaningEn: "In the beginning / At the head of time",
        literalMeaningAm: "በመጀመሪያ / በጊዜ መጀመሪያ",
        theologicalDepthEn: "Marks the decisive inaugurating boundary of time and cosmos by the singular decree of God.",
        theologicalDepthAm: "ጊዜና ፍጥረት በእግዚአብሔር ብቻ መጀመራቸውን የሚያረጋግጥ ጽኑ አዋጅ።",
        canonicalUsageEn: "Echoed verbatim in John 1:1 (\"In the beginning was the Word\").",
        canonicalUsageAm: "በዮሐንስ 1:1 “በመጀመሪያ ቃል ነበረ” በሚለው ቃል በቀጥታ ተስተጋብቷል።"
      },
      {
        original: "בְּרִית",
        translit: "Berith",
        language: "Hebrew",
        amharicTerm: "ቃል ኪዳን",
        literalMeaningEn: "Covenant / Binding treaty cut between parties",
        literalMeaningAm: "የተቆረጠ ጽኑ ቃል ኪዳን",
        theologicalDepthEn: "God unconditionally pledges his very life to fulfill his oath to Abraham.",
        theologicalDepthAm: "እግዚአብሔር ለአብርሃም የገባውን ቃል ለመጠበቅ የገባው የማይታጠፍ ቃል ኪዳን።",
        canonicalUsageEn: "Foundational concept from Genesis 15 to the New Covenant in Christ’s blood.",
        canonicalUsageAm: "ከዘፍጥረት 15 ጀምሮ በክርስቶስ ደም እስከተመሠረተው አዲስ ኪዳን ድረስ።"
      }
    ],
    psychological: {
      characterEn: "Abraham & The Patriarchs",
      characterAm: "አብርሃምና አበው",
      emotionalStateEn: "Vulnerability, wandering faith, agonizing waiting, profound wonder",
      emotionalStateAm: "እንግድነት፣ የሚዋልል እምነት፣ የረጅም ጊዜ መጠበቅ፣ ታላቅ አክብሮት",
      innerConflictEn: "Leaving familiar security for an unknown promised land; waiting 25 years for a promised son while growing biologically decrepit.",
      innerConflictAm: "የሚያውቁትን የተመቻቸ አገር ትቶ ወደማይታወቅ ምድር መጓዝ፤ 25 ዓመታት ሙሉ በእርጅና ውስጥ ሆኖ የተስፋውን ልጅ መጠበቅ።",
      existentialQuestionEn: "\"Lord God, what will you give me, seeing I go childless?\" (Gen 15:2)",
      existentialQuestionAm: "“አቤቱ እግዚአብሔር ሆይ፤ እኔ ያለ ልጅ ስሄድ ምን ትሰጠኛለህ?” (ዘፍ 15:2)",
      modernReflectionEn: "When God calls you into the unknown, trusting the Promise feels like walking into darkness; waiting on God is rarely easy, but he never abandons his covenant.",
      modernReflectionAm: "እግዚአብሔር ወደማታውቀው አዲስ መንገድ ሲጠራህ መጠበቅ ቢከብድም፤ የተናገረው አምላክ ታማኝ እንደሆነ አስታውስ።"
    }
  },

  // 2. EXODUS (ኦሪት ዘጸአት)
  2: {
    id: 'canon-book-2',
    sceneId: 'book-2',
    bookNr: 2,
    chapterStart: 1,
    titleEn: "Exodus: Liberation from Empire & Divine Indwelling",
    titleAm: "ኦሪት ዘጸአት፡ ከባርነት ነፃ መውጣትና የእግዚአብሔር ማደሪያ",
    eraEn: "The Exodus & Wilderness",
    eraAm: "የዘጸአትና የበረሃው ጉዞ ዘመን",
    geopolitical: {
      titleEn: "The New Kingdom Egyptian Superpower Confronted",
      titleAm: "የግብፅ አዲሱ መንግሥት ኢምፓየርና ፈርዖን",
      empireEn: "New Kingdom Egypt (18th/19th Dynasty)",
      empireAm: "የግብፅ አዲሱ መንግሥት (18ኛው/19ኛው ሥርወ መንግሥት)",
      timeframe: "c. 1446 – 1250 BC",
      eyewitnessPOVEn: "A brutal state forced-labor camp shattered by plagues striking Egypt’s sacred river, crops, and celestial gods. Moses confronts Pharaoh—the god-king—demanding liberation in the name of the I AM.",
      eyewitnessPOVAm: "በግብፅ ባርነት ውስጥ የነበረው የእስራኤል ሕዝብ መከራ፤ እግዚአብሔር የግብፅን አማልክት በዐሥሩ መቅሠፍታት ድል አድርጎ ሕዝቡን በታላቅ ክንድ ነፃ ሲያወጣ የታየበት እውነተኛ የታሪክ ክስተት።",
      historicalDynamicsEn: "Chariot warfare, fortress borders at the Nile Delta, infanticide as state demographic control, and imperial slave brick-making factories.",
      historicalDynamicsAm: "በአባይ ወንዝ ዙሪያ የነበረው ወታደራዊ ምሽግ፣ የሕዝብ ቁጥር ለመቀነስ ወንዶች ሕፃናት እንዲገደሉ የተሰጠው አዋጅና የጡብ ሥራ ግዞት።",
      groundRealitiesEn: "Mud-brick masonry with straw under whips, blood on doorposts at midnight, the desert trek under a pillar of cloud and fire.",
      groundRealitiesAm: "በጭቃና በገለባ ጡብ ማዘጋጀት፣ በኩረ ሞትን ያስቀረው የበጉ ደም በመቃኑ ላይ፣ እና በበረሃው ጉዞ የቀኑ የደመናና የሌሊቱ የእሳት ዓምድ።"
    },
    theological: {
      titleEn: "Yahweh the Deliverer, Lawgiver, and Tabernacling King",
      titleAm: "እግዚአብሔር ታዳጊ፣ ሕግ ሰጪና በማዕከላቸው የሚያድር ንጉሥ",
      covenantStageEn: "The Mosaic / Sinai Covenant",
      covenantStageAm: "የሲና (የሙሴ) ቃል ኪዳን",
      redemptiveThemeEn: "God redeems his people not merely to be free, but to be a holy nation of priests in covenant communion with him.",
      redemptiveThemeAm: "እግዚአብሔር ሕዝቡን የታደገው ከባርነት ነፃ እንዲወጡ ብቻ ሳይሆን የካህናት መንግሥትና የተቀደሰ ሕዝብ እንዲሆኑ ነው።",
      christForeshadowingEn: "The Passover Lamb whose blood averts judgment (Exod 12); Manna from heaven (John 6); the Smitten Rock giving water (1 Cor 10:4); the Tabernacle as God dwelling among men (John 1:14).",
      christForeshadowingAm: "ከሞት ያዳነው የፋሲካው በግ (ዘጸ 12)፤ ከሰማይ የወረደው መና፤ የተመታውና ውኃ ያፈለቀው ዓለት፤ በማዕከላቸው ያደረው የማደሪያው ድንኳን (ዮሐ 1:14)።",
      metaNarrativeAnchorEn: "The Exodus is the foundational salvation event of the Old Testament, the template for the Cross and cosmic redemption.",
      metaNarrativeAnchorAm: "ዘጸአት የብሉይ ኪዳን የመዳን ሁሉ ዋና ማዕከል ነው፤ ይህም በመስቀል ላይ ለተፈጸመው የመጨረሻው መዳን ጥላ ነው።"
    },
    linguistic: [
      {
        original: "יַהְוֶה",
        translit: "Yahweh (YHWH)",
        language: "Hebrew",
        amharicTerm: "እግዚአብሔር (ያህዌ)",
        literalMeaningEn: "I AM WHO I AM / The Self-Existent One",
        literalMeaningAm: "ያለና የሚኖር / እኔ ነኝ ያለሁት",
        theologicalDepthEn: "The covenant name revealed at the burning bush; God is eternally uncaused, faithful, and present.",
        theologicalDepthAm: "በቁጥቋጦው ውስጥ ለሙሴ የተገለጠው ቅዱስ ስም፤ ዘላለማዊ፣ ራሱን የቻለና ከሕዝቡ ጋር የሚኖር አምላክ።",
        canonicalUsageEn: "Exodus 3:14–15; Jesus applies this to himself in John 8:58 (\"Before Abraham was, I am\").",
        canonicalUsageAm: "ዘጸአት 3:14፤ ጌታችን ኢየሱስ በዮሐንስ 8:58 “አብርሃም ሳይወለድ እኔ ነኝ” በማለት ለራሱ ተጠቅሞበታል።"
      },
      {
        original: "פֶּסַח",
        translit: "Pesach",
        language: "Hebrew",
        amharicTerm: "ፋሲካ",
        literalMeaningEn: "Passover / To pass over and spare",
        literalMeaningAm: "ፋሲካ / ማለፍና ማዳን",
        theologicalDepthEn: "Substitutionary sacrifice: the innocent lamb dies so the firstborn lives.",
        theologicalDepthAm: "የተተኪ መሥዋዕት ምስጢር፤ በጉ ተሰውቶ የበኵር ልጁ በሕይወት የሚተርፍበት የእግዚአብሔር ጸጋ።",
        canonicalUsageEn: "Exodus 12:13; 1 Cor 5:7 (\"Christ, our Passover lamb, has been sacrificed\").",
        canonicalUsageAm: "ዘጸአት 12:13፤ 1 ቆሮ 5:7 “ፋሲካችን ክርስቶስ ታርዶአልና።”"
      }
    ],
    psychological: {
      characterEn: "Moses & The Hebrew Enslaved",
      characterAm: "ሙሴና የተጨቆነው ሕዝብ",
      emotionalStateEn: "Trauma, terror at the Red Sea, overwhelming awe before Sinai, stammering inadequacy",
      emotionalStateAm: "የባርነት ስብራት፣ በኤርትራ ባሕር ፊት የነበረው ታላቅ ድንጋጤ፣ በሲና ተራራ ፊት የነበረው መንቀጥቀጥ",
      innerConflictEn: "Moses arguing at the bush: \"Who am I that I should go to Pharaoh?\"; Israel trapped between chariots and the deep sea crying out in panic.",
      innerConflictAm: "ሙሴ “እኔ ወደ ፈርዖን የምሄድ ማን ነኝ?” በማለት ብቃቱን ሲጠራጠር፤ ሕዝቡ በፈርዖን ሠራዊትና በባሕሩ መካከል ተከበው በጭንቀት መጮኻቸው።",
      existentialQuestionEn: "\"Stand firm, and see the salvation of the Lord, which he will work for you today!\" (Exod 14:13)",
      existentialQuestionAm: "“አትፍሩ፥ ጸንታችሁ ቁሙ፥ ዛሬ ለእናንተ የሚያደርጋትን የእግዚአብሔርን ማዳን እዩ!” (ዘጸ 14:13)",
      modernReflectionEn: "When the sea is before you and the enemy behind, deliverance does not come from your strength; stand firm and trust God to make a path through deep waters.",
      modernReflectionAm: "ከፊትህ ባሕር ከበስተኋላህ ጠላት ሲከብህ መፍትሔው በራስህ ጥረት አይገኝም፤ ጸንተህ ቁምና እግዚአብሔር በባሕሩ መካከል መንገድ ሲከፍት እይ።"
    }
  },

  // 3. LEVITICUS (ኦሪት ዘሌዋውያን)
  3: {
    id: 'canon-book-3',
    sceneId: 'book-3',
    bookNr: 3,
    chapterStart: 1,
    titleEn: "Leviticus: The Architecture of Holiness & Atonement",
    titleAm: "ኦሪት ዘሌዋውያን፡ የቅድስና ሥርዓትና የኃጢአት ስርየት",
    eraEn: "At the Foot of Mount Sinai",
    eraAm: "በሲና ተራራ ግርጌ የተሰጠ መመሪያ",
    geopolitical: {
      titleEn: "Sacred Space Encamped in the Sinai Peninsula",
      titleAm: "በሲና ምድረ በዳ የተተከለው የተቀደሰ ማደሪያ",
      empireEn: "Late Bronze Age Nomadic Camp surrounding God’s Throne",
      empireAm: "በነሐስ ዘመን በሲና ምድረ በዳ የተሰፈረ ቅዱስ ሰፈር",
      timeframe: "c. 1445 BC",
      eyewitnessPOVEn: "A pristine sacred tent glowing with cloud in the exact center of twelve tribal camps. Smoke from the bronze altar rises constantly; priests in linen and gemstones carry basins of blood to cleanse systemic uncleanness.",
      eyewitnessPOVAm: "በዐሥራ ሁለቱ ነገዶች ሰፈር መካከል የተተከለው ድንኳን፤ የእግዚአብሔር ክብር የሞላበት ማደሪያ፤ ካህናቱ በደም ማስተስረያ እያቀረቡ ከኃጢአት የሚነጹበት ቅዱስ ሥርዓት።",
      historicalDynamicsEn: "Distinction between profane surrounding desert cultures (Canaanite child sacrifice and orgiastic rites) and the utter moral purity demanded by Yahweh.",
      historicalDynamicsAm: "ከአካባቢው አረማውያን አስጸያፊ የጣዖት አምልኮና የልጆች መሥዋዕት የተለየ፣ ፍጹም ንጹሕና የተቀደሰ ማኅበረሰብ ለመገንባት የተሰጠ ሕግ።",
      groundRealitiesEn: "The smell of frankincense and burning fat, the blood on the horns of the altar, scapegoat released into the barren wilderness.",
      groundRealitiesAm: "የዕጣኑ መዓዛ፣ በመሰዊያው ቀንዶች ላይ የሚረጨው ደም፣ እና ኃጢአትን ተሸክሞ ወደ ምድረ በዳ የሚሰደደው የዐዛዝል ፍየል።"
    },
    theological: {
      titleEn: "The Holy God Dwelling with Sinful Humans",
      titleAm: "ቅዱሱ እግዚአብሔር በኃጢአተኞች መካከል ሲያድር",
      covenantStageEn: "Sinai Priesthood and Sacrificial Code",
      covenantStageAm: "የክህነትና የመሥዋዕት ቃል ኪዳን",
      redemptiveThemeEn: "\"You shall be holy, for I the Lord your God am holy\" (Lev 19:2). Blood is given upon the altar to make atonement for life.",
      redemptiveThemeAm: "“እኔ እግዚአብሔር አምላካችሁ ቅዱስ ነኝና እናንተም ቅዱሳን ሁኑ” (ዘሌ 19:2)፤ ደም ለነፍስ ማስተስረያ ሆኖ በመሰዊያው ላይ ተሰጠ።",
      christForeshadowingEn: "The Day of Atonement (Yom Kippur) fulfilling the once-for-all sacrifice of Christ (Heb 9–10); the High Priest entering the Holy of Holies; the Scapegoat carrying sins away.",
      christForeshadowingAm: "በዓመት አንድ ጊዜ የሚደረገው የሥርየት ቀን (ዮም ኪፑር)፤ ፍጹም ሊቀ ካህናት ሆኖ ራሱን መሥዋዕት ያደረገው ክርስቶስ (ዕብ 9-10)፤ ኃጢአታችንን ይዞ የተሰደደው አዛዝል።",
      metaNarrativeAnchorEn: "Leviticus provides the indispensable theological vocabulary for the Cross: atonement, propitiation, holiness, sanctification.",
      metaNarrativeAnchorAm: "ዘሌዋውያን ለክርስቶስ የመስቀል መሥዋዕት ዋና የነገረ መለኮት ቋንቋ ነው፡ ስርየት፣ ቅድስና፣ መታጠብና ከእግዚአብሔር ጋር መታረቅ።"
    },
    linguistic: [
      {
        original: "קָדוֹשׁ",
        translit: "Kadosh",
        language: "Hebrew",
        amharicTerm: "ቅዱስ",
        literalMeaningEn: "Set apart, utterly unique, radiant purity",
        literalMeaningAm: "የተለየ፣ ንጹሕ፣ ፍጹም ቅዱስ",
        theologicalDepthEn: "God’s fundamental ontological and moral separation from all decay, sin, and death.",
        theologicalDepthAm: "እግዚአብሔር ከክፋትና ከሟችነት ሁሉ ፍጹም የተለየና የንጽሕና ሁሉ ምንጭ መሆኑን ያመለክታል።",
        canonicalUsageEn: "Leviticus 19:2; Isaiah 6:3; 1 Peter 1:16.",
        canonicalUsageAm: "ዘሌዋውያን 19:2፤ ኢሳይያስ 6:3፤ 1 ጴጥሮስ 1:16።"
      },
      {
        original: "כִּפֻּר",
        translit: "Kippur",
        language: "Hebrew",
        amharicTerm: "ስርየት (ማስተስረያ)",
        literalMeaningEn: "Atonement / To cover, ransom, wipe clean",
        literalMeaningAm: "መሸፈን፣ ማጽዳት፣ ቤዛ መሆን",
        theologicalDepthEn: "Innocent life pays the penalty to restore a severed relational bond with God.",
        theologicalDepthAm: "የንጹሑ ደም የኃጢአተኛውን ቅጣት በመተካት ከእግዚአብሔር ጋር ሰላምን ማምጣቱ።",
        canonicalUsageEn: "Leviticus 16 (Yom Kippur); Romans 3:25; Hebrews 9:22.",
        canonicalUsageAm: "ዘሌዋውያን 16፤ ሮሜ 3:25፤ ዕብራውያን 9:22 (“ያለ ደም ማፍሰስ ስርየት የለም”)።"
      }
    ],
    psychological: {
      characterEn: "Aaron & The Sons of Levi",
      characterAm: "አሮንና የሌዊ ልጆች",
      emotionalStateEn: "Trembling reverence, terror of profane fire, burden of bearing tribal guilt",
      emotionalStateAm: "የሚያንቀጠቅጥ ፍርሃት፣ የእግዚአብሔርን ቅድስና የመጠበቅ ከባድ ኃላፊነት",
      innerConflictEn: "Nadab and Abihu consumed by fire for offering strange incense; Aaron holding his silence under God’s solemn judgment.",
      innerConflictAm: "የአሮን ልጆች ናዳብና አብዩህ ባልታዘዘው እሳት ተበልተው ሲሞቱ አሮን ዝም ብሎ የእግዚአብሔርን ቅድስና ማክበሩ።",
      existentialQuestionEn: "\"Who can stand in the presence of this holy God?\"",
      existentialQuestionAm: "“በዚህ ቅዱስ አምላክ ፊት መቆም የሚችል ማን ነው?”",
      modernReflectionEn: "Grace is not the lowering of God’s holiness, but the costly provision of atonement so broken people can live in intimacy with Him.",
      modernReflectionAm: "ጸጋ ማለት የእግዚአብሔር ቅድስና ዝቅ አለ ማለት ሳይሆን፤ ኃጢአተኛው በክርስቶስ ደም ነጽቶ ወደ ቅዱሱ አምላክ እንዲቀርብ መንገድ ተከፈተ ማለት ነው።"
    }
  },

  // 4. NUMBERS (ኦሪት ዘኍልቍ)
  4: {
    id: 'canon-book-4',
    sceneId: 'book-4',
    bookNr: 4,
    chapterStart: 1,
    titleEn: "Numbers: The Wilderness March & Covenant Testing",
    titleAm: "ኦሪት ዘኍልቍ፡ የበረሃው ጉዞና የቃል ኪዳን ፈተና",
    eraEn: "The 40-Year Wilderness Wandering",
    eraAm: "የአርባ ዓመቱ የምድረ በዳ ጉዞ",
    geopolitical: {
      titleEn: "The Arid Steppes from Sinai to Kadesh-Barnea and Moab",
      titleAm: "የአሕዛብ ድንበሮችና በበረሃ የተካሄደው የሕዝብ ቆጠራ",
      empireEn: "Amorite, Moabite & Edomite Strongholds",
      empireAm: "የአሞራውያን፣ የሞዓብና የኤዶምያስ ምሽጎች",
      timeframe: "c. 1445 – 1406 BC",
      eyewitnessPOVEn: "A marching nation of hundreds of thousands surrounded by harsh desolate canyons, poisonous snakes, scarce water wells, and fortified kingdoms blocking every mountain pass.",
      eyewitnessPOVAm: "በበረሃው ግለትና ውሃ ጥም ውስጥ የሚጓዝ ታላቅ ሕዝብ፤ በአስፈሪ እባቦችና ድንበራቸውን በዘጉ ጠላት አሕዛብ መካከል የተደረገ ጉዞ።",
      historicalDynamicsEn: "Military staging for the conquest; foreign prophet Balaam hired by Moab’s king to cast imperial curses, turned into divine blessings.",
      historicalDynamicsAm: "የሞዓብ ንጉሥ በለዓምን ቀጥሮ ሕዝቡን እንዲረግም ማድረጉ፤ እግዚአብሔር ግን እርግማኑን ወደ በረከት የቀየረበት ዲፕሎማሲያዊ ውጥረት።",
      groundRealitiesEn: "Manna every morning, the bronze serpent on a pole, water from rock, marching by trumpet sound.",
      groundRealitiesAm: "በየማለዳው የሚወርደው መና፣ በእንጨት ላይ የተሰቀለው የናስ እባብ፣ እና በመለከት ድምፅ የሚመራ ጉዞ።"
    },
    theological: {
      titleEn: "Human Faithlessness vs. Divine Covenant Faithfulness",
      titleAm: "የሰው ልጅ ማጉረምረምና የእግዚአብሔር የማይናወጥ ታማኝነት",
      covenantStageEn: "Sinai Covenant Tested in the Wilderness",
      covenantStageAm: "በበረሃ የተፈተነው የሲና ቃል ኪዳን",
      redemptiveThemeEn: "Even when an entire generation forfeits their inheritance through unbelief, God’s promise cannot be thwarted—he raises the next generation.",
      redemptiveThemeAm: "አንደኛው ትውልድ ባለማመን ቢወድቅም፤ የእግዚአብሔር ዓላማ አይሰረዝም፤ ቀጣዩን ትውልድ ለርስቱ ያዘጋጃል።",
      christForeshadowingEn: "The Bronze Serpent lifted on a pole (Num 21:9) where all who look live, directly cited by Jesus in John 3:14–15 as the model of the Cross.",
      christForeshadowingAm: "በእንጨት ላይ የተሰቀለው የናሱ እባብ፤ ያዩት ሁሉ ከሞት እንደዳኑ ክርስቶስም በመስቀል ላይ ለሚያዩት ሁሉ የዘላለም ሕይወት ሆነ (ዮሐ 3:14-15)።",
      metaNarrativeAnchorEn: "1 Cor 10:1–11 warns the church: these things happened to them as examples for our instruction.",
      metaNarrativeAnchorAm: "1 ቆሮ 10:1-11 “ይህም ሁሉ እንደ ምሳሌ ሆነባቸው ለእኛም ሊገሥጸን ተጻፈ” በማለት ያስጠነቅቀናል።"
    },
    linguistic: [
      {
        original: "בַּמִּדְבָּר",
        translit: "Bamidbar",
        language: "Hebrew",
        amharicTerm: "በምድረ በዳ",
        literalMeaningEn: "In the wilderness / In the desert waste",
        literalMeaningAm: "በምድረ በዳ (የዕብራይስጡ የመጽሐፉ ስም)",
        theologicalDepthEn: "The place where all human self-sufficiency is stripped away and God alone feeds and sustains.",
        theologicalDepthAm: "የሰው ልጅ እውቀትና ብልሃት የሚያበቃበትና በእግዚአብሔር ብቻ የመደገፍ ምስጢር የሚማርበት ስፍራ።",
        canonicalUsageEn: "Hebrew title of Numbers; repeated in Deuteronomy 8:2.",
        canonicalUsageAm: "የኦሪት ዘኍልቍ ዋና የዕብራይስጥ ርዕስና በዘዳግም 8:2 የተገለጠው ፈተና።"
      }
    ],
    psychological: {
      characterEn: "The Ten Spies & Joshua / Caleb",
      characterAm: "አስሩ ሰላዮችና ኢያሱ / ካሌብ",
      emotionalStateEn: "Grasshopper complex, overwhelming anxiety, courageous conviction",
      emotionalStateAm: "የአንበጣነት ስሜት (የዝቅተኝነት መንፈስ)፣ ፍርሃት፣ ጽኑ ድፍረት",
      innerConflictEn: "Seeing giants and walled cities: \"We were like grasshoppers in our own eyes\" vs. Caleb: \"The Lord is with us; do not fear them!\"",
      innerConflictAm: "የከነዓንን ምሽጎች አይተው በፍርሃት መራድ፤ “በዓይናችን እንደ አንበጣዎች ነበርን” በማለት በራስ መተማመንን ማጣት።",
      existentialQuestionEn: "\"Why is the Lord bringing us into this land to fall by the sword?\" (Num 14:3)",
      existentialQuestionAm: "“እግዚአብሔር በሰይፍ እንወድቅ ዘንድ ወደዚች ምድር ለምን ያመጣናል?” (ዘኍ 14:3)",
      modernReflectionEn: "When challenges look like giants, your perspective determines your destiny: do you measure the obstacle against yourself, or against Almighty God?",
      modernReflectionAm: "የሚገጥምህን ችግር ከራስህ ደካማ አቅም ጋር ሳይሆን ከእግዚአብሔር ታላቅ ኃይል ጋር አነጻጽረው፤ በእምነት የተራመደ ያሸንፋል።"
    }
  },

  // 5. DEUTERONOMY (ኦሪት ዘዳግም)
  5: {
    id: 'canon-book-5',
    sceneId: 'book-5',
    bookNr: 5,
    chapterStart: 1,
    titleEn: "Deuteronomy: The Covenant Renewal & Heart Devotion",
    titleAm: "ኦሪት ዘዳግም፡ የቃል ኪዳን መታደስና የልብ ፍቅር",
    eraEn: "Plains of Moab",
    eraAm: "በሞዓብ ሜዳ የተደረገው የመሰናበቻ ቃል",
    geopolitical: {
      titleEn: "Ancient Near Eastern Suzerainty Treaty Structure",
      titleAm: "ጥንታዊው የጌታና የአገልጋይ የቃል ኪዳን ሰነድ",
      empireEn: "Canaanite Frontier / Hittite Treaty Era",
      empireAm: "የከነዓን ድንበርና የኬጢያውያን የኪዳን ዘመን",
      timeframe: "c. 1406 BC",
      eyewitnessPOVEn: "Moses, aged 120 with undimmed eyes, standing on the threshold of Jordan delivering his farewell addresses to a new generation poised to cross into the hill country of Canaan.",
      eyewitnessPOVAm: "ሙሴ በ120 ዓመቱ ዓይኑ ሳይፈዝ በዮርዳኖስ ማዶ ለተሰበሰበው አዲስ ትውልድ የተናገረው የመጨረሻው ልብ የሚነካ የስንብት ንግግር።",
      historicalDynamicsEn: "Structured precisely like a 2nd-millennium BC royal suzerainty covenant: Preamble, Historical Prologue, Stipulations, Blessings & Curses, Witnesses.",
      historicalDynamicsAm: "በጥንቱ ዘመን በንጉሥና በሕዝቡ መካከል ይደረግ በነበረው የኪዳን ሰነድ አወቃቀር የተዘጋጀ፡ ታሪክ፣ ሕጎች፣ በረከቶችና መርገሞች።",
      groundRealitiesEn: "Cities you did not build, vineyards you did not plant, the temptation to forget God when prosperous.",
      groundRealitiesAm: "ያልሠራሃቸውን ከተሞችና ያልተከልካቸውን የወይን ቦታዎች በወረስክ ጊዜ እግዚአብሔርን እንዳትረሳ የተሰጠ ብርቱ ማስጠንቀቂያ።"
    },
    theological: {
      titleEn: "The Shema & The Circumcision of the Heart",
      titleAm: "ስማ እስራኤል ሆይና የልብ መገረዝ",
      covenantStageEn: "Deuteronomic Covenant Renewal",
      covenantStageAm: "የቃል ኪዳኑ መታደስና የልብ ታማኝነት",
      redemptiveThemeEn: "God requires not mere external compliance but love: \"Love the Lord your God with all your heart, soul, and strength\" (Deut 6:5).",
      redemptiveThemeAm: "እግዚአብሔር የውጭ ሥርዓትን ብቻ ሳይሆን ፍጹም የልብ ፍቅርን ይሻል፤ “አምላክህን እግዚአብሔርን በፍጹም ልብህ ውደድ።”",
      christForeshadowingEn: "The Prophet like Moses (Deut 18:15) whom God will raise; Christ in the wilderness defeated Satan quoting Deuteronomy three times.",
      christForeshadowingAm: "እንደ ሙሴ ያለ የሚነሳው ታላቁ ነቢይ (ዘዳ 18:15)፤ ክርስቶስም በምድረ በዳ ሰይጣንን ድል የነሳው ከዘዳግም ሦስት ጊዜ በመጥቀስ ነው።",
      metaNarrativeAnchorEn: "Jesus identified Deuteronomy 6:5 as the Great and First Commandment of all Scripture.",
      metaNarrativeAnchorAm: "ጌታችን ኢየሱስ በወንጌል የሕግ ሁሉ ታላቅና መጀመሪያ ብሎ ያወጀው የዘዳግም 6:5ን ቃል ነው።"
    },
    linguistic: [
      {
        original: "שְׁמַע",
        translit: "Shema",
        language: "Hebrew",
        amharicTerm: "ስማ",
        literalMeaningEn: "Hear, listen with intent to obey",
        literalMeaningAm: "ስማ (ለመታዘዝ አድምጥ)",
        theologicalDepthEn: "Hearing and obeying are undivided in Hebrew thought; to hear God is to follow him wholeheartedly.",
        theologicalDepthAm: "በዕብራይስጥ ማዳመጥ ማለት በተግባር መታዘዝ ማለት ነው፤ የእግዚአብሔርን ቃል መስማት ማለት መከተል ነው።",
        canonicalUsageEn: "Deuteronomy 6:4: \"Hear, O Israel: The Lord our God, the Lord is one.\"",
        canonicalUsageAm: "ዘዳግም 6:4፡ “እስራኤል ሆይ፥ ስማ፤ አምላካችን እግዚአብሔር አንድ እግዚአብሔር ነው።”"
      }
    ],
    psychological: {
      characterEn: "Moses & The New Generation",
      characterAm: "ሙሴና አዲሱ ትውልድ",
      emotionalStateEn: "Fatherly urgency, poignant sorrow of not entering, vibrant hope for the children",
      emotionalStateAm: "የአባታዊ ፍቅር አጣዳፊነት፣ ምድሪቱን ያለመርገጥ ልብ ሰባሪ ኀዘን፣ ለልጆቹ ያለው ጽኑ ተስፋ",
      innerConflictEn: "Moses gazing over Canaan from Mount Nebo, dying alone with God without crossing, yet celebrating the inheritance of his people.",
      innerConflictAm: "ሙሴ በናባው ተራራ ላይ ቆሞ ተስፋይቱን ምድር ከሩቅ እያየ በብቸኝነት ከፈጣሪው ጋር ማረፉ።",
      existentialQuestionEn: "\"Choose life, that you and your offspring may live!\" (Deut 30:19)",
      existentialQuestionAm: "“አንተና ዘርህ በሕይወት ትኖሩ ዘንድ ሕይወትን ምረጥ!” (ዘዳ 30:19)",
      modernReflectionEn: "Prosperity is often more dangerous to faith than poverty; remember God not only in your desperation, but in your success.",
      modernReflectionAm: "ሁሉም ነገር ሲሳካልህና ስትጠግብ እግዚአብሔርን እንዳትረሳ ተጠንቀቅ፤ ዛሬም ሕይወትንና በረከትን ምረጥ።"
    }
  },

  // 6. JOSHUA (መጽሐፈ ኢያሱ ወልደ ነዌ)
  6: {
    id: 'canon-book-6',
    sceneId: 'book-6',
    bookNr: 6,
    chapterStart: 1,
    titleEn: "Joshua: The Conquest & Inheritance of the Land",
    titleAm: "መጽሐፈ ኢያሱ፡ ተስፋይቱን ምድር መውረስና ድል",
    eraEn: "Conquest of Canaan",
    eraAm: "የከነዓን ምድር ወረራ ዘመን",
    geopolitical: {
      titleEn: "Fortified Canaanite City-States & Jordan Crossing",
      titleAm: "የከነዓን ግንቦችና የዮርዳኖስ ማዶ ድል",
      empireEn: "Late Bronze Age Canaanite Coalitions",
      empireAm: "የከነዓን የአሞራውያን ከተማ-መንግሥታት",
      timeframe: "c. 1406 – 1375 BC",
      eyewitnessPOVEn: "A sudden invasion of nomadic tribes crossing the flooded Jordan; stone-walled Jericho collapsing without siege engines; fear paralyzing Canaanite kings.",
      eyewitnessPOVAm: "የሞላው ዮርዳኖስ ተከፍሎ ሕዝቡ ሲሻገር፤ የኢያሪኮ ቅጥሮች ያለ ጦር መሣሪያ በእልልታ ሲወድቁ የታየበት አስደናቂ ክስተት።",
      historicalDynamicsEn: "Fragmented Canaanite kings forming northern and southern coalitions; Bronze-age hill fortifications against Israelite guerrilla faith tactics.",
      historicalDynamicsAm: "የከነዓን ነገሥታት ተባብረው እስራኤልን ለመውጋት ያደረጉት ጥረት እና በእግዚአብሔር እጅ የተሰበሩበት የታሪክ ወቅት።",
      groundRealitiesEn: "Memorial stones taken from the dry riverbed, the circumcision at Gilgal, dividing land by sacred lot.",
      groundRealitiesAm: "ከዮርዳኖስ ወንዝ የተወሰዱ የመታሰቢያ ድንጋዮች፣ በጌልገላ የተደረገው የግርዛት መታደስ፣ እና ምድሪቱን በዕጣ መከፋፈል።"
    },
    theological: {
      titleEn: "Yahweh the Divine Warrior Fulfilling His Promise",
      titleAm: "እግዚአብሔር ተዋጊና ቃሉን የሚፈጽም ጻድቅ አምላክ",
      covenantStageEn: "Fulfillment of the Abrahamic Land Promise",
      covenantStageAm: "ለአብርሃም የተሰጠው የምድር ተስፋ ፍጻሜ",
      redemptiveThemeEn: "\"Not one word has failed of all the good things that the Lord your God promised concerning you\" (Josh 23:14).",
      redemptiveThemeAm: "እግዚአብሔር ለሕዝቡ ከተናገረው መልካም ቃል ሁሉ አንዲትም አልወደቀችም፤ ሁሉም ተፈጸመ (ኢያ 23:14)።",
      christForeshadowingEn: "Joshua (Yeshua—Yahweh is Salvation) leading into the rest that Moses could not give (Hebrews 4:8–9); the Commander of the Lord’s Army (Josh 5:13–15).",
      christForeshadowingAm: "ኢያሱ (የሹዓ - እግዚአብሔር ማዳን ነው) ሕዝቡን ወደ ዕረፍት ያገባ መሪ፤ ክርስቶስም ወደ ዘላለም ዕረፍት የሚያገባን መሪያችን ነው (ዕብ 4:8-9)።",
      metaNarrativeAnchorEn: "Joshua demonstrates that God’s covenant promises are historically concrete and invincible.",
      metaNarrativeAnchorAm: "የእግዚአብሔር ቃል ኪዳን በታሪክ ውስጥ በተጨባጭ የሚፈጸም የማይናወጥ ኃይል መሆኑን መጽሐፈ ኢያሱ ያረጋግጣል።"
    },
    linguistic: [
      {
        original: "חָזַק וֶאֱמָץ",
        translit: "Chazak ve-ematz",
        language: "Hebrew",
        amharicTerm: "ጽና አይዞህ",
        literalMeaningEn: "Be strong and of courageous resolve",
        literalMeaningAm: "ጽና፥ ደፋርም ሁን",
        theologicalDepthEn: "Courage grounded not in human bravery but in the guaranteed presence of God.",
        theologicalDepthAm: "የእግዚአብሔር አብሮ መሆን ዋስትና ስላለው ከፍርሃት ነፃ ሆኖ በድፍረት መቆም።",
        canonicalUsageEn: "Joshua 1:6, 7, 9.",
        canonicalUsageAm: "ኢያሱ 1:6-9።"
      }
    ],
    psychological: {
      characterEn: "Joshua & Rahab of Jericho",
      characterAm: "ኢያሱና የኢያሪኮዋ ረዓብ",
      emotionalStateEn: "Weight of leadership after Moses, awe, bold defying faith of an outcast",
      emotionalStateAm: "የታላቁን መሪ የሙሴን ቦታ የመረከብ ኃላፊነት፣ እምነት፣ የረዓብ ደፋር ምርጫ",
      innerConflictEn: "Facing fortified giants without Moses; Rahab betraying her own pagan city to cast her lot with the God of Israel.",
      innerConflictAm: "ሙሴ በሌለበት ምሽጎቹን መጋፈጥ፤ ረዓብ የገዛ ከተማዋን ትታ በእስራኤል አምላክ ጥላ ሥር መሸሸጓ።",
      existentialQuestionEn: "\"As for me and my house, we will serve the Lord!\" (Josh 24:15)",
      existentialQuestionAm: "“እኔና ቤቴ ግን እግዚአብሔርን እናመልካለን!” (ኢያ 24:15)",
      modernReflectionEn: "Inheriting God’s promises requires courage to step into floodwaters before they part; faith acts before circumstances change.",
      modernReflectionAm: "የእግዚአብሔርን ተስፋ ለመውረስ ወንዙ ሳይከፈል እግርህን ወደ ውኃው የማስገባት እምነት ያስፈልግሃል።"
    }
  },

  // 7. JUDGES (መጽሐፈ መሣፍንት)
  7: {
    id: 'canon-book-7',
    sceneId: 'book-7',
    bookNr: 7,
    chapterStart: 1,
    titleEn: "Judges: The Dark Spiral & Cry for a Righteous King",
    titleAm: "መጽሐፈ መሣፍንት፡ የውድቀት አዙሪትና የእውነተኛ ንጉሥ ጥሪ",
    eraEn: "The Era of the Judges",
    eraAm: "የመሣፍንት ዘመን",
    geopolitical: {
      titleEn: "Tribal Fragmentation & Surrounding Regional Warlords",
      titleAm: "የነገዶች መከፋፈልና የአካባቢው ገዢዎች ጭቆና",
      empireEn: "Philistine, Midianite, Moabite & Canaanite Oppressors",
      empireAm: "የፍልስጥኤማውያን፣ የምድያምና የሞዓብ ጨቋኞች",
      timeframe: "c. 1375 – 1050 BC",
      eyewitnessPOVEn: "Lawlessness and terror on the trade highways; villagers hiding in mountain caves; iron chariots dominating the plains; seasonal camel-raiders stripping harvests.",
      eyewitnessPOVAm: "በአገር ውስጥ ሰላም ጠፍቶ ሕዝቡ በዋሻዎች ሲሸሸግ፤ ፍልስጥኤማውያን በብረት ሠረገሎቻቸው ምድሪቱን ሲያስጨንቁ የታየበት ጨለማ ዘመን።",
      historicalDynamicsEn: "Decentralized 12-tribe confederation lacking central administration, repeatedly lapsing into Baal worship, attacked by regional powers.",
      historicalDynamicsAm: "ነገዶቹ እግዚአብሔርን ትተው ጣዖታትን ሲያመልኩ በጠላቶቻቸው እጅ መውደቃቸውና ሲጮኹ መሣፍንት መነሳታቸው።",
      groundRealitiesEn: "Gideon threshing wheat inside a sunken winepress to hide from Midianites; Samson blinded in Gaza turning a millstone.",
      groundRealitiesAm: "ጌዴዎን ጠላትን ፈርቶ በመጥመቂያ ውስጥ ስንዴ ሲወቃ፤ ሳምሶን ዓይኑ ጠፍቶ በጋዛ ወፍጮ ሲፈጭ።"
    },
    theological: {
      titleEn: "Covenant Apostasy & The Relentless Mercy of Yahweh",
      titleAm: "የሕዝቡ ክህደትና የማይቋረጠው የእግዚአብሔር ምሕረት",
      covenantStageEn: "Sinai Covenant Cycles of Rebellion and Rescue",
      covenantStageAm: "የኃጢአት፣ የባርነት፣ የጩኸትና የመዳን አዙሪት",
      redemptiveThemeEn: "God repeatedly rescues an undeserving people through flawed deliverers, pointing to the need for a true, eternal King.",
      redemptiveThemeAm: "ሕዝቡ ባይገባቸውም እግዚአብሔር ሲጮኹ ታዳጊዎችን አስነሳላቸው፤ ይህም ፍጹም የሆነ ዘላለማዊ ንጉሥ እንደሚያስፈልግ አሳየ።",
      christForeshadowingEn: "The Judges as temporary, imperfect saviors pointing to Christ—the ultimate deliverer who delivers his people once and for all.",
      christForeshadowingAm: "ጊዜያዊና ደካማ የነበሩት መሣፍንት ፍጹም አዳኝ ወደሆነውና ከኃጢአት ባርነት ነፃ ወደሚያወጣው ወደ ክርስቶስ ይጠቁማሉ።",
      metaNarrativeAnchorEn: "\"In those days there was no king in Israel; everyone did what was right in his own eyes\" (Judg 21:25).",
      metaNarrativeAnchorAm: "“በዚያ ዘመን በእስራኤል ዘንድ ንጉሥ አልነበረም፤ ሰው ሁሉ በዓይኑ መልካም መስሎ የታየውን ያደርግ ነበር” (መሳ 21:25)።"
    },
    linguistic: [
      {
        original: "יָשַׁע",
        translit: "Yasha",
        language: "Hebrew",
        amharicTerm: "ማዳን (አዳኝ)",
        literalMeaningEn: "To deliver, rescue, bring into spacious freedom",
        literalMeaningAm: "ማዳን / ነፃ ማውጣት",
        theologicalDepthEn: "God breaks the stranglehold of oppressors when human strength is completely spent.",
        theologicalDepthAm: "የሰው ኃይል ሲደክም እግዚአብሔር ጣልቃ ገብቶ ከጭቆና ነፃ የሚያወጣበት ማዳን።",
        canonicalUsageEn: "Root of Joshua and Jesus; used of the judges in Judg 2:16.",
        canonicalUsageAm: "በመሳፍንት 2:16፤ የኢየሱስም ስም መሠረት።"
      }
    ],
    psychological: {
      characterEn: "Gideon, Deborah & Samson",
      characterAm: "ጌዴዎን፣ ዲቦራና ሳምሶን",
      emotionalStateEn: "Impostor syndrome, fear of vulnerability, sensual compromise, tragic regret",
      emotionalStateAm: "የብቃት ማነስ ስሜት፣ ፍርሃት፣ በምኞት መሸነፍ፣ የጸጸት ለቅሶ",
      innerConflictEn: "Gideon asking: \"If the Lord is with us, why has all this happened to us?\"; Samson torn between godly calling and fatal lust.",
      innerConflictAm: "ጌዴዎን “እግዚአብሔር ከእኛ ጋር ከሆነ ይህ ሁሉ ለምን ደረሰብን?” ብሎ ሲጠይቅ፤ ሳምሶን በመንፈሳዊ ጥሪውና በስጋዊ ምኞቱ መካከል መዋለሉ።",
      existentialQuestionEn: "\"The Lord is with you, O mighty man of valor!\" (Judg 6:12)",
      existentialQuestionAm: "“አንተ ጽኑዕ ኃያል ሰው ሆይ፥ እግዚአብሔር ከአንተ ጋር ነው!” (መሳ 6:12)",
      modernReflectionEn: "When moral compromise becomes normalized, society fragments; even when you feel like the weakest in your clan, God’s call defines who you are.",
      modernReflectionAm: "ሰው ሁሉ በራሱ መንገድ ሲሄድ ውድቀት ይመጣል፤ ነገር ግን በራስህ ደካማ ብትሆንም እግዚአብሔር አንተን ኃያል ተዋጊ አድርጎ ይጠራሃል።"
    }
  },

  // 8. RUTH (መጽሐፈ ሩት)
  8: {
    id: 'canon-book-8',
    sceneId: 'book-8',
    bookNr: 8,
    chapterStart: 1,
    titleEn: "Ruth: Hesed, Redemption & The Royal Lineage",
    titleAm: "መጽሐፈ ሩት፡ ጽኑ ፍቅር፣ ቤዛነትና የንጉሥ የዘር ሐረግ",
    eraEn: "During the Days When the Judges Ruled",
    eraAm: "መሣፍንት በሚገዙበት ዘመን የተፈጸመ",
    geopolitical: {
      titleEn: "Bethlehem-Judah & The Fields of Moab",
      titleAm: "የቤተልሔም እርሻዎችና የሞዓብ ምድር",
      empireEn: "Agrarian Village Life under Tribal Confederation",
      empireAm: "የገጠር ግብርና ሕይወትና የቤተሰብ ቤዛነት",
      timeframe: "c. 1150 BC",
      eyewitnessPOVEn: "Famine driving a desperate Hebrew family into foreign Moab; two young widows walking back into Bethlehem penniless, gleaning leftover barley ears behind hired reapers.",
      eyewitnessPOVAm: "በረሃብ ምክንያት የተሰደደች ቤተሰብ ባሎቻቸውን አጥተው ባዶ እጃቸውን ወደ ቤተልሔም ሲመለሱ፤ ሩት በባዕድ አገር በእርሻ ላይ የወደቀውን እሸት ስትለቅም።",
      historicalDynamicsEn: "Customary Levirate marriage laws and the Kinsman-Redeemer (Goel) duty; deep historical animosity between Moabites and Israelites overturned by steadfast loyalty.",
      historicalDynamicsAm: "በእስራኤልና በሞዓብ መካከል የነበረውን ጥል ያሸነፈው የሩት ታማኝነት፤ ቅርብ ዘመድ የሆነው ቦዔዝ የሞተውን ወንድም ርስት የዋጀበት ሕግ።",
      groundRealitiesEn: "Barley harvest at the threshing floor, measuring barley portions, exchanging a sandal at the city gate to seal property redemption.",
      groundRealitiesAm: "የገብስ አጨዳ፣ በአውድማው ላይ ማደር፣ እና በመንደሩ በር በሽማግሌዎች ፊት ጫማ በማውለቅ የተረጋገጠው የቤዛነት ስምምነት።"
    },
    theological: {
      titleEn: "The Silent Providence of Yahweh and Hesed",
      titleAm: "የእግዚአብሔር ድምፅ አልባ ጥበቃና ጽኑ ፍቅር (ሄሴድ)",
      covenantStageEn: "Preservation of the Messianic Seed through Hesed",
      covenantStageAm: "በጽኑ ፍቅር የተጠበቀው የመሲሑ የዘር ሐረግ",
      redemptiveThemeEn: "God works in the quiet everyday loyalties of ordinary people to advance his redemptive lineage from Ruth to David to Christ.",
      redemptiveThemeAm: "እግዚአብሔር በተራ ሰዎች ቅንነትና ፍቅር ውስጥ ሆኖ ለዓለም ሁሉ መድኃኒት የሚሆነውን የዳዊትንና የክርስቶስን የዘር ግንድ ሲያዘጋጅ።",
      christForeshadowingEn: "Boaz as the Kinsman-Redeemer (Go’el) who buys back the lost inheritance and brings the Gentile bride into the covenant family, prefiguring Christ.",
      christForeshadowingAm: "ቦዔዝ የጠፋውን ርስት መልሶ የገዛና ባዕድ የነበረችውን ሩትን ያገባ የክርስቶስ ጥላ (ዋጅ/ቤዛ) ነው፤ ክርስቶስም አሕዛብን ዋጅቶ ቤተክርስቲያኑ አደረገ።",
      metaNarrativeAnchorEn: "The genealogy of Ruth 4 ends with David, anchoring the Old Testament kingdom narrative in gentleness and mercy.",
      metaNarrativeAnchorAm: "የመጽሐፈ ሩት የዘር ሐረግ በዳዊት ያበቃል (ሩት 4:22)፤ ይህም ወንጌል ለአሕዛብም ክፍት መሆኑን ያበስራል።"
    },
    linguistic: [
      {
        original: "חֶסֶד",
        translit: "Hesed",
        language: "Hebrew",
        amharicTerm: "ምሕረት (ጽኑ ፍቅር)",
        literalMeaningEn: "Covenantal loyalty, steadfast loving-kindness",
        literalMeaningAm: "ጽኑ ፍቅር / የማይለወጥ ታማኝነት",
        theologicalDepthEn: "Love that goes beyond duty to sacrifice for the flourishing of the vulnerable.",
        theologicalDepthAm: "ከሕግ ግዴታ በላይ በሆነ ፍቅር የተቸገረውን ሰው መርዳትና መታደግ።",
        canonicalUsageEn: "Ruth 1:8, 2:20, 3:10; Psalm 136.",
        canonicalUsageAm: "ሩት 1:8፤ መዝሙር 136።"
      },
      {
        original: "גֹּאֵל",
        translit: "Go’el",
        language: "Hebrew",
        amharicTerm: "ዋጅ (ቤዛ)",
        literalMeaningEn: "Kinsman-Redeemer / Closest relative who ransoms",
        literalMeaningAm: "ቅርብ ዘመድ የሆነ ቤዛ",
        theologicalDepthEn: "Only one who is kin, able to pay, and willing to redeem can restore the lost inheritance.",
        theologicalDepthAm: "ዘመድ የሆነ፣ ዋጋውን መክፈል የሚችልና በፈቃዱ የሚዋጅ አዳኝ።",
        canonicalUsageEn: "Ruth 3:9; Job 19:25 (\"I know that my Redeemer lives\").",
        canonicalUsageAm: "ሩት 3:9፤ ኢዮብ 19:25 (“ቤዛዬ ሕያው እንደ ሆነ አውቃለሁ”)።"
      }
    ],
    psychological: {
      characterEn: "Ruth & Naomi",
      characterAm: "ሩትና ኑኃሚን",
      emotionalStateEn: "Bitter grief, destitution, sacrificial loyalty, restored joy",
      emotionalStateAm: "የመርረር ኀዘን፣ ባዶ እጅ መሆን፣ የማይናወጥ ፍቅር፣ ዳግም የተገኘ ደስታ",
      innerConflictEn: "Naomi saying: \"Call me Mara, for the Almighty has dealt very bitterly with me\"; Ruth clinging: \"Where you go I will go.\"",
      innerConflictAm: "ኑኃሚን “ሁሉን የሚችል አምላክ አስመርሮኛልና ማራ በሉኝ” ስትል፤ ሩት ግን “ወደምትሄጂበት እሄዳለሁ አምላክሽም አምላኬ ይሆናል” ብላ መከተሏ።",
      existentialQuestionEn: "\"Where you die I will die, and there will I be buried\" (Ruth 1:17)",
      existentialQuestionAm: "“በምትሞቺበት እሞታለሁ፥ በዚያም እቀበራለሁ” (ሩት 1:17)",
      modernReflectionEn: "When life empties you out, bitter loss is not the final chapter; God’s quiet providence is weaving a greater restoration than you can see.",
      modernReflectionAm: "ሕይወት ባዶ እጅህን ስታስቀርህ ተስፋ አትቁረጥ፤ እግዚአብሔር በዝምታው ውስጥ ለትውልድ የሚተርፍ ታላቅ በረከት እያዘጋጀልህ ነው።"
    }
  },

  // 9. 1 SAMUEL (መጽሐፈ ሳሙኤል ቀዳማዊ)
  9: {
    id: 'canon-book-9',
    sceneId: 'book-9',
    bookNr: 9,
    chapterStart: 1,
    titleEn: "1 Samuel: The Transition from Theocracy to Monarchy",
    titleAm: "1 ሳሙኤል፡ ከነገደ-መሣፍንት ወደ መንግሥት የተደረገ ሽግግር",
    eraEn: "Early Monarchy Transition",
    eraAm: "የቀዳማዊ መንግሥት ምሥረታ ዘመን",
    geopolitical: {
      titleEn: "Philistine Coastal Dominance vs. Israelite Hill Country",
      titleAm: "የፍልስጥኤማውያን የጦር የበላይነትና የእስራኤል ተራሮች",
      empireEn: "Philistine Iron-Age Monopoly & Imperial Encroachment",
      empireAm: "የፍልስጥኤማውያን የብረት መሣሪያ የበላይነት",
      timeframe: "c. 1050 – 1010 BC",
      eyewitnessPOVEn: "The Ark of the Covenant captured in battle; Eli dying of shock; the tabernacle at Shiloh destroyed; Israel begging for an earthly king like the surrounding nations.",
      eyewitnessPOVAm: "የእግዚአብሔር ታቦት በምርኮ ሲወሰድና በሴሎ የነበረው መቅደስ ሲፈርስ፤ ሕዝቡ እንደ አሕዛብ ሁሉ ንጉሥ እንዲነግሥላቸው በጠየቁ ጊዜ የታየ ቀውስ።",
      historicalDynamicsEn: "Philistines control black-smithing technology so Israelites have no swords; Saul unifies the tribes defensively; David emerges as a guerrilla commander.",
      historicalDynamicsAm: "ፍልስጥኤማውያን የብረት መሣሪያዎችን በመቆጣጠር እስራኤልን አስጨንቀው ሳለ፣ ዳዊት ጎልያድን ድል በማድረግ ሕዝቡን ነፃ ያወጣበት ታሪክ።",
      groundRealitiesEn: "Hannah weeping silently at the shrine; Samuel anointing David with an oil horn among sheep; David living as an outlaw in the caves of Adullam.",
      groundRealitiesAm: "ሐና በመቅደሱ በዕንባ ስትጸልይ፤ ሳሙኤል እረኛ የነበረውን ዳዊትን በዘይት ቀንድ ሲቀባ፤ ዳዊት በዋሻዎች ተሰዶ ሲኖር።"
    },
    theological: {
      titleEn: "Man Looks on the Outward Appearance, but God Looks on the Heart",
      titleAm: "ሰው የውጭውን ያያል፥ እግዚአብሔር ግን ልብን ያያል",
      covenantStageEn: "From Tribal Theocracy to the Davidic Horizon",
      covenantStageAm: "ከጎሳ መሪነት ወደ ዳዊት መንግሥት የተደረገ ሽግግር",
      redemptiveThemeEn: "God humbles the proud and exalts the humble (Hannah’s Song, 1 Sam 2), choosing a shepherd boy to bring down giants.",
      redemptiveThemeAm: "እግዚአብሔር ትዕቢተኞችን ያዋርዳል፣ ትሑታንን ግን ከፍ ያደርጋል (የሐና ጸሎት)፤ በጎልያድ ፊት እረኛውን ዳዊትን አቆመ።",
      christForeshadowingEn: "David as the anointed king who suffers in exile before ascending to the throne, directly prefiguring Christ’s path of suffering before glory.",
      christForeshadowingAm: "ዳዊት ወደ ዙፋን ከመውጣቱ በፊት መከራን የተቀበለ የተቀባ ንጉሥ ነው፤ ይህም ክርስቶስ ወደ ክብሩ ከመግባቱ በፊት መከራን እንደተቀበለ ያሳያል።",
      metaNarrativeAnchorEn: "1 Samuel establishes kingship under the prophetic critique of God’s word.",
      metaNarrativeAnchorAm: "እውነተኛ ንጉሥ የእግዚአብሔርን ቃል የሚሰማና ልቡ ለእግዚአብሔር የቀና መሆን እንዳለበት ያስተምራል።"
    },
    linguistic: [
      {
        original: "מָשִׁיחַ",
        translit: "Mashiach",
        language: "Hebrew",
        amharicTerm: "መሲሕ (የተቀባ)",
        literalMeaningEn: "Anointed One consecrated by holy oil",
        literalMeaningAm: "መሲሕ / በቅዱስ ዘይት የተቀባ ንጉሥ",
        theologicalDepthEn: "Conferring divine empowerment and authorization to represent God’s reign.",
        theologicalDepthAm: "የእግዚአብሔርን ሕዝብ ለመምራት የመንፈስ ቅዱስ ቅባትና ሥልጣን መቀበል።",
        canonicalUsageEn: "1 Samuel 2:10, 16:13; Psalm 2; Luke 4:18.",
        canonicalUsageAm: "1 ሳሙኤል 2:10፤ 16:13፤ ሉቃስ 4:18።"
      }
    ],
    psychological: {
      characterEn: "David, Saul & Jonathan",
      characterAm: "ዳዊት፣ ሳኦልና ዮናታን",
      emotionalStateEn: "Consuming paranoia and jealousy (Saul), pure covenant brotherhood (Jonathan), hunted vigilance (David)",
      emotionalStateAm: "የሳኦል ቅናትና ጭንቀት፣ የዮናታን ንጹሕ ፍቅር፣ የዳዊት በዋሻ ውስጥ የነበረው ጽናት",
      innerConflictEn: "Saul frantic as Samuel delays: offering illicit sacrifice; David having Saul at his mercy in a dark cave but refusing to touch the Lord’s anointed.",
      innerConflictAm: "ሳኦል መታገስ አቅቶት ሳሙኤል ሳይመጣ መሥዋዕት ማቅረቡ፤ ዳዊት ሳኦልን በዋሻ ውስጥ ሊገድለው ሲችል “የእግዚአብሔርን የተቀባ አልነካም” ብሎ መተዉ።",
      existentialQuestionEn: "\"Who is this uncircumcised Philistine that he should defy the armies of the living God?\" (1 Sam 17:26)",
      existentialQuestionAm: "“የሕያውን አምላክ ጭፍሮች የሚገዳደር ይህ ያልተገረዘ ፍልስጥኤማዊ ማን ነው?” (1 ሳሙ 17:26)",
      modernReflectionEn: "When insecurity grips the heart, comparison breeds paranoia; but a heart anchored in God fears no giants and envies no crowns.",
      modernReflectionAm: "ቅናትና ፉክክር ሰላምህን ያጠፋሉ፤ ነገር ግን ልብህ በእግዚአብሔር ላይ ሲያርፍ በምንም ዓይነት ፈተና ውስጥ ብትሆን ድል ያንተ ነው።"
    }
  },

  // 10. 2 SAMUEL (መጽሐፈ ሳሙኤል ካል)
  10: {
    id: 'canon-book-10',
    sceneId: 'book-10',
    bookNr: 10,
    chapterStart: 1,
    titleEn: "2 Samuel: The Golden Kingdom & The Davidic Covenant",
    titleAm: "2 ሳሙኤል፡ የዳዊት መንግሥትና የዘላለም ቃል ኪዳን",
    eraEn: "The United Monarchy of David",
    eraAm: "የተባበረው የእስራኤል መንግሥት ዘመን",
    geopolitical: {
      titleEn: "Jerusalem (Zion) Established as the Imperial Capital",
      titleAm: "ኢየሩሳሌም የመንግሥትና የመቅደስ ዋና ከተማ ስትሆን",
      empireEn: "Regional Hegemony from Euphrates to Egypt Border",
      empireAm: "ከኤፍራጥስ እስከ ግብፅ ድንበር የተዘረጋው የዳዊት ግዛት",
      timeframe: "c. 1010 – 970 BC",
      eyewitnessPOVEn: "A former outlaw king dancing with all his might as the Ark enters Jerusalem; conquering the Jebusite fortress; regional ambassadors bringing cedar and gold.",
      eyewitnessPOVAm: "ዳዊት ታቦተ ጽዮንን ወደ ኢየሩሳሌም ሲያስገባ በሙሉ ኃይሉ ሲዘልልና ሲያመሰግን፤ የኢየሩሳሌምን ምሽግ ይዞ የመንግሥቱ ዋና ከተማ ሲያደርጋት።",
      historicalDynamicsEn: "Expansion of borders crushing Philistines, Moabites, Syrians, and Ammonites; rapid urbanization; tragic palace intrigue and Bathsheba scandal.",
      historicalDynamicsAm: "ዳዊት ጠላቶቹን ሁሉ ድል በማድረግ ሰላምን ማምጣቱ፤ ነገር ግን በቤተ መንግሥት ውስጥ የተፈጸመው የቤርሳቤህ ኃጢአት ያስከተለው የቤተሰብ ቀውስ።",
      groundRealitiesEn: "Water tunnels beneath the Ophel hill, the smell of burnt offerings on Araunah’s threshing floor, Absalom’s hair caught in oak branches.",
      groundRealitiesAm: "የኢየሩሳሌም ውኃ መውረጃ ዋሻዎች፣ በአርና አውድማ ላይ የተሠዋው መሥዋዕት፣ እና አቤሴሎም በዛፍ ቅርንጫፍ ተሰቅሎ የተገኘበት መሪር ክስተት።"
    },
    theological: {
      titleEn: "The Unconditional Davidic Covenant & Tragic Brokenness",
      titleAm: "ለዳዊት የተሰጠው የዘላለም ዙፋን ኪዳንና የኃጢአት መዘዝ",
      covenantStageEn: "The Davidic Covenant (2 Samuel 7)",
      covenantStageAm: "የዳዊት ቃል ኪዳን (2 ሳሙኤል 7)",
      redemptiveThemeEn: "God promises David an everlasting throne and royal Son: \"Your house and your kingdom shall be made sure forever\" (2 Sam 7:16).",
      redemptiveThemeAm: "እግዚአብሔር ለዳዊት ዘሩና ዙፋኑ ለዘላለም እንደሚጸና ቃል ገባለት (2 ሳሙ 7:16)፤ ይህም የመሲሑ መንግሥት መሠረት ነው።",
      christForeshadowingEn: "The Son of David who builds the true Temple and reigns forever; Jesus hailed as the Son of David in Matthew 1:1 and Luke 1:32–33.",
      christForeshadowingAm: "የዳዊት ልጅ ተብሎ የተጠራውና ለዘላለም የሚነግሠው ኢየሱስ ክርስቶስ (ማቴ 1:1፤ ሉቃ 1:32-33)፤ እውነተኛውን የእግዚአብሔር ቤተ መቅደስ የሠራው እርሱ ነው።",
      metaNarrativeAnchorEn: "2 Samuel shows the heights of covenant grace and the devastating earthly consequences of private moral compromise.",
      metaNarrativeAnchorAm: "የእግዚአብሔር ጸጋ ታላቅ ቢሆንም፤ ኃጢአት ግን በምድር ላይ ከባድ ሥቃይን እንደሚያስከትል የዳዊት ሕይወት ያስተምራል።"
    },
    linguistic: [
      {
        original: "בַּיִת",
        translit: "Bayit",
        language: "Hebrew",
        amharicTerm: "ቤት (ሥርወ-መንግሥት / መቅደስ)",
        literalMeaningEn: "House / Dynasty / Temple",
        literalMeaningAm: "ቤት / ዘላቂ ሥርወ መንግሥት",
        theologicalDepthEn: "David offers to build God a house (temple); God turns around and promises to build David an eternal house (dynasty).",
        theologicalDepthAm: "ዳዊት ለእግዚአብሔር ቤት ለመሥራት ሲያስብ፤ እግዚአብሔር ግን ለዳዊት የማይፈርስ ዘላለማዊ ቤት (ሥርወ-መንግሥት) እንደሚሠራለት ገለጠለት።",
        canonicalUsageEn: "2 Samuel 7:11–13.",
        canonicalUsageAm: "2 ሳሙኤል 7:11-13።"
      }
    ],
    psychological: {
      characterEn: "David & Nathan the Prophet",
      characterAm: "ዳዊትና ነቢዩ ናታን",
      emotionalStateEn: "Ecstasy of worship, lustful entitlement, crushing guilt, broken repentance",
      emotionalStateAm: "የአምልኮ ደስታ፣ በምኞት መሳት፣ የበደል ሸክም፣ ልብ የሚሰብር ንስሐ",
      innerConflictEn: "Nathan pointing his finger: \"You are the man!\" David collapsing in unreserved repentance without making political excuses.",
      innerConflictAm: "ናታን “ያ ሰው አንተ ነህ!” ብሎ ኃጢአቱን ሲገሥጸው፤ ዳዊት ሳያመካኝ “እግዚአብሔርን በድያለሁ” ብሎ በንስሐ መውደቁ።",
      existentialQuestionEn: "\"Create in me a clean heart, O God, and renew a right spirit within me\" (Psalm 51:10 reflecting 2 Sam 12)",
      existentialQuestionAm: "“አቤቱ፥ ንጹሕ ልብን ፍጠርልኝ፥ የቀናውንም መንፈስ በውስጤ አድስ” (መዝ 51:10)",
      modernReflectionEn: "No success or spiritual status makes you immune to moral collapse; true greatness is measured by how quickly you repent when confronted with the truth.",
      modernReflectionAm: "የትኛውም ስኬት ወይም መንፈሳዊ ደረጃ ከውድቀት አያድንህም፤ እውነተኛ መንፈሳዊነት ግን ሲገሥጹህ በንስሐ ወደ እግዚአብሔር መመለስ ነው።"
    }
  },

  // 11. 1 KINGS (መጽሐፈ ነገሥት ቀዳማዊ)
  11: {
    id: 'canon-book-11',
    sceneId: 'book-11',
    bookNr: 11,
    chapterStart: 1,
    titleEn: "1 Kings: Solomon’s Glory, Temple Splendor & Divided Kingdom",
    titleAm: "1 ነገሥት፡ የሰሎሞን ክብር፣ የቤተ መቅደሱ ግርማና የመንግሥቱ መከፈል",
    eraEn: "United to Divided Monarchy",
    eraAm: "የሰሎሞን ዘመንና የመንግሥቱ ለሁለት መከፈል",
    geopolitical: {
      titleEn: "Jerusalem Temple Magnificence to Mount Carmel Showdown",
      titleAm: "የኢየሩሳሌም መቅደስ ክብርና በቀርሜሎስ ተራራ የተደረገው ፍልሚያ",
      empireEn: "Phoenician Maritime Alliance, Egypt & Rising Aram-Damascus",
      empireAm: "የጢሮስና የፊንቄያ ንግድ፣ ግብፅና የአራም-ደማስቆ ግዛት",
      timeframe: "c. 970 – 850 BC",
      eyewitnessPOVEn: "Cedar beams floating down from Lebanon; the Shekinah glory filling the golden temple; later, altars to Moloch on the hilltops and Elijah calling down fire on Carmel.",
      eyewitnessPOVAm: "የሊባኖስ ዛፎች ለቤተ መቅደሱ ግንባታ ሲመጡና የእግዚአብሔር ክብር መቅደሱን ሲሞላው፤ በኋላ ግን ኤልያስ በቀርሜሎስ ተራራ ላይ ከበዓል ነቢያት ጋር የተፋለመበት ዘመን።",
      historicalDynamicsEn: "Solomon’s immense commercial wealth giving way to heavy forced labor; Rehoboam’s pride splitting the nation into Israel (North) and Judah (South).",
      historicalDynamicsAm: "በሰሎሞን የተጀመረው ከባድ ግብርና የሮብዓም ትዕቢት መንግሥቱ ለሁለት እንዲከፈል ማድረጉ (እስራኤል በሰሜን፣ ይሁዳ በደቡብ)።",
      groundRealitiesEn: "Phoenician-carved ivory thrones, gold-covered cherubim wings, Elijah running before Ahab’s chariot in torrential rain.",
      groundRealitiesAm: "በወርቅ የተለበጡ ኪሩቤል፣ የሰሎሞን የዝሆን ጥርስ ዙፋን፣ እና ኤልያስ በዝናብ ውስጥ በአክዓብ ሠረገላ ፊት ሲሮጥ።"
    },
    theological: {
      titleEn: "The Faithful God Confronting Syncretism & Division",
      titleAm: "እግዚአብሔር ከጣዖት አምልኮ ጋር ሲጋፈጥና የታመኑትን ሲጠብቅ",
      covenantStageEn: "Davidic Covenant Tested by Idolatry",
      covenantStageAm: "በጣዖት አምልኮ የተፈተነው የዳዊት ኪዳን",
      redemptiveThemeEn: "Even when 10 tribes break away and kings abandon Yahweh, God preserves a lamp for David in Jerusalem and a remnant of 7,000 who never bowed to Baal.",
      redemptiveThemeAm: "ዐሥሩ ነገዶች ቢያምፁም፤ እግዚአብሔር ለዳዊት በኢየሩሳሌም መብራትን ጠበቀለት፤ ለበዓል ያልሰገዱትንም 7,000 ቅሬታዎች አተረፈ።",
      christForeshadowingEn: "Solomon’s wisdom prefigures Christ, \"something greater than Solomon is here\" (Matt 12:42); Elijah preparing the way for the ultimate Prophet.",
      christForeshadowingAm: "የሰሎሞን ጥበብ የክርስቶስ ጥላ ነው፤ “ከሰሎሞንም የሚበልጥ ከዚህ አለ” (ማቴ 12:42)፤ ኤልያስም ለታላቁ አዳኝ መንገድ ጠራጊ ነው።",
      metaNarrativeAnchorEn: "1 Kings demonstrates that idolatry fractures families, nations, and worship.",
      metaNarrativeAnchorAm: "ጣዖት አምልኮና ዓለማዊነት ቤተሰብን፣ ሕዝብንና መንፈሳዊ አንድነትን እንደሚያፈርስ 1 ነገሥት ያስተምራል።"
    },
    linguistic: [
      {
        original: "קַל דְּמָמָה דַקָּה",
        translit: "Kol d’mamah dakkah",
        language: "Hebrew",
        amharicTerm: "ቀጭን የዝምታ ድምፅ",
        literalMeaningEn: "A sound of sheer silence / A gentle blowing whisper",
        literalMeaningAm: "ቀጭን የዝምታ ድምፅ (ለስላሳ ሹክሹክታ)",
        theologicalDepthEn: "God reveals his presence not in violent earthquake or wind, but in gentle quietness.",
        theologicalDepthAm: "እግዚአብሔር በኃይለኛ ነፋስና በመሬት መንቀጥቀጥ ሳይሆን፣ በለሰለሰ የዝምታ ድምፅ ለኤልያስ ተገለጠ።",
        canonicalUsageEn: "1 Kings 19:12.",
        canonicalUsageAm: "1 ነገሥት 19:12።"
      }
    ],
    psychological: {
      characterEn: "Elijah the Tishbite & Solomon",
      characterAm: "ኤልያስና ሰሎሞን",
      emotionalStateEn: "Splendor collapsing into compromise (Solomon); heroic confrontation turning to suicidal exhaustion under a broom tree (Elijah)",
      emotionalStateAm: "የጥበብና የሀብት ክብር፣ የኤልያስ ጽናትና በኮረብታው ሥር የተሰማው ከፍተኛ ድካም",
      innerConflictEn: "Solomon’s heart turned away by foreign wives; Elijah crying: \"I only am left, and they seek my life!\"",
      innerConflictAm: "የሰሎሞን ልብ በባዕድ ሚስቶች ወደ ጣዖት መሳቡ፤ ኤልያስ “እኔ ብቻዬን ቀርቻለሁ ነፍሴንም ይፈልጓታል” ብሎ በድካም ማማረሩ።",
      existentialQuestionEn: "\"How long will you go limping between two different opinions? If the Lord is God, follow him!\" (1 Kings 18:21)",
      existentialQuestionAm: "“እስከ መቼ ድረስ በሁለት አሳብ ታነክሳላችሁ? እግዚአብሔር አምላክ ቢሆን እርሱን ተከተሉ!” (1 ነገ 18:21)",
      modernReflectionEn: "Compromise doesn’t happen overnight; it begins when small affections displace single-hearted devotion to God.",
      modernReflectionAm: "ውድቀት በአንድ ጀምበር አይመጣም፤ ለዓለም በምትሰጠው ጥቂት ስምምነት ልብህ ከእግዚአብሔር ሲርቅ ይጀምራል፤ ዛሬም በሁለት መንገድ አታንክስ።"
    }
  },

  // 12. 2 KINGS (መጽሐፈ ነገሥት ካልዕ)
  12: {
    id: 'canon-book-12',
    sceneId: 'book-12',
    bookNr: 12,
    chapterStart: 1,
    titleEn: "2 Kings: The Fall of Samaria, Jerusalem & The Babylonian Exile",
    titleAm: "2 ነገሥት፡ የሰማርያና የኢየሩሳሌም ውድቀት፤ የባቢሎን ምርኮ",
    eraEn: "Divided Monarchy to Babylonian Exile",
    eraAm: "የሁለቱ መንግሥታት ውድቀትና የምርኮ ዘመን",
    geopolitical: {
      titleEn: "Neo-Assyrian Imperial Juggernaut & Neo-Babylonian Conquest",
      titleAm: "የአሦርና የባቢሎን ኢምፓየሮች ወረራ",
      empireEn: "Neo-Assyrian Empire (Sargon II, Sennacherib) & Neo-Babylonian Empire (Nebuchadnezzar II)",
      empireAm: "የአሦርና የባቢሎን ግዙፍ ኢምፓየሮች",
      timeframe: "c. 850 – 561 BC",
      eyewitnessPOVEn: "Assyrian siege ramps rising against Lachish; Samaria obliterated and repopulated with foreign transplants; Jerusalem’s walls breached, Solomon’s temple set ablaze, chains dragging nobles into Babylon.",
      eyewitnessPOVAm: "አሦራውያን ሰማርያን ደምስሰው ሕዝቧን ሲያፈናቅሉ፤ የባቢሎን ሠራዊት የኢየሩሳሌምን ቅጥር አፍርሶ ቤተ መቅደሱን በእሳት ሲያቃጥለው የታየበት የሐዘን ዘመን።",
      historicalDynamicsEn: "Small Levant kingdoms trapped between the geopolitical clash of Egypt and Mesopotamia; vassal treaties broken, leading to brutal punitive exile.",
      historicalDynamicsAm: "እስራኤልና ይሁዳ በኃያላኑ አገሮች መካከል ተጨፍልቀው የነበሩበት፤ የነቢያትን ማስጠንቀቂያ ባለመስማታቸው ምክንያት የመጣ ፍርድ።",
      groundRealitiesEn: "Hezekiah’s water tunnel carved through solid limestone, famine eating donkey heads in besieged Samaria, blind king Zedekiah led in brass chains.",
      groundRealitiesAm: "ሕዝቅያስ በኢየሩሳሌም የቆፈረው የውኃ ዋሻ፣ በከበባው ወቅት የተከሰተው አስፈሪ ረሃብ፣ እና የይሁዳ ንጉሥ ሴዴቅያስ ዓይኑ ጠፍቶ በሰንሰለት ሲወሰድ።"
    },
    theological: {
      titleEn: "Covenant Judgment and the Unquenched Spark of Grace",
      titleAm: "የቃል ኪዳን ፍርድና ያልጠፋው የተስፋ ብልጭታ",
      covenantStageEn: "Sinai Curses Enacted & Davidic Hope Preserved",
      covenantStageAm: "የዘዳግም ማስጠንቀቂያዎች ፍጻሜና የዳዊት ዘር መጠበቅ",
      redemptiveThemeEn: "God’s patience endures for centuries of warnings through prophets, but holiness demands judgment; yet in Babylon, Jehoiachin is given a seat at the king’s table—the royal line survives.",
      redemptiveThemeAm: "እግዚአብሔር ለዘመናት በትዕግሥት ነቢያትን ቢልክም ሕዝቡ አልሰሙም፤ በመጨረሻ ግን በባቢሎን ምርኮ ውስጥም ቢሆን የዳዊት ዘር ተጠብቆ ኖረ።",
      christForeshadowingEn: "Elisha’s miracles (healing lepers, multiplying bread, raising the dead) directly mirror Christ’s Gospel ministry; the preserved royal seed leads to the Messiah.",
      christForeshadowingAm: "የኤልሳዕ ተአምራት (ለምጻሞችን ማዳን፣ እንጀራ ማበርከት፣ ሙታንን ማስነሳት) የክርስቶስን ወንጌል ሥራ በቀጥታ ያሳያሉ።",
      metaNarrativeAnchorEn: "2 Kings answers the exile crisis: God did not fail; his people broke the covenant, but his redemptive purpose continues.",
      metaNarrativeAnchorAm: "2 ነገሥት ምርኮ የመጣው እግዚአብሔር አቅቶት ሳይሆን፣ ሕዝቡ ቃሉን ጥሰው በመበደላቸው ምክንያት መሆኑን ያብራራል።"
    },
    linguistic: [
      {
        original: "גָּלוּת",
        translit: "Galut",
        language: "Hebrew",
        amharicTerm: "ምርኮ (መሰደድ)",
        literalMeaningEn: "Exile / Being stripped bare and uprooted",
        literalMeaningAm: "ምርኮ / ከአገር መፈናቀል",
        theologicalDepthEn: "The ultimate covenant curse of Deuteronomy: removal from the sacred land to learn repentance.",
        theologicalDepthAm: "ከቅድስቲቱ ምድር ተነቅሎ ወደ ባዕድ አገር መሄድ፤ በዚያም በንስሐ ወደ እግዚአብሔር መመለስ።",
        canonicalUsageEn: "2 Kings 25; Jeremiah 29:11; Matthew 1:11–12.",
        canonicalUsageAm: "2 ነገሥት 25፤ ኤርምያስ 29፤ ማቴዎስ 1:11-12።"
      }
    ],
    psychological: {
      characterEn: "Hezekiah, Josiah & Elisha",
      characterAm: "ሕዝቅያስ፣ ኢዮስያስና ኤልሳዕ",
      emotionalStateEn: "Mortal terror of annihilation, joy of rediscovering the Law, anguish of impending collapse",
      emotionalStateAm: "የጥፋት ፍርሃት፣ የሕጉን መጽሐፍ መልሶ የማግኘት ደስታ፣ ለሕዝቡ ማልቀስ",
      innerConflictEn: "Hezekiah taking Sennacherib’s mocking letter and spreading it out before the Lord in the temple; Josiah tearing his robes upon hearing Deuteronomy read.",
      innerConflictAm: "ሕዝቅያስ የአሦርን ንጉሥ የስድብ ደብዳቤ በእግዚአብሔር ፊት ዘርግቶ ሲጸልይ፤ ኢዮስያስ የሕጉን ቃል በሰማ ጊዜ ልብሱን ቀዶ ንስሐ መግባቱ።",
      existentialQuestionEn: "\"Now, O Lord our God, save us, please, from his hand, that all kingdoms of the earth may know that you, O Lord, are God alone!\" (2 Kings 19:19)",
      existentialQuestionAm: "“አሁንም አቤቱ አምላካችን ሆይ፥ አንተ ብቻ እግዚአብሔር እንደ ሆንህ የምድር መንግሥታት ሁሉ ያውቁ ዘንድ ከእጁ አድነን!” (2 ነገ 19:19)",
      modernReflectionEn: "When everything you built comes crashing down around you, God is not absent; he is stripping away the idols so your hope rests on Him alone.",
      modernReflectionAm: "ያመንክባቸው ነገሮች ሁሉ ሲፈርሱ እግዚአብሔር አልተወህም፤ በምትኩ እውነተኛ መታመኛህ እርሱ ብቻ እንዲሆን እያስተማረህ ነው።"
    }
  },

  // 13. 1 CHRONICLES (መጽሐፍ ዜና መዋዕል ቀዳማዊ)
  13: {
    id: 'canon-book-13',
    sceneId: 'book-13',
    bookNr: 13,
    chapterStart: 1,
    titleEn: "1 Chronicles: David’s Lineage, True Worship & Eternal Horizon",
    titleAm: "1 ዜና መዋዕል፡ የዳዊት የዘር ሐረግ፣ የመቅደስ አምልኮና ዘላለማዊ ተስፋ",
    eraEn: "Post-Exilic Perspective on the Monarchy",
    eraAm: "ከምርኮ መልስ የተጻፈ የመንግሥቱ ታሪክ",
    geopolitical: {
      titleEn: "Post-Exilic Yehud Looking Back on Jerusalem’s Glory",
      titleAm: "ከምርኮ የተመለሱት አይሁድ ያዩት የቀድሞው ክብር",
      empireEn: "Achaemenid Persian Empire",
      empireAm: "የፋርስ (አካይሜኒድ) ግዛት",
      timeframe: "c. 450 – 400 BC",
      eyewitnessPOVEn: "A returned, fragile remnant rebuilding on Jerusalem’s rubble, reading nine chapters of genealogies to trace their exact priestly and tribal identities back to Adam.",
      eyewitnessPOVAm: "ከባቢሎን ምርኮ የተመለሰው ደካማ ቅሬታ በኢየሩሳሌም ፍርስራሽ ላይ ሆኖ የዘር ሐረጉን ከአዳም ጀምሮ እስከ ዳዊት ሲቆጥር።",
      historicalDynamicsEn: "Written after the decree of Cyrus to assure the returning exiles that God’s covenant with David and the Levitical priesthood remains fully intact.",
      historicalDynamicsAm: "የፋርሱ ንጉሥ ቂሮስ በሰጠው አዋጅ መሠረት የተመለሱት ምእመናን እግዚአብሔር ከዳዊት ጋር የገባው ኪዳን እንዳልተሻረ ለማረጋገጥ የተጻፈ።",
      groundRealitiesEn: "Levitical choirs organized into 24 courses, temple gatekeepers keeping watch, stonemasons dressing ashlar stones for the altar.",
      groundRealitiesAm: "የሌዋውያን መዘምራን በ24 ክፍለ ጊዜያት ተከፋፍለው መዘመራቸው፣ የመቅደሱ ዘበኞች፣ እና መሠዊያውን ለመሥራት ድንጋይ መጥረብ።"
    },
    theological: {
      titleEn: "Worship as the True Center of Human History",
      titleAm: "አምልኮ የታሪክ ሁሉ ዋና ማዕከል ሲሆን",
      covenantStageEn: "Davidic Covenant as the Anchor of Future Hope",
      covenantStageAm: "የዳዊት ቃል ኪዳን ለወደፊቱ ተስፋ ዋስትና ሆኖ ሲቀርብ",
      redemptiveThemeEn: "History is not an accidental sequence of empires, but God’s sovereign unfolding of a kingdom of worshippers centered on David’s promised son.",
      redemptiveThemeAm: "የሰው ልጅ ታሪክ የአጋጣሚ ክስተት ሳይሆን፣ እግዚአብሔር አምላኪዎችን ለመሰብሰብና የመሲሑን መንግሥት ለመመሥረት የሚመራው የተቀደሰ መንገድ ነው።",
      christForeshadowingEn: "David ordering worship and preparing temple treasures prefigures Christ, who builds the spiritual temple of living stones (1 Peter 2:5).",
      christForeshadowingAm: "ዳዊት ለአምልኮና ለመቅደሱ መዘጋጀቱ፣ ዛሬ ሕያዋን ድንጋዮች የሆንነውን እኛን ወደ ቤተ መቅደስነት የሚገነባውን የክርስቶስን ሥራ ያሳያል (1 ጴጥ 2:5)።",
      metaNarrativeAnchorEn: "1 Chronicles focuses on what matters eternally: covenant identity, prayer, and heart-felt adoration of Yahweh.",
      metaNarrativeAnchorAm: "1 ዜና መዋዕል ዘላለማዊ ዋጋ ባላቸው ነገሮች ላይ ያተኩራል፡ ጸሎት፣ ንጹሕ አምልኮ እና ለእግዚአብሔር ታማኝ መሆን።"
    },
    linguistic: [
      {
        original: "דָּרַשׁ",
        translit: "Darash",
        language: "Hebrew",
        amharicTerm: "መፈለግ (እግዚአብሔርን መሻት)",
        literalMeaningEn: "To seek, inquire of, search for with whole heart",
        literalMeaningAm: "እግዚአብሔርን በፍጹም ልብ መፈለግ",
        theologicalDepthEn: "The defining characteristic of godly kings in Chronicles: seeking Yahweh brings life; abandoning him brings ruin.",
        theologicalDepthAm: "እግዚአብሔርን መፈለግ ሕይወትንና ሰላምን ያመጣል፤ እርሱን መተው ግን ውድቀትን ያመጣል።",
        canonicalUsageEn: "1 Chronicles 16:11, 28:9.",
        canonicalUsageAm: "1 ዜና መዋዕል 16:11፤ 28:9።"
      }
    ],
    psychological: {
      characterEn: "David & Asaph the Chief Musician",
      characterAm: "ዳዊትና የመዘምራኑ አለቃ አሳፍ",
      emotionalStateEn: "Passionate generosity, exuberance of choral worship, reverent legacy planning",
      emotionalStateAm: "የልግስና ደስታ፣ የአምልኮ ዝማሬ እልልታ፣ ለመጪው ትውልድ የእምነት ውርስ ማዘጋጀት",
      innerConflictEn: "David barred from building the temple because he was a man of war, joyfully channeling all his wealth to prepare materials for his son Solomon.",
      innerConflictAm: "ዳዊት ጦረኛ ስለነበር መቅደሱን እንዳይሠራ ቢከለከልም፤ ሳይቀየም ሀብቱን ሁሉ ለልጁ ለሰሎሞን ግንባታ በደስታ ማዘጋጀቱ።",
      existentialQuestionEn: "\"Yours, O Lord, is the greatness and the power and the glory and the victory and the majesty!\" (1 Chron 29:11)",
      existentialQuestionAm: "“አቤቱ፥ ታላቅነትና ኃይል፥ ክብርም፥ ድልም፥ ግርማም ለአንተ ነው፤ በሰማይና በምድር ያለው ሁሉ የአንተ ነውና!” (1 ዜና 29:11)",
      modernReflectionEn: "You may not see the complete fulfillment of your life’s dreams, but preparing the ground for the next generation to worship God is a sacred calling.",
      modernReflectionAm: "ያሰብከውን ሁሉ በራስህ ዘመን ባትፈጽምም፤ ለሚመጣው ትውልድ የእግዚአብሔርን እውነትና የአምልኮ መሠረት ማዘጋጀት ታላቅ ክብር ነው።"
    }
  },

  // 14. 2 CHRONICLES (መጽሐፍ ዜና መዋዕል ካልዕ)
  14: {
    id: 'canon-book-14',
    sceneId: 'book-14',
    bookNr: 14,
    chapterStart: 1,
    titleEn: "2 Chronicles: The Kings of Judah, Repentance & Temple Revival",
    titleAm: "2 ዜና መዋዕል፡ የይሁዳ ነገሥታት፣ ንስሐና የመቅደሱ መታደስ",
    eraEn: "From Solomon’s Temple to the Persian Decree",
    eraAm: "ከመቅደሱ ምርቃት እስከ ቂሮስ አዋጅ ድረስ",
    geopolitical: {
      titleEn: "Jerusalem Temple Altar to Cyrus’s Persian Court in Susa",
      titleAm: "ከኢየሩሳሌም መሠዊያ እስከ ፋርስ ቤተ መንግሥት",
      empireEn: "Achaemenid Persian Empire & Ancient Near Eastern Hegemony",
      empireAm: "የባቢሎንና የፋርስ ግዛቶች",
      timeframe: "c. 970 – 538 BC",
      eyewitnessPOVEn: "Fire coming down from heaven at the temple dedication; later, kings seeking God in desperate battles where armies are routed without drawing a sword; ending with Cyrus commanding the temple rebuild.",
      eyewitnessPOVAm: "በመቅደሱ ምርቃት ላይ ከሰማይ እሳት ሲወርድ፤ ነገሥታት ሲጸልዩ ጠላቶቻቸው ያለ ሰይፍ ሲሸነፉ፤ በመጨረሻም የቂሮስ አዋጅ ለተመላሾቹ ተስፋ ሲሰጥ።",
      historicalDynamicsEn: "Every reign is evaluated exclusively by one standard: fidelity to Yahweh’s temple and covenant. Repentance immediately opens the floodgate of divine restoration.",
      historicalDynamicsAm: "ነገሥታቱ ሁሉ የሚመዘኑት በመቅደሱና በእግዚአብሔር ቃል ባላቸው ታማኝነት ብቻ ነበር፤ ንስሐ በገባ ጊዜ እግዚአብሔር ወዲያውኑ ምሕረቱን ያሳይ ነበር።",
      groundRealitiesEn: "Singers marching in holy array ahead of the army; the book of the Law found in the temple rubble covered in dust; the edict of Cyrus written on clay cylinders.",
      groundRealitiesAm: "መዘምራን ከሠራዊቱ ፊት ቀድመው እየዘመሩ ወደ ጦርነት መውጣታቸው፤ የሕጉ መጽሐፍ በመቅደሱ ፍርስራሽ ውስጥ መገኘቱ፤ የቂሮስ አዋጅ።"
    },
    theological: {
      titleEn: "The Power of Humble Prayer & The Open Door of Forgiveness",
      titleAm: "የትሑት ጸሎት ኃይልና የይቅርታ ደጃፍ",
      covenantStageEn: "Sinai Retribution & Davidic Grace Harmonized",
      covenantStageAm: "የንስሐና የምሕረት ቃል ኪዳን",
      redemptiveThemeEn: "\"If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven\" (2 Chron 7:14).",
      redemptiveThemeAm: "“በስሜ የተጠሩት ሕዝቤ ራሳቸውን አዋርደው ቢጸልዩ፥ ፊቴንም ቢፈልጉ፥ ከክፉ መንገዳቸውም ቢመለሱ፥ በሰማይ ሆኜ እሰማለሁ፥ ኃጢአታቸውንም ይቅር እላለሁ” (2 ዜና 7:14)።",
      christForeshadowingEn: "The Temple where God promises his eyes and heart will be continually (7:16) points to Jesus, the living Temple who was destroyed and raised in three days.",
      christForeshadowingAm: "እግዚአብሔር ዓይኖቹና ልቡ ለዘላለም በዚያ እንደሚሆኑ ቃል የገባበት መቅደስ፤ በሦስት ቀን ፈርሶ የተነሣው የክርስቶስ አካል ጥላ ነው (ዮሐ 2:19)።",
      metaNarrativeAnchorEn: "2 Chronicles ends on an unfinished sentence: \"Whoever is among you of all his people, the Lord his God be with him, and let him go up!\" (36:23).",
      metaNarrativeAnchorAm: "መጽሐፉ የሚያበቃው ወደ ኢየሩሳሌም ተመልሶ የእግዚአብሔርን ቤት ለመሥራት በተሰጠ ታላቅ ጥሪ ነው (36:23)።"
    },
    linguistic: [
      {
        original: "כָּנַע",
        translit: "Kana",
        language: "Hebrew",
        amharicTerm: "መዋረድ (ትሕትና)",
        literalMeaningEn: "To humble oneself, bend the knee, yield",
        literalMeaningAm: "ራስን ማዋረድ / በትሕትና መንበርከክ",
        theologicalDepthEn: "The prerequisite for divine deliverance; even wicked kings like Manasseh were forgiven when they humbled themselves.",
        theologicalDepthAm: "የእግዚአብሔር ምሕረት እንዲመጣ ቅድመ ሁኔታው ራስን ማዋረድ ነው፤ ክፉው ምናሴ እንኳን ራሱን ባዋረደ ጊዜ ተማረ።",
        canonicalUsageEn: "2 Chronicles 7:14, 12:7, 33:12.",
        canonicalUsageAm: "2 ዜና መዋዕል 7:14፤ 33:12።"
      }
    ],
    psychological: {
      characterEn: "Jehoshaphat, Hezekiah & Manasseh",
      characterAm: "ኢዮሣፍጥ፣ ሕዝቅያስና ምናሴ",
      emotionalStateEn: "Paralyzing military threat transformed into choir-led victory, astonishing turnaround from cruelty to broken repentance",
      emotionalStateAm: "የጦርነት ፍርሃት ወደ አምልኮ ደስታ ሲቀየር፣ ከክፋት ወደ ንስሐ የተደረገ አስደናቂ ለውጥ",
      innerConflictEn: "Jehoshaphat surrounded by vast armies crying: \"We do not know what to do, but our eyes are on you!\"; Manasseh repenting from Babylonian dungeon chains.",
      innerConflictAm: "ኢዮሣፍጥ በጠላት ሠራዊት ተከቦ “የምናደርገውን አናውቅም፥ ነገር ግን ዓይኖቻችን ወደ አንተ ናቸው” ብሎ ሲጸልይ።",
      existentialQuestionEn: "\"Believe in the Lord your God, and you will be established; believe his prophets, and you will succeed!\" (2 Chron 20:20)",
      existentialQuestionAm: "“በአምላካችሁ በእግዚአብሔር እመኑ፥ ትጸኑማላችሁ፤ በነቢያቱም እመኑ፥ ይከናወንላችሁማል!” (2 ዜና 20:20)",
      modernReflectionEn: "No matter how deep your moral failure, sincere repentance reaches heaven instantly; when you don’t know what to do, fix your eyes on God.",
      modernReflectionAm: "ኃጢአትህ የቱንም ያህል የከበደ ቢሆን እውነተኛ ንስሐ የእግዚአብሔርን ልብ ይነካል፤ የምታደርገውን ባጣህ ጊዜ ዓይኖችህን ወደ እግዚአብሔር አንሣ።"
    }
  },

  // 15. EZRA (መጽሐፈ ዕዝራ)
  15: {
    id: 'canon-book-15',
    sceneId: 'book-15',
    bookNr: 15,
    chapterStart: 1,
    titleEn: "Ezra: Return from Exile, Rebuilding the Temple & Scriptural Renewal",
    titleAm: "መጽሐፈ ዕዝራ፡ ከምርኮ መመለስ፣ የመቅደሱ መታነጽና የቃሉ መታደስ",
    eraEn: "Post-Exilic Persian Restoration",
    eraAm: "የፋርስ ዘመንና የመልሶ ማቋቋም ወቅት",
    geopolitical: {
      titleEn: "Babylon to Jerusalem Caravan Trail under Persian Satrapies",
      titleAm: "ከባቢሎን ወደ ኢየሩሳሌም የተደረገው የተመላሾች ጉዞ",
      empireEn: "Achaemenid Persian Empire (Cyrus, Darius I, Artaxerxes I)",
      empireAm: "የፋርስ ኢምፓየር (ቂሮስ፣ ዳርዮስ፣ አርጤክስስ)",
      timeframe: "c. 538 – 450 BC",
      eyewitnessPOVEn: "Caravans of weary exiles arriving at weed-choked Jerusalem; old men weeping loudly because the foundation of the second temple looks modest compared to Solomon’s glory, while youth shout for joy.",
      eyewitnessPOVAm: "ከተመለሱት መካከል የሰሎሞንን መቅደስ ያዩ ሽማግሌዎች የሁለተኛው መቅደስ መሠረት ሲጣለ በከፍተኛ ድምፅ ሲያለቅሱ፣ ወጣቶቹ ግን በደስታ ሲጮኹ የታየበት ቀን።",
      historicalDynamicsEn: "Hostile local Samaritan populations lobbying the Persian royal court with libelous letters to halt construction; legal decrees unsealed in Ecbatana archives.",
      historicalDynamicsAm: "በአካባቢው የነበሩ ጠላቶች ለፋርስ ንጉሥ የሐሰት ክስ በመጻፍ ሥራውን ለማስቆም ያደረጉት ጥረት እና በእግዚአብሔር እርዳታ ድል መደረጉ።",
      groundRealitiesEn: "Carrying silver and gold vessels across 900 miles of dangerous bandit-infested desert without armed royal escorts, relying only on God’s hand.",
      groundRealitiesAm: "ያለ ወታደር ጥበቃ፣ በእግዚአብሔር እጅ ብቻ ተማምኖ የወርቁንና የብር ዕቃዎችን በበረሃ ሽፍቶች መካከል 1,500 ኪሎ ሜትር አጓጉዞ ማምጣት።"
    },
    theological: {
      titleEn: "The Good Hand of God & Reformation by the Word",
      titleAm: "የእግዚአብሔር በጎ እጅና በቃሉ የተደረገ ተሃድሶ",
      covenantStageEn: "Preservation of the Holy Seed in the Promised Land",
      covenantStageAm: "ቅዱሱ ዘር በምድሪቱ ተጠብቆ እንዲኖር የተደረገ ኪዳን",
      redemptiveThemeEn: "God moves pagan emperors’ hearts to fulfill prophetic promises; spiritual renewal requires rigorous return to the Torah.",
      redemptiveThemeAm: "እግዚአብሔር የአሕዛብ ነገሥታትን ልብ በማነሳሳት የትንቢቱን ቃል ፈጸመ፤ መንፈሳዊ መታደስ የሚመጣው ወደ እግዚአብሔር ቃል በመመለስ ነው።",
      christForeshadowingEn: "Zerubbabel the Davidic prince and Joshua the high priest prefigure Jesus as the combined King and Priest who builds the ultimate temple.",
      christForeshadowingAm: "ዘሩባቤል (የዳዊት ዘር) እና ኢያሱ (ሊቀ ካህናት) ንጉሥም ካህንም ሆኖ ቤተ መቅደሱን ለሚሠራው ለኢየሱስ ክርስቶስ ጥላ ናቸው።",
      metaNarrativeAnchorEn: "Ezra 7:10 defines true spiritual ministry: to study the Law, to do it, and to teach it.",
      metaNarrativeAnchorAm: "ዕዝራ 7:10 የእውነተኛ አገልጋይን መርሕ ያሳያል፡ የእግዚአብሔርን ሕግ መመርመር፣ በተግባር ማድረግና ማስተማር።"
    },
    linguistic: [
      {
        original: "יַד יְהוָה טוֹבָה",
        translit: "Yad Yahweh tovah",
        language: "Hebrew",
        amharicTerm: "የእግዚአብሔር በጎ እጅ",
        literalMeaningEn: "The good hand of the Lord upon him",
        literalMeaningAm: "የአምላኩ በጎ እጅ በእርሱ ላይ ነበረች",
        theologicalDepthEn: "God’s gracious sovereign providence enabling his servants to overcome insurmountable political and physical odds.",
        theologicalDepthAm: "የእግዚአብሔር ረዳትነትና ጥበቃ በፖለቲካዊ ተቃውሞዎች መካከል ለሥራው ስኬትን መስጠቱ።",
        canonicalUsageEn: "Ezra 7:6, 7:9, 7:28, 8:22.",
        canonicalUsageAm: "ዕዝራ 7:6፤ 7:9፤ 8:22።"
      }
    ],
    psychological: {
      characterEn: "Ezra the Scribe & Zerubbabel",
      characterAm: "ዕዝራ ጸሐፊውና ዘሩባቤል",
      emotionalStateEn: "Holy shock, tearing hair and garments in weeping prayer, joyful perseverance against bureaucratic intimidation",
      emotionalStateAm: "የልብ ስብራት፣ ኃጢአትን አይቶ በዕንባ መጸለይ፣ ከተቃውሞ ጋር ተጋፍጦ በደስታ መሥራት",
      innerConflictEn: "Ezra ashamed to ask the Persian king for a military escort because he had testified: \"The hand of our God is for good on all who seek him.\"",
      innerConflictAm: "ዕዝራ “የአምላካችን እጅ በሚሹት ሁሉ ላይ ለመልካም ናት” ብሎ ለንጉሡ መስክሮ ስለነበር፣ በበረሃ ወታደር እንዲጠብቀው ለመለመን ማፈሩ።",
      existentialQuestionEn: "\"And now for a little while grace has been shown from the Lord our God, to leave us a remnant!\" (Ezra 9:8)",
      existentialQuestionAm: "“አሁንም አምላካችን እግዚአብሔር ቅሬታን ያተርፍልን ዘንድ ለጥቂት ጊዜ ጸጋን አሳይቶናል!” (ዕዝራ 9:8)",
      modernReflectionEn: "Rebuilding after a season of devastation is rarely glamorous; true revival begins when you fall in love with God’s Word and put it into practice.",
      modernReflectionAm: "ከውድቀት በኋላ ሕይወትን መልሶ መገንባት በትዕግሥት የሚሠራ ሥራ ነው፤ እውነተኛ መታደስ የሚጀምረው ለእግዚአብሔር ቃል ታዛዥ ስትሆን ነው።"
    }
  },

  // 16. NEHEMIAH (መጽሐፈ ነህምያ)
  16: {
    id: 'canon-book-16',
    sceneId: 'book-16',
    bookNr: 16,
    chapterStart: 1,
    titleEn: "Nehemiah: Rebuilding the Walls, Courageous Leadership & Civic Revival",
    titleAm: "መጽሐፈ ነህምያ፡ ቅጥሩን መልሶ መገንባት፣ የቆራጥ መሪነትና የማኅበረሰብ መታደስ",
    eraEn: "Post-Exilic Reconstruction",
    eraAm: "የኢየሩሳሌም ቅጥር የተገነባበት ዘመን",
    geopolitical: {
      titleEn: "The Persian Citadel at Susa to Jerusalem’s Broken Walls",
      titleAm: "ከፋርስ ቤተ መንግሥት ሱሳ እስከ ኢየሩሳሌም ፈራረሱ ቅጥሮች",
      empireEn: "Achaemenid Persian Empire (Artaxerxes I Longimanus)",
      empireAm: "የፋርስ ኢምፓየር (አርጤክስስ ቀዳማዊ)",
      timeframe: "c. 445 – 432 BC",
      eyewitnessPOVEn: "Night inspections on horseback through piles of burnt rubble; trowel in one hand, spear in the other; constant mockery from Sanballat and Tobiah stationed outside the gates.",
      eyewitnessPOVAm: "ነህምያ በሌሊት በፈረስ ተቀምጦ የወደቀውን ቅጥር ሲቃኝ፤ ሠራተኞቹ በአንድ እጃቸው መሣሪያ ይዘው በሌላው እጃቸው ግንብ ሲገነቡ የነበረበት የብርታት ወቅት።",
      historicalDynamicsEn: "Surrounding provincial governors (Sanballat the Horonite, Tobiah the Ammonite) threatening covert military raid; wealthy nobles exploiting starving Jewish peasants with usury.",
      historicalDynamicsAm: "የአካባቢው ጠላቶች ጦርነት እናስነሳለን እያሉ ሲያስፈራሩ፤ የይሁዳ ባለጠጎች ደግሞ ድሆችን በከፍተኛ ወለድ ሲበዘብዙ ነህምያ ፍትሕን ያሰፈነበት ሁኔታ።",
      groundRealitiesEn: "Dust, broken gates blackened by fire, half-hour shift rotations under the desert sun, trumpeter staying glued to Nehemiah’s side.",
      groundRealitiesAm: "የተቃጠሉ በሮች፣ በጠራራ ፀሐይ ቅጥሩን የመሥራት ድካም፣ እና ነህምያ አጠገብ ቆሞ አደጋ ሲመጣ የሚያስጠነቅቀው መለከተኛ።"
    },
    theological: {
      titleEn: "Prayer Combined with Action: The Protection of God’s People",
      titleAm: "ጸሎት ከተግባር ጋር ሲጣመር፡ የእግዚአብሔር ሕዝብ መጠበቅ",
      covenantStageEn: "Civic Holiness and Protection of the Messianic City",
      covenantStageAm: "የቅድስቲቱ ከተማ ሰላምና የማኅበረሰቡ ንጽሕና",
      redemptiveThemeEn: "God rebuilds the physical security of Jerusalem to protect the remnant from assimilation until the Messiah comes.",
      redemptiveThemeAm: "እግዚአብሔር መሲሑ እስኪመጣ ድረስ ሕዝቡ ከአሕዛብ ጋር ተደባልቀው እንዳይጠፉ የኢየሩሳሌምን ቅጥር በ52 ቀናት ውስጥ አጠናከረ።",
      christForeshadowingEn: "Nehemiah leaves his exalted royal cupbearer position to share the reproach of his suffering brethren, foreshadowing Christ leaving heaven to restore broken humanity.",
      christForeshadowingAm: "ነህምያ በፋርስ ቤተ መንግሥት የነበረውን የክብር ቦታ ትቶ ከመከረኞቹ ወገኖቹ ጋር መከራን ለመካፈል መምጣቱ፣ ክብሩን ትቶ የመጣውን ክርስቶስን ያሳያል።",
      metaNarrativeAnchorEn: "The wall completed in 52 days: \"For they perceived that this work had been done with the help of our God\" (Neh 6:16).",
      metaNarrativeAnchorAm: "ቅጥሩ በ52 ቀናት ተጠናቀቀ፤ ጠላቶችም ይህ ሥራ በእግዚአብሔር እርዳታ እንደተሠራ ተረዱ (ነህ 6:16)።"
    },
    linguistic: [
      {
        original: "חֶדְוַת יְהוָה מָעֻזְּכֶם",
        translit: "Chedvat Yahweh ma’uzzchem",
        language: "Hebrew",
        amharicTerm: "የእግዚአብሔር ደስታ ኃይላችሁ ነው",
        literalMeaningEn: "The joy of the Lord is your fortress / stronghold",
        literalMeaningAm: "የእግዚአብሔር ደስታ ጉልበታችሁ (ምሽጋችሁ) ነው",
        theologicalDepthEn: "Spiritual strength in the face of exhaustion does not come from human willpower, but from rejoicing in God’s redemptive faithfulness.",
        theologicalDepthAm: "በከባድ ድካምና ውጊያ ውስጥ እውነተኛ ብርታት የሚገኘው በእግዚአብሔር ቸርነት በመደሰት ነው።",
        canonicalUsageEn: "Nehemiah 8:10.",
        canonicalUsageAm: "ነህምያ 8:10።"
      }
    ],
    psychological: {
      characterEn: "Nehemiah the Cupbearer-Governor",
      characterAm: "ነህምያ አገረ ገዢው",
      emotionalStateEn: "Grief turning to strategic resolve, righteous anger against injustice, fearless poise",
      emotionalStateAm: "የኀዘን ዕንባ ወደ ቁርጠኝነት ሲቀየር፣ በግፍ ላይ የነደደ ቅን ቅናት፣ የማያወላውል ድፍረት",
      innerConflictEn: "Facing assassination traps in surrounding villages: \"Should such a man as I run away? I am doing a great work and I cannot come down!\"",
      innerConflictAm: "ጠላቶች ሊገድሉት ሲሸርቡ “እንደ እኔ ያለ ሰው ይሸሻልን? እኔ ታላቅ ሥራ እየሠራሁ ነውና መውረድ አልችልም” ብሎ የሰጠው ጽኑ ምላሽ።",
      existentialQuestionEn: "\"Remember me, O my God, for good, according to all that I have done for this people!\" (Neh 5:19)",
      existentialQuestionAm: "“አምላኬ ሆይ፥ ለዚህ ሕዝብ ያደረግሁትን ሁሉ በመልካም አስብልኝ!” (ነህ 5:19)",
      modernReflectionEn: "When building something meaningful, expect opposition; pray as if everything depends on God, and work with tools in hand as if He is counting on you.",
      modernReflectionAm: "ጠቃሚ ሥራ ስትሠራ ተቃውሞ መምጣቱ አይቀርም፤ ሁሉም በእግዚአብሔር እንደሚወሰን ጸልይ፣ ሥራውንም በሙሉ ኃይልህና ትጋትህ ፈጽም።"
    }
  },

  // 17. ESTHER (መጽሐፈ አስቴር)
  17: {
    id: 'canon-book-17',
    sceneId: 'book-17',
    bookNr: 17,
    chapterStart: 1,
    titleEn: "Esther: The Hidden Providence of God & Jewish Deliverance",
    titleAm: "መጽሐፈ አስቴር፡ ድውቁ የእግዚአብሔር ጥበቃና የአይሁድ መዳን",
    eraEn: "Persian Exile Dispersion",
    eraAm: "በፋርስ ግዛት ውስጥ የተደረገው ተጋድሎ",
    geopolitical: {
      titleEn: "The Imperial Citadel of Susa",
      titleAm: "የፋርስ ዋና ከተማ ሱሳ ቤተ መንግሥት",
      empireEn: "Achaemenid Persian Superpower (Xerxes I / Ahasuerus)",
      empireAm: "የፋርስ ኢምፓየር (አሕሻዊሮስ / ጠረክሲስ ቀዳማዊ)",
      timeframe: "c. 483 – 473 BC",
      eyewitnessPOVEn: "A decadent 180-day royal banquet with golden goblets; an antisemitic genocide decree sealed with the king’s signet ring dispatched to 127 provinces; young orphan Esther risking death to enter the inner court uninvited.",
      eyewitnessPOVAm: "በ127 አውራጃዎች የሚኖሩ አይሁድ በሙሉ በአንድ ቀን እንዲገደሉ የሐማ አዋጅ በወጣ ጊዜ፤ አስቴር ሳትጠራ ወደ ንጉሡ አዳራሽ በመግባት ሕይወቷን አደጋ ላይ የጣለችበት ታሪክ።",
      historicalDynamicsEn: "Court politics, ethnic tensions between descendants of Agag (Amalekites) and the tribe of Benjamin; the imperial post system carrying fatal decrees across Asia.",
      historicalDynamicsAm: "በሐማና በመርዶክዮስ መካከል የነበረው ጥንታዊ ጠብ፤ የፋርስ ንጉሥ ያወጣው ሕግ የማይሻር በመሆኑ የተፈጠረ ከባድ ፖለቲካዊ ውጥረት።",
      groundRealitiesEn: "Sackcloth and ashes at the king’s gate, casting lots (Pur) for the date of annihilation, gallows 50 cubits high built by Haman.",
      groundRealitiesAm: "ማቅ ለብሶ በከተማው በር ላይ ማልቀስ፣ ሐማ ሕዝቡን ለማጥፋት ዕጣ (ፑር) መጣሉ፣ እና ለመርዶክዮስ ያዘጋጀው ረጅም ስቅላት።"
    },
    theological: {
      titleEn: "The Unspoken Name and Inescapable Sovereignty of God",
      titleAm: "ስሙ ባይጠቀስም በክስተቶች ጀርባ የነገሠው የእግዚአብሔር እጅ",
      covenantStageEn: "Preservation of the Abrahamic Seed against Genocide",
      covenantStageAm: "የአብርሃም ዘር ከጥፋት እንዲተርፍ የተደረገው ጥበቃ",
      redemptiveThemeEn: "Though God’s name is never mentioned explicitly in the text, his fingerprints are everywhere: reversing evil plots so the gallows built for the righteous hangs the wicked.",
      redemptiveThemeAm: "በመጽሐፉ ውስጥ የአምላክ ስም በግልጽ ባይጻፍም፤ እርሱ ግን ከትዕይንቱ ጀርባ ሆኖ ክፉውን ወደ መልካም ሲቀይርና አዳኝነቱን ሲያሳይ ታይቷል።",
      christForeshadowingEn: "Esther the mediator who intercedes before the king at the risk of her life mirrors Christ, our supreme Intercessor who gave his life to reverse the decree of death against us.",
      christForeshadowingAm: "አስቴር ለሕዝቧ ስትል ሕይወቷን አደጋ ላይ ጥላ በንጉሡ ፊት መማለዷ፣ ስለ እኛ ነፍሱን ሰጥቶ የሞት አዋጅን የሻረውን የክርስቶስን አማላጅነት ያሳያል።",
      metaNarrativeAnchorEn: "\"Who knows whether you have not come to the kingdom for such a time as this?\" (Esther 4:14).",
      metaNarrativeAnchorAm: "“ማን ያውቃል? አንቺ ወደ መንግሥት የመጣሽው እንደዚህ ላለው ጊዜ እንደ ሆነ ማን ያውቃል?” (አስ 4:14)።"
    },
    linguistic: [
      {
        original: "רֶוַח וְהַצָּלָה",
        translit: "Revach ve-hatzalah",
        language: "Hebrew",
        amharicTerm: "ዕረፍትና ማዳን",
        literalMeaningEn: "Spacious relief and sovereign deliverance",
        literalMeaningAm: "ዕረፍትና መዳን (ነፃ መውጣት)",
        theologicalDepthEn: "Mordecai’s unshakable faith: God’s promise cannot fail—if Esther remains silent, deliverance will arise from another place.",
        theologicalDepthAm: "የመርዶክዮስ የማይናወጥ እምነት፡ አስቴር ዝም ብትልም እንኳ ለአይሁድ ማዳን ከሌላ ስፍራ መነሳቱ አይቀርም።",
        canonicalUsageEn: "Esther 4:14.",
        canonicalUsageAm: "አስቴር 4:14።"
      }
    ],
    psychological: {
      characterEn: "Esther & Mordecai",
      characterAm: "አስቴርና መርዶክዮስ",
      emotionalStateEn: "Terrifying dread, resolved sacrificial dignity (\"If I perish, I perish\"), vindicated triumph",
      emotionalStateAm: "የፍርሃት ድንጋጤ፣ ለሕዝብ ራስን አሳልፎ የመስጠት ጽናት (“ከጠፋሁም ልጥፋ”)፣ የታላቅ ድል ደስታ",
      innerConflictEn: "Esther risking summary execution by approaching the royal throne unsummoned; fasting three days without bread or water.",
      innerConflictAm: "አስቴር ሕጉን ጥሳ ሳትጠራ ወደ ንጉሡ ስትገባ የተሰማት የሞት ፍርሃት፤ ሦስት ቀንና ሌሊት ሙሉ በጾምና በጸሎት መቆየቷ።",
      existentialQuestionEn: "\"If I perish, I perish!\" (Esther 4:16)",
      existentialQuestionAm: "“እኔም ከጠፋሁ ልጥፋ!” (አስቴር 4:16)",
      modernReflectionEn: "God often places you in unexpected corridors of influence not for your comfort, but for the salvation of others; courage is choosing purpose over safety.",
      modernReflectionAm: "እግዚአብሔር አሁን ባለህበት ቦታ ላይ ያስቀመጠህ ለራስህ ምቾት ብቻ ሳይሆን ለሌሎች መዳን ምክንያት እንድትሆን ነው፤ ለእንዲህ ላለው ጊዜ ተዘጋጅ።"
    }
  },

  // 18. JOB (መጽሐፈ ኢዮብ)
  18: {
    id: 'canon-book-18',
    sceneId: 'book-18',
    bookNr: 18,
    chapterStart: 1,
    titleEn: "Job: The Mystery of Innocent Suffering & Sovereign Majesty",
    titleAm: "መጽሐፈ ኢዮብ፡ የጻድቅ መከራ ምስጢርና የአምላክ ታላቅነት",
    eraEn: "Patriarchal Age Wisdom",
    eraAm: "የጥንት አበው የጥበብ ዘመን",
    geopolitical: {
      titleEn: "The Land of Uz (Near Edom / Northern Arabia)",
      titleAm: "የዑፅ ምድር (በኤዶምያስ አቅራቢያ)",
      empireEn: "Ancient Pastoral Chieftain Societies",
      empireAm: "የጥንት የከብት አርቢ መኳንንት ማኅበረሰብ",
      timeframe: "c. 2000 – 1800 BC",
      eyewitnessPOVEn: "A billionaire patriarch stripped in a single day of 10 children, vast herds, and health, sitting on a town ash-heap scraping pus-filled boils with broken pottery while three theologians debate his guilt.",
      eyewitnessPOVAm: "ልጆቹን፣ ሀብቱንና ጤናውን በአንድ ቀን ያጣው ባለጸጋው ኢዮብ በአመድ ላይ ተቀምጦ ቁስሉን በሸክላ ሲፍቅ፤ ሦስቱ ጓደኞቹ በደል አለብህ እያሉ ሲከራከሩት የታየበት የሥቃይ ትዕይንት።",
      historicalDynamicsEn: "Caravans from Sheba and Chaldean raiders striking herds; ancient wisdom dialogue traditions exploring theodicy and divine justice.",
      historicalDynamicsAm: "የሳባና የከለዳውያን ወራሪዎች ሀብቱን ሲዘርፉ፤ በወቅቱ የነበረው “መከራ የሚመጣው በኃጢአት ምክንያት ብቻ ነው” የሚለው የተሳሳተ አመለካከት የተገለጠበት ሁኔታ።",
      groundRealitiesEn: "Tearing robes, shaving heads in mourning, sitting in absolute silence for seven days and seven nights.",
      groundRealitiesAm: "መጎናጸፊያን መቅደድ፣ ራስን መላጨት፣ እና ለሰባት ቀናትና ሰባት ሌሊት በአመድ ላይ በዝምታ መቀመጥ።"
    },
    theological: {
      titleEn: "Theodicy: Trusting God When Life Makes No Sense",
      titleAm: "የመለኮት ፍትሕ፡ ምክንያቱ ባልታወቀ መከራ ውስጥ በእግዚአብሔር መታመን",
      covenantStageEn: "Cosmic Wisdom and Faith Untested vs. Refined",
      covenantStageAm: "በመከራ እሳት የተፈተነ እውነተኛ እምነት",
      redemptiveThemeEn: "Satan claims humans only love God for his blessings; Job proves that authentic faith loves God for who he is, even in naked ruin.",
      redemptiveThemeAm: "ሰይጣን “ሰው እግዚአብሔርን የሚያመልከው ለጥቅሙ ብቻ ነው” ያለውን ክስ፤ ኢዮብ ምንም በሌለው ጊዜም እግዚአብሔርን በማመስገን ሐሰት መሆኑን አረጋገጠ።",
      christForeshadowingEn: "Job the innocent sufferer who intercedes for his accusers prefigures Christ, the truly innocent Sufferer who bore our griefs and prayed for his crucifiers.",
      christForeshadowingAm: "ያለ በደሉ መከራን የተቀበለውና ለወቃሾቹ የጸለየው ኢዮብ፤ ስለ በደላችን መከራን የተቀበለውንና ለሰቃዮቹ ይቅርታን የለመነውን የኢየሱስ ክርስቶስ ጥላ ነው።",
      metaNarrativeAnchorEn: "God answers from the whirlwind not with philosophical explanations, but with a revelation of His incomprehensible majesty.",
      metaNarrativeAnchorAm: "እግዚአብሔር ከዐውሎ ነፋስ ውስጥ ሆኖ ለኢዮብ የመለሰለት የፍልስፍና መልስ ሳይሆን፣ እርሱ የፍጥረት ሁሉ ፈጣሪና ጠባቂ መሆኑን በማሳየት ነበር።"
    },
    linguistic: [
      {
        original: "גֹּאֲלִי חָי",
        translit: "Go’ali chai",
        language: "Hebrew",
        amharicTerm: "ቤዛዬ ሕያው ነው",
        literalMeaningEn: "My Redeemer / Vindicator lives",
        literalMeaningAm: "ቤዛዬ (ዋሴ) ሕያው እንደ ሆነ አውቃለሁ",
        theologicalDepthEn: "The triumphant cry of faith piercing through disease and despair: at the last, my Vindicator will stand upon the earth.",
        theologicalDepthAm: "በከባድ በሽታና ተስፋ መቁረጥ ውስጥ ሆኖ የተሰማ የታላቅ እምነት ድምፅ፤ በመጨረሻው ዘመን ቤዛዬ በምድር ላይ ይቆማል።",
        canonicalUsageEn: "Job 19:25–26.",
        canonicalUsageAm: "ኢዮብ 19:25-26።"
      }
    ],
    psychological: {
      characterEn: "Job & The Three Companions",
      characterAm: "ኢዮብና ሦስቱ ወዳጆቹ",
      emotionalStateEn: "Excruciating physical agony, existential bewilderment, defiant integrity, humbled peace",
      emotionalStateAm: "የሥጋ ሥቃይ፣ የነፍስ ግራ መጋባት፣ በንጽሕና መቆም፣ በአምላክ ፊት ራስን ማዋረድ",
      innerConflictEn: "Job demanding his day in court with God: \"Let the Almighty answer me!\" yet confessing: \"Though he slay me, yet will I trust in him.\"",
      innerConflictAm: "ኢዮብ “ከእግዚአብሔር ጋር መሟገት እፈልጋለሁ” እያለ ሲጮኽ፤ በሌላ በኩል ግን “ቢገድለኝ እንኳ በእርሱ ታምናለሁ” ብሎ መገዛቱ።",
      existentialQuestionEn: "\"The Lord gave, and the Lord has taken away; blessed be the name of the Lord!\" (Job 1:21)",
      existentialQuestionAm: "“እግዚአብሔር ሰጠ፥ እግዚአብሔርም ወሰደ፤ የእግዚአብሔር ስም የተባረከ ይሁን!” (ኢዮብ 1:21)",
      modernReflectionEn: "When unexplainable suffering hits, you don’t need easy religious clichés; you need the living God, whose wisdom is deeper than your questions.",
      modernReflectionAm: "ምክንያቱ ያልታወቀ መከራ ሲገጥምህ ባዶ ማጽናኛ አያጽናናህም፤ ከሁኔታዎች በላይ የሆነውንና ለሕይወትህ መልስ ያለውን ሕያውን እግዚአብሔርን ተመልከት።"
    }
  },

  // 19. PSALMS (መዝሙረ ዳይት)
  19: {
    id: 'canon-book-19',
    sceneId: 'book-19',
    bookNr: 19,
    chapterStart: 1,
    titleEn: "Psalms: The Anatomy of the Soul & The Liturgy of the Kingdom",
    titleAm: "መዝሙረ ዳዊት፡ የሰው ልጅ የውስጥ ስሜት መግለጫና የመንግሥቱ አምልኮ",
    eraEn: "The Golden Age of Israel’s Worship",
    eraAm: "የእስራኤል የአምልኮና የመቅደስ ወርቃማ ዘመን",
    geopolitical: {
      titleEn: "From Judean Caves to the Temple Courts on Mount Zion",
      titleAm: "ከይሁዳ ዋሻዎች እስከ ጽዮን ተራራ አደባባዮች",
      empireEn: "United Monarchy to Babylonian Exile & Restoration",
      empireAm: "ከዳዊት ዘመን እስከ ባቢሎን ምርኮና መልስ",
      timeframe: "c. 1400 – 450 BC",
      eyewitnessPOVEn: "Harps, lyres, and cymbals reverberating across Jerusalem; outlaws crying for justice in pitch-black caves; pilgrims climbing the ascent to Zion singing anthems of joy.",
      eyewitnessPOVAm: "በበገና፣ በመሰንቆና በጸናጽል የታጀበ ታላቅ አምልኮ፤ በዋሻ ውስጥ የተጨነቁ ነፍሳት ጩኸት፣ እና ወደ ኢየሩሳሌም የሚወጡ ምእመናን የደስታ ዝማሬ።",
      historicalDynamicsEn: "Songs forged across a millennium: Moses in the wilderness, David fleeing Saul and Absalom, the exiles weeping by the rivers of Babylon.",
      historicalDynamicsAm: "በአንድ ሺህ ዓመታት ውስጥ የተሰበሰበ፡ ከሙሴ የምድረ በዳ ጸሎት ጀምሮ፣ የዳዊት ስደት፣ እና በባቢሎን ወንዞች አጠገብ በምርኮ የፈሰሰ ዕንባ።",
      groundRealitiesEn: "Washing the couch with tears, lifting holy hands at evening sacrifice, anointing the head with oil while enemies watch.",
      groundRealitiesAm: "አልጋን በዕንባ ማጠብ፣ በማታው መሥዋዕት ጊዜ እጆችን ወደ ላይ ማንሣት፣ እና በጠላቶች ፊት የተዘጋጀ የተትረፈረፈ ማዕድ።"
    },
    theological: {
      titleEn: "Every Human Emotion Sanctified into Worship",
      titleAm: "የሰው ልጅ ስሜት ሁሉ ወደ እውነተኛ ጸሎትና አምልኮ ሲለወጥ",
      covenantStageEn: "Davidic Covenant and Cosmic Enthronement of Yahweh",
      covenantStageAm: "የዳዊት ቃል ኪዳንና የእግዚአብሔር የዘላለም ንግሥና",
      redemptiveThemeEn: "The Psalms encompass lament, thanksgiving, praise, and royal enthronement—teaching believers how to bring their full humanity before God.",
      redemptiveThemeAm: "መዝሙረ ዳዊት ለቅሶን፣ ምስጋናን፣ ውዳሴንና ንስሐን በማካተት፤ ሰው በየትኛውም የሕይወት ገጠመኝ ውስጥ ወደ ፈጣሪው እንዴት እንደሚቀርብ ያስተምራል።",
      christForeshadowingEn: "The Messianic Psalms: The suffering Servant whose hands and feet are pierced (Ps 22); the King exalted at God’s right hand (Ps 110); the Good Shepherd (Ps 23).",
      christForeshadowingAm: "መሲሐዊ መዝሙራት፡ እጆቹና እግሮቹ የተወጉት ክርስቶስ (መዝ 22)፤ በእግዚአብሔር ቀኝ የተቀመጠው ዘላለማዊ ንጉሥ (መዝ 110)፤ መልካሙ እረኛ (መዝ 23)።",
      metaNarrativeAnchorEn: "Jesus died on the cross quoting Psalm 22:1 and Psalm 31:5.",
      metaNarrativeAnchorAm: "ጌታችን በመስቀል ላይ በነበረበት የመጨረሻው ሰዓት የተናገረው የመዝሙር 22 እና የመዝሙር 31 ቃላትን ነበር።"
    },
    linguistic: [
      {
        original: "תְּהִלִּים",
        translit: "Tehillim",
        language: "Hebrew",
        amharicTerm: "ምስጋናዎች (ውዳሴዎች)",
        literalMeaningEn: "Praises / Songs of adoration",
        literalMeaningAm: "ምስጋናዎች (የዕብራይስጡ የመጽሐፉ ስም)",
        theologicalDepthEn: "Even psalms that begin in deep agony culminate in unreserved praise of Yahweh’s character.",
        theologicalDepthAm: "በከባድ ለቅሶና ጩኸት የሚጀምሩት መዝሙራት እንኳ በመጨረሻ ወደ እግዚአብሔር ምስጋና ያድጋሉ።",
        canonicalUsageEn: "Hebrew title of Psalms; Psalm 150:6 (\"Let everything that has breath praise the Lord!\").",
        canonicalUsageAm: "መዝሙር 150:6 (“እስትንፋስ ያለው ሁሉ እግዚአብሔርን ያመስግን!”)።"
      },
      {
        original: "סֶלָה",
        translit: "Selah",
        language: "Hebrew",
        amharicTerm: "ሴላ (አቁም እና አስብ)",
        literalMeaningEn: "Pause, weigh carefully, musical crescendo",
        literalMeaningAm: "አቁመህ አስብ / ዝም ብለህ አድምጥ",
        theologicalDepthEn: "A liturgical instruction to pause and let the gravity of the divine truth sink into the depths of the soul.",
        theologicalDepthAm: "የተነገረውን ጥልቅ እውነት በልብ ለማሰላሰል የሚደረግ መንፈሳዊ ዕረፍት።",
        canonicalUsageEn: "Occurs 71 times in Psalms and 3 times in Habakkuk.",
        canonicalUsageAm: "በመዝሙር ውስጥ 71 ጊዜ ተጠቅሷል።"
      }
    ],
    psychological: {
      characterEn: "David the Psalmist & The Sons of Korah",
      characterAm: "ዳዊትና የቆሬ ልጆች",
      emotionalStateEn: "Raw vulnerability, overwhelming despair, triumphant ecstasies, tranquil trust",
      emotionalStateAm: "የልብ ግልጥነት፣ የነፍስ ጭንቀት፣ የድል ደስታ፣ በእግዚአብሔር ላይ ያረፈ ፍጹም ሰላም",
      innerConflictEn: "\"Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him!\"",
      innerConflictAm: "“ነፍሴ ሆይ፥ ለምን ታዝኛለሽ? ለምንስ ትታወኪያለሽ? የፊቴን መድኃኒት አምላኬን አመሰግነዋለሁና በእግዚአብሔር ታመኚ!” (መዝ 42:5)።",
      existentialQuestionEn: "\"The Lord is my shepherd; I shall not want!\" (Psalm 23:1)",
      existentialQuestionAm: "“እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም!” (መዝ 23:1)",
      modernReflectionEn: "God does not ask you to hide your pain behind a mask; bring your raw questions, tears, and doubts to Him—He meets you in honest prayer.",
      modernReflectionAm: "በእግዚአብሔር ፊት ስሜትህን መደበቅ አያስፈልግህም፤ ኀዘንህን፣ ፍርሃትህንና ጥያቄህን ይዘህ ወደ እርሱ ቅረብ፤ እርሱ ልብህን ያሳርፋል።"
    }
  },

  // 20. PROVERBS (መጽሐፈ ምሳሌ)
  20: {
    id: 'canon-book-20',
    sceneId: 'book-20',
    bookNr: 20,
    chapterStart: 1,
    titleEn: "Proverbs: The Skill of Godly Living & The Fear of the Lord",
    titleAm: "መጽሐፈ ምሳሌ፡ የእውነተኛ ሕይወት ጥበብና እግዚአብሔርን መፍራት",
    eraEn: "The Solomonic Era of Wisdom Literature",
    eraAm: "የሰሎሞን የጥበብ ዘመን",
    geopolitical: {
      titleEn: "The Royal Court, City Gates & Domestic Households of Israel",
      titleAm: "የቤተ መንግሥቱ አዳራሽ፣ የከተማይቱ ደጃፍና የዕለት ተዕለት ኑሮ",
      empireEn: "Israelite United Monarchy & International Trade Networks",
      empireAm: "የተባበረው የእስራኤል መንግሥትና ዓለም አቀፍ ግንኙነቶች",
      timeframe: "c. 970 – 700 BC",
      eyewitnessPOVEn: "Father teaching his son by the hearth; young apprentices learning trades; the bustling public square where Lady Wisdom cries aloud at the cross-streets.",
      eyewitnessPOVAm: "አባት ልጁን በቤት ውስጥ ሲመክር፤ ወጣቶች የሕይወትን መንገድ ሲማሩ፤ እና ጥበብ በአደባባይ ድምጿን ከፍ አድርጋ ሰዎችን ወደ መልካም መንገድ ስትጣራ።",
      historicalDynamicsEn: "Compilation of royal aphorisms under Solomon, later curated by the men of King Hezekiah; navigating wealth, speech, anger, and sexuality.",
      historicalDynamicsAm: "በሰሎሞን የተዘጋጁና በኋላም በንጉሥ ሕዝቅያስ ሰዎች የተሰበሰቡ ምሳሌዎች፤ በንግግር፣ በሀብት አያያዝ፣ በንጽሕናና በሥራ ትጋት ላይ የተሰጡ መመሪያዎች።",
      groundRealitiesEn: "The ant gathering food in summer, the scales balancing weights in the marketplace, the lamp searching the heart.",
      groundRealitiesAm: "ጉንዳን በበጋ መብሏን ስትሰበስብ፣ በገበያ ውስጥ የቀና ሚዛን መጠቀም፣ እና የሰው መንፈስ የእግዚአብሔር መብራት መሆኑ።"
    },
    theological: {
      titleEn: "Wisdom Rooted in the Transcendent Creator",
      titleAm: "ጥበብ ከፈጣሪ የሚገኝ ስጦታ ሲሆን",
      covenantStageEn: "Sinai Wisdom Applied to Daily Horizon",
      covenantStageAm: "የእግዚአብሔር ሕግ በዕለት ተዕለት ኑሮ ላይ ሲተረጎም",
      redemptiveThemeEn: "God’s world is moral: righteousness leads to life and peace, while folly leads to self-destruction. Wisdom is an invitation to walk in harmony with creation.",
      redemptiveThemeAm: "እግዚአብሔር ዓለምን የፈጠረው በሥርዓት ነው፤ ጽድቅና እውነት ሕይወትን ያመጣሉ፤ ስንፍናና ክፋት ግን ወደ ጥፋት ይመራሉ፤ እውነተኛ ጥበብ ከእግዚአብሔር ጋር መስማማት ነው።",
      christForeshadowingEn: "Wisdom personified in Proverbs 8 as God’s master craftsman at creation finds fulfillment in Christ, \"the power of God and the wisdom of God\" (1 Cor 1:24).",
      christForeshadowingAm: "በምሳሌ 8 የተገለጠችው ዘላለማዊት ጥበብ ፍጻሜዋን ያገኘችው በክርስቶስ ነው፤ እርሱ “የእግዚአብሔር ኃይልና የእግዚአብሔር ጥበብ” ነው (1 ቆሮ 1:24)።",
      metaNarrativeAnchorEn: "The foundational axiom: \"The fear of the Lord is the beginning of knowledge\" (Prov 1:7).",
      metaNarrativeAnchorAm: "የጥበብ ሁሉ መጀመሪያና መሠረት እግዚአብሔርን መፍራት ነው (ምሳ 1:7)።"
    },
    linguistic: [
      {
        original: "חָכְמָה",
        translit: "Chokhmah",
        language: "Hebrew",
        amharicTerm: "ጥበብ",
        literalMeaningEn: "Skill, craft, master expertise in the art of living",
        literalMeaningAm: "ጥበብ / በሕይወት የመኖር ብልሃት",
        theologicalDepthEn: "Not mere intellectual knowledge, but the moral skill to align choices with God’s design of reality.",
        theologicalDepthAm: "የአእምሮ ዕውቀት ብቻ ሳይሆን፣ እግዚአብሔርን በሚያስከብር መንገድ የመኖር ተግባራዊ ችሎታ።",
        canonicalUsageEn: "Proverbs 1:2, 8:1; Colossians 2:3 (\"in whom are hidden all treasures of wisdom\").",
        canonicalUsageAm: "ምሳሌ 1:2፤ ቆላስይስ 2:3።"
      },
      {
        original: "יִרְאַת יְהוָה",
        translit: "Yir’at Yahweh",
        language: "Hebrew",
        amharicTerm: "እግዚአብሔርን መፍራት",
        literalMeaningEn: "Awe-filled reverence of Yahweh",
        literalMeaningAm: "እግዚአብሔርን በአክብሮት መፍራት",
        theologicalDepthEn: "Not cowering terror, but profound humble recognition of God as the ultimate center of existence.",
        theologicalDepthAm: "የፍርሃት ድንጋጤ ሳይሆን፣ እግዚአብሔርን በማክበርና እርሱን ለማስደሰት ካለ ጥልቅ ፍቅር የሚመነጭ ክብር።",
        canonicalUsageEn: "Proverbs 1:7, 9:10, 15:33.",
        canonicalUsageAm: "ምሳሌ 1:7፤ 9:10።"
      }
    ],
    psychological: {
      characterEn: "The Wise Son & The Noble Woman (Prov 31)",
      characterAm: "ጠቢቡ ልጅና ባለሙያዋ ሴት",
      emotionalStateEn: "Prudent focus, disciplined tongue, industrious joy, serene dignity",
      emotionalStateAm: "የልብ ጽሞና፣ አንደበትን መጠበቅ፣ የሥራ ትጋትና ደስታ፣ የተከበረ ግርማ",
      innerConflictEn: "Choosing between the seductive flattery of Lady Folly and the arduous, disciplined pathway of Lady Wisdom.",
      innerConflictAm: "የስንፍናን አቋራጭና አሳሳች መንገድ ትቶ፣ በጽናትና በትጋት የጥበብን ጎዳና የመምረጥ ዕለታዊ ትግል።",
      existentialQuestionEn: "\"Trust in the Lord with all your heart, and do not lean on your own understanding!\" (Prov 3:5)",
      existentialQuestionAm: "“በፍጹም ልብህ በእግዚአብሔር ታመን፥ በራስህም ማስተዋል አትደገፍ!” (ምሳ 3:5)",
      modernReflectionEn: "Intelligence without moral integrity is catastrophic; true wisdom begins when you revere God and let Him direct your steps.",
      modernReflectionAm: "ያለ መንፈሳዊ ቅንነት የሚገኝ ብልጠት ውድቀት ነው፤ እውነተኛ ስኬት የሚጀምረው እግዚአብሔርን በማክበርና መንገዱን በመከተል ነው።"
    }
  },

  // 21. ECCLESIASTES (መጽሐፈ መክብብ)
  21: {
    id: 'canon-book-21',
    sceneId: 'book-21',
    bookNr: 21,
    chapterStart: 1,
    titleEn: "Ecclesiastes: The Vanity of Under-the-Sun Living & Eternal Fear",
    titleAm: "መጽሐፈ መክብብ፡ ከፀሐይ በታች ያለው ከንቱነትና ዘላለማዊ ግዴታ",
    eraEn: "Late Solomonic Philosophical Reflection",
    eraAm: "የሰሎሞን የሕይወት ፍልስፍና ማጠቃለያ",
    geopolitical: {
      titleEn: "Palace Gardens, Architecture Projects & The Assembly of Jerusalem",
      titleAm: "የንጉሡ የአትክልት ስፍራዎች፣ ታላላቅ ሕንጻዎችና የኢየሩሳሌም ጉባኤ",
      empireEn: "Ancient Near Eastern Wealth & Intellectual Monarchy",
      empireAm: "የጥንቱ ዓለም ከፍተኛ የሀብትና የዕውቀት ደረጃ",
      timeframe: "c. 940 – 930 BC",
      eyewitnessPOVEn: "An aging emperor who tried every earthly pleasure—palaces, concubines, vineyards, philosophy, vast gold reserves—looking at his life’s achievements and whispering that everything is like chasing vapor.",
      eyewitnessPOVAm: "በምድር ላይ ያለውን ሀብት፣ ሥልጣን፣ ዕውቀትና ደስታ ሁሉ ሞክሮ ያጠናቀቀው ንጉሥ ወደ ኋላ ተመልክቶ “ከፀሐይ በታች ያለው ሁሉ ከንቱ የከንቱ ከንቱ ነው” ብሎ ሲመሰክር።",
      historicalDynamicsEn: "A devastating empirical autopsy of secular materialism: examining life strictly \"under the sun\" (without reference to eternity).",
      historicalDynamicsAm: "ሰው እግዚአብሔርን ሳይዝ በዚህ ዓለም ላይ የሚያሳድደው ሀብት፣ ዝናና እውቀት መጨረሻው ባዶነት መሆኑን በጥልቀት ያረጋገጠ ጥናት።",
      groundRealitiesEn: "The sun rising and setting in monotonous cycles, rivers flowing into the sea yet the sea is never full, all human labor ending in the grave.",
      groundRealitiesAm: "ፀሐይ ትወጣለች ትጠልቃለችም፤ ወንዞች ወደ ባሕር ይፈሳሉ ነገር ግን ባሕሩ አይሞላም፤ የሰው ድካም ሁሉ በመቃብር ያበቃል።"
    },
    theological: {
      titleEn: "The Vacuum of Life Apart from God",
      titleAm: "ያለ እግዚአብሔር የሆነ ሕይወት ባዶነት",
      covenantStageEn: "Eternity Placed in the Human Heart",
      covenantStageAm: "በሰው ልብ ውስጥ የተቀመጠው የዘላለም ናፍቆት",
      redemptiveThemeEn: "Nothing finite can satisfy an infinite craving; God has put eternity into man’s heart so that only God himself can bring lasting peace.",
      redemptiveThemeAm: "በሰው ልብ ውስጥ የተቀመጠውን የዘላለም ናፍቆት ይህ ሟች ዓለም ሊሞላው አይችልም፤ እውነተኛ እርካታ የሚገኘው በፈጣሪ ብቻ ነው።",
      christForeshadowingEn: "Christ is the true bread of life and living water who ends the vanity of human thirst; in Him, our labor is never in vain (1 Cor 15:58).",
      christForeshadowingAm: "የሰው ልጅን የከንቱነት ጥም የሚያረካው የሕይወት እንጀራ ክርስቶስ ነው፤ በእርሱ የሆነ ድካማችን ከንቱ ሆኖ አይቀርም (1 ቆሮ 15:58)።",
      metaNarrativeAnchorEn: "The ultimate conclusion: \"Fear God and keep his commandments, for this is the whole duty of man\" (Eccl 12:13).",
      metaNarrativeAnchorAm: "የነገሩ ሁሉ ማጠቃለያ ይህ ነው፡ “እግዚአብሔርን ፍራ፥ ትእዛዛቱንም ጠብቅ፤ ይህ የሰው ሁለተኛው ግዴታ ነውና” (መክ 12:13)።"
    },
    linguistic: [
      {
        original: "הֶבֶל",
        translit: "Hevel",
        language: "Hebrew",
        amharicTerm: "ከንቱ (ጭስ / እንፋሎት)",
        literalMeaningEn: "Vapor, breath, transient smoke, fleeting mist",
        literalMeaningAm: "ከንቱ / እንደ ጭስ የሚበን ትነት",
        theologicalDepthEn: "Life is not meaningless, but elusive, fleeting, and impossible to grasp and control like smoke.",
        theologicalDepthAm: "ሕይወት ባዶ ናት ማለት ሳይሆን፣ እንደ ጭስ በቀላሉ የምታልፍና በሰው እጅ የማትጨበጥ ናት ማለት ነው።",
        canonicalUsageEn: "Ecclesiastes 1:2 (used 38 times); James 4:14 (\"you are a mist that appears for a little time\").",
        canonicalUsageAm: "መክብብ 1:2፤ ያዕቆብ 4:14 (“ለጥቂት ጊዜ ታይቶ እንደሚጠፋ ጭጋግ ናችሁ”)።"
      }
    ],
    psychological: {
      characterEn: "Qoheleth (The Preacher / Assembler)",
      characterAm: "መክብብ (ሰባኪው ሰሎሞን)",
      emotionalStateEn: "Disillusionment with materialism, ruthless intellectual honesty, reverent simplicity",
      emotionalStateAm: "በዓለማዊ ሀብት መረካት አለመቻል፣ ፍጹም ቅን የሆነ ግምገማ፣ እግዚአብሔርን ወደ መፍራት መመለስ",
      innerConflictEn: "Possessing unlimited resources to indulge every desire, yet finding only emptiness until looking beyond the sun.",
      innerConflictAm: "የፈለገውን ሁሉ የማድረግ ሙሉ አቅም ኖሮት ሳለ በውስጡ የተሰማው ባዶነት፤ በመጨረሻ ግን ወደ ፈጣሪው ዞሮ ሰላም ማግኘቱ።",
      existentialQuestionEn: "\"He has made everything beautiful in its time. Also, he has put eternity into man’s heart\" (Eccl 3:11)",
      existentialQuestionAm: "“ነገሩን ሁሉ በጊዜው ውብ አድርጎ ሠራው፤ ደግሞም ዘላለማዊነትን በልባቸው አኖረ” (መክ 3:11)",
      modernReflectionEn: "Careers, money, and applause cannot heal existential emptiness; stop trying to squeeze eternal meaning out of temporary things—anchor your soul in God.",
      modernReflectionAm: "ሀብት፣ ዝናና ስኬት የነፍስህን ጥም አያረኩትም፤ በጊዜያዊ ነገሮች ውስጥ ዘላለማዊ ደስታን አትፈልግ፤ ልብህን በፈጣሪህ ላይ አሳርፍ።"
    }
  },

  // 22. SONG OF SONGS (መኃልየ መኃልይ ዘሰሎሞን)
  22: {
    id: 'canon-book-22',
    sceneId: 'book-22',
    bookNr: 22,
    chapterStart: 1,
    titleEn: "Song of Songs: Covenant Love, Pure Passion & Holy Union",
    titleAm: "መኃልየ መኃልይ፡ የቃል ኪዳን ፍቅር፣ ንጹሕ መውደድና የተቀደሰ አንድነት",
    eraEn: "The Solomonic Poetry of Royal Love",
    eraAm: "የሰሎሞን የንጉሣዊ ፍቅር ቅኔ ዘመን",
    geopolitical: {
      titleEn: "The Vineyards of En-Gedi, Hills of Bether & Jerusalem Palaces",
      titleAm: "የዓይንጋዲ የወይን ቦታዎች፣ የቤቴር ተራሮችና የኢየሩሳሌም አዳራሾች",
      empireEn: "Ancient Israelite Royal Pastoral Poetry",
      empireAm: "የእስራኤል የተባበረ መንግሥት የሰላም ዘመን",
      timeframe: "c. 960 BC",
      eyewitnessPOVEn: "A sun-darkened rustic maiden working in the vineyards of the north and a king delighting in her beauty; intoxicating scents of pomegranates, spikenard, and myrrh in spring.",
      eyewitnessPOVAm: "በፀሐይ የጠቆረች የገጠር ወጣት በወይን እርሻ ውስጥ ስትሠራና ንጉሡ በእውነተኛ ውበቷ ሲደሰት፤ በጸደይ ወቅት የሚሸተው የሮማን፣ የናርዶስና የከርቤ መዓዛ።",
      historicalDynamicsEn: "A celebration of monogamous, uncoerced sexual love and marital covenant set against the imperial polygamous court harem.",
      historicalDynamicsAm: "በወቅቱ በነገሠው የብዙ ሚስቶች ዓለማዊ ባሕል ውስጥ፣ በአንድ ወንድና በአንዲት ሴት መካከል ያለውን ንጹሕና ቅዱስ የፍቅር ቃል ኪዳን ያከበረ መጽሐፍ።",
      groundRealitiesEn: "The voice of the turtledove in the land, blossoming apple trees, silver lattices, lovers holding hands in the vineyard.",
      groundRealitiesAm: "የዋኖስ ድምፅ በምድሪቱ ሲሰማ፣ የለመለሙ ዛፎች፣ እና በፍቅር የተሳሰሩ ጥንዶች በወይን ቦታው ሲራመዱ።"
    },
    theological: {
      titleEn: "The Sanctity of Marital Love & Divine Covenant Affection",
      titleAm: "የጋብቻ ፍቅር ቅድስናና የእግዚአብሔር ለሕዝቡ ያለው ጽኑ ፍቅር",
      covenantStageEn: "Marital Covenant as a Mirror of Divine Devotion",
      covenantStageAm: "የባልና ሚስት ፍቅር የእግዚአብሔርና የሕዝቡ ፍቅር ምሳሌ ሲሆን",
      redemptiveThemeEn: "God created human intimacy to be pure, joyful, and exclusive; love is as strong as death, a flash of Yahweh’s own passionate flame (8:6).",
      redemptiveThemeAm: "እግዚአብሔር እውነተኛ ፍቅርን የተቀደሰና ደስታ የተሞላበት አድርጎ ፈጠረው፤ “ፍቅር እንደ ሞት የበረታች ናትና፤ ነበልባሏም የእግዚአብሔር ነበልባል ነው” (8:6)።",
      christForeshadowingEn: "Christ as the heavenly Bridegroom who cherishes, cleanses, and rejoices over his Bride, the Church (Ephesians 5:25–32; Revelation 19:7).",
      christForeshadowingAm: "ሙሽራይቱን ቤተክርስቲያንን የወደዳትና ራሱን ስለ እርስዋ አሳልፎ የሰጠው የሰማያዊው ሙሽራ የክርስቶስ ፍቅር ጥላ (ኤፌ 5:25-32፤ ራእይ 19:7)።",
      metaNarrativeAnchorEn: "The central affirmation: \"I am my beloved’s and my beloved is mine\" (Song 6:3).",
      metaNarrativeAnchorAm: "የፍቅር መተማመን ማረጋገጫ፡ “እኔ የውዴ ነኝ፥ ውዴም የእኔ ነው” (መኃ 6:3)።"
    },
    linguistic: [
      {
        original: "שַׁלְהֶבֶתְיָה",
        translit: "Shalhevetyah",
        language: "Hebrew",
        amharicTerm: "የእግዚአብሔር ነበልባል",
        literalMeaningEn: "The flame of Yahweh / Most vehement holy flame",
        literalMeaningAm: "የእግዚአብሔር ጽኑ ነበልባል",
        theologicalDepthEn: "Love is not a human invention; it is an unquenchable divine spark originating in God Himself.",
        theologicalDepthAm: "ፍቅር የሰው ልጅ የፈጠረው ስሜት ሳይሆን፣ ከእግዚአብሔር ልብ የመነጨ የማይጠፋ ቅዱስ እሳት ነው።",
        canonicalUsageEn: "Song of Songs 8:6.",
        canonicalUsageAm: "መኃልየ መኃልይ 8:6።"
      }
    ],
    psychological: {
      characterEn: "The Shulammite Maiden & The Beloved",
      characterAm: "ሱላማጢሷና ውዷ",
      emotionalStateEn: "Ecstatic desire, secure intimacy, protective jealousy, breathless delight",
      emotionalStateAm: "የፍቅር ናፍቆት፣ ሙሉ መተማመን፣ ንጹሕ ቅናት፣ ያልተከፋፈለ ደስታ",
      innerConflictEn: "Resisting the artificial luxuries of the palace court daughters to remain fiercely faithful to her true shepherd beloved.",
      innerConflictAm: "በቤተ መንግሥት ያሉ የኢየሩሳሌም ቆነጃጅት የሚያሳዩትን ዓለማዊ ድምቀት ትታ፣ ለእውነተኛ እረኛ ፍቅረኛዋ ታማኝ ሆና መጽናቷ።",
      existentialQuestionEn: "\"Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death!\" (Song 8:6)",
      existentialQuestionAm: "“እንደ ማኅተም በልብህ፥ እንደ ማኅተም በክንድህ አኑረኝ፤ ፍቅር እንደ ሞት የበረታች ናትና!” (መኃ 8:6)",
      modernReflectionEn: "In a culture that cheapens sexuality into casual entertainment, holy covenant commitment elevates love into enduring, sacred beauty.",
      modernReflectionAm: "ዓለም ፍቅርን ወደ ሥጋዊ መደለያ በጣለበት ዘመን፤ በቃል ኪዳን ውስጥ ያለ እውነተኛ ፍቅር የተቀደሰ፣ የጸና እና ለዘላለም ውብ እንደ ሆነ አስታውስ።"
    }
  },

  // 23. ISAIAH (ትንቢተ ኢሳይያስ)
  23: {
    id: 'canon-book-23',
    sceneId: 'book-23',
    bookNr: 23,
    chapterStart: 1,
    titleEn: "Isaiah: The Holy One of Israel & The Suffering Servant",
    titleAm: "ትንቢተ ኢሳይያስ፡ የእስራኤል ቅዱስና መከራ ተቀባዩ አገልጋይ",
    eraEn: "The Assyrian Crisis & Prophetic Vista",
    eraAm: "የአሦር ወረራና የተስፋው መሲሕ ትንቢት ዘመን",
    geopolitical: {
      titleEn: "Jerusalem Besieged by Sennacherib to Babylon & Beyond",
      titleAm: "ኢየሩሳሌም በአሦር ሠራዊት ስትከበብና ወደፊት ያለው የምርኮ ራእይ",
      empireEn: "Neo-Assyrian Empire (Tiglath-Pileser III, Sennacherib) & Rising Babylon",
      empireAm: "የአሦርና የባቢሎን ግዙፍ ኢምፓየሮች",
      timeframe: "c. 740 – 680 BC",
      eyewitnessPOVEn: "Isaiah seeing Yahweh high and lifted up in the smoke-filled temple; King Ahaz trembling like forest trees in the wind; 185,000 Assyrian troops struck dead outside Jerusalem’s walls in a single night.",
      eyewitnessPOVAm: "ኢሳይያስ የእግዚአብሔርን ክብር በቤተ መቅደሱ በዙፋን ላይ ተቀምጦ ሲያይ፤ የአሦር ሠራዊት ኢየሩሳሌምን በከበበ ጊዜ በአንድ ሌሊት 185,000 ወታደሮች በእግዚአብሔር መልአክ ተመተው ሲወድቁ።",
      historicalDynamicsEn: "Syro-Ephraimite war against Judah; Judah tempted to make military alliances with Egypt rather than trusting Yahweh; prophecy of Cyrus naming him 150 years before his birth.",
      historicalDynamicsAm: "ይሁዳ በእግዚአብሔር ከመታመን ይልቅ ከግብፅ ጋር የጦር ስምምነት ለማድረግ ስትሞክር፤ እግዚአብሔር ግን ከ150 ዓመታት በፊት የፋርሱን ንጉሥ ቂሮስን በስም ጠርቶ የተናገረበት ትንቢት።",
      groundRealitiesEn: "A burning coal touching the prophet’s lips from the altar, shoes taken off walking barefoot in mourning, scrolls written with large letters.",
      groundRealitiesAm: "ከመሠዊያው በተወሰደ ፍም የነቢዩ ከንፈር ሲነጻ፣ ነቢዩ ጫማውን አውልቆ በባዶ እግሩ ሲመላለስ፣ እና ትንቢቱ በታላቅ የብራና ጥቅልል ሲጻፍ።"
    },
    theological: {
      titleEn: "Holiness, Judgment, and Cosmic New Creation",
      titleAm: "ቅድስና፣ ፍርድና አዲሱ የሰማይና የምድር ፍጥረት",
      covenantStageEn: "Davidic Messianic Fulfillment & The Everlasting Covenant",
      covenantStageAm: "የዳዊት መሲሐዊ ተስፋዎች ፍጻሜና የዘላለም ኪዳን",
      redemptiveThemeEn: "God will not abandon his rebellious people; through the substitutionary death of his Servant, many will be counted righteous, culminating in a new heavens and new earth.",
      redemptiveThemeAm: "እግዚአብሔር ሕዝቡን አይጥልም፤ በአገልጋዩ መከራና ሞት በኩል ብዙዎች ይጸድቃሉ፤ ፍጻሜውም አዲስ ሰማይና አዲስ ምድር ይሆናል።",
      christForeshadowingEn: "The Virgin Birth of Immanuel (Isa 7:14); the Prince of Peace on David’s throne (9:6); the Suffering Servant pierced for our transgressions (Isa 53).",
      christForeshadowingAm: "ድንግል ትፀንሳለች ስሙንም አማኑኤል ትለዋለች (ኢሳ 7:14)፤ የሰላም አለቃ (9:6)፤ ስለ መተላለፋችን የቆሰለውና ስለ በደላችን የደቀቀው አገልጋይ (ኢሳ 53)።",
      metaNarrativeAnchorEn: "Isaiah is known as the \"Fifth Gospel\" because of its astonishingly detailed vision of Christ’s atonement and kingdom.",
      metaNarrativeAnchorAm: "ትንቢተ ኢሳይያስ የክርስቶስን መከራ፣ ሞትና ትንሣኤ አስቀድሞ በግልጽ በመተንበዩ “አምስተኛው ወንጌል” ተብሎ ይጠራል።"
    },
    linguistic: [
      {
        original: "עִמָּנוּאֵל",
        translit: "Immanuel",
        language: "Hebrew",
        amharicTerm: "አማኑኤል",
        literalMeaningEn: "God with us",
        literalMeaningAm: "እግዚአብሔር ከእኛ ጋር",
        theologicalDepthEn: "God does not observe human suffering from a detached distance; he enters human flesh and stands with his people.",
        theologicalDepthAm: "እግዚአብሔር ከሩቅ ሆኖ የሚያይ ሳይሆን፣ በሰው ልጅ መካከል ሰው ሆኖ የሚኖር አዳኝ መሆኑን ያመለክታል።",
        canonicalUsageEn: "Isaiah 7:14, 8:8; Matthew 1:23.",
        canonicalUsageAm: "ኢሳይያስ 7:14፤ ማቴዎስ 1:23።"
      },
      {
        original: "קָדוֹשׁ יִשְׂרָאֵל",
        translit: "Kadosh Yisrael",
        language: "Hebrew",
        amharicTerm: "የእስራኤል ቅዱስ",
        literalMeaningEn: "The Holy One of Israel",
        literalMeaningAm: "የእስራኤል ቅዱስ",
        theologicalDepthEn: "Used 29 times in Isaiah; combines transcendent moral purity with tender covenant intimacy.",
        theologicalDepthAm: "በኢሳይያስ ውስጥ 29 ጊዜ ተጠቅሷል፤ የእግዚአብሔርን ፍጹም ቅድስናና ለሕዝቡ ያለውን ጥልቅ ፍቅር ያሳያል።",
        canonicalUsageEn: "Isaiah 1:4, 6:3, 41:14.",
        canonicalUsageAm: "ኢሳይያስ 1:4፤ 41:14።"
      }
    ],
    psychological: {
      characterEn: "Isaiah & King Hezekiah",
      characterAm: "ኢሳይያስና ንጉሥ ሕዝቅያስ",
      emotionalStateEn: "Unworthy trembling before holiness (\"Woe is me!\"), fearless prophetic defiance of kings, soaring hope",
      emotionalStateAm: "በእግዚአብሔር ቅድስና ፊት ራስን ማዋረድ (“ወዮልኝ ጠፍቻለሁ”)፣ በነገሥታት ፊት ያለ ፍርሃት መቆም፣ ታላቅ የተስፋ ደስታ",
      innerConflictEn: "Isaiah answering the call: \"Here am I! Send me\" while being told the people’s hearts will remain fat and deaf until the cities lie desolate.",
      innerConflictAm: "ኢሳይያስ “እነሆኝ እኔን ላከኝ” ብሎ ጥሪውን ሲቀበል፤ ሕዝቡ ግን ከተሞቻቸው እስኪፈርሱ ድረስ ቃሉን እንደማይሰሙ የተነገረው መሪር እውነት።",
      existentialQuestionEn: "\"He was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace\" (Isa 53:5)",
      existentialQuestionAm: "“እርሱ ግን ስለ መተላለፋችን ቈሰለ፥ ስለ በደላችንም ደቀቀ፤ የደኅንነታችንም ተግሣጽ በእርሱ ላይ ነበረ፥ በእርሱም ቍስል እኛ ተፈወስን” (ኢሳ 53:5)",
      modernReflectionEn: "When the world shakes around you, earthly power is an illusion; the Holy God has already borne your brokenness on the Cross and holds the future in His hands.",
      modernReflectionAm: "ዓለም በዙሪያህ ስትናወጥ በሰው ኃይል አትመካ፤ ቅዱሱ አምላክ መከራህን ሁሉ በመስቀል ላይ ተሸክሞልሃል፤ የወደፊት ዕጣ ፈንታህ በእጁ ውስጥ ነው።"
    }
  },

  // 24. JEREMIAH (ትንቢተ ኤርምያስ)
  24: {
    id: 'canon-book-24',
    sceneId: 'book-24',
    bookNr: 24,
    chapterStart: 1,
    titleEn: "Jeremiah: The Weeping Prophet & The Promise of the New Covenant",
    titleAm: "ትንቢተ ኤርምያስ፡ አልቃሹ ነቢይና የአዲሱ ቃል ኪዳን ተስፋ",
    eraEn: "The Final Decades of Judah & The Fall of Jerusalem",
    eraAm: "የይሁዳ የመጨረሻ ዘመናትና የኢየሩሳሌም መውደቅ",
    geopolitical: {
      titleEn: "Anathoth to the Burning Gates of Jerusalem & Egypt Exile",
      titleAm: "ከዓናቶት እስከ ተቃጠሉት የኢየሩሳሌም በሮችና የግብፅ ስደት",
      empireEn: "Neo-Babylonian Empire (Nebuchadnezzar II)",
      empireAm: "የባቢሎን ግዙፍ ኢምፓየር (ናቡከደነፆር)",
      timeframe: "c. 627 – 580 BC",
      eyewitnessPOVEn: "A solitary young priest beaten, put in stocks, thrown into a muddy cistern to starve, screaming warnings that Babylon will destroy the temple while false prophets promise peace.",
      eyewitnessPOVAm: "ሐሰተኞች ነቢያት “ሰላም ሰላም” እያሉ ሕዝቡን ሲያታልሉ፤ ኤርምያስ ግን እውነተኛውን ፍርድ በመናገሩ ተደብድቦ በጭቃ ጉድጓድ ውስጥ ሲጣልና በዕንባ ሲጮኽ።",
      historicalDynamicsEn: "Babylonian siege engines surrounding Jerusalem for 18 months; cannibalism inside the walls; pro-Egyptian political factions assassinating Babylonian-appointed governor Gedaliah.",
      historicalDynamicsAm: "ባቢሎናውያን ኢየሩሳሌምን ለ18 ወራት ከበው ሲያስጨንቋት፤ በመጨረሻም ከተማይቱ ተሰብራ ቤተ መቅደሱ ሲቃጠል የታየበት አሰቃቂ የታሪክ ምዕራፍ።",
      groundRealitiesEn: "Jeremiah buying a field in Anathoth with silver while under house arrest to certify that houses and fields will again be bought in the land.",
      groundRealitiesAm: "ኤርምያስ በወህኒ ታስሮ ሳለ ወደፊት ሕዝቡ እንደሚመለስ ለማረጋገጥ በዓናቶት ያለውን እርሻ በብር መግዛቱ።"
    },
    theological: {
      titleEn: "Heart Religion and the Promise of the New Covenant",
      titleAm: "የውስጥ የልብ እምነትና አዲሱ ቃል ኪዳን",
      covenantStageEn: "Inauguration of the New Covenant Promise (Jeremiah 31)",
      covenantStageAm: "የአዲሱ ቃል ኪዳን ጽኑ ተስፋ (ኤርምያስ 31)",
      redemptiveThemeEn: "External religion on stone tablets failed because the human heart is deceitful; God promises to write his law directly onto their hearts and remember their sins no more.",
      redemptiveThemeAm: "የሰው ልብ አታላይና ፈዋሽ የሌለው በመሆኑ በድንጋይ ላይ የተጻፈው ሕግ አልዳናቸውም፤ ስለዚህ እግዚአብሔር ሕጉን በልባቸው የሚጽፍበትን አዲስ ኪዳን አዘጋጀ።",
      christForeshadowingEn: "The Righteous Branch of David (Jer 23:5–6); Jesus at the Last Supper holding the cup: \"This cup is the new covenant in my blood\" (Luke 22:20 citing Jer 31:31).",
      christForeshadowingAm: "ለዳዊት የሚነሣው የጽድቅ ቅርንጫፍ (ኤር 23:5)፤ ጌታችን በመጨረሻው ራት “ይህ ጽዋ ስለ እናንተ በሚፈሰው በደሜ የሚሆን አዲስ ኪዳን ነው” በማለት የኤርምያስን ትንቢት ፈጸመው።",
      metaNarrativeAnchorEn: "Jeremiah 31:31–34 is the only explicit Old Testament passage naming the \"New Covenant\" (Berith Chadashah).",
      metaNarrativeAnchorAm: "ኤርምያስ 31:31-34 በመላው ብሉይ ኪዳን ውስጥ “አዲስ ኪዳን” የሚለውን ቃል በግልጽ የጠቀሰ ብቸኛው ምንባብ ነው።"
    },
    linguistic: [
      {
        original: "בְּרִית חֲדָשָׁה",
        translit: "Berith Chadashah",
        language: "Hebrew",
        amharicTerm: "አዲስ ኪዳን",
        literalMeaningEn: "New Covenant",
        literalMeaningAm: "አዲስ ቃል ኪዳን",
        theologicalDepthEn: "An unbreakable covenant grounded not in human obedience, but in divine regeneration and absolute remission of sins.",
        theologicalDepthAm: "በሰው ድካም ላይ ሳይሆን፣ እግዚአብሔር በልብ በሚሠራው አዲስ ሕይወትና በኃጢአት ይቅርታ ላይ የተመሠረተ የማይፈርስ ኪዳን።",
        canonicalUsageEn: "Jeremiah 31:31; Hebrews 8:8–12.",
        canonicalUsageAm: "ኤርምያስ 31:31፤ ዕብራውያን 8:8-12።"
      }
    ],
    psychological: {
      characterEn: "Jeremiah & Baruch the Scribe",
      characterAm: "ኤርምያስና ጸሐፊው ባሮክ",
      emotionalStateEn: "Tormenting loneliness, burning fire shut up in the bones, grief-stricken compassion",
      emotionalStateAm: "የብቸኝነት ሥቃይ፣ በአጥንት ውስጥ እንደ እሳት የነደደ ቃል፣ ለሕዝቡ የፈሰሰ የፍቅር ዕንባ",
      innerConflictEn: "Cursing the day he was born because of constant rejection, yet unable to stay silent: \"His word was in my heart as a burning fire!\"",
      innerConflictAm: "በመከራው ብዛት የተወለደበትን ቀን እስኪረግም ቢደርስም፤ “ቃሉ በአጥንቶቼ ውስጥ እንደ ተዘጋ እንደ ነደደ እሳት ሆነብኝ፥ ደከምሁ መታገሥም አልቻልሁም” በማለት መመስከሩ።",
      existentialQuestionEn: "\"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope!\" (Jer 29:11)",
      existentialQuestionAm: "“ለእናንተ የማስባትን አሳብ እኔ አውቃለሁ፤ ፍጻሜና ተስፋ እሰጣችሁ ዘንድ የሰላም አሳብ ነው እንጂ የክፉ አይደለም” (ኤር 29:11)",
      modernReflectionEn: "Popular culture loves comforting lies, but true love speaks the truth even when it brings tears; God’s good plans for you remain secure even in the middle of exile.",
      modernReflectionAm: "ሰው ሁሉ ውሸትን በሚወድበት ጊዜ እውነትን መናገር ዋጋ ያስከፍላል፤ ነገር ግን በየትኛውም ፈተና ውስጥ ብትሆን እግዚአብሔር ለአንተ ያለው የተስፋ አሳብ አይለወጥም።"
    }
  },

  // 25. LAMENTATIONS (ሰቆቃው ኤርምያስ)
  25: {
    id: 'canon-book-25',
    sceneId: 'book-25',
    bookNr: 25,
    chapterStart: 1,
    titleEn: "Lamentations: The Funeral of Zion & The Morning Mercies of God",
    titleAm: "ሰቆቃወ ኤርምያስ፡ የጽዮን ሙሾና የማለዳው የእግዚአብሔር ምሕረት",
    eraEn: "The Immediate Aftermath of 586 BC",
    eraAm: "ኢየሩሳሌም ከወደቀች በኋላ የተጻፈ የልቅሶ መጽሐፍ",
    geopolitical: {
      titleEn: "The Smoldering Ashes of Temple Mount & Desolate Streets",
      titleAm: "የተቃጠለው የቤተ መቅደስ ተራራና ባዶ የቀሩት የኢየሩሳሌም ጎዳናዎች",
      empireEn: "Babylonian Occupation of Ruined Judean Province",
      empireAm: "የባቢሎን ሠራዊት ይሁዳን ያወደመበት ዘመን",
      timeframe: "c. 586 BC",
      eyewitnessPOVEn: "A solitary mourner sitting among the charred ruins of Solomon’s temple; starving mothers with parched tongues; the streets that once echoed with festival songs now covered in silence and bones.",
      eyewitnessPOVAm: "በኢየሩሳሌም ፍርስራሽ ላይ የተቀመጠው ነቢይ ያፈሰሰው መሪር ዕንባ፤ ሕፃናት በውሃ ጥም ሲዝሉና የበዓል ዝማሬ ይሰማባቸው የነበሩት አደባባዮች ባዶ ሆነው ሲታዩ።",
      historicalDynamicsEn: "Five acrostic Hebrew dirges structured symmetrically: Chapters 1, 2, 4, and 5 have 22 verses (Hebrew alphabet), while Chapter 3 at the dead center has 66 verses.",
      historicalDynamicsAm: "በዕብራይስጥ ፊደላት ቅደም ተከተል የተዘጋጁ አምስት የሙሾ ምዕራፎች፤ በማዕከሉ (በምዕራፍ 3) ላይ ግን የታላቅ ተስፋና የምሕረት ቃል ተቀምጧል።",
      groundRealitiesEn: "Gates sunken into the ground, precious temple stones scattered at every street corner, dust poured over heads.",
      groundRealitiesAm: "የከተማይቱ በሮች ወደ መሬት ሲሰምጡ፣ የተቀደሱ የመቅደሱ ድንጋዮች በየመንገዱ ማዕዘን ሲበተኑ፣ እና አረጋውያን በአመድ ላይ ሲያለቅሱ።"
    },
    theological: {
      titleEn: "Righteous Judgment Acknowledged, Boundless Compassion Claimed",
      titleAm: "የእግዚአብሔር ጽድቅ ሲረጋገጥና ምሕረቱ በጠዋት ሲታደስ",
      covenantStageEn: "Sinai Curses Endured with Unshakable Faith in Hesed",
      covenantStageAm: "በከባድ ፍርድ ውስጥም በእግዚአብሔር ጽኑ ፍቅር (ሄሴድ) መታመን",
      redemptiveThemeEn: "God is utterly righteous in punishing sin; yet in the absolute dead center of the grief, the prophet anchors his soul in God’s mercies which never come to an end.",
      redemptiveThemeAm: "እግዚአብሔር በኃጢአት ላይ በመፍረዱ ጻድቅ ነው፤ ሆኖም በልቅሶው መካከል ነቢዩ “ያልጠፋነው ከእግዚአብሔር ምሕረት የተነሣ ነው፤ ርኅራኄው አያልቅምና ማለዳ ማለዳ አዲስ ነው” በማለት ተስፋውን ያጸናል።",
      christForeshadowingEn: "Christ is the Man of Sorrows who wept over Jerusalem (Luke 19:41) and bore the ultimate desolate judgment outside the city gate on Golgotha.",
      christForeshadowingAm: "ስለ ኢየሩሳሌም ያለቀሰው (ሉቃ 19:41) እና በመስቀል ላይ የፍርድን ጽዋ ብቻውን የጠጣው የሕማማት ሰው ክርስቶስ ጥላ።",
      metaNarrativeAnchorEn: "Lamentations gives biblical permission to express unfiltered grief and sorrow before God.",
      metaNarrativeAnchorAm: "ሰቆቃወ ኤርምያስ አማኞች በከባድ ኀዘንና መከራ ውስጥ ሲሆኑ ስሜታቸውን በዕንባ በእግዚአብሔር ፊት እንዲያፈሱ ያስተምራል።"
    },
    linguistic: [
      {
        original: "חַסְדֵי יְהוָה",
        translit: "Chasdei Yahweh",
        language: "Hebrew",
        amharicTerm: "የእግዚአብሔር ምሕረት",
        literalMeaningEn: "The steadfast covenant mercies of the Lord",
        literalMeaningAm: "የእግዚአብሔር ጽኑ ምሕረት (ርኅራኄ)",
        theologicalDepthEn: "Plural form: the manifold, overflowing compassions of Yahweh that survive the destruction of nations.",
        theologicalDepthAm: "አገሮችና ከተሞች ቢጠፉም እንኳ ፈጽሞ የማያልቀውና በየማለዳው የሚታደሰው የእግዚአብሔር ታላቅ ፍቅር።",
        canonicalUsageEn: "Lamentations 3:22–23.",
        canonicalUsageAm: "ሰቆቃወ ኤርምያስ 3:22-23።"
      }
    ],
    psychological: {
      characterEn: "The Daughter of Zion & The Mourning Chronicler",
      characterAm: "የጽዮን ድንግል ልጅና አልቃሹ ነቢይ",
      emotionalStateEn: "Numbing trauma, crushed ribs, piercing grief turning into resolute dawn trust",
      emotionalStateAm: "የልብ ስብራት፣ የኀዘን ማዕበል፣ በማለዳው በሚታደሰው ተስፋ ላይ ማረፍ",
      innerConflictEn: "Sitting alone in dust weeping until eyes fail, yet waiting in silence for the salvation of Yahweh.",
      innerConflictAm: "ዓይኖቹ በዕንባ እስኪፈስሱ ድረስ እያለቀሰ ሳለ፣ በእግዚአብሔር ማዳን ላይ በዝምታ ተስፋ ማድረግ።",
      existentialQuestionEn: "\"The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness!\" (Lam 3:22–23)",
      existentialQuestionAm: "“ያልጠፋነው ከእግዚአብሔር ምሕረት የተነሣ ነው፤ ርኅራኄው አያልቅምና። ማለዳ ማለዳ አዲስ ነው፤ ታማኝነትህ ታላቅ ነው!” (ሰቆ 3:22–23)",
      modernReflectionEn: "Grief is not the opposite of faith; bringing your tears honestly to God is the highest form of worship, because you know His mercy will greet you in the morning.",
      modernReflectionAm: "ማልቀስ የእምነት ማነስ አይደለም፤ በዕንባህ ወደ እግዚአብሔር መቅረብ ትልቅ እምነት ነው፤ ማታ ለቅሶ ቢኖር እንኳ ጠዋት ግን ደስታ ይመጣል።"
    }
  },

  // 26. EZEKIEL (ትንቢተ ንዝቅኤል)
  26: {
    id: 'canon-book-26',
    sceneId: 'book-26',
    bookNr: 26,
    chapterStart: 1,
    titleEn: "Ezekiel: The Chariot-Throne, Valley of Dry Bones & The River of Life",
    titleAm: "ትንቢተ ሕዝቅኤል፡ የኪሩቤል ዙፋን፣ የደረቁ አጥንቶች ሸለቆና የሕይወት ወንዝ",
    eraEn: "The Babylonian Exile",
    eraAm: "የባቢሎን ምርኮ ዘመን",
    geopolitical: {
      titleEn: "The Chebar Canal in Tel-Abib (Babylon) to Heavenly Zion",
      titleAm: "በባቢሎን በኮቦር ወንዝ አጠገብ እስከ ሰማያዊቷ ጽዮን",
      empireEn: "Neo-Babylonian Superpower & The Enslaved Diaspora",
      empireAm: "የባቢሎን ኢምፓየርና የተሰደደው ሕዝብ",
      timeframe: "c. 593 – 571 BC",
      eyewitnessPOVEn: "A 30-year-old exiled priest seeing the stormy chariot of Yahweh’s glory wheels ablaze with eyes landing by a pagan irrigation ditch; acting out the siege of Jerusalem on a clay brick.",
      eyewitnessPOVAm: "በባቢሎን በምርኮ የነበረው ካህኑ ሕዝቅኤል በኮቦር ወንዝ አጠገብ የእግዚአብሔርን ታላቅ ክብር በኪሩቤል ሠረገላ ላይ ተቀምጦ ሲመለከት፤ በደረቁ አጥንቶች ሸለቆ ውስጥ ቆሞ ትንቢት ሲናገር።",
      historicalDynamicsEn: "Exiles falsely convinced that Jerusalem would never fall because the temple stood; Ezekiel’s devastating vision of the Shekinah glory packing up and departing the temple to judge the city.",
      historicalDynamicsAm: "ተመላሾቹ “የእግዚአብሔር መቅደስ አይፈርስም” እያሉ ሲያታልሉ፤ የእግዚአብሔር ክብር ከመቅደሱ ወጥቶ ሲሄድና ከተማይቱ ለፍርድ ስትሰጥ ያየው አስደንጋጭ ራእይ።",
      groundRealitiesEn: "Lying on his left side 390 days eating bread baked on dung; mute until Jerusalem’s fall; watching a valley of bleached human skeletons shake, knit, and breathe.",
      groundRealitiesAm: "ለ390 ቀናት በአንድ ጎኑ ተኝቶ መከራን መቀበል፤ የኢየሩሳሌም ውድቀት ወሬ እስኪመጣ ድረስ ዲዳ ሆኖ መቆየት፤ እና አጥንቶች በትንቢት ቃል ተያይዘው ሕያው ሠራዊት ሲሆኑ ማየት።"
    },
    theological: {
      titleEn: "The Transcendent Glory of God and the Heart of Flesh",
      titleAm: "የእግዚአብሔር ክብርና የድንጋዩ ልብ ወደ ሥጋ ልብ ሲለወጥ",
      covenantStageEn: "The Everlasting Covenant of Peace & Regeneration",
      covenantStageAm: "የዘላለም የሰላም ቃል ኪዳንና የመንፈስ ቅዱስ አዲስ ሕይወት",
      redemptiveThemeEn: "God will vindicate his holy name before the nations: \"I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh\" (Ezek 36:26).",
      redemptiveThemeAm: "እግዚአብሔር ስለ ቅዱስ ስሙ ሲል ሕዝቡን ይሰበስባል፤ “አዲስ ልብ እሰጣችኋለሁ አዲስም መንፈስ በውስጣችሁ አኖራለሁ፤ የድንጋዩንም ልብ አወጣለሁ የሥጋንም ልብ እሰጣችኋለሁ” (ሕዝ 36:26)።",
      christForeshadowingEn: "The Good Shepherd who seeks his lost sheep (Ezek 34 fulfilled in John 10); the River of Life flowing from the Temple healing nations (Ezek 47 / Rev 22).",
      christForeshadowingAm: "የጠፉትን በጎቹን የሚፈልገው እውነተኛው እረኛ (ሕዝ 34 / ዮሐ 10)፤ ከመቅደሱ መነሻ ወጥቶ ዓለምን የሚፈውሰው የሕይወት ውኃ ወንዝ (ሕዝ 47 / ራእይ 22)።",
      metaNarrativeAnchorEn: "The vision of dry bones rising (Ezekiel 37) is the definitive promise of resurrection for dead Israel and dead humanity.",
      metaNarrativeAnchorAm: "የደረቁት አጥንቶች በትንቢት ቃል ተነስተው ሕያው ሠራዊት መሆናቸው፣ እግዚአብሔር ሙታንን ሁሉ በክርስቶስ ሕያው እንደሚያደርግ ያረጋገጠ ትንቢት ነው።"
    },
    linguistic: [
      {
        original: "רוּחַ",
        translit: "Ruach",
        language: "Hebrew",
        amharicTerm: "መንፈስ (እስትንፋስ / ነፋስ)",
        literalMeaningEn: "Spirit, wind, breath of life",
        literalMeaningAm: "መንፈስ / ሕያው እስትንፋስ",
        theologicalDepthEn: "The divine breath that animates dead skeletons into an exceeding great army.",
        theologicalDepthAm: "የደረቁትን አጥንቶች ሕያው አድርጎ ታላቅ ሠራዊት ያደረገው መለኮታዊ እስትንፋስ።",
        canonicalUsageEn: "Ezekiel 37:9–14; John 3:8.",
        canonicalUsageAm: "ሕዝቅኤል 37:9-14፤ ዮሐንስ 3:8።"
      },
      {
        original: "יְהוָה שָׁמָּה",
        translit: "Yahweh Shammah",
        language: "Hebrew",
        amharicTerm: "እግዚአብሔር በዚያ አለ",
        literalMeaningEn: "The Lord is there",
        literalMeaningAm: "እግዚአብሔር በዚያ አለ (የከተማይቱ ዘላለማዊ ስም)",
        theologicalDepthEn: "The climactic final phrase of Ezekiel: God’s presence permanently restored among his redeemed people.",
        theologicalDepthAm: "የትንቢተ ሕዝቅኤል የመጨረሻ ቃል፤ እግዚአብሔር ከሕዝቡ ጋር ለዘላለም እንደሚኖር ማረጋገጫ።",
        canonicalUsageEn: "Ezekiel 48:35.",
        canonicalUsageAm: "ሕዝቅኤል 48:35።"
      }
    ],
    psychological: {
      characterEn: "Ezekiel the Watchman on the Wall",
      characterAm: "ሕዝቅኤል ጠባቂው ነቢይ",
      emotionalStateEn: "Stunned trance before glory, heavy burden of prophetic sign-acts, electrifying resurrection hope",
      emotionalStateAm: "በክብሩ ፊት መደመም፣ የትንቢት ምልክቶችን በተግባር የማሳየት ከባድ ሸክም፣ የትንሣኤ ታላቅ ደስታ",
      innerConflictEn: "His beloved wife dies suddenly (\"the desire of your eyes\") and God commands him not to weep or mourn aloud, as a sign to the exiles.",
      innerConflictAm: "የዓይኑ ማረፊያ የነበረችው ሚስቱ በድንገት ስትሞት፣ ለሕዝቡ ምልክት እንዲሆን እንዳያለቅስ በእግዚአብሔር መታዘዙ።",
      existentialQuestionEn: "\"Son of man, can these bones live? And I answered, O Lord God, you know!\" (Ezek 37:3)",
      existentialQuestionAm: "“የሰው ልጅ ሆይ፥ እነዚህ አጥንቶች በሕይወት ይኖራሉን? እኔም፡ አቤቱ እግዚአብሔር ሆይ፥ አንተ ታውቃለህ አልሁ!” (ሕዝ 37:3)",
      modernReflectionEn: "No matter how dry, dead, or hopeless your situation looks, God’s Word spoken in the power of the Spirit can breathe life back into dead bones.",
      modernReflectionAm: "ሁኔታዎችህ የቱንም ያህል እንደ ደረቁ አጥንቶች ተስፋ ቢስ ቢመስሉ፣ የእግዚአብሔር ቃልና መንፈስ ወደ ውስጥህ ሲገባ ዳግም በሕይወት ትቆማለህ።"
    }
  },

  // 27. DANIEL (ትንቢተ ዳንኤል)
  27: {
    id: 'canon-book-27',
    sceneId: 'book-27',
    bookNr: 27,
    chapterStart: 1,
    titleEn: "Daniel: The Sovereignty of God Over World Empires & The Son of Man",
    titleAm: "ትንቢተ ዳንኤል፡ የእግዚአብሔር የበላይነት በዓለም መንግሥታት ላይና የሰው ልጅ",
    eraEn: "Babylonian and Persian Courts",
    eraAm: "የባቢሎንና የፋርስ ቤተ መንግሥት ዘመን",
    geopolitical: {
      titleEn: "Babylon, the Plain of Dura, and Susa on the Ulai Canal",
      titleAm: "ባቢሎን፣ የዱራ ሜዳና በፋርስ የኡላይ ወንዝ",
      empireEn: "Babylonian, Medo-Persian, Greek, and Roman Empires in Prophetic Vision",
      empireAm: "ባቢሎን፣ ሜዶን-ፋርስ፣ ግሪክና ሮም በትንቢት ሲገለጡ",
      timeframe: "c. 605 – 536 BC",
      eyewitnessPOVEn: "A golden colossus 90 feet high rising on Dura plain; three youths thrown into a white-hot furnace walking unharmed with a Fourth figure; Daniel praying towards Jerusalem tossed into a den of starving lions.",
      eyewitnessPOVAm: "በዱራ ሜዳ የቆመው የወርቅ ምስል፤ ሦስቱ ወጣቶች ወደ እቶን እሳት ተጥለው ከአራተኛው አካል ጋር በነፃነት ሲመላለሱ፤ ዳንኤል በአንበሶች ጉድጓድ ውስጥ ተጥሎ ሳለ አፉቸው ተዘግቶ ሲያድር።",
      historicalDynamicsEn: "Exiled teenage nobility trained in Chaldean science and astrology; handwriting on the banquet plaster wall the night Babylon fell to Persian troops diverts the Euphrates.",
      historicalDynamicsAm: "በንጉሥ ብልጣሶር ድግስ ላይ በእጅ ጣቶች የተጻፈው ሚስጥራዊ ጽሑፍ፤ በዚያችው ሌሊት ባቢሎን በፋርስ ሠራዊት እጅ መውደቋ።",
      groundRealitiesEn: "Pulse and water instead of royal meat and wine, Nebuchadnezzar eating grass like an ox under dew, Daniel fasting 21 days in sackcloth.",
      groundRealitiesAm: "የንጉሡን ማዕድ ትቶ ጥራጥሬ መመገብ፣ ንጉሥ ናቡከደነፆር አእምሮውን አጥቶ እንደ ከብት ሣር ሲበላ፣ እና ዳንኤል ለ21 ቀናት በጾም መቆየቱ።"
    },
    theological: {
      titleEn: "The Most High Rules the Kingdom of Men",
      titleAm: "ልዑሉ አምላክ በሰው መንግሥታት ላይ ሁሉ ይገዛል",
      covenantStageEn: "Everlasting Kingdom Granted to the Saints",
      covenantStageAm: "ለቅዱሳን የሚሰጠው የማይጠፋው ዘላለማዊ መንግሥት",
      redemptiveThemeEn: "Human empires rise like terrifying beasts out of the stormy sea, but they are all smashed to powder by the Stone cut without hands; God’s kingdom alone endures forever.",
      redemptiveThemeAm: "የዓለም መንግሥታት እንደ አስፈሪ አራዊት ቢነሱም፣ ያለ እጅ በተፈነቀለ ድንጋይ ተሰባብረው ይጠፋሉ፤ የእግዚአብሔር መንግሥት ግን ለዘላለም ጸንታ ትኖራለች።",
      christForeshadowingEn: "The \"Son of Man\" coming with the clouds of heaven before the Ancient of Days (Dan 7:13–14), which Jesus claimed as his supreme identity at his trial (Mark 14:62).",
      christForeshadowingAm: "በሰማይ ደመናት ወደ ዘመናት ባለጸጋ የቀረበው “የሰው ልጅ” (ዳን 7:13)፤ ጌታችን ኢየሱስ በሸንጎው ፊት ይህ እርሱ መሆኑን በግልጽ መሰከረ (ማር 14:62)።",
      metaNarrativeAnchorEn: "Daniel 12:2 contains the clearest Old Testament prophecy of the bodily resurrection of both the righteous and the wicked.",
      metaNarrativeAnchorAm: "ዳንኤል 12:2 በብሉይ ኪዳን ውስጥ የሙታን ትንሣኤ በግልጽ ከተገለጠባቸው ዋና ዋና ምንባቦች አንዱ ነው (“በመሬት ትቢያ ውስጥ ካንቀላፉቱ ብዙዎች ይነቃሉ”)።"
    },
    linguistic: [
      {
        original: "בַּר אֱנָשׁ",
        translit: "Bar Enash",
        language: "Aramaic",
        amharicTerm: "የሰው ልጅ",
        literalMeaningEn: "Son of Man / Human one invested with cosmic royalty",
        literalMeaningAm: "የሰው ልጅ (ዘላለማዊ ግዛት የተቀበለ)",
        theologicalDepthEn: "The divine-human figure who receives everlasting dominion, glory, and a kingdom that shall never be destroyed.",
        theologicalDepthAm: "አሕዛብና ነገዶች ሁሉ የሚያመልኩት፣ ክብሩና መንግሥቱ የማይሻር ዘላለማዊ ገዢ።",
        canonicalUsageEn: "Daniel 7:13–14; Matthew 26:64.",
        canonicalUsageAm: "ዳንኤል 7:13-14፤ ማቴዎስ 26:64።"
      }
    ],
    psychological: {
      characterEn: "Daniel & The Three Hebrew Youths (Shadrach, Meshach, Abednego)",
      characterAm: "ዳንኤልና ሦስቱ ወጣቶች (ሲድራቅ፣ ሚሳቅ፣ አብደናጎ)",
      emotionalStateEn: "Uncompromising integrity, calm defiance of totalitarian coercion, reverent visionary awe",
      emotionalStateAm: "የማይናወጥ እምነት፣ ለአምላክ ክብር ሲባል ሞትን አለመፍራት፣ በራእይ ፊት መደነቅ",
      innerConflictEn: "Facing death in the furnace: \"Our God is able to deliver us... but even if he does not, know, O king, we will not serve your gods!\"",
      innerConflictAm: "በእሳቱ ፊት የሰጡት ደፋር ምላሽ፡ “የምናመልከው አምላካችን ሊያድነን ይችላል... ባያድነንም እንኳ ለአማልክትህ እንደማንሰግድ እወቅ!”",
      existentialQuestionEn: "\"His dominion is an everlasting dominion, and his kingdom endures from generation to generation!\" (Dan 4:34)",
      existentialQuestionAm: "“ግዛቱ የዘላለም ግዛት ነው፥ መንግሥቱም ለልጅ ልጅ ነው!” (ዳን 4:34)",
      modernReflectionEn: "When pressured to bow to cultural idols, compromise is not an option; stand firm in faith, and the Fourth Man will walk with you through every fire.",
      modernReflectionAm: "ዓለም ለአስተሳሰቧ እንድትንበረከክ ስታስገድድህ እምነትህን አሳልፈህ አትስጥ፤ በእሳቱ መካከል እንኳ አራተኛው አካል ከአንተ ጋር አለ።"
    }
  },

  // 28. HOSEA (ትንቢተ ሆሴዕ)
  28: {
    id: 'canon-book-28',
    sceneId: 'book-28',
    bookNr: 28,
    chapterStart: 1,
    titleEn: "Hosea: Scandalous Hesed & The Faithful Husband of Rebellious Israel",
    titleAm: "ትንቢተ ሆሴዕ፡ አስደንጋጩ የእግዚአብሔር ፍቅርና ከዳተኛይቱ እስራኤል",
    eraEn: "Divided Monarchy Twilight of Northern Israel",
    eraAm: "የሰሜኑ መንግሥት የመጨረሻ ዘመን",
    geopolitical: {
      titleEn: "Samaria & Jezreel Valley Hilltop Altars",
      titleAm: "የሰማርያ ከተማና በኮረብታዎች ላይ ያሉ የጣዖት መሠዊያዎች",
      empireEn: "Assyrian Menace (Tiglath-Pileser III) & Decadent Jeroboam II",
      empireAm: "የአሦር ወረራ ሥጋትና የሁለተኛው ኢዮርብዓም የቅንጦት ዘመን",
      timeframe: "c. 755 – 715 BC",
      eyewitnessPOVEn: "A prophet commanded to marry a prostitute as a living billboard of God’s agonizing love; naming children \"No-Mercy\" and \"Not-My-People\"; buying back his wayward wife from the slave market for 15 shekels of silver.",
      eyewitnessPOVAm: "ነቢዩ አመንዝራ ሴት አግብቶ የእግዚአብሔርን መከራ የተሞላበት ፍቅር በተግባር ሲያሳይ፤ ሚስቱን ከባርነት ገበያ በብር ገዝቶ ወደ ቤቱ ሲመልሳት።",
      historicalDynamicsEn: "Northern Israel enriched by corrupt trade, worshipping Baal for agricultural fertility; assassinations of five kings in twenty years before Assyria destroys Samaria.",
      historicalDynamicsAm: "እስራኤል በሀብት ብትበለጽግም በዓልን በማምለኳና ነገሥታቷ እርስ በእርስ በመገዳደላቸው ምክንያት የአሦር ጥፋት የተቃረበበት ዘመን።",
      groundRealitiesEn: "Baking cakes on un-turned griddles, silver idols in groves, counting silver pieces and measures of barley.",
      groundRealitiesAm: "ያልተገለበጠ ቂጣ፣ በኮረብቶች ላይ የቆሙ የብር ጣዖታት፣ እና 15 ሰቅል ብርና የገብስ መስፈሪያ።"
    },
    theological: {
      titleEn: "The Broken Heart of Yahweh and Relentless Mercy",
      titleAm: "የእግዚአብሔር አባታዊና ባላዊ ፍቅር፤ የማይቆረጥ ርኅራኄ",
      covenantStageEn: "Marital Covenant Repudiated and Miraculously Restored",
      covenantStageAm: "የተሰበረው የጋብቻ ኪዳን በፍቅር ሲታደስ",
      redemptiveThemeEn: "\"How can I give you up, O Ephraim? My heart recoils within me; my compassion grows warm and tender\" (Hos 11:8). Grace pursues the unfaithful.",
      redemptiveThemeAm: "“ኤፍሬም ሆይ፥ እንዴት እጥልሃለሁ? ልቤ በውስጤ ተገለበጠ፥ ርኅራኄዬም ተቃጠለ” (ሆሴ 11:8)፤ የእግዚአብሔር ፍቅር ከዳተኛውን ሕዝብ ተከትሎ ይመልሳል።",
      christForeshadowingEn: "\"Out of Egypt I called my son\" (Hos 11:1 fulfilled in Matt 2:15); buying back the bride prefigures Christ purchasing the Church with his blood.",
      christForeshadowingAm: "“ልጄን ከግብፅ ጠራሁት” (ሆሴ 11:1 / ማቴ 2:15)፤ ሚስቱን በዋጋ ገዝቶ መመለሱ፣ ቤተክርስቲያንን በደሙ የዋጃትን የክርስቶስን ቤዛነት ያሳያል።",
      metaNarrativeAnchorEn: "Hosea transforms theology from dry legal contract to deep emotional covenant intimacy.",
      metaNarrativeAnchorAm: "ትንቢተ ሆሴዕ ከእግዚአብሔር ጋር ያለን ግንኙነት የሕግ ግዴታ ብቻ ሳይሆን፣ ጥልቅ የሆነ የፍቅር ትስስር መሆኑን ያስተምራል።"
    },
    linguistic: [
      {
        original: "חֶסֶד",
        translit: "Hesed",
        language: "Hebrew",
        amharicTerm: "ምሕረት (ጽኑ ፍቅር)",
        literalMeaningEn: "Covenant fidelity, loyal lovingkindness",
        literalMeaningAm: "ጽኑ ፍቅር / የማይለወጥ ታማኝነት",
        theologicalDepthEn: "God desires heart-loyalty over empty ritual sacrifice: \"For I desire steadfast love and not sacrifice\" (Hos 6:6).",
        theologicalDepthAm: "እግዚአብሔር ከመሥዋዕት ይልቅ እውነተኛ የልብ ፍቅርንና እርሱን ማወቅን እንደሚሻ ማወጅ።",
        canonicalUsageEn: "Hosea 6:6; Matthew 9:13, 12:7.",
        canonicalUsageAm: "ሆሴዕ 6:6፤ ማቴዎስ 9:13።"
      }
    ],
    psychological: {
      characterEn: "Hosea & Gomer",
      characterAm: "ሆሴዕና ጎሜር",
      emotionalStateEn: "Betrayal heartbreak, relentless protective love, tenderness overcoming wrath",
      emotionalStateAm: "የመከዳት ኀዘን፣ የማይጠፋ የፍቅር ጽናት፣ ቁጣን ያሸነፈ መለኮታዊ ርኅራኄ",
      innerConflictEn: "Loving someone who repeatedly sells herself to worthless lovers, taking her back without bitterness.",
      innerConflictAm: "በየጊዜው ከዳተኛ ወደሆነችው ሚስቱ ሄዶ ፍቅሩን በመግለጽ፣ ያለምንም በቀል በይቅርታ ወደ ቤቱ የመመለስ ታላቅ ተጋድሎ።",
      existentialQuestionEn: "\"Come, let us return to the Lord; for he has torn us, that he may heal us; he has struck us down, and he will bind us up!\" (Hos 6:1)",
      existentialQuestionAm: "“ኑ፥ ወደ እግዚአብሔር እንመለስ፤ እርሱ ሰብሮናልና፥ እርሱም ይፈውሰናል፤ እርሱ መትቶናልና፥ እርሱም ይጠግነናል!” (ሆሴ 6:1)",
      modernReflectionEn: "When you wander away and chase cheap worldly substitutes, God does not abandon you in disgust; His love pursues you until you return home.",
      modernReflectionAm: "ከእግዚአብሔር ርቀህ በዓለም ከንቱነት ስትባክን እንኳ፣ እርሱ አይጠላህም፤ ዛሬም በጽኑ ፍቅሩ ወደ ቤቱ ሊመልስህ ይጠራሃል።"
    }
  },

  // 29. JOEL (ትንቢተ ኢዮኤል)
  29: {
    id: 'canon-book-29',
    sceneId: 'book-29',
    bookNr: 29,
    chapterStart: 1,
    titleEn: "Joel: The Locust Plague, The Day of the Lord & The Outpouring of the Spirit",
    titleAm: "ትንቢተ ኢዮኤል፡ የአንበጣ መቅሠፍት፣ የእግዚአብሔር ቀንና የመንፈስ ቅዱስ መፍሰስ",
    eraEn: "Judah Pre-Exilic / Post-Exilic Crisis",
    eraAm: "የይሁዳ የፍርድና የተሃድሶ ዘመን",
    geopolitical: {
      titleEn: "Jerusalem Temple Courts & The Valley of Jehoshaphat",
      titleAm: "የኢየሩሳሌም መቅደስና የኢዮሣፍጥ ሸለቆ",
      empireEn: "Ancient Agrarian Economy Devastated by Natural Disaster",
      empireAm: "በአንበጣ መቅሠፍት የወደመችው ይሁዳ",
      timeframe: "c. 835 – 796 BC (or early post-exile)",
      eyewitnessPOVEn: "Skies darkened by millions of devouring locusts; every vine stripped bare; grain offerings ceasing at the temple because nothing grows; priests weeping between porch and altar.",
      eyewitnessPOVAm: "ሰማዩን ባጨለመው በሚሊዮኖች በሚቆጠር የአንበጣ መንጋ እርሻዎች ሲወድሙ፤ በመቅደሱ መሥዋዕት እስኪታጣ ድረስ ድርቅ ሲከሰት ካህናቱ በእንባ ሲጸልዩ።",
      historicalDynamicsEn: "An unprecedented ecological catastrophe used by God as a physical warning of the far more terrifying eschatological \"Day of the Lord\".",
      historicalDynamicsAm: "የተከሰተው የተፈጥሮ አደጋ ወደፊት ለሚመጣው ታላቅና አስፈሪ የእግዚአብሔር የፍርድ ቀን ማስጠንቀቂያ ሆኖ የቀረበበት ትንቢት።",
      groundRealitiesEn: "Dry irrigation ditches, cattle groaning in barren pastures, sounding the ram’s horn (shofar) in Zion.",
      groundRealitiesAm: "የደረቁ የውኃ ቦዮች፣ እንስሳት በረሃብ ሲጮኹ፣ እና በጽዮን የመለከት ድምፅ ሲሰማ።"
    },
    theological: {
      titleEn: "Rend Your Hearts, Not Your Garments",
      titleAm: "ልባችሁን እንጂ ልብሳችሁን አትቅደዱ",
      covenantStageEn: "Prophetic Call to Repentance and Universal Spirit Indwelling",
      covenantStageAm: "የንስሐ ጥሪና የመንፈስ ቅዱስ ስጦታ ለሥጋ ለባሽ ሁሉ",
      redemptiveThemeEn: "God promises to restore the years that the locusts have eaten; culminating in pouring out his Spirit upon all flesh—sons, daughters, old, young.",
      redemptiveThemeAm: "እግዚአብሔር አንበጣ የበላውን ዘመን ሁሉ እንደሚመልስና በመጨረሻው ዘመን መንፈሱን በሥጋ ለባሽ ሁሉ ላይ እንደሚያፈስ ቃል ገባ።",
      christForeshadowingEn: "The outpouring of the Holy Spirit on Pentecost (Acts 2:16–21) is Peter’s direct citation of Joel 2:28–32; \"Everyone who calls on the name of the Lord will be saved.\"",
      christForeshadowingAm: "በበዓለ ሃምሳ ቀን መንፈስ ቅዱስ በሐዋርያት ላይ መውረዱ (የሐዋ 2:16-21) የኢዮኤል 2:28 ትንቢት ፍጻሜ ነው፤ “የእግዚአብሔርን ስም የሚጠራ ሁሉ ይድናል”።",
      metaNarrativeAnchorEn: "Joel bridges the physical calamity of the present to the cosmic renewal of the Spirit.",
      metaNarrativeAnchorAm: "ኢዮኤል ከአካላዊ መከራ ወደ ታላቁ የመንፈስ ቅዱስ ዘመን የሚወስደውን ድልድይ ያሳያል።"
    },
    linguistic: [
      {
        original: "יוֹם יְהוָה",
        translit: "Yom Yahweh",
        language: "Hebrew",
        amharicTerm: "የእግዚአብሔር ቀን",
        literalMeaningEn: "The Day of the Lord",
        literalMeaningAm: "የእግዚአብሔር ቀን (ታላቁ የፍርድና የማዳን ቀን)",
        theologicalDepthEn: "The decisive historical intervention of Yahweh to execute justice, judge wickedness, and vindicate his remnant.",
        theologicalDepthAm: "እግዚአብሔር በኃጢአት ላይ የሚፈርድበትና ሕዝቡን በክብር ነፃ የሚያወጣበት ወሳኝ የታሪክ ምዕራፍ።",
        canonicalUsageEn: "Joel 1:15, 2:1, 2:31; 1 Thess 5:2; 2 Peter 3:10.",
        canonicalUsageAm: "ኢዮኤል 1:15፤ 2:1፤ 1 ተሰ 5:2።"
      }
    ],
    psychological: {
      characterEn: "Joel & The Priests of Zion",
      characterAm: "ኢዮኤልና የጽዮን ካህናት",
      emotionalStateEn: "Alarming urgency, sorrowful fasting, sudden eruption of prophetic joy",
      emotionalStateAm: "የአደጋ ማስጠንቀቂያ፣ በጾምና በዕንባ መማለድ፣ በመንፈስ ቅዱስ ተስፋ የመደሰት መንፈስ",
      innerConflictEn: "Calling an entire nation from nursing infants to bridegrooms to leave celebrations and weep before the altar.",
      innerConflictAm: "ሕዝቡን ከሕፃናት እስከ ሙሽሮች ድረስ ከግብዣ ሰብስቦ፣ በመቅደሱ አደባባይ በእግዚአብሔር ፊት እንዲያለቅሱ ጥሪ የማቅረብ ከባድ ኃላፊነት።",
      existentialQuestionEn: "\"Rend your hearts and not your garments. Return to the Lord your God, for he is gracious and merciful!\" (Joel 2:13)",
      existentialQuestionAm: "“ልባችሁን እንጂ ልብሳችሁን አትቅደዱ፤ እርሱ ቸርና መሐሪ፥ ቍጣው የዘገየ፥ ምሕረቱም የበዛ ነውና ወደ አምላካችሁ ወደ እግዚአብሔር ተመለሱ!” (ኢዮ 2:13)",
      modernReflectionEn: "Disasters shake us out of spiritual numbness; don’t settle for superficial outward regret—let God break your heart open so He can fill it with His Spirit.",
      modernReflectionAm: "መከራ ሲመጣ ውጫዊ ለቅሶ ብቻ በቂ አይደለም፤ ልብህን ለእግዚአብሔር ክፈትለት፤ አንበጣ የበላውን ዘመን መልሶ በመንፈሱ ይሞላሃል።"
    }
  },

  // 30. AMOS (ትንቢተ አሞጽ)
  30: {
    id: 'canon-book-30',
    sceneId: 'book-30',
    bookNr: 30,
    chapterStart: 1,
    titleEn: "Amos: The Lion Roars for Social Justice & Righteousness",
    titleAm: "ትንቢተ አሞጽ፡ አንበሳው ሲያገሣና የፍትሕ እንደ ውኃ መፍሰስ",
    eraEn: "Northern Kingdom Prosperity & Corruption",
    eraAm: "የሰሜኑ መንግሥት የቅንጦትና የፍትሕ መጓደል ዘመን",
    geopolitical: {
      titleEn: "Tekoa Hills to the Royal Shrine at Bethel",
      titleAm: "ከተቆዓ ተራሮች እስከ ቤቴል ንጉሣዊ መቅደስ",
      empireEn: "Prosperous Jeroboam II Era & Surrounding Regional Exploitation",
      empireAm: "የሁለተኛው ኢዮርብዓም የበለጸገ ግን የተበላሸ መንግሥት",
      timeframe: "c. 760 – 750 BC",
      eyewitnessPOVEn: "A blue-collar fig grower and sheep breeder walking into Bethel’s ivory palaces and golden shrines, roaring that God hates their religious songs because they crush the poor for a pair of sandals.",
      eyewitnessPOVAm: "የበለስ ገራፊና እረኛ የነበረው አሞጽ በቤቴል ባለጠጎች ፊት ቆሞ “ድሆችን በጫማ ዋጋ ትሸጣላችሁና እግዚአብሔር አምልኳችሁን ጠልቶታል” ብሎ ሲገሥጽ።",
      historicalDynamicsEn: "Wealthy elites lounging on ivory beds and drinking wine from bowls while bribing judges and dispossessing vulnerable peasant farmers.",
      historicalDynamicsAm: "ባለጸጎቹ በዝሆን ጥርስ አልጋ ላይ እየተቀማጠሉ ድሆችንና ምስኪኖችን በፍርድ አደባባይ ሲበዘብዙ የታየበት ማኅበራዊ ቀውስ።",
      groundRealitiesEn: "Ivory-inlaid couches, baskets of summer fruit rotting in the heat, the plumb-line testing crooked city walls.",
      groundRealitiesAm: "የዝሆን ጥርስ አልጋዎች፣ የበሰበሰ የበጋ ፍሬ ቅርጫት፣ እና ግድግዳው የቀና መሆኑን የሚለካው ቱንቢ።"
    },
    theological: {
      titleEn: "God’s Righteousness Demands Social Justice",
      titleAm: "የእግዚአብሔር ጽድቅ ማኅበራዊ ፍትሕን ይሻል",
      covenantStageEn: "Sinai Ethical Stipulations Enforced",
      covenantStageAm: "የእግዚአብሔር ሕግ ለድሆችና ለተጨቆኑት ጥበቃ ሲያደርግ",
      redemptiveThemeEn: "True worship cannot be separated from treating the vulnerable with dignity: \"Let justice roll down like waters, and righteousness like an ever-flowing stream\" (Amos 5:24).",
      redemptiveThemeAm: "እውነተኛ አምልኮ ከፍትሕና ከጽድቅ ተለይቶ አይቆምም፤ “ነገር ግን ፍርድ እንደ ውኃ፥ ጽድቅም እንደማይደርቅ ወንዝ ይፍሰስ” (አሞ 5:24)።",
      christForeshadowingEn: "The restoration of the fallen booth of David (Amos 9:11), cited by James in Acts 15:16–17 to explain the inclusion of Gentile believers in Christ’s Church.",
      christForeshadowingAm: "የወደቀችው የዳዊት ድንኳን እንደገና መታነጿ (አሞ 9:11)፤ ሐዋርያው ያዕቆብ በሐዋ 15:16 አሕዛብ ወደ ቤተክርስቲያን እንደሚገቡ ለማረጋገጥ ጠቅሶታል።",
      metaNarrativeAnchorEn: "Amos shatters the illusion that religious ritual can compensate for ethical corruption.",
      metaNarrativeAnchorAm: "አሞጽ የሃይማኖት ሥርዓት ብቻውን ግፍንና ፍትሕ ማጣትን ሊሸፍን እንደማይችል በጥብቅ ያስጠነቅቃል።"
    },
    linguistic: [
      {
        original: "מִשְׁפָּט וּצְדָקָה",
        translit: "Mishpat u-tzedakah",
        language: "Hebrew",
        amharicTerm: "ፍርድና ጽድቅ",
        literalMeaningEn: "Justice and righteous equity",
        literalMeaningAm: "ፍትሕና ጽድቅ (የቀና ፍርድ)",
        theologicalDepthEn: "The core biblical pairing: vindicating the oppressed, defending the poor, and upholding moral order in society.",
        theologicalDepthAm: "የተበደሉትን መታደግ፣ ለድሆች መቆም እና በማኅበረሰብ ውስጥ እውነተኛ ፍትሕን ማስፈን።",
        canonicalUsageEn: "Amos 5:24; Genesis 18:19; Psalm 89:14.",
        canonicalUsageAm: "አሞጽ 5:24፤ ዘፍጥረት 18:19።"
      }
    ],
    psychological: {
      characterEn: "Amos & Amaziah the Priest of Bethel",
      characterAm: "አሞጽና የቤቴል ካህን አሜስያስ",
      emotionalStateEn: "Unyielding moral fury, fearless plain-spoken courage, grief over prideful blind indulgence",
      emotionalStateAm: "የጽድቅ ቁጣ፣ ያለ ፍርሃት እውነትን መናገር፣ የባለጠጎችን ዕውርነት አይቶ ማዘን",
      innerConflictEn: "Amaziah commanding Amos to flee back to Judah: \"Never prophesy at Bethel again, for it is the king’s sanctuary!\" Amos answering: \"I was no prophet, but the Lord took me from following the flock.\"",
      innerConflictAm: "ካህኑ አሜስያስ “ወደ ይሁዳ ሽሽ በቤቴል ዳግመኛ አትተንብይ” ሲለው፤ አሞጽ “እኔ እረኛ ነኝ እንጂ የነቢይ ልጅ አይደለሁም፤ እግዚአብሔር ግን ሂድና ተንብይ አለኝ” ብሎ መቆሙ።",
      existentialQuestionEn: "\"The lion has roared; who will not fear? The Lord God has spoken; who can but prophesy?\" (Amos 3:8)",
      existentialQuestionAm: "“አንበሳ አግሥቷል፤ ማን አይፈራም? ጌታ እግዚአብሔር ተናግሯል፤ ማን ትንቢት አይናገርም?” (አሞ 3:8)",
      modernReflectionEn: "Singing worship songs while ignoring systemic injustice is an offense to God; let your faith show in how you defend the voiceless and love the marginalized.",
      modernReflectionAm: "የተጨቆኑትንና የተቸገሩትን ችላ ብሎ መዘመር በእግዚአብሔር ፊት ዋጋ የለውም፤ ፍቅርህን ለድሆችና ለፍትሕ በመቆም በተግባር አሳይ።"
    }
  },

  // 31. OBADIAH (ትንቢተ አብድዩ)
  31: {
    id: 'canon-book-31',
    sceneId: 'book-31',
    bookNr: 31,
    chapterStart: 1,
    titleEn: "Obadiah: The Doom of Edom & The Triumph of the Kingdom",
    titleAm: "ትንቢተ አብድዩ፡ የኤዶምያስ ፍርድና የመንግሥቱ ድል",
    eraEn: "Post-Fall of Jerusalem Crisis",
    eraAm: "ኢየሩሳሌም በባቢሎን በወደቀችበት ወቅት",
    geopolitical: {
      titleEn: "The Red Rock Clefts of Petra / Mount Seir",
      titleAm: "የፔትራ ቀይ ዓለቶችና የሴይር ተራራ ምሽጎች",
      empireEn: "Edomite Kingdom Allied with Babylonian Invaders",
      empireAm: "ኤዶምያስ ከባቢሎን ወራሪዎች ጋር ተባብሮ ሳለ",
      timeframe: "c. 586 BC",
      eyewitnessPOVEn: "Edomite mountain-dwellers cheering as Babylonian soldiers breach Jerusalem’s gates, cutting off fleeing Jewish refugees at mountain crossroads and handing them over to slaughter.",
      eyewitnessPOVAm: "የይሁዳ ወንድም የሆነው ኤዶምያስ ባቢሎናውያን ኢየሩሳሌምን ሲያፈርሱ በደስታ ሲያጨበጭብና የሚሸሹትን ስደተኞች በመንገድ ላይ አድፍጦ ለጠላት አሳልፎ ሲሰጥ።",
      historicalDynamicsEn: "Ancient sibling rivalry tracing back to Jacob and Esau; Edom’s impregnable mountain canyon fortress breeding pride.",
      historicalDynamicsAm: "በያዕቆብና በኤሳው መካከል የነበረው ጥንታዊ የቤተሰብ ጠብ፤ ኤዶምያውያን በዓለት ምሽጋቸው ተማምነው በትዕቢት መሞላታቸው።",
      groundRealitiesEn: "Nests built high as eagles in rock cliffs, ambushes at mountain crossroads, plundering brothers’ goods in the day of calamity.",
      groundRealitiesAm: "እንደ ንስር በዓለት ላይ የተሠራ ምሽግ፣ በመንገድ መተላለፊያ ላይ አድፍጦ ወንድምን መግደል፣ እና በተጨነቀበት ቀን ንብረቱን መዝረፍ።"
    },
    theological: {
      titleEn: "Pride Brought Down and the Global Vindication of Mount Zion",
      titleAm: "ትዕቢት ሲዋረድና በጽዮን ተራራ ላይ የሚመጣው ድል",
      covenantStageEn: "Abrahamic Principle: \"He who curses you I will curse\"",
      covenantStageAm: "ለአብርሃም የተሰጠው ቃል፡ “የሚረግምህ የተረገመ ይሁን”",
      redemptiveThemeEn: "Pride is deceptive: no mountain fortress can shield against God’s justice; those who gloat over the suffering of God’s people will drink the cup of retribution.",
      redemptiveThemeAm: "ትዕቢት ያታልላል፤ የትኛውም ምሽግ ከእግዚአብሔር ፍርድ አያድንም፤ በወንድሙ መከራ የተደሰተ በራሱ ላይ ፍርድን ያመጣል።",
      christForeshadowingEn: "The saviors on Mount Zion ruling the mountain of Esau culminate in Christ’s universal reign: \"And the kingdom shall be the Lord’s\" (Obadiah 21).",
      christForeshadowingAm: "በጽዮን ተራራ ላይ የሚወጡት ታዳጊዎች የክርስቶስን የዘላለም ግዛት ያሳያሉ፤ “መንግሥቱም ለእግዚአብሔር ይሆናል” (አብ 21)።",
      metaNarrativeAnchorEn: "The shortest book in the Old Testament (21 verses), delivering a massive indictment against schadenfreude and treacherous pride.",
      metaNarrativeAnchorAm: "በብሉይ ኪዳን ውስጥ እጅግ አጭሩ መጽሐፍ (21 ቁጥሮች)፤ በትዕቢትና በወንድም መከራ መደሰት ላይ የመጣ ከባድ ፍርድ።"
    },
    linguistic: [
      {
        original: "זְדוֹן לִבְּךָ",
        translit: "Z’don libb’cha",
        language: "Hebrew",
        amharicTerm: "የልብህ ትዕቢት",
        literalMeaningEn: "The insolent pride / arrogance of your heart",
        literalMeaningAm: "የልብህ ትዕቢት አታልሎሃል",
        theologicalDepthEn: "Self-sufficiency rooted in geography or military advantage that forgets human vulnerability before God.",
        theologicalDepthAm: "በተራራና በምሽግ በመታመን እግዚአብሔርን መርሳትና በራስ ኃይል መመካት።",
        canonicalUsageEn: "Obadiah 3.",
        canonicalUsageAm: "አብድዩ 3።"
      }
    ],
    psychological: {
      characterEn: "Obadiah & The Proud Mountain-Dwellers of Edom",
      characterAm: "አብድዩና የኤዶምያስ ትዕቢተኞች",
      emotionalStateEn: "Righteous indignation against brotherly betrayal, sober prophetic certainty",
      emotionalStateAm: "በወንድም ክህደት የተሰማ ኀዘን፣ የእግዚአብሔርን ፍርድ በእርግጠኝነት መመስከር",
      innerConflictEn: "Watching blood relatives celebrate your destruction and knowing justice will inexorably fall.",
      innerConflictAm: "የሥጋ ዘመድ የሆነ ወንድም በመከራህ ቀን ጠላት ሆኖ ሲቆም ማየትና የእግዚአብሔርን ፍትሕ መጠበቅ።",
      existentialQuestionEn: "\"Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the Lord!\" (Obadiah 4)",
      existentialQuestionAm: "“ምንም እንደ ንስር ከፍ ብለህ ብትወጣ፥ ጎጆህም በከዋክብት መካከል ቢሆን፥ ከዚያ አወርድሃለሁ፥ ይላል እግዚአብሔር!” (አብ 4)",
      modernReflectionEn: "Never gloat when an adversary or rival falls; arrogance blinds us to our own fragility, but the humble inherit God’s eternal kingdom.",
      modernReflectionAm: "ጠላትህ እንኳ ሲወድቅ ደስ አይበልህ፤ ትዕቢት ለውድቀት ያዘጋጃል፤ ራሱን የሚያዋርድ ግን በእግዚአብሔር ከፍ ይላል።"
    }
  },

  // 32. JONAH (ትንቢተ ዮናስ)
  32: {
    id: 'canon-book-32',
    sceneId: 'book-32',
    bookNr: 32,
    chapterStart: 1,
    titleEn: "Jonah: The Reluctant Prophet & God’s Boundless Mercy to the Nations",
    titleAm: "ትንቢተ ዮናስ፡ እምቢተኛው ነቢይና የአምላክ ለአሕዛብ ሁሉ ያለው ምሕረት",
    eraEn: "Northern Kingdom Reign of Jeroboam II",
    eraAm: "የሁለተኛው ኢዮርብዓም ዘመን",
    geopolitical: {
      titleEn: "Joppa Port to the Great Imperial City of Nineveh",
      titleAm: "ከኢዮጴ ወደብ እስከ ታላቋ የነነዌ ከተማ",
      empireEn: "Neo-Assyrian Superpower (Brutal Arch-Enemy of Israel)",
      empireAm: "የአሦር ኢምፓየር (የእስራኤል አስፈሪ ጠላት)",
      timeframe: "c. 780 – 760 BC",
      eyewitnessPOVEn: "A Hebrew prophet buying a ship ticket to Spain (Tarshish) to run away from God; swallowed alive by a sea beast in a raging tempest; walking three days through a pagan city of 120,000 shouting judgment while the king puts sackcloth on cows.",
      eyewitnessPOVAm: "ከእግዚአብሔር ፊት ለመሸሽ ወደ ተርሴስ የኮበለለው ዮናስ በባሕር ውስጥ ዓሣ ሲውጠው፤ በመጨረሻም በአሦር ዋና ከተማ በነነዌ አደባባይ ንስሐን ሲሰብክ ከንጉሥ እስከ ከብቶች ድረስ በማቅ ማልቀሳቸው።",
      historicalDynamicsEn: "Nineveh was renowned for sickening imperial cruelty (flaying enemies, impaling victims); Jonah wanted them destroyed, not forgiven.",
      historicalDynamicsAm: "ነነዌ በጭካኔዋና በደም አፍሳሽነቷ የታወቀች ነበረች፤ ዮናስ እግዚአብሔር ይቅር እንዳይላቸው ፈርቶ ነበር የሸሸው።",
      groundRealitiesEn: "Pitching ship decks, weeds wrapped around the head in ocean depths, a castor-oil plant growing overnight and dying at dawn.",
      groundRealitiesAm: "በማዕበል የተመታች መርከብ፣ በባሕሩ ጥልቀት ውስጥ በጭንቅ መጸለይ፣ እና በአንድ ሌሊት በቅላ የደረቀች የቅል ቅጠል።"
    },
    theological: {
      titleEn: "Universal Divine Mercy Overcomes Nationalist Bigotry",
      titleAm: "መለኮታዊ ምሕረት ጠባብ ብሔርተኝነትን ሲያሸንፍ",
      covenantStageEn: "Abrahamic Blessing to All Nations Enacted to Gentile Enemies",
      covenantStageAm: "አሕዛብ ሁሉ በእግዚአብሔር ምሕረት እንዲገቡ የተደረገው ኪዳን",
      redemptiveThemeEn: "God cares about 120,000 pagan Ninevites who do not know their right hand from their left, exposing the self-righteous cruelty of human religious nationalism.",
      redemptiveThemeAm: "እግዚአብሔር ቀኛቸውንና ግራቸውን ለማይለዩት ለ120,000 የነነዌ ሰዎችና ለእንስሳቶቻቸው ጭምር ያዘነ ሩኅሩኅ አምላክ መሆኑን አሳየ።",
      christForeshadowingEn: "\"The sign of the prophet Jonah\": three days and three nights in the belly of the fish prefigures Christ’s death, burial, and third-day resurrection (Matt 12:39–41).",
      christForeshadowingAm: "“የነቢዩ የዮናስ ምልክት”፤ በዓሣው ሆድ ውስጥ ሦስት ቀንና ሦስት ሌሊት መቆየቱ፣ ክርስቶስ በመቃብር ውስጥ ሦስት ቀን ቆይቶ በድል ለመነሣቱ ጥላ ነው (ማቴ 12:39-41)።",
      metaNarrativeAnchorEn: "Jonah ends with an unanswered question from God, forcing the reader to examine their own heart toward their enemies.",
      metaNarrativeAnchorAm: "መጽሐፉ የሚያበቃው እግዚአብሔር ለዮናስ ባቀረበው ያልተመለሰ ጥያቄ ነው፡ “እኔስ ለታላቂቱ ከተማ ለነነዌ አላዝንምን?” (4:11)።"
    },
    linguistic: [
      {
        original: "רַחוּם וְחַנּוּן",
        translit: "Rachum ve-channun",
        language: "Hebrew",
        amharicTerm: "መሐሪና ቸር",
        literalMeaningEn: "Compassionate, gracious, slow to anger and abounding in love",
        literalMeaningAm: "ይቅር ባይ፣ ቸር፣ ቁጣው የዘገየና ምሕረቱ የበዛ",
        theologicalDepthEn: "The Exodus 34:6 formula used by Jonah as a complaint: he ran away precisely because he knew God is too merciful to destroy repentant enemies!",
        theologicalDepthAm: "ዮናስ የሸሸው እግዚአብሔር ሩኅሩኅና ይቅር ባይ መሆኑን ስለሚያውቅ፣ ጠላቶቹ እንዳይማሩበት ፈርቶ ነበር።",
        canonicalUsageEn: "Jonah 4:2; Exodus 34:6; Psalm 103:8.",
        canonicalUsageAm: "ዮናስ 4:2፤ ዘጸአት 34:6።"
      }
    ],
    psychological: {
      characterEn: "Jonah & The Ninevite King",
      characterAm: "ዮናስና የነነዌ ንጉሥ",
      emotionalStateEn: "Sulking bitterness, xenophobic anger, shocking humility of pagans, divine tender gentle correction",
      emotionalStateAm: "ማኩረፍና መቆጣት፣ ጠላትን አለመውደድ፣ የአሕዛብ አስደናቂ ንስሐ፣ የእግዚአብሔር የዋህ ተግሣጽ",
      innerConflictEn: "Furious that God spared Israel’s arch-enemies: \"Take my life from me, for it is better for me to die than to live!\"",
      innerConflictAm: "እግዚአብሔር ለጠላቶቹ ምሕረት በማድረጉ ተቆጥቶ “ከምኖር ሞት ይሻለኛልና ነፍሴን ውሰዳት” ብሎ ከፈጣሪው ጋር መሟገቱ።",
      existentialQuestionEn: "\"Do you do well to be angry for the plant? And should not I pity Nineveh, that great city?\" (Jonah 4:9–11)",
      existentialQuestionAm: "“በውኑ ስለ ቅልዋ መቆጣትህ መልካም ነውን? እኔስ ቀኛቸውንና ግራቸውን ለማይለዩት ከ120,000 ለሚበልጡ ሰዎች ለነነዌ አላዝንምን?” (ዮናስ 4:9-11)",
      modernReflectionEn: "God’s grace is scandalously wider than your religious or political prejudices; if God can love your worst enemy, you must stop wishing for their destruction.",
      modernReflectionAm: "የእግዚአብሔር ምሕረት ከሰው ጠባብ አስተሳሰብ እጅግ የሰፋ ነው፤ ጠላትህን እንኳ ሳይቀር እግዚአብሔር በንስሐ ሊምረው እንደሚፈልግ ተረዳ።"
    }
  },

  // 33. MICAH (ትንቢተ ሚክያስ)
  33: {
    id: 'canon-book-33',
    sceneId: 'book-33',
    bookNr: 33,
    chapterStart: 1,
    titleEn: "Micah: Bethlehem’s Shepherd-King & What the Lord Requires",
    titleAm: "ትንቢተ ሚክያስ፡ የቤተልሔሙ መጋቢ ንጉሥና እግዚአብሔር የሚፈልገው ቅንነት",
    eraEn: "Assyrian Crisis in the Days of Hezekiah",
    eraAm: "በሕዝቅያስ ዘመን የአሦር ወረራ ወቅት",
    geopolitical: {
      titleEn: "Moresheth-Gath Village to the City of Bethlehem Ephrathah",
      titleAm: "ከሞሬሼት የገጠር መንደር እስከ ቤተልሔም ኤፍራታ",
      empireEn: "Neo-Assyrian Juggernaut Invading the Shephelah Foothills",
      empireAm: "የአሦር ሠራዊት የይሁዳን ከተሞች ሲያወድም",
      timeframe: "c. 735 – 700 BC",
      eyewitnessPOVEn: "A rustic prophet watching wealthy urban oligarchs lying on their beds dreaming up schemes to steal family farms, and corrupt judges taking bribes to pronounce curses on the poor.",
      eyewitnessPOVAm: "የገጠር ሰው የሆነው ሚክያስ በከተማ ያሉ ባለሥልጣናት የድሆችን ርስት በግፍ ሲነጥቁና ካህናት በገንዘብ ትንቢት ሲናገሩ እያየ የፍርድን ቃል ሲያውጅ።",
      historicalDynamicsEn: "Sennacherib’s siege capturing 46 fortified Judean towns; Micah prophesying that Jerusalem will become a heap of ruins because of systemic injustice.",
      historicalDynamicsAm: "የአሦር ንጉሥ የይሁዳን ምሽጎች ሲይዝ፤ ሚክያስ ኢየሩሳሌም በፍትሕ ማጣት ምክንያት የፍርስራሽ ክምር እንደምትሆን አስቀድሞ መናገሩ።",
      groundRealitiesEn: "Stealing fields and houses by legal trickery, false prophets promising peace for a good meal, casting sins into the depths of the sea.",
      groundRealitiesAm: "የድሆችን እርሻ በሐሰት ሰነድ መውረስ፣ ሆዳቸው ሲሞላ ሰላም ብለው የሚተነብዩ ሐሰተኞች፣ እና እግዚአብሔር ኃጢአትን ወደ ባሕር ጥልቀት ሲጥል።"
    },
    theological: {
      titleEn: "Justice, Mercy, and the Humble Walk before God",
      titleAm: "ፍትሕ፣ ምሕረትና በትሕትና ከአምላክ ጋር መመላለስ",
      covenantStageEn: "Davidic Shepherd Ruler Arising from Insignificance",
      covenantStageAm: "ከተናቀችው መንደር የሚወጣው የዳዊት ዘላለማዊ እረኛ",
      redemptiveThemeEn: "God does not want thousands of rams or rivers of oil: \"What does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?\" (Micah 6:8).",
      redemptiveThemeAm: "እግዚአብሔር በሺህ የሚቆጠር የበግ መሥዋዕት አይሻም፤ “ሰው ሆይ፥ መልካሙን ነግሮሃል፤ እግዚአብሔርም ከአንተ የሚሻው ምንድር ነው? ፍርድን ታደርግ ዘንድ፥ ምሕረትንም ትወድድ ዘንድ፥ ከአምላክህም ጋር በትሕትና ትሄድ ዘንድ አይደለምን?” (ሚክ 6:8)።",
      christForeshadowingEn: "The exact birthplace of the Messiah: \"But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel\" (Micah 5:2 / Matt 2:6).",
      christForeshadowingAm: "የመሲሑ መወለጃ ስፍራ በግልጽ ተነገረ፡ “አንቺም ቤተልሔም ኤፍራታ ሆይ... ከአንቺ አወጣጣል ከአሮን ዘመን የሆነ በእስራኤል ላይ ገዢ የሚሆን ይወጣልኛል” (ሚክ 5:2 / ማቴ 2:6)።",
      metaNarrativeAnchorEn: "Micah balances devastating social indictments with the most radiant promises of messianic peace and pardon in all of scripture.",
      metaNarrativeAnchorAm: "ሚክያስ በማኅበራዊ በደል ላይ ፍርድን እያወጀ፣ በመጨረሻው ግን እግዚአብሔር ኃጢአትን ይቅር እንደሚልና ወደ ባሕር ጥልቀት እንደሚጥለው ያበስራል።"
    },
    linguistic: [
      {
        original: "עֲשׂוֹת מִשְׁפָּט",
        translit: "Asot mishpat",
        language: "Hebrew",
        amharicTerm: "ፍትሕን ማድረግ",
        literalMeaningEn: "To practice justice / act justly",
        literalMeaningAm: "ፍትሕን በተግባር ማድረግ",
        theologicalDepthEn: "Active structural and personal intervention on behalf of the mistreated and defenseless.",
        theologicalDepthAm: "በተጨባጭ በሕይወትና በማኅበረሰብ ውስጥ ለተበደሉት መቆምና የቀናውን ማድረግ።",
        canonicalUsageEn: "Micah 6:8.",
        canonicalUsageAm: "ሚክያስ 6:8።"
      }
    ],
    psychological: {
      characterEn: "Micah the Morashtite",
      characterAm: "ሞሬሻታዊው ሚክያስ",
      emotionalStateEn: "Courageous indignation, grief over peasant exploitation, joyful amazement at God’s pardoning grace",
      emotionalStateAm: "የድሆች መበደል ያስቆጣው ጽናት፣ የአገር ውድቀት ኀዘን፣ እግዚአብሔር ኃጢአትን ይቅር ሲል የታየው ታላቅ ደስታ",
      innerConflictEn: "Standing alone against an entire establishment of corrupt priests, judges, and kings, declaring their ruin by the Spirit’s power.",
      innerConflictAm: "በሙስና በተበላሹ ነገሥታትና ካህናት ፊት ቆሞ “እኔ ግን የያዕቆብን መተላለፍ ለእስራኤልም ኃጢአቱን እነግረው ዘንድ በእግዚአብሔር መንፈስ ኃይል ተሞልቻለሁ” ብሎ መመስከሩ።",
      existentialQuestionEn: "\"Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance?\" (Micah 7:18)",
      existentialQuestionAm: "“እንደ አንተ ያለ አምላክ ማን ነው? በደልን ይቅር የሚል፥ የርስቱንም ቅሬታ መተላለፍ የሚያሳልፍ!” (ሚክ 7:18)",
      modernReflectionEn: "God is unimpressed by religious performance; what matters is whether you do justice in daily transactions, love mercy toward the weak, and walk humbly with your Lord.",
      modernReflectionAm: "ውጫዊ ሃይማኖተኝነት እግዚአብሔርን አያስደንቀውም፤ የሚሻው በሥራህ ሁሉ ፍትሐዊ እንድትሆን፣ ምሕረትን እንድትወድና በትሕትና ከእርሱ ጋር እንድትመላለስ ነው።"
    }
  },

  // 34. NAHUM (ትንቢተ ናሆም)
  34: {
    id: 'canon-book-34',
    sceneId: 'book-34',
    bookNr: 34,
    chapterStart: 1,
    titleEn: "Nahum: The Fall of the Bloody City Nineveh & Comfort for Zion",
    titleAm: "ትንቢተ ናሆም፡ የደም ከተማ ነነዌ ውድቀትና የጽዮን መጽናናት",
    eraEn: "Decline of Assyrian Empire",
    eraAm: "የአሦር ኢምፓየር መዳከምና መውደቅ",
    geopolitical: {
      titleEn: "Nineveh on the Tigris River & Judah’s Mountains",
      titleAm: "በጤግሮስ ወንዝ አጠገብ ያለችው ነነዌና የይሁዳ ተራሮች",
      empireEn: "Neo-Assyrian Empire Collapsing before Medes and Babylonians",
      empireAm: "የአሦር መንግሥት በባቢሎንና በሜዶን ሠራዊት እጅ ሲወድቅ",
      timeframe: "c. 663 – 612 BC",
      eyewitnessPOVEn: "A war-correspondent vision of red shields, flashing chariots charging like torches through Nineveh’s suburbs, the Tigris river gates opening to flood the stone palaces of the world’s most terrifying empire.",
      eyewitnessPOVAm: "በቀይ ጋሻና በብልጭልጭ ሠረገሎች የታጀበው የጠላት ሠራዊት ነነዌን ሲያወድማት፤ የጤግሮስ ወንዝ በሮች ተከፍተው ቤተ መንግሥቷ በውኃ ሲጥለቀለቅ የታየበት አስፈሪ ራእይ።",
      historicalDynamicsEn: "Nineveh had sacked Thebes (No-Amon) in Egypt (663 BC); now in 612 BC, allied Babylonians and Medes breach Nineveh’s 100-foot-high walls, ending three centuries of terror.",
      historicalDynamicsAm: "ግብፅን ጭምር ያንበረከከችው ጨካኟ ነነዌ፤ በመጨረሻው በሜዶንና በባቢሎን ሠራዊት ተደምስሳ ለዘላለም ፍርስራሽ ስትሆን።",
      groundRealitiesEn: "Whips cracking, wheels rattling, charging cavalry, stumbling over heaps of corpses, clay lions smashed.",
      groundRealitiesAm: "የጅራፍ ድምፅ፣ የመንኮራኩር ጩኸት፣ የወደቁ ሬሳዎች ክምር፣ እና የተሰባበሩ የአሦር የድንጋይ አንበሶች።"
    },
    theological: {
      titleEn: "Yahweh is an Avenger and a Stronghold in the Day of Trouble",
      titleAm: "እግዚአብሔር በቀለኛና በመከራ ቀን መጠጊያ ምሽግ ነው",
      covenantStageEn: "Vindication of God’s Oppressed Covenant People",
      covenantStageAm: "የተጨቆኑት የእግዚአብሔር ሕዝቦች ከጨቋኝ ቀንበር ነፃ መውጣት",
      redemptiveThemeEn: "God is slow to anger, but he will not clear the guilty; tyrannical empires that slaughter the innocent will face absolute historical collapse.",
      redemptiveThemeAm: "እግዚአብሔር ቁጣው የዘገየ ቢሆንም በደለኛውን ግን ሳይቀጣ አይተወውም፤ በደም የተገነቡ ጨካኝ መንግሥታት ሁሉ ይጠፋሉ።",
      christForeshadowingEn: "\"Behold, upon the mountains, the feet of him who brings good news, who publishes peace!\" (Nahum 1:15 cited in Romans 10:15 of Gospel preaching).",
      christForeshadowingAm: "“እነሆ፥ የምስራች የሚያመጣ፥ ሰላምንም የሚያወራ ሰው እግሮች በተራሮች ላይ አሉ!” (ናሆም 1:15 / ሮሜ 10:15)።",
      metaNarrativeAnchorEn: "Nahum means \"Comfort\"—the judgment on brutal Nineveh brought overwhelming relief to the traumatized nations.",
      metaNarrativeAnchorAm: "የናሆም ስም ትርጉም “መጽናናት” ማለት ነው፤ የጨካኙ የአሦር መንግሥት መደምሰስ ለተጨቆኑት ሁሉ ታላቅ ዕረፍትና መጽናናት ሆነ።"
    },
    linguistic: [
      {
        original: "מָעוֹז בְּיוֹם צָרָה",
        translit: "Ma’oz b’yom tzarah",
        language: "Hebrew",
        amharicTerm: "በመከራ ቀን መጠጊያ",
        literalMeaningEn: "Stronghold / Fortress in the day of distress",
        literalMeaningAm: "በመከራ ቀን ምሽግ (መጠጊያ)",
        theologicalDepthEn: "God is good; he personally knows and shelters those who trust in him while storm winds sweep away the oppressor.",
        theologicalDepthAm: "እግዚአብሔር ቸር ነው፤ በእርሱ የሚታመኑትን ያውቃል፤ በመከራ ቀንም ለሕዝቡ አስተማማኝ ምሽግ ነው።",
        canonicalUsageEn: "Nahum 1:7; Psalm 27:1.",
        canonicalUsageAm: "ናሆም 1:7፤ መዝሙር 27:1።"
      }
    ],
    psychological: {
      characterEn: "Nahum of Elkosh",
      characterAm: "ኤልቆሻዊው ናሆም",
      emotionalStateEn: "Vindicated relief, thunderous poetic awe before divine wrath, tender comfort for the wounded",
      emotionalStateAm: "የፍትሕ መምጣት ያስገኘው ዕረፍት፣ በእግዚአብሔር ታላቅ ግርማ መደነቅ፣ ለተጎዱት የተሰጠ ጣፋጭ መጽናናት",
      innerConflictEn: "Witnessing the terrifying reality of divine wrath and rejoicing not out of personal malice, but because global terror has been dismantled.",
      innerConflictAm: "የመለኮትን አስፈሪ የፍርድ ኃይል እያየ፣ ፍትሕ በምድር ላይ በመንገሡና የግፈኞች አገዛዝ በማብቃቱ መጽናናት።",
      existentialQuestionEn: "\"The Lord is good, a stronghold in the day of trouble; he knows those who take refuge in him!\" (Nahum 1:7)",
      existentialQuestionAm: "“እግዚአብሔር ቸር ነው፥ በመከራ ቀንም መጠጊያ ነው፤ በእርሱ የሚታመኑትንም ያውቃል!” (ናሆም 1:7)",
      modernReflectionEn: "When evil regimes appear invulnerable, remember history’s graveyard: tyranny always has an expiration date; God will hold abusers to account.",
      modernReflectionAm: "ክፉዎችና ጨቋኞች የማይነኩ ቢመስሉም ፍጻሜ አላቸው፤ እግዚአብሔር የተበደሉትን ዕንባ አይረሳም፤ እርሱ በመከራህ ቀን መጠጊያህ ነው።"
    }
  },

  // 35. HABAKKUK (ትንቢተ እንባቆም)
  35: {
    id: 'canon-book-35',
    sceneId: 'book-35',
    bookNr: 35,
    chapterStart: 1,
    titleEn: "Habakkuk: From Perplexity to Praise & The Just Shall Live by Faith",
    titleAm: "ትንቢተ እንባቆም፡ ከጥያቄ ወደ ምስጋናና ጻድቅ በእምነቱ ይኖራል",
    eraEn: "Eve of the Babylonian Invasion",
    eraAm: "የባቢሎን ወረራ ዋዜማ",
    geopolitical: {
      titleEn: "The Watchtower of Jerusalem to Mount Paran",
      titleAm: "የኢየሩሳሌም የመጠበቂያ ግንብ እስከ ፋራን ተራራ",
      empireEn: "Rising Neo-Babylonian (Chaldean) Blitzkrieg",
      empireAm: "የከለዳውያን (ባቢሎን) አስፈሪና ፈጣን ወረራ",
      timeframe: "c. 605 BC",
      eyewitnessPOVEn: "A prophet arguing with God: \"Why do you make me see iniquity?\" and stunned when God answers that He is raising up the ruthless Chaldeans whose horses are swifter than leopards to devour Judah.",
      eyewitnessPOVAm: "ነቢዩ “አቤቱ እስከ መቼ እጮኻለሁ አንተም አትሰማም?” ብሎ ከፈጣሪው ጋር ሲሟገት፤ እግዚአብሔር ይሁዳን ለመቅጣት ከነብር ይልቅ ፈጣን የሆነውን የባቢሎንን ሠራዊት እንደሚያስነሣ ሲገልጽለት።",
      historicalDynamicsEn: "Battle of Carchemish (605 BC) establishing Babylon as undisputed superpower; Habakkuk grappling with how a holy God can use a wicked pagan nation to discipline his people.",
      historicalDynamicsAm: "ባቢሎን ዓለምን በጦር ኃይል ስትቆጣጠር፤ ቅዱሱ እግዚአብሔር ይሁዳን ለመገሠጽ ከእርስዋ የባሱትን አረማውያን እንዴት ይጠቀማል የሚል ጥልቅ የነገረ መለኮት ጥያቄ።",
      groundRealitiesEn: "Climbing the watchtower to wait for God’s reply, carving the vision on tablets so runners can read it, trembling lips and rottenness entering bones.",
      groundRealitiesAm: "በመጠበቂያው ግንብ ላይ ወጥቶ መልስን መጠበቅ፣ ራእዩን በሰሌዳ ላይ መጻፍ፣ እና የእግዚአብሔር ድምፅ ሲሰማ ከንፈር መንቀጥቀጥ።"
    },
    theological: {
      titleEn: "The Just Shall Live by Faith Amidst Dark Horizons",
      titleAm: "ጻድቅ በጨለማ ዘመን በእምነቱ ይኖራል",
      covenantStageEn: "Persevering Faith Anchored in Yahweh’s Final Victory",
      covenantStageAm: "በማያወላውል እምነት በእግዚአብሔር መታመን",
      redemptiveThemeEn: "\"The righteous shall live by his faith\" (Hab 2:4). When outer circumstances collapse and fig trees do not blossom, faith rejoices in the God of salvation.",
      redemptiveThemeAm: "“ጻድቅ ግን በእምነቱ በሕይወት ይኖራል” (እን 2:4)፤ በለስም ባታፈራ፣ የወይንም ፍሬ ባይገኝ እንኳ፣ ነፍስ በመድኃኒቷ በእግዚአብሔር ሐሴት ታደርጋለች።",
      christForeshadowingEn: "Habakkuk 2:4 is the foundational text of New Testament justification by faith (Romans 1:17; Galatians 3:11; Hebrews 10:38); Christ our salvation.",
      christForeshadowingAm: "እንባቆም 2:4 በአዲስ ኪዳን ውስጥ የድነትና የጽድቅ መሠረት ነው (ሮሜ 1:17፤ ገላትያ 3:11፤ ዕብ 10:38)፤ ክርስቶስ ብርታታችንና እውነተኛ መድኃኒታችን ነው።",
      metaNarrativeAnchorEn: "Habakkuk journeys from wrestling complaint (Chapter 1) to watchtower prayer (Chapter 2) to transcendent liturgical ecstasy (Chapter 3).",
      metaNarrativeAnchorAm: "እንባቆም ከመከራከርና ከለቅሶ ጀምሮ፣ በመጨረሻው በምዕራፍ 3 ላይ ወደ ታላቅ የድልና የምስጋና ጸሎት ይሸጋገራል።"
    },
    linguistic: [
      {
        original: "וְצַדִּיק בֶּאֱמוּנָתוֹ יִחְיֶה",
        translit: "Ve-tzaddik be-emunato yichyeh",
        language: "Hebrew",
        amharicTerm: "ጻድቅ በእምነቱ በሕይወት ይኖራል",
        literalMeaningEn: "The righteous person shall live by his steadfast fidelity / trust",
        literalMeaningAm: "ጻድቅ በእምነቱ (በታማኝነቱ) በሕይወት ይኖራል",
        theologicalDepthEn: "Steadfast loyalty to God in the dark; faith is not feeling good, but clinging stubbornly to God’s promises when everything looks lost.",
        theologicalDepthAm: "ሁኔታዎች ሁሉ ተስፋ አስቆራጭ በሚሆኑበት ጊዜ እንኳ፣ በእግዚአብሔር ቃል ላይ በጽናት መቆም የሚያድን እውነተኛ እምነት ነው።",
        canonicalUsageEn: "Habakkuk 2:4; Romans 1:17; Galatians 3:11.",
        canonicalUsageAm: "እንባቆም 2:4፤ ሮሜ 1:17፤ ገላትያ 3:11።"
      }
    ],
    psychological: {
      characterEn: "Habakkuk the Questioning Watchman",
      characterAm: "ጠያቂው ነቢይ እንባቆም",
      emotionalStateEn: "Honest theological anguish, trembling dread, soaring ecstatic joy above earthly devastation",
      emotionalStateAm: "የልብ ጭንቀት፣ በፍርድ ፊት መንቀጥቀጥ፣ ከሁኔታዎች በላይ የሆነ የታላቅ እምነት ደስታ",
      innerConflictEn: "Struggling with why evil seems victorious, climbing the tower to argue, then falling on his face in worship as God’s glory covers the heavens.",
      innerConflictAm: "ክፉዎች ሲያሸንፉ እግዚአብሔር ለምን ዝም እንዳለ መጠየቅ፤ የእግዚአብሔር ክብር ሰማያትን ሲሸፍን ግን በፍጹም ምስጋና መንበርከክ።",
      existentialQuestionEn: "\"Though the fig tree should not blossom, nor fruit be on the vines... yet I will rejoice in the Lord; I will take joy in the God of my salvation!\" (Hab 3:17–18)",
      existentialQuestionAm: "“በለስ ምንም ባታፈራ፥ በወይኑም ሐረግ ፍሬ ባይገኝ... እኔ ግን በእግዚአብሔር ደስ ይለኛል፥ በመድኃኒቴም አምላክ ሐሴት አደርጋለሁ!” (እን 3:17-18)",
      modernReflectionEn: "Faith does not mean having all the answers; it means holding onto God when you have no answers, trusting that He makes your feet like hinds’ feet to walk on high places.",
      modernReflectionAm: "እምነት ማለት ለጥያቄዎችህ ሁሉ መልስ ማግኘት ሳይሆን፤ መልስ በሌለህ ጊዜም በእግዚአብሔር እጅ መታመን ነው፤ እርሱ በተራሮችህ ላይ እንድትራመድ ያደርግሃል።"
    }
  },

  // 36. ZEPHANIAH (ትንቢተ ሶፎንያስ)
  36: {
    id: 'canon-book-36',
    sceneId: 'book-36',
    bookNr: 36,
    chapterStart: 1,
    titleEn: "Zephaniah: The Great Day of the Lord & The Singing God",
    titleAm: "ትንቢተ ሶፎንያስ፡ ታላቁ የእግዚአብሔር ቀንና በደስታ የሚዘምረው አምላክ",
    eraEn: "Reign of King Josiah of Judah",
    eraAm: "በደጉ ንጉሥ በኢዮስያስ ዘመን",
    geopolitical: {
      titleEn: "Jerusalem’s Fish Gate & Mortar District to Distant Ethiopia",
      titleAm: "የኢየሩሳሌም የዓሣ በርና መከታ፣ እስከ ሩቋ ኢትዮጵያ ድረስ",
      empireEn: "Declining Assyria, Emerging Scythian Raids & Rising Babylon",
      empireAm: "የአሦር መዳከምና የባቢሎን ግዛት መነሣት",
      timeframe: "c. 630 – 625 BC",
      eyewitnessPOVEn: "A royal great-great-grandson of King Hezekiah walking through Jerusalem with search-lanterns, warning of a global cosmic sweep that will consume everything from rooftops worshipping the starry host to merchants weighing silver.",
      eyewitnessPOVAm: "የንጉሥ ሕዝቅያስ የልጅ ልጅ የሆነው ሶፎንያስ መብራት ይዞ የኢየሩሳሌምን ጥፋት ሲያስጠነቅቅ፤ እግዚአብሔር በጣዖት አምላኪዎችና በብር ነጋዴዎች ላይ የሚፈርደውን ፍርድ ሲያውጅ።",
      historicalDynamicsEn: "Decades of idolatrous pollution under wicked king Manasseh; Zephaniah’s fierce preaching laying the prophetic groundwork for Josiah’s famous reforms.",
      historicalDynamicsAm: "በንጉሥ ምናሴ ዘመን የተበላሸውን የጣዖት አምልኮ ለማጽዳትና ንጉሥ ኢዮስያስ ታላቁን ተሃድሶ እንዲያደርግ መንገድ የጠረገ ኃይለኛ የስብከት ዘመን።",
      groundRealitiesEn: "Leaping over thresholds in pagan superstition, people stagnant like wine dregs saying \"The Lord will not do good, nor will he do ill,\" searching corners with lanterns.",
      groundRealitiesAm: "በአረማውያን ልማድ በመድረክ ላይ መዝለል፣ “እግዚአብሔር መልካም አያደርግም ክፉም አያደርግም” ብለው በአመላቸው የረጋጉ ሰዎች፣ እና ከተማይቱን በመብራት መመርመር።"
    },
    theological: {
      titleEn: "Cosmic De-creation and God Singing Over His Remnant",
      titleAm: "ዓለም አቀፍ ፍርድና እግዚአብሔር በሕዝቡ ላይ በደስታ ሲዘምር",
      covenantStageEn: "Purified Remnant of the Humble and Lowly",
      covenantStageAm: "ትሑታንና ምስኪኖች የሆኑት የእግዚአብሔር ቅሬታዎች",
      redemptiveThemeEn: "Judgment purges the earth, but God leaves a humble, lowly remnant who seek refuge in the name of Yahweh; God himself rejoices over them with gladness and singing (Zeph 3:17).",
      redemptiveThemeAm: "ፍርድ ክፋትን ያጠፋል፤ እግዚአብሔር ግን ትሑታንንና ምስኪኖችን ያተርፋል፤ እርሱ ራሱ በማዕከላቸው ሆኖ በእነርሱ ላይ በደስታ ይዘምራል (ሶፎ 3:17)።",
      christForeshadowingEn: "\"The King of Israel, the Lord, is in your midst; you shall never again fear evil\" (Zeph 3:15); Jesus the King entering Jerusalem to quiet hearts with his love.",
      christForeshadowingAm: "“የእስራኤል ንጉሥ እግዚአብሔር በመካከልሽ አለ፥ ከእንግዲህም ወዲህ ክፉ ነገርን አታዪም” (ሶፎ 3:15)፤ ክርስቶስ በማዕከላችን ያለ ንጉሣችን ነው።",
      metaNarrativeAnchorEn: "Zephaniah 3:17 is one of the most astonishing verses in the Bible: God Almighty is described as singing for joy over His redeemed children.",
      metaNarrativeAnchorAm: "ሶፎንያስ 3:17 ድንቅ የሆነ መጽሐፍ ቅዱሳዊ እውነት ይዟል፡ ሁሉን የሚችለው አምላክ በዳኑት ልጆቹ ላይ በእልልታና በዝማሬ ደስ ይለዋል።"
    },
    linguistic: [
      {
        original: "יָגִיל עָלַיִךְ בְּרִנָּה",
        translit: "Yagil alayich b’rinnah",
        language: "Hebrew",
        amharicTerm: "በእልልታ በአንቺ ደስ ይለዋል",
        literalMeaningEn: "He will exult over you with loud singing / joyful shouting",
        literalMeaningAm: "በእልልታ በአንቺ ደስ ይለዋል (ይዘምራል)",
        theologicalDepthEn: "God is not merely tolerating his redeemed people; he celebrates them with exuberant musical affection.",
        theologicalDepthAm: "እግዚአብሔር ሕዝቡን በግድ የሚቀበል ሳይሆን፣ በፍቅር ተሞልቶ በደስታና በእልልታ የሚዘምርላቸው አባት ነው።",
        canonicalUsageEn: "Zephaniah 3:17.",
        canonicalUsageAm: "ሶፎንያስ 3:17።"
      }
    ],
    psychological: {
      characterEn: "Zephaniah the Prince-Prophet",
      characterAm: "ልዑሉ ነቢይ ሶፎንያስ",
      emotionalStateEn: "Solemn urgency, fierce disdain for cynical complacency, tender breathtaking comfort",
      emotionalStateAm: "የአስቸኳይ ማስጠንቀቂያ መንፈስ፣ በቸልተኝነት ላይ የተሰማ ቁጣ፣ ልብን የሚያቀልጥ የመለኮት ፍቅር ደስታ",
      innerConflictEn: "Declaring the total unraveling of cosmos to an arrogant royal court, then opening the curtain to show God singing over the repentant.",
      innerConflictAm: "ለትዕቢተኛው ሕዝብ ታላቁን የጥፋት ቀን እያወጀ፤ ለትሑታኑ ግን እግዚአብሔር በማዕከላቸው ሆኖ በዝማሬ እንደሚያድናቸው ማብሰር።",
      existentialQuestionEn: "\"The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love!\" (Zeph 3:17)",
      existentialQuestionAm: "“አምላክሽ እግዚአብሔር በመካከልሽ አለ፥ እርሱ የሚያድን ኃያል ነው፤ በደስታ በአንቺ ደስ ይለዋል፥ በፍቅሩም ያርፍሻል፥ በእልልታም በአንቺ ሐሴት ያደርጋል!” (ሶፎ 3:17)",
      modernReflectionEn: "When you feel unloved or condemned, remember Zephaniah’s vision: Almighty God does not just tolerate you; He rejoices over you with singing when you come to Him.",
      modernReflectionAm: "ዋጋ እንደሌለህና እንደተረሳህ ሲሰማህ ይህንን አስታውስ፡ አምላክህ እግዚአብሔር በሕይወትህ ደስ ይለዋል፤ በፍቅሩም ያሳርፍሃል።"
    }
  },

  // 37. HAGGAI (ትንቢተ ኃጌ)
  37: {
    id: 'canon-book-37',
    sceneId: 'book-37',
    bookNr: 37,
    chapterStart: 1,
    titleEn: "Haggai: Rebuilding the House of God & The Desire of All Nations",
    titleAm: "ትንቢተ ሐጌ፡ የእግዚአብሔርን ቤት መሥራትና የአሕዛብ ሁሉ ናፍቆት",
    eraEn: "Post-Exilic Persian Reconstruction",
    eraAm: "ከምርኮ መልስ የመቅደሱ ግንባታ ዘመን",
    geopolitical: {
      titleEn: "Post-Exilic Yehud & The Ruined Second Temple Foundations",
      titleAm: "የተመላሾቹ ይሁዳና የወደቀው የቤተ መቅደስ መሠረት",
      empireEn: "Achaemenid Persian Empire (Darius I the Great)",
      empireAm: "የፋርስ ኢምፓየር (ዳርዮስ ቀዳማዊ)",
      timeframe: "c. 520 BC",
      eyewitnessPOVEn: "Returned exiles living in luxurious paneled houses while the temple of God lies in charred weeds for 16 years; droughts ruining grape harvests because priorities are upside down.",
      eyewitnessPOVAm: "ከባቢሎን የተመለሱት ሰዎች ለእግዚአብሔር ቤት ግንባታ “ጊዜው ገና ነው” እያሉ ለራሳቸው ባማሩ ቤቶች ሲኖሩ፤ ነቢዩ ቆሞ “የእግዚአብሔር ቤት ፈርሶ ሳለ እናንተ በተዋቡ ቤቶቻችሁ ለመኖር ጊዜው ነውን?” ብሎ ሲገሥጽ።",
      historicalDynamicsEn: "Darius I securing the Persian throne; imperial economic recession and inflation hitting Yehud; Haggai delivering four dated oracles in four months that kickstart construction.",
      historicalDynamicsAm: "በይሁዳ የነበረው የኢኮኖሚ ውድቀትና የድርቅ ችግር፤ ሐጌ በአራት ወራት ውስጥ አራት መልእክቶችን በማድረስ ግንባታውን በአስደናቂ ሁኔታ ያስጀመረበት ወቅት።",
      groundRealitiesEn: "Putting wages into a bag with holes, harvesting little from big fields, hauling timber from mountain forests to build the altar.",
      groundRealitiesAm: "ደመወዝን በቀዳዳ ከረጢት ውስጥ ማኖር፣ ብዙ ዘርተው ጥቂት ማጨድ፣ እና እንጨት ቆርጦ ወደ ተራራ በማምጣት ቤተ መቅደሱን መሥራት።"
    },
    theological: {
      titleEn: "First Things First: God’s Presence Over Personal Comfort",
      titleAm: "ቅድሚያ ለእግዚአብሔር፡ ከመጽናናት በፊት የመለኮት ክብር ሲቀደም",
      covenantStageEn: "Restoration of Divine Indwelling & The Messianic Signet",
      covenantStageAm: "የእግዚአብሔር ክብር ዳግም በማዕከላቸው ሲያድርና የማኅተም ቀለበት",
      redemptiveThemeEn: "\"The latter glory of this house shall be greater than the former, says the Lord of hosts\" (Hag 2:9). The shaken heavens and earth will reveal the Desire of all Nations.",
      redemptiveThemeAm: "“ከፊተኛው ይልቅ የኋለኛው የዚህ ቤት ክብር ይበልጣል፥ ይላል የሠራዊት ጌታ እግዚአብሔር” (ሐጌ 2:9)፤ እግዚአብሔር አሕዛብን ያናውጣል የክርስቶስም ክብር ይገለጣል።",
      christForeshadowingEn: "Zerubbabel the governor chosen as God’s \"signet ring\" (Hag 2:23), reversing the curse on Jehoiachin (Jer 22:24) and preserving the messianic royal line leading to Jesus (Matt 1:12).",
      christForeshadowingAm: "ዘሩባቤል የእግዚአብሔር “የማኅተም ቀለበት” ተብሎ መመረጡ፣ በዳዊት ዘር ላይ የነበረውን እርግማን ሽሮ ወደ ክርስቶስ የሚያደርሰውን የዘር ሐረግ አጸናው (ማቴ 1:12)።",
      metaNarrativeAnchorEn: "Haggai is one of the rare prophets whose message was instantly and completely obeyed by the leadership and people.",
      metaNarrativeAnchorAm: "ትንቢተ ሐጌ መልእክቱ በተነገረ ወዲያውኑ በመሪዎቹና በሕዝቡ ሙሉ በሙሉ ተቀባይነት አግኝቶ ተግባራዊ ከተደረገባቸው ጥቂት መጻሕፍት አንዱ ነው።"
    },
    linguistic: [
      {
        original: "שִׂימוּ לְבַבְכֶם",
        translit: "Simu l’vavchem",
        language: "Hebrew",
        amharicTerm: "ልባችሁን በመንገዳችሁ ላይ አድርጉ",
        literalMeaningEn: "Set your hearts upon your ways / Consider carefully",
        literalMeaningAm: "ልባችሁን በመንገዳችሁ ላይ አድርጉ (አስተውሉ)",
        theologicalDepthEn: "Repeated 5 times: audit your priorities and see why pursuing your own selfish kingdom leaves you spiritually empty.",
        theologicalDepthAm: "በሐጌ ውስጥ 5 ጊዜ ተደግሟል፤ ቅድሚያ የምትሰጡትን ነገር መርምሩ፤ የራሳችሁን ብቻ ስታሳድዱ ለምን በረከት እንደራቀ ተረዱ።",
        canonicalUsageEn: "Haggai 1:5, 1:7, 2:15, 2:18.",
        canonicalUsageAm: "ሐጌ 1:5፤ 1:7።"
      }
    ],
    psychological: {
      characterEn: "Haggai, Zerubbabel & Joshua the High Priest",
      characterAm: "ሐጌ፣ ዘሩባቤልና ሊቀ ካህናቱ ኢያሱ",
      emotionalStateEn: "Confrontational urgency, inspiring galvanization, renewed communal energy",
      emotionalStateAm: "የአጣዳፊነት ስሜት፣ ሕዝቡን ለሥራ የማነሳሳት ኃይል፣ ተስፋን የተሞላ ታላቅ ትጋት",
      innerConflictEn: "Overcoming the collective depression: \"Who is left among you who saw this house in its former glory? Does it not seem to you as nothing?\" yet taking courage because God’s Spirit remains.",
      innerConflictAm: "የቀድሞውን የሰሎሞን መቅደስ ክብር በማስታወስ የመጣውን ተስፋ መቁረጥ ማሸነፍ፤ “መንፈሴ በመካከላችሁ አለና አትፍሩ፥ በርቱ ሥራችሁንም አከናውኑ” በማለት መጽናት።",
      existentialQuestionEn: "\"Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?\" (Haggai 1:4)",
      existentialQuestionAm: "“ይህ ቤት ፈርሶ ሳለ እናንተ ራሳችሁ በተዋቡ ቤቶቻችሁ ለመኖር ጊዜው ነውን?” (ሐጌ 1:4)",
      modernReflectionEn: "When you put your own ambition first and God second, you end up putting your wages into a bag with holes; prioritize God’s kingdom and everything else will be added.",
      modernReflectionAm: "ለራስህ ምቾት ቅድሚያ ሰጥተህ የእግዚአብሔርን ነገር ችላ ስትል ድካምህ ከንቱ ይሆናል፤ በመጀመሪያ የእግዚአብሔርን መንግሥት ፈልግ ሌላው ሁሉ ይጨመርልሃል።"
    }
  },

  // 38. ZECHARIAH (ትንቢተ ዘካርያስ)
  38: {
    id: 'canon-book-38',
    sceneId: 'book-38',
    bookNr: 38,
    chapterStart: 1,
    titleEn: "Zechariah: Night Visions, The Priest-King & The Pierced Shepherd",
    titleAm: "ትንቢተ ዘካርያስ፡ የሌሊት ራእዮች፣ ካህኑ ንጉሥና የተወጋው እረኛ",
    eraEn: "Post-Exilic Temple Reconstruction Era",
    eraAm: "ከምርኮ መልስ የሁለተኛው መቅደስ ዘመን",
    geopolitical: {
      titleEn: "Yehud, Mount of Olives & The Valley of Hinnom",
      titleAm: "ይሁዳ፣ የደብረ ዘይት ተራራና የኢየሩሳሌም ሸለቆዎች",
      empireEn: "Achaemenid Persian Empire (Darius I)",
      empireAm: "የፋርስ ኢምፓየር (ዳርዮስ ቀዳማዊ)",
      timeframe: "c. 520 – 480 BC",
      eyewitnessPOVEn: "A young priest seeing eight apocalyptic night visions: horses among myrtle trees, a measuring line over Jerusalem without walls, Satan accusing high priest Joshua dressed in filthy rags who is clothed in pure robes and crowned.",
      eyewitnessPOVAm: "ነቢዩ ዘካርያስ ያያቸው ስምንቱ አስደናቂ የሌሊት ራእዮች፤ ሊቀ ካህናቱ ኢያሱ የረከሰ ልብስ ለብሶ ሰይጣን ሲከሰው፣ እግዚአብሔር ንጹሕ ልብስ አልብሶ በራሱ ላይ ዘውድ ሲያደርግለት።",
      historicalDynamicsEn: "Rebuilding the temple in the shadow of imperial superpower; Zechariah prophesying a day when global nations come to Jerusalem to grasp the hem of a Jewish garment.",
      historicalDynamicsAm: "በፋርስ ግዛት ጥላ ሥር በደካማ ሁኔታ መቅደሱን መሥራት፤ ዘካርያስ ግን አሕዛብ ሁሉ ከአይሁድ ጋር ለመጸለይ እንደሚመጡ አስቀድሞ መናገሩ።",
      groundRealitiesEn: "Dirty priestly garments stripped off, golden menorahs fed directly by two olive trees, thirty pieces of silver thrown to the potter in the house of the Lord.",
      groundRealitiesAm: "የረከሰው ልብስ ተወልቆ ንጹሕ ልብስ መልበስ፣ ሁለት የወይራ ዛፎች ለመብራቱ ዘይት ሲያቀርቡ፣ እና ሰላሳ ብር በቤተ መቅደስ ውስጥ ለሸክላ ሠሪ ሲጣል ማየት።"
    },
    theological: {
      titleEn: "Not by Might Nor by Power, But by My Spirit",
      titleAm: "በመንፈሴ እንጂ በኃይልና በብርታት አይደለም",
      covenantStageEn: "Priestly-Royal Union in the Branch (Tzemach)",
      covenantStageAm: "ካህንና ንጉሥ በአንድነት የሚሆኑበት የቅርንጫፉ ኪዳን",
      redemptiveThemeEn: "\"Not by might, nor by power, but by my Spirit, says the Lord of hosts\" (Zech 4:6). God removes the iniquity of the land in a single day.",
      redemptiveThemeAm: "“በመንፈሴ እንጂ በኃይልና በብርታት አይደለም፥ ይላል የሠራዊት ጌታ እግዚአብሔር” (ዘካ 4:6)፤ እግዚአብሔር የምድሪቱን በደል በአንድ ቀን ያስወግዳል።",
      christForeshadowingEn: "The King humble, riding on a donkey (Zech 9:9 / Matt 21:5); sold for 30 pieces of silver (11:12 / Matt 26:15); pierced and mourned (12:10 / John 19:37); the stricken Shepherd (13:7 / Matt 26:31).",
      christForeshadowingAm: "በአህያ ላይ ተቀምጦ በየዋህነት ወደ ኢየሩሳሌም የሚገባው ንጉሥ (ዘካ 9:9)፤ በ30 ብር የተሸጠው (11:12)፤ የወጉትን የሚያዩትና የሚያለቅሱለት (12:10)፤ የተመታው እረኛ (13:7)።",
      metaNarrativeAnchorEn: "Zechariah contains the most intense concentration of specific messianic prophecies in the Minor Prophets, constantly quoted in the Passion narratives.",
      metaNarrativeAnchorAm: "ትንቢተ ዘካርያስ በክርስቶስ ሕማማትና ሞት ወቅት የተፈጸሙ እጅግ በርካታ ትንቢቶችን የያዘ ድንቅ መጽሐፍ ነው።"
    },
    linguistic: [
      {
        original: "צֶמַח",
        translit: "Tzemach",
        language: "Hebrew",
        amharicTerm: "ቅርንጫፍ (ቁጥቋጦ)",
        literalMeaningEn: "The Branch / Sprout of royal Davidic lineage",
        literalMeaningAm: "ቅርንጫፍ (የሚበቅለው መሲሕ)",
        theologicalDepthEn: "The messianic title combining kingship and priesthood into one person who will build the true Temple of Yahweh.",
        theologicalDepthAm: "ንጉሥም ካህንም ሆኖ በእግዚአብሔር ዙፋን ላይ የሚቀመጠውና እውነተኛውን መቅደስ የሚሠራው መሲሕ።",
        canonicalUsageEn: "Zechariah 3:8, 6:12; Isaiah 4:2; Jeremiah 23:5.",
        canonicalUsageAm: "ዘካርያስ 3:8፤ 6:12፤ ኤርምያስ 23:5።"
      }
    ],
    psychological: {
      characterEn: "Zechariah & Joshua the Crowned High Priest",
      characterAm: "ዘካርያስና ዘውድ የተደፋለት ሊቀ ካህናት ኢያሱ",
      emotionalStateEn: "Mystical wonder in night visions, passionate encouragement against small beginnings, piercing sorrow over the Pierced One",
      emotionalStateAm: "በራእይ መደነቅ፣ የጥቂቱን ነገር ቀን ባለመናቅ በደስታ መሥራት፣ በተወጋው መሲሕ ላይ የታየ የልብ ስብራት",
      innerConflictEn: "Facing the mocking skepticism: \"Can this tiny rubble heap ever match Solomon?\" and hearing God promise: \"The hands of Zerubbabel have laid the foundation; his hands shall finish it!\"",
      innerConflictAm: "ሰዎች የሥራውን አነስተኝነት አይተው ሲሳለቁ፤ “የዘሩባቤል እጆች ይህን ቤት መሠረቱ፥ እጆቹም ደግሞ ይጨርሱታል” የሚለውን አጽናኝ ቃል መስማት።",
      existentialQuestionEn: "\"Who has despised the day of small things?\" (Zechariah 4:10)",
      existentialQuestionAm: "“የጥቂቱን ነገር ቀን የናቀ ማን ነው?” (ዘካ 4:10)",
      modernReflectionEn: "Never despise small beginnings; great spiritual victories are never won by human muscle or wealth, but quietly through the Spirit of God.",
      modernReflectionAm: "የጀመርከውን ጥቂት ነገር አትናቅ፤ የእግዚአብሔር ሥራ የሚከናወነው በራስህ ብልሃትና ገንዘብ ሳይሆን በመንፈስ ቅዱስ ኃይል ነው፤ ጽና።"
    }
  },

  // 39. MALACHI (ትንቢተ ሚልክያ)
  39: {
    id: 'canon-book-39',
    sceneId: 'book-39',
    bookNr: 39,
    chapterStart: 1,
    titleEn: "Malachi: The Covenant Messenger & The Sun of Righteousness",
    titleAm: "ትንቢተ ሚልክያስ፡ የቃል ኪዳኑ መልእክተኛና የጽድቅ ፀሐይ",
    eraEn: "The Close of the Old Testament Canon",
    eraAm: "የብሉይ ኪዳን የመጨረሻው ዘመን",
    geopolitical: {
      titleEn: "Yehud Province & Second Temple Jerusalem",
      titleAm: "የይሁዳ ምድርና ዳግመኛ የተሠራው የኢየሩሳሌም መቅደስ",
      empireEn: "Achaemenid Persian Dominance (Late Artaxerxes Era)",
      empireAm: "የፋርስ ኢምፓየር የመጨረሻ ዘመናት",
      timeframe: "c. 433 – 400 BC",
      eyewitnessPOVEn: "A rebuilt temple where priests yawn in boredom, offering blind and lame sheep on the altar that they wouldn’t dare present to the Persian governor; husbands divorcing the wives of their youth to marry pagan women.",
      eyewitnessPOVAm: "መቅደሱ ከተሠራ በኋላ ካህናቱ በአምልኮ ሰልችተው የታወረና አንካሳ እንስሳ በመሠዊያው ላይ ሲያቀርቡ፤ ሰዎች የልጅነት ሚስቶቻቸውን እየፈቱ ጣዖት አምላኪዎችን ሲያገቡ የታየበት መንፈሳዊ ድቀት።",
      historicalDynamicsEn: "Four centuries of silence begin after Malachi; cynicism setting in because the dramatic cosmic promises of the earlier prophets had not yet visibly arrived.",
      historicalDynamicsAm: "ከሚልክያስ በኋላ ለ400 ዓመታት የእግዚአብሔር ድምፅ የሚዘጋበት ዋዜማ፤ ሕዝቡ “እግዚአብሔር የት አለ?” እያሉ በመጠራጠርና በቸልተኝነት የተሞሉበት ወቅት።",
      groundRealitiesEn: "Snorting at the altar: \"What a weariness this is!\", robbing God of tithes and offerings, writing a book of remembrance for those who revere the Lord.",
      groundRealitiesAm: "“ይህ ምንኛ አድካሚ ነው!” እያሉ በመሠዊያው ላይ ማጉረምረም፣ በአሥራትና በበኩራት እግዚአብሔርን መስረቅ፣ እና እግዚአብሔርን ለሚፈሩ የተጻፈ የመታሰቢያ መጽሐፍ።"
    },
    theological: {
      titleEn: "God’s Unchanging Love Confronting Cynical Apathy",
      titleAm: "የእግዚአብሔር የማይለወጥ ፍቅርና የሕዝቡ መንፈሳዊ ግድየለሽነት",
      covenantStageEn: "Covenant with Levi & The Promised Messenger of the Covenant",
      covenantStageAm: "የሌዊ ኪዳንና የሚመጣው የቃል ኪዳኑ መልእክተኛ",
      redemptiveThemeEn: "\"I have loved you, says the Lord. But you say, How have you loved us?\" (Mal 1:2). \"For I the Lord do not change; therefore you, O children of Jacob, are not consumed\" (Mal 3:6).",
      redemptiveThemeAm: "“ወድጃችኋለሁ፥ ይላል እግዚአብሔር፤ እናንተ ግን፡ በምን ወደድኸን? ብላችኋል” (ሚል 1:2)፤ “እኔ እግዚአብሔር አልለወጥም፤ ስለዚህ እናንተ የያዕቆብ ልጆች ሆይ፥ አልጠፋችሁም” (ሚል 3:6)።",
      christForeshadowingEn: "The Messenger who prepares the way (John the Baptist, Mal 3:1 / 4:5); the Sun of Righteousness rising with healing in his wings (Mal 4:2 fulfilled in Christ).",
      christForeshadowingAm: "መንገድ ጠራጊው ኤልያስ (መጥምቁ ዮሐንስ፤ ሚል 3:1 / 4:5)፤ በክንፎቹ ፈውስን ይዞ የሚወጣው የጽድቅ ፀሐይ ኢየሱስ ክርስቶስ (ሚል 4:2)።",
      metaNarrativeAnchorEn: "The Old Testament closes on the word \"Curse\" (Cherem, 4:6), leaving the entire canon poised in breathless expectation for the Savior.",
      metaNarrativeAnchorAm: "ብሉይ ኪዳን የሚያበቃው “እርግማን” በሚል ቃል ነው (4:6)፤ ይህም መላው ዓለም የመሲሑን መምጣት በናፍቆት እንዲጠብቅ ያደርገዋል።"
    },
    linguistic: [
      {
        original: "שֶׁמֶשׁ צְדָקָה",
        translit: "Shemesh tzedakah",
        language: "Hebrew",
        amharicTerm: "የጽድቅ ፀሐይ",
        literalMeaningEn: "Sun of Righteousness",
        literalMeaningAm: "የጽድቅ ፀሐይ (ፈውስ በክንፎቿ ያለ)",
        theologicalDepthEn: "The messianic dawn that banishes spiritual darkness, dispenses moral healing, and causes the redeemed to leap for joy like calves freed from the stall.",
        theologicalDepthAm: "ጨለማን ሁሉ የሚያባርር፣ በክንፎቹ ፈውስን ይዞ የሚወጣና የዳኑትን በደስታ እንደ ጥጃ የሚያስፈነድቅ የመሲሑ መገለጥ።",
        canonicalUsageEn: "Malachi 4:2; Luke 1:78–79 (\"the dawn from on high shall visit us\").",
        canonicalUsageAm: "ሚልክያስ 4:2፤ ሉቃስ 1:78-79።"
      }
    ],
    psychological: {
      characterEn: "Malachi & The Skeptical Priests",
      characterAm: "ሚልክያስና ተጠራጣሪዎቹ ካህናት",
      emotionalStateEn: "Tender maternal patience of God, tragic weariness with half-hearted religion, blazing dawn hope",
      emotionalStateAm: "የእግዚአብሔር የማይለወጥ ታጋሽ ፍቅር፣ ግማሽ ልብ ባለው አምልኮ ማዘን፣ የጽድቅ ፀሐይ መውጣት ተስፋ",
      innerConflictEn: "God dialogue-debating with his children who have grown so spiritually numb they honestly don’t recognize their own callousness.",
      innerConflictAm: "እግዚአብሔር ልባቸው ደንዝዞ ኃጢአታቸው እንኳ ከማይታያቸው ልጆቹ ጋር በታጋሽነት ሲከራከር ማየት።",
      existentialQuestionEn: "\"But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall!\" (Mal 4:2)",
      existentialQuestionAm: "“ነገር ግን ስሜን ለምትፈሩት ለእናንተ የጽድቅ ፀሐይ ትወጣላችኋለች፥ ፈውስም በክንፎችዋ ውስጥ ይሆናል፤ እናንተም ትወጣላችሁ፥ እንደ ሰባም ጥጃ ትቦርቃላችሁ!” (ሚል 4:2)",
      modernReflectionEn: "Going through the motions of faith without heart devotion insults God; give Him your first and best, not your leftovers, and watch the windows of heaven open over your life.",
      modernReflectionAm: "ልብ የሌለበት ልማዳዊ አምልኮ ለእግዚአብሔር ክብር አይደለም፤ ለፈጣሪህ የተረፈህን ሳይሆን ምርጡንና የመጀመሪያውን ስጥ፤ የሰማይን መስኮት ከፍቶ ይባርክሃል።"
    }
  },

  // 40. MATTHEW (የማቴዎስ ወንጌል)
  40: {
    id: 'canon-book-40',
    sceneId: 'book-40',
    bookNr: 40,
    chapterStart: 1,
    titleEn: "Matthew: The Messianic King & The Gospel of the Kingdom",
    titleAm: "የማቴዎስ ወንጌል፡ መሲሑ ንጉሥና የመንግሥተ ሰማያት ወንጌል",
    eraEn: "The First Advent of the Messiah",
    eraAm: "የመሲሑ የመጀመሪያው ምጽዓት ዘመን",
    geopolitical: {
      titleEn: "Capernaum, the Sea of Galilee, Mount of Beatitudes & Jerusalem",
      titleAm: "ቅፍርናሆም፣ የገሊላ ባሕር፣ የተራራው ስብከትና ኢየሩሳሌም",
      empireEn: "Roman Empire (Herodian Tetrarchy & Pontius Pilate)",
      empireAm: "የሮም ኢምፓየርና የሄሮድስ አስተዳደር",
      timeframe: "c. 4 BC – AD 33",
      eyewitnessPOVEn: "A despised tax collector sitting at his toll booth hearing two words: \"Follow me\"—dropping everything to host a banquet with sinners, later recording five monumental discourses echoing Moses on Sinai.",
      eyewitnessPOVAm: "የተናቀው ቀራጭ ማቴዎስ በቀረጥ መስሪያ ቤቱ ተቀምጦ ሳለ “ተከተለኝ” የሚለውን የኢየሱስን ድምፅ ሲሰማ ሁሉን ጥሎ ሲከተል፤ ከሙሴ ይልቅ የሚበልጠውን የተራራውን ስብከት በጽሞና ሲመዘግብ።",
      historicalDynamicsEn: "Confronting Pharisaic legalism and Sadducean temple politics; structured around five major teaching blocks mirroring the five books of Moses (Torah).",
      historicalDynamicsAm: "ከፈሪሳውያንና ከሰዱቃውያን ጋር የተደረጉ ክርክሮች፤ እንደ አምስቱ የሙሴ መጻሕፍት በአምስት ታላላቅ የትምህርት ክፍሎች የተዋቀረ ወንጌል።",
      groundRealitiesEn: "Coins stamped with Caesar’s head, fishnets by Galilee, palm branches on the road into Jerusalem, an empty tomb with Roman guards shaking like dead men.",
      groundRealitiesAm: "የቄሳር መልክ ያለበት ሳንቲም፣ በገሊላ ባሕር የተጣለ መረብ፣ በሆሣዕና ቀን የተነጠፉ የዘንባባ ዝንጣፊዎች፣ እና የሮም ወታደሮች በመቃብሩ ፊት በፍርሃት ሲንቀጠቀጡ።"
    },
    theological: {
      titleEn: "The King Has Arrived: Fulfilling All Law and Prophets",
      titleAm: "ንጉሡ መጥቷል፡ ሕግንና ነቢያትን ሁሉ መፈጸም",
      covenantStageEn: "Fulfillment of Abrahamic & Davidic Royal Covenants",
      covenantStageAm: "የአብርሃምና የዳዊት የመንግሥት ቃል ኪዳን ፍጻሜ",
      redemptiveThemeEn: "Jesus is the promised Son of David and Son of Abraham (Matt 1:1) who fulfills over 60 Old Testament prophecies, inaugurating the Kingdom of Heaven.",
      redemptiveThemeAm: "ኢየሱስ የዳዊት ልጅና የአብርሃም ልጅ ነው፤ ከ60 በላይ የብሉይ ኪዳን ትንቢቶችን በመፈጸም የመንግሥተ ሰማያትን ዘመን በምድር ላይ አበሰረ።",
      christForeshadowingEn: "The supreme Teacher greater than Moses; Immanuel (\"God with us\", 1:23) who promises to be with his disciples until the end of the age (28:20).",
      christForeshadowingAm: "ከሙሴ የሚበልጠው መምህር፤ “አማኑኤል - እግዚአብሔር ከእኛ ጋር” (ማቴ 1:23)፤ እስከ ዓለም ፍጻሜ ከደቀ መዛሙርቱ ጋር እንደሚሆን ቃል የገባ ንጉሥ (28:20)።",
      metaNarrativeAnchorEn: "Matthew bridges the Old and New Testaments, opening with the royal genealogy of the Messiah and closing with the Great Commission to disciple all nations.",
      metaNarrativeAnchorAm: "ማቴዎስ ብሉይን ከአዲስ ኪዳን ጋር የሚያገናኝ ድልድይ ነው፤ በዳዊት የዘር ሐረግ ጀምሮ አሕዛብን ሁሉ ደቀ መዛሙርት ወደ ማድረግ ታላቅ ተልዕኮ ይመራል።"
    },
    linguistic: [
      {
        original: "Βασιλεία τῶν Οὐρανῶν",
        translit: "Basileia ton Ouranon",
        language: "Greek",
        amharicTerm: "መንግሥተ ሰማያት",
        literalMeaningEn: "Kingdom of Heaven / Reign of God",
        literalMeaningAm: "መንግሥተ ሰማያት (የእግዚአብሔር ንግሥና)",
        theologicalDepthEn: "Used 32 times in Matthew out of reverence for the divine name; God’s sovereign reign breaking into history through Jesus.",
        theologicalDepthAm: "በማቴዎስ ወንጌል 32 ጊዜ ተጠቅሷል፤ የእግዚአብሔር ዘላለማዊ ግዛት በክርስቶስ በኩል ወደ ሰው ልጆች መምጣቱን ያሳያል።",
        canonicalUsageEn: "Matthew 3:2, 4:17, 5:3, 13:24.",
        canonicalUsageAm: "ማቴዎስ 3:2፤ 4:17፤ 5:3።"
      }
    ],
    psychological: {
      characterEn: "Matthew & Simon Peter",
      characterAm: "ማቴዎስና ስምዖን ጴጥሮስ",
      emotionalStateEn: "Joy of redemption from shame, heart-shattering conviction in the Sermon on the Mount, awe before the resurrected King",
      emotionalStateAm: "ከቀራጭነት ውርደት የመዳን ደስታ፣ በተራራው ስብከት የተሰማ ጥልቅ መንፈሳዊ መነሣሳት፣ ትንሣኤውን አይቶ በፊቱ መስገድ",
      innerConflictEn: "Peter confessing: \"You are the Christ, the Son of the living God!\" and minutes later rebuking Jesus for talking about the Cross, hearing: \"Get behind me, Satan!\"",
      innerConflictAm: "ጴጥሮስ “አንተ ክርስቶስ የሕያው እግዚአብሔር ልጅ ነህ” ብሎ ከመሰከረ ከጥቂት ደቂቃዎች በኋላ፣ ኢየሱስ ስለ መስቀል ሞት ሲናገር ሊከለክለው ሞክሮ መገሠጹ።",
      existentialQuestionEn: "\"All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations!\" (Matt 28:18–19)",
      existentialQuestionAm: "“ሥልጣን ሁሉ በሰማይና በምድር ተሰጠኝ። እንግዲህ ሂዱና አሕዛብን ሁሉ... ደቀ መዛሙርት አድርጓቸው!” (ማቴ 28:18-19)",
      modernReflectionEn: "Jesus does not merely offer moral tips; He claims absolute allegiance as the cosmic King; to follow Him means surrendering your personal agenda to His sovereign commission.",
      modernReflectionAm: "ኢየሱስ ተራ መካሪ ሳይሆን የዓለም ሁሉ ጌታና ንጉሥ ነው፤ እርሱን መከተል ማለት ራስህን ለእርሱ ፍጹም ፈቃድና ተልዕኮ አሳልፈህ መስጠት ነው።"
    }
  },

  // 41. MARK (የማርቆስ ወንጌል)
  41: {
    id: 'canon-book-41',
    sceneId: 'book-41',
    bookNr: 41,
    chapterStart: 1,
    titleEn: "Mark: The Suffering Servant & The Urgent Son of God",
    titleAm: "የማርቆስ ወንጌል፡ መከራ ተቀባዩ አገልጋይና ታላቁ የእግዚአብሔር ልጅ",
    eraEn: "The Early Church & Roman Persecution",
    eraAm: "የጥንቷ ቤተክርስቲያንና የሮም ስደት ወቅት",
    geopolitical: {
      titleEn: "Galilean Roads, Wilderness Demoniacs & Golgotha",
      titleAm: "የገሊላ መንገዶች፣ የአጋንንት እስረኞችና የጎልጎታ መስቀል",
      empireEn: "Imperial Rome under Nero (Crucifixions & Persecution)",
      empireAm: "የሮም ቄሳር ኔሮ በክርስቲያኖች ላይ ስደት ባስነሣበት ዘመን",
      timeframe: "c. AD 55 – 65",
      eyewitnessPOVEn: "A fast-paced, breathless narrative using \"immediately\" over 40 times; Jesus striding into storms, touching rotting lepers, driving out legions of demons, moving like an unstoppable divine warrior toward a cross.",
      eyewitnessPOVAm: "“ወዲያውኑ” የሚለውን ቃል ከ40 ጊዜ በላይ በመጠቀም የተጻፈ ፈጣንና ኃይለኛ ወንጌል፤ ኢየሱስ ማዕበልን ሲገሥጽ፣ ለምጻሞችን ሲዳስስና አጋንንትን በሥልጣን እያባረረ ወደ መስቀሉ ሲገሰግስ።",
      historicalDynamicsEn: "Recorded from the eyewitness preaching of Simon Peter in Rome; written for suffering Gentile disciples facing martyrdom in Roman arenas.",
      historicalDynamicsAm: "በሮም በሰማዕትነት ሊሞቱ ለተዘጋጁ ክርስቲያኖች፣ ከሐዋርያው ጴጥሮስ ስብከት የተመዘገበ የወንጌል ታሪክ።",
      groundRealitiesEn: "Spit, mud, crowds crushing against doorways, sweat like drops of blood in Gethsemane, Roman soldiers casting lots.",
      groundRealitiesAm: "የሕዝቡ ግፊያ፣ በጭቃ የታወረውን ዓይን ማብራት፣ በጌቴሴማኒ የተንጠባጠበው የደም ላብ፣ እና የሮም ወታደሮች ልብሱን ሲካፈሉ።"
    },
    theological: {
      titleEn: "The Son of Man Came to Serve and Give His Life as a Ransom",
      titleAm: "የሰው ልጅ ሊያገለግልና ነፍሱን ቤዛ ሊሰጥ መጣ",
      covenantStageEn: "New Covenant Forged Through Sacrificial Suffering",
      covenantStageAm: "በመከራና በመስዋዕትነት የተመሠረተው አዲስ ኪዳን",
      redemptiveThemeEn: "\"For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many\" (Mark 10:45). The way of glory is the way of the Cross.",
      redemptiveThemeAm: "“የሰው ልጅም ሊያገለግል ነፍሱንም ለብዙዎች ቤዛ ሊሰጥ እንጂ እንዲያገለግሉት አልመጣም” (ማር 10:45)፤ ወደ ሰማያዊ ክብር የሚያደርሰው መንገድ የመስቀሉ መንገድ ነው።",
      christForeshadowingEn: "The Son of God recognized first not by theologians, but by demons who tremble (1:24) and finally by a Roman centurion at the Cross: \"Truly this man was the Son of God!\" (15:39).",
      christForeshadowingAm: "የእግዚአብሔር ልጅ መሆኑን በመስቀሉ ሥር የቆመው የሮም የመቶ አለቃ መስክሮለታል፡ “በእውነት ይህ ሰው የእግዚአብሔር ልጅ ነበረ!” (ማር 15:39)።",
      metaNarrativeAnchorEn: "Mark strips away all pretension: discipleship is not power or prestige, but taking up your cross and following Jesus.",
      metaNarrativeAnchorAm: "የማርቆስ ወንጌል ደቀ መዝሙር መሆን ማለት ዝናና ሥልጣን ሳይሆን፣ መስቀልን ተሸክሞ ኢየሱስን በታማኝነት መከተል እንደሆነ ያረጋግጣል።"
    },
    linguistic: [
      {
        original: "Εὐθύς",
        translit: "Euthus",
        language: "Greek",
        amharicTerm: "ወዲያውኑ (ያን ጊዜውኑ)",
        literalMeaningEn: "Immediately / Straightway / At once",
        literalMeaningAm: "ወዲያውኑ / ያን ጊዜውኑ",
        theologicalDepthEn: "Used 41 times; drives the urgent momentum of God’s decisive end-times rescue mission in Jesus.",
        theologicalDepthAm: "በማርቆስ ውስጥ 41 ጊዜ ተጠቅሷል፤ የእግዚአብሔር የማዳን ሥራ በክርስቶስ በኩል በአስቸኳይና በኃይል መፈጸሙን ያሳያል።",
        canonicalUsageEn: "Mark 1:10, 1:18, 1:21, 2:8.",
        canonicalUsageAm: "ማርቆስ 1:10፤ 1:18፤ 2:8።"
      },
      {
        original: "Λύτρον",
        translit: "Lytron",
        language: "Greek",
        amharicTerm: "ቤዛ (የመቤዠት ዋጋ)",
        literalMeaningEn: "Ransom / Price paid to emancipate a slave",
        literalMeaningAm: "ቤዛ / ባሪያን ነፃ ለማውጣት የሚከፈል ዋጋ",
        theologicalDepthEn: "Christ’s life offered as substitutionary payment to free enslaved humanity from sin, death, and demonic power.",
        theologicalDepthAm: "የሰው ልጅን ከኃጢአትና ከሰይጣን ባርነት ነፃ ለማውጣት ክርስቶስ ራሱን መሥዋዕት አድርጎ የከፈለው ፍጹም ዋጋ።",
        canonicalUsageEn: "Mark 10:45; 1 Timothy 2:6.",
        canonicalUsageAm: "ማርቆስ 10:45፤ 1 ጢሞቴዎስ 2:6።"
      }
    ],
    psychological: {
      characterEn: "Mark & Simon Peter",
      characterAm: "ማርቆስና ስምዖን ጴጥሮስ",
      emotionalStateEn: "Breathless urgency, terror in the storm (\"Do you not care that we are perishing?\"), profound awe at the Cross",
      emotionalStateAm: "የአስቸኳይነት ስሜት፣ በማዕበሉ ወቅት የተሰማ ፍርሃት (“ስንጠፋ አይገድህምን?”)፣ በመስቀሉ ፊት መደመም",
      innerConflictEn: "The disciples repeatedly misunderstanding Jesus’ mission: arguing about who is greatest immediately after Jesus predicts his horrific execution.",
      innerConflictAm: "ኢየሱስ ስለ መከራውና ስለ መስቀል ሞቱ በተናገረ ቁጥር፣ ደቀ መዛሙርቱ ማን እንደሚበልጥ በመካከላቸው ይከራከሩ የነበረበት መንፈሳዊ ድንቁርና።",
      existentialQuestionEn: "\"For what does it profit a man to gain the whole world and forfeit his soul?\" (Mark 8:36)",
      existentialQuestionAm: "“ሰውን ዓለሙን ሁሉ ቢያተርፍ ነፍሱንም ቢያጎድል ምን ይጠቅመዋል?” (ማር 8:36)",
      modernReflectionEn: "You cannot follow Jesus without embracing sacrifice; real spiritual greatness is found in stooping down to serve the very people others despise.",
      modernReflectionAm: "መስቀልን ሳትሸከም ክርስቶስን መከተል አትችልም፤ እውነተኛ ታላቅነት ያለው የተናቁትንና የተረሱትን በትሕትና በማገልገል ውስጥ ነው።"
    }
  },

  // 42. LUKE (የሉቃስ ወንጌል)
  42: {
    id: 'canon-book-42',
    sceneId: 'book-42',
    bookNr: 42,
    chapterStart: 1,
    titleEn: "Luke: The Savior of the Lost, Outcasts, Women & The Poor",
    titleAm: "የሉቃስ ወንጌል፡ የጠፉት፣ የተናቁትና የድሆች አዳኝ",
    eraEn: "The Gospel of Universal Compassion",
    eraAm: "የፍቅርና የይቅርታ ወንጌል ዘመን",
    geopolitical: {
      titleEn: "Nazareth Synagogue, Samaria, Jericho to Emmaus Road",
      titleAm: "የናዝሬት ምኵራብ፣ ሰማርያ፣ ኢያሪኮና የኤማሁስ መንገድ",
      empireEn: "Greco-Roman World (Pax Romana & Imperial Census of Augustus)",
      empireAm: "የሮም ኢምፓየርና የቄሳር አውግስጦስ የሕዝብ ቆጠራ ዘመን",
      timeframe: "c. 4 BC – AD 33 (Written c. AD 60)",
      eyewitnessPOVEn: "A Greek physician investigating all things accurately from eyewitnesses: Mary singing the Magnificat; shepherds in Bethlehem fields; Zacchaeus climbing a sycamore tree; the prodigal son welcomed with an embrace and robe.",
      eyewitnessPOVAm: "ሐኪሙ ሉቃስ እውነቱን በሚገባ መርምሮ ሲጽፍ፤ ማርያም በደስታ ስትዘምር፣ እረኞች በቤተልሔም መልአኩን ሲያዩ፣ ዘኬዎስ በሾላ ዛፍ ላይ ሲወጣ፣ እና የጠፋው ልጅ በአባቱ እቅፍ ሲገባ።",
      historicalDynamicsEn: "Social barriers demolished: welcoming women disciples, Samaritans, tax collectors, prostitutes, and lepers; relentless critique of greedy wealth.",
      historicalDynamicsAm: "ማኅበራዊ አድሏዊነት የተሰበረበት ወንጌል፤ ሴቶች፣ ሳምራውያን፣ ቀራጮችና ደሃዎች በክርስቶስ ፍቅር የታቀፉበት የታሪክ ምዕራፍ።",
      groundRealitiesEn: "Feeding animals in a stone manger, rubbing ears of grain on the Sabbath, the Roman cross carrying a dying thief into Paradise.",
      groundRealitiesAm: "ሕፃኑ በግርግም መተኛቱ፣ በሰንበት ቀን እሸት ማሸት፣ እና በመስቀል ላይ የነበረው ወንበዴ በዚያችው ቀን ወደ ገነት መግባቱ።"
    },
    theological: {
      titleEn: "The Son of Man Came to Seek and Save the Lost",
      titleAm: "የሰው ልጅ የጠፋውን ሊፈልግና ሊያድን መጥቷል",
      covenantStageEn: "Universal Scope of the Abrahamic Blessing to the Marginalized",
      covenantStageAm: "የአብርሃም በረከት ለተገፉትና ለተጣሉት ሁሉ ሲደርስ",
      redemptiveThemeEn: "\"For the Son of Man came to seek and to save the lost\" (Luke 19:10). Joy in heaven over one sinner who repents.",
      redemptiveThemeAm: "“የሰው ልጅ የጠፋውን ሊፈልግና ሊያድን መጥቷልና” (ሉቃ 19:10)፤ ንስሐ በሚገባ በአንድ ኃጢአተኛ በሰማይ ታላቅ ደስታ ይሆናል።",
      christForeshadowingEn: "The Great Physician who heals the brokenhearted, releases captives (Luke 4:18); the Risen Lord opening the Scriptures on the Emmaus road until hearts burn.",
      christForeshadowingAm: "ልባቸው የተሰበረውን የሚፈውስ፣ ለታሰሩት መፈታትን የሚያውጅ (ሉቃ 4:18)፤ በኤማሁስ መንገድ ልባቸው እስኪቃጠል ድረስ ቅዱሳት መጻሕፍትን የከፈተላቸው የከበረ ጌታ።",
      metaNarrativeAnchorEn: "Luke emphasizes the Holy Spirit, prayer, songs of joy, and the inclusion of the disenfranchised more than any other Gospel.",
      metaNarrativeAnchorAm: "የሉቃስ ወንጌል ለመንፈስ ቅዱስ፣ ለጸሎት፣ ለምስጋናና ለተገፉ ሰዎች ልዩ ትኩረት የሚሰጥ እጅግ ማራኪ ወንጌል ነው።"
    },
    linguistic: [
      {
        original: "Χάρις",
        translit: "Charis",
        language: "Greek",
        amharicTerm: "ጸጋ (መለኮታዊ ሞገስ)",
        literalMeaningEn: "Grace, favor, undeserved kindness",
        literalMeaningAm: "ጸጋ / ያልተገባ ነፃ ስጦታ",
        theologicalDepthEn: "God’s lavish goodness poured out on the undeserving, breaking all human social hierarchies.",
        theologicalDepthAm: "የሰው ልጅ በሥራው ሳይሆን በእግዚአብሔር ነፃ ቸርነት ብቻ ተቀባይነት የሚያገኝበት መለኮታዊ ፍቅር።",
        canonicalUsageEn: "Luke 1:30, 2:40, 2:52; Acts 4:33.",
        canonicalUsageAm: "ሉቃስ 1:30፤ 2:40፤ የሐዋ 4:33።"
      }
    ],
    psychological: {
      characterEn: "Luke the Physician & The Penitent Thief",
      characterAm: "ሐኪሙ ሉቃስና ንስሐ የገባው ወንበዴ",
      emotionalStateEn: "Overwhelming relief, joyful tears of forgiveness, radiant compassion, burning heart revelation",
      emotionalStateAm: "የይቅርታ ደስታ፣ ለተጨቆኑት የተሰማ ርኅራኄ፣ በኤማሁስ መንገድ የነደደው የልብ ፍቅር",
      innerConflictEn: "The prodigal son walking home rehearsing his speech: \"I am no longer worthy to be called your son; make me as one of your hired hands\"—and being silenced by father’s kisses.",
      innerConflictAm: "የጠፋው ልጅ “ከእንግዲህ ወዲህ ልጅህ ልባል አይገባኝም እንደ አንዱ እንደ ሞያተኛህ አድርገኝ” ብሎ ለመናገር ሲዘጋጅ፣ አባቱ ግን ሮጦ በአንገቱ ላይ ወድቆ ሲስማው።",
      existentialQuestionEn: "\"Jesus, remember me when you come into your kingdom! And he said to him, Truly, I say to you, today you will be with me in paradise!\" (Luke 23:42–43)",
      existentialQuestionAm: "“ኢየሱስ ሆይ፥ በመንግሥትህ በመጣህ ጊዜ አስበኝ! እርሱም፡ እውነት እልሃለሁ፥ ዛሬ ከእኔ ጋር በገነት ትሆናለህ አለው!” (ሉቃ 23:42-43)",
      modernReflectionEn: "No matter how dirty your past or how far you have wandered, you are never beyond the reach of grace; Jesus came precisely for people like you.",
      modernReflectionAm: "ያለፈው ሕይወትህ የቱንም ያህል የቆሸሸ ቢሆን ከእግዚአብሔር ጸጋ አያርቅህም፤ ኢየሱስ የመጣው ጻድቃንን ሳይሆን ኃጢአተኞችን ወደ ንስሐ ሊጠራ ነው።"
    }
  },

  // 43. JOHN (የዮሐንስ ወንጌል)
  43: {
    id: 'canon-book-43',
    sceneId: 'book-43',
    bookNr: 43,
    chapterStart: 1,
    titleEn: "John: The Incarnate Word, The Seven Signs & The Eternal \"I AM\"",
    titleAm: "የዮሐንስ ወንጌል፡ ሥጋ የለበሰው ቃል፣ ሰባቱ ምልክቶችና ዘላለማዊው “እኔ ነኝ”",
    eraEn: "The Eternal Word Entering Time",
    eraAm: "ዘላለማዊው ቃል ወደ ታሪክ የገባበት ዘመን",
    geopolitical: {
      titleEn: "Cana in Galilee, Jacob’s Well at Sychar, Bethesda Pool & Jerusalem Temple",
      titleAm: "የገሊላ ቃና፣ በሲካር የያዕቆብ የውኃ ጉድጓድ፣ ቤተ ሳይዳና ኢየሩሳሌም",
      empireEn: "Roman Empire & The Fragmented Judean Religious Establishment",
      empireAm: "የሮም ኢምፓየርና የአይሁድ የሃይማኖት መሪዎች",
      timeframe: "c. 4 BC – AD 33 (Written c. AD 85–90)",
      eyewitnessPOVEn: "The disciple whom Jesus loved leaning back on Christ’s chest at the Last Supper; water turning to choice wine; a man blind from birth washing in Siloam; Lazarus stepping out of a tomb bound in graveclothes after four days.",
      eyewitnessPOVAm: "በጌታ ደረት ላይ ተደግፎ የነበረው ፍቁረ እግዚእ ዮሐንስ፤ ውኃው ወደ ምርጥ ወይን ሲለወጥ፣ አልዓዛር በመቃብር አራት ቀን ከቆየ በኋላ በሥልጣኑ ቃል ሕያው ሆኖ ሲወጣ ያየው አስደናቂ ምስክርነት።",
      historicalDynamicsEn: "Deep philosophical and theological dialogues confronting Greco-Roman Gnosticism and Jewish rejection; seven cosmic signs demonstrating Jesus’ divinity.",
      historicalDynamicsAm: "ኢየሱስ የእግዚአብሔር ልጅ መሆኑን የሚያረጋግጡ ሰባት ታላላቅ ተአምራት (ምልክቶች)፤ እና ሰባቱ ታላላቅ “እኔ ነኝ” የሚሉ መለኮታዊ አዋጆች።",
      groundRealitiesEn: "Stone water jars holding 30 gallons each, mud made with spittle applied to blind eyes, the spear piercing Christ’s side bringing out blood and water.",
      groundRealitiesAm: "የድንጋይ ጋኖች፣ በምራቅ ጭቃ አብክቶ በዓይኑ ላይ መቀባት፣ እና በመስቀል ላይ የሮም ወታደር ጎኑን በጦር ሲወጋው ደምና ውኃ ሲወጣ።"
    },
    theological: {
      titleEn: "The Word Became Flesh and Dwelt Among Us",
      titleAm: "ቃል ሥጋ ሆነ፥ በመካከላችንም አደረ",
      covenantStageEn: "New Covenant Life: Eternal Intimacy with the Father through the Son",
      covenantStageAm: "የዘላለም ሕይወትና ከአብና ከወልድ ጋር የሚደረግ ኅብረት",
      redemptiveThemeEn: "\"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life\" (John 3:16).",
      redemptiveThemeAm: "“በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና” (ዮሐ 3:16)።",
      christForeshadowingEn: "The Divine Logos: \"In the beginning was the Word, and the Word was with God, and the Word was God\" (John 1:1); The Bread of Life, Light of the World, Resurrection and Life.",
      christForeshadowingAm: "ዘላለማዊው ቃል፡ “በመጀመሪያ ቃል ነበረ፥ ቃልም በእግዚአብሔር ዘንድ ነበረ፥ ቃልም እግዚአብሔር ነበረ” (ዮሐ 1:1)፤ የሕይወት እንጀራ፣ የዓለም ብርሃን፣ ትንሣኤና ሕይወት።",
      metaNarrativeAnchorEn: "Written specifically \"so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name\" (John 20:31).",
      metaNarrativeAnchorAm: "የተጻፈበት ዋና ዓላማ፡ “ኢየሱስ እርሱ ክርስቶስ የእግዚአብሔር ልጅ እንደ ሆነ ታምኑ ዘንድ፥ አምናችሁም በስሙ ሕይወት ይሆንላችሁ ዘንድ” (ዮሐ 20:31)።"
    },
    linguistic: [
      {
        original: "Λόγος",
        translit: "Logos",
        language: "Greek",
        amharicTerm: "ቃል (ሎጎስ)",
        literalMeaningEn: "The Word / Divine Reason / Cosmic Blueprint",
        literalMeaningAm: "ቃል / ዘላለማዊው የእግዚአብሔር ቃል",
        theologicalDepthEn: "The eternal Second Person of the Trinity through whom all things were made, now tabernacling in human flesh.",
        theologicalDepthAm: "ዓለም ሁሉ በእርሱ የተፈጠረበት፣ በመጨረሻም ሰው ሆኖ በማዕከላችን ያደረው መለኮታዊ ቃል (ወልድ)።",
        canonicalUsageEn: "John 1:1, 1:14; 1 John 1:1; Revelation 19:13.",
        canonicalUsageAm: "ዮሐንስ 1:1፤ 1:14፤ ራእይ 19:13።"
      },
      {
        original: "Ἐγώ Εἰμι",
        translit: "Ego Eimi",
        language: "Greek",
        amharicTerm: "እኔ ነኝ",
        literalMeaningEn: "I AM",
        literalMeaningAm: "እኔ ነኝ (ያህዌ)",
        theologicalDepthEn: "Jesus directly takes the divine burning bush name of Exodus 3:14: \"Before Abraham was, I AM\" (John 8:58).",
        theologicalDepthAm: "ኢየሱስ በዘጸአት 3:14 የተገለጠውን የአምላክን ስም ለራሱ ወስዶ “አብርሃም ሳይወለድ እኔ ነኝ” በማለት ራሱን ገለጠ።",
        canonicalUsageEn: "John 6:35, 8:12, 8:58, 10:11, 11:25, 14:6, 15:1.",
        canonicalUsageAm: "ዮሐንስ 6:35፤ 8:58፤ 11:25፤ 14:6።"
      }
    ],
    psychological: {
      characterEn: "John the Beloved & Thomas",
      characterAm: "ፍቁረ እግዚእ ዮሐንስና ቶማስ",
      emotionalStateEn: "Ecstatic intimacy with Jesus, existential thirst quenched, awe before the pierced hands and side",
      emotionalStateAm: "ከጌታ ጋር የነበረ ጥልቅ ፍቅር፣ የነፍስ ጥም መርካት፣ በተወጋው እጁና ጎኑ ፊት የተሰማ ታላቅ እምነት",
      innerConflictEn: "Thomas declaring: \"Unless I see in his hands the mark of the nails... I will never believe!\" and falling to his knees: \"My Lord and my God!\"",
      innerConflictAm: "ቶማስ “የምስማሩን ምልክት በእጆቹ ካላየሁ ጣቴንም በጎኑ ካላገባሁ አላምንም” ካለ በኋላ፣ ትንሣኤውን አይቶ “ጌታዬ አምላኬም!” ብሎ መስገዱ።",
      existentialQuestionEn: "\"I am the way, and the truth, and the life. No one comes to the Father except through me!\" (John 14:6)",
      existentialQuestionAm: "“እኔ መንገድና እውነት ሕይወትም ነኝ፤ በእኔ በቀር ወደ አብ የሚመጣ የለም!” (ዮሐ 14:6)",
      modernReflectionEn: "Truth is not an abstract philosophy; Truth is a Person—Jesus Christ; when you know Him, your existential thirst is quenched forever.",
      modernReflectionAm: "እውነት ረቂቅ ፍልስፍና ሳይሆን አካል ያለው ኢየሱስ ክርስቶስ ነው፤ እርሱን ያገኘ የዘላለምን ሕይወት አግኝቷል።"
    }
  },

  // 44. ACTS (የሐዋርያት ሥራ)
  44: {
    id: 'canon-book-44',
    sceneId: 'book-44',
    bookNr: 44,
    chapterStart: 1,
    titleEn: "Acts: The Holy Spirit Unleashed & The Unstoppable Global Mission",
    titleAm: "የሐዋርያት ሥራ፡ የመንፈስ ቅዱስ ኃይልና የማይገታው ዓለም አቀፍ ተልዕኮ",
    eraEn: "The Apostolic Explosion",
    eraAm: "የሐዋርያት ተልዕኮና የቤተክርስቲያን ምሥረታ ዘመን",
    geopolitical: {
      titleEn: "Jerusalem, Judea, Samaria to Antioch, Athens, and Rome",
      titleAm: "ከኢየሩሳሌም፣ ከይሁዳና ከሰማርያ እስከ አንጾኪያ፣ አቴናና ሮም",
      empireEn: "Roman Empire (From Tiberius to Nero)",
      empireAm: "የሮም ኢምፓየር (ከጢባርዮስ እስከ ኔሮ ድረስ)",
      timeframe: "c. AD 30 – 62",
      eyewitnessPOVEn: "Tongues of fire rushing with hurricane wind on Pentecost; 3,000 baptized in a single day; Peter’s shadow healing the sick; Paul blinded on Damascus road by radiant light; shipwrecked in Malta biting an adder.",
      eyewitnessPOVAm: "በበዓለ ሃምሳ እንደ እሳት ነበልባል የወረደው መንፈስ ቅዱስ፤ በአንድ ቀን 3,000 ሰዎች ሲጠመቁ፤ የጴጥሮስ ጥላ ሕሙማንን ሲፈውስ፤ እና ሳኦል በደማስቆ መንገድ በብርሃን ተመቶ ወደ ታላቁ ሐዋርያነት ሲለወጥ።",
      historicalDynamicsEn: "The Gospel bursting out of Jewish ethnic boundaries: Ethiopian eunuch baptized, Cornelius the Roman centurion receiving the Spirit, Council of Jerusalem welcoming Gentiles without circumcision.",
      historicalDynamicsAm: "ወንጌል የዘርና የአገር ድንበሮችን ሰብሮ የወጣበት ታሪክ፡ የኢትዮጵያዊው ጃንደረባ መጠመቅ፣ ቆርኔሌዎስ መንፈስ ቅዱስን መቀበሉና አሕዛብ ያለ ግርዛት ወደ እምነት መግባታቸው።",
      groundRealitiesEn: "Breaking bread from house to house, Stephen stoned to death with radiant face, prison chains falling off at midnight while singing.",
      groundRealitiesAm: "ከቤት ወደ ቤት እንጀራ መቁረስ፣ እስጢፋኖስ በድንጋይ ሲወገር ፊቱ እንደ መልአክ ማብራቱ፣ እና ጳውሎስና ሲላስ በወህኒ ሲዘምሩ የመሬት መንቀጥቀጥ ሰንሰለታቸውን ሲፈታው።"
    },
    theological: {
      titleEn: "The Risen Christ Reigning Through His Holy Spirit",
      titleAm: "ትንሣኤ ያገኘው ክርስቶስ በመንፈስ ቅዱስ ሲሠራ",
      covenantStageEn: "New Covenant Expanded to All Nations (Gentile Ingathering)",
      covenantStageAm: "አዲሱ ኪዳን ለአሕዛብ ሁሉ የተሰበከበትና የተስፋፋበት ዘመን",
      redemptiveThemeEn: "\"You will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth\" (Acts 1:8).",
      redemptiveThemeAm: "“መንፈስ ቅዱስ በእናንተ ላይ በወረደ ጊዜ ኃይልን ትቀበላላችሁ፥ በኢየሩሳሌምም በይሁዳም ሁሉ በሰማርያም እስከ ምድር ዳርም ድረስ ምስክሮቼ ትሆናላችሁ” (የሐዋ 1:8)።",
      christForeshadowingEn: "The Ascended Lord enthroned at the right hand of God, directing world events, rescuing his messengers, and adding daily those who are being saved.",
      christForeshadowingAm: "በእግዚአብሔር ቀኝ የተቀመጠው፣ እስጢፋኖስ ሲወገር በዙፋኑ ላይ ቆሞ የተቀበለውና ዓለም አቀፉን ተልዕኮ የሚመራው ሕያው ጌታ።",
      metaNarrativeAnchorEn: "Acts ends open-ended with Paul in Rome: \"proclaiming the kingdom of God with all boldness and without hindrance\" (28:31)—the mission continues in every generation.",
      metaNarrativeAnchorAm: "የሐዋርያት ሥራ የሚያበቃው ያለ ምንም ከልካይ ጳውሎስ የእግዚአብሔርን መንግሥት በሮም በድፍረት በመስበኩ ነው (28:31)፤ ይህም ተልዕኮ ዛሬም ይቀጥላል።"
    },
    linguistic: [
      {
        original: "Δύναμις",
        translit: "Dynamis",
        language: "Greek",
        amharicTerm: "ኃይል (ሥልጣን)",
        literalMeaningEn: "Power, divine supernatural energy, miraculous might",
        literalMeaningAm: "መለኮታዊ ኃይል / ብርታት",
        theologicalDepthEn: "Root of \"dynamite\"; not human political force, but the explosive resurrection energy of the Spirit transforming cowards into bold martyrs.",
        theologicalDepthAm: "የሰው ድካምን የሚያሸንፍና ፈሪዎችን ወደ ደፋር ሰማዕትነት የሚቀይር የመንፈስ ቅዱስ ተአምራዊ ኃይል።",
        canonicalUsageEn: "Acts 1:8, 4:33, 6:8; Romans 1:16.",
        canonicalUsageAm: "የሐዋርያት ሥራ 1:8፤ 4:33፤ ሮሜ 1:16።"
      },
      {
        original: "Παρρησία",
        translit: "Parrhesia",
        language: "Greek",
        amharicTerm: "ድፍረት (ግልጽነት)",
        literalMeaningEn: "Boldness, outspoken courage, fearless plain speech",
        literalMeaningAm: "ያለ ፍርሃት በድፍረት መናገር",
        theologicalDepthEn: "The defining characteristic of the early apostles before hostile tribunals: unshakeable holy boldness.",
        theologicalDepthAm: "በገዢዎችና በሸንጎዎች ፊት እውነትን ያለ ፍርሃት ለመመስከር የተሰጠ ታላቅ መንፈሳዊ ድፍረት።",
        canonicalUsageEn: "Acts 4:13, 4:29, 4:31, 28:31.",
        canonicalUsageAm: "የሐዋርያት ሥራ 4:13፤ 4:31፤ 28:31።"
      }
    ],
    psychological: {
      characterEn: "Peter, Paul & Philip the Evangelist",
      characterAm: "ጴጥሮስ፣ ጳውሎስና ወንጌላዊው ፊልጶስ",
      emotionalStateEn: "Holy audacity, joy under beatings, tears of apostolic farewell, unquenchable missionary fire",
      emotionalStateAm: "መንፈሳዊ ድፍረት፣ ስለ ጌታ ስም መገረፍ ያስገኘው ክብርና ደስታ፣ ለነፍሳት የነደደ ታላቅ ፍቅር",
      innerConflictEn: "Peter hesitating before the sheet of unclean animals: \"Not so, Lord!\" until learning that God calls no human unclean.",
      innerConflictAm: "ጴጥሮስ በራእይ የታዩትን ርኩስ እንስሳት “አይሆንም ጌታ ሆይ” ብሎ ሲከራከር፤ እግዚአብሔር አሕዛብን ሁሉ በክርስቶስ እንዳነጻቸው የተማረው ታላቅ ትምህርት።",
      existentialQuestionEn: "\"We must obey God rather than men!\" (Acts 5:29)",
      existentialQuestionAm: "“ከሰው ይልቅ ለእግዚአብሔር ልንታዘዝ ይገባል!” (የሐዋ 5:29)",
      modernReflectionEn: "The church was not born in comfort, but in fire and prayer; when you step out in the Spirit’s power, no government, opposition, or prison can stop God’s purpose.",
      modernReflectionAm: "ቤተክርስቲያን የተወለደችው በምቾት ሳይሆን በእሳትና በጸሎት ውስጥ ነው፤ በመንፈስ ቅዱስ ኃይል ስትራመድ የትኛውም ተቃውሞ የእግዚአብሔርን ዓላማ ሊያስቆመው አይችልም።"
    }
  },

  // 45. ROMANS (ወደ ሮሜ ሰዎች)
  45: {
    id: 'canon-book-45',
    sceneId: 'book-45',
    bookNr: 45,
    chapterStart: 1,
    titleEn: "Romans: The Righteousness of God, Justification & Cosmic Hope",
    titleAm: "ወደ ሮሜ ሰዎች፡ የእግዚአብሔር ጽድቅ፣ በእምነት መጽደቅና ተስፋ",
    eraEn: "Apostolic Theological Synthesis",
    eraAm: "የሐዋርያት ጥልቅ ነገረ መለኮት የተብራራበት ዘመን",
    geopolitical: {
      titleEn: "Corinth to the Imperial Capital Rome & Spain Frontier",
      titleAm: "ከቆሮንቶስ ወደ ሮም ዋና ከተማና ወደ እስፓንያ የታሰበ ተልዕኮ",
      empireEn: "Imperial Rome under Nero (Pax Romana)",
      empireAm: "የሮም ኢምፓየር (ኔሮ በነገሠበት የመጀመሪያ ዓመታት)",
      timeframe: "c. AD 57",
      eyewitnessPOVEn: "A seasoned apostle dictating his masterwork in a bustling Greek port; untangling centuries of Jewish-Gentile friction; showing that all have sinned, the Cross justifies the ungodly, and nothing can separate us from God’s love.",
      eyewitnessPOVAm: "ሐዋርያው ጳውሎስ በአይሁድና በአሕዛብ አማኞች መካከል ያለውን ልዩነት በወንጌል አንድነት ሲያስተካክል፤ ሁሉም ኃጢአት እንደሠሩ፣ በክርስቶስ ደም በኩል በጸጋ እንደሚጸድቁና ከእግዚአብሔር ፍቅር የሚለየን እንደሌለ ሲመሰክር።",
      historicalDynamicsEn: "Emperor Claudius had expelled Jews from Rome (AD 49); when they returned, Gentile Christians led the house churches, causing cultural tension over kosher food and Sabbath days.",
      historicalDynamicsAm: "የሮም ንጉሥ ቀላውዴዎስ አይሁድን ከሮም አባርሮ ከቆየ በኋላ ሲመለሱ በአብያተ ክርስቲያናት ውስጥ የተፈጠረውን የባህልና የሕግ ውጥረት በወንጌል ፍቅር ያረገበ መልእክት።",
      groundRealitiesEn: "Tertius writing down Paul’s dictation, Phoebe carrying the precious parchment roll across the Adriatic Sea tucked into her cloak.",
      groundRealitiesAm: "ተርጥዮስ ቃሉን ሲጽፍ፣ እና ፌቤን ይህንን ውድ የብራና ጥቅልል በባሕር አቋርጣ ወደ ሮም በደኅና ስታደርስ።"
    },
    theological: {
      titleEn: "Justification by Faith and the Unbreakable Chain of Grace",
      titleAm: "በእምነት መጽደቅና የማይበጠሰው የጸጋ ሰንሰለት",
      covenantStageEn: "Abrahamic Faith Realized Globally in the New Covenant",
      covenantStageAm: "በአብርሃም የታየው የእምነት ጽድቅ በዓለም ዙሪያ ለአማኞች ሁሉ ሲሰጥ",
      redemptiveThemeEn: "\"For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes\" (Rom 1:16). God justifies the ungodly by grace through faith.",
      redemptiveThemeAm: "“በወንጌል አላፍርምና፤ አስቀድሞ ለአይሁዳዊ ደግሞም ለግሪክ ሰው፥ ለሚያምኑ ሁሉ የእግዚአብሔር ኃይል ለማዳን ነውና” (ሮሜ 1:16)፤ ሰው የሚጸድቀው በሕግ ሥራ ሳይሆን በክርስቶስ በማመን ነው።",
      christForeshadowingEn: "The Second Adam whose obedience reverses the death brought by the first Adam (Rom 5); the Righteousness of God manifested at the Cross (Rom 3:21–26).",
      christForeshadowingAm: "የመጀመሪያው አዳም ያመጣውን የሞት ፍርድ የታዘዘው ሁለተኛው አዳም ክርስቶስ ሻረው (ሮሜ 5)፤ እርሱ የመሥዋዕት ማስተስረያ ሆኖ ቀረበ።",
      metaNarrativeAnchorEn: "Romans is universally recognized as the theological cathedral of the Christian faith, sparking every major church reformation in history.",
      metaNarrativeAnchorAm: "የሮሜ መልእክት የክርስቲያን እምነት ታላቅ የነገረ መለኮት ማማ ነው፤ በታሪክ ውስጥ የተነሱ ታላላቅ ተሃድሶዎች ሁሉ መነሻው ይህ መጽሐፍ ነው።"
    },
    linguistic: [
      {
        original: "Δικαιοσύνη",
        translit: "Dikaiosyne",
        language: "Greek",
        amharicTerm: "ጽድቅ (መጽደቅ)",
        literalMeaningEn: "Righteousness / Just legal standing",
        literalMeaningAm: "ጽድቅ / በእግዚአብሔር ፊት ንጹሕ ሆኖ መቆጠር",
        theologicalDepthEn: "God’s own covenant faithfulness and the gift of righteous standing imputed to sinners who trust in Jesus.",
        theologicalDepthAm: "የእግዚአብሔር ጽድቅ፤ በክርስቶስ የሚያምኑ ኃጢአተኞች ያለ ምንም ክፍያ በነፃ ጻድቃን ተብለው የሚታወጁበት ጸጋ።",
        canonicalUsageEn: "Romans 1:17, 3:21–22, 5:17.",
        canonicalUsageAm: "ሮሜ 1:17፤ 3:21-22፤ 5:17።"
      },
      {
        original: "Ἱλαστήριον",
        translit: "Hilasterion",
        language: "Greek",
        amharicTerm: "ማስተስረያ (የስርየት መክደኛ)",
        literalMeaningEn: "Mercy seat / Propitiation",
        literalMeaningAm: "የስርየት መክደኛ / የኃጢአት ማስተስረያ",
        theologicalDepthEn: "Jesus is the true Ark cover where blood is sprinkled, satisfying holy justice and unleashing forgiving mercy.",
        theologicalDepthAm: "በቀደመው መቅደስ በታቦቱ ላይ ደም እንደሚረጭበት የስርየት መክደኛ፣ ክርስቶስ ስለ ኃጢአታችን የፈሰሰ እውነተኛ ማስተስረያ ሆነ።",
        canonicalUsageEn: "Romans 3:25; Hebrews 9:5.",
        canonicalUsageAm: "ሮሜ 3:25፤ ዕብራውያን 9:5።"
      }
    ],
    psychological: {
      characterEn: "Paul & Phoebe the Deaconess",
      characterAm: "ጳውሎስና አገልጋይዋ ፌቤን",
      emotionalStateEn: "Intellectual exhilaration, deep agony over unbelieving kin (Rom 9), triumphant doxological joy (Rom 8:38)",
      emotionalStateAm: "የነገረ መለኮት ጥልቀት ደስታ፣ ስለ ወገኖቹ የተሰማው ልብ ሰባሪ ኀዘን (ሮሜ 9)፣ የማያወላውል የታላቅ ፍቅር መተማመን (ሮሜ 8)",
      innerConflictEn: "Paul groaning in Romans 7: \"Wretched man that I am! Who will deliver me from this body of death?\" answered by Romans 8: \"Thanks be to God through Jesus Christ our Lord!\"",
      innerConflictAm: "በውስጥ ትግል ተውጦ “እኔ ምንኛ ጎስቋላ ሰው ነኝ! ከዚህ ለሞት ከተሰጠ ሰውነት ማን ያድነኛል?” ካለ በኋላ፣ “በኢየሱስ ክርስቶስ ለእግዚአብሔር ምስጋና ይሁን!” ብሎ ማረፉ።",
      existentialQuestionEn: "\"If God is for us, who can be against us? Who shall separate us from the love of Christ?\" (Rom 8:31, 35)",
      existentialQuestionAm: "“እግዚአብሔር ከእኛ ጋር ከሆነ ማን ይቃወመናል? ከክርስቶስ ፍቅር ማን ይለየናል?” (ሮሜ 8:31, 35)",
      modernReflectionEn: "Your performance does not determine God’s love; if you are in Christ, there is now no condemnation, and nothing in life or death can ever snatch you from His grip.",
      modernReflectionAm: "የእግዚአብሔር ፍቅር በሥራህ ወይም በድካምህ ላይ የተመሠረተ አይደለም፤ በክርስቶስ ከሆንክ አሁን ምንም ኩነኔ የለብህም፤ ከፍቅሩም የሚለይህ ምንም ነገር የለም።"
    }
  },

  // 46. 1 CORINTHIANS (1ኛ ወደ ቆሮንቶስ ሰዎች)
  46: {
    id: 'canon-book-46',
    sceneId: 'book-46',
    bookNr: 46,
    chapterStart: 1,
    titleEn: "1 Corinthians: Cross-Centered Wisdom, Orderly Worship & Resurrection",
    titleAm: "1 ቆሮንቶስ፡ የመስቀሉ ጥበብ፣ የቀና አምልኮና የትንሣኤ እውነት",
    eraEn: "Apostolic Pastoral Care to Urban Churches",
    eraAm: "በከተማ ለነበረች ቤተክርስቲያን የተሰጠ የሐዋርያዊ እንክብካቤ ዘመን",
    geopolitical: {
      titleEn: "The Isthmus of Corinth & The Aegean Seaport",
      titleAm: "የቆሮንቶስ የንግድ ወደብና ከተማ",
      empireEn: "Cosmopolitan Roman Colony of Achaia",
      empireAm: "የሮም ግዛትና የቆሮንቶስ የንግድ ማዕከል",
      timeframe: "c. AD 54 – 55",
      eyewitnessPOVEn: "A glamorous, hedonistic crossroads city filled with sailors, prostitutes, and philosophers; church members suing each other, getting drunk at the Lord’s table, and boasting about speaking in tongues while arguing over party leaders.",
      eyewitnessPOVAm: "በዝሙትና በዓለማዊ ፍልስፍና በታወቀችው በቆሮንቶስ ከተማ አማኞች እርስ በርሳቸው ሲከፋፈሉ፣ በመንፈሳዊ ስጦታዎች ሲመኩና በፍርድ ቤት ሲካሰሱ፣ ጳውሎስ የመስቀሉን ቃል ይዞ ሲያስተካክላቸው።",
      historicalDynamicsEn: "Confronting secular Hellenistic culture that equated public rhetorical eloquence with spiritual maturity; answering a list of specific pastoral questions sent by the church.",
      historicalDynamicsAm: "የግሪክ ፍልስፍናና ንግግር ብልሃት እውነተኛ መንፈሳዊነትን እንደማይተካ ማሳየት፤ ስለ ጋብቻ፣ ስለ ጣዖት መሥዋዕት፣ ስለ ጸጋ ስጦታዎችና ስለ ትንሣኤ የተሰጡ መልሶች።",
      groundRealitiesEn: "Meat sacrificed to idols sold in the butcher market, veil coverings, communion bread snatched before the poor arrive, the trumpet blast of the resurrection.",
      groundRealitiesAm: "ለጣዖት የተሠዋ ሥጋ በገበያ ሲሸጥ፣ በጌታ ራት ማዕድ ላይ ድሆች ሲረሱ፣ እና በመጨረሻው መለከት ሙታን የማይበሰብሱ ሆነው የሚነሱበት ተስፋ።"
    },
    theological: {
      titleEn: "The Folly of the Cross Overcomes Human Pride",
      titleAm: "የመስቀሉ ሞኝነት የሰውን ትዕቢት ሲያሸንፍ",
      covenantStageEn: "One Body in Christ Unified by Love",
      covenantStageAm: "በፍቅር የተሳሰረ አንድ የክርስቶስ አካል",
      redemptiveThemeEn: "\"The word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God\" (1 Cor 1:18). Love (Agape) is the more excellent way.",
      redemptiveThemeAm: "“የመስቀሉ ቃል ለሚጠፉት ሞኝነት፥ ለእኛ ለምንድን ግን የእግዚአብሔር ኃይል ነውና” (1 ቆሮ 1:18)፤ ስጦታዎች ሁሉ ቢያልፉ ፍቅር ለዘላለም ትኖራለች።",
      christForeshadowingEn: "The wisdom of God and the power of God (1:24); the Passover Lamb sacrificed for us (5:7); the Firstfruits of those who have fallen asleep guaranteeing our bodily resurrection (1 Cor 15).",
      christForeshadowingAm: "የእግዚአብሔር ጥበብና ኃይል የሆነው ክርስቶስ (1:24)፤ ስለ እኛ የታረደው ፋሲካችን (5:7)፤ ከሙታን የተነሣው የበኵር ትንሣኤ (1 ቆሮ 15)።",
      metaNarrativeAnchorEn: "1 Corinthians 13 (The Hymn to Love) and 1 Corinthians 15 (The Resurrection Chapter) are two of the greatest peaks in world literature.",
      metaNarrativeAnchorAm: "1 ቆሮንቶስ 13 (የፍቅር ምዕራፍ) እና 1 ቆሮንቶስ 15 (የትንሣኤ ምዕራፍ) በመላው ቅዱሳት መጻሕፍት ውስጥ ወደር የሌላቸው ታላላቅ ክፍሎች ናቸው።"
    },
    linguistic: [
      {
        original: "Ἀγάπη",
        translit: "Agape",
        language: "Greek",
        amharicTerm: "ፍቅር (አጋፔ)",
        literalMeaningEn: "Self-sacrificial, unconditional, covenantal love",
        literalMeaningAm: "ራስን አሳልፎ የሚሰጥ ንጹሕ መለኮታዊ ፍቅር",
        theologicalDepthEn: "Love that does not seek its own, is patient and kind, and never fails; the supreme marker of authentic spirituality.",
        theologicalDepthAm: "የማይቀና፣ የማይመካ፣ የራሱን የማይፈልግና ለዘላለም የማይወድቅ እውነተኛ መንፈሳዊ ፍቅር።",
        canonicalUsageEn: "1 Corinthians 13:1–13; 1 John 4:8.",
        canonicalUsageAm: "1 ቆሮንቶስ 13፤ 1 ዮሐንስ 4:8።"
      },
      {
        original: "Μαράνα ثά",
        translit: "Maranatha",
        language: "Aramaic",
        amharicTerm: "ማራናታ (ጌታችን ሆይ ና)",
        literalMeaningEn: "Our Lord, come!",
        literalMeaningAm: "ጌታችን ሆይ፥ ና!",
        theologicalDepthEn: "The early church’s urgent Aramaic prayer for Christ’s triumphant return.",
        theologicalDepthAm: "የቀደመችው ቤተክርስቲያን የጌታን ዳግም ምጽዓት በናፍቆት የምትጠራበት ጸሎት።",
        canonicalUsageEn: "1 Corinthians 16:22; Revelation 22:20.",
        canonicalUsageAm: "1 ቆሮንቶስ 16:22፤ ራእይ 22:20።"
      }
    ],
    psychological: {
      characterEn: "Paul & Sosthenes",
      characterAm: "ጳውሎስና ሶስቴኔስ",
      emotionalStateEn: "Pastoral frustration turning to passionate pleading, righteous jealousy for purity, blazing triumph in the resurrection",
      emotionalStateAm: "በመከፋፈል ማዘን፣ ለቅድስና መቆርቆር፣ በትንሣኤው ድል የተሰማ ታላቅ እልልታ",
      innerConflictEn: "Loving a rebellious, gifted, immature church that criticizes his speech, refusing to pamper their pride with clever worldly philosophy.",
      innerConflictAm: "የተሰጡትን ስጦታዎች ያላግባብ ለሚጠቀሙበትና ለእርሱ ክብር ላልሰጡት ለቆሮንቶስ አማኞች፣ ያለ ፍርሃት የመስቀሉን እውነት ብቻ መስበክ።",
      existentialQuestionEn: "\"Death is swallowed up in victory! O death, where is your victory? O death, where is your sting?\" (1 Cor 15:54–55)",
      existentialQuestionAm: "“ሞት ድል በመነሣት ተዋጠ! ሞት ሆይ፥ መውጊያህ የት አለ? ሲኦል ሆይ፥ ድል መንሣትህ የት አለ?” (1 ቆሮ 15:54-55)",
      modernReflectionEn: "Spiritual gifts without love are noisy clanging cymbals; keep the Cross at the center of your intellect, and let the reality of resurrection conquer every fear of death.",
      modernReflectionAm: "ፍቅር ከሌለህ የቱንም ያህል ስጦታ ቢኖርህ እንደሚጮኽ ናስ ከንቱ ነህ፤ መስቀሉን የሕይወትህ ማዕከል አድርገው፣ የትንሣኤውም ተስፋ የሞትን ፍርሃት ሁሉ ያሸንፍልሃል።"
    }
  },

  // 47. 2 CORINTHIANS (2ኛ ወደ ቆሮንቶስ ሰዎች)
  47: {
    id: 'canon-book-47',
    sceneId: 'book-47',
    bookNr: 47,
    chapterStart: 1,
    titleEn: "2 Corinthians: Treasure in Jars of Clay & Strength in Weakness",
    titleAm: "2 ቆሮንቶስ፡ ውድ ሀብት በሸክላ ዕቃ ውስጥና በድካም የሚገለጥ ኃይል",
    eraEn: "Apostolic Affliction & Vindication",
    eraAm: "የሐዋርያት መከራና የመንፈስ ቅዱስ ብርታት ዘመን",
    geopolitical: {
      titleEn: "Macedonia to Corinth Across the Stormy Aegean",
      titleAm: "ከመቄዶንያ ወደ ቆሮንቶስ በኤጂያን ባሕር ማዶ",
      empireEn: "Roman Province of Achaia & Macedonia",
      empireAm: "የሮም ግዛትና የመቄዶንያ ምድር",
      timeframe: "c. AD 55 – 56",
      eyewitnessPOVEn: "A bruised, sleepless apostle writing with tears; defending his apostolic authority not with flashy credentials like the invading \"super-apostles\", but by boasting in his scars, shipwrecks, beatings, and thorn in the flesh.",
      eyewitnessPOVAm: "በመከራና በድካም የተጎዳው ጳውሎስ በዕንባ ሆኖ ሲጽፍ፤ በጉራ በሚመኩ ሐሰተኞች ሐዋርያት ፊት በስብከቱ ብልጠት ሳይሆን በተቀበለው መከራና በሥጋው ባለው መውጊያ ሲመካ።",
      historicalDynamicsEn: "Infiltration of Corinth by smooth-talking false teachers demanding fees and letters of recommendation, mocking Paul’s unimpressive physical appearance and weak speaking style.",
      historicalDynamicsAm: "በቆሮንቶስ ቤተክርስቲያን የገቡ ሐሰተኞች ጳውሎስን “በአካል ሲታይ ደካማ ነው፣ ንግግሩም የተናቀ ነው” እያሉ ሲያጣጥሉት ጳውሎስ እውነተኛውን የክርስቶስ አገልጋይነት መስፈርት የገለጠበት ሁኔታ።",
      groundRealitiesEn: "Five times receiving forty lashes minus one, three times beaten with rods, adrift at sea a day and night, carried out in a basket through a window in Damascus.",
      groundRealitiesAm: "አምስት ጊዜ ሠላሳ ዘጠኝ ጅራፍ መገረፍ፣ ሦስት ጊዜ በበትር መመታት፣ በባሕር ውስጥ ሌሊትና ቀን መቆየት፣ እና በቅርጫት በመስኮት በኩል ከአደጋ ማምለጥ።"
    },
    theological: {
      titleEn: "My Grace is Sufficient for You, for Power is Made Perfect in Weakness",
      titleAm: "ጸጋዬ ይበቃሃል፥ ኃይሌ በድካም ይፈጸማልና",
      covenantStageEn: "Ministers of the New Covenant: Spirit over Letter",
      covenantStageAm: "የአዲሱ ኪዳን አገልጋዮች፡ መንፈስ ሕይወትን ይሰጣል",
      redemptiveThemeEn: "\"We have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us\" (2 Cor 4:7). Reconciliation with God entrusted to frail ambassadors.",
      redemptiveThemeAm: "“ነገር ግን የኃይሉ ታላቅነት ከእግዚአብሔር እንጂ ከእኛ እንዳይሆን ይህ መዝገብ በሸክላ ዕቃ ውስጥ አለን” (2 ቆሮ 4:7)፤ ከእግዚአብሔር ጋር የመታረቅ አገልግሎት ተሰጥቶናል።",
      christForeshadowingEn: "\"For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God\" (2 Cor 5:21)—the great exchange.",
      christForeshadowingAm: "“እኛ በእርሱ ሆነን የእግዚአብሔር ጽድቅ እንሆን ዘንድ ኃጢአት ያላወቀውን እርሱን ስለ እኛ ኃጢአት አደረገው” (2 ቆሮ 5:21)፤ ድንቅ የሆነው የመስቀሉ ልውውጥ።",
      metaNarrativeAnchorEn: "2 Corinthians is Paul’s most intensely personal and emotionally raw letter, unveiling the paradox of Christian ministry: affliction leading to comfort.",
      metaNarrativeAnchorAm: "2 ቆሮንቶስ የጳውሎስ እጅግ ልብ የሚነካና ግልጽ መልእክት ነው፤ መከራና ድካም የእግዚአብሔርን ጸጋ በሕይወታችን እንዴት እንደሚያበዛው ያሳያል።"
    },
    linguistic: [
      {
        original: "Σκόλοψ τῇ σαρκί",
        translit: "Skolops te sarki",
        language: "Greek",
        amharicTerm: "የሥጋ መውጊያ",
        literalMeaningEn: "Thorn / Stake in the flesh",
        literalMeaningAm: "በሥጋ ያለ መውጊያ (የሕመም ስቃይ)",
        theologicalDepthEn: "A persistent physical suffering permitted by God to prevent pride, becoming the canvas upon which Christ’s all-sufficient grace shines brightest.",
        theologicalDepthAm: "ትዕቢት እንዳይመጣ በእግዚአብሔር የተፈቀደ የሥጋ መከራ፤ በእርሱም ውስጥ የክርስቶስ ጸጋ ፍጹም ሆኖ ይገለጣል።",
        canonicalUsageEn: "2 Corinthians 12:7–9.",
        canonicalUsageAm: "2 ቆሮንቶስ 12:7-9።"
      }
    ],
    psychological: {
      characterEn: "Paul & Titus",
      characterAm: "ጳውሎስና ቲቶ",
      emotionalStateEn: "Exhausted anguish, joyful comfort at Titus’s good news, holy boast in infirmities",
      emotionalStateAm: "የድካም ሥቃይ፣ በቲቶ መምጣት የተገኘ ታላቅ መጽናናት፣ በእግዚአብሔር ጸጋ መመካት",
      innerConflictEn: "Pleading with the Lord three times to take the thorn away, only to hear the tender response: \"My grace is sufficient for you!\"",
      innerConflictAm: "መውጊያው እንዲለየው ሦስት ጊዜ ወደ ጌታ ሲጸልይ፣ ጌታ ግን “ጸጋዬ ይበቃሃል፥ ኃይሌ በድካም ይፈጸማልና” ብሎ ሲመልስለት በደስታ መቀበሉ።",
      existentialQuestionEn: "\"He said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly of my weaknesses!\" (2 Cor 12:9)",
      existentialQuestionAm: "“እርሱም፡ ጸጋዬ ይበቃሃል፥ ኃይሌ በድካም ይፈጸማልና አለኝ። እንግዲህ የክርስቶስ ኃይል ያድርብኝ ዘንድ በብዙ ደስታ በድካሜ ልመካ እወዳለሁ!” (2 ቆሮ 12:9)",
      modernReflectionEn: "You do not need to project an image of invulnerability; God does His greatest work through broken vessels—your deepest weakness is the exact place where His power will shine.",
      modernReflectionAm: "ሁሉን ቻይ መስለህ መቅረብ አያስፈልግህም፤ እግዚአብሔር በደከሙትና በተሰበሩት ዕቃዎች ውስጥ ድንቅ ሥራ ይሠራል፤ ድካምህ ለጸጋው መገለጫ ይሆናል።"
    }
  },

  // 48. GALATIANS (ወደ ገላትያ ሰዎች)
  48: {
    id: 'canon-book-48',
    sceneId: 'book-48',
    bookNr: 48,
    chapterStart: 1,
    titleEn: "Galatians: Freedom in Christ, The True Gospel & No Other Foundation",
    titleAm: "ወደ ገላትያ ሰዎች፡ በክርስቶስ ነፃ መውጣት፣ እውነተኛው ወንጌልና የጸጋ መሠረት",
    eraEn: "The Crisis of Circumcision and Grace",
    eraAm: "የግርዛትና የሕግ ክርክር የተነሣበት ዘመን",
    geopolitical: {
      titleEn: "Southern Galatian Cities (Antioch Pisidia, Iconium, Lystra, Derbe)",
      titleAm: "የገላትያ አውራጃ ከተሞች (አንጾኪያ፣ ኢቆንዮን፣ ልስጥራ፣ ደርቤን)",
      empireEn: "Roman Province of Galatia (Asia Minor)",
      empireAm: "የሮም ግዛትና የእስያ አውራጃ",
      timeframe: "c. AD 48 – 49",
      eyewitnessPOVEn: "A furious, incandescent apostle writing without his usual Thanksgiving opening; hearing that newly converted Gentile believers are being bullied into circumcising their flesh and submitting to the Mosaic Law to be \"fully\" saved.",
      eyewitnessPOVAm: "ጳውሎስ የተለመደውን የምስጋና ሰላምታ እንኳ ሳያስቀድም በቁጣ ሲጽፍ፤ አሕዛብ የሆኑ አማኞች ለመዳን መገረዝ አለባችሁ በሚሉ የሐሰት መምህራን መታለላቸውን በሰማ ጊዜ።",
      historicalDynamicsEn: "Judaizers from Judea undermining Paul’s apostolic credentials, insisting that Gentiles must become observant Jews to inherit Abraham’s blessing; Paul confronting Peter face-to-face in Antioch.",
      historicalDynamicsAm: "የአይሁድ ወገኖች ጳውሎስን እውነተኛ ሐዋርያ አይደለም እያሉ ማወካቸው፤ ጳውሎስም ሐዋርያው ጴጥሮስ ከአሕዛብ ጋር ከመብላት ሲሸሽ ፊት ለፊት የገሠጸበት ታሪካዊ ክስተት።",
      groundRealitiesEn: "Writing with giant hand-written letters at the close of the letter, circumcision scars on flesh versus Paul bearing the marks (stigmata) of Jesus on his body.",
      groundRealitiesAm: "ጳውሎስ በመጨረሻው በገዛ እጁ በታላላቅ ፊደላት መጻፉ፤ እና በሥጋ መገረዝ ሳይሆን የክርስቶስን መከራ ምልክት በሰውነቱ መሸከሙ።"
    },
    theological: {
      titleEn: "Justified by Faith Apart from the Works of the Law",
      titleAm: "ያለ ሕግ ሥራ በእምነት ብቻ መጽደቅ",
      covenantStageEn: "Abrahamic Covenant of Promise Superior to the Temporary Sinai Law",
      covenantStageAm: "የተስፋው የአብርሃም ኪዳን ከጊዜያዊው የሲና ሕግ እንደሚበልጥ ማሳየት",
      redemptiveThemeEn: "\"For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery\" (Gal 5:1). The Law was our schoolmaster to bring us to Christ.",
      redemptiveThemeAm: "“በነጻነት ልንኖር ክርስቶስ ነጻ አወጣን፤ እንግዲህ ጸንታችሁ ቁሙ እንደ ገናም በባርነት ቀንበር አትያዙ” (ገላ 5:1)፤ ሕግ ወደ ክርስቶስ የሚያደርስ ሞግዚታችን ነበረ።",
      christForeshadowingEn: "\"Christ redeemed us from the curse of the law by becoming a curse for us—for it is written, Cursed is everyone who is hanged on a tree\" (Gal 3:13).",
      christForeshadowingAm: "“በእንጨት የሚሰቀል ሁሉ የተረገመ ነው ተብሎ ተጽፎአልና ክርስቶስ ስለ እኛ እርግማን ሆኖ ከሕግ እርግማን ዋጀን” (ገላ 3:13)።",
      metaNarrativeAnchorEn: "Galatians is the Magna Carta of Christian Liberty, establishing that adding anything to Christ’s finished work for justification is no gospel at all.",
      metaNarrativeAnchorAm: "የገላትያ መልእክት የክርስቲያን ነፃነት ታላቅ አዋጅ ነው፤ በክርስቶስ የመስቀል ሥራ ላይ ማንኛውንም የሰው ጥረት መጨመር ወንጌልን ማፍረስ እንደ ሆነ ያረጋግጣል።"
    },
    linguistic: [
      {
        original: "Σταυρός",
        translit: "Stauros",
        language: "Greek",
        amharicTerm: "መስቀል",
        literalMeaningEn: "Cross / Execution stake",
        literalMeaningAm: "መስቀል",
        theologicalDepthEn: "The exclusive ground of Christian boasting: \"Far be it from me to boast except in the cross of our Lord Jesus Christ\" (Gal 6:14).",
        theologicalDepthAm: "የክርስቲያን ብቸኛ መመኪያ፤ ዓለም ለእኛ የተሰቀለበት እኛም ለዓለም የተሰቀልንበት የክርስቶስ መስቀል።",
        canonicalUsageEn: "Galatians 6:14; 1 Cor 1:18.",
        canonicalUsageAm: "ገላትያ 6:14፤ 1 ቆሮ 1:18።"
      },
      {
        original: "Καρπὸς τοῦ Πνεύματος",
        translit: "Karpos tou Pneumatos",
        language: "Greek",
        amharicTerm: "የመንፈስ ፍሬ",
        literalMeaningEn: "The fruit of the Spirit",
        literalMeaningAm: "የመንፈስ ፍሬ",
        theologicalDepthEn: "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; organic growth of the Spirit, not legalistic works.",
        theologicalDepthAm: "ፍቅር፣ ደስታ፣ ሰላም፣ ትዕግሥት፣ ቸርነት፣ በጎነት፣ ታማኝነት፣ የዋህነት፣ ራስን መግዛት፤ ከመንፈስ ቅዱስ ሕይወት የሚመነጭ ፍሬ።",
        canonicalUsageEn: "Galatians 5:22–23.",
        canonicalUsageAm: "ገላትያ 5:22-23።"
      }
    ],
    psychological: {
      characterEn: "Paul & The Judaizers",
      characterAm: "ጳውሎስና የሕግ መምህራን",
      emotionalStateEn: "Holy fury against heresy, fierce protective zeal for new converts, tender fatherly agony (\"my little children, for whom I am again in anguish of childbirth\")",
      emotionalStateAm: "በሐሰት ትምህርት ላይ የተነሳ ቅን ቁጣ፣ ለአማኞች የተሰማ አባታዊ ጥበቃ፣ ክርስቶስ በውስጣቸው እስኪሳል ድረስ የተሰማ የምጥ ኀዘን",
      innerConflictEn: "Risking deep friendships (even rebuking Peter) because the pure truth of the Gospel was at stake: if righteousness comes through the Law, Christ died for nothing!",
      innerConflictAm: "የወንጌል እውነት እንዳይበላሽ ሲል ከጴጥሮስ ጋር እንኳ ፊት ለፊት መጋፈጥ፤ “ጽድቅስ በሕግ በኩል ከሆነ እንኪያስ ክርስቶስ በከንቱ ሞተ!” በማለት እውነትን መከላከል",
      existentialQuestionEn: "\"I have been crucified with Christ. It is no longer I who live, but Christ who lives in me!\" (Gal 2:20)",
      existentialQuestionAm: "“ከክርስቶስ ጋር ተሰቅያለሁ፤ እኔም አሁን ሕያው ሆኜ አልኖርም ክርስቶስ ግን በእኔ ይኖራል!” (ገላ 2:20)",
      modernReflectionEn: "Religious legalism whispers that you must earn God’s love through rules; the Gospel shouts that Christ has already paid it all—stand fast in your freedom and walk by the Spirit.",
      modernReflectionAm: "ሃይማኖታዊ ሕግጋት በእግዚአብሔር ዘንድ ተቀባይነት ለማግኘት መትጋት አለብህ ይሉሃል፤ ወንጌል ግን ክርስቶስ ሁሉን እንደከፈለ ያውጃል፤ በነፃነትህ ጽና በመንፈስም ተመላለስ።"
    }
  },

  // 49. EPHESIANS (ወደ ኤፌሶን ሰዎች)
  49: {
    id: 'canon-book-49',
    sceneId: 'book-49',
    bookNr: 49,
    chapterStart: 1,
    titleEn: "Ephesians: The Cosmic Mystery, Spiritual Blessings & The Armor of God",
    titleAm: "ወደ ኤፌሶን ሰዎች፡ የሰማይ በረከት፣ የክርስቶስ አካልና የእግዚአብሔር የጦር ዕቃ",
    eraEn: "Paul’s First Roman Imprisonment",
    eraAm: "ጳውሎስ በሮም ወህኒ በነበረበት ወቅት",
    geopolitical: {
      titleEn: "Rome Under House Arrest to the Metropolis of Ephesus",
      titleAm: "በሮም ከታሰረበት ቤት እስከ ታላቋ የኤፌሶን ከተማ",
      empireEn: "Imperial Rome & The Cult of Artemis (Diana of the Ephesians)",
      empireAm: "የሮም ኢምፓየርና የአርጤምስ የጣዖት አምልኮ ማዕከል",
      timeframe: "c. AD 60 – 62",
      eyewitnessPOVEn: "A chain clinking against an apostle’s wrist as he writes from prison, gazing up into heavenly places; seeing God’s eternal blueprint to unite all things in Christ—tearing down the dividing wall between Jews and Gentiles to forge One New Humanity.",
      eyewitnessPOVAm: "በእጁ ሰንሰለት የታሰረው ጳውሎስ በሮም እሥር ቤት ሆኖ በክርስቶስ ስላለን ሰማያዊ በረከት ሲጽፍ፤ በአይሁድና በአሕዛብ መካከል የነበረው የጥል ግድግዳ በክርስቶስ ፈርሶ አንድ አዲስ ሕዝብ ሲፈጠር።",
      historicalDynamicsEn: "Ephesus was a major occult and magical center (Acts 19); Paul writes to assure believers that Christ is exalted far above every demonic principality, power, rule, and authority.",
      historicalDynamicsAm: "ኤፌሶን የአስማትና የጥንቆላ ማዕከል ስለነበረች፣ ክርስቶስ ከአጋንንትና ከክፉ መናፍስት ሥልጣን ሁሉ በላይ ከፍ ያለ ጌታ መሆኑን ያረጋገጠ መልእክት።",
      groundRealitiesEn: "The Temple of Artemis (one of the 7 Wonders), magical spell scrolls burned publicly in Ephesus, Roman legionary armor (belt, breastplate, shield, helmet, sword).",
      groundRealitiesAm: "የአርጤምስ መቅደስ፣ በአደባባይ የተቃጠሉ የአስማት መጻሕፍት፣ እና የሮም ወታደር የጦር ዕቃ (የእውነት ዝናር፣ የጽድቅ ጥሩር፣ የእምነት ጋሻ፣ የድነት ራስ ቁር)።"
    },
    theological: {
      titleEn: "Blessed in Christ with Every Spiritual Blessing in Heavenly Places",
      titleAm: "በሰማያዊ ስፍራ በመንፈሳዊ በረከት ሁሉ በክርስቶስ መባረክ",
      covenantStageEn: "One New Man: Universal Church as Temple of the Spirit",
      covenantStageAm: "አንድ አዲስ ሰው፡ ቤተክርስቲያን የመንፈስ ቅዱስ ማደሪያ ስትሆን",
      redemptiveThemeEn: "\"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast\" (Eph 2:8–9).",
      redemptiveThemeAm: "“ጸጋው በእምነት አድኖአችኋልና፤ ይህም የእግዚአብሔር ስጦታ ነው እንጂ ከእናንተ አይደለም፤ ማንም እንዳይመካ ከሥራ አይደለም” (ኤፌ 2:8-9)።",
      christForeshadowingEn: "The Head of the Church, exalted far above all rule and authority (Eph 1:20–23); the Cornerstone joining Jews and Gentiles into a holy dwelling for God.",
      christForeshadowingAm: "ከሥልጣንና ከኃይል ሁሉ በላይ በሰማያዊ ስፍራ የተቀመጠው የቤተክርስቲያን ራስ (ኤፌ 1:20-23)፤ የማዕዘን ራስ ድንጋይ።",
      metaNarrativeAnchorEn: "Ephesians is structured in two perfect halves: Chapters 1–3 (Who we are in Christ: our wealth) and Chapters 4–6 (How we walk in Christ: our walk and warfare).",
      metaNarrativeAnchorAm: "የኤፌሶን መልእክት በሁለት ታላላቅ ክፍሎች የተዋቀረ ነው፡ ምዕራፍ 1-3 (በክርስቶስ ያለን መንፈሳዊ ሀብት) እና ምዕራፍ 4-6 (ተግባራዊ ሕይወታችንና መንፈሳዊ ውጊያችን)።"
    },
    linguistic: [
      {
        original: "Μυστήριον",
        translit: "Mysterion",
        language: "Greek",
        amharicTerm: "ምስጢር",
        literalMeaningEn: "Mystery / Divine secret once hidden now revealed",
        literalMeaningAm: "የተሰወረ ምስጢር አሁን ግን የተገለጠ",
        theologicalDepthEn: "God’s eternal plan, hidden for ages, that Gentiles are fellow heirs and members of the same body in Christ.",
        theologicalDepthAm: "አሕዛብ አብረው ወራሾችና የአካሉ ብልቶች እንዲሆኑ በእግዚአብሔር የታሰበው ድንቅ ምስጢር።",
        canonicalUsageEn: "Ephesians 1:9, 3:3–9, 5:32.",
        canonicalUsageAm: "ኤፌሶን 1:9፤ 3:3-9።"
      },
      {
        original: "Πανοπλία",
        translit: "Panoplia",
        language: "Greek",
        amharicTerm: "የእግዚአብሔር ሙሉ የጦር ዕቃ",
        literalMeaningEn: "Full armor / Complete defensive and offensive kit",
        literalMeaningAm: "ሙሉ የጦር ዕቃ",
        theologicalDepthEn: "The spiritual armor of God himself, enabling the believer to stand firm against demonic schemes.",
        theologicalDepthAm: "የዲያብሎስን ሽንገላ መቋቋም እንድንችል እግዚአብሔር የሰጠን ሙሉ መንፈሳዊ መከላከያ።",
        canonicalUsageEn: "Ephesians 6:11, 6:13.",
        canonicalUsageAm: "ኤፌሶን 6:11፤ 6:13።"
      }
    ],
    psychological: {
      characterEn: "Paul the Prisoner of Christ & Tychicus",
      characterAm: "የክርስቶስ እስረኛ ጳውሎስና ቲኪቆስ",
      emotionalStateEn: "Cosmic awe, soaring liturgical thanksgiving, steadfast battle-ready resolve",
      emotionalStateAm: "በመለኮት ታላቅነት መደመም፣ የጸሎትና የምስጋና መንፈስ፣ ለውጊያ የተዘጋጀ ጽናት",
      innerConflictEn: "Sitting in chains while contemplating the infinite riches of Christ, praying that believers would know the breadth, length, height, and depth of God’s love.",
      innerConflictAm: "በእስር ቤት ሆኖ ሳለ የክርስቶስን ወሰን የሌለው ባለጠግነት ማሰላሰል፤ የፍቅሩን ስፋትና ርዝመት፣ ከፍታውንና ጥልቀቱን እንዲያውቁ በጉልበቱ መንበርከክ።",
      existentialQuestionEn: "\"Put on the whole armor of God, that you may be able to stand against the schemes of the devil!\" (Eph 6:11)",
      existentialQuestionAm: "“የዲያብሎስን ሽንገላ ትቃወሙ ዘንድ እንዲቻላችሁ የእግዚአብሔርን ዕቃ ጦር ሁሉ ልበሱ!” (ኤፌ 6:11)",
      modernReflectionEn: "You do not fight for victory; you fight from victory; in Christ you are already seated in heavenly places—put on your spiritual armor and stand firm.",
      modernReflectionAm: "ድልን ለማግኘት ሳይሆን አስቀድሞ በክርስቶስ በተገኘው ድል ላይ ቆመህ ነው የምትዋጋው፤ በሰማያዊ ስፍራ ከክርስቶስ ጋር ተቀምጠሃልና በጽናት ቁም።"
    }
  },

  // 50. PHILIPPIANS (ወደ ፊልጵስዩስ ሰዎች)
  50: {
    id: 'canon-book-50',
    sceneId: 'book-50',
    bookNr: 50,
    chapterStart: 1,
    titleEn: "Philippians: Unshakeable Joy in Chains & The Kenosis of Christ",
    titleAm: "ወደ ፊልጵስዩስ ሰዎች፡ በሰንሰለት ውስጥ ያለ ደስታና የክርስቶስ ራስን ማዋረድ",
    eraEn: "Roman Prison Letters",
    eraAm: "በሮም ወህኒ የተጻፉ የፍቅር መልእክቶች",
    geopolitical: {
      titleEn: "Praetorian Guard Quarters in Rome to Philippi Colony",
      titleAm: "በሮም ካለው የቄሳር ጠባቂዎች አዳራሽ እስከ ፊልጵስዩስ ከተማ",
      empireEn: "Roman Military Colony of Philippi (Macedonia)",
      empireAm: "የሮም ወታደራዊ ቅኝ ግዛት የሆነችው ፊልጵስዩስ",
      timeframe: "c. AD 61 – 62",
      eyewitnessPOVEn: "An imprisoned apostle facing possible execution singing of joy 16 times; Roman guards chained to his wrist hearing the Gospel; Epaphroditus arriving with financial aid from Philippi after nearly dying of sickness on the road.",
      eyewitnessPOVAm: "በሞት ፍርድ ጥላ ሥር የነበረው ጳውሎስ “ደስ ይበላችሁ” እያለ 16 ጊዜ ደስታን ሲያውጅ፤ አብረውት የታሰሩት የሮም ወታደሮች ወንጌልን ሲሰሙና በቄሳር ቤት ያሉ ሳይቀር ሲያምኑ።",
      historicalDynamicsEn: "Philippi was a proud Roman military colony enjoying Italian law; Paul reminds them: \"Our citizenship is in heaven\" (Phil 3:20).",
      historicalDynamicsAm: "ፊልጵስዩሳውያን በሮማዊ ዜግነታቸው ይመኩ ስለነበር፤ ጳውሎስ “እኛ ግን አገራችን በሰማይ ነው” በማለት እውነተኛ ዜግነታቸውን አስታወሳቸው።",
      groundRealitiesEn: "Clanking soldier chains, shared meals brought by Epaphroditus, wiping sweat, two women leaders (Euodia and Syntyche) reconciled in the Lord.",
      groundRealitiesAm: "የእስር ቤት ሰንሰለት ድምፅ፣ አፍሮዲጡ ያመጣው የፍቅር ስጦታ፣ እና በአገልግሎት የነበሩ ሴቶች በጌታ እንዲታረቁ የተሰጠ ምክር።"
    },
    theological: {
      titleEn: "Rejoice in the Lord Always: The Secret of Contentment",
      titleAm: "ሁልጊዜ በጌታ ደስ ይበላችሁ፡ የመርካት ምስጢር",
      covenantStageEn: "Joyful Fellowship in the Gospel of the Kingdom",
      covenantStageAm: "በወንጌል አንድነት ውስጥ ያለ የተቀደሰ ኅብረት",
      redemptiveThemeEn: "\"For to me to live is Christ, and to die is gain\" (Phil 1:21). Joy is not dictated by pleasant circumstances, but by the indwelling life of Christ.",
      redemptiveThemeAm: "“ለእኔ ሕይወት ክርስቶስ፥ ሞትም ጥቅም ነውና” (ፊል 1:21)፤ ክርስቲያናዊ ደስታ በሁኔታዎች ላይ ሳይሆን በክርስቶስ ሕይወት ላይ የተመሠረተ ነው።",
      christForeshadowingEn: "The Carmen Christi (Hymn of Christ, Phil 2:5–11): who, though in the form of God, emptied himself (kenosis), took the form of a servant, died on a cross, and was exalted as Lord of all.",
      christForeshadowingAm: "ታላቁ የክርስቶስ ውዳሴ (ፊል 2:5-11)፡ በእግዚአብሔር መልክ ሲኖር ራሱን ባዶ አደረገ፣ የባሪያን መልክ ይዞ እስከ መስቀል ሞት ድረስ ታዘዘ፤ ስለዚህ እግዚአብሔር ከሁሉ በላይ ከፍ አደረገው።",
      metaNarrativeAnchorEn: "Philippians reveals the paradox of Christian joy: chains cannot stifle it, poverty cannot reduce it, and death cannot end it.",
      metaNarrativeAnchorAm: "የፊልጵስዩስ መልእክት የደስታን ምስጢር ያሳያል፡ ሰንሰለት ሊያስቆመው፣ ድህነት ሊቀንሰው፣ ሞትም ሊያጠፋው የማይችል ሰማያዊ ደስታ።"
    },
    linguistic: [
      {
        original: "Ἐκένωσεν",
        translit: "Ekenosen",
        language: "Greek",
        amharicTerm: "ራሱን ባዶ አደረገ",
        literalMeaningEn: "Emptied himself / Poured out himself",
        literalMeaningAm: "ራሱን ባዶ አደረገ (አዋረደ)",
        theologicalDepthEn: "Christ gave up his heavenly privileges and status to take on human frailty and face a slave’s execution on a cross.",
        theologicalDepthAm: "ክርስቶስ መለኮታዊ ክብሩን ሳይለቅ፣ ሰማያዊ ጥቅሞቹን ትቶ የሰው ልጆችን ለማዳን ራሱን ዝቅ አድርጎ አገልጋይ ሆነ።",
        canonicalUsageEn: "Philippians 2:7.",
        canonicalUsageAm: "ፊልጵስዩስ 2:7።"
      },
      {
        original: "Χαίρετε",
        translit: "Chairete",
        language: "Greek",
        amharicTerm: "ደስ ይበላችሁ",
        literalMeaningEn: "Rejoice! / Be full of gladness",
        literalMeaningAm: "ደስ ይበላችሁ (በጌታ ሁልጊዜ)",
        theologicalDepthEn: "Repeated like a musical refrain; joy is not a feeling to wait for, but a defiant covenant stance in Christ.",
        theologicalDepthAm: "በፊልጵስዩስ ውስጥ ደጋግሞ የተጠቀሰ ጥሪ፤ ደስታ የሁኔታዎች ውጤት ሳይሆን በክርስቶስ ላይ ያረፈ ጽኑ ውሳኔ ነው።",
        canonicalUsageEn: "Philippians 3:1, 4:4.",
        canonicalUsageAm: "ፊልጵስዩስ 3:1፤ 4:4።"
      }
    ],
    psychological: {
      characterEn: "Paul, Timothy & Epaphroditus",
      characterAm: "ጳውሎስ፣ ጢሞቴዎስና አፍሮዲጡ",
      emotionalStateEn: "Radiant serenity in confinement, sacrificial brotherly affection, triumphant hope",
      emotionalStateAm: "በእስር ቤት ውስጥ የነገሠ ሰላም፣ የወንድማማች ንጹሕ ፍቅር፣ በድል የተሞላ ተስፋ",
      innerConflictEn: "Torn between two desires: wanting to depart and be with Christ (far better), or remaining in the flesh for their progress and joy in faith.",
      innerConflictAm: "በሁለት ምርጫ መካከል መወጠር፡ ሄዶ ከክርስቶስ ጋር መሆን እጅግ የሚበልጥ ቢሆንም፣ ለእነርሱ እምነት ማደግ ሲባል በሥጋ መኖርን መምረጡ።",
      existentialQuestionEn: "\"I can do all things through him who strengthens me!\" (Phil 4:13)",
      existentialQuestionAm: "“ኃይልን በሚሰጠኝ በክርስቶስ ሁሉን እችላለሁ!” (ፊል 4:13)",
      modernReflectionEn: "Circumstances do not have the power to steal your joy unless you allow them to; the secret of contentment is found in Christ alone, who gives you strength for every storm.",
      modernReflectionAm: "ሁኔታዎች ደስታህን እንዲሰርቁት አትፍቀድላቸው፤ የመርካት ምስጢር ያለው በክርስቶስ ነው፤ እርሱ በማንኛውም ማዕበል ውስጥ ኃይልን ይሰጥሃል።"
    }
  },

  // 51. COLOSSIANS (ወደ ቆላስይስ ሰዎች)
  51: {
    id: 'canon-book-51',
    sceneId: 'book-51',
    bookNr: 51,
    chapterStart: 1,
    titleEn: "Colossians: The Preeminence of Christ & The Fullness of the Godhead",
    titleAm: "ወደ ቆላስይስ ሰዎች፡ የክርስቶስ ፍጹም የበላይነትና የመለኮት ሙላት",
    eraEn: "Roman Prison Letters",
    eraAm: "በሮም እሥር ቤት የተጻፈ መልእክት",
    geopolitical: {
      titleEn: "The Lycus River Valley (Colossae, Laodicea, Hierapolis)",
      titleAm: "በሊቆስ ሸለቆ ያሉ ከተሞች (ቆላስይስ፣ ሎዶቅያ፣ ኢያራጶሊስ)",
      empireEn: "Roman Asia Minor (Subject to Earthquakes and Syncretism)",
      empireAm: "የሮም እስያ ግዛትና የፍልስፍና ተጽዕኖ",
      timeframe: "c. AD 60 – 62",
      eyewitnessPOVEn: "A church Paul never visited founded by his coworker Epaphras; young believers intoxicated by esoteric angel-worship, ascetic diets, and mystical secret handshakes; Paul writing back that Christ created and upholds the entire galaxy.",
      eyewitnessPOVAm: "ጳውሎስ በአካል ሄዶ የማያውቃት ነገር ግን በኤጳፍራ የተመሠረተችው የቆላስይስ ቤተክርስቲያን፤ ሰዎች በመላእክት አምልኮና በዓለማዊ ፍልስፍና ሲታለሉ፣ ክርስቶስ የፍጥረት ሁሉ ፈጣሪና የበላይ እንደ ሆነ የገለጠበት ኃይለኛ ቃል",
      historicalDynamicsEn: "Combating the \"Colossian Heresy\"—an early proto-Gnostic syncretism combining Jewish ceremonialism (Sabbaths, new moons), pagan astrology, and angel worship.",
      historicalDynamicsAm: "የአይሁድን ሥርዓት፣ የግሪክ ፍልስፍናንና የመላእክት አምልኮን ቀላቅሎ የተነሳውን የሐሰት ትምህርት በክርስቶስ ሙሉነት ድል ያደረገ መልእክት።",
      groundRealitiesEn: "Earthquake-prone volcanic limestone cliffs, red dyes from purple snails, scrolls copied and exchanged between Laodicea and Colossae.",
      groundRealitiesAm: "በመንቀጥቀጥ የተጠቃች ከተማ፣ የቀለም ሥራዎች፣ እና በሎዶቅያና በቆላስይስ መካከል የተለዋወጡ የብራና ጥቅልሎች።"
    },
    theological: {
      titleEn: "Christ is Supreme Over All Creation and the Church",
      titleAm: "ክርስቶስ በፍጥረት ሁሉና በቤተክርስቲያን ላይ የበላይ ነው",
      covenantStageEn: "Transferred from the Domain of Darkness to the Kingdom of the Son",
      covenantStageAm: "ከጨለማ ግዛት ወደ ፍቅሩ ልጅ መንግሥት የተደረገ ሽግግር",
      redemptiveThemeEn: "\"For in him all the fullness of God was pleased to dwell, and through him to reconcile to himself all things\" (Col 1:19–20). You are complete in Him.",
      redemptiveThemeAm: "“እግዚአብሔር ሙላቱ ሁሉ በእርሱ እንዲኖር... በእርሱም በኩል ሁሉን ከራሱ ጋር ሊያስታርቅ ፈቅዶአልና” (ቆላ 1:19-20)፤ እናንተ በእርሱ ሙላትን አግኝታችኋል።",
      christForeshadowingEn: "The Image of the invisible God, Firstborn of all creation; by him all things were created in heaven and earth, and in him all things hold together (Col 1:15–17).",
      christForeshadowingAm: "የማይታየው አምላክ ምሳሌ፥ የፍጥረት ሁሉ በኵር፤ በሰማይና በምድር ያለው ሁሉ በእርሱ ተፈጥሮአል፥ ሁሉም በእርሱ ተያይዞ ቆሞአል (ቆላ 1:15-17)።",
      metaNarrativeAnchorEn: "Colossians provides the highest Christology in the Pauline corpus: Christ is not one of many stepping stones to God; He is the complete reality.",
      metaNarrativeAnchorAm: "የቆላስይስ መልእክት የክርስቶስን መለኮታዊ ክብርና የበላይነት እጅግ ባቅለበለበ መንገድ ከገለጠባቸው ታላላቅ መልእክቶች አንዱ ነው።"
    },
    linguistic: [
      {
        original: "Πλήρωμα",
        translit: "Pleroma",
        language: "Greek",
        amharicTerm: "ሙላት",
        literalMeaningEn: "Fullness / Totality / Abundance",
        literalMeaningAm: "ሙላት (የመለኮት ሁሉ ሙላት)",
        theologicalDepthEn: "The entire divine nature and essence resides bodily in Jesus Christ; believers lack nothing outside of Him.",
        theologicalDepthAm: "የመለኮት ባሕርይ ሙላት ሁሉ በክርስቶስ ሰውነት ውስጥ በአካል ይኖራል፤ በእርሱ ላሉት ምንም የሚጎድል ነገር የለም።",
        canonicalUsageEn: "Colossians 1:19, 2:9.",
        canonicalUsageAm: "ቆላስይስ 1:19፤ 2:9።"
      },
      {
        original: "Πρωτότοκος",
        translit: "Prototokos",
        language: "Greek",
        amharicTerm: "በኵር",
        literalMeaningEn: "Firstborn / Sovereign Heir possessing preeminence",
        literalMeaningAm: "በኵር (የፍጥረት ሁሉ ገዢና ወራሽ)",
        theologicalDepthEn: "Not chronological creation, but supreme royal priority, rank, and heirship over the cosmos (Psalm 89:27).",
        theologicalDepthAm: "የተፈጠረ ማለት ሳይሆን፣ በሁሉ ላይ የነገሠ፣ የፍጥረት ሁሉ ባለቤትና የበላይ መሆኑን ያመለክታል።",
        canonicalUsageEn: "Colossians 1:15, 1:18; Hebrews 1:6.",
        canonicalUsageAm: "ቆላስይስ 1:15፤ 1:18።"
      }
    ],
    psychological: {
      characterEn: "Paul & Epaphras",
      characterAm: "ጳውሎስና ኤጳፍራ",
      emotionalStateEn: "Vigilant pastoral jealousy, thrilling intellectual clarity, resting in Christ’s cosmic adequacy",
      emotionalStateAm: "የመንጋው እውነተኛ ጥበቃ፣ በክርስቶስ ማንነት መደነቅ፣ በምንም ነገር እንዳይታለሉ ያለው ጽኑ ፍላጎት",
      innerConflictEn: "Agonizing in prayer for believers he has never seen face to face, warning them not to be taken captive by human philosophy and empty deceit.",
      innerConflictAm: "በአካል ላላያቸው አማኞች በፍልስፍናና በከንቱ ማታለል ማንም እንዳይማርካቸው በመንፈስ መጋደልና መጸለይ።",
      existentialQuestionEn: "\"For in him the whole fullness of deity dwells bodily, and you have been filled in him, who is the head of all rule and authority!\" (Col 2:9–10)",
      existentialQuestionAm: "“በእርሱ የመለኮት ሙላት ሁሉ በአካል ይኖራልና፤ እናንተም የአለቅነትና የሥልጣን ሁሉ ራስ በሆነ በእርሱ ተሞልታችኋል!” (ቆላ 2:9-10)",
      modernReflectionEn: "You do not need Jesus PLUS secret knowledge, astrology, or rituals; in Christ you have the Creator of galaxies living in you—He is completely enough.",
      modernReflectionAm: "ከክርስቶስ በተጨማሪ ሌላ ሚስጥራዊ እውቀት ወይም ፍልስፍና አያስፈልግህም፤ የዓለም ፈጣሪ የሆነው ክርስቶስ በአንተ ውስጥ ይኖራል፤ እርሱ ብቻውን ሙሉ በሙሉ ይበቃሃል።"
    }
  },

  // 52. 1 THESSALONIANS (1ኛ ወደ ተሰሎንቄ ሰዎች)
  52: {
    id: 'canon-book-52',
    sceneId: 'book-52',
    bookNr: 52,
    chapterStart: 1,
    titleEn: "1 Thessalonians: The Parousia, Holy Living & Hope for the Fallen Asleep",
    titleAm: "1 ተሰሎንቄ፡ የክርስቶስ ዳግም ምጽዓት፣ ቅድስናና ያንቀላፉት ተስፋ",
    eraEn: "Early Apostolic Missionary Journeys",
    eraAm: "የቀዳማዊ ሐዋርያዊ ጉዞዎች ዘመን",
    geopolitical: {
      titleEn: "Corinth Writing to Thessalonica (Macedonian Port)",
      titleAm: "ከቆሮንቶስ ወደ ተሰሎንቄ (የመቄዶንያ ዋና ከተማ)",
      empireEn: "Roman Macedonia on the Via Egnatia Highway",
      empireAm: "የሮም መቄዶንያ ግዛት በኤግናጥያ ዋና የንግድ ጎዳና ላይ",
      timeframe: "c. AD 50 – 51",
      eyewitnessPOVEn: "A young church birthed in three weeks of synagogue preaching chased out by mob riots; new converts terrified that Christians who died before Christ’s return will miss the resurrection; Paul comforting them with the trumpet blast.",
      eyewitnessPOVAm: "በሦስት ሳምንት ስብከት ተመሥርታ በስደት የተፈተነችው የተሰሎንቄ ቤተክርስቲያን፤ ክርስቶስ ሳይመጣ የሞቱት ወገኖቻችን ትንሣኤውን ያጡ ይሆን ብለው ሲጨነቁ፣ ጳውሎስ በመለከት ድምፅ በክርስቶስ ያንቀላፉት አስቀድመው እንደሚነሱ ሲያጽናናቸው።",
      historicalDynamicsEn: "Persecution from civic authorities claiming Christians were defying Caesar by proclaiming another king named Jesus (Acts 17:7).",
      historicalDynamicsAm: "“ኢየሱስ የሚባል ሌላ ንጉሥ አለ እያሉ የቄሳርን አዋጅ ይቃወማሉ” በሚል ክስ የደረሰባቸውን መከራ በጽናት የታገሡበት ሁኔታ።",
      groundRealitiesEn: "Working quietly with hands in leather workshops, Thessalonian harbor ships sailing by, sounding the ram’s horn trumpet.",
      groundRealitiesAm: "በገዛ እጅ በሥራ መትጋት፣ የተሰሎንቄ ወደብ ንግድ፣ እና የጌታ መምጣት ሲታሰብ በመለከት ድምፅ የሚሰበሰበው ቅዱሳን ማኅበር።"
    },
    theological: {
      titleEn: "The Blessed Hope of the Lord’s Return (Parousia)",
      titleAm: "የጌታችን የኢየሱስ ክርስቶስ ዳግም ምጽዓት ተስፋ",
      covenantStageEn: "Eschatological Vindication of the Saints",
      covenantStageAm: "በፍጻሜው ዘመን ቅዱሳን ክብርን የሚቀበሉበት ኪዳን",
      redemptiveThemeEn: "\"For the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God\" (1 Thess 4:16).",
      redemptiveThemeAm: "“ጌታ ራሱ በትእዛዝ ድምፅ በመልአክም አለቃ ድምፅ በእግዚአብሔርም መለከት ከሰማይ ይወርዳልና፥ በክርስቶስም የሞቱት አስቀድመው ይነሣሉ” (1 ተሰ 4:16)።",
      christForeshadowingEn: "The Resurrected Lord descending from heaven to catch up his Church and rescue us from the coming wrath (1 Thess 1:10; 4:16–17).",
      christForeshadowingAm: "ከሚመጣው ቁጣ የሚያድነን፣ ከሰማይ ወርዶ ቅዱሳኑን ወደ ራሱ የሚሰበስበው የከበረ ጌታ (1 ተሰ 1:10፤ 4:16-17)።",
      metaNarrativeAnchorEn: "Every single chapter of 1 Thessalonians ends with an explicit reference to the return of Jesus Christ.",
      metaNarrativeAnchorAm: "በ1 ተሰሎንቄ ውስጥ ያሉት አምስቱም ምዕራፎች እያንዳንዳቸው የሚደመደሙት ስለ ጌታችን ዳግም ምጽዓት በመናገር ነው።"
    },
    linguistic: [
      {
        original: "Παρουσία",
        translit: "Parousia",
        language: "Greek",
        amharicTerm: "ምጽዓት (መምጣት)",
        literalMeaningEn: "Presence, royal arrival, official state visit of a King",
        literalMeaningAm: "መምጣት / የንጉሥ ይፋዊ ግርማዊ መገለጥ",
        theologicalDepthEn: "The bodily, visible, triumphant return of King Jesus to claim his people and judge the world.",
        theologicalDepthAm: "ጌታችን ኢየሱስ ክርስቶስ በታላቅ ግርማና ክብር ለፍርድና ሕዝቡን ለመውሰድ በአካል በዓለም ፊት የሚገለጥበት ቀን።",
        canonicalUsageEn: "1 Thessalonians 2:19, 3:13, 4:15, 5:23.",
        canonicalUsageAm: "1 ተሰሎንቄ 2:19፤ 4:15፤ 5:23።"
      }
    ],
    psychological: {
      characterEn: "Paul, Silas & Timothy",
      characterAm: "ጳውሎስ፣ ሲላስና ጢሞቴዎስ",
      emotionalStateEn: "Maternal gentleness, fatherly encouragement, joyful tears hearing of their steadfast faith under fire",
      emotionalStateAm: "የእናት ርኅራኄ፣ የአባት ምክር፣ በመከራ ውስጥ ጸንተው መቆማቸውን በሰማ ጊዜ የተሰማ ታላቅ ደስታ",
      innerConflictEn: "Unable to endure the separation any longer, sending Timothy at great personal loneliness to find out if persecution had crushed their faith.",
      innerConflictAm: "ስለ ልጆቹ ከመጨነቁ የተነሣ መታገሥ አቅቶት፣ ስደት እምነታቸውን እንዳያጠፋው ጢሞቴዎስን ብቻውን ልኮ መልሱን በጉጉት መጠበቁ።",
      existentialQuestionEn: "\"For what is our hope or joy or crown of boasting before our Lord Jesus at his coming? Is it not you?\" (1 Thess 2:19)",
      existentialQuestionAm: "“በጌታችን በኢየሱስ ፊት በመምጣቱ ተስፋችን ወይስ ደስታችን ወይስ የትምክህታችን አክሊል ማን ነው? እናንተ አይደላችሁምን?” (1 ተሰ 2:19)",
      modernReflectionEn: "Grief is real when a loved one dies, but Christians do not grieve like those who have no hope; the grave is not the end—the trumpet will sound and we will be reunited forever.",
      modernReflectionAm: "የሚወዱት ሰው ሲሞት ማዘን ተፈጥሯዊ ነው፤ ነገር ግን ተስፋ እንደሌላቸው አናዝንም፤ መቃብር የመጨረሻው ማረፊያ አይደለም፤ በመለከት ድምፅ በክብር እንገናኛለን።"
    }
  },

  // 53. 2 THESSALONIANS (2ኛ ወደ ተሰሎንቄ ሰዎች)
  53: {
    id: 'canon-book-53',
    sceneId: 'book-53',
    bookNr: 53,
    chapterStart: 1,
    titleEn: "2 Thessalonians: The Man of Lawlessness & Steadfast Endurance",
    titleAm: "2 ተሰሎንቄ፡ የዓመፅ ሰው መገለጥና በጽናት መቆም",
    eraEn: "Early Apostolic Era Eschatological Clarification",
    eraAm: "የፍጻሜው ዘመን ትምህርት የተብራራበት ወቅት",
    geopolitical: {
      titleEn: "Corinth to Thessalonica Church",
      titleAm: "ከቆሮንቶስ ወደ ተሰሎንቄ የተላከ ሁለተኛ ደብዳቤ",
      empireEn: "Roman Imperial Cult Emerging under the Caesars",
      empireAm: "የሮም ቄሳርን እንደ አምላክ የማምለክ አዝማሚያ",
      timeframe: "c. AD 51 – 52",
      eyewitnessPOVEn: "A church panicked by forged letters claiming the Day of the Lord had already occurred; believers quitting day jobs to sit on rooftops waiting for Christ, falling into gossip and freeloading.",
      eyewitnessPOVAm: "“የጌታ ቀን ደርሷል” በሚሉ የሐሰት ደብዳቤዎች የተደናገጡ አማኞች ሥራቸውን ትተው በሰዎች ኪሳራ መኖር በጀመሩ ጊዜ፣ ጳውሎስ “ሊሠራ የማይወድ አይብላ” ብሎ ሥርዓትን ያስያዘበት ሁኔታ።",
      historicalDynamicsEn: "Clarifying the eschatological timeline: the Rebellion (Apostasy) and the Man of Lawlessness must be revealed before Christ returns, destroyed by the breath of Jesus’ mouth.",
      historicalDynamicsAm: "ክርስቶስ ከመምጣቱ በፊት ዓመፅ እንደሚበዛና የጥፋት ልጅ የሆነው የዓመፅ ሰው እንደሚገለጥ፣ ክርስቶስ ግን በአፉ እስትንፋስ እንደሚያጠፋው ያስተማረ ትንቢት።",
      groundRealitiesEn: "Signing letters with his own distinctive handwriting to expose forgeries, eating bread earned by the sweat of one’s own brow.",
      groundRealitiesAm: "የሐሰት ደብዳቤዎችን ለመለየት በገዛ እጁ ፊርማውን ማኖር፣ እና በገዛ እጁ ደክሞ እንጀራን መብላት።"
    },
    theological: {
      titleEn: "Divine Retribution on Persecutors & Eternal Comfort for Saints",
      titleAm: "በጨቋኞች ላይ የሚመጣ ፍርድና ለቅዱሳን የተሰጠ ዘላለማዊ መጽናናት",
      covenantStageEn: "Cosmic Overthrow of Satanic Lawlessness",
      covenantStageAm: "የሰይጣን ዓመፅ በክርስቶስ ስም የሚሰበርበት ፍርድ",
      redemptiveThemeEn: "God is just: he will repay with affliction those who afflict his saints, when Jesus appears from heaven in flaming fire, inflicting vengeance on the unrepentant and glorified in his saints.",
      redemptiveThemeAm: "እግዚአብሔር ጻድቅ ነው፤ ጌታ ኢየሱስ ከሰማይ በእሳት ነበልባል ሲገለጥ መከራ ላሳዩአችሁ መከራን ይከፍላል፤ በቅዱሳኑም ሁሉ ዘንድ ይከበራል።",
      christForeshadowingEn: "The Lord who slays the Lawless One with the breath of his mouth and destroys him by the majesty of his appearing (2 Thess 2:8).",
      christForeshadowingAm: "የዓመፅን ሰው በአፉ እስትንፋስ የሚያጠፋውና በመምጣቱ ግርማ ፈጽሞ የሚሽረው ድል አድራጊው ጌታ ኢየሱስ (2 ተሰ 2:8)።",
      metaNarrativeAnchorEn: "2 Thessalonians provides the vital link between Daniel’s prophecies, Olivet Discourse, and Revelation regarding the final antichristic deception.",
      metaNarrativeAnchorAm: "2 ተሰሎንቄ ከዳንኤል ትንቢትና ከዮሐንስ ራእይ ጋር በማገናኘት የዓመፅን ሰውና የመጨረሻውን ዘመን ማታለል በግልጽ ያሳያል።"
    },
    linguistic: [
      {
        original: "Ἄνθρωπος τῆς Ἀνομίας",
        translit: "Anthropos tes Anomias",
        language: "Greek",
        amharicTerm: "የዓመፅ ሰው (የጥፋት ልጅ)",
        literalMeaningEn: "The Man of Lawlessness / Son of Destruction",
        literalMeaningAm: "የዓመፅ ሰው / የጥፋት ልጅ",
        theologicalDepthEn: "The eschatological antagonist who opposes God, exalting himself in the temple of God proclaiming himself to be God.",
        theologicalDepthAm: "ራሱን ከፍ ከፍ በማድረግ በእግዚአብሔር መቅደስ ተቀምጦ እኔ እግዚአብሔር ነኝ የሚለው የመጨረሻው የሐሰት ገዢ።",
        canonicalUsageEn: "2 Thessalonians 2:3–4.",
        canonicalUsageAm: "2 ተሰሎንቄ 2:3-4።"
      }
    ],
    psychological: {
      characterEn: "Paul & The Thessalonian Sufferers",
      characterAm: "ጳውሎስና የተሰሎንቄ አማኞች",
      emotionalStateEn: "Firm pastoral discipline, sobering vigilance against apocalyptic mania, anchored peace",
      emotionalStateAm: "የቀና ተግሣጽ፣ ከከንቱ መደናገጥ ነፃ መሆን፣ በእግዚአብሔር እውነት ላይ ያረፈ ሰላም",
      innerConflictEn: "Correcting Christians who let speculative end-times frenzy destroy daily ethical diligence and social responsibility.",
      innerConflictAm: "የፍጻሜውን ዘመን ትንቢት ሰበብ በማድረግ ሥራ የፈቱትንና የሚረብሹትን ሰዎች በወንድማማችነት ፍቅር ማስተካከልና መገሠጽ።",
      existentialQuestionEn: "\"Now may the Lord of peace himself give you peace at all times in every way. The Lord be with you all!\" (2 Thess 3:16)",
      existentialQuestionAm: "“የሰላምም ጌታ ራሱ በሁሉ መንገድ በየጊዜው ሰላምን ይስጣችሁ። ጌታ ከሁላችሁ ጋር ይሁን!” (2 ተሰ 3:16)",
      modernReflectionEn: "Waiting for Christ’s return does not mean escaping life or obsessing over conspiracies; it means living faithfully, working diligently, and standing firm in the truth.",
      modernReflectionAm: "የጌታን መምጣት መጠበቅ ማለት ሥራ መፍታት ወይም በፍርሃት መደናገጥ ሳይሆን፤ በዕለት ተዕለት ሕይወትህ ታማኝ ሆነህ በመልካም ሥራ መትጋት ነው።"
    }
  },

  // 54. 1 TIMOTHY (1ኛ ወደ ጢሞቴዎስ)
  54: {
    id: 'canon-book-54',
    sceneId: 'book-54',
    bookNr: 54,
    chapterStart: 1,
    titleEn: "1 Timothy: Guarding the Deposit, Healthy Doctrine & Church Leadership",
    titleAm: "1 ጢሞቴዎስ፡ አደራን መጠበቅ፣ ትክክለኛ ትምህርትና የመሪነት ሥርዓት",
    eraEn: "Post-First Imprisonment Pastoral Guidance",
    eraAm: "የአብያተ ክርስቲያናት መዋቅር የተደራጀበት ዘመን",
    geopolitical: {
      titleEn: "Macedonia to Ephesus Metropolis",
      titleAm: "ከመቄዶንያ ወደ ኤፌሶን ቤተክርስቲያን",
      empireEn: "Roman Empire (Consolidation of House Church Networks)",
      empireAm: "የሮም ኢምፓየርና የከተማ አብያተ ክርስቲያናት እድገት",
      timeframe: "c. AD 63 – 64",
      eyewitnessPOVEn: "An aging mentor writing to his young spiritual son facing intimidating older false teachers in Ephesus; giving blueprints for selecting bishops and deacons of unblemished integrity, caring for widows, and avoiding the trap of greed.",
      eyewitnessPOVAm: "አረጋዊው ጳውሎስ ለልጁ ለጢሞቴዎስ በኤፌሶን ቤተክርስቲያን እንዴት መመላለስ እንዳለበት ሲጽፍለት፤ የኤጲስ ቆጶሳትና የዲያቆናት መመዘኛዎችን፣ መበለቶችን የመንከባከብ ሥርዓትና የገንዘብ ፍቅርን ማስወገድን ሲያስተምረው።",
      historicalDynamicsEn: "Confronting myths, endless genealogies, and ascetic false teachers who forbid marriage and require abstaining from foods God created to be enjoyed with thanksgiving.",
      historicalDynamicsAm: "ጋብቻን የሚከለክሉና የተወሰኑ ምግቦችን እንዳይበሉ የሚያዙ የሐሰት መምህራንን በመቃወም፤ እግዚአብሔር የፈጠረው ሁሉ በመሰገን ከተወሰደ መልካም መሆኑን ያረጋገጠ መልእክት።",
      groundRealitiesEn: "Taking a little wine for frequent stomach infirmities, laying on of hands by the council of elders, the single mediator between God and men.",
      groundRealitiesAm: "ስለ ሆድ ሕመም ጥቂት ወይን መጠቀም፣ የሽማግሌዎች እጅ መጫን፣ እና በእግዚአብሔርና በሰው መካከል ያለው አንድያ አስታራቂ።"
    },
    theological: {
      titleEn: "The Household of God: Pillar and Buttress of Truth",
      titleAm: "የእግዚአብሔር ቤተሰብ፡ የእውነት ዓምድና መሠረት",
      covenantStageEn: "Stewardship of Apostolic Truth in the Local Assembly",
      covenantStageAm: "የሐዋርያት እውነት በአጥቢያ ቤተክርስቲያን ሲጠበቅ",
      redemptiveThemeEn: "\"There is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all\" (1 Tim 2:5–6). God desires all to be saved.",
      redemptiveThemeAm: "“አንድ እግዚአብሔር አለና፥ በእግዚአብሔርና በሰውም መካከል ያለው መካከለኛው ደግሞ አንድ አለ፥ እርሱም ሰው የሆነው ክርስቶስ ኢየሱስ ነው፤ ራሱንም ለሁሉ ቤዛ ሰጠ” (1 ጢሞ 2:5-6)።",
      christForeshadowingEn: "The Mystery of Godliness: manifested in the flesh, vindicated by the Spirit, seen by angels, proclaimed among the nations, believed on in the world, taken up in glory (1 Tim 3:16).",
      christForeshadowingAm: "የእውነተኛ አምልኮ ምስጢር፡ በሥጋ የተገለጠ፣ በመንፈስ የጸደቀ፣ ለመላእክት የታየ፣ በአሕዛብ የተሰበከ፣ በዓለም የታመነ፣ በክብር ያረገ (1 ጢሞ 3:16)።",
      metaNarrativeAnchorEn: "1 Timothy provides the foundational manual for pastoral theology, church governance, and doctrinal fidelity across generations.",
      metaNarrativeAnchorAm: "1 ጢሞቴዎስ ለቤተክርስቲያን አመራር፣ ለመንፈሳዊ ሥነ-ምግባርና ለእውነተኛ ትምህርት ጥበቃ የተሰጠ ታላቅ መመሪያ ነው።"
    },
    linguistic: [
      {
        original: "Παραθήκη",
        translit: "Paratheke",
        language: "Greek",
        amharicTerm: "አደራ (የተሰጠ አደራ)",
        literalMeaningEn: "Deposit / Sacred trust placed in bank vault",
        literalMeaningAm: "አደራ / በጥንቃቄ የተሰጠ ቅዱስ አደራ",
        theologicalDepthEn: "The body of apostolic Gospel truth committed to church leaders to guard against corruption or compromise.",
        theologicalDepthAm: "የወንጌል እውነት ሳይበረዝና ሳይለወጥ ለትውልድ እንዲተላለፍ የተሰጠ ታላቅ አደራ።",
        canonicalUsageEn: "1 Timothy 6:20; 2 Timothy 1:14.",
        canonicalUsageAm: "1 ጢሞቴዎስ 6:20፤ 2 ጢሞቴዎስ 1:14።"
      }
    ],
    psychological: {
      characterEn: "Paul & Timothy",
      characterAm: "ጳውሎስና ጢሞቴዎስ",
      emotionalStateEn: "Tender fatherly mentoring, urgent protective concern for the flock, dignified pastoral authority",
      emotionalStateAm: "የአባት ጥልቅ ፍቅር፣ ለመንጋው የተሰማ ጥበቃ፣ በእውነት ላይ የተመሠረተ የመሪነት ሥልጣን",
      innerConflictEn: "Timothy overcoming youthful timidity and health struggles to exercise uncompromising spiritual leadership over older believers.",
      innerConflictAm: "ጢሞቴዎስ ወጣትነቱና የጤና ድካሙ ሳያግደው፣ በእምነት፣ በፍቅርና በንጽሕና ለአማኞች ሁሉ አርአያ ሆኖ የመቆም ፈተና።",
      existentialQuestionEn: "\"Fight the good fight of the faith. Take hold of the eternal life to which you were called!\" (1 Tim 6:12)",
      existentialQuestionAm: "“መልካሙን የእምነት ገድል ተጋደል፥ የተጠራህበትንም... የዘላለምን ሕይወት ያዝ!” (1 ጢሞ 6:12)",
      modernReflectionEn: "Character matters more than charisma; in leadership, integrity, humility, and doctrinal faithfulness are non-negotiable foundations for lasting spiritual impact.",
      modernReflectionAm: "ከችሎታ ይልቅ ቅንነትና ንጹሕ ሕይወት ይበልጣል፤ እውነተኛ መሪ በእምነቱ፣ በንግግሩና በሥነ-ምግባሩ አርአያ የሆነ ታማኝ ሰው ነው።"
    }
  },

  // 55. 2 TIMOTHY (2ኛ ወደ ጢሞቴዎስ)
  55: {
    id: 'canon-book-55',
    sceneId: 'book-55',
    bookNr: 55,
    chapterStart: 1,
    titleEn: "2 Timothy: The Final Charge, The Dying Torch & Faithfulness to the End",
    titleAm: "2 ጢሞቴዎስ፡ የመጨረሻው የስንብት ቃል፣ የሚቀጣጠለው ችቦና እስከ ፍጻሜ መታመን",
    eraEn: "Paul’s Final Roman Imprisonment & Martyrdom",
    eraAm: "የጳውሎስ የመጨረሻው እሥራትና ሰማዕትነት ዋዜማ",
    geopolitical: {
      titleEn: "The Cold Mamertine Dungeon in Rome",
      titleAm: "በሮም የሚገኘው ቀዝቃዛው የማመርቲን ወህኒ ቤት",
      empireEn: "Neronian Bloodbath (Execution of Christians after Great Fire of Rome)",
      empireAm: "የቄሳር ኔሮ ጭካኔና በክርስቲያኖች ላይ የተካሄደው የደም እልቂት",
      timeframe: "c. AD 66 – 67",
      eyewitnessPOVEn: "A condemned old general sitting in a damp underground sewer dungeon shivering in cold; all his friends in Asia deserted him; Demas loved this present world and left; only Luke is with him; begging Timothy to bring his cloak before winter and his parchment scrolls.",
      eyewitnessPOVAm: "በቀዝቃዛው የወህኒ ጉድጓድ ውስጥ በብቸኝነት የተቀመጠው ጳውሎስ፤ ወዳጆቹ ሁሉ ሲተዉት ሉቃስ ብቻ አብሮት ሳለ፣ ለልጁ ለጢሞቴዎስ “ከክረምት በፊት ና፣ መጎናጸፊያዬንና የብራና መጻሕፍቴን ይዘህ ና” ብሎ በዕንባ የጻፈው የመጨረሻው ልብ የሚነካ መልእክት።",
      historicalDynamicsEn: "Final defense before Nero’s imperial court: \"At my first defense no one came to stand by me, but all deserted me... but the Lord stood by me and strengthened me\" (4:16–17).",
      historicalDynamicsAm: "በመጀመሪያው የፍርድ ችሎት ሁሉም ፈርተው ሲሸሹ ጌታ ግን በአጠገቡ ቆሞ እንዳበረታውና በቅርቡ በሰማዕትነት አንገቱን ለሰይፍ ለመስጠት እንደተዘጋጀ የተናገረበት ወቅት።",
      groundRealitiesEn: "Clanking heavy dungeon chains, shivering in the Roman winter dampness, the executioner’s axe sharpened outside the walls.",
      groundRealitiesAm: "የቀዝቃዛው ወህኒ ብርድ፣ የከበደ ሰንሰለት፣ እና ከሮም ቅጥር ውጭ የተሳለው የሰማዕትነት ሰይፍ።"
    },
    theological: {
      titleEn: "God Has Not Given Us a Spirit of Fear, but of Power, Love, and Self-Control",
      titleAm: "እግዚአብሔር የኃይልና የፍቅር ራስንም የመግዛት መንፈስ እንጂ የፍርሃት መንፈስ አልሰጠንም",
      covenantStageEn: "Passing the Unbroken Apostolic Torch",
      covenantStageAm: "የማይጠፋው የወንጌል ችቦ ለቀጣዩ ትውልድ ሲተላለፍ",
      redemptiveThemeEn: "\"I have fought the good fight, I have finished the race, I have kept the faith. Henceforth there is laid up for me the crown of righteousness\" (2 Tim 4:7–8).",
      redemptiveThemeAm: "“መልካሙን ገድል ተጋድያለሁ፥ ሩጫዬን ጨርሻለሁ፥ ሃይማኖቴን ጠብቄአለሁ፤ ወደ ፊት የጽድቅ አክሊል ተዘጋጅቶልኛል” (2 ጢሞ 4:7-8)።",
      christForeshadowingEn: "The One who abolished death and brought life and immortality to light through the Gospel (2 Tim 1:10); the Righteous Judge who awards crowns.",
      christForeshadowingAm: "ሞትን የሻረ፣ በወንጌል በኩል ሕይወትንና አለመበስበስን ወደ ብርሃን ያወጣው አዳኝ (2 ጢሞ 1:10)፤ የጽድቅ አክሊልን የሚሰጥ ጻድቅ ፈራጅ።",
      metaNarrativeAnchorEn: "2 Timothy is the dying testimony of the Apostle Paul, universally cherished as the most emotionally moving letter in the New Testament.",
      metaNarrativeAnchorAm: "2 ጢሞቴዎስ የታላቁ ሐዋርያ የጳውሎስ የመጨረሻው የስንብት ቃል ነው፤ በመላው አዲስ ኪዳን ውስጥ እጅግ ልብ የሚነካና የሚያበረታ መጽሐፍ ነው።"
    },
    linguistic: [
      {
        original: "Θεόπνευστος",
        translit: "Theopneustos",
        language: "Greek",
        amharicTerm: "በእግዚአብሔር መንፈስ የተነፈሰበት",
        literalMeaningEn: "God-breathed / Inspired by the breath of God",
        literalMeaningAm: "የእግዚአብሔር መንፈስ ያለበት (የእግዚአብሔር እስትንፋስ)",
        theologicalDepthEn: "All Scripture originates from the living breath of God, making it completely true, authoritative, and profitable for training in righteousness.",
        theologicalDepthAm: "መጽሐፍ ቅዱስ ሁሉ ከእግዚአብሔር እስትንፋስ የተገኘ በመሆኑ፣ ለማስተማርና ለጽድቅ ምክር ፍጹም የሆነ መለኮታዊ ቃል ነው።",
        canonicalUsageEn: "2 Timothy 3:16.",
        canonicalUsageAm: "2 ጢሞቴዎስ 3:16።"
      }
    ],
    psychological: {
      characterEn: "Paul the Dying Champion & Timothy",
      characterAm: "ጳውሎስ ሰማዕቱና ጢሞቴዎስ",
      emotionalStateEn: "Poignant nostalgia, freezing physical deprivation, unshakeable triumphant serenity facing death",
      emotionalStateAm: "የብቸኝነትና የብርድ ሥቃይ፣ የሚወደውን ልጁን የማየት ናፍቆት፣ በሞት ፊት የታየ አስደናቂ ሰላምና ድል",
      innerConflictEn: "Facing death completely alone on earth, yet overflowing with utter confidence: \"I know whom I have believed and am convinced he is able to guard my deposit!\"",
      innerConflictAm: "ሰዎች ሁሉ ጥለውት ቢሄዱም እንኳ “ያመንሁትን አውቃለሁና፥ የሰጠሁትንም አደራ እስከዚያ ቀን ድረስ ሊጠብቅ እንዲችል ተረድቼአለሁ” ብሎ በአምላኩ መታመኑ።",
      existentialQuestionEn: "\"For God gave us a spirit not of fear but of power and love and self-control!\" (2 Tim 1:7)",
      existentialQuestionAm: "“እግዚአብሔር የኃይልና የፍቅር ራስንም የመግዛት መንፈስ እንጂ የፍርሃት መንፈስ አልሰጠንምና!” (2 ጢሞ 1:7)",
      modernReflectionEn: "When everything you built is tested by persecution or loneliness, remember that faithfulness to the end is what matters; run your race so that at the finish line, you hear: \"Well done.\"",
      modernReflectionAm: "በሕይወትህ ፈተናዎች ሲበዙና ብቸኝነት ሲከብህ ተስፋ አትቁረጥ፤ ዋናው ነገር ሩጫህን በእምነት መጨረስ ነው፤ የጽድቅ አክሊል ተዘጋጅቶልሃልና ጽና።"
    }
  },

  // 56. TITUS (ወደ ቲቶ)
  56: {
    id: 'canon-book-56',
    sceneId: 'book-56',
    bookNr: 56,
    chapterStart: 1,
    titleEn: "Titus: Good Works, Sound Doctrine & The Order on Crete Island",
    titleAm: "ወደ ቲቶ፡ መልካም ሥራ፣ ትክክለኛ ትምህርትና በቀርጤስ የታየው ሥርዓት",
    eraEn: "Post-First Imprisonment Missionary Expansion",
    eraAm: "በደሴቶች ላይ አብያተ ክርስቲያናት የተተከሉበት ወቅት",
    geopolitical: {
      titleEn: "Crete Island (Aegean Sea) to Nicopolis (Epirus)",
      titleAm: "የቀርጤስ ደሴት እስከ ኒቆጶሊስ ከተማ",
      empireEn: "Roman Province of Crete & Cyrenaica",
      empireAm: "የሮም ግዛትና የቀርጤስ ደሴት",
      timeframe: "c. AD 63 – 65",
      eyewitnessPOVEn: "A tough, battle-hardened Greek apostolic troubleshooter left behind on the rugged pirate island of Crete; a culture infamous for lying, laziness, and gluttony; appointed to set in order broken churches and ordain godly elders in every town.",
      eyewitnessPOVAm: "“ቀርጤሳውያን ሁልጊዜ ውሸተኞች፣ ክፉዎች አራዊት፣ ሥራ ፈቶችና ሆዳሞች ናቸው” በሚባልበት ደሴት ላይ፤ ቲቶ በእያንዳንዱ ከተማ ሽማግሌዎችን እንዲሾም፣ ሕይወታቸው የተስተካከለና መልካም ሥራን የሚያደርጉ አማኞችን እንዲያነሳ የጳውሎስ ጥሪ።",
      historicalDynamicsEn: "Confronting greedy Jewish-Cretan circumcision teachers who upset whole households for dishonest financial gain; teaching sound doctrine that transforms social ethics.",
      historicalDynamicsAm: "ለገንዘብ ጥቅም ሲሉ ቤተሰቦችን በሐሰት ትምህርት የሚያውኩትን ሰዎች አፍ መዝጋት፤ ወንጌል በዕለት ተዕለት ኑሮ ውስጥ በመልካም ሥራ እንዲታይ ማስተማር።",
      groundRealitiesEn: "Olive groves on rocky Cretan hills, ships anchoring before winter at Fair Havens, appointing elders city by city.",
      groundRealitiesAm: "በቀርጤስ ድንጋያማ ኮረብታዎች ያሉ የወይራ እርሻዎች፣ እና በእያንዳንዱ ከተማ ለቤተክርስቲያን ታማኝ መሪዎችን መሾም።"
    },
    theological: {
      titleEn: "The Grace of God Has Appeared Bringing Salvation for All People",
      titleAm: "ሰዎችን ሁሉ የሚያድን የእግዚአብሔር ጸጋ ተገልጦአል",
      covenantStageEn: "Grace Training Believers to Renounce Ungodliness",
      covenantStageAm: "ጸጋ ዓለማዊ ምኞትን እንድንክድ ሲያስተምረን",
      redemptiveThemeEn: "\"For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions\" (Titus 2:11–12). Saved by mercy, devoted to good works.",
      redemptiveThemeAm: "“ሰዎችን ሁሉ የሚያድን የእግዚአብሔር ጸጋ ተገልጦአልና፤ ይህም ጸጋ፥ ኃጢአተኝነትንና ዓለማዊን ምኞት ክደን... ራሳችንን በመግዛትና በጽድቅ እግዚአብሔርንም በመምሰል እንድንኖር ያስተምረናል” (ቲቶ 2:11-12)።",
      christForeshadowingEn: "\"Waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness\" (Titus 2:13–14).",
      christForeshadowingAm: "የተባረከውን ተስፋችንን እርሱም የታላቁን አምላካችንንና የመድኃኒታችንን የኢየሱስ ክርስቶስን ክብር መገለጥ እንጠብቃለን (ቲቶ 2:13-14)።",
      metaNarrativeAnchorEn: "Titus demonstrates that genuine theology must produce visible moral transformation; sound doctrine always bears fruit in good works.",
      metaNarrativeAnchorAm: "የቲቶ መልእክት እውነተኛ እምነት በተግባር መልካም ሥራን እንደሚያፈራ ያረጋግጣል፤ ንጹሕ ትምህርት ወደ ተቀደሰ ሕይወት ይመራል።"
    },
    linguistic: [
      {
        original: "Καλὰ Ἔργα",
        translit: "Kala Erga",
        language: "Greek",
        amharicTerm: "መልካም ሥራ",
        literalMeaningEn: "Good works / Noble, beautiful, honorable deeds",
        literalMeaningAm: "መልካም ሥራ (ውብና የተከበረ ተግባር)",
        theologicalDepthEn: "Repeated 6 times in this short letter: not the root of salvation, but the indispensable fruit of transforming grace.",
        theologicalDepthAm: "በዚህ አጭር መልእክት ውስጥ 6 ጊዜ ተጠቅሷል፤ የመዳናችን ምክንያት ሳይሆን፣ በእግዚአብሔር ጸጋ የተለወጠ ሰው የሚያሳየው ተግባራዊ ፍሬ።",
        canonicalUsageEn: "Titus 2:7, 2:14, 3:8, 3:14.",
        canonicalUsageAm: "ቲቶ 2:7፤ 2:14፤ 3:8።"
      }
    ],
    psychological: {
      characterEn: "Titus & The Cretan Elders",
      characterAm: "ቲቶና የቀርጤስ ሽማግሌዎች",
      emotionalStateEn: "Pragmatic resolve, unflinching clarity against deceivers, passion for moral beauty",
      emotionalStateAm: "የተግባር ሰው መሆን፣ በሐሰተኞች ፊት ያለ ፍርሃት መቆም፣ ለቅድስናና ለመልካም ሥራ መቅናት",
      innerConflictEn: "Reforming an unruly, dishonest island culture without falling into cynical despair; insisting that grace can redeem the worst sinner.",
      innerConflictAm: "በክፋትና በውሸት የታወቀውን ሕዝብ ተስፋ ሳይቆርጡ በእግዚአብሔር ጸጋ የመለወጥና አብያተ ክርስቲያናትን በሥርዓት የማነጽ ከባድ ተልዕኮ።",
      existentialQuestionEn: "\"He saved us, not because of works done by us in righteousness, but according to his own mercy!\" (Titus 3:5)",
      existentialQuestionAm: "“እንደ ምሕረቱ መጠን ለአዲስ ልደት በሚሆነው መታጠብና በመንፈስ ቅዱስ በመታደስ አዳነን እንጂ፥ እኛ ስላደረግነው በጽድቅ ስለ ነበረው ሥራ አይደለም!” (ቲቶ 3:5)",
      modernReflectionEn: "Grace is not a license to live carelessly; true grace is a teacher that trains you to say \"No\" to ungodliness and \"Yes\" to passionate service for others.",
      modernReflectionAm: "ጸጋ በኃጢአት እንድትኖር ፈቃድ አይሰጥህም፤ እውነተኛ ጸጋ ዓለማዊ ምኞትን እንድትክድና በመልካም ሥራ ሁሉ እንድትተጋ የሚያስተምር ኃይል ነው።"
    }
  },

  // 57. PHILEMON (ወደ ፊልሞና)
  57: {
    id: 'canon-book-57',
    sceneId: 'book-57',
    bookNr: 57,
    chapterStart: 1,
    titleEn: "Philemon: The Radical Brotherhood of Grace & The Emancipation of Onesimus",
    titleAm: "ወደ ፊልሞና፡ የወንድማማችነት ጸጋና የኦኔሲሞስ ነፃ መውጣት",
    eraEn: "Roman Prison Letters",
    eraAm: "በሮም እሥር ቤት የተጻፈ የግል ደብዳቤ",
    geopolitical: {
      titleEn: "Rome Prison to the Colossian Villa of Philemon",
      titleAm: "ከሮም ወህኒ ቤት እስከ ቆላስይስ የፊልሞና ቤት",
      empireEn: "Imperial Roman Slave Economy (60 Million Slaves)",
      empireAm: "የሮም ኢምፓየርና የባሪያ ንግድ ሥርዓት",
      timeframe: "c. AD 60 – 62",
      eyewitnessPOVEn: "A runaway slave named Onesimus fleeing across the empire to hide in the crowded slums of Rome; bumping into Paul in chains and becoming a born-again Christian; Paul sending him back to his wealthy Christian master not as property, but as a beloved brother in the Lord.",
      eyewitnessPOVAm: "ከጌታው ከአደጋ ሸሽቶ ወደ ሮም የኮበለለው ባሪያው ኦኔሲሞስ በእስር ላይ ከነበረው ከጳውሎስ ጋር ተገናኝቶ በክርስቶስ ሲያምን፤ ጳውሎስ ወደ ቀድሞ ጌታው ሲመልሰው “ከእንግዲህ ወዲህ እንደ ባሪያ ሳይሆን ከተወደደ ወንድም በላይ አድርገህ ተቀበለው” ብሎ ሲለምንለት።",
      historicalDynamicsEn: "Under Roman law, runaway slaves could be branded with a hot iron (FUG for fugitīvus) or crucified; Paul demolishes the slave-master barrier not by violent political rebellion, but by the subversive explosive power of love.",
      historicalDynamicsAm: "በሮም ሕግ መሠረት የኮበለለ ባሪያ በግንባሩ ላይ በእሳት ተተኩሶ ሊሰቀል ይችል ነበር፤ ጳውሎስ ግን ሁለቱንም በክርስቶስ አንድ ወንድማማች በማድረግ የባርነትን ሥርዓት ከሥሩ የናደበት ድንቅ ታሪክ።",
      groundRealitiesEn: "The signet ring of Philemon, stolen silver coins, Paul’s promissory note written in his own hand: \"If he has wronged you or owes you anything, charge that to my account.\"",
      groundRealitiesAm: "የተሰረቀ ገንዘብ፣ እና ጳውሎስ በገዛ እጁ የጻፈው የዕዳ ዋስትና፡ “አንተን የበደለበት ወይም ዕዳ ያለበት እንደ ሆነ በእኔ ላይ ቍጠረው፤ እኔ እከፍላለሁ”።"
    },
    theological: {
      titleEn: "Imputation and Reconciliation: Charge That to My Account",
      titleAm: "የዕዳ ልውውጥና እርቅ፡ በእኔ ላይ ቁጠረው",
      covenantStageEn: "New Covenant Equality in Christ Breaking Imperial Caste Systems",
      covenantStageAm: "በክርስቶስ የተገኘው የሁሉም አማኞች እኩልነት",
      redemptiveThemeEn: "\"Receive him as you would receive me. If he has wronged you at all, or owes you anything, charge that to my account\" (Philemon 17–18). A living picture of the Gospel of substitution.",
      redemptiveThemeAm: "“እንደ እኔ አድርገህ ተቀበለው፤ አንተን የበደለበት ወይም ዕዳ ያለበት እንደ ሆነ በእኔ ላይ ቍጠረው” (ፊልሞና 17-18)፤ ክርስቶስ ስለ እኛ ዕዳውን ሁሉ እንደከፈለ የሚያሳይ ሕያው የወንጌል ምሳሌ።",
      christForeshadowingEn: "Paul standing between Philemon and runaway Onesimus mirrors Christ our Mediator, who steps between holy God and guilty sinners, bearing their debt upon his own cross.",
      christForeshadowingAm: "ጳውሎስ በጌታውና በባሪያው መካከል እንደ አስታራቂ መቆሙ፣ በእግዚአብሔርና በደለኛ በሆነው የሰው ልጅ መካከል የቆመውንና ዕዳችንን የተሸከመውን የክርስቶስን አማላጅነት ያሳያል።",
      metaNarrativeAnchorEn: "The shortest letter of Paul (25 verses), delivering a devastating moral explosion that undermined the foundation of Roman slavery.",
      metaNarrativeAnchorAm: "የጳውሎስ እጅግ አጭሩ መልእክት (25 ቁጥሮች)፤ የወንጌል ፍቅር ማኅበራዊ ልዩነቶችንና ጭቆናዎችን እንዴት እንደሚያፈርስ በተግባር ያሳየ መጽሐፍ።"
    },
    linguistic: [
      {
        original: "Ἐλλόγα",
        translit: "Elloga",
        language: "Greek",
        amharicTerm: "በእኔ ላይ ቁጠረው",
        literalMeaningEn: "Charge to my account / Impute to me",
        literalMeaningAm: "በእኔ ላይ ቍጠረው (የዕዳ መዝገብ)",
        theologicalDepthEn: "The technical financial/accounting term for theological imputation: Paul takes Onesimus’s financial liability so he can be fully forgiven.",
        theologicalDepthAm: "በነገረ መለኮት የጽድቅ ልውውጥን የሚያሳይ ቃል፤ ጳውሎስ የኦኔሲሞስን ዕዳ በራሱ ላይ እንደቆጠረ፣ ክርስቶስም የኃጢአታችንን ዕዳ በራሱ ላይ ቆጥሮ ከፈለልን።",
        canonicalUsageEn: "Philemon 18; Romans 5:13.",
        canonicalUsageAm: "ፊልሞና 18፤ ሮሜ 5:13።"
      }
    ],
    psychological: {
      characterEn: "Paul, Philemon & Onesimus",
      characterAm: "ጳውሎስ፣ ፊልሞናና ኦኔሲሞስ",
      emotionalStateEn: "Exquisite tact, tender diplomatic persuasion, deep joy of transforming a thief into a brother",
      emotionalStateAm: "የበሰለ የፍቅር ጥበብ፣ ራስን ዝቅ አድርጎ መለመን፣ ባሪያ የነበረው ወንድም ሆኖ ሲመለስ የታየ ታላቅ ደስታ",
      innerConflictEn: "Paul having the apostolic authority to command Philemon, yet choosing to plead on the basis of love so his obedience would be voluntary and heartfelt.",
      innerConflictAm: "ጳውሎስ በሥልጣኑ ማዘዝ ሲችል፣ ፍቅር በግድ ሳይሆን በፈቃደኝነት እንዲገለጥ በትሕትና ለምኖት የፊልሞናን ልብ መማረኩ።",
      existentialQuestionEn: "\"No longer as a bondservant but more than a bondservant, as a beloved brother!\" (Philemon 16)",
      existentialQuestionAm: "“ከእንግዲህ ወዲህ እንደ ባሪያ ሳይሆን፥ ከባሪያ የሚሻል የተወደደ ወንድም ነው!” (ፊልሞና 16)",
      modernReflectionEn: "The Gospel does not leave social hierarchies untouched; when you look at someone society rejects, grace commands you to see a brother or sister for whom Christ died.",
      modernReflectionAm: "ወንጌል የሰዎችን ማኅበራዊ መለያየት ያፈርሳል፤ ዓለም ያገለለውንና የናቀውን ሰው ስታይ፣ ክርስቶስ የሞተለትን የተወደደ ወንድም አድርገህ ተቀበለው።"
    }
  },

  // 58. HEBREWS (ወደ እብራውያን)
  58: {
    id: 'canon-book-58',
    sceneId: 'book-58',
    bookNr: 58,
    chapterStart: 1,
    titleEn: "Hebrews: The Superior Christ, The Eternal High Priest & The Better Covenant",
    titleAm: "ወደ ዕብራውያን፡ የክርስቶስ የበላይነት፣ ዘላለማዊ ሊቀ ካህናትና የተሻለው ኪዳን",
    eraEn: "Pre-AD 70 Temple Crisis",
    eraAm: "የኢየሩሳሌም መቅደስ ከመፍረሱ በፊት የነበረ ወቅት",
    geopolitical: {
      titleEn: "From Ancient Tabernacle Shadows to the Heavenly Holy of Holies",
      titleAm: "ከብሉይ ኪዳን የማደሪያ ድንኳን ጥላ እስከ ሰማያዊው ቅድስተ ቅዱሳን",
      empireEn: "Imperial Rome on the Brink of the Jewish War (AD 66–70)",
      empireAm: "የሮም ኢምፓየርና በአይሁድ ምድር የፈነዳው ጦርነት",
      timeframe: "c. AD 64 – 68",
      eyewitnessPOVEn: "Jewish Christians suffering loss of property and social ostracism, tempted to retreat back into the visible safety of the Levitical temple rituals; an apostolic orator showing that the temple sacrifices were only temporary shadows—Jesus is the once-for-all reality.",
      eyewitnessPOVAm: "ንብረታቸው የተዘረፈባቸውና በስደት የተጨነቁ የዕብራውያን አማኞች ከስደት ለማምለጥ ወደ ብሉይ ኪዳን ሥርዓት ለመመለስ ሲፈተኑ፤ ደራሲው ክርስቶስ ከመላእክት፣ ከሙሴና ከአሮን ክህነት ሁሉ እንደሚበልጥና መሥዋዕቱም ለአንዴና ለመጨረሻ ጊዜ የተፈጸመ ፍጹም መሆኑን ሲያረጋግጥላቸው።",
      historicalDynamicsEn: "Solomon’s/Herod’s temple was still standing and functioning; the author warns that shrinking back to animal sacrifices after knowing Christ’s blood is spiritual apostasy.",
      historicalDynamicsAm: "የኢየሩሳሌም መቅደስ በቅርቡ እንደሚፈርስና የእንስሳት መሥዋዕት ማብቃቱን ማሳየት፤ ክርስቶስን ትቶ ወደ ቀድሞው ሥርዓት ማፈግፈግ ታላቅ ጥፋት እንደ ሆነ የተሰጠ ብርቱ ማስጠንቀቂያ።",
      groundRealitiesEn: "Bulls and goats slaughtered on the altar, the thick veil torn in two, the cloud of witnesses cheering runners in an arena.",
      groundRealitiesAm: "የኮርማዎችና የፍየሎች ደም፣ ለሁለት የተቀደደው የመቅደሱ መጋረጃ፣ እና በእምነት አደባባይ ሩጫቸውን የሚመለከቱ የደመና ያህል ምስክሮች።"
    },
    theological: {
      titleEn: "Jesus Christ: The Same Yesterday and Today and Forever",
      titleAm: "ኢየሱስ ክርስቶስ ትናንትና ዛሬ እስከ ዘላለምም ያው ነው",
      covenantStageEn: "The New Covenant Enacted on Better Promises",
      covenantStageAm: "በተሻለ ተስፋ የተመሠረተው አዲሱና ዘላለማዊው ኪዳን",
      redemptiveThemeEn: "\"He is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them\" (Heb 7:25).",
      redemptiveThemeAm: "“ስለ እነርሱ ሊያማልድ ሁልጊዜ በሕይወት ይኖራልና ስለዚህ ደግሞ በእርሱ ወደ እግዚአብሔር የሚመጡትን ፈጽሞ ሊያድናቸው ይችላል” (ዕብ 7:25)።",
      christForeshadowingEn: "The Radiance of God’s glory and exact imprint of his nature (Heb 1:3); High Priest after the order of Melchizedek; Pioneer and Perfecter of our faith.",
      christForeshadowingAm: "የክብሩ መንጸባረቅና የባሕርዩ ምሳሌ የሆነው (ዕብ 1:3)፤ እንደ መልከ ጼዴቅ ሹመት የዘላለም ሊቀ ካህናት፤ የእምነታችን ጀማሪና ፈጻሚ።",
      metaNarrativeAnchorEn: "Hebrews 11 (The Hall of Faith) rallies believers across redemptive history who conquered through enduring faith.",
      metaNarrativeAnchorAm: "ዕብራውያን 11 (የእምነት ምዕራፍ) ከአቤል እስከ ነቢያት ድረስ በእምነት አሸንፈው ያለፉትን የእምነት ጀግኖች ዝርዝር ያቀርባል።"
    },
    linguistic: [
      {
        original: "Ἐφάπαξ",
        translit: "Ephapax",
        language: "Greek",
        amharicTerm: "አንድ ጊዜ ብቻ (ለዘላለም)",
        literalMeaningEn: "Once for all / Decisively once and never to be repeated",
        literalMeaningAm: "አንድ ጊዜ ፈጽሞ (የማይደገም)",
        theologicalDepthEn: "Unlike priests who stand daily offering repetitive animal sacrifices, Jesus sat down at God’s right hand because his single sacrifice permanently perfected believers.",
        theologicalDepthAm: "በየቀኑ ይቀርብ ከነበረው የእንስሳት መሥዋዕት በተቃራኒ፣ ክርስቶስ ራሱን ለአንዴና ለመጨረሻ ጊዜ ፍጹም መሥዋዕት አድርጎ አቅርቦ በእግዚአብሔር ቀኝ ተቀመጠ።",
        canonicalUsageEn: "Hebrews 7:27, 9:12, 10:10; Romans 6:10.",
        canonicalUsageAm: "ዕብራውያን 7:27፤ 9:12፤ 10:10።"
      }
    ],
    psychological: {
      characterEn: "The Apostolic Preacher & The Suffering Pilgrims",
      characterAm: "ሐዋርያዊው ሰባኪና መከራ የተቀበሉት ተጓዦች",
      emotionalStateEn: "Majestic rhetorical grandeur, heart-pounding pastoral warnings, unwavering rock-solid confidence in the Heavenly Sanctuary",
      emotionalStateAm: "የንግግር ጥልቀትና ግርማ፣ በፍቅር የተሞላ ጥብቅ ማስጠንቀቂያ፣ ወደ ሰማያዊው ቅድስተ ቅዱሳን በድፍረት የመግባት እምነት",
      innerConflictEn: "Feeling the magnetic pull of ancient visible religious ritual when worldly opposition heats up, choosing rather to go outside the camp bearing Christ’s reproach.",
      innerConflictAm: "የሚታየው የዓለም ሃይማኖትና ስደት ሲገፋፋ፣ ክብሩንና መከራውን ተካፍሎ ከሰፈር ውጭ ወጥቶ ክርስቶስን የመከተል ጽናት።",
      existentialQuestionEn: "\"Let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith!\" (Heb 12:1–2)",
      existentialQuestionAm: "“የእምነታችንንም ራስና ፈጻሚውን ኢየሱስን ተመልክተን፥ በፊታችን ያለውን ሩጫ በትዕግሥት እንሩጥ!” (ዕብ 12:1-2)",
      modernReflectionEn: "When the world shakes and rituals crumble, look to Jesus; He is your sympathetic High Priest who understands your weaknesses and invites you to come boldly to the throne of grace.",
      modernReflectionAm: "ዓለም ስትናወጥና የምታያቸው ነገሮች ሁሉ ሲጠፉ፣ ዓይኖችህን በኢየሱስ ላይ አድርግ፤ እርሱ ድካምህን የሚረዳ ሊቀ ካህናት ነውና በድፍረት ወደ ጸጋው ዙፋን ቅረብ።"
    }
  },

  // 59. JAMES (የያዕቆብ መልእክት)
  59: {
    id: 'canon-book-59',
    sceneId: 'book-59',
    bookNr: 59,
    chapterStart: 1,
    titleEn: "James: Faith That Works, The Royal Law & The Tamed Tongue",
    titleAm: "የያዕቆብ መልእክት፡ በተግባር የሚገለጥ እምነት፣ የነጻነት ሕግና አንደበትን መግዛት",
    eraEn: "Early Jerusalem Church Leadership",
    eraAm: "የቀዳማይቱ የኢየሩሳሌም ቤተክርስቲያን ዘመን",
    geopolitical: {
      titleEn: "Jerusalem Council to the Twelve Tribes Scattered in the Dispersion",
      titleAm: "ከኢየሩሳሌም ሸንጎ በተበተኑት በዐሥራ ሁለቱ ነገዶች ለነበሩ አማኞች",
      empireEn: "Roman Empire & Agrarian Landlord Exploitation in Judea",
      empireAm: "የሮም ኢምፓየርና የመሬት ከበርቴዎች ጭቆና",
      timeframe: "c. AD 45 – 48",
      eyewitnessPOVEn: "The Lord’s half-brother—known as \"James the Just\" with camel-calloused knees from prayer—writing like an Old Testament wisdom sage; tearing down hypocrisy: rich men in gold rings given best seats while poor men in filthy rags sit on the dirt floor.",
      eyewitnessPOVAm: "በጸሎቱ ብዛት ጉልበቶቹ እንደ ግመል ጉልበት የሻከሩት የጌታ ወንድም ጻድቁ ያዕቆብ፤ ወርቅ ቀለበት ያደረገው ባለጸጋ በክብር ሲቀመጥ የተናቀው ደሃ በእግር መረገጫው ሥር ሲቀመጥ እያየ “ለሰው ፊት አታድሉ” ብሎ የገሠጸበት ኃይለኛ መልእክት።",
      historicalDynamicsEn: "Early Jewish Christian communities scattered throughout Syria and Asia Minor facing poverty and exploitation by rich landowners who withheld their harvest wages.",
      historicalDynamicsAm: "ድሃ ገበሬዎች የደከሙበት የቀን ደመወዝ በባለጸጎች ሲነጠቅና ሲጨቆኑ፣ እግዚአብሔር የድሆችን ጩኸት እንደሚሰማና በግፈኞች ላይ እንደሚፈርድ የገለጸበት ወቅት።",
      groundRealitiesEn: "A horse’s bit in the mouth, a small ship’s rudder guiding massive vessels in storms, a spark setting a whole forest on fire, anointing the sick with oil.",
      groundRealitiesAm: "የፈረስ ልጓም፣ ትልቅ መርከብን የሚመራ ትንሽ መሪ፣ ታላቅ ጫካን የሚያቃጥል ትንሽ የእሳት ፍም፣ እና ሕሙማንን በዘይት ቀብቶ መጸለይ።"
    },
    theological: {
      titleEn: "Faith Without Works is Dead: The Royal Law of Liberty",
      titleAm: "ሥራ የሌለው እምነት የሞተ ነው፡ የነጻነት ንጉሣዊ ሕግ",
      covenantStageEn: "New Covenant Wisdom: Living the Sermon on the Mount",
      covenantStageAm: "የተራራው ስብከት ትምህርት በዕለት ተዕለት ሕይወት ሲተረጎም",
      redemptiveThemeEn: "\"Be doers of the word, and not hearers only, deceiving yourselves\" (James 1:22). Genuine saving faith inevitably produces active mercy, generosity, and justice.",
      redemptiveThemeAm: "“ቃሉን የምታደርጉ ሁኑ፥ ራሳችሁን እያሳታችሁ የምትሰሙ ብቻ አትሁኑ” (ያዕ 1:22)፤ እውነተኛ እምነት በተግባር መልካም ፍሬን ያፈራል።",
      christForeshadowingEn: "\"Our Lord Jesus Christ, the Lord of glory\" (James 2:1); the Judge standing at the doors ready to bring down proud oppressors.",
      christForeshadowingAm: "“የክብር ጌታ የሆነው ጌታችን ኢየሱስ ክርስቶስ” (ያዕ 2:1)፤ በደጅ ቆሞ የሚፈርድ ጻድቅ ፈራጅ።",
      metaNarrativeAnchorEn: "James is the New Testament’s Book of Proverbs, saturated with the practical ethics of Jesus’ Sermon on the Mount.",
      metaNarrativeAnchorAm: "የያዕቆብ መልእክት የአዲስ ኪዳን የምሳሌ መጽሐፍ ነው፤ የተራራውን ስብከት በዕለት ተዕለት ሕይወት ውስጥ እንዴት ተግባራዊ ማድረግ እንደምንችል ያስተምራል።"
    },
    linguistic: [
      {
        original: "Πίστις χωρὶς ἔργων",
        translit: "Pistis choris ergon",
        language: "Greek",
        amharicTerm: "ሥራ የሌለው እምነት",
        literalMeaningEn: "Faith without works / Trust devoid of active deeds",
        literalMeaningAm: "ሥራ የሌለው እምነት የሞተ ነው",
        theologicalDepthEn: "Not works earning salvation (contra Paul), but works as the vital pulse and undeniable proof of authentic living faith.",
        theologicalDepthAm: "በሥራ መዳን ሳይሆን፣ ሕያው የሆነ እውነተኛ እምነት ራሱን በመልካም ሥራ እንደሚገልጥ ማረጋገጫ።",
        canonicalUsageEn: "James 2:17, 2:20, 2:26.",
        canonicalUsageAm: "ያዕቆብ 2:17፤ 2:26።"
      }
    ],
    psychological: {
      characterEn: "James the Just & The Suffering Laborers",
      characterAm: "ጻድቁ ያዕቆብና የተበደሉት ሠራተኞች",
      emotionalStateEn: "Piercing ethical clarity, fatherly wisdom, righteous fury against hypocrisy, patient perseverance waiting for the early and late rain",
      emotionalStateAm: "የተግባር ቅንነት፣ ግብዝነትን መጥላት፣ የተቸገሩትን የመርዳት ፍቅር፣ እንደ ገበሬ በመታገሥ ጌታን መጠበቅ",
      innerConflictEn: "Watching believers claim orthodox theological confessions while treating poor brethren with callous contempt, crying: \"Even demons believe—and shudder!\"",
      innerConflictAm: "አማኞች “እግዚአብሔር አንድ እንደ ሆነ እናምናለን” እያሉ በተግባር ድሆችን ሲያገሉ ማየት፤ “አጋንንት ደግሞ ያምናሉ ይንቀጠቀጣሉም!” በማለት የተናገረው እውነት።",
      existentialQuestionEn: "\"Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world!\" (James 1:27)",
      existentialQuestionAm: "“በእግዚአብሔር አብ ዘንድ ንጹሕ የሆነ ነውርም የሌለበት አምልኮ ይህ ነው፤ ወላጆች የሌላቸውን ልጆች ባልቴቶችንም በመከራቸው መጠየቅ፥ ከዓለምም ቆሻሻ ሰውነቱን መጠበቅ ነው!” (ያዕ 1:27)",
      modernReflectionEn: "Talk is cheap; true faith is seen in how you control your tongue when angry, how you open your wallet for the hurting, and how you refuse to cater to worldly status.",
      modernReflectionAm: "ማውራት ብቻውን ዋጋ የለውም፤ እውነተኛ እምነትህ የሚታየው በቁጣ ጊዜ አንደበትህን በመግዛትህ፣ ለተቸገሩት እጅህን በመዘርጋትህና ለዓለም ክብር ባለመንበርከክህ ነው።"
    }
  },

  // 60. 1 PETER (1ኛ የጴጥሮስ መልእክት)
  60: {
    id: 'canon-book-60',
    sceneId: 'book-60',
    bookNr: 60,
    chapterStart: 1,
    titleEn: "1 Peter: Living Hope in the Fiery Crucible & The Royal Priesthood",
    titleAm: "1 ጴጥሮስ፡ በእሳት ፈተና ውስጥ ያለ ሕያው ተስፋና የተመረጠ ትውልድ",
    eraEn: "Imperial Roman Persecution (Nero’s Pogroms)",
    eraAm: "በቄሳር ኔሮ ዘመን የተካሄደው አስከፊ ስደት",
    geopolitical: {
      titleEn: "Babylon (Rome) to the Strangers Scattered Across Asia Minor",
      titleAm: "ከባቢሎን (ሮም) በጳንጦስ፣ በገላትያ፣ በቀጶዶቅያ ለተበተኑት ስደተኞች",
      empireEn: "Imperial Rome (Christians Slandered as Atheists, Cannibals, and Traitors)",
      empireAm: "የሮም ኢምፓየርና በክርስቲያኖች ላይ የተነሳው የሐሰት ውንጀላ",
      timeframe: "c. AD 62 – 64",
      eyewitnessPOVEn: "The chief apostle who once denied Jesus at a charcoal fire writing from Rome on the brink of his own upside-down crucifixion; comforting terrified believers being ostracized, beaten, and slandered as evildoers by pagan neighbors.",
      eyewitnessPOVAm: "በአንድ ወቅት ኢየሱስን በከሰል እሳት አጠገብ ክዶ የነበረው ጴጥሮስ በሮም ወህኒ ሆኖ ሲጽፍ፤ በክፉ አድራጊነት ተወንጅለው በእሳት ፈተና ውስጥ ላሉት አማኞች “ስለ ክርስቶስ ስም ብትሰደቡ የክብር መንፈስ በእናንተ ላይ ያርፋልና ብፁዓን ናችሁ” ብሎ ሲያበረታታቸው።",
      historicalDynamicsEn: "Social and legal harassment in the provinces of Asia Minor: Christians refusing to burn incense to the emperor or participate in neighborhood pagan civic festivals.",
      historicalDynamicsAm: "ለቄሳር ምስል አንሰግድም በማለታቸው ከአካባቢው ማኅበረሰብ የተገለሉ፣ ስማቸው የጠፋና በድንጋጤ ውስጥ የነበሩ ክርስቲያኖች የነበሩበት ወቅት።",
      groundRealitiesEn: "Gold refined in the assayer’s furnace, milk for newborn babes, a chief cornerstone rejected by builders, lion prowling in the dark.",
      groundRealitiesAm: "በእሳት የሚፈተን ወርቅ፣ ለሕፃናት የሚሆን ንጹሕ ወተት፣ ግንበኞች የናቁት የማዕዘን ራስ ድንጋይ፣ እና የሚውጠውን ፈልጎ የሚያገሣ አንበሳ።"
    },
    theological: {
      titleEn: "A Living Hope Through the Resurrection of Jesus Christ",
      titleAm: "በኢየሱስ ክርስቶስ ትንሣኤ የተገኘ ሕያው ተስፋ",
      covenantStageEn: "The New Israel: Chosen Race, Royal Priesthood, Holy Nation",
      covenantStageAm: "የተመረጠ ትውልድ፣ የንጉሥ ካህናት፣ የተቀደሰ ሕዝብ",
      redemptiveThemeEn: "\"You are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness\" (1 Peter 2:9).",
      redemptiveThemeAm: "“እናንተ ግን ከጨለማ ወደሚደነቅ ብርሃኑ የጠራችሁን የእርሱን በጎነት እንድታውሩ የተመረጠ ትውልድ፥ የንጉሥ ካህናት፥ ቅዱስ ሕዝብ፥ ለርስቱ የተለየ ወገን ናችሁ” (1 ጴጥ 2:9)።",
      christForeshadowingEn: "The Lamb without blemish or spot whose precious blood ransomed us (1:19); who committed no sin, yet bore our sins in his body on the tree (2:22–24).",
      christForeshadowingAm: "ያለ ነውርና ያለ እድፍ እንደ ሆነው የበግ ክቡር ደም የተዋጀንበት ክርስቶስ (1:19)፤ ኃጢአት ያላደረገ፣ በሰውነቱ ኃጢአታችንን በእንጨት ላይ የተሸከመ አዳኝ (2:24)።",
      metaNarrativeAnchorEn: "1 Peter is the premier manual on Christian suffering: how to maintain radiant grace, submit to hostile authorities, and silence slander by doing good.",
      metaNarrativeAnchorAm: "1 ጴጥሮስ በመከራ ውስጥ እንዴት መኖር እንዳለብን የሚያስተምር ታላቅ መጽሐፍ ነው፤ በመልካም ሥራ የሰዎችን ከንቱ ንግግር ዝም ማሰኘት እንደምንችል ያሳያል።"
    },
    linguistic: [
      {
        original: "Ἐλπίδα ζῶσαν",
        translit: "Elpida zosan",
        language: "Greek",
        amharicTerm: "ሕያው ተስፋ",
        literalMeaningEn: "A living, vibrant, incorruptible hope",
        literalMeaningAm: "ሕያው ተስፋ",
        theologicalDepthEn: "Hope that does not fade, spoil, or perish because it is anchored directly in the historical bodily resurrection of Jesus Christ.",
        theologicalDepthAm: "በዚህ ዓለም ሁኔታ ላይ ሳይሆን በክርስቶስ ትንሣኤ ላይ የተመሠረተ፣ የማይጠፋ፣ እድፍ የሌለበትና የማይደርቅ ሰማያዊ ተስፋ።",
        canonicalUsageEn: "1 Peter 1:3.",
        canonicalUsageAm: "1 ጴጥሮስ 1:3።"
      }
    ],
    psychological: {
      characterEn: "Peter & Silvanus (Silas)",
      characterAm: "ጴጥሮስና ታማኙ ወንድም ስልዋኖስ",
      emotionalStateEn: "Tender pastoral warmth, fire-tested courage, triumphant joy outshining imperial terror",
      emotionalStateAm: "የአባት ፍቅር፣ በእሳት የተፈተነ ጽናት፣ በጨለማ ውስጥ የበራ የታላቅ ደስታ ብርሃን",
      innerConflictEn: "Reminding believers that suffering is not abnormal: \"Do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening.\"",
      innerConflictAm: "መከራ ሲመጣ እንግዳ ነገር እንደ ደረሰባችሁ አትደነቁ፤ ነገር ግን የክርስቶስን መከራ በመካፈላችሁ ደስ ይበላችሁ በማለት ፍርሃታቸውን ማስወገዱ።",
      existentialQuestionEn: "\"Cast all your anxieties on him, because he cares for you!\" (1 Peter 5:7)",
      existentialQuestionAm: "“እርሱ ስለ እናንተ ያስባልና የሚያስጨንቃችሁን ሁሉ በእርሱ ላይ ጣሉት!” (1 ጴጥ 5:7)",
      modernReflectionEn: "When society slanders or marginalizes your faith, do not retaliate with anger; your suffering is refining your faith like gold—cast your anxieties on God, because He deeply cares for you.",
      modernReflectionAm: "ሰዎች በእምነትህ ምክንያት ሲሳለቁብህ በቁጣ አትመልስ፤ መከራህ እምነትህን እንደ ወርቅ ያጠራዋል፤ የሚያስጨንቅህን ሁሉ በእርሱ ላይ ጣለው እርሱ ያስብልሃልና።"
    }
  },

  // 61. 2 PETER (2ኛ የጴጥሮስ መልእክት)
  61: {
    id: 'canon-book-61',
    sceneId: 'book-61',
    bookNr: 61,
    chapterStart: 1,
    titleEn: "2 Peter: Partakers of the Divine Nature & The Scorching Day of the Lord",
    titleAm: "2 ጴጥሮስ፡ የመለኮት ባሕርይ ተካፋዮችና የሚቀልጠው የእግዚአብሔር ቀን",
    eraEn: "Eve of Peter’s Martyrdom",
    eraAm: "የጴጥሮስ የሰማዕትነት ዋዜማ",
    geopolitical: {
      titleEn: "Rome (Mamertine Dungeon) to the Universal Church",
      titleAm: "ከሮም ወህኒ ለዓለም አብያተ ክርስቲያናት የተላከ የመጨረሻ ቃል",
      empireEn: "Neronian Rome (Executions of Peter and Paul)",
      empireAm: "የኔሮ ጨካኝ መንግሥትና የሐዋርያት የሰማዕትነት ሰዓት",
      timeframe: "c. AD 65 – 67",
      eyewitnessPOVEn: "The aged apostle knowing his death is imminent (\"putting off my tent\"), recalling the Transfiguration on the Holy Mountain where he saw Jesus glowing with heavenly majesty; warning against arrogant scoffers who claim Jesus is never coming back.",
      eyewitnessPOVAm: "ድንኳኑን (ሥጋውን) የሚጥልበት ጊዜ እንደ ቀረበ የተረዳው ጴጥሮስ፤ በተቀደሰው ተራራ ላይ የክርስቶስን ግርማ በገዛ ዓይኖቹ ያየበትን ክብር እያስታወሰ፣ “የመምጣቱ የተስፋ ቃል ወዴት አለ?” እያሉ በሚሳለቁ ሐሰተኞች ላይ ሲያስጠነቅቅ።",
      historicalDynamicsEn: "Infiltration by antinomian, sexually corrupt false teachers who twisted Paul’s letters on grace to justify reckless sensual indulgence and deny future judgment.",
      historicalDynamicsAm: "የጳውሎስን የመልእክት ቃላት በማጣመም “ጸጋ አለና እንደ ፈለጋችሁ ኑሩ” የሚሉትንና የፍርድን ቀን የሚክዱትን ሐሰተኞች ያጋለጠበት ኃይለኛ ትንቢት።",
      groundRealitiesEn: "A dog returning to its own vomit, a washed sow returning to wallow in the mire, cosmic elements melting with fervent heat.",
      groundRealitiesAm: "ውሻ ወደ ትፋቱ፣ የታጠበችም እሪያ በጭቃ ውስጥ ወደ መገላበጥ ስትመለስ፣ እና ሰማያት በታላቅ ድምፅ ሲያልፉ ፍጥረትም በእሳት ሲቀልጥ።"
    },
    theological: {
      titleEn: "Partakers of the Divine Nature & Cosmic Dissolution",
      titleAm: "የመለኮት ባሕርይ ተካፋዮች መሆንና የሰማይና ምድር መታደስ",
      covenantStageEn: "The New Heavens and New Earth Where Righteousness Dwells",
      covenantStageAm: "ጽድቅ የሚኖርበት አዲስ ሰማይና አዲስ ምድር",
      redemptiveThemeEn: "\"The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance\" (2 Peter 3:9).",
      redemptiveThemeAm: "“ጌታ አንዳንዶች የሚዘገይ እንደሚመስላቸው ስለ ተስፋ ቃሉ አይዘገይም፥ ነገር ግን ሁሉ ወደ ንስሐ እንዲደርሱ እንጂ ማንም እንዳይጠፋ ወዶ ስለ እናንተ ይታገሣል” (2 ጴጥ 3:9)።",
      christForeshadowingEn: "The Majestic Lord whose voice boomed from the Excellent Glory: \"This is my beloved Son, with whom I am well pleased\" (2 Peter 1:17).",
      christForeshadowingAm: "ከተዋበው ክብር “በእርሱ ደስ የሚለኝ የምወደው ልጄ ይህ ነው” የሚል ድምፅ የመጣለት የከበረው ጌታችን ኢየሱስ ክርስቶስ (2 ጴጥ 1:17)።",
      metaNarrativeAnchorEn: "2 Peter 1:4 contains the boldest statement of deification/theosis in the New Testament: becoming partakers of the divine nature.",
      metaNarrativeAnchorAm: "2 ጴጥሮስ 1:4 በአዲስ ኪዳን ውስጥ እጅግ አስደናቂ የሆነውን እውነት ይዟል፡ ከዓለም የክፋት ምኞት አምልጠን የመለኮት ባሕርይ ተካፋዮች እንድንሆን ተጠርተናል።"
    },
    linguistic: [
      {
        original: "Θείας κοινωνοὶ φύσεως",
        translit: "Theias koinonoi physeos",
        language: "Greek",
        amharicTerm: "የመለኮት ባሕርይ ተካፋዮች",
        literalMeaningEn: "Partakers / Sharers of the Divine Nature",
        literalMeaningAm: "የመለኮት ባሕርይ ተካፋዮች",
        theologicalDepthEn: "Not becoming gods, but sharing intimately in God’s moral character, holiness, and eternal incorruptible life.",
        theologicalDepthAm: "አምላክ መሆን ሳይሆን፣ በእግዚአብሔር ቅድስና፣ ፍቅርና ዘላለማዊ ሕይወት ውስጥ በጥልቅ የመካፈል ታላቅ ጸጋ።",
        canonicalUsageEn: "2 Peter 1:4; Hebrews 12:10.",
        canonicalUsageAm: "2 ጴጥሮስ 1:4፤ ዕብራውያን 12:10።"
      }
    ],
    psychological: {
      characterEn: "Peter the Transfiguration Witness",
      characterAm: "የክብሩ ምስክር ጴጥሮስ",
      emotionalStateEn: "Solemn urgency of a dying patriarch, fierce indignation at corrupt mockers, quiet awe before cosmic eternity",
      emotionalStateAm: "የስንብት ጥልቅ ስሜት፣ በሐሰተኞች ላይ የተነሣ ቅን ቁጣ፣ በፍጻሜው የክብር ቀን ፊት መንበርከክ",
      innerConflictEn: "Combating the cynical weariness of believers who ask: \"Where is the promise of his coming? Ever since the fathers fell asleep, everything continues as it was from the beginning!\"",
      innerConflictAm: "ሰዎች “የመምጣቱ ተስፋ ወዴት አለ? ሁሉም እንደነበረው ይኖራል” እያሉ ሲጠራጠሩ፣ በእግዚአብሔር ዘንድ አንድ ቀን እንደ ሺህ ዓመት እንደ ሆነ በማስረዳት እምነታቸውን ማጽናት።",
      existentialQuestionEn: "\"Since all these things are thus to be dissolved, what sort of people ought you to be in lives of holiness and godliness?\" (2 Peter 3:11)",
      existentialQuestionAm: "“ይህ ሁሉ እንዲህ የሚቀልጥ ከሆነ፥ አዲሱን ሰማይና አዲሱን ምድር እንደ ተስፋ ቃሉ በምንጠብቅበት ጊዜ፥ በቅዱስ ኑሮና እግዚአብሔርን በመምሰል እንደ ምን ልንሆን ይገባል?” (2 ጴጥ 3:11)",
      modernReflectionEn: "God’s patience is not apathy or absence; He delays His return to give you time to repent; live today with the fiery reality of eternity burning in your eyes.",
      modernReflectionAm: "የጌታ መዘግየት መቅረት ሳይሆን ማንም እንዳይጠፋ የተደረገ ታላቅ ትዕግሥት ነው፤ ዛሬም በቅድስናና እግዚአብሔርን በመምሰል ተመላለስ።"
    }
  },

  // 62. 1 JOHN (1ኛ የዮሐንስ መልእክት)
  62: {
    id: 'canon-book-62',
    sceneId: 'book-62',
    bookNr: 62,
    chapterStart: 1,
    titleEn: "1 John: Walking in the Light, The Test of Love & The Assurance of Eternal Life",
    titleAm: "1 ዮሐንስ፡ በብርሃን መመላለስ፣ የፍቅር ፈተናና የዘላለም ሕይወት እርግጠኝነት",
    eraEn: "Apostolic Twilight in Ephesus",
    eraAm: "የሐዋርያው ዮሐንስ የበሰለ ዘመን",
    geopolitical: {
      titleEn: "Ephesus Metropolis to House Churches of Asia Minor",
      titleAm: "ከኤፌሶን ከተማ በእስያ አውራጃ ላሉ አብያተ ክርስቲያናት",
      empireEn: "Flavian Roman Dynasty (Domitian Era)",
      empireAm: "የሮም ግዛትና የዶሚቲያን የቄሳር አምልኮ ዘመን",
      timeframe: "c. AD 85 – 90",
      eyewitnessPOVEn: "The last surviving apostle—a gentle, white-haired father calling his readers \"Little Children\"; remembering how his own hands touched the physical flesh of the Word of Life; confronting arrogant teachers who claim sin doesn’t matter and Jesus didn’t really come in human flesh.",
      eyewitnessPOVAm: "በሕይወት የነበረው የመጨረሻው ሐዋርያ ዮሐንስ “ትናንሽ ልጆቼ ሆይ” እያለ በፍቅር ሲመክር፤ የሕይወትን ቃል በገዛ እጆቹ እንደዳሰሰ እያረጋገጠ፣ “እግዚአብሔር ፍቅር ነው፥ በፍቅርም የሚኖር በእግዚአብሔር ይኖራል” ብሎ ሲያስተምር።",
      historicalDynamicsEn: "Combating Docetism and Cerinthian proto-Gnosticism, which taught that physical matter is evil and therefore Christ could not have possessed a genuine human body or died on the Cross.",
      historicalDynamicsAm: "ክርስቶስ በእውነት ሰው ሆኖ አልመጣም የሚሉትን የሐሰት መናፍቃን በማጋለጥ፤ ክርስቶስ በሥጋ እንደመጣ የማይታመን መንፈስ ሁሉ ከእግዚአብሔር እንዳልሆነ ያስጠነቀቀ መልእክት።",
      groundRealitiesEn: "Darkness and blinding light, purifying hearts from idols, walking in the same footsteps Jesus walked.",
      groundRealitiesAm: "ጨለማና የሚያበራ ብርሃን፣ ራስን ከጣዖታት መጠበቅ፣ እና ኢየሱስ እንደተመላለሰ በጽድቅ መመላለስ።"
    },
    theological: {
      titleEn: "God is Light and God is Love: Authentic Fellowship",
      titleAm: "እግዚአብሔር ብርሃን ነው፥ እግዚአብሔርም ፍቅር ነው",
      covenantStageEn: "Abiding in the Family of God as Born-Again Children",
      covenantStageAm: "እንደ እግዚአብሔር ልጆች በዘላለም ኅብረት ውስጥ መኖር",
      redemptiveThemeEn: "\"God is love. In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him\" (1 John 4:8–9).",
      redemptiveThemeAm: "“እግዚአብሔር ፍቅር ነውና ፍቅር የሌለው እግዚአብሔርን አያውቅም። በእርሱ በኩል በሕይወት እንኖር ዘንድ እግዚአብሔር አንድያ ልጁን ወደ ዓለም ላከ” (1 ዮሐ 4:8-9)።",
      christForeshadowingEn: "Our Advocate with the Father, Jesus Christ the righteous; the Propitiation for our sins, and not for ours only but for the sins of the whole world (1 John 2:1–2).",
      christForeshadowingAm: "በአብ ዘንድ ጠበቃ ያለን ጻድቁ ኢየሱስ ክርስቶስ፤ እርሱ የኃጢአታችን ማስተስረያ ነው፥ ለዓለሙም ሁሉ እንጂ ለእኛ ብቻ አይደለም (1 ዮሐ 2:1-2)።",
      metaNarrativeAnchorEn: "1 John gives three objective tests of genuine salvation: the Doctrinal Test (Jesus is God incarnate), the Moral Test (obeying God’s commands), and the Relational Test (loving the brethren).",
      metaNarrativeAnchorAm: "1 ዮሐንስ እውነተኛ እምነት የሚረጋገጥባቸውን ሦስት ፈተናዎች ይሰጣል፡ የእምነት ትምህርት ፈተና፣ የቅድስና ኑሮ ፈተና እና ወንድምን የመውደድ ፈተና።"
    },
    linguistic: [
      {
        original: "Ὁ Θεὸς ἀγάπη ἐστίν",
        translit: "Ho Theos agape estin",
        language: "Greek",
        amharicTerm: "እግዚአብሔር ፍቅር ነው",
        literalMeaningEn: "God is Love",
        literalMeaningAm: "እግዚአብሔር ፍቅር ነው",
        theologicalDepthEn: "Love is not merely an activity or attitude of God; it is His very ontological nature and eternal essence.",
        theologicalDepthAm: "ፍቅር የእግዚአብሔር አንዱ ተግባር ብቻ ሳይሆን፣ እርሱ ራሱ በፍጹም ባሕርዩ ፍቅር መሆኑን ያመለክታል።",
        canonicalUsageEn: "1 John 4:8, 4:16.",
        canonicalUsageAm: "1 ዮሐንስ 4:8፤ 4:16።"
      }
    ],
    psychological: {
      characterEn: "John the Elder & The Beloved Children",
      characterAm: "ሽማግሌው ዮሐንስና የተወደዱት ልጆቹ",
      emotionalStateEn: "Gentle grandfatherly warmth, unwavering absolute certitude, ferocious intolerance of deception",
      emotionalStateAm: "የአረጋዊ አባት ጣፋጭ ፍቅር፣ በማያወላውል እውነት መታመን፣ ክርስቶስን በሚክዱት ላይ የታየ ጽኑ ተቃውሞ",
      innerConflictEn: "Assuring fragile Christians tormented by doubts: \"Whenever our heart condemns us, God is greater than our heart, and he knows everything.\"",
      innerConflictAm: "ልባቸው በበደል ስሜት ለሚወቀሱ አማኞች “ልባችን ቢነቅፈን እንኳ እግዚአብሔር ከልባችን ይበልጣል ሁሉንም ያውቃል” በማለት ሰላምን መስጠቱ።",
      existentialQuestionEn: "\"There is no fear in love, but perfect love casts out fear!\" (1 John 4:18)",
      existentialQuestionAm: "“ፍጹም ፍቅር ፍርሃትን አውጥቶ ይጥላል እንጂ በፍቅር ውስጥ ፍርሃት የለም!” (1 ዮሐ 4:18)",
      modernReflectionEn: "You cannot claim to love God while hating your brother or sister; true spirituality is not emotional ecstasy, but walking in transparent light and loving people when it costs you.",
      modernReflectionAm: "ወንድምህን እየጠላህ እግዚአብሔርን እወዳለሁ ማለት ውሸት ነው፤ እውነተኛ እምነት በብርሃን መመላለስና ሌሎችን በዋጋ መውደድ ነው።"
    }
  },

  // 63. 2 JOHN (2ኛ የዮሐንስ መልእክት)
  63: {
    id: 'canon-book-63',
    sceneId: 'book-63',
    bookNr: 63,
    chapterStart: 1,
    titleEn: "2 John: Hospitality, Truth and Love & Guarding the Threshold",
    titleAm: "2 ዮሐንስ፡ መስተንግዶ፣ እውነትና ፍቅር፤ የደጃፍ ጥበቃ",
    eraEn: "Apostolic Vigilance in Asia Minor",
    eraAm: "በእስያ አብያተ ክርስቲያናት ላይ የነበረው ንቃት",
    geopolitical: {
      titleEn: "Ephesus to an Elect House Church Community",
      titleAm: "ከኤፌሶን ለተመረጠች እመቤት (ለአጥቢያ ቤተክርስቲያን)",
      empireEn: "Greco-Roman Mediterranean Travelling Circuit",
      empireAm: "የሮም ዓለምና የተጓዦች መስተንግዶ ባሕል",
      timeframe: "c. AD 85 – 90",
      eyewitnessPOVEn: "A short, single-sheet papyrus letter from the Elder to a local house church personified as \"the Elect Lady\"; warning them not to open their home or extend hospitable greeting to traveling false teachers who deny the incarnation.",
      eyewitnessPOVAm: "ሽማግሌው ዮሐንስ “ለተመረጠች እመቤት” በጻፈው አጭር የፓፒረስ ደብዳቤ፤ ክርስቶስ በሥጋ እንደመጣ የማይመሰክሩትን የሐሰት አስተማሪዎች ወደ ቤት እንዳያስገቡና ሰላምታ እንኳ እንዳይሰጡ ያስጠነቀቀበት ጥብቅ መመሪያ።",
      historicalDynamicsEn: "In antiquity, travelling preachers relied entirely on local Christian hospitality for lodging and meals; supporting a false teacher was participating in their wicked work.",
      historicalDynamicsAm: "በጥንቱ ዘመን ተጓዥ አስተማሪዎች በምእመናን መስተንግዶ ላይ ጥገኛ ስለነበሩ፤ ለሐሰተኞች ድጋፍ መስጠት በክፉ ሥራቸው እንደ መተባበር ይቆጠር ነበር።",
      groundRealitiesEn: "Ink and pen on fragile papyrus, greeting at the doorway, walking in the commandments.",
      groundRealitiesAm: "ቀለምና ብዕር በቀጭን የፓፒረስ ወረቀት ላይ፣ በቤት ደጃፍ የሚደረግ ሰላምታ፣ እና በትእዛዛቱ መመላለስ።"
    },
    theological: {
      titleEn: "Truth and Love Harmonized: Uncompromising Discernment",
      titleAm: "እውነትና ፍቅር ሲጣመሩ፡ የማይናወጥ ማስተዋል",
      covenantStageEn: "Protecting the Purity of the Apostolic Word",
      covenantStageAm: "የሐዋርያት እውነት ሳይበረዝ እንዲጠበቅ የተደረገ ጥበቃ",
      redemptiveThemeEn: "\"And this is love, that we walk according to his commandments\" (2 John 6). Love without truth is sentimentality; truth without love is brutality.",
      redemptiveThemeAm: "“እንደ ትእዛዛቱም እንሄድ ዘንድ ይህ ፍቅር ነው” (2 ዮሐ 6)፤ እውነት የሌለው ፍቅር ባዶ ስሜት ነው፥ ፍቅር የሌለው እውነትም ጨካኝነት ነው፤ ሁለቱም ተጣምረው መኖር አለባቸው።",
      christForeshadowingEn: "Jesus Christ coming in the flesh: the non-negotiable confession that marks true faith versus antichrist deception (2 John 7).",
      christForeshadowingAm: "ኢየሱስ ክርስቶስ በሥጋ መምጣቱ የማይደራደር የእውነተኛ እምነት መሠረት ነው።",
      metaNarrativeAnchorEn: "The second shortest book in the Bible (13 verses), delivering a crucial principle: Christian love never compromises foundational truth.",
      metaNarrativeAnchorAm: "በመጽሐፍ ቅዱስ ውስጥ ሁለተኛው እጅግ አጭር መጽሐፍ (13 ቁጥሮች)፤ እውነተኛ ፍቅር ከእውነት ጋር እንደማይጋጭ ያረጋገጠ ድንቅ መልእክት።"
    },
    linguistic: [
      {
        original: "Ἐν ἀληθείᾳ καὶ ἀγάπῃ",
        translit: "En aletheia kai agape",
        language: "Greek",
        amharicTerm: "በእውነትና በፍቅር",
        literalMeaningEn: "In truth and love",
        literalMeaningAm: "በእውነትና በፍቅር",
        theologicalDepthEn: "The twin pillars of the Christian walk: truth defines the boundaries of love, and love expresses the heart of truth.",
        theologicalDepthAm: "የክርስቲያን ሕይወት መንታ ምሰሶዎች፤ እውነት የፍቅርን ድንበር ያጸናል፣ ፍቅርም የእውነትን ልብ ያሳያል።",
        canonicalUsageEn: "2 John 3.",
        canonicalUsageAm: "2 ዮሐንስ 3።"
      }
    ],
    psychological: {
      characterEn: "The Elder & The Elect Lady",
      characterAm: "ሽማግሌው ዮሐንስና የተመረጠችው እመቤት",
      emotionalStateEn: "Vigilant pastoral clarity, protective firmness, warm joyful anticipation of face-to-face communion",
      emotionalStateAm: "የእውነት ጥበቃ፣ በደጃፍ ላይ ያለ ንቃት፣ ፊት ለፊት ለመነጋገር የተሰማ ታላቅ ናፍቆት",
      innerConflictEn: "Refusing hospitality to dangerous false teachers while preserving the tender spirit of Christian love.",
      innerConflictAm: "የክርስቲያናዊ ፍቅርን ስሜት ሳይጥሉ፣ ቤተክርስቲያንን ከሐሰት ትምህርት ለመጠበቅ በደጃፍ ላይ ቆራጥ ውሳኔ ማድረግ።",
      existentialQuestionEn: "\"Watch yourselves, so that you may not lose what we have worked for, but may win a full reward!\" (2 John 8)",
      existentialQuestionAm: "“የደከማችሁበትን እንዳታጡ፥ ሙሉውን ዋጋ እንድትቀበሉ ግን ለራሳችሁ ተጠንቀቁ!” (2 ዮሐ 8)",
      modernReflectionEn: "Tolerance of toxic, manipulative deceit is not love; true love protects the vulnerable by setting courageous boundaries anchored in truth.",
      modernReflectionAm: "የሐሰትና የማታለል ትምህርትን ዝም ብሎ መቀበል ፍቅር አይደለም፤ እውነተኛ ፍቅር ወገኖቹን ለመጠበቅ በእውነት ላይ ቆሞ ድንበር ያበጃል።"
    }
  },

  // 64. 3 JOHN (3ኛ የዮሐንስ መልእክት)
  64: {
    id: 'canon-book-64',
    sceneId: 'book-64',
    bookNr: 64,
    chapterStart: 1,
    titleEn: "3 John: Walking in the Truth, Diotrephes’ Pride & Demetrius’ Good Name",
    titleAm: "3 ዮሐንስ፡ በእውነት መመላለስ፣ የዲዮጥራጢስ ትዕቢትና የድሜጥሮስ መልካም ምስክርነት",
    eraEn: "Late First Century Local Church Dynamics",
    eraAm: "በመጀመሪያው መቶ ዘመን ማብቂያ የነበረው የቤተክርስቲያን ሕይወት",
    geopolitical: {
      titleEn: "Ephesus to Beloved Gaius",
      titleAm: "ከኤፌሶን ለተወደደው ጋይዮስ የተላከ",
      empireEn: "Roman Empire & House Church Autonomy",
      empireAm: "የሮም ግዛትና የአጥቢያ አብያተ ክርስቲያናት ነፃነት",
      timeframe: "c. AD 85 – 90",
      eyewitnessPOVEn: "A warm, intensely personal letter to a faithful host named Gaius; contrasting him with Diotrephes—an arrogant church boss who loves to be first, gossips maliciously against the apostles, refuses to welcome missionary strangers, and kicks welcoming members out of the church.",
      eyewitnessPOVAm: "ታማኝ ለነበረው ለጋይዮስ የተላከ የግል መልእክት፤ በቤተክርስቲያን የበላይ መሆንን የሚወደውንና ሐዋርያትን በክፉ ቃል የሚሳደበውን ትዕቢተኛውን ዲዮጥራጢስን በማጋለጥ፤ ለድሜጥሮስ መልካም ምስክርነት የሰጠበት ደብዳቤ።",
      historicalDynamicsEn: "Emergence of authoritarian local church leaders (clericalism) seizing tyrannical control over autonomous assemblies and severing fellowship with the apostles.",
      historicalDynamicsAm: "በቤተክርስቲያን ውስጥ ፈላጭ ቆራጭ መሆን የሚፈልጉ መሪዎች በተነሱ ጊዜ፣ ዮሐንስ በአካል መጥቶ ሥራቸውን እንደሚያጋልጥ ያስጠነቀቀበት ሁኔታ።",
      groundRealitiesEn: "Pen and ink on parchment, sending missionaries on their journey in a manner worthy of God, physical health reflecting soul prosperity.",
      groundRealitiesAm: "ብዕርና ቀለም፣ ሚስዮናውያንን ለእግዚአብሔር እንደሚገባ አክብሮ በስጦታ መሸኘት፣ እና የነፍስ ጤንነት በሥጋ ጤንነት እንዲገለጥ የተደረገ ጸሎት።"
    },
    theological: {
      titleEn: "Fellow Workers for the Truth: Servanthood Over Domination",
      titleAm: "ለእውነት አብረው የሚሠሩ፡ ከአምባገነንነት ይልቅ ትሑት አገልጋይነት",
      covenantStageEn: "Kingdom Hospitality and Supporting the Global Mission",
      covenantStageAm: "ወንጌልን ለሚያገለግሉ የተደረገ የፍቅር መስተንግዶ",
      redemptiveThemeEn: "\"I have no greater joy than to hear that my children are walking in the truth\" (3 John 4). Supporting itinerant evangelists makes us fellow workers for the truth.",
      redemptiveThemeAm: "“ልጆቼ በእውነት እንዲሄዱ ከመስማት የሚበልጥ ደስታ የለኝም” (3 ዮሐ 4)፤ ወንጌልን የሚያገለግሉትን መደገፍ ለእውነት አብሮ መሥራት ነው።",
      christForeshadowingEn: "Christ’s servants sent out \"for the sake of the name\" taking nothing from the Gentiles (3 John 7).",
      christForeshadowingAm: "ስለ ጌታ ክብር ስም ብለው የወጡና ከአሕዛብ ምንም ያልተቀበሉ ታማኝ የክርስቶስ አገልጋዮች።",
      metaNarrativeAnchorEn: "3 John provides a fascinating case study in church leadership pathology: the contrast between generous servant Gaius and insecure narcissist Diotrephes.",
      metaNarrativeAnchorAm: "3 ዮሐንስ የአመራርን ባሕርይ የሚያሳይ ግልጽ መስታወት ነው፡ የጋይዮስ ልግስናና የዲዮጥራጢስ የሥልጣን ጥመኝነት ተነጻጽረዋል።"
    },
    linguistic: [
      {
        original: "Φιλοπρωτεύων",
        translit: "Philoproteuon",
        language: "Greek",
        amharicTerm: "የበላይ መሆንን የሚወድ",
        literalMeaningEn: "Loving to be first / Fond of preeminence",
        literalMeaningAm: "የመጀመሪያ (የበላይ) መሆንን የሚወድ",
        theologicalDepthEn: "Used only here in the New Testament; describes the anti-Christian lust for personal power and control over God’s flock.",
        theologicalDepthAm: "በመላው አዲስ ኪዳን ውስጥ እዚህ ብቻ የተጠቀሰ ቃል፤ በክርስቶስ መንጋ ላይ ራስን ከፍ ከፍ የማድረግና የመግዛት ክፉ ምኞት።",
        canonicalUsageEn: "3 John 9.",
        canonicalUsageAm: "3 ዮሐንስ 9።"
      }
    ],
    psychological: {
      characterEn: "Gaius, Diotrephes & Demetrius",
      characterAm: "ጋይዮስ፣ ዲዮጥራጢስና ድሜጥሮስ",
      emotionalStateEn: "Joyful encouragement of humble service, righteous disdain for power-hungry bullies, warm pastoral friendship",
      emotionalStateAm: "በትሑት አገልጋይነት መደሰት፣ በሥልጣን ጥመኞች ላይ የተሰማ ቁጣ፣ ጥልቅ የወንድማማችነት ፍቅር",
      innerConflictEn: "Supporting gentle believers trapped under an insecure, authoritarian church leader who threatens them with excommunication.",
      innerConflictAm: "በአምባገነን መሪ ሥር የተጨነቁትን ቅኖች ማበረታታት፤ “ክፉውን አትከተል መልካሙን እንጂ፤ መልካምን የሚያደርግ ከእግዚአብሔር ነው” ብሎ መምከር።",
      existentialQuestionEn: "\"Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever does evil has not seen God!\" (3 John 11)",
      existentialQuestionAm: "“ወዳጄ ሆይ፥ መልካሙን እንጂ ክፉውን አትከተል። መልካምን የሚያደርግ ከእግዚአብሔር ነው፤ ክፉን የሚያደርግ ግን እግዚአብሔርን አላየውም!” (3 ዮሐ 11)",
      modernReflectionEn: "Beware of leaders who need to control everything and cannot handle correction; true spiritual leadership never dominates—it serves, blesses, and empowers others.",
      modernReflectionAm: "ሁሉን ነገር በብቸኝነት መቆጣጠር ከሚፈልጉ ትዕቢተኞች ተጠበቅ፤ እውነተኛ መንፈሳዊ መሪ በሰዎች ላይ አይገዛም፤ በቅንነትና በትሕትና ያገለግላል።"
    }
  },

  // 65. JUDE (የይሁዳ መልእክት)
  65: {
    id: 'canon-book-65',
    sceneId: 'book-65',
    bookNr: 65,
    chapterStart: 1,
    titleEn: "Jude: Contending for the Faith Once Delivered & The Doxology of Preservation",
    titleAm: "የይሁዳ መልእክት፡ ለአንዴና ለመጨረሻ ለተሰጠች እምነት መጋደልና የታላቅ ምስጋና ቃል",
    eraEn: "Apostolic Crisis of False Teachers",
    eraAm: "የክህደት ትምህርት በቤተክርስቲያን የተስፋፋበት ዘመን",
    geopolitical: {
      titleEn: "Palestine to the Called, Beloved and Kept",
      titleAm: "ከፍልስጥኤም ምድር ለተጠሩትና በክርስቶስ ለተጠበቁት",
      empireEn: "Roman Empire & The Infiltration of Licentious Heretics",
      empireAm: "የሮም ኢምፓየርና የሥነ-ምግባር ብልሽት",
      timeframe: "c. AD 65 – 80",
      eyewitnessPOVEn: "The full brother of James and half-brother of Jesus eager to write a peaceful letter about our common salvation, but forced by emergency to blow the war trumpet: corrupt men have slipped in unnoticed, turning God’s grace into a license for sexual debauchery and denying our only Master.",
      eyewitnessPOVAm: "የጌታ ወንድም ይሁዳ ስለ ጋራ መዳናችን ሊጽፍ ፈልጎ ሳለ፣ በድንገት የገቡትን ሐሰተኞች በማየት “ለቅዱሳን አንድ ጊዜ ፈጽሞ ስለ ተሰጠች ሃይማኖት እንድትጋደሉ እመክራችኋለሁ” ብሎ የነፋው የክብረ ወሰን ማስጠንቀቂያ መለከት።",
      historicalDynamicsEn: "Drawing on ancient biblical history (unbelieving generation in wilderness, fallen angels, Sodom and Gomorrah, Cain, Balaam, Korah) and Second Temple Jewish literature (Assumption of Moses, 1 Enoch).",
      historicalDynamicsAm: "ከብሉይ ኪዳን ታሪክ (የሰዶም ጥፋት፣ የወደቁ መላእክት፣ የቃየል መንገድ፣ የበለዓም ስህተትና የቆሬ ዓመፅ) ምሳሌዎችን በመጥቀስ የክፉዎችን ፍርድ ያረጋገጠበት ሁኔታ።",
      groundRealitiesEn: "Hidden reefs in love feasts, waterless clouds blown by winds, wild waves of the sea foaming up their own shame, wandering stars.",
      groundRealitiesAm: "በፍቅር ማዕድ ውስጥ እንዳሉ ድንጋዮች፣ ውኃ የሌላቸው ደመናት፣ የገዛ ነውራቸውን የሚያረፈረፉ የባሕር ማዕበሎች፣ እና የሚቅበዘበዙ ከዋክብት።"
    },
    theological: {
      titleEn: "Contend Earnestly for the Faith & The God Who Keeps You From Stumbling",
      titleAm: "ለእምነት መጋደልና ሳይሰናከሉ የሚጠብቀን አምላክ",
      covenantStageEn: "Preservation of the Saints against Apostasy",
      covenantStageAm: "ቅዱሳን በታላቅ ክብር ያለ ነውር እንዲቆሙ የተደረገ ኪዳን",
      redemptiveThemeEn: "\"Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy\" (Jude 24).",
      redemptiveThemeAm: "“እንዳትሰናከሉም ሊጠብቃችሁ፥ በክብሩም ፊት በደስታ ያለ ነውር ሊያቆማችሁ ለሚችለው... ክብርና ግርማ ኃይልም ሥልጣንም ከዘመን ሁሉ በፊት አሁንም እስከ ዘላለምም ድረስ ይሁን፤ አሜን” (ይሁዳ 24-25)።",
      christForeshadowingEn: "The Lord who comes with ten thousands of his holy ones to execute judgment on the ungodly (Jude 14–15 citing Enoch); our only Master and Lord Jesus Christ.",
      christForeshadowingAm: "በዓመፀኞች ላይ ለመፍረድ ከአእላፋት ቅዱሳኑ ጋር የሚመጣው ጌታችን ኢየሱስ ክርስቶስ (ይሁዳ 14-15)።",
      metaNarrativeAnchorEn: "Jude ends with one of the most magnificent doxologies in all of world literature (verses 24–25).",
      metaNarrativeAnchorAm: "የይሁዳ መልእክት በመላው መጽሐፍ ቅዱስ ውስጥ ካሉት እጅግ ድንቅና የተዋቡ የምስጋና ቃላት በአንዱ (ቁጥር 24-25) ይደመደማል።"
    },
    linguistic: [
      {
        original: "Ἐπαγωνίζεσθαι",
        translit: "Epagonizesthai",
        language: "Greek",
        amharicTerm: "መጋደል (በጽናት መታገል)",
        literalMeaningEn: "To contend earnestly / To agonize in battle for",
        literalMeaningAm: "መጋደል / በብርቱ መታገል",
        theologicalDepthEn: "Athletic/military term: an all-out, energetic, uncompromising defense of the apostolic truth.",
        theologicalDepthAm: "የወንጌል እውነት እንዳይበረዝ በሙሉ ኃይልና ጽናት መቆም፤ ለእምነት መጋደል።",
        canonicalUsageEn: "Jude 3.",
        canonicalUsageAm: "ይሁዳ 3።"
      }
    ],
    psychological: {
      characterEn: "Jude the Servant of Jesus Christ & Michael the Archangel",
      characterAm: "የኢየሱስ ክርስቶስ ባሪያ ይሁዳና የመላእክት አለቃ ሚካኤል",
      emotionalStateEn: "Battlefield urgency, scathing condemnation of corrupt predators, serene doxological trust in God’s keeping power",
      emotionalStateAm: "የጦርነት አጣዳፊነት፣ ክፉዎችን ያለ ፍርሃት ማጋለጥ፣ ሊጠብቀን በሚችለው አምላክ ላይ የተደረገ ፍጹም መተማመን",
      innerConflictEn: "Balancing fierce opposition to predators with tender mercy: \"Save others by snatching them out of the fire; to others show mercy with fear, hating even the garment stained by the flesh.\"",
      innerConflictAm: "ክፉዎችን በጽናት እያጋለጡ፣ የተታለሉትን ግን ከእሳት መንጥቆ በማውጣት በምሕረት የማዳን መንፈሳዊ ጥበብ።",
      existentialQuestionEn: "\"Keep yourselves in the love of God, waiting for the mercy of our Lord Jesus Christ that leads to eternal life!\" (Jude 21)",
      existentialQuestionAm: "“የዘላለምን ሕይወት ለማግኘት ወደ ጌታችን ወደ ኢየሱስ ክርስቶስ ምሕረት ስትጠባበቁ በእግዚአብሔር ፍቅር ራሳችሁን ጠብቁ!” (ይሁዳ 21)",
      modernReflectionEn: "When truth is diluted and compromise is celebrated, standing up for biblical convictions takes courage; remember: the same God who calls you to contend is able to keep you from falling.",
      modernReflectionAm: "ዓለም እውነትን በረከሰ አስተሳሰብ በምትቀይርበት ጊዜ ለእምነትህ በጽናት ቁም፤ እንዳትሰናከል የሚጠብቅህ እርሱ ታማኝ ነው።"
    }
  },

  // 66. REVELATION (የዮሐንስ ራእይ)
  66: {
    id: 'canon-book-66',
    sceneId: 'book-66',
    bookNr: 66,
    chapterStart: 1,
    titleEn: "Revelation: The Slain Lamb, The Cosmic Victory & The New Jerusalem",
    titleAm: "የዮሐንስ ራእይ፡ የታረደው በግ፣ የፍጻሜው ድልና አዲሲቱ ኢየሩሳሌም",
    eraEn: "The Eschatological Culmination of the Canon",
    eraAm: "የመጽሐፍ ቅዱስ የመጨረሻው የክብር ፍጻሜ ዘመን",
    geopolitical: {
      titleEn: "The Rocky Penal Island of Patmos to New Jerusalem Descending from Heaven",
      titleAm: "ከጭንጫዋ የፍጥሞ ደሴት እስከ ከሰማይ ወደምትወርደው አዲሲቱ ኢየሩሳሌም",
      empireEn: "Imperial Rome under Domitian (Emperor-Worship Enforced on Pain of Death)",
      empireAm: "የሮም ቄሳር ዶሚቲያን የቄሳርን አምልኮ በሞት ፍርድ ያስገደደበት ወቅት",
      timeframe: "c. AD 95 – 96",
      eyewitnessPOVEn: "An 90-year-old exiled apostle in prison quarries on a barren penal island; on the Lord’s Day hearing a voice like a trumpet; turning to see the Glorified Son of Man with eyes like flaming fire and a voice like roaring waters; collapsing at his feet as dead.",
      eyewitnessPOVAm: "በፍጥሞ ደሴት በግዞት የነበረው አረጋዊው ዮሐንስ በጌታ ቀን በመንፈስ ሲሆን፤ ዓይኖቹ እንደ እሳት ነበልባል፣ ድምፁም እንደ ብዙ ውኃዎች ድምፅ የሆነውን የከበረውን የሰው ልጅ አይቶ በፊቱ እንደ ሞተ ሰው ሆኖ ሲወድቅ።",
      historicalDynamicsEn: "Seven churches of western Asia Minor facing state persecution, social boycott, and seductive compromise from false prophets (Balaam, Jezebel); John pulls back the veil to reveal who really sits on the throne of the universe.",
      historicalDynamicsAm: "በሮም አገዛዝ ሥር በስደትና በፈተና ውስጥ ለነበሩት ለሰባቱ የእስያ አብያተ ክርስቲያናት፤ የዓለም ታሪክ በሮም ቄሳር ሳይሆን በታረደው በግ እጅ ውስጥ መሆኑን የገለጠ ታላቅ መጽናናት።",
      groundRealitiesEn: "The click of quarry pickaxes on Patmos rock, seven golden lampstands, scrolls sealed with seven seals, sulfur, golden streets clear as glass, no more tears or pain.",
      groundRealitiesAm: "የፍጥሞ ዓለቶች፣ ሰባቱ የወርቅ መቅረዞች፣ በሰባት ማኅተም የታተመ መጽሐፍ፣ እሳትና ዲን፣ እንደ ብርጭቆ የጠራ የወርቅ ጎዳና፣ እና ዕንባና ሞት የሌለባት አዲሲቱ ከተማ።"
    },
    theological: {
      titleEn: "Worthy is the Lamb: The Final Victory of God Over Evil, Babylon, and Death",
      titleAm: "የታረደው በግ ይገባዋል፡ በክፋት፣ በባቢሎንና በሞት ላይ የተገኘ የመጨረሻው ድል",
      covenantStageEn: "The Everlasting Wedding Feast: \"God Himself Will Be With Them as Their God\"",
      covenantStageAm: "የዘላለም የበጉ ሰርግ፡ “እግዚአብሔር ራሱ ከእነርሱ ጋር ይሆናል አምላካቸውም ይሆናል”",
      redemptiveThemeEn: "\"Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God. He will wipe away every tear from their eyes, and death shall be no more\" (Rev 21:3–4).",
      redemptiveThemeAm: "“እነሆ፥ የእግዚአብሔር ድንኳን በሰዎች መካከል ነው ከእነርሱም ጋር ያድራል፥ እነርሱም ሕዝቡ ይሆናሉ እግዚአብሔርም እርሱ ራሱ ከእነርሱ ጋር ሆኖ አምላካቸው ይሆናል፤ እንባዎችንም ሁሉ ከዓይኖቻቸው ያብሳል፥ ሞትም ከእንግዲህ ወዲህ አይሆንም” (ራእይ 21:3-4)።",
      christForeshadowingEn: "The Alpha and Omega, First and Last (1:17); The Lion of the tribe of Judah who appears as a Lamb standing as though slain (5:5–6); The King of Kings and Lord of Lords riding a white horse (19:16).",
      christForeshadowingAm: "አልፋና ዖሜጋ፥ ፊተኛውና ኋለኛው (1:17)፤ ድል የነሣው የይሁዳ አንበሳ እርሱም እንደ ታረደ ሆኖ የቆመው በግ (5:5-6)፤ የነገሥታት ንጉሥና የጌቶች ጌታ (19:16)።",
      metaNarrativeAnchorEn: "Revelation brings the entire 66-book biblical canon to its triumphant, breathtaking climax: Paradise lost in Genesis is restored and magnified into the Eternal City of God.",
      metaNarrativeAnchorAm: "የዮሐንስ ራእይ የ66ቱንም ቅዱሳት መጻሕፍት ታሪክ ወደ ታላቁ ፍጻሜው ያመጣል፡ በዘፍጥረት የጠፋው ገነት በራእይ ወደ አዲሲቱ ኢየሩሳሌምነት አድጎ በክብር ለዘላለም ይጸናል።"
    },
    linguistic: [
      {
        original: "Ἀποκάλυψις",
        translit: "Apokalypsis",
        language: "Greek",
        amharicTerm: "ራእይ (መገለጥ)",
        literalMeaningEn: "Unveiling / Revealing of that which was hidden",
        literalMeaningAm: "መገለጥ (መጋረጃው ሲገለጥ)",
        theologicalDepthEn: "Not a book of puzzles to scare believers, but the glorious pulling back of the cosmic curtain to reveal Jesus Christ as victorious Lord over history.",
        theologicalDepthAm: "ፍርሃትን የሚያመጣ እንቆቅልሽ ሳይሆን፣ የክርስቶስን ድልና የዓለምን ታሪክ ፍጻሜ ግልጽ አድርጎ የሚያሳይ መለኮታዊ መገለጥ።",
        canonicalUsageEn: "Revelation 1:1; Galatians 1:12.",
        canonicalUsageAm: "ራእይ 1:1፤ ገላትያ 1:12።"
      },
      {
        original: "Ἀλληλούϊα",
        translit: "Hallelujah",
        language: "Greek",
        amharicTerm: "ሃሌ ሉያ (እግዚአብሔር ይመስገን)",
        literalMeaningEn: "Praise Yahweh!",
        literalMeaningAm: "እግዚአብሔር ይመስገን (ያህዌ ይመስገን)",
        theologicalDepthEn: "The thunderous cosmic praise of the redeemed echoing four times across heaven over the final overthrow of Babylon and the coronation of the Lamb.",
        theologicalDepthAm: "በሰማይ አደባባይ አራት ጊዜ የተስተጋባው የታላቁ ድል ዝማሬ፤ ክፋት ተደምስሷል እግዚአብሔርም ለዘላለም ነግሷል።",
        canonicalUsageEn: "Revelation 19:1, 19:3, 19:4, 19:6.",
        canonicalUsageAm: "ራእይ 19:1፤ 19:3፤ 19:4፤ 19:6።"
      }
    ],
    psychological: {
      characterEn: "John the Seer & The Glorified Christ",
      characterAm: "ባለራእዩ ዮሐንስና የከበረው ክርስቶስ",
      emotionalStateEn: "Overwhelming holy terror, weeping over the sealed scroll, breathless ecstatic adoration before the throne of light",
      emotionalStateAm: "በክብሩ ፊት በፍርሃት መውደቅ፣ ስለ ማኅተሙ በዕንባ ማልቀስ፣ በዙፋኑ ፊት የተሰማ ወደር የሌለው የአምልኮ ደስታ",
      innerConflictEn: "Falling at Jesus’ feet as dead until feeling his right hand on his shoulder: \"Fear not, I am the First and the Last, and the living one. I died, and behold I am alive forevermore, and I have the keys of Death and Hades!\"",
      innerConflictAm: "በፍርሃት እንደ ሞተ ሰው ሆኖ ሲወድቅ፣ ጌታ ቀኝ እጁን በላዩ ላይ ጭኖ “አትፍራ፤ ፊተኛውና ኋለኛው ሕያውም እኔ ነኝ፥ ሞቼም ነበርሁ እነሆም፥ ከዘላለም እስከ ዘላለም ድረስ ሕያው ነኝ፥ የሞትና የሲኦልም መክፈቻ አለኝ” ብሎ ሲያበረታው።",
      existentialQuestionEn: "\"He who testifies to these things says, Surely I am coming soon. Amen. Come, Lord Jesus!\" (Rev 22:20)",
      existentialQuestionAm: "“ይህን የሚመሰክር፡ አዎን፥ በቶሎ እመጣለሁ ይላል። አሜን፥ ጌታ ኢየሱስ ሆይ፥ ና!” (ራእይ 22:20)",
      modernReflectionEn: "No matter how chaotic the news headlines, the throne of the universe is not empty; the Slain Lamb is King of Kings, evil will be vanquished, every tear will be wiped away, and He is coming soon.",
      modernReflectionAm: "ዓለም የቱንም ያህል ብትታወክ፣ የሰማዩ ዙፋን ባዶ አይደለም፤ የታረደው በግ የነገሥታት ንጉሥ ነው፤ ክፋት ሁሉ ይጠፋል፣ ዕንባ ሁሉ ይታበሳል፤ “አዎን በቶሎ እመጣለሁ፤ አሜን ጌታ ኢየሱስ ሆይ ና!”"
    }
  }

}
