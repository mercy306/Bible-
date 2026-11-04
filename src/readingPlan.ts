import { useSyncExternalStore } from 'react'

export interface PlanBook {
  nr: number
  en: string
  am: string
  chapters: number
  testament: 'OT' | 'NT'
}

export const BIBLE_BOOKS: PlanBook[] = [
  { nr: 1, en: 'Genesis', am: 'ኦሪት ዘፍጥረት', chapters: 50, testament: 'OT' },
  { nr: 2, en: 'Exodus', am: 'ኦሪት ዘጸአት', chapters: 40, testament: 'OT' },
  { nr: 3, en: 'Leviticus', am: 'ኦሪት ዘሌዋውያን', chapters: 27, testament: 'OT' },
  { nr: 4, en: 'Numbers', am: 'ኦሪት ዘኍልቍ', chapters: 36, testament: 'OT' },
  { nr: 5, en: 'Deuteronomy', am: 'ኦሪት ዘዳግም', chapters: 34, testament: 'OT' },
  { nr: 6, en: 'Joshua', am: 'ኢያሱ', chapters: 24, testament: 'OT' },
  { nr: 7, en: 'Judges', am: 'መሳፍንት', chapters: 21, testament: 'OT' },
  { nr: 8, en: 'Ruth', am: 'ሩት', chapters: 4, testament: 'OT' },
  { nr: 9, en: '1 Samuel', am: '1 ሳሙኤል', chapters: 31, testament: 'OT' },
  { nr: 10, en: '2 Samuel', am: '2 ሳሙኤል', chapters: 24, testament: 'OT' },
  { nr: 11, en: '1 Kings', am: '1 ነገሥት', chapters: 22, testament: 'OT' },
  { nr: 12, en: '2 Kings', am: '2 ነገሥት', chapters: 25, testament: 'OT' },
  { nr: 13, en: '1 Chronicles', am: '1 ዜና መዋዕል', chapters: 29, testament: 'OT' },
  { nr: 14, en: '2 Chronicles', am: '2 ዜና መዋዕል', chapters: 36, testament: 'OT' },
  { nr: 15, en: 'Ezra', am: 'ዕዝራ', chapters: 10, testament: 'OT' },
  { nr: 16, en: 'Nehemiah', am: 'ነህምያ', chapters: 13, testament: 'OT' },
  { nr: 17, en: 'Esther', am: 'አስቴር', chapters: 10, testament: 'OT' },
  { nr: 18, en: 'Job', am: 'ኢዮብ', chapters: 42, testament: 'OT' },
  { nr: 19, en: 'Psalms', am: 'መዝሙር', chapters: 150, testament: 'OT' },
  { nr: 20, en: 'Proverbs', am: 'ምሳሌ', chapters: 31, testament: 'OT' },
  { nr: 21, en: 'Ecclesiastes', am: 'መክብብ', chapters: 12, testament: 'OT' },
  { nr: 22, en: 'Song of Songs', am: 'መኃልይ', chapters: 8, testament: 'OT' },
  { nr: 23, en: 'Isaiah', am: 'ኢሳይያስ', chapters: 66, testament: 'OT' },
  { nr: 24, en: 'Jeremiah', am: 'ኤርምያስ', chapters: 52, testament: 'OT' },
  { nr: 25, en: 'Lamentations', am: 'ሰቆቃወ ኤርምያስ', chapters: 5, testament: 'OT' },
  { nr: 26, en: 'Ezekiel', am: 'ሕዝቅኤል', chapters: 48, testament: 'OT' },
  { nr: 27, en: 'Daniel', am: 'ዳንኤል', chapters: 12, testament: 'OT' },
  { nr: 28, en: 'Hosea', am: 'ሆሴዕ', chapters: 14, testament: 'OT' },
  { nr: 29, en: 'Joel', am: 'ኢዮኤል', chapters: 3, testament: 'OT' },
  { nr: 30, en: 'Amos', am: 'አሞጽ', chapters: 9, testament: 'OT' },
  { nr: 31, en: 'Obadiah', am: 'አብድዩ', chapters: 1, testament: 'OT' },
  { nr: 32, en: 'Jonah', am: 'ዮናስ', chapters: 4, testament: 'OT' },
  { nr: 33, en: 'Micah', am: 'ሚክያስ', chapters: 7, testament: 'OT' },
  { nr: 34, en: 'Nahum', am: 'ናሆም', chapters: 3, testament: 'OT' },
  { nr: 35, en: 'Habakkuk', am: 'ዕንባቆም', chapters: 3, testament: 'OT' },
  { nr: 36, en: 'Zephaniah', am: 'ሶፎንያስ', chapters: 3, testament: 'OT' },
  { nr: 37, en: 'Haggai', am: 'ሐጌ', chapters: 2, testament: 'OT' },
  { nr: 38, en: 'Zechariah', am: 'ዘካርያስ', chapters: 14, testament: 'OT' },
  { nr: 39, en: 'Malachi', am: 'ሚልክያስ', chapters: 4, testament: 'OT' },
  { nr: 40, en: 'Matthew', am: 'ማቴዎስ', chapters: 28, testament: 'NT' },
  { nr: 41, en: 'Mark', am: 'ማርቆስ', chapters: 16, testament: 'NT' },
  { nr: 42, en: 'Luke', am: 'ሉቃስ', chapters: 24, testament: 'NT' },
  { nr: 43, en: 'John', am: 'ዮሐንስ', chapters: 21, testament: 'NT' },
  { nr: 44, en: 'Acts', am: 'የሐዋርያት ሥራ', chapters: 28, testament: 'NT' },
  { nr: 45, en: 'Romans', am: 'ሮሜ', chapters: 16, testament: 'NT' },
  { nr: 46, en: '1 Corinthians', am: '1 ቆሮንቶስ', chapters: 16, testament: 'NT' },
  { nr: 47, en: '2 Corinthians', am: '2 ቆሮንቶስ', chapters: 13, testament: 'NT' },
  { nr: 48, en: 'Galatians', am: 'ገላትያ', chapters: 6, testament: 'NT' },
  { nr: 49, en: 'Ephesians', am: 'ኤፌሶን', chapters: 6, testament: 'NT' },
  { nr: 50, en: 'Philippians', am: 'ፊልጵስዩስ', chapters: 4, testament: 'NT' },
  { nr: 51, en: 'Colossians', am: 'ቆላስይስ', chapters: 4, testament: 'NT' },
  { nr: 52, en: '1 Thessalonians', am: '1 ተሰሎንቄ', chapters: 5, testament: 'NT' },
  { nr: 53, en: '2 Thessalonians', am: '2 ተሰሎንቄ', chapters: 3, testament: 'NT' },
  { nr: 54, en: '1 Timothy', am: '1 ጢሞቴዎስ', chapters: 6, testament: 'NT' },
  { nr: 55, en: '2 Timothy', am: '2 ጢሞቴዎስ', chapters: 4, testament: 'NT' },
  { nr: 56, en: 'Titus', am: 'ቲቶ', chapters: 3, testament: 'NT' },
  { nr: 57, en: 'Philemon', am: 'ፊልሞና', chapters: 1, testament: 'NT' },
  { nr: 58, en: 'Hebrews', am: 'ዕብራውያን', chapters: 13, testament: 'NT' },
  { nr: 59, en: 'James', am: 'ያዕቆብ', chapters: 5, testament: 'NT' },
  { nr: 60, en: '1 Peter', am: '1 ጴጥሮስ', chapters: 5, testament: 'NT' },
  { nr: 61, en: '2 Peter', am: '2 ጴጥሮስ', chapters: 3, testament: 'NT' },
  { nr: 62, en: '1 John', am: '1 ዮሐንስ', chapters: 5, testament: 'NT' },
  { nr: 63, en: '2 John', am: '2 ዮሐንስ', chapters: 1, testament: 'NT' },
  { nr: 64, en: '3 John', am: '3 ዮሐንስ', chapters: 1, testament: 'NT' },
  { nr: 65, en: 'Jude', am: 'ይሁዳ', chapters: 1, testament: 'NT' },
  { nr: 66, en: 'Revelation', am: 'የዮሐንስ ራእይ', chapters: 22, testament: 'NT' },
]

export const BOOK_BY_NR = new Map<number, PlanBook>(BIBLE_BOOKS.map((b) => [b.nr, b]))

export interface PlanChapter {
  book: number
  chapter: number
}

export interface PlanDay {
  day: number
  chapters: PlanChapter[]
}

export interface ReadingPlanDef {
  id: string
  titleAm: string
  titleEn: string
  descAm: string
  descEn: string
  icon: string
  totalDays: number
  totalChapters: number
  days: PlanDay[]
}

function buildChunkedDays(chapters: PlanChapter[], totalDays: number): PlanDay[] {
  const result: PlanDay[] = []
  let rem = chapters.length
  let off = 0
  for (let d = 1; d <= totalDays; d++) {
    const daysLeft = totalDays - d + 1
    const count = Math.ceil(rem / daysLeft)
    result.push({
      day: d,
      chapters: chapters.slice(off, off + count),
    })
    off += count
    rem -= count
  }
  return result
}

// Generate all 1,189 Bible chapters in canonical order
const ALL_CHAPTERS: PlanChapter[] = []
for (const b of BIBLE_BOOKS) {
  for (let c = 1; c <= b.chapters; c++) {
    ALL_CHAPTERS.push({ book: b.nr, chapter: c })
  }
}

// Generate New Testament (books 40-66, 260 chapters)
const NT_CHAPTERS = ALL_CHAPTERS.filter((c) => c.book >= 40)

// Generate Psalms & Proverbs (books 19 and 20)
function buildPsalmsAndProverbs(): PlanDay[] {
  const days: PlanDay[] = []
  for (let d = 1; d <= 30; d++) {
    const chapters: PlanChapter[] = []
    const startPs = (d - 1) * 5 + 1
    for (let p = startPs; p <= startPs + 4 && p <= 150; p++) {
      chapters.push({ book: 19, chapter: p })
    }
    chapters.push({ book: 20, chapter: d })
    if (d === 30) {
      chapters.push({ book: 20, chapter: 31 })
    }
    days.push({ day: d, chapters })
  }
  return days
}

// Generate 4 Gospels (books 40-43, 89 chapters)
const GOSPEL_CHAPTERS = ALL_CHAPTERS.filter((c) => c.book >= 40 && c.book <= 43)

export const READING_PLANS: Record<string, ReadingPlanDef> = {
  year: {
    id: 'year',
    titleAm: 'በ1 ዓመት ሙሉ መጽሐፍ ቅዱስ',
    titleEn: 'Whole Bible in 1 Year',
    descAm: 'ከኦሪት ዘፍጥረት እስከ ዮሐንስ ራእይ በ365 ቀናት (በቀን ~3-4 ምዕራፎች)',
    descEn: 'From Genesis to Revelation in 365 days (~3-4 chapters/day)',
    icon: '📖',
    totalDays: 365,
    totalChapters: 1189,
    days: buildChunkedDays(ALL_CHAPTERS, 365),
  },
  nt90: {
    id: 'nt90',
    titleAm: 'ሐዲስ ኪዳን በ90 ቀናት',
    titleEn: 'New Testament in 90 Days',
    descAm: '260 የሐዲስ ኪዳን ምዕራፎች በ3 ወራት (በቀን ~3 ምዕራፎች)',
    descEn: 'All 260 New Testament chapters in 3 months (~3 chapters/day)',
    icon: '✝️',
    totalDays: 90,
    totalChapters: 260,
    days: buildChunkedDays(NT_CHAPTERS, 90),
  },
  psalms30: {
    id: 'psalms30',
    titleAm: 'መዝሙርና ምሳሌ በ30 ቀናት',
    titleEn: 'Psalms & Proverbs in 30 Days',
    descAm: '150 መዝሙራትና 31 የምሳሌ ምዕራፎች በ1 ወር (በቀን 5 መዝሙር + 1 ምሳሌ)',
    descEn: 'Daily prayer and wisdom: 5 Psalms + 1 Proverbs daily for 30 days',
    icon: '🕊️',
    totalDays: 30,
    totalChapters: 181,
    days: buildPsalmsAndProverbs(),
  },
  gospels30: {
    id: 'gospels30',
    titleAm: '4ቱ ወንጌላት በ30 ቀናት',
    titleEn: 'The 4 Gospels in 30 Days',
    descAm: 'የኢየሱስ ክርስቶስ ሕይወትና ትምህርት በማቴዎስ፣ ማርቆስ፣ ሉቃስና ዮሐንስ',
    descEn: 'Life and teachings of Jesus across all 4 Gospels in 30 days',
    icon: '🌟',
    totalDays: 30,
    totalChapters: 89,
    days: buildChunkedDays(GOSPEL_CHAPTERS, 30),
  },
}

export const PLAN_LIST: ReadingPlanDef[] = Object.values(READING_PLANS)

// Storage keys
const KEY_COMPLETED = 'bible:reading-completed-chapters'
const KEY_ACTIVE_PLAN = 'bible:reading-plan-active'
const KEY_START_DATE = 'bible:reading-plan-start'
const KEY_STREAK = 'bible:reading-streak'

export interface ReadingStreak {
  currentStreak: number
  bestStreak: number
  lastReadDate: string // YYYY-MM-DD
  totalRead: number
}

function getTodayString(): string {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function getYesterdayString(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

let completedSet: Set<string> = new Set()
let activePlanId = 'year'
let planStartDate = getTodayString()
let streakData: ReadingStreak = {
  currentStreak: 0,
  bestStreak: 0,
  lastReadDate: '',
  totalRead: 0,
}
let planStoreLoaded = false

function loadPlanStore() {
  if (planStoreLoaded) return
  planStoreLoaded = true
  try {
    const rawCompleted = localStorage.getItem(KEY_COMPLETED)
    if (rawCompleted) {
      completedSet = new Set(JSON.parse(rawCompleted))
    }
  } catch {
    completedSet = new Set()
  }

  activePlanId = localStorage.getItem(KEY_ACTIVE_PLAN) || 'year'
  if (!READING_PLANS[activePlanId]) activePlanId = 'year'

  planStartDate = localStorage.getItem(KEY_START_DATE) || getTodayString()

  try {
    const rawStreak = localStorage.getItem(KEY_STREAK)
    if (rawStreak) {
      streakData = JSON.parse(rawStreak)
    }
  } catch {
    streakData = { currentStreak: 0, bestStreak: 0, lastReadDate: '', totalRead: 0 }
  }
}

let listeners: Array<() => void> = []
function notify() {
  updateSnapshot()
  for (const listener of listeners) listener()
}

export function subscribePlan(listener: () => void) {
  listeners.push(listener)
  window.addEventListener('storage', listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
    window.removeEventListener('storage', listener)
  }
}

function persistCompleted() {
  try {
    localStorage.setItem(KEY_COMPLETED, JSON.stringify([...completedSet]))
  } catch {
    // ignore
  }
  notify()
}

function recordActivity() {
  const today = getTodayString()
  const yesterday = getYesterdayString()

  if (streakData.lastReadDate === today) {
    // Already recorded streak for today
    streakData.totalRead = completedSet.size
  } else if (streakData.lastReadDate === yesterday) {
    // Consecutive day
    streakData.currentStreak += 1
    streakData.lastReadDate = today
    streakData.totalRead = completedSet.size
  } else {
    // Streak reset or starting
    streakData.currentStreak = 1
    streakData.lastReadDate = today
    streakData.totalRead = completedSet.size
  }

  if (streakData.currentStreak > streakData.bestStreak) {
    streakData.bestStreak = streakData.currentStreak
  }

  try {
    localStorage.setItem(KEY_STREAK, JSON.stringify(streakData))
  } catch {
    // ignore
  }
}

export function isChapterRead(book: number, chapter: number): boolean {
  loadPlanStore()
  return completedSet.has(`${book}:${chapter}`)
}

export function toggleChapterRead(book: number, chapter: number): boolean {
  loadPlanStore()
  const key = `${book}:${chapter}`
  const willBeDone = !completedSet.has(key)
  if (willBeDone) {
    completedSet.add(key)
    recordActivity()
  } else {
    completedSet.delete(key)
    streakData.totalRead = completedSet.size
    try {
      localStorage.setItem(KEY_STREAK, JSON.stringify(streakData))
    } catch {
      // ignore
    }
  }
  persistCompleted()
  return willBeDone
}

export function markDayRead(planId: string, dayNr: number, read: boolean) {
  loadPlanStore()
  const plan = READING_PLANS[planId]
  if (!plan) return
  const day = plan.days.find((d) => d.day === dayNr)
  if (!day) return

  for (const c of day.chapters) {
    const key = `${c.book}:${c.chapter}`
    if (read) completedSet.add(key)
    else completedSet.delete(key)
  }
  if (read) recordActivity()
  else {
    streakData.totalRead = completedSet.size
    try {
      localStorage.setItem(KEY_STREAK, JSON.stringify(streakData))
    } catch {}
  }
  persistCompleted()
}

export function setActivePlan(planId: string) {
  loadPlanStore()
  if (!READING_PLANS[planId]) return
  activePlanId = planId
  try {
    localStorage.setItem(KEY_ACTIVE_PLAN, planId)
  } catch {}
  notify()
}

export function resetPlanStartDate() {
  loadPlanStore()
  planStartDate = getTodayString()
  try {
    localStorage.setItem(KEY_START_DATE, planStartDate)
  } catch {}
  notify()
}

export function getActivePlanId(): string {
  loadPlanStore()
  return activePlanId
}

export function getStreak(): ReadingStreak {
  loadPlanStore()
  return streakData
}

export function getCompletedCount(): number {
  loadPlanStore()
  return completedSet.size
}

/** Formats a group of chapters, e.g. "ዘፍጥረት 1-3" or "Genesis 1-3" */
export function formatPlanChapterRange(chapters: PlanChapter[], lang: 'am' | 'en' = 'am'): string {
  if (chapters.length === 0) return ''
  const isEn = lang === 'en'

  // If all chapters belong to the same book
  const firstBook = chapters[0].book
  const allSame = chapters.every((c) => c.book === firstBook)
  const bookInfo = BOOK_BY_NR.get(firstBook)
  const bookName = isEn ? (bookInfo?.en ?? 'Book') : (bookInfo?.am ?? 'መጽሐፍ')

  if (allSame) {
    if (chapters.length === 1) {
      return `${bookName} ${chapters[0].chapter}`
    }
    const firstCh = chapters[0].chapter
    const lastCh = chapters[chapters.length - 1].chapter
    return `${bookName} ${firstCh}–${lastCh}`
  }

  // Multi-book readings (e.g. Psalms & Proverbs, or book transitions)
  return chapters
    .map((c) => {
      const b = BOOK_BY_NR.get(c.book)
      const name = isEn ? (b?.en ?? '') : (b?.am ?? '')
      return `${name} ${c.chapter}`
    })
    .join(', ')
}

export interface PlanProgressInfo {
  plan: ReadingPlanDef
  activePlanId: string
  completedChaptersCount: number
  totalChaptersInPlan: number
  planCompletedPercent: number
  bibleCompletedPercent: number
  totalBibleChaptersRead: number
  currentDay: number
  todayDayData: PlanDay | null
  todayChaptersCompletedCount: number
  isTodayDone: boolean
  streak: ReadingStreak
  isChapterDone: (book: number, chapter: number) => boolean
}

function computePlanProgress(): PlanProgressInfo {
  loadPlanStore()
  const plan = READING_PLANS[activePlanId] || READING_PLANS.year

  // Calculate day index based on start date
  const start = new Date(planStartDate).getTime()
  const today = new Date(getTodayString()).getTime()
  const diffDays = Math.max(0, Math.floor((today - start) / 86400000))
  const currentDay = Math.min(plan.totalDays, diffDays + 1)

  // Count how many chapters in this plan are completed
  let planCompletedCount = 0
  for (const day of plan.days) {
    for (const c of day.chapters) {
      if (completedSet.has(`${c.book}:${c.chapter}`)) {
        planCompletedCount += 1
      }
    }
  }

  const todayDayData = plan.days.find((d) => d.day === currentDay) || plan.days[0]
  let todayDoneCount = 0
  if (todayDayData) {
    for (const c of todayDayData.chapters) {
      if (completedSet.has(`${c.book}:${c.chapter}`)) {
        todayDoneCount += 1
      }
    }
  }

  const isTodayDone =
    todayDayData && todayDayData.chapters.length > 0 && todayDoneCount === todayDayData.chapters.length

  const planCompletedPercent = Math.round((planCompletedCount / plan.totalChapters) * 100)
  const bibleCompletedPercent = Math.round((completedSet.size / 1189) * 100)

  return {
    plan,
    activePlanId,
    completedChaptersCount: planCompletedCount,
    totalChaptersInPlan: plan.totalChapters,
    planCompletedPercent,
    bibleCompletedPercent,
    totalBibleChaptersRead: completedSet.size,
    currentDay,
    todayDayData,
    todayChaptersCompletedCount: todayDoneCount,
    isTodayDone,
    streak: streakData,
    isChapterDone: (book: number, chapter: number) => completedSet.has(`${book}:${chapter}`),
  }
}

// React snapshot cache for useSyncExternalStore
let cachedSnapshot: PlanProgressInfo = computePlanProgress()

function getSnapshot(): PlanProgressInfo {
  return cachedSnapshot
}

function updateSnapshot() {
  cachedSnapshot = computePlanProgress()
}


export function useReadingPlan(): PlanProgressInfo {
  return useSyncExternalStore(subscribePlan, getSnapshot, getSnapshot)
}
