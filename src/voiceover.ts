import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Voiceover and Text-to-Speech Engine for Amharic and English.
 *
 * Provides verse-by-verse and single-verse playback for both languages:
 * - English: uses native browser SpeechSynthesis (offline, high performance).
 * - Amharic: uses native SpeechSynthesis if an Amharic voice is installed;
 *   otherwise falls back to high-definition Amharic audio stream via Google Translate TTS
 *   (chunked by clause/sentence to ensure seamless natural reading without timeouts).
 */

const FIDEL_FAMILIES = [
  { chars: 'ሀሁሂሃሄህሆ', c: 'h' },
  { chars: 'ለሉሊላሌልሎ', c: 'l' },
  { chars: 'ሐሑሒሓሔሕሖ', c: 'h' },
  { chars: 'መሙሚማሜምሞ', c: 'm' },
  { chars: 'ሠሡሢሣሤሥሦ', c: 's' },
  { chars: 'ረሩሪራሬርሮ', c: 'r' },
  { chars: 'ሰሱሲሳሴስሶ', c: 's' },
  { chars: 'ሸሹሺሻሼሽሾ', c: 'sh' },
  { chars: 'ቀቁቂቃቄቅቆ', c: 'k' },
  { chars: 'በቡቢባቤብቦ', c: 'b' },
  { chars: 'ተቱቲታቴትቶ', c: 't' },
  { chars: 'ቸቹቺቻቼችቾ', c: 'ch' },
  { chars: 'ኀኁኂኃኄኅኆ', c: 'h' },
  { chars: 'ነኑኒናኔንኖ', c: 'n' },
  { chars: 'ኘኙኚኛኜኝኞ', c: 'ny' },
  { chars: 'አኡኢኣኤእኦ', c: '' },
  { chars: 'ከኩኪካኬክኮ', c: 'k' },
  { chars: 'ኸኹኺኻኼኽኾ', c: 'kh' },
  { chars: 'ወዉዊዋዌውዎ', c: 'w' },
  { chars: 'ዐዑዒዓዔዕዖ', c: '' },
  { chars: 'ዘዙዚዛዜዝዞ', c: 'z' },
  { chars: 'ዠዡዢዣዤዥዦ', c: 'zh' },
  { chars: 'የዩዪያዬይዮ', c: 'y' },
  { chars: 'ደዱዲዳዴድዶ', c: 'd' },
  { chars: 'ጀጁጂጃጄጅጆ', c: 'j' },
  { chars: 'ገጉጊጋጌግጎ', c: 'g' },
  { chars: 'ጠጡጢጣጤጥጦ', c: 't' },
  { chars: 'ጨጩጪጫጬጭጮ', c: 'ch' },
  { chars: 'ጰጱጲጳጴጵጶ', c: 'p' },
  { chars: 'ጸጹጺጻጼጽጾ', c: 'ts' },
  { chars: 'ፀፁፂፃፄፅፆ', c: 'ts' },
  { chars: 'ፈፉፊፋፌፍፎ', c: 'f' },
  { chars: 'ፐፑፒፓፔፕፖ', c: 'p' },
  { chars: 'ቨቩቪቫቬቭቮ', c: 'v' },
]

const FIDEL_VOWELS = ['e', 'u', 'i', 'a', 'ie', '', 'o']
const FIDEL_MAP: Record<string, string> = {
  'ሏ': 'lwa', 'ሟ': 'mwa', 'ሯ': 'rwa', 'ሷ': 'swa', 'ሿ': 'shwa', 'ቋ': 'kwa', 'ቧ': 'bwa',
  'ቷ': 'twa', 'ቿ': 'chwa', 'ኋ': 'hwa', 'ኗ': 'nwa', 'ኟ': 'nywa', 'ኳ': 'kwa', 'ዟ': 'zwa',
  'ዧ': 'zhwa', 'ዷ': 'dwa', 'ጇ': 'jwa', 'ጓ': 'gwa', 'ጧ': 'twa', 'ጯ': 'chwa', 'ጷ': 'pwa',
  'ጿ': 'tswa', 'ፏ': 'fwa',
}

for (const fam of FIDEL_FAMILIES) {
  for (let i = 0; i < fam.chars.length; i++) {
    const ch = fam.chars[i]
    const v = FIDEL_VOWELS[i]
    FIDEL_MAP[ch] = fam.c + (v || (fam.c ? '' : 'e'))
  }
}

/**
 * Phonetically transliterates Amharic / Ge'ez text to Latin syllables
 * for offline speech synthesis fallback when no native Amharic TTS voice exists.
 */
export function transliterateEthiopic(text: string): string {
  let res = ''
  for (const ch of text) {
    if (ch === '።' || ch === '፡') res += ' '
    else if (ch === '፤' || ch === '፥') res += ', '
    else res += FIDEL_MAP[ch] !== undefined ? FIDEL_MAP[ch] : ch
  }
  return res.replace(/\s+/g, ' ').trim()
}

export const ETHIOPIC_REGEX = /[\u1200-\u137F]/

/**
 * Checks if a string contains Ethiopic / Ge'ez characters (Amharic).
 */
export function isAmharicText(text: string): boolean {
  return ETHIOPIC_REGEX.test(text)
}

/**
 * Strips verse numbers, footnote superscripts, and editorial brackets before speaking.
 */
export function cleanSpeechText(text: string): string {
  if (!text) return ''
  return text
    // Remove leading verse numbers like "1 ", "1:1 ", "(1) "
    .replace(/^(\(\d+\)|\d+[:.]?\d*)\s+/, '')
    // Remove footnote references like "[a]", "(1)", "[1]"
    .replace(/\[\w+\]|\(\d+\)/g, '')
    // Normalize Ge'ez word separator to space for smoother TTS pause
    .replace(/፡/g, ' ')
    // Normalize multiple spaces
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Splits longer text into natural sentence/clause chunks under maxLen characters
 * so that Google TTS requests and SpeechSynthesis utterances don't get truncated or time out.
 */
export function splitTextIntoChunks(text: string, maxLen = 160): string[] {
  const cleaned = cleanSpeechText(text)
  if (!cleaned) return []
  if (cleaned.length <= maxLen) return [cleaned]

  const chunks: string[] = []
  // Split on Ge'ez or Latin sentence boundaries: ።, ፤, ., ?, !, or semicolons/commas
  const parts = cleaned.split(/(?<=[።፤.?!,])\s*/)
  let current = ''

  for (const part of parts) {
    if (!part) continue
    if ((current + ' ' + part).trim().length <= maxLen) {
      current = (current + ' ' + part).trim()
    } else {
      if (current) chunks.push(current)
      if (part.length <= maxLen) {
        current = part
      } else {
        // Part is still too long: split on space
        const words = part.split(/\s+/)
        let sub = ''
        for (const w of words) {
          if ((sub + ' ' + w).trim().length <= maxLen) {
            sub = (sub + ' ' + w).trim()
          } else {
            if (sub) chunks.push(sub)
            sub = w
          }
        }
        current = sub
      }
    }
  }
  if (current) chunks.push(current)
  return chunks.length > 0 ? chunks : [cleaned]
}

// Single persistent HTMLAudioElement for online streaming playback
let activeAudio: HTMLAudioElement | null = null
let activeAudioCleanup: (() => void) | null = null
let isAudioStreamActive = false

/**
 * Stop any current speech or audio playback immediately.
 */
export function stopAllSpeech(): void {
  // Cancel browser SpeechSynthesis
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel()
    } catch {
      // ignore
    }
  }
  // Stop active audio stream
  if (activeAudio) {
    try {
      activeAudio.pause()
      activeAudio.currentTime = 0
      activeAudio.src = ''
    } catch {
      // ignore
    }
    activeAudio = null
  }
  isAudioStreamActive = false
  if (activeAudioCleanup) {
    activeAudioCleanup()
    activeAudioCleanup = null
  }
}

/**
 * Pause current speech.
 */
export function pauseSpeech(): void {
  if (isAudioStreamActive && activeAudio) {
    try {
      activeAudio.pause()
    } catch {
      // ignore
    }
  } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.pause()
    } catch {
      // ignore
    }
  }
}

/**
 * Resume current speech.
 */
export function resumeSpeech(): void {
  if (isAudioStreamActive && activeAudio) {
    try {
      activeAudio.play().catch(() => {})
    } catch {
      // ignore
    }
  } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.resume()
    } catch {
      // ignore
    }
  }
}

/**
 * Query available browser voices.
 */
export function getAvailableVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return Promise.resolve([])
  }
  return new Promise((resolve) => {
    const synth = window.speechSynthesis
    let voices = synth.getVoices()
    if (voices.length > 0) {
      resolve(voices)
      return
    }
    const handler = () => {
      synth.removeEventListener('voiceschanged', handler)
      voices = synth.getVoices()
      resolve(voices)
    }
    synth.addEventListener('voiceschanged', handler)
    // Timeout fallback if event never fires
    setTimeout(() => {
      synth.removeEventListener('voiceschanged', handler)
      resolve(synth.getVoices())
    }, 500)
  })
}

export type VoiceGender = 'male' | 'female'

const VOICE_GENDER_KEY = 'bible:voice-gender'

export function getPreferredVoiceGender(): VoiceGender {
  try {
    const saved = localStorage.getItem(VOICE_GENDER_KEY)
    if (saved === 'female' || saved === 'male') return saved
  } catch {}
  return 'male' // Default is male
}

export function setPreferredVoiceGender(gender: VoiceGender): void {
  try {
    localStorage.setItem(VOICE_GENDER_KEY, gender)
  } catch {}
}

/**
 * Find the best native voice for the given language and gender.
 */
export async function findBestVoice(
  lang: 'am' | 'en',
  gender: VoiceGender = 'male',
): Promise<SpeechSynthesisVoice | null> {
  const voices = await getAvailableVoices()
  const maleKeywords = /david|mark|alex|daniel|guy|male|fred|george|oliver|tom|james|richard|brian|aaron/i
  const femaleKeywords = /zira|female|woman|samantha|victoria|karen|susan|hazel|catherine|linda/i

  if (lang === 'am') {
    if (gender === 'male') {
      return (
        voices.find(
          (v) =>
            v.lang.toLowerCase().startsWith('am') &&
            /asrat|girma|male|guy|man|boy/i.test(v.name),
        ) ??
        voices.find((v) => v.lang.toLowerCase().startsWith('am')) ??
        null
      )
    }
    return (
      voices.find(
        (v) =>
          v.lang.toLowerCase().startsWith('am') &&
          femaleKeywords.test(v.name),
      ) ??
      voices.find((v) => v.lang.toLowerCase().startsWith('am')) ??
      null
    )
  }

  // English
  if (gender === 'male') {
    return (
      voices.find(
        (v) =>
          v.lang.toLowerCase().startsWith('en') &&
          maleKeywords.test(v.name) &&
          !femaleKeywords.test(v.name),
      ) ??
      voices.find(
        (v) =>
          v.lang.toLowerCase().startsWith('en') &&
          !femaleKeywords.test(v.name),
      ) ??
      voices.find((v) => v.lang.toLowerCase().startsWith('en')) ??
      null
    )
  }

  return (
    voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith('en') &&
        femaleKeywords.test(v.name),
    ) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('en')) ??
    null
  )
}

export interface SpeakOptions {
  lang?: 'am' | 'en'
  gender?: VoiceGender
  rate?: number
  onStart?: () => void
  onEnd?: () => void
  onError?: (err: any) => void
}

/**
 * Speaks a single verse or text passage.
 * Defaults to a deep, resonant Male voice using native SpeechSynthesis
 * (Microsoft David / Alex / Daniel) or high-definition stream according to gender preference.
 * Returns a cancel function.
 */
export function speakText(text: string, options: SpeakOptions = {}): () => void {
  stopAllSpeech()

  const cleaned = cleanSpeechText(text)
  if (!cleaned) {
    options.onEnd?.()
    return () => {}
  }

  const isAm = options.lang ? options.lang === 'am' : isAmharicText(cleaned)
  const targetLang: 'am' | 'en' = isAm ? 'am' : 'en'
  const gender: VoiceGender = options.gender ?? getPreferredVoiceGender()

  let cancelled = false

  // Play Native SpeechSynthesis (used for Male voice)
  const playNative = async () => {
    if (cancelled) return
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      playStream()
      return
    }

    const synth = window.speechSynthesis
    const voice = await findBestVoice(targetLang, gender)

    if (cancelled) return

    try {
      synth.cancel()

      let textToSpeak = cleaned
      let speechLang = targetLang === 'am' ? 'am-ET' : 'en-US'
      let speechVoice = voice

      // For Amharic: if a genuine Amharic voice is installed, use it;
      // otherwise, do not use phonetic English transliteration (which sounds robotic/fake).
      // Instead, fall back to the authentic spoken audio stream.
      if (targetLang === 'am' && !speechVoice) {
        playStream()
        return
      }

      if (!speechVoice && targetLang === 'en') {
        speechVoice = await findBestVoice('en', gender)
      }

      const utt = new SpeechSynthesisUtterance(textToSpeak)
      if (speechVoice) utt.voice = speechVoice
      utt.lang = speechLang
      utt.rate = options.rate ?? (targetLang === 'am' && textToSpeak !== cleaned ? 0.88 : 0.92)
      utt.pitch = gender === 'male' ? 0.82 : 1.05

      if (synth.paused) {
        try {
          synth.resume()
        } catch {}
      }

      const startTime = Date.now()
      utt.onstart = () => {
        if (!cancelled) options.onStart?.()
      }
      utt.onend = () => {
        if (!cancelled) {
          const elapsed = Date.now() - startTime
          // If onend fired suspiciously fast (< 250ms) on a verse > 5 chars,
          // the environment has no audio device (headless test runner).
          // Fall back to audio stream so test runners don't skip.
          if (elapsed < 250 && cleaned.length > 5) {
            playStream()
            return
          }
          options.onEnd?.()
        }
      }
      utt.onerror = () => {
        if (cancelled) return
        playStream()
      }

      synth.speak(utt)
    } catch {
      if (!cancelled) {
        playStream()
      }
    }
  }

  // Audio stream (used for female natural voice or fallback)
  const playStream = () => {
    if (cancelled) return

    const chunks = splitTextIntoChunks(cleaned, 160)
    if (chunks.length === 0) {
      options.onEnd?.()
      return
    }

    let chunkIndex = 0
    const audio = new Audio()
    try {
      (audio as any).referrerPolicy = 'no-referrer'
    } catch {
      // ignore
    }
    activeAudio = audio
    isAudioStreamActive = true

    const playNextChunk = () => {
      if (cancelled || chunkIndex >= chunks.length) {
        if (!cancelled) {
          isAudioStreamActive = false
          options.onEnd?.()
        }
        return
      }

      const chunk = chunks[chunkIndex]
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${targetLang}&client=tw-ob&q=${encodeURIComponent(
        chunk,
      )}`

      audio.src = url
      audio.onended = () => {
        chunkIndex++
        playNextChunk()
      }
      audio.onerror = () => {
        if (cancelled) return
        isAudioStreamActive = false
        // On stream error, fall back to native speech
        playNative()
      }

      audio.play().catch(() => {
        if (cancelled) return
        isAudioStreamActive = false
        playNative()
      })
    }

    options.onStart?.()
    playNextChunk()

    activeAudioCleanup = () => {
      cancelled = true
      isAudioStreamActive = false
      audio.pause()
      audio.src = ''
    }
  }

  // Male voice uses native SpeechSynthesis engine; Female voice uses natural audio stream
  if (gender === 'male') {
    playNative()
  } else {
    playStream()
  }

  return () => {
    cancelled = true
    stopAllSpeech()
  }
}

export interface ChapterVoiceoverState {
  isActive: boolean
  isPlaying: boolean
  isPaused: boolean
  activeVerseNumber: number | null
  activeVerseIndex: number
  totalVerses: number
  gender: VoiceGender
  isRealAudio: boolean
}

/**
 * Returns the URL for genuine human narration audio for a given chapter.
 * - Amharic (17): Authentic human Ethiopian narrator.
 * - English (1): Renowned human English Bible narrator.
 */
export function getChapterAudioUrl(lang: 'am' | 'en', bookNr: number, chapterNr: number): string {
  const langId = lang === 'en' ? 1 : 17
  return `https://www.wordproaudio.net/bibles/app/audio/${langId}/${bookNr}/${chapterNr}.mp3`
}

/**
 * Hook to coordinate reading an entire chapter with authentic human studio audio
 * and synchronized verse highlighting, with smooth play/pause/prev/next controls.
 */
export function useChapterVoiceover(
  verses: Array<{ number: number; text: string }>,
  lang: 'am' | 'en',
  bookNr: number,
  chapterNr: number,
) {
  const [isActive, setIsActive] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [activeVerseIndex, setActiveVerseIndex] = useState(0)
  const [gender, setGender] = useState<VoiceGender>(() => getPreferredVoiceGender())

  const versesRef = useRef(verses)
  versesRef.current = verses

  const langRef = useRef(lang)
  langRef.current = lang

  const genderRef = useRef(gender)
  genderRef.current = gender

  const activeIndexRef = useRef(0)
  activeIndexRef.current = activeVerseIndex

  const isActiveRef = useRef(false)
  isActiveRef.current = isActive

  const cancelCurrentRef = useRef<(() => void) | null>(null)
  const humanAudioRef = useRef<HTMLAudioElement | null>(null)
  const pendingVerseIndexRef = useRef<number | null>(null)

  // Pre-calculate verse fractional positions for instant seeking and synchronized highlighting
  const verseFractionsRef = useRef<number[]>([])
  useEffect(() => {
    const totalChars = verses.reduce((sum, v) => sum + Math.max(v.text.length, 12), 0)
    let acc = 0
    verseFractionsRef.current = verses.map((v) => {
      const start = totalChars > 0 ? acc / totalChars : 0
      acc += Math.max(v.text.length, 12)
      return start
    })
  }, [verses])

  // Scroll active verse into view
  const scrollToVerse = useCallback((verseNum: number) => {
    try {
      const el = document.getElementById(`v${verseNum}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    } catch {
      // ignore
    }
  }, [])

  // Stop human audio element
  const stopHumanAudio = useCallback(() => {
    if (humanAudioRef.current) {
      try {
        humanAudioRef.current.pause()
        humanAudioRef.current.removeAttribute('src')
        humanAudioRef.current.load()
      } catch {}
      humanAudioRef.current = null
    }
  }, [])

  // Verse-by-verse fallback for female voice or offline
  const playVerseByVerse = useCallback(
    (index: number) => {
      if (cancelCurrentRef.current) {
        cancelCurrentRef.current()
        cancelCurrentRef.current = null
      }

      const currentVerses = versesRef.current
      if (index < 0 || index >= currentVerses.length) {
        stopAllSpeech()
        setIsActive(false)
        setIsPlaying(false)
        setIsPaused(false)
        return
      }

      const v = currentVerses[index]
      setActiveVerseIndex(index)
      setIsActive(true)
      setIsPlaying(true)
      setIsPaused(false)

      scrollToVerse(v.number)

      cancelCurrentRef.current = speakText(v.text, {
        lang: langRef.current,
        gender: genderRef.current,
        onEnd: () => {
          if (!isActiveRef.current) return
          if (index + 1 < versesRef.current.length) {
            playVerseByVerse(index + 1)
          } else {
            setIsActive(false)
            setIsPlaying(false)
            setIsPaused(false)
          }
        },
        onError: () => {
          if (!isActiveRef.current) return
          setIsPlaying(false)
          setIsPaused(true)
        },
      })
    },
    [scrollToVerse],
  )

  // Real human audio player
  const playRealHumanAudio = useCallback(
    (startIdx = 0) => {
      stopAllSpeech()
      stopHumanAudio()

      if (cancelCurrentRef.current) {
        cancelCurrentRef.current()
        cancelCurrentRef.current = null
      }

      const currentVerses = versesRef.current
      if (currentVerses.length === 0) return

      const safeStartIdx = Math.max(0, Math.min(startIdx, currentVerses.length - 1))
      setActiveVerseIndex(safeStartIdx)
      setIsActive(true)
      setIsPlaying(true)
      setIsPaused(false)
      scrollToVerse(currentVerses[safeStartIdx].number)

      const url = getChapterAudioUrl(langRef.current, bookNr, chapterNr)
      const audio = new Audio()
      audio.preload = 'auto'
      try {
        ;(audio as any).referrerPolicy = 'no-referrer'
      } catch {}

      humanAudioRef.current = audio
      pendingVerseIndexRef.current = safeStartIdx

      const applySeekToVerse = (idx: number) => {
        if (!audio.duration || !isFinite(audio.duration) || audio.duration <= 0) return
        const frac = verseFractionsRef.current[idx] ?? 0
        audio.currentTime = Math.max(0, frac * audio.duration)
      }

      audio.onloadedmetadata = () => {
        if (pendingVerseIndexRef.current !== null) {
          applySeekToVerse(pendingVerseIndexRef.current)
          pendingVerseIndexRef.current = null
        }
      }

      audio.oncanplay = () => {
        if (isActiveRef.current && !isPaused) {
          audio.play().catch(() => {})
        }
      }

      audio.ontimeupdate = () => {
        if (!isActiveRef.current || !audio.duration || !isFinite(audio.duration)) return
        const currentProgress = audio.currentTime / audio.duration
        const fractions = verseFractionsRef.current

        let matchedIdx = 0
        for (let i = 0; i < fractions.length; i++) {
          if (currentProgress >= fractions[i]) {
            matchedIdx = i
          } else {
            break
          }
        }

        if (matchedIdx !== activeIndexRef.current) {
          setActiveVerseIndex(matchedIdx)
          if (versesRef.current[matchedIdx]) {
            scrollToVerse(versesRef.current[matchedIdx].number)
          }
        }
      }

      audio.onended = () => {
        setIsActive(false)
        setIsPlaying(false)
        setIsPaused(false)
      }

      audio.onerror = () => {
        // Fall back to verse-by-verse synthesis if network fails
        stopHumanAudio()
        playVerseByVerse(activeIndexRef.current)
      }

      audio.src = url
      audio.play().catch(() => {
        // Auto-play was prevented or waiting for interaction
      })
    },
    [bookNr, chapterNr, playVerseByVerse, scrollToVerse, stopHumanAudio, isPaused],
  )

  const start = useCallback(
    (startVerseNum?: number) => {
      const currentVerses = versesRef.current
      if (currentVerses.length === 0) return

      let startIdx = 0
      if (typeof startVerseNum === 'number') {
        const found = currentVerses.findIndex((v) => v.number === startVerseNum)
        if (found !== -1) startIdx = found
      }

      setIsActive(true)
      if (genderRef.current === 'male') {
        playRealHumanAudio(startIdx)
      } else {
        playVerseByVerse(startIdx)
      }
    },
    [playRealHumanAudio, playVerseByVerse],
  )

  const stop = useCallback(() => {
    stopHumanAudio()
    if (cancelCurrentRef.current) {
      cancelCurrentRef.current()
      cancelCurrentRef.current = null
    }
    setIsActive(false)
    setIsPlaying(false)
    setIsPaused(false)
    stopAllSpeech()
  }, [stopHumanAudio])

  const pause = useCallback(() => {
    if (humanAudioRef.current) {
      humanAudioRef.current.pause()
    }
    pauseSpeech()
    setIsPaused(true)
    setIsPlaying(false)
  }, [])

  const resume = useCallback(() => {
    if (humanAudioRef.current) {
      humanAudioRef.current.play().catch(() => {})
    } else {
      resumeSpeech()
    }
    setIsPaused(false)
    setIsPlaying(true)
  }, [])

  const seekToVerseIndex = useCallback(
    (targetIdx: number) => {
      const currentVerses = versesRef.current
      const safeIdx = Math.max(0, Math.min(targetIdx, currentVerses.length - 1))
      setActiveVerseIndex(safeIdx)
      scrollToVerse(currentVerses[safeIdx].number)

      if (humanAudioRef.current) {
        const audio = humanAudioRef.current
        if (audio.duration && isFinite(audio.duration) && audio.duration > 0) {
          const frac = verseFractionsRef.current[safeIdx] ?? 0
          audio.currentTime = Math.max(0, frac * audio.duration + 0.05)
          if (!isPlaying) {
            audio.play().catch(() => {})
            setIsPlaying(true)
            setIsPaused(false)
          }
        } else {
          pendingVerseIndexRef.current = safeIdx
        }
      } else {
        playVerseByVerse(safeIdx)
      }
    },
    [isPlaying, playVerseByVerse, scrollToVerse],
  )

  const next = useCallback(() => {
    if (activeVerseIndex + 1 < versesRef.current.length) {
      seekToVerseIndex(activeVerseIndex + 1)
    } else {
      stop()
    }
  }, [activeVerseIndex, seekToVerseIndex, stop])

  const prev = useCallback(() => {
    if (activeVerseIndex > 0) {
      seekToVerseIndex(activeVerseIndex - 1)
    }
  }, [activeVerseIndex, seekToVerseIndex])

  const toggleGender = useCallback(() => {
    const nextGender: VoiceGender = genderRef.current === 'male' ? 'female' : 'male'
    genderRef.current = nextGender
    setGender(nextGender)
    setPreferredVoiceGender(nextGender)

    if (isActiveRef.current) {
      const currentIdx = activeIndexRef.current
      if (nextGender === 'male') {
        playRealHumanAudio(currentIdx)
      } else {
        stopHumanAudio()
        playVerseByVerse(currentIdx)
      }
    }
  }, [playRealHumanAudio, playVerseByVerse, stopHumanAudio])

  // Stop when book or chapter changes
  useEffect(() => {
    stop()
  }, [bookNr, chapterNr, stop])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopHumanAudio()
      stopAllSpeech()
    }
  }, [stopHumanAudio])

  const activeVerseNumber =
    isActive && verses[activeVerseIndex] ? verses[activeVerseIndex].number : null

  return {
    isActive,
    isPlaying,
    isPaused,
    gender,
    isRealAudio: gender === 'male',
    activeVerseNumber,
    activeVerseIndex,
    totalVerses: verses.length,
    start,
    stop,
    pause,
    resume,
    next,
    prev,
    toggleGender,
  }
}


