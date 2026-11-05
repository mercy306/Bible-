import { execSync } from 'child_process'

const ADB = 'C:\\Users\\bsd\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe'

function getDevices() {
  try {
    const out = execSync(`"${ADB}" devices`, { encoding: 'utf8' })
    const lines = out.split('\n').filter(l => l.trim() && !l.includes('List of devices'))
    const connected = lines.filter(l => l.includes('\tdevice'))
    return connected.map(l => l.split('\t')[0].trim())
  } catch {
    return []
  }
}

console.log('Waiting for phone connection...')
const maxAttempts = 30
for (let i = 0; i < maxAttempts; i++) {
  const devices = getDevices()
  if (devices.length > 0) {
    console.log(`Found device: ${devices[0]}! Installing APK...`)
    execSync(`"${ADB}" install -r android/app/build/outputs/apk/debug/app-debug.apk`, { stdio: 'inherit' })
    console.log('Stopping old process...')
    execSync(`"${ADB}" shell am force-stop com.sixtysix.biblereader`, { stdio: 'inherit' })
    console.log('Launching updated app...')
    execSync(`"${ADB}" shell monkey -p com.sixtysix.biblereader -c android.intent.category.LAUNCHER 1`, { stdio: 'inherit' })
    console.log('Successfully updated on phone!')
    process.exit(0)
  }
  // Wait 1.5 seconds between checks
  const start = Date.now()
  while (Date.now() - start < 1500) {}
}

console.log('Device not detected within timeout.')
process.exit(1)
