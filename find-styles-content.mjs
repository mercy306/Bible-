import fs from 'fs'
import readline from 'readline'

async function check() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/bsd/.gemini/antigravity/brain/28bb2d7e-3ce7-4832-80d8-83ab18d8f4e8/.system_generated/logs/transcript_full.jsonl')
  })
  let matchCount = 0
  for await (const line of rl) {
    if (line.includes('Reading screen') || line.includes('.read__head') || line.includes('/* ---------------- top bar ---------------- */')) {
      matchCount++
      console.log('found match at line length:', line.length)
      // Look for step_index
      const stepMatch = line.match(/"step_index":(\d+)/)
      if (stepMatch) console.log('step:', stepMatch[1])
    }
  }
  console.log('total matches:', matchCount)
}
check()
