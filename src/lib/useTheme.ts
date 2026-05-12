'use client'

// lib/useTheme.ts — thomasgoodman.me
// Theme state hook — reads/writes localStorage and syncs to data-theme on <html>

import { useState, useEffect, useCallback } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')

  // Initialise from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tg-theme') as Theme | null
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
      }
    } catch {
      // localStorage unavailable (SSR, private browsing)
    }
  }, [])

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try { localStorage.setItem('tg-theme', next) } catch {}
      return next
    })
  }, [])

  return { theme, toggle }
}
