// Nav.jsx — thomasgoodman.me

const Nav = ({ theme, onToggleTheme, activeSection }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, height: 64,
    zIndex: 100, display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 clamp(20px, 5vw, 48px)',
    background: scrolled ? 'var(--color-bg-surface)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--color-border-default)' : '1px solid transparent',
    boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.35)' : 'none',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    transition: 'all 250ms ease',
  };

  return (
    <>
      <nav style={navStyle} aria-label="Main navigation">
        {/* Nameplate */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16,
            color: 'var(--color-text-primary)', letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
          aria-label="Scroll to top"
        >
          Tommy Goodman
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
          {links.map(link => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 13,
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  padding: '6px 12px', borderRadius: 'var(--radius-md)',
                  textDecoration: 'none', transition: 'color var(--motion-base)',
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
              >
                {link.label}
              </a>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle colour theme"
            style={{
              width: 32, height: 32, borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-default)',
              background: 'transparent', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginLeft: 4, color: 'var(--color-text-secondary)',
              transition: 'all var(--motion-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-border-strong)'; e.currentTarget.style.color = 'var(--color-text-primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-default)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Resume CTA */}
          <a
            href="#"
            style={{
              background: 'var(--color-accent)', color: 'var(--color-text-inverse)',
              fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12,
              padding: '6px 16px', borderRadius: 'var(--radius-md)',
              textDecoration: 'none', marginLeft: 8,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              transition: 'all var(--motion-base)',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--color-text-primary)', padding: 8,
            display: 'none',
          }}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0,
          background: 'var(--color-bg-surface)',
          borderBottom: '1px solid var(--color-border-subtle)',
          zIndex: 99, padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 15,
                color: 'var(--color-text-secondary)', padding: '10px 0',
                textDecoration: 'none', borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex', alignItems: 'center',
                textTransform: 'uppercase', letterSpacing: '0.06em',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 16, alignItems: 'center' }}>
            <a
              href="#"
              style={{
                background: 'var(--color-accent)', color: 'var(--color-text-inverse)',
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13,
                padding: '8px 20px', borderRadius: 'var(--radius-md)', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}
            >
              View Resume
            </a>
            <button
              onClick={onToggleTheme}
              style={{
                width: 36, height: 36, borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-default)',
                background: 'transparent', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-text-secondary)',
              }}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Object.assign(window, { Nav });
