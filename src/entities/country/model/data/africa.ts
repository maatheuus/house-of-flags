import type { CountryRecord } from "../../types";

export const AFRICA: CountryRecord[] = [
  {
    code: "ZA",
    slug: "africa-do-sul",
    region: "africa",
    ratio: "2 / 3",
    adopted: 1994,
    dominantColors: ["green", "gold", "red", "blue", "black", "white"],
    symbols: [],
    related: ["reino-unido"],
    flag: "ZA",
    content: {
      "pt-BR": {
        name: "África do Sul",
        nameLocal: "South Africa",
        capital: "Pretória",
        tag: "República",
        designer: "Frederick Brownell",
        excerpt:
          "Um 'Y' deitado funde caminhos divergentes num só fluxo — a bandeira da reconciliação, nascida com o fim do apartheid.",
        history:
          "Desenhada às pressas em 1994 por Frederick Brownell para as primeiras eleições democráticas, é a bandeira nacional mais recente com seis cores. O 'Y' horizontal — pala em forquilha — representa a convergência de caminhos históricos divergentes numa unidade.",
        context:
          "É talvez a única bandeira concebida como metáfora explícita de reconciliação. As cores reúnem as tradições britânica e bôer (vermelho, branco, azul) e o movimento de libertação (preto, verde, ouro), sem atribuir significado oficial a nenhuma — a leitura é deixada ao cidadão.",
        colors: [
          {
            hex: "#007a4d",
            name: "Verde",
            keyword: "Convergência",
            story: "Forma o 'Y' que une os elementos; cor do Congresso Nacional Africano e da terra.",
          },
          {
            hex: "#ffb612",
            name: "Ouro",
            keyword: "Riqueza",
            story: "As franjas douradas ladeiam o triângulo, evocando as riquezas minerais do país.",
          },
          {
            hex: "#de3831",
            name: "Vermelho",
            keyword: "Sacrifício",
            story: "Herança das bandeiras britânica e bôer; lido como o sangue derramado pela liberdade.",
          },
          {
            hex: "#002395",
            name: "Azul",
            keyword: "Céu",
            story: "O céu aberto e os dois oceanos que cercam o país, também de raiz colonial.",
          },
          {
            hex: "#000000",
            name: "Preto",
            keyword: "Povo",
            story: "O triângulo preto no mastro representa o povo negro sul-africano.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Paz",
            story: "As bordas brancas separam as cores e simbolizam a paz entre as comunidades.",
          },
        ],
        hotspots: [
          {
            x: 18,
            y: 50,
            title: "Triângulo preto",
            text: "Encaixado no mastro, é o ponto de onde o 'Y' diverge.",
          },
          {
            x: 45,
            y: 50,
            title: "Pala em 'Y'",
            text: "O verde em forquilha simboliza caminhos que convergem numa só direção.",
          },
        ],
        timeline: [
          {
            year: 1928,
            label: "Bandeira da União",
            flag: { svg: "EVO_ZA_1928" },
            note: "A 'Oranje-Blanje-Blou' combina a tradição bôer com bandeiras britânicas em miniatura.",
            reasons: [
              "Conciliar tensões entre britânicos e africânderes",
              "Afirmar a autonomia da União da África do Sul",
            ],
          },
          {
            year: 1994,
            label: "Bandeira da reconciliação",
            flag: "ZA",
            note: "A bandeira de seis cores é hasteada nas primeiras eleições multirraciais.",
            reasons: [
              "Marcar o fim do apartheid",
              "Unir num só desenho as histórias divergentes do país",
            ],
          },
        ],
        trivia: [
          "Foi desenhada como solução provisória e adotada definitivamente pela popularidade.",
          "É a única bandeira nacional com seis cores sem usar um selo ou brasão.",
          "Nenhuma cor tem significado oficial: o governo deliberadamente deixou a interpretação em aberto.",
        ],
        subdivisions: [
          { code: "ZA-GP", name: "Gauteng", meta: "Província" },
          { code: "ZA-WC", name: "Cabo Ocidental", meta: "Província" },
          { code: "ZA-KZN", name: "KwaZulu-Natal", meta: "Província" },
        ],
      },
      "en-US": {
        name: "South Africa",
        nameLocal: "South Africa",
        capital: "Pretoria",
        tag: "Republic",
        designer: "Frederick Brownell",
        excerpt:
          "A sideways 'Y' merges divergent paths into a single flow — the flag of reconciliation, born with the end of apartheid.",
        history:
          "Designed in haste in 1994 by Frederick Brownell for the first democratic elections, it is the most recent national flag with six colors. The horizontal 'Y' — a pall fork — represents the convergence of divergent historical paths into unity.",
        context:
          "It is perhaps the only flag conceived as an explicit metaphor of reconciliation. The colors gather the British and Boer traditions (red, white, blue) and the liberation movement (black, green, gold), assigning official meaning to none — the reading is left to the citizen.",
        colors: [
          {
            hex: "#007a4d",
            name: "Green",
            keyword: "Convergence",
            story: "Forms the 'Y' that unites the elements; the color of the ANC and of the land.",
          },
          {
            hex: "#ffb612",
            name: "Gold",
            keyword: "Wealth",
            story: "The golden bands flank the triangle, evoking the country's mineral riches.",
          },
          {
            hex: "#de3831",
            name: "Red",
            keyword: "Sacrifice",
            story: "Inherited from the British and Boer flags; read as the blood shed for freedom.",
          },
          {
            hex: "#002395",
            name: "Blue",
            keyword: "Sky",
            story: "The open sky and the two oceans surrounding the country, also of colonial root.",
          },
          {
            hex: "#000000",
            name: "Black",
            keyword: "People",
            story: "The black triangle at the hoist represents the black South African people.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Peace",
            story: "The white borders separate the colors and symbolize peace among the communities.",
          },
        ],
        hotspots: [
          {
            x: 18,
            y: 50,
            title: "Black triangle",
            text: "Set into the hoist, it is the point from which the 'Y' diverges.",
          },
          {
            x: 45,
            y: 50,
            title: "'Y' pall",
            text: "The green fork symbolizes paths that converge into a single direction.",
          },
        ],
        timeline: [
          {
            year: 1928,
            label: "Union flag",
            flag: { svg: "EVO_ZA_1928" },
            note: "The 'Oranje-Blanje-Blou' combines the Boer tradition with miniature British flags.",
            reasons: [
              "Reconcile tensions between British and Afrikaners",
              "Assert the autonomy of the Union of South Africa",
            ],
          },
          {
            year: 1994,
            label: "Reconciliation flag",
            flag: "ZA",
            note: "The six-color flag is raised at the first multiracial elections.",
            reasons: [
              "Mark the end of apartheid",
              "Unite the country's divergent histories into one design",
            ],
          },
        ],
        trivia: [
          "It was designed as an interim solution and adopted permanently due to its popularity.",
          "It is the only national flag with six colors that uses no seal or coat of arms.",
          "No color has an official meaning: the government deliberately left the interpretation open.",
        ],
        subdivisions: [
          { code: "ZA-GP", name: "Gauteng", meta: "Province" },
          { code: "ZA-WC", name: "Western Cape", meta: "Province" },
          { code: "ZA-KZN", name: "KwaZulu-Natal", meta: "Province" },
        ],
      },
      "es-ES": {
        name: "Sudáfrica",
        nameLocal: "South Africa",
        capital: "Pretoria",
        tag: "República",
        designer: "Frederick Brownell",
        excerpt:
          "Una 'Y' tumbada fusiona caminos divergentes en un solo flujo — la bandera de la reconciliación, nacida con el fin del apartheid.",
        history:
          "Diseñada con prisa en 1994 por Frederick Brownell para las primeras elecciones democráticas, es la bandera nacional más reciente con seis colores. La 'Y' horizontal — palo en horquilla — representa la convergencia de caminos históricos divergentes en una unidad.",
        context:
          "Es quizá la única bandera concebida como metáfora explícita de reconciliación. Los colores reúnen las tradiciones británica y bóer (rojo, blanco, azul) y el movimiento de liberación (negro, verde, oro), sin atribuir significado oficial a ninguno — la lectura se deja al ciudadano.",
        colors: [
          {
            hex: "#007a4d",
            name: "Verde",
            keyword: "Convergencia",
            story: "Forma la 'Y' que une los elementos; color del Congreso Nacional Africano y de la tierra.",
          },
          {
            hex: "#ffb612",
            name: "Oro",
            keyword: "Riqueza",
            story: "Las franjas doradas flanquean el triángulo, evocando las riquezas minerales del país.",
          },
          {
            hex: "#de3831",
            name: "Rojo",
            keyword: "Sacrificio",
            story: "Herencia de las banderas británica y bóer; leído como la sangre derramada por la libertad.",
          },
          {
            hex: "#002395",
            name: "Azul",
            keyword: "Cielo",
            story: "El cielo abierto y los dos océanos que rodean el país, también de raíz colonial.",
          },
          {
            hex: "#000000",
            name: "Negro",
            keyword: "Pueblo",
            story: "El triángulo negro en el mástil representa al pueblo negro sudafricano.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Paz",
            story: "Los bordes blancos separan los colores y simbolizan la paz entre las comunidades.",
          },
        ],
        hotspots: [
          {
            x: 18,
            y: 50,
            title: "Triángulo negro",
            text: "Encajado en el mástil, es el punto desde el que diverge la 'Y'.",
          },
          {
            x: 45,
            y: 50,
            title: "Palo en 'Y'",
            text: "El verde en horquilla simboliza caminos que convergen en una sola dirección.",
          },
        ],
        timeline: [
          {
            year: 1928,
            label: "Bandera de la Unión",
            flag: { svg: "EVO_ZA_1928" },
            note: "La 'Oranje-Blanje-Blou' combina la tradición bóer con banderas británicas en miniatura.",
            reasons: [
              "Conciliar tensiones entre británicos y afrikáners",
              "Afirmar la autonomía de la Unión Sudafricana",
            ],
          },
          {
            year: 1994,
            label: "Bandera de la reconciliación",
            flag: "ZA",
            note: "La bandera de seis colores se iza en las primeras elecciones multirraciales.",
            reasons: [
              "Marcar el fin del apartheid",
              "Unir en un solo diseño las historias divergentes del país",
            ],
          },
        ],
        trivia: [
          "Fue diseñada como solución provisional y adoptada definitivamente por su popularidad.",
          "Es la única bandera nacional con seis colores que no usa sello ni escudo.",
          "Ningún color tiene significado oficial: el gobierno dejó deliberadamente la interpretación abierta.",
        ],
        subdivisions: [
          { code: "ZA-GP", name: "Gauteng", meta: "Provincia" },
          { code: "ZA-WC", name: "Cabo Occidental", meta: "Provincia" },
          { code: "ZA-KZN", name: "KwaZulu-Natal", meta: "Provincia" },
        ],
      },
    },
  },
];
