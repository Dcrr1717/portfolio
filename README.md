# Daniel Reinoso — Portfolio

> Mathematician who builds — AI, topology, and production-grade software.

The source for my personal portfolio: a fast, resumable site presenting my work at the
intersection of **pure mathematics, topological data analysis, AI/ML, and web development**.

Built as a deliberate, non-templated design (Swiss Modernism) and engineered for
performance: it ships almost no JavaScript by default and hydrates on demand.

## Highlights

- **Resumable by design** — built with [Qwik](https://qwik.dev), so the page is
  interactive with near-zero JavaScript up front (O(1) hydration).
- **Scroll-driven reveals in pure CSS** — native `animation-timeline: view()`, no JS
  observers; degrades gracefully where unsupported.
- **Light / dark mode** with no flash of the wrong theme (pre-paint inline script).
- **Accessible & SEO-ready** — semantic landmarks, visible focus, skip link,
  `prefers-reduced-motion` respected, per-page metadata, Open Graph and JSON-LD.
- **Static-site friendly** — every route prerenders to static HTML.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | Qwik + QwikCity |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Language | TypeScript |
| Fonts | Archivo · Space Grotesk · JetBrains Mono (self-hosted via Fontsource) |
| Build | Vite |

No component library and no icon dependency — the UI, hairline icons, and the
mathematical SVG motifs are all hand-built.

## Getting started

```bash
npm install
npm run dev        # dev server (SSR mode) at http://localhost:5173
npm run build      # production build
npm run preview    # build + preview the production output
```

## Project structure

```
src/
├── components/        # nav, footer, sections, UI primitives, SVG motifs
├── content/           # site config + project/skill data (single source of truth)
├── routes/            # QwikCity routes (home + /projects/[slug])
├── global.css         # Swiss Modernism design tokens + base styles
└── root.tsx           # document shell, fonts, theme + reveal bootstrap
```

## Design

Swiss Modernism 2.0: a monochrome ink palette with a single Swiss-vermilion accent,
a modular grid, mathematical spacing, numbered sections and tabular figures. Motion is
restrained and physical; nothing reads as a default template.

## Author

**Daniel Reinoso** — César Daniel Reinoso Reinoso
Mathematician · Developer · Researcher

---

<sub>Design & code by Daniel Reinoso.</sub>
