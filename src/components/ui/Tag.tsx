// components/ui/Tag.tsx — thomasgoodman.me

import React from 'react'

type TagTier = 'strong' | 'working' | 'elementary' | 'coursework' | 'learning' | 'default'

interface TagProps {
  children: React.ReactNode
  tier?: TagTier
}

const tierStyles: Record<TagTier, React.CSSProperties> = {
  strong: {
    color: 'var(--color-mono)',
    background: 'var(--color-accent-subtle)',
    border: '1px solid var(--color-accent-muted)',
  },
  working: {
    color: 'var(--color-text-secondary)',
    background: 'var(--color-bg-raised)',
    border: '1px solid var(--color-border-default)',
  },
  elementary: {
    color: 'var(--color-text-muted)',
    background: 'var(--color-bg-raised)',
    border: '1px solid var(--color-border-subtle)',
  },
  coursework: {
    color: 'var(--color-text-muted)',
    background: 'var(--color-bg-raised)',
    border: '1px solid var(--color-border-subtle)',
  },
  learning: {
    color: 'var(--color-accent)',
    background: 'var(--color-accent-subtle)',
    border: '1px solid var(--color-accent-muted)',
  },
  default: {
    color: 'var(--color-mono)',
    background: 'var(--color-accent-subtle)',
    border: '1px solid var(--color-accent-muted)',
  },
}

export function Tag({ children, tier = 'default' }: TagProps) {
  return (
    <span
      style={{
        ...tierStyles[tier],
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        borderRadius: 'var(--radius-sm)',
        padding: '2px 8px',
        letterSpacing: 'var(--tracking-wide)',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  )
}
