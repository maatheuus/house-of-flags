import { useTranslations } from "next-intl";
import { Link } from "@i18n/navigation";
import { site, navItems } from "@shared/config";

/** Editorial colophon footer. */
export function SiteFooter() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");

  return (
    <footer className="border-t border-[var(--line)] py-20">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-[var(--pad-x)] md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-serif text-[28px] font-light tracking-[-0.02em]">{site.wordmark}</p>
          <p className="mt-4 max-w-[360px] text-[14px] leading-relaxed text-[var(--fg-soft)]">
            {t("tagline")}
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
            {t("navigate")}
          </p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] text-[var(--fg-soft)] transition-colors hover:text-[var(--fg)]"
                >
                  {nav(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
            {t("colophon")}
          </p>
          <p className="m-0 text-[14px] leading-relaxed text-[var(--fg-soft)]">{t("colophonText")}</p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[1400px] items-baseline justify-between px-[var(--pad-x)] font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
        <span>{t("rights")}</span>
        <span>{t("motto")}</span>
      </div>
    </footer>
  );
}
