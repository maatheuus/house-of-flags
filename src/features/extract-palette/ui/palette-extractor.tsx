"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FlagCanvas, type SampledColor } from "@entities/flag";
import { interpretColorMeaning } from "@entities/palette";
import type { Locale } from "@i18n/routing";
import { easings } from "@shared/motion";
import { cn } from "@shared/lib";

export interface PaletteExtractorLabels {
  extract: string;
  extractCancel: string;
  instruction: string;
  restrictedTitle: string;
  restrictedText: string;
}

interface PaletteExtractorProps {
  alpha2: string;
  name: string;
  locale: Locale;
  labels: PaletteExtractorLabels;
  className?: string;
}

/**
 * The chromatic lab: sample a pixel from the flag and read its symbolic meaning.
 * Composes the flag entity's `FlagCanvas` (rendering/sampling) with the palette
 * entity's `interpretColorMeaning` (domain reading). The mode/state is the feature.
 */
export function PaletteExtractor({ alpha2, name, locale, labels, className }: PaletteExtractorProps) {
  const [extracting, setExtracting] = useState(false);
  const [sample, setSample] = useState<SampledColor | null>(null);
  const [blocked, setBlocked] = useState(false);

  const meaning = sample ? interpretColorMeaning(sample, locale) : null;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <FlagCanvas
        alpha2={alpha2}
        name={name}
        extracting={extracting}
        instruction={labels.instruction}
        onSample={(c) => {
          setSample(c);
          setExtracting(false);
        }}
        onBlocked={() => {
          setBlocked(true);
          setExtracting(false);
        }}
      />

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setExtracting((e) => !e)}
          className={cn(
            "rounded-full border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
            extracting
              ? "border-[var(--accent)] text-[var(--accent)]"
              : "border-[var(--line-strong)] text-[var(--fg)] hover:border-[var(--accent)]",
          )}
        >
          {extracting ? labels.extractCancel : labels.extract}
        </button>

        {sample && (
          <span
            className="h-9 w-9 rounded-full border border-black/10 shadow-inner"
            style={{ background: sample.hex }}
            title={sample.hex}
          />
        )}
      </div>

      <AnimatePresence mode="wait">
        {blocked ? (
          <motion.div
            key="blocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-l-2 border-[var(--accent)] pl-4"
          >
            <h4 className="m-0 font-serif text-[18px]">{labels.restrictedTitle}</h4>
            <p className="m-0 mt-1 text-[14px] text-[var(--fg-soft)]">{labels.restrictedText}</p>
          </motion.div>
        ) : (
          meaning && (
            <motion.div
              key={sample?.hex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easings.outExpo }}
              className="border-l-2 border-[var(--accent)] pl-4"
            >
              <p className="m-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                {sample?.hex}
              </p>
              <p className="m-0 mt-2 font-serif text-[18px] leading-snug">{meaning}</p>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
