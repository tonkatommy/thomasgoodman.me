# thomasgoodman.me

## Overview

Personal portfolio and blog website showcasing professional experience, projects, and technical writing.

## Tech Stack

- Language: TypeScript 5.5 (strict mode)
- Framework: Next.js 16 (App Router)
- UI: Material-UI 5 + Tailwind CSS 3
- Databases: PostgreSQL (Prisma ORM), MongoDB (Mongoose)
- Auth: NextAuth 4 (credentials + JWT)
- Testing: Jest 29 + React Testing Library

## Commands

- `npm run dev` — Start development server (port 3000)
- `npm run build` — Production build (standalone output)
- `npm run start` — Start production server
- `npm run lint` — ESLint check (flat config)
- `npm test` — Run Jest tests
- `npm run test:coverage` — Tests with coverage report
- `npm run db:generate` — Generate Prisma client
- `npm run db:push` — Push schema to database (dev)
- `npm run db:migrate` — Create migration (production)

## Architecture

- `app/` — Next.js App Router (pages, API routes, metadata)
- `components/` — React components organized by feature
- `lib/` — Database clients, auth config, utilities
- `types/` — TypeScript type augmentations
- `prisma/` — Database schema (PostgreSQL)
- `lib/models/` — Mongoose schemas (MongoDB)
- `middleware.ts` — Security headers
- `instrumentation.ts` — Env validation on startup

## Environment Variables

See `.env.example` for the full list. Required:
- `DATABASE_URL` — PostgreSQL connection string
- `MONGODB_URI` — MongoDB connection string
- `NEXTAUTH_SECRET` — JWT secret (min 32 chars)
- `NEXTAUTH_URL` — App URL

## Docker

- Dev: `docker compose -f docker-compose.dev.yml up`
- Prod: `docker compose -f docker-compose.prod.yml up`
