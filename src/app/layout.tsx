import type { ReactNode } from "react";

/**
 * Pass-through root layout. The real document shell (`<html>`/`<body>`, fonts,
 * providers) lives in `[locale]/layout.tsx` so it can read the active locale;
 * Next.js only requires *a* root layout to exist. The root `not-found.tsx`
 * (for paths that never matched a locale) renders its own minimal document.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
