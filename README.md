# thomasgoodman.me

Personal portfolio site for Thomas "Tommy" Goodman — full-stack developer based in Auckland, NZ.

Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, and **MUI**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check (`tsc --noEmit`) |

## Stack

- **Framework** — Next.js 15, App Router
- **Language** — TypeScript (strict)
- **Styling** — Tailwind CSS + CSS custom properties (design tokens)
- **Components** — MUI, Lucide React icons
- **Fonts** — Exo 2 (headings), Open Sans (body), JetBrains Mono (code)

## Updating content

All portfolio copy lives in **`src/lib/data.ts`** — experience, projects, tech stack, education, hobbies, and contact links. Edit that file to change anything displayed on the page; no component files need touching.

## Theming

Dark mode is the default (SSR). Theme is toggled at runtime by switching `data-theme` on `<html>` between `"dark"` and `"light"`. All colour values are CSS custom properties defined in `src/styles/design-tokens.css`.

Theme preference persists via `localStorage` key `tg-theme`.

## Resume

Drop a PDF at `public/resume/resume.pdf` — it's already referenced by `/resume`.
