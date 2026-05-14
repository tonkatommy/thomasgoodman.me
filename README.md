# thomasgoodman.me

Personal portfolio site for Thomas "Tommy" Goodman — full-stack developer, former RNZAF Avionics Technician, based in Helensville, Auckland NZ.

## Stack

Zero build step. Pure static HTML served directly to the browser.

| Concern | Solution |
|---|---|
| UI | React 18 via CDN (UMD) |
| JSX transpilation | Babel Standalone (in-browser) |
| Styling | CSS custom properties (design tokens) |
| Fonts | Self-hosted — Exo 2, Jura, Agave Nerd Font |
| Background | Canvas dot-grid with cursor repulsion |
| Theme | `data-theme` attribute, persisted to `localStorage` |

## Running locally

No install needed. Open `index.html` in a browser, or serve it from any static file server:

```bash
# Python
python -m http.server 8080

# Node
npx serve .

# VS Code
# Live Server extension → right-click index.html → "Open with Live Server"
```

> **Note:** Babel Standalone requires the components to be loaded over HTTP — the `file://` protocol will work in most browsers but CORS restrictions can block cross-origin script loading in some environments. A local server is the safest option.

## Structure

```
thomasgoodman.me/
├── index.html          # Entry point — design tokens, app shell, dot-grid canvas
├── SectionLabel.jsx    # Shared decorated heading component
├── Nav.jsx             # Sticky nav with active-section highlight + mobile menu
├── Hero.jsx            # Opening section with typewriter animation
├── About.jsx           # Bio, background, key facts
├── Experience.jsx      # Work history timeline
├── Projects.jsx        # Project card grid
├── TechStack.jsx       # Categorised skill grid
├── Education.jsx       # Academic history
├── WhyMe.jsx           # Value proposition
├── Hobbies.jsx         # Personal interests
├── Contact.jsx         # Links + copy-email button
└── fonts/              # Local TTF font files
```

## Sections

- **Hero** — typewriter `$ whoami` prompt, role, CTA links
- **About** — background story, RNZAF → developer career change
- **Experience** — work history with expandable role descriptions and tech tags
- **Projects** — key personal and professional projects (Whenuapai Key Press Manager, Presence Guard)
- **Tech Stack** — languages, frameworks, tools, infra
- **Education** — academic qualifications
- **Why Me** — differentiation from other candidates
- **Hobbies** — life outside code
- **Contact** — email, LinkedIn, GitHub

## Design

- Dark-first with full light-mode support via CSS custom properties
- Accent colour: `#52b788` (dark) / `#2d6a4f` (light)
- Fonts: **Exo 2** (headings) · **Jura** (body) · **Agave Nerd Font** (mono)
- All fonts are self-hosted; no third-party network requests for assets
- Interactive canvas dot-grid background responds to mouse/touch position
- Smooth scroll, fade-up entrance animations, reduced-motion safe
