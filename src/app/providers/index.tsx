"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { ThemeProvider } from "./theme";

/**
 * Client provider shell: honors the OS reduced-motion setting for every Framer
 * animation and supplies the runtime theme context.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>{children}</ThemeProvider>
    </MotionConfig>
  );
}

export { useTheme, themeInitScript } from "./theme";
