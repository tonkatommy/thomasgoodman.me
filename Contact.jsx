// Contact.jsx — thomasgoodman.me

const contactLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'tommy@tommytinkers.nz',
    href: 'mailto:tommy@tommytinkers.nz',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/tgnz',
    href: 'https://linkedin.com/in/tgnz',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/tonkatommy',
    href: 'https://github.com/tonkatommy',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Helensville, Auckland, New Zealand',
    href: null,
  },
];

const Contact = () => (
  <section
    id="contact"
    data-screen-label="Contact"
    style={{ padding: 'var(--section-py) clamp(24px, 5vw, 96px)', background: 'var(--color-bg-base)' }}
  >
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <SectionLabel text="> 08. contact" />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)', letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)', paddingBottom: 'var(--space-4)',
          position: 'relative', display: 'inline-block',
        }}>
          Get in Touch
          <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: 'var(--color-accent)', display: 'block' }}></span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-6)', maxWidth: '48ch' }}>
          Open to junior to intermediate full-stack developer roles. Remote first, hybrid OK, on-site if necessary.
        </p>
      </div>

      {/* Resume CTA prominent block */}
      <div style={{
        background: 'var(--color-accent-subtle)',
        border: '1px solid var(--color-accent-muted)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6) var(--space-8)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 'var(--space-4)',
        marginBottom: 'var(--space-10)',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', marginBottom: 4 }}>
            Download my resume
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
            Full work history, references on request.
          </div>
        </div>
        <a
          href="#"
          style={{
            background: 'var(--color-accent)', color: 'var(--color-text-inverse)',
            fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)',
            padding: '10px 22px', borderRadius: 'var(--radius-md)',
            textDecoration: 'none', transition: 'all var(--motion-base)',
            display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          View Resume
        </a>
      </div>

      {/* Contact links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-16)' }}>
        {contactLinks.map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <div style={{ color: 'var(--color-accent)', flexShrink: 0, width: 40, display: 'flex', justifyContent: 'center' }}>
              {l.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)', marginBottom: 2 }}>
                {l.label}
              </div>
              {l.href ? (
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-accent)', textDecoration: 'none', transition: 'color var(--motion-base)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-accent)'}
                >
                  {l.value}
                </a>
              ) : (
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{l.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid var(--color-border-subtle)',
        paddingTop: 'var(--space-8)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 'var(--space-4)',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)' }}>
          thomasgoodman.me
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
          Built with Next.js, Tailwind, MUI
        </span>
      </div>
    </div>
  </section>
);

Object.assign(window, { Contact });
