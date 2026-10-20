import fs from 'fs'
import readline from 'readline'

async function check() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/bsd/.gemini/antigravity/brain/28bb2d7e-3ce7-4832-80d8-83ab18d8f4e8/.system_generated/logs/transcript_full.jsonl')
  })
  for await (const line of rl) {
    if (line.includes('"step_index":292')) {
      const obj = JSON.parse(line)
      console.log('step 292 keys:', Object.keys(obj))
      if (obj.tool_calls) {
        console.log('tc 0 args TargetFile:', obj.tool_calls[0].args.TargetFile)
        console.log('tc 0 args Description:', obj.tool_calls[0].args.Description)
      }
    }
  }
}
check()
