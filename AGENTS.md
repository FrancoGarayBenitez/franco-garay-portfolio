# AGENTS.md - Franco Garay Portfolio

## Project Overview
Single-page portfolio personal para Franco Garay (Full Stack Developer). Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion.

## Tech Stack
- **Framework:** Next.js 16 (App Router, single route `/`)
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` syntax, class-based dark mode)
- **Animation:** Framer Motion 12
- **Icons:** lucide-react
- **Theme:** next-themes
- **Utilities:** clsx + tailwind-merge (`cn()` helper)
- **Forms:** Formspree (external, via fetch)
- **Linting:** ESLint 10 (flat config, `eslint-config-next`)

## Scripts
| Script | Command |
|---|---|
| `npm run dev` | `next dev` |
| `npm run build` | `next build` |
| `npm run start` | `next start` |
| `npm run lint` | `eslint` |

## Project Structure
```
src/
  app/           — Next.js App Router (globals.css, layout.tsx, page.tsx)
  components/
    sections/    — Page section components (Hero, About, Projects, Contact, Footer)
    ui/          — Reusable UI components (ProjectCard, ImageGallery, LoadingSkeleton)
    Navigation.tsx — Sticky nav with active-section tracking
    ThemeProvider.tsx — next-themes wrapper
  lib/
    animations/  — Framer Motion shared variants
    config/      — Env vars (env.ts)
    data/        — Static project data (projects.ts)
    hooks/       — Custom hooks (useScrollDirection, useScrollTo)
    types/       — Shared TypeScript types (global.ts)
    utils/       — Utilities (cn, formatDate)
  types/         — Global type declarations (css.d.ts)
```

## Coding Conventions
- All components are **client components** (`"use client"`) except `layout.tsx` and `page.tsx`
- All UI text is in **Spanish** (es-AR)
- Navigation is hash-based scroll to `#hero`, `#about`, `#projects`, `#contact`
- Use `cn()` from `@/lib/utils` for conditional Tailwind class merging
- Use Framer Motion variants from `@/lib/animations/variants` (`fadeInUp`, `staggerContainer`, etc.)
- Tailwind v4 syntax: `@import "tailwindcss"`, `@custom-variant dark`, `@theme inline`
- ❌ Do not create tests
- ❌ No Prettier config — format via ESLint only
- ❌ No API routes, database, or server-side data fetching

## Environment Variables (all `NEXT_PUBLIC_`)
| Variable | Required | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_NAME` | No | `Portfolio` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | francogaray2314@gmail.com |
| `NEXT_PUBLIC_CONTACT_PHONE` | No | +54 261 593-9115 |
| `NEXT_PUBLIC_CONTACT_LOCATION` | No | Godoy Cruz, Mendoza, Argentina |
| `NEXT_PUBLIC_GITHUB_URL` | No | https://github.com/FrancoGarayBenitez |
| `NEXT_PUBLIC_LINKEDIN_URL` | No | https://www.linkedin.com/in/franco-garay |
| `NEXT_PUBLIC_FORMSPREE_ID` | **Yes** | — |
| `NEXT_PUBLIC_GA_ID` | No | undefined |
