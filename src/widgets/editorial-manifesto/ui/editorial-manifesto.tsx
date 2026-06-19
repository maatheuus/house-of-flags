import { useTranslations } from "next-intl";
import { Container } from "@shared/ui";
import { site } from "@shared/config";

interface ManifestoCard {
  title: string;
  body: string;
}

/** The opening editorial statement: a pull-quote over a three-card thesis. */
export function EditorialManifesto() {
  const t = useTranslations("Manifesto");
  const cards = t.raw("cards") as ManifestoCard[];

  return (
    <section id={site.sections.manifesto} className="border-t border-[var(--line)] py-28">
      <Container>
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-mute)]">
          {t("index")}
        </p>
        <blockquote className="m-0 max-w-[1100px] font-serif text-[clamp(28px,4.5vw,56px)] font-light leading-[1.08] tracking-[-0.02em]">
          {t("quote")}
        </blockquote>

        <div className="mt-20 grid grid-cols-1 gap-px bg-[var(--line)] md:grid-cols-3">
          {cards.map((card, i) => (
            <article key={card.title} className="bg-[var(--bg)] p-8">
              <span className="font-mono text-[11px] text-[var(--accent)]">0{i + 1}</span>
              <h3 className="mb-3 mt-4 font-serif text-[24px] font-light tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-[var(--fg-soft)]">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
