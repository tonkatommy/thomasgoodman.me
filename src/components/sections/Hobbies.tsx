'use client'

// components/sections/Hobbies.tsx — thomasgoodman.me

import React, { useState } from 'react'
import {
  Users, Mountain, Bike, Snowflake, Zap,
  Sprout, Layers, Code2
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { hobbies } from '@/lib/data'

const hobbyIcons: Record<string, React.ReactNode> = {
  'Family':         <Users size={24} aria-hidden="true" strokeWidth={1.5} />,
  'Outdoors':       <Mountain size={24} aria-hidden="true" strokeWidth={1.5} />,
  'Mountain Biking': <Bike size={24} aria-hidden="true" strokeWidth={1.5} />,
  'Snowboarding':   <Snowflake size={24} aria-hidden="true" strokeWidth={1.5} />,
  'RC Racing':      <Zap size={24} aria-hidden="true" strokeWidth={1.5} />,
  'Gardening':      <Sprout size={24} aria-hidden="true" strokeWidth={1.5} />,
  '3D Printing':    <Layers size={24} aria-hidden="true" strokeWidth={1.5} />,
  'Coding':         <Code2 size={24} aria-hidden="true" strokeWidth={1.5} />,
}

function HobbyCard({ label, desc }: { label: string; desc: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--color-bg-raised)' : 'var(--color-bg-base)',
        border: `1px solid ${hovered ? 'var(--color-border-default)' : 'var(--color-border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        transition: 'all var(--motion-base)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          color: hovered ? 'var(--color-accent)' : 'var(--color-text-muted)',
          transition: 'color var(--motion-base)',
        }}
      >
        {hobbyIcons[label]}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-primary)',
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  )
}

export function Hobbies() {
  return (
    <section
      id="hobbies"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-surface)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader
          label="> 07. hobbies"
          title="Outside the Terminal"
          subtitle="Based in Helensville, northwest of Auckland, with plenty of room to get outside. Most evenings you'll find Tommy tinkering with something - whether that's code, a printer, or a 1/10th scale car."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {hobbies.map(h => (
            <HobbyCard key={h.label} label={h.label} desc={h.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
