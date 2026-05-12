// components/layout/Footer.tsx — thomasgoodman.me

import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        background: 'var(--color-bg-base)',
        padding: 'var(--space-8) clamp(24px, 5vw, 96px)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-muted)',
            letterSpacing: 'var(--tracking-wide)',
          }}
        >
          thomasgoodman.me
        </span>

        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
          <a
            href="https://github.com/tonkatommy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              color: 'var(--color-text-muted)',
              transition: 'color var(--motion-base)',
              display: 'flex',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            <Github size={16} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/tgnz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              color: 'var(--color-text-muted)',
              transition: 'color var(--motion-base)',
              display: 'flex',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            <Linkedin size={16} aria-hidden="true" />
          </a>
          <a
            href="mailto:tommy@tommytinkers.nz"
            aria-label="Email"
            style={{
              color: 'var(--color-text-muted)',
              transition: 'color var(--motion-base)',
              display: 'flex',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            <Mail size={16} aria-hidden="true" />
          </a>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-muted)',
          }}
        >
          Built with Next.js, Tailwind, MUI
        </span>
      </div>
    </footer>
  )
}
