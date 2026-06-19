import type { Decorator, Preview } from "@storybook/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { useEffect } from "react";

// The real design system: Tailwind v4 + tokens + atmosphere layers. Compiled
// through the project's PostCSS exactly as in the app shell.
import "../src/app/styles/globals.css";
// next/font variable classes (Fraunces / Inter / JetBrains Mono). Applying them
// on the canvas wrapper lets serif/sans/mono tokens resolve to the real faces.
import { fontVariables } from "../src/app/fonts";

type ThemeName = "light" | "dark";

/**
 * Sets `data-theme` on <html> (the same hook the runtime ThemeProvider uses)
 * so every token-driven component flips light/dark, and paints the canvas with
 * the page background/foreground tokens + the font variables.
 */
const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as ThemeName) ?? "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className={fontVariables}
      data-theme={theme}
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
        padding: "32px",
      }}
    >
      <Story />
    </div>
  );
};

/**
 * next-intl client context. Components that reach for the locale-aware `Link`
 * (e.g. CountryCard) or `useTranslations` need a provider; chrome strings live
 * in widgets/messages, so an empty message bag with the locale is enough here.
 */
const withIntl: Decorator = (Story) => (
  <NextIntlClientProvider locale="en-US" messages={{}}>
    <Story />
  </NextIntlClientProvider>
);

const preview: Preview = {
  decorators: [withIntl, withTheme],
  parameters: {
    // Mock the App Router so next/navigation + next-intl navigation work.
    nextjs: { appDirectory: true },
    layout: "fullscreen",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
    backgrounds: { disable: true }, // the theme decorator owns the canvas bg
  },
  globalTypes: {
    theme: {
      description: "Editorial light / dark theme",
      toolbar: {
        title: "Theme",
        icon: "contrast",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
};

export default preview;
