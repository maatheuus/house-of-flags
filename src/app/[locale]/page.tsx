import { setRequestLocale } from "next-intl/server";
import { HomePage } from "@pages/home";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomePage />;
}
