// components/sections/Education.tsx — thomasgoodman.me

import React from 'react'
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { education, honours } from '@/lib/data'
import type { EducationItem } from '@/types'

function typeIcon(type: EducationItem['type']) {
  const props = { size: 18, 'aria-hidden': true, strokeWidth: 1.5 }
  if (type === 'diploma')     return <GraduationCap {...props} />
  if (type === 'certificate') return <Award {...props} />
  return <BookOpen {...props} />
}

export function Education() {
  return (
    <section
      id="education"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-surface)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader label="> 05. education" title="Education and Credentials" />

        {/* Education cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--space-5)',
            marginBottom: 'var(--space-16)',
          }}
        >
          {education.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-bg-raised)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              <div style={{ color: 'var(--color-accent)' }}>
                {typeIcon(item.type)}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-primary)',
                    lineHeight: 'var(--leading-snug)',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {item.org}
                </div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  letterSpacing: 'var(--tracking-wide)',
                }}
              >
                {item.period}
              </div>
              {item.note && (
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    fontStyle: 'italic',
                  }}
                >
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Military honours */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-muted)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-6)',
            }}
          >
            {'// military honours'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {honours.map((h, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  background: 'var(--color-bg-raised)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-4) var(--space-5)',
                }}
              >
                <div style={{ color: 'var(--color-accent)', flexShrink: 0 }}>
                  <Star size={16} aria-hidden="true" strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {h.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {h.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
