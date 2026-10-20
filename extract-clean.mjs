import fs from 'fs'
import readline from 'readline'

async function check() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/bsd/.gemini/antigravity/brain/28bb2d7e-3ce7-4832-80d8-83ab18d8f4e8/.system_generated/logs/transcript_full.jsonl')
  })
  for await (const line of rl) {
    if (line.includes('"step_index":5437')) {
      const obj = JSON.parse(line)
      fs.writeFileSync('clean-styles-recovered.js', obj.tool_calls[0].args.CodeContent)
      console.log('saved clean-styles-recovered.js')
      break
    }
  }
}
check()
