'use client'

// components/layout/Nav.tsx — thomasgoodman.me

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Contact',    href: '#contact' },
]

interface NavProps {
  activeSection?: string
}

export function Nav({ activeSection }: NavProps) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 680) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: 'var(--nav-height)',
          zIndex: 'var(--z-nav)' as unknown as number,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px, 5vw, 48px)',
          background: scrolled ? 'rgba(11,18,16,0.92)' : 'transparent',
          borderBottom: scrolled
            ? '1px solid var(--color-border-subtle)'
            : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'all 250ms ease',
        }}
      >
        {/* Nameplate */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: 16,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.01em',
          }}
          aria-label="Scroll to top"
        >
          Tommy Goodman
        </button>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  fontSize: 14,
                  color: isActive
                    ? 'var(--color-accent)'
                    : 'var(--color-text-secondary)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'color var(--motion-base)',
                }}
                onMouseEnter={e => {
                  if (!isActive)
                    e.currentTarget.style.color = 'var(--color-text-primary)'
                }}
                onMouseLeave={e => {
                  if (!isActive)
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                }}
              >
                {link.label}
              </a>
            )
          })}

          <ThemeToggle />

          {/* Resume CTA */}
          <a
            href="/resume"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-text-inverse)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 13,
              padding: '6px 16px',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              marginLeft: 8,
              transition: 'all var(--motion-base)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-accent-hover)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-accent)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <FileText size={12} aria-hidden="true" />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-primary)',
            padding: 8,
            display: 'none',
          }}
          className="nav-mobile-toggle"
        >
          {mobileOpen
            ? <X size={20} aria-hidden="true" />
            : <Menu size={20} aria-hidden="true" />
          }
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0, right: 0,
            background: 'var(--color-bg-surface)',
            borderBottom: '1px solid var(--color-border-subtle)',
            zIndex: 99,
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                fontSize: 16,
                color: 'var(--color-text-secondary)',
                padding: '10px 0',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 16, alignItems: 'center' }}>
            <a
              href="/resume"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-text-inverse)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 14,
                padding: '8px 20px',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <FileText size={14} aria-hidden="true" />
              View Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  )
}
