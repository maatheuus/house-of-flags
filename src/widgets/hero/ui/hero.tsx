"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@i18n/navigation";
import type { Locale } from "@i18n/routing";
import { Container, Reveal, RevealItem, buttonClass } from "@shared/ui";
import { getCountry } from "@entities/country";
import { Flag } from "@entities/flag";
import { easings } from "@shared/motion";
import { FloatingFlagsScene } from "./floating-flags-scene";

/** The featured flag the hero opens on. */
const DEFAULT_SLUG = "brasil";

/**
 * The opening stage. The ambient flags drifting behind double as a picker:
 * click one and it becomes the staged flag (with a crossfade). The masthead
 * copy stays static; only the plate swaps.
 */
export function Hero() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Hero");
  const [slug, setSlug] = useState(DEFAULT_SLUG);
  const featured = getCountry(slug, locale);

  return (
    <section className="relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-24">
      <FloatingFlagsScene onSelect={setSlug} activeSlug={slug} />

      <Container>
        <Reveal stagger={0.08} className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <RevealItem>
              <p className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-mute)]">
                <span className="text-[var(--accent)]">{t("edition")}</span>
                <span>{t("archiveLine")}</span>
              </p>
            </RevealItem>

            <RevealItem>
              <h1 className="mb-8 mt-8 text-balance font-serif text-[clamp(44px,8vw,104px)] font-light leading-[0.98] tracking-[-0.03em]">
                {t("titleLine1")}
                <br />
                <em className="text-[var(--accent)]">{t("titleLine2")}</em>
                <br />
                {t("titleLine3")}
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="max-w-[540px] text-pretty text-[17px] leading-relaxed text-[var(--fg-soft)]">
                {t("lede")}
              </p>
            </RevealItem>

            <RevealItem>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/archive"
                  className={buttonClass("primary", "active:scale-[0.96] transition-transform")}
                >
                  {t("enterAtlas")}
                </Link>
                <Link
                  href="/symbols"
                  className={buttonClass("ghost", "active:scale-[0.96] transition-transform")}
                >
                  {t("chromaticStudy")}
                </Link>
              </div>
            </RevealItem>
          </div>

          {featured && (
            <RevealItem className="w-full">
              <div className="relative mx-auto w-full max-w-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featured.slug}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45, ease: easings.outExpo }}
                  >
                    <Link href={`/country/${featured.slug}`} className="block">
                      <Flag
                        alpha2={featured.code}
                        name={featured.name}
                        ratio={featured.ratio}
                        priority
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="shadow-2xl"
                      />
                    </Link>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                  <span>{featured.name}</span>
                  <span>{featured.adopted}</span>
                </div>
              </div>
            </RevealItem>
          )}
        </Reveal>

        <p className="mt-20 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-mute)]">
          ↓ {t("scrollHint")}
        </p>
      </Container>
    </section>
  );
}
