"use client";

import { useEffect, useRef } from "react";
import { rafThrottle } from "@shared/lib";

/**
 * The signature mule_flags red spotlight that trails the cursor with easing.
 * Uses a single rAF loop and writes only `transform` (compositor-only).
 * Hidden on touch devices and under reduced-motion (handled in CSS).
 */
export function CursorHalo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip the whole loop on touch / no-hover devices.
    if (window.matchMedia("(hover: none)").matches) return;

    document.body.classList.add("is-ready");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let hx = mx;
    let hy = my;
    let raf = 0;

    const onMove = rafThrottle((e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    });

    const loop = () => {
      hx += (mx - hx) * 0.12;
      hy += (my - hy) * 0.12;
      el.style.transform = `translate(${hx}px, ${hy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      onMove.cancel();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="vx-halo" aria-hidden="true" />;
}
