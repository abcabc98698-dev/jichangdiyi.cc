# AGENTS.md

## Environment

- **Node >= 22.22.0 required** (Astro 7 hard-fails below).
- **pnpm only** (`pnpm-lock.yaml` source of truth). Never npm/yarn.
- `typescript` pinned **^6**: `astro check` errors on TS 7 (tsgo). Don't bump.

## Commands

- `pnpm dev` — dev server. Use background mode:
  ```
  pnpm astro dev --background
  ```
  Manage: `pnpm astro dev stop | status | logs`.
- Stale dev server misses NEW content collections (empty `getCollection('blog')`, 404 on new routes). After adding `src/content/<collection>`, restart dev: `pnpm astro dev stop`, then start again.
- `pnpm check` — typecheck (`astro check`); run before + after changes.
- `pnpm build` — static site to `dist/`; regenerates content types + sitemap.
- Order: `pnpm check` → `pnpm build`.

## Architecture

- **Astro 7 + Bulma 1.0.4** (Sass `@use`), strict TypeScript, SPA navigation via `<ClientRouter />` (soft fade, respects `prefers-reduced-motion`).
- **Content-driven pages**: page text in `src/data/*.ts` (site, services, team, pricing, testimonials); components presentational with typed props; pages assemble. Keep.
- **Blog**: Content Collections via Content Layer — schema `src/content.config.ts`, posts `src/content/blog/`. Import `z` from `astro/zod`.
- **Routes**: `/`, `/about`, `/services`, `/blog`, `/blog/[slug]`, `/contact`, `/rss.xml` (RSS endpoint), `404.astro` (custom 404).

## Styling (Bulma via Sass)

- Single entry: `src/assets/styles/main.scss`. Tokens flow two ways: `@use 'bulma/sass' with (...)` block + `--aw-*` custom properties. Classes prefixed `aw-`.
- **Theming**: Bulma light/dark themes switch via `data-theme` on `<html>`; `[data-theme='light']` flips `--aw-*` tokens. First visit follows `prefers-color-scheme` (light default); navbar toggle persists to `localStorage`.
- Self-hosted fonts via `@fontsource/inter`.

## SEO

- Canonical domain: `https://jichangdiyi.cc`.
- Canonical/OG/RSS/sitemap derive from `astro.config.mjs`.
- Strict trailing-slash policy (`never`).
