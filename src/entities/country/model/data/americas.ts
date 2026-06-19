import type { CountryRecord } from "../../types";

export const AMERICAS: CountryRecord[] = [
  {
    code: "BR",
    slug: "brasil",
    region: "americas",
    ratio: "7 / 10",
    adopted: 1889,
    dominantColors: ["green", "gold", "blue", "white"],
    symbols: ["star", "disc"],
    related: ["argentina", "portugal"],
    flag: "BR",
    content: {
      "pt-BR": {
        name: "Brasil",
        nameLocal: "Brasil",
        capital: "Brasília",
        tag: "República",
        designer: "Raimundo Teixeira Mendes",
        excerpt:
          "Verde-amarelo-azul: heráldica imperial transformada em afirmação republicana, com um céu fixo em 15 de novembro de 1889.",
        history:
          "A bandeira brasileira atual foi adotada apenas quatro dias após a proclamação da República, em 19 de novembro de 1889. O desenho aproveita a estrutura cromática da bandeira imperial, mas substitui o brasão pelo círculo celeste — decisão do líder positivista Raimundo Teixeira Mendes. Cada estrela representa um estado, na posição da constelação observada na madrugada da proclamação.",
        context:
          "É um dos raros casos em que uma bandeira republicana preserva voluntariamente a paleta da monarquia anterior. Em vez de romper, Teixeira Mendes propôs uma costura simbólica: manter o verde-amarelo familiar e substituir o brasão por um céu — gesto positivista de trocar o sagrado pelo científico.",
        colors: [
          {
            hex: "#009c3b",
            name: "Verde Brasil",
            keyword: "Bragança",
            story:
              "Cor original da Casa de Bragança, dinastia de D. Pedro I. Após a proclamação, recebeu nova leitura como representação das florestas.",
          },
          {
            hex: "#ffdf00",
            name: "Amarelo Ouro",
            keyword: "Habsburgo",
            story:
              "Vem da Casa de Habsburgo-Lorena, da Imperatriz Leopoldina. Mantida como símbolo das riquezas do país.",
          },
          {
            hex: "#002776",
            name: "Azul Noite",
            keyword: "Céu de 1889",
            story:
              "O azul do globo reproduz o céu do Rio de Janeiro em 15 de novembro de 1889, às 08h30, na proclamação da República.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Paz",
            story:
              "A faixa branca carrega a divisa positivista “Ordem e Progresso”, frase de Auguste Comte sintetizada por Benjamin Constant.",
          },
        ],
        hotspots: [
          {
            x: 18,
            y: 50,
            title: "Losango Habsburgo",
            text: "O amarelo homenageia a Imperatriz Leopoldina, da Casa de Habsburgo-Lorena.",
          },
          {
            x: 50,
            y: 50,
            title: "Globo celeste",
            text: "Reproduz o céu do Rio em 15 de novembro de 1889, às 08h30 — momento exato da Proclamação.",
          },
          {
            x: 50,
            y: 53,
            title: "Ordem e Progresso",
            text: "Versão reduzida do lema positivista de Auguste Comte.",
          },
          {
            x: 43,
            y: 35,
            title: "Sigma Octantis",
            text: "Estrela isolada acima da faixa, representa o Distrito Federal.",
          },
        ],
        timeline: [
          {
            year: 1500,
            label: "Cruz de Cristo",
            flag: { svg: "EVO_BR_1500" },
            note: "As expedições portuguesas usam o pavilhão da Ordem de Cristo.",
            reasons: [
              "Heráldica da Ordem militar que financiava as expedições",
              "Uso náutico padrão das esquadras portuguesas",
            ],
          },
          {
            year: 1822,
            label: "Império do Brasil",
            flag: { svg: "EVO_BR_1822" },
            note: "D. Pedro I institui a bandeira verde com losango amarelo e brasão imperial.",
            reasons: [
              "Unir as casas reais de Bragança e Habsburgo",
              "Romper com a iconografia portuguesa após a Independência",
            ],
          },
          {
            year: 1889,
            label: "Primeira República",
            flag: { svg: "EVO_BR_1889" },
            note: "Quatro dias após a proclamação, o brasão é substituído pelo círculo celeste.",
            reasons: [
              "Substituir o símbolo monárquico sem chocar a população",
              "Adotar uma representação científica do céu",
            ],
          },
          {
            year: 1992,
            label: "27 estrelas",
            flag: "BR",
            note: "A bandeira é atualizada para incluir as estrelas dos estados criados desde 1889.",
            reasons: ["Incorporar a criação de Tocantins (1988)", "Manter uma estrela por estado"],
          },
        ],
        trivia: [
          "O céu da bandeira é congelado no instante de 08h30 de 15 de novembro de 1889, no Rio.",
          "A estrela Sigma Octantis representa o Distrito Federal por ser visível em todo o território.",
          "A frase “Ordem e Progresso” reduz o lema positivista “O amor por princípio, a ordem por base, o progresso por fim”.",
        ],
        subdivisions: [
          { code: "BR-SP", name: "São Paulo", meta: "Estado" },
          { code: "BR-RJ", name: "Rio de Janeiro", meta: "Estado" },
          { code: "BR-MG", name: "Minas Gerais", meta: "Estado" },
          { code: "BR-RS", name: "Rio Grande do Sul", meta: "Estado" },
        ],
      },
      "en-US": {
        name: "Brazil",
        nameLocal: "Brasil",
        capital: "Brasília",
        tag: "Republic",
        designer: "Raimundo Teixeira Mendes",
        excerpt:
          "Green-yellow-blue: imperial heraldry turned into a republican statement, with a sky frozen on 15 November 1889.",
        history:
          "Brazil's current flag was adopted just four days after the proclamation of the Republic, on 19 November 1889. The design keeps the chromatic structure of the imperial flag but replaces the coat of arms with the celestial globe — the decision of Positivist leader Raimundo Teixeira Mendes. Each star marks a state, positioned as the constellation seen at dawn on proclamation day.",
        context:
          "It is one of the rare cases where a republican flag voluntarily preserves the previous monarchy's palette. Rather than break, Teixeira Mendes proposed a symbolic stitch: keep the familiar green and yellow, replace the crest with a sky — a Positivist gesture of swapping the sacred for the scientific.",
        colors: [
          {
            hex: "#009c3b",
            name: "Brazil Green",
            keyword: "Bragança",
            story:
              "The original color of the House of Bragança, Pedro I's dynasty. After the proclamation it was reread as the country's forests.",
          },
          {
            hex: "#ffdf00",
            name: "Gold Yellow",
            keyword: "Habsburg",
            story:
              "From the House of Habsburg-Lorraine, of Empress Leopoldina. Kept as a symbol of the country's riches.",
          },
          {
            hex: "#002776",
            name: "Night Blue",
            keyword: "Sky of 1889",
            story:
              "The globe's blue reproduces the Rio de Janeiro sky on 15 November 1889 at 8:30 a.m., at the proclamation.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Peace",
            story:
              "The white band carries the Positivist motto 'Ordem e Progresso', a phrase of Auguste Comte.",
          },
        ],
        hotspots: [
          {
            x: 18,
            y: 50,
            title: "Habsburg lozenge",
            text: "The yellow honors Empress Leopoldina of the House of Habsburg-Lorraine.",
          },
          {
            x: 50,
            y: 50,
            title: "Celestial globe",
            text: "It reproduces Rio's sky on 15 November 1889 at 8:30 a.m. — the exact moment of the proclamation.",
          },
          {
            x: 50,
            y: 53,
            title: "Order and Progress",
            text: "A condensed version of Auguste Comte's Positivist motto.",
          },
          {
            x: 43,
            y: 35,
            title: "Sigma Octantis",
            text: "The lone star above the band represents the Federal District.",
          },
        ],
        timeline: [
          {
            year: 1500,
            label: "Cross of Christ",
            flag: { svg: "EVO_BR_1500" },
            note: "Portuguese expeditions fly the banner of the Order of Christ.",
            reasons: [
              "Heraldry of the military order funding the expeditions",
              "Standard naval use of Portuguese fleets",
            ],
          },
          {
            year: 1822,
            label: "Empire of Brazil",
            flag: { svg: "EVO_BR_1822" },
            note: "Pedro I institutes the green flag with a yellow lozenge and imperial arms.",
            reasons: [
              "Unite the royal houses of Bragança and Habsburg",
              "Break with Portuguese iconography after independence",
            ],
          },
          {
            year: 1889,
            label: "First Republic",
            flag: { svg: "EVO_BR_1889" },
            note: "Four days after the proclamation, the crest is replaced by the celestial circle.",
            reasons: [
              "Replace the monarchic symbol without shocking the public",
              "Adopt a scientific depiction of the sky",
            ],
          },
          {
            year: 1992,
            label: "27 stars",
            flag: "BR",
            note: "The flag is updated to include the stars of states created since 1889.",
            reasons: ["Incorporate the creation of Tocantins (1988)", "Keep one star per state"],
          },
        ],
        trivia: [
          "The flag's sky is frozen at 8:30 a.m. on 15 November 1889, over Rio.",
          "The star Sigma Octantis represents the Federal District because it is visible across the whole territory.",
          "'Ordem e Progresso' condenses the Positivist motto 'Love as principle, order as basis, progress as goal'.",
        ],
        subdivisions: [
          { code: "BR-SP", name: "São Paulo", meta: "State" },
          { code: "BR-RJ", name: "Rio de Janeiro", meta: "State" },
          { code: "BR-MG", name: "Minas Gerais", meta: "State" },
          { code: "BR-RS", name: "Rio Grande do Sul", meta: "State" },
        ],
      },
      "es-ES": {
        name: "Brasil",
        nameLocal: "Brasil",
        capital: "Brasilia",
        tag: "República",
        designer: "Raimundo Teixeira Mendes",
        excerpt:
          "Verde-amarillo-azul: heráldica imperial convertida en afirmación republicana, con un cielo fijado el 15 de noviembre de 1889.",
        history:
          "La bandera actual de Brasil se adoptó apenas cuatro días después de la proclamación de la República, el 19 de noviembre de 1889. El diseño conserva la estructura cromática de la bandera imperial pero sustituye el escudo por el globo celeste — decisión del líder positivista Raimundo Teixeira Mendes. Cada estrella representa un estado, en la posición de la constelación observada al amanecer de la proclamación.",
        context:
          "Es uno de los raros casos en que una bandera republicana conserva voluntariamente la paleta de la monarquía anterior. En lugar de romper, Teixeira Mendes propuso una costura simbólica: mantener el verde-amarillo familiar y sustituir el escudo por un cielo — gesto positivista de cambiar lo sagrado por lo científico.",
        colors: [
          {
            hex: "#009c3b",
            name: "Verde Brasil",
            keyword: "Braganza",
            story:
              "Color original de la Casa de Braganza, dinastía de Pedro I. Tras la proclamación se releyó como las selvas del país.",
          },
          {
            hex: "#ffdf00",
            name: "Amarillo Oro",
            keyword: "Habsburgo",
            story:
              "Viene de la Casa de Habsburgo-Lorena, de la Emperatriz Leopoldina. Se mantuvo como símbolo de las riquezas del país.",
          },
          {
            hex: "#002776",
            name: "Azul Noche",
            keyword: "Cielo de 1889",
            story:
              "El azul del globo reproduce el cielo de Río de Janeiro el 15 de noviembre de 1889, a las 8:30, en la proclamación.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Paz",
            story:
              "La franja blanca lleva el lema positivista 'Ordem e Progresso', frase de Auguste Comte.",
          },
        ],
        hotspots: [
          {
            x: 18,
            y: 50,
            title: "Rombo Habsburgo",
            text: "El amarillo homenajea a la Emperatriz Leopoldina, de la Casa de Habsburgo-Lorena.",
          },
          {
            x: 50,
            y: 50,
            title: "Globo celeste",
            text: "Reproduce el cielo de Río el 15 de noviembre de 1889, a las 8:30 — momento exacto de la Proclamación.",
          },
          {
            x: 50,
            y: 53,
            title: "Orden y Progreso",
            text: "Versión reducida del lema positivista de Auguste Comte.",
          },
          {
            x: 43,
            y: 35,
            title: "Sigma Octantis",
            text: "La estrella aislada sobre la franja representa el Distrito Federal.",
          },
        ],
        timeline: [
          {
            year: 1500,
            label: "Cruz de Cristo",
            flag: { svg: "EVO_BR_1500" },
            note: "Las expediciones portuguesas usan el pabellón de la Orden de Cristo.",
            reasons: [
              "Heráldica de la orden militar que financiaba las expediciones",
              "Uso náutico estándar de las escuadras portuguesas",
            ],
          },
          {
            year: 1822,
            label: "Imperio de Brasil",
            flag: { svg: "EVO_BR_1822" },
            note: "Pedro I instituye la bandera verde con rombo amarillo y escudo imperial.",
            reasons: [
              "Unir las casas reales de Braganza y Habsburgo",
              "Romper con la iconografía portuguesa tras la independencia",
            ],
          },
          {
            year: 1889,
            label: "Primera República",
            flag: { svg: "EVO_BR_1889" },
            note: "Cuatro días después de la proclamación, el escudo se sustituye por el círculo celeste.",
            reasons: [
              "Sustituir el símbolo monárquico sin chocar a la población",
              "Adoptar una representación científica del cielo",
            ],
          },
          {
            year: 1992,
            label: "27 estrellas",
            flag: "BR",
            note: "La bandera se actualiza para incluir las estrellas de los estados creados desde 1889.",
            reasons: [
              "Incorporar la creación de Tocantins (1988)",
              "Mantener una estrella por estado",
            ],
          },
        ],
        trivia: [
          "El cielo de la bandera está congelado a las 8:30 del 15 de noviembre de 1889, sobre Río.",
          "La estrella Sigma Octantis representa el Distrito Federal por ser visible en todo el territorio.",
          "'Ordem e Progresso' resume el lema positivista 'El amor por principio, el orden por base, el progreso por fin'.",
        ],
        subdivisions: [
          { code: "BR-SP", name: "São Paulo", meta: "Estado" },
          { code: "BR-RJ", name: "Río de Janeiro", meta: "Estado" },
          { code: "BR-MG", name: "Minas Gerais", meta: "Estado" },
          { code: "BR-RS", name: "Río Grande del Sur", meta: "Estado" },
        ],
      },
    },
  },
  {
    code: "US",
    slug: "estados-unidos",
    region: "americas",
    ratio: "10 / 19",
    adopted: 1960,
    dominantColors: ["red", "white", "blue"],
    symbols: ["star"],
    related: ["brasil", "reino-unido"],
    flag: "US",
    content: {
      "pt-BR": {
        name: "Estados Unidos",
        capital: "Washington, D.C.",
        tag: "Federação",
        designer: "Robert G. Heft",
        excerpt:
          "Treze listras para as colônias fundadoras, cinquenta estrelas para os estados — uma bandeira que cresceu com o país.",
        history:
          "A bandeira atual é a 27ª iteração desde 1777. A versão com 50 estrelas foi desenhada por Robert G. Heft, então estudante de 17 anos, como trabalho escolar — e adotada após a entrada do Havaí na União.",
        context:
          "É um documento vivo: cresce com o país. A regra de '13 listras fixas + estrelas variáveis' foi estabelecida em 1818 para evitar uma bandeira incompreensível depois de séculos de expansão.",
        colors: [
          {
            hex: "#b22234",
            name: "Old Glory Red",
            keyword: "Coragem",
            story: "Adotado oficialmente em 1934, simboliza valor e resistência.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Pureza",
            story:
              "Representa pureza e inocência, valores invocados desde a descrição oficial de 1782.",
          },
          {
            hex: "#3c3b6e",
            name: "Old Glory Blue",
            keyword: "Vigilância",
            story: "Azul-marinho associado a vigilância, perseverança e justiça.",
          },
        ],
        hotspots: [
          {
            x: 21,
            y: 27,
            title: "Cantão",
            text: "Campo azul com 50 estrelas brancas — uma por estado, em 9 linhas alternadas de 6 e 5.",
          },
          {
            x: 70,
            y: 80,
            title: "Treze listras",
            text: "Sete vermelhas e seis brancas representam as treze colônias fundadoras.",
          },
        ],
        timeline: [
          {
            year: 1777,
            label: "Continental — 13 estrelas",
            flag: { svg: "EVO_US_1777" },
            note: "O Congresso Continental adota a primeira bandeira com 13 listras e 13 estrelas em círculo.",
            reasons: [
              "Marcar a independência das treze colônias",
              "Símbolo de unidade entre colônias antes díspares",
            ],
          },
          {
            year: 1818,
            label: "Padrão fixo",
            flag: { svg: "EVO_US_1818" },
            note: "Define-se que as 13 listras permanecem, mas estrelas serão adicionadas conforme novos estados entram.",
            reasons: ["Evitar bandeira ininteligível após expansão", "Criar sistema escalável"],
          },
          {
            year: 1912,
            label: "48 estrelas",
            flag: { svg: "EVO_US_1912" },
            note: "Arranjo retangular padronizado após adesão do Novo México e Arizona.",
            reasons: [
              "Acomodar dois novos estados",
              "Substituir arranjo desorganizado por padrão geométrico",
            ],
          },
          {
            year: 1960,
            label: "50 estrelas — Heft",
            flag: "US",
            note: "Adesão do Havaí completa a configuração atual.",
            reasons: [
              "Incluir Alasca (1959) e Havaí (1960)",
              "Adotar arranjo escalonado de 9 linhas",
            ],
          },
        ],
        trivia: [
          "A versão de 50 estrelas foi um trabalho escolar que ganhou nota B-, revisada para A após adoção oficial.",
          "Existem cinco bandeiras americanas plantadas na Lua.",
          "A bandeira nunca deve tocar o chão — códigos do U.S. Flag Code de 1942.",
        ],
        subdivisions: [],
      },
      "en-US": {
        name: "United States",
        capital: "Washington, D.C.",
        tag: "Federation",
        designer: "Robert G. Heft",
        excerpt:
          "Thirteen stripes for the founding colonies, fifty stars for the states — a flag that grew with the country.",
        history:
          "The current flag is the 27th iteration since 1777. The 50-star version was designed by Robert G. Heft, then a 17-year-old student, as a school project — adopted after Hawaii joined the Union.",
        context:
          "It is a living document: it grows with the country. The rule of '13 fixed stripes + variable stars' was set in 1818 to avoid an unreadable flag after centuries of expansion.",
        colors: [
          {
            hex: "#b22234",
            name: "Old Glory Red",
            keyword: "Valor",
            story: "Officially adopted in 1934, it symbolizes valor and hardiness.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Purity",
            story: "Represents purity and innocence, invoked since the 1782 official description.",
          },
          {
            hex: "#3c3b6e",
            name: "Old Glory Blue",
            keyword: "Vigilance",
            story: "A navy blue tied to vigilance, perseverance and justice.",
          },
        ],
        hotspots: [
          {
            x: 21,
            y: 27,
            title: "Canton",
            text: "Blue field with 50 white stars — one per state, in nine alternating rows of 6 and 5.",
          },
          {
            x: 70,
            y: 80,
            title: "Thirteen stripes",
            text: "Seven red and six white represent the thirteen founding colonies.",
          },
        ],
        timeline: [
          {
            year: 1777,
            label: "Continental — 13 stars",
            flag: { svg: "EVO_US_1777" },
            note: "The Continental Congress adopts the first flag with 13 stripes and 13 stars in a circle.",
            reasons: [
              "Mark independence of the thirteen colonies",
              "A symbol of unity among once-disparate colonies",
            ],
          },
          {
            year: 1818,
            label: "Fixed standard",
            flag: { svg: "EVO_US_1818" },
            note: "It is set that the 13 stripes remain, but stars are added as new states enter.",
            reasons: ["Avoid an unreadable flag after expansion", "Create a scalable system"],
          },
          {
            year: 1912,
            label: "48 stars",
            flag: { svg: "EVO_US_1912" },
            note: "Rectangular arrangement standardized after New Mexico and Arizona join.",
            reasons: [
              "Accommodate two new states",
              "Replace a disorganized layout with a geometric grid",
            ],
          },
          {
            year: 1960,
            label: "50 stars — Heft",
            flag: "US",
            note: "Hawaii's accession completes the current configuration.",
            reasons: [
              "Include Alaska (1959) and Hawaii (1960)",
              "Adopt a staggered nine-row arrangement",
            ],
          },
        ],
        trivia: [
          "The 50-star version was a school project that earned a B-, revised to an A after official adoption.",
          "There are five American flags planted on the Moon.",
          "The flag must never touch the ground — rules of the 1942 U.S. Flag Code.",
        ],
        subdivisions: [],
      },
      "es-ES": {
        name: "Estados Unidos",
        capital: "Washington, D.C.",
        tag: "Federación",
        designer: "Robert G. Heft",
        excerpt:
          "Trece franjas para las colonias fundadoras, cincuenta estrellas para los estados — una bandera que creció con el país.",
        history:
          "La bandera actual es la 27ª iteración desde 1777. La versión de 50 estrellas fue diseñada por Robert G. Heft, entonces estudiante de 17 años, como trabajo escolar — adoptada tras la entrada de Hawái en la Unión.",
        context:
          "Es un documento vivo: crece con el país. La regla de '13 franjas fijas + estrellas variables' se estableció en 1818 para evitar una bandera incomprensible tras siglos de expansión.",
        colors: [
          {
            hex: "#b22234",
            name: "Old Glory Red",
            keyword: "Valor",
            story: "Adoptado oficialmente en 1934, simboliza valor y resistencia.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Pureza",
            story:
              "Representa pureza e inocencia, valores invocados desde la descripción oficial de 1782.",
          },
          {
            hex: "#3c3b6e",
            name: "Old Glory Blue",
            keyword: "Vigilancia",
            story: "Un azul marino ligado a vigilancia, perseverancia y justicia.",
          },
        ],
        hotspots: [
          {
            x: 21,
            y: 27,
            title: "Cantón",
            text: "Campo azul con 50 estrellas blancas — una por estado, en nueve filas alternas de 6 y 5.",
          },
          {
            x: 70,
            y: 80,
            title: "Trece franjas",
            text: "Siete rojas y seis blancas representan las trece colonias fundadoras.",
          },
        ],
        timeline: [
          {
            year: 1777,
            label: "Continental — 13 estrellas",
            flag: { svg: "EVO_US_1777" },
            note: "El Congreso Continental adopta la primera bandera con 13 franjas y 13 estrellas en círculo.",
            reasons: [
              "Marcar la independencia de las trece colonias",
              "Símbolo de unidad entre colonias antes dispares",
            ],
          },
          {
            year: 1818,
            label: "Estándar fijo",
            flag: { svg: "EVO_US_1818" },
            note: "Se establece que las 13 franjas permanecen, pero se añaden estrellas al entrar nuevos estados.",
            reasons: [
              "Evitar una bandera ilegible tras la expansión",
              "Crear un sistema escalable",
            ],
          },
          {
            year: 1912,
            label: "48 estrellas",
            flag: { svg: "EVO_US_1912" },
            note: "Disposición rectangular estandarizada tras la adhesión de Nuevo México y Arizona.",
            reasons: [
              "Acomodar dos nuevos estados",
              "Sustituir una disposición desordenada por una cuadrícula",
            ],
          },
          {
            year: 1960,
            label: "50 estrellas — Heft",
            flag: "US",
            note: "La adhesión de Hawái completa la configuración actual.",
            reasons: [
              "Incluir Alaska (1959) y Hawái (1960)",
              "Adoptar una disposición escalonada de nueve filas",
            ],
          },
        ],
        trivia: [
          "La versión de 50 estrellas fue un trabajo escolar que sacó un B-, revisado a A tras la adopción oficial.",
          "Hay cinco banderas estadounidenses plantadas en la Luna.",
          "La bandera nunca debe tocar el suelo — reglas del U.S. Flag Code de 1942.",
        ],
        subdivisions: [],
      },
    },
  },
  {
    code: "AR",
    slug: "argentina",
    region: "americas",
    ratio: "5 / 8",
    adopted: 1818,
    dominantColors: ["blue", "white", "gold"],
    symbols: ["sun"],
    related: ["brasil", "japao"],
    flag: "AR",
    content: {
      "pt-BR": {
        name: "Argentina",
        capital: "Buenos Aires",
        tag: "República",
        designer: "Manuel Belgrano",
        excerpt:
          "Azul-celeste do céu de Buenos Aires e o sol de Maio: uma bandeira nascida durante uma batalha de independência.",
        history:
          "Criada por Manuel Belgrano em fevereiro de 1812 às margens do Rio Paraná, foi oficializada em 1816 com a independência das Províncias Unidas. O sol foi adicionado em 1818.",
        context:
          "É resultado de um ato de desobediência: Belgrano não tinha autorização para criá-la e foi processado. O Sol de Maio — figura solar inca — declara linhagem com os povos pré-colombianos.",
        colors: [
          {
            hex: "#74acdf",
            name: "Celeste",
            keyword: "Céu",
            story: "Tom adotado por Belgrano em 1812, inspirado nas faixas do 25 de Maio.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Prata",
            story: "Referencia a pureza dos ideais e o nome “Prata” do Rio.",
          },
          {
            hex: "#fcbf49",
            name: "Oro",
            keyword: "Sol Inca",
            story: "O Sol de Maio, com 32 raios, evoca Inti, divindade solar inca.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Sol de Maio",
            text: "Figura solar inca com 32 raios — 16 retos e 16 ondulados.",
          },
          { x: 50, y: 20, title: "Celeste superior", text: "Tom adotado por Belgrano em 1812." },
        ],
        timeline: [
          {
            year: 1812,
            label: "Belgrano em Rosario",
            flag: { svg: "EVO_AR_1812" },
            note: "Belgrano hasteia pela primeira vez a bandeira celeste e branca.",
            reasons: ["Identificar tropas independentistas", "Adotar cores do 25 de Maio"],
          },
          {
            year: 1818,
            label: "Sol de Maio",
            flag: "AR",
            note: "O Sol é adicionado à versão de guerra.",
            reasons: ["Homenagear a iconografia inca", "Diferenciar versão militar da civil"],
          },
        ],
        trivia: [
          "O Sol de Maio possui 16 raios retos e 16 ondulados.",
          "Belgrano foi processado por usar cores não autorizadas.",
          "A bandeira tem dois usos: cerimonial (com sol) e ornamental (sem sol).",
        ],
        subdivisions: [],
      },
      "en-US": {
        name: "Argentina",
        capital: "Buenos Aires",
        tag: "Republic",
        designer: "Manuel Belgrano",
        excerpt:
          "The celeste blue of the Buenos Aires sky and the Sun of May: a flag born during a battle for independence.",
        history:
          "Created by Manuel Belgrano in February 1812 on the banks of the Paraná, it was made official in 1816 with the independence of the United Provinces. The sun was added in 1818.",
        context:
          "It is the result of an act of disobedience: Belgrano had no authorization to create it and was prosecuted. The Sun of May — an Incan solar figure — declares kinship with pre-Columbian peoples.",
        colors: [
          {
            hex: "#74acdf",
            name: "Celeste",
            keyword: "Sky",
            story: "A hue adopted by Belgrano in 1812, inspired by the ribbons of 25 May.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Silver",
            story: "References the purity of ideals and the 'Plata' (silver) name of the river.",
          },
          {
            hex: "#fcbf49",
            name: "Gold",
            keyword: "Incan Sun",
            story: "The Sun of May, with 32 rays, evokes Inti, the Incan solar deity.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Sun of May",
            text: "An Incan solar figure with 32 rays — 16 straight and 16 wavy.",
          },
          { x: 50, y: 20, title: "Upper celeste", text: "A hue adopted by Belgrano in 1812." },
        ],
        timeline: [
          {
            year: 1812,
            label: "Belgrano at Rosario",
            flag: { svg: "EVO_AR_1812" },
            note: "Belgrano raises the celeste-and-white flag for the first time.",
            reasons: ["Identify pro-independence troops", "Adopt the colors of 25 May"],
          },
          {
            year: 1818,
            label: "Sun of May",
            flag: "AR",
            note: "The Sun is added to the war version.",
            reasons: [
              "Honor Incan iconography",
              "Distinguish the military version from the civil one",
            ],
          },
        ],
        trivia: [
          "The Sun of May has 16 straight and 16 wavy rays.",
          "Belgrano was prosecuted for using unauthorized colors.",
          "The flag has two uses: ceremonial (with sun) and ornamental (without sun).",
        ],
        subdivisions: [],
      },
      "es-ES": {
        name: "Argentina",
        capital: "Buenos Aires",
        tag: "República",
        designer: "Manuel Belgrano",
        excerpt:
          "El azul celeste del cielo de Buenos Aires y el Sol de Mayo: una bandera nacida durante una batalla de independencia.",
        history:
          "Creada por Manuel Belgrano en febrero de 1812 a orillas del río Paraná, fue oficializada en 1816 con la independencia de las Provincias Unidas. El sol se añadió en 1818.",
        context:
          "Es el resultado de un acto de desobediencia: Belgrano no tenía autorización para crearla y fue procesado. El Sol de Mayo — figura solar inca — declara linaje con los pueblos precolombinos.",
        colors: [
          {
            hex: "#74acdf",
            name: "Celeste",
            keyword: "Cielo",
            story: "Tono adoptado por Belgrano en 1812, inspirado en las cintas del 25 de Mayo.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Plata",
            story: "Referencia la pureza de los ideales y el nombre 'Plata' del río.",
          },
          {
            hex: "#fcbf49",
            name: "Oro",
            keyword: "Sol Inca",
            story: "El Sol de Mayo, con 32 rayos, evoca a Inti, divinidad solar inca.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Sol de Mayo",
            text: "Figura solar inca con 32 rayos — 16 rectos y 16 ondulados.",
          },
          { x: 50, y: 20, title: "Celeste superior", text: "Tono adoptado por Belgrano en 1812." },
        ],
        timeline: [
          {
            year: 1812,
            label: "Belgrano en Rosario",
            flag: { svg: "EVO_AR_1812" },
            note: "Belgrano iza por primera vez la bandera celeste y blanca.",
            reasons: ["Identificar tropas independentistas", "Adoptar los colores del 25 de Mayo"],
          },
          {
            year: 1818,
            label: "Sol de Mayo",
            flag: "AR",
            note: "El Sol se añade a la versión de guerra.",
            reasons: [
              "Homenajear la iconografía inca",
              "Diferenciar la versión militar de la civil",
            ],
          },
        ],
        trivia: [
          "El Sol de Mayo tiene 16 rayos rectos y 16 ondulados.",
          "Belgrano fue procesado por usar colores no autorizados.",
          "La bandera tiene dos usos: ceremonial (con sol) y ornamental (sin sol).",
        ],
        subdivisions: [],
      },
    },
  },
  {
    code: "MX",
    slug: "mexico",
    region: "americas",
    ratio: "4 / 7",
    adopted: 1968,
    dominantColors: ["green", "white", "red"],
    symbols: ["eagle", "shield"],
    related: ["estados-unidos", "espanha"],
    flag: "MX",
    content: {
      "pt-BR": {
        name: "México",
        capital: "Cidade do México",
        tag: "República",
        excerpt:
          "A águia sobre o cacto pousa em cima de um mito asteca — Tenochtitlán em forma de bandeira.",
        history:
          "A tricolor verde-branco-vermelho remonta à independência de 1821. O brasão central — uma águia devorando uma serpente sobre um cacto — encena a lenda de fundação de Tenochtitlán.",
        context:
          "Poucas bandeiras transformam um mito fundador em emblema oficial com tanta literalidade. A águia de Mexico-Tenochtitlán é, ao mesmo tempo, heráldica europeia e memória mexica.",
        colors: [
          {
            hex: "#006847",
            name: "Verde",
            keyword: "Esperança",
            story: "Esperança e independência conquistada.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Unidade",
            story: "Pureza dos ideais e unidade nacional.",
          },
          {
            hex: "#ce1126",
            name: "Vermelho",
            keyword: "Sangue",
            story: "O sangue dos heróis da independência.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Águia e serpente",
            text: "A cena da fundação de Tenochtitlán, conforme a lenda mexica.",
          },
        ],
        timeline: [
          {
            year: 1968,
            label: "Padrão atual",
            flag: "MX",
            note: "O desenho do brasão é padronizado em 1968.",
            reasons: ["Unificar o uso oficial", "Padronizar a águia heráldica"],
          },
        ],
        trivia: [
          "O brasão muda de detalhes a cada regime histórico.",
          "A lenda da águia guia a localização da capital asteca.",
        ],
        subdivisions: [],
      },
      "en-US": {
        name: "Mexico",
        capital: "Mexico City",
        tag: "Republic",
        excerpt: "The eagle on the cactus lands atop an Aztec myth — Tenochtitlán in flag form.",
        history:
          "The green-white-red tricolor dates to independence in 1821. The central emblem — an eagle devouring a serpent on a cactus — stages the founding legend of Tenochtitlán.",
        context:
          "Few flags turn a founding myth into an official emblem so literally. The eagle of Mexico-Tenochtitlán is at once European heraldry and Mexica memory.",
        colors: [
          {
            hex: "#006847",
            name: "Green",
            keyword: "Hope",
            story: "Hope and hard-won independence.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Unity",
            story: "Purity of ideals and national unity.",
          },
          {
            hex: "#ce1126",
            name: "Red",
            keyword: "Blood",
            story: "The blood of the heroes of independence.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Eagle and serpent",
            text: "The founding scene of Tenochtitlán, per Mexica legend.",
          },
        ],
        timeline: [
          {
            year: 1968,
            label: "Current standard",
            flag: "MX",
            note: "The emblem's design is standardized in 1968.",
            reasons: ["Unify official use", "Standardize the heraldic eagle"],
          },
        ],
        trivia: [
          "The emblem's details change with each historical regime.",
          "The eagle legend guided the siting of the Aztec capital.",
        ],
        subdivisions: [],
      },
      "es-ES": {
        name: "México",
        capital: "Ciudad de México",
        tag: "República",
        excerpt:
          "El águila sobre el nopal se posa sobre un mito azteca — Tenochtitlán en forma de bandera.",
        history:
          "La tricolor verde-blanco-rojo se remonta a la independencia de 1821. El emblema central — un águila devorando una serpiente sobre un nopal — escenifica la leyenda fundacional de Tenochtitlán.",
        context:
          "Pocas banderas convierten un mito fundacional en emblema oficial con tanta literalidad. El águila de México-Tenochtitlán es a la vez heráldica europea y memoria mexica.",
        colors: [
          {
            hex: "#006847",
            name: "Verde",
            keyword: "Esperanza",
            story: "Esperanza e independencia conquistada.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Unidad",
            story: "Pureza de los ideales y unidad nacional.",
          },
          {
            hex: "#ce1126",
            name: "Rojo",
            keyword: "Sangre",
            story: "La sangre de los héroes de la independencia.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Águila y serpiente",
            text: "La escena fundacional de Tenochtitlán, según la leyenda mexica.",
          },
        ],
        timeline: [
          {
            year: 1968,
            label: "Estándar actual",
            flag: "MX",
            note: "El diseño del emblema se estandariza en 1968.",
            reasons: ["Unificar el uso oficial", "Estandarizar el águila heráldica"],
          },
        ],
        trivia: [
          "Los detalles del emblema cambian con cada régimen histórico.",
          "La leyenda del águila guió la ubicación de la capital azteca.",
        ],
        subdivisions: [],
      },
    },
  },
  {
    code: "CA",
    slug: "canada",
    region: "americas",
    ratio: "1 / 2",
    adopted: 1965,
    dominantColors: ["red", "white"],
    symbols: [],
    related: ["estados-unidos", "reino-unido"],
    flag: "CA",
    content: {
      "pt-BR": {
        name: "Canadá",
        capital: "Otava",
        tag: "Monarquia",
        excerpt:
          "A folha de bordo de 11 pontas chegou em 1965 — desenhada com ajuda de testes em túnel de vento.",
        history:
          "A 'Maple Leaf' substituiu a Red Ensign canadense em 1965, após um intenso debate parlamentar conhecido como o 'Great Flag Debate'. A folha estilizada tem 11 pontas por razões puramente visuais.",
        context:
          "É um raro caso de bandeira nacional escolhida por critério estético-funcional: a folha de 11 pontas foi preferida porque permanecia nítida ao vento, testada em túnel.",
        colors: [
          {
            hex: "#ff0000",
            name: "Vermelho",
            keyword: "Sacrifício",
            story: "Cor oficial do Canadá desde 1921, ligada ao sacrifício na Primeira Guerra.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Paz",
            story: "Campo neutro que isola a folha central.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Folha de bordo",
            text: "Estilizada com 11 pontas para legibilidade ao vento.",
          },
        ],
        timeline: [
          {
            year: 1965,
            label: "Maple Leaf",
            flag: "CA",
            note: "A nova bandeira é hasteada em 15 de fevereiro de 1965.",
            reasons: [
              "Romper com símbolos coloniais britânicos",
              "Adotar um emblema nacional distinto",
            ],
          },
        ],
        trivia: [
          "A folha tem 11 pontas por motivos estéticos, não botânicos.",
          "15 de fevereiro é o Dia Nacional da Bandeira no Canadá.",
        ],
        subdivisions: [],
      },
      "en-US": {
        name: "Canada",
        capital: "Ottawa",
        tag: "Monarchy",
        excerpt:
          "The 11-point maple leaf arrived in 1965 — designed with help from wind-tunnel tests.",
        history:
          "The Maple Leaf replaced the Canadian Red Ensign in 1965, after an intense parliamentary 'Great Flag Debate'. The stylized leaf has 11 points for purely visual reasons.",
        context:
          "It is a rare case of a national flag chosen on aesthetic-functional grounds: the 11-point leaf was preferred because it stayed crisp in the wind, tested in a tunnel.",
        colors: [
          {
            hex: "#ff0000",
            name: "Red",
            keyword: "Sacrifice",
            story: "Canada's official color since 1921, tied to WWI sacrifice.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Peace",
            story: "A neutral field isolating the central leaf.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Maple leaf",
            text: "Stylized with 11 points for legibility in the wind.",
          },
        ],
        timeline: [
          {
            year: 1965,
            label: "Maple Leaf",
            flag: "CA",
            note: "The new flag is raised on 15 February 1965.",
            reasons: ["Break with British colonial symbols", "Adopt a distinct national emblem"],
          },
        ],
        trivia: [
          "The leaf has 11 points for aesthetic, not botanical, reasons.",
          "15 February is National Flag Day in Canada.",
        ],
        subdivisions: [],
      },
      "es-ES": {
        name: "Canadá",
        capital: "Ottawa",
        tag: "Monarquía",
        excerpt:
          "La hoja de arce de 11 puntas llegó en 1965 — diseñada con ayuda de pruebas en túnel de viento.",
        history:
          "La 'Maple Leaf' sustituyó al Red Ensign canadiense en 1965, tras un intenso 'Great Flag Debate' parlamentario. La hoja estilizada tiene 11 puntas por razones puramente visuales.",
        context:
          "Es un raro caso de bandera nacional elegida por criterio estético-funcional: la hoja de 11 puntas se prefirió porque se mantenía nítida al viento, probada en túnel.",
        colors: [
          {
            hex: "#ff0000",
            name: "Rojo",
            keyword: "Sacrificio",
            story: "Color oficial de Canadá desde 1921, ligado al sacrificio en la Primera Guerra.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Paz",
            story: "Campo neutro que aísla la hoja central.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Hoja de arce",
            text: "Estilizada con 11 puntas para legibilidad al viento.",
          },
        ],
        timeline: [
          {
            year: 1965,
            label: "Maple Leaf",
            flag: "CA",
            note: "La nueva bandera se iza el 15 de febrero de 1965.",
            reasons: [
              "Romper con símbolos coloniales británicos",
              "Adoptar un emblema nacional distinto",
            ],
          },
        ],
        trivia: [
          "La hoja tiene 11 puntas por razones estéticas, no botánicas.",
          "El 15 de febrero es el Día Nacional de la Bandera en Canadá.",
        ],
        subdivisions: [],
      },
    },
  },
];
