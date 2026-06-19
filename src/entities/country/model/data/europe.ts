import type { CountryRecord } from "../../types";

export const EUROPE: CountryRecord[] = [
  {
    code: "FR",
    slug: "franca",
    region: "europe",
    ratio: "2 / 3",
    adopted: 1794,
    dominantColors: ["blue", "white", "red"],
    symbols: ["tricolor"],
    related: ["italia", "alemanha"],
    flag: "FR",
    content: {
      "pt-BR": {
        name: "França",
        nameLocal: "France",
        capital: "Paris",
        tag: "República",
        designer: "Jacques-Louis David",
        excerpt:
          "Azul e vermelho de Paris ladeando o branco real: a tricolor que virou o gabarito das bandeiras revolucionárias do mundo.",
        history:
          "Nascida da Revolução Francesa, a tricolor combina o azul e o vermelho da cidade de Paris com o branco da monarquia bourbônica. A ordem vertical das faixas foi fixada em fevereiro de 1794, com proporções definidas pelo pintor Jacques-Louis David. Caiu e ressurgiu ao sabor das restaurações monárquicas até se firmar de vez com a Terceira República.",
        context:
          "Poucos objetos exportaram tanto: a divisão em três faixas iguais tornou-se gramática universal do século XIX. Itália, Bélgica, Irlanda, México e dezenas de outras nações conjugaram o mesmo verbo — três cores, uma promessa republicana.",
        colors: [
          {
            hex: "#0055a4",
            name: "Azul",
            keyword: "Paris",
            story:
              "Cor da milícia de Paris, associada a São Martinho. Junto ao vermelho, são as cores da cidade que cercou o branco do rei.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Realeza",
            story:
              "O branco da Casa de Bourbon, encaixado entre as cores parisienses — uma reconciliação simbólica entre rei e povo, em 1789.",
          },
          {
            hex: "#ef4135",
            name: "Vermelho",
            keyword: "Paris",
            story:
              "A segunda cor da cidade de Paris, ligada à Comuna e ao oriflama de São Dinis. Selava a aliança da capital com a Revolução.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 50,
            title: "Faixa azul",
            text: "Junto do mastro, herda a cor da milícia parisiense de 1789.",
          },
          {
            x: 50,
            y: 50,
            title: "Branco bourbônico",
            text: "O branco real ladeado pelas cores de Paris — rei e cidade no mesmo pano.",
          },
          {
            x: 83,
            y: 50,
            title: "Faixa vermelha",
            text: "Ligeiramente mais larga em desenhos antigos, para corrigir a ilusão de ótica ao vento.",
          },
        ],
        timeline: [
          {
            year: 1790,
            label: "Escarapela e primeiras versões",
            flag: { svg: "EVO_FR_1790" },
            note: "A escarapela tricolor circula desde 1789; surgem pavilhões com as três cores em arranjos variados.",
            reasons: [
              "Fundir as cores de Paris (azul e vermelho) ao branco real",
              "Dar à Guarda Nacional um emblema comum",
            ],
          },
          {
            year: 1794,
            label: "Tricolor vertical de David",
            flag: { svg: "EVO_FR_1794" },
            note: "A Convenção fixa a ordem azul-branco-vermelho na vertical, com proporções de Jacques-Louis David.",
            reasons: [
              "Padronizar um desenho então caótico",
              "Colocar o azul junto ao mastro por estabilidade visual",
            ],
          },
          {
            year: 1976,
            label: "Azul mais claro de Giscard",
            flag: { svg: "EVO_FR_1976" },
            note: "Giscard d'Estaing clareia o azul para harmonizar com a bandeira europeia na televisão.",
            reasons: [
              "Casar visualmente com o azul da Comunidade Europeia",
              "Melhorar o rendimento das cores em vídeo",
            ],
          },
          {
            year: 2020,
            label: "Retorno ao azul-marinho",
            flag: "FR",
            note: "O Eliseu volta discretamente ao azul-marinho histórico nas bandeiras oficiais.",
            reasons: [
              "Recuperar a tonalidade da Revolução",
              "Reforçar a identidade nacional sobre a europeia",
            ],
          },
        ],
        trivia: [
          "A faixa vermelha costumava ser desenhada um pouco mais larga para parecer igual quando a bandeira tremulava.",
          "O azul oficial oscilou entre tons claros e marinho conforme a política do presidente em exercício.",
          "A tricolor inspirou diretamente as bandeiras da Itália, da Irlanda, da Bélgica e de boa parte da América Latina.",
        ],
        subdivisions: [
          { code: "FR-IDF", name: "Île-de-France", meta: "Região" },
          { code: "FR-PAC", name: "Provence-Alpes-Côte d'Azur", meta: "Região" },
          { code: "FR-OCC", name: "Occitânia", meta: "Região" },
        ],
      },
      "en-US": {
        name: "France",
        nameLocal: "France",
        capital: "Paris",
        tag: "Republic",
        designer: "Jacques-Louis David",
        excerpt:
          "The blue and red of Paris flanking the royal white: the tricolor that became the template for the world's revolutionary flags.",
        history:
          "Born of the French Revolution, the tricolor pairs the blue and red of the city of Paris with the white of the Bourbon monarchy. The vertical order of the bands was fixed in February 1794, with proportions set by the painter Jacques-Louis David. It fell and rose with each monarchic restoration before settling permanently under the Third Republic.",
        context:
          "Few objects have been exported so widely: the division into three equal bands became a universal grammar in the 19th century. Italy, Belgium, Ireland, Mexico and dozens more conjugated the same verb — three colors, one republican promise.",
        colors: [
          {
            hex: "#0055a4",
            name: "Blue",
            keyword: "Paris",
            story:
              "The color of the Paris militia, linked to Saint Martin. With red, it forms the city colors that came to enclose the king's white.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Royalty",
            story:
              "The white of the House of Bourbon, set between the Parisian colors — a symbolic reconciliation of king and people in 1789.",
          },
          {
            hex: "#ef4135",
            name: "Red",
            keyword: "Paris",
            story:
              "The second color of the city of Paris, tied to the Commune and the oriflamme of Saint Denis. It sealed the capital's alliance with the Revolution.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 50,
            title: "Blue band",
            text: "Next to the hoist, it inherits the color of the 1789 Parisian militia.",
          },
          {
            x: 50,
            y: 50,
            title: "Bourbon white",
            text: "The royal white flanked by the colors of Paris — king and city on the same cloth.",
          },
          {
            x: 83,
            y: 50,
            title: "Red band",
            text: "Slightly wider in old designs, to correct the optical illusion in the wind.",
          },
        ],
        timeline: [
          {
            year: 1790,
            label: "Cockade and early versions",
            flag: { svg: "EVO_FR_1790" },
            note: "The tricolor cockade circulates from 1789; ensigns appear with the three colors in varied arrangements.",
            reasons: [
              "Fuse the Paris colors (blue and red) with royal white",
              "Give the National Guard a common emblem",
            ],
          },
          {
            year: 1794,
            label: "David's vertical tricolor",
            flag: { svg: "EVO_FR_1794" },
            note: "The Convention fixes the blue-white-red order vertically, with proportions by Jacques-Louis David.",
            reasons: [
              "Standardize a then-chaotic design",
              "Place blue at the hoist for visual stability",
            ],
          },
          {
            year: 1976,
            label: "Giscard's lighter blue",
            flag: { svg: "EVO_FR_1976" },
            note: "Giscard d'Estaing lightens the blue to harmonize with the European flag on television.",
            reasons: [
              "Match the blue of the European Community",
              "Improve color rendering on video",
            ],
          },
          {
            year: 2020,
            label: "Return to navy blue",
            flag: "FR",
            note: "The Élysée quietly returns to the historic navy blue on official flags.",
            reasons: [
              "Recover the shade of the Revolution",
              "Assert national identity over the European one",
            ],
          },
        ],
        trivia: [
          "The red band used to be drawn a touch wider so it would look equal when the flag waved.",
          "The official blue swung between light and navy shades depending on the sitting president's politics.",
          "The tricolor directly inspired the flags of Italy, Ireland, Belgium and much of Latin America.",
        ],
        subdivisions: [
          { code: "FR-IDF", name: "Île-de-France", meta: "Region" },
          { code: "FR-PAC", name: "Provence-Alpes-Côte d'Azur", meta: "Region" },
          { code: "FR-OCC", name: "Occitania", meta: "Region" },
        ],
      },
      "es-ES": {
        name: "Francia",
        nameLocal: "France",
        capital: "París",
        tag: "República",
        designer: "Jacques-Louis David",
        excerpt:
          "El azul y el rojo de París flanqueando el blanco real: la tricolor que se volvió plantilla de las banderas revolucionarias del mundo.",
        history:
          "Nacida de la Revolución Francesa, la tricolor combina el azul y el rojo de la ciudad de París con el blanco de la monarquía borbónica. El orden vertical de las franjas se fijó en febrero de 1794, con proporciones definidas por el pintor Jacques-Louis David. Cayó y resurgió al ritmo de las restauraciones monárquicas hasta afianzarse con la Tercera República.",
        context:
          "Pocos objetos se han exportado tanto: la división en tres franjas iguales se volvió gramática universal en el siglo XIX. Italia, Bélgica, Irlanda, México y decenas más conjugaron el mismo verbo — tres colores, una promesa republicana.",
        colors: [
          {
            hex: "#0055a4",
            name: "Azul",
            keyword: "París",
            story:
              "Color de la milicia de París, asociado a San Martín. Junto al rojo, son los colores de la ciudad que rodearon el blanco del rey.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Realeza",
            story:
              "El blanco de la Casa de Borbón, encajado entre los colores parisinos — una reconciliación simbólica entre rey y pueblo en 1789.",
          },
          {
            hex: "#ef4135",
            name: "Rojo",
            keyword: "París",
            story:
              "El segundo color de la ciudad de París, ligado a la Comuna y al oriflama de San Dionisio. Sellaba la alianza de la capital con la Revolución.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 50,
            title: "Franja azul",
            text: "Junto al mástil, hereda el color de la milicia parisina de 1789.",
          },
          {
            x: 50,
            y: 50,
            title: "Blanco borbónico",
            text: "El blanco real flanqueado por los colores de París — rey y ciudad en el mismo paño.",
          },
          {
            x: 83,
            y: 50,
            title: "Franja roja",
            text: "Algo más ancha en diseños antiguos, para corregir la ilusión óptica al viento.",
          },
        ],
        timeline: [
          {
            year: 1790,
            label: "Escarapela y primeras versiones",
            flag: { svg: "EVO_FR_1790" },
            note: "La escarapela tricolor circula desde 1789; surgen pabellones con los tres colores en disposiciones variadas.",
            reasons: [
              "Fundir los colores de París (azul y rojo) con el blanco real",
              "Dar a la Guardia Nacional un emblema común",
            ],
          },
          {
            year: 1794,
            label: "Tricolor vertical de David",
            flag: { svg: "EVO_FR_1794" },
            note: "La Convención fija el orden azul-blanco-rojo en vertical, con proporciones de Jacques-Louis David.",
            reasons: [
              "Estandarizar un diseño entonces caótico",
              "Colocar el azul junto al mástil por estabilidad visual",
            ],
          },
          {
            year: 1976,
            label: "Azul más claro de Giscard",
            flag: { svg: "EVO_FR_1976" },
            note: "Giscard d'Estaing aclara el azul para armonizar con la bandera europea en televisión.",
            reasons: [
              "Casar con el azul de la Comunidad Europea",
              "Mejorar el rendimiento del color en vídeo",
            ],
          },
          {
            year: 2020,
            label: "Vuelta al azul marino",
            flag: "FR",
            note: "El Elíseo vuelve discretamente al azul marino histórico en las banderas oficiales.",
            reasons: [
              "Recuperar el tono de la Revolución",
              "Reforzar la identidad nacional sobre la europea",
            ],
          },
        ],
        trivia: [
          "La franja roja solía dibujarse algo más ancha para parecer igual cuando la bandera ondeaba.",
          "El azul oficial osciló entre tonos claros y marino según la política del presidente de turno.",
          "La tricolor inspiró directamente las banderas de Italia, Irlanda, Bélgica y buena parte de América Latina.",
        ],
        subdivisions: [
          { code: "FR-IDF", name: "Isla de Francia", meta: "Región" },
          { code: "FR-PAC", name: "Provenza-Alpes-Costa Azul", meta: "Región" },
          { code: "FR-OCC", name: "Occitania", meta: "Región" },
        ],
      },
    },
  },
  {
    code: "PT",
    slug: "portugal",
    region: "europe",
    ratio: "2 / 3",
    adopted: 1911,
    dominantColors: ["green", "red", "gold", "white"],
    symbols: ["shield", "disc"],
    related: ["espanha", "brasil"],
    flag: "PT",
    content: {
      "pt-BR": {
        name: "Portugal",
        nameLocal: "Portugal",
        capital: "Lisboa",
        tag: "República",
        designer: "Columbano Bordalo Pinheiro",
        excerpt:
          "Verde republicano e vermelho revolucionário sob a esfera armilar dos descobrimentos — séculos de história costurados num só brasão.",
        history:
          "Adotada em 1911, após a queda da monarquia, a bandeira rompe com o azul-e-branco real ao introduzir o verde da esperança e o vermelho da revolução de 5 de outubro de 1910. Sobre a divisa repousa a esfera armilar dos descobrimentos e o escudo português, que carrega quinas e castelos de quase mil anos de história.",
        context:
          "É uma bandeira-palimpsesto: cada elemento do brasão é uma camada de tempo. Os cinco escudetes azuis lembram a vitória de Ourique (1139); os castelos, a expansão sobre o domínio mouro; a esfera armilar, o instrumento que pôs Portugal no mapa-múndi.",
        colors: [
          {
            hex: "#006600",
            name: "Verde",
            keyword: "Esperança",
            story:
              "Cor da República, ligada à esperança e à figura de Henrique, o Navegador. Foi a inovação cromática de 1911.",
          },
          {
            hex: "#ff0000",
            name: "Vermelho",
            keyword: "Revolução",
            story:
              "O vermelho da revolução de 5 de outubro de 1910, que derrubou a monarquia. Ocupa a maior parte do pano.",
          },
          {
            hex: "#ffff00",
            name: "Ouro",
            keyword: "Descobrimentos",
            story:
              "A esfera armilar dourada, instrumento náutico que simboliza a era das navegações portuguesas.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Quinas",
            story:
              "O escudo branco com as cinco quinas azuis, núcleo heráldico mais antigo do país.",
          },
        ],
        hotspots: [
          {
            x: 40,
            y: 50,
            title: "Esfera armilar",
            text: "Modelo do globo celeste usado pelos navegadores — símbolo dos descobrimentos.",
          },
          {
            x: 40,
            y: 50,
            title: "Cinco quinas",
            text: "Os cinco escudetes azuis aludem à vitória de D. Afonso Henriques em Ourique (1139).",
          },
          {
            x: 38,
            y: 38,
            title: "Castelos",
            text: "Sete castelos amarelos representam a conquista de praças sob domínio mouro.",
          },
        ],
        timeline: [
          {
            year: 1143,
            label: "Escudo de Afonso Henriques",
            flag: { svg: "EVO_PT_1143" },
            note: "O primeiro rei adota um escudo branco com cruz azul, depois cinco quinas.",
            reasons: [
              "Afirmar a independência do Condado Portucalense",
              "Comemorar a vitória de Ourique sobre os mouros",
            ],
          },
          {
            year: 1495,
            label: "Esfera armilar manuelina",
            flag: { svg: "EVO_PT_1495" },
            note: "D. Manuel I incorpora a esfera armilar, emblema pessoal e dos descobrimentos.",
            reasons: [
              "Celebrar a expansão marítima portuguesa",
              "Associar a coroa à ciência da navegação",
            ],
          },
          {
            year: 1830,
            label: "Azul e branco constitucional",
            flag: { svg: "EVO_PT_1830" },
            note: "A monarquia constitucional adota a bandeira bipartida azul e branca com a coroa.",
            reasons: [
              "Marcar a vitória liberal sobre o absolutismo",
              "Modernizar a heráldica real",
            ],
          },
          {
            year: 1911,
            label: "Verde e vermelho republicano",
            flag: "PT",
            note: "A jovem República substitui o azul-branco pelo verde-vermelho atual.",
            reasons: [
              "Romper com os símbolos da monarquia derrubada",
              "Consagrar as cores da revolução de 1910",
            ],
          },
        ],
        trivia: [
          "A escolha do verde-e-vermelho foi polêmica: críticos a acusavam de copiar cores maçônicas e carbonárias.",
          "Os sete castelos do escudo não têm número fixo na história — variou entre nove e doze antes de 1485.",
          "A esfera armilar aparece também na bandeira de São Paulo, herança do período colonial.",
        ],
        subdivisions: [
          { code: "PT-11", name: "Lisboa", meta: "Distrito" },
          { code: "PT-13", name: "Porto", meta: "Distrito" },
          { code: "PT-30", name: "Madeira", meta: "Região Autónoma" },
          { code: "PT-20", name: "Açores", meta: "Região Autónoma" },
        ],
      },
      "en-US": {
        name: "Portugal",
        nameLocal: "Portugal",
        capital: "Lisbon",
        tag: "Republic",
        designer: "Columbano Bordalo Pinheiro",
        excerpt:
          "Republican green and revolutionary red beneath the armillary sphere of the discoveries — centuries of history stitched into one coat of arms.",
        history:
          "Adopted in 1911 after the fall of the monarchy, the flag breaks with the royal blue-and-white by introducing the green of hope and the red of the revolution of 5 October 1910. Over the divide rests the armillary sphere of the discoveries and the Portuguese shield, bearing escutcheons and castles from nearly a thousand years of history.",
        context:
          "It is a palimpsest flag: each element of the arms is a layer of time. The five blue escutcheons recall the victory of Ourique (1139); the castles, the expansion over Moorish rule; the armillary sphere, the instrument that put Portugal on the world map.",
        colors: [
          {
            hex: "#006600",
            name: "Green",
            keyword: "Hope",
            story:
              "The color of the Republic, tied to hope and to Henry the Navigator. It was the chromatic innovation of 1911.",
          },
          {
            hex: "#ff0000",
            name: "Red",
            keyword: "Revolution",
            story:
              "The red of the revolution of 5 October 1910 that toppled the monarchy. It occupies the larger part of the cloth.",
          },
          {
            hex: "#ffff00",
            name: "Gold",
            keyword: "Discoveries",
            story:
              "The golden armillary sphere, a nautical instrument symbolizing the age of Portuguese navigation.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Escutcheons",
            story:
              "The white shield with five blue escutcheons, the country's oldest heraldic core.",
          },
        ],
        hotspots: [
          {
            x: 40,
            y: 50,
            title: "Armillary sphere",
            text: "A model of the celestial globe used by navigators — symbol of the discoveries.",
          },
          {
            x: 40,
            y: 50,
            title: "Five escutcheons",
            text: "The five blue escutcheons allude to Afonso Henriques' victory at Ourique (1139).",
          },
          {
            x: 38,
            y: 38,
            title: "Castles",
            text: "Seven yellow castles represent the conquest of strongholds under Moorish rule.",
          },
        ],
        timeline: [
          {
            year: 1143,
            label: "Afonso Henriques' shield",
            flag: { svg: "EVO_PT_1143" },
            note: "The first king adopts a white shield with a blue cross, later five escutcheons.",
            reasons: [
              "Assert the independence of the County of Portugal",
              "Commemorate the victory at Ourique over the Moors",
            ],
          },
          {
            year: 1495,
            label: "Manueline armillary sphere",
            flag: { svg: "EVO_PT_1495" },
            note: "Manuel I incorporates the armillary sphere, his personal emblem and that of the discoveries.",
            reasons: [
              "Celebrate Portuguese maritime expansion",
              "Tie the crown to the science of navigation",
            ],
          },
          {
            year: 1830,
            label: "Constitutional blue and white",
            flag: { svg: "EVO_PT_1830" },
            note: "The constitutional monarchy adopts the blue-and-white bicolor flag with the crown.",
            reasons: [
              "Mark the liberal victory over absolutism",
              "Modernize the royal heraldry",
            ],
          },
          {
            year: 1911,
            label: "Republican green and red",
            flag: "PT",
            note: "The young Republic replaces the blue-white with today's green-red.",
            reasons: [
              "Break with the symbols of the deposed monarchy",
              "Enshrine the colors of the 1910 revolution",
            ],
          },
        ],
        trivia: [
          "The choice of green-and-red was contentious: critics accused it of copying Masonic and Carbonari colors.",
          "The shield's seven castles had no fixed number in history — it varied between nine and twelve before 1485.",
          "The armillary sphere also appears on the flag of São Paulo, a legacy of the colonial period.",
        ],
        subdivisions: [
          { code: "PT-11", name: "Lisbon", meta: "District" },
          { code: "PT-13", name: "Porto", meta: "District" },
          { code: "PT-30", name: "Madeira", meta: "Autonomous Region" },
          { code: "PT-20", name: "Azores", meta: "Autonomous Region" },
        ],
      },
      "es-ES": {
        name: "Portugal",
        nameLocal: "Portugal",
        capital: "Lisboa",
        tag: "República",
        designer: "Columbano Bordalo Pinheiro",
        excerpt:
          "Verde republicano y rojo revolucionario bajo la esfera armilar de los descubrimientos — siglos de historia cosidos en un solo escudo.",
        history:
          "Adoptada en 1911, tras la caída de la monarquía, la bandera rompe con el azul-y-blanco real al introducir el verde de la esperanza y el rojo de la revolución del 5 de octubre de 1910. Sobre la divisa reposa la esfera armilar de los descubrimientos y el escudo portugués, que lleva quinas y castillos de casi mil años de historia.",
        context:
          "Es una bandera-palimpsesto: cada elemento del escudo es una capa de tiempo. Los cinco escuditos azules recuerdan la victoria de Ourique (1139); los castillos, la expansión sobre el dominio moro; la esfera armilar, el instrumento que puso a Portugal en el mapamundi.",
        colors: [
          {
            hex: "#006600",
            name: "Verde",
            keyword: "Esperanza",
            story:
              "Color de la República, ligado a la esperanza y a la figura de Enrique el Navegante. Fue la innovación cromática de 1911.",
          },
          {
            hex: "#ff0000",
            name: "Rojo",
            keyword: "Revolución",
            story:
              "El rojo de la revolución del 5 de octubre de 1910, que derribó la monarquía. Ocupa la mayor parte del paño.",
          },
          {
            hex: "#ffff00",
            name: "Oro",
            keyword: "Descubrimientos",
            story:
              "La esfera armilar dorada, instrumento náutico que simboliza la era de las navegaciones portuguesas.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Quinas",
            story:
              "El escudo blanco con las cinco quinas azules, núcleo heráldico más antiguo del país.",
          },
        ],
        hotspots: [
          {
            x: 40,
            y: 50,
            title: "Esfera armilar",
            text: "Modelo del globo celeste usado por los navegantes — símbolo de los descubrimientos.",
          },
          {
            x: 40,
            y: 50,
            title: "Cinco quinas",
            text: "Los cinco escuditos azules aluden a la victoria de Afonso Henriques en Ourique (1139).",
          },
          {
            x: 38,
            y: 38,
            title: "Castillos",
            text: "Siete castillos amarillos representan la conquista de plazas bajo dominio moro.",
          },
        ],
        timeline: [
          {
            year: 1143,
            label: "Escudo de Afonso Henriques",
            flag: { svg: "EVO_PT_1143" },
            note: "El primer rey adopta un escudo blanco con cruz azul, luego cinco quinas.",
            reasons: [
              "Afirmar la independencia del Condado Portucalense",
              "Conmemorar la victoria de Ourique sobre los moros",
            ],
          },
          {
            year: 1495,
            label: "Esfera armilar manuelina",
            flag: { svg: "EVO_PT_1495" },
            note: "Manuel I incorpora la esfera armilar, emblema personal y de los descubrimientos.",
            reasons: [
              "Celebrar la expansión marítima portuguesa",
              "Asociar la corona a la ciencia de la navegación",
            ],
          },
          {
            year: 1830,
            label: "Azul y blanco constitucional",
            flag: { svg: "EVO_PT_1830" },
            note: "La monarquía constitucional adopta la bandera bipartida azul y blanca con la corona.",
            reasons: [
              "Marcar la victoria liberal sobre el absolutismo",
              "Modernizar la heráldica real",
            ],
          },
          {
            year: 1911,
            label: "Verde y rojo republicano",
            flag: "PT",
            note: "La joven República sustituye el azul-blanco por el verde-rojo actual.",
            reasons: [
              "Romper con los símbolos de la monarquía derrocada",
              "Consagrar los colores de la revolución de 1910",
            ],
          },
        ],
        trivia: [
          "La elección del verde-y-rojo fue polémica: los críticos la acusaban de copiar colores masónicos y carbonarios.",
          "Los siete castillos del escudo no tienen número fijo en la historia — varió entre nueve y doce antes de 1485.",
          "La esfera armilar aparece también en la bandera de São Paulo, herencia del período colonial.",
        ],
        subdivisions: [
          { code: "PT-11", name: "Lisboa", meta: "Distrito" },
          { code: "PT-13", name: "Oporto", meta: "Distrito" },
          { code: "PT-30", name: "Madeira", meta: "Región Autónoma" },
          { code: "PT-20", name: "Azores", meta: "Región Autónoma" },
        ],
      },
    },
  },
  {
    code: "DE",
    slug: "alemanha",
    region: "europe",
    ratio: "3 / 5",
    adopted: 1949,
    dominantColors: ["black", "red", "gold"],
    symbols: ["tricolor"],
    related: ["franca", "italia"],
    flag: "DE",
    content: {
      "pt-BR": {
        name: "Alemanha",
        nameLocal: "Deutschland",
        capital: "Berlim",
        tag: "República",
        excerpt:
          "Preto, vermelho e ouro: as cores liberais de 1848 que ressurgiram da ruína de duas ditaduras para definir a democracia alemã.",
        history:
          "As cores remontam aos uniformes do Corpo Franco de Lützow nas guerras napoleônicas e às reivindicações liberais da revolução de 1848. Banidas pelo Império e pelo nazismo, foram restauradas em 1949 como bandeira da República Federal — um gesto deliberado de filiação à tradição democrática, não à imperial.",
        context:
          "Poucas bandeiras carregam tanta política na escolha das cores. Optar pelo preto-vermelho-ouro, e não pelo preto-branco-vermelho imperial, foi declarar de que lado da história a nova Alemanha queria estar.",
        colors: [
          {
            hex: "#000000",
            name: "Preto",
            keyword: "Lützow",
            story:
              "Vem dos uniformes pretos do Corpo Franco de Lützow (1813), voluntários contra Napoleão.",
          },
          {
            hex: "#dd0000",
            name: "Vermelho",
            keyword: "1848",
            story:
              "Ligado às debruns vermelhas dos uniformes e ao sangue derramado pela liberdade na revolução de 1848.",
          },
          {
            hex: "#ffce00",
            name: "Ouro",
            keyword: "Liberdade",
            story:
              "Os botões dourados dos uniformes; simboliza a luz da liberdade ao fim da luta.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 17,
            title: "Faixa preta",
            text: "No topo, evoca o uniforme dos voluntários de Lützow contra Napoleão.",
          },
          {
            x: 50,
            y: 50,
            title: "Faixa vermelha",
            text: "O sangue da revolução liberal de 1848 e os debruns dos uniformes.",
          },
          {
            x: 50,
            y: 83,
            title: "Faixa dourada",
            text: "A luz da liberdade — fechando a leitura 'da escuridão, pelo sangue, à luz'.",
          },
        ],
        timeline: [
          {
            year: 1848,
            label: "Revolução liberal",
            flag: { svg: "EVO_DE_1848" },
            note: "O Parlamento de Frankfurt adota o preto-vermelho-ouro como símbolo da unidade alemã.",
            reasons: [
              "Unir os estados germânicos sob ideais liberais",
              "Recuperar as cores dos voluntários de 1813",
            ],
          },
          {
            year: 1919,
            label: "República de Weimar",
            flag: { svg: "EVO_DE_1919" },
            note: "A primeira república alemã readota oficialmente o tricolor liberal.",
            reasons: [
              "Romper com o preto-branco-vermelho imperial",
              "Reivindicar a herança democrática de 1848",
            ],
          },
          {
            year: 1949,
            label: "República Federal",
            flag: "DE",
            note: "Após o nazismo, a Lei Fundamental restaura o preto-vermelho-ouro.",
            reasons: [
              "Marcar a ruptura com a bandeira do Terceiro Reich",
              "Ancorar a nova democracia na tradição de 1848",
            ],
          },
        ],
        trivia: [
          "A Alemanha Oriental usou o mesmo tricolor com um brasão socialista no centro até 1990.",
          "O preto-branco-vermelho imperial é hoje associado a grupos nacionalistas, justamente por contraste.",
          "A leitura 'da escuridão pelo sangue à luz' é popular, mas posterior à criação das cores.",
        ],
        subdivisions: [
          { code: "DE-BY", name: "Baviera", meta: "Estado" },
          { code: "DE-BE", name: "Berlim", meta: "Cidade-estado" },
          { code: "DE-NW", name: "Renânia do Norte-Vestfália", meta: "Estado" },
        ],
      },
      "en-US": {
        name: "Germany",
        nameLocal: "Deutschland",
        capital: "Berlin",
        tag: "Republic",
        excerpt:
          "Black, red and gold: the liberal colors of 1848 that rose from the ruins of two dictatorships to define German democracy.",
        history:
          "The colors trace back to the uniforms of the Lützow Free Corps in the Napoleonic Wars and to the liberal demands of the 1848 revolution. Banned by the Empire and by Nazism, they were restored in 1949 as the flag of the Federal Republic — a deliberate act of allegiance to the democratic, not the imperial, tradition.",
        context:
          "Few flags carry so much politics in the choice of colors. Choosing black-red-gold over the imperial black-white-red was a declaration of which side of history the new Germany meant to stand on.",
        colors: [
          {
            hex: "#000000",
            name: "Black",
            keyword: "Lützow",
            story:
              "From the black uniforms of the Lützow Free Corps (1813), volunteers against Napoleon.",
          },
          {
            hex: "#dd0000",
            name: "Red",
            keyword: "1848",
            story:
              "Tied to the red trim of the uniforms and the blood shed for liberty in the 1848 revolution.",
          },
          {
            hex: "#ffce00",
            name: "Gold",
            keyword: "Liberty",
            story:
              "The golden buttons of the uniforms; it symbolizes the light of liberty at the end of the struggle.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 17,
            title: "Black band",
            text: "At the top, it evokes the uniform of the Lützow volunteers against Napoleon.",
          },
          {
            x: 50,
            y: 50,
            title: "Red band",
            text: "The blood of the liberal revolution of 1848 and the trim of the uniforms.",
          },
          {
            x: 50,
            y: 83,
            title: "Gold band",
            text: "The light of liberty — closing the reading 'from darkness, through blood, to light'.",
          },
        ],
        timeline: [
          {
            year: 1848,
            label: "Liberal revolution",
            flag: { svg: "EVO_DE_1848" },
            note: "The Frankfurt Parliament adopts black-red-gold as a symbol of German unity.",
            reasons: [
              "Unite the German states under liberal ideals",
              "Recover the colors of the 1813 volunteers",
            ],
          },
          {
            year: 1919,
            label: "Weimar Republic",
            flag: { svg: "EVO_DE_1919" },
            note: "The first German republic officially readopts the liberal tricolor.",
            reasons: [
              "Break with the imperial black-white-red",
              "Claim the democratic heritage of 1848",
            ],
          },
          {
            year: 1949,
            label: "Federal Republic",
            flag: "DE",
            note: "After Nazism, the Basic Law restores black-red-gold.",
            reasons: [
              "Mark the break with the Third Reich's flag",
              "Anchor the new democracy in the 1848 tradition",
            ],
          },
        ],
        trivia: [
          "East Germany used the same tricolor with a socialist emblem in the center until 1990.",
          "The imperial black-white-red is today associated with nationalist groups, precisely by contrast.",
          "The 'from darkness through blood to light' reading is popular but postdates the colors' creation.",
        ],
        subdivisions: [
          { code: "DE-BY", name: "Bavaria", meta: "State" },
          { code: "DE-BE", name: "Berlin", meta: "City-state" },
          { code: "DE-NW", name: "North Rhine-Westphalia", meta: "State" },
        ],
      },
      "es-ES": {
        name: "Alemania",
        nameLocal: "Deutschland",
        capital: "Berlín",
        tag: "República",
        excerpt:
          "Negro, rojo y oro: los colores liberales de 1848 que resurgieron de la ruina de dos dictaduras para definir la democracia alemana.",
        history:
          "Los colores se remontan a los uniformes del Cuerpo Franco de Lützow en las guerras napoleónicas y a las reivindicaciones liberales de la revolución de 1848. Prohibidos por el Imperio y por el nazismo, fueron restaurados en 1949 como bandera de la República Federal — un gesto deliberado de adhesión a la tradición democrática, no a la imperial.",
        context:
          "Pocas banderas cargan tanta política en la elección de los colores. Optar por el negro-rojo-oro, y no por el negro-blanco-rojo imperial, fue declarar de qué lado de la historia quería estar la nueva Alemania.",
        colors: [
          {
            hex: "#000000",
            name: "Negro",
            keyword: "Lützow",
            story:
              "Viene de los uniformes negros del Cuerpo Franco de Lützow (1813), voluntarios contra Napoleón.",
          },
          {
            hex: "#dd0000",
            name: "Rojo",
            keyword: "1848",
            story:
              "Ligado a los ribetes rojos de los uniformes y a la sangre derramada por la libertad en la revolución de 1848.",
          },
          {
            hex: "#ffce00",
            name: "Oro",
            keyword: "Libertad",
            story:
              "Los botones dorados de los uniformes; simboliza la luz de la libertad al final de la lucha.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 17,
            title: "Franja negra",
            text: "En lo alto, evoca el uniforme de los voluntarios de Lützow contra Napoleón.",
          },
          {
            x: 50,
            y: 50,
            title: "Franja roja",
            text: "La sangre de la revolución liberal de 1848 y los ribetes de los uniformes.",
          },
          {
            x: 50,
            y: 83,
            title: "Franja dorada",
            text: "La luz de la libertad — cerrando la lectura 'de la oscuridad, por la sangre, a la luz'.",
          },
        ],
        timeline: [
          {
            year: 1848,
            label: "Revolución liberal",
            flag: { svg: "EVO_DE_1848" },
            note: "El Parlamento de Fráncfort adopta el negro-rojo-oro como símbolo de la unidad alemana.",
            reasons: [
              "Unir los estados germánicos bajo ideales liberales",
              "Recuperar los colores de los voluntarios de 1813",
            ],
          },
          {
            year: 1919,
            label: "República de Weimar",
            flag: { svg: "EVO_DE_1919" },
            note: "La primera república alemana readopta oficialmente el tricolor liberal.",
            reasons: [
              "Romper con el negro-blanco-rojo imperial",
              "Reivindicar la herencia democrática de 1848",
            ],
          },
          {
            year: 1949,
            label: "República Federal",
            flag: "DE",
            note: "Tras el nazismo, la Ley Fundamental restaura el negro-rojo-oro.",
            reasons: [
              "Marcar la ruptura con la bandera del Tercer Reich",
              "Anclar la nueva democracia en la tradición de 1848",
            ],
          },
        ],
        trivia: [
          "Alemania Oriental usó el mismo tricolor con un escudo socialista en el centro hasta 1990.",
          "El negro-blanco-rojo imperial se asocia hoy a grupos nacionalistas, precisamente por contraste.",
          "La lectura 'de la oscuridad por la sangre a la luz' es popular, pero posterior a la creación de los colores.",
        ],
        subdivisions: [
          { code: "DE-BY", name: "Baviera", meta: "Estado" },
          { code: "DE-BE", name: "Berlín", meta: "Ciudad-estado" },
          { code: "DE-NW", name: "Renania del Norte-Westfalia", meta: "Estado" },
        ],
      },
    },
  },
  {
    code: "GB",
    slug: "reino-unido",
    region: "europe",
    ratio: "1 / 2",
    adopted: 1801,
    dominantColors: ["blue", "red", "white"],
    symbols: ["cross"],
    related: ["estados-unidos", "canada"],
    flag: "GB",
    content: {
      "pt-BR": {
        name: "Reino Unido",
        nameLocal: "United Kingdom",
        capital: "Londres",
        tag: "Monarquia",
        excerpt:
          "A Union Jack sobrepõe três cruzes patronais num só pano — uma união política desenhada como colagem heráldica.",
        history:
          "A bandeira combina a cruz de São Jorge (Inglaterra), a cruz em aspa de Santo André (Escócia) e a cruz de São Patrício (Irlanda). A versão atual nasceu em 1801, com a união da Irlanda; a anterior, de 1606, já fundira Inglaterra e Escócia sob Jaime I.",
        context:
          "É um raro caso de bandeira que documenta um processo político em camadas: cada cruz entrou em um momento de união. A assimetria proposital das aspas vermelhas e brancas revela a ordem de empilhamento — e por isso a bandeira tem um lado 'certo' para hastear.",
        colors: [
          {
            hex: "#012169",
            name: "Azul",
            keyword: "Santo André",
            story:
              "O campo azul vem da cruz em aspa de Santo André, padroeiro da Escócia.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Bordas",
            story:
              "As franjas brancas separam as cruzes e vêm tanto de Santo André quanto da borda de São Patrício.",
          },
          {
            hex: "#c8102e",
            name: "Vermelho",
            keyword: "São Jorge",
            story:
              "A cruz reta de São Jorge (Inglaterra) e a aspa de São Patrício (Irlanda) somam os vermelhos.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Cruz de São Jorge",
            text: "A cruz reta vermelha sobre branco representa a Inglaterra.",
          },
          {
            x: 25,
            y: 30,
            title: "Aspa de Santo André",
            text: "A aspa branca sobre azul é a cruz da Escócia, base do campo.",
          },
          {
            x: 75,
            y: 30,
            title: "Aspa de São Patrício",
            text: "A aspa vermelha, deslocada (contraposta), representa a Irlanda — fonte da assimetria.",
          },
        ],
        timeline: [
          {
            year: 1606,
            label: "Primeira Union Flag",
            flag: { svg: "EVO_GB_1606" },
            note: "Jaime I funde as cruzes de São Jorge e Santo André após a união das coroas.",
            reasons: [
              "Simbolizar a união pessoal de Inglaterra e Escócia",
              "Resolver disputas de precedência entre as marinhas",
            ],
          },
          {
            year: 1801,
            label: "União com a Irlanda",
            flag: "GB",
            note: "A cruz de São Patrício é acrescentada, formando a Union Jack atual.",
            reasons: [
              "Incorporar a Irlanda ao Reino Unido",
              "Combinar as três cruzes patronais num só desenho",
            ],
          },
        ],
        trivia: [
          "A bandeira tem um lado correto: a aspa branca larga deve ficar no alto, junto ao mastro.",
          "Hasteá-la de cabeça para baixo é, tecnicamente, um sinal de socorro.",
          "O País de Gales não aparece: já era principado da Inglaterra quando a bandeira foi montada.",
        ],
        subdivisions: [
          { code: "GB-ENG", name: "Inglaterra", meta: "Nação constituinte" },
          { code: "GB-SCT", name: "Escócia", meta: "Nação constituinte" },
          { code: "GB-WLS", name: "País de Gales", meta: "Nação constituinte" },
          { code: "GB-NIR", name: "Irlanda do Norte", meta: "Nação constituinte" },
        ],
      },
      "en-US": {
        name: "United Kingdom",
        nameLocal: "United Kingdom",
        capital: "London",
        tag: "Monarchy",
        excerpt:
          "The Union Jack layers three patron crosses onto a single cloth — a political union drawn as heraldic collage.",
        history:
          "The flag combines the cross of Saint George (England), the saltire of Saint Andrew (Scotland) and the cross of Saint Patrick (Ireland). The current version was born in 1801 with the union of Ireland; the earlier one, from 1606, had already merged England and Scotland under James I.",
        context:
          "It is a rare flag that documents a political process in layers: each cross entered at a moment of union. The deliberate asymmetry of the red and white saltires reveals the stacking order — which is why the flag has a 'right' way to fly.",
        colors: [
          {
            hex: "#012169",
            name: "Blue",
            keyword: "Saint Andrew",
            story:
              "The blue field comes from the saltire of Saint Andrew, patron of Scotland.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Borders",
            story:
              "The white fimbriations separate the crosses and come from both Saint Andrew and the border of Saint Patrick.",
          },
          {
            hex: "#c8102e",
            name: "Red",
            keyword: "Saint George",
            story:
              "The straight cross of Saint George (England) and the saltire of Saint Patrick (Ireland) supply the reds.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Cross of Saint George",
            text: "The straight red cross on white represents England.",
          },
          {
            x: 25,
            y: 30,
            title: "Saltire of Saint Andrew",
            text: "The white saltire on blue is Scotland's cross, the base of the field.",
          },
          {
            x: 75,
            y: 30,
            title: "Saltire of Saint Patrick",
            text: "The red saltire, offset (counterchanged), represents Ireland — the source of the asymmetry.",
          },
        ],
        timeline: [
          {
            year: 1606,
            label: "First Union Flag",
            flag: { svg: "EVO_GB_1606" },
            note: "James I merges the crosses of Saint George and Saint Andrew after the union of crowns.",
            reasons: [
              "Symbolize the personal union of England and Scotland",
              "Settle precedence disputes between the navies",
            ],
          },
          {
            year: 1801,
            label: "Union with Ireland",
            flag: "GB",
            note: "The cross of Saint Patrick is added, forming today's Union Jack.",
            reasons: [
              "Incorporate Ireland into the United Kingdom",
              "Combine the three patron crosses into one design",
            ],
          },
        ],
        trivia: [
          "The flag has a correct way up: the broad white saltire should sit on top, next to the hoist.",
          "Flying it upside down is, technically, a signal of distress.",
          "Wales does not appear: it was already a principality of England when the flag was assembled.",
        ],
        subdivisions: [
          { code: "GB-ENG", name: "England", meta: "Constituent country" },
          { code: "GB-SCT", name: "Scotland", meta: "Constituent country" },
          { code: "GB-WLS", name: "Wales", meta: "Constituent country" },
          { code: "GB-NIR", name: "Northern Ireland", meta: "Constituent country" },
        ],
      },
      "es-ES": {
        name: "Reino Unido",
        nameLocal: "United Kingdom",
        capital: "Londres",
        tag: "Monarquía",
        excerpt:
          "La Union Jack superpone tres cruces patronales en un solo paño — una unión política dibujada como collage heráldico.",
        history:
          "La bandera combina la cruz de San Jorge (Inglaterra), el aspa de San Andrés (Escocia) y la cruz de San Patricio (Irlanda). La versión actual nació en 1801, con la unión de Irlanda; la anterior, de 1606, ya había fundido Inglaterra y Escocia bajo Jacobo I.",
        context:
          "Es un raro caso de bandera que documenta un proceso político por capas: cada cruz entró en un momento de unión. La asimetría deliberada de las aspas rojas y blancas revela el orden de apilamiento — por eso la bandera tiene un lado 'correcto' para izarse.",
        colors: [
          {
            hex: "#012169",
            name: "Azul",
            keyword: "San Andrés",
            story:
              "El campo azul viene del aspa de San Andrés, patrón de Escocia.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Bordes",
            story:
              "Las franjas blancas separan las cruces y vienen tanto de San Andrés como del borde de San Patricio.",
          },
          {
            hex: "#c8102e",
            name: "Rojo",
            keyword: "San Jorge",
            story:
              "La cruz recta de San Jorge (Inglaterra) y el aspa de San Patricio (Irlanda) suman los rojos.",
          },
        ],
        hotspots: [
          {
            x: 50,
            y: 50,
            title: "Cruz de San Jorge",
            text: "La cruz recta roja sobre blanco representa a Inglaterra.",
          },
          {
            x: 25,
            y: 30,
            title: "Aspa de San Andrés",
            text: "El aspa blanca sobre azul es la cruz de Escocia, base del campo.",
          },
          {
            x: 75,
            y: 30,
            title: "Aspa de San Patricio",
            text: "El aspa roja, desplazada (contrapuesta), representa a Irlanda — fuente de la asimetría.",
          },
        ],
        timeline: [
          {
            year: 1606,
            label: "Primera Union Flag",
            flag: { svg: "EVO_GB_1606" },
            note: "Jacobo I funde las cruces de San Jorge y San Andrés tras la unión de coronas.",
            reasons: [
              "Simbolizar la unión personal de Inglaterra y Escocia",
              "Resolver disputas de precedencia entre las marinas",
            ],
          },
          {
            year: 1801,
            label: "Unión con Irlanda",
            flag: "GB",
            note: "Se añade la cruz de San Patricio, formando la Union Jack actual.",
            reasons: [
              "Incorporar Irlanda al Reino Unido",
              "Combinar las tres cruces patronales en un solo diseño",
            ],
          },
        ],
        trivia: [
          "La bandera tiene un lado correcto: el aspa blanca ancha debe quedar arriba, junto al mástil.",
          "Izarla al revés es, técnicamente, una señal de socorro.",
          "Gales no aparece: ya era un principado de Inglaterra cuando se montó la bandera.",
        ],
        subdivisions: [
          { code: "GB-ENG", name: "Inglaterra", meta: "Nación constituyente" },
          { code: "GB-SCT", name: "Escocia", meta: "Nación constituyente" },
          { code: "GB-WLS", name: "Gales", meta: "Nación constituyente" },
          { code: "GB-NIR", name: "Irlanda del Norte", meta: "Nación constituyente" },
        ],
      },
    },
  },
  {
    code: "IT",
    slug: "italia",
    region: "europe",
    ratio: "2 / 3",
    adopted: 1948,
    dominantColors: ["green", "white", "red"],
    symbols: ["tricolor"],
    related: ["franca", "espanha"],
    flag: "IT",
    content: {
      "pt-BR": {
        name: "Itália",
        nameLocal: "Italia",
        capital: "Roma",
        tag: "República",
        excerpt:
          "A tricolor verde-branco-vermelha nasceu napoleônica e virou o estandarte do Risorgimento e da unificação.",
        history:
          "Inspirada na tricolor francesa, surgiu em 1797 na República Cispadana. Tornou-se símbolo da unificação italiana no século XIX e, em 1948, foi consagrada pela Constituição republicana, sem o brasão de Savoia da era monárquica.",
        context:
          "O verde teria sido escolhido em homenagem à paisagem ou às guardas cívicas milanesas; o branco e o vermelho vêm do brasão de Milão. Mais que cores, eram um programa político de unidade.",
        colors: [
          {
            hex: "#009246",
            name: "Verde",
            keyword: "Esperança",
            story:
              "Ligado à guarda cívica de Milão e, na leitura popular, à esperança e à paisagem italiana.",
          },
          {
            hex: "#ffffff",
            name: "Branco",
            keyword: "Fé",
            story: "Do brasão de Milão; associado à fé e à neve dos Alpes.",
          },
          {
            hex: "#ce2b37",
            name: "Vermelho",
            keyword: "Caridade",
            story: "Também do brasão milanês; lido como o sangue dos mártires da unificação.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 50,
            title: "Faixa verde",
            text: "Junto ao mastro, herda a cor da guarda cívica milanesa.",
          },
          {
            x: 83,
            y: 50,
            title: "Faixa vermelha",
            text: "Fecha a tricolor com o vermelho do brasão de Milão.",
          },
        ],
        timeline: [
          {
            year: 1948,
            label: "Tricolor republicana",
            flag: "IT",
            note: "A Constituição da República adota a tricolor lisa, sem o brasão monárquico de Savoia.",
            reasons: [
              "Romper com a monarquia após o referendo de 1946",
              "Consagrar o símbolo histórico do Risorgimento",
            ],
          },
        ],
        trivia: [
          "A primeira tricolor oficial é de 1797, na República Cispadana, em Reggio Emilia.",
          "Durante a monarquia, a bandeira trazia o escudo da Casa de Savoia no centro.",
        ],
        subdivisions: [
          { code: "IT-25", name: "Lombardia", meta: "Região" },
          { code: "IT-62", name: "Lácio", meta: "Região" },
          { code: "IT-21", name: "Piemonte", meta: "Região" },
        ],
      },
      "en-US": {
        name: "Italy",
        nameLocal: "Italia",
        capital: "Rome",
        tag: "Republic",
        excerpt:
          "The green-white-red tricolor was born Napoleonic and became the banner of the Risorgimento and unification.",
        history:
          "Inspired by the French tricolor, it appeared in 1797 in the Cispadane Republic. It became the symbol of Italian unification in the 19th century and, in 1948, was enshrined by the republican Constitution, without the monarchy-era arms of Savoy.",
        context:
          "The green is said to have been chosen in homage to the landscape or to the Milanese civic guards; the white and red come from the arms of Milan. More than colors, they were a political program of unity.",
        colors: [
          {
            hex: "#009246",
            name: "Green",
            keyword: "Hope",
            story:
              "Tied to the civic guard of Milan and, in popular reading, to hope and the Italian landscape.",
          },
          {
            hex: "#ffffff",
            name: "White",
            keyword: "Faith",
            story: "From the arms of Milan; associated with faith and the snow of the Alps.",
          },
          {
            hex: "#ce2b37",
            name: "Red",
            keyword: "Charity",
            story: "Also from the Milanese arms; read as the blood of unification's martyrs.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 50,
            title: "Green band",
            text: "Next to the hoist, it inherits the color of the Milanese civic guard.",
          },
          {
            x: 83,
            y: 50,
            title: "Red band",
            text: "Closes the tricolor with the red of the arms of Milan.",
          },
        ],
        timeline: [
          {
            year: 1948,
            label: "Republican tricolor",
            flag: "IT",
            note: "The Republic's Constitution adopts the plain tricolor, without the monarchic arms of Savoy.",
            reasons: [
              "Break with the monarchy after the 1946 referendum",
              "Enshrine the historic symbol of the Risorgimento",
            ],
          },
        ],
        trivia: [
          "The first official tricolor dates to 1797, in the Cispadane Republic, at Reggio Emilia.",
          "Under the monarchy, the flag bore the shield of the House of Savoy at the center.",
        ],
        subdivisions: [
          { code: "IT-25", name: "Lombardy", meta: "Region" },
          { code: "IT-62", name: "Lazio", meta: "Region" },
          { code: "IT-21", name: "Piedmont", meta: "Region" },
        ],
      },
      "es-ES": {
        name: "Italia",
        nameLocal: "Italia",
        capital: "Roma",
        tag: "República",
        excerpt:
          "La tricolor verde-blanco-roja nació napoleónica y se convirtió en el estandarte del Risorgimento y la unificación.",
        history:
          "Inspirada en la tricolor francesa, surgió en 1797 en la República Cispadana. Se volvió símbolo de la unificación italiana en el siglo XIX y, en 1948, fue consagrada por la Constitución republicana, sin el escudo de Saboya de la era monárquica.",
        context:
          "El verde se habría elegido en homenaje al paisaje o a las guardias cívicas milanesas; el blanco y el rojo vienen del escudo de Milán. Más que colores, eran un programa político de unidad.",
        colors: [
          {
            hex: "#009246",
            name: "Verde",
            keyword: "Esperanza",
            story:
              "Ligado a la guardia cívica de Milán y, en la lectura popular, a la esperanza y al paisaje italiano.",
          },
          {
            hex: "#ffffff",
            name: "Blanco",
            keyword: "Fe",
            story: "Del escudo de Milán; asociado a la fe y a la nieve de los Alpes.",
          },
          {
            hex: "#ce2b37",
            name: "Rojo",
            keyword: "Caridad",
            story: "También del escudo milanés; leído como la sangre de los mártires de la unificación.",
          },
        ],
        hotspots: [
          {
            x: 17,
            y: 50,
            title: "Franja verde",
            text: "Junto al mástil, hereda el color de la guardia cívica milanesa.",
          },
          {
            x: 83,
            y: 50,
            title: "Franja roja",
            text: "Cierra la tricolor con el rojo del escudo de Milán.",
          },
        ],
        timeline: [
          {
            year: 1948,
            label: "Tricolor republicana",
            flag: "IT",
            note: "La Constitución de la República adopta la tricolor lisa, sin el escudo monárquico de Saboya.",
            reasons: [
              "Romper con la monarquía tras el referéndum de 1946",
              "Consagrar el símbolo histórico del Risorgimento",
            ],
          },
        ],
        trivia: [
          "La primera tricolor oficial es de 1797, en la República Cispadana, en Reggio Emilia.",
          "Bajo la monarquía, la bandera llevaba el escudo de la Casa de Saboya en el centro.",
        ],
        subdivisions: [
          { code: "IT-25", name: "Lombardía", meta: "Región" },
          { code: "IT-62", name: "Lacio", meta: "Región" },
          { code: "IT-21", name: "Piamonte", meta: "Región" },
        ],
      },
    },
  },
  {
    code: "ES",
    slug: "espanha",
    region: "europe",
    ratio: "2 / 3",
    adopted: 1981,
    dominantColors: ["red", "gold"],
    symbols: ["shield"],
    related: ["portugal", "italia"],
    flag: "ES",
    content: {
      "pt-BR": {
        name: "Espanha",
        nameLocal: "España",
        capital: "Madri",
        tag: "Monarquia",
        excerpt:
          "A 'Rojigualda' — vermelho e amarelo de origem naval — carrega o brasão que reúne os antigos reinos ibéricos.",
        history:
          "As cores foram escolhidas por Carlos III em 1785 para que a marinha espanhola fosse visível à distância no mar. O brasão atual, com Castela, Leão, Aragão, Navarra e Granada, foi fixado em 1981, na transição democrática.",
        context:
          "É um caso de cor escolhida por pragmatismo: o vermelho e o amarelo venceram um concurso naval por serem os mais distinguíveis no horizonte. Só depois ganharam carga simbólica nacional.",
        colors: [
          {
            hex: "#aa151b",
            name: "Vermelho",
            keyword: "Marinha",
            story: "Escolhido em 1785 pela alta visibilidade no mar; hoje lido como sangue e coragem.",
          },
          {
            hex: "#f1bf00",
            name: "Amarelo",
            keyword: "Ouro",
            story: "A faixa central, mais larga, abriga o brasão dos reinos unificados.",
          },
        ],
        hotspots: [
          {
            x: 38,
            y: 50,
            title: "Brasão",
            text: "Reúne os escudos de Castela, Leão, Aragão, Navarra e Granada, mais as colunas de Hércules.",
          },
          {
            x: 60,
            y: 38,
            title: "Plus Ultra",
            text: "O lema nas colunas de Hércules evoca os territórios além do estreito de Gibraltar.",
          },
        ],
        timeline: [
          {
            year: 1981,
            label: "Brasão democrático",
            flag: "ES",
            note: "O escudo é redesenhado na transição, removendo símbolos franquistas.",
            reasons: [
              "Adaptar a heráldica à monarquia constitucional",
              "Reunir os antigos reinos num só escudo",
            ],
          },
        ],
        trivia: [
          "As cores nasceram de um concurso de pavilhões navais convocado por Carlos III em 1785.",
          "As colunas de Hércules com 'Plus Ultra' aludem à expansão para além do mundo conhecido.",
        ],
        subdivisions: [
          { code: "ES-MD", name: "Madri", meta: "Comunidade Autónoma" },
          { code: "ES-CT", name: "Catalunha", meta: "Comunidade Autónoma" },
          { code: "ES-AN", name: "Andaluzia", meta: "Comunidade Autónoma" },
        ],
      },
      "en-US": {
        name: "Spain",
        nameLocal: "España",
        capital: "Madrid",
        tag: "Monarchy",
        excerpt:
          "The 'Rojigualda' — red and gold of naval origin — carries the coat of arms uniting the old Iberian kingdoms.",
        history:
          "The colors were chosen by Charles III in 1785 so the Spanish navy would be visible from a distance at sea. The current arms, with Castile, León, Aragon, Navarre and Granada, were fixed in 1981 during the democratic transition.",
        context:
          "It is a case of color chosen for pragmatism: red and gold won a naval contest for being the most distinguishable on the horizon. Only later did they gain national symbolic weight.",
        colors: [
          {
            hex: "#aa151b",
            name: "Red",
            keyword: "Navy",
            story: "Chosen in 1785 for high visibility at sea; today read as blood and courage.",
          },
          {
            hex: "#f1bf00",
            name: "Gold",
            keyword: "Gold",
            story: "The central band, wider, holds the coat of arms of the unified kingdoms.",
          },
        ],
        hotspots: [
          {
            x: 38,
            y: 50,
            title: "Coat of arms",
            text: "Gathers the shields of Castile, León, Aragon, Navarre and Granada, plus the Pillars of Hercules.",
          },
          {
            x: 60,
            y: 38,
            title: "Plus Ultra",
            text: "The motto on the Pillars of Hercules evokes the lands beyond the Strait of Gibraltar.",
          },
        ],
        timeline: [
          {
            year: 1981,
            label: "Democratic arms",
            flag: "ES",
            note: "The shield is redesigned during the transition, removing Francoist symbols.",
            reasons: [
              "Adapt the heraldry to the constitutional monarchy",
              "Gather the old kingdoms into a single shield",
            ],
          },
        ],
        trivia: [
          "The colors arose from a naval ensign contest called by Charles III in 1785.",
          "The Pillars of Hercules with 'Plus Ultra' allude to expansion beyond the known world.",
        ],
        subdivisions: [
          { code: "ES-MD", name: "Madrid", meta: "Autonomous Community" },
          { code: "ES-CT", name: "Catalonia", meta: "Autonomous Community" },
          { code: "ES-AN", name: "Andalusia", meta: "Autonomous Community" },
        ],
      },
      "es-ES": {
        name: "España",
        nameLocal: "España",
        capital: "Madrid",
        tag: "Monarquía",
        excerpt:
          "La 'Rojigualda' — rojo y gualda de origen naval — porta el escudo que reúne los antiguos reinos ibéricos.",
        history:
          "Los colores fueron elegidos por Carlos III en 1785 para que la marina española fuera visible a distancia en el mar. El escudo actual, con Castilla, León, Aragón, Navarra y Granada, se fijó en 1981, en la transición democrática.",
        context:
          "Es un caso de color elegido por pragmatismo: el rojo y el gualda ganaron un concurso naval por ser los más distinguibles en el horizonte. Solo después adquirieron carga simbólica nacional.",
        colors: [
          {
            hex: "#aa151b",
            name: "Rojo",
            keyword: "Marina",
            story: "Elegido en 1785 por su alta visibilidad en el mar; hoy leído como sangre y valor.",
          },
          {
            hex: "#f1bf00",
            name: "Gualda",
            keyword: "Oro",
            story: "La franja central, más ancha, alberga el escudo de los reinos unificados.",
          },
        ],
        hotspots: [
          {
            x: 38,
            y: 50,
            title: "Escudo",
            text: "Reúne los blasones de Castilla, León, Aragón, Navarra y Granada, más las columnas de Hércules.",
          },
          {
            x: 60,
            y: 38,
            title: "Plus Ultra",
            text: "El lema en las columnas de Hércules evoca los territorios más allá del estrecho de Gibraltar.",
          },
        ],
        timeline: [
          {
            year: 1981,
            label: "Escudo democrático",
            flag: "ES",
            note: "El escudo se rediseña en la transición, retirando símbolos franquistas.",
            reasons: [
              "Adaptar la heráldica a la monarquía constitucional",
              "Reunir los antiguos reinos en un solo escudo",
            ],
          },
        ],
        trivia: [
          "Los colores nacieron de un concurso de pabellones navales convocado por Carlos III en 1785.",
          "Las columnas de Hércules con 'Plus Ultra' aluden a la expansión más allá del mundo conocido.",
        ],
        subdivisions: [
          { code: "ES-MD", name: "Madrid", meta: "Comunidad Autónoma" },
          { code: "ES-CT", name: "Cataluña", meta: "Comunidad Autónoma" },
          { code: "ES-AN", name: "Andalucía", meta: "Comunidad Autónoma" },
        ],
      },
    },
  },
];
