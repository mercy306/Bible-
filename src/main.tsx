import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { installOfflineApi } from './offline'

// Inside the Android package there is no server, so the reader's own data is
// served from files bundled in the app. On the desktop the real server answers
// first and this is only a fallback.
installOfflineApi()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Lets the reader be installed to the desktop and keep working if the server
// is briefly down. Registered after load so it never delays first paint.
//
// Inside the Android package there is no server to fall back from and every
// file is already local, so a worker in front of the requests only adds a way
// for them to fail. It is not registered there.
const native =
  typeof window !== 'undefined' &&
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Boolean((window as any).Capacitor?.isNativePlatform?.())

if (!native && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Offline support is a bonus; the app runs fine without it.
    })
  })
}