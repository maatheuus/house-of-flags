"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@i18n/routing";
import { Container, SectionHead } from "@shared/ui";
import { chromatic } from "@entities/palette";
import { getCountry } from "@entities/country";
import { PaletteExtractor } from "@features/extract-palette";
import { cn } from "@shared/lib";

interface PaletteLabProps {
  /** Flag used for the interactive extraction surface. */
  flagSlug?: string;
}

/** The chromatic study (read colors across nations) plus the extraction lab. */
export function PaletteLab({ flagSlug = "brasil" }: PaletteLabProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Palette");
  const colors = chromatic(locale);
  const [active, setActive] = useState(0);
  const country = getCountry(flagSlug, locale);
  const current = colors[active];

  return (
    <section className="py-20">
      <Container>
        <SectionHead ordinal="§ 03" kicker={t("index")} title={t("title")} lede={t("lede")} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-3">
              {colors.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-label={c.name}
                  className={cn(
                    "h-16 w-16 rounded-full border transition-transform",
                    i === active ? "scale-110 border-[var(--fg)]" : "border-black/10",
                  )}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
            <div className="mt-8 border-l-2 border-[var(--accent)] pl-5">
              <p className="m-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                {current.keyword}
              </p>
              <h3 className="m-0 mt-2 font-serif text-[32px] font-light tracking-[-0.02em]">
                {current.name}
              </h3>
              <p className="m-0 mt-3 text-[15px] leading-relaxed text-[var(--fg-soft)]">
                {current.story}
              </p>
            </div>
          </div>

          {country && (
            <div>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--fg-mute)]">
                {t("labIndex")} — {t("labTitle")}
              </p>
              <PaletteExtractor
                alpha2={country.code}
                name={country.name}
                locale={locale}
                labels={{
                  extract: t("extract"),
                  extractCancel: t("extractCancel"),
                  instruction: t("instruction"),
                  restrictedTitle: t("restrictedTitle"),
                  restrictedText: t("restrictedText"),
                }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
