import { setRequestLocale } from "next-intl/server";
import { SymbolsPage } from "@pages/symbols";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SymbolsPage />;
}
