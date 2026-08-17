export type Theme = 'light' | 'dark'

type ThemeListener = (theme: Theme) => void

let currentTheme: Theme = 'light'
let initialized = false
const listeners = new Set<ThemeListener>()

export function getTheme(): Theme {
  return currentTheme
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem('theme', theme)

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#12100e' : '#ffffff')
  }
}

export function setTheme(theme: Theme) {
  currentTheme = theme
  applyTheme(theme)
  listeners.forEach((listener) => listener(theme))
}

export function subscribeTheme(listener: ThemeListener) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function initTheme() {
  if (initialized || typeof window === 'undefined') return

  initialized = true
  const stored = localStorage.getItem('theme')
  const initial: Theme = stored === 'dark' ? 'dark' : 'light'
  currentTheme = initial
  applyTheme(initial)
}
