'use client'

// components/sections/Experience.tsx — thomasgoodman.me

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { experience } from '@/lib/data'
import type { ExperienceItem } from '@/types'

function ExperienceCard({
  item,
  index,
  total,
  defaultOpen,
}: {
  item: ExperienceItem
  index: number
  total: number
  defaultOpen: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div style={{ position: 'relative' }}>
      {/* Vertical timeline line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: -33,
          top: 0,
          bottom: index < total - 1 ? -32 : 0,
          width: 1,
          background: 'var(--color-border-subtle)',
        }}
      />
      {/* Timeline dot */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: -39,
          top: 6,
          width: 13,
          height: 13,
          borderRadius: '50%',
          background: index === 0 ? 'var(--color-accent)' : 'var(--color-bg-raised)',
          border: `2px solid ${index === 0 ? 'var(--color-accent)' : 'var(--color-border-default)'}`,
          zIndex: 1,
        }}
      />

      {/* Card */}
      <div
        style={{
          background: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          marginBottom: 'var(--space-8)',
        }}
      >
        {/* Header */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 'var(--space-6)',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 'var(--text-xl)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-1)',
              }}
            >
              {item.org}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                fontSize: 'var(--text-base)',
                color: 'var(--color-accent)',
                marginBottom: 'var(--space-2)',
              }}
            >
              {item.title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  letterSpacing: 'var(--tracking-wide)',
                }}
              >
                {item.period}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  letterSpacing: 'var(--tracking-wide)',
                }}
              >
                {item.location}
              </span>
              {item.note && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-mono)',
                    letterSpacing: 'var(--tracking-wide)',
                    background: 'var(--color-accent-subtle)',
                    border: '1px solid var(--color-accent-muted)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1px 7px',
                  }}
                >
                  {item.note}
                </span>
              )}
            </div>
          </div>
          <div
            style={{
              color: 'var(--color-text-muted)',
              flexShrink: 0,
              marginTop: 4,
              transition: 'transform 250ms ease',
              transform: open ? 'rotate(180deg)' : 'none',
            }}
          >
            <ChevronDown size={16} aria-hidden="true" />
          </div>
        </button>

        {/* Expandable bullets */}
        {open && (
          <div
            style={{
              borderTop: '1px solid var(--color-border-subtle)',
              padding: 'var(--space-5) var(--space-6) var(--space-6)',
            }}
          >
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                marginBottom: 'var(--space-5)',
              }}
            >
              {item.bullets.map((bullet, bi) => (
                <li
                  key={bi}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    marginBottom:
                      bi < item.bullets.length - 1 ? 'var(--space-3)' : 0,
                  }}
                >
                  <span
                    style={{
                      color: 'var(--color-accent)',
                      marginTop: 5,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {item.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-base)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader label="> 02. experience" title="Experience" />
        <div style={{ paddingLeft: 40, position: 'relative' }}>
          {experience.map((item, i) => (
            <ExperienceCard
              key={item.org}
              item={item}
              index={i}
              total={experience.length}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
