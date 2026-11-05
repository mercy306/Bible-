import { execSync } from 'child_process'

const ADB = 'C:\\Users\\bsd\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe'

function run(cmd) {
  console.log(`> ${cmd}`)
  try {
    const out = execSync(`"${ADB}" ${cmd}`, { encoding: 'utf8' })
    console.log(out)
    return out
  } catch (err) {
    console.error(err.stdout || err.message)
    throw err
  }
}

const args = process.argv.slice(2)
const action = args[0] || 'install'

if (action === 'devices') {
  run('devices')
} else if (action === 'install') {
  run('install -r android/app/build/outputs/apk/debug/app-debug.apk')
  run('shell am force-stop com.sixtysix.biblereader')
  run('shell monkey -p com.sixtysix.biblereader -c android.intent.category.LAUNCHER 1')
  console.log('App successfully launched on phone!')
} else if (action === 'screenshot') {
  const name = args[1] || 'screen.png'
  run('shell screencap -p /sdcard/screen.png')
  run(`pull /sdcard/screen.png "${name}"`)
  console.log(`Saved screenshot to ${name}`)
} else if (action === 'tap') {
  const x = args[1]
  const y = args[2]
  run(`shell input tap ${x} ${y}`)
} else if (action === 'cmd') {
  run(args.slice(1).join(' '))
}
