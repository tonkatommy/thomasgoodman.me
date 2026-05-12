// components/ui/SectionHeader.tsx — thomasgoodman.me

import React from 'react'

interface SectionHeaderProps {
  label: string      // e.g. "> 01. about"
  title: string      // e.g. "About Me"
  subtitle?: string  // optional lead paragraph
  center?: boolean
}

export function SectionHeader({ label, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div
      style={{
        marginBottom: 'var(--space-12)',
        textAlign: center ? 'center' : 'left',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-mono)',
          letterSpacing: 'var(--tracking-wide)',
          display: 'block',
          marginBottom: 'var(--space-2)',
        }}
      >
        {label}
      </span>

      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)',
          letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)',
          paddingBottom: 'var(--space-4)',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {title}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: center ? '50%' : 0,
            transform: center ? 'translateX(-50%)' : 'none',
            width: 24,
            height: 2,
            background: 'var(--color-accent)',
            display: 'block',
          }}
        />
      </h2>

      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-relaxed)',
            maxWidth: '60ch',
            marginTop: 'var(--space-6)',
            marginLeft: center ? 'auto' : undefined,
            marginRight: center ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
