'use client'

// components/sections/WhyMe.tsx — thomasgoodman.me

import React, { useState } from 'react'
import {
  Shield, List, TrendingUp, Wrench, Monitor, FileText
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { whyCards } from '@/lib/data'

const icons = [
  <Shield size={22} aria-hidden="true" strokeWidth={1.5} key="shield" />,
  <List size={22} aria-hidden="true" strokeWidth={1.5} key="list" />,
  <TrendingUp size={22} aria-hidden="true" strokeWidth={1.5} key="trending" />,
  <Wrench size={22} aria-hidden="true" strokeWidth={1.5} key="wrench" />,
  <Monitor size={22} aria-hidden="true" strokeWidth={1.5} key="monitor" />,
  <FileText size={22} aria-hidden="true" strokeWidth={1.5} key="file" />,
]

function WhyCard({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-bg-surface)',
        border: `1px solid ${hovered ? 'var(--color-border-default)' : 'var(--color-border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        transition: 'all var(--motion-base)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? 'var(--shadow-md)' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 2,
          background: 'var(--color-accent)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity var(--motion-base)',
        }}
      />
      <div style={{ color: 'var(--color-accent)' }}>{icon}</div>
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--leading-relaxed)',
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  )
}

export function WhyMe() {
  return (
    <section
      id="why-me"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-base)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader
          label="> 06. why me"
          title="Why Hire Tommy"
          subtitle="Most junior developers bring fresh skills. Tommy brings fresh skills plus 15 years of knowing what it feels like when things go wrong."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-5)',
          }}
        >
          {whyCards.map((card, i) => (
            <WhyCard
              key={card.title}
              title={card.title}
              body={card.body}
              icon={icons[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
