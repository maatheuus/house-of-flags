"use client";

import { useEffect, useRef, useState } from "react";
import { rafThrottle } from "@shared/lib";
import { usePrefersReducedMotion } from "./reduced-motion";

export interface PointerOffset {
  /** -1 … 1 relative to viewport center. */
  x: number;
  y: number;
}

/**
 * Pointer position normalized to [-1, 1], throttled to one update per frame.
 * Feeds parallax/drift on the hero's floating flags. Returns {0,0} and never
 * subscribes when the user prefers reduced motion.
 */
export function usePointerParallax(): PointerOffset {
  const [offset, setOffset] = useState<PointerOffset>({ x: 0, y: 0 });
  const prefersReduced = usePrefersReducedMotion();
  const latest = useRef<PointerOffset>({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReduced) return;

    const onMove = rafThrottle((e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      latest.current = { x, y };
      setOffset(latest.current);
    });

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      onMove.cancel();
    };
  }, [prefersReduced]);

  return offset;
}
