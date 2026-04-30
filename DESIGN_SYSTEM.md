# thomasgoodman.me — Design System

> **For Claude:** Read this file at the start of every session involving UI, copy, or component work on this site. It is the single source of truth for all visual and interaction decisions. Never override these tokens without first updating this document.

Last updated: 2026-04-27

---

## 1. Brand Identity

### Personality

**Technical warmth.** The site should feel like the person behind it: methodical and precise (15 years of safety-critical engineering) but genuinely human and approachable. Not a corporate portfolio. Not a flashy creative site. The aesthetic that best describes it: _a skilled craftsman's well-organised workshop_.

Two tensions to hold in balance:

| Terminal / Technical                  | Warm / Personal                      |
| ------------------------------------- | ------------------------------------ |
| Dark backgrounds, earthy greens       | Humanising copy, personal voice      |
| Monospace accents, prompt characters  | Soft transitions, rounded corners    |
| Structural, organised layout          | Photos, hobbies, real opinions       |
| Precise spacing, audit-trail thinking | Not robotic — opinionated and direct |

### Voice (UI copy)

- First person, direct. "I build..." not "Tommy builds..."
- No buzzwords: no "passionate", "guru", "ninja", "rockstar"
- Honest about skill level — never overstate
- Short sentences over long ones
- No em dashes. Use commas, full stops, or hyphens with spaces.

### Logo / Name mark

- Text-based: **Thomas Goodman** or **Tommy Goodman** — no icon logo yet
- In nav/header: `Tommy Goodman` in Exo 2 SemiBold
- Domain mark: `thomasgoodman.me` in mono for footers and meta

---

## 2. Colour System

### Palette — Dark Mode (default)

```
--color-bg-base:      #0b1210   Deep background — near-black with green tint
--color-bg-surface:   #111a16   Cards, nav, panels
--color-bg-raised:    #172219   Modals, dropdowns, code blocks
--color-bg-overlay:   rgba(11,18,16,0.85)   Overlay / backdrop

--color-border-subtle:  #1f2e27   Dividers, hairlines
--color-border-default: #2a3d33   Interactive borders, inputs
--color-border-strong:  #3d5c4a   Focused states, active

--color-accent:         #52b788   Primary interactive — links, CTAs, highlights
--color-accent-hover:   #6fcfa0   Hover state of accent
--color-accent-muted:   #2d6a4f   Background accents, section underlines
--color-accent-subtle:  #142b1f   Very muted — accent-tinted backgrounds

--color-text-primary:   #dce8e2   Main body text
--color-text-secondary: #8aab98   Secondary labels, metadata
--color-text-muted:     #566e61   Placeholder, disabled, helper text
--color-text-inverse:   #0b1210   Text on accent-coloured backgrounds

--color-mono:           #7dd3b0   Terminal/code accents — section labels, tags
```

### Palette — Light Mode

Applied via `[data-theme="light"]` on `<html>`.

```
--color-bg-base:      #f4f9f6
--color-bg-surface:   #ffffff
--color-bg-raised:    #e8f3ed
--color-bg-overlay:   rgba(244,249,246,0.9)

--color-border-subtle:  #d4e8db
--color-border-default: #a8cbb7
--color-border-strong:  #6fa88a

--color-accent:         #2d6a4f   Original brand green
--color-accent-hover:   #245a42
--color-accent-muted:   #52b788
--color-accent-subtle:  #e8f5ee

--color-text-primary:   #0d1f18
--color-text-secondary: #3a5e4e
--color-text-muted:     #6b9a84
--color-text-inverse:   #ffffff

--color-mono:           #2d6a4f
```

### Semantic colour rules

- **Accent** (#52b788 dark / #2d6a4f light) is used for: primary buttons, active nav links, section underlines, icon fills, tag borders
- **Mono** (#7dd3b0 dark / #2d6a4f light) is used for: monospace labels, tech tag text, terminal prompts (`> `, `$ `)
- **Never** use pure `#000000` or `#ffffff` — always use the token values
- **Error:** `#e57373` (red-ish, used sparingly — contact form validation only)
- **Success:** use accent green

---

## 3. Typography

### Font Families

```
--font-heading: 'Exo 2', system-ui, sans-serif
--font-body:    'Open Sans', system-ui, sans-serif
--font-mono:    'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace
```

Google Fonts import (add to layout):

```
https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,opsz,wght@0,6..12,300..800;1,6..12,300..800&family=JetBrains+Mono:wght@400;500;700&display=swap
```

### Type Scale

| Token         | rem   | px  | Use                        |
| ------------- | ----- | --- | -------------------------- |
| `--text-xs`   | 0.75  | 12  | Meta, badges, legal        |
| `--text-sm`   | 0.875 | 14  | Secondary labels, captions |
| `--text-base` | 1     | 16  | Body text                  |
| `--text-lg`   | 1.125 | 18  | Lead paragraph             |
| `--text-xl`   | 1.25  | 20  | Sub-headings               |
| `--text-2xl`  | 1.5   | 24  | Section sub-titles         |
| `--text-3xl`  | 1.875 | 30  | Section titles (h3)        |
| `--text-4xl`  | 2.25  | 36  | Page section headings (h2) |
| `--text-5xl`  | 3     | 48  | Hero sub-heading           |
| `--text-6xl`  | 3.75  | 60  | Hero name (desktop)        |
| `--text-7xl`  | 4.5   | 72  | Hero name (large screens)  |

### Weight pairings

- h1 hero name: Exo 2, weight 700
- h2 section headings: Exo 2, weight 600
- h3 sub-headings: Exo 2, weight 500
- Body paragraphs: Open Sans, weight 400
- Emphasis / labels: Open Sans, weight 600
- Mono labels / tags: JetBrains Mono, weight 500
- Navigation: Exo 2, weight 500

### Line height

- Headings: 1.15
- Body: 1.65
- Mono: 1.4

### Letter spacing

- Headings h1-h2: -0.02em (slightly tighter)
- Body: 0 (normal)
- Mono labels: 0.05em (slightly wider — aids readability at small size)
- All-caps labels: 0.1em

---

## 4. Spacing System

8px base grid. All spacing tokens are multiples of 0.25rem (4px).

```
--space-1:   0.25rem    4px
--space-2:   0.5rem     8px
--space-3:   0.75rem    12px
--space-4:   1rem       16px
--space-5:   1.25rem    20px
--space-6:   1.5rem     24px
--space-8:   2rem       32px
--space-10:  2.5rem     40px
--space-12:  3rem       48px
--space-16:  4rem       64px
--space-20:  5rem       80px
--space-24:  6rem       96px
--space-32:  8rem       128px
```

### Section padding

- Desktop: `--space-24` (96px) top and bottom
- Tablet: `--space-16` (64px)
- Mobile: `--space-12` (48px)

### Container

- Max-width: 1200px
- Horizontal padding: `--space-6` (24px) mobile, `--space-12` (48px) desktop

---

## 5. Border Radius

```
--radius-sm:   4px    Tags, badges, code
--radius-md:   6px    Buttons, inputs
--radius-lg:   10px   Cards
--radius-xl:   16px   Large cards, featured project cards
--radius-2xl:  24px   Modal, overlay panels
--radius-full: 9999px Pills, avatar
```

---

## 6. Shadows

All shadows have a faint green tint on dark mode to avoid the "cold grey box" feel.

```
--shadow-sm:   0 1px 3px rgba(0,0,0,0.4)
--shadow-md:   0 4px 12px rgba(0,0,0,0.4), 0 0 0 1px rgba(82,183,136,0.06)
--shadow-lg:   0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(82,183,136,0.08)
--shadow-glow: 0 0 20px rgba(82,183,136,0.18)   For accent elements on hover
```

Light mode shadows use neutral grey (no green tint needed):

```
--shadow-sm:   0 1px 3px rgba(0,0,0,0.08)
--shadow-md:   0 4px 12px rgba(0,0,0,0.1)
--shadow-lg:   0 8px 24px rgba(0,0,0,0.12)
--shadow-glow: 0 0 20px rgba(45,106,79,0.15)
```

---

## 7. Motion & Animation

```
--motion-fast:   150ms ease
--motion-base:   250ms ease
--motion-slow:   400ms ease
--motion-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Rules

- All interactive elements (buttons, links, cards) transition on hover using `--motion-base`
- Page-load animations: fade-up, `--motion-slow`, staggered by 100ms between elements
- No looping animations on the main page (except optional subtle hero particle/grid)
- Respect `prefers-reduced-motion` — all animations should fall back to opacity-only or none

---

## 8. Iconography

Lucide - Icons:  
https://lucide.dev/guide/installation

Phosphor Icons  
https://github.com/phosphor-icons/homepage#phosphor-icons

### Installation

```bash
npm install lucide-react
```

### React usage

```tsx
import { Github, Mail, MapPin, FileText, ExternalLink } from 'lucide-react'

// Inline with text — size matches current font-size
<Github size={20} />

// With explicit colour token
<Mail size={20} color="var(--color-accent)" />

// Always pair with a visible label or aria-label
<a href="mailto:tommy@tommytinkers.nz" aria-label="Send email">
  <Mail size={20} />
  <span>Get in touch</span>
</a>
```

### Usage rules

- Icons are decorative — always pair with a visible text label or `aria-label`
- Size: `16` inline with small text, `20` standard standalone, `24` for hero/section icons
- Colour: inherit from parent (`currentColor`) unless an explicit token colour is needed
- Use `strokeWidth={1.5}` for a lighter feel in the hero/about sections; default `2` elsewhere
- Do not mix Lucide and Phosphor icons in the same section — pick one and stay consistent

### Key icons (Lucide)

| Purpose | Component | Import |
|---|---|---|
| GitHub | `Github` | `import { Github } from 'lucide-react'` |
| LinkedIn | `Linkedin` | `import { Linkedin } from 'lucide-react'` |
| Email | `Mail` | `import { Mail } from 'lucide-react'` |
| Location | `MapPin` | `import { MapPin } from 'lucide-react'` |
| Resume / file | `FileText` | `import { FileText } from 'lucide-react'` |
| External link | `ExternalLink` | `import { ExternalLink } from 'lucide-react'` |
| Dark mode toggle | `Moon` | `import { Moon } from 'lucide-react'` |
| Light mode toggle | `Sun` | `import { Sun } from 'lucide-react'` |
| Mobile menu | `Menu` | `import { Menu } from 'lucide-react'` |
| Close / dismiss | `X` | `import { X } from 'lucide-react'` |
| Terminal / code | `Terminal` | `import { Terminal } from 'lucide-react'` |
| Arrow right | `ArrowRight` | `import { ArrowRight } from 'lucide-react'` |

---

## 9. Component Patterns

### 9.1 Section heading

Every section opens with a two-line heading system:

```
Line 1: mono label       > 01. about
Line 2: Heading font     About Me
         + short accent underline (24px wide, 2px tall, --color-accent)
```

HTML pattern:

```html
<div class="section-header">
  <span class="section-label">&gt; 01. about</span>
  <h2 class="section-title">About Me</h2>
</div>
```

CSS:

```css
.section-label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-mono);
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: var(--space-2);
}

.section-title {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
  line-height: 1.15;
  position: relative;
  padding-bottom: var(--space-4);
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: var(--color-accent);
}
```

Section numbering convention:

```
> 01. about
> 02. projects
> 03. tech stack
> 04. why me
> 05. hobbies
> 06. blog
> 07. contact
```

---

### 9.2 Buttons

**Primary button** (main CTA — "View Resume"):

```css
background: var(--color-accent);
color: var(--color-text-inverse);
font-family: var(--font-heading);
font-weight: 600;
font-size: var(--text-base);
padding: var(--space-3) var(--space-6);
border-radius: var(--radius-md);
border: none;
transition:
  background var(--motion-base),
  box-shadow var(--motion-base);

:hover {
  background: var(--color-accent-hover);
  box-shadow: var(--shadow-glow);
}
```

**Secondary button** (e.g., "View on GitHub"):

```css
background: transparent;
color: var(--color-accent);
border: 1.5px solid var(--color-accent);
/* same padding and radius as primary */

:hover {
  background: var(--color-accent-subtle);
}
```

**Ghost button / text link** (nav links, subtle actions):

```css
background: transparent;
color: var(--color-text-secondary);
border: none;
padding: var(--space-2) var(--space-4);

:hover {
  color: var(--color-text-primary);
}
```

---

### 9.3 Cards

**Project card:**

```css
background: var(--color-bg-surface);
border: 1px solid var(--color-border-subtle);
border-radius: var(--radius-xl);
padding: var(--space-6);
transition:
  border-color var(--motion-base),
  box-shadow var(--motion-base),
  transform var(--motion-base);
position: relative;
overflow: hidden;

/* Top accent bar */
::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent);
  opacity: 0;
  transition: opacity var(--motion-base);
}

:hover {
  border-color: var(--color-border-default);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);

  ::before {
    opacity: 1;
  }
}
```

**Experience / timeline card:**

- No border, left-side accent line (3px, --color-accent-muted)
- Padding-left: var(--space-6)

---

### 9.4 Tech stack tags

```css
font-family: var(--font-mono);
font-size: var(--text-xs);
font-weight: 500;
letter-spacing: 0.05em;
color: var(--color-mono);
background: var(--color-accent-subtle);
border: 1px solid var(--color-accent-muted);
border-radius: var(--radius-sm);
padding: var(--space-1) var(--space-3);
display: inline-flex;
align-items: center;
gap: var(--space-2);
```

---

### 9.5 Navigation

```
Position: fixed top, full width
Height: 64px
Background: var(--color-bg-base) + backdrop-blur (when scrolled)
Border-bottom: 1px solid var(--color-border-subtle) (when scrolled)
Z-index: 100

Layout: flex, space-between
Left: Name mark "Tommy Goodman" — Exo 2 SemiBold, --color-text-primary
Right: nav links (About, Projects, etc.) + theme toggle + "Resume" primary button (smaller variant)

Active link: --color-accent underline, 2px
Hover link: --color-text-primary
Inactive link: --color-text-secondary

Mobile: hamburger → full-screen overlay, centered links, staggered fade-in
```

---

### 9.6 Hero section

```
Min-height: 100vh
Background: var(--color-bg-base)
Optional: very subtle dot grid pattern overlay (opacity 0.04)

Layout (desktop): two-column — text left, visual right (subtle terminal window or animated element)
Layout (mobile): single column, text only

Content order:
1. Mono label:    $ whoami
2. Name:          Thomas Goodman  (--text-7xl desktop, --text-5xl mobile)
3. Role line:     Full-Stack Developer  (--color-accent, Exo 2 SemiBold)
4. Location:      Helensville, Auckland, NZ  (--color-text-secondary, small)
5. Bio line:      Short tagline from profile
6. CTA row:       [View Resume] (primary)  [GitHub] (secondary)  [LinkedIn] (ghost)
```

---

### 9.7 Terminal decoration pattern

Used sparingly for character. Never overdo it — 1-2 instances per page maximum.

```html
<div class="terminal-window">
  <div class="terminal-bar">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
  </div>
  <div class="terminal-body">
    <span class="prompt">$ </span>
    <span class="command">cat about.txt</span>
    ...
  </div>
</div>
```

```css
.terminal-window {
  background: var(--color-bg-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.prompt {
  color: var(--color-accent);
}
.command {
  color: var(--color-text-primary);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
}
.dot.red {
  background: #ff5f57;
}
.dot.yellow {
  background: #ffbd2e;
}
.dot.green {
  background: #28c840;
}
```

---

## 10. Page Section Map

| Section     | Mono label         | Notes                                         |
| ----------- | ------------------ | --------------------------------------------- |
| Hero        | `$ whoami`         | Full-viewport, primary CTA "View Resume"      |
| About       | `> 01. about`      | Bio + photo or terminal window                |
| Projects    | `> 02. projects`   | Card grid — featured first                    |
| Tech Stack  | `> 03. tech stack` | Grouped by proficiency level                  |
| Why Me      | `> 04. why me`     | Value proposition — honest, direct            |
| Hobbies     | `> 05. hobbies`    | Humanising section — kept light               |
| Latest post | `> 06. blog`       | Single featured post card, link to /blog      |
| Contact     | `> 07. contact`    | Email, LinkedIn, GitHub, simple form optional |

---

## 11. Responsive Breakpoints

```
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px
```

Mobile-first. All components start mobile, scale up.

---

## 12. Dark / Light Mode

- Default: **dark mode**
- Toggle: button in nav, persisted via `localStorage` and applied to `<html data-theme="dark|light">`
- CSS strategy: CSS custom properties defined on `:root` (dark), overridden on `[data-theme="light"]`
- Tailwind: use `darkMode: 'class'` with the `.dark` class approach, mapping to data-theme
- No flash of unstyled content (FOUC): set initial theme from localStorage in a `<script>` in `<head>` before page render

---

## 13. Content Constraints (carry from profile)

These apply to every line of UI copy generated for this site:

- No em dashes. Use commas, full stops, or hyphens with spaces.
- Mission Ready HQ title: always "Full-Stack Developer (Student)"
- 80% time saving: only ever attached to the Whenuapai Key Press Manager
- Presence Guard: no invented percentage metrics
- Esports club: co-founded, not founded
- Do not use: architected, spearheaded, pioneered, orchestrated
- Acknowledge skill gaps honestly (Python = elementary, TypeScript = working knowledge, etc.)

See `context/Tommy_Personal_Website_Profile.md` for the full verified facts file.

---

## 14. File & Folder Conventions

```
src/
  app/              Next.js App Router pages
  components/
    ui/             Design system primitives (Button, Card, Tag, etc.)
    sections/       Page sections (Hero, About, Projects, etc.)
    layout/         Nav, Footer, ThemeToggle
  styles/
    design-tokens.css   CSS custom properties (this system)
    globals.css         Base reset + global styles
  lib/              Utilities, helpers
  types/            TypeScript types
  content/          MDX blog posts, project data

DESIGN_SYSTEM.md    ← this file
tailwind.config.ts
```

---

## 15. Quick Reference — What Claude should always do

When building any UI component for this site:

1. Use `var(--token-name)` CSS variables — never hardcode hex values
2. Check this file for the correct component pattern before creating a new one
3. Apply `font-family: var(--font-heading)` to all headings
4. Apply `font-family: var(--font-mono)` to all section labels and tech tags
5. Use the `section-label` + `section-title` heading pattern for every page section
6. Test both dark (default) and light mode — components must work in both
7. Respect `prefers-reduced-motion`
8. No em dashes in any copy
9. Primary CTA on every page above the fold: "View Resume"
10. Verified facts only — cross-reference `context/Tommy_Personal_Website_Profile.md`
