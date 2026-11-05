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

console.log('Watching for phone connection (will run for up to 10 minutes)...')
const maxAttempts = 300 // 300 * 2s = 600 seconds (10 min)

for (let i = 0; i < maxAttempts; i++) {
  const devices = getDevices()
  if (devices.length > 0) {
    const deviceId = devices[0]
    console.log(`[+] Device detected: ${deviceId}! Starting installation...`)
    
    // Install APK
    execSync(`"${ADB}" -s ${deviceId} install -r android/app/build/outputs/apk/debug/app-debug.apk`, { stdio: 'inherit' })
    console.log('[+] APK installed successfully!')
    
    // Restart App
    execSync(`"${ADB}" -s ${deviceId} shell am force-stop com.sixtysix.biblereader`, { stdio: 'inherit' })
    execSync(`"${ADB}" -s ${deviceId} shell monkey -p com.sixtysix.biblereader -c android.intent.category.LAUNCHER 1`, { stdio: 'inherit' })
    console.log('[+] App launched!')
    
    // Wait 3 seconds for UI to render
    const t0 = Date.now()
    while (Date.now() - t0 < 3000) {}
    
    // Capture live screenshot
    execSync(`"${ADB}" -s ${deviceId} shell screencap -p /sdcard/screen_nt_live.png`, { stdio: 'inherit' })
    execSync(`"${ADB}" -s ${deviceId} pull /sdcard/screen_nt_live.png screen_nt_live.png`, { stdio: 'inherit' })
    console.log('[+] Screenshot saved to screen_nt_live.png!')
    console.log('DEPLOY_SUCCESS')
    process.exit(0)
  }
  
  // Sleep 2 seconds
  const start = Date.now()
  while (Date.now() - start < 2000) {}
}

console.log('[-] Phone not detected within 10 minutes.')
process.exit(1)
