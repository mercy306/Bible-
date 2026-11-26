import type { LanguageMode } from '../prefs'

export interface BibleReference {
  bookNr: number
  bookName: string
  chapter: number
  verseStart?: number
  verseEnd?: number
  fullRefString: string
}

export interface BibleVerse {
  bookNr: number
  bookName: string
  testament: 'OT' | 'NT'
  chapter: number
  verse: number
  text: string
  translation: string
}

export interface CrossRefLink {
  targetBook: number
  targetBookName: string
  targetChapter: number
  targetFromVerse: number
  targetToVerse: number
  score: number
  verseText?: string
}

export interface AssistantMessage {
  id: string
  sender: 'user' | 'assistant'
  text: string
  timestamp: number
  references?: BibleReference[]
  suggestedQuestions?: string[]
}

export interface ExegesisResponse {
  directAnswer: string
  primaryPassages: BibleVerse[]
  contextExplanation: string
  otNtConnections?: {
    otPassage?: string
    ntPassage?: string
    explanation: string
  }[]
  relatedVerses: BibleVerse[]
  reflectionQuestions: string[]
  isSilentOrUncertain?: boolean
  language: LanguageMode
}
