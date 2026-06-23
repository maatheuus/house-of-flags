"use client";

import { useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

/**
 * Single gate for honoring `prefers-reduced-motion`.
 * Returns the given variants, or an opacity-only / instant version when the
 * user opts out of motion. Use for every decorative reveal.
 */
export function useSafeVariants(variants: Variants): Variants {
  const reduce = useReducedMotion();
  if (!reduce) return variants;

  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };
}

/** Boolean form for imperative (GSAP) code paths. */
export { useReducedMotion as usePrefersReducedMotion };
