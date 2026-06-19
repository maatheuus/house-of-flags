import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@i18n/routing";
import { Container, SectionHead } from "@shared/ui";
import { SymbolIcon, symbolsLocalized } from "@entities/symbol";
import { cn } from "@shared/lib";

const SPAN: Record<number, string> = {
  3: "md:col-span-3",
  4: "md:col-span-4",
  6: "md:col-span-6",
  8: "md:col-span-8",
};

/** The lexicon of cross-border motifs: an editorial grid of flag symbols. */
export function SymbolismAtlas() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Symbols");
  const symbols = symbolsLocalized(locale);

  return (
    <section className="py-24">
      <Container>
        <SectionHead ordinal="§ 04" kicker={t("index")} title={t("title")} />

        <div className="grid grid-cols-1 gap-px bg-[var(--line)] md:grid-cols-12">
          {symbols.map((s) => (
            <article
              key={s.id}
              className={cn("flex flex-col gap-5 bg-[var(--bg)] p-8", SPAN[s.span])}
            >
              <div className="flex items-center justify-between">
                <SymbolIcon id={s.id} className="h-9 w-9 text-[var(--accent)]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                  {s.meaning}
                </span>
              </div>
              <h3 className="m-0 font-serif text-[28px] font-light tracking-[-0.02em]">{s.name}</h3>
              <p className="m-0 text-[15px] leading-relaxed text-[var(--fg-soft)]">{s.text}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                  {t("appearsIn")}
                </span>
                {s.countries.map((code) => (
                  <span
                    key={code}
                    className="rounded-sm border border-[var(--line)] px-1.5 py-0.5 font-mono text-[10px] tracking-[0.08em] text-[var(--fg-soft)]"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
