import type { Locale } from "@i18n/routing";
import { defaultLocale } from "@i18n/routing";
import { brightness, type Rgb } from "@shared/lib";

/**
 * Symbolic reading of an extracted color — the domain knowledge behind the
 * palette-extraction feature. Heuristics adapted from ai_studio_flags,
 * localized. This is *domain* logic, so it lives in the palette entity (not shared).
 */
const READINGS: Record<string, Record<Locale, string>> = {
  white: {
    "pt-BR":
      "O branco representa historicamente pureza, inocência e paz. Costuma atuar como fundo ou faixa de distinção.",
    "en-US":
      "White historically represents purity, innocence and peace. It often acts as a background or distinguishing band.",
    "es-ES":
      "El blanco representa históricamente pureza, inocencia y paz. Suele actuar como fondo o franja de distinción.",
  },
  black: {
    "pt-BR":
      "O preto simboliza herança, determinação, o solo agrícola ou a superação de um passado sombrio.",
    "en-US":
      "Black symbolizes heritage, determination, agricultural soil, or overcoming a dark past.",
    "es-ES":
      "El negro simboliza herencia, determinación, el suelo agrícola o la superación de un pasado oscuro.",
  },
  red: {
    "pt-BR":
      "O vermelho é amplamente usado para simbolizar o sangue derramado pela nação, a coragem e a revolução.",
    "en-US":
      "Red is widely used to symbolize the blood shed for the nation, valor, and revolution.",
    "es-ES":
      "El rojo se usa ampliamente para simbolizar la sangre derramada por la nación, el valor y la revolución.",
  },
  green: {
    "pt-BR":
      "O verde costuma representar a beleza natural da terra, a agricultura, a esperança ou um significado religioso.",
    "en-US":
      "Green often stands for the land's natural beauty, agriculture, hope, or religious significance.",
    "es-ES":
      "El verde suele representar la belleza natural de la tierra, la agricultura, la esperanza o un significado religioso.",
  },
  blue: {
    "pt-BR": "O azul representa o céu, o mar, a verdade, a lealdade, a justiça e a perseverança.",
    "en-US": "Blue represents the sky, the sea, truth, loyalty, justice and perseverance.",
    "es-ES": "El azul representa el cielo, el mar, la verdad, la lealtad, la justicia y la perseverancia.",
  },
  gold: {
    "pt-BR":
      "O amarelo ou dourado simboliza riqueza, o sol, a prosperidade, a justiça e a energia.",
    "en-US": "Yellow or gold symbolizes wealth, the sun, prosperity, justice and energy.",
    "es-ES": "El amarillo o dorado simboliza riqueza, el sol, la prosperidad, la justicia y la energía.",
  },
  other: {
    "pt-BR":
      "Esta tonalidade precisa carrega significado nacional distinto, muitas vezes representando origens culturais, unidade ou geografia regional.",
    "en-US":
      "This precise hue carries distinct national significance, often representing cultural origins, unity or regional geography.",
    "es-ES":
      "Este tono preciso lleva un significado nacional distinto, a menudo representando orígenes culturales, unidad o geografía regional.",
  },
};

function classify({ r, g, b }: Rgb): keyof typeof READINGS {
  const lum = brightness({ r, g, b });
  if (lum > 240) return "white";
  if (lum < 30) return "black";
  if (r > 150 && g < 100 && b < 100) return "red";
  if (r < 100 && g > 120 && b < 100) return "green";
  if (r < 100 && g < 150 && b > 150) return "blue";
  if (r > 180 && g > 150 && b < 100) return "gold";
  return "other";
}

export function interpretColorMeaning(rgb: Rgb, locale: Locale): string {
  const key = classify(rgb);
  return READINGS[key][locale] ?? READINGS[key][defaultLocale];
}
