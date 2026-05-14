// TechStack.jsx — thomasgoodman.me

const stackGroups = [
  {
    label: 'Strong / Production-Ready',
    comment: '// daily drivers',
    items: [
      'JavaScript (ES6+)', 'Node.js', 'Express', 'React', 'Next.js',
      'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI (MUI)', 'Bootstrap',
      'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB',
      'Docker', 'Docker Compose', 'GitHub Actions CI/CD',
      'Git', 'GitHub', 'Agile/Scrum',
      'Unit Testing', 'Responsive Design', 'Figma',
    ],
    tier: 'strong',
  },
  {
    label: 'Working Knowledge',
    comment: '// used in projects, still deepening',
    items: ['TypeScript', 'Azure', 'AWS', 'GCP', 'Redis', 'Linux', 'Bash'],
    tier: 'working',
  },
  {
    label: 'Elementary',
    comment: '// foundational, not production',
    items: ['Python'],
    tier: 'elementary',
  },
  {
    label: 'Coursework Exposure',
    comment: '// academic only',
    items: ['Java', 'Native C'],
    tier: 'coursework',
  },
  {
    label: 'Currently Learning',
    comment: '// in progress',
    items: ['C# / .NET'],
    tier: 'learning',
  },
];

const tierStyles = {
  strong:     { color: 'var(--color-mono)',           bg: 'var(--color-accent-subtle)',  border: 'var(--color-accent-muted)' },
  working:    { color: 'var(--color-text-secondary)', bg: 'var(--color-bg-raised)',      border: 'var(--color-border-default)' },
  elementary: { color: 'var(--color-text-muted)',     bg: 'var(--color-bg-raised)',      border: 'var(--color-border-subtle)' },
  coursework: { color: 'var(--color-text-muted)',     bg: 'var(--color-bg-raised)',      border: 'var(--color-border-subtle)' },
  learning:   { color: 'var(--color-accent)',         bg: 'var(--color-accent-subtle)',  border: 'var(--color-accent-muted)' },
};

const TechStack = () => (
  <section
    id="stack"
    data-screen-label="Tech Stack"
    style={{ padding: 'var(--section-py) clamp(24px, 5vw, 96px)', background: 'var(--color-bg-base)' }}
  >
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <SectionLabel text="> 04. tech stack" />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)', letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)', paddingBottom: 'var(--space-4)',
          position: 'relative', display: 'inline-block',
        }}>
          Tech Stack
          <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: 'var(--color-accent)', display: 'block' }}></span>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
        {stackGroups.map(group => {
          const s = tierStyles[group.tier];
          return (
            <div key={group.label}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 600,
                  fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)',
                  letterSpacing: '0.01em',
                }}>
                  {group.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)',
                }}>
                  {group.comment}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
                    color: s.color, background: s.bg,
                    border: `1px solid ${s.border}`,
                    borderRadius: 'var(--radius-sm)', padding: '4px 10px',
                    letterSpacing: 'var(--tracking-wide)',
                  }}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

Object.assign(window, { TechStack });
