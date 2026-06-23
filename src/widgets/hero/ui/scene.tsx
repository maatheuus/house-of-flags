"use client";

import { Flag } from "@entities/flag";
import { useGsap, gsap, usePointerParallax } from "@shared/motion";
import { cn } from "@shared/lib";
import type { Alpha2 } from "@shared/types";

interface Chip {
  code: Alpha2;
  slug: string;
  name: string;
  top: string;
  left: string;
  size: number;
  depth: number;
}

/** Ambient flags drifting behind the hero — also the picker for the stage flag. */
const CHIPS: Chip[] = [
  { code: "JP", slug: "japao", name: "Japan", top: "10%", left: "6%", size: 132, depth: 1 },
  { code: "FR", slug: "franca", name: "France", top: "60%", left: "11%", size: 158, depth: 0.6 },
  { code: "ZA", slug: "africa-do-sul", name: "South Africa", top: "72%", left: "70%", size: 176, depth: 0.4 },
  { code: "AR", slug: "argentina", name: "Argentina", top: "16%", left: "76%", size: 140, depth: 0.8 },
  { code: "IN", slug: "india", name: "India", top: "40%", left: "82%", size: 120, depth: 1.2 },
  { code: "PT", slug: "portugal", name: "Portugal", top: "84%", left: "26%", size: 110, depth: 0.9 },
];

interface SceneProps {
  /** When provided the chips become clickable and pick the stage flag. */
  onSelect?: (slug: string) => void;
  activeSlug?: string;
}

export default function Scene({ onSelect, activeSlug }: SceneProps) {
  const pointer = usePointerParallax();
  const interactive = Boolean(onSelect);

  const scope = useGsap<HTMLDivElement>((_self, el) => {
    el.querySelectorAll<HTMLElement>("[data-chip]").forEach((chip, i) => {
      gsap.to(chip, {
        y: i % 2 === 0 ? "+=22" : "-=22",
        rotation: i % 2 === 0 ? 1.5 : -1.5,
        duration: 5 + i,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  }, []);

  return (
    <div
      ref={scope}
      aria-hidden={!interactive}
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        interactive ? "" : "pointer-events-none",
      )}
    >
      {CHIPS.map((c) => {
        const isActive = activeSlug === c.slug;
        return (
          <div
            key={c.code}
            className="absolute"
            style={{
              top: c.top,
              left: c.left,
              width: c.size,
              transform: `translate(${pointer.x * 16 * c.depth}px, ${pointer.y * 16 * c.depth}px)`,
            }}
          >
            <button
              type="button"
              data-chip
              aria-label={interactive ? c.name : undefined}
              tabIndex={interactive ? 0 : -1}
              onClick={() => onSelect?.(c.slug)}
              className={cn(
                "block w-full origin-center rounded-md will-change-transform",
                "transition-[opacity,filter] duration-300 ease-[var(--ease-editorial)]",
                interactive
                  ? "pointer-events-auto cursor-pointer hover:opacity-100 hover:saturate-100 focus-visible:opacity-100 focus-visible:outline-none"
                  : "pointer-events-none",
                isActive
                  ? "opacity-100 saturate-100 ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--bg)]"
                  : "opacity-[0.22] saturate-[0.85]",
              )}
            >
              <Flag alpha2={c.code} name={c.name} sizes="200px" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
