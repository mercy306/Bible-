// Canonical Scripture-Grounded Bible Knowledge Base
// Every record is directly tethered to the 66 canonical books with verified citations.

export interface BiblicalEntity {
  id: string
  aliasesEn: string[]
  aliasesAm: string[]
  titleEn: string
  titleAm: string
  testament: 'OT' | 'NT' | 'Both'
  summaryEn: string
  summaryAm: string
  keyChapters: { book: number; chapter: number; labelEn: string; labelAm: string }[]
  keyVerses: string[]
  otNtConnectionsEn?: string
  otNtConnectionsAm?: string
  reflectionQuestionsEn: string[]
  reflectionQuestionsAm: string[]
}

export const BIBLICAL_ENTITIES: BiblicalEntity[] = [
  // --- PEOPLE ---
  {
    id: 'moses',
    aliasesEn: ['moses'],
    aliasesAm: ['ሙሴ'],
    titleEn: 'Moses — Prophet, Lawgiver, and Deliverer',
    titleAm: 'ሙሴ — ነቢይ፣ ሕግ ሰጪና ነፃ አውጪ',
    testament: 'Both',
    summaryEn: 'Called by God at the burning bush (Exodus 3), Moses led the children of Israel out of Egyptian bondage, mediated the Law at Mount Sinai (Exodus 19-20), and led them 40 years through the wilderness. Deuteronomy 34:10 notes that no prophet arose in Israel like Moses, whom the Lord knew face to face.',
    summaryAm: 'በሚነደው ቍጥቋጦ ውስጥ እግዚአብሔር የጠራው (ዘጸ 3)፤ የእስራኤልን ልጆች ከግብፅ ባርነት አውጥቶ በሲና ተራራ የሕጉ መካከለኛ ሆኖ ያገለገለና ለ40 ዓመታት በምድረ በዳ የመራ ታላቅ ነቢይ ነው። ዘዳግም 34፥10 "እግዚአብሔር ፊት ለፊት እንዳወቀው እንደ ሙሴ ያለ ነቢይ ከዚያ ወዲህ በእስራኤል አልተነሣም" በማለት ይመሰክርለታል።',
    keyChapters: [
      { book: 2, chapter: 3, labelEn: 'Exodus 3 (The Burning Bush & Call)', labelAm: 'ዘጸአት 3 (የሚነደው ቍጥቋጦና ጥሪ)' },
      { book: 2, chapter: 14, labelEn: 'Exodus 14 (Crossing the Red Sea)', labelAm: 'ዘጸአት 14 (የቀይ ባሕር መከፈል)' },
      { book: 2, chapter: 20, labelEn: 'Exodus 20 (The Ten Commandments)', labelAm: 'ዘጸአት 20 (ዐሥርቱ ቃላት)' },
      { book: 5, chapter: 34, labelEn: 'Deuteronomy 34 (Death & Honor of Moses)', labelAm: 'ዘዳግም 34 (የሙሴ ማረፍ)' },
    ],
    keyVerses: ['Exodus 3:14', 'Exodus 20:1-17', 'Deuteronomy 34:10', 'John 1:17', 'Hebrews 3:5-6'],
    otNtConnectionsEn: 'Moses foreshadowed Jesus the Messiah: Deuteronomy 18:15 prophesied "The Lord thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me." Hebrews 3:5-6 reveals that while Moses was faithful in all God’s house as a servant, Christ is faithful as a Son over His own house. John 1:17 contrasts: "For the law was given by Moses, but grace and truth came by Jesus Christ."',
    otNtConnectionsAm: 'ሙሴ የመሲሑ የክርስቶስ ጥላ ነበር፦ ዘዳግም 18፥15 "አምላክህ እግዚአብሔር ከአንተ መካከል ከወንድሞችህ እንደ እኔ ያለ ነቢይ ያስነሣልሃል" ተብሎ ተነገረ። ዕብራውያን 3፥5-6 ሙሴ በእግዚአብሔር ቤት ሁሉ እንደ አገልጋይ ታማኝ እንደነበር፣ ክርስቶስ ግን እንደ ልጅ በቤቱ ላይ የተሾመ መሆኑን ያሳያል። ዮሐንስ 1፥17 "ሕግ በሙሴ ተሰጥቶ ነበርና፤ ጸጋና እውነት ግን በኢየሱስ ክርስቶስ ሆነ" ይላል።',
    reflectionQuestionsEn: [
      'How does Moses’ obedience to God inspire your trust in difficult callings?',
      'What is the difference between living under the Law given through Moses and the grace given in Christ (John 1:17)?',
    ],
    reflectionQuestionsAm: [
      'የሙሴ ለእግዚአብሔር መታዘዝ ፈታኝ በሆኑ የሕይወት መንገዶች ላይ ለመታመን ምን ያስተምረናል?',
      'በሙሴ በኩል በተሰጠው ሕግና በክርስቶስ በተገለጠው ጸጋ መካከል ያለው ልዩነት ምንድን ነው (ዮሐ 1፥17)?',
    ],
  },
  {
    id: 'abraham',
    aliasesEn: ['abraham', 'abram'],
    aliasesAm: ['አብርሃም', 'አብራም'],
    titleEn: 'Abraham — Father of Faith & the Covenant of Blessing',
    titleAm: 'አብርሃም — የእምነት አባትና የኪዳን ሰው',
    testament: 'Both',
    summaryEn: 'Called by God to leave Ur of the Chaldees to go to a land God would show him (Genesis 12:1-3). God made an unconditional covenant with him promising a land, numerous descendants, and that through his seed all nations of the earth would be blessed. Genesis 15:6 declares: "And he believed in the Lord; and he counted it to him for righteousness."',
    summaryAm: 'ከከለዳውያን ዑር ወጥቶ እግዚአብሔር ወደሚያሳየው ምድር እንዲሄድ የተጠራ (ዘፍ 12፥1-3)። እግዚአብሔር ምድርን፣ የበዛ ዘርንና በዘሩ የምድር አሕዛብ ሁሉ እንዲባረኩ የቃል ኪዳን ተስፋ ሰጠው። ዘፍጥረት 15፥6 "አብራምም በእግዚአብሔር አመነ፤ ጽድቅም ሆኖ ተቆጠረለት" ይላል።',
    keyChapters: [
      { book: 1, chapter: 12, labelEn: 'Genesis 12 (The Call of Abram)', labelAm: 'ዘፍጥረት 12 (የአብራም ጥሪ)' },
      { book: 1, chapter: 15, labelEn: 'Genesis 15 (Covenant & Faith Counted as Righteousness)', labelAm: 'ዘፍጥረት 15 (ኪዳኑና እምነት ጽድቅ ሆኖ መቆጠሩ)' },
      { book: 1, chapter: 22, labelEn: 'Genesis 22 (The Offering of Isaac on Moriah)', labelAm: 'ዘፍጥረት 22 (ይስሐቅን በመሰዊያ ላይ ማቅረብ)' },
      { book: 45, chapter: 4, labelEn: 'Romans 4 (Abraham Justified by Faith)', labelAm: 'ሮሜ 4 (አብርሃም በእምነት ጸደቀ)' },
    ],
    keyVerses: ['Genesis 12:1-3', 'Genesis 15:6', 'Romans 4:3', 'Galatians 3:7-9', 'Hebrews 11:8-10'],
    otNtConnectionsEn: 'The covenant with Abraham is the bedrock of New Testament salvation: Galatians 3:16 explains that the promised "seed" is Christ. Galatians 3:29 declares: "And if ye be Christ’s, then are ye Abraham’s seed, and heirs according to the promise." Genesis 22 (offering of Isaac) was a prophetic portrait of God the Father giving His only begotten Son at Calvary.',
    otNtConnectionsAm: 'ከአብርሃም ጋር የተገባው ኪዳን የአዲስ ኪዳን መዳን መሠረት ነው፦ ገላትያ 3፥16 የተሰጠው "ዘር" የተባለው ተስፋ ክርስቶስ እንደሆነ ያብራራል። ገላትያ 3፥29 "የክርስቶስ ከሆናችሁ እንኪያስ የአብርሃም ዘር እንደ ተስፋውም ቃል ወራሾች ናችሁ" ይላል። ዘፍጥረት 22 (ይስሐቅን ማቅረብ) አብ አንድያ ልጁን በመስቀል ላይ የመስጠቱ ትንቢታዊ ምሳሌ ነበር።',
    reflectionQuestionsEn: [
      'What does it mean for your daily life that Abraham believed God and it was credited to him as righteousness?',
      'How does knowing you are an heir of Abraham’s promise in Christ encourage your faith?',
    ],
    reflectionQuestionsAm: [
      'አብርሃም በእግዚአብሔር አምኖ ጽድቅ ሆኖ መቆጠሩ ለእኛ የዕለት ተዕለት እምነት ምን ትርጉም አለው?',
      'በክርስቶስ አማካኝነት የአብርሃም የተስፋው ቃል ወራሽ መሆንዎን ማወቅ ምን ዓይነት መንፈሳዊ ብርታት ይሰጥዎታል?',
    ],
  },
  {
    id: 'david',
    aliasesEn: ['david'],
    aliasesAm: ['ዳዊት'],
    titleEn: 'David — Anointed King and a Man after God’s Own Heart',
    titleAm: 'ዳዊት — የተቀባው ንጉሥና እንደ እግዚአብሔር ልብ የሆነ ሰው',
    testament: 'Both',
    summaryEn: 'Anointed by Samuel as a young shepherd (1 Samuel 16), defeated Goliath with faith in God’s name (1 Samuel 17), and became the greatest king of Israel. Author of many Psalms. God established the Davidic Covenant with him in 2 Samuel 7, promising an eternal throne through his lineage.',
    summaryAm: 'በእረኝነቱ ሳለ በሳሙኤል የተቀባ (1 ሳሙ 16)፤ በእግዚአብሔር ስም ታምኖ ጎልያድን ድል ያደረገ (1 ሳሙ 17) እና ታላቁ የእስራኤል ንጉሥ የሆነ ሰው። በርካታ መዝሙራትን ጽፏል። በ2ኛ ሳሙኤል 7 እግዚአብሔር ከዘሩ ለዘላለም የሚቆም መንግሥት እንደሚያስነሣ የኪዳን ቃል ገብቶለታል።',
    keyChapters: [
      { book: 9, chapter: 16, labelEn: '1 Samuel 16 (Anointed as King)', labelAm: '1 ሳሙኤል 16 (ለንጉሥነት መቀባቱ)' },
      { book: 9, chapter: 17, labelEn: '1 Samuel 17 (Victory over Goliath)', labelAm: '1 ሳሙኤል 17 (በጎልያድ ላይ የተገኘው ድል)' },
      { book: 10, chapter: 7, labelEn: '2 Samuel 7 (The Eternal Davidic Covenant)', labelAm: '2 ሳሙኤል 7 (የዳዊት ዘላለማዊ ኪዳን)' },
      { book: 19, chapter: 23, labelEn: 'Psalm 23 (The Lord is my Shepherd)', labelAm: 'መዝሙር 23 (እግዚአብሔር እረኛዬ ነው)' },
      { book: 19, chapter: 51, labelEn: 'Psalm 51 (Prayer of True Repentance)', labelAm: 'መዝሙር 51 (የእውነተኛ ንስሐ ጸሎት)' },
    ],
    keyVerses: ['1 Samuel 16:7', '2 Samuel 7:12-16', 'Psalm 23:1-6', 'Acts 2:29-32', 'Revelation 22:16'],
    otNtConnectionsEn: 'Jesus Christ is the ultimate "Son of David" and King of Kings (Matthew 1:1, Luke 1:32-33). Peter in Acts 2:29-31 shows that David, being a prophet, spoke in Psalm 16 of the resurrection of Christ. In Revelation 22:16, Jesus proclaims: "I am the root and the offspring of David, and the bright and morning star."',
    otNtConnectionsAm: 'ኢየሱስ ክርስቶስ የመጨረሻውና እውነተኛው "የዳዊት ልጅ" እና የነገሥታት ንጉሥ ነው (ማቴ 1፥1፣ ሉቃ 1፥32-33)። ጴጥሮስ በሐዋርያት ሥራ 2፥29-31 ዳዊት ነቢይ ሆኖ በመዝሙር 16 ላይ የተናገረው ስለ ክርስቶስ ትንሣኤ እንደሆነ ይመሰክራል። በራእይ 22፥16 ኢየሱስ "እኔ የዳዊት ሥርና ዘር ነኝ" ብሎ ራሱን ገልጿል።',
    reflectionQuestionsEn: [
      'What can we learn from David’s heart of repentance in Psalm 51 when he fell into sin?',
      'How does trusting the Good Shepherd in Psalm 23 bring peace in difficult seasons?',
    ],
    reflectionQuestionsAm: [
      'ዳዊት በበደለ ጊዜ በመዝሙር 51 ላይ ካቀረበው ልባዊ የንስሐ ጸሎት ምን እንማራለን?',
      'በመዝሙር 23 ላይ እግዚአብሔር እረኛችን እንደሆነ ማመን በጭንቀት ጊዜ ምን ዓይነት ሰላም ይሰጠናል?',
    ],
  },
  {
    id: 'paul',
    aliasesEn: ['paul', 'saul of tarsus'],
    aliasesAm: ['ጳውሎስ', 'ሳውል'],
    titleEn: 'Apostle Paul — Vessel of Grace to the Nations',
    titleAm: 'ሐዋርያው ጳውሎስ — ለአሕዛብ የተመረጠ የጸጋ ዕቃ',
    testament: 'NT',
    summaryEn: 'Originally Saul of Tarsus, a strict Pharisee of the tribe of Benjamin who fiercely persecuted the church (Acts 8:3, Philippians 3:5). Miraculously transformed by the risen Jesus on the road to Damascus (Acts 9). Became the apostle to the Gentiles, planting churches across the Roman world and penning 14 Epistles under the inspiration of the Holy Spirit.',
    summaryAm: 'ቀድሞ የቤተክርስቲያን አሳዳጅና የብንያም ነገድ የሆነው ጠንካራ ፈሪሳዊ ሳውል ነበረ (የሐዋ 8፥3፣ ፊል 3፥5)። ወደ ደማስቆ ሲሄድ በትንሣኤው ጌታ በኢየሱስ ተገለጠለትና ተለወጠ (የሐዋ 9)። ወደ አሕዛብ ተልኮ ወንጌልን በሮማ ግዛት አስፋፋ፤ በመንፈስ ቅዱስ ተመርቶ በርካታ መልእክታትን ጻፈ።',
    keyChapters: [
      { book: 44, chapter: 9, labelEn: 'Acts 9 (The Damascus Road Encounter)', labelAm: 'የሐዋርያት ሥራ 9 (የደማስቆ መንገድ መለወጥ)' },
      { book: 45, chapter: 8, labelEn: 'Romans 8 (Life in the Spirit & No Condemnation)', labelAm: 'ሮሜ 8 (የመንፈስ ሕይወትና ኩነኔ የሌለበት ጸጋ)' },
      { book: 46, chapter: 13, labelEn: '1 Corinthians 13 (The Way of Divine Love)', labelAm: '1 ቆሮንቶስ 13 (የመለኮታዊ ፍቅር መንገድ)' },
      { book: 55, chapter: 4, labelEn: '2 Timothy 4 (Finished the Race with Faith)', labelAm: '2 ጢሞቴዎስ 4 (መልካሙን ገድል ተጋድዬአለሁ)' },
    ],
    keyVerses: ['Acts 9:3-6', 'Romans 1:16', 'Romans 8:28-39', 'Galatians 2:20', '2 Timothy 4:7-8'],
    otNtConnectionsEn: 'Paul mastered the Hebrew Scriptures and demonstrated throughout Romans and Galatians that the Gospel was not a novelty, but the fulfillment of the Law and the Prophets promised in the Old Testament through Abraham, Habakkuk ("the just shall live by faith"), and Isaiah.',
    otNtConnectionsAm: 'ጳውሎስ የቀደመውን ቅዱሳት መጻሕፍት ጠንቅቆ ያወቀ እንደመሆኑ፣ ወንጌል አዲስ ፈጠራ ሳይሆን በብሉይ ኪዳን በአብርሃም፣ በዕንባቆም ("ጻድቅ በእምነት ይኖራል") እና በኢሳይያስ የተነገረው ትንቢት ፍጻሜ መሆኑን በሮሜና በገላትያ መልእክቱ አረጋግጧል።',
    reflectionQuestionsEn: [
      'How does Paul’s dramatic transformation encourage you about God’s power to change any life?',
      'What does "I have been crucified with Christ, nevertheless I live" (Galatians 2:20) mean for your personal walk?',
    ],
    reflectionQuestionsAm: [
      'የጳውሎስ መለወጥ የእግዚአብሔር ጸጋ ማንኛውንም ሰው የመለወጥ ኃይል እንዳለው ምን ያህል ያረጋግጥልናል?',
      'ከክርስቶስ ጋር ተሰቅያለሁ እኔም አሁን ሕያው ሆኜ አልኖርም (ገላ 2፥20) የሚለው ቃል በሕይወታችን እንዴት ይገለጣል?',
    ],
  },

  // --- EVENTS ---
  {
    id: 'creation',
    aliasesEn: ['creation', 'the beginning'],
    aliasesAm: ['ፍጥረት', 'የዓለም ፍጥረት'],
    titleEn: 'The Creation of Heaven and Earth',
    titleAm: 'የሰማይና የምድር አፈጣጠር',
    testament: 'Both',
    summaryEn: 'Genesis 1:1 opens the Bible with: "In the beginning God created the heaven and the earth." God formed the cosmos out of nothing by the power of His word in six days, created mankind in His own image and likeness on the sixth day, and rested on the seventh day.',
    summaryAm: 'ዘፍጥረት 1፥1 "በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ" በማለት ይጀምራል። እግዚአብሔር ዓለማትን በቃሉ ኃይል ከምንም ፈጠረ፤ በስድስተኛው ቀን ሰውን በራሱ መልክና አምሳል አበጀ፤ በሰባተኛውም ቀን ከሥራው ሁሉ ዐረፈ።',
    keyChapters: [
      { book: 1, chapter: 1, labelEn: 'Genesis 1 (The Six Days of Creation)', labelAm: 'ዘፍጥረት 1 (ስድስቱ የፍጥረት ቀናት)' },
      { book: 1, chapter: 2, labelEn: 'Genesis 2 (Man in Eden & Seventh Day)', labelAm: 'ዘፍጥረት 2 (ሰው በዔድንና ሰባተኛው ቀን)' },
      { book: 19, chapter: 104, labelEn: 'Psalm 104 (Praise to the Creator God)', labelAm: 'መዝሙር 104 (ፈጣሪን የሚያመሰግን መዝሙር)' },
      { book: 43, chapter: 1, labelEn: 'John 1:1-3 (Creation by the Eternal Word)', labelAm: 'ዮሐንስ 1:1-3 (በዘላለማዊው ቃል መፈጠሩ)' },
    ],
    keyVerses: ['Genesis 1:1', 'Genesis 1:26-27', 'Psalm 33:6-9', 'John 1:1-3', 'Colossians 1:16-17', 'Hebrews 11:3'],
    otNtConnectionsEn: 'The New Testament reveals that the Son of God, Jesus Christ, was the active agent of creation: John 1:3 declares: "All things were made by him; and without him was not any thing made that was made." Colossians 1:16 confirms: "For by him were all things created, that are in heaven, and that are in earth... all things were created by him, and for him."',
    otNtConnectionsAm: 'አዲስ ኪዳን የእግዚአብሔር ልጅ ኢየሱስ ክርስቶስ በፍጥረት ሥራ ውስጥ የነበረው ቃል እንደሆነ ይገልጻል፦ ዮሐንስ 1፥3 "ሁሉ በእርሱ ሆነ፥ ከሆነውም አንዳች ስንኳ ያለ እርሱ አልሆነም" ይላል። ቆላስይስ 1፥16 "ሁሉ በእርሱና ለእርሱ ተፈጥሮአል" በማለት ያረጋግጣል።',
    reflectionQuestionsEn: [
      'What does being made in the image of God (Genesis 1:27) tell you about human dignity and purpose?',
      'How does knowing God framed the universe by His word (Hebrews 11:3) strengthen your prayer life?',
    ],
    reflectionQuestionsAm: [
      'በእግዚአብሔር መልክ መፈጠርዎ (ዘፍ 1፥27) ስለ ሰው ክብርና ዓላማ ምን ያስተምርዎታል?',
      'እግዚአብሔር ዓለማትን በቃሉ እንዳጸና ማወቅ (ዕብ 11፥3) በጸሎት ሕይወትዎ ላይ ምን እምነት ያሳድርብዎታል?',
    ],
  },
  {
    id: 'resurrection',
    aliasesEn: ['resurrection of jesus', 'easter', 'resurrection'],
    aliasesAm: ['ትንሣኤ', 'የኢየሱስ ትንሣኤ', 'ትንሣኤው'],
    titleEn: 'The Resurrection of Jesus Christ',
    titleAm: 'የጌታ የኢየሱስ ክርስቶስ ትንሣኤ',
    testament: 'Both',
    summaryEn: 'Crucified and buried in a tomb, Jesus Christ rose bodily from the dead on the third day according to the Scriptures. The stone was rolled away, the tomb was empty, and He appeared alive to Mary Magdalene, the Apostles, and over 500 witnesses (1 Corinthians 15:3-6). The resurrection is the foundational guarantee of Christian faith, eternal life, and victory over death.',
    summaryAm: 'ተሰቅሎና ተቀብሮ በሦስተኛው ቀን በመጽሐፍ ቅዱስ መሠረት በክብር ከሙታን ተነሣ። መቃብሩ ባዶ ሆነ፤ ለማርያም መግደላዊት፣ ለሐዋርያትና ከ500 ለሚበልጡ ሰዎች በሕይወት ታየ (1 ቆሮ 15፥3-6)። የክርስቶስ ትንሣኤ የክርስትና እምነት፣ የድነትና በሞት ላይ የተገኘው የዘላለም ድል ዋስትና ነው።',
    keyChapters: [
      { book: 40, chapter: 28, labelEn: 'Matthew 28 (The Empty Tomb & Great Commission)', labelAm: 'ማቴዎስ 28 (ባዶው መቃብርና ታላቁ ተልእኮ)' },
      { book: 42, chapter: 24, labelEn: 'Luke 24 (Road to Emmaus & Bodily Appearance)', labelAm: 'ሉቃስ 24 (የኤማሁስ መንገድና መገለጡ)' },
      { book: 43, chapter: 20, labelEn: 'John 20 (I Have Seen the Lord!)', labelAm: 'ዮሐንስ 20 (ጌታን አይቼዋለሁ)' },
      { book: 46, chapter: 15, labelEn: '1 Corinthians 15 (The Resurrection Chapter)', labelAm: '1 ቆሮንቶስ 15 (የትንሣኤው ታላቅ ምዕራፍ)' },
    ],
    keyVerses: ['Matthew 28:5-6', 'John 11:25', 'Romans 1:4', '1 Corinthians 15:3-4', '1 Corinthians 15:20-22', '1 Peter 1:3'],
    otNtConnectionsEn: 'The Old Testament foresaw the resurrection: David declared in Psalm 16:10: "For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption." Jesus also pointed to Jonah 1:17 as a sign (Matthew 12:40). Christ is the "Firstfruits of them that slept" (1 Corinthians 15:20), guaranteeing that all believers will also be raised.',
    otNtConnectionsAm: 'ብሉይ ኪዳን ትንሣኤውን አስቀድሞ ተንብዮ ነበር፦ ዳዊት በመዝሙር 16፥10 "ነፍሴን በሲኦል አትተዋትምና፥ ቅዱስህንም መበስበስን ያይ ዘንድ አትሰጠውም" በማለት ተናገረ። ኢየሱስም የዮናስን ምልክት ጠቅሶ ነበር (ማቴ 12፥40)። ክርስቶስ ለሞቱት ሰዎች "የበኩራት ፍሬ" ሆኖ ተነሥቷል፤ በእርሱ የሚያምኑ ሁሉ እንደሚነሡ ያረጋግጣል (1 ቆሮ 15፥20)።',
    reflectionQuestionsEn: [
      'Because Christ is risen, how does that give you victory over the fear of death?',
      'What does Jesus’ statement "I am the resurrection and the life" (John 11:25) mean to you personally?',
    ],
    reflectionQuestionsAm: [
      'ክርስቶስ ከሞት ስለተነሣ፣ ይህ እውነት ከሞት ፍርሃት ነፃ የሚያወጣን እንዴት ነው?',
      'ኢየሱስ "ትንሣኤና ሕይወት እኔ ነኝ" (ዮሐ 11፥25) ሲል በግል ሕይወትዎ ምን ተስፋ ይሰጥዎታል?',
    ],
  },

  // --- TEACHINGS / TOPICS ---
  {
    id: 'forgiveness',
    aliasesEn: ['forgiveness', 'forgive', 'reconciliation'],
    aliasesAm: ['ይቅርታ', 'ይቅር'],
    titleEn: 'Forgiveness According to Scripture',
    titleAm: 'ይቅርታ በመጽሐፍ ቅዱስ ትምህርት መሠረት',
    testament: 'Both',
    summaryEn: 'Forgiveness is rooted in God’s holy and gracious character. Psalm 103:12 states: "As far as the east is from the west, so far hath he removed our transgressions from us." In the New Covenant, believers are commanded to forgive one another freely because God in Christ has forgiven them (Ephesians 4:32).',
    summaryAm: 'ይቅርታ በእግዚአብሔር ምሕረትና ጸጋ ላይ የተመሠረተ ነው። መዝሙር 103፥12 "ምሥራቅ ከምዕራብ እንደሚርቅ፥ እንዲሁ ኃጢአታችንን ከእኛ አራቀ" ይላል። በአዲስ ኪዳን ደግሞ እግዚአብሔር በክርስቶስ ይቅር እንዳለን እኛም እርስ በርሳችን ይቅር እንድንባባል ታዝዘናል (ኤፌ 4፥32)።',
    keyChapters: [
      { book: 19, chapter: 103, labelEn: 'Psalm 103 (God Who Forgives All Iniquities)', labelAm: 'መዝሙር 103 (ኃጢአትን ሁሉ ይቅር የሚል)' },
      { book: 40, chapter: 18, labelEn: 'Matthew 18 (The Unforgiving Servant Parable)', labelAm: 'ማቴዎስ 18 (ምሕረት የሌለው አገልጋይ ምሳሌ)' },
      { book: 49, chapter: 4, labelEn: 'Ephesians 4:31-32 (Forgiving as God Forgave You)', labelAm: 'ኤፌሶን 4:31-32 (እግዚአብሔር ይቅር እንዳላችሁ ይቅር ተባባሉ)' },
      { book: 62, chapter: 1, labelEn: '1 John 1:8-9 (Faithful and Just to Forgive)', labelAm: '1 ዮሐንስ 1:8-9 (ኃጢአታችንን ይቅር ሊለን የታመነ ነው)' },
    ],
    keyVerses: ['Matthew 6:14-15', 'Matthew 18:21-22', 'Ephesians 4:32', 'Colossians 3:13', '1 John 1:9'],
    otNtConnectionsEn: 'In the Old Testament, the Day of Atonement (Leviticus 16) foreshadowed the complete remission of sins through the blood of Christ. Hebrews 9:22 states: "without shedding of blood is no remission." Jesus shed His blood on the cross for the forgiveness of sins once for all (Matthew 26:28, Hebrews 10:12).',
    otNtConnectionsAm: 'በብሉይ ኪዳን የስርየት ቀን (ዘሌ 16) በክርስቶስ ደም ለሚገኘው ፍጹም የኃጢአት ስርየት ጥላ ነበር። ዕብራውያን 9፥22 "ያለ ደም ማፍሰስ ስርየት የለም" ይላል። ኢየሱስ ለብዙዎች የኃጢአት ስርየት ደሙን በመስቀል ላይ አፈሰሰ (ማቴ 26፥28)።',
    reflectionQuestionsEn: [
      'Is there someone God is calling you to forgive today as Christ forgave you?',
      'How does 1 John 1:9 assure you when you stumble and confess your sins to God?',
    ],
    reflectionQuestionsAm: [
      'ክርስቶስ ይቅር እንዳለዎት ዛሬ ይቅር እንዲሉ እግዚአብሔር የሚጠይቅዎት ሰው አለ?',
      '1 ዮሐንስ 1፥9 ኃጢአታችንን ብንናዘዝ ይቅር ሊለን የታመነና ጻድቅ መሆኑን ማወቅ ምን ዓይነት እረፍት ይሰጥዎታል?',
    ],
  },
  {
    id: 'faith',
    aliasesEn: ['faith', 'believing', 'trust'],
    aliasesAm: ['እምነት', 'ማመን'],
    titleEn: 'Faith According to Scripture',
    titleAm: 'እምነት በመጽሐፍ ቅዱስ ትምህርት መሠረት',
    testament: 'Both',
    summaryEn: 'Hebrews 11:1 defines faith: "Now faith is the substance of things hoped for, the evidence of things not seen." Hebrews 11:6 adds that without faith it is impossible to please God. Faith is not blind optimism; it is confident reliance upon God’s character and His written promises. Ephesians 2:8-9 teaches that salvation is by grace through faith, a gift of God.',
    summaryAm: 'ዕብራውያን 11፥1 "እምነትም ተስፋ ስለምናደርገው ነገር የሚያስረግጥ፥ የማናየውንም ነገር የሚያስረዳ ነው" በማለት ይተረጉመዋል። ዕብራውያን 11፥6 "ያለ እምነት ደግሞ እግዚአብሔርን ደስ ማሰኘት አይቻልም" ይላል። እምነት በእግዚአብሔር ማንነትና በተስፋው ቃል ላይ መደገፍ ነው። ኤፌሶን 2፥8-9 መዳን በጸጋ በእምነት እንደሆነ ያስተምራል።',
    keyChapters: [
      { book: 58, chapter: 11, labelEn: 'Hebrews 11 (The Great Hall of Faith)', labelAm: 'ዕብራውያን 11 (የታላላቆቹ የእምነት ሰዎች ምዕራፍ)' },
      { book: 45, chapter: 10, labelEn: 'Romans 10 (Faith Comes by Hearing the Word)', labelAm: 'ሮሜ 10 (እምነት ከመስማት ነው)' },
      { book: 59, chapter: 2, labelEn: 'James 2:14-26 (Living Faith & Works)', labelAm: 'ያዕቆብ 2:14-26 (ሕያው እምነትና ሥራ)' },
      { book: 49, chapter: 2, labelEn: 'Ephesians 2:8-10 (Saved by Grace Through Faith)', labelAm: 'ኤፌሶን 2:8-10 (በጸጋው በእምነት ድናችኋል)' },
    ],
    keyVerses: ['Hebrews 11:1', 'Hebrews 11:6', 'Romans 1:17', 'Romans 10:17', 'Ephesians 2:8-9', 'James 2:22'],
    otNtConnectionsEn: 'The core biblical doctrine of justification by faith was first revealed in the Old Testament: Habakkuk 2:4 proclaimed: "the just shall live by his faith." The Apostle Paul in Romans 1:17 and Galatians 3:11 takes this exact Old Testament verse as the foundation of the New Testament Gospel.',
    otNtConnectionsAm: 'በእምነት የመጽደቅ መጽሐፍ ቅዱሳዊ ትምህርት በመጀመሪያ በብሉይ ኪዳን ተገልጧል፦ ዕንባቆም 2፥4 "ጻድቅ ግን በእምነቱ በሕይወት ይኖራል" ተብሎ ተጽፏል። ሐዋርያው ጳውሎስ በሮሜ 1፥17 እና በገላትያ 3፥11 ላይ ይህንን የብሉይ ኪዳን ቃል የወንጌል እምብርት አድርጎ ይጠቅሰዋል።',
    reflectionQuestionsEn: [
      'Since faith comes by hearing the word of God (Romans 10:17), how can you increase your intake of Scripture?',
      'How does your faith show itself in active love and obedience according to James 2?',
    ],
    reflectionQuestionsAm: [
      'እምነት የእግዚአብሔርን ቃል ከመስማት የሚመጣ ከሆነ (ሮሜ 10፥17)፣ የመጽሐፍ ቅዱስ ንባብዎን እንዴት ያሳድጋሉ?',
      'በያዕቆብ 2 መሠረት እምነትዎ በተግባራዊ ፍቅርና በመታዘዝ የሚገለጠው እንዴት ነው?',
    ],
  },
  {
    id: 'love',
    aliasesEn: ['love', 'agape', 'charity'],
    aliasesAm: ['ፍቅር'],
    titleEn: 'Divine Love (Agape) According to Scripture',
    titleAm: 'ፍቅር በመጽሐፍ ቅዱስ መሠረት',
    testament: 'Both',
    summaryEn: '1 John 4:8 declares that "God is love." Biblical love is not merely an emotion, but a sacrificial commitment to the highest good of another. John 3:16 demonstrates that God so loved the world that He gave His only begotten Son. In 1 Corinthians 13, love is described as patient, kind, never failing, and greater than faith and hope.',
    summaryAm: '1 ዮሐንስ 4፥8 "እግዚአብሔር ፍቅር ነው" ይላል። መጽሐፍ ቅዱሳዊ ፍቅር ስሜት ብቻ ሳይሆን ራስን አሳልፎ የሚሰጥ መሥዋዕትነት ነው። ዮሐንስ 3፥16 "እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና" ይላል። 1 ቆሮንቶስ 13 ፍቅር ታጋሽ፣ ቸር፣ የማይቀናና ከሁሉ የሚበልጥ እንደሆነ ይገልጻል።',
    keyChapters: [
      { book: 46, chapter: 13, labelEn: '1 Corinthians 13 (The Love Chapter)', labelAm: '1 ቆሮንቶስ 13 (የፍቅር ታላቅ ምዕራፍ)' },
      { book: 62, chapter: 4, labelEn: '1 John 4:7-21 (God is Love)', labelAm: '1 ዮሐንስ 4:7-21 (እግዚአብሔር ፍቅር ነው)' },
      { book: 43, chapter: 13, labelEn: 'John 13:34-35 (A New Commandment: Love One Another)', labelAm: 'ዮሐንስ 13:34-35 (እርስ በርሳችሁ ተዋደዱ)' },
      { book: 45, chapter: 5, labelEn: 'Romans 5:6-8 (God Demonstrates His Love at the Cross)', labelAm: 'ሮሜ 5:6-8 (እግዚአብሔር ፍቅሩን በመስቀል ላይ አሳይቷል)' },
    ],
    keyVerses: ['John 3:16', 'Romans 5:8', '1 Corinthians 13:4-8', '1 Corinthians 13:13', '1 John 4:10', '1 John 4:19'],
    otNtConnectionsEn: 'The Great Commandment in Deuteronomy 6:5 ("Thou shalt love the Lord thy God with all thine heart") and Leviticus 19:18 ("Thou shalt love thy neighbour as thyself") were cited by Jesus in Matthew 22:37-40 as the two commandments on which hang all the Law and the Prophets.',
    otNtConnectionsAm: 'በዘዳግም 6፥5 "አምላክህን እግዚአብሔርን በፍጹም ልብህ ውደድ" እና በዘሌዋውያን 19፥18 "ባልንጀራህን እንደ ራስህ ውደድ" የተባሉት የብሉይ ኪዳን ትእዛዛት በኢየሱስ ክርስቶስ የማቴዎስ 22፥37-40 የሕግ ሁሉ ማጠቃለያ ሆነው ተሰጥተዋል።',
    reflectionQuestionsEn: [
      'How does knowing that God loved you while you were still a sinner (Romans 5:8) transform how you treat difficult people?',
      'Which characteristic of love in 1 Corinthians 13:4-7 do you need the Holy Spirit to develop in you today?',
    ],
    reflectionQuestionsAm: [
      'እኛ ገና ኃጢአተኞች ሳለን እግዚአብሔር እንደወደደን ማወቅ (ሮሜ 5፥8) ሌሎችን በምንይዝበት መንገድ ላይ ምን ለውጥ ያመጣል?',
      'በ1 ቆሮንቶስ 13፥4-7 ከተዘረዘሩት የፍቅር ባሕርያት መካከል ዛሬ በሕይወትዎ እንዲያድግ የሚፈልጉት የትኛው ነው?',
    ],
  },
]
