// components/sections/Contact.tsx — thomasgoodman.me

import React from 'react'
import { Mail, Linkedin, Github, MapPin, FileText } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { contactLinks } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Email:    <Mail size={20} aria-hidden="true" />,
  LinkedIn: <Linkedin size={20} aria-hidden="true" />,
  GitHub:   <Github size={20} aria-hidden="true" />,
  Location: <MapPin size={20} aria-hidden="true" />,
}

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-base)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <SectionHeader
          label="> 08. contact"
          title="Get in Touch"
          subtitle="Open to junior to intermediate full-stack developer roles. Remote first, hybrid OK, on-site if necessary."
        />

        {/* Resume CTA block */}
        <div
          style={{
            background: 'var(--color-accent-subtle)',
            border: '1px solid var(--color-accent-muted)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6) var(--space-8)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-10)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-primary)',
                marginBottom: 4,
              }}
            >
              Download my resume
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
              }}
            >
              Full work history, references on request.
            </div>
          </div>
          <Button href="/resume" variant="primary" size="md">
            <FileText size={15} aria-hidden="true" />
            View Resume
          </Button>
        </div>

        {/* Contact links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-16)',
          }}
        >
          {contactLinks.map(link => (
            <div
              key={link.label}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}
            >
              <div
                style={{
                  color: 'var(--color-accent)',
                  flexShrink: 0,
                  width: 40,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {iconMap[link.label]}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    letterSpacing: 'var(--tracking-wide)',
                    marginBottom: 2,
                  }}
                >
                  {link.label}
                </div>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-accent)',
                      textDecoration: 'none',
                      transition: 'color var(--motion-base)',
                    }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.color = 'var(--color-accent-hover)')
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = 'var(--color-accent)')
                    }
                  >
                    {link.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {link.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: 'var(--space-8)',
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
      </div>
    </section>
  )
}
