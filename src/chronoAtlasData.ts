/**
 * The Living Chrono-Atlas (Interactive Ancient Biblical Expeditions)
 * Maps, waypoints, historical routes, terrain physics, and scripture anchors.
 */

export interface AtlasWaypoint {
  id: string
  nameAm: string
  nameEn: string
  ancientRegionAm: string
  ancientRegionEn: string
  x: number // Map coordinate 0 - 1000
  y: number // Map coordinate 0 - 650
  dayNumber: number
  distanceKm: number
  elevationMeters?: number
  terrainTypeAm: string
  terrainTypeEn: string
  scriptureRef: string
  scriptureQuoteAm: string
  scriptureQuoteEn: string
  significanceAm: string
  significanceEn: string
  hazardOrEventAm?: string
  hazardOrEventEn?: string
}

export interface AtlasExpedition {
  id: string
  titleAm: string
  titleEn: string
  subtitleAm: string
  subtitleEn: string
  eraAm: string
  eraEn: string
  icon: string
  travelerAm: string
  travelerEn: string
  transportModeAm: string
  transportModeEn: string
  totalDistanceKm: number
  estimatedDays: number
  descriptionAm: string
  descriptionEn: string
  keyScriptures: { bookNr: number; chapter: number; ref: string }[]
  waypoints: AtlasWaypoint[]
  pathD: string
}

export const CHRONO_EXPEDITIONS: AtlasExpedition[] = [
  // 1. Abraham's Mesopotamian Migration
  {
    id: 'abraham-migration',
    titleAm: 'የአብርሃም ታላቅ ጉዞ፡ ከዑር ወደ ተስፋይቱ ምድር',
    titleEn: "Abraham's Grand Migration: From Ur to the Promised Land",
    subtitleAm: 'ከከለዳውያን ሥልጣኔ ወደ እምነት የድንኳን ኑሮ',
    subtitleEn: 'From Mesopotamian Metropolis to Tents of Faith',
    eraAm: 'የጥንት አበው ዘመን (c. 2100 BC)',
    eraEn: 'Patriarchal Era (c. 2100 BC)',
    icon: '🐪',
    travelerAm: 'አብርሃም፣ ሣራ፣ ሎጥና ተከታዮቻቸው',
    travelerEn: 'Abraham, Sarah, Lot and their household',
    transportModeAm: 'በግመል ቅፍለትና በእግር',
    transportModeEn: 'Camel caravan & pedestrian march',
    totalDistanceKm: 2400,
    estimatedDays: 140,
    descriptionAm:
      'አብርሃም ከታላቋና በጣዖት ከተሞላችው ከከለዳውያን ዑር ወጥቶ፤ በማይታየው አምላክ ድምፅ እየተመራ በኤፍራጥስ ወንዝ በኩል በካራን አልፎ ወደ ከነዓን ያደረገው ታሪካዊ የእምነት ጉዞ።',
    descriptionEn:
      'The foundational pilgrimage of faith. Guided by the unseen voice of Yahweh, Abram departs the bustling pagan metropolis of Ur, tracking the fertile Euphrates corridor through Haran down into Canaan.',
    keyScriptures: [
      { bookNr: 1, chapter: 11, ref: 'ዘፍጥረት 11:31' },
      { bookNr: 1, chapter: 12, ref: 'ዘፍጥረት 12:1–9' },
      { bookNr: 1, chapter: 13, ref: 'ዘፍጥረት 13:14–18' },
      { bookNr: 58, chapter: 11, ref: 'ዕብራውያን 11:8' }
    ],
    pathD: 'M 890 470 Q 845 425 820 380 T 735 240 Q 700 280 690 325 T 680 370 Q 675 395 678 410 Q 640 435 580 460',
    waypoints: [
      {
        id: 'ur',
        nameAm: 'የከለዳውያን ዑር',
        nameEn: 'Ur of the Chaldees',
        ancientRegionAm: 'ደቡባዊ መስጴጦምያ (ሱሜር)',
        ancientRegionEn: 'Southern Mesopotamia (Sumer)',
        x: 890,
        y: 470,
        dayNumber: 1,
        distanceKm: 0,
        elevationMeters: 15,
        terrainTypeAm: 'ለም የወንዝ ሸለቆና የከተማ አደባባይ',
        terrainTypeEn: 'Alluvial river plain & urban metropolis',
        scriptureRef: 'ዘፍጥረት 11:31',
        scriptureQuoteAm: 'ታራም ልጁን አብራምን... ይዞ ከከለዳውያን ዑር ወደ ከነዓን ምድር ለመሄድ ወጣ።',
        scriptureQuoteEn: 'Terah took Abram his son... and they went forth together from Ur of the Chaldeans to go into the land of Canaan.',
        significanceAm: 'የጨረቃ አምላክ (ናና) ይመለክባት የነበረች ታላቅ ሥልጣኔ፤ አብርሃም ይህን ሀብትና ክብር ለእግዚአብሔር ሲል ተወ።',
        significanceEn: 'A sophisticated cosmopolitan hub of moon-god (Nanna) worship; Abraham abandons civic security for divine call.',
        hazardOrEventAm: 'ከጣዖት ከተማ መለየት',
        hazardOrEventEn: 'Departure from pagan ancestry'
      },
      {
        id: 'babylon',
        nameAm: 'ባቢሎን / የኤፍራጥስ ዳርቻ',
        nameEn: 'Babylon River Corridor',
        ancientRegionAm: 'መካከለኛው መስጴጦምያ',
        ancientRegionEn: 'Central Mesopotamia',
        x: 825,
        y: 385,
        dayNumber: 28,
        distanceKm: 420,
        elevationMeters: 35,
        terrainTypeAm: 'ረግረጋማና አሸዋማ የወንዝ ዳርቻ',
        terrainTypeEn: 'Fertile riverbanks & desert edge',
        scriptureRef: 'ዘፍጥረት 11:31',
        scriptureQuoteAm: 'በኤፍራጥስ ወንዝ አጠገብ በሰላም አለፉ።',
        scriptureQuoteEn: 'Following the life-giving waters of the Euphrates corridor.',
        significanceAm: 'በጥንቱ ዓለም ግመሎችና ከብቶች ውኃ ሳያጡ የሚጓዙበት ብቸኛው ደኅንነቱ የተጠበቀ የንግድ መስመር።',
        significanceEn: 'The only survivable migration route through the Arabian wasteland, anchoring caravans to water.'
      },
      {
        id: 'haran',
        nameAm: 'ካራን',
        nameEn: 'Haran',
        ancientRegionAm: 'ሰሜናዊ መስጴጦምያ (ፓዳን-አራም)',
        ancientRegionEn: 'Northern Mesopotamia (Paddan-Aram)',
        x: 735,
        y: 240,
        dayNumber: 65,
        distanceKm: 980,
        elevationMeters: 370,
        terrainTypeAm: 'ደጋማ የእርሻና የግጦሽ ምድር',
        terrainTypeEn: 'Highland pasture & junction of trade routes',
        scriptureRef: 'ዘፍጥረት 12:1–4',
        scriptureQuoteAm: 'እግዚአብሔርም አብራምን አለው፦ ከአገርህና ከዘመዶችህ ተለይተህ እኔ ወደማሳይህ ምድር ሂድ።',
        scriptureQuoteEn: 'Now the Lord said to Abram, "Go from your country and your kindred... to the land that I will show you."',
        significanceAm: 'የአብርሃም አባት ታራ እዚህ አረፈ፤ አብርሃም በ75 ዓመቱ ሁለተኛውንና ታላቁን የእምነት ጥሪ ተቀበለ።',
        significanceEn: 'Terah passes away here. At 75, Abraham receives the decisive covenant promise to become a great nation.'
      },
      {
        id: 'damascus',
        nameAm: 'ደማስቆ ኦአሲስ',
        nameEn: 'Damascus Oasis',
        ancientRegionAm: 'የሶርያ ድንበር',
        ancientRegionEn: 'Syrian Frontier',
        x: 690,
        y: 325,
        dayNumber: 95,
        distanceKm: 1450,
        elevationMeters: 680,
        terrainTypeAm: 'በበረሃ የተከበበ ለም ሸለቆ',
        terrainTypeEn: 'Lush oasis plateau at desert fringe',
        scriptureRef: 'ዘፍጥረት 15:2',
        scriptureQuoteAm: 'አብራምም አለ፡- የቤቴ መጋቢ ይህ የደማስቆ ሰው ኤሊዔዘር ነው።',
        scriptureQuoteEn: 'Abram said, "The heir of my house is Eliezer of Damascus."',
        significanceAm: 'ወደ ከነዓን ለመግባት የመጨረሻው የውኃ ማደሻ ጣቢያ፤ ታማኙን አገልጋዩን ኤሊዔዘርን ያገኘበት ስፍራ።',
        significanceEn: 'The historic threshold oasis before descending into Canaan; home of trusted steward Eliezer.'
      },
      {
        id: 'shechem',
        nameAm: 'ሴኬም (የሞሬህ የአድባር ዛፍ)',
        nameEn: 'Shechem (Oak of Moreh)',
        ancientRegionAm: 'ማዕከላዊ ከነዓን',
        ancientRegionEn: 'Central Canaan',
        x: 680,
        y: 370,
        dayNumber: 110,
        distanceKm: 1720,
        elevationMeters: 520,
        terrainTypeAm: 'በኤባልና በገሪዛን ተራሮች መካከል ያለ ሸለቆ',
        terrainTypeEn: 'Valley flanked by Mounts Ebal and Gerizim',
        scriptureRef: 'ዘፍጥረት 12:6–7',
        scriptureQuoteAm: 'እግዚአብሔርም ለአብራም ተገለጠና፦ ይህችን ምድር ለዘርህ እሰጣለሁ አለው፤ በዚያም መሠዊያ ሠራ።',
        scriptureQuoteEn: 'The Lord appeared to Abram and said, "To your offspring I will give this land." So he built there an altar.',
        significanceAm: 'በከነዓን ምድር ለመጀመሪያ ጊዜ የተሠራው ለእውነተኛው አምላክ የቀረበ መሠዊያ።',
        significanceEn: 'The very first altar erected to Yahweh inside the land of promise, formally claiming it in faith.'
      },
      {
        id: 'hebron',
        nameAm: 'ኬብሮን (የመምሬ አድባር ዛፍ)',
        nameEn: 'Hebron (Oaks of Mamre)',
        ancientRegionAm: 'የይሁዳ ደጋማ ስፍራ',
        ancientRegionEn: 'Judean Hill Country',
        x: 678,
        y: 410,
        dayNumber: 125,
        distanceKm: 1880,
        elevationMeters: 930,
        terrainTypeAm: 'የወይራና የወይን ጠጅ ደጋማ ተራሮች',
        terrainTypeEn: 'Elevated limestone ridge & vineyards',
        scriptureRef: 'ዘፍጥረት 13:18',
        scriptureQuoteAm: 'አብራምም ድንኳኑን ነቀለ፥ በኬብሮንም ባለው በመምሬ የአድባር ዛፍ መጥቶ ተቀመጠ።',
        scriptureQuoteEn: 'So Abram moved his tent and came and settled by the oaks of Mamre, which are at Hebron, and there he built an altar.',
        significanceAm: 'የቃል ኪዳኑ ቋሚ መኖሪያ፤ ሣራና አብርሃም የተቀበሩበት የመክፈላ ዋሻ የሚገኝበት ቅዱስ ስፍራ።',
        significanceEn: 'The primary patriarchal sanctuary and final resting place of Abraham and Sarah at the Cave of Machpelah.'
      },
      {
        id: 'egypt',
        nameAm: 'የአባይ ዴልታ (ግብፅ)',
        nameEn: 'Nile Delta, Egypt',
        ancientRegionAm: 'የፈርዖን ግብፅ',
        ancientRegionEn: 'Pharaonic Egypt (Middle Kingdom)',
        x: 580,
        y: 460,
        dayNumber: 140,
        distanceKm: 2400,
        elevationMeters: 10,
        terrainTypeAm: 'ለም የአባይ ወንዝ ሜዳ',
        terrainTypeEn: 'Rich alluvial delta of Lower Egypt',
        scriptureRef: 'ዘፍጥረት 12:10',
        scriptureQuoteAm: 'በምድሪቱም ራብ ሆነ፤ አብራምም በግብፅ በእንግድነት ይቀመጥ ዘንድ ወደዚያ ወረደ።',
        scriptureQuoteEn: 'Now there was a famine in the land. So Abram went down to Egypt to sojourn there.',
        significanceAm: 'በከባድ ድርቅ ወቅት የተደረገ ስደት፤ እግዚአብሔር ሣራንና አብርሃምን በፈርዖን ፊት በተአምር ጠበቃቸው።',
        significanceEn: 'Famine survival refuge; God supernaturally shields Sarah and enriches Abraham despite human frailty.'
      }
    ]
  },

  // 2. The Exodus & Sinai Wilderness Trail
  {
    id: 'exodus-wilderness',
    titleAm: 'የዘጸአትና የበረሃው ጉዞ፡ ከባርነት ወደ ነፃነት',
    titleEn: 'The Exodus & Sinai Trail: From Bondage to Covenant',
    subtitleAm: 'የቀይ ባሕር መከፈልና 40 ዓመታት በሲና በረሃ',
    subtitleEn: 'The Red Sea Miracle & 40 Years in the Wilderness',
    eraAm: 'የሙሴ ዘመን (c. 1446 / 1260 BC)',
    eraEn: 'Mosaic Era (c. 1446 / 1260 BC)',
    icon: '🔥',
    travelerAm: 'ሙሴ፣ አሮንና የእስራኤል ማኅበር (ከ2 ሚሊዮን በላይ)',
    travelerEn: 'Moses, Aaron, and the entire assembly of Israel',
    transportModeAm: 'የእግር ጉዞ በደመናና በእሳት ዓምድ መሪነት',
    transportModeEn: 'Mass pedestrian trek led by pillar of cloud & fire',
    totalDistanceKm: 1100,
    estimatedDays: 14600, // 40 years
    descriptionAm:
      'እስራኤል ከግብፅ የባርነት ቀንበር በታላቅ ተአምር ወጥተው፤ በቀይ ባሕር መካከል በደረቅ ምድር ተሻግረው በደብረ ሲና ሕጉን ተቀብለው ወደ ተስፋይቱ ምድር ያደረጉት ታሪካዊ ጉዞ።',
    descriptionEn:
      'The defining redemptive epic of the Old Testament. Israel escapes Egyptian servitude through the parted Red Sea, receives the Torah at Sinai, and endures divine schooling in the wilderness.',
    keyScriptures: [
      { bookNr: 2, chapter: 12, ref: 'ዘጸአት 12:37' },
      { bookNr: 2, chapter: 14, ref: 'ዘጸአት 14:21–31' },
      { bookNr: 2, chapter: 19, ref: 'ዘጸአት 19:1–6' },
      { bookNr: 4, chapter: 14, ref: 'ዘኍልቍ 14:20–35' },
      { bookNr: 6, chapter: 3, ref: 'ኢያሱ 3:14–17' }
    ],
    pathD: 'M 575 460 Q 600 480 622 495 Q 630 535 640 595 Q 655 520 665 440 Q 685 415 692 385',
    waypoints: [
      {
        id: 'rameses',
        nameAm: 'ራምሴ (ጎሼን)',
        nameEn: 'Rameses (Goshen)',
        ancientRegionAm: 'ምስራቃዊ የአባይ ዴልታ',
        ancientRegionEn: 'Eastern Nile Delta',
        x: 575,
        y: 460,
        dayNumber: 1,
        distanceKm: 0,
        elevationMeters: 10,
        terrainTypeAm: 'የሸክላ ጭቃና የግንባታ ከተማ ሜዳ',
        terrainTypeEn: 'Mud-brick delta plains & store cities',
        scriptureRef: 'ዘጸአት 12:37',
        scriptureQuoteAm: 'የእስራኤልም ልጆች ከራምሴ ወደ ሱኮት ተጓዙ።',
        scriptureQuoteEn: 'And the people of Israel journeyed from Rameses to Succoth, about six hundred thousand men on foot.',
        significanceAm: 'የፋሲካ በግ ደም በመቃኑ ላይ የተቀባበትና የ400 ዓመታት የባርነት ቀንበር የተሰበረበት ምሽት።',
        significanceEn: 'The Passover lamb’s blood marks the doorposts; 400 years of iron servitude are shattered at midnight.',
        hazardOrEventAm: 'የ10ሩ መቅሰፍቶች ፍጻሜ',
        hazardOrEventEn: 'Passover deliverance'
      },
      {
        id: 'red-sea',
        nameAm: 'ቀይ ባሕር (ያም ሱፍ)',
        nameEn: 'Red Sea Crossing (Yam Suph)',
        ancientRegionAm: 'የስዌዝ ባሕረ ሰላጤ ዳርቻ',
        ancientRegionEn: 'Gulf of Suez / Bitter Lakes',
        x: 622,
        y: 495,
        dayNumber: 4,
        distanceKm: 95,
        elevationMeters: 0,
        terrainTypeAm: 'የባሕር ዳርቻና የተከፈለው ባሕር ወለል',
        terrainTypeEn: 'Seabed highway between towering water walls',
        scriptureRef: 'ዘጸአት 14:21–22',
        scriptureQuoteAm: 'እግዚአብሔርም ሌሊቱን ሁሉ በጽኑ የምስራቅ ንፋስ ባሕሩን አስወገደው... ባሕሩም ተከፈለ።',
        scriptureQuoteEn: 'The Lord drove the sea back by a strong east wind... and the waters were divided.',
        significanceAm: 'የፈርዖን ፈረሰኞችና ሠረገሎች የሰመጡበት፤ የእግዚአብሔር ሕዝብ ግን በደረቅ ምድር የተሻገሩበት ታላቁ የመዳን ተአምር።',
        significanceEn: 'Ultimate baptism into liberty; Pharaoh’s elite chariot army is swallowed, and Israel sings the Song of Moses.'
      },
      {
        id: 'elim',
        nameAm: 'ኤሊም (12ቱ ምንጮችና 70ው ዘንባባ)',
        nameEn: 'Elim Oasis',
        ancientRegionAm: 'ምዕራባዊ የሲና ምድረ በዳ',
        ancientRegionEn: 'Western Sinai Wilderness',
        x: 630,
        y: 540,
        dayNumber: 18,
        distanceKm: 210,
        elevationMeters: 110,
        terrainTypeAm: 'ውኃና ዘንባባ የበዛበት በረሃማ ኦአሲስ',
        terrainTypeEn: 'Lush desert springs & date palms',
        scriptureRef: 'ዘጸአት 15:27',
        scriptureQuoteAm: 'ወደ ኤሊምም ደረሱ፤ በዚያም አሥራ ሁለት የውኃ ምንጮችና ሰባ የዘንባባ ዛፎች ነበሩ።',
        scriptureQuoteEn: 'Then they came to Elim, where there were twelve springs of water and seventy palm trees.',
        significanceAm: 'በበረሃ መከራ ውስጥ የተሰጠ የእግዚአብሔር ዕረፍትና የተትረፈረፈ አቅርቦት ምልክት።',
        significanceEn: 'A divine sanctuary of refreshment after the bitter trial of Marah, demonstrating abundant grace.'
      },
      {
        id: 'mount-sinai',
        nameAm: 'ደብረ ሲና (ኮሬብ)',
        nameEn: 'Mount Sinai (Horeb)',
        ancientRegionAm: 'ደቡባዊ የሲና ባሕረ ገብ ደጋማ ተራራ',
        ancientRegionEn: 'Granite Massif of Southern Sinai',
        x: 640,
        y: 595,
        dayNumber: 50,
        distanceKm: 430,
        elevationMeters: 2285,
        terrainTypeAm: 'ግራናይት ድንጋያማ ሸንተረርና ገደላማ ተራራ',
        terrainTypeEn: 'Towering jagged granite peaks',
        scriptureRef: 'ዘጸአት 19:18',
        scriptureQuoteAm: 'እግዚአብሔር በእሳት ስለ ወረደበት የሲና ተራራ ሁሉ ይጤስ ነበር፤ ተራራውም እጅግ ተንቀጠቀጠ።',
        scriptureQuoteEn: 'Now Mount Sinai was wrapped in smoke because the Lord had descended on it in fire.',
        significanceAm: 'አሥርቱ ትእዛዛትና የኦሪት ቃል ኪዳን የተሰጡበት፤ የክብሩ ደመና ያደረበትና ድንኳነ መቅደሱ የተሠራበት ቅዱስ ስፍራ።',
        significanceEn: 'The cosmic wedding altar between Yahweh and Israel: Ten Words given, Covenant confirmed, Tabernacle blueprint revealed.'
      },
      {
        id: 'kadesh-barnea',
        nameAm: 'ቃዴስ በርኔ',
        nameEn: 'Kadesh-Barnea',
        ancientRegionAm: 'የፓራንና የዚን ምድረ በዳ ድንበር',
        ancientRegionEn: 'Wilderness of Paran / Zin border',
        x: 665,
        y: 440,
        dayNumber: 480,
        distanceKm: 760,
        elevationMeters: 310,
        terrainTypeAm: 'ጠፍ በረሃና የድንጋይ ሜዳ',
        terrainTypeEn: 'Arid limestone steppe & desert oasis',
        scriptureRef: 'ዘኍልቍ 13:26',
        scriptureQuoteAm: 'ወደ ቃዴስም ወደ ሙሴና ወደ አሮን መጡ... የምድሪቱንም ፍሬ አሳዩአቸው።',
        scriptureQuoteEn: 'They came to Moses and Aaron... at Kadesh in the wilderness of Paran, and brought back word.',
        significanceAm: '12ቱ ሰላዮች ምድሪቱን ቃኝተው የተመለሱበት፤ በአለማመን ምክንያት የ40 ዓመታት የበረሃ ፍርድ የተበየነበት ስፍራ።',
        significanceEn: 'The crisis of unbelief: 10 spies spread dread, leading to a generation-long wandering until the faithful arise.'
      },
      {
        id: 'plains-of-moab',
        nameAm: 'የሞዓብ ሜዳ (ዮርዳኖስ ማዶ)',
        nameEn: 'Plains of Moab (Mount Nebo)',
        ancientRegionAm: 'የዮርዳኖስ ሸለቆ ምስራቃዊ ዳርቻ',
        ancientRegionEn: 'Transjordan Plateau overlooking Jericho',
        x: 692,
        y: 385,
        dayNumber: 14600,
        distanceKm: 1100,
        elevationMeters: 800,
        terrainTypeAm: 'ደጋማ የሸለቆ ዳርቻና የዮርዳኖስ ወንዝ ዳር',
        terrainTypeEn: 'Acacia groves & Jordan river rift valley',
        scriptureRef: 'ዘዳግም 34:1–4',
        scriptureQuoteAm: 'ሙሴም ከተራራው ወጣ... እግዚአብሔርም ምድሪቱን ሁሉ አሳየው።',
        scriptureQuoteEn: 'Moses went up from the plains of Moab to Mount Nebo... and the Lord showed him all the land.',
        significanceAm: 'የኦሪት ዘዳግም መልእክት የተሰበከበት፤ ሙሴ አርፎ ኢያሱ ሕዝቡን ወደ ተስፋይቱ ምድር የመራበት የድል አፋፍ።',
        significanceEn: 'Moses delivers his farewell address (Deuteronomy), views the Promised Land from Nebo, and Joshua prepares the crossing.'
      }
    ]
  },

  // 3. David's Wilderness Flight from Saul
  {
    id: 'david-flight',
    titleAm: 'ዳዊት ከሳኦል የተሰደደበት ምድረ በዳ',
    titleEn: "David's Outlaw Wilderness Flight",
    subtitleAm: 'ከንጉሥ ቤተ መንግሥት ወደ ዋሻዎችና ገደሎች',
    subtitleEn: 'From Royal Court to Caves, Canyons & Exile',
    eraAm: 'የእስራኤል አንድነት ንግሥና ዘመን (c. 1015 BC)',
    eraEn: 'United Monarchy Era (c. 1015 BC)',
    icon: '🛡️',
    travelerAm: 'ዳዊትና 400 የተጨነቁ ታማኝ ጓደኞቹ',
    travelerEn: 'David and his 400 distressed loyal warriors',
    transportModeAm: 'የእግር ጉዞ በገደላማ የይሁዳ ተራሮች',
    transportModeEn: 'Stealth mountain marches through rugged terrain',
    totalDistanceKm: 340,
    estimatedDays: 1825, // 5 years
    descriptionAm:
      'ዳዊት በሳኦል ቅናት ምክንያት ከቤተ መንግሥት ተሰዶ፤ በይሁዳ ዋሻዎች፣ በዓዶላም ገደሎችና በዔን ገዲ ፏፏቴዎች ውስጥ በእግዚአብሔር እየተጠበቀ ንጉሥ ለመሆን የተማረበት የመከራና የጸሎት ዘመን።',
    descriptionEn:
      'Hunted like a partridge in the mountains by King Saul, the anointed shepherd-king endures years of betrayal, cave hiding, and moral testing, composing immortal Psalms of trust.',
    keyScriptures: [
      { bookNr: 9, chapter: 19, ref: '1 ሳሙኤል 19:1–18' },
      { bookNr: 9, chapter: 22, ref: '1 ሳሙኤል 22:1–5' },
      { bookNr: 9, chapter: 24, ref: '1 ሳሙኤል 24:1–22' },
      { bookNr: 19, chapter: 57, ref: 'መዝሙር 57:1' },
      { bookNr: 10, chapter: 2, ref: '2 ሳሙኤል 2:1–4' }
    ],
    pathD: 'M 683 381 Q 672 390 670 398 T 685 408 Q 675 415 660 418 Q 670 410 678 400',
    waypoints: [
      {
        id: 'gibeah',
        nameAm: 'ጊብዓ (የሳኦል ቤተ መንግሥት)',
        nameEn: 'Gibeah of Saul',
        ancientRegionAm: 'የብንያም ደጋማ ስፍራ',
        ancientRegionEn: 'Benjamin Plateau',
        x: 683,
        y: 381,
        dayNumber: 1,
        distanceKm: 0,
        elevationMeters: 840,
        terrainTypeAm: 'የድንጋይ ምሽግና የንጉሥ አደባባይ',
        terrainTypeEn: 'Stone fortress & royal citadel',
        scriptureRef: '1 ሳሙኤል 19:10',
        scriptureQuoteAm: 'ሳኦልም ዳዊትን ከግድግዳው ጋር በጦር ሊያያይዘው ወደደ፤ ዳዊት ግን ከሳኦል ፊት ሸሸ።',
        scriptureQuoteEn: 'And Saul sought to pin David to the wall with the spear, but he eluded Saul.',
        significanceAm: 'የቀናት ጦር የተወረወረበት፤ ዮናታን ዳዊትን በፍቅር የታደገበትና ስደቱ የጀመረበት ምሽት።',
        significanceEn: 'Saul’s paranoid spear strike breaks court fellowship; Jonathan seals covenant love, warning David to flee.'
      },
      {
        id: 'adullam',
        nameAm: 'የዓዶላም ዋሻ',
        nameEn: 'Cave of Adullam',
        ancientRegionAm: 'የይሁዳ ሸፌላህ (ዝቅተኛ ኮረብታዎች)',
        ancientRegionEn: 'Judean Shephelah foothills',
        x: 672,
        y: 393,
        dayNumber: 45,
        distanceKm: 48,
        elevationMeters: 380,
        terrainTypeAm: 'የኖራ ድንጋይ ዋሻዎችና ገደሎች',
        terrainTypeEn: 'Subterranean limestone labyrinth & ravines',
        scriptureRef: '1 ሳሙኤል 22:1–2',
        scriptureQuoteAm: 'ዳዊትም ከዚያ አምልጦ ወደ ዓዶላም ዋሻ ሸሸ... የተጨነቁትና ባለዕዳዎች ሁሉ ወደ እርሱ ተሰበሰቡ።',
        scriptureQuoteEn: 'David departed from there and escaped to the cave of Adullam... and everyone who was in distress gathered to him.',
        significanceAm: 'የተጣሉና የተጨነቁ 400 ሰዎች የተሰበሰቡበት፤ ዳዊት ወደፊት እስራኤልን የሚመሩ ኃያላን አርበኞችን ያፈራበት ዋሻ።',
        significanceEn: 'Outcast headquarters: 400 broken, indebted men are forged into Israel’s legendary mighty warriors under David’s leadership.'
      },
      {
        id: 'engedi',
        nameAm: 'ዐይን ገዲ (የዱር ፍየሎች ገደል)',
        nameEn: 'En Gedi Oasis (Crags of the Wild Goats)',
        ancientRegionAm: 'የሙት ባሕር ምዕራባዊ ገደል',
        ancientRegionEn: 'Judean Desert fault scarp above Dead Sea',
        x: 686,
        y: 406,
        dayNumber: 420,
        distanceKm: 140,
        elevationMeters: -200,
        terrainTypeAm: 'ገደላማ ፏፏቴና በረሃማ የድንጋይ ክምር',
        terrainTypeEn: 'Desert canyon waterfalls & freshwater cascades',
        scriptureRef: '1 ሳሙኤል 24:4',
        scriptureQuoteAm: 'ዳዊትም ተነሥቶ የሳኦልን መደረቢያ ጫፍ በስውር ቆረጠ።',
        scriptureQuoteEn: 'Then David arose and stealthily cut off a corner of Saul’s robe.',
        significanceAm: 'ዳዊት ሳኦልን በእጁ ወድቆ እያለ ለመበቀል ፈቃደኛ ያልሆነበት፤ እግዚአብሔር የቀባውን ባለመንካት የጽድቅ ፈተና ያለፈበት ስፍራ።',
        significanceEn: 'Supreme ethical test: David refuses to assassinate his pursuer in the dark cave, declaring vengeance belongs to God alone.'
      },
      {
        id: 'ziklag',
        nameAm: 'ጺቅላግ',
        nameEn: 'Ziklag',
        ancientRegionAm: 'የኔጌቭ ምድረ በዳ የፍልስጥኤም ድንበር',
        ancientRegionEn: 'Western Negev frontier',
        x: 660,
        y: 418,
        dayNumber: 1500,
        distanceKm: 275,
        elevationMeters: 180,
        terrainTypeAm: 'ደረቅ የበረሃ ዳርቻ ከተማ',
        terrainTypeEn: 'Semi-arid frontier tell & dry wadis',
        scriptureRef: '1 ሳሙኤል 30:6',
        scriptureQuoteAm: 'ዳዊት ግን በአምላኩ በእግዚአብሔር ልቡን አበረታታ።',
        scriptureQuoteEn: 'And David was greatly distressed... but David strengthened himself in the Lord his God.',
        significanceAm: 'ከተማይቱ በአማሌቃውያን ተቃጥላ ቤተሰቦቻቸው በተማረኩ ጊዜ፤ ዳዊት በእግዚአብሔር ታምኖ ሁሉንም ያስመለሰበት የድል ስፍራ።',
        significanceEn: 'Darkest hour turned into triumph: City torched, men wept until they had no tears, yet David recovers everything from Amalek.'
      },
      {
        id: 'hebron-coronation',
        nameAm: 'ኬብሮን (የይሁዳ ንጉሥ ሆኖ መቀባት)',
        nameEn: 'Hebron Coronation',
        ancientRegionAm: 'የይሁዳ ተራራማ አገር',
        ancientRegionEn: 'Heart of Judah',
        x: 678,
        y: 400,
        dayNumber: 1825,
        distanceKm: 340,
        elevationMeters: 930,
        terrainTypeAm: 'የወይን ጠጅና የወይራ እርሻዎች',
        terrainTypeEn: 'Vineyard terraces & historic capital',
        scriptureRef: '2 ሳሙኤል 2:4',
        scriptureQuoteAm: 'የይሁዳም ሰዎች መጡ፥ በዚያም ዳዊትን በይሁዳ ቤት ላይ ንጉሥ አድርገው ቀቡት።',
        scriptureQuoteEn: 'And the men of Judah came, and there they anointed David king over the house of Judah.',
        significanceAm: 'የዓመታት ስደትና መከራ ፍጻሜ አግኝቶ፤ የእግዚአብሔር የተስፋ ቃል ተፈጽሞ ዳዊት በይፋ የነገሠበት ታላቅ ቀን።',
        significanceEn: 'The wilderness crucible concludes in royal vindication: God’s promise spoken years prior by Samuel is legally realized.'
      }
    ]
  },

  // 4. Jesus' Galilean & Judean Ministry Circuits
  {
    id: 'jesus-ministry',
    titleAm: 'የጌታ ኢየሱስ አገልግሎት ጎዳናዎች',
    titleEn: "Jesus' Galilean & Judean Ministry Circuits",
    subtitleAm: 'ከገሊላ ባሕር እስከ ቀራንዮ መስቀል',
    subtitleEn: 'From the Sea of Galilee to the Cross of Golgotha',
    eraAm: 'የወንጌል ዘመን (c. AD 27–33)',
    eraEn: 'Gospel Era (c. AD 27–33)',
    icon: '✨',
    travelerAm: 'ኢየሱስ ክርስቶስና 12ቱ ደቀ መዛሙርት',
    travelerEn: 'Jesus Christ and the Twelve Apostles',
    transportModeAm: 'የእግር ጉዞና የገሊላ ዓሣ አጥማጅ ጀልባዎች',
    transportModeEn: 'Walking barefoot/sandals & wooden fishing boats',
    totalDistanceKm: 650,
    estimatedDays: 1200, // 3.5 years
    descriptionAm:
      'የሰው ልጅ መድኃኒት በገሊላ መንደሮች፣ በሰማርያ ጉድጓዶች፣ በኢያሪኮ ጎዳናዎችና በኢየሩሳሌም አደባባዮች በእግር እየተመላለሰ፤ ወንጌልን የሰበከበት፣ ድውያንን የፈወሰበትና ለዓለም ቤዛ ሆኖ ነፍሱን የሰጠበት ቅዱስ ጎዳና።',
    descriptionEn:
      'The footsteps of the Incarnate God. Trekking dusty Roman roads through Galilee, crossing hostile Samaria, and ascending the limestone ridge of Jerusalem to give his life as a cosmic ransom.',
    keyScriptures: [
      { bookNr: 40, chapter: 4, ref: 'ማቴዎስ 4:18–25' },
      { bookNr: 41, chapter: 1, ref: 'ማርቆስ 1:14–15' },
      { bookNr: 42, chapter: 4, ref: 'ሉቃስ 4:16–21' },
      { bookNr: 43, chapter: 4, ref: 'ዮሐንስ 4:4–26' },
      { bookNr: 40, chapter: 27, ref: 'ማቴዎስ 27:33–50' }
    ],
    pathD: 'M 682 334 Q 692 370 690 380 T 684 326 Q 690 330 692 335 T 682 358 Q 688 376 684 384',
    waypoints: [
      {
        id: 'nazareth',
        nameAm: 'ናዝሬት',
        nameEn: 'Nazareth',
        ancientRegionAm: 'ዝቅተኛዋ ገሊላ',
        ancientRegionEn: 'Lower Galilee Hills',
        x: 682,
        y: 334,
        dayNumber: 1,
        distanceKm: 0,
        elevationMeters: 360,
        terrainTypeAm: 'ደጋማ የገሊላ ኮረብታ',
        terrainTypeEn: 'Cretaceous limestone amphitheater ridge',
        scriptureRef: 'ሉቃስ 4:18',
        scriptureQuoteAm: 'የጌታ መንፈስ በእኔ ላይ ነው፥ ለድሆች ወንጌልን እሰብክ ዘንድ ቀብቶኛልና።',
        scriptureQuoteEn: 'The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor.',
        significanceAm: 'ያደገባት መንደር፤ በምኵራብ ውስጥ የኢሳይያስን ትንቢት በማንበብ መሲሐዊ ተልእኮውን ያወጀበት ስፍራ።',
        significanceEn: 'Hometown launchpad: reading Isaiah 61 in the synagogue, Jesus proclaims the Jubilee arrival of the Kingdom.'
      },
      {
        id: 'capernaum',
        nameAm: 'ቅፍርናሆም (የገሊላ ባሕር ዳርቻ)',
        nameEn: 'Capernaum (Sea of Galilee)',
        ancientRegionAm: 'ሰሜናዊ የገሊላ ባሕር ዳርቻ',
        ancientRegionEn: 'Northwest Shore of Kinneret',
        x: 690,
        y: 326,
        dayNumber: 60,
        distanceKm: 42,
        elevationMeters: -210,
        terrainTypeAm: 'የጥቁር ባዛልት ድንጋይ መንደርና የሐይቅ ዳርቻ',
        terrainTypeEn: 'Black basalt fishing village by freshwater lake',
        scriptureRef: 'ማቴዎስ 4:13',
        scriptureQuoteAm: 'ናዝሬትንም ትቶ በባሕር ዳርቻ ባለችው በቅፍርናሆም መጥቶ ተቀመጠ።',
        scriptureQuoteEn: 'And leaving Nazareth he went and lived in Capernaum by the sea.',
        significanceAm: 'የአገልግሎቱ ዋና ማዕከል፤ ሽባው በጣሪያ በኩል ተፈትቶ የተፈወሰበት፣ ጴጥሮስና እንድርያስ የተጠሩበት ስፍራ።',
        significanceEn: 'Ministry headquarters: Peter’s house, rooftop paralytic healed, and storm calming departures.'
      },
      {
        id: 'sychar',
        nameAm: 'ሲካር (የያዕቆብ የውኃ ጉድጓድ)',
        nameEn: "Sychar (Jacob's Well)",
        ancientRegionAm: 'ሰማርያ',
        ancientRegionEn: 'Samaritan Heartlands between Ebal & Gerizim',
        x: 682,
        y: 358,
        dayNumber: 380,
        distanceKm: 125,
        elevationMeters: 550,
        terrainTypeAm: 'የኮረብታ ሸለቆና ጥልቅ የውኃ ጉድጓድ',
        terrainTypeEn: 'Limestone valley wellshaft',
        scriptureRef: 'ዮሐንስ 4:14',
        scriptureQuoteAm: 'እኔ ከምሰጠው ውኃ የሚጠጣ ግን ለዘላለም አይጠማም።',
        scriptureQuoteEn: 'Whoever drinks of the water that I will give him will never be thirsty again.',
        significanceAm: 'የዘርና የባህል ድንበርን አፍርሶ ለሰማርያዊቷ ሴት የሕይወት ውኃን የሰበከበት ታላቅ የወንጌል ምሳሌ።',
        significanceEn: 'Breaks ethnic, gender, and religious apartheid, offering eternal living water to the rejected Samaritan outcast.'
      },
      {
        id: 'jericho',
        nameAm: 'ኢያሪኮ (የዘንባባ ከተማ)',
        nameEn: 'Jericho Oasis',
        ancientRegionAm: 'ዝቅተኛው የዮርዳኖስ ሸለቆ',
        ancientRegionEn: 'Jordan Rift Depression',
        x: 688,
        y: 376,
        dayNumber: 850,
        distanceKm: 210,
        elevationMeters: -250,
        terrainTypeAm: 'ሞቃታማ ለም የበረሃ ኦአሲስ',
        terrainTypeEn: 'Subtropical subterranean oasis',
        scriptureRef: 'ሉቃስ 19:9–10',
        scriptureQuoteAm: 'የሰው ልጅ የጠፋውን ሊፈልግና ሊያድን መጥቷልና ዛሬ ለዚህ ቤት መዳን ሆኖለታል።',
        scriptureQuoteEn: 'Today salvation has come to this house... For the Son of Man came to seek and to save the lost.',
        significanceAm: 'ዕውሩ በርጤሜዎስ ዓይኑ የበራበት፤ ቀራጩ ዘኬዎስ በንስሐ የተመለሰበት የመጨረሻው የኢየሩሳሌም መውጫ።',
        significanceEn: 'Blind Bartimaeus sees; despised chief tax collector Zacchaeus repents as Jesus makes his final ascent to Jerusalem.'
      },
      {
        id: 'jerusalem-calvary',
        nameAm: 'ኢየሩሳሌም / ቀራንዮ / ባዶ መቃብር',
        nameEn: 'Jerusalem / Golgotha / The Empty Tomb',
        ancientRegionAm: 'የይሁዳ ዋና ከተማ',
        ancientRegionEn: 'Judean Capital & Temple Mount',
        x: 684,
        y: 384,
        dayNumber: 1200,
        distanceKm: 245,
        elevationMeters: 750,
        terrainTypeAm: 'የኖራ ድንጋይ ግንቦችና የቤተ መቅደስ አደባባይ',
        terrainTypeEn: 'Limestone ridge, Roman praetorium & garden tomb',
        scriptureRef: 'ዮሐንስ 19:30; ሉቃስ 24:6',
        scriptureQuoteAm: 'ኢየሱስም፦ ተፈጸመ አለ፥ ራሱንም አዘንብሎ ነፍሱን አሳልፎ ሰጠ... እርሱ ተነሥቷል በዚህ የለም።',
        scriptureQuoteEn: 'When Jesus had received the sour wine, he said, "It is finished"... He is not here, but has risen!',
        significanceAm: 'የዓለም ኃጢአት በመስቀል የተሸከመበት፤ ሞትን ድል አድርጎ በክብር የተነሣበት የድነት ማዕከል።',
        significanceEn: 'The fulcrum of cosmic history: blood atonement at the cross, curtain torn, and empty tomb certifying eternal life.'
      }
    ]
  },

  // 5. Paul's 2nd Missionary Journey to Europe
  {
    id: 'paul-second-journey',
    titleAm: 'የሐዋርያው ጳውሎስ 2ኛው የወንጌል ጉዞ ወደ አውሮፓ',
    titleEn: "Paul's 2nd Missionary Expedition to Europe",
    subtitleAm: 'ከሶርያ አንጾኪያ እስከ አቴናና ቆሮንቶስ',
    subtitleEn: 'From Syrian Antioch to Philippi, Athens & Corinth',
    eraAm: 'የሐዋርያት ዘመን (c. AD 49–52)',
    eraEn: 'Apostolic Era (c. AD 49–52)',
    icon: '⛵',
    travelerAm: 'ሐዋርያው ጳውሎስ፣ ሲላስ፣ ጢሞቴዎስና ሉቃስ',
    travelerEn: 'Apostle Paul, Silas, Timothy, and Luke',
    transportModeAm: 'የእግር ጉዞ በሮማ መንገዶችና በኤጅያን ባሕር በመርከብ',
    transportModeEn: 'Roman paved roads (Via Egnatia) & Aegean sailing ships',
    totalDistanceKm: 4800,
    estimatedDays: 1095, // 3 years
    descriptionAm:
      'በሌሊት ራእይ በተሰጠው የመቄዶንያ ጥሪ («ወደ መቄዶንያ ተሻገርና እርዳን») ተመርቶ፤ ወንጌል ለመጀመሪያ ጊዜ ወደ አውሮፓ አህጉር የገባበት፣ በፊልጵስዩስ እስር ቤት በዝማሬ እግር ብረት የተፈታበትና በአቴና አርዮስፋጎስ ለእውነት የተመሰከረበት ታላቅ ጉዞ።',
    descriptionEn:
      'Catalyzed by the midnight "Macedonian Call", the Gospel officially breaches the European continent. Paul plants strategic churches in Philippi, Thessalonica, and Corinth, confronting Greek philosophy on Athens’ Mars Hill.',
    keyScriptures: [
      { bookNr: 44, chapter: 15, ref: 'የሐዋርያት ሥራ 15:36–41' },
      { bookNr: 44, chapter: 16, ref: 'የሐዋርያት ሥራ 16:9–40' },
      { bookNr: 44, chapter: 17, ref: 'የሐዋርያት ሥራ 17:16–34' },
      { bookNr: 44, chapter: 18, ref: 'የሐዋርያት ሥራ 18:1–18' }
    ],
    pathD: 'M 675 285 Q 610 260 560 250 T 470 200 Q 440 170 415 160 T 395 180 Q 395 235 380 245 T 475 240 Q 570 310 675 380',
    waypoints: [
      {
        id: 'antioch-syria',
        nameAm: 'የሶርያ አንጾኪያ',
        nameEn: 'Syrian Antioch',
        ancientRegionAm: 'ሶርያ (የሮም ግዛት)',
        ancientRegionEn: 'Syria (Third City of the Roman Empire)',
        x: 675,
        y: 285,
        dayNumber: 1,
        distanceKm: 0,
        elevationMeters: 80,
        terrainTypeAm: 'ታላቅ የሜዲትራኒያን የንግድ ከተማ',
        terrainTypeEn: 'Orontes River metropolis',
        scriptureRef: 'የሐዋርያት ሥራ 15:40',
        scriptureQuoteAm: 'ጳውሎስም ሲላስን መረጠ፤ ወንድሞችም ለእግዚአብሔር ጸጋ አደራ ከሰጡት በኋላ ወጣ።',
        scriptureQuoteEn: 'Paul chose Silas and departed, having been commended by the brothers to the grace of the Lord.',
        significanceAm: 'ደቀ መዛሙርት ለመጀመሪያ ጊዜ ክርስቲያን የተባሉባትና ሚስዮናውያንን በጸሎት የላከች ታማኝ እናት ቤተ ክርስቲያን።',
        significanceEn: 'Mission base of the early church; where disciples were first called "Christians" and sent out with laying on of hands.'
      },
      {
        id: 'troas',
        nameAm: 'ጢሮአዳ (የመቄዶንያ ጥሪ)',
        nameEn: 'Troas (The Macedonian Call)',
        ancientRegionAm: 'ኤጅያን ባሕር ዳርቻ (የቀድሞዋ ትሮይ)',
        ancientRegionEn: 'Aegean Gateway of Asia Minor',
        x: 470,
        y: 200,
        dayNumber: 220,
        distanceKm: 1450,
        elevationMeters: 20,
        terrainTypeAm: 'የመርከብ ወደብና የባሕር ዳርቻ',
        terrainTypeEn: 'Ancient seaport overlooking the Aegean',
        scriptureRef: 'የሐዋርያት ሥራ 16:9',
        scriptureQuoteAm: 'በሌሊትም ራእይ ለጳውሎስ ታየው፤ አንድ የመቄዶንያ ሰው ቆሞ፦ ወደ መቄዶንያ ተሻገርና እርዳን እያለ ለመነው።',
        scriptureQuoteEn: 'And a vision appeared to Paul in the night: a man of Macedonia was standing there, urging him and saying, "Come over to Macedonia and help us."',
        significanceAm: 'የመንፈስ ቅዱስ ግልጽ መመሪያ፤ ወንጌል ወደ አውሮፓ አህጉር እንዲሻገር የታሪክ አቅጣጫ የተለወጠበት ወደብ።',
        significanceEn: 'Strategic geopolitical hinge: Holy Spirit re-routes Paul across the Aegean Sea into Europe.'
      },
      {
        id: 'philippi',
        nameAm: 'ፊልጵስዩስ',
        nameEn: 'Philippi',
        ancientRegionAm: 'መቄዶንያ (የሮም ቅኝ ግዛት)',
        ancientRegionEn: 'Macedonia (Premier Roman Colony)',
        x: 415,
        y: 160,
        dayNumber: 260,
        distanceKm: 1750,
        elevationMeters: 60,
        terrainTypeAm: 'በቪያ ኤግናሺያ መንገድ ላይ ያለች ምሽግ ከተማ',
        terrainTypeEn: 'Strategic mountain pass along Via Egnatia',
        scriptureRef: 'የሐዋርያት ሥራ 16:25–26',
        scriptureQuoteAm: 'እኩለ ሌሊት ላይ ጳውሎስና ሲላስ ሲጸልዩ እግዚአብሔርንም በዜማ ሲያመሰግኑ... ታላቅ የምድር መናወጥ ሆነ።',
        scriptureQuoteEn: 'About midnight Paul and Silas were praying and singing hymns to God... suddenly there was a great earthquake.',
        significanceAm: 'የቀይ ሐር ሻጭዋ ልዲያ የተጠመቀችባት፤ የእስር ቤቱ ጠባቂ የዳነበት የመጀመሪያይቱ የአውሮፓ አጥቢያ ቤተ ክርስቲያን።',
        significanceEn: 'First European congregation: Lydia baptized at the riverbank, jailer saved after miraculous earthquake.'
      },
      {
        id: 'athens',
        nameAm: 'አቴና (አርዮስፋጎስ / የማርስ ኮረብታ)',
        nameEn: 'Athens (Areopagus / Mars Hill)',
        ancientRegionAm: 'አካይያ (ግሪክ)',
        ancientRegionEn: 'Achaia (Intellectual Capital of Greece)',
        x: 395,
        y: 235,
        dayNumber: 380,
        distanceKm: 2450,
        elevationMeters: 115,
        terrainTypeAm: 'የአክሮፖሊስ የድንጋይ ኮረብታና አደባባይ',
        terrainTypeEn: 'Limestone hill below the Parthenon',
        scriptureRef: 'የሐዋርያት ሥራ 17:23',
        scriptureQuoteAm: 'ለማይታወቅ አምላክ የሚል ጽሕፈት ያለበትን መሠዊያ ደግሞ አግኝቻለሁና፤ ይህን የማታውቁትን የምታመልኩትን እኔ እነግራችኋለሁ።',
        scriptureQuoteEn: '"To the unknown god." What therefore you worship as unknown, this I proclaim to you.',
        significanceAm: 'የግሪክ ፈላስፎች (ስቶይኮችና ኤፊቆሮሳውያን) በተሰበሰቡበት፤ ጳውሎስ የፍጥረትን አምላክና የክርስቶስን ትንሣኤ በግልጽ የመሰከረበት ስፍራ።',
        significanceEn: 'Apologetics pinnacle: Paul engages Stoic and Epicurean elites, preaching the Creator and physical resurrection.'
      },
      {
        id: 'corinth',
        nameAm: 'ቆሮንቶስ',
        nameEn: 'Corinth',
        ancientRegionAm: 'አካይያ የሮም ግዛት ዋና ከተማ',
        ancientRegionEn: 'Commercial Crossroads of the Roman Empire',
        x: 380,
        y: 245,
        dayNumber: 420,
        distanceKm: 2600,
        elevationMeters: 40,
        terrainTypeAm: 'ሁለት ወደቦች ያሏት የንግድ ከተማ',
        terrainTypeEn: 'Isthmus hub flanked by two bustling harbors',
        scriptureRef: 'የሐዋርያት ሥራ 18:9–10',
        scriptureQuoteAm: 'ጌታም በሌሊት በራእይ ጳውሎስን፦ በዚህች ከተማ ብዙ ሕዝብ አሉኝና አትፍራ፥ ተናገር ዝምም አትበል አለው።',
        scriptureQuoteEn: 'And the Lord said to Paul one night in a vision, "Do not be afraid, but go on speaking... for I have many in this city."',
        significanceAm: 'ለ18 ወራት በድንኳን ሰፊነት እየሠራ ቤተ ክርስቲያንን ያጸናበት፤ በጋሊዮን ፍርድ ወንበር ፊት በድል የወጣበት ስፍራ።',
        significanceEn: '18 months of intensive discipleship with Priscilla & Aquila; Roman Governor Gallio dismisses charges against Paul.'
      }
    ]
  },

  // 6. Paul's Voyage & Shipwreck to Rome
  {
    id: 'paul-shipwreck-rome',
    titleAm: 'የጳውሎስ የሮም መርከብ ጉዞና አደጋ',
    titleEn: "Paul's Shipwreck Voyage to Rome",
    subtitleAm: 'የሜዲትራኒያን ማዕበል፣ የማልታ አደጋና የሮም እስራት',
    subtitleEn: 'The Euroclydon Tempest, Malta Wreck & Imperial Chains',
    eraAm: 'የሐዋርያት ዘመን (c. AD 59–60)',
    eraEn: 'Apostolic Era (c. AD 59–60)',
    icon: '⛈️',
    travelerAm: 'ሐዋርያው ጳውሎስ፣ ሉቃስ፣ አርስጥሮኮስና 276 መንገደኞች',
    travelerEn: 'Paul, Luke, Aristarchus, and 276 passengers and Roman guards',
    transportModeAm: 'የእህል ጫኝ የሮማ መርከብ በሜዲትራኒያን ባሕር',
    transportModeEn: 'Alexandrian grain freighter in deep sea',
    totalDistanceKm: 3600,
    estimatedDays: 180,
    descriptionAm:
      'ጳውሎስ በቄሳር ፊት ለመቆም ይግባኝ ካለ በኋላ በሰንሰለት ታስሮ በመርከብ ወደ ሮም ሲጓዝ፤ የ14 ቀናት አውሎ ንፋስ መርከቧን ሰባብሮ በማልታ ደሴት የተከሰተው ተአምራዊ መዳንና በሮም ወንጌልን ያለ ከልካይ የማወጁ ታሪክ።',
    descriptionEn:
      'The thrilling nautical epic of the New Testament. Prisoner of Rome, Paul endures a 14-day hurricane across the uncharted Mediterranean, promises total survival through angel visitation, and reaches Caesar’s capital unhindered.',
    keyScriptures: [
      { bookNr: 44, chapter: 27, ref: 'የሐዋርያት ሥራ 27:1–44' },
      { bookNr: 44, chapter: 28, ref: 'የሐዋርያት ሥራ 28:1–31' }
    ],
    pathD: 'M 675 365 Q 640 280 530 260 T 430 310 Q 320 270 240 315 T 175 190 T 155 165',
    waypoints: [
      {
        id: 'caesarea-embark',
        nameAm: 'ቂሣርያ ማሪቲማ',
        nameEn: 'Caesarea Maritima',
        ancientRegionAm: 'የሮማ ይሁዳ አስተዳደር ማዕከል',
        ancientRegionEn: 'Roman Provincial Capital of Judea',
        x: 675,
        y: 365,
        dayNumber: 1,
        distanceKm: 0,
        elevationMeters: 5,
        terrainTypeAm: 'ግዙፍ ሰው ሰራሽ የሮማ ወደብ',
        terrainTypeEn: 'Herodian deep-water artificial harbor',
        scriptureRef: 'የሐዋርያት ሥራ 27:1',
        scriptureQuoteAm: 'ወደ ኢጣሊያ በመርከብ እንድንጓዝ በተፈረደ ጊዜ... ጳውሎስን ለኢዮልዮስ ለሚባል የመቶ አለቃ አሳልፈው ሰጡት።',
        scriptureQuoteEn: 'And when it was decided that we should sail for Italy, they delivered Paul... to a centurion named Julius.',
        significanceAm: 'ጳውሎስ ለ2 ዓመታት ታስሮ ከቆየ በኋላ «ይግባኝ ወደ ቄሳር» በማለት ወደ ሮም የተጓዘበት መነሻ ወደብ።',
        significanceEn: 'Launch of the legal odyssey: having claimed Roman citizenship right to Caesar, Paul leaves as prisoner in chains.'
      },
      {
        id: 'fair-havens',
        nameAm: 'መልካም ወደብ (ቀሬጣ ደሴት)',
        nameEn: 'Fair Havens, Crete',
        ancientRegionAm: 'ደቡባዊ የቀርጤስ ደሴት',
        ancientRegionEn: 'Southern Coast of Crete',
        x: 430,
        y: 310,
        dayNumber: 45,
        distanceKm: 1250,
        elevationMeters: 0,
        terrainTypeAm: 'ገደላማ የደሴት የባሕር ወሽመጥ',
        terrainTypeEn: 'Exposed rocky coastal bay',
        scriptureRef: 'የሐዋርያት ሥራ 27:9–10',
        scriptureQuoteAm: 'ጳውሎስ መከራቸው፦ ሰዎች ሆይ፥ ይህ ጉዞ በጭነቱና በመርከቡ ብቻ ሳይሆን በነፍሳችንም ጭምር በጉዳትና በብዙ ጥፋት እንደሚሆን አያለሁ።',
        scriptureQuoteEn: 'Paul warned them, saying, "Sirs, I perceive that the voyage will be with injury and much loss."',
        significanceAm: 'የክረምት ማዕበል መቃረቡን ጳውሎስ አስጠንቅቆ እያለ የመርከቡ አለቃ ሳይሰማ ቀርቶ ወደ አደጋ የገባበት ውሳኔ።',
        significanceEn: 'The fateful refusal: Centurion and helmsman dismiss prophetic wisdom in favor of commercial expediency.'
      },
      {
        id: 'adrift-euroclydon',
        nameAm: 'በአውሎ ንፋስ መገፋት (ዩራቅሊዶን)',
        nameEn: 'Tempest Typhoon (Euroclydon Adrift)',
        ancientRegionAm: 'ማዕከላዊ የሜዲትራኒያን ጥልቅ ባሕር (አድሪያ)',
        ancientRegionEn: 'Central Mediterranean Abyss (Sea of Adria)',
        x: 320,
        y: 270,
        dayNumber: 60,
        distanceKm: 2100,
        elevationMeters: 0,
        terrainTypeAm: 'ማዕበለኛ ጨለማ ባሕር',
        terrainTypeEn: 'Sunless, starless raging hurricane swells',
        scriptureRef: 'የሐዋርያት ሥራ 27:22–24',
        scriptureQuoteAm: 'የእርሱ የሆንሁት የማመልከው የእግዚአብሔር መልአክ በዚች ሌሊት በአጠገቤ ቆሞ፦ ጳውሎስ ሆይ፥ አትፍራ፤ በቄሳር ፊት ልትቆም ይገባሃል አለኝ።',
        scriptureQuoteEn: '"For this very night there stood by me an angel of the God to whom I belong... saying, \'Do not be afraid, Paul; you must stand before Caesar.\'"',
        significanceAm: 'ለ14 ቀናት ፀሐይና ከዋክብት ሳይታዩ የጠፉበት፤ የእግዚአብሔር መልአክ ግን 276ቱም ሰዎች እንደማይጠፉ ተስፋ የሰጠበት ታላቅ የእምነት ምሽት።',
        significanceEn: 'Angel delivers absolute divine warranty: not a single hair of the 276 souls will perish; God preserves the mission.'
      },
      {
        id: 'malta',
        nameAm: 'ማልታ ደሴት (የመርከብ መሰበር)',
        nameEn: 'Malta Island (Shipwreck & Snakebite)',
        ancientRegionAm: 'ማልታ ደሴት',
        ancientRegionEn: 'St. Paul’s Bay, Malta',
        x: 240,
        y: 315,
        dayNumber: 74,
        distanceKm: 2650,
        elevationMeters: 25,
        terrainTypeAm: 'አሸዋማ የባሕር ዳርቻና የኖራ ድንጋይ ገደል',
        terrainTypeEn: 'Reef sandbar & limestone coastal shoals',
        scriptureRef: 'የሐዋርያት ሥራ 27:44; 28:5',
        scriptureQuoteAm: 'እንዲሁም ሆነ፥ ሁሉም በደኅና ወደ ምድር ደረሱ... እርሱ ግን እባቡን ወደ እሳት አራገፈው ምንም አልጎዳውም።',
        scriptureQuoteEn: 'And so it was that all were brought safely to land... He, however, shook off the creature into the fire and suffered no harm.',
        significanceAm: 'መርከቧ ተሰባብራ ሁሉም በደኅና የተረፉበት፤ ጳውሎስን እፉኝት ነድፎት ምንም ሳይሆን የደሴቲቱን ገዢ አባት የፈወሰበት ተአምራዊ ስፍራ።',
        significanceEn: '100% survival rate: venomous viper miraculously shaken off into flames; islanders healed by the power of Christ.'
      },
      {
        id: 'rome-via-appia',
        nameAm: 'ሮም (በአፒያን ጎዳና መግባት)',
        nameEn: 'Rome (The Appian Way Arrival)',
        ancientRegionAm: 'የሮማ ኢምፓየር ዋና ከተማ',
        ancientRegionEn: 'Capital of the Mediterranean World',
        x: 155,
        y: 165,
        dayNumber: 180,
        distanceKm: 3600,
        elevationMeters: 50,
        terrainTypeAm: 'የተጠረበ ጥቁር ድንጋይ የሮማ ጎዳና',
        terrainTypeEn: 'Basalt-paved imperial highway & Tiber valley',
        scriptureRef: 'የሐዋርያት ሥራ 28:30–31',
        scriptureQuoteAm: 'ጳውሎስም በተከራየው ቤት ሁለት ዓመት ሙሉ ተቀመጠ... የእግዚአብሔርን መንግሥት ያለ ከልካይ በሙሉ ድፍረት ይሰብክ ነበር።',
        scriptureQuoteEn: 'He lived there two whole years at his own expense... proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance.',
        significanceAm: 'የሐዋርያት ሥራ መጽሐፍ ፍጻሜ፤ በቄሳር ግዛት እምብርት ወንጌል በድል አድራጊነት ያለ ከልካይ የነገሠበት ታላቅ ማጠቃለያ።',
        significanceEn: 'Climax of Acts: The Word of God breaks through every imperial obstacle, reigning unhindered at the heart of the empire.'
      }
    ]
  }
]

/**
 * Checks if a given book and chapter is a landmark expedition passage
 */
export function getExpeditionForChapter(bookNr: number, chapter: number): AtlasExpedition | undefined {
  return CHRONO_EXPEDITIONS.find((exp) =>
    exp.keyScriptures.some((ks) => ks.bookNr === bookNr && ks.chapter === chapter)
  )
}
