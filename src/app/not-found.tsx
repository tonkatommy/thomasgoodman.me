// app/not-found.tsx — thomasgoodman.me

import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg-base)',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-mono)',
          letterSpacing: 'var(--tracking-wide)',
          marginBottom: '1rem',
        }}
      >
        {'> 404'}
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 6vw, 3.75rem)',
          color: 'var(--color-text-primary)',
          marginBottom: '1rem',
          letterSpacing: '-0.03em',
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-secondary)',
          marginBottom: '2rem',
          maxWidth: '40ch',
          lineHeight: 1.65,
        }}
      >
        This route does not exist. Probably a wrong turn, not a fault in the avionics.
      </p>
      <Link
        href="/"
        style={{
          background: 'var(--color-accent)',
          color: 'var(--color-text-inverse)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 'var(--text-base)',
          padding: '10px 24px',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
        }}
      >
        Back home
      </Link>
    </div>
  )
}
