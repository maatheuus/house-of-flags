import type { CountryRecord } from "../../types";

export const ASIA: CountryRecord[] = [
  {
    code: "JP",
    slug: "japao",
    region: "asia",
    ratio: "2 / 3",
    adopted: 1999,
    dominantColors: ["red", "white"],
    symbols: ["sun", "disc"],
    related: ["coreia-do-sul", "china"],
    flag: "JP",
    content: {
      "pt-BR": {
        name: "Japão",
        nameLocal: "日本",
        capital: "Tóquio",
        tag: "Monarquia",
        excerpt:
          "O Hinomaru — 'disco do sol' — reduz uma nação inteira a um único círculo vermelho: a bandeira mais minimalista do mundo.",
        history:
          "O disco solar sobre fundo branco era usado por senhores feudais e xoguns desde a Idade Média e foi adotado como pavilhão dos navios mercantes em 1870. Só em 1999, contudo, uma lei oficializou o Hinomaru como bandeira nacional, junto ao hino Kimigayo.",
        context:
          "É um exercício radical de síntese: nenhuma listra, nenhum brasão, nenhuma palavra. O nome do país — Nihon, 'origem do sol' — é literalmente o desenho da bandeira. Forma e significado colapsam num só gesto.",
        colors: [
          {
            hex: "#bc002d",
            name: "Vermelho",
            keyword: "Sol",
            story:
              "O disco carmim representa o sol, ligado à deusa Amaterasu e à linhagem imperial. O tom oficial foi fixado em 1999.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Pureza",
            story:
              "O campo branco simboliza honestidade e pureza, virtudes centrais da tradição japonesa.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Hinomaru",
            text: "O 'disco do sol' está centralizado; seu diâmetro é três quintos da altura da bandeira.",
          },
          {
            x: 50,
            y: 30,
            title: "Campo branco",
            text: "Sem ornamentos: o vazio é parte do significado, isolando o sol.",
          },
        ],
        timeline: [
          {
            year: 701,
            label: "Estandarte solar da corte",
            flag: { svg: "EVO_JP_700" },
            note: "A corte de Mommu usa um estandarte com o sol em cerimônias de Ano-Novo.",
            reasons: [
              "Associar o imperador à deusa solar Amaterasu",
              "Marcar o Japão como 'terra do sol nascente'",
            ],
          },
          {
            year: 1870,
            label: "Pavilhão mercante",
            flag: "JP",
            note: "O disco vermelho sobre branco é definido como bandeira dos navios mercantes.",
            reasons: [
              "Dar ao Japão Meiji um símbolo naval moderno",
              "Padronizar o emblema usado por clãs feudais",
            ],
          },
          {
            year: 1999,
            label: "Lei da Bandeira e do Hino",
            flag: "JP",
            note: "O Hinomaru é finalmente oficializado por lei como bandeira nacional.",
            reasons: [
              "Encerrar a ambiguidade legal sobre o símbolo",
              "Fixar oficialmente as proporções e o tom de vermelho",
            ],
          },
        ],
        trivia: [
          "Por mais de um século o Hinomaru foi a bandeira de fato, sem nunca ter sido oficializado por lei.",
          "Originalmente o disco era levemente deslocado para o mastro; em 1999 foi centralizado.",
          "A 'bandeira do sol nascente', com raios, é um pavilhão militar distinto do Hinomaru civil.",
        ],
        subdivisions: [
          { code: "JP-13", name: "Tóquio", meta: "Metrópole" },
          { code: "JP-27", name: "Osaka", meta: "Prefeitura" },
          { code: "JP-01", name: "Hokkaido", meta: "Prefeitura" },
        ],
      },
      "en-US": {
        name: "Japan",
        nameLocal: "日本",
        capital: "Tokyo",
        tag: "Monarchy",
        excerpt:
          "The Hinomaru — 'circle of the sun' — reduces an entire nation to a single red disc: the most minimalist flag in the world.",
        history:
          "The solar disc on a white field was used by feudal lords and shoguns from the Middle Ages and adopted as the ensign of merchant ships in 1870. Only in 1999, however, did a law officially establish the Hinomaru as the national flag, alongside the anthem Kimigayo.",
        context:
          "It is a radical exercise in synthesis: no stripes, no crest, no words. The country's name — Nihon, 'origin of the sun' — is literally the flag's design. Form and meaning collapse into a single gesture.",
        colors: [
          {
            hex: "#bc002d",
            name: "Red",
            keyword: "Sun",
            story:
              "The crimson disc represents the sun, tied to the goddess Amaterasu and the imperial line. The official shade was fixed in 1999.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Purity",
            story:
              "The white field symbolizes honesty and purity, central virtues in Japanese tradition.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Hinomaru",
            text: "The 'circle of the sun' is centered; its diameter is three fifths of the flag's height.",
          },
          {
            x: 50,
            y: 30,
            title: "White field",
            text: "No ornaments: the emptiness is part of the meaning, isolating the sun.",
          },
        ],
        timeline: [
          {
            year: 701,
            label: "Court solar banner",
            flag: { svg: "EVO_JP_700" },
            note: "Emperor Mommu's court uses a banner with the sun in New Year ceremonies.",
            reasons: [
              "Tie the emperor to the sun goddess Amaterasu",
              "Mark Japan as the 'land of the rising sun'",
            ],
          },
          {
            year: 1870,
            label: "Merchant ensign",
            flag: "JP",
            note: "The red disc on white is defined as the flag of merchant ships.",
            reasons: [
              "Give Meiji Japan a modern naval symbol",
              "Standardize the emblem used by feudal clans",
            ],
          },
          {
            year: 1999,
            label: "Flag and Anthem Law",
            flag: "JP",
            note: "The Hinomaru is finally made official by law as the national flag.",
            reasons: [
              "End the legal ambiguity over the symbol",
              "Officially fix the proportions and shade of red",
            ],
          },
        ],
        trivia: [
          "For over a century the Hinomaru was the de facto flag without ever being made official by law.",
          "Originally the disc was slightly shifted toward the hoist; in 1999 it was centered.",
          "The 'rising sun flag', with rays, is a military ensign distinct from the civil Hinomaru.",
        ],
        subdivisions: [
          { code: "JP-13", name: "Tokyo", meta: "Metropolis" },
          { code: "JP-27", name: "Osaka", meta: "Prefecture" },
          { code: "JP-01", name: "Hokkaido", meta: "Prefecture" },
        ],
      },
      "es-ES": {
        name: "Japón",
        nameLocal: "日本",
        capital: "Tokio",
        tag: "Monarquía",
        excerpt:
          "El Hinomaru — 'disco del sol' — reduce a toda una nación a un único círculo rojo: la bandera más minimalista del mundo.",
        history:
          "El disco solar sobre fondo blanco lo usaban señores feudales y shogunes desde la Edad Media y se adoptó como pabellón de los buques mercantes en 1870. Solo en 1999, sin embargo, una ley oficializó el Hinomaru como bandera nacional, junto al himno Kimigayo.",
        context:
          "Es un ejercicio radical de síntesis: ninguna franja, ningún escudo, ninguna palabra. El nombre del país — Nihon, 'origen del sol' — es literalmente el diseño de la bandera. Forma y significado colapsan en un solo gesto.",
        colors: [
          {
            hex: "#bc002d",
            name: "Rojo",
            keyword: "Sol",
            story:
              "El disco carmesí representa el sol, ligado a la diosa Amaterasu y al linaje imperial. El tono oficial se fijó en 1999.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Pureza",
            story:
              "El campo blanco simboliza honestidad y pureza, virtudes centrales de la tradición japonesa.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Hinomaru",
            text: "El 'disco del sol' está centrado; su diámetro es tres quintos de la altura de la bandera.",
          },
          {
            x: 50,
            y: 30,
            title: "Campo blanco",
            text: "Sin ornamentos: el vacío es parte del significado, aislando el sol.",
          },
        ],
        timeline: [
          {
            year: 701,
            label: "Estandarte solar de la corte",
            flag: { svg: "EVO_JP_700" },
            note: "La corte de Mommu usa un estandarte con el sol en ceremonias de Año Nuevo.",
            reasons: [
              "Asociar al emperador con la diosa solar Amaterasu",
              "Marcar a Japón como 'tierra del sol naciente'",
            ],
          },
          {
            year: 1870,
            label: "Pabellón mercante",
            flag: "JP",
            note: "El disco rojo sobre blanco se define como bandera de los buques mercantes.",
            reasons: [
              "Dar al Japón Meiji un símbolo naval moderno",
              "Estandarizar el emblema usado por clanes feudales",
            ],
          },
          {
            year: 1999,
            label: "Ley de la Bandera y el Himno",
            flag: "JP",
            note: "El Hinomaru se oficializa finalmente por ley como bandera nacional.",
            reasons: [
              "Acabar con la ambigüedad legal sobre el símbolo",
              "Fijar oficialmente las proporciones y el tono de rojo",
            ],
          },
        ],
        trivia: [
          "Durante más de un siglo el Hinomaru fue la bandera de facto sin haber sido nunca oficializada por ley.",
          "Originalmente el disco estaba algo desplazado hacia el mástil; en 1999 se centró.",
          "La 'bandera del sol naciente', con rayos, es un pabellón militar distinto del Hinomaru civil.",
        ],
        subdivisions: [
          { code: "JP-13", name: "Tokio", meta: "Metrópoli" },
          { code: "JP-27", name: "Osaka", meta: "Prefectura" },
          { code: "JP-01", name: "Hokkaido", meta: "Prefectura" },
        ],
      },
    },
  },
  {
    code: "CN",
    slug: "china",
    region: "asia",
    ratio: "2 / 3",
    adopted: 1949,
    dominantColors: ["red", "gold"],
    symbols: ["star"],
    related: ["japao", "coreia-do-sul"],
    flag: "CN",
    content: {
      "pt-BR": {
        name: "China",
        nameLocal: "中国",
        capital: "Pequim",
        tag: "República",
        excerpt:
          "Cinco estrelas douradas sobre vermelho: o povo agregado em torno do Partido, desenhado por um cidadão comum.",
        history:
          "A 'Bandeira Vermelha das Cinco Estrelas' foi adotada em 1949, com a fundação da República Popular. O desenho, escolhido em concurso público, é de Zeng Liansong, um economista de Xangai.",
        context:
          "A composição é uma metáfora de poder: a estrela maior é o Partido Comunista; as quatro menores, as classes populares, todas orientadas em direção à grande. Unidade hierárquica em forma geométrica.",
        colors: [
          {
            hex: "#de2910",
            name: "Vermelho",
            keyword: "Revolução",
            story: "Cor da revolução comunista e, tradicionalmente, da sorte e da nação Han.",
          },
          {
            hex: "#ffde00",
            name: "Ouro",
            keyword: "Luz",
            story: "As cinco estrelas amarelas brilham sobre o vermelho, evocando luz e o povo chinês.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 28,
            title: "Estrela maior",
            text: "Representa o Partido Comunista da China, guiando as demais.",
          },
          {
            x: 30,
            y: 25,
            title: "Quatro estrelas menores",
            text: "As classes populares — operários, camponeses, pequena burguesia e burguesia nacional.",
          },
        ],
        timeline: [
          {
            year: 1949,
            label: "República Popular",
            flag: "CN",
            note: "A bandeira das cinco estrelas é hasteada na fundação da RPC em 1º de outubro.",
            reasons: [
              "Simbolizar a unidade do povo sob o Partido",
              "Substituir a bandeira da República nacionalista",
            ],
          },
        ],
        trivia: [
          "O autor, Zeng Liansong, era um cidadão comum que enviou o desenho a um concurso público.",
          "Cada estrela menor tem uma das pontas apontada para o centro da estrela maior.",
        ],
        subdivisions: [
          { code: "CN-BJ", name: "Pequim", meta: "Município" },
          { code: "CN-SH", name: "Xangai", meta: "Município" },
          { code: "CN-GD", name: "Cantão", meta: "Província" },
        ],
      },
      "en-US": {
        name: "China",
        nameLocal: "中国",
        capital: "Beijing",
        tag: "Republic",
        excerpt:
          "Five golden stars on red: the people gathered around the Party, designed by an ordinary citizen.",
        history:
          "The 'Five-star Red Flag' was adopted in 1949 with the founding of the People's Republic. The design, chosen by public contest, is by Zeng Liansong, an economist from Shanghai.",
        context:
          "The composition is a metaphor of power: the large star is the Communist Party; the four smaller ones, the popular classes, all oriented toward the great one. Hierarchical unity in geometric form.",
        colors: [
          {
            hex: "#de2910",
            name: "Red",
            keyword: "Revolution",
            story: "The color of the communist revolution and, traditionally, of luck and the Han nation.",
          },
          {
            hex: "#ffde00",
            name: "Gold",
            keyword: "Light",
            story: "The five yellow stars shine over the red, evoking light and the Chinese people.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 28,
            title: "Large star",
            text: "Represents the Communist Party of China, guiding the others.",
          },
          {
            x: 30,
            y: 25,
            title: "Four smaller stars",
            text: "The popular classes — workers, peasants, petite bourgeoisie and national bourgeoisie.",
          },
        ],
        timeline: [
          {
            year: 1949,
            label: "People's Republic",
            flag: "CN",
            note: "The five-star flag is raised at the founding of the PRC on 1 October.",
            reasons: [
              "Symbolize the unity of the people under the Party",
              "Replace the flag of the Nationalist Republic",
            ],
          },
        ],
        trivia: [
          "The author, Zeng Liansong, was an ordinary citizen who submitted the design to a public contest.",
          "Each smaller star has one of its points aimed at the center of the large star.",
        ],
        subdivisions: [
          { code: "CN-BJ", name: "Beijing", meta: "Municipality" },
          { code: "CN-SH", name: "Shanghai", meta: "Municipality" },
          { code: "CN-GD", name: "Guangdong", meta: "Province" },
        ],
      },
      "es-ES": {
        name: "China",
        nameLocal: "中国",
        capital: "Pekín",
        tag: "República",
        excerpt:
          "Cinco estrellas doradas sobre rojo: el pueblo agregado en torno al Partido, diseñado por un ciudadano común.",
        history:
          "La 'Bandera Roja de las Cinco Estrellas' se adoptó en 1949, con la fundación de la República Popular. El diseño, elegido por concurso público, es de Zeng Liansong, un economista de Shanghái.",
        context:
          "La composición es una metáfora del poder: la estrella mayor es el Partido Comunista; las cuatro menores, las clases populares, todas orientadas hacia la grande. Unidad jerárquica en forma geométrica.",
        colors: [
          {
            hex: "#de2910",
            name: "Rojo",
            keyword: "Revolución",
            story: "Color de la revolución comunista y, tradicionalmente, de la suerte y la nación Han.",
          },
          {
            hex: "#ffde00",
            name: "Oro",
            keyword: "Luz",
            story: "Las cinco estrellas amarillas brillan sobre el rojo, evocando luz y al pueblo chino.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 28,
            title: "Estrella mayor",
            text: "Representa al Partido Comunista de China, guiando a las demás.",
          },
          {
            x: 30,
            y: 25,
            title: "Cuatro estrellas menores",
            text: "Las clases populares — obreros, campesinos, pequeña burguesía y burguesía nacional.",
          },
        ],
        timeline: [
          {
            year: 1949,
            label: "República Popular",
            flag: "CN",
            note: "La bandera de las cinco estrellas se iza en la fundación de la RPC el 1 de octubre.",
            reasons: [
              "Simbolizar la unidad del pueblo bajo el Partido",
              "Sustituir la bandera de la República nacionalista",
            ],
          },
        ],
        trivia: [
          "El autor, Zeng Liansong, era un ciudadano común que envió el diseño a un concurso público.",
          "Cada estrella menor tiene una de sus puntas apuntada al centro de la estrella mayor.",
        ],
        subdivisions: [
          { code: "CN-BJ", name: "Pekín", meta: "Municipio" },
          { code: "CN-SH", name: "Shanghái", meta: "Municipio" },
          { code: "CN-GD", name: "Cantón", meta: "Provincia" },
        ],
      },
    },
  },
  {
    code: "IN",
    slug: "india",
    region: "asia",
    ratio: "2 / 3",
    adopted: 1947,
    dominantColors: ["gold", "white", "green"],
    symbols: ["disc"],
    related: ["china", "reino-unido"],
    flag: "IN",
    content: {
      "pt-BR": {
        name: "Índia",
        nameLocal: "भारत",
        capital: "Nova Délhi",
        tag: "República",
        excerpt:
          "Açafrão, branco e verde com a roda de Ashoka no centro — uma bandeira que substituiu a roca de fiar pela lei eterna.",
        history:
          "Adotada em julho de 1947, às vésperas da independência, a tricolor deriva da bandeira do Congresso Nacional Indiano. A roca de fiar de Gandhi foi substituída pelo Ashoka Chakra, a roda de 24 raios do imperador Ashoka.",
        context:
          "A troca da roca pela roda foi uma decisão sutil: de símbolo de protesto econômico para princípio universal de movimento e justiça (dharma). A bandeira fala de ética, não de partido.",
        colors: [
          {
            hex: "#ff9933",
            name: "Açafrão",
            keyword: "Coragem",
            story: "Representa coragem e sacrifício; tradicionalmente ligado à renúncia hindu e sikh.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Verdade",
            story: "Paz e verdade; abriga a roda azul-marinho de Ashoka.",
          },
          {
            hex: "#138808",
            name: "Verde",
            keyword: "Fé",
            story: "Fé, fertilidade e prosperidade da terra indiana.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Ashoka Chakra",
            text: "A 'roda da lei' com 24 raios, do leão-capitel de Ashoka em Sarnath.",
          },
        ],
        timeline: [
          {
            year: 1947,
            label: "Tricolor da independência",
            flag: "IN",
            note: "A Assembleia Constituinte adota a tricolor com o Chakra dias antes da independência.",
            reasons: [
              "Tornar a bandeira aceitável a todas as comunidades",
              "Substituir a roca partidária por um símbolo universal",
            ],
          },
        ],
        trivia: [
          "A roda tem exatos 24 raios, um para cada hora do dia, simbolizando movimento contínuo.",
          "Por lei, a bandeira oficial deve ser tecida em khadi, o tecido artesanal de Gandhi.",
        ],
        subdivisions: [
          { code: "IN-MH", name: "Maharashtra", meta: "Estado" },
          { code: "IN-UP", name: "Uttar Pradesh", meta: "Estado" },
          { code: "IN-TN", name: "Tamil Nadu", meta: "Estado" },
        ],
      },
      "en-US": {
        name: "India",
        nameLocal: "भारत",
        capital: "New Delhi",
        tag: "Republic",
        excerpt:
          "Saffron, white and green with the wheel of Ashoka at the center — a flag that replaced the spinning wheel with eternal law.",
        history:
          "Adopted in July 1947 on the eve of independence, the tricolor derives from the flag of the Indian National Congress. Gandhi's spinning wheel was replaced by the Ashoka Chakra, the 24-spoke wheel of Emperor Ashoka.",
        context:
          "Swapping the spinning wheel for the wheel was a subtle decision: from a symbol of economic protest to a universal principle of motion and justice (dharma). The flag speaks of ethics, not party.",
        colors: [
          {
            hex: "#ff9933",
            name: "Saffron",
            keyword: "Courage",
            story: "Represents courage and sacrifice; traditionally tied to Hindu and Sikh renunciation.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Truth",
            story: "Peace and truth; it hosts the navy-blue wheel of Ashoka.",
          },
          {
            hex: "#138808",
            name: "Green",
            keyword: "Faith",
            story: "Faith, fertility and the prosperity of the Indian land.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Ashoka Chakra",
            text: "The 'wheel of law' with 24 spokes, from Ashoka's lion capital at Sarnath.",
          },
        ],
        timeline: [
          {
            year: 1947,
            label: "Independence tricolor",
            flag: "IN",
            note: "The Constituent Assembly adopts the tricolor with the Chakra days before independence.",
            reasons: [
              "Make the flag acceptable to all communities",
              "Replace the party spinning wheel with a universal symbol",
            ],
          },
        ],
        trivia: [
          "The wheel has exactly 24 spokes, one for each hour of the day, symbolizing continuous motion.",
          "By law, the official flag must be woven from khadi, Gandhi's handspun cloth.",
        ],
        subdivisions: [
          { code: "IN-MH", name: "Maharashtra", meta: "State" },
          { code: "IN-UP", name: "Uttar Pradesh", meta: "State" },
          { code: "IN-TN", name: "Tamil Nadu", meta: "State" },
        ],
      },
      "es-ES": {
        name: "India",
        nameLocal: "भारत",
        capital: "Nueva Delhi",
        tag: "República",
        excerpt:
          "Azafrán, blanco y verde con la rueda de Ashoka en el centro — una bandera que sustituyó la rueca por la ley eterna.",
        history:
          "Adoptada en julio de 1947, en vísperas de la independencia, la tricolor deriva de la bandera del Congreso Nacional Indio. La rueca de Gandhi fue sustituida por el Ashoka Chakra, la rueda de 24 radios del emperador Ashoka.",
        context:
          "El cambio de la rueca por la rueda fue una decisión sutil: de símbolo de protesta económica a principio universal de movimiento y justicia (dharma). La bandera habla de ética, no de partido.",
        colors: [
          {
            hex: "#ff9933",
            name: "Azafrán",
            keyword: "Coraje",
            story: "Representa coraje y sacrificio; tradicionalmente ligado a la renuncia hindú y sij.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Verdad",
            story: "Paz y verdad; alberga la rueda azul marino de Ashoka.",
          },
          {
            hex: "#138808",
            name: "Verde",
            keyword: "Fe",
            story: "Fe, fertilidad y prosperidad de la tierra india.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Ashoka Chakra",
            text: "La 'rueda de la ley' con 24 radios, del capitel del león de Ashoka en Sarnath.",
          },
        ],
        timeline: [
          {
            year: 1947,
            label: "Tricolor de la independencia",
            flag: "IN",
            note: "La Asamblea Constituyente adopta la tricolor con el Chakra días antes de la independencia.",
            reasons: [
              "Hacer la bandera aceptable para todas las comunidades",
              "Sustituir la rueca partidaria por un símbolo universal",
            ],
          },
        ],
        trivia: [
          "La rueda tiene exactamente 24 radios, uno por cada hora del día, simbolizando el movimiento continuo.",
          "Por ley, la bandera oficial debe tejerse en khadi, la tela artesanal de Gandhi.",
        ],
        subdivisions: [
          { code: "IN-MH", name: "Maharashtra", meta: "Estado" },
          { code: "IN-UP", name: "Uttar Pradesh", meta: "Estado" },
          { code: "IN-TN", name: "Tamil Nadu", meta: "Estado" },
        ],
      },
    },
  },
  {
    code: "KR",
    slug: "coreia-do-sul",
    region: "asia",
    ratio: "2 / 3",
    adopted: 1948,
    dominantColors: ["white", "red", "blue", "black"],
    symbols: ["disc"],
    related: ["japao", "china"],
    flag: "KR",
    content: {
      "pt-BR": {
        name: "Coreia do Sul",
        nameLocal: "대한민국",
        capital: "Seul",
        tag: "República",
        excerpt:
          "A Taegukgi traduz cosmologia em bandeira: o yin-yang cercado por quatro trigramas do I Ching.",
        history:
          "Criada em 1882 e padronizada em 1948, a bandeira é única no mundo por basear-se na filosofia oriental do equilíbrio. O nome significa 'bandeira do grande extremo', em referência ao taegeuk central.",
        context:
          "Cada elemento é um conceito: o círculo é a harmonia dos opostos; os quatro trigramas representam céu, terra, fogo e água. É menos um emblema nacional do que um diagrama do cosmos.",
        colors: [
          {
            hex: "#cd2e3a",
            name: "Vermelho",
            keyword: "Yang",
            story: "A metade superior do taegeuk: força positiva, calor e a energia ativa do universo.",
          },
          {
            hex: "#0047a0",
            name: "Azul",
            keyword: "Yin",
            story: "A metade inferior: força negativa, frio e a energia passiva — equilíbrio com o yang.",
          },
          {
            hex: "#000000",
            name: "Preto",
            keyword: "Trigramas",
            story: "Os quatro trigramas (geon, gon, gam, ri) representam céu, terra, água e fogo.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Pureza",
            story: "O fundo branco simboliza paz, pureza e o povo coreano.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Taegeuk",
            text: "O círculo yin-yang vermelho e azul — a harmonia dos opostos cósmicos.",
          },
          {
            x: 25,
            y: 28,
            title: "Trigrama Geon",
            text: "Três linhas inteiras: o céu, no canto superior junto ao mastro.",
          },
        ],
        timeline: [
          {
            year: 1948,
            label: "Padrão da República",
            flag: "KR",
            note: "A República da Coreia padroniza a Taegukgi como bandeira nacional.",
            reasons: [
              "Fixar as proporções do taegeuk e dos trigramas",
              "Afirmar a identidade coreana após a libertação",
            ],
          },
        ],
        trivia: [
          "É uma das únicas bandeiras nacionais derivadas de um texto filosófico, o I Ching.",
          "Dos oito trigramas possíveis, a bandeira usa apenas quatro, escolhidos por simetria.",
        ],
        subdivisions: [
          { code: "KR-11", name: "Seul", meta: "Cidade especial" },
          { code: "KR-26", name: "Busan", meta: "Cidade metropolitana" },
          { code: "KR-41", name: "Gyeonggi", meta: "Província" },
        ],
      },
      "en-US": {
        name: "South Korea",
        nameLocal: "대한민국",
        capital: "Seoul",
        tag: "Republic",
        excerpt:
          "The Taegukgi translates cosmology into a flag: the yin-yang surrounded by four trigrams of the I Ching.",
        history:
          "Created in 1882 and standardized in 1948, the flag is unique in the world for being based on the Eastern philosophy of balance. The name means 'flag of the great extremes', referring to the central taegeuk.",
        context:
          "Each element is a concept: the circle is the harmony of opposites; the four trigrams represent heaven, earth, fire and water. It is less a national emblem than a diagram of the cosmos.",
        colors: [
          {
            hex: "#cd2e3a",
            name: "Red",
            keyword: "Yang",
            story: "The upper half of the taegeuk: positive force, heat and the active energy of the universe.",
          },
          {
            hex: "#0047a0",
            name: "Blue",
            keyword: "Yin",
            story: "The lower half: negative force, cold and passive energy — in balance with the yang.",
          },
          {
            hex: "#000000",
            name: "Black",
            keyword: "Trigrams",
            story: "The four trigrams (geon, gon, gam, ri) represent heaven, earth, water and fire.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Purity",
            story: "The white field symbolizes peace, purity and the Korean people.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Taegeuk",
            text: "The red-and-blue yin-yang circle — the harmony of cosmic opposites.",
          },
          {
            x: 25,
            y: 28,
            title: "Geon trigram",
            text: "Three solid lines: heaven, in the upper corner next to the hoist.",
          },
        ],
        timeline: [
          {
            year: 1948,
            label: "Republic standard",
            flag: "KR",
            note: "The Republic of Korea standardizes the Taegukgi as the national flag.",
            reasons: [
              "Fix the proportions of the taegeuk and trigrams",
              "Assert Korean identity after liberation",
            ],
          },
        ],
        trivia: [
          "It is one of the only national flags derived from a philosophical text, the I Ching.",
          "Of the eight possible trigrams, the flag uses only four, chosen for symmetry.",
        ],
        subdivisions: [
          { code: "KR-11", name: "Seoul", meta: "Special city" },
          { code: "KR-26", name: "Busan", meta: "Metropolitan city" },
          { code: "KR-41", name: "Gyeonggi", meta: "Province" },
        ],
      },
      "es-ES": {
        name: "Corea del Sur",
        nameLocal: "대한민국",
        capital: "Seúl",
        tag: "República",
        excerpt:
          "La Taegukgi traduce la cosmología en bandera: el yin-yang rodeado por cuatro trigramas del I Ching.",
        history:
          "Creada en 1882 y estandarizada en 1948, la bandera es única en el mundo por basarse en la filosofía oriental del equilibrio. El nombre significa 'bandera de los grandes extremos', en referencia al taegeuk central.",
        context:
          "Cada elemento es un concepto: el círculo es la armonía de los opuestos; los cuatro trigramas representan cielo, tierra, fuego y agua. Es menos un emblema nacional que un diagrama del cosmos.",
        colors: [
          {
            hex: "#cd2e3a",
            name: "Rojo",
            keyword: "Yang",
            story: "La mitad superior del taegeuk: fuerza positiva, calor y la energía activa del universo.",
          },
          {
            hex: "#0047a0",
            name: "Azul",
            keyword: "Yin",
            story: "La mitad inferior: fuerza negativa, frío y energía pasiva — en equilibrio con el yang.",
          },
          {
            hex: "#000000",
            name: "Negro",
            keyword: "Trigramas",
            story: "Los cuatro trigramas (geon, gon, gam, ri) representan cielo, tierra, agua y fuego.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Pureza",
            story: "El campo blanco simboliza paz, pureza y al pueblo coreano.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Taegeuk",
            text: "El círculo yin-yang rojo y azul — la armonía de los opuestos cósmicos.",
          },
          {
            x: 25,
            y: 28,
            title: "Trigrama Geon",
            text: "Tres líneas enteras: el cielo, en la esquina superior junto al mástil.",
          },
        ],
        timeline: [
          {
            year: 1948,
            label: "Estándar de la República",
            flag: "KR",
            note: "La República de Corea estandariza la Taegukgi como bandera nacional.",
            reasons: [
              "Fijar las proporciones del taegeuk y los trigramas",
              "Afirmar la identidad coreana tras la liberación",
            ],
          },
        ],
        trivia: [
          "Es una de las únicas banderas nacionales derivadas de un texto filosófico, el I Ching.",
          "De los ocho trigramas posibles, la bandera usa solo cuatro, elegidos por simetría.",
        ],
        subdivisions: [
          { code: "KR-11", name: "Seúl", meta: "Ciudad especial" },
          { code: "KR-26", name: "Busan", meta: "Ciudad metropolitana" },
          { code: "KR-41", name: "Gyeonggi", meta: "Provincia" },
        ],
      },
    },
  },
];
