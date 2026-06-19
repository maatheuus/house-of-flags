import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

/**
 * The mule_flags typographic identity: Fraunces (editorial serif),
 * Inter (UI sans), JetBrains Mono (labels/codes). Loaded via next/font so
 * they are self-hosted, subset and preloaded — no layout shift, no FOUT.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  // Variable font: the weight axis is continuous, so `weight` must be omitted
  // (next/font rejects an explicit weight list alongside `axes`).
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const fontVariables = `${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`;
