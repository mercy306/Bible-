import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.sixtysix.biblereader',
  appName: 'The Sixty-Six',
  webDir: 'dist',
  android: {
    // The whole Bible and commentary ship inside the app, so nothing is
    // fetched from the network at runtime.
    allowMixedContent: false,
  },
  server: {
    androidScheme: 'https',
  },
}

export default config