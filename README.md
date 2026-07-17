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

## Porting notes

The reference site is one HTML file containing markup, ~2,600 lines of CSS, and vanilla JS.
Suggested approach:

1. Move the design tokens (the `:root` custom properties, light/dark themes) into
   `app/globals.css` first — everything else depends on them.
2. Port section by section (nav, hero, services, work, team, FAQ, footer) into components.
3. Rebuild the interactive pieces as React with `useEffect`:
   scroll-linked hero, reveal-on-scroll, testimonial slider, FAQ accordion, theme toggle.
4. Move remote images/video into `public/` and `next/image` where it makes sense.
