import fs from 'fs'
import readline from 'readline'

async function check() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/bsd/.gemini/antigravity/brain/28bb2d7e-3ce7-4832-80d8-83ab18d8f4e8/.system_generated/logs/transcript_full.jsonl')
  })
  for await (const line of rl) {
    if (line.includes('"step_index":1908') || line.includes('"step_index":4405')) {
      const obj = JSON.parse(line)
      console.log('step:', obj.step_index, 'tool_calls count:', obj.tool_calls?.length)
      if (obj.tool_calls) {
        console.log('args keys:', Object.keys(obj.tool_calls[0].args))
        console.log('TargetFile:', obj.tool_calls[0].args.TargetFile)
        console.log('CodeContent len:', obj.tool_calls[0].args.CodeContent?.length)
      }
    }
  }
}
check()
