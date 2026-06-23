"use client";

import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@i18n/routing";
import { Container, SectionHead } from "@shared/ui";
import { CountryCard } from "@entities/country";
import { regionLabel } from "@entities/region";
import { useArchiveFilter, FilterBar } from "@features/filter-archive";
import { cn } from "@shared/lib";

/** The interactive atlas: filterable, sortable grid/list of every country. */
export function ArchiveGrid() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Archive");
  const c = useTranslations("Common");
  const archive = useArchiveFilter(locale);

  return (
    <section className="py-20">
      <Container>
        <SectionHead ordinal="§ 02" kicker={t("index")} title={t("title")} lede={t("lede")} />

        <FilterBar
          locale={locale}
          filters={archive.filters}
          layout={archive.layout}
          isFiltering={archive.isFiltering}
          onRegion={archive.setRegion}
          onColor={archive.setColor}
          onSort={archive.setSort}
          onLayout={archive.setLayout}
          onReset={archive.reset}
          labels={{
            filterRegion: t("filterRegion"),
            filterColor: t("filterColor"),
            sortLabel: t("sortLabel"),
            sortCurated: t("sortCurated"),
            sortAz: t("sortAz"),
            sortYearAsc: t("sortYearAsc"),
            sortYearDesc: t("sortYearDesc"),
            layoutGrid: t("layoutGrid"),
            layoutList: t("layoutList"),
            all: c("all"),
            reset: t("reset"),
          }}
        />

        {archive.results.length === 0 ? (
          <div className="py-28 text-center">
            <h3 className="m-0 font-serif text-[28px] font-light">{t("emptyTitle")}</h3>
            <p className="mt-2 text-[var(--fg-soft)]">{t("emptyText")}</p>
          </div>
        ) : (
          <div
            className={cn(
              "mt-12 grid gap-x-8 gap-y-14",
              archive.layout === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2",
            )}
          >
            {archive.results.map((country, i) => (
              <CountryCard
                key={country.slug}
                country={country}
                index={i + 1}
                regionLabel={regionLabel(country.region, locale)}
                priority={i < 3}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
