// Education.jsx — thomasgoodman.me

const educationItems = [
  {
    type: 'diploma',
    title: 'Diploma in Full-Stack Development (Level 6)',
    org: 'Mission Ready HQ',
    period: 'March 2025 to December 2025',
    note: null,
  },
  {
    type: 'certificate',
    title: 'Professional Certificate in Software Engineering',
    org: 'Institute of Data (AUT accredited)',
    period: 'July 2023 to January 2024',
    note: null,
  },
  {
    type: 'university',
    title: 'Bachelor of Computer and Information Sciences - Year 1 papers',
    org: 'Auckland University of Technology (AUT)',
    period: '2016 to 2018',
    note: 'Papers: Native C, Java, Information Systems',
  },
];

const honourItems = [
  { title: 'Regular Forces Medal', desc: 'Service recognition' },
  { title: 'Long Service and Good Conduct Medal', desc: '15+ years exemplary conduct' },
];

const typeIcon = (type) => {
  if (type === 'diploma') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  );
  if (type === 'certificate') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
  );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  );
};

const Education = () => (
  <section
    id="education"
    data-screen-label="Education"
    style={{ padding: 'var(--section-py) clamp(24px, 5vw, 96px)', background: 'var(--color-bg-surface)' }}
  >
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <SectionLabel text="> 05. education" />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)', letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)', paddingBottom: 'var(--space-4)',
          position: 'relative', display: 'inline-block',
        }}>
          Education and Credentials
          <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: 'var(--color-accent)', display: 'block' }}></span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)', marginBottom: 'var(--space-16)' }}>
        {educationItems.map((item, i) => (
          <div key={i} style={{
            background: 'var(--color-bg-raised)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
          }}>
            <div style={{ color: 'var(--color-accent)', display: 'flex' }}>
              {typeIcon(item.type)}
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)', fontWeight: 600,
                fontSize: 'var(--text-base)', color: 'var(--color-text-primary)',
                lineHeight: 'var(--leading-snug)', marginBottom: 'var(--space-1)',
              }}>
                {item.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-accent)' }}>
                {item.org}
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)' }}>
              {item.period}
            </div>
            {item.note && (
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                {item.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Military Honours */}
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)',
          textTransform: 'uppercase', marginBottom: 'var(--space-6)',
        }}>
          // military honours
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {honourItems.map((h, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
              background: 'var(--color-bg-raised)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4) var(--space-5)',
            }}>
              <div style={{ color: 'var(--color-accent)', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>
                  {h.title}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                  {h.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Education });
