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

  // Cross-references
  crossReferences: { ref: string; noteAm: string; noteEn: string }[]
}

export const TIME_CAPSULE_ENTRIES: TimeCapsuleEntry[] = [
  // 1. Matthew 23:24 - The Gnat & The Camel
  {
    id: 'matthew-23-gnat-camel',
    bookNr: 40,
    chapter: 23,
    verseStart: 23,
    verseEnd: 24,
    verseRefAm: 'ማቴዎስ 23:23-24',
    verseRefEn: 'Matthew 23:23-24',
    verseTextAm: '«እናንተ ግብዞች ጻፎችና ፈሪሳውያን፥ ከአዝሙድና ከእንስላል ከከመንም አሥራት ስለምታወጡ፥ ፍርድንና ምሕረትን እምነትንም፥ በሕግ ያለውን ዋና ነገር ስለምትተዉ ወዮላችሁ፤ እናንተ ዕውሮች መሪዎች፥ ቅንጫትን የምታጠሩ ግመልንም የምትውጡ!»',
    verseTextEn: '“Woe to you, scribes and Pharisees, hypocrites! For you tithe mint and dill and cumin, and have neglected the weightier matters of the law: justice and mercy and faithfulness. You blind guides, straining out a gnat and swallowing a camel!”',
    titleAm: 'ቅንጫትን ማጣራትና ግመልን መዋጥ',
    titleEn: 'Straining the Gnat & Swallowing the Camel',
    taglineAm: 'የአንደኛው መቶ ክፍለ ዘመን የወይን ማጣሪያ ጨርቅና የፈሪሳውያን መንፈሳዊ ድራማ',
    taglineEn: '1st-Century Wine Strainers & The Pharisaic Legalistic Theater',
    eraAm: 'የሮማ ግዛት ዘመን (c. 30 AD)',
    eraEn: 'Second Temple Judea (c. 30 AD)',
    locationAm: 'የኢየሩሳሌም ቤተ መቅደስ አደባባይ',
    locationEn: 'Temple Mount Courts, Jerusalem',
    yearApprox: 'c. 30 AD',
    keyIcon: '🐪',

    sceneAm: {
      setting: 'በአንደኛው መቶ ክፍለ ዘመን በኢየሩሳሌም የበጋ ወቅት፣ የደረቀ ወይንና ዘይት በትላልቅ የሸክላ ጋኖች ይቀመጥ ነበር። ጋኖቹ ክፍት ስለነበሩ ትናንሽ ዝንቦችና ቅንጫቶች በቀላሉ ወደ ውስጥ ይወድቁ ነበር። በሌላ በኩል በደማስቆ በር በኩል ግዙፍ የጭነት ግመሎች አቧራ እያቦኑ ይገቡ ነበር።',
      dailyLife: 'ፈሪሳውያን በሕዝቡ ፊት ከመጠን በላይ ንጹሕ ሆነው ለመታየት፣ ማንኛውንም መጠጥ ከመጠጣታቸው በፊት በደቃቅ የተልባ እግር ጨርቅ (Sieve) በጥንቃቄ ያጣሩ ነበር። አላማቸው አንድም የረከሰች ቅንጫት እንዳትገባባቸው ለማረጋገጥ ነው።',
      socialTension: 'ጻፎችና ፈሪሳውያን ከድሆች ገበሬዎች የጓሮ ቅመሞች (አዝሙድ፣ እንስላል) ሳይቀር 10% አስራት እየለኩ ሲነጥቁ፣ የደሃ መበለቶችን ቤቶች በሕግ ሽፋን ይወርሱ ነበር። ሕዝቡ በከባድ የሃይማኖት ቀንበር ታስሮ ይጨነቅ ነበር።'
    },
    sceneEn: {
      setting: 'In the hot summers of 1st-century Jerusalem, wine fermented in large earthenware jars. Because jars were frequently unsealed, gnats and tiny fruit flies swarmed into the liquid. Just outside the stone city gates, giant desert camel caravans trod through the dusty markets.',
      dailyLife: 'Pharisees, obsessive about ceremonial purity, carried fine linen cloth sieves everywhere. Before taking a single sip of wine or water, they would elaborately pour it through the cloth to catch even microscopic insects, proving their piety to onlookers.',
      socialTension: 'The scribal elite demanded microscopic tithes from poor peasant gardens (herbs like mint, dill, and cumin), yet legally dispossessed widows and foreclosed on peasant lands. The religious leadership wore long robes while bleeding the poor dry.'
    },

    metaphorAm: {
      origin: 'በኦሪት ዘሌዋውያን 11 መሰረት፡ ቅንጫት (ተንቀሳቃሽ በራሪ ነፍሳት) በእስራኤል ምድር ከሚገኙ የረከሱ ፍጥረታት ሁሉ አነስተኛዋ ናት (ዘሌዋ 11:23)። ግመል ደግሞ ሰኮናው ስላልተሰነጠቀ በእስራኤል ምድር ከነበሩ የረከሱ አራዊት ሁሉ ግዙፉ ነው (ዘሌዋ 11:4)።',
      linguisticNuance: 'በዚያን ዘመን ጌታ ኢየሱስና ሕዝቡ በሚናገሩት በአረማይክ ቋንቋ ኃይለኛ የቃላት ጨዋታ (Pun) አለ፡ ቅንጫት ማለት «ቀልማ» (QalmA) ሲሆን፥ ግመል ማለት ደግሞ «ገምላ» (Gamla) ይባላል። ኢየሱስ «ቀልማን እያጠራችሁ ገምላን ትውጣላችሁ!» ሲል ቃላቶቹ ድምጻቸው ይመሳሰላል።',
      crowdReaction: 'ኢየሱስ ይህን ሲናገር በዙሪያው የነበረው ተራው ሕዝብ በፈሪሳውያን አስቂኝ ድራማ ላይ ከልቡ ፈገግ ብሏል። አንድ ሰው ትንሿን ዝንብ እንዳይውጥ በጨርቅ ጠልፎ፥ ግዙፉን ግመል ሙሉውን ሲውጥ የሚታየው ስላቅ የግብዝነታቸውን እርቃን አጋልጧል።'
    },
    metaphorEn: {
      origin: 'Under Levitical food laws, the gnat was the smallest unclean animal in Palestine (Leviticus 11:23). The camel, having cloven hooves that are not split, was the largest unclean quadruped in Israel (Leviticus 11:4).',
      linguisticNuance: 'In Jesus’ spoken language of Aramaic, this was a brilliant, biting pun: Gnat was “QalmA” and Camel was “Gamla”. Saying “You strain out a QalmA and swallow a Gamla!” rolled off the tongue with unforgettable satirical rhythm.',
      crowdReaction: 'The crowd on the Temple pavement would have immediately grasped the hilarious, shocking image: a holy man fastidiously checking his cup for a speck of insect dust, and then unhinging his jaw like a snake to swallow a whole 1,000-pound humped camel!'
    },

    distortionAm: {
      claim: '«ስለ ትምህርተ-ሃይማኖትና ስለ ጥቅስ ስህተት ብዙ አትጨነቁ፤ ያ ቅንጫት ማጣራት ነው! ትልቁን ነገር ብቻ ተመልከቱ» በማለት የሐሰት መምህራን ስህተታቸውን እንዳይነካባቸው መከላከያ ያደርጉታል።',
      damage: 'ምእመናን በመጽሐፍ ቅዱስ ውስጥ ያሉትን እውነተኛ ትምህርቶች እንዳይመረምሩ ያደርጋል፤ መሪዎችንም ከተጠያቂነት ነጻ ያወጣል።'
    },
    distortionEn: {
      claim: 'Preachers and false teachers weaponize this verse to deflect criticism: “Stop holding me accountable to biblical doctrine! You are just straining at gnats! Look at the big picture and don’t judge me!”',
      damage: 'It paralyzes biblical discernment and allows false teachers to operate with zero moral or theological accountability.'
    },

    truthAm: {
      contextSummary: 'ኢየሱስ ትናንሾቹን ሕጎች መታዘዝ ስህተት ነው አላለም! በቁጥር 23 ላይ «እነዚያን ሳትተዉ እነዚህን ልታደርጉ ይገባችሁ ነበር» ብሏል። ዋናው ነቀፌታ፡ ውጫዊ ዝርዝር ላይ እየደከሙ ውስጣዊ ፍትሕን፣ ምሕረትንና እምነትን መተው ነው።',
      surroundingVerses: 'ማቴዎስ 23:23-28 — «እናንተ ግብዞች፥ በውጭ አምረው የሚታዩ በውስጥ ግን የሙታን አጥንትና ርኵሰት ሁሉ የሞላባቸውን በኖራ የተለሰኑ መቃብሮችን ስለምትመስሉ ወዮላችሁ!»',
      timelessPrinciple: 'እግዚአብሔር ውጫዊ የሃይማኖት ትዕይንት ሳይሆን፡ በፍትሕ የተሞላ ሕይወት፣ ለተጨቆኑት የሚራራ ልብና እውነተኛ እምነት ይፈልጋል።'
    },
    truthEn: {
      contextSummary: 'Jesus never condemned paying attention to details! He explicitly said: “These you ought to have done, without leaving the others undone.” His condemnation was against substituting outward performance for justice, mercy, and genuine faith.',
      surroundingVerses: 'Matthew 23:23–28 — “You clean the outside of the cup and the plate, but inside they are full of greed and self-indulgence... You are like whitewashed tombs, which outwardly appear beautiful, but within are full of dead people’s bones.”',
      timelessPrinciple: 'God does not accept religious technicalities as a substitute for moral integrity, active justice for the vulnerable, and heartfelt mercy.'
    },

    crossReferences: [
      {
        ref: 'ዘሌዋውያን 11:4, 23',
        noteAm: 'በኦሪት ሕግ መሰረት የረከሱ እንስሳት (ቅንጫትና ግመል) መመሪያ',
        noteEn: 'The dietary law defining gnats and camels as unclean'
      },
      {
        ref: 'ሚክያስ 6:8',
        noteAm: '«እግዚአብሔር ከአንተ የሚሻው ምንድር ነው? ፍርድን ታደርግ ዘንድ፥ ምሕረትንም ትወድድ ዘንድ»',
        noteEn: '“What does the Lord require of you? To do justice, love mercy, and walk humbly with your God.”'
      },
      {
        ref: 'ሆሴዕ 6:6',
        noteAm: '«ከመሥዋዕት ይልቅ ምሕረትን እወዳለሁና»',
        noteEn: '“For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings.”'
      }
    ]
  },

  // 2. Matthew 7:1 - "Judge not, that you be not judged"
  {
    id: 'matthew-7-judge-not',
    bookNr: 40,
    chapter: 7,
    verseStart: 1,
    verseEnd: 5,
    verseRefAm: 'ማቴዎስ 7:1-5',
    verseRefEn: 'Matthew 7:1-5',
    verseTextAm: '«በምትፈርዱበት ፍርድ ይፈረድባችኋልና፥ በምትሰፍሩበትም መስፈሪያ ይሰፈርባችኋል፤ እንዳይፈረድባችሁ አትፍረዱ። በወንድምህም ዐይን ያለውን ጉድፍ ስለ ምን ታያለህ፥ በዐይንህ ግን ያለውን ምሰሶ ስለ ምን አትመለከትም?»',
    verseTextEn: '“Judge not, that you be not judged. For with the judgment you pronounce you will be judged... Why do you see the speck that is in your brother’s eye, but do not notice the log that is in your own eye?”',
    titleAm: 'እንዳይፈረድባችሁ አትፍረዱ — ጉድፍና ምሰሶ',
    titleEn: 'Judge Not: The Speck and the Log',
    taglineAm: 'የፈሪሳውያን የኩነኔ ፍርድ ቤትና የመጽሐፍ ቅዱስ እውነተኛ ማስተዋል',
    taglineEn: 'Self-Righteous Condemnation vs Biblical Discernment',
    eraAm: 'የገሊላ ተራራ ስብከት ዘመን (c. 28 AD)',
    eraEn: 'Galilean Ministry (c. 28 AD)',
    locationAm: 'የተራራው ስብከት ስፍራ፣ ገሊላ',
    locationEn: 'Hillside overlooking Sea of Galilee',
    yearApprox: 'c. 28 AD',
    keyIcon: '👁️',

    sceneAm: {
      setting: 'በዚያ ዘመን ፈሪሳውያን ራሳቸውን እንደ ፍጹም የእግዚአብሔር ወኪሎች ቆጥረው ተራውን ሕዝብ «ይህ ሕግን የማያውቅ ሕዝብ ርጉም ነው» እያሉ በሞራል የበላይነት ያወግዙ ነበር።',
      dailyLife: 'በአናጢነት ስራ ላይ የነበረው የእንጨት ምሰሶ (Beam/Log) እና በአቧራማው ነፋስ ወደ ዐይን የሚገባው ገለባ ወይም ጉድፍ (Sawdust/Speck) የገሊላ ነዋሪዎች የዕለት ተዕለት ልምምድ ነበር።',
      socialTension: 'ሰዎች የሌላውን ሰው ጥቃቅን ጉድለት እየተከታተሉ የሚያወግዙበትና ራሳቸውን ቅዱስ አድርገው የሚያቀርቡበት ጨቋኝ ማህበራዊ ድባብ ሰፍኖ ነበር።'
    },
    sceneEn: {
      setting: 'In 1st-century Judea, the religious elite positioned themselves as self-appointed judges, openly declaring the uneducated common folk “accursed” (John 7:49) while viewing themselves as morally untouchable.',
      dailyLife: 'In carpenter workshops across Galilee, timber roof beams (Greek: dokos) were cut alongside flying clouds of fine sawdust particles (Greek: karphos). Jesus drew directly from his carpentry background.',
      socialTension: 'A toxic atmosphere of hyper-critical gossip and hyper-moralism dominated religious life. People monitored each other’s petty failures while ignoring monumental sins in their own homes.'
    },

    metaphorAm: {
      origin: 'አንድ ሰው በዓይኑ ውስጥ ግዙፍ ባለ 10 ሜትር የእንጨት ምሰሶ ተሰክቶበት ሳለ፥ ወደ ሌላው ሰው ሮጦ ሄዶ «ና ከዓይንህ ውስጥ አንዲት ጥቃቅን የሳር ጉድፍ ላውጣልህ» ሲል ያለው አስቂኝ ገጽታ።',
      linguisticNuance: '«ክሪኖ» (Krino) የሚለው የግሪክ ቃል፡ እዚህ ጋ ፍርድን፣ ኩነኔን (Condemnation) እና በራስ ጻድቅነት ሌላውን መወንጀልን ያሳያል። እውነትንና ሐሰትን መለየትን (Discernment) አይከለክልም።',
      crowdReaction: 'በዓይኑ ምሰሶ የተሸከመው ግብዝ ዐይን-ሐኪም ለመሆን ሲሞክር ሕዝቡ የተረዳው ትምህርት፡ በመጀመሪያ ራስህን በእግዚአብሔር ፊት መርምር የሚል ነበር።'
    },
    metaphorEn: {
      origin: 'A carpenter attempting delicate eye surgery on a friend to remove a tiny flake of sawdust, while having a massive 8-foot construction timber sticking straight out of his own eyeball!',
      linguisticNuance: 'The Greek verb “krino” here refers to self-righteous, hypocritical condemnation and playing God over another’s soul. It does NOT mean suspending moral discernment or tolerating wickedness.',
      crowdReaction: 'The crowd laughed at the absurd mental picture, but felt the sting: stop acting as everyone else’s prosecutor while your own life is compromised.'
    },

    distortionAm: {
      claim: 'ኃጢአት ሲገለጥ ወይም የሐሰት ትምህርት ሲጋለጥ፡ «መጽሐፍ ቅዱስ አትፍረዱ አይልም እንዴ? እኔ ላይ መፍረድ አትችልም!» በማለት ኃጢአትንና ስህተትን ለመሸፈን ይጥቀሱታል።',
      damage: 'ቤተክርስቲያን እውነትን ከሐሰት እንዳትለይ ያደርጋታል፤ ክርስቲያኖችም በኃጢአት ውስጥ ያሉ ወንድሞቻቸውን በፍቅር እንዳያርሙ አፋቸውን ይዘጋል።'
    },
    distortionEn: {
      claim: 'Used as an absolute shield against any rebuke: “The Bible says do not judge! You can never call out sin, false doctrine, or immoral behavior in my life!”',
      damage: 'It silences biblical discernment and disarms the church from protecting itself against wolves and wolves in sheep’s clothing.'
    },

    truthAm: {
      contextSummary: 'ኢየሱስ በቁጥር 5 ላይ «ከዓይንህ ምሰሶውን አውጣ፤ ከዚያ በኋላ በወንድምህ ዐይን ያለውን ጉድፍ ታወጣ ዘንድ አጥርተህ ታያለህ» ብሏል። ማለትም ማረም የተከለከለ አይደለም፤ ነገር ግን ማረም ያለብህ ራስህን ንስሐ አስገብተህ በታጠበ ዐይን ነው!',
      surroundingVerses: 'ማቴዎስ 7:5-6, 15-16 — «ከሐሰተኞች ነቢያት ተጠንቀቁ... ከፍሬያቸው ታውቋቸዋላችሁ።» (ፍሬን መመርመር ፍርድ ሳይሆን ማስተዋል ነው!)',
      timelessPrinciple: 'ግብዝነት የሌለበት ፍቅርና ንስሐ፡ የሌሎችን ስህተት ከማረማችን በፊት የራሳችንን ልብ በእግዚአብሔር ብርሃን እንድንፈትሽ ያዘናል።'
    },
    truthEn: {
      contextSummary: 'Jesus commands in verse 5: “First take the log out of your own eye, and THEN you will see clearly to take the speck out of your brother’s eye.” He does not forbid helping your brother—He forbids hypocritical judgment!',
      surroundingVerses: 'Matthew 7:5, 15–20 — Just 10 verses later, Jesus commands: “Beware of false prophets, who come to you in sheep’s clothing... You will recognize them by their fruits.” How can you beware of false prophets without exercising judgment?',
      timelessPrinciple: 'Self-examination must precede brotherly correction. Discernment is commanded; vindictive hypocrisy is condemned.'
    },

    crossReferences: [
      {
        ref: 'ዮሐንስ 7:24',
        noteAm: '«የቅን ፍርድ ፍረዱ እንጂ በመልክ አትፍረዱ»',
        noteEn: '“Do not judge by appearances, but judge with right judgment.”'
      },
      {
        ref: 'ገላትያ 6:1',
        noteAm: '«ሰው በማናቸውም በደል ቢገኝ፥ እናንተ መንፈሳውያን የሆናችሁ በየዋህነት መንፈስ አቅኑት»',
        noteEn: '“If anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness.”'
      }
    ]
  },

  // 3. Philippians 4:13 - "I can do all things through Christ"
  {
    id: 'philippians-4-all-things',
    bookNr: 50,
    chapter: 4,
    verseStart: 11,
    verseEnd: 13,
    verseRefAm: 'ፊልጵስዩስ 4:11-13',
    verseRefEn: 'Philippians 4:11-13',
    verseTextAm: '«በምኖርበት ኑሮዬ መብቃቴን ተምሬአለሁና፤ መዋረድንም አውቃለሁ መብዛትንም አውቃለሁ፤ መጥገብንም መራብንም መብዛትንም መጉደልንም በነገር ሁሉ በሁሉም ተምሬአለሁ። ኃይልን በሚሰጠኝ በክርስቶስ ሁሉን እችላለሁ።»',
    verseTextEn: '“I have learned in whatever situation I am to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me.”',
    titleAm: 'በክርስቶስ ሁሉን እችላለሁ — የሮም እስር ቤት ምስክርነት',
    titleEn: 'I Can Do All Things: The Roman Prison Secret',
    taglineAm: 'የስፖርት ማልያ መፈክር ሳይሆን በረሃብና በመከራ ውስጥ የመርካት ሚስጥር',
    taglineEn: 'Not a Superpower Mantra, but Supernatural Contentment in Suffering',
    eraAm: 'የሮም እስር ዘመን (c. 62 AD)',
    eraEn: 'Roman Imprisonment (c. 62 AD)',
    locationAm: 'የሮም የወህኒ ቤት ማቆያ',
    locationEn: 'Roman Praetorian Guard Custody, Rome',
    yearApprox: 'c. 62 AD',
    keyIcon: '⛓️',

    sceneAm: {
      setting: 'ሐዋርያው ጳውሎስ ይህን ደብዳቤ ሲጽፍ በሮማ ወታደሮች ሰንሰለት ታስሮ፣ ቀጣይ ቀኑ በቄሳር ፍርድ ቤት ሞት ወይም ህይወት እንደሚጠብቀው በማያውቅበት ጨለማ ሁኔታ ውስጥ ነበር።',
      dailyLife: 'በሮም እስር ቤቶች ውስጥ ለታራሚዎች ምግብ የሚቀርበው በመንግሥት አልነበረም፤ ወዳጆቻቸው ካላመጡላቸው በብርድና በረሃብ ይሞቱ ነበር። የፊልጵስዩስ ቤተክርስቲያን የላከችለት ጥቂት አቅርቦት በደረሰ ጊዜ ነበር ይህን የጻፈው።',
      socialTension: 'በግሪክና ሮማ ፍልስፍና «ስቶይክስ» (Stoics) የሚባሉ ፈላስፎች በራሳቸው የውስጥ ኃይል ሁሉን ችለው ለመኖር ይታገሉ ነበር። ጳውሎስ ግን የኔ ብርታት ክርስቶስ ነው ይላል።'
    },
    sceneEn: {
      setting: 'The Apostle Paul was chained 24/7 to an imperial Roman guard in house arrest, awaiting trial before Emperor Nero where execution was an imminent possibility.',
      dailyLife: 'Ancient Roman prisoners received no state rations. If friends or churches did not bring food, blankets, or funds, prisoners starved or froze. Epaphroditus had just arrived carrying modest relief supplies from Philippi.',
      socialTension: 'Greco-Roman Stoic philosophers prized “autarkeia” (self-sufficiency)—the cold ability to remain unbothered by fate through sheer human willpower. Paul radically subverts this: my sufficiency is not in myself, but in Christ!'
    },

    metaphorAm: {
      origin: 'ጳውሎስ «ሚስጥሩን ተምሬአለሁ» (Greek: memyemai) ሲል በጥንታዊ የግሪክ ሚስጥራዊ ትምህርት ቤቶች እንደሚሰጥ ጥልቅ እውቀት አድርጎ ይገልጸዋል፡ ያም ሚስጥር በረሃብም ሆነ በጥጋብ ውስጥ ከክርስቶስ ጋር መርካት ነው።',
      linguisticNuance: '«ሁሉን እችላለሁ» (Panta ischuō) የሚለው በግሪኩ አውድ የሚያሳየው፡ ማንኛውንም ተቃውሞ፣ መከራና የኑሮ ውጣ ውረድ በክርስቶስ ኃይል መቋቋም መቻልን ነው። እግር ኳስ ማሸነፍን ወይም ሀብታም መሆንን አይደለም።',
      crowdReaction: 'የፊልጵስዩስ ቅዱሳን ይህን ሲያነቡ የታሰረው መሪያቸው ተስፋ እንዳልቆረጠ፣ በሰንሰለት ውስጥ ሆኖ በክርስቶስ ሰላም እንደተሞላ ተረድተው ተጽናኑ።'
    },
    metaphorEn: {
      origin: 'Paul uses the Greek initiation term “memyemai” (“I have been initiated into the secret”). The secret was not how to become wealthy or famous, but how to remain profoundly joyful while starving in chains.',
      linguisticNuance: '“All things” (panta) is grammatically bound to the preceding verses (v. 11-12): facing hunger, facing poverty, facing abundance, facing suffering. It means endurance and contentment through Christ.',
      crowdReaction: 'The struggling, impoverished Macedonian believers in Philippi found immense courage: their apostle was in chains, yet completely victorious inside Christ.'
    },

    distortionAm: {
      claim: 'ይህ ጥቅስ ዛሬ በስፖርት ጨዋታዎች፣ በፈተና ማለፊያ፣ በንግድ ማትረፊያ ወይም ማንኛውንም ምድራዊ ፍላጎት እንደ አስማት ማሳኪያ ቃል ሆኖ ይነገራል («የፈለግከውን አቅድ፣ በክርስቶስ ሁሉን ትችላለህ!»)።',
      damage: 'ሰዎች በመከራ፣ በህመም ወይም በድህነት ውስጥ ሲያልፉ «እምነትህ ጎድሎ ነው ያልቻልከው» በማለት በሐሰት የጥፋተኝነት ስሜት ይጥላቸዋል።'
    },
    distortionEn: {
      claim: 'Plastered on sports shoes, gym lockers, and business seminars as a guarantee of earthly triumph: “Whatever goal you dream of, Christ will guarantee your victory!”',
      damage: 'When faithful Christians face cancer, financial ruin, or persecution, prosperity theology accuses them of lacking faith because they didn’t “triumph”.'
    },

    truthAm: {
      contextSummary: 'ፊልጵስዩስ 4:13 የድል አድራጊነት አስማት ሳይሆን፡ በመከራና በችግር ውስጥ እያለፍን እንኳን በክርስቶስ ኃይል ተደግፈን የመርካትና የመጽናት መለኮታዊ አቅም ነው።',
      surroundingVerses: 'ፊልጵስዩስ 4:11-12 — «መዋረድንም አውቃለሁ መብዛትንም አውቃለሁ፤ መጥገብንም መራብንም መብዛትንም መጉደልንም በነገር ሁሉ በሁሉም ተምሬአለሁ።»',
      timelessPrinciple: 'ክርስቶስ የሚሰጠን ኃይል ሁኔታዎቻችንን ሁሉ እንዳማረን እንድንቀይር ሳይሆን፥ በማናቸውም ሁኔታ ውስጥ ብንሆን በጸጋው እንድንጸና ነው።'
    },
    truthEn: {
      contextSummary: 'Philippians 4:13 is not a license for worldly ambition; it is the supernatural power to be content and faithful whether you are starving in prison or abounding in blessings.',
      surroundingVerses: 'Philippians 4:11–12 — “I have learned in whatever situation I am to be content. I know how to be brought low, and I know how to abound... facing plenty and hunger.”',
      timelessPrinciple: 'The power Christ gives is not the power to escape all trials, but the divine endurance to remain joyful and faithful through every trial.'
    },

    crossReferences: [
      {
        ref: '2ኛ ቆሮንቶስ 12:9-10',
        noteAm: '«ጸጋዬ ይበቃሃል፥ ኃይሌ በድካም ይፈጸማልና»',
        noteEn: '“My grace is sufficient for you, for my power is made perfect in weakness.”'
      },
      {
        ref: '1ኛ ጢሞቴዎስ 6:6',
        noteAm: '«ኑሮዬ ይበቃኛል ለሚለው ግን እግዚአብሔርን መምሰል እጅግ ማትረፍ ነው»',
        noteEn: '“Now godliness with contentment is great gain.”'
      }
    ]
  },

  // 4. Jeremiah 29:11 - "Plans to prosper you and not to harm you"
  {
    id: 'jeremiah-29-plans-prosper',
    bookNr: 24,
    chapter: 29,
    verseStart: 10,
    verseEnd: 11,
    verseRefAm: 'ኤርምያስ 29:10-11',
    verseRefEn: 'Jeremiah 29:10-11',
    verseTextAm: '«እግዚአብሔር እንዲህ ይላልና፡ በባቢሎን ሰባ ዓመት በተፈጸመ ጊዜ እጎበኛችኋለሁ፥ ወደዚህችም ስፍራ በመመለስ መልካሙን ቃሌን እፈጽምላችኋለሁ። ለእናንተ የማስባትን አሳብ እኔ አውቃለሁ፤ ፍጻሜና ተስፋ እሰጣችሁ ዘንድ የሰላም አሳብ ነው እንጂ የክፉ ነገር አይደለም።»',
    verseTextEn: '“For thus says the Lord: When seventy years are completed for Babylon, I will visit you, and I will fulfill to you my promise and bring you back to this place. For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.”',
    titleAm: 'የሰላም አሳብ — የባቢሎን የስደት ደብዳቤ',
    titleEn: 'Plans for Welfare: The Letter to the Exiles',
    taglineAm: 'የ70 ዓመታት የስደት ተግሣጽና የሀሰተኛው ነቢይ የሐናንያ ውሸት',
    taglineEn: '70 Years of Captivity and the False Prophet Hananiah’s Lies',
    eraAm: 'የባቢሎን ምርኮ ዘመን (c. 597 BC)',
    eraEn: 'Babylonian Captivity (c. 597 BC)',
    locationAm: 'የባቢሎን የስደት መንደር (ቴል-አቢብ)',
    locationEn: 'Exile Settlement near River Chebar, Babylon',
    yearApprox: 'c. 597 BC',
    keyIcon: '📜',

    sceneAm: {
      setting: 'በ597 ዓክልበ የባቢሎኑ ንጉሥ ናቡከደነፆር ኢየሩሳሌምን ከቦ ንጉሡንና ምርጥ ወጣቶችን፣ የእጅ ጥበበኞችን ማርኮ ወደ ባቢሎን በባዶ እግራቸው ነድቶ ወስዷቸው ነበር። ቤተ መቅደሳቸው ተቃጥሏል፣ አገራቸው ፈርሳለች።',
      dailyLife: 'በምርኮ ምድር የነበሩ አይሁድ በድንጋጤና በሐዘን ተውጠው «እግዚአብሔር ጥሎናልን?» እያሉ ያለቅሱ ነበር።',
      socialTension: 'ሐናንያ የሚባል የሐሰት ነቢይ ተነስቶ «በሁለት ዓመት ውስጥ ምርኮው ይሰበራል፣ ወደ አገራችሁ በድል ትመለሳላችሁ!» እያለ ሕዝቡን በሐሰት ተስፋ ያታልል ነበር (ኤር 28)። ኤርምያስ ግን ደብዳቤ ጻፈላቸው፡ 70 ዓመት ትቀመጣላችሁ!'
    },
    sceneEn: {
      setting: 'In 597 BC, King Nebuchadnezzar had besieged Jerusalem and dragged thousands of Jewish royals, craftsmen, and leaders 900 miles across the burning desert into pagan Babylon.',
      dailyLife: 'The disoriented refugees sat weeping by the canals of Babylon (Psalm 137). Their temple was doomed, their holy city breached, and their national identity shattered.',
      socialTension: 'Celebrity false prophets like Hananiah were preaching feel-good prosperity messages: “God has broken Babylon’s yoke! Within two years you will all go home rich!” (Jeremiah 28). Jeremiah wrote this letter to shatter their wishful thinking.'
    },

    metaphorAm: {
      origin: 'ኤርምያስ የጻፈው ደብዳቤ ምክር ይዞ ነበር፡ «ቤቶችን ሥሩ፥ ተቀመጡባቸውም፤ ተክሎችንም ትከሉ፥ ፍሬያቸውንም ብሉ፤ ልጆቻችሁንም አጋቡ፤ የባቢሎንንም ሰላም ሹ... 70 ዓመት እስኪያልፍ አትወጡም!» (ኤር 29:4-7)።',
      linguisticNuance: '«የሰላም አሳብ» (Hebrew: Machshevot Shalom) — ሻሎም ማለት ቁሳዊ ብልጽግና ብቻ ሳይሆን፡ ከእግዚአብሔር ጋር የሚደረግ የተሟላ እርቅና መንፈሳዊ ተሃድሶ ነው።',
      crowdReaction: 'በዚያን ዘመን የነበሩ ምርኮኞች ይህን ሲሰሙ፡ አብዛኞቹ በባቢሎን ምድር እንደሚሞቱና ተስፋው የሚፈጸመው ለልጅ ልጆቻቸው እንደሆነ ተረድተው በትህትና ንስሐ ገቡ።'
    },
    metaphorEn: {
      origin: 'Jeremiah’s actual instructions were the opposite of an immediate escape: “Build houses and live in them; plant gardens; take wives; multiply there... and seek the peace of the city where I have sent you into exile!” (v. 5–7).',
      linguisticNuance: 'The Hebrew word for “welfare” is “Shalom”—wholeness, covenant peace, and restoration to God, not a promise of immediate luxury car keys or lottery wins.',
      crowdReaction: 'The original recipients realized they were going to spend the rest of their natural lives in Babylon! The promise was for their children and grandchildren after 70 years of generational refining.'
    },

    distortionAm: {
      claim: '«ይህ ጥቅስ ዛሬ ለአንተ የተሰጠ የግል ቃል ኪዳን ነው፤ በህይወትህ ምንም ክፉ ነገር አይደርስብህም፣ በሁሉም ነገር ትከብራለህ!» ተብሎ ለግል ምድራዊ ምኞት ይነገራል።',
      damage: 'ክርስቲያኖች መከራ ሲገጥማቸው ወይም የሕይወት እቅዳቸው ሲፈርስ «እግዚአብሔር ቃሉን አላከበረም» ብለው እንዲጠራጠሩና እምነታቸው እንዲናወጥ ያደርጋል።'
    },
    distortionEn: {
      claim: 'Treated as a personalized guarantee that God will never allow financial loss, heartbreak, illness, or suffering in your life today.',
      damage: 'When catastrophe strikes, believers feel betrayed by God because they were promised an easy life free from tribulation.'
    },

    truthAm: {
      contextSummary: 'ኤርምያስ 29:11 የተነገረው ለግለሰብ የቅንጦት ህይወት ሳይሆን፡ በምርኮና በቅጣት ውስጥ ለነበረው የእግዚአብሔር ሕዝብ የተሰጠ የ70 ዓመት የትዕግሥትና የተሃድሶ ቃል ኪዳን ነው።',
      surroundingVerses: 'ኤርምያስ 29:10, 12-13 — «በሙሉ ልባችሁ ከሻችሁኝ ታገኙኛላችሁ።»',
      timelessPrinciple: 'እግዚአብሔር በመከራና በስደት ወቅት እንኳን ህዝቡን አይረሳም፤ የፈተናው ጊዜ ሲያልቅ የታመነውን የተስፋውን ቃል ይፈጽማል።'
    },
    truthEn: {
      contextSummary: 'Jeremiah 29:11 is not an exemption from hardship; it was God’s comfort to a disciplined nation enduring 70 years of exile that Babylon would not be their final story.',
      surroundingVerses: 'Jeremiah 29:10, 12–14 — “When 70 years are completed... you will call upon me and pray to me, and I will hear you. You will seek me and find me, when you seek me with all your heart.”',
      timelessPrinciple: 'Even when God leads His people through seasons of discipline and exile, His ultimate sovereign intention is covenant redemption and everlasting peace.'
    },

    crossReferences: [
      {
        ref: 'ዳንኤል 9:2',
        noteAm: 'ዳንኤል በኤርምያስ መጽሐፍ የኢየሩሳሌም መፈታት 70 ዓመት መሆኑን እንዳስተዋለ',
        noteEn: 'Daniel studying Jeremiah’s prophecy of the 70-year exile'
      },
      {
        ref: 'ሮሜ 8:28',
        noteAm: '«እግዚአብሔርን ለሚወዱት ነገር ሁሉ ለበጎ እንዲደረግ እናውቃለን»',
        noteEn: '“For those who love God all things work together for good.”'
      }
    ]
  },

  // 5. 1 Timothy 6:10 - "The love of money is a root of all evil"
  {
    id: '1timothy-6-love-of-money',
    bookNr: 54,
    chapter: 6,
    verseStart: 9,
    verseEnd: 10,
    verseRefAm: '1ኛ ጢሞቴዎስ 6:9-10',
    verseRefEn: '1 Timothy 6:9-10',
    verseTextAm: '«ዳሩ ግን ባለጠጎች ሊሆኑ የሚፈልጉ በጥፋትና በመፍረስ ሰዎችን በሚያሰጥም በሚያታልልም በሚጎዳም በብዙ ምኞትና በፈተና በወጥመድም ይወድቃሉ። ገንዘብን መውደድ የክፋት ሁሉ ሥር ነውና፥ አንዳንዶች ይህን ሲመኙ፥ ከሃይማኖት ተሳስተው በብዙ ሥቃይ ራሳቸውን ወጉ።»',
    verseTextEn: '“Those who desire to be rich fall into temptation, into a snare, into many senseless and harmful desires that plunge people into ruin and destruction. For the love of money is a root of all kinds of evil. It is through this craving that some have wandered away from the faith and pierced themselves with many pangs.”',
    titleAm: 'ገንዘብን መውደድ — የኤፌሶን የንግድ ማዕከል ፈተና',
    titleEn: 'The Love of Money: The Wealth Traps of Ephesus',
    taglineAm: 'ገንዘብ ራሱ ሳይሆን የልብ ስግብግብነትና የሃይማኖት ንግድ',
    taglineEn: 'Not Currency Itself, but Covetousness and Religion-for-Profit',
    eraAm: 'የጥንቷ ቤተክርስቲያን ዘመን (c. 64 AD)',
    eraEn: 'Early Apostolic Era (c. 64 AD)',
    locationAm: 'የኤፌሶን ከተማ፣ ትንሿ እስያ',
    locationEn: 'Metropolis of Ephesus, Asia Minor',
    yearApprox: 'c. 64 AD',
    keyIcon: '💰',

    sceneAm: {
      setting: 'ኤፌሶን በሮማ ግዛት ውስጥ የንግድ፣ የወደብና የአርጤምስ ቤተ መቅደስ የባንክ ማዕከል የነበረች እጅግ ሀብታም ከተማ ነበረች። በከተማዋ ውስጥ ሃይማኖት ራሱ ትልቅ የገንዘብ ማግኛ ንግድ ሆኖ ነበር።',
      dailyLife: 'በከተማዋ ውስጥ የነበሩ የሐሰት አስተማሪዎች ወንጌልን እንደ ትርፍ ማግኛ ንግድ ይመለከቱት ነበር (ቁ. 5)። ሀብታም መሆንን የመንፈሳዊነት መለኪያ አድርገው ያቀርቡ ነበር።',
      socialTension: 'ወጣቱ ጢሞቴዎስ በኤፌሶን ቤተክርስቲያን መጋቢ ሆኖ ሲያገለግል፣ በሀብታሞች ትዕቢትና በድሆች መገፋት መካከል ትልቅ ማህበራዊ ውጥረት ገጥሞት ነበር።'
    },
    sceneEn: {
      setting: 'Ephesus was the premier mega-port and financial banking hub of Asia Minor. The colossal Temple of Artemis served as the central bank for international empires, driving massive commerce.',
      dailyLife: 'Charlatan teachers and religious peddlers flooded Ephesus, teaching that “godliness is a means of financial gain” (1 Tim 6:5). Wealth was flaunted as proof of divine blessing.',
      socialTension: 'Young Timothy faced a divided congregation: wealthy aristocrats parading fine pearls and gold braids alongside impoverished day laborers and slaves.'
    },

    metaphorAm: {
      origin: 'ጳውሎስ ገንዘብን መውደድ «ሥር» ነው ሲል፡ ከመሬት በታች ተደብቆ መርዘኛ ዛፍ እንደሚያበቅልና የሰውን ህይወት እንደሚያደርቅ ተክል ይገልጸዋል።',
      linguisticNuance: '«የክፋት ሁሉ ሥር» የሚለው በግሪኩ «ሪዛ ፓንቶን ቶን ካኮን» (Rhiza pantōn tōn kakōn) — ገንዘብ ራሱ ክፉ አይደለም፤ ገንዘብ የልውውጥ መሳሪያ ነው። ክፉው «ፊላርጊሪያ» (Philargyria - የብር ፍቅር/ስግብግብነት) ነው።',
      crowdReaction: 'ጢሞቴዎስና ምእመናን ራሳቸውን ከዚህ የኤፌሶን ፍቅረ-ነዋይ አባዜ እንዲጠብቁና በቂ ምግብና ልብስ ባላቸው ነገር እንዲረኩ ተመከሩ።'
    },
    metaphorEn: {
      origin: 'Paul uses the botanical metaphor of a poisonous root buried deep under the soil, quietly feeding toxic branches of greed, fraud, betrayal, and spiritual apostasy.',
      linguisticNuance: 'Greek uses “philargyria” (affection for silver/money). Scripture never says money itself is evil (currency is neutral). It says the *craving* for money is a root producing all species of evil.',
      crowdReaction: 'Ephesian Christians were jolted by the vivid medical term “pierced through with many pangs” (peripeiran)—like impaling oneself on a poisoned iron spear.'
    },

    distortionAm: {
      claim: 'አንዳንዶች «ገንዘብ ራሱ እርጉም ነው፣ ክርስቲያን ድሃ ብቻ መሆን አለበት» ይላሉ፤ ሌሎች ደግሞ የብልጽግና ሰባኪዎች ጥቅሱን ሸሽተው «ብዙ ገንዘብ ካላገኘህ በእምነት አልተራመድክም» ይላሉ።',
      damage: 'ሰዎችን ወደ ሁለት ጽንፍ ይወስዳል፡ ወይ አላስፈላጊ የድህነት ምንኩስና፣ ወይም ወደ ከሀዲ ስግብግብነት።'
    },
    distortionEn: {
      claim: 'Misquoted commonly as “Money is the root of all evil”, leading some to romanticize poverty, while prosperity preachers invert it to justify predatory seed-faith fundraising.',
      damage: 'It obscures the real danger: an idolatrous heart that trusts in fluctuating riches rather than the living God.'
    },

    truthAm: {
      contextSummary: 'ጳውሎስ በቁጥር 17-18 ላይ ባለጠጎች እንዳይታበዩና በሚያልፍ ባለጠግነት እንዳይታመኑ እንጂ፥ በበጎ ስራ ባለጠጎች እንዲሆኑ፣ ለጋሶችና አጋሪዎች እንዲሆኑ ያዛል።',
      surroundingVerses: '1ኛ ጢሞቴዎስ 6:6-8, 17-19 — «ምግብና ልብስ ከኖረን እርሱ ይበቃናል... ለሚሹት ሊያካፍሉ የተዘጋጁ ይሁኑ።»',
      timelessPrinciple: 'ገንዘብ እግዚአብሔርንና ሰውን የምናገለግልበት መሳሪያ እንጂ፥ ልባችንን የምናስገዛለት ጣዖት መሆን የለበትም።'
    },
    truthEn: {
      contextSummary: 'Paul never commands the wealthy to throw away money, but in verses 17–19 commands them: “Set your hopes not on the uncertainty of riches, but on God... do good, be rich in good works, generous and ready to share.”',
      surroundingVerses: '1 Timothy 6:6–8, 17–19 — “Godliness with contentment is great gain... If we have food and clothing, with these we will be content.”',
      timelessPrinciple: 'Wealth is a tool for worship, generosity, and kingdom stewardship, never a master to be worshiped.'
    },

    crossReferences: [
      {
        ref: 'ዕብራውያን 13:5',
        noteAm: '«ኑሯችሁ ያለ ገንዘብ መውደድ ይሁን፥ ያላችሁም ይብቃችሁ»',
        noteEn: '“Keep your life free from love of money, and be content with what you have.”'
      },
      {
        ref: 'ሉቃስ 12:15',
        noteAm: '«የሰው ሕይወት በገንዘቡ ብዛት አይደለምና ተጠንቀቁ ከመጎምጀትም ሁሉ ተጠበቁ»',
        noteEn: '“Take care, and be on your guard against all covetousness, for one’s life does not consist in the abundance of his possessions.”'
      }
    ]
  },

  // 6. Revelation 3:20 - "Behold, I stand at the door and knock"
  {
    id: 'revelation-3-door-knock',
    bookNr: 66,
    chapter: 3,
    verseStart: 15,
    verseEnd: 20,
    verseRefAm: 'ራእይ 3:15-20',
    verseRefEn: 'Revelation 3:15-20',
    verseTextAm: '«በራድ ወይም ትኩስ እንዳይደለህ ሥራህን አውቃለሁ፤ በራድ ወይም ትኩስ ብትሆንስ መልካም በሆነ ነበር! እንዲሁ ለብ ስላልህ በራድም ወይም ትኩስ ስላልሆንህ ከአፌ ልተፋህ ነው። ሀብታም ነኝና ባለጠጋ ሆኜአለሁ አንድም አይጎድለኝም ስለምትል... እነሆ በደጅ ቆሜ አንኳኳለሁ፤ ማንም ድምፄን ቢሰማ ደጁንም ቢከፍትልኝ፥ ወደ እርሱ እገባለሁ ከእርሱም ጋር እራት እበላለሁ እርሱም ከእኔ ጋር ይበላል።»',
    verseTextEn: '“I know your works: you are neither cold nor hot. Would that you were either cold or hot! So, because you are lukewarm, and neither hot nor cold, I will spit you out of my mouth. For you say, I am rich, I have prospered, and I need nothing... Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.”',
    titleAm: 'በደጅ ቆሜ አንኳኳለሁ — የሎዶቅያ ለብ ያለ ውሃ',
    titleEn: 'I Stand at the Door: The Lukewarm Aqueducts of Laodicea',
    taglineAm: 'የአልትራ-ሀብታሟ የሎዶቅያ ማቅለሽለሽና የክርስቶስ የማዕድ ጥሪ',
    taglineEn: 'The Nauseating Mineral Water of Laodicea & Christ’s Dinner Invitation',
    eraAm: 'የሮማ ንጉሠ-ነገሥት ዶሚቲያን ዘመን (c. 95 AD)',
    eraEn: 'Domitianic Persecution Era (c. 95 AD)',
    locationAm: 'የሎዶቅያ ከተማ፣ ሊቆስ ሸለቆ',
    locationEn: 'Laodicea, Lycus River Valley (Modern Turkey)',
    yearApprox: 'c. 95 AD',
    keyIcon: '🚪',

    sceneAm: {
      setting: 'ሎዶቅያ በወቅቱ በሮማ ግዛት እጅግ ሀብታም ከተማ ነበረች። በ60 ዓ.ም በታላቅ የመሬት መንቀጥቀጥ ስትፈርስ የሮማን መንግሥት እርዳታ ሳትጠይቅ በራሷ ካፒታል የተገነባች ኩሩ የባንክ፣ የጥቁር ሱፍና የዐይን መድኃኒት ማዕከል ነበረች።',
      dailyLife: 'ሎዶቅያ ግን የተፈጥሮ ንጹሕ ውሃ አልነበራትም! ከሄራጶሊስ የፈላ የፍል-ውሃ በቧንቧ (Aqueduct) ይጓዝ ነበር። ወደ ሎዶቅያ ሲደርስ ማዕድናቱ በዝተው ውሃው ለብ ያለና ሰውን የሚያስመልስ (Emetic) መርዘኛ ይሆን ነበር።',
      socialTension: 'ቤተክርስቲያኗ በከተማዋ ብልጽግና ተውጣ ራሷን «ሀብታም ነኝ፣ ምንም አይጎድለኝም!» እያለች ታሞግስ ነበር። ጌታ ግን «ዕውር፣ እርቃንህንና ምስኪን ነህ» አላት።'
    },
    sceneEn: {
      setting: 'Laodicea was excessively rich. When an earthquake flattened the city in 60 AD, they arrogantly refused financial aid from Rome and rebuilt entirely with their own private gold. They were world-famous for banking, glossy black wool, and eye salve.',
      dailyLife: 'Laodicea had one fatal flaw: no natural drinking water. Hot medicinal waters piped from Hierapolis cooled over 6 miles of stone aqueducts, arriving in Laodicea lukewarm, thick with calcium carbonate sediment, causing instant vomiting when tasted.',
      socialTension: 'The local church absorbed the city’s corporate arrogance: “We are wealthy; we need nothing from nobody!” But Christ looked at them and saw spiritual bankruptcy.'
    },

    metaphorAm: {
      origin: 'የቀዝቃዛና የትኩስ ውሃ ምሳሌ፡ በአቅራቢያ ያለችው የቆላስይስ ከተማ የሚያረካ ቀዝቃዛ የምንጭ ውሃ ነበራት፤ ሄራጶሊስ ደግሞ ፈዋሽ የፈላ ፍል-ውሃ ነበራት። ሁለቱም ጠቃሚ ነበሩ። የሎዶቅያ ለብ ያለ ውሃ ግን መጠጣት የማይቻል ማቅለሽለሽ ነበር!',
      linguisticNuance: '«በደጅ ቆሜ አንኳኳለሁ» የሚለው ቃል የተጻፈው ላልዳኑ አረማውያን ሳይሆን፡ ክርስቶስን ከቤተክርስቲያን ውጭ አውጥተው ደጁን ለዘጉበት ለታወከች የሎዶቅያ ቤተክርስቲያን ነው!',
      crowdReaction: 'የሎዶቅያ አማኞች የከተማቸውን ውሃ አስጸያፊነት፣ የዐይን መድኃኒታቸውን ከንቱነትና የጥቁር ሱፋቸውን ውሸት ጌታ ሲነግራቸው እፍረት ተሰማቸው።'
    },
    metaphorEn: {
      origin: 'Neighboring Colossae had refreshing, ice-cold mountain springs; neighboring Hierapolis had therapeutic hot springs. Both were useful! But Laodicea’s lukewarm mineral runoff was completely undrinkable—nauseating to the stomach.',
      linguisticNuance: '“Behold, I stand at the door and knock” was written to baptized church members, not an unbelieving individual sinner. Christ was locked outside His own congregation!',
      crowdReaction: 'The church was mortified: Jesus used their three pride points against them—He advised them to buy gold refined in fire (not their banks), white garments (not their black wool), and divine eye salve to heal their blindness.'
    },

    distortionAm: {
      claim: 'ብዙውን ጊዜ ይህ ጥቅስ ላልዳነ አረማዊ ሰው «ኢየሱስ ወደ ልብህ በር መጥቶ እያንኳኳ ነውና ክፈትለት» ተብሎ ለግል መዳን ጥሪ ብቻ ይነገራል።',
      damage: 'ዋናውን የቤተክርስቲያን ተግሣጽ ያደበዝዛል፡ በገንዘብና በምቾት ሰክራ ክርስቶስን ከደጅ ያስቀረችውን ለብ ያለች ቤተክርስቲያን አደጋ እንዳናይ ያደርጋል።'
    },
    distortionEn: {
      claim: 'Almost exclusively used as an evangelistic appeal to non-Christians: “Jesus is knocking at the door of your heart, accept Him as your savior today!”',
      damage: 'It completely masks the urgent warning to comfortable, wealthy churches who operate full programs while locking Jesus outside their actual fellowship.'
    },

    truthAm: {
      contextSummary: 'ራእይ 3:20 የሚያሳየው ጌታ ኢየሱስ ለተመቻቸችና ለታበየች ቤተክርስቲያን ንስሐ እንድትገባ ያቀረበውን ጥልቅ ፍቅርና የማዕድ ህብረት ነው።',
      surroundingVerses: 'ራእይ 3:17-19 — «እኔ የምወዳቸውን ሁሉ እገሥጻቸዋለሁ እቀጣቸውማለሁ፤ እንግዲህ ቅና ንስሐም ግባ።»',
      timelessPrinciple: 'ምድራዊ ሀብትና የተመቻቸ ኑሮ መንፈሳዊ ሙሉነትን አያመለክትም፤ ቤተክርስቲያን በሩን ከፍታ ክርስቶስን ማዕከል ካላደረገች ከአፍ የምትተፋ ትሆናለች።'
    },
    truthEn: {
      contextSummary: 'Revelation 3:20 is Christ’s gracious plea to a self-satisfied, lukewarm church to repent and restore authentic table fellowship with their Lord.',
      surroundingVerses: 'Revelation 3:17–19 — “Those whom I love, I reprove and discipline, so be zealous and repent... buy from me gold refined by fire, so that you may be rich.”',
      timelessPrinciple: 'Material success and church attendance do not equal spiritual vitality. When a church trusts in its own wealth, it forces Jesus outside the door.'
    },

    crossReferences: [
      {
        ref: 'መኃልየ መኃልይ 5:2',
        noteAm: '«የእኅቴ ድምፅ ነው፥ ደጁን ታንኳኳለች»',
        noteEn: '“The voice of my beloved! He knocks: Open to me, my sister, my love.”'
      },
      {
        ref: 'ሉቃስ 12:36',
        noteAm: '«ሲመጣና ሲያንኳኳ ወዲያው እንዲከፍቱለት ጌታቸውን እንደሚጠብቁ ሰዎች ሁኑ»',
        noteEn: '“Be like men who are waiting for their master to come home, so that they may open the door to him at once when he knocks.”'
      }
    ]
  },

  // 7. Malachi 3:10 - "Bring the whole tithe into the storehouse"
  {
    id: 'malachi-3-tithe-storehouse',
    bookNr: 39,
    chapter: 3,
    verseStart: 8,
    verseEnd: 10,
    verseRefAm: 'ሚልክያስ 3:8-10',
    verseRefEn: 'Malachi 3:8-10',
    verseTextAm: '«ሰው እግዚአብሔርን ይሰርቃልን? እናንተ ግን እኔን ሰርቃችኋል። እናንተም፡ በምን ሰረቅንህ? ብላችኋል። በአሥራትና በበኵራት ነው። እናንተና ይህ ሕዝብ ሁሉ እኔን ሰርቃችኋልና በእርግማን ተረግማችኋል። በመቅደሴ ውስጥ መብል እንዲሆን አሥራቱን ሁሉ ወደ ጎተራ አግቡ፤ የሰማይንም መስኮት የማልከፍትላችሁ እንደ ሆነ... በዚህ ፈትኑኝ ይላል የሠራዊት ጌታ እግዚአብሔር።»',
    verseTextEn: '“Will man rob God? Yet you are robbing me. But you say, ‘How have we robbed you?’ In your tithes and contributions. You are cursed with a curse, for you are robbing me, the whole nation of you. Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you...”',
    titleAm: 'አሥራቱን ወደ ጎተራ አግቡ — የድህረ-ምርኮው ድርቅና የሌዋውያን ረሃብ',
    titleEn: 'Bring the Tithe to the Storehouse: The Starving Levites of Judah',
    taglineAm: 'የብልጽግና ሰባኪዎች የገንዘብ ማስፈራሪያ ወይስ የእርሻ ማህበረሰብ ፍትሕ?',
    taglineEn: 'Prosperity Coercion vs Covenant Justice for Temple Caretakers',
    eraAm: 'የፋርስ አገዛዝ ዘመን (c. 430 BC)',
    eraEn: 'Persian Imperial Era (c. 430 BC)',
    locationAm: 'የኢየሩሳሌም ሁለተኛው ቤተ መቅደስ ጎተራ',
    locationEn: 'Second Temple Storehouse Chambers, Jerusalem',
    yearApprox: 'c. 430 BC',
    keyIcon: '🌾',

    sceneAm: {
      setting: 'ከባቢሎን የተመለሱት ጥቂት አይሁድ በፋርስ አገዛዝ ሥር በከባድ ድህነትና ድርቅ ውስጥ ነበሩ። የኢየሩሳሌም ሁለተኛው ቤተ መቅደስ ተገንብቶ የነበረ ቢሆንም፣ የሀገሪቱ ባለጸጎች ለቤተ መቅደሱ እርዳታ መስጠት አቁመው ነበር።',
      dailyLife: 'በዚያ ዘመን አሥራት የሚሰጠው በገንዘብ (ሳንቲም) ሳይሆን በእርሻ ሰብል (ስንዴ፣ ወይን፣ ዘይትና እንስሳት) ነበር። የቤተ መቅደሱ ጎተራ (Storehouse) እነዚህ ሰብሎች የሚከማቹበት ግዙፍ ክፍል ነበር።',
      socialTension: 'የመሬት ባለቤቶች አሥራቱን ባለማምጣታቸው ምክንያት፡ የመሬት ርስት ያልነበራቸው ሌዋውያንና ካህናት በረሃብ ተጎድተው አገልግሎታቸውን ጥለው ወደ እርሻ ሸሽተው ነበር (ነህምያ 13:10)። መበለቶችና ወላጅ አልባ ልጆችም የሚበሉት አጥተው ነበር።'
    },
    sceneEn: {
      setting: 'The fragile remnant of returning exiles lived under Persian imperial taxation, crop plagues, and crippling drought. The rebuilt Second Temple stood in Jerusalem, but community morale was completely broken.',
      dailyLife: 'Biblical tithes in ancient Israel were agricultural produce—sheaves of grain, vats of new wine, jugs of olive oil, and livestock—NOT fiat paper currency or electronic bank transfers. The “storehouse” was physical granary chambers attached to the Temple courts.',
      socialTension: 'Because wealthy landowners withheld their agricultural tithes, the Levites and temple singers—who owned no ancestral farmland—were starving and had abandoned ministry to work as hired farmhands to survive (Nehemiah 13:10).'
    },

    metaphorAm: {
      origin: '«በመቅደሴ ውስጥ መብል እንዲሆን» — እግዚአብሔር አሥራቱን የጠየቀው ለራሱ ቅንጦት ሳይሆን፡ በቤተ መቅደሱ ያገለግሉ ለነበሩት ካህናት፣ እንዲሁም ለመጻተኞች፣ ለወላጅ አልባዎችና ለመበለቶች የሚሆን ስንዴና ዘይት እንዲሞላ ነበር።',
      linguisticNuance: '«የሰማይ መስኮቶች ይከፈታሉ» — በድርቅ ለተመታው የእስራኤል ገበሬ ከሰማይ መስኮት መከፈት ማለት «ዝናብ» (Rain) መዝነብና አዝመራው ማበብ ማለት ነው። ሰማይ ተከፍቶ የብር ዶላር ይዘንባል ማለት አይደለም!',
      crowdReaction: 'የይሁዳ ነዋሪዎች ራስ ወዳድነታቸውንና ሌዋውያንን ለረሃብ መዳረጋቸውን ተረድተው ወደ ተገቢው የማህበረሰብ ኃላፊነት ተመለሱ።'
    },
    metaphorEn: {
      origin: '“That there may be FOOD in my house” — God’s explicit reason was social provision: feeding the landless Levitical ministers, the resident aliens, the orphans, and the widows who relied on the triennial tithe.',
      linguisticNuance: '“Open the windows of heaven” was the universal ancient Near Eastern idiom for seasonal rainfall breaking prolonged agricultural drought! It promised rain for crops, not magic cash transfers into bank accounts.',
      crowdReaction: 'The post-exilic community was convicted of covenant neglect: withholding food from temple caretakers while hoarding grain in their private barns.'
    },

    distortionAm: {
      claim: 'የብልጽግና ሰባኪዎች ይህን ጥቅስ ምእመናንን ለማስፈራራት ይጠቀሙበታል፡ «10% ካልከፈላችሁ በእርግማን ትረገማላችሁ፣ ገንዘብ ለኔ ከሰጣችሁ ግን ሚሊየነር ትሆናላችሁ!»',
      damage: 'ምእመናን እግዚአብሔርን እንደ ካሲኖ ማሽነሪ እንዲመለከቱት ያደርጋል፤ በችግር ውስጥ ያሉ ድሆችንም በፍርሃት አስሮ ይበዘብዛል።'
    },
    distortionEn: {
      claim: 'Weaponized relentlessly by modern televangelists as financial extortion: “If you don’t give 10% of your gross paycheck to our ministry, you are under a divine curse and your finances will wither!”',
      damage: 'It turns God into a celestial slot machine, induces spiritual terror in poor families, and distorts the New Testament principle of cheerful, voluntary giving.'
    },

    truthAm: {
      contextSummary: 'ሚልክያስ 3 በድህረ-ምርኮ ዘመን ለነበረው የእስራኤል ማህበረሰብ የተሰጠ ተግሣጽ ሲሆን፡ በስግብግብነት ምክንያት በቤተ መቅደስ የነበሩትን አገልጋዮችና ድሆች በረሃብ መቅጣታቸውን ያጋልጣል። በአዲስ ኪዳን መስጠት በደስታና በፍቅር እንጂ በሕግ ማስገደድ አይደለም።',
      surroundingVerses: 'ሚልክያስ 3:5 — «እኔም ለፍርድ ወደ እናንተ እቀርባለሁ፤ ሰራተኛውን በደመወዙ በሚገፉት ላይ፥ መበለቲቱንና አባት የሌለውን በሚያስጨንቁት ላይ... ፈጣን ምስክር እሆናለሁ።»',
      timelessPrinciple: 'ክርስቲያናዊ መስጠት ከፍርሃት እርግማን ሳይሆን፡ ጸጋን ከተቀበለ ልብ በደስታ የሚፈስ ልግስናና የአገልጋዮች ክብካቤ ነው።'
    },
    truthEn: {
      contextSummary: 'Malachi 3 addresses a specific Old Covenant agrarian theocracy where the temple welfare system had collapsed. In the New Covenant, giving is never under coercion or fear of curses, but cheerful, generous, and proportional (2 Cor 9:7).',
      surroundingVerses: 'Malachi 3:5 — Look at who God rebukes right alongside: “I will be a swift witness against those who oppress the hired worker in his wages, the widow and the fatherless, against those who thrust aside the sojourner.”',
      timelessPrinciple: 'True biblical generosity flows from gratitude for the Gospel, dedicated to caring for gospel ministers and relieving the afflicted without legalistic manipulation.'
    },

    crossReferences: [
      {
        ref: 'ነህምያ 13:10-12',
        noteAm: 'ነህምያ ሌዋውያን አሥራት በማጣታቸው ምክንያት አገልግሎት ትተው ወደ እርሻ መሸሻቸውን እንደተመለከተ',
        noteEn: 'Nehemiah discovering the Levites had abandoned the temple because tithes were withheld'
      },
      {
        ref: '2ኛ ቆሮንቶስ 9:7',
        noteAm: '«እግዚአብሔር በደስታ የሚሰጠውን ይወዳልና እያንዳንዱ በልቡ እንዳሰበ ይስጥ፥ በኀዘን ወይም በግድ አይደለም»',
        noteEn: '“Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.”'
      }
    ]
  },

  // 8. Matthew 19:24 - "Camel through the eye of a needle"
  {
    id: 'matthew-19-camel-needle',
    bookNr: 40,
    chapter: 19,
    verseStart: 23,
    verseEnd: 26,
    verseRefAm: 'ማቴዎስ 19:23-26',
    verseRefEn: 'Matthew 19:23-26',
    verseTextAm: '«ኢየሱስም ለደቀ መዛሙርቱ፡ እውነት እላችኋለሁ፥ ለባለጠጋ ወደ መንግሥተ ሰማያት መግባት ጭንቅ ነው። ዳግመኛም እላችኋለሁ፥ ባለጠጋ ወደ እግዚአብሔር መንግሥት ከሚገባ ግመል በመርፌ ቀዳዳ ቢገባ ይቀላል አለ። ደቀ መዛሙርቱም ሰምተው እጅግ ተደነቁና፡ እንግዲህ ማን ሊድን ይችላል? አሉ። ኢየሱስም እነርሱን ተመልክቶ፡ ይህ በሰው ዘንድ የማይቻል ነው በእግዚአብሔር ዘንድ ግን ሁሉ ይቻላል አላቸው።»',
    verseTextEn: '“Truly, I say to you, only with difficulty will a rich person enter the kingdom of heaven. Again I tell you, it is easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God. When the disciples heard this, they were greatly astonished, saying, ‘Who then can be saved?’ But Jesus looked at them and said, ‘With man this is impossible, but with God all things are possible.’”',
    titleAm: 'ግመል በመርፌ ቀዳዳ — የሀብታሙ ወጣት መውደቅ',
    titleEn: 'Camel Through the Needle’s Eye: The Impossible Salvation',
    taglineAm: 'የ15ኛው መቶ ክፍለ ዘመን «የመርፌ በር» ተረት ወይስ የኢየሱስ ፍጹም የማይቻል ምሳሌ?',
    taglineEn: 'The 15th-Century "Needle Gate" Myth vs Jesus’s Deliberate Impossibility',
    eraAm: 'የኢየሱስ የይሁዳ አገልግሎት ዘመን (c. 30 AD)',
    eraEn: 'Late Judean Ministry (c. 30 AD)',
    locationAm: 'ዮርዳኖስ ማዶ፣ ይሁዳ',
    locationEn: 'Beyond the Jordan, Judea',
    yearApprox: 'c. 30 AD',
    keyIcon: '🪡',

    sceneAm: {
      setting: 'በአንደኛው መቶ ክፍለ ዘመን የአይሁድ አስተሳሰብ መሰረት፡ ሀብታም መሆን የእግዚአብሔር ልዩ በረከትና ጽድቅ ምልክት ተደርጎ ይታመን ነበር። ባለጸጋ ሰው በቀላሉ ወደ መንግሥተ ሰማያት ይገባል ተብሎ ይታሰብ ነበር።',
      dailyLife: 'በእያንዳንዱ የገሊላና የይሁዳ ቤት ውስጥ ሴቶች ልብስ የሚሰፉበት የብረት ወይም የአጥንት መርፌ (Needle) እና በመንገድ ላይ የሚጓዙ ግዙፍ ባለ ሸክም ግመሎች የተለመዱ ነበሩ።',
      socialTension: 'አንድ ወጣት ሀብታም መሪ ወደ ኢየሱስ መጥቶ «የዘላለምን ሕይወት እንዳገኝ ምን ላድርግ?» ብሎ ጠይቆ፣ ሀብቱን ለድሆች እንዲሰጥ ሲነገረው በሐዘን ዞሮ ሄዷል።'
    },
    sceneEn: {
      setting: 'In 1st-century Jewish theology, massive wealth was widely considered irrefutable proof of divine favor. If anyone was guaranteed a front-row seat in the Kingdom of God, it was a morally upright billionaire philanthropist!',
      dailyLife: 'In every ancient home, women used small bone or bronze sewing needles. Outside on the trade highways, giant laden camels with 600-pound baggage packs groaned under desert heat.',
      socialTension: 'A wealthy young aristocrat had just approached Jesus seeking eternal life. When told to liquidate his fortune for the poor and follow Christ, he walked away grieved because his money owned his soul.'
    },

    metaphorAm: {
      origin: 'የመርፌ በር (The Needle Gate) የተባለው ተረት፡ በ15ኛው መቶ ክፍለ ዘመን በመካከለኛው ዘመን የነበሩ መነኮሳት የፈጠሩት ታሪክ ነው! «በኢየሩሳሌም ቅጥር ላይ መርፌ የምትባል ጠባብ በር ነበረች፣ ግመል ተንበርክኮ ሸክሙን አውርዶ ይገባ ነበር» የሚባለው በታሪክም ሆነ በቅርስ ጥናት ያልነበረ የፈጠራ ወሬ ነው። ኢየሱስ ፍጹም የማይቻልን ነገር ለመግለጽ የተጠቀመው ሆን ተብሎ የተጋነነ ምሳሌ (Hyperbole) ነው!',
      linguisticNuance: 'ደቀ መዛሙርቱ በኢየሱስ ቃል እጅግ ተደናግጠው «እንግዲህ ማን ሊድን ይችላል?» ያሉት ለዚህ ነው! በሩ ጠባብ ከሆነ ማን ሊድን ይችላል አይሉም ነበር። ግመል በመርፌ ቀዳዳ ማለፍ ፈጽሞ የማይቻል እንደሆነ ስለተረዱ ነው የተደነቁት።',
      crowdReaction: 'ደቀ መዛሙርቱ በዘመኑ የነበረው የሀብታሞች የበላይነት አስተሳሰብ ሙሉ በሙሉ ሲፈርስ ተመለከቱ።'
    },
    metaphorEn: {
      origin: 'The famous “Needle Eye Gate” story—claiming Jerusalem had a small night gate where camels had to crawl on their knees after their bags were unloaded—is a 15th-century myth with ZERO historical or archaeological backing! Jesus was speaking of a literal sewing needle and a literal camel to depict an ABSOLUTE IMPOSSIBILITY.',
      linguisticNuance: 'The disciples’ stunned panic in verse 25 proves this: “Who then can be saved?!” If Jesus was merely saying “Rich people just need to be humble and crawl a bit,” nobody would have gasped in shock.',
      crowdReaction: 'The audience’s core theological worldview was shattered: If rich people—the supposed favorites of God—cannot save themselves, then humanity is completely helpless without a miracle!'
    },

    distortionAm: {
      claim: '«መርፌ የተባለች በር ነበረች፤ ስለዚህ ትንሽ ተንበርከክ ካልክና ትንሽ ሸክምህን ካወረድክ ሀብታም ሆነህም መንግሥተ ሰማያት ትገባለህ» በማለት የኢየሱስን ጥብቅ ማስጠንቀቂያ ያቀሉታል።',
      damage: 'የሰውን ልጅ ፍጹም ረዳት-አልባነት እና የመዳንን መለኮታዊ ተዓምር ያደበዝዛል፤ በራስ ጥረት መዳን እንደሚቻል ያስመስላል።'
    },
    distortionEn: {
      claim: 'Preachers soften Jesus’s words with the urban legend of the "needle gate", soothing the wealthy: “You don’t have to give up your idols, just be humble and kneel a little!”',
      damage: 'It destroys Jesus’s devastating point: self-reliance and wealth make salvation humanly impossible. It strips God of the glory of miraculous regeneration.'
    },

    truthAm: {
      contextSummary: 'ኢየሱስ በቁጥር 26 ላይ የሰጠው መልስ ዋናው ቁልፍ ነው፡ «ይህ በሰው ዘንድ የማይቻል ነው፤ በእግዚአብሔር ዘንድ ግን ሁሉ ይቻላል»። መዳን በሰው ጥረት፣ በሀብት ወይም በቅድስና ሳይሆን በእግዚአብሔር ጸጋ ብቻ የሚደረግ ተዓምር ነው!',
      surroundingVerses: 'ማቴዎስ 19:21-26 — «ኢየሱስም እነርሱን ተመልክቶ፡ ይህ በሰው ዘንድ የማይቻል ነው በእግዚአብሔር ዘንድ ግን ሁሉ ይቻላል አላቸው።»',
      timelessPrinciple: 'ማንም ሰው በሀብቱ ወይም በሞራል ጥረቱ ሊድን አይችልም፤ መዳን ከእግዚአብሔር ብቻ የሚሰጥ ነጻና ተዓምራዊ ጸጋ ነው።'
    },
    truthEn: {
      contextSummary: 'Verse 26 is the entire point of the passage: “With man this is impossible, but with God all things are possible.” Salvation cannot be purchased, negotiated, or earned—it requires a resurrection miracle from God alone.',
      surroundingVerses: 'Matthew 19:21–26 — “Sell what you possess and give to the poor, and you will have treasure in heaven; and come, follow me.”',
      timelessPrinciple: 'Earthly security is the ultimate obstacle to childlike faith. What is humanly impossible is made possible solely by the sovereign grace of God.'
    },

    crossReferences: [
      {
        ref: 'ማርቆስ 10:24',
        noteAm: '«በገንዘብ ለሚታመኑ ወደ እግዚአብሔር መንግሥት መግባት እንዴት ጭንቅ ነው!»',
        noteEn: '“How difficult it is for those who trust in riches to enter the kingdom of God!”'
      },
      {
        ref: 'ኤፌሶን 2:8-9',
        noteAm: '«ጸጋው በእምነት አድኖአችኋልና፤ ይህም የእግዚአብሔር ስጦታ ነው እንጂ ከእናንተ አይደለም»',
        noteEn: '“For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works.”'
      }
    ]
  }
]

/** Find Time Capsule entry for a specific book and chapter */
export function getTimeCapsuleForChapter(bookNr: number, chapter: number): TimeCapsuleEntry | undefined {
  return TIME_CAPSULE_ENTRIES.find(
    (entry) => entry.bookNr === bookNr && entry.chapter === chapter
  )
}

/** Find Time Capsule entry for a specific verse */
export function getTimeCapsuleForVerse(
  bookNr: number,
  chapter: number,
  verse: number
): TimeCapsuleEntry | undefined {
  return TIME_CAPSULE_ENTRIES.find(
    (entry) =>
      entry.bookNr === bookNr &&
      entry.chapter === chapter &&
      verse >= entry.verseStart &&
      (!entry.verseEnd || verse <= entry.verseEnd)
  )
}
