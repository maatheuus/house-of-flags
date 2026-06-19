"use client";

import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@i18n/routing";
import { Container, SectionHead } from "@shared/ui";
import { Flag } from "@entities/flag";
import type { Country } from "@entities/country";
import { colorFilterHex, colorFilterLabel } from "@entities/palette";
import { SymbolIcon } from "@entities/symbol";
import { useCompare, CountryPicker } from "@features/compare-flags";

interface ComparisonLabProps {
  /** Seed slugs so the lab opens with a meaningful pairing. */
  initialA?: string;
  initialB?: string;
}

function Slot({
  locale,
  country,
  value,
  label,
  onChange,
}: {
  locale: Locale;
  country: Country | null;
  value: string;
  label: string;
  onChange: (slug: string) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <CountryPicker locale={locale} value={value} label={label} onChange={onChange} />
      {country && (
        <>
          <Flag alpha2={country.code} name={country.name} ratio={country.ratio} />
          <div className="flex flex-wrap gap-2">
            {country.dominantColors.map((c) => (
              <span
                key={c}
                className="flex items-center gap-1.5 rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em]"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full border border-black/10"
                  style={{ background: colorFilterHex(c) }}
                />
                {colorFilterLabel(c, locale)}
              </span>
            ))}
          </div>
          <p className="m-0 text-[14px] leading-relaxed text-[var(--fg-soft)]">{country.excerpt}</p>
        </>
      )}
    </div>
  );
}

/** The comparator: two flags face to face with their shared chromatic / symbolic DNA. */
export function ComparisonLab({ initialA = "brasil", initialB = "franca" }: ComparisonLabProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Compare");
  const cmp = useCompare(locale, initialA, initialB);

  return (
    <section className="py-20">
      <Container>
        <SectionHead ordinal="§ 05" kicker={t("index")} title={t("title")} lede={t("lede")} />

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_auto_1fr]">
          <Slot
            locale={locale}
            country={cmp.a}
            value={cmp.slugA}
            label={t("selectCountry")}
            onChange={cmp.setSlugA}
          />
          <div className="hidden self-center font-serif text-[28px] italic text-[var(--fg-mute)] md:block">
            {t("vs")}
          </div>
          <Slot
            locale={locale}
            country={cmp.b}
            value={cmp.slugB}
            label={t("selectCountry")}
            onChange={cmp.setSlugB}
          />
        </div>

        {(cmp.sharedColors.length > 0 || cmp.sharedSymbols.length > 0) && (
          <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-8">
            {cmp.sharedColors.map((c) => (
              <span
                key={c}
                className="h-5 w-5 rounded-full border border-black/10"
                style={{ background: colorFilterHex(c) }}
                title={colorFilterLabel(c, locale)}
              />
            ))}
            {cmp.sharedSymbols.map((s) => (
              <SymbolIcon key={s} id={s} className="h-5 w-5 text-[var(--accent)]" />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
