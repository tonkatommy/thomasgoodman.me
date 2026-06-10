// Projects.jsx — thomasgoodman.me

const projectsData = [
  {
    name: 'Whenuapai Key Press Manager',
    period: 'Built 2020 to 2024 during RNZAF service',
    context: 'Personal initiative, not RNZAF-commissioned.',
    desc: 'Full-stack web application that replaced a manual paper-based key tracking process at RNZAF Whenuapai. Features a real-time dashboard showing the current keyholder, issue timestamps, and overdue alerts, plus an audit-history view enabling supervisors to inspect all key movements. Designed with strict access control and audit logging to meet RNZAF base security and compliance requirements.',
    highlight: '80% reduction in key tracking time',
    tags: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Docker', 'Audit Logging'],
    link: null,
    badge: 'RNZAF',
  },
  {
    name: 'Presence Guard',
    period: 'Built 2020 to 2024 during RNZAF service',
    context: 'Personal initiative, not RNZAF-commissioned.',
    desc: 'Visitor management system for a restricted RNZAF building. Captures visitor details, purpose of visit, escort information, and time in / time out. Provides the duty officer with a live register and an exportable daily log for end-of-day security records. Replaced handwritten visitor books with a searchable, tamper-evident digital record aligned to base security protocols.',
    highlight: null,
    tags: ['Node.js', 'Express', 'React', 'MySQL', 'Role-Based Access'],
    link: null,
    badge: 'RNZAF',
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = React.useState(false);

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
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'var(--color-accent)', opacity: hovered ? 1 : 0,
        transition: 'opacity var(--motion-base)',
      }} aria-hidden="true"></div>

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600,
          fontSize: 'var(--text-xl)', color: 'var(--color-text-primary)',
          lineHeight: 'var(--leading-snug)',
        }}>
          {project.name}
        </h3>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0, alignItems: 'center' }}>
          {project.badge && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
              color: 'var(--color-mono)', background: 'var(--color-accent-subtle)',
              border: '1px solid var(--color-accent-muted)',
              borderRadius: 'var(--radius-sm)', padding: '2px 8px',
              letterSpacing: 'var(--tracking-wide)',
            }}>{project.badge}</span>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              style={{ color: 'var(--color-text-muted)', display: 'flex', transition: 'color var(--motion-base)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          )}
        </div>
      </div>

      {/* Period + context */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)', marginBottom: 2 }}>
          {project.period}
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
          {project.context}
        </div>
      </div>

      {/* Highlight stat */}
      {project.highlight && (
        <div style={{
          background: 'var(--color-accent-subtle)',
          border: '1px solid var(--color-accent-muted)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-3) var(--space-4)',
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
          color: 'var(--color-mono)', letterSpacing: 'var(--tracking-wide)',
        }}>
          // {project.highlight}
        </div>
      )}

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
        color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)',
        flex: 1,
      }}>
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tags.map(tag => (
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
  );
};

const Projects = () => (
  <section
    id="projects"
    data-screen-label="Projects"
    style={{ padding: 'var(--section-py) clamp(24px, 5vw, 96px)', background: 'var(--color-bg-surface)' }}
  >
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <SectionLabel text="> 03. projects" />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)', letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)', paddingBottom: 'var(--space-4)',
          position: 'relative', display: 'inline-block',
        }}>
          Featured Projects
          <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: 'var(--color-accent)', display: 'block' }}></span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '60ch', marginTop: 'var(--space-6)' }}>
          Both built during RNZAF service as personal initiatives. Real problems, real constraints, real security requirements.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-6)' }}>
        {projectsData.map(p => <ProjectCard key={p.name} project={p} />)}
      </div>
    </div>
  </section>
);

Object.assign(window, { Projects, ProjectCard });
