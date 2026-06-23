import type { StorybookConfig } from "@storybook/nextjs";

/**
 * Storybook (Next.js / webpack5 framework).
 *
 * The framework reuses the project's `next.config.ts` (incl. the global
 * `images.loaderFile` so <Flag> renders real FlagCDN rasters), next/font,
 * next/navigation mocking and the tsconfig path aliases (@shared, @entities,
 * @i18n …). PostCSS — and therefore Tailwind v4 via `postcss.config.mjs` — is
 * picked up automatically, so `globals.css` compiles exactly as in the app.
 *
 * Stories are COLOCATED with the component they document, one slice deep, so
 * the FSD boundaries (app → pages → widgets → features → entities → shared)
 * are never crossed by a story import.
 */
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [],
  typescript: {
    // Keep the dev server fast; `yarn typecheck` is the real gate.
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
