import fs from 'fs'
import readline from 'readline'

async function check() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/bsd/.gemini/antigravity/brain/28bb2d7e-3ce7-4832-80d8-83ab18d8f4e8/.system_generated/logs/transcript_full.jsonl')
  })
  for await (const line of rl) {
    if (line.includes('"step_index":5315')) {
      const obj = JSON.parse(line)
      console.log('step 5315 tool calls or content:', obj.content ? obj.content.substring(0, 1000) : obj)
    }
  }
}
check()
