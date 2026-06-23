# VEXILLA / House of Flags — project guide

Editorial, interactive archive of national flags (colors, symbols, histories).
16 deep nations, trilingual (pt-BR default, en-US, es-ES). Next.js 15 App Router
+ TS + Tailwind v4 + next-intl + Framer(`motion`) + GSAP + Yarn 4.

## Architecture — Feature-Sliced Design (downward-only imports)

```
app  →  pages  →  widgets  →  features  →  entities  →  shared
```
Boundaries enforced in `eslint.config.mjs`. Every slice exposes a public
`index.ts`; deep cross-slice imports are denied. Widgets/features may NOT import
siblings; entities MAY compose sibling entities (e.g. `country` aggregate root).
RSC by default; `"use client"` only on interactive leaves.

Aliases: `@app @pages @widgets @features @entities @shared @i18n`.

## ⚠️ Non-obvious layout decisions (Next.js forced these — do not "fix")

- **FSD `pages` layer lives in `src/screens`** (alias `@pages` → `src/screens`).
  Next claims `src/pages` as its Pages Router; the rename avoids the clash while
  `@pages/*` imports stay unchanged. ESLint deny-zone glob is `src/screens/**`.
- **Single app dir `src/app`** holds BOTH the Next App Router (`[locale]/…`,
  `not-found`, pass-through root `layout.tsx`) AND the FSD app layer
  (`providers/`, `ui/`, `fonts/`, `styles/`). Next can't host root `/app` + `src/app`.
- **Middleware MUST be `src/middleware.ts`** — with a `src/` dir Next ignores a
  root `middleware.ts` silently (no `ƒ Middleware` line; `/` 404s, locale
  redirect dead). Matcher includes explicit `"/"`.
- **next/image uses a global `images.loaderFile`** (`src/shared/config/image-loader.ts`),
  not a per-`<Image loader>` prop — a function prop can't cross the Server→Client
  boundary and `<Flag>` renders inside client motion components.
- **package.json name = `house-of-flags`** (kebab; Yarn 4 rejects spaces).
- **Fraunces** loaded as a variable font (axes, NO explicit `weight` list).

## Domain gotchas

- **Flag ratios** in country data are vexillological `height/width` (e.g. "7 / 10").
  CSS `aspect-ratio` needs `width/height`, so `Flag`/`HistoricalFlag` flip it via
  `cssAspect()` (`@shared/lib`). Pass raw `country.ratio` — do not pre-flip.
- **Current flags** → FlagCDN raster via the global loader (alpha-2 as `src`).
  **Historical variants** → local SVG registry `entities/flag/lib/registry.ts`,
  keys `EVO_<ISO>_<YEAR>` (FlagCDN only serves present-day flags).
- **Country data** is a `CountryRecord` (locale-keyed `content` + locale-invariant
  base); `resolveCountry` flattens to `Country` via `content[locale] ?? content[default]`.
- **Entity UI stays i18n-agnostic** — labels are passed in by widgets (e.g.
  `CountryFacts` takes a `labels` prop). UI chrome strings live in `messages/*.json`.
- Use **`CustomSelect`** (`@shared/ui`), not native `<select>`, for dropdowns.

## Build / verify

`yarn dev` · `yarn build` (66 static pages) · `yarn typecheck` · `yarn lint`.
Yarn works (name fixed); all green. `/` → 307 → `/pt-BR`.

<!-- code-review-graph MCP tools -->
## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
| ------ | ---------- |
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.
