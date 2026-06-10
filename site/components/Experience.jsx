// Experience.jsx — thomasgoodman.me

const experienceData = [
  {
    org: 'PolicyCheck',
    title: 'Software Developer (Mentored Internship)',
    period: 'October 2025 to December 2025',
    location: 'Auckland / Remote',
    note: '10-week internship',
    bullets: [
      'Integrated Listmonk (open-source email campaign platform) as a dedicated Docker service into the PolicyCheck Next.js platform, enabling internal tools to create, preview, schedule, and manage campaigns.',
      'Developed a Node.js seeding middleware that provisions initial campaign and subscriber data, streamlining development-environment setup.',
      'Resolved build and networking issues across 5+ services within Docker Compose stacks, improving system connectivity and deployment reliability.',
      'Implemented backend APIs and interactive Next.js components for subscription management and content scheduling.',
      'Troubleshot browser/API boundary issues (auth, CORS, network failures) in an Agile team environment.',
    ],
    tags: ['Next.js', 'Docker Compose', 'Node.js', 'REST APIs', 'Agile'],
  },
  {
    org: 'Mission Ready HQ',
    title: 'Full-Stack Developer (Student)',
    period: 'March 2025 to December 2025',
    location: 'Remote, NZ',
    note: null,
    bullets: [
      'Designed and built complete end-to-end applications featuring Node.js/Express APIs, React frontends, and MySQL-backed data layers across multiple Level 6 diploma projects.',
      'Built RESTful APIs and reusable React (Tailwind/MUI) components.',
      'Restructured repositories to support GitHub Actions CI/CD pipelines and reproducible environments.',
      'Designed comprehensive database schemas and seeded 1,000+ records using migration-ready SQL files.',
      'Created Docker container configurations and Azure deployment guides.',
      'Designed instructional starter kits used by fellow cohort members.',
    ],
    tags: ['Node.js', 'Express', 'React', 'MySQL', 'Docker', 'GitHub Actions'],
  },
  {
    org: 'Royal New Zealand Air Force',
    title: 'Avionics Technician',
    period: 'May 2008 to April 2024',
    location: 'Whenuapai, Auckland',
    note: '15+ years of continuous service',
    bullets: [
      'Diagnosed aircraft electrical and electronic systems in safety-critical environments, executing systematic fault-finding under tight deadlines to ensure mission readiness.',
      'Maintained and repaired GPS navigation systems, UHF/VHF communications equipment, and integrated avionics suites across multiple aircraft types.',
      'Performed precision fault-finding using oscilloscopes, multimeters, and signal generators.',
      'Read and interpreted aircraft wiring diagrams, schematics, and technical publications.',
      'Followed and enforced strict aviation compliance and documentation standards (traceable, peer-reviewed, audit-ready).',
      'Led operational flight-line maintenance, conducting pre/post-flight inspections and repairs.',
      'Co-founded the unit esports club and coordinated alpine sports activities, building team cohesion.',
    ],
    tags: ['Avionics', 'Fault-Finding', 'Systems', 'Compliance', 'Documentation'],
  },
];

const ExperienceItem = ({ item, index, total }) => {
  const [open, setOpen] = React.useState(index === 0);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      position: 'relative',
    }}>
      {/* Timeline connector */}
      <div style={{
        position: 'absolute',
        left: -33,
        top: 0,
        bottom: index < total - 1 ? -32 : 0,
        width: 1,
        background: 'var(--color-border-subtle)',
      }}></div>

      {/* Timeline dot */}
      <div style={{
        position: 'absolute',
        left: -39,
        top: 6,
        width: 13,
        height: 13,
        borderRadius: '50%',
        background: index === 0 ? 'var(--color-accent)' : 'var(--color-bg-raised)',
        border: `2px solid ${index === 0 ? 'var(--color-accent)' : 'var(--color-border-default)'}`,
        zIndex: 1,
      }}></div>

      {/* Card */}
      <div style={{
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        marginBottom: 'var(--space-8)',
      }}>
        {/* Header - always visible, clickable */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%', background: 'none', border: 'none', cursor: 'pointer',
            padding: 'var(--space-6)', textAlign: 'left',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
          }}
          aria-expanded={open}
        >
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 600,
              fontSize: 'var(--text-xl)', color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-1)',
            }}>
              {item.org}
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 500,
              fontSize: 'var(--text-base)', color: 'var(--color-accent)',
              marginBottom: 'var(--space-2)',
            }}>
              {item.title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)' }}>
                {item.period}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)' }}>
                {item.location}
              </span>
              {item.note && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-mono)', letterSpacing: 'var(--tracking-wide)', background: 'var(--color-accent-subtle)', border: '1px solid var(--color-accent-muted)', borderRadius: 'var(--radius-sm)', padding: '1px 7px' }}>
                  {item.note}
                </span>
              )}
            </div>
          </div>
          <div style={{
            color: 'var(--color-text-muted)', flexShrink: 0, marginTop: 4,
            transition: 'transform 250ms ease',
            transform: open ? 'rotate(180deg)' : 'none',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </button>

        {/* Expandable bullets */}
        {open && (
          <div style={{
            borderTop: '1px solid var(--color-border-subtle)',
            padding: 'var(--space-5) var(--space-6) var(--space-6)',
          }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', marginBottom: 'var(--space-5)' }}>
              {item.bullets.map((b, bi) => (
                <li key={bi} style={{
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                  marginBottom: bi < item.bullets.length - 1 ? 'var(--space-3)' : 0,
                }}>
                  <span style={{ color: 'var(--color-accent)', marginTop: 5, flexShrink: 0 }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true"><circle cx="4" cy="4" r="4"/></svg>
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {item.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
                  color: 'var(--color-mono)', background: 'var(--color-accent-subtle)',
                  border: '1px solid var(--color-accent-muted)',
                  borderRadius: 'var(--radius-sm)', padding: '2px 8px',
                  letterSpacing: 'var(--tracking-wide)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => (
  <section
    id="experience"
    data-screen-label="Experience"
    style={{ padding: 'var(--section-py) clamp(24px, 5vw, 96px)', background: 'var(--color-bg-base)' }}
  >
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <SectionLabel text="> 02. experience" />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)', letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)', paddingBottom: 'var(--space-4)',
          position: 'relative', display: 'inline-block',
        }}>
          Experience
          <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: 'var(--color-accent)', display: 'block' }}></span>
        </h2>
      </div>

      {/* Timeline container */}
      <div style={{ paddingLeft: 40, position: 'relative' }}>
        {experienceData.map((item, i) => (
          <ExperienceItem key={item.org} item={item} index={i} total={experienceData.length} />
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { Experience, ExperienceItem });
