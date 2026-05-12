'use client'

// components/sections/Hero.tsx — thomasgoodman.me

import React, { useState, useEffect } from 'react'
import { MapPin, FileText, ArrowRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const [typed, setTyped] = useState('')
  const full = '$ whoami'

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      if (i <= full.length) {
        setTyped(full.slice(0, i))
        i++
      } else {
        clearInterval(t)
      }
    }, 80)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--color-bg-base)',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px clamp(24px, 5vw, 96px) 64px',
      }}
    >
      {/* Dot-grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'radial-gradient(circle, var(--color-border-subtle) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.04,
        }}
      />

      <div style={{ maxWidth: 760, position: 'relative', zIndex: 1 }}>

        {/* Terminal typewriter prompt */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-mono)',
            letterSpacing: 'var(--tracking-wide)',
            marginBottom: 'var(--space-5)',
            display: 'flex',
            alignItems: 'center',
            height: 22,
          }}
        >
          <span style={{ color: 'var(--color-accent)' }}>
            {typed.length > 0 ? '$ ' : ''}
          </span>
          <span>{typed.replace('$ ', '')}</span>
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: '1em',
              background: 'var(--color-accent)',
              animation: 'blink 1s step-end infinite',
              verticalAlign: 'text-bottom',
              marginLeft: 2,
            }}
          />
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up animation-delay-100"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Thomas{' '}
          <span style={{ color: 'var(--color-accent)' }}>&ldquo;Tommy&rdquo;</span>{' '}
          Goodman
        </h1>

        {/* Role */}
        <div
          className="animate-fade-up animation-delay-200"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-4)',
            letterSpacing: '-0.01em',
          }}
        >
          Full-Stack Developer
        </div>

        {/* Location */}
        <div
          className="animate-fade-up animation-delay-200"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-7)',
          }}
        >
          <MapPin size={13} aria-hidden="true" />
          Helensville, Auckland, New Zealand
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up animation-delay-300"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-relaxed)',
            maxWidth: '52ch',
            marginBottom: 'var(--space-10)',
          }}
        >
          Avionics technician turned full-stack developer. 15+ years of
          safety-critical systems thinking with the Royal New Zealand Air Force,
          now building reliable web applications.
        </p>

        {/* CTA row */}
        <div
          className="animate-fade-up animation-delay-400"
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <Button href="/resume" variant="primary" size="md">
            <FileText size={15} aria-hidden="true" />
            View Resume
          </Button>

          <Button href="#contact" variant="outline" size="md">
            Get in Touch
            <ArrowRight size={14} aria-hidden="true" />
          </Button>

          <Button href="https://github.com/tonkatommy" variant="ghost" size="md" external>
            <Github size={16} aria-hidden="true" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
