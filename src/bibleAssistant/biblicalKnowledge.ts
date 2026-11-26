/**
 * Canonical Biblical Index & Scripture Coordinate Catalog
 * Maps natural language queries (Amharic & English) to exact canonical Scripture locations
 * across ALL 66 books of the Bible.
 *
 * ZERO hardcoded answers: Only canonical book/chapter/verse coordinates.
 * All answers are synthesized dynamically from actual retrieved Scripture text!
 */

export interface CanonicalBiblicalTopic {
  id: string
  nameEn: string
  nameAm: string
  testament: 'OT' | 'NT' | 'Both'
  keywordsEn: string[]
  keywordsAm: string[]
  primaryPassages: {
    book: number
    chapter: number
    verseStart?: number
    verseEnd?: number
    descriptionEn?: string
    descriptionAm?: string
  }[]
  searchTerms: string[]
}

export const CANONICAL_TOPICS: CanonicalBiblicalTopic[] = [
  // ==========================================
  // OLD TESTAMENT FIGURES
  // ==========================================
  {
    id: 'adam_eve',
    nameEn: 'Adam and Eve',
    nameAm: 'አዳምና ሔዋን',
    testament: 'Both',
    keywordsEn: ['adam', 'eve', 'first man', 'garden of eden', 'fall of man'],
    keywordsAm: ['አዳም', 'ሔዋን', 'የመጀመሪያው ሰው', 'የኤደን ገነት'],
    primaryPassages: [
      { book: 1, chapter: 1, verseStart: 26, verseEnd: 31 },
      { book: 1, chapter: 2, verseStart: 7, verseEnd: 25 },
      { book: 1, chapter: 3, verseStart: 1, verseEnd: 24 },
      { book: 45, chapter: 5, verseStart: 12, verseEnd: 19, descriptionEn: 'Adam and Christ parallel', descriptionAm: 'አዳምና ክርስቶስ' },
      { book: 46, chapter: 15, verseStart: 21, verseEnd: 22, descriptionEn: 'In Adam all die, in Christ all made alive', descriptionAm: 'በአዳም ሁሉ እንደሚሞቱ በክርስቶስ ሁሉ ሕያዋን ይሆናሉ' },
    ],
    searchTerms: ['Adam', 'Eve', 'Eden', 'አዳም', 'ሔዋን', 'ኤደን'],
  },
  {
    id: 'noah',
    nameEn: 'Noah and the Ark',
    nameAm: 'ኖኅና መርከቡ',
    testament: 'Both',
    keywordsEn: ['noah', 'ark', 'flood', 'rainbow', 'covenant with noah'],
    keywordsAm: ['ኖኅ', 'መርከብ', 'የጥፋት ውኃ', 'ቀስተ ደመና'],
    primaryPassages: [
      { book: 1, chapter: 6, verseStart: 5, verseEnd: 22 },
      { book: 1, chapter: 7, verseStart: 1, verseEnd: 24 },
      { book: 1, chapter: 8, verseStart: 1, verseEnd: 22 },
      { book: 1, chapter: 9, verseStart: 8, verseEnd: 17, descriptionEn: 'Rainbow covenant', descriptionAm: 'የቀስተ ደመና ኪዳን' },
      { book: 58, chapter: 11, verseStart: 7, verseEnd: 7, descriptionEn: 'Noah by faith', descriptionAm: 'ኖኅ በእምነት' },
      { book: 60, chapter: 3, verseStart: 20, verseEnd: 21 },
    ],
    searchTerms: ['Noah', 'ark', 'flood', 'ኖኅ', 'መርከብ', 'የጥፋት ውኃ'],
  },
  {
    id: 'abraham',
    nameEn: 'Abraham (Father of Faith)',
    nameAm: 'አብርሃም (የእምነት አባት)',
    testament: 'Both',
    keywordsEn: ['abraham', 'abram', 'sarah', 'isaac', 'covenant', 'call of abraham'],
    keywordsAm: ['አብርሃም', 'አብራም', 'ሣራ', 'ይስሐቅ', 'የአብርሃም ኪዳን'],
    primaryPassages: [
      { book: 1, chapter: 12, verseStart: 1, verseEnd: 9 },
      { book: 1, chapter: 15, verseStart: 1, verseEnd: 6 },
      { book: 1, chapter: 17, verseStart: 1, verseEnd: 10 },
      { book: 1, chapter: 22, verseStart: 1, verseEnd: 18 },
      { book: 45, chapter: 4, verseStart: 1, verseEnd: 12, descriptionEn: 'Abraham justified by faith', descriptionAm: 'አብርሃም በእምነት ጸደቀ' },
      { book: 48, chapter: 3, verseStart: 6, verseEnd: 9 },
      { book: 58, chapter: 11, verseStart: 8, verseEnd: 19 },
    ],
    searchTerms: ['Abraham', 'Abram', 'covenant', 'አብርሃም', 'አብራም', 'ኪዳን'],
  },
  {
    id: 'joseph',
    nameEn: 'Joseph (Son of Jacob)',
    nameAm: 'ዮሴፍ (የያዕቆብ ልጅ)',
    testament: 'Both',
    keywordsEn: ['joseph', 'coat of many colors', 'egypt', 'pharaoh', 'dreams', 'potiphar'],
    keywordsAm: ['ዮሴፍ', 'የቀለመ ሸሚዝ', 'ግብፅ', 'ፈርዖን', 'ሕልም', 'ጲጥፋራ'],
    primaryPassages: [
      { book: 1, chapter: 37, verseStart: 1, verseEnd: 36 },
      { book: 1, chapter: 39, verseStart: 1, verseEnd: 23 },
      { book: 1, chapter: 41, verseStart: 1, verseEnd: 45 },
      { book: 1, chapter: 45, verseStart: 1, verseEnd: 15 },
      { book: 1, chapter: 50, verseStart: 15, verseEnd: 21 },
      { book: 44, chapter: 7, verseStart: 9, verseEnd: 14 },
      { book: 58, chapter: 11, verseStart: 22, verseEnd: 22 },
    ],
    searchTerms: ['Joseph', 'Egypt', 'dreams', 'ዮሴፍ', 'ግብፅ', 'ሕልም'],
  },
  {
    id: 'moses',
    nameEn: 'Moses the Prophet and Deliverer',
    nameAm: 'ሙሴ (ነቢይና ነፃ አውጪ)',
    testament: 'Both',
    keywordsEn: ['moses', 'burning bush', 'red sea', 'ten commandments', 'mount sinai', 'exodus', 'pharaoh'],
    keywordsAm: ['ሙሴ', 'የሚነደው ቍጥቋጦ', 'ቀይ ባሕር', 'አሥሩ ቃላት', 'ሲና ተራራ', 'ዘጸአት'],
    primaryPassages: [
      { book: 2, chapter: 3, verseStart: 1, verseEnd: 15 },
      { book: 2, chapter: 14, verseStart: 13, verseEnd: 31 },
      { book: 2, chapter: 20, verseStart: 1, verseEnd: 17 },
      { book: 5, chapter: 18, verseStart: 15, verseEnd: 19, descriptionEn: 'A Prophet like unto me', descriptionAm: 'እንደ እኔ ያለ ነቢይ' },
      { book: 5, chapter: 34, verseStart: 1, verseEnd: 12 },
      { book: 43, chapter: 1, verseStart: 17, verseEnd: 17 },
      { book: 58, chapter: 3, verseStart: 1, verseEnd: 6 },
    ],
    searchTerms: ['Moses', 'Sinai', 'burning bush', 'ሙሴ', 'ሲና', 'ቍጥቋጦ'],
  },
  {
    id: 'joshua',
    nameEn: 'Joshua and the Promised Land',
    nameAm: 'ኢያሱና የተስፋይቱ ምድር',
    testament: 'Both',
    keywordsEn: ['joshua', 'jericho', 'jordan river', 'promised land', 'canaan', 'be strong and of good courage'],
    keywordsAm: ['ኢያሱ', 'ኢያሪኮ', 'ዮርዳኖስ', 'የተስፋይቱ ምድር', 'በርታ ጠንክር'],
    primaryPassages: [
      { book: 6, chapter: 1, verseStart: 1, verseEnd: 9 },
      { book: 6, chapter: 3, verseStart: 1, verseEnd: 17 },
      { book: 6, chapter: 6, verseStart: 1, verseEnd: 21 },
      { book: 6, chapter: 24, verseStart: 14, verseEnd: 28 },
      { book: 58, chapter: 4, verseStart: 8, verseEnd: 11 },
    ],
    searchTerms: ['Joshua', 'Jericho', 'Jordan', 'ኢያሱ', 'ኢያሪኮ', 'ዮርዳኖስ'],
  },
  {
    id: 'gideon',
    nameEn: 'Gideon (Mighty Man of Valour)',
    nameAm: 'ጌዴዎን (ጽኑዕ ኃያል ሰው)',
    testament: 'Both',
    keywordsEn: ['gideon', 'jerubbaal', 'midianites', 'fleece', '300 men', 'trumpets and pitchers'],
    keywordsAm: ['ጌዴዎን', 'ይሩበኣል', 'ምድያማውያን', 'የበግ ጠጉር', '300 ሰዎች'],
    primaryPassages: [
      { book: 7, chapter: 6, verseStart: 11, verseEnd: 24 },
      { book: 7, chapter: 6, verseStart: 36, verseEnd: 40 },
      { book: 7, chapter: 7, verseStart: 1, verseEnd: 23 },
      { book: 58, chapter: 11, verseStart: 32, verseEnd: 34 },
    ],
    searchTerms: ['Gideon', 'fleece', 'Midian', 'ጌዴዎን', 'ምድያም', 'ጠጉር'],
  },
  {
    id: 'ruth',
    nameEn: 'Ruth and Boaz (The Kinsman Redeemer)',
    nameAm: 'ሩትና ቦዔዝ (ዋጅ ዘመድ)',
    testament: 'Both',
    keywordsEn: ['ruth', 'boaz', 'naomi', 'moab', 'gleaning', 'kinsman redeemer', 'lineage of david'],
    keywordsAm: ['ሩት', 'ቦዔዝ', 'ኑኃሚን', 'ሞዓብ', 'ቃርሚያ', 'የዳዊት ትውልድ'],
    primaryPassages: [
      { book: 8, chapter: 1, verseStart: 14, verseEnd: 18, descriptionEn: 'Ruth clings to Naomi', descriptionAm: 'ሩት ከኑኃሚን ጋር ተጣበቀች' },
      { book: 8, chapter: 2, verseStart: 10, verseEnd: 13, descriptionEn: 'Boaz shows kindness to Ruth', descriptionAm: 'ቦዔዝ ለሩት ቸርነት አደረገ' },
      { book: 8, chapter: 4, verseStart: 13, verseEnd: 17, descriptionEn: 'Birth of Obed, grandfather of David', descriptionAm: 'ኢዮቤድ ተወለደ (የዳዊት አያት)' },
      { book: 40, chapter: 1, verseStart: 5, verseEnd: 6, descriptionEn: 'Ruth in genealogy of Jesus', descriptionAm: 'ሩት በክርስቶስ የትውልድ ሐረግ ውስጥ' },
    ],
    searchTerms: ['Ruth', 'Boaz', 'Naomi', 'Obed', 'ሩት', 'ቦዔዝ', 'ኑኃሚን', 'ኢዮቤድ'],
  },
  {
    id: 'david',
    nameEn: 'David (King of Israel)',
    nameAm: 'ዳዊት (የእስራኤል ንጉሥ)',
    testament: 'Both',
    keywordsEn: ['david', 'goliath', 'shepherd', 'psalms', 'saul', 'jonathan', 'davidic covenant'],
    keywordsAm: ['ዳዊት', 'ጎልያድ', 'እረኛ', 'መዝሙር', 'ሳኦል', 'ዮናታን', 'የዳዊት ኪዳን'],
    primaryPassages: [
      { book: 9, chapter: 16, verseStart: 1, verseEnd: 13 },
      { book: 9, chapter: 17, verseStart: 32, verseEnd: 51 },
      { book: 10, chapter: 7, verseStart: 11, verseEnd: 17, descriptionEn: 'God’s everlasting covenant with David', descriptionAm: 'እግዚአብሔር ከዳዊት ጋር የገባው ዘላለማዊ ኪዳን' },
      { book: 19, chapter: 23, verseStart: 1, verseEnd: 6 },
      { book: 19, chapter: 51, verseStart: 1, verseEnd: 12 },
      { book: 44, chapter: 2, verseStart: 29, verseEnd: 32 },
    ],
    searchTerms: ['David', 'Goliath', 'Psalms', 'ዳዊት', 'ጎልያድ', 'መዝሙር'],
  },
  {
    id: 'elijah',
    nameEn: 'Elijah the Prophet',
    nameAm: 'ነቢዩ ኤልያስ',
    testament: 'Both',
    keywordsEn: ['elijah', 'elias', 'mount carmel', 'baal', 'prophets of baal', 'chariot of fire', 'still small voice'],
    keywordsAm: ['ኤልያስ', 'ቀርሜሎስ', 'በኣል', 'የእሳት ሰረገላ', 'ቀጭን ድምፅ'],
    primaryPassages: [
      { book: 11, chapter: 17, verseStart: 1, verseEnd: 24 },
      { book: 11, chapter: 18, verseStart: 20, verseEnd: 39 },
      { book: 11, chapter: 19, verseStart: 9, verseEnd: 18 },
      { book: 12, chapter: 2, verseStart: 9, verseEnd: 14 },
      { book: 39, chapter: 4, verseStart: 5, verseEnd: 6 },
      { book: 40, chapter: 17, verseStart: 1, verseEnd: 13 },
      { book: 59, chapter: 5, verseStart: 17, verseEnd: 18 },
    ],
    searchTerms: ['Elijah', 'Carmel', 'chariot of fire', 'ኤልያስ', 'ቀርሜሎስ', 'የእሳት ሰረገላ'],
  },
  {
    id: 'elisha',
    nameEn: 'Elisha the Prophet',
    nameAm: 'ነቢዩ ኤልሳዕ',
    testament: 'OT',
    keywordsEn: ['elisha', 'double portion', 'naaman', 'shunammite', 'axe head', 'chariots of fire'],
    keywordsAm: ['ኤልሳዕ', 'እጥፍ መንፈስ', 'ንዕማን', 'ሱነማዊት', 'ምሳር'],
    primaryPassages: [
      { book: 12, chapter: 2, verseStart: 9, verseEnd: 15 },
      { book: 12, chapter: 4, verseStart: 1, verseEnd: 37 },
      { book: 12, chapter: 5, verseStart: 1, verseEnd: 19 },
      { book: 12, chapter: 6, verseStart: 8, verseEnd: 18 },
    ],
    searchTerms: ['Elisha', 'Naaman', 'ኤልሳዕ', 'ንዕማን'],
  },
  {
    id: 'josiah',
    nameEn: 'King Josiah (The Reformation of the Word)',
    nameAm: 'ንጉሥ ኢዮስያስ (የቃሉ ተሃድሶ)',
    testament: 'OT',
    keywordsEn: ['josiah', 'book of the law', 'temple repair', 'hilkiah', 'passover', 'reformation'],
    keywordsAm: ['ኢዮስያስ', 'የሕጉ መጽሐፍ', 'የቤተ መቅደስ ጥገና', 'ፋሲካ', 'ተሃድሶ'],
    primaryPassages: [
      { book: 12, chapter: 22, verseStart: 1, verseEnd: 20 },
      { book: 12, chapter: 23, verseStart: 1, verseEnd: 25 },
      { book: 14, chapter: 34, verseStart: 1, verseEnd: 21 },
    ],
    searchTerms: ['Josiah', 'book of the law', 'Hilkiah', 'ኢዮስያስ', 'የሕጉ መጽሐፍ'],
  },
  {
    id: 'nehemiah',
    nameEn: 'Nehemiah (Rebuilding the Walls)',
    nameAm: 'ነህምያ (የቅጥር አደሳ)',
    testament: 'OT',
    keywordsEn: ['nehemiah', 'jerusalem walls', 'sanballat', 'tobiah', 'rebuilding', 'cupbearer'],
    keywordsAm: ['ነህምያ', 'የኢየሩሳሌም ቅጥር', 'ሰንባላት', 'ጦቢያ', 'መጠጥ አቅራቢ'],
    primaryPassages: [
      { book: 16, chapter: 1, verseStart: 1, verseEnd: 11 },
      { book: 16, chapter: 2, verseStart: 1, verseEnd: 18 },
      { book: 16, chapter: 4, verseStart: 1, verseEnd: 23 },
      { book: 16, chapter: 6, verseStart: 15, verseEnd: 16 },
      { book: 16, chapter: 8, verseStart: 1, verseEnd: 12 },
    ],
    searchTerms: ['Nehemiah', 'wall', 'Jerusalem', 'ነህምያ', 'ቅጥር', 'ኢየሩሳሌም'],
  },
  {
    id: 'esther',
    nameEn: 'Queen Esther and Mordecai',
    nameAm: 'አስቴርና መርዶክዮስ',
    testament: 'OT',
    keywordsEn: ['esther', 'mordecai', 'haman', 'ahasuerus', 'purim', 'for such a time as this'],
    keywordsAm: ['አስቴር', 'መርዶክዮስ', 'ሐማ', 'አሀሽዌሮስ', 'ፉሪም', 'እንደዚህ ላለው ጊዜ'],
    primaryPassages: [
      { book: 17, chapter: 2, verseStart: 15, verseEnd: 20 },
      { book: 17, chapter: 4, verseStart: 10, verseEnd: 17 },
      { book: 17, chapter: 7, verseStart: 1, verseEnd: 10 },
      { book: 17, chapter: 9, verseStart: 20, verseEnd: 32 },
    ],
    searchTerms: ['Esther', 'Mordecai', 'Haman', 'አስቴር', 'መርዶክዮስ', 'ሐማ'],
  },
  {
    id: 'job',
    nameEn: 'Job (Perseverance and Trust in God)',
    nameAm: 'ኢዮብ (ጽናትና በእግዚአብሔር መታመን)',
    testament: 'Both',
    keywordsEn: ['job', 'suffering', 'perseverance', 'whirlwind', 'redeemer liveth', 'patience of job'],
    keywordsAm: ['ኢዮብ', 'መከራ', 'ትዕግሥት', 'ተዋጅ', 'አውሎ ነፋስ'],
    primaryPassages: [
      { book: 18, chapter: 1, verseStart: 13, verseEnd: 22 },
      { book: 18, chapter: 19, verseStart: 23, verseEnd: 27 },
      { book: 18, chapter: 38, verseStart: 1, verseEnd: 18 },
      { book: 18, chapter: 42, verseStart: 1, verseEnd: 12 },
      { book: 59, chapter: 5, verseStart: 11, verseEnd: 11 },
    ],
    searchTerms: ['Job', 'whirlwind', 'redeemer', 'ኢዮብ', 'መከራ', 'ተዋጅ'],
  },
  {
    id: 'daniel',
    nameEn: 'Daniel the Prophet',
    nameAm: 'ነቢዩ ዳንኤል',
    testament: 'Both',
    keywordsEn: ['daniel', 'lions den', 'shadrach', 'meshach', 'abednego', 'fiery furnace', 'nebuchadnezzar', 'belshazzar', 'writing on wall'],
    keywordsAm: ['ዳንኤል', 'የአንበሶች ጉድጓድ', 'ሲድራቅ', 'ሚሳቅ', 'አብደናጎ', 'የእሳት እቶን', 'ናቡከደነፆር'],
    primaryPassages: [
      { book: 27, chapter: 1, verseStart: 8, verseEnd: 17 },
      { book: 27, chapter: 3, verseStart: 16, verseEnd: 28 },
      { book: 27, chapter: 6, verseStart: 10, verseEnd: 23 },
      { book: 27, chapter: 7, verseStart: 13, verseEnd: 14, descriptionEn: 'Son of Man kingdom', descriptionAm: 'የሰው ልጅ ዘላለማዊ መንግሥት' },
      { book: 40, chapter: 24, verseStart: 15, verseEnd: 15 },
      { book: 58, chapter: 11, verseStart: 33, verseEnd: 33 },
    ],
    searchTerms: ['Daniel', 'lions', 'furnace', 'ዳንኤል', 'አንበሳ', 'እቶን'],
  },

  // ==========================================
  // NEW TESTAMENT FIGURES & APOSTLES
  // ==========================================
  {
    id: 'john_baptist',
    nameEn: 'John the Baptist (The Forerunner)',
    nameAm: 'መጥምቁ ዮሐንስ (መንገድ ጠራጊው)',
    testament: 'Both',
    keywordsEn: ['john the baptist', 'forerunner', 'voice in wilderness', 'baptism of jesus', 'repentance'],
    keywordsAm: ['መጥምቁ ዮሐንስ', 'ዮሐንስ መጥምቅ', 'የምድረ በዳ ድምፅ', 'የኢየሱስ ጥምቀት'],
    primaryPassages: [
      { book: 23, chapter: 40, verseStart: 3, verseEnd: 5 },
      { book: 39, chapter: 3, verseStart: 1, verseEnd: 3 },
      { book: 40, chapter: 3, verseStart: 1, verseEnd: 17 },
      { book: 42, chapter: 1, verseStart: 13, verseEnd: 17 },
      { book: 43, chapter: 1, verseStart: 19, verseEnd: 34 },
    ],
    searchTerms: ['John the Baptist', 'wilderness', 'baptism', 'መጥምቁ ዮሐንስ', 'ጥምቀት', 'ምድረ በዳ'],
  },
  {
    id: 'jesus_christ',
    nameEn: 'Jesus Christ the Messiah',
    nameAm: 'ኢየሱስ ክርስቶስ መሲሑ',
    testament: 'Both',
    keywordsEn: ['jesus', 'christ', 'messiah', 'son of god', 'savior', 'gospel', 'cross', 'resurrection'],
    keywordsAm: ['ኢየሱስ', 'ክርስቶስ', 'መሲሕ', 'የእግዚአብሔር ልጅ', 'አዳኝ', 'መስቀል', 'ትንሣኤ'],
    primaryPassages: [
      { book: 23, chapter: 53, verseStart: 1, verseEnd: 12, descriptionEn: 'Suffering Servant prophecy', descriptionAm: 'የመከራው አገልጋይ ትንቢት' },
      { book: 40, chapter: 5, verseStart: 1, verseEnd: 12, descriptionEn: 'Sermon on the Mount', descriptionAm: 'የተራራው ስብከት' },
      { book: 43, chapter: 1, verseStart: 1, verseEnd: 14, descriptionEn: 'The Word became flesh', descriptionAm: 'ቃሉ ሥጋ ሆነ' },
      { book: 43, chapter: 3, verseStart: 14, verseEnd: 18 },
      { book: 43, chapter: 14, verseStart: 6, verseEnd: 6 },
      { book: 46, chapter: 15, verseStart: 1, verseEnd: 8, descriptionEn: 'Death and Resurrection according to Scriptures', descriptionAm: 'ሞትና ትንሣኤ እንደ መጻሕፍት ቃል' },
      { book: 51, chapter: 1, verseStart: 15, verseEnd: 20 },
      { book: 58, chapter: 1, verseStart: 1, verseEnd: 4 },
      { book: 66, chapter: 1, verseStart: 17, verseEnd: 18 },
    ],
    searchTerms: ['Jesus', 'Christ', 'Messiah', 'ኢየሱስ', 'ክርስቶስ', 'መሲሕ'],
  },
  {
    id: 'peter',
    nameEn: 'Peter the Apostle (Cephas)',
    nameAm: 'ሐዋርያው ጴጥሮስ (ኬፋ)',
    testament: 'NT',
    keywordsEn: ['peter', 'simon peter', 'cephas', 'keys of kingdom', 'denial', 'feed my sheep', 'pentecost sermon'],
    keywordsAm: ['ጴጥሮስ', 'ስምዖን ጴጥሮስ', 'ኬፋ', 'የመንግሥተ ሰማያት መክፈቻ', 'ግልገሎቼን አሰማራ'],
    primaryPassages: [
      { book: 40, chapter: 16, verseStart: 13, verseEnd: 19 },
      { book: 42, chapter: 22, verseStart: 54, verseEnd: 62 },
      { book: 43, chapter: 21, verseStart: 15, verseEnd: 19 },
      { book: 44, chapter: 2, verseStart: 14, verseEnd: 41 },
      { book: 44, chapter: 10, verseStart: 34, verseEnd: 43 },
      { book: 60, chapter: 1, verseStart: 3, verseEnd: 9 },
    ],
    searchTerms: ['Peter', 'Simon', 'Cephas', 'ጴጥሮስ', 'ስምዖን', 'ኬፋ'],
  },
  {
    id: 'paul',
    nameEn: 'Paul the Apostle (Saul of Tarsus)',
    nameAm: 'ሐዋርያው ጳውሎስ (የጠርሴሱ ሳውል)',
    testament: 'NT',
    keywordsEn: ['paul', 'saul', 'tarsus', 'damascus', 'apostle to gentiles', 'epistles'],
    keywordsAm: ['ጳውሎስ', 'ሳውል', 'ጠርሴስ', 'ደማስቆ', 'የአሕዛብ ሐዋርያ', 'መልእክታት'],
    primaryPassages: [
      { book: 44, chapter: 9, verseStart: 1, verseEnd: 22 },
      { book: 45, chapter: 1, verseStart: 16, verseEnd: 17 },
      { book: 45, chapter: 8, verseStart: 28, verseEnd: 39 },
      { book: 48, chapter: 2, verseStart: 20, verseEnd: 20 },
      { book: 50, chapter: 3, verseStart: 7, verseEnd: 14 },
      { book: 55, chapter: 4, verseStart: 6, verseEnd: 8 },
    ],
    searchTerms: ['Paul', 'Saul', 'Damascus', 'ጳውሎስ', 'ሳውል', 'ደማስቆ'],
  },
  {
    id: 'stephen',
    nameEn: 'Stephen (First Christian Martyr)',
    nameAm: 'እስጢፋኖስ (የመጀመሪያው ሰማዕት)',
    testament: 'NT',
    keywordsEn: ['stephen', 'martyr', 'stoning', 'full of holy spirit', 'acts 7 sermon'],
    keywordsAm: ['እስጢፋኖስ', 'ሰማዕት', 'በድንጋይ መወገር', 'መንፈስ ቅዱስ'],
    primaryPassages: [
      { book: 44, chapter: 6, verseStart: 8, verseEnd: 15 },
      { book: 44, chapter: 7, verseStart: 51, verseEnd: 60 },
    ],
    searchTerms: ['Stephen', 'martyr', 'እስጢፋኖስ', 'ሰማዕት'],
  },

  // ==========================================
  // CORE BIBLICAL TOPICS & DOCTRINES
  // ==========================================
  {
    id: 'forgiveness',
    nameEn: 'Forgiveness and Reconciliation',
    nameAm: 'ይቅርታና እርቅ በመጽሐፍ ቅዱስ',
    testament: 'Both',
    keywordsEn: ['forgiveness', 'forgive', 'reconciliation', 'remission of sins', 'mercy', 'pardon'],
    keywordsAm: ['ይቅርታ', 'ይቅር', 'እርቅ', 'የኃጢአት ስርየት', 'ምሕረት'],
    primaryPassages: [
      { book: 19, chapter: 103, verseStart: 8, verseEnd: 13 },
      { book: 23, chapter: 1, verseStart: 18, verseEnd: 18 },
      { book: 40, chapter: 6, verseStart: 12, verseEnd: 15 },
      { book: 40, chapter: 18, verseStart: 21, verseEnd: 35 },
      { book: 49, chapter: 4, verseStart: 31, verseEnd: 32 },
      { book: 51, chapter: 3, verseStart: 12, verseEnd: 14 },
      { book: 62, chapter: 1, verseStart: 8, verseEnd: 9 },
    ],
    searchTerms: ['forgiveness', 'forgive', 'sins', 'ይቅርታ', 'ስርየት', 'ምሕረት'],
  },
  {
    id: 'faith',
    nameEn: 'Faith (According to Scripture)',
    nameAm: 'እምነት በመጽሐፍ ቅዱስ መሠረት',
    testament: 'Both',
    keywordsEn: ['faith', 'believe', 'trust in god', 'righteous shall live by faith', 'assurance', 'substance'],
    keywordsAm: ['እምነት', 'ማመን', 'በእግዚአብሔር መታመን', 'ጻድቅ በእምነት ይኖራል'],
    primaryPassages: [
      { book: 1, chapter: 15, verseStart: 6, verseEnd: 6 },
      { book: 35, chapter: 2, verseStart: 4, verseEnd: 4, descriptionEn: 'The just shall live by faith', descriptionAm: 'ጻድቅ በእምነቱ ይኖራል' },
      { book: 45, chapter: 10, verseStart: 9, verseEnd: 17 },
      { book: 49, chapter: 2, verseStart: 8, verseEnd: 9 },
      { book: 58, chapter: 11, verseStart: 1, verseEnd: 6 },
      { book: 59, chapter: 2, verseStart: 14, verseEnd: 26 },
    ],
    searchTerms: ['faith', 'believe', 'trust', 'እምነት', 'ማመን', 'መታመን'],
  },
  {
    id: 'love',
    nameEn: 'God’s Love and Brotherly Love',
    nameAm: 'የእግዚአብሔር ፍቅርና የወንድማማች ፍቅር',
    testament: 'Both',
    keywordsEn: ['love', 'agape', 'god is love', 'great commandment', 'charity', 'compassion'],
    keywordsAm: ['ፍቅር', 'እግዚአብሔር ፍቅር ነው', 'ዋነኛ ትእዛዝ', 'ፍቅር ታጋሽ ነው'],
    primaryPassages: [
      { book: 5, chapter: 6, verseStart: 4, verseEnd: 5 },
      { book: 3, chapter: 19, verseStart: 18, verseEnd: 18 },
      { book: 40, chapter: 22, verseStart: 36, verseEnd: 40 },
      { book: 43, chapter: 3, verseStart: 16, verseEnd: 16 },
      { book: 43, chapter: 13, verseStart: 34, verseEnd: 35 },
      { book: 45, chapter: 5, verseStart: 6, verseEnd: 8 },
      { book: 46, chapter: 13, verseStart: 1, verseEnd: 13 },
      { book: 62, chapter: 4, verseStart: 7, verseEnd: 21 },
    ],
    searchTerms: ['love', 'commandment', 'ፍቅር', 'ትእዛዝ', 'አጋፔ'],
  },
  {
    id: 'salvation',
    nameEn: 'Salvation and Grace',
    nameAm: 'መዳንና ጸጋ',
    testament: 'Both',
    keywordsEn: ['salvation', 'saved', 'grace', 'redemption', 'born again', 'eternal life'],
    keywordsAm: ['መዳን', 'ደኅንነት', 'ጸጋ', 'ቤዛነት', 'ዳግመኛ መወለድ', 'የዘላለም ሕይወት'],
    primaryPassages: [
      { book: 23, chapter: 53, verseStart: 4, verseEnd: 6 },
      { book: 43, chapter: 3, verseStart: 3, verseEnd: 8 },
      { book: 44, chapter: 4, verseStart: 12, verseEnd: 12 },
      { book: 44, chapter: 16, verseStart: 30, verseEnd: 31 },
      { book: 45, chapter: 3, verseStart: 21, verseEnd: 26 },
      { book: 45, chapter: 6, verseStart: 23, verseEnd: 23 },
      { book: 49, chapter: 2, verseStart: 1, verseEnd: 10 },
      { book: 56, chapter: 3, verseStart: 4, verseEnd: 7 },
    ],
    searchTerms: ['salvation', 'saved', 'grace', 'መዳን', 'ደኅንነት', 'ጸጋ'],
  },
  {
    id: 'prayer',
    nameEn: 'Prayer and Intercession',
    nameAm: 'ጸሎትና ምልጃ',
    testament: 'Both',
    keywordsEn: ['prayer', 'pray', 'lords prayer', 'supplication', 'intercession', 'ask and it shall be given'],
    keywordsAm: ['ጸሎት', 'መጸለይ', 'አባታችን ሆይ', 'ምልጃ', 'ለምኑ ይሰጣችኋል'],
    primaryPassages: [
      { book: 14, chapter: 7, verseStart: 14, verseEnd: 14 },
      { book: 19, chapter: 5, verseStart: 1, verseEnd: 3 },
      { book: 27, chapter: 9, verseStart: 3, verseEnd: 19 },
      { book: 40, chapter: 6, verseStart: 5, verseEnd: 15 },
      { book: 40, chapter: 7, verseStart: 7, verseEnd: 11 },
      { book: 50, chapter: 4, verseStart: 6, verseEnd: 7 },
      { book: 52, chapter: 5, verseStart: 16, verseEnd: 18 },
      { book: 59, chapter: 5, verseStart: 13, verseEnd: 16 },
    ],
    searchTerms: ['prayer', 'pray', 'ጸሎት', 'መጸለይ'],
  },
  {
    id: 'repentance',
    nameEn: 'Repentance and Turning to God',
    nameAm: 'ንስሐና ወደ እግዚአብሔር መመለስ',
    testament: 'Both',
    keywordsEn: ['repentance', 'repent', 'turn', 'confession', 'broken heart', 'contrite spirit'],
    keywordsAm: ['ንስሐ', 'መመለስ', 'የተሰበረ ልብ', 'መናዘዝ'],
    primaryPassages: [
      { book: 19, chapter: 51, verseStart: 1, verseEnd: 17 },
      { book: 23, chapter: 55, verseStart: 6, verseEnd: 7 },
      { book: 26, chapter: 18, verseStart: 30, verseEnd: 32 },
      { book: 29, chapter: 2, verseStart: 12, verseEnd: 13 },
      { book: 40, chapter: 4, verseStart: 17, verseEnd: 17 },
      { book: 42, chapter: 15, verseStart: 11, verseEnd: 24, descriptionEn: 'Prodigal son', descriptionAm: 'የጠፋው ልጅ' },
      { book: 44, chapter: 3, verseStart: 19, verseEnd: 20 },
      { book: 47, chapter: 7, verseStart: 9, verseEnd: 10 },
    ],
    searchTerms: ['repentance', 'repent', 'ንስሐ', 'መመለስ'],
  },
  {
    id: 'resurrection_eternity',
    nameEn: 'Resurrection and Eternal Life',
    nameAm: 'ትንሣኤና የዘላለም ሕይወት',
    testament: 'Both',
    keywordsEn: ['resurrection', 'eternal life', 'heaven', 'new jerusalem', 'life after death', 'second coming'],
    keywordsAm: ['ትንሣኤ', 'የዘላለም ሕይወት', 'መንግሥተ ሰማያት', 'አዲሲቱ ኢየሩሳሌም', 'ዳግም ምጽአት'],
    primaryPassages: [
      { book: 27, chapter: 12, verseStart: 1, verseEnd: 3 },
      { book: 43, chapter: 5, verseStart: 24, verseEnd: 29 },
      { book: 43, chapter: 11, verseStart: 25, verseEnd: 27 },
      { book: 46, chapter: 15, verseStart: 12, verseEnd: 57 },
      { book: 52, chapter: 4, verseStart: 13, verseEnd: 18 },
      { book: 66, chapter: 21, verseStart: 1, verseEnd: 7 },
      { book: 66, chapter: 22, verseStart: 1, verseEnd: 5 },
    ],
    searchTerms: ['resurrection', 'eternal life', 'ትንሣኤ', 'የዘላለም ሕይወት'],
  },
]

/**
 * Searches the canonical catalog for relevant Scripture coordinates without any canned text.
 */
export function findCanonicalTopics(query: string): CanonicalBiblicalTopic[] {
  const q = query.toLowerCase().trim()
  const results: CanonicalBiblicalTopic[] = []

  for (const topic of CANONICAL_TOPICS) {
    let matchScore = 0

    // English keywords
    for (const kw of topic.keywordsEn) {
      if (q.includes(kw.toLowerCase())) matchScore += 3
    }
    // Amharic keywords
    for (const kw of topic.keywordsAm) {
      if (q.includes(kw)) matchScore += 3
    }
    // Search terms
    for (const st of topic.searchTerms) {
      if (q.includes(st.toLowerCase())) matchScore += 2
    }

    if (matchScore > 0) {
      results.push(topic)
    }
  }

  return results
}
