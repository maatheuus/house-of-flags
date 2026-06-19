"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./reduced-motion";

// Register the ScrollTrigger plugin exactly once, on the client.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type GsapSetup = (self: gsap.Context, scope: HTMLElement) => void;

/**
 * Scopes GSAP animations to a container and guarantees cleanup.
 * `gsap.context(...).revert()` kills every tween AND ScrollTrigger created
 * inside the callback — no leaks across route changes or re-renders.
 * Skips entirely when the user prefers reduced motion.
 *
 * Attach the returned ref to the section you want to choreograph.
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>(
  setup: GsapSetup,
  deps: React.DependencyList = [],
) {
  const scope = useRef<T>(null);
  const prefersReduced = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = scope.current;
    if (!el || prefersReduced) return;

    const ctx = gsap.context((self) => setup(self, el), el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced, ...deps]);

  return scope;
}

export { gsap, ScrollTrigger };
