import type { Locale } from "@i18n/routing";
import { defaultLocale } from "@i18n/routing";
import type { Alpha2, Hex, Localized } from "@shared/types";

/**
 * The chromatic study: each entry is a color read across many nations.
 * `flagCodes` link out to the archive. Stories are localized.
 */
export interface ChromaticColor {
  id: string;
  hex: Hex;
  light?: boolean;
  name: Localized<string>;
  keyword: Localized<string>;
  story: Localized<string>;
  flagCodes: Alpha2[];
}

export const CHROMATIC: ChromaticColor[] = [
  {
    id: "red",
    hex: "#c1121f",
    name: { "pt-BR": "Vermelho", "en-US": "Red", "es-ES": "Rojo" },
    keyword: {
      "pt-BR": "Sangue · Coragem · Revolução",
      "en-US": "Blood · Courage · Revolution",
      "es-ES": "Sangre · Coraje · Revolución",
    },
    story: {
      "pt-BR":
        "Cor mais comum nas bandeiras do mundo — presente em mais de 70% dos pavilhões nacionais. Marca tanto sacrifício militar quanto fervor revolucionário, do Japão à Suíça.",
      "en-US":
        "The most common color in the world's flags — present in over 70% of national banners. It marks both military sacrifice and revolutionary fervor, from Japan to Switzerland.",
      "es-ES":
        "El color más común en las banderas del mundo — presente en más del 70% de los pabellones nacionales. Marca tanto el sacrificio militar como el fervor revolucionario, de Japón a Suiza.",
    },
    flagCodes: ["JP", "CN", "TR", "GB"],
  },
  {
    id: "blue",
    hex: "#003049",
    name: { "pt-BR": "Azul", "en-US": "Blue", "es-ES": "Azul" },
    keyword: {
      "pt-BR": "Céu · Mar · Liberdade",
      "en-US": "Sky · Sea · Liberty",
      "es-ES": "Cielo · Mar · Libertad",
    },
    story: {
      "pt-BR":
        "Símbolo de fidelidade e justiça. O “azul de bandeira” varia do índigo grego ao celeste argentino. Ancora ideais de liberdade quando combinado a branco e vermelho.",
      "en-US":
        "A symbol of loyalty and justice. 'Flag blue' ranges from Greek indigo to Argentine celeste. It anchors ideals of liberty when paired with white and red.",
      "es-ES":
        "Símbolo de fidelidad y justicia. El “azul de bandera” varía del índigo griego al celeste argentino. Ancla ideales de libertad cuando se combina con blanco y rojo.",
    },
    flagCodes: ["AR", "FR", "US", "GB"],
  },
  {
    id: "cream",
    hex: "#fdf0d5",
    light: true,
    name: { "pt-BR": "Marfim", "en-US": "Ivory", "es-ES": "Marfil" },
    keyword: {
      "pt-BR": "Paz · Pureza · Memória",
      "en-US": "Peace · Purity · Memory",
      "es-ES": "Paz · Pureza · Memoria",
    },
    story: {
      "pt-BR":
        "O branco é a cor mais discreta — e por isso mais carregada. Aparece como faixa central nas tricolores e como campo neutro em desenhos de unidade.",
      "en-US":
        "White is the most discreet color — and therefore the most loaded. It appears as the central band in tricolors and as a neutral field in designs of unity.",
      "es-ES":
        "El blanco es el color más discreto — y por eso el más cargado. Aparece como franja central en las tricolores y como campo neutro en diseños de unidad.",
    },
    flagCodes: ["JP", "FR", "IT"],
  },
  {
    id: "bordeaux",
    hex: "#780000",
    name: { "pt-BR": "Bordô", "en-US": "Bordeaux", "es-ES": "Burdeos" },
    keyword: {
      "pt-BR": "Dinastia · Vinho · Reverência",
      "en-US": "Dynasty · Wine · Reverence",
      "es-ES": "Dinastía · Vino · Reverencia",
    },
    story: {
      "pt-BR":
        "Versão mais profunda do vermelho, presente em pavilhões medievais e estandartes contemporâneos. É a cor das origens dinásticas — Bragança, Borgonha, Habsburgo.",
      "en-US":
        "A deeper red, found in medieval banners and contemporary standards. It is the color of dynastic origins — Bragança, Burgundy, Habsburg.",
      "es-ES":
        "Una versión más profunda del rojo, presente en pabellones medievales y estandartes contemporáneos. Es el color de los orígenes dinásticos — Braganza, Borgoña, Habsburgo.",
    },
    flagCodes: ["PT", "ES"],
  },
  {
    id: "sky",
    hex: "#669bbc",
    light: true,
    name: { "pt-BR": "Sereno", "en-US": "Serene", "es-ES": "Sereno" },
    keyword: {
      "pt-BR": "Aurora · Diplomacia · Constância",
      "en-US": "Dawn · Diplomacy · Constancy",
      "es-ES": "Aurora · Diplomacia · Constancia",
    },
    story: {
      "pt-BR":
        "Tom mais suave do azul, escolhido por nações que desejam projetar serenidade e cooperação — Argentina, ONU, Somália, Cazaquistão.",
      "en-US":
        "A softer blue, chosen by nations wishing to project serenity and cooperation — Argentina, the UN, Somalia, Kazakhstan.",
      "es-ES":
        "Un azul más suave, elegido por naciones que desean proyectar serenidad y cooperación — Argentina, la ONU, Somalia, Kazajistán.",
    },
    flagCodes: ["AR"],
  },
];

export function chromatic(locale: Locale) {
  return CHROMATIC.map((c) => ({
    ...c,
    name: c.name[locale] ?? c.name[defaultLocale],
    keyword: c.keyword[locale] ?? c.keyword[defaultLocale],
    story: c.story[locale] ?? c.story[defaultLocale],
  }));
}
