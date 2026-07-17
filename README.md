# MAAI Portfolio

The MAAI marketing site, built with [Next.js](https://nextjs.org) (App Router) and React.

This is a port of the original single-file static site — kept at
[`reference/maai-portfolio.html`](reference/maai-portfolio.html) — into a component-based
Next.js app. The reference file is the source of truth for design and copy until the port
is complete, then it can be deleted.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **JavaScript** (no TypeScript)
- **Plain CSS** — no Tailwind. The original design is built on CSS custom-property
  design tokens, keyframe animations, and scroll-linked effects, which port directly.
- **ESLint** via `eslint-config-next`

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint |

## Structure

The original single-file site is ported 1:1. Verified against it at matching scroll
positions: same page height (±2px) and no console errors.

- **`app/globals.css`** — the source stylesheet, unchanged apart from the three
  `--font-*` tokens, which now point at the `next/font` variables.
- **`app/components/*.js`** — one component per section, in source order
  (see `app/page.js`). Markup is otherwise identical to the original.
- **`app/components/SiteEffects.js`** — every behaviour from the original
  `<script>`: theme toggle, hero typing, scroll reveals, counters, the
  scroll-linked work gallery, the cinematic hero driver, FAQ accordion,
  testimonial slider, and the Lenis/parallax/tilt/magnetic layer.
- **`app/layout.js`** — fonts, metadata, and the pre-paint theme script.

### Why the behaviours are DOM drivers, not React state

They are scroll/rAF loops that write transforms every frame. Routing that through
re-renders would be slower and would change how the page feels, so they read and
write the DOM directly — exactly as the original did. The page is static, so
nothing re-renders underneath them. Each one registers matching teardown, so
StrictMode's double-mount in dev doesn't stack duplicate listeners or timers.

## Known gaps

- The fit-check form validates and then `console.log`s the payload — it needs a
  real endpoint (see `SiteEffects.js`).
- Images and video are still hotlinked (Unsplash / Pexels). Worth moving into
  `public/` with `next/image` before launch.
