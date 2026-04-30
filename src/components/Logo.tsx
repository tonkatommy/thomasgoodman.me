'use client'

/**
 * Logo.tsx
 *
 * TG crosshair logo mark for thomasgoodman.me.
 *
 * Design
 *   Lowercase "tg" lettermark in Agave Nerd Font (monospace/terminal aesthetic),
 *   paired with thick square L-bracket corner targeting marks, ghost crosshair
 *   lines through the centre, a soft atmospheric green glow, and a subtle
 *   glitch / pulse animation loop.
 *
 *   All colours reference design-tokens.css custom properties so the mark
 *   adapts correctly across dark (default) and light ([data-theme="light"]) modes.
 *
 * Font requirements
 *   The "tg" mark and lockup tagline use Agave Nerd Font.
 *   This font is NOT available from Google Fonts — it must be self-hosted.
 *
 *   Setup (do once):
 *     1. Download AgaveNerdFont-Regular.ttf from
 *        https://github.com/ryanoasis/nerd-fonts/releases
 *     2. Place it in public/fonts/AgaveNerdFont-Regular.ttf
 *     3. In app/globals.css (or layout.tsx via next/font/local) add:
 *
 *          @font-face {
 *            font-family: 'Agave Nerd Font';
 *            src: url('/fonts/AgaveNerdFont-Regular.ttf') format('truetype');
 *            font-weight: 400;
 *            font-display: swap;
 *          }
 *
 *   Until the font is loaded, the SVG falls back to JetBrains Mono → Cascadia
 *   Code → system monospace — the layout is identical, just a different face.
 *
 * Variants
 *   'mark'   — standalone SVG mark (default, 1:1 square).
 *   'lockup' — mark + "Thomas Goodman" (Exo 2 600) + tagline (Agave mono)
 *              in a horizontal row. Use in the nav bar and site header.
 *
 * Sizes
 *   Named preset | Height px
 *   -------------|----------
 *   'xs'         |  32   favicon / icon context
 *   'sm'         |  48   nav bar
 *   'md'         |  80   inline / card use
 *   'lg'         | 160   section use
 *   'xl'         | 320   hero / full display (default)
 *
 *   Or pass any number directly as the height in px. Width scales 1:1 for
 *   the mark; the lockup grows to the right.
 *
 * Animation
 *   Enabled by default. Pass animated={false} to suppress. The global
 *   @media (prefers-reduced-motion: reduce) block in design-tokens.css
 *   kills animations at the browser level regardless of this prop.
 *
 * Usage
 *   import Logo from '@/components/Logo'
 *
 *   <Logo />                              // standalone mark, xl
 *   <Logo variant="lockup" size="sm" />  // nav bar
 *   <Logo size={64} animated={false} />  // static badge
 */

import React from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type LogoVariant = 'mark' | 'lockup'
type LogoSize    = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const SIZE_PX: Record<LogoSize, number> = {
  xs:  32,
  sm:  48,
  md:  80,
  lg: 160,
  xl: 320,
}

interface LogoProps {
  /**
   * 'mark'   renders the SVG mark alone (default).
   * 'lockup' renders mark + name + tagline — use in nav / header.
   */
  variant?: LogoVariant

  /**
   * Named size preset or explicit height in px.
   * Mark width matches height (1:1). Lockup width is unconstrained.
   * Defaults to 'xl' (320px).
   */
  size?: LogoSize | number

  /**
   * Toggle animation. Defaults true.
   * prefers-reduced-motion is respected globally via design-tokens.css.
   */
  animated?: boolean

  className?: string
  'aria-label'?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveSize(size: LogoSize | number | undefined): number {
  if (size === undefined)       return SIZE_PX.xl
  if (typeof size === 'number') return size
  return SIZE_PX[size]
}

// ─── Mark ─────────────────────────────────────────────────────────────────────
//
// All coordinates are on a 400×400 viewBox canvas. The SVG scales to any
// rendered size via the width/height props — no pixel-level overrides needed.
//
// Key geometry (400×400 canvas, centre = 200,200):
//   "tg" text   baseline y=268, centered at x=200, fontSize=188
//   Glow ellipse cx=230, cy=200, behind text
//   Crosshairs   horizontal y=200, vertical x=200
//   Centre dot   cx=200, cy=200, r=4
//   Brackets     corners at (48,48) (352,48) (48,352) (352,352), arm=68px

interface MarkProps {
  px: number
  animated: boolean
  className?: string
  'aria-hidden'?: boolean
}

function Mark({ px, animated, className, 'aria-hidden': ariaHidden }: MarkProps) {
  // Unique prefix per instance so filter IDs and keyframe names never collide
  // when multiple <Logo> components appear on the same page.
  const uid = React.useId().replace(/:/g, '')

  // Scoped CSS keyframes injected as a <style> child of the SVG.
  const animCSS = animated ? `
    @keyframes ${uid}-glow {
      0%, 100% { opacity: 0.45; }
      50%       { opacity: 0.70; }
    }
    @keyframes ${uid}-xh {
      0%, 100% { opacity: 0.16; }
      50%       { opacity: 0.32; }
    }
    @keyframes ${uid}-dot {
      0%, 100% { opacity: 0.38; }
      50%       { opacity: 0.88; }
    }
    @keyframes ${uid}-art {
      0%, 100% { opacity: 0.40; }
      40%       { opacity: 0.65; }
      70%       { opacity: 0.20; }
    }
    @keyframes ${uid}-glitch {
      0%,  87%, 100% { transform: translate(0,     0);    }
      88%             { transform: translate(-3px,  1px);  }
      89%             { transform: translate( 3px, -2px);  }
      90%             { transform: translate(-1px,  0px);  }
      91%             { transform: translate( 0,    0);    }
    }
    .${uid}-glow { animation: ${uid}-glow    4s ease-in-out infinite;      }
    .${uid}-xh   { animation: ${uid}-xh      6s ease-in-out infinite;      }
    .${uid}-dot  { animation: ${uid}-dot      3s ease-in-out infinite;      }
    .${uid}-art1 { animation: ${uid}-art      7s ease-in-out infinite;      }
    .${uid}-art2 { animation: ${uid}-art      7s ease-in-out infinite 1.3s; }
    .${uid}-art3 { animation: ${uid}-art      7s ease-in-out infinite 2.9s; }
    .${uid}-txt  { animation: ${uid}-glitch  12s linear       infinite;     }
  ` : ''

  // Returns a class name only when animated — keeps static SVG output clean.
  const cls = (name: string) => (animated ? `${uid}-${name}` : undefined)

  return (
    <svg
      viewBox="0 0 400 400"
      width={px}
      height={px}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : 'img'}
    >
      {/* Accessible name for the standalone mark */}
      {!ariaHidden && <title>TG logo mark</title>}

      {/* Scoped keyframe CSS */}
      {animated && <style>{animCSS}</style>}

      <defs>
        {/* Gaussian blur for the atmospheric green glow */}
        <filter id={`${uid}-gF`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="26" />
        </filter>

        {/* Fractal noise grain overlaid on the "tg" lettermark.
            feBlend mode="overlay" composites the grey noise onto the source
            graphic for a subtle film-grain / terminal-screen texture. */}
        <filter id={`${uid}-gN`} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="overlay" result="blend" />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* ── Atmospheric green glow ────────────────────────────────────────── */}
      {/* Soft blurred ellipse positioned slightly right of centre so the     */}
      {/* glow pools behind the "g" letterform.                               */}
      <ellipse
        cx="240"
        cy="205"
        rx="140"
        ry="108"
        fill="#1b5c3a"
        filter={`url(#${uid}-gF)`}
        opacity="0.55"
        className={cls('glow')}
      />

      {/* ── Digital noise artifacts above the glow ───────────────────────── */}
      {/* Three thin rectangles that flicker independently — gives a          */}
      {/* targeting-computer / data-feed texture to the top of the mark.     */}
      <rect x="220" y="118" width="30" height="3" rx="1"
        fill="var(--color-accent-muted)" opacity="0.50"
        className={cls('art1')} />
      <rect x="260" y="111" width="16" height="2" rx="1"
        fill="var(--color-accent)"      opacity="0.38"
        className={cls('art2')} />
      <rect x="238" y="104" width="22" height="2" rx="1"
        fill="var(--color-accent-muted)" opacity="0.32"
        className={cls('art3')} />

      {/* ── Ghost crosshair lines ─────────────────────────────────────────── */}
      {/* Hair-thin lines through (200,200). Very low opacity — only visible  */}
      {/* when you look for them, adding depth without distraction.           */}
      <line x1="0"   y1="200" x2="400" y2="200"
        stroke="var(--color-accent-muted)" strokeWidth="0.75"
        opacity="0.22" className={cls('xh')} />
      <line x1="200" y1="0"   x2="200" y2="400"
        stroke="var(--color-accent-muted)" strokeWidth="0.75"
        opacity="0.22" className={cls('xh')} />

      {/* ── Centre target dot ─────────────────────────────────────────────── */}
      <circle cx="200" cy="200" r="4"
        stroke="var(--color-accent-muted)" strokeWidth="1.5"
        fill="none" opacity="0.48" className={cls('dot')} />

      {/* ── "tg" lettermark ──────────────────────────────────────────────── */}
      {/* Font: Agave Nerd Font — terminal/monospace coding face.             */}
      {/* Self-host via @font-face (see file header for instructions).        */}
      {/* Falls back to JetBrains Mono → Cascadia Code → system monospace.   */}
      {/*                                                                      */}
      {/* Both letters share --color-text-primary; the green accent comes     */}
      {/* from the atmospheric glow behind the "g", not the letter fill.      */}
      {/*                                                                      */}
      {/* text-anchor="middle" + x=200 centres the combined "tg" string       */}
      {/* automatically without needing to calculate per-glyph widths.        */}
      {/* JetBrains Mono cap-height ≈ 73% of em, descender ≈ 18% of em.          */}
      {/* At fontSize=280: cap ≈ 204px, descender ≈ 50px.                       */}
      {/* Visual mid = baseline − 204 + (204+50)/2 = baseline − 77.             */}
      {/* Set mid = 200 (viewBox centre) → baseline y = 277.                    */}
      {/* Grain filter removed from text — it was darkening the strokes.        */}
      <text
        x="200"
        y="277"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace"
        fontSize="280"
        fontWeight="400"
        fontStyle="normal"
        fill="var(--color-text-primary)"
        className={cls('txt')}
      >tg</text>

      {/* ── Corner L-bracket targeting marks ─────────────────────────────── */}
      {/* Four brackets at corners (48,48) (352,48) (48,352) (352,352).       */}
      {/* Each bracket has two arms of 68px (horizontal + vertical).          */}
      {/* strokeLinecap="square" gives the dimensionally square, non-skewed   */}
      {/* look that matches the Midjourney reference output.                  */}
      {/* Tick marks: 4px perpendicular lines ~40px along each arm.           */}

      {/* Top-left */}
      <polyline points="48,116 48,48 116,48"
        stroke="var(--color-accent)" strokeWidth="9"
        strokeLinecap="square" strokeLinejoin="miter"
        fill="none" opacity="0.95" />
      <line x1="88" y1="44"  x2="88" y2="52"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />
      <line x1="44" y1="88"  x2="52" y2="88"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />

      {/* Top-right */}
      <polyline points="352,116 352,48 284,48"
        stroke="var(--color-accent)" strokeWidth="9"
        strokeLinecap="square" strokeLinejoin="miter"
        fill="none" opacity="0.95" />
      <line x1="312" y1="44"  x2="312" y2="52"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />
      <line x1="348" y1="88"  x2="356" y2="88"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />

      {/* Bottom-left */}
      <polyline points="48,284 48,352 116,352"
        stroke="var(--color-accent)" strokeWidth="9"
        strokeLinecap="square" strokeLinejoin="miter"
        fill="none" opacity="0.95" />
      <line x1="88"  y1="348" x2="88"  y2="356"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />
      <line x1="44"  y1="312" x2="52"  y2="312"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />

      {/* Bottom-right */}
      <polyline points="352,284 352,352 284,352"
        stroke="var(--color-accent)" strokeWidth="9"
        strokeLinecap="square" strokeLinejoin="miter"
        fill="none" opacity="0.95" />
      <line x1="312" y1="348" x2="312" y2="356"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />
      <line x1="348" y1="312" x2="356" y2="312"
        stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="square" opacity="0.60" />
    </svg>
  )
}

// ─── Lockup ───────────────────────────────────────────────────────────────────
//
// Horizontal composition: [mark] | [divider] | [Thomas Goodman / tagline]
//
// Name uses --font-heading (Exo 2, weight 600).
// Tagline uses --font-mono (Agave Nerd Font → JetBrains Mono fallback).
// Both font stacks are referenced via CSS custom properties so the lockup
// automatically reflects any global token changes.

interface LockupProps {
  px: number
  animated: boolean
  className?: string
}

function Lockup({ px, animated, className }: LockupProps) {
  const nameSize  = Math.max(13, Math.round(px * 0.375))  // Exo 2 SemiBold
  const tagSize   = Math.max(9,  Math.round(px * 0.215))  // Agave Nerd Font
  const gap       = Math.max(8,  Math.round(px * 0.28))
  const dividerH  = Math.round(px * 0.58)

  return (
    <div
      className={className}
      style={{
        display:    'flex',
        alignItems: 'center',
        gap:        `${gap}px`,
        height:     `${px}px`,
        lineHeight: 1,
      }}
    >
      {/* Mark — aria-hidden; accessible label lives on the outer wrapper */}
      <Mark px={px} animated={animated} aria-hidden />

      {/* Vertical accent divider */}
      <div
        aria-hidden="true"
        style={{
          width:      '1px',
          height:     `${dividerH}px`,
          background: 'var(--color-accent)',
          flexShrink: 0,
          opacity:    0.55,
        }}
      />

      {/* Name + tagline stack */}
      <div
        style={{
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          gap:            `${Math.max(2, Math.round(px * 0.038))}px`,
        }}
      >
        {/* "Thomas Goodman" — Exo 2 SemiBold, --color-text-primary */}
        <span
          style={{
            fontFamily:    'var(--font-heading)',
            fontSize:      `${nameSize}px`,
            fontWeight:    600,
            color:         'var(--color-text-primary)',
            lineHeight:    'var(--leading-tight)',
            letterSpacing: 'var(--tracking-tight)',
            whiteSpace:    'nowrap',
          }}
        >
          Thomas Goodman
        </span>

        {/* "full-stack dev" — Agave Nerd Font / mono, --color-mono (green) */}
        <span
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      `${tagSize}px`,
            fontWeight:    400,
            color:         'var(--color-mono)',
            lineHeight:    'var(--leading-normal)',
            letterSpacing: 'var(--tracking-wide)',
            whiteSpace:    'nowrap',
          }}
        >
          full-stack dev
        </span>
      </div>
    </div>
  )
}

// ─── Public export ────────────────────────────────────────────────────────────

export default function Logo({
  variant  = 'mark',
  size,
  animated = true,
  className,
  'aria-label': ariaLabel = 'Tommy Goodman — TG logo',
}: LogoProps) {
  const px = resolveSize(size)

  if (variant === 'lockup') {
    return (
      <div role="img" aria-label={ariaLabel} style={{ display: 'inline-flex' }}>
        <Lockup px={px} animated={animated} className={className} />
      </div>
    )
  }

  return (
    <Mark
      px={px}
      animated={animated}
      className={className}
      aria-hidden={false}
    />
  )
}
