'use client'

// components/layout/ThemeToggle.tsx — thomasgoodman.me

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border-default)',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-secondary)',
        transition: 'all var(--motion-base)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--color-border-strong)'
        e.currentTarget.style.color = 'var(--color-text-primary)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border-default)'
        e.currentTarget.style.color = 'var(--color-text-secondary)'
      }}
    >
      {theme === 'dark'
        ? <Sun size={14} aria-hidden="true" />
        : <Moon size={14} aria-hidden="true" />
      }
    </button>
  )
}
