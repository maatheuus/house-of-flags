"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@i18n/routing";
import { Container } from "@shared/ui";
import { cn } from "@shared/lib";
import { easings } from "@shared/motion";
import type { Country } from "@entities/country";
import { CountryCard, CountryFacts } from "@entities/country";
import { regionLabel } from "@entities/region";
import { FlagView } from "@entities/flag";
import { InspectableFlag } from "@features/inspect-symbols";
import { PaletteExtractor } from "@features/extract-palette";

type TabId = "overview" | "palette" | "symbols" | "evolution" | "trivia" | "subdivisions" | "related";

interface CountryDossierProps {
  country: Country;
  related: Country[];
}

/** The full country dossier: a tabbed editorial deep-dive into one flag. */
export function CountryDossier({ country, related }: CountryDossierProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Dossier");
  const pal = useTranslations("Palette");
  const [tab, setTab] = useState<TabId>("overview");

  const tabs: TabId[] = ["overview", "palette", "symbols", "evolution", "trivia"];
  if (country.subdivisions.length > 0) tabs.push("subdivisions");
  if (related.length > 0) tabs.push("related");

  return (
    <article className="py-16">
      <Container>
        <header className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-mute)]">
              {regionLabel(country.region, locale)} · {country.capital}
            </p>
            <h1 className="my-5 font-serif text-[clamp(44px,7vw,92px)] font-light leading-[0.98] tracking-[-0.03em]">
              {country.name}
            </h1>
            <p className="max-w-[520px] text-[17px] leading-relaxed text-[var(--fg-soft)]">
              {country.excerpt}
            </p>
          </div>
          <FlagView
            flag={country.flag}
            name={country.name}
            ratio={country.ratio}
            priority
            className="shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </header>

        <nav className="mt-16 flex flex-wrap gap-1 border-b border-[var(--line)]">
          {tabs.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              aria-current={tab === id}
              className={cn(
                "border-b-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                tab === id
                  ? "border-[var(--accent)] text-[var(--fg)]"
                  : "border-transparent text-[var(--fg-mute)] hover:text-[var(--fg)]",
              )}
            >
              {t(`tabs.${id}`)}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: easings.outExpo }}
            className="py-12"
          >
            {tab === "overview" && (
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
                <div className="space-y-8">
                  <section>
                    <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                      {t("history")}
                    </h3>
                    <p className="m-0 text-[16px] leading-relaxed text-[var(--fg-soft)]">
                      {country.history}
                    </p>
                  </section>
                  <section>
                    <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                      {t("context")}
                    </h3>
                    <p className="m-0 text-[16px] leading-relaxed text-[var(--fg-soft)]">
                      {country.context}
                    </p>
                  </section>
                </div>
                <CountryFacts
                  country={country}
                  regionLabel={regionLabel(country.region, locale)}
                  labels={{
                    capital: t("facts.capital"),
                    region: t("facts.region"),
                    ratio: t("facts.ratio"),
                    adopted: t("facts.adopted"),
                    designer: t("facts.designer"),
                    tag: t("facts.tag"),
                  }}
                />
              </div>
            )}

            {tab === "palette" && (
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <PaletteExtractor
                  alpha2={country.code}
                  name={country.name}
                  locale={locale}
                  labels={{
                    extract: pal("extract"),
                    extractCancel: pal("extractCancel"),
                    instruction: pal("instruction"),
                    restrictedTitle: pal("restrictedTitle"),
                    restrictedText: pal("restrictedText"),
                  }}
                />
                <ul className="m-0 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-[var(--line)] p-0">
                  {country.colors.map((c) => (
                    <li key={c.hex} className="flex gap-4 bg-[var(--bg)] p-5">
                      <span
                        className="mt-1 h-10 w-10 shrink-0 rounded-md border border-black/10"
                        style={{ background: c.hex }}
                      />
                      <div>
                        <p className="m-0 flex items-baseline gap-3">
                          <span className="font-serif text-[18px]">{c.name}</span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]">
                            {c.keyword}
                          </span>
                        </p>
                        <p className="m-0 mt-1 text-[14px] leading-relaxed text-[var(--fg-soft)]">
                          {c.story}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "symbols" && (
              <div className="max-w-[640px]">
                <InspectableFlag country={country} hint={t("inspectHint")} />
              </div>
            )}

            {tab === "evolution" && (
              <ol className="m-0 grid grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {country.timeline.map((entry) => (
                  <li key={`${entry.year}-${entry.label}`} className="list-none">
                    <FlagView flag={entry.flag} name={`${country.name} ${entry.year}`} />
                    <p className="mt-4 flex items-baseline gap-3">
                      <span className="font-mono text-[12px] text-[var(--accent)]">
                        {entry.year}
                      </span>
                      <span className="font-serif text-[18px]">{entry.label}</span>
                    </p>
                    <p className="m-0 mt-1 text-[14px] leading-relaxed text-[var(--fg-soft)]">
                      {entry.note}
                    </p>
                    {entry.reasons && (
                      <ul className="mt-3 space-y-1">
                        {entry.reasons.map((r) => (
                          <li
                            key={r}
                            className="pl-4 text-[13px] text-[var(--fg-mute)] before:mr-2 before:content-['—']"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            )}

            {tab === "trivia" && (
              <ul className="m-0 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-[var(--line)] p-0 md:grid-cols-3">
                {country.trivia.map((tr, i) => (
                  <li key={i} className="bg-[var(--bg)] p-7">
                    <span className="font-mono text-[11px] text-[var(--accent)]">0{i + 1}</span>
                    <p className="m-0 mt-3 text-[15px] leading-relaxed text-[var(--fg)]">{tr}</p>
                  </li>
                ))}
              </ul>
            )}

            {tab === "subdivisions" && (
              <ul className="m-0 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-[var(--line)] p-0 sm:grid-cols-2 lg:grid-cols-4">
                {country.subdivisions.map((s) => (
                  <li key={s.code} className="bg-[var(--bg)] p-6">
                    <p className="m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-mute)]">
                      {s.code}
                    </p>
                    <p className="m-0 mt-2 font-serif text-[20px]">{s.name}</p>
                    <p className="m-0 mt-1 text-[13px] text-[var(--fg-soft)]">{s.meta}</p>
                  </li>
                ))}
              </ul>
            )}

            {tab === "related" && (
              <div>
                <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                  {t("relatedWhy")}
                </p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => (
                    <CountryCard
                      key={r.slug}
                      country={r}
                      regionLabel={regionLabel(r.region, locale)}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </article>
  );
}
