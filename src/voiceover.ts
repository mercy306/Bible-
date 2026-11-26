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

/**
 * Find the best native voice for the given language.
 */
export async function findBestVoice(lang: 'am' | 'en'): Promise<SpeechSynthesisVoice | null> {
  const voices = await getAvailableVoices()
  if (lang === 'am') {
    return (
      voices.find((v) => v.lang.toLowerCase().startsWith('am') || /amharic/i.test(v.name)) ??
      null
    )
  }
  // English: prefer natural/local default voices
  return (
    voices.find((v) => v.lang.toLowerCase().startsWith('en') && (v.name.includes('Natural') || v.default)) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('en-us')) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('en')) ??
    null
  )
}

export interface SpeakOptions {
  lang?: 'am' | 'en'
  rate?: number
  onStart?: () => void
  onEnd?: () => void
  onError?: (err: any) => void
}

/**
 * Speaks a single verse or text passage.
 * Uses high-definition natural audio streaming as primary, with seamless
 * offline SpeechSynthesis fallback for both Amharic and English.
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

  let cancelled = false

  // Offline / Native SpeechSynthesis fallback
  const playNative = async () => {
    if (cancelled) return
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      options.onEnd?.()
      return
    }

    const synth = window.speechSynthesis
    const voice = await findBestVoice(targetLang)

    if (cancelled) return

    try {
      synth.cancel()

      let textToSpeak = cleaned
      let speechLang = targetLang === 'am' ? 'am-ET' : 'en-US'
      let speechVoice = voice

      // If speaking Amharic without a native Amharic voice, transliterate phonetically
      if (targetLang === 'am' && !voice) {
        textToSpeak = transliterateEthiopic(cleaned)
        speechLang = 'en-US'
        speechVoice = await findBestVoice('en')
      }

      const utt = new SpeechSynthesisUtterance(textToSpeak)
      if (speechVoice) utt.voice = speechVoice
      utt.lang = speechLang
      utt.rate = options.rate ?? (targetLang === 'am' && !voice ? 0.88 : 0.94)

      utt.onstart = () => {
        if (!cancelled) options.onStart?.()
      }
      utt.onend = () => {
        if (!cancelled) options.onEnd?.()
      }
      utt.onerror = (e) => {
        if (cancelled) return
        options.onError?.(e)
        options.onEnd?.()
      }

      synth.speak(utt)
    } catch {
      if (!cancelled) options.onEnd?.()
    }
  }

  // High-definition audio stream (works cross-platform without OS voice dependencies)
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
        // On stream error (offline or rate limit), fall back to SpeechSynthesis
        playNative()
      }

      audio.play().catch(() => {
        if (cancelled) return
        isAudioStreamActive = false
        // On autoplay or media error, fall back to SpeechSynthesis
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

  // Kick off with natural audio stream
  playStream()

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
}

/**
 * Hook to coordinate reading an entire chapter verse-by-verse.
 * Highlights the current verse, auto-advances, and provides play/pause/prev/next controls.
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

  const versesRef = useRef(verses)
  versesRef.current = verses

  const langRef = useRef(lang)
  langRef.current = lang

  const activeIndexRef = useRef(0)
  activeIndexRef.current = activeVerseIndex

  const isActiveRef = useRef(false)
  isActiveRef.current = isActive

  const cancelCurrentRef = useRef<(() => void) | null>(null)

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

  const playVerseAtIndex = useCallback(
    (index: number) => {
      // Cancel previous utterance if running
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
        onEnd: () => {
          if (!isActiveRef.current) return
          if (index + 1 < versesRef.current.length) {
            playVerseAtIndex(index + 1)
          } else {
            // Chapter reading finished
            setIsActive(false)
            setIsPlaying(false)
            setIsPaused(false)
          }
        },
        onError: () => {
          if (!isActiveRef.current) return
          // Stop cleanly on error
          stop()
        },
      })
    },
    [scrollToVerse],
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
      playVerseAtIndex(startIdx)
    },
    [playVerseAtIndex],
  )

  const stop = useCallback(() => {
    if (cancelCurrentRef.current) {
      cancelCurrentRef.current()
      cancelCurrentRef.current = null
    }
    setIsActive(false)
    setIsPlaying(false)
    setIsPaused(false)
    stopAllSpeech()
  }, [])

  const pause = useCallback(() => {
    if (!isPlaying) return
    pauseSpeech()
    setIsPaused(true)
    setIsPlaying(false)
  }, [isPlaying])

  const resume = useCallback(() => {
    if (!isPaused) return
    resumeSpeech()
    setIsPaused(false)
    setIsPlaying(true)
  }, [isPaused])

  const next = useCallback(() => {
    const currentVerses = versesRef.current
    if (activeVerseIndex + 1 < currentVerses.length) {
      playVerseAtIndex(activeVerseIndex + 1)
    } else {
      stop()
    }
  }, [activeVerseIndex, playVerseAtIndex, stop])

  const prev = useCallback(() => {
    if (activeVerseIndex > 0) {
      playVerseAtIndex(activeVerseIndex - 1)
    }
  }, [activeVerseIndex, playVerseAtIndex])

  // Stop when book or chapter changes
  useEffect(() => {
    stop()
  }, [bookNr, chapterNr, stop])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllSpeech()
    }
  }, [])

  const activeVerseNumber =
    isActive && verses[activeVerseIndex] ? verses[activeVerseIndex].number : null

  return {
    isActive,
    isPlaying,
    isPaused,
    activeVerseNumber,
    activeVerseIndex,
    totalVerses: verses.length,
    start,
    stop,
    pause,
    resume,
    next,
    prev,
  }
}


