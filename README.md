# VEXILLA — House of Flags

An editorial, interactive archive of the world's flags — their colors, symbols and
histories. Sixteen nations are documented in depth, trilingually (Portuguese,
English, Spanish), with a chromatic study, a symbol lexicon, a cross-country
chronicle, a side-by-side comparator and a live color-extraction lab.

> Fuses three prototypes into one production app: the **mule_flags** design
> language (dominant), the **flags_lovable** editorial structure, and the
> **ai_studio_flags** motion + color-sampling.

---

## Stack

| Concern        | Choice                                   | Why |
| -------------- | ---------------------------------------- | --- |
| Framework      | **Next.js 15 (App Router)**              | RSC by default, static export per locale, image pipeline. |
| Language       | **TypeScript (strict)**                  | The domain (flags, palettes, symbols) is type-rich. |
| Styling        | **Tailwind v4 (`@theme`)**               | Tokens as utilities *and* CSS vars → runtime theming. |
| i18n           | **next-intl**                            | Locale routing, message bundles, server + client `t()`. |
| Motion (micro) | **motion (Framer v12)**                  | Declarative reveals/transitions; honors reduced motion. |
| Motion (macro) | **GSAP + ScrollTrigger**                 | Pinned/scrubbed timeline, ambient drift. |
| Package mgr    | **Yarn 4** (`node-modules` linker)       | Fast, deterministic, modern. |

Framer vs GSAP is a deliberate split: **Framer** owns component-local enter/exit
and hover states; **GSAP** owns scroll-choreographed, multi-element sequences
(the horizontal chronicle, the floating hero scene). Both route through
`prefers-reduced-motion` and animate only `transform`/`opacity`.

---

## Architecture — Feature-Sliced Design, Screaming, light DDD

Layers import **downward only**. Cross-slice talk goes through a slice's public
`index.ts` (enforced by ESLint `no-restricted-imports`):

```
app  →  pages  →  widgets  →  features  →  entities  →  shared
```

- **app** (`src/app`) — Next routes (thin) + the shell: providers, nav, footer, fonts, global CSS.
- **pages** (`src/screens`, alias `@pages`) — route compositions of widgets.
- **widgets** — self-contained page sections (hero, archive grid, dossier, comparator…).
- **features** — user interactions (filter, search ⌘K, compare, inspect, extract, discover).
- **entities** — domain nouns: `country` (aggregate root), `flag`, `palette`, `symbol`, `region`, `historical-period`.
- **shared** — domain-agnostic primitives: ui, lib, motion, config, types.

The boundary rules (`eslint.config.mjs`): widgets/features may **not** import
siblings; entities **may** compose sibling entities (an aggregate root like
`country` legitimately uses `flag`/`palette`/`symbol`); `shared` may import
nothing domain-specific.

### Why "screaming"

Top-level folders name the **domain and its capabilities**, not framework
mechanics — you read `features/compare-flags`, not `hooks/` + `utils/`.

### Light DDD

`country` is an **aggregate root**. Authored data is a `CountryRecord` (locale-keyed
content + locale-invariant base); selectors resolve it into a flat `Country` for
the UI (`content[locale] ?? content[defaultLocale]`). Domain *meaning* (e.g. what a
sampled color signifies) lives in the relevant entity (`palette/lib/interpret`),
never in `shared`.

---

## Tree (abridged)

```
src/
  app/                      # FSD app layer + Next App Router
    [locale]/               # routes: layout, page, archive, compare, symbols, chronicle, country/[slug]
    providers/              # MotionConfig + theme (localStorage, no-FOUC inline script)
    ui/                     # site-nav, site-footer
    fonts/  styles/
  screens/                  # FSD "pages" (alias @pages) — route compositions
  widgets/                  # hero, floating-flags-scene, editorial-manifesto, archive-grid,
                            # symbolism-atlas, comparison-lab, palette-lab, country-dossier,
                            # historical-timeline, command-palette
  features/                 # filter-archive, search-flags, compare-flags, inspect-symbols,
                            # extract-palette, explore-by-region, discover-random-flag
  entities/                 # country, flag, palette, symbol, region, historical-period
  shared/                   # ui, lib, motion, config, types
  i18n/                     # routing, request, navigation
messages/                   # pt-BR, en-US, es-ES (UI chrome only)
```

## Naming

- Folders & files: `kebab-case`. Components: `PascalCase`. Hooks: `useThing`.
- Every slice exposes a public `index.ts`; deep imports across slices are denied.
- Aliases: `@app @pages @widgets @features @entities @shared @i18n`.

---

## Data & flags

- **Current flags** → FlagCDN raster, mapped by a **global** `next/image`
  `loaderFile` (`shared/config/image-loader.ts`). Global, not a per-`<Image loader>`
  prop, so `<Flag>` carries no function in its props and can be rendered inside
  client components without crossing a non-serializable boundary.
- **Historical variants** → a local, hand-authored SVG registry
  (`entities/flag/lib/registry.ts`, keys `EVO_<ISO>_<YEAR>`) — FlagCDN only serves
  present-day flags.
- **Editorial content** → 16 curated nations across `entities/country/model/data/*`,
  fully trilingual.

## Performance

- RSC by default; `"use client"` only on interactive leaves.
- The ambient hero scene is `next/dynamic({ ssr: false })` — GSAP work stays off
  the server and the critical path.
- Image widths snap to FlagCDN buckets (320/640/1280/2560) → no re-encode, no overfetch.
- `optimizePackageImports` trims the motion/icon entrypoints.
- All 66 pages prerender as static HTML (`generateStaticParams` over locales × slugs).

## Accessibility

- `prefers-reduced-motion` respected everywhere (`useSafeVariants`, `useGsap`
  no-ops, `MotionConfig reducedMotion="user"`).
- Semantic landmarks, `aria-pressed`/`aria-current` on toggles/tabs, focus-visible
  rings, labelled controls. The ⌘K palette is a labelled dialog with arrow-key nav.

---

## Getting started

```bash
yarn install
yarn dev          # http://localhost:3000  → redirects to /pt-BR
yarn build        # static production build (66 pages)
yarn start        # serve the build
yarn typecheck    # tsc --noEmit
yarn lint
yarn format

yarn storybook        # http://localhost:6006 — component workshop
yarn build-storybook  # static build → storybook-static/
yarn chromatic        # publish to Chromatic for visual review
```

Locales: `pt-BR` (default), `en-US`, `es-ES`. Add one by extending
`src/i18n/routing.ts` + a matching `messages/<tag>.json` (+ optional country content).

---

## Storybook & visual review

Storybook is part of the engineering system here, not a side experiment: it is the
isolated workshop for the design-system primitives and domain-facing UI, and the
source of truth for Chromatic visual regression.

### Install (how it was set up)

Yarn-first, no npm. The framework is **`@storybook/nextjs`** (webpack 5), which
reuses the project's `next.config.ts`, `postcss.config.mjs`, `tsconfig` path
aliases, `next/font` and `next/image`:

```bash
yarn add --dev storybook @storybook/nextjs @storybook/addon-docs @storybook/addon-a11y
yarn add --dev webpack          # peer of @storybook/nextjs under the node-modules linker
yarn add --dev chromatic
```

Config lives in `.storybook/`:

- **`main.ts`** — `@storybook/nextjs` framework, `addon-docs` (autodocs) +
  `addon-a11y`, and the colocated story glob `../src/**/*.stories.@(ts|tsx)`.
- **`preview.tsx`** — imports `src/app/styles/globals.css` so **Tailwind v4 + the
  design tokens compile exactly as in the app**, applies the `next/font` variable
  classes (`fontVariables`) on the canvas, wires the **light/dark** toolbar by
  flipping `data-theme` on `<html>` (the same hook the runtime `ThemeProvider`
  uses), enables the **App Router** mock (`parameters.nextjs.appDirectory`) and
  wraps every story in `NextIntlClientProvider` so the locale-aware `Link`
  (e.g. `CountryCard`) and `useTranslations` work.

### Running it with Yarn

```bash
yarn storybook        # dev server on :6006
yarn build-storybook  # static build into storybook-static/ (git-ignored)
```

### Chromatic

`yarn add --dev chromatic` installs the publisher; the `chromatic` script carries
the project token:

```jsonc
"chromatic": "chromatic --project-token=chpt_05493f4fa2b0321 --exit-zero-on-changes"
```

```bash
yarn chromatic        # builds Storybook, uploads, runs visual diffs
```

> Chromatic requires **at least one git commit** as its baseline. On a fresh
> clone with no history the run aborts with *"Chromatic requires your Git
> repository to have at least one commit"* — commit first, then publish.

**Visual review flow:** open a PR → `yarn chromatic` builds and snapshots every
story across the light/dark globals → Chromatic flags pixel diffs against the
accepted baseline → review and **accept** intended changes (which moves the
baseline) or **deny** regressions. `--exit-zero-on-changes` keeps CI green on
visual changes so a human, not the pipeline, owns the accept/deny decision.

### Where stories live (and what gets one)

Stories are **colocated** with the component, one slice deep
(`button.stories.tsx` next to `button.tsx`). This respects the FSD boundaries —
a story only ever imports its own slice's public surface, never sideways or up —
and the story `title` mirrors the layer (`Shared/UI/*`, `Entities/<entity>/*`).

| Layer | Stories? | Examples |
| ----- | -------- | -------- |
| `shared/ui` | ✅ always | Button, Chip, Kbd, Container, SectionHead, Select, CustomSelect, Ribbon, Swatch |
| `entities/*/ui` | ✅ always | Flag, HistoricalFlag, CountryCard, CountryFacts, SymbolIcon |
| `widgets/*` | ✅ only **presentational** pieces that render in isolation | a timeline card, a comparison panel |
| `features/*` | ⚠️ rarely | only a self-contained presentational leaf; interaction-heavy features are tested, not storied |
| `app`, `pages/screens`, route files | ❌ never | full-page compositions belong to the running app, not the workshop |

Rule of thumb: a component earns a story when it renders meaningfully **in
isolation** with props/sample data. Stories use **real domain data** via the
entity selectors (e.g. `getCountry("brasil", "en-US")`) rather than invented
fixtures, and cover default, interactive (`CustomSelect`), edge (`HistoricalFlag`
missing key) and theme-sensitive states.

---

## Roadmap

- Broaden coverage beyond the 16 deep nations (medium/shallow tiers).
- Per-subdivision dossiers; symbol → country deep links.
- Shareable comparator/filter state via URL search params.
- Persisted "discovery" history; OG image generation per dossier.

## Trade-offs & decisions

- **`pages` layer lives in `src/screens`** (alias kept as `@pages`). Next.js claims
  `src/pages` as its *Pages Router*; renaming the physical folder avoids the clash
  while every `@pages/*` import stays unchanged.
- **One app directory (`src/app`).** Next cannot host both a root `/app` and
  `src/app`; the thin route layer and the FSD app layer share `src/app`.
- **Global image `loaderFile`** instead of a per-`<Image>` loader prop — see
  *Data & flags*.
- **Fraunces loaded as a variable font** (axes, no explicit `weight` list) — `next/font`
  rejects mixing the two.
- **Package name `house-of-flags`** (kebab) — Yarn 4 rejects spaces in the workspace name.
- **FlagCDN dependency** for current flags keeps the bundle tiny but assumes network
  availability; historical SVGs are local and always render.
```
