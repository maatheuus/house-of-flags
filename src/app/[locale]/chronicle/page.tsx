import { setRequestLocale } from "next-intl/server";
import { ChroniclePage } from "@pages/chronicle";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ChroniclePage />;
}
