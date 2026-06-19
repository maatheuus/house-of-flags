"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Flag } from "@entities/flag";
import type { Country, Hotspot } from "@entities/country";
import { easings } from "@shared/motion";
import { cn } from "@shared/lib";

interface InspectableFlagProps {
  country: Country;
  hint?: string;
  className?: string;
}

/**
 * A flag plate overlaid with inspectable hotspots. Clicking a point reveals its
 * editorial note. The hotspot *data* lives on the country entity; this feature
 * owns the interaction.
 */
export function InspectableFlag({ country, hint, className }: InspectableFlagProps) {
  const [active, setActive] = useState<number | null>(null);
  const hotspots = country.hotspots;

  return (
    <figure className={cn("relative m-0", className)}>
      <Flag alpha2={country.code} name={country.name} ratio={country.ratio} priority />

      {hotspots.map((h: Hotspot, i) => (
        <button
          key={`${h.x}-${h.y}-${i}`}
          type="button"
          aria-label={h.title}
          onClick={() => setActive(active === i ? null : i)}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
        >
          <span
            className={cn(
              "block h-4 w-4 rounded-full border-2 border-white shadow-md transition-transform",
              active === i ? "scale-125 bg-[var(--accent)]" : "bg-white/40 hover:scale-110",
            )}
          />
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/30" />
        </button>
      ))}

      <AnimatePresence mode="wait">
        {active !== null && (
          <motion.figcaption
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: easings.outExpo }}
            className="mt-4 border-l-2 border-[var(--accent)] pl-4"
          >
            <h4 className="m-0 font-serif text-[18px] font-medium">{hotspots[active].title}</h4>
            <p className="m-0 mt-1 text-[14px] text-[var(--fg-soft)]">{hotspots[active].text}</p>
          </motion.figcaption>
        )}
      </AnimatePresence>

      {active === null && hint && (
        <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
          {hint}
        </figcaption>
      )}
    </figure>
  );
}
