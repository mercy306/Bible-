export interface Route {
  /**
   * Which of the sections is showing:
   * home, read (Bible), daily, bookmarks, and prayers.
   */
  view: 'home' | 'read' | 'search' | 'daily' | 'bookmarks' | 'prayers'
  translation: string
  book: number
  chapter: number
  q: string
  /** Search the commentary instead of the scripture text. */
  scope?: 'text' | 'commentary'
  /** First verse of a passage; unset means the whole chapter. */
  verse?: number
  /** Last verse of the passage. */
  verseEnd?: number
  /** Search limits. Undefined means all 66 books. */
  filterTestament?: 'OT' | 'NT'
  filterBook?: number | null
}

export const DEFAULT_TRANSLATION = 'kjv'
// Opening the Bible should land in the beginning, ready to read, not in a list
// of books. A returning reader is sent back to wherever they stopped instead.
const FALLBACK_BOOK = 1
const FALLBACK_CHAPTER = 1

export function parseHash(fallbackTranslation = DEFAULT_TRANSLATION): Route {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const queryIndex = raw.indexOf('?')
  const path = queryIndex === -1 ? raw : raw.slice(0, queryIndex)
  const params = new URLSearchParams(queryIndex === -1 ? '' : raw.slice(queryIndex + 1))
  const parts = path.split('/').filter(Boolean)
  const head = parts[0] ?? ''
  const translation = parts[1] ? decodeURIComponent(parts[1]) : fallbackTranslation

  // A trailing "16" or "16-20" narrows the chapter to a passage.
  let verse: number | undefined
  let verseEnd: number | undefined
  const passage = parts[4]
  if (passage) {
    const [from, to] = passage.split('-').map(Number)
    if (Number.isInteger(from) && from > 0) {
      verse = from
      verseEnd = Number.isInteger(to) && to >= from ? to : from
    }
  }

  if (head === 'notes' || head === 'bookmarks') {
    return {
      view: 'bookmarks',
      translation,
      book: FALLBACK_BOOK,
      chapter: FALLBACK_CHAPTER,
      q: '',
    }
  }

  if (head === 'prayers') {
    return {
      view: 'prayers',
      translation,
      book: FALLBACK_BOOK,
      chapter: FALLBACK_CHAPTER,
      q: '',
    }
  }


  if (head === 'daily') {
    return {
      view: 'daily',
      translation,
      book: FALLBACK_BOOK,
      chapter: FALLBACK_CHAPTER,
      q: '',
    }
  }

  if (head === 'home') {
    return {
      view: 'read',
      translation,
      book: FALLBACK_BOOK,
      chapter: FALLBACK_CHAPTER,
      q: '',
    }
  }

  if (head === 'search') {
    const book = Number(params.get('book'))
    const testament = params.get('testament')
    return {
      view: 'search',
      translation,
      book: FALLBACK_BOOK,
      chapter: FALLBACK_CHAPTER,
      q: params.get('q') ?? '',
      scope: params.get('scope') === 'commentary' ? 'commentary' : 'text',
      filterTestament:
        testament === 'OT' || testament === 'NT' ? testament : undefined,
      filterBook: Number.isInteger(book) && book > 0 ? book : null,
    }
  }

  return {
    view: 'read',
    translation,
    book: Number(parts[2]) || FALLBACK_BOOK,
    chapter: Number(parts[3]) || FALLBACK_CHAPTER,
    q: '',
    verse,
    verseEnd,
  }
}

export function hashFor(route: Route): string {
  const t = encodeURIComponent(route.translation)
  if (route.view === 'home') return `#/home/${t}`
  if (route.view === 'bookmarks') return `#/bookmarks/${t}`
  if (route.view === 'prayers') return `#/prayers/${t}`
  if (route.view === 'daily') return `#/daily/${t}`
  if (route.view === 'search') {
    const params = new URLSearchParams({ q: route.q })
    if (route.scope === 'commentary') params.set('scope', 'commentary')
    if (route.filterTestament) params.set('testament', route.filterTestament)
    if (route.filterBook) params.set('book', String(route.filterBook))
    return `#/search/${t}?${params.toString()}`
  }
  const passage =
    route.verse && route.verseEnd
      ? route.verseEnd === route.verse
        ? `/${route.verse}`
        : `/${route.verse}-${route.verseEnd}`
      : ''
  return `#/t/${t}/${route.book}/${route.chapter}${passage}`
}

/** Common abbreviations, keyed to the same book numbers as the reader uses. */
const ABBREVIATIONS: Record<number, string[]> = {
  1: ['gen'], 2: ['exod', 'exo'], 3: ['lev'], 4: ['num'], 5: ['deut', 'dt'],
  6: ['josh'], 7: ['judg'], 8: ['ruth'], 9: ['1 sam', '1sam'], 10: ['2 sam', '2sam'],
  11: ['1 kgs', '1kgs'], 12: ['2 kgs', '2kgs'], 13: ['1 chr', '1chr'], 14: ['2 chr', '2chr'],
  15: ['ezra'], 16: ['neh'], 17: ['esth'], 18: ['job'], 19: ['ps', 'pss'],
  20: ['prov'], 21: ['eccl'], 22: ['song', 'song of songs'], 23: ['isa'],
  24: ['jer'], 25: ['lam'], 26: ['ezek'], 27: ['dan'], 28: ['hos'],
  29: ['joel'], 30: ['amos'], 31: ['obad'], 32: ['jonah'], 33: ['mic'],
  34: ['nah'], 35: ['hab'], 36: ['zeph'], 37: ['hag'], 38: ['zech'], 39: ['mal'],
  40: ['matt', 'mt'], 41: ['mark', 'mk'], 42: ['luke', 'lk'], 43: ['john', 'jn', 'jhn'],
  44: ['acts'], 45: ['rom'], 46: ['1 cor', '1cor'], 47: ['2 cor', '2cor'],
  48: ['gal'], 49: ['eph'], 50: ['phil', 'php'], 51: ['col'], 52: ['1 thess', '1thess'],
  53: ['2 thess', '2thess'], 54: ['1 tim', '1tim'], 55: ['2 tim', '2tim'],
  56: ['titus', 'tit'], 57: ['phlm', 'philem'], 58: ['heb'], 59: ['jas', 'james'],
  60: ['1 pet', '1pet'], 61: ['2 pet', '2pet'], 62: ['1 john', '1john'], 63: ['2 john', '2john'],
  64: ['3 john', '3john'], 65: ['jude'], 66: ['rev'],
}

/**
 * Turns what someone types into a location, so "John 3:16", "jn 3.16" and
 * "43:3:16" all work. Book names are matched against the translation in use as
 * well as English, so both "ዮሐንስ" and "John" work while reading Amharic.
 */
export function parseReference(
  input: string,
  books: { nr: number; name: string }[],
): { book: number; chapter: number; verse?: number; verseEnd?: number } | null {
  const text = input.trim()
  if (!text) return null

  const numeric = text.match(/^(\d{1,3})\s*[:.\s]\s*(\d{1,3})(?:\s*[:.\s]\s*(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?)?$/)
  if (numeric) {
    const [, b, c, v, vEnd] = numeric
    return {
      book: Number(b),
      chapter: Number(c),
      verse: v ? Number(v) : undefined,
      verseEnd: vEnd ? Number(vEnd) : v ? Number(v) : undefined,
    }
  }

  const named = text.match(/^(.+?)\s*[:.\s]\s*(\d{1,3})(?:\s*[:.\s]\s*(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?)?$/)
  if (!named) return null
  const [, name, c, v, vEnd] = named

  const clean = (s: string) =>
    s
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[^\p{L}\p{N} ]/gu, '')
      .trim()

  const wanted = clean(name)
  const matches = (candidate: string) => {
    const c = clean(candidate)
    return c === wanted || c.startsWith(wanted) || c.replace(/\s+/g, '').startsWith(wanted.replace(/\s+/g, ''))
  }

  const byName = books.find((b) => matches(b.name))
  const byAbbreviation = books.find((b) =>
    (ABBREVIATIONS[b.nr] ?? []).some((abbr) => clean(abbr) === wanted),
  )
  const match = byName ?? byAbbreviation
  if (!match) return null

  return {
    book: match.nr,
    chapter: Number(c),
    verse: v ? Number(v) : undefined,
    verseEnd: vEnd ? Number(vEnd) : v ? Number(v) : undefined,
  }
}