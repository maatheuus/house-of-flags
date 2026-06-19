import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

/**
 * FSD layer boundaries are enforced with `no-restricted-imports`.
 * Rule: a layer may only import from layers strictly BELOW it.
 *   app → pages → widgets → features → entities → shared
 * Same-layer sibling imports are also blocked; cross-slice talk goes
 * through a slice's public `index.ts` (which still resolves via the alias).
 */
const deny = (zones) => ({
  files: zones.files,
  rules: {
    "no-restricted-imports": [
      "error",
      { patterns: zones.patterns.map((target) => ({ group: [target], message: zones.message })) },
    ],
  },
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // pages may not reach up into app. NOTE: the FSD pages layer lives in
  // `src/screens` (not `src/pages`) to avoid colliding with the Next.js Pages
  // Router, while the public alias stays `@pages/*`.
  deny({
    files: ["src/screens/**"],
    patterns: ["@app/*"],
    message: "FSD: `pages` cannot import from `app` (higher layer).",
  }),
  // widgets may not reach up into app/pages, nor sibling widgets
  deny({
    files: ["src/widgets/**"],
    patterns: ["@app/*", "@pages/*", "@widgets/*"],
    message: "FSD: `widgets` may only import features/entities/shared, never up or sideways.",
  }),
  // features may not reach up, nor sibling features
  deny({
    files: ["src/features/**"],
    patterns: ["@app/*", "@pages/*", "@widgets/*", "@features/*"],
    message: "FSD: `features` may only import entities/shared, never up or sideways.",
  }),
  // entities may not reach up. Sibling entity imports ARE allowed: an aggregate
  // root (e.g. `country`) legitimately composes other entities (flag/region/…).
  // Cross-entity talk still goes through the sibling's public `index.ts`.
  deny({
    files: ["src/entities/**"],
    patterns: ["@app/*", "@pages/*", "@widgets/*", "@features/*"],
    message: "FSD: `entities` may only import other entities or shared, never up.",
  }),
  // shared must remain domain-agnostic
  deny({
    files: ["src/shared/**"],
    patterns: ["@app/*", "@pages/*", "@widgets/*", "@features/*", "@entities/*"],
    message: "FSD: `shared` must stay generic and cannot import domain layers.",
  }),

  {
    ignores: [".next/**", "node_modules/**", ".yarn/**", "storybook-static/**"],
  },
];

export default eslintConfig;
