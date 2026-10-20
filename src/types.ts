export type Testament = 'OT' | 'NT'

export interface Translation {
  id: string
  name: string
  language: string
  lang: string
  direction: string
  complete: boolean
  books: number
}

export interface BookInfo {
  nr: number
  name: string
  group: string
  testament: Testament
  chapters: number
  verses: number
}

export interface Group {
  id: string
  name: string
  from: number
  to: number
}

export interface BooksResponse {
  translation: {
    id: string
    name: string
    lang: string
    language: string
    direction: string
    credit?: string
    complete: boolean
  }
  groups: Group[]
  books: BookInfo[]
}

export interface Location {
  book: number
  chapter: number
}

export interface Verse {
  verse: number
  text: string
}

export interface ChapterResponse {
  translation: {
    id: string
    name: string
    lang: string
    language: string
    credit?: string
  }
  book: { nr: number; name: string; group: string; testament: Testament }
  chapter: number
  verseCount: number
  chapterCount: number
  reference: string
  /** Verse count in the English reference numbering. */
  englishVerses: number
  /** Total verse positions to render: the larger of the two numberings. */
  slots: number
  /** Positions the translation does not carry separately. */
  grouped: number[]
  verses: Verse[]
  prev: Location | null
  next: Location | null
  /** Present when the source is known to be missing text for this chapter. */
  gap?: { have: number; want: number; blank: number } | null
  blankVerses?: number
  /** Chapter supplied by the earlier Amharic edition rather than the primary one. */
  fallback?: boolean
}

export interface EnglishChapter {
  book: number
  chapter: number
  verses: Verse[]
}

export interface SearchHit {
  book: number
  bookName: string
  testament: Testament
  chapter: number
  verse: number
  reference: string
  text: string
  snippet: string
}

export interface SearchResponse {
  query: string
  total: number
  results: SearchHit[]
}

/* ---------- guide (study / reference material) ---------- */

export interface GuideEntry {
  id: string
  name: string
  description: string
  author: string
  year: number
  lang: string
  language: string
  license: string
  credit: string
  file: string
}

export interface GuideList {
  guides: GuideEntry[]
}

export interface GuideVerse {
  book: number
  chapter: number
  verse: number
  commentary: {
    heading: string
    covers: number[]
    text: string
    /** False when this is the nearest note Henry wrote, not the verse itself. */
    exact: boolean
    nearestVerse: number | null
    /** Machine translation of the same note, when available. */
    amharic: string | null
  } | null
  hasAmharicGuide: boolean
  crossrefs: {
    book: number
    bookName: string
    chapter: number
    from: number
    to: number
    label: string
    votes: number
  }[]
}

export interface StrongsEntry {
  number: string
  n: number
  lang: 'grk' | 'heb'
  word: string
  translit: string
  pronunciation: string
  senses: string[]
  derivation: string
  kjv: string
  sensesAmharic?: string
  kjvAmharic?: string
  derivationAmharic?: string
}

export interface StrongsResponse {
  query: string
  total: number
  hasAmharic?: boolean
  results: StrongsEntry[]
}

export interface AmharicCommentary {
  title: string
  titleEn?: string
  method?: string
  available: boolean
  /** True when these blocks are word studies / front matter, not the chapter. */
  general?: boolean
  covered: number
  coverage?: number[]
  blocks: { first: number; last: number; pages: number[]; text: string }[]
}

/** ---------- commentary search and contents ---------- */

export interface CommentaryHit {
  book: number
  chapter: number
  bookName: string
  reference: string
  pages: number[]
  general: boolean
  snippet: string
}

export interface CommentarySearchResponse {
  query: string
  total: number
  results: CommentaryHit[]
}

export interface CommentaryIndex {
  title: string
  generalCount: number
  generalSections: { label: string; pages: number[]; preview: string }[]
  books: { book: number; name: string; chapters: number[] }[]
}