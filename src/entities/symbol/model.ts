import type { Locale } from "@i18n/routing";
import { defaultLocale } from "@i18n/routing";
import type { Alpha2, Localized } from "@shared/types";

export type SymbolId =
  | "star"
  | "cross"
  | "sun"
  | "crescent"
  | "eagle"
  | "shield"
  | "tricolor"
  | "disc";

export interface FlagSymbol {
  id: SymbolId;
  name: Localized<string>;
  meaning: Localized<string>;
  text: Localized<string>;
  /** Countries (alpha-2) where the motif appears — cross-country taxonomy. */
  countries: Alpha2[];
  /** Editorial column span hint for the symbolism atlas grid. */
  span: 3 | 4 | 6 | 8;
}

export const SYMBOLS: FlagSymbol[] = [
  {
    id: "star",
    span: 6,
    name: { "pt-BR": "Estrela", "en-US": "Star", "es-ES": "Estrella" },
    meaning: {
      "pt-BR": "Estados, povos, ideais",
      "en-US": "States, peoples, ideals",
      "es-ES": "Estados, pueblos, ideales",
    },
    text: {
      "pt-BR":
        "Cinco pontas representam paz e harmonia; quatro pontas, os pontos cardeais; seis ou mais, federações e alianças. A bandeira americana tem 50 — uma por estado.",
      "en-US":
        "Five points stand for peace and harmony; four points, the cardinal directions; six or more, federations and alliances. The American flag has 50 — one per state.",
      "es-ES":
        "Cinco puntas representan paz y armonía; cuatro puntas, los puntos cardinales; seis o más, federaciones y alianzas. La bandera estadounidense tiene 50 — una por estado.",
    },
    countries: ["US", "BR", "CN", "AU", "TR", "KR"],
  },
  {
    id: "cross",
    span: 6,
    name: { "pt-BR": "Cruz", "en-US": "Cross", "es-ES": "Cruz" },
    meaning: {
      "pt-BR": "Cristandade, união, geografia",
      "en-US": "Christianity, union, geography",
      "es-ES": "Cristiandad, unión, geografía",
    },
    text: {
      "pt-BR":
        "A cruz nórdica desloca-se ao mastro, simbolizando cristianismo e identidade escandinava. A Union Jack sobrepõe três cruzes patronais.",
      "en-US":
        "The Nordic cross shifts toward the hoist, symbolizing Christianity and Scandinavian identity. The Union Jack layers three patron crosses.",
      "es-ES":
        "La cruz nórdica se desplaza hacia el mástil, simbolizando el cristianismo y la identidad escandinava. La Union Jack superpone tres cruces patronales.",
    },
    countries: ["GB", "CH", "SE", "NO", "DK", "FI"],
  },
  {
    id: "sun",
    span: 4,
    name: { "pt-BR": "Sol", "en-US": "Sun", "es-ES": "Sol" },
    meaning: {
      "pt-BR": "Origem, eternidade, divindade",
      "en-US": "Origin, eternity, divinity",
      "es-ES": "Origen, eternidad, divinidad",
    },
    text: {
      "pt-BR":
        "Hinomaru japonês, Sol de Maio argentino, sol inca uruguaio. Em quase todas as culturas, a presença solar marca origem mítica ou divina.",
      "en-US":
        "The Japanese Hinomaru, the Argentine Sol de Mayo, the Incan sun of Uruguay. In nearly every culture, a solar presence marks mythic or divine origin.",
      "es-ES":
        "El Hinomaru japonés, el Sol de Mayo argentino, el sol inca uruguayo. En casi todas las culturas, la presencia solar marca un origen mítico o divino.",
    },
    countries: ["JP", "AR", "UY", "PH"],
  },
  {
    id: "crescent",
    span: 4,
    name: { "pt-BR": "Crescente", "en-US": "Crescent", "es-ES": "Creciente" },
    meaning: {
      "pt-BR": "Tradição islâmica e otomana",
      "en-US": "Islamic and Ottoman tradition",
      "es-ES": "Tradición islámica y otomana",
    },
    text: {
      "pt-BR":
        "Adotado pelo Império Otomano e herdado por seus sucessores e países muçulmanos. Em alguns casos a interpretação é estritamente cultural, não religiosa.",
      "en-US":
        "Adopted by the Ottoman Empire and inherited by its successors and Muslim nations. In some cases the reading is strictly cultural, not religious.",
      "es-ES":
        "Adoptado por el Imperio Otomano y heredado por sus sucesores y países musulmanes. En algunos casos la interpretación es estrictamente cultural, no religiosa.",
    },
    countries: ["TR", "PK", "TN", "MY"],
  },
  {
    id: "eagle",
    span: 4,
    name: { "pt-BR": "Águia", "en-US": "Eagle", "es-ES": "Águila" },
    meaning: {
      "pt-BR": "Poder, dinastia, herança imperial",
      "en-US": "Power, dynasty, imperial heritage",
      "es-ES": "Poder, dinastía, herencia imperial",
    },
    text: {
      "pt-BR":
        "A águia bicéfala vem do Império Bizantino. A águia mexicana sobre o cacto encarna o mito fundador de Tenochtitlán; a egípcia é a de Saladino.",
      "en-US":
        "The double-headed eagle comes from the Byzantine Empire. The Mexican eagle on the cactus embodies the founding myth of Tenochtitlán; Egypt's is Saladin's.",
      "es-ES":
        "El águila bicéfala viene del Imperio Bizantino. El águila mexicana sobre el cactus encarna el mito fundador de Tenochtitlán; la egipcia es la de Saladino.",
    },
    countries: ["MX", "EG", "AL"],
  },
  {
    id: "shield",
    span: 8,
    name: { "pt-BR": "Escudo", "en-US": "Shield", "es-ES": "Escudo" },
    meaning: {
      "pt-BR": "Heráldica, soberania",
      "en-US": "Heraldry, sovereignty",
      "es-ES": "Heráldica, soberanía",
    },
    text: {
      "pt-BR":
        "Escudos medievais sobreviveram como núcleo simbólico em bandeiras ibéricas e latino-americanas. Condensam séculos de história em poucos centímetros.",
      "en-US":
        "Medieval shields survive as the symbolic core of Iberian and Latin American flags. They compress centuries of history into a few centimeters.",
      "es-ES":
        "Los escudos medievales sobreviven como núcleo simbólico en banderas ibéricas y latinoamericanas. Condensan siglos de historia en pocos centímetros.",
    },
    countries: ["PT", "ES", "MX", "EC"],
  },
  {
    id: "tricolor",
    span: 4,
    name: { "pt-BR": "Tricolor", "en-US": "Tricolor", "es-ES": "Tricolor" },
    meaning: {
      "pt-BR": "Revolução, modernidade",
      "en-US": "Revolution, modernity",
      "es-ES": "Revolución, modernidad",
    },
    text: {
      "pt-BR":
        "A divisão em três faixas iguais foi quase um manifesto político no século XIX. Holandesa, francesa, italiana, alemã: variações que se espalharam globalmente.",
      "en-US":
        "The division into three equal bands was almost a political manifesto in the 19th century. Dutch, French, Italian, German: variations that spread globally.",
      "es-ES":
        "La división en tres franjas iguales fue casi un manifiesto político en el siglo XIX. Holandesa, francesa, italiana, alemana: variaciones que se difundieron globalmente.",
    },
    countries: ["FR", "IT", "NL", "DE", "RU"],
  },
];

export function symbol(id: SymbolId, locale: Locale) {
  const s = SYMBOLS.find((x) => x.id === id);
  if (!s) return null;
  return {
    ...s,
    name: s.name[locale] ?? s.name[defaultLocale],
    meaning: s.meaning[locale] ?? s.meaning[defaultLocale],
    text: s.text[locale] ?? s.text[defaultLocale],
  };
}

export function symbolsLocalized(locale: Locale) {
  return SYMBOLS.map((s) => ({
    ...s,
    name: s.name[locale] ?? s.name[defaultLocale],
    meaning: s.meaning[locale] ?? s.meaning[defaultLocale],
    text: s.text[locale] ?? s.text[defaultLocale],
  }));
}
