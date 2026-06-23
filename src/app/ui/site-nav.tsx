"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@i18n/navigation";
import { locales, localeLabels, type Locale } from "@i18n/routing";
import { site, navItems } from "@shared/config";
import { Kbd, CustomSelect } from "@shared/ui";
import { cn } from "@shared/lib";
import { useTheme } from "@app/providers";

/** The persistent top bar: wordmark, primary nav, search, locale + theme. */
export function SiteNav() {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggle } = useTheme();

  const openSearch = () =>
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));

  const switchLocale = (next: Locale) => router.replace(pathname, { locale: next });

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-[var(--pad-x)] py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-[22px] font-medium tracking-[-0.02em]">
            {site.wordmark}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-mute)] sm:inline">
            {site.wordmarkSub}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-soft)] transition-colors hover:text-[var(--fg)]"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openSearch}
            aria-label={t("openSearch")}
            className="hidden items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[var(--fg-mute)] transition-colors hover:text-[var(--fg)] sm:flex"
          >
            <span className="font-mono text-[11px]">{t("openSearch")}</span>
            <Kbd>⌘K</Kbd>
          </button>

          <CustomSelect
            ariaLabel={t("toggleTheme")}
            align="right"
            value={locale}
            onChange={(v) => switchLocale(v as Locale)}
            options={locales.map((l) => ({ value: l, label: localeLabels[l] }))}
          />

          <button
            type="button"
            onClick={toggle}
            aria-label={t("toggleTheme")}
            className={cn(
              "h-9 w-9 rounded-full border border-[var(--line)] text-[14px] transition-colors hover:border-[var(--line-strong)]",
            )}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
        </div>
      </div>
    </header>
  );
}
