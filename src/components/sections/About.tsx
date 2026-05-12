// components/sections/About.tsx — thomasgoodman.me

import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const bioParagraphs = [
  "Hi, I'm Tommy Goodman, a full-stack developer based in Auckland, New Zealand.",
  "Before moving into software, I spent 15 years as an Avionics Technician with the Royal New Zealand Air Force, maintaining safety-critical aircraft systems. That background gave me a real discipline for precision, documentation, and working in high-stakes environments.",
  "I'm now looking for junior to intermediate full-stack developer roles, ideally remote or hybrid, where I can keep building on the solid foundation I've developed over the past couple of years.",
  "At Mission Ready HQ I built full-stack applications using Node, Express, React, and MySQL, set up Docker environments and CI/CD pipelines with GitHub Actions, and worked in an Agile team.",
  "I also completed a mentored internship at PolicyCheck, where I integrated a third-party email platform as a Docker service into a live Next.js application.",
  "During my Air Force career, I built two internal web applications from scratch, including a key press management system that replaced a fully manual paper process and cut tracking time by around 80%.",
  "What I bring that most junior devs don't is real-world discipline - 15 years of working to strict standards where mistakes had consequences. I'm methodical, I don't cut corners on documentation, and I know how to stay calm and work through problems systematically. I pick things up quickly, and I genuinely care about doing the work properly.",
  "I'm looking for a team that values reliability and growth, somewhere I can contribute from day one while continuing to develop.",
]

const terminalLines = [
  { prompt: true,  cmd: 'cat experience.md' },
  { out: '15+ yrs  RNZAF Avionics Technician' },
  { out: '10 wks   PolicyCheck — Software Developer' },
  { out: 'ongoing  Mission Ready HQ — Full-Stack Dev' },
  null,
  { prompt: true,  cmd: 'cat values.txt' },
  { out: 'Precision. Documentation. Reliability.' },
  { out: 'No corners cut. No excuses made.' },
  null,
  { prompt: true,  cmd: 'echo $LOOKING_FOR' },
  { out: 'Junior-to-intermediate full-stack roles' },
  { out: 'Remote first. Hybrid OK. Auckland/NZ.' },
  null,
  { prompt: true,  cmd: 'echo $STATUS', blinking: true },
]

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-py) clamp(24px, 5vw, 96px)',
        background: 'var(--color-bg-surface)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,480px)',
          gap: 'var(--space-16)',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Bio */}
        <div>
          <SectionHeader label="> 01. about" title="About Me" />
          {bioParagraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: i < bioParagraphs.length - 1 ? 'var(--space-4)' : 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Terminal window */}
        <div
          style={{
            background: 'var(--color-bg-raised)',
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {/* Title bar */}
          <div
            style={{
              background: 'var(--color-bg-surface)',
              padding: '10px 14px',
              display: 'flex',
              gap: 6,
              alignItems: 'center',
              borderBottom: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
            <span style={{ fontSize: 11, color: 'var(--color-text-muted)', marginLeft: 8 }}>
              tommy@local ~
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: '18px 20px', fontSize: 13, lineHeight: 1.75 }}>
            {terminalLines.map((line, i) => {
              if (line === null) return <div key={i} style={{ height: 8 }} />
              if ('prompt' in line && line.prompt) {
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-accent)', marginRight: 6 }}>$</span>
                    <span style={{ color: 'var(--color-text-primary)' }}>{line.cmd}</span>
                    {line.blinking && (
                      <span
                        style={{
                          display: 'inline-block',
                          width: 7,
                          height: '1em',
                          background: 'var(--color-accent)',
                          animation: 'blink 1s step-end infinite',
                          verticalAlign: 'text-bottom',
                          marginLeft: 6,
                        }}
                      />
                    )}
                  </div>
                )
              }
              return (
                <div
                  key={i}
                  style={{ color: 'var(--color-text-secondary)', paddingLeft: 16 }}
                >
                  {'out' in line ? line.out : ''}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
