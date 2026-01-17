'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from '@mui/material'

type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeContextType {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  resolvedMode: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>('system')
  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as ThemeMode | null
    if (stored) {
      setModeState(stored)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const getResolvedMode = (): 'light' | 'dark' => {
      if (mode === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return mode
    }

    const resolved = getResolvedMode()
    setResolvedMode(resolved)
    localStorage.setItem('theme', mode)

    // Update document class for Tailwind dark mode
    if (resolved === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode, mounted])

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode)
  }

  const muiTheme = createTheme({
    palette: {
      mode: resolvedMode,
      primary: {
        main: '#4285F4',
      },
      secondary: {
        main: '#FF6B6B',
      },
    },
  })

  // Always provide context, even during SSR
  const contextValue: ThemeContextType = {
    mode,
    setMode,
    resolvedMode,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <MUIThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
