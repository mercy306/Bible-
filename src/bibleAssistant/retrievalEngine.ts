import type { BibleReference, BibleVerse, CrossRefLink } from './types'

// Complete Canonical Book Mapping (1..66)
export interface CanonicalBook {
  nr: number
  testament: 'OT' | 'NT'
  nameEn: string
  nameAm: string
  shortEn: string
  shortAm: string
  chapters: number
}

export const CANONICAL_BOOKS: CanonicalBook[] = [
  // Old Testament (1 - 39)
  { nr: 1, testament: 'OT', nameEn: 'Genesis', nameAm: 'ኦሪት ዘፍጥረት', shortEn: 'Gen', shortAm: 'ዘፍ', chapters: 50 },
  { nr: 2, testament: 'OT', nameEn: 'Exodus', nameAm: 'ኦሪት ዘጸአት', shortEn: 'Exo', shortAm: 'ዘጸ', chapters: 40 },
  { nr: 3, testament: 'OT', nameEn: 'Leviticus', nameAm: 'ኦሪት ዘሌዋውያን', shortEn: 'Lev', shortAm: 'ዘሌ', chapters: 27 },
  { nr: 4, testament: 'OT', nameEn: 'Numbers', nameAm: 'ኦሪት ዘኍልቍ', shortEn: 'Num', shortAm: 'ዘኍ', chapters: 36 },
  { nr: 5, testament: 'OT', nameEn: 'Deuteronomy', nameAm: 'ኦሪት ዘዳግም', shortEn: 'Deut', shortAm: 'ዘዳ', chapters: 34 },
  { nr: 6, testament: 'OT', nameEn: 'Joshua', nameAm: 'መጽሐፈ ኢያሱ ወልደ ነዌ', shortEn: 'Josh', shortAm: 'ኢያ', chapters: 24 },
  { nr: 7, testament: 'OT', nameEn: 'Judges', nameAm: 'መጽሐፈ መሣፍንት', shortEn: 'Judg', shortAm: 'መሳ', chapters: 21 },
  { nr: 8, testament: 'OT', nameEn: 'Ruth', nameAm: 'መጽሐፈ ሩት', shortEn: 'Ruth', shortAm: 'ሩት', chapters: 4 },
  { nr: 9, testament: 'OT', nameEn: '1 Samuel', nameAm: 'መጽሐፈ ሳሙኤል ቀዳማዊ', shortEn: '1Sam', shortAm: '1ሳሙ', chapters: 31 },
  { nr: 10, testament: 'OT', nameEn: '2 Samuel', nameAm: 'መጽሐፈ ሳሙኤል ካልዕ', shortEn: '2Sam', shortAm: '2ሳሙ', chapters: 24 },
  { nr: 11, testament: 'OT', nameEn: '1 Kings', nameAm: 'መጽሐፈ ነገሥት ቀዳማዊ', shortEn: '1Kgs', shortAm: '1ነገ', chapters: 22 },
  { nr: 12, testament: 'OT', nameEn: '2 Kings', nameAm: 'መጽሐፈ ነገሥት ካልዕ', shortEn: '2Kgs', shortAm: '2ነገ', chapters: 25 },
  { nr: 13, testament: 'OT', nameEn: '1 Chronicles', nameAm: 'መጽሐፈ ዜና መዋዕል ቀዳማዊ', shortEn: '1Chr', shortAm: '1ዜና', chapters: 29 },
  { nr: 14, testament: 'OT', nameEn: '2 Chronicles', nameAm: 'መጽሐፈ ዜና መዋዕል ካልዕ', shortEn: '2Chr', shortAm: '2ዜና', chapters: 36 },
  { nr: 15, testament: 'OT', nameEn: 'Ezra', nameAm: 'መጽሐፈ ዕዝራ', shortEn: 'Ezra', shortAm: 'ዕዝ', chapters: 10 },
  { nr: 16, testament: 'OT', nameEn: 'Nehemiah', nameAm: 'መጽሐፈ ነህምያ', shortEn: 'Neh', shortAm: 'ነህ', chapters: 13 },
  { nr: 17, testament: 'OT', nameEn: 'Esther', nameAm: 'መጽሐፈ አስቴር', shortEn: 'Esth', shortAm: 'አስ', chapters: 10 },
  { nr: 18, testament: 'OT', nameEn: 'Job', nameAm: 'መጽሐፈ ኢዮብ', shortEn: 'Job', shortAm: 'ኢዮ', chapters: 42 },
  { nr: 19, testament: 'OT', nameEn: 'Psalms', nameAm: 'መዝሙረ ዳዊት', shortEn: 'Ps', shortAm: 'መዝ', chapters: 150 },
  { nr: 20, testament: 'OT', nameEn: 'Proverbs', nameAm: 'መጽሐፈ ምሳሌ', shortEn: 'Prov', shortAm: 'ምሳ', chapters: 31 },
  { nr: 21, testament: 'OT', nameEn: 'Ecclesiastes', nameAm: 'መጽሐፈ መክብብ', shortEn: 'Eccl', shortAm: 'መክ', chapters: 12 },
  { nr: 22, testament: 'OT', nameEn: 'Song of Solomon', nameAm: 'መኃልየ መኃልይ ዘሰሎሞን', shortEn: 'Song', shortAm: 'መኃ', chapters: 8 },
  { nr: 23, testament: 'OT', nameEn: 'Isaiah', nameAm: 'ትንቢተ ኢሳይያስ', shortEn: 'Isa', shortAm: 'ኢሳ', chapters: 66 },
  { nr: 24, testament: 'OT', nameEn: 'Jeremiah', nameAm: 'ትንቢተ ኤርምያስ', shortEn: 'Jer', shortAm: 'ኤር', chapters: 52 },
  { nr: 25, testament: 'OT', nameEn: 'Lamentations', nameAm: 'ሰቆቃወ ኤርምያስ', shortEn: 'Lam', shortAm: 'ሰቆ', chapters: 5 },
  { nr: 26, testament: 'OT', nameEn: 'Ezekiel', nameAm: 'ትንቢተ ሕዝቅኤል', shortEn: 'Ezek', shortAm: 'ሕዝ', chapters: 48 },
  { nr: 27, testament: 'OT', nameEn: 'Daniel', nameAm: 'ትንቢተ ዳንኤል', shortEn: 'Dan', shortAm: 'ዳን', chapters: 12 },
  { nr: 28, testament: 'OT', nameEn: 'Hosea', nameAm: 'ትንቢተ ሆሴዕ', shortEn: 'Hos', shortAm: 'ሆሴ', chapters: 14 },
  { nr: 29, testament: 'OT', nameEn: 'Joel', nameAm: 'ትንቢተ ኢዮኤል', shortEn: 'Joel', shortAm: 'ኢዮኤ', chapters: 3 },
  { nr: 30, testament: 'OT', nameEn: 'Amos', nameAm: 'ትንቢተ አሞጽ', shortEn: 'Amos', shortAm: 'አሞ', chapters: 9 },
  { nr: 31, testament: 'OT', nameEn: 'Obadiah', nameAm: 'ትንቢተ አብድዩ', shortEn: 'Obad', shortAm: 'አብ', chapters: 1 },
  { nr: 32, testament: 'OT', nameEn: 'Jonah', nameAm: 'ትንቢተ ዮናስ', shortEn: 'Jonah', shortAm: 'ዮና', chapters: 4 },
  { nr: 33, testament: 'OT', nameEn: 'Micah', nameAm: 'ትንቢተ ሚክያስ', shortEn: 'Mic', shortAm: 'ሚክ', chapters: 7 },
  { nr: 34, testament: 'OT', nameEn: 'Nahum', nameAm: 'ትንቢተ ናሆም', shortEn: 'Nah', shortAm: 'ናሆ', chapters: 3 },
  { nr: 35, testament: 'OT', nameEn: 'Habakkuk', nameAm: 'ትንቢተ ዕንባቆም', shortEn: 'Hab', shortAm: 'ዕን', chapters: 3 },
  { nr: 36, testament: 'OT', nameEn: 'Zephaniah', nameAm: 'ትንቢተ ሶፎንያስ', shortEn: 'Zeph', shortAm: 'ሶፎ', chapters: 3 },
  { nr: 37, testament: 'OT', nameEn: 'Haggai', nameAm: 'ትንቢተ ሐጌ', shortEn: 'Hag', shortAm: 'ሐጌ', chapters: 2 },
  { nr: 38, testament: 'OT', nameEn: 'Zechariah', nameAm: 'ትንቢተ ዘካርያስ', shortEn: 'Zech', shortAm: 'ዘካ', chapters: 14 },
  { nr: 39, testament: 'OT', nameEn: 'Malachi', nameAm: 'ትንቢተ ሚልክያስ', shortEn: 'Mal', shortAm: 'ሚል', chapters: 4 },

  // New Testament (40 - 66)
  { nr: 40, testament: 'NT', nameEn: 'Matthew', nameAm: 'የማቴዎስ ወንጌል', shortEn: 'Matt', shortAm: 'ማቴ', chapters: 28 },
  { nr: 41, testament: 'NT', nameEn: 'Mark', nameAm: 'የማርቆስ ወንጌል', shortEn: 'Mark', shortAm: 'ማር', chapters: 16 },
  { nr: 42, testament: 'NT', nameEn: 'Luke', nameAm: 'የሉቃስ ወንጌል', shortEn: 'Luke', shortAm: 'ሉቃ', chapters: 24 },
  { nr: 43, testament: 'NT', nameEn: 'John', nameAm: 'የዮሐንስ ወንጌል', shortEn: 'John', shortAm: 'ዮሐ', chapters: 21 },
  { nr: 44, testament: 'NT', nameEn: 'Acts', nameAm: 'የሐዋርያት ሥራ', shortEn: 'Acts', shortAm: 'ሐዋ', chapters: 28 },
  { nr: 45, testament: 'NT', nameEn: 'Romans', nameAm: 'ወደ ሮሜ ሰዎች', shortEn: 'Rom', shortAm: 'ሮሜ', chapters: 16 },
  { nr: 46, testament: 'NT', nameEn: '1 Corinthians', nameAm: '1ኛ ወደ ቆሮንቶስ ሰዎች', shortEn: '1Cor', shortAm: '1ቆሮ', chapters: 16 },
  { nr: 47, testament: 'NT', nameEn: '2 Corinthians', nameAm: '2ኛ ወደ ቆሮንቶስ ሰዎች', shortEn: '2Cor', shortAm: '2ቆሮ', chapters: 13 },
  { nr: 48, testament: 'NT', nameEn: 'Galatians', nameAm: 'ወደ ገላትያ ሰዎች', shortEn: 'Gal', shortAm: 'ገላ', chapters: 6 },
  { nr: 49, testament: 'NT', nameEn: 'Ephesians', nameAm: 'ወደ ኤፌሶን ሰዎች', shortEn: 'Eph', shortAm: 'ኤፌ', chapters: 6 },
  { nr: 50, testament: 'NT', nameEn: 'Philippians', nameAm: 'ወደ ፊልጵስዩስ ሰዎች', shortEn: 'Phil', shortAm: 'ፊል', chapters: 4 },
  { nr: 51, testament: 'NT', nameEn: 'Colossians', nameAm: 'ወደ ቆላስይስ ሰዎች', shortEn: 'Col', shortAm: 'ቆላ', chapters: 4 },
  { nr: 52, testament: 'NT', nameEn: '1 Thessalonians', nameAm: '1ኛ ወደ ተሰሎንቄ ሰዎች', shortEn: '1Thess', shortAm: '1ተሰ', chapters: 5 },
  { nr: 53, testament: 'NT', nameEn: '2 Thessalonians', nameAm: '2ኛ ወደ ተሰሎንቄ ሰዎች', shortEn: '2Thess', shortAm: '2ተሰ', chapters: 3 },
  { nr: 54, testament: 'NT', nameEn: '1 Timothy', nameAm: '1ኛ ወደ ጢሞቴዎስ', shortEn: '1Tim', shortAm: '1ጢሞ', chapters: 6 },
  { nr: 55, testament: 'NT', nameEn: '2 Timothy', nameAm: '2ኛ ወደ ጢሞቴዎስ', shortEn: '2Tim', shortAm: '2ጢሞ', chapters: 4 },
  { nr: 56, testament: 'NT', nameEn: 'Titus', nameAm: 'ወደ ቲቶ', shortEn: 'Titus', shortAm: 'ቲቶ', chapters: 3 },
  { nr: 57, testament: 'NT', nameEn: 'Philemon', nameAm: 'ወደ ፊልሞና', shortEn: 'Phlm', shortAm: 'ፊልሞ', chapters: 1 },
  { nr: 58, testament: 'NT', nameEn: 'Hebrews', nameAm: 'ወደ ዕብራውያን', shortEn: 'Heb', shortAm: 'ዕብ', chapters: 13 },
  { nr: 59, testament: 'NT', nameEn: 'James', nameAm: 'የያዕቆብ መልእክት', shortEn: 'Jas', shortAm: 'ያዕ', chapters: 5 },
  { nr: 60, testament: 'NT', nameEn: '1 Peter', nameAm: '1ኛ የጴጥሮስ መልእክት', shortEn: '1Pet', shortAm: '1ጴጥ', chapters: 5 },
  { nr: 61, testament: 'NT', nameEn: '2 Peter', nameAm: '2ኛ የጴጥሮስ መልእክት', shortEn: '2Pet', shortAm: '2ጴጥ', chapters: 3 },
  { nr: 62, testament: 'NT', nameEn: '1 John', nameAm: '1ኛ የዮሐንስ መልእክት', shortEn: '1John', shortAm: '1ዮሐ', chapters: 5 },
  { nr: 63, testament: 'NT', nameEn: '2 John', nameAm: '2ኛ የዮሐንስ መልእክት', shortEn: '2John', shortAm: '2ዮሐ', chapters: 1 },
  { nr: 64, testament: 'NT', nameEn: '3 John', nameAm: '3ኛ የዮሐንስ መልእክት', shortEn: '3John', shortAm: '3ዮሐ', chapters: 1 },
  { nr: 65, testament: 'NT', nameEn: 'Jude', nameAm: 'የይሁዳ መልእክት', shortEn: 'Jude', shortAm: 'ይሁ', chapters: 1 },
  { nr: 66, testament: 'NT', nameEn: 'Revelation', nameAm: 'የዮሐንስ ራእይ', shortEn: 'Rev', shortAm: 'ራእ', chapters: 22 },
]

// Normalized Lookup Table for Fast Matching
const BOOK_NAME_MAP: Record<string, number> = {}

for (const b of CANONICAL_BOOKS) {
  // English aliases
  BOOK_NAME_MAP[b.nameEn.toLowerCase()] = b.nr
  BOOK_NAME_MAP[b.shortEn.toLowerCase()] = b.nr

  // Common English alternate spellings
  if (b.nr === 22) {
    BOOK_NAME_MAP['song of songs'] = 22
    BOOK_NAME_MAP['canticles'] = 22
  }
  if (b.nr === 19) {
    BOOK_NAME_MAP['psalm'] = 19
  }

  // Amharic full & short names
  BOOK_NAME_MAP[b.nameAm] = b.nr
  BOOK_NAME_MAP[b.shortAm] = b.nr

  // Amharic stripped of prefixes (e.g. "ዘፍጥረት" without "ኦሪት", "ኢሳይያስ" without "ትንቢተ", "ሮሜ" without "ወደ")
  const strippedAm = b.nameAm
    .replace(/^(ኦሪት|መጽሐፈ|ትንቢተ|የ|ወደ|ሰቆቃወ)\s+/g, '')
    .trim()
  if (strippedAm) {
    BOOK_NAME_MAP[strippedAm] = b.nr
  }
}

// Additional common abbreviations
BOOK_NAME_MAP['ዘፍጥረት'] = 1
BOOK_NAME_MAP['ዘጸአት'] = 2
BOOK_NAME_MAP['ዘሌዋውያን'] = 3
BOOK_NAME_MAP['ዘኍልቍ'] = 4
BOOK_NAME_MAP['ዘዳግም'] = 5
BOOK_NAME_MAP['ኢያሱ'] = 6
BOOK_NAME_MAP['መሳፍንት'] = 7
BOOK_NAME_MAP['ሳሙኤል 1'] = 9
BOOK_NAME_MAP['1 ሳሙኤል'] = 9
BOOK_NAME_MAP['ሳሙኤል 2'] = 10
BOOK_NAME_MAP['2 ሳሙኤል'] = 10
BOOK_NAME_MAP['ነገሥት 1'] = 11
BOOK_NAME_MAP['1 ነገሥት'] = 11
BOOK_NAME_MAP['ነገሥት 2'] = 12
BOOK_NAME_MAP['2 ነገሥት'] = 12
BOOK_NAME_MAP['ዜና 1'] = 13
BOOK_NAME_MAP['1 ዜና'] = 13
BOOK_NAME_MAP['ዜና 2'] = 14
BOOK_NAME_MAP['2 ዜና'] = 14
BOOK_NAME_MAP['ዕዝራ'] = 15
BOOK_NAME_MAP['ነህምያ'] = 16
BOOK_NAME_MAP['አስቴር'] = 17
BOOK_NAME_MAP['ኢዮብ'] = 18
BOOK_NAME_MAP['መዝሙር'] = 19
BOOK_NAME_MAP['ምሳሌ'] = 20
BOOK_NAME_MAP['መክብብ'] = 21
BOOK_NAME_MAP['ማቴዎስ'] = 40
BOOK_NAME_MAP['ማርቆስ'] = 41
BOOK_NAME_MAP['ሉቃስ'] = 42
BOOK_NAME_MAP['ዮሐንስ'] = 43
BOOK_NAME_MAP['ሐዋርያት'] = 44
BOOK_NAME_MAP['ሮሜ'] = 45
BOOK_NAME_MAP['1 ቆሮንቶስ'] = 46
BOOK_NAME_MAP['2 ቆሮንቶስ'] = 47
BOOK_NAME_MAP['ገላትያ'] = 48
BOOK_NAME_MAP['ኤፌሶን'] = 49
BOOK_NAME_MAP['ፊልጵስዩስ'] = 50
BOOK_NAME_MAP['ቆላስይስ'] = 51
BOOK_NAME_MAP['1 ተሰሎንቄ'] = 52
BOOK_NAME_MAP['2 ተሰሎንቄ'] = 53
BOOK_NAME_MAP['1 ጢሞቴዎስ'] = 54
BOOK_NAME_MAP['2 ጢሞቴዎስ'] = 55
BOOK_NAME_MAP['ቲቶ'] = 56
BOOK_NAME_MAP['ፊልሞና'] = 57
BOOK_NAME_MAP['ዕብራውያን'] = 58
BOOK_NAME_MAP['ያዕቆብ'] = 59
BOOK_NAME_MAP['1 ጴጥሮስ'] = 60
BOOK_NAME_MAP['2 ጴጥሮስ'] = 61
BOOK_NAME_MAP['1 ዮሐንስ'] = 62
BOOK_NAME_MAP['2 ዮሐንስ'] = 63
BOOK_NAME_MAP['3 ዮሐንስ'] = 64
BOOK_NAME_MAP['ይሁዳ'] = 65
BOOK_NAME_MAP['ራእይ'] = 66

/**
 * Resolves a book name query to a canonical book number (1..66).
 */
export function resolveBookNumber(query: string): number | null {
  const clean = query.trim().toLowerCase()
  if (BOOK_NAME_MAP[clean]) return BOOK_NAME_MAP[clean]

  // Check Amharic with exact casing
  const amClean = query.trim()
  if (BOOK_NAME_MAP[amClean]) return BOOK_NAME_MAP[amClean]

  // Substring search if exact match fails
  for (const b of CANONICAL_BOOKS) {
    if (b.nameEn.toLowerCase().startsWith(clean) || clean.startsWith(b.nameEn.toLowerCase())) {
      return b.nr
    }
    if (b.nameAm.includes(amClean) || amClean.includes(b.shortAm)) {
      return b.nr
    }
  }

  return null
}

function tryBuildReference(bookPart: string, chapStr: string, vStartStr?: string, vEndStr?: string): BibleReference | null {
  const chapter = parseInt(chapStr, 10)
  if (isNaN(chapter)) return null
  const verseStart = vStartStr ? parseInt(vStartStr, 10) : undefined
  const verseEnd = vEndStr ? parseInt(vEndStr, 10) : verseStart

  // Strip Amharic prefixes: "ስለ", "የ", "ወደ"
  let cleanBook = bookPart.trim().replace(/^(?:ስለ|የ|ወደ)\s*/i, '').trim()
  let bookNr = resolveBookNumber(cleanBook)
  if (!bookNr) {
    // Strip common suffixes like 'ን', 'ስ', 'ም', 'ው', 'ዋ', 'ዬ'
    cleanBook = cleanBook.replace(/[ንስማውዬ]$/, '').trim()
    bookNr = resolveBookNumber(cleanBook)
  }
  if (!bookNr) {
    bookNr = resolveBookNumber(bookPart.trim())
  }
  if (!bookNr) return null

  const book = CANONICAL_BOOKS[bookNr - 1]
  if (!book || chapter < 1 || chapter > book.chapters) return null

  const bookName = book.nameEn
  const fullRefString = verseStart
    ? `${bookName} ${chapter}:${verseStart}${verseEnd && verseEnd !== verseStart ? `-${verseEnd}` : ''}`
    : `${bookName} ${chapter}`

  return {
    bookNr,
    bookName,
    chapter,
    verseStart,
    verseEnd,
    fullRefString,
  }
}

/**
 * Parses natural scripture reference string in English or Amharic.
 * Handles both direct references ("John 3:16", "መዝሙር 23", "ሮሜ 8:28")
 * and questions with embedded references ("ዮሐንስ 3:16ን አብራራልኝ", "Explain Romans 8:28").
 */
export function parseScriptureReference(input: string): BibleReference | null {
  if (!input) return null
  const trimmed = input.trim()

  // 1. Direct match: e.g. "John 3:16", "ዮሐንስ 3:16", "ሮሜ 8:28"
  const directPattern = /^(\d?\s*[\u1200-\u137F\w\s]+?)\s+(\d+)(?:[:፥](\d+)(?:[-–—](\d+))?)?[ንስማው]?$/
  const directMatch = trimmed.match(directPattern)
  if (directMatch) {
    const res = tryBuildReference(directMatch[1], directMatch[2], directMatch[3], directMatch[4])
    if (res) return res
  }

  // 2. Embedded reference with verse: e.g. "ዮሐንስ 3:16ን አብራራልኝ", "Explain Romans 8:28 in context", "What does John 3:16 mean?"
  const versePattern = /(\d?\s*[\u1200-\u137F\w]+(?:\s+[\u1200-\u137F\w]+)?)\s+(\d+)[:፥](\d+)(?:[-–—](\d+))?[ንስማው]?/g
  let m: RegExpExecArray | null
  while ((m = versePattern.exec(trimmed)) !== null) {
    const rawBook = m[1].replace(/^(?:explain|read|about|meaning\s+of|tell\s+me\s+about|ስለ|ጥቅስ|የ|ወደ)\s+/i, '').trim()
    const res = tryBuildReference(rawBook, m[2], m[3], m[4])
    if (res) return res
  }

  // 3. Embedded chapter reference: e.g. "Explain Genesis 1", "ስለ መዝሙር 23 አብራራልኝ"
  const chapterPattern = /(\d?\s*[\u1200-\u137F\w]+(?:\s+[\u1200-\u137F\w]+)?)\s+(?:ምዕራፍ\s*|chapter\s*)?(\d+)[ንስማው]?/gi
  while ((m = chapterPattern.exec(trimmed)) !== null) {
    const rawBook = m[1].replace(/^(?:explain|read|about|meaning\s+of|tell\s+me\s+about|ስለ|ጥቅስ|የ|ወደ)\s+/i, '').trim()
    const res = tryBuildReference(rawBook, m[2], undefined, undefined)
    if (res) return res
  }

  return null
}

// Cache for raw book JSONs
const bookCache = new Map<string, any>()
const crossRefCache = new Map<string, number[][]>()
let searchRowsCache: Record<string, any[]> = {}

async function fetchJson<T>(path: string): Promise<T> {
  const url = new URL(`data/${path}`, document.baseURI).href
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to load ${path}: HTTP ${res.status}`)
  return res.json()
}

/**
 * Loads a book's raw JSON from data/<translation>/books/<01-66>.json
 */
export async function loadBookData(translation: string, bookNr: number): Promise<any> {
  const key = `${translation}:${bookNr}`
  if (bookCache.has(key)) return bookCache.get(key)

  const padNr = String(bookNr).padStart(2, '0')
  const data = await fetchJson<any>(`${translation}/books/${padNr}.json`)
  bookCache.set(key, data)
  return data
}

/**
 * Retrieves exact verses for a given reference.
 */
export async function getExactPassage(
  ref: BibleReference,
  translation: string = 'am',
): Promise<BibleVerse[]> {
  try {
    const raw = await loadBookData(translation, ref.bookNr)
    const chapterObj = raw.chapters?.find((c: any) => c.c === ref.chapter)
    if (!chapterObj || !chapterObj.v) return []

    const book = CANONICAL_BOOKS[ref.bookNr - 1]
    const bookDisplayName = translation.startsWith('am') ? book.nameAm : book.nameEn

    const result: BibleVerse[] = []
    for (const [vNr, text] of chapterObj.v) {
      if (ref.verseStart !== undefined) {
        if (vNr < ref.verseStart) continue
        if (ref.verseEnd !== undefined && vNr > ref.verseEnd) break
      }
      result.push({
        bookNr: ref.bookNr,
        bookName: bookDisplayName,
        testament: book.testament,
        chapter: ref.chapter,
        verse: vNr,
        text,
        translation,
      })
    }
    return result
  } catch (err) {
    console.error(`Failed to get exact passage for ${ref.fullRefString}:`, err)
    return []
  }
}

/**
 * Retrieves surrounding context (e.g., 2 verses before, 2 verses after) to preserve context.
 */
export async function getSurroundingContext(
  bookNr: number,
  chapter: number,
  verse: number,
  windowSize: number = 2,
  translation: string = 'am',
): Promise<BibleVerse[]> {
  return getExactPassage(
    {
      bookNr,
      bookName: '',
      chapter,
      verseStart: Math.max(1, verse - windowSize),
      verseEnd: verse + windowSize,
      fullRefString: '',
    },
    translation,
  )
}

/**
 * Loads the TSK Cross-Reference Matrix (340,000+ entries) from data/guide/crossrefs.json
 */
export async function getCrossReferencesForVerse(
  bookNr: number,
  chapter: number,
  verse: number,
  translation: string = 'am',
  maxResults: number = 5,
): Promise<CrossRefLink[]> {
  const refKey = `${bookNr}.${chapter}.${verse}`
  if (!crossRefCache.has('all')) {
    try {
      const data = await fetchJson<Record<string, number[][]>>('guide/crossrefs.json')
      for (const [k, v] of Object.entries(data)) {
        crossRefCache.set(k, v)
      }
      crossRefCache.set('all', [])
    } catch (err) {
      console.warn('Cross references could not be loaded:', err)
      return []
    }
  }

  const rawLinks = crossRefCache.get(refKey)
  if (!rawLinks || rawLinks.length === 0) return []

  // Each link is [targetBook, targetChapter, targetFromVerse, targetToVerse, score]
  const links: CrossRefLink[] = []
  for (const item of rawLinks.slice(0, maxResults)) {
    const [targetBook, targetChapter, targetFromVerse, targetToVerse, score] = item
    const targetBookObj = CANONICAL_BOOKS[targetBook - 1]
    if (!targetBookObj) continue

    const targetBookName = translation.startsWith('am') ? targetBookObj.nameAm : targetBookObj.nameEn

    // Try fetching the verse text
    let verseText: string | undefined
    try {
      const targetVerses = await getExactPassage(
        {
          bookNr: targetBook,
          bookName: targetBookName,
          chapter: targetChapter,
          verseStart: targetFromVerse,
          verseEnd: targetToVerse,
          fullRefString: '',
        },
        translation,
      )
      if (targetVerses.length > 0) {
        verseText = targetVerses.map((v) => v.text).join(' ')
      }
    } catch {}

    links.push({
      targetBook,
      targetBookName,
      targetChapter,
      targetFromVerse,
      targetToVerse,
      score,
      verseText,
    })
  }

  return links
}

/**
 * Performs full-text search across all 31,102 verses in the entire 66 books of the Bible.
 */
export async function searchBibleConcordance(
  query: string,
  translation: string = 'am',
  limit: number = 10,
  filterTestament?: 'OT' | 'NT',
): Promise<BibleVerse[]> {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return []

  const transKey = translation === 'kjv' ? 'kjv' : 'am'
  if (!searchRowsCache[transKey]) {
    try {
      searchRowsCache[transKey] = await fetchJson<any[]>(`raw/search-${transKey}.json`)
    } catch (err) {
      console.error(`Could not load search index for ${transKey}:`, err)
      return []
    }
  }

  const rows = searchRowsCache[transKey]
  const matches: BibleVerse[] = []

  // Words for multi-term matching
  const words = needle.split(/\s+/).filter((w) => w.length > 1)

  for (const row of rows) {
    const [bookNr, , testament, chapterNr, verseNr, text] = row
    if (filterTestament && testament !== filterTestament) continue

    const lowerText = text.toLowerCase()

    // Match all keywords or direct phrase
    let isMatch = false
    if (lowerText.includes(needle)) {
      isMatch = true
    } else if (words.length > 1 && words.every((w) => lowerText.includes(w))) {
      isMatch = true
    }

    if (isMatch) {
      const book = CANONICAL_BOOKS[bookNr - 1]
      matches.push({
        bookNr,
        bookName: translation.startsWith('am') ? (book ? book.nameAm : row[1]) : (book ? book.nameEn : row[1]),
        testament: testament as 'OT' | 'NT',
        chapter: chapterNr,
        verse: verseNr,
        text,
        translation,
      })

      if (matches.length >= limit) break
    }
  }

  return matches
}
