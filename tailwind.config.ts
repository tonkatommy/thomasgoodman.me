import type { Config } from 'tailwindcss'

/**
 * thomasgoodman.me — Tailwind CSS Configuration
 *
 * All colour values reference CSS custom properties defined in
 * src/styles/design-tokens.css so that dark/light mode switching
 * works via [data-theme="light"] on <html> without Tailwind's own
 * dark variant needing to scan for colour classes.
 *
 * For theme toggling in components, prefer CSS variables directly.
 * Tailwind classes here are for layout, spacing, and typography utilities.
 */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // We handle dark/light via CSS custom properties + data-theme attribute,
  // not Tailwind's built-in dark: variant. Set to 'class' if you ever want
  // to use dark: utilities, but note it will conflict with the data-theme
  // approach unless you alias the selector.
  darkMode: ['selector', '[data-theme="dark"]'],

  theme: {
    // ── Container ──────────────────────────────────────────────────────
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',   // --space-6
        md: '2rem',          // --space-8
        lg: '3rem',          // --space-12
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',        // --container-max
      },
    },

    extend: {
      // ── Colours (all reference CSS vars) ───────────────────────────
      colors: {
        bg: {
          base:    'var(--color-bg-base)',
          surface: 'var(--color-bg-surface)',
          raised:  'var(--color-bg-raised)',
          overlay: 'var(--color-bg-overlay)',
        },
        border: {
          subtle:  'var(--color-border-subtle)',
          default: 'var(--color-border-default)',
          strong:  'var(--color-border-strong)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover:   'var(--color-accent-hover)',
          muted:   'var(--color-accent-muted)',
          subtle:  'var(--color-accent-subtle)',
        },
        text: {
          primary:   'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted:     'var(--color-text-muted)',
          inverse:   'var(--color-text-inverse)',
        },
        mono:    'var(--color-mono)',
        error:   'var(--color-error)',
        success: 'var(--color-success)',
      },

      // ── Font families ───────────────────────────────────────────────
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
        sans:    ['var(--font-body)',    'system-ui', 'sans-serif'],
      },

      // ── Font sizes ──────────────────────────────────────────────────
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1.5' }],
        'sm':   ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem',     { lineHeight: '1.65' }],
        'lg':   ['1.125rem', { lineHeight: '1.65' }],
        'xl':   ['1.25rem',  { lineHeight: '1.5' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.35' }],
        '3xl':  ['1.875rem', { lineHeight: '1.25' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.15' }],
        '5xl':  ['3rem',     { lineHeight: '1.1' }],
        '6xl':  ['3.75rem',  { lineHeight: '1.05' }],
        '7xl':  ['4.5rem',   { lineHeight: '1' }],
      },

      // ── Letter spacing ──────────────────────────────────────────────
      letterSpacing: {
        tighter: '-0.02em',
        tight:   '-0.01em',
        normal:  '0em',
        wide:    '0.05em',
        wider:   '0.1em',
      },

      // ── Spacing (8px grid, extends Tailwind defaults) ───────────────
      spacing: {
        '18': '4.5rem',   /* 72px — useful gap */
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '36': '9rem',
      },

      // ── Border radius ───────────────────────────────────────────────
      borderRadius: {
        'sm':   '4px',
        'md':   '6px',
        'lg':   '10px',
        'xl':   '16px',
        '2xl':  '24px',
        '3xl':  '32px',
      },

      // ── Box shadows ─────────────────────────────────────────────────
      boxShadow: {
        'sm':   'var(--shadow-sm)',
        'md':   'var(--shadow-md)',
        'lg':   'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
      },

      // ── Max widths ──────────────────────────────────────────────────
      maxWidth: {
        'container': '1200px',
        'prose-lg':  '72ch',
        'prose':     '65ch',
      },

      // ── Heights ─────────────────────────────────────────────────────
      height: {
        'nav': '64px',
      },
      minHeight: {
        'nav':    '64px',
        'screen': '100dvh',
      },

      // ── Transitions ─────────────────────────────────────────────────
      transitionDuration: {
        'fast':   '150',
        'base':   '250',
        'slow':   '400',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ── Animation ───────────────────────────────────────────────────
      animation: {
        'fade-in':     'fadeIn 0.4s ease forwards',
        'fade-up':     'fadeUp 0.5s ease forwards',
        'fade-up-slow': 'fadeUp 0.7s ease forwards',
        'blink':       'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },

      // ── Z-index ─────────────────────────────────────────────────────
      zIndex: {
        'nav':    '100',
        'modal':  '200',
        'toast':  '300',
      },
    },
  },

  plugins: [],
}

export default config
