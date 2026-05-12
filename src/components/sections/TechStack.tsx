// components/sections/TechStack.tsx — thomasgoodman.me

import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { stackGroups } from '@/lib/data'

export function TechStack() {
  return (
    <section
      id="stack"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-base)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader label="> 04. tech stack" title="Tech Stack" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
          {stackGroups.map(group => (
            <div key={group.label}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {group.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    letterSpacing: 'var(--tracking-wide)',
                  }}
                >
                  {group.comment}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map(item => (
                  <Tag key={item} tier={group.tier}>
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
