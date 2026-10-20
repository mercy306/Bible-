import fs from 'fs'
import readline from 'readline'

async function check() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/bsd/.gemini/antigravity/brain/28bb2d7e-3ce7-4832-80d8-83ab18d8f4e8/.system_generated/logs/transcript_full.jsonl')
  })
  for await (const line of rl) {
    if (line.includes('styles.css') && (line.includes('write_to_file') || line.includes('replace_file_content'))) {
      const obj = JSON.parse(line)
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args?.TargetFile?.includes('styles.css')) {
            console.log(obj.step_index, tc.name, tc.args.Append ? 'Append' : (tc.args.Overwrite ? 'Overwrite' : 'Edit'), tc.args.Description || tc.args.Instruction || '')
          }
        }
      }
    }
  }
}
check()
