# Deployable `site/` Folder Restructure — Design

**Date:** 2026-06-11
**Status:** Approved

## Goal

Move all static website runtime files into a single `site/` folder so the
GitHub Actions FTP workflow deploys only that folder, instead of the entire
repo root.

## Context

The site is a no-build React app: `index.html` loads React + Babel standalone
from a CDN and the 11 `.jsx` component files directly as `text/babel` scripts.
The `.jsx` files are runtime assets. `deploy.yml` currently FTPs `local-dir: ./`
(the whole repo) to Hostinger.

## Target structure

```
thomasgoodman.me/
├── .github/workflows/deploy.yml   (FTPs only site/)
├── site/
│   ├── index.html
│   ├── components/                ← the 11 .jsx files
│   ├── fonts/                     ← unchanged contents
│   └── public/
│       ├── favicon.svg
│       └── resume/resume.pdf
├── README.md
└── .gitignore
```

`public/` keeps its name inside `site/` because four JSX files link to
`/public/resume/resume.pdf` with absolute paths; once `site/` is the FTP root
those paths resolve unchanged. Font paths (`./fonts/...`) are relative to
`index.html` and move with it.

## Changes

1. `git mv` `index.html`, the 11 `.jsx` files (→ `site/components/`), `fonts/`,
   and `public/` into `site/` — preserves git history.
2. Update the `<script type="text/babel" src="...">` tags in `index.html` to
   `./components/X.jsx` (including the commented-out tweaks-panel one).
3. Add `<link rel="icon" href="/public/favicon.svg">` to `index.html`
   (favicon existed but was never referenced).
4. Update `deploy.yml`: `local-dir: ./site/`; delete the obsolete commented-out
   "Prepare deployment files" step.

## Verification

Serve `site/` with a local static server and confirm index.html, every
component script, a font file, and the resume PDF all return 200.
