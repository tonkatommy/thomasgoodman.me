'use client'

// components/sections/Projects.tsx — thomasgoodman.me

import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { projects } from '@/lib/data'
import type { ProjectData } from '@/types'

function ProjectCard({ project }: { project: ProjectData }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-bg-surface)',
        border: `1px solid ${hovered ? 'var(--color-border-default)' : 'var(--color-border-subtle)'}`,
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        transition: 'all var(--motion-base)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? 'var(--shadow-md)' : 'none',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
      }}
    >
      {/* Accent top bar */}
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

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: 'var(--text-xl)',
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--leading-snug)',
          }}
        >
          {project.name}
        </h3>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0, alignItems: 'center' }}>
          {project.badge && <Tag>{project.badge}</Tag>}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              style={{
                color: 'var(--color-text-muted)',
                display: 'flex',
                transition: 'color var(--motion-base)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Period + context */}
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
          {project.period}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
          }}
        >
          {project.context}
        </div>
      </div>

      {/* Highlight stat */}
      {project.highlight && (
        <div
          style={{
            background: 'var(--color-accent-subtle)',
            border: '1px solid var(--color-accent-muted)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-3) var(--space-4)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-mono)',
            letterSpacing: 'var(--tracking-wide)',
          }}
        >
          {`// ${project.highlight}`}
        </div>
      )}

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--leading-relaxed)',
          flex: 1,
        }}
      >
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-surface)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader
          label="> 03. projects"
          title="Featured Projects"
          subtitle="Both built during RNZAF service as personal initiatives. Real problems, real constraints, real security requirements."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {projects.map(p => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
