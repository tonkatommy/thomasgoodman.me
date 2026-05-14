// Hero.jsx — thomasgoodman.me

const Hero = () => {
  const [typed, setTyped] = React.useState('');
  const full = '$ whoami';

  React.useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= full.length) { setTyped(full.slice(0, i)); i++; }
      else clearInterval(t);
    }, 80);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      data-screen-label="Hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'var(--color-bg-base)', position: 'relative', overflow: 'hidden',
        padding: '80px clamp(24px, 5vw, 96px) 64px',
      }}
    >
      {/* Content */}
      <div style={{ maxWidth: 760, position: 'relative', zIndex: 1 }}>

        {/* Terminal prompt typewriter */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)',
          color: 'var(--color-mono)', letterSpacing: 'var(--tracking-wide)',
          marginBottom: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 0,
          height: 22,
        }} aria-hidden="true">
          <span style={{ color: 'var(--color-accent)' }}>{typed.length > 0 ? '$ ' : ''}</span>
          <span>{typed.replace('$ ', '')}</span>
          <span style={{
            display: 'inline-block', width: 8, height: '1em',
            background: 'var(--color-accent)',
            animation: 'blink 1s step-end infinite',
            verticalAlign: 'text-bottom', marginLeft: 2,
          }}></span>
        </div>

        {/* Name */}
        <h1 className="fade-up fade-up-1" style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
          letterSpacing: '-0.03em', lineHeight: 1.05,
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-3)',
        }}>
          Thomas <span style={{ color: 'var(--color-accent)' }}>"Tommy"</span> Goodman
        </h1>

        {/* Role subtitle */}
        <div className="fade-up fade-up-2" style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)',
          letterSpacing: '-0.01em',
        }}>
          Full-Stack Developer
        </div>

        {/* Location */}
        <div className="fade-up fade-up-2" style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)', marginBottom: 'var(--space-7)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          Helensville, Auckland, New Zealand
        </div>

        {/* Tagline */}
        <p className="fade-up fade-up-3" style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
          color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)',
          maxWidth: '52ch', marginBottom: 'var(--space-10)',
        }}>
          Avionics technician turned full-stack developer. 15+ years of safety-critical systems thinking with the Royal New Zealand Air Force, now building reliable web applications.
        </p>

        {/* CTA row */}
        <div className="fade-up fade-up-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Primary: View Resume */}
          <a
            href="#"
            style={{
              background: 'var(--color-accent)', color: 'var(--color-text-inverse)',
              fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)',
              padding: '12px 24px', borderRadius: 'var(--radius-md)',
              textDecoration: 'none', transition: 'all var(--motion-base)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            View Resume
          </a>

          {/* Secondary: Get in Touch */}
          <a
            href="#contact"
            style={{
              background: 'transparent', color: 'var(--color-accent)',
              fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)',
              padding: '11px 22px', borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--color-accent)',
              textDecoration: 'none', transition: 'all var(--motion-base)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-subtle)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>

          {/* Tertiary: GitHub */}
          <a
            href="https://github.com/tonkatommy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-text-secondary)', fontFamily: 'var(--font-heading)',
              fontWeight: 500, fontSize: 'var(--text-sm)', padding: '11px 14px',
              textDecoration: 'none', transition: 'color var(--motion-base)',
              display: 'flex', alignItems: 'center', gap: 7,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
