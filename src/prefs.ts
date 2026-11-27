import { useSyncExternalStore } from 'react'

/** Reading preferences: typeface, text size, theme and accent colour. */

export const FONTS = [
  { id: 'sans', label: 'Clean', am: 'ዘመናዊ', note: 'Plain and modern (Noto Sans)' },
  { id: 'serif', label: 'Serif', am: 'ሴሪፍ', note: 'Classic book serif (Noto Serif)' },
  { id: 'traditional', label: 'Traditional', am: 'ባሕላዊ', note: 'Ethiopic church book style (Abyssinica SIL)' },
  { id: 'nyala', label: 'Nyala', am: 'ኒያላ', note: 'Familiar Ethiopian typeface (Nyala / Ge’ez)' },
] as const

export const FONT_WEIGHTS = [
  { id: 'normal', label: 'Regular', am: 'መደበኛ' },
  { id: 'bold', label: 'Bold', am: 'ደማቅ' },
] as const

export type FontId = (typeof FONTS)[number]['id']
export type FontWeightId = (typeof FONT_WEIGHTS)[number]['id']

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
export const PARAGRAPH_RANGE = { min: 0, max: 20, step: 1 } as const

export const THEMES = [
  // Row 1: Daylight Neutrals & Fresh Greens
  { id: 'paper', label: 'Paper', am: 'ንጹሕ ነጭ', note: 'Crisp White Daylight', bg: '#FFFFFF', ink: '#0F172A' },
  { id: 'pearl', label: 'Pearl', am: 'ዕንቁ', note: 'Cool Silver Mist Gray', bg: '#E5E7EB', ink: '#1F2937' },
  { id: 'light', label: 'Green', am: 'አረንጓዴ', note: 'Serene Sage Matcha', bg: '#CAD7C8', ink: '#142918' },
  { id: 'mint', label: 'Mint', am: 'አዝሙድ', note: 'Refreshing Seafoam Mint', bg: '#C8EAD9', ink: '#0D3322' },

  // Row 2: Warm Daylight Parchment, Gold, Rose & Sky
  { id: 'sepia', label: 'Sepia', am: 'ብራና', note: 'Ancient Parchment Tan', bg: '#E8D8BA', ink: '#3A230B' },
  { id: 'gold', label: 'Gold', am: 'ወርቃማ', note: 'Sunny Honey Amber Gold', bg: '#F6DA86', ink: '#3D2702' },
  { id: 'rose', label: 'Rose', am: 'ጽጌረዳ', note: 'Blush Petal Pink', bg: '#F9CBD5', ink: '#4A1024' },
  { id: 'night', label: 'Sky', am: 'ሰማያዊ', note: 'Galilee Sky Blue', bg: '#C8E1F8', ink: '#0C2B4E' },

  // Row 3: Cool Dark & Night
  { id: 'bw', label: 'Black', am: 'ጥቁር', note: 'Pure OLED Black', bg: '#000000', ink: '#FFFFFF' },
  { id: 'charcoal', label: 'Charcoal', am: 'ከሰል', note: 'Matte Slate Charcoal', bg: '#22262B', ink: '#E2E8F0' },
  { id: 'ocean', label: 'Ocean', am: 'ውቅያኖስ', note: 'Deep Galilee Navy Ocean', bg: '#0F2038', ink: '#E0EAFC' },
  { id: 'olive', label: 'Olive', am: 'ወይራ', note: 'Deep Forest Olive', bg: '#14281B', ink: '#E2F2E6' },

  // Row 4: Rich Warm Jewel Dark
  { id: 'burgundy', label: 'Burgundy', am: 'ወይን', note: 'Imperial Velvet Wine', bg: '#360D1A', ink: '#FDF2F4' },
  { id: 'lavender', label: 'Lavender', am: 'ሐምራዊ', note: 'Royal Amethyst Purple', bg: '#26163B', ink: '#F3ECFB' },
  { id: 'dark', label: 'Mocha', am: 'ቡናማ', note: 'Warm Roasted Mocha', bg: '#291B14', ink: '#F7EDE6' },
  { id: 'clay', label: 'Clay', am: 'ሸክላ', note: 'Burnt Desert Clay', bg: '#381A16', ink: '#FBEAE5' },
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
  { id: 'crimson', label: 'Ruby', am: 'ሩቢ ቀይ', swatch: '#dc2626' },
  { id: 'teal', label: 'Teal', am: 'አረንጓዴ ሰማያዊ', swatch: '#0d9488' },
  { id: 'coral', label: 'Coral', am: 'ኮራል', swatch: '#ea580c' },
  { id: 'rose', label: 'Rose', am: 'ጽጌረዳ', swatch: '#e11d48' },
  { id: 'violet', label: 'Violet', am: 'ቫዮሌት', swatch: '#9333ea' },
  { id: 'emerald', label: 'Mint', am: 'ሚንት', swatch: '#059669' },
] as const

/** How much of the two languages the reading screen shows at once. */
export const LANGUAGES = [
  { id: 'am', label: 'አማ', note: 'Amharic only' },
  { id: 'en', label: 'EN', note: 'English only' },
] as const

export type ThemeId =
  | 'paper'
  | 'pearl'
  | 'light'
  | 'mint'
  | 'sepia'
  | 'gold'
  | 'rose'
  | 'night'
  | 'bw'
  | 'charcoal'
  | 'ocean'
  | 'olive'
  | 'burgundy'
  | 'lavender'
  | 'dark'
  | 'clay'
export type AccentId =
  | 'gold'
  | 'burgundy'
  | 'amber'
  | 'brown'
  | 'blue'
  | 'green'
  | 'plum'
  | 'slate'
  | 'crimson'
  | 'teal'
  | 'coral'
  | 'rose'
  | 'violet'
  | 'emerald'
  | 'custom'
export type LanguageMode = 'am' | 'en' | 'both'

export interface Prefs {
  font: FontId
  fontWeight?: FontWeightId
  sizePx: number
  theme: ThemeId
  accent: AccentId
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
  font: 'sans',
  fontWeight: 'normal',
  sizePx: 20,
  theme: 'light',
  accent: 'brown',
  customColor: '',
  language: 'am',
  leading: 1.9,
  paragraphGap: 2,
  verseNumbers: true,
  showStudyTools: false,
}

const FONT_IDS = ['serif', 'sans', 'traditional', 'nyala'] as FontId[]
const THEME_IDS = [
  'paper',
  'pearl',
  'light',
  'mint',
  'sepia',
  'gold',
  'rose',
  'night',
  'bw',
  'charcoal',
  'ocean',
  'olive',
  'burgundy',
  'lavender',
  'dark',
  'clay',
] as ThemeId[]
const ACCENT_IDS = [
  'gold',
  'burgundy',
  'amber',
  'brown',
  'blue',
  'green',
  'plum',
  'slate',
  'crimson',
  'teal',
  'coral',
  'rose',
  'violet',
  'emerald',
  'custom',
] as AccentId[]
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
    const parsed = raw
      ? (JSON.parse(raw) as Partial<Record<keyof Prefs, unknown>> & { mz?: number })
      : {}

    // One-time move to the Mezmur look: cream canvas and clean sans type.
    // Once the flag is stored, any theme or typeface the reader picks is kept.
    const migrated = parsed.mz === 1
    const theme = migrated ? pick(parsed.theme, THEME_IDS, DEFAULTS.theme) : DEFAULTS.theme
    const font = migrated ? pick(parsed.font, FONT_IDS, DEFAULTS.font) : DEFAULTS.font
    const paragraphGap = migrated
      ? numberIn(parsed.paragraphGap, PARAGRAPH_RANGE.min, PARAGRAPH_RANGE.max, DEFAULTS.paragraphGap)
      : DEFAULTS.paragraphGap

    const prefs: Prefs = {
      font,
      sizePx: numberIn(parsed.sizePx, SIZE_RANGE.min, SIZE_RANGE.max, DEFAULTS.sizePx),
      theme,
      accent: pick(parsed.accent, ACCENT_IDS, DEFAULTS.accent),
      customColor: typeof parsed.customColor === 'string' ? parsed.customColor : DEFAULTS.customColor,
      language: pick(parsed.language, LANGUAGE_IDS, DEFAULTS.language),
      leading: numberIn(parsed.leading, LEADING_RANGE.min, LEADING_RANGE.max, DEFAULTS.leading),
      paragraphGap,
      verseNumbers: typeof parsed.verseNumbers === 'boolean' ? parsed.verseNumbers : DEFAULTS.verseNumbers,
      showStudyTools: typeof parsed.showStudyTools === 'boolean' ? parsed.showStudyTools : DEFAULTS.showStudyTools,
    }

    if (!migrated) {
      try {
        localStorage.setItem(KEY, JSON.stringify({ ...parsed, theme, font, paragraphGap: 2, mz: 1 }))
      } catch {
        // A full or blocked store just means the migration runs again next time.
      }
    }

    return prefs
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

function hexToRgba(hex: string, alpha: number): string {
  let c = hex.replace('#', '')
  if (c.length === 3) c = c.split('').map((x) => x + x).join('')
  const num = parseInt(c, 16)
  if (isNaN(num)) return `rgba(212, 175, 55, ${alpha})`
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function getContrastInk(hex: string): string {
  let c = hex.replace('#', '')
  if (c.length === 3) c = c.split('').map((x) => x + x).join('')
  const num = parseInt(c, 16)
  if (isNaN(num)) return '#FFFFFF'
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 150 ? '#0E1013' : '#FFFFFF'
}

export function applyPrefs(prefs: Prefs) {
  const root = document.documentElement
  root.dataset.font = prefs.font
  root.dataset.size = String(prefs.sizePx)
  root.dataset.theme = prefs.theme
  root.dataset.accent = prefs.accent

  const fontMap: Record<FontId, string> = {
    serif: '"Noto Serif Ethiopic", Georgia, "Times New Roman", serif',
    sans: '"Noto Sans Ethiopic", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    traditional: '"Abyssinica SIL", "Noto Serif Ethiopic", Georgia, serif',
    nyala: 'Nyala, Kefa, "Abyssinica SIL", "Noto Sans Ethiopic", sans-serif',
  }
  root.style.setProperty('--reader-font', fontMap[prefs.font] || fontMap.serif)
  root.style.setProperty('--reader-weight', prefs.fontWeight === 'bold' ? '700' : '400')
  root.style.setProperty('--reader-leading', String(prefs.leading || 1.85))

  if (prefs.accent === 'custom' && prefs.customColor) {
    root.style.setProperty('--accent', prefs.customColor)
    root.style.setProperty('--accent-soft', hexToRgba(prefs.customColor, 0.18))
    root.style.setProperty('--accent-ink', getContrastInk(prefs.customColor))
  } else {
    root.style.removeProperty('--accent')
    root.style.removeProperty('--accent-soft')
    root.style.removeProperty('--accent-ink')
  }

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