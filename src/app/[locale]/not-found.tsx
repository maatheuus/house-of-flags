import { useTranslations } from "next-intl";
import { Link } from "@i18n/navigation";
import { Container, Reveal, RevealItem, buttonClass } from "@shared/ui";

/** Locale-aware 404, shown inside the full shell (nav + footer). */
export default function NotFound() {
  const t = useTranslations("Common");
  return (
    <main className="flex min-h-[68vh] items-center">
      <Container className="text-center">
        <Reveal stagger={0.09}>
          <RevealItem>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-mute)]">
              Error 404
            </p>
          </RevealItem>

          <RevealItem>
            <p className="mt-6 text-balance font-serif text-[clamp(96px,20vw,260px)] font-light leading-[0.86] tracking-[-0.04em] text-[var(--accent)]">
              404
            </p>
          </RevealItem>

          <RevealItem>
            <Link
              href="/"
              className={buttonClass(
                "ghost",
                "mt-10 transition-transform duration-200 ease-[var(--ease-editorial)] active:scale-[0.96]",
              )}
            >
              {t("back")}
            </Link>
          </RevealItem>
        </Reveal>
      </Container>
    </main>
  );
}
