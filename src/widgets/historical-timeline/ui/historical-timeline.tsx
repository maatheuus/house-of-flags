"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@i18n/routing";
import { Container, SectionHead } from "@shared/ui";
import { getAllCountries } from "@entities/country";
import { FlagView } from "@entities/flag";
import { useGsap, gsap } from "@shared/motion";

interface ChronicleEntry {
  key: string;
  year: number;
  label: string;
  note: string;
  country: string;
  flag: ReturnType<typeof getAllCountries>[number]["timeline"][number]["flag"];
}

/**
 * The cross-country chronicle: every flag era flattened onto one timeline and
 * scrolled horizontally via a pinned GSAP ScrollTrigger. Reduced motion falls
 * back to native horizontal scrolling (the hook simply no-ops).
 */
export function HistoricalTimeline() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Chronicle");

  const entries = useMemo<ChronicleEntry[]>(() => {
    return getAllCountries(locale)
      .flatMap((c) =>
        c.timeline.map((e) => ({
          key: `${c.slug}-${e.year}-${e.label}`,
          year: e.year,
          label: e.label,
          note: e.note,
          country: c.name,
          flag: e.flag,
        })),
      )
      .sort((a, b) => a.year - b.year);
  }, [locale]);

  const scope = useGsap<HTMLDivElement>(
    (_self, el) => {
      const track = el.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      const distance = () => track.scrollWidth - el.clientWidth;
      if (distance() <= 0) return;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    [entries.length],
  );

  return (
    <section className="pt-20">
      <Container>
        <SectionHead ordinal="§ 06" kicker={t("index")} title={t("title")} lede={t("lede")} />
      </Container>

      {/* Pinned to fill the viewport so the track sits centered — no empty gap
          below it while the horizontal scrub plays. */}
      <div ref={scope} className="relative flex h-[68vh] min-h-[460px] items-center overflow-hidden">
        <div
          data-track
          className="flex h-full items-center gap-7 overflow-x-auto px-[var(--pad-x)] [scrollbar-width:none] md:overflow-visible"
        >
          {entries.map((e) => (
            <article key={e.key} className="w-[240px] shrink-0">
              <FlagView flag={e.flag} name={`${e.country} ${e.year}`} />
              <p className="mt-4 flex items-baseline gap-3">
                <span className="font-mono text-[13px] text-[var(--accent)]">{e.year}</span>
                <span className="font-serif text-[18px] leading-tight">{e.label}</span>
              </p>
              <p className="m-0 mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                {e.country}
              </p>
              <p className="m-0 mt-2 text-[13px] leading-relaxed text-[var(--fg-soft)]">{e.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
