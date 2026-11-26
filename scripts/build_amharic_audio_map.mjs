import { exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
const execAsync = promisify(exec)

const USFM_MAP = {
  1: 'GEN', 2: 'EXO', 3: 'LEV', 4: 'NUM', 5: 'DEU', 6: 'JOS', 7: 'JDG', 8: 'RUT',
  9: '1SA', 10: '2SA', 11: '1KI', 12: '2KI', 13: '1CH', 14: '2CH', 15: 'EZR', 16: 'NEH',
  17: 'EST', 18: 'JOB', 19: 'PSA', 20: 'PRO', 21: 'ECC', 22: 'SNG', 23: 'ISA', 24: 'JER',
  25: 'LAM', 26: 'EZK', 27: 'DAN', 28: 'HOS', 29: 'JOL', 30: 'AMO', 31: 'OBA', 32: 'JON',
  33: 'MIC', 34: 'NAM', 35: 'HAB', 36: 'ZEP', 37: 'HAG', 38: 'ZEC', 39: 'MAL',
  40: 'MAT', 41: 'MRK', 42: 'LUK', 43: 'JHN', 44: 'ACT', 45: 'ROM', 46: '1CO', 47: '2CO',
  48: 'GAL', 49: 'EPH', 50: 'PHP', 51: 'COL', 52: '1TH', 53: '2TH', 54: '1TI', 55: '2TI',
  56: 'TIT', 57: 'PHM', 58: 'HEB', 59: 'JAS', 60: '1PE', 61: '2PE', 62: '1JN', 63: '2JN',
  64: '3JN', 65: 'JUD', 66: 'REV'
}

const CHAPTER_COUNTS = {
  1: 50, 2: 40, 3: 27, 4: 36, 5: 34, 6: 24, 7: 21, 8: 4, 9: 31, 10: 24,
  11: 22, 12: 25, 13: 29, 14: 36, 15: 10, 16: 13, 17: 10, 18: 42, 19: 150, 20: 31,
  21: 12, 22: 8, 23: 66, 24: 52, 25: 5, 26: 48, 27: 12, 28: 14, 29: 3, 30: 9,
  31: 1, 32: 4, 33: 7, 34: 3, 35: 3, 36: 3, 37: 2, 38: 14, 39: 4,
  40: 28, 41: 16, 42: 24, 43: 21, 44: 28, 45: 16, 46: 16, 47: 13, 48: 6, 49: 6,
  50: 4, 51: 4, 52: 5, 53: 3, 54: 6, 55: 4, 56: 3, 57: 1, 58: 13, 59: 5,
  60: 5, 61: 3, 62: 5, 63: 1, 64: 1, 65: 1, 66: 22
}

async function fetchAudioUrl(usfm, ch) {
  try {
    const cmd = `curl.exe -s -H "RSC: 1" "https://www.bible.com/am/audio-bible/1260/${usfm}.${ch}.NASV"`
    const { stdout } = await execAsync(cmd, { maxBuffer: 10 * 1024 * 1024 })
    const m = stdout.match(/\/\/audio-bible-cdn\.youversionapi\.com\/[^"'\s]+\.mp3\?version_id=1260/)
    return m ? 'https:' + m[0] : null
  } catch {
    return null
  }
}

async function runQueue(tasks, concurrency = 15) {
  const results = {}
  let index = 0
  async function worker() {
    while (index < tasks.length) {
      const i = index++
      const task = tasks[i]
      const url = await fetchAudioUrl(task.usfm, task.ch)
      if (url) {
        results[`${task.bookNr}_${task.ch}`] = url
        process.stdout.write(`✓ ${task.usfm} ${task.ch} `)
      } else {
        process.stdout.write(`✗ ${task.usfm} ${task.ch} `)
      }
    }
  }
  const workers = Array.from({ length: concurrency }, () => worker())
  await Promise.all(workers)
  return results
}

async function main() {
  const tasks = []
  // All New Testament books (40 to 66)
  for (let bookNr = 40; bookNr <= 66; bookNr++) {
    const usfm = USFM_MAP[bookNr]
    const count = CHAPTER_COUNTS[bookNr]
    for (let ch = 1; ch <= count; ch++) {
      tasks.push({ bookNr, usfm, ch })
    }
  }
  // Genesis (1) and Psalms (19)
  for (let ch = 1; ch <= 50; ch++) tasks.push({ bookNr: 1, usfm: 'GEN', ch })
  for (let ch = 1; ch <= 150; ch++) tasks.push({ bookNr: 19, usfm: 'PSA', ch })

  console.log(`Starting fetch of ${tasks.length} chapters...`)
  const audioMap = await runQueue(tasks, 16)
  console.log(`\nCompleted! Total successfully mapped: ${Object.keys(audioMap).length}`)

  // Write to public/amharic_audio.json and src/amharicAudioMap.ts
  fs.writeFileSync('public/amharic_audio.json', JSON.stringify(audioMap, null, 2))
  fs.writeFileSync(
    'src/amharicAudioMap.ts',
    `/** Pre-built index of authentic human studio recordings for Amharic Bible (NASV) */\nexport const AMHARIC_HUMAN_AUDIO: Record<string, string> = ${JSON.stringify(audioMap, null, 2)}\n`
  )
  console.log('Saved to public/amharic_audio.json and src/amharicAudioMap.ts!')
}

main()
