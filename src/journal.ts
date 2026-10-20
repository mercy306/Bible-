import { useSyncExternalStore } from 'react'

/**
 * The reader's own writing: reflections on a verse, study notes on a passage,
 * and prayers. All of it stays on the device, like bookmarks and highlights.
 */

/** A verse or passage being reflected on. */
export interface Anchor {
  translation: string
  book: number
  chapter: number
  verse: number
}

export interface Reflection {
  anchor: Anchor
  /** Their own words about the verse. */
  text: string
  /** What the day's question was, so it still makes sense later. */
  question: string
  at: number
}

export interface StudyNote {
  anchor: Anchor
  read: string
  learned: string
  stoodOut: string
  questions: string
  prayer: string
  at: number
}

export type PrayerCategory = 'Family' | 'Health' | 'Work' | 'Church' | 'Personal' | 'Other'

export interface Prayer {
  id: string
  text: string
  category: PrayerCategory
  created: number
  answered: boolean
  /** Set when the reader marks it answered. */
  answeredAt?: number
}

const REFLECTIONS_KEY = 'bible:reflections'
const STUDIES_KEY = 'bible:studies'
const PRAYERS_KEY = 'bible:prayers'

export const PRAYER_CATEGORIES: PrayerCategory[] = [
  'Family',
  'Health',
  'Work',
  'Church',
  'Personal',
  'Other',
]

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function anchorKey(anchor: Anchor) {
  return `${anchor.translation}:${anchor.book}:${anchor.chapter}:${anchor.verse}`
}

// useSyncExternalStore compares snapshots by identity, so each list is parsed
// once and kept. Returning a fresh array on every call would re-render forever.
let reflections: Reflection[] = []
let studies: StudyNote[] = []
let prayers: Prayer[] = []
let loaded = false

function load() {
  if (loaded) return
  loaded = true
  reflections = read<Reflection[]>(REFLECTIONS_KEY, [])
  studies = read<StudyNote[]>(STUDIES_KEY, [])
  prayers = read<Prayer[]>(PRAYERS_KEY, [])
}

let listeners: Array<() => void> = []

function notify() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.push(listener)
  window.addEventListener('storage', listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
    window.removeEventListener('storage', listener)
  }
}

function save<T>(key: string, value: T, set: (next: T) => void) {
  set(value)
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // A full store must not lose reading.
  }
  notify()
}

const saveReflections = (next: Reflection[]) => save(REFLECTIONS_KEY, next, (v) => (reflections = v))
const saveStudies = (next: StudyNote[]) => save(STUDIES_KEY, next, (v) => (studies = v))
const savePrayers = (next: Prayer[]) => save(PRAYERS_KEY, next, (v) => (prayers = v))

function getReflections() {
  load()
  return reflections
}
function getStudies() {
  load()
  return studies
}
function getPrayers() {
  load()
  return prayers
}

export function useReflections(): Reflection[] {
  return useSyncExternalStore(subscribe, getReflections, getReflections)
}

export function useStudies(): StudyNote[] {
  return useSyncExternalStore(subscribe, getStudies, getStudies)
}

export function usePrayers(): Prayer[] {
  return useSyncExternalStore(subscribe, getPrayers, getPrayers)
}

/** The same lists, without a component. Useful for backups and checks. */
export function readReflections(): Reflection[] {
  load()
  return reflections
}

export function readStudies(): StudyNote[] {
  load()
  return studies
}

export function readPrayers(): Prayer[] {
  load()
  return prayers
}

export function findReflection(list: Reflection[], anchor: Anchor) {
  return list.find((r) => anchorKey(r.anchor) === anchorKey(anchor))
}

export function findStudy(list: StudyNote[], anchor: Anchor) {
  return list.find((s) => anchorKey(s.anchor) === anchorKey(anchor))
}

/** Writes the reflection for a verse, or removes it when the words are cleared. */
export function saveReflection(anchor: Anchor, question: string, text: string) {
  load()
  const trimmed = text.trim()
  const key = anchorKey(anchor)
  if (!trimmed) {
    saveReflections(reflections.filter((r) => anchorKey(r.anchor) !== key))
    return
  }
  const existing = findReflection(reflections, anchor)
  saveReflections(
    existing
      ? reflections.map((r) => (anchorKey(r.anchor) === key ? { ...r, text: trimmed, question } : r))
      : [{ anchor, text: trimmed, question, at: Date.now() }, ...reflections],
  )
}

/** Creates a new prayer and hands back its id. */
export function addPrayer(text: string, category: PrayerCategory): string {
  load()
  const trimmed = text.trim()
  if (!trimmed) return ''
  const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`
  savePrayers([
    { id, text: trimmed, category, created: Date.now(), answered: false },
    ...prayers,
  ])
  return id
}

export function setAnswered(id: string, answered: boolean) {
  load()
  savePrayers(
    prayers.map((p) =>
      p.id === id
        ? { ...p, answered, answeredAt: answered ? Date.now() : undefined }
        : p,
    ),
  )
}

export function removePrayer(id: string) {
  load()
  savePrayers(prayers.filter((p) => p.id !== id))
}

export function saveStudy(note: Omit<StudyNote, 'at'>) {
  load()
  const key = anchorKey(note.anchor)
  const blank =
    !note.read.trim() &&
    !note.learned.trim() &&
    !note.stoodOut.trim() &&
    !note.questions.trim() &&
    !note.prayer.trim()
  if (blank) {
    saveStudies(studies.filter((s) => anchorKey(s.anchor) !== key))
    return
  }
  const existing = findStudy(studies, note.anchor)
  saveStudies(
    existing
      ? studies.map((s) => (anchorKey(s.anchor) === key ? { ...note, at: s.at } : s))
      : [{ ...note, at: Date.now() }, ...studies],
  )
}

/**
 * A prompt to sit with. These are fixed rather than generated, because the app
 * works offline and inventing questions on the fly would risk saying something
 * that does not hold up.
 */
const QUESTIONS = [
  'What does this verse teach you about God?',
  'What does this verse ask of you today?',
  'How does this verse change how you pray?',
  'Where have you already seen this at work?',
  'What would you say to someone about this verse?',
  'What is hard to accept in this verse, and why?',
  'Who in this passage needs what you have just been given?',
  'What will you do differently because of this?',
]

/** The same question for everyone on the same day, without storing anything. */
export function questionForDay(day: number) {
  return QUESTIONS[day % QUESTIONS.length]
}
