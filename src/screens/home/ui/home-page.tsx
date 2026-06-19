import { useTranslations } from "next-intl";
import { Container } from "@shared/ui";
import { site } from "@shared/config";
import { Hero } from "@widgets/hero";
import { EditorialManifesto } from "@widgets/editorial-manifesto";
import { ArchiveGrid } from "@widgets/archive-grid";
import { PaletteLab } from "@widgets/palette-lab";
import { SymbolismAtlas } from "@widgets/symbolism-atlas";
import { ComparisonLab } from "@widgets/comparison-lab";
import { HistoricalTimeline } from "@widgets/historical-timeline";
import { SpinButton } from "@features/discover-random-flag";

/** The editorial one-pager that composes every section of the archive. */
export function HomePage() {
  const t = useTranslations("Discover");

  return (
    <>
      <Hero />

      <EditorialManifesto />

      <div id={site.sections.atlas}>
        <ArchiveGrid />
      </div>

      <div id={site.sections.chromatic}>
        <PaletteLab />
      </div>

      <div id={site.sections.symbols}>
        <SymbolismAtlas />
      </div>

      <div id={site.sections.compare}>
        <ComparisonLab />
      </div>

      <div id={site.sections.chronicle}>
        <HistoricalTimeline />
      </div>

      <section
        id={site.sections.discover}
        className="border-t border-[var(--line)] py-28 text-center"
      >
        <Container>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-mute)]">
            {t("index")}
          </p>
          <h2 className="mx-auto mb-10 max-w-[760px] font-serif text-[clamp(32px,5vw,64px)] font-light leading-[1.05] tracking-[-0.02em]">
            {t("title")}
          </h2>
          <div className="flex justify-center">
            <SpinButton label={t("spin")} />
          </div>
        </Container>
      </section>
    </>
  );
}
