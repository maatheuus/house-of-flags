import { setRequestLocale } from "next-intl/server";
import { ArchivePage } from "@pages/archive";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ArchivePage />;
}
