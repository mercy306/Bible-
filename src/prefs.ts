import { useSyncExternalStore } from 'react'

/** Reading preferences: typeface, text size, theme and accent colour. */

export const FONTS = [
  { id: 'serif', label: 'Serif', note: 'Easy on the eyes' },
  { id: 'sans', label: 'Clean', note: 'Plain and modern' },
  { id: 'traditional', label: 'Traditional', note: 'Ethiopic book style' },
] as const

export const SIZES = [
  { id: 's', label: 'Small', px: 16 },
  { id: 'm', label: 'Normal', px: 18 },
  { id: 'l', label: 'Large', px: 21 },
  { id: 'xl', label: 'Extra large', px: 24 },
  { id: 'xxl', label: 'Largest', px: 28 },
] as const

export const SIZE_RANGE = { min: 15, max: 30, step: 1 } as const

/** Reading comfort: how open the lines sit and how far apart verses are. */
export const LEADING_RANGE = { min: 1.5, max: 2.2, step: 0.05 } as const
export const PARAGRAPH_RANGE = { min: 4, max: 20, step: 2 } as const

export const THEMES = [
  { id: 'bw', label: 'Black', am: 'ጥቁር', note: 'Soft Black / Obsidian', bg: '#0E1013', ink: '#FFFFFF' },
  { id: 'light', label: 'Green', am: 'አረንጓዴ', note: 'Sage Green / Matcha', bg: '#CAD5C8', ink: '#192218' },
  { id: 'sepia', label: 'Sepia', am: 'ብራና', note: 'Warm Parchment / Ancient', bg: '#F5EEE2', ink: '#2B1708' },
  { id: 'burgundy', label: 'Burgundy', am: 'ወይን', note: 'Imperial Velvet Wine', bg: '#2E0811', ink: '#FDF6EC' },
  { id: 'gold', label: 'Gold', am: 'ወርቃማ', note: 'Royal Honey Amber', bg: '#FAF2DC', ink: '#2B1708' },
  { id: 'night', label: 'Navy', am: 'ሰማያዊ', note: 'Midnight Blue / OLED', bg: '#0B1320', ink: '#EBF0EC' },
  { id: 'dark', label: 'Mocha', am: 'ቡናማ', note: 'Warm Espresso Earth', bg: '#1D1612', ink: '#F7EDE6' },
  { id: 'paper', label: 'Paper', am: 'ንጹሕ ነጭ', note: 'Crisp White Daylight', bg: '#FFFFFF', ink: '#0F172A' },
] as const

export const ACCENTS = [
  { id: 'gold', label: 'Gold', am: 'ወርቅ', swatch: '#d4af37' },
  { id: 'amber', label: 'Amber', am: 'ማር ወርቅ', swatch: '#d97706' },
  { id: 'burgundy', label: 'Burgundy', am: 'ቀይ ወይን', swatch: '#8b1e3f' },
  { id: 'brown', label: 'Terracotta', am: 'ሸክላ', swatch: '#c85a32' },
  { id: 'green', label: 'Forest', am: 'ኤመራልድ', swatch: '#2d6a4f' },
  { id: 'blue', label: 'Sapphire', am: 'ሰንፔር', swatch: '#2563eb' },
  { id: 'plum', label: 'Amethyst', am: 'ሐምራዊ', swatch: '#7c3aed' },
  { id: 'slate', label: 'Slate', am: 'ብረት', swatch: '#64748b' },
] as const

/** How much of the two languages the reading screen shows at once. */
export const LANGUAGES = [
  { id: 'am', label: 'አማ', note: 'Amharic only' },
  { id: 'en', label: 'EN', note: 'English only' },
] as const

export type FontId = 'serif' | 'sans' | 'traditional'
export type ThemeId = 'light' | 'bw' | 'dark' | 'burgundy' | 'sepia' | 'gold' | 'night' | 'paper'
export type AccentId = 'gold' | 'burgundy' | 'amber' | 'brown' | 'blue' | 'green' | 'plum' | 'slate'
export type LanguageMode = 'am' | 'en' | 'both'

export interface Prefs {
  font: 'serif' | 'sans' | 'traditional'
  sizePx: number
  theme: ThemeId
  accent: 'gold' | 'burgundy' | 'amber' | 'brown' | 'blue' | 'green' | 'plum' | 'slate'
  /** Optional custom background color picked by the user */
  customColor?: string
  /** Which language the reading screen shows. */
  language: LanguageMode
  /** Line height of the scripture, as a multiple of the text size. */
  leading: number
  /** Space between one verse and the next, in pixels. */
  paragraphGap: number
  /** Whether the small verse numbers are shown at all. */
  verseNumbers: boolean
  /** Whether study feature pills (POV, Context, etc.) appear in the floating reader bar. */
  showStudyTools: boolean
}

const KEY = 'bible:prefs'

const DEFAULTS: Prefs = {
  font: 'serif',
  sizePx: 20,
  theme: 'bw',
  accent: 'brown',
  customColor: '',
  language: 'am',
  leading: 1.9,
  paragraphGap: 7,
  verseNumbers: true,
  showStudyTools: false,
}

const FONT_IDS = ['serif', 'sans', 'traditional'] as FontId[]
const THEME_IDS = ['light', 'bw', 'dark', 'burgundy', 'sepia', 'gold', 'night', 'paper'] as ThemeId[]
const ACCENT_IDS = ['gold', 'burgundy', 'amber', 'brown', 'blue', 'green', 'plum', 'slate'] as AccentId[]
const LANGUAGE_IDS = ['am', 'en', 'both'] as LanguageMode[]

function pick<T extends string>(value: unknown, allowed: T[], fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback
}

function numberIn(value: unknown, min: number, max: number, fallback: number) {
  return typeof value === 'number' && value >= min && value <= max ? value : fallback
}

function read(): Prefs {
  try {
    const raw = localStorage.getItem(KEY)
    const parsed = raw ? (JSON.parse(raw) as Partial<Record<keyof Prefs, unknown>>) : {}
    return {
      font: pick(parsed.font, FONT_IDS, DEFAULTS.font),
      sizePx: numberIn(parsed.sizePx, SIZE_RANGE.min, SIZE_RANGE.max, DEFAULTS.sizePx),
      theme: pick(parsed.theme, THEME_IDS, DEFAULTS.theme),
      accent: pick(parsed.accent, ACCENT_IDS, DEFAULTS.accent),
      customColor: typeof parsed.customColor === 'string' ? parsed.customColor : DEFAULTS.customColor,
      language: pick(parsed.language, LANGUAGE_IDS, DEFAULTS.language),
      leading: numberIn(parsed.leading, LEADING_RANGE.min, LEADING_RANGE.max, DEFAULTS.leading),
      paragraphGap: numberIn(
        parsed.paragraphGap,
        PARAGRAPH_RANGE.min,
        PARAGRAPH_RANGE.max,
        DEFAULTS.paragraphGap,
      ),
      verseNumbers: typeof parsed.verseNumbers === 'boolean' ? parsed.verseNumbers : DEFAULTS.verseNumbers,
      showStudyTools: typeof parsed.showStudyTools === 'boolean' ? parsed.showStudyTools : DEFAULTS.showStudyTools,
    }
  } catch {
    return { ...DEFAULTS }
  }
}

// The snapshot must keep the same identity between reads, or every render would
// see a new object and loop forever.
let current: Prefs = { ...DEFAULTS }
let loaded = false
let listeners: Array<() => void> = []

function ensureLoaded() {
  if (loaded) return
  loaded = true
  current = read()
}

function notify() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  ensureLoaded()
  listeners.push(listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

function getSnapshot() {
  ensureLoaded()
  return current
}

export function applyPrefs(prefs: Prefs) {
  const root = document.documentElement
  root.dataset.font = prefs.font
  root.dataset.size = String(prefs.sizePx)
  root.dataset.theme = prefs.theme
  root.dataset.accent = prefs.accent
  if (typeof root.style?.removeProperty === 'function') {
    root.style.removeProperty('--bg')
  } else {
    root.style.setProperty('--bg', '')
  }
  // Reading comfort is driven by variables rather than new classes, so the
  // stylesheet stays the single place that knows how text is laid out.
  root.style.setProperty('--reader-leading', String(prefs.leading))
  root.style.setProperty('--reader-gap', `${prefs.paragraphGap}px`)
  root.dataset.numbers = prefs.verseNumbers ? 'on' : 'off'
}

export function usePrefs(): Prefs {
  const prefs = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  applyPrefs(prefs)
  return prefs
}

export function setPref<K extends keyof Prefs>(key: K, value: Prefs[K]) {
  ensureLoaded()
  const next: Prefs = { ...current, [key]: value }
  current = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // A full store must not break reading.
  }
  applyPrefs(next)
  notify()
}