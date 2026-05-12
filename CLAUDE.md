# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server (Next.js, port 3000)
npm run build        # production build
npm run lint         # ESLint
npm run type-check   # tsc --noEmit (no test suite — type-check is the safety net)
```

## Architecture

Personal portfolio site built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **MUI**.

### Content is centralised in one file

`src/lib/data.ts` is the single source of truth for all portfolio copy — experience, projects, tech stack, education, hobbies, contact links. To change any displayed text or add an entry, edit only this file. Component files should not contain hardcoded copy.

### Theming via CSS custom properties, not Tailwind dark variant

Dark mode is the SSR default (`<html data-theme="dark">`). Light mode is applied by toggling `data-theme="light"` on `<html>` at runtime. All colour tokens live in `src/styles/design-tokens.css` as CSS custom properties. Tailwind's colour utilities (`bg-bg-base`, `text-text-primary`, `accent-DEFAULT`, etc.) reference these variables — they do not hardcode values. Never use raw hex values in components; always use the token names.

Theme persistence: `localStorage` key `tg-theme`. The `useTheme` hook (`src/lib/useTheme.ts`) handles init and toggle.

### Home page is a single `'use client'` page

`src/app/page.tsx` is a client component because it uses `useActiveSection` (IntersectionObserver) to drive the nav highlight. Sections are rendered in order inside `<main>`; the `Nav` receives `activeSection` as a prop.

### Section scroll tracking

`useActiveSection` (`src/lib/useActiveSection.ts`) attaches one `IntersectionObserver` per section ID, using a `0.35` threshold and `-64px` top root margin to account for the fixed nav height.

### Type definitions

All shared interfaces live in `src/types/index.ts`. When adding a new data shape to `data.ts`, add its interface here first.

### Fonts

Three Google Fonts loaded via `next/font`: `Exo 2` (heading, `--font-heading`), `Open Sans` (body, `--font-body`), `JetBrains Mono` (mono, `--font-mono`). Font variables are set on `<html>` in `layout.tsx`.

### Resume page

`src/app/resume/page.tsx` is a placeholder. To activate it, add `public/resume.pdf` and add a `redirect('/resume.pdf')` call.
