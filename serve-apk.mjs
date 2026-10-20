// Serves the built APK over the local network so the phone can install it.
// Run with: node serve-apk.mjs
import { createServer } from 'node:http'
import { createReadStream, statSync } from 'node:fs'
import { networkInterfaces } from 'node:os'

const FILE = 'C:/Users/bsd/Desktop/Sixty-Six-Bible.apk'
const PORT = 8080

const lan = Object.values(networkInterfaces())
  .flat()
  .filter((n) => n && n.family === 'IPv4' && !n.internal)
  .map((n) => n.address)

createServer((req, res) => {
  const size = statSync(FILE).size
  res.writeHead(200, {
    'Content-Type': 'application/vnd.android.package-archive',
    'Content-Length': size,
    'Content-Disposition': 'attachment; filename="Sixty-Six-Bible.apk"',
  })
  createReadStream(FILE).pipe(res)
}).listen(PORT, '0.0.0.0', () => {
  console.log(`APK served on port ${PORT}`)
  for (const ip of lan) console.log(`  http://${ip}:${PORT}/`)
  console.log(`  http://localhost:${PORT}/`)
})
