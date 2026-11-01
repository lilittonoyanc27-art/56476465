import { FigureItem, DifferenceItem, ExamQuestion, FlashcardItem } from './types.ts';

// 1. REPASO RÁPIDO — ԱՐԱԳ ԿՐԿՆՈՒԹՅՈՒՆ
export const REPASO_CONCEPTOS = [
  {
    concept: "Literatura popular",
    conceptHy: "Ժողովրդական գրականություն",
    es: "Anónima, oral y puede modificarse con el paso del tiempo.",
    hy: "Հեղինակը սովորաբար անհայտ է (անանուն), փոխանցվում է բանավոր և կարող է փոփոխվել ժամանակի ընթացքում։",
    traitsEs: ["Anónima (sin autor conocido)", "Transmisión oral", "Variable (distintas versiones)", "Acompañada a veces de música"],
    traitsHy: ["Անանուն (անհայտ հեղինակ)", "Բանավոր փոխանցում", "Փոփոխական (տարբեր տարբերակներ)", "Երբեմն ուղեկցվում է երաժշտությամբ"]
  },
  {
    concept: "Literatura culta",
    conceptHy: "Հեղինակային (գիտուն) գրականություն",
    es: "Autor conocido, escrita y normalmente fija (no cambia).",
    hy: "Ունի հայտնի հեղինակ, գրավոր է և սովորաբար չի փոփոխվում (ֆիքսված տեքստ)։",
    traitsEs: ["Autor conocido", "Transmisión escrita (manuscritos, libros)", "Texto fijo y estable", "Elaboración cuidada"],
    traitsHy: ["Հայտնի հեղինակ", "Գրավոր փոխանցում (ձեռագիր, տպագիր)", "Ֆիքսված, կայուն տեքստ", "Խնամքով մշակված լեզու"]
  },
  {
    concept: "Romance",
    conceptHy: "Ռոմանս",
    es: "Poema de versos octosílabos (8 sílabas) con rima asonante en los versos pares, quedando libres los impares.",
    hy: "Ութվանկանի (8 վանկ) տողերով բանաստեղծություն․ զույգ տողերը ունեն ձայնավորային (ասոնանս) հանգ, իսկ կենտերը մնում են ազատ (առանց հանգի)։",
    traitsEs: ["Versos octosílabos (8 sílabas métricas)", "Rima asonante en versos pares", "Versos impares sueltos o libres", "Carácter narrativo o lírico"],
    traitsHy: ["8-վանկանի տողեր (octosílabos)", "Զույգ տողերի ձայնավորային հանգ (pares: asonante)", "Կենտ տողերը ազատ են (impares: libres)", "Պատմողական կամ քնարական բնույթ"]
  },
  {
    concept: "Leyenda",
    conceptHy: "Ավանդազրույց",
    es: "Relato que mezcla hechos o lugares reales con elementos fantásticos o sobrenaturales.",
    hy: "Պատմություն, որը միավորում է իրական դեպքեր կամ աշխարհագրական վայրեր երևակայական (ֆանտաստիկ) տարրերի հետ։",
    traitsEs: ["Base real (un pueblo, castillo o puente existente)", "Elementos fantásticos (fantasmas, encantos)", "Arraigo en una comunidad"],
    traitsHy: ["Իրական հիմք (գոյություն ունեցող գյուղ, ամրոց կամ կամուրջ)", "Ֆանտաստիկ տարրեր (ուրվականներ, հրաշքներ)", "Ժողովրդական ավանդություն"]
  },
  {
    concept: "Mito",
    conceptHy: "Առասպել",
    es: "Relato tradicional sobre dioses, héroes y los orígenes del mundo o fenómenos naturales.",
    hy: "Ավանդական պատմություն աստվածների, դիցաբանական հերոսների և աշխարհի ու բնության երևույթների ծագման մասին։",
    traitsEs: ["Protagonizado por dioses o seres sobrenaturales", "Explica el origen del cosmos o la naturaleza", "Carácter sagrado en su cultura original"],
    traitsHy: ["Աստվածներ և գերբնական էակներ", "Բացատրում է տիեզերքի, բնության կամ մարդու ծագումը", "Սրբազան նշանակություն իր մշակույթում"]
  },
  {
    concept: "Cuento",
    conceptHy: "Պատմվածք / Հեքիաթ",
    es: "Narración breve con pocos personajes y un argumento sencillo.",
    hy: "Կարճ պատմողական ստեղծագործություն՝ քիչ կերպարներով և պարզ սյուժեով։",
    traitsEs: ["Extensión breve", "Pocos personajes", "Trama concentrada y directa", "Puede ser popular o de autor"],
    traitsHy: ["Կարճ ծավալ", "Քիչ կերպարներ", "Հստակ և պարզ սյուժե", "Կարող է լինել ժողովրդական կամ հեղինակային"]
  },
  {
    concept: "Verso",
    conceptHy: "Չափածո",
    es: "Línea de un poema que tiene ritmo y, muchas veces, métrica regular y rima.",
    hy: "Բանաստեղծական տող, որն ունի ռիթմ, հաճախ նաև վանկային չափ և հանգ։",
    traitsEs: ["Organizado en líneas cortas (versos)", "Presencia de ritmo, acentos y pausas", "A menudo con métrica y rima"],
    traitsHy: ["Կարճ տողերով դասավորություն", "Ռիթմի, շեշտերի և դադարների առկայություն", "Հաճախ ունի հանգ և չափ"]
  },
  {
    concept: "Prosa",
    conceptHy: "Արձակ",
    es: "Lenguaje organizado en oraciones continuas y párrafos, sin métrica regular ni rima obligatoria.",
    hy: "Խոսքի կազմակերպում ամբողջական նախադասություններով և պարբերություններով, առանց կանոնավոր չափի կամ պարտադիր հանգի։",
    traitsEs: ["Ocupa todo el renglón", "Organizado en párrafos y oraciones", "Ritmo natural del habla cotidiana o narrativa"],
    traitsHy: ["Զբաղեցնում է ամբողջ տողը", "Կազմված է պարբերություններից և նախադասություններից", "Բնական շարադրանք"]
  }
];

// 2. FIGURAS LITERARIAS (3 NIVELES)
export const FIGURAS_LITERARIAS: FigureItem[] = [
  // Nivel fónico
  {
    nameEs: "Aliteración",
    nameHy: "Հնչյունախաղ (Ալիտերացիա)",
    level: "fónico",
    levelHy: "Հնչյունային մակարդակ",
    definitionEs: "Repetición reiterada de sonidos semejantes en una frase o verso para producir un efecto musical o sugestivo.",
    definitionHy: "Նման հնչյունների (հատկապես բաղաձայնների) կրկնություն մեկ տողում կամ նախադասության մեջ՝ երաժշտական կամ արտահայտիչ տպավորություն ստեղծելու համար։",
    exampleEs: "Siete serpientes silban sin cesar. / En el silencio solo se escuchaba el suave susurro.",
    exampleHy: "Յոթ օձերը շարունակ շշնջում են։ / Լռության մեջ լսվում էր միայն մեղմ շշուկը (կրկնվում է /s/ հնչյունը)։",
    keyRuleEs: "Repetición de sonidos (fonemas).",
    keyRuleHy: "Հնչյունների կրկնություն։"
  },
  {
    nameEs: "Onomatopeya",
    nameHy: "Բնաձայնություն (Օնոմատոպեա)",
    level: "fónico",
    levelHy: "Հնչյունային մակարդակ",
    definitionEs: "Palabra o expresión que imita o recrea el sonido de la realidad (animales, golpes, objetos).",
    definitionHy: "Բառ կամ արտահայտություն, որը նմանակում է բնության, կենդանիների կամ առարկաների ձայները (օրինակ՝ շան հաչոց, ժամացույցի չխկոց, պայթյուն)։",
    exampleEs: "¡Guau, guau! / ¡Tic, tac! sonaba el reloj. / ¡Plic, ploc! la lluvia golpeaba el tejado.",
    exampleHy: "¡Հաֆ-հաֆ! / ¡Չըխկ-չըխկ! խփում էր ժամացույցը։ / ¡Պլիկ, պլոկ! անձրևը հարվածում էր տանիքին։",
    keyRuleEs: "Imitación directa de sonidos reales.",
    keyRuleHy: "Իրական ձայների անմիջական նմանակում։"
  },
  {
    nameEs: "Paronomasia",
    nameHy: "Նմանահնչյունություն (Պարոնոմազիա)",
    level: "fónico",
    levelHy: "Հնչյունային մակարդակ",
    definitionEs: "Empleo de palabras con sonidos muy parecidos pero de significado completamente diferente.",
    definitionHy: "Շատ նման հնչողություն ունեցող, բայց բոլորովին տարբեր իմաստ ունեցող բառերի կիրառություն մեկ նախադասության մեջ։",
    exampleEs: "La casa no es la cosa. / El preso perdió peso. / El hombre tiene hambre.",
    exampleHy: "Տունը նույնը չէ, ինչ իրը (casa / cosa)։ / Կալանավորը քաշ կորցրեց (preso / peso)։ / Մարդը քաղցած է (hombre / hambre)։",
    keyRuleEs: "Palabras de sonido casi idéntico y significado distinto.",
    keyRuleHy: "Նմանահունչ, բայց տարբեր իմաստ ունեցող բառեր։"
  },
  {
    nameEs: "Epanadiplosis",
    nameHy: "Էպանադիպլոզիս (Շրջակա կրկնություն)",
    level: "fónico",
    levelHy: "Հնչյունային մակարդակ",
    definitionEs: "Repetición de la misma palabra al principio y al final del mismo verso o frase.",
    definitionHy: "Նույն բառի կրկնություն մեկ տողի կամ նախադասության հենց սկզբում և վերջում։",
    exampleEs: "Canto, mi vida es un canto. / Sueño, todo termina en un sueño.",
    exampleHy: "Երգ, իմ կյանքը մի երգ է։ / Երազ, ամեն ինչ ավարտվում է երազով։",
    keyRuleEs: "Misma palabra al principio y al final de una sola frase o verso.",
    keyRuleHy: "Նույն բառը նախադասության կամ տողի սկզբում և վերջում։"
  },

  // Nivel morfosintáctico
  {
    nameEs: "Hipérbaton",
    nameHy: "Շրջուն շարադասություն (Հիպերբատոն)",
    level: "morfosintáctico",
    levelHy: "Շարահյուսական մակարդակ",
    definitionEs: "Alteración o cambio del orden lógico y habitual de las palabras en la oración (Sujeto + Verbo + Complementos).",
    definitionHy: "Բառերի բնական և սովորական շարադասության (Ենթակա + Ստորոգյալ + Լրացումներ) խախտում կամ փոփոխություն։",
    exampleEs: "A la niña el cuento leía su madre. (Orden lógico: Su madre leía el cuento a la niña). / Del monte en la ladera crece un árbol.",
    exampleHy: "Աղջկան հեքիաթը կարդում էր մայրը (Սովորական շարադասություն՝ Մայրը կարդում էր հեքիաթը աղջկան)։",
    keyRuleEs: "Cambio del orden habitual de las palabras.",
    keyRuleHy: "Բառերի սովորական շարադասության փոփոխություն։"
  },
  {
    nameEs: "Anáfora",
    nameHy: "Անաֆորա (Սկզբնակրկնություն)",
    level: "morfosintáctico",
    levelHy: "Շարահյուսական մակարդակ",
    definitionEs: "Repetición intencionada de una o más palabras al comienzo de varios versos o frases sucesivas.",
    definitionHy: "Մեկ կամ մի քանի բառերի միտումնավոր կրկնություն իրար հաջորդող մի քանի տողերի կամ նախադասությունների սկզբում։",
    exampleEs: "Te busco por las calles. / Te busco por los parques. // Quiero aprender. / Quiero jugar. / Quiero ganar.",
    exampleHy: "Քեզ փնտրում եմ փողոցներում։ / Քեզ փնտրում եմ այգիներում։ // Ուզում եմ սովորել։ / Ուզում եմ խաղալ։ / Ուզում եմ հաղթել։",
    keyRuleEs: "Repetición al comienzo de varias oraciones o versos.",
    keyRuleHy: "Կրկնություն մի քանի տողերի կամ նախադասությունների սկզբում։"
  },
  {
    nameEs: "Asíndeton",
    nameHy: "Անշաղկապություն (Ասինդետոն)",
    level: "morfosintáctico",
    levelHy: "Շարահյուսական մակարդակ",
    definitionEs: "Omisión o eliminación de conjunciones (como «y», «e», «ni») entre elementos, dando dinamismo y rapidez.",
    definitionHy: "Շաղկապների (օրինակ՝ «և», «ու», «ոչ էլ») բացթողում համասեռ անդամների միջև՝ խոսքին արագություն և աշխուժություն հաղորդելու համար։",
    exampleEs: "Corre, salta, ríe, sueña. / Estudia, lee, escribe.",
    exampleHy: "Վազում է, ցատկում, ծիծաղում, երազում (առանց «և» շաղկապի)։",
    keyRuleEs: "Eliminación de conjunciones.",
    keyRuleHy: "Շաղկապների բացակայություն։"
  },
  {
    nameEs: "Polisíndeton",
    nameHy: "Բազմաշաղկապություն (Պոլիսինդետոն)",
    level: "morfosintáctico",
    levelHy: "Շարահյուսական մակարդակ",
    definitionEs: "Repetición constante e innecesaria de conjunciones («y», «ni») para dar lentitud, solemnidad o acumulación.",
    definitionHy: "Շաղկապների («y», «ni») բազմակի և միտումնավոր կրկնություն՝ խոսքին ծանրություն, շեշտվածություն կամ դանդաղություն հաղորդելու համար։",
    exampleEs: "Y corre y salta y juega y canta. / Ni come ni bebe ni duerme.",
    exampleHy: "Եվ վազում է, և ցատկում է, և խաղում է, և երգում է։ / Ոչ ուտում է, ոչ խմում, ոչ էլ քնում։",
    keyRuleEs: "Repetición reiterada de conjunciones.",
    keyRuleHy: "Շաղկապների բազմակի կրկնություն։"
  },
  {
    nameEs: "Enumeración",
    nameHy: "Թվարկում (Էնումերացիա)",
    level: "morfosintáctico",
    levelHy: "Շարահյուսական մակարդակ",
    definitionEs: "Acumulación sucesiva de elementos o ideas pertenecientes al mismo campo sintáctico o temático.",
    definitionHy: "Միևնույն շարահյուսական դեր ունեցող մի քանի առարկաների, հատկանիշների կամ գործողությունների հաջորդական թվարկում։",
    exampleEs: "Trajo peras, manzanas, uvas y plátanos. / Veo coches, casas, árboles y calles.",
    exampleHy: "Նա բերեց տանձ, խնձոր, խաղող և բանան։ / Տեսնում եմ մեքենաներ, տներ, ծառեր և փողոցներ։",
    keyRuleEs: "Sucesión de elementos coordinados.",
    keyRuleHy: "Տարրերի հաջորդական թվարկում։"
  },
  {
    nameEs: "Pleonasmo",
    nameHy: "Ավելաբանություն (Պլեոնազմ)",
    level: "morfosintáctico",
    levelHy: "Շարահյուսական մակարդակ",
    definitionEs: "Uso de palabras redundantes o innecesarias para la comprensión exacta, con el fin de reforzar la expresividad o el énfasis.",
    definitionHy: "Իմաստով ավելորդ (կրկնվող) բառերի կիրառություն՝ մտքին հատուկ շեշտ կամ հուզական արտահայտչականություն հաղորդելու համար։",
    exampleEs: "Lo escuché con mis propios oídos. / Sal afuera un momento. / Con mis propios ojos lo vi.",
    exampleHy: "Ես դա լսեցի իմ սեփական ականջներով։ / Մի պահ դուրս արի դուրս (դուրս գալն արդեն դուրսն է)։ / Իմ սեփական աչքերով տեսա։",
    keyRuleEs: "Palabras redundantes para dar énfasis o intensidad.",
    keyRuleHy: "Իմաստով ավելորդ բառեր՝ շեշտադրման համար։"
  },

  // Nivel semántico
  {
    nameEs: "Metáfora",
    nameHy: "Փոխաբերություն (Մետաֆորա)",
    level: "semántico",
    levelHy: "Իմաստային մակարդակ",
    definitionEs: "Identificación de dos elementos (término real A y término imaginario B) basada en una relación de semejanza.",
    definitionHy: "Երկու տարբեր երևույթների կամ առարկաների նույնացում (իրական տարր A և փոխաբերական տարր B)՝ նրանց միջև եղած ընդհանուր նմանության հիման վրա։",
    exampleEs: "Tus ojos son estrellas. (A es B) / Las estrellas de tus ojos. (B de A) / Dos estrellas me miraban. (Solo B)",
    exampleHy: "Քո աչքերը աստղեր են (A es B)։ / Քո աչքերի աստղերը (B de A)։ / Երկու աստղ նայում էին ինձ (միայն B)։",
    keyRuleEs: "Identificación directa de dos elementos por semejanza (¡sin «como»!).",
    keyRuleHy: "Երկու տարրերի նույնացում նմանության հիման վրա (առանց «ինչպես/como» բառի)։"
  },
  {
    nameEs: "Personificación (Prosopopeya)",
    nameHy: "Անձնավորում (Պրոսոպոպեա)",
    level: "semántico",
    levelHy: "Իմաստային մակարդակ",
    definitionEs: "Atribución de cualidades, acciones o sentimientos propios de los seres humanos a animales, objetos o elementos inanimados de la naturaleza.",
    definitionHy: "Մարդկային հատկանիշների, զգացմունքների կամ գործողությունների վերագրում կենդանիներին, անշունչ առարկաներին կամ բնության երևույթներին։",
    exampleEs: "La luna sonríe desde el cielo. / El viento canta entre los árboles. / Las nubes lloran sobre la ciudad.",
    exampleHy: "Լուսինը ժպտում է երկնքից։ / Քամին երգում է ծառերի միջև։ / Ամպերը լաց են լինում քաղաքի վրա։",
    keyRuleEs: "¿Un objeto o elemento de la naturaleza realiza una acción humana?",
    keyRuleHy: "Առարկան կամ բնությունը մարդկային գործողությո՞ւն է կատարում։"
  }
];

// 3. TABLA "NO CONFUNDIR" — ՏԱՐԲԵՐԱԿԻՐ ԻՐԱՐ ՆՄԱՆ ՀԱՍԿԱՑՈՒԹՅՈՒՆՆԵՐԸ
export const DIFERENCIAS_IMPORTANTES: DifferenceItem[] = [
  {
    pair: "Anáfora vs Epanadiplosis",
    pairHy: "Անաֆորա ընդդեմ Էպանադիպլոզիսի",
    differenceEs: "Anáfora: repite la palabra al comienzo de varios versos u oraciones. Epanadiplosis: repite la misma palabra al principio y al final de un solo verso u oración.",
    differenceHy: "Անաֆորա՝ բառի կրկնություն մի քանի հաջորդական տողերի կամ նախադասությունների սկզբում։ Էպանադիպլոզիս՝ նույն բառի կրկնություն մեկ տողի կամ նախադասության հենց սկզբում և վերջում։",
    exampleEs: "Anáfora: «Te busco aquí. Te busco allá.» | Epanadiplosis: «Canto, mi vida es un canto.»",
    exampleHy: "Անաֆորա՝ «Քեզ փնտրում եմ այստեղ։ Քեզ փնտրում եմ այնտեղ։» | Էպանադիպլոզիս՝ «Երգ, իմ կյանքը մի երգ է։»"
  },
  {
    pair: "Asíndeton vs Polisíndeton",
    pairHy: "Ասինդետոն ընդդեմ Պոլիսինդետոնի",
    differenceEs: "Asíndeton: elimina las conjunciones para dar rapidez («corre, salta, ríe»). Polisíndeton: repite las conjunciones («y corre y salta y ríe»).",
    differenceHy: "Ասինդետոն՝ շաղկապները բացակայում են արագության համար («վազում է, ցատկում, ծիծաղում»)։ Պոլիսինդետոն՝ շաղկապները բազմիցս կրկնվում են («և վազում է, և ցատկում, և ծիծաղում»)։",
    exampleEs: "Asíndeton: «Ven, mira, calla.» | Polisíndeton: «Y sueña y ríe y canta.»",
    exampleHy: "Ասինդետոն՝ «Եկ, նայիր, լռիր։» | Պոլիսինդետոն՝ «Եվ երազում է, և ծիծաղում, և երգում։»"
  },
  {
    pair: "Aliteración vs Paronomasia",
    pairHy: "Ալիտերացիա ընդդեմ Պարոնոմազիայի",
    differenceEs: "Aliteración: repite sonidos o fonemas («suave susurro se siente»). Paronomasia: reúne palabras distintas que suenan muy parecido («el hombre tiene hambre», «casa / cosa»).",
    differenceHy: "Ալիտերացիա՝ նույն հնչյունների կրկնություն։ Պարոնոմազիա՝ նմանահունչ, բայց բոլորովին տարբեր իմաստ ունեցող բառերի կիրառություն («hombre / hambre»)։",
    exampleEs: "Aliteración: «Tres tristes tigres...» | Paronomasia: «El preso perdió peso.»",
    exampleHy: "Ալիտերացիա՝ հնչյունների կրկնություն | Պարոնոմազիա՝ նմանահունչ տարբեր բառեր։"
  },
  {
    pair: "Mito vs Leyenda",
    pairHy: "Առասպել ընդդեմ Ավանդազրույցի",
    differenceEs: "El mito explica el origen del mundo, los dioses o fenómenos universales. La leyenda parte de un lugar o hecho real e histórico y le añade elementos fantásticos.",
    differenceHy: "Առասպելը բացատրում է աշխարհի ու բնության ծագումը՝ աստվածների միջոցով։ Ավանդազրույցը հիմնվում է իրական վայրի կամ դեպքի վրա և ավելացնում ֆանտաստիկ տարրեր։",
    exampleEs: "Mito: Dios crea el sol y la luna. | Leyenda: En un pueblo de Aragón suena una campana invisible.",
    exampleHy: "Առասպել՝ Աստվածը ստեղծում է լեռները։ | Ավանդազրույց՝ Իրական ամրոցում հայտնվում է ուրվական։"
  },
  {
    pair: "Metáfora vs Comparación",
    pairHy: "Փոխաբերություն ընդդեմ Համեմատության",
    differenceEs: "La metáfora identifica directamente: A es B («Tus ojos son estrellas»). La comparación utiliza un nexo comparativo como «como»: («Tus ojos son como estrellas»).",
    differenceHy: "Փոխաբերությունը ուղղակի նույնացնում է առանց շաղկապի («Tus ojos son estrellas»)։ Համեմատությունն օգտագործում է «ինչպես/como» բառը («Tus ojos brillan como estrellas»)։",
    exampleEs: "Metáfora: «Tu voz es música.» | Comparación: «Tu voz suena como música.»",
    exampleHy: "Փոխաբերություն՝ Քո ձայնը երաժշտություն է։ | Համեմատություն՝ Քո ձայնը երաժշտության պես է։"
  },
  {
    pair: "Enumeración vs Asíndeton",
    pairHy: "Թվարկում ընդդեմ Ասինդետոնի",
    differenceEs: "La enumeración es la acumulación de varios elementos (puede llevar conjunciones o no). El asíndeton es específicamente la ausencia voluntaria de conjunciones.",
    differenceHy: "Թվարկումը տարրերի հաջորդական շարքն է (կարող է ունենալ «y» շաղկապ կամ ոչ)։ Ասինդետոնը հենց շաղկապների միտումնավոր բացակայությունն է։",
    exampleEs: "Enumeración con conjunción: «Compré pan, leche y fruta.» | Asíndeton: «Compré pan, leche, fruta.»",
    exampleHy: "Թվարկում շաղկապով կամ առանց։ Ասինդետոն՝ միայն առանց շաղկապի։"
  }
];

// 4. PERSONIFICACIÓN PRACTICE QUESTIONS
export const PERSONIFICACION_EXERCISES: ExamQuestion[] = [
  {
    id: 101,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «El sol sonríe a los niños»?",
    questionHy: "Արդյո՞ք կա անձնավորում «El sol sonríe a los niños» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "SI",
    explanationEs: "Sí. El sol es un elemento de la naturaleza inanimado y se le atribuye la acción humana de «sonreír».",
    explanationHy: "Այո։ Արևը անշունչ բնության երևույթ է, և նրան վերագրվում է մարդկային գործողություն՝ ժպտալը (sonreír)։"
  },
  {
    id: 102,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «María sonríe a su hermano»?",
    questionHy: "Արդյո՞ք կա անձնավորում «María sonríe a su hermano» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "NO",
    explanationEs: "No. María es una persona humana; sonreír es su acción natural propia, por lo que no se produce personificación.",
    explanationHy: "Ոչ։ Մարիան մարդ է, իսկ ժպտալը մարդու բնական գործողությունն է, ուստի անձնավորում չկա։"
  },
  {
    id: 103,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «Las hojas susurran por la noche»?",
    questionHy: "Արդյո՞ք կա անձնավորում «Las hojas susurran por la noche» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "SI",
    explanationEs: "Sí. Las hojas no hablan; «susurrar» (շշնջալ) es una cualidad y acción comunicativa humana atribuida a las hojas.",
    explanationHy: "Այո։ Տերևները չեն խոսում․ «susurrar» (շշնջալ) մարդկային գործողությունը վերագրվել է տերևներին։"
  },
  {
    id: 104,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «El perro duerme en el sofá»?",
    questionHy: "Արդյո՞ք կա անձնավորում «El perro duerme en el sofá» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "NO",
    explanationEs: "No. Dormir es una necesidad biológica y acción natural de los perros y todos los animales, no exclusivamente humana.",
    explanationHy: "Ոչ։ Քնելը կենդանիների բնական կենսաբանական գործողությունն է, ոչ թե բացառապես մարդկային հատկանիշ։"
  },
  {
    id: 105,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «La montaña observa el pueblo»?",
    questionHy: "Արդյո՞ք կա անձնավորում «La montaña observa el pueblo» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "SI",
    explanationEs: "Sí. La montaña no tiene ojos ni consciencia; «observar» (դիտել, հետևել) es una acción consciente humana.",
    explanationHy: "Այո։ Լեռը չունի աչքեր կամ գիտակցություն․ նրան վերագրվում է մարդկային գիտակից գործողություն՝ գյուղին դիտելը (observar)։"
  },
  {
    id: 106,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «Las nubes lloran sobre la ciudad»?",
    questionHy: "Արդյո՞ք կա անձնավորում «Las nubes lloran sobre la ciudad» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "SI",
    explanationEs: "Sí. Las nubes descargan lluvia, pero «llorar» (լաց լինել) es una acción y emoción humana.",
    explanationHy: "Այո։ Ամպերից անձրև է գալիս, սակայն «llorar» (լաց լինելը) մարդկային հուզական գործողություն է։"
  },
  {
    id: 107,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «El niño corre por el parque»?",
    questionHy: "Արդյո՞ք կա անձնավորում «El niño corre por el parque» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "NO",
    explanationEs: "No. El niño es un ser humano y correr es una actividad habitual humana sin ninguna transferencia figurada.",
    explanationHy: "Ոչ։ Երեխան մարդ է, իսկ վազելը մարդու սովորական գործողությունն է։"
  },
  {
    id: 108,
    part: "Personificación",
    partHy: "Անձնավորում",
    questionEs: "¿Hay personificación en «El reloj me grita que llego tarde»?",
    questionHy: "Արդյո՞ք կա անձնավորում «El reloj me grita que llego tarde» նախադասության մեջ։",
    options: [
      { id: "SI", textEs: "Sí, hay personificación", textHy: "Այո, կա անձնավորում" },
      { id: "NO", textEs: "No, no hay personificación", textHy: "Ոչ, անձնավորում չկա" }
    ],
    correctAnswer: "SI",
    explanationEs: "Sí. Un reloj es un objeto inanimado de metal o plástico; «gritar» (բղավել, գոռալ) es una acción puramente humana.",
    explanationHy: "Այո։ Ժամացույցը անշունչ առարկա է, իսկ «գոռալը/բղավելը» (gritar) մարդկային հատկանիշ է։"
  }
];

// 5. METÁFORA PRACTICE QUESTIONS
export const METAFORA_STRUCTURE_EXERCISES: ExamQuestion[] = [
  {
    id: 111,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«Tus labios son rosas». ¿Qué estructura presenta?",
    questionHy: "«Tus labios son rosas»։ Ի՞նչ կառուցվածք ունի փոխաբերությունը։",
    options: [
      { id: "A_ES_B", textEs: "A es B (Término real + es/son + imaginario)", textHy: "A es B (Իրական տարր + փոխաբերական)" },
      { id: "B_DE_A", textEs: "B de A (Término imaginario de término real)", textHy: "B de A (Փոխաբերական de իրական)" },
      { id: "A_DE_B", textEs: "A de B (Término real de término imaginario)", textHy: "A de B (Իրական de փոխաբերական)" },
      { id: "SOLO_B", textEs: "Solo B (Solo término imaginario)", textHy: "Solo B (Միայն փոխաբերական)" }
    ],
    correctAnswer: "A_ES_B",
    explanationEs: "Estructura A es B: A = labios (término real), B = rosas (término imaginario). Ambos elementos aparecen unidos por el verbo ser.",
    explanationHy: "Կառուցվածքը՝ A es B։ A = labios (իրական շրթունքներ), B = rosas (փոխաբերական վարդեր)՝ միացված «son» բայով։"
  },
  {
    id: 112,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«Las rosas de tus labios». ¿Qué estructura presenta?",
    questionHy: "«Las rosas de tus labios»։ Ի՞նչ կառուցվածք ունի փոխաբերությունը։",
    options: [
      { id: "A_ES_B", textEs: "A es B", textHy: "A es B" },
      { id: "B_DE_A", textEs: "B de A", textHy: "B de A" },
      { id: "A_DE_B", textEs: "A de B", textHy: "A de B" },
      { id: "SOLO_B", textEs: "Solo B", textHy: "Solo B" }
    ],
    correctAnswer: "B_DE_A",
    explanationEs: "Estructura B de A: B = rosas (imaginario) + de + A = labios (real).",
    explanationHy: "Կառուցվածքը՝ B de A։ B = rosas (փոխաբերական վարդեր) + de + A = labios (իրական շրթունքներ)։"
  },
  {
    id: 113,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«Sus manos de hielo». ¿Qué estructura presenta?",
    questionHy: "«Sus manos de hielo»։ Ի՞նչ կառուցվածք ունի փոխաբերությունը։",
    options: [
      { id: "A_ES_B", textEs: "A es B", textHy: "A es B" },
      { id: "B_DE_A", textEs: "B de A", textHy: "B de A" },
      { id: "A_DE_B", textEs: "A de B", textHy: "A de B" },
      { id: "SOLO_B", textEs: "Solo B", textHy: "Solo B" }
    ],
    correctAnswer: "A_DE_B",
    explanationEs: "Estructura A de B: A = manos (término real) + de + B = hielo (término imaginario).",
    explanationHy: "Կառուցվածքը՝ A de B։ A = manos (իրական ձեռքեր) + de + B = hielo (սառույց)։"
  },
  {
    id: 114,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«Tu sonrisa es un sol». ¿Qué estructura tiene?",
    questionHy: "«Tu sonrisa es un sol»։ Ի՞նչ կառուցվածք ունի փոխաբերությունը։",
    options: [
      { id: "A_ES_B", textEs: "A es B", textHy: "A es B" },
      { id: "B_DE_A", textEs: "B de A", textHy: "B de A" },
      { id: "A_DE_B", textEs: "A de B", textHy: "A de B" },
      { id: "SOLO_B", textEs: "Solo B", textHy: "Solo B" }
    ],
    correctAnswer: "A_ES_B",
    explanationEs: "A es B: A = sonrisa (real) está identificado directamente con B = sol (imaginario).",
    explanationHy: "A es B: A = sonrisa (իրական ժպիտ) նույնացվում է B = sol (փոխաբերական արև) տարրի հետ։"
  },
  {
    id: 115,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«El sol de tu sonrisa». ¿Qué estructura tiene?",
    questionHy: "«El sol de tu sonrisa»։ Ի՞նչ կառուցվածք ունի փոխաբերությունը։",
    options: [
      { id: "A_ES_B", textEs: "A es B", textHy: "A es B" },
      { id: "B_DE_A", textEs: "B de A", textHy: "B de A" },
      { id: "A_DE_B", textEs: "A de B", textHy: "A de B" },
      { id: "SOLO_B", textEs: "Solo B", textHy: "Solo B" }
    ],
    correctAnswer: "B_DE_A",
    explanationEs: "B de A: B = sol (imaginario) precede a A = sonrisa (real) mediante la preposición 'de'.",
    explanationHy: "B de A: B = sol (արև՝ փոխաբերական) + de + A = sonrisa (ժպիտ՝ իրական)։"
  },
  {
    id: 116,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«Sus ojos son dos luceros». ¿Qué representan A y B?",
    questionHy: "«Sus ojos son dos luceros»։ Որո՞նք են A և B տարրերը։",
    options: [
      { id: "A", textEs: "A = ojos (real), B = luceros (imaginario)", textHy: "A = ojos (իրական), B = luceros (փոխաբերական)" },
      { id: "B", textEs: "A = luceros (real), B = ojos (imaginario)", textHy: "A = luceros (իրական), B = ojos (փոխաբերական)" },
      { id: "C", textEs: "Solo hay término B", textHy: "Միայն B տարրն է" }
    ],
    correctAnswer: "A",
    explanationEs: "El término real del que se habla son los ojos (A), y el término imaginario poético con que se identifican son los luceros (B).",
    explanationHy: "Իրական խոսքի առարկան աչքերն են (A), իսկ փոխաբերական բանաստեղծական կերպարը՝ լուսատուները/աստղերը (B)։"
  },
  {
    id: 117,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«La miel de sus palabras». ¿Qué estructura tiene?",
    questionHy: "«La miel de sus palabras»։ Ի՞նչ կառուցվածք ունի։",
    options: [
      { id: "B_DE_A", textEs: "B de A (miel = B, palabras = A)", textHy: "B de A (մեղր = B, խոսքեր = A)" },
      { id: "A_DE_B", textEs: "A de B", textHy: "A de B" },
      { id: "A_ES_B", textEs: "A es B", textHy: "A es B" }
    ],
    correctAnswer: "B_DE_A",
    explanationEs: "B de A: La miel (B, imaginario) aparece antes de sus palabras (A, real).",
    explanationHy: "B de A: La miel (մեղր՝ փոխաբերական B) դրված է sus palabras (խոսքեր՝ իրական A) տարրից առաջ։"
  },
  {
    id: 118,
    part: "Metáfora",
    partHy: "Փոխաբերություն",
    questionEs: "«Tus ojos son como estrellas». ¿Es metáfora o comparación?",
    questionHy: "«Tus ojos son como estrellas»։ Փոխաբերությո՞ւն է, թե՞ համեմատություն։",
    options: [
      { id: "COMP", textEs: "Comparación (símil), porque lleva el nexo «como»", textHy: "Համեմատություն, քանի որ օգտագործված է «como» շաղկապը" },
      { id: "META", textEs: "Metáfora de identificación", textHy: "Նույնացնող փոխաբերություն" }
    ],
    correctAnswer: "COMP",
    explanationEs: "Es una comparación o símil. Al incluir la palabra «como», no hay una identificación directa (metáfora), sino una relación de semejanza explícita.",
    explanationHy: "Սա համեմատություն է (comparación / símil)։ «Como» (ինչպես) բառի առկայությունը ցույց է տալիս համեմատություն, ոչ թե ուղղակի նույնացնող փոխաբերություն։"
  }
];

// 6. EJERCICIOS ORIGINALES (PARTE 1: EJERCICIOS 1-8)
export const EJERCICIOS_PARTE_1: ExamQuestion[] = [
  // Ejercicio 1. Literatura popular y culta
  {
    id: 1,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1. Ժողովրդական և հեղինակային գրականություն",
    questionEs: "¿Quién es normalmente el autor de la literatura popular?",
    questionHy: "Ո՞վ է սովորաբար ժողովրդական գրականության (literatura popular) հեղինակը։",
    options: [
      { id: "A", textEs: "A. Un escritor famoso", textHy: "A. Հայտնի գրող" },
      { id: "B", textEs: "B. Un autor desconocido (anónima)", textHy: "B. Անհայտ հեղինակ (անանուն)" },
      { id: "C", textEs: "C. Una editorial", textHy: "C. Հրատարակչություն" }
    ],
    correctAnswer: "B",
    explanationEs: "La literatura popular es tradicionalmente anónima; no pertenece a un escritor conocido sino que es del pueblo y se transmite oralmente.",
    explanationHy: "Ժողովրդական գրականությունը ավանդաբար անանուն է (anónima)․ այն չունի հայտնի հեղինակ, պատկանում է ժողովրդին և փոխանցվում է բանավոր։"
  },
  {
    id: 2,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1",
    questionEs: "¿Cómo se transmitía tradicionalmente la literatura popular?",
    questionHy: "Ինչպե՞ս էր ավանդաբար փոխանցվում ժողովրդական գրականությունը։",
    options: [
      { id: "A", textEs: "A. Oralmente (de boca en boca)", textHy: "A. Բանավոր (բերանացի)" },
      { id: "B", textEs: "B. Solo por periódicos", textHy: "B. Միայն թերթերով" },
      { id: "C", textEs: "C. Solo mediante libros impresos", textHy: "C. Միայն տպագիր գրքերով" }
    ],
    correctAnswer: "A",
    explanationEs: "La literatura popular se transmitía de viva voz, cantada o recitada de generación en generación.",
    explanationHy: "Ժողովրդական գրականությունը փոխանցվում էր բանավոր (oralmente)՝ երգվելով կամ արտասանվելով սերնդեսերունդ։"
  },
  {
    id: 3,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1",
    questionEs: "¿Cómo se difundía tradicionalmente la literatura culta?",
    questionHy: "Ինչպե՞ս էր ավանդաբար տարածվում հեղինակային գրականությունը (literatura culta)։",
    options: [
      { id: "A", textEs: "A. Únicamente de memoria", textHy: "A. Բացառապես անգիր հիշողությամբ" },
      { id: "B", textEs: "B. Mediante copias manuscritas y después impresas", textHy: "B. Ձեռագիր օրինակներով, ապա տպագիր գրքերով" },
      { id: "C", textEs: "C. Solamente cantando", textHy: "C. Միայն երգելով" }
    ],
    correctAnswer: "B",
    explanationEs: "La literatura culta es escrita; históricamente se copiaba en manuscritos y más tarde se imprimió en libros.",
    explanationHy: "Հեղինակային գրականությունը գրավոր է․ պատմականորեն այն տարածվում էր ձեռագրերի, իսկ հետո տպագիր գրքերի միջոցով։"
  },
  {
    id: 4,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1",
    questionEs: "¿Qué literatura puede cambiar al transmitirse?",
    questionHy: "Ո՞ր գրականությունը կարող է փոփոխվել փոխանցման ընթացքում։",
    options: [
      { id: "A", textEs: "A. Culta", textHy: "A. Հեղինակային (Culta)" },
      { id: "B", textEs: "B. Popular", textHy: "B. Ժողովրդական (Popular)" },
      { id: "C", textEs: "C. Ninguna", textHy: "C. Ոչ մեկը" }
    ],
    correctAnswer: "B",
    explanationEs: "Al transmitirse oralmente de una persona a otra, la literatura popular sufre variaciones y adaptaciones (existen múltiples versiones).",
    explanationHy: "Բանավոր փոխանցման պատճառով ժողովրդական գրականությունը կարող է փոփոխվել՝ ունենալով բազմաթիվ տարբերակներ։"
  },
  {
    id: 5,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1",
    questionEs: "¿Qué grupo contiene ejemplos de literatura popular?",
    questionHy: "Ո՞ր խումբն է պարունակում ժողովրդական գրականության օրինակներ։",
    options: [
      { id: "A", textEs: "A. Nanas, villancicos y romances", textHy: "A. Օրորոցայիններ, սուրբծննդյան երգեր և ռոմանսներ" },
      { id: "B", textEs: "B. Contratos y noticias", textHy: "B. Պայմանագրեր և լուրեր" },
      { id: "C", textEs: "C. Manuales y diccionarios", textHy: "C. Ուղեցույցներ և բառարաններ" }
    ],
    correctAnswer: "A",
    explanationEs: "Las nanas (canciones de cuna), villancicos y romances tradicionales son géneros característicos de la literatura popular.",
    explanationHy: "Nanas (օրորոցային երգեր), villancicos (սուրբծննդյան երգեր) և romances (ռոմանսներ)՝ ժողովրդական գրականության դասական օրինակներ են։"
  },
  {
    id: 6,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1",
    questionEs: "Una obra escrita por una autora conocida pertenece normalmente a la literatura…",
    questionHy: "Հայտնի հեղինակի կողմից գրված ստեղծագործությունը սովորաբար պատկանում է…",
    options: [
      { id: "A", textEs: "A. popular", textHy: "A. ժողովրդական գրականությանը" },
      { id: "B", textEs: "B. anónima", textHy: "B. անանուն գրականությանը" },
      { id: "C", textEs: "C. culta", textHy: "C. հեղինակային գրականությանը (culta)" }
    ],
    correctAnswer: "C",
    explanationEs: "Al tener autor conocido y fijación escrita, pertenece inequívocamente a la literatura culta.",
    explanationHy: "Քանի որ հեղինակը հայտնի է և ստեղծագործությունը գրավոր է, այն հանդիսանում է literatura culta (հեղինակային գրականություն)։"
  },
  {
    id: 7,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1",
    questionEs: "¿Qué afirmación describe mejor la literatura culta?",
    questionHy: "Ո՞ր պնդումն է լավագույնս նկարագրում հեղինակային գրականությունը (literatura culta)։",
    options: [
      { id: "A", textEs: "A. El autor suele ser conocido y su texto es fijo", textHy: "A. Հեղինակը հայտնի է, իսկ տեքստը՝ կայուն/ֆիքսված" },
      { id: "B", textEs: "B. Siempre cambia con cada lector", textHy: "B. Այն միշտ փոխվում է յուրաքանչյուր ընթերցողի հետ" },
      { id: "C", textEs: "C. Solo se transmite oralmente", textHy: "C. Միայն բանավոր է փոխանցվում" }
    ],
    correctAnswer: "A",
    explanationEs: "La literatura culta se distingue por tener autor conocido, fijación por escrito y estabilidad textual.",
    explanationHy: "Հեղինակային գրականությանը բնորոշ է հայտնի հեղինակը, գրավոր ձևը և կայուն, անփոփոխ տեքստը։"
  },
  {
    id: 8,
    part: "Ejercicio 1",
    partHy: "Վարժություն 1",
    questionEs: "¿En qué formas puede aparecer la literatura popular?",
    questionHy: "Ի՞նչ ձևերով կարող է հանդես գալ ժողովրդական գրականությունը։",
    options: [
      { id: "A", textEs: "A. Solo en verso", textHy: "A. Միայն չափածո" },
      { id: "B", textEs: "B. Solo en prosa", textHy: "B. Միայն արձակ" },
      { id: "C", textEs: "C. En verso y en prosa", textHy: "C. Չափածո և արձակ (երկու ձևով էլ)" }
    ],
    correctAnswer: "C",
    explanationEs: "Puede manifestarse en verso (romances, canciones, nanas) y en prosa (cuentos populares, leyendas).",
    explanationHy: "Ժողովրդական գրականությունը լինում է և՛ չափածո (երգեր, ռոմանսներ), և՛ արձակ (հեքիաթներ, ավանդազրույցներ)։"
  },

  // Ejercicio 2. Verdadero o falso
  {
    id: 9,
    part: "Ejercicio 2",
    partHy: "Վարժություն 2. Ճի՞շտ է, թե՞ սխալ (Verdadero o Falso)",
    questionEs: "9. La literatura popular siempre tiene un autor conocido.",
    questionHy: "9. Ժողովրդական գրականությունը միշտ ունի հայտնի հեղինակ։",
    options: [
      { id: "V", textEs: "Verdadero (Ճիշտ)", textHy: "Ճիշտ է" },
      { id: "F", textEs: "Falso (Սխալ)", textHy: "Սխալ է" }
    ],
    correctAnswer: "F",
    explanationEs: "Falso. La literatura popular es típicamente anónima (de autor desconocido).",
    explanationHy: "Սխալ է (Falso)։ Ժողովրդական գրականությունը սովորաբար անանուն է (անհայտ հեղինակ)։"
  },
  {
    id: 10,
    part: "Ejercicio 2",
    partHy: "Վարժություն 2",
    questionEs: "10. La literatura culta suele conservar una versión escrita y fija.",
    questionHy: "10. Հեղինակային գրականությունը սովորաբար պահպանում է գրավոր և ֆիքսված տարբերակ։",
    options: [
      { id: "V", textEs: "Verdadero (Ճիշտ)", textHy: "Ճիշտ է" },
      { id: "F", textEs: "Falso (Սխալ)", textHy: "Սխալ է" }
    ],
    correctAnswer: "V",
    explanationEs: "Verdadero. Al transmitirse por escrito, la literatura culta mantiene un texto estable y definitivo establecido por su autor.",
    explanationHy: "Ճիշտ է (Verdadero)։ Գրավոր փոխանցման շնորհիվ հեղինակային գրականությունը պահպանում է անփոփոխ և կայուն տարբերակ։"
  },
  {
    id: 11,
    part: "Ejercicio 2",
    partHy: "Վարժություն 2",
    questionEs: "11. Algunas composiciones populares se acompañan de música.",
    questionHy: "11. Որոշ ժողովրդական ստեղծագործություններ ուղեկցվում են երաժշտությամբ։",
    options: [
      { id: "V", textEs: "Verdadero (Ճիշտ)", textHy: "Ճիշտ է" },
      { id: "F", textEs: "Falso (Սխալ)", textHy: "Սխալ է" }
    ],
    correctAnswer: "V",
    explanationEs: "Verdadero. Muchas manifestaciones populares (villancicos, nanas, romances de ciego) eran cantadas con instrumentos musicales.",
    explanationHy: "Ճիշտ է (Verdadero)։ Բազմաթիվ ժողովրդական ստեղծագործություններ (օրորներ, ռոմանսներ) երգվել են երաժշտական գործիքների նվագակցությամբ։"
  },
  {
    id: 12,
    part: "Ejercicio 2",
    partHy: "Վարժություն 2",
    questionEs: "12. Todas las obras de literatura popular son novelas.",
    questionHy: "12. Ժողովրդական գրականության բոլոր գործերը վեպեր են։",
    options: [
      { id: "V", textEs: "Verdadero (Ճիշտ)", textHy: "Ճիշտ է" },
      { id: "F", textEs: "Falso (Սխալ)", textHy: "Սխալ է" }
    ],
    correctAnswer: "F",
    explanationEs: "Falso. La novela es un género extenso de autor culto. La literatura popular abarca romances, canciones, nanas, leyendas y cuentos breves.",
    explanationHy: "Սխալ է (Falso)։ Վեպը (novela) երկարաշունչ հեղինակային ժանր է։ Ժողովրդական գրականությունը ներառում է կարճ հեքիաթներ, երգեր, ռոմանսներ և ավանդազրույցներ։"
  },

  // Ejercicio 3. Romance, leyenda, mito y cuento
  {
    id: 13,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3. Գտիր գրական ժանրը (Romance, leyenda, mito, cuento)",
    questionEs: "13. Poema de versos octosílabos con rima asonante en los versos pares.",
    questionHy: "13. Ութվանկանի տողերով բանաստեղծություն, որի զույգ տողերն ունեն ասոնանս հանգ։",
    options: [
      { id: "Romance", textEs: "Romance (Ռոմանս)", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda (Ավանդազրույց)", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito (Առասպել)", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento (Պատմվածք)", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Romance",
    explanationEs: "Esta es la definición exacta del romance: composición poética de versos octosílabos con rima asonante en los pares y libres los impares.",
    explanationHy: "Սա ռոմանսի (Romance) ճշգրիտ սահմանումն է՝ 8-վանկանի տողեր, զույգ տողերի ասոնանս հանգով։"
  },
  {
    id: 14,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3",
    questionEs: "14. Un dios crea el sol para iluminar la Tierra.",
    questionHy: "14. Աստվածը ստեղծում է արևը՝ Երկիրը լուսավորելու համար։",
    options: [
      { id: "Romance", textEs: "Romance", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito (Առասպել)", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Mito",
    explanationEs: "Es un mito porque interviene un dios y explica el origen del cosmos y la naturaleza (el sol y la luz).",
    explanationHy: "Սա առասպել է (Mito), քանի որ գլխավոր գործող անձը աստված է, և բացատրվում է արևի ու բնության ծագումը։"
  },
  {
    id: 15,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3",
    questionEs: "15. En un castillo antiguo aparece el fantasma de una princesa.",
    questionHy: "15. Հին ամրոցում հայտնվում է արքայադստեր ուրվականը։",
    options: [
      { id: "Romance", textEs: "Romance", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda (Ավանդազրույց)", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Leyenda",
    explanationEs: "Es una leyenda porque parte de un lugar real (un castillo antiguo histórico) y le incorpora un elemento fantástico (el fantasma).",
    explanationHy: "Սա ավանդազրույց է (Leyenda), քանի որ հիմնված է իրական վայրի (հին ամրոց) վրա և ներառում է ֆանտաստիկ տարր (ուրվական)։"
  },
  {
    id: 16,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3",
    questionEs: "16. Un niño encuentra un perro y vive una pequeña aventura.",
    questionHy: "16. Տղան գտնում է մի շուն և ապրում փոքրիկ արկած։",
    options: [
      { id: "Romance", textEs: "Romance", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento (Պատմվածք)", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Cuento",
    explanationEs: "Es un cuento: una narración breve, con pocos personajes y un argumento sencillo y directo.",
    explanationHy: "Սա պատմվածք է (Cuento)՝ կարճ պատմություն, քիչ հերոսներով և պարզ սյուժեով։"
  },
  {
    id: 17,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3",
    questionEs: "17. Un poema tradicional que se transmitía oralmente y tiene versos de ocho sílabas.",
    questionHy: "17. Ավանդական բանաստեղծություն, որը փոխանցվում էր բանավոր և ունի ութվանկանի տողեր։",
    options: [
      { id: "Romance", textEs: "Romance (Ռոմանս)", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Romance",
    explanationEs: "El romance es típicamente tradicional, de transmisión oral y versos de arte menor (octosílabos).",
    explanationHy: "Ռոմանսը (Romance) ավանդական, բանավոր փոխանցվող 8-վանկանի չափածո ստեղծագործություն է։"
  },
  {
    id: 18,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3",
    questionEs: "18. Una diosa explica cómo se originaron los océanos.",
    questionHy: "18. Դիցուհին բացատրում է, թե ինչպես են առաջացել օվկիանոսները։",
    options: [
      { id: "Romance", textEs: "Romance", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito (Առասպել)", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Mito",
    explanationEs: "Mito: explica el origen de elementos naturales de la Tierra mediante seres divinos o sobrenaturales.",
    explanationHy: "Առասպել (Mito)․ աստվածուհին բացատրում է օվկիանոսների ծագումը։"
  },
  {
    id: 19,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3",
    questionEs: "19. En un pueblo real se habla de una campana encantada.",
    questionHy: "19. Իրական գյուղում պատմում են կախարդված զանգի մասին։",
    options: [
      { id: "Romance", textEs: "Romance", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda (Ավանդազրույց)", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Leyenda",
    explanationEs: "Leyenda: vincula una localización geográfica real y concreta con un suceso sobrenatural o encantado.",
    explanationHy: "Ավանդազրույց (Leyenda)․ կապում է իրական աշխարհագրական վայրը կախարդական/գերբնական երևույթի հետ։"
  },
  {
    id: 20,
    part: "Ejercicio 3",
    partHy: "Վարժություն 3",
    questionEs: "20. Narración breve con pocos personajes y una historia sencilla.",
    questionHy: "20. Կարճ պատմվածք՝ քիչ հերոսներով և պարզ պատմությամբ։",
    options: [
      { id: "Romance", textEs: "Romance", textHy: "Ռոմանս" },
      { id: "Leyenda", textEs: "Leyenda", textHy: "Ավանդազրույց" },
      { id: "Mito", textEs: "Mito", textHy: "Առասպել" },
      { id: "Cuento", textEs: "Cuento (Պատմվածք)", textHy: "Պատմվածք" }
    ],
    correctAnswer: "Cuento",
    explanationEs: "Definición del cuento: narración breve con economía de personajes y sencillez argumental.",
    explanationHy: "Պատմվածքի (Cuento) սահմանումը․ սեղմ պատմություն՝ քիչ գործող անձանցով։"
  },

  // Ejercicio 5. Lenguaje literario, verso y prosa
  {
    id: 25,
    part: "Ejercicio 5",
    partHy: "Վարժություն 5. Գեղարվեստական լեզու, չափածո և արձակ",
    questionEs: "25. Identifica: ¿verso o prosa? «La niña abrió la puerta y entró en su habitación».",
    questionHy: "25. Որոշիր՝ չափածո՞ է (verso), թե՞ արձակ (prosa)․ «La niña abrió la puerta y entró en su habitación»։",
    options: [
      { id: "Prosa", textEs: "Prosa (Արձակ)", textHy: "Արձակ" },
      { id: "Verso", textEs: "Verso (Չափածո)", textHy: "Չափածո" }
    ],
    correctAnswer: "Prosa",
    explanationEs: "Está escrito en prosa: se organiza en una oración continua sin métrica regular ni rima.",
    explanationHy: "Գրված է արձակով (prosa)․ ամբողջական նախադասություն է՝ առանց հանգի կամ չափի։"
  },
  {
    id: 26,
    part: "Ejercicio 5",
    partHy: "Վարժություն 5",
    questionEs: "26. Identifica: ¿verso o prosa? «La luna juega con el mar, / y duerme sobre la arena».",
    questionHy: "26. Որոշիր՝ չափածո՞ է, թե՞ արձակ․ «La luna juega con el mar, / y duerme sobre la arena»։",
    options: [
      { id: "Verso", textEs: "Verso (Չափածո)", textHy: "Չափածո" },
      { id: "Prosa", textEs: "Prosa (Արձակ)", textHy: "Արձակ" }
    ],
    correctAnswer: "Verso",
    explanationEs: "Está escrito en verso: se distribuye en líneas poéticas con ritmo y pausas expresivas.",
    explanationHy: "Գրված է չափածոյով (verso)․ բաժանված է բանաստեղծական տողերի՝ ռիթմով և դադարներով։"
  },
  {
    id: 27,
    part: "Ejercicio 5",
    partHy: "Վարժություն 5",
    questionEs: "27. ¿Qué oración utiliza lenguaje cotidiano?",
    questionHy: "27. Ո՞ր նախադասությունն է օգտագործում առօրյա լեզու (lenguaje cotidiano)։",
    options: [
      { id: "A", textEs: "A) El cielo está nublado.", textHy: "A) Երկինքն ամպամած է։" },
      { id: "B", textEs: "B) El cielo viste un abrigo de nubes.", textHy: "B) Երկինքն ամպերի վերարկու է հագել։" }
    ],
    correctAnswer: "A",
    explanationEs: "«El cielo está nublado» es lenguaje cotidiano y práctico; «viste un abrigo de nubes» es literario y figurado.",
    explanationHy: "«El cielo está nublado»-ն առօրյա, պարզ լեզու է։ Մյուս տարբերակը փոխաբերական գեղարվեստական պատկեր է։"
  },
  {
    id: 28,
    part: "Ejercicio 5",
    partHy: "Վարժություն 5",
    questionEs: "28. ¿Qué oración utiliza lenguaje literario?",
    questionHy: "28. Ո՞ր նախադասությունն է օգտագործում գեղարվեստական լեզու (lenguaje literario)։",
    options: [
      { id: "A", textEs: "A) Hoy hace mucho viento.", textHy: "A) Այսօր ուժեղ քամի է։" },
      { id: "B", textEs: "B) El viento canta entre los árboles.", textHy: "B) Քամին երգում է ծառերի միջև։" }
    ],
    correctAnswer: "B",
    explanationEs: "«El viento canta entre los árboles» usa una personificación y busca un fin estético y expresivo.",
    explanationHy: "«El viento canta entre los árboles»-ն օգտագործում է անձնավորում և ունի գեղագիտական նպատակ։"
  },

  // Ejercicio 6. Nivel fónico
  {
    id: 33,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6. Հնչյունային մակարդակ (Nivel fónico)",
    questionEs: "33. Identifica la figura: «¡Guau, guau!»",
    questionHy: "33. Որոշիր արտահայտչամիջոցը․ «¡Guau, guau!»",
    options: [
      { id: "Onomatopeya", textEs: "Onomatopeya", textHy: "Օնոմատոպեա (Բնաձայնություն)" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" }
    ],
    correctAnswer: "Onomatopeya",
    explanationEs: "Es una onomatopeya porque imita directamente el ladrido de un perro.",
    explanationHy: "Օնոմատոպեա է (onomatopeya), քանի որ նմանակում է շան հաչոցի ձայնը։"
  },
  {
    id: 34,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "34. Identifica la figura: «Siete serpientes silban sin cesar».",
    questionHy: "34. Որոշիր արտահայտչամիջոցը․ «Siete serpientes silban sin cesar»։",
    options: [
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա (Հնչյունախաղ)" },
      { id: "Onomatopeya", textEs: "Onomatopeya", textHy: "Օնոմատոպեա" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" }
    ],
    correctAnswer: "Aliteración",
    explanationEs: "Aliteración: repetición reiterada del fonema /s/ que evoca el silbido de las serpientes.",
    explanationHy: "Ալիտերացիա (aliteración)․ /s/ հնչյունի կրկնություն, որը հիշեցնում է օձերի ֆշշոցը։"
  },
  {
    id: 35,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "35. Identifica la figura: «Canto, mi vida es un canto».",
    questionHy: "35. Որոշիր արտահայտչամիջոցը․ «Canto, mi vida es un canto»։",
    options: [
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս (սկզբում և վերջում)" },
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" }
    ],
    correctAnswer: "Epanadiplosis",
    explanationEs: "Epanadiplosis: la palabra «canto» se repite al principio y al final de la misma frase.",
    explanationHy: "Էպանադիպլոզիս (epanadiplosis)․ «canto» բառը կրկնվում է նույն նախադասության սկզբում և վերջում։"
  },
  {
    id: 36,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "36. Identifica la figura: «La casa no es la cosa».",
    questionHy: "36. Որոշիր արտահայտչամիջոցը․ «La casa no es la cosa»։",
    options: [
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա (նմանահունչ բառեր)" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" },
      { id: "Metáfora", textEs: "Metáfora", textHy: "Փոխաբերություն" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" }
    ],
    correctAnswer: "Paronomasia",
    explanationEs: "Paronomasia: juego entre dos palabras de sonido casi idéntico pero significado diferente («casa» y «cosa»).",
    explanationHy: "Պարոնոմազիա (paronomasia)․ նմանահունչ, բայց տարբեր իմաստ ունեցող բառեր (casa և cosa)։"
  },
  {
    id: 37,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "37. Identifica la figura: «Rápido rueda el río».",
    questionHy: "37. Որոշիր արտահայտչամիջոցը․ «Rápido rueda el río»։",
    options: [
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա (/r/ հնչյունի կրկնություն)" },
      { id: "Onomatopeya", textEs: "Onomatopeya", textHy: "Օնոմատոպեա" },
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" }
    ],
    correctAnswer: "Aliteración",
    explanationEs: "Aliteración: repetición del sonido vibrante /r/ en palabras consecutivas.",
    explanationHy: "Ալիտերացիա (aliteración)․ /r/ թրթռուն հնչյունի շեշտված կրկնություն։"
  },
  {
    id: 38,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "38. Identifica la figura: «¡Pum! ¡Pum!»",
    questionHy: "38. Որոշիր արտահայտչամիջոցը․ «¡Pum! ¡Pum!»",
    options: [
      { id: "Onomatopeya", textEs: "Onomatopeya", textHy: "Օնոմատոպեա (ձայնի նմանակում)" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" },
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" },
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" }
    ],
    correctAnswer: "Onomatopeya",
    explanationEs: "Onomatopeya: imita el sonido de un disparo, golpe o explosión.",
    explanationHy: "Օնոմատոպեա (onomatopeya)․ նմանակում է հարվածի կամ պայթյունի ձայնը։"
  },
  {
    id: 39,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "39. Identifica la figura: «Sueño, todo termina en un sueño».",
    questionHy: "39. Որոշիր արտահայտչամիջոցը․ «Sueño, todo termina en un sueño»։",
    options: [
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" },
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն" }
    ],
    correctAnswer: "Epanadiplosis",
    explanationEs: "Epanadiplosis: la palabra «sueño» abre y cierra la misma oración.",
    explanationHy: "Էպանադիպլոզիս (epanadiplosis)․ «sueño» բառը նախադասության սկզբում և վերջում է։"
  },
  {
    id: 40,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "40. Identifica la figura: «El preso perdió peso».",
    questionHy: "40. Որոշիր արտահայտչամիջոցը․ «El preso perdió peso»։",
    options: [
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա (preso / peso)" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" }
    ],
    correctAnswer: "Paronomasia",
    explanationEs: "Paronomasia: semejanza fonética entre «preso» y «peso» con significados totalmente diferentes.",
    explanationHy: "Պարոնոմազիա (paronomasia)․ «preso» և «peso» բառերի հնչյունային նմանությունը։"
  },
  {
    id: 41,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "41. Identifica la figura: «¡Bzz, bzz!, hace la abeja».",
    questionHy: "41. Որոշիր արտահայտչամիջոցը․ «¡Bzz, bzz!, hace la abeja»։",
    options: [
      { id: "Onomatopeya", textEs: "Onomatopeya", textHy: "Օնոմատոպեա" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Metáfora", textEs: "Metáfora", textHy: "Փոխաբերություն" }
    ],
    correctAnswer: "Onomatopeya",
    explanationEs: "Onomatopeya: imita el zumbido de la abeja.",
    explanationHy: "Օնոմատոպեա (onomatopeya)․ մեղվի բզզոցի ձայնի նմանակում։"
  },
  {
    id: 42,
    part: "Ejercicio 6",
    partHy: "Վարժություն 6",
    questionEs: "42. Identifica la figura: «Su suave susurro se siente».",
    questionHy: "42. Որոշիր արտահայտչամիջոցը․ «Su suave susurro se siente»։",
    options: [
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա (/s/ հնչյուն)" },
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Onomatopeya", textEs: "Onomatopeya", textHy: "Օնոմատոպեա" }
    ],
    correctAnswer: "Aliteración",
    explanationEs: "Aliteración: repetición del sonido /s/ en casi todas las palabras consecutivas.",
    explanationHy: "Ալիտերացիա (aliteración)․ /s/ հնչյունի ընդգծված կրկնություն բոլոր բառերում։"
  },

  // Ejercicio 7. Nivel morfosintáctico
  {
    id: 43,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7. Շարահյուսական մակարդակ (Nivel morfosintáctico)",
    questionEs: "43. «Te busco por las calles. Te busco por los parques». ¿Qué figura literaria es?",
    questionHy: "43. «Te busco por las calles. Te busco por los parques»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "Anáfora", textEs: "Anáfora (Կրկնություն սկզբում)", textHy: "Անաֆորա" },
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" },
      { id: "Polisíndeton", textEs: "Polisíndeton", textHy: "Պոլիսինդետոն" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" }
    ],
    correctAnswer: "Anáfora",
    explanationEs: "Anáfora: se repiten las palabras iniciales «Te busco» al principio de ambas oraciones.",
    explanationHy: "Անաֆորա (anáfora)․ «Te busco» բառերի կրկնություն երկու նախադասությունների սկզբում։"
  },
  {
    id: 44,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "44. «Corre, salta, ríe, sueña». ¿Qué figura se produce por eliminar las conjunciones?",
    questionHy: "44. «Corre, salta, ríe, sueña»։ Ո՞ր արտահայտչամիջոցն է առաջանում շաղկապների բացակայության պատճառով։",
    options: [
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն (Անշաղկապություն)" },
      { id: "Polisíndeton", textEs: "Polisíndeton", textHy: "Պոլիսինդետոն" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" }
    ],
    correctAnswer: "Asíndeton",
    explanationEs: "Asíndeton: omisión intencionada de conjunciones («y») entre los verbos.",
    explanationHy: "Ասինդետոն (asíndeton)․ «y» (և) շաղկապների միտումնավոր բացթողում բայերի միջև։"
  },
  {
    id: 45,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "45. «Y corre y salta y juega y canta». ¿Qué figura es?",
    questionHy: "45. «Y corre y salta y juega y canta»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "Polisíndeton", textEs: "Polisíndeton", textHy: "Պոլիսինդետոն (Բազմաշաղկապություն)" },
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն" },
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" }
    ],
    correctAnswer: "Polisíndeton",
    explanationEs: "Polisíndeton: repetición continuada de la conjunción «y».",
    explanationHy: "Պոլիսինդետոն (polisíndeton)․ «y» շաղկապի բազմակի կրկնություն։"
  },
  {
    id: 46,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "46. «Lo escuché con mis propios oídos». ¿Qué figura es?",
    questionHy: "46. «Lo escuché con mis propios oídos»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ (Ավելաբանություն)" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" }
    ],
    correctAnswer: "Pleonasmo",
    explanationEs: "Pleonasmo: redundancia expresiva; escuchar siempre se realiza con los propios oídos.",
    explanationHy: "Պլեոնազմ (pleonasmo)․ իմաստով ավելորդ բառերի կիրառություն՝ լսելն արդեն ականջով է լինում։"
  },
  {
    id: 47,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "47. «A la niña el cuento leía su madre». ¿Qué figura altera el orden de las palabras?",
    questionHy: "47. «A la niña el cuento leía su madre»։ Ո՞ր արտահայտչամիջոցն է փոխում բառերի շարադասությունը։",
    options: [
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն (Շրջուն շարադասություն)" },
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" },
      { id: "Metáfora", textEs: "Metáfora", textHy: "Փոխաբերություն" }
    ],
    correctAnswer: "Hipérbaton",
    explanationEs: "Hipérbaton: alteración del orden natural (Sujeto + Verbo + Objeto Directo + Objeto Indirecto: «Su madre leía el cuento a la niña»).",
    explanationHy: "Հիպերբատոն (hipérbaton)․ շարադասության փոփոխություն (բնական շարադասություն՝ «Su madre leía el cuento a la niña»)։"
  },
  {
    id: 48,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "48. «Trajo peras, manzanas, uvas y plátanos». ¿Qué figura acumula distintos elementos?",
    questionHy: "48. «Trajo peras, manzanas, uvas y plátanos»։ Ո՞ր արտահայտչամիջոցն է կուտակում տարբեր տարրեր։",
    options: [
      { id: "Enumeración", textEs: "Enumeración", textHy: "Էնումերացիա (Թվարկում)" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" },
      { id: "Polisíndeton", textEs: "Polisíndeton", textHy: "Պոլիսինդետոն" },
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" }
    ],
    correctAnswer: "Enumeración",
    explanationEs: "Enumeración: serie acumulativa de elementos de la misma categoría gramatical (frutas).",
    explanationHy: "Թվարկում (enumeración)․ նույն կարգի առարկաների (մրգերի) հաջորդական շարք։"
  },
  {
    id: 49,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "49. «Quiero aprender. Quiero jugar. Quiero ganar». ¿Qué figura es?",
    questionHy: "49. «Quiero aprender. Quiero jugar. Quiero ganar»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" },
      { id: "Epanadiplosis", textEs: "Epanadiplosis", textHy: "Էպանադիպլոզիս" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" }
    ],
    correctAnswer: "Anáfora",
    explanationEs: "Anáfora: repetición de «Quiero» al inicio de cada frase.",
    explanationHy: "Անաֆորա (anáfora)․ «Quiero» բառի կրկնություն յուրաքանչյուր նախադասության սկզբում։"
  },
  {
    id: 50,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "50. «Ni habla ni mira ni sonríe». ¿Qué figura es?",
    questionHy: "50. «Ni habla ni mira ni sonríe»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "Polisíndeton", textEs: "Polisíndeton", textHy: "Պոլիսինդետոն" },
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" }
    ],
    correctAnswer: "Polisíndeton",
    explanationEs: "Polisíndeton: repetición de la conjunción copulativa negativa «ni».",
    explanationHy: "Պոլիսինդետոն (polisíndeton)․ «ni» ժխտական շաղկապի բազմակի կրկնություն։"
  },
  {
    id: 51,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "51. «Veo coches, casas, árboles y calles». ¿Qué figura enumera varios elementos?",
    questionHy: "51. «Veo coches, casas, árboles y calles»։ Ո՞ր արտահայտչամիջոցն է թվարկում մի քանի տարրեր։",
    options: [
      { id: "Enumeración", textEs: "Enumeración", textHy: "Էնումերացիա (Թվարկում)" },
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" },
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" }
    ],
    correctAnswer: "Enumeración",
    explanationEs: "Enumeración: acumulación de varios sustantivos observados en el entorno.",
    explanationHy: "Թվարկում (enumeración)․ շրջապատի մի քանի առարկաների հաջորդական թվարկում։"
  },
  {
    id: 52,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "52. «El cielo azul contemplaba María». ¿Qué figura presenta?",
    questionHy: "52. «El cielo azul contemplaba María»։ Ի՞նչ արտահայտչամիջոց է։",
    options: [
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն (Շրջուն շարադասություն)" },
      { id: "Metáfora", textEs: "Metáfora", textHy: "Փոխաբերություն" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" },
      { id: "Aliteración", textEs: "Aliteración", textHy: "Ալիտերացիա" }
    ],
    correctAnswer: "Hipérbaton",
    explanationEs: "Hipérbaton: el objeto («el cielo azul») antecede al verbo y al sujeto («María»). Orden habitual: «María contemplaba el cielo azul».",
    explanationHy: "Հիպերբատոն (hipérbaton)․ ուղիղ խնդիրը («el cielo azul») դրված է ենթակայից («María») առաջ։ Սովորական ձևը՝ «María contemplaba el cielo azul»։"
  },
  {
    id: 53,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "53. «Sal afuera un momento». ¿Qué figura es?",
    questionHy: "53. «Sal afuera un momento»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ (Ավելաբանություն)" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" },
      { id: "Paronomasia", textEs: "Paronomasia", textHy: "Պարոնոմազիա" },
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն" }
    ],
    correctAnswer: "Pleonasmo",
    explanationEs: "Pleonasmo: el verbo «salir» ya contiene el significado de ir hacia «afuera».",
    explanationHy: "Պլեոնազմ (pleonasmo)․ «salir» (դուրս գալ) բայն արդեն ինքնին նշանակում է գնալ դեպի «դուրս» (afuera)։"
  },
  {
    id: 54,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "54. «La tarde era larga, gris y silenciosa». ¿Qué figura presenta una serie de adjetivos?",
    questionHy: "54. «La tarde era larga, gris y silenciosa»։ Ո՞ր արտահայտչամիջոցն է ներկայացնում ածականների շարք։",
    options: [
      { id: "Enumeración", textEs: "Enumeración", textHy: "Էնումերացիա (Թվարկում)" },
      { id: "Polisíndeton", textEs: "Polisíndeton", textHy: "Պոլիսինդետոն" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" },
      { id: "Anáfora", textEs: "Anáfora", textHy: "Անաֆորա" }
    ],
    correctAnswer: "Enumeración",
    explanationEs: "Enumeración: serie de adjetivos coordinados que describen la tarde.",
    explanationHy: "Թվարկում (enumeración)․ երեկոն նկարագրող ածականների հաջորդական շարք։"
  },
  {
    id: 55,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "55. «Tengo hambre y tengo sueño y tengo frío». ¿Qué figura es?",
    questionHy: "55. «Tengo hambre y tengo sueño y tengo frío»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "Polisíndeton", textEs: "Polisíndeton", textHy: "Պոլիսինդետոն" },
      { id: "Asíndeton", textEs: "Asíndeton", textHy: "Ասինդետոն" },
      { id: "Pleonasmo", textEs: "Pleonasmo", textHy: "Պլեոնազմ" },
      { id: "Hipérbaton", textEs: "Hipérbaton", textHy: "Հիպերբատոն" }
    ],
    correctAnswer: "Polisíndeton",
    explanationEs: "Polisíndeton: se repite la conjunción «y» entre todas las oraciones breves.",
    explanationHy: "Պոլիսինդետոն (polisíndeton)․ «y» շաղկապի կրկնություն բոլոր անդամների միջև։"
  },
  {
    id: 56,
    part: "Ejercicio 7",
    partHy: "Վարժություն 7",
    questionEs: "56. Transforma «El niño miraba las estrellas» utilizando un hipérbaton:",
    questionHy: "56. Փոխակերպիր «El niño miraba las estrellas» նախադասությունը հիպերբատոնի (շրջուն շարադասության)․",
    options: [
      { id: "A", textEs: "A) Las estrellas miraba el niño.", textHy: "A) Las estrellas miraba el niño." },
      { id: "B", textEs: "B) El niño pequeño miraba las estrellas brillantes.", textHy: "B) El niño pequeño miraba las estrellas brillantes." },
      { id: "C", textEs: "C) El niño y las estrellas.", textHy: "C) El niño y las estrellas." }
    ],
    correctAnswer: "A",
    explanationEs: "«Las estrellas miraba el niño» invierte el orden habitual Sujeto-Verbo-Objeto, creando un hipérbaton.",
    explanationHy: "«Las estrellas miraba el niño» տարբերակում խախտված է սովորական շարադասությունը (լրացումը դրվել է սկզբում)՝ ստեղծելով հիպերբատոն։"
  }
];

// 7. 50 NUEVAS PREGUNTAS DE EXAMEN (OFICIALES 7.º CURSO)
export const EXAMEN_50_PREGUNTAS: ExamQuestion[] = [
  // PARTE 1. LITERATURA POPULAR Y CULTA (1-6)
  {
    id: 201,
    part: "Parte 1: Literatura popular y culta",
    partHy: "Մաս 1. Ժողովրդական և հեղինակային գրականություն",
    questionEs: "1. ¿Cuál es una característica de la literatura popular?",
    questionHy: "1. Ո՞րն է ժողովրդական գրականության առանձնահատկությունը։",
    options: [
      { id: "A", textEs: "A) Siempre tiene un autor conocido.", textHy: "A) Միշտ ունի հայտնի հեղինակ։" },
      { id: "B", textEs: "B) Se transmite de generación en generación.", textHy: "B) Փոխանցվում է սերնդեսերունդ։" },
      { id: "C", textEs: "C) Nunca cambia.", textHy: "C) Երբեք չի փոխվում։" },
      { id: "D", textEs: "D) Solo existe por escrito.", textHy: "D) Գոյություն ունի միայն գրավոր։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: La literatura popular se transmite oralmente de generación en generación.",
    explanationHy: "Ճիշտ պատասխանն է B: Ժողովրդական գրականությունը բանավոր փոխանցվում է սերնդեսերունդ։"
  },
  {
    id: 202,
    part: "Parte 1: Literatura popular y culta",
    partHy: "Մաս 1. Ժողովրդական և հեղինակային գրականություն",
    questionEs: "2. ¿Qué significa que una obra sea anónima?",
    questionHy: "2. Ի՞նչ է նշանակում, որ ստեղծագործությունն անանուն է։",
    options: [
      { id: "A", textEs: "A) Que es muy antigua.", textHy: "A) Որ այն շատ հին է։" },
      { id: "B", textEs: "B) Que está escrita en verso.", textHy: "B) Որ գրված է չափածո։" },
      { id: "C", textEs: "C) Que no se conoce a su autor.", textHy: "C) Որ նրա հեղինակը հայտնի չէ։" },
      { id: "D", textEs: "D) Que tiene muchos personajes.", textHy: "D) Որ շատ կերպարներ ունի։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: «Anónimo» significa literalmente sin nombre de autor conocido.",
    explanationHy: "Ճիշտ պատասխանն է C: «Անանուն» նշանակում է, որ հեղինակը հայտնի չէ։"
  },
  {
    id: 203,
    part: "Parte 1: Literatura popular y culta",
    partHy: "Մաս 1. Ժողովրդական և հեղինակային գրականություն",
    questionEs: "3. ¿Por qué pueden modificarse las obras populares?",
    questionHy: "3. Ինչո՞ւ կարող են ժողովրդական ստեղծագործությունները փոփոխվել։",
    options: [
      { id: "A", textEs: "A) Porque se transmiten oralmente.", textHy: "A) Քանի որ փոխանցվում են բանավոր։" },
      { id: "B", textEs: "B) Porque siempre tienen errores.", textHy: "B) Քանի որ միշտ սխալներ ունեն։" },
      { id: "C", textEs: "C) Porque no tienen argumento.", textHy: "C) Քանի որ սյուժե չունեն։" },
      { id: "D", textEs: "D) Porque son demasiado largas.", textHy: "D) Քանի որ չափազանց երկար են։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Al transmitirse oralmente de persona a persona, cada narrador puede cambiar palabras o detalles.",
    explanationHy: "Ճիշտ պատասխանն է A: Բանավոր փոխանցման պատճառով յուրաքանչյուր պատմող կարող է փոփոխել մանրամասները։"
  },
  {
    id: 204,
    part: "Parte 1: Literatura popular y culta",
    partHy: "Մաս 1. Ժողովրդական և հեղինակային գրականություն",
    questionEs: "4. ¿Qué caracteriza a la literatura culta?",
    questionHy: "4. Ի՞նչն է բնորոշ հեղինակային գրականությանը։",
    options: [
      { id: "A", textEs: "A) Su autor es siempre desconocido.", textHy: "A) Նրա հեղինակը միշտ անհայտ է։" },
      { id: "B", textEs: "B) Solo se transmite oralmente.", textHy: "B) Փոխանցվում է միայն բանավոր։" },
      { id: "C", textEs: "C) Cambia cada vez que se cuenta.", textHy: "C) Փոխվում է ամեն անգամ պատմելիս։" },
      { id: "D", textEs: "D) Tiene un autor conocido y una versión escrita.", textHy: "D) Ունի հայտնի հեղինակ և գրավոր տարբերակ։" }
    ],
    correctAnswer: "D",
    explanationEs: "Respuesta D: La literatura culta se define por la autoría conocida y la fijación por escrito.",
    explanationHy: "Ճիշտ պատասխանն է D: Հեղինակային գրականությանը բնորոշ է հայտնի հեղինակը և գրավոր տարբերակը։"
  },
  {
    id: 205,
    part: "Parte 1: Literatura popular y culta",
    partHy: "Մաս 1. Ժողովրդական և հեղինակային գրականություն",
    questionEs: "5. Un abuelo cuenta una historia que aprendió de su abuelo. Nadie conoce al autor. ¿De qué tipo de literatura se trata?",
    questionHy: "5. Պապիկը պատմում է մի պատմություն, որը սովորել է իր պապիկից։ Հեղինակը հայտնի չէ։ Ի՞նչ գրականություն է։",
    options: [
      { id: "A", textEs: "A) Literatura culta.", textHy: "A) Հեղինակային գրականություն։" },
      { id: "B", textEs: "B) Literatura popular.", textHy: "B) Ժողովրդական գրականություն։" },
      { id: "C", textEs: "C) Literatura científica.", textHy: "C) Գիտական գրականություն։" },
      { id: "D", textEs: "D) Literatura periodística.", textHy: "D) Լրագրողական գրականություն։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Al transmitirse oralmente por generaciones y no conocerse el autor, es literatura popular.",
    explanationHy: "Ճիշտ պատասխանն է B: Քանի որ փոխանցվել է բանավոր և հեղինակն անհայտ է, դա ժողովրդական գրականություն է։"
  },
  {
    id: 206,
    part: "Parte 1: Literatura popular y culta",
    partHy: "Մաս 1. Ժողովրդական և հեղինակային գրականություն",
    questionEs: "6. ¿Cuál de estas afirmaciones es falsa?",
    questionHy: "6. Ո՞ր պնդումն է սխալ։",
    options: [
      { id: "A", textEs: "A) La literatura popular puede ser anónima.", textHy: "A) Ժողովրդական գրականությունը կարող է լինել անանուն։" },
      { id: "B", textEs: "B) La literatura culta suele tener un autor conocido.", textHy: "B) Հեղինակային գրականությունը սովորաբար ունի հայտնի հեղինակ։" },
      { id: "C", textEs: "C) La literatura popular nunca cambia.", textHy: "C) Ժողովրդական գրականությունը երբեք չի փոխվում։" },
      { id: "D", textEs: "D) La literatura culta suele transmitirse por escrito.", textHy: "D) Հեղինակային գրականությունը սովորաբար փոխանցվում է գրավոր։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: Es falsa porque la literatura popular SÍ cambia con el tiempo y las versiones orales.",
    explanationHy: "Ճիշտ պատասխանն է C (սխալ պնդումը)․ ժողովրդական գրականությունը կարող է փոփոխվել և ունենալ տարբերակներ։"
  },

  // PARTE 2. ROMANCE, LEYENDA, MITO Y CUENTO (7-14)
  {
    id: 207,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "7. ¿Qué es un romance?",
    questionHy: "7. Ի՞նչ է ռոմանսը։",
    options: [
      { id: "A", textEs: "A) Un poema narrativo de versos generalmente octosílabos.", textHy: "A) Պատմողական բանաստեղծություն՝ սովորաբար 8-վանկանի տողերով։" },
      { id: "B", textEs: "B) Una novela muy larga.", textHy: "B) Շատ երկար վեպ։" },
      { id: "C", textEs: "C) Un texto científico.", textHy: "C) Գիտական տեքստ։" },
      { id: "D", textEs: "D) Una obra teatral.", textHy: "D) Թատերական պիես։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: El romance es un poema narrativo característico de la literatura hispánica de versos octosílabos.",
    explanationHy: "Ճիշտ պատասխանն է A: Ռոմանսը պատմողական բանաստեղծություն է՝ ութվանկանի տողերով։"
  },
  {
    id: 208,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "8. ¿Qué versos riman normalmente en un romance?",
    questionHy: "8. Ռոմանսում սովորաբար ո՞ր տողերն են հանգավորվում։",
    options: [
      { id: "A", textEs: "A) Los impares.", textHy: "A) Կենտ տողերը։" },
      { id: "B", textEs: "B) Todos los versos.", textHy: "B) Բոլոր տողերը։" },
      { id: "C", textEs: "C) Los pares.", textHy: "C) Զույգ տողերը։" },
      { id: "D", textEs: "D) Ninguno.", textHy: "D) Ոչ մի տող։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: En el romance riman los versos pares (2, 4, 6, 8...), y los impares quedan libres.",
    explanationHy: "Ճիշտ պատասխանն է C: Ռոմանսում հանգավորվում են զույգ տողերը (los pares), իսկ կենտերը ազատ են։"
  },
  {
    id: 209,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "9. ¿Qué tipo de rima presentan normalmente los versos pares de un romance?",
    questionHy: "9. Ռոմանսի զույգ տողերը սովորաբար ի՞նչ հանգ ունեն։",
    options: [
      { id: "A", textEs: "A) Rima consonante.", textHy: "A) Բաղաձայնական (կոնսոնանս) հանգ։" },
      { id: "B", textEs: "B) Rima asonante.", textHy: "B) Ձայնավորային (ասոնանս) հանգ։" },
      { id: "C", textEs: "C) Rima libre.", textHy: "C) Ազատ հանգ։" },
      { id: "D", textEs: "D) No tienen rima.", textHy: "D) Հանգ չունեն։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Rima asonante (solo coinciden las vocales a partir de la última vocal tónica).",
    explanationHy: "Ճիշտ պատասխանն է B: Ձայնավորային (ասոնանս) հանգ՝ համընկնում են միայն ձայնավորները։"
  },
  {
    id: 210,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "10. ¿Qué es una leyenda?",
    questionHy: "10. Ի՞նչ է ավանդազրույցը (leyenda)։",
    options: [
      { id: "A", textEs: "A) Una noticia actual.", textHy: "A) Ընթացիկ լուր։" },
      { id: "B", textEs: "B) Una explicación matemática.", textHy: "B) Մաթեմատիկական բացատրություն։" },
      { id: "C", textEs: "C) Una narración que mezcla elementos reales y fantásticos.", textHy: "C) Պատմություն, որը միավորում է իրական և ֆանտաստիկ տարրեր։" },
      { id: "D", textEs: "D) Un texto exclusivamente científico.", textHy: "D) Բացառապես գիտական տեքստ։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: La leyenda combina una base geográfica o histórica real con sucesos sobrenaturales.",
    explanationHy: "Ճիշտ պատասխանն է C: Ավանդազրույցը իրական հիմք ունեցող պատմություն է՝ ֆանտաստիկ տարրերով։"
  },
  {
    id: 211,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "11. ¿Qué es un mito?",
    questionHy: "11. Ի՞նչ է առասպելը (mito)։",
    options: [
      { id: "A", textEs: "A) Una narración tradicional que explica el origen del mundo mediante dioses.", textHy: "A) Ավանդական պատմություն, որը բացատրում է աշխարհի ծագումը աստվածների միջոցով։" },
      { id: "B", textEs: "B) Una noticia deportiva.", textHy: "B) Սպորտային լուր։" },
      { id: "C", textEs: "C) Una descripción de una ciudad.", textHy: "C) Քաղաքի նկարագրություն։" },
      { id: "D", textEs: "D) Una conversación cotidiana.", textHy: "D) Առօրյա զրույց։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: El mito busca responder al origen del universo y las fuerzas de la naturaleza a través de deidades.",
    explanationHy: "Ճիշտ պատասխանն է A: Առասպելը բացատրում է աշխարհի և բնության ծագումը աստվածների և հերոսների միջոցով։"
  },
  {
    id: 212,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "12. ¿Cuál es una característica del cuento?",
    questionHy: "12. Ո՞րն է պատմվածքի (cuento) առանձնահատկությունը։",
    options: [
      { id: "A", textEs: "A) Siempre tiene cientos de páginas.", textHy: "A) Միշտ ունի հարյուրավոր էջեր։" },
      { id: "B", textEs: "B) Es una narración breve con un argumento generalmente sencillo.", textHy: "B) Կարճ պատմություն է՝ ընդհանուր առմամբ պարզ սյուժեով։" },
      { id: "C", textEs: "C) Siempre está escrito en verso.", textHy: "C) Միշտ գրված է չափածո։" },
      { id: "D", textEs: "D) No tiene personajes.", textHy: "D) Կերպարներ չունի։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Brevedad y argumento concentrado con pocos personajes.",
    explanationHy: "Ճիշտ պատասխանն է B: Կարճ ծավալ, քիչ կերպարներ և պարզ սյուժե։"
  },
  {
    id: 213,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "13. Una historia explica cómo un dios creó las montañas. ¿Qué tipo de narración es?",
    questionHy: "13. Պատմությունը բացատրում է, թե ինչպես աստվածը ստեղծեց լեռները։ Ի՞նչ ժանր է։",
    options: [
      { id: "A", textEs: "A) Cuento.", textHy: "A) Պատմվածք։" },
      { id: "B", textEs: "B) Leyenda.", textHy: "B) Ավանդազրույց։" },
      { id: "C", textEs: "C) Mito.", textHy: "C) Առասպել։" },
      { id: "D", textEs: "D) Romance.", textHy: "D) Ռոմանս։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: Es un mito por la presencia de un dios creador y la explicación de un origen geológico primordial.",
    explanationHy: "Ճիշտ պատասխանն է C: Առասպել է (Mito), քանի որ աստվածն է ստեղծում լեռները։"
  },
  {
    id: 214,
    part: "Parte 2: Romance, leyenda, mito y cuento",
    partHy: "Մաս 2. Ռոմանս, ավանդազրույց, առասպել և պատմվածք",
    questionEs: "14. En un pueblo cuentan que una mujer misteriosa aparece cada noche junto a un castillo antiguo. ¿Qué tipo de relato es?",
    questionHy: "14. Գյուղում պատմում են, որ խորհրդավոր կինն ամեն գիշեր հայտնվում է հին ամրոցի մոտ։ Ի՞նչ ժանր է։",
    options: [
      { id: "A", textEs: "A) Leyenda.", textHy: "A) Ավանդազրույց։" },
      { id: "B", textEs: "B) Mito.", textHy: "B) Առասպել։" },
      { id: "C", textEs: "C) Noticia.", textHy: "C) Լուր։" },
      { id: "D", textEs: "D) Biografía.", textHy: "D) Կենսագրություն։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Leyenda popular localizada en un pueblo y castillo concretos con aparición espectral.",
    explanationHy: "Ճիշտ պատասխանն է A: Ավանդազրույց է (Leyenda)՝ կոնկրետ վայրով և գերբնական հայտնությամբ։"
  },

  // PARTE 3. LENGUAJE LITERARIO, VERSO Y PROSA (15-20)
  {
    id: 215,
    part: "Parte 3: Lenguaje literario, verso y prosa",
    partHy: "Մաս 3. Գեղարվեստական լեզու, չափածո և արձակ",
    questionEs: "15. ¿Cuál es la finalidad principal del lenguaje literario?",
    questionHy: "15. Ո՞րն է գեղարվեստական լեզվի հիմնական նպատակը։",
    options: [
      { id: "A", textEs: "A) Transmitir únicamente información técnica.", textHy: "A) Միայն տեխնիկական տեղեկություն փոխանցելը։" },
      { id: "B", textEs: "B) Crear una expresión estética y provocar emociones.", textHy: "B) Ստեղծել գեղագիտական արտահայտություն և հույզեր արթնացնել։" },
      { id: "C", textEs: "C) Evitar las figuras literarias.", textHy: "C) Խուսափել գրական հնարքներից։" },
      { id: "D", textEs: "D) Utilizar siempre palabras difíciles.", textHy: "D) Միշտ դժվար բառեր օգտագործելը։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: El lenguaje literario busca la belleza formal, el goce estético y la emoción del lector.",
    explanationHy: "Ճիշտ պատասխանն է B: Գեղարվեստական լեզուն նպատակ ունի ստեղծել գեղագիտական տպավորություն և հույզեր։"
  },
  {
    id: 216,
    part: "Parte 3: Lenguaje literario, verso y prosa",
    partHy: "Մաս 3. Գեղարվեստական լեզու, չափածո և արձակ",
    questionEs: "16. ¿Cuál de estas frases utiliza lenguaje literario?",
    questionHy: "16. Ո՞ր նախադասությունն է օգտագործում գեղարվեստական լեզու։",
    options: [
      { id: "A", textEs: "A) Hoy hace frío.", textHy: "A) Այսօր ցուրտ է։" },
      { id: "B", textEs: "B) La temperatura es de diez grados.", textHy: "B) Ջերմաստիճանը տասը աստիճան է։" },
      { id: "C", textEs: "C) El viento acaricia las hojas.", textHy: "C) Քամին շոյում է տերևները։" },
      { id: "D", textEs: "D) Mañana es lunes.", textHy: "D) Վաղը երկուշաբթի է։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: «El viento acaricia las hojas» utiliza personificación figurativa.",
    explanationHy: "Ճիշտ պատասխանն է C: «Քամին շոյում է տերևները» գեղարվեստական պատկերավոր արտահայտություն է։"
  },
  {
    id: 217,
    part: "Parte 3: Lenguaje literario, verso y prosa",
    partHy: "Մաս 3. Գեղարվեստական լեզու, չափածո և արձակ",
    questionEs: "17. ¿Qué caracteriza al verso?",
    questionHy: "17. Ի՞նչն է բնորոշ չափածոյին։",
    options: [
      { id: "A", textEs: "A) Siempre se escribe en párrafos.", textHy: "A) Միշտ գրվում է պարբերություններով։" },
      { id: "B", textEs: "B) Puede tener métrica, ritmo y rima.", textHy: "B) Կարող է ունենալ չափ, ռիթմ և հանգ։" },
      { id: "C", textEs: "C) Nunca utiliza recursos literarios.", textHy: "C) Երբեք չի օգտագործում գրական հնարքներ։" },
      { id: "D", textEs: "D) No puede expresar emociones.", textHy: "D) Չի կարող արտահայտել հույզեր։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: El verso se estructura mediante ritmo, acentos, pausas y a menudo métrica y rima.",
    explanationHy: "Ճիշտ պատասխանն է B: Չափածոն ունի ռիթմ, վանկային չափ և հանգ։"
  },
  {
    id: 218,
    part: "Parte 3: Lenguaje literario, verso y prosa",
    partHy: "Մաս 3. Գեղարվեստական լեզու, չափածո և արձակ",
    questionEs: "18. ¿Qué caracteriza a la prosa?",
    questionHy: "18. Ի՞նչն է բնորոշ արձակին։",
    options: [
      { id: "A", textEs: "A) Siempre tiene rima.", textHy: "A) Միշտ ունի հանգ։" },
      { id: "B", textEs: "B) Siempre utiliza versos octosílabos.", textHy: "B) Միշտ օգտագործում է ութվանկանի տողեր։" },
      { id: "C", textEs: "C) Se organiza normalmente en oraciones y párrafos.", textHy: "C) Սովորաբար կազմակերպվում է նախադասություններով և պարբերություններով։" },
      { id: "D", textEs: "D) No puede ser literaria.", textHy: "D) Չի կարող լինել գեղարվեստական։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: La prosa se distribuye de manera continua ocupando todo el renglón en oraciones y párrafos.",
    explanationHy: "Ճիշտ պատասխանն է C: Արձակը գրվում է նախադասություններով և պարբերություններով։"
  },
  {
    id: 219,
    part: "Parte 3: Lenguaje literario, verso y prosa",
    partHy: "Մաս 3. Գեղարվեստական լեզու, չափածո և արձակ",
    questionEs: "19. ¿Cuál de estos textos está escrito en prosa?",
    questionHy: "19. Ո՞ր տեքստն է գրված արձակով։",
    options: [
      { id: "A", textEs: "A) La luna brilla sobre el mar.", textHy: "A) La luna brilla sobre el mar." },
      { id: "B", textEs: "B) El niño abrió la puerta, entró en casa y saludó a su madre.", textHy: "B) El niño abrió la puerta, entró en casa y saludó a su madre." },
      { id: "C", textEs: "C) Verde que te quiero verde.", textHy: "C) Verde que te quiero verde." },
      { id: "D", textEs: "D) Bajo la luna plateada / caminaba una muchacha.", textHy: "D) Bajo la luna plateada / caminaba una muchacha." }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Es una narración en prosa continua organizada en una oración completa ordinaria.",
    explanationHy: "Ճիշտ պատասխանն է B: Ամբողջական արձակ նախադասություն է։"
  },
  {
    id: 220,
    part: "Parte 3: Lenguaje literario, verso y prosa",
    partHy: "Մաս 3. Գեղարվեստական լեզու, չափածո և արձակ",
    questionEs: "20. ¿Cuál es la diferencia entre verso y prosa?",
    questionHy: "20. Ո՞րն է արձակի և չափածոյի հիմնական տարբերությունը։",
    options: [
      { id: "A", textEs: "A) El verso suele presentar una organización rítmica y métrica; la prosa no sigue una métrica regular.", textHy: "A) Չափածոն ունի ռիթմիկ և չափային կառուցվածք, իսկ արձակը չունի կանոնավոր չափ։" },
      { id: "B", textEs: "B) La prosa siempre tiene rima.", textHy: "B) Արձակը միշտ հանգավոր է։" },
      { id: "C", textEs: "C) El verso solo aparece en los cuentos.", textHy: "C) Չափածոն միայն պատմվածքներում է։" },
      { id: "D", textEs: "D) La prosa no puede tener lenguaje literario.", textHy: "D) Արձակը չի կարող գեղարվեստական լինել։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: El verso está pautado por la métrica y el ritmo estrófico; la prosa fluye en oraciones continuas.",
    explanationHy: "Ճիշտ պատասխանն է A: Չափածոն կազմակերպված է ռիթմով և տողերով, իսկ արձակը՝ նախադասություններով։"
  },

  // PARTE 4. FIGURAS LITERARIAS — NIVEL FÓNICO (21-26)
  {
    id: 221,
    part: "Parte 4: Figuras literarias — Nivel fónico",
    partHy: "Մաս 4. Հնչյունային մակարդակի արտահայտչամիջոցներ",
    questionEs: "21. ¿Qué figura literaria aparece en «Tres tristes tigres tragan trigo»?",
    questionHy: "21. Ո՞ր արտահայտչամիջոցն է «Tres tristes tigres tragan trigo» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Metáfora.", textHy: "A) Փոխաբերություն։" },
      { id: "B", textEs: "B) Aliteración.", textHy: "B) Ալիտերացիա։" },
      { id: "C", textEs: "C) Hipérbaton.", textHy: "C) Հիպերբատոն։" },
      { id: "D", textEs: "D) Pleonasmo.", textHy: "D) Պլեոնազմ։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Aliteración por la repetición deliberada de los sonidos /t/ y /r/.",
    explanationHy: "Ճիշտ պատասխանն է B: Ալիտերացիա՝ /t/ և /r/ հնչյունների կրկնության պատճառով։"
  },
  {
    id: 222,
    part: "Parte 4: Figuras literarias — Nivel fónico",
    partHy: "Մաս 4. Հնչյունային մակարդակի արտահայտչամիջոցներ",
    questionEs: "22. ¿Qué figura aparece en «¡Tic, tac! Sonaba el reloj»?",
    questionHy: "22. Ո՞ր արտահայտչամիջոցն է «¡Tic, tac! Sonaba el reloj» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Onomatopeya.", textHy: "A) Օնոմատոպեա (Բնաձայնություն)։" },
      { id: "B", textEs: "B) Anáfora.", textHy: "B) Անաֆորա։" },
      { id: "C", textEs: "C) Enumeración.", textHy: "C) Թվարկում։" },
      { id: "D", textEs: "D) Metáfora.", textHy: "D) Փոխաբերություն։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Onomatopeya, reproduce el sonido mecánico del reloj.",
    explanationHy: "Ճիշտ պատասխանն է A: Օնոմատոպեա՝ ժամացույցի չխկոցի ձայնի նմանակում։"
  },
  {
    id: 223,
    part: "Parte 4: Figuras literarias — Nivel fónico",
    partHy: "Մաս 4. Հնչյունային մակարդակի արտահայտչամիջոցներ",
    questionEs: "23. ¿Qué figura aparece en «El hombre tiene hambre»?",
    questionHy: "23. Ո՞ր արտահայտչամիջոցն է «El hombre tiene hambre» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Hipérbaton.", textHy: "A) Հիպերբատոն։" },
      { id: "B", textEs: "B) Polisíndeton.", textHy: "B) Պոլիսինդետոն։" },
      { id: "C", textEs: "C) Paronomasia.", textHy: "C) Պարոնոմազիա։" },
      { id: "D", textEs: "D) Metáfora.", textHy: "D) Փոխաբերություն։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: Paronomasia, proximidad de «hombre» y «hambre», palabras de sonido casi igual y distinto significado.",
    explanationHy: "Ճիշտ պատասխանն է C: Պարոնոմազիա՝ «hombre» և «hambre» նմանահունչ տարբեր բառերով։"
  },
  {
    id: 224,
    part: "Parte 4: Figuras literarias — Nivel fónico",
    partHy: "Մաս 4. Հնչյունային մակարդակի արտահայտչամիջոցներ",
    questionEs: "24. ¿Qué figura aparece en «Sueño, todo parece un sueño»?",
    questionHy: "24. Ո՞ր արտահայտչամիջոցն է «Sueño, todo parece un sueño» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Epanadiplosis.", textHy: "A) Էպանադիպլոզիս։" },
      { id: "B", textEs: "B) Asíndeton.", textHy: "B) Ասինդետոն։" },
      { id: "C", textEs: "C) Hipérbaton.", textHy: "C) Հիպերբատոն։" },
      { id: "D", textEs: "D) Enumeración.", textHy: "D) Թվարկում։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Epanadiplosis, la palabra «sueño» figura al principio y al final de la misma frase.",
    explanationHy: "Ճիշտ պատասխանն է A: Էպանադիպլոզիս՝ «sueño» բառը նույն նախադասության սկզբում և վերջում է։"
  },
  {
    id: 225,
    part: "Parte 4: Figuras literarias — Nivel fónico",
    partHy: "Մաս 4. Հնչյունային մակարդակի արտահայտչամիջոցներ",
    questionEs: "25. ¿Cuál de estos ejemplos contiene una onomatopeya?",
    questionHy: "25. Ո՞ր օրինակում կա ձայնի նմանակում (onomatopeya)։",
    options: [
      { id: "A", textEs: "A) El cielo es azul.", textHy: "A) Երկինքը կապույտ է։" },
      { id: "B", textEs: "B) ¡Miau, miau!", textHy: "B) ¡Միաու, միաու!։" },
      { id: "C", textEs: "C) La casa es grande.", textHy: "C) Տունը մեծ է։" },
      { id: "D", textEs: "D) El niño está cansado.", textHy: "D) Երեխան հոգնած է։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: «¡Miau, miau!» imita el maullido del gato.",
    explanationHy: "Ճիշտ պատասխանն է B: «¡Miau, miau!» նմանակում է կատվի մլավոցը։"
  },
  {
    id: 226,
    part: "Parte 4: Figuras literarias — Nivel fónico",
    partHy: "Մաս 4. Հնչյունային մակարդակի արտահայտչամիջոցներ",
    questionEs: "26. ¿Qué figura consiste en repetir sonidos semejantes?",
    questionHy: "26. Ո՞ր արտահայտչամիջոցն է կրկնում նման հնչյուններ։",
    options: [
      { id: "A", textEs: "A) Metáfora.", textHy: "A) Փոխաբերություն։" },
      { id: "B", textEs: "B) Pleonasmo.", textHy: "B) Պլեոնազմ։" },
      { id: "C", textEs: "C) Aliteración.", textHy: "C) Ալիտերացիա։" },
      { id: "D", textEs: "D) Hipérbaton.", textHy: "D) Հիպերբատոն։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: La aliteración es la repetición deliberada de fonemas en un enunciado.",
    explanationHy: "Ճիշտ պատասխանն է C: Ալիտերացիան հնչյունների կանոնավոր կրկնությունն է։"
  },

  // PARTE 5. FIGURAS LITERARIAS — NIVEL MORFOSINTÁCTICO (27-34)
  {
    id: 227,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "27. ¿Qué figura aparece en «Quiero vivir, quiero soñar, quiero viajar»?",
    questionHy: "27. Ո՞ր արտահայտչամիջոցն է «Quiero vivir, quiero soñar, quiero viajar» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Anáfora.", textHy: "A) Անաֆորա։" },
      { id: "B", textEs: "B) Onomatopeya.", textHy: "B) Օնոմատոպեա։" },
      { id: "C", textEs: "C) Paronomasia.", textHy: "C) Պարոնոմազիա։" },
      { id: "D", textEs: "D) Hipérbaton.", textHy: "D) Հիպերբատոն։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Anáfora, por la repetición de «quiero» al principio de cada miembro oracional.",
    explanationHy: "Ճիշտ պատասխանն է A: Անաֆորա՝ «quiero» բառի կրկնություն յուրաքանչյուր հատվածի սկզբում։"
  },
  {
    id: 228,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "28. ¿Qué figura aparece en «Corre, salta, juega, ríe» por la ausencia de conjunciones?",
    questionHy: "28. Ո՞ր արտահայտչամիջոցն է «Corre, salta, juega, ríe» նախադասության մեջ՝ շաղկապների բացակայության պատճառով։",
    options: [
      { id: "A", textEs: "A) Polisíndeton.", textHy: "A) Պոլիսինդետոն։" },
      { id: "B", textEs: "B) Asíndeton.", textHy: "B) Ասինդետոն։" },
      { id: "C", textEs: "C) Pleonasmo.", textHy: "C) Պլեոնազմ։" },
      { id: "D", textEs: "D) Metáfora.", textHy: "D) Փոխաբերություն։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Asíndeton, supresión de enlaces conjuntivos.",
    explanationHy: "Ճիշտ պատասխանն է B: Ասինդետոն՝ շաղկապների բացակայության պատճառով։"
  },
  {
    id: 229,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "29. ¿Qué figura aparece en «Y ríe y canta y baila y juega»?",
    questionHy: "29. Ո՞ր արտահայտչամիջոցն է «Y ríe y canta y baila y juega» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Hipérbaton.", textHy: "A) Հիպերբատոն։" },
      { id: "B", textEs: "B) Anáfora.", textHy: "B) Անաֆորա։" },
      { id: "C", textEs: "C) Polisíndeton.", textHy: "C) Պոլիսինդետոն։" },
      { id: "D", textEs: "D) Onomatopeya.", textHy: "D) Օնոմատոպեա։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: Polisíndeton, repetición insistente de la conjunción «y».",
    explanationHy: "Ճիշտ պատասխանն է C: Պոլիսինդետոն՝ «y» շաղկապի բազմակի կրկնությամբ։"
  },
  {
    id: 230,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "30. ¿Qué figura aparece en «Con mis propios ojos lo vi»?",
    questionHy: "30. Ո՞ր արտահայտչամիջոցն է «Con mis propios ojos lo vi» նախադասության մեջ՝ ավելորդ բառերի պատճառով։",
    options: [
      { id: "A", textEs: "A) Pleonasmo.", textHy: "A) Պլեոնազմ։" },
      { id: "B", textEs: "B) Metáfora.", textHy: "B) Փոխաբերություն։" },
      { id: "C", textEs: "C) Aliteración.", textHy: "C) Ալիտերացիա։" },
      { id: "D", textEs: "D) Paronomasia.", textHy: "D) Պարոնոմազիա։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Pleonasmo, ya que ver siempre se hace con los ojos; añade intensidad.",
    explanationHy: "Ճիշտ պատասխանն է A: Պլեոնազմ՝ «սեփական աչքերով տեսնելը» իմաստային ավելաբանություն է շեշտադրման համար։"
  },
  {
    id: 231,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "31. ¿Qué figura aparece en «Del monte en la ladera crece un árbol»?",
    questionHy: "31. Ո՞ր արտահայտչամիջոցն է «Del monte en la ladera crece un árbol» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Enumeración.", textHy: "A) Թվարկում։" },
      { id: "B", textEs: "B) Hipérbaton.", textHy: "B) Հիպերբատոն։" },
      { id: "C", textEs: "C) Onomatopeya.", textHy: "C) Օնոմատոպեա։" },
      { id: "D", textEs: "D) Epanadiplosis.", textHy: "D) Էպանադիպլոզիս։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Hipérbaton, desorden sintáctico respecto al orden lógico («Un árbol crece en la ladera del monte»).",
    explanationHy: "Ճիշտ պատասխանն է B: Հիպերբատոն՝ շարադասության փոփոխություն («Un árbol crece en la ladera del monte»)։"
  },
  {
    id: 232,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "32. ¿Qué figura aparece en «Compré pan, leche, huevos y queso»?",
    questionHy: "32. Ո՞ր արտահայտչամիջոցն է «Compré pan, leche, huevos y queso» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Metáfora.", textHy: "A) Փոխաբերություն։" },
      { id: "B", textEs: "B) Anáfora.", textHy: "B) Անաֆորա։" },
      { id: "C", textEs: "C) Enumeración.", textHy: "C) Թվարկում։" },
      { id: "D", textEs: "D) Hipérbaton.", textHy: "D) Հիպերբատոն։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: Enumeración de alimentos comprados.",
    explanationHy: "Ճիշտ պատասխանն է C: Թվարկում (enumeración)՝ գնված մթերքների հաջորդական շարք։"
  },
  {
    id: 233,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "33. ¿Cuál de estos ejemplos contiene un hipérbaton?",
    questionHy: "33. Ո՞ր նախադասությունն ունի շրջուն շարադասություն (hipérbaton)։",
    options: [
      { id: "A", textEs: "A) María compró flores.", textHy: "A) Մարիան ծաղիկներ գնեց։" },
      { id: "B", textEs: "B) Los niños juegan en el parque.", textHy: "B) Երեխաները խաղում են այգում։" },
      { id: "C", textEs: "C) De flores hermosas estaba lleno el jardín.", textHy: "C) Գեղեցիկ ծաղիկներով լի էր պարտեզը։" },
      { id: "D", textEs: "D) Pedro come una manzana.", textHy: "D) Պեդրոն խնձոր է ուտում։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: «De flores hermosas estaba lleno el jardín» invierte el orden («El jardín estaba lleno de flores hermosas»).",
    explanationHy: "Ճիշտ պատասխանն է C: Շարադասությունը շրջված է (սովորականը՝ «El jardín estaba lleno de flores hermosas»)։"
  },
  {
    id: 234,
    part: "Parte 5: Nivel morfosintáctico",
    partHy: "Մաս 5. Շարահյուսական մակարդակի արտահայտչամիջոցներ",
    questionEs: "34. ¿Qué diferencia hay entre asíndeton y polisíndeton?",
    questionHy: "34. Ի՞նչ տարբերություն կա asíndeton-ի և polisíndeton-ի միջև։",
    options: [
      { id: "A", textEs: "A) El asíndeton elimina conjunciones y el polisíndeton las repite.", textHy: "A) Asíndeton-ը բաց է թողնում շաղկապները, իսկ polisíndeton-ը կրկնում է դրանք։" },
      { id: "B", textEs: "B) Ambos repiten sonidos.", textHy: "B) Երկուսն էլ կրկնում են հնչյուններ։" },
      { id: "C", textEs: "C) El asíndeton es una comparación.", textHy: "C) Asíndeton-ը համեմատություն է։" },
      { id: "D", textEs: "D) El polisíndeton cambia el orden de las palabras.", textHy: "D) Polisíndeton-ը փոխում է բառերի կարգը։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Asíndeton = supresión de nexos; Polisíndeton = abundancia y repetición de nexos.",
    explanationHy: "Ճիշտ պատասխանն է A: Asíndeton = շաղկապների բացակայություն, Polisíndeton = շաղկապների կրկնություն։"
  },

  // PARTE 6. METÁFORAS (35-40)
  {
    id: 235,
    part: "Parte 6: Metáforas",
    partHy: "Մաս 6. Փոխաբերություններ",
    questionEs: "35. ¿Qué figura aparece en «Tus ojos son dos estrellas»?",
    questionHy: "35. Ո՞ր արտահայտչամիջոցն է «Tus ojos son dos estrellas» նախադասության մեջ։",
    options: [
      { id: "A", textEs: "A) Hipérbaton.", textHy: "A) Հիպերբատոն։" },
      { id: "B", textEs: "B) Metáfora.", textHy: "B) Փոխաբերություն։" },
      { id: "C", textEs: "C) Onomatopeya.", textHy: "C) Օնոմատոպեա։" },
      { id: "D", textEs: "D) Anáfora.", textHy: "D) Անաֆորա։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Metáfora, identifica de manera directa los ojos con estrellas sin partículas comparativas.",
    explanationHy: "Ճիշտ պատասխանն է B: Փոխաբերություն (metáfora)՝ աչքերը նույնացվում են աստղերի հետ։"
  },
  {
    id: 236,
    part: "Parte 6: Metáforas",
    partHy: "Մաս 6. Փոխաբերություններ",
    questionEs: "36. En «Tus dientes son perlas», ¿cuál es el elemento real (A)?",
    questionHy: "36. «Tus dientes son perlas» նախադասության մեջ ո՞րն է իրական տարրը (A)։",
    options: [
      { id: "A", textEs: "A) Perlas.", textHy: "A) Մարգարիտներ (Perlas)։" },
      { id: "B", textEs: "B) Dientes.", textHy: "B) Ատամներ (Dientes)։" },
      { id: "C", textEs: "C) Son.", textHy: "C) Են (Son)։" },
      { id: "D", textEs: "D) Tus.", textHy: "D) Քո (Tus)։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: «Dientes» es el objeto real que existe físicamente en la persona (término real A).",
    explanationHy: "Ճիշտ պատասխանն է B: «Dientes» (ատամները) իրական տարրն է (A), որի մասին խոսվում է։"
  },
  {
    id: 237,
    part: "Parte 6: Metáforas",
    partHy: "Մաս 6. Փոխաբերություններ",
    questionEs: "37. En «Tus dientes son perlas», ¿cuál es el elemento imaginario (B)?",
    questionHy: "37. «Tus dientes son perlas» նախադասության մեջ ո՞րն է փոխաբերական/երևակայական տարրը (B)։",
    options: [
      { id: "A", textEs: "A) Dientes.", textHy: "A) Dientes։" },
      { id: "B", textEs: "B) Tus.", textHy: "B) Tus։" },
      { id: "C", textEs: "C) Perlas.", textHy: "C) Perlas (Մարգարիտներ)։" },
      { id: "D", textEs: "D) Son.", textHy: "D) Son։" }
    ],
    correctAnswer: "C",
    explanationEs: "Respuesta C: «Perlas» es el término poético imaginario con el que se compara el brillo y blancura de los dientes.",
    explanationHy: "Ճիշտ պատասխանն է C: «Perlas» (մարգարիտները) փոխաբերական երևակայական տարրն է (B)։"
  },
  {
    id: 238,
    part: "Parte 6: Metáforas",
    partHy: "Մաս 6. Փոխաբերություններ",
    questionEs: "38. ¿Qué estructura tiene «Tu voz es música»?",
    questionHy: "38. Ի՞նչ կառուցվածք ունի «Tu voz es música» փոխաբերությունը։",
    options: [
      { id: "A", textEs: "A) A es B.", textHy: "A) A es B։" },
      { id: "B", textEs: "B) B de A.", textHy: "B) B de A։" },
      { id: "C", textEs: "C) Solo B.", textHy: "C) Solo B։" },
      { id: "D", textEs: "D) A como B.", textHy: "D) A como B։" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: A (voz) es B (música).",
    explanationHy: "Ճիշտ պատասխանն է A: A es B (A = ձայն, B = երաժշտություն)։"
  },
  {
    id: 239,
    part: "Parte 6: Metáforas",
    partHy: "Մաս 6. Փոխաբերություններ",
    questionEs: "39. ¿Qué estructura tiene «La música de tu voz»?",
    questionHy: "39. Ի՞նչ կառուցվածք ունի «La música de tu voz» արտահայտությունը։",
    options: [
      { id: "A", textEs: "A) A es B.", textHy: "A) A es B։" },
      { id: "B", textEs: "B) B de A.", textHy: "B) B de A։" },
      { id: "C", textEs: "C) Solo A.", textHy: "C) Solo A։" },
      { id: "D", textEs: "D) A como B.", textHy: "D) A como B։" }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: B (música) + de + A (voz).",
    explanationHy: "Ճիշտ պատասխանն է B: B de A (B = երաժշտություն + de + A = ձայն)։"
  },
  {
    id: 240,
    part: "Parte 6: Metáforas",
    partHy: "Մաս 6. Փոխաբերություններ",
    questionEs: "40. ¿Cuál de estas frases es una comparación y no una metáfora de identificación?",
    questionHy: "40. Ո՞ր նախադասությունն է համեմատություն (comparación), ոչ թե նույնացնող փոխաբերություն։",
    options: [
      { id: "A", textEs: "A) Tus ojos son estrellas.", textHy: "A) Tus ojos son estrellas." },
      { id: "B", textEs: "B) Tus ojos brillan como estrellas.", textHy: "B) Tus ojos brillan como estrellas." },
      { id: "C", textEs: "C) Las estrellas de tus ojos.", textHy: "C) Las estrellas de tus ojos." },
      { id: "D", textEs: "D) Dos estrellas iluminan tu rostro.", textHy: "D) Dos estrellas iluminan tu rostro." }
    ],
    correctAnswer: "B",
    explanationEs: "Respuesta B: Al incluir el nexo «como», se convierte en una comparación (símil).",
    explanationHy: "Ճիշտ պատասխանն է B: Քանի որ առկա է «como» (ինչպես) շաղկապը, դա համեմատություն է։"
  },

  // PARTE 7. EJERCICIOS PRÁCTICOS (41-50)
  {
    id: 241,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "41. «La luna me sonríe desde el cielo». ¿Qué figura literaria es?",
    questionHy: "41. «La luna me sonríe desde el cielo»։ Ի՞նչ արտահայտչամիջոց է օգտագործված։",
    options: [
      { id: "A", textEs: "A) Personificación (prosopopeya)", textHy: "A) Անձնավորում (պրոսոպոպեա)" },
      { id: "B", textEs: "B) Aliteración", textHy: "B) Ալիտերացիա" },
      { id: "C", textEs: "C) Asíndeton", textHy: "C) Ասինդետոն" },
      { id: "D", textEs: "D) Pleonasmo", textHy: "D) Պլեոնազմ" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Personificación (prosopopeya). Se le atribuye a la luna una cualidad y acción humana: sonreír.",
    explanationHy: "Ճիշտ պատասխանն է A: Անձնավորում (personificación / prosopopeya)․ լուսնին վերագրվում է մարդկային գործողություն՝ ժպտալը։"
  },
  {
    id: 242,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "42. «En el silencio solo se escuchaba el suave susurro». ¿Qué sonido se repite principalmente (aliteración)?",
    questionHy: "42. «En el silencio solo se escuchaba el suave susurro»։ Ո՞ր հնչյունն է կրկնվում (ալիտերացիա)։",
    options: [
      { id: "A", textEs: "A) El sonido /s/", textHy: "A) /s/ հնչյունը" },
      { id: "B", textEs: "B) El sonido /r/", textHy: "B) /r/ հնչյունը" },
      { id: "C", textEs: "C) El sonido /m/", textHy: "C) /m/ հնչյունը" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Aliteración del fonema /s/ (silencio, solo, se, escuchaba, suave, susurro).",
    explanationHy: "Ճիշտ պատասխանն է A: /s/ հնչյունի կրկնությունն է։"
  },
  {
    id: 243,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "43. «Ni come ni bebe ni duerme». ¿Qué figura es por repetir «ni»?",
    questionHy: "43. «Ni come ni bebe ni duerme»։ Ո՞ր արտահայտչամիջոցն է «ni» շաղկապի կրկնությամբ։",
    options: [
      { id: "A", textEs: "A) Polisíndeton", textHy: "A) Պոլիսինդետոն" },
      { id: "B", textEs: "B) Asíndeton", textHy: "B) Ասինդետոն" },
      { id: "C", textEs: "C) Anáfora", textHy: "C) Անաֆորա" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Polisíndeton, repetición de la conjunción «ni».",
    explanationHy: "Ճիշտ պատասխանն է A: Պոլիսինդետոն՝ «ni» շաղկապի բազմակի կրկնություն։"
  },
  {
    id: 244,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "44. «El niño compró libros, cuadernos, lápices, bolígrafos». ¿Qué dos figuras literarias se combinan?",
    questionHy: "44. «El niño compró libros, cuadernos, lápices, bolígrafos»։ Ո՞ր երկու արտահայտչամիջոցներն են համատեղված։",
    options: [
      { id: "A", textEs: "A) Enumeración y asíndeton", textHy: "A) Թվարկում (Enumeración) և ասինդետոն (Asíndeton)" },
      { id: "B", textEs: "B) Metáfora y polisíndeton", textHy: "B) Փոխաբերություն և պոլիսինդետոն" },
      { id: "C", textEs: "C) Hipérbaton y pleonasmo", textHy: "C) Հիպերբատոն և պլեոնազմ" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Enumeración (enumera varios útiles escolares) y asíndeton (sin conjunción «y» final).",
    explanationHy: "Ճիշտ պատասխանն է A: Թվարկում է դպրոցական պարագաները (enumeración) և չունի շաղկապներ (asíndeton)։"
  },
  {
    id: 245,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "45. «Temprano levantó la muerte el vuelo». ¿Qué figura es por el orden de las palabras?",
    questionHy: "45. «Temprano levantó la muerte el vuelo»։ Ո՞ր արտահայտչամիջոցն է՝ բառերի շարադասության տեսանկյունից։",
    options: [
      { id: "A", textEs: "A) Hipérbaton", textHy: "A) Հիպերբատոն" },
      { id: "B", textEs: "B) Onomatopeya", textHy: "B) Օնոմատոպեա" },
      { id: "C", textEs: "C) Paronomasia", textHy: "C) Պարոնոմազիա" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: Hipérbaton. Orden habitual: «La muerte levantó el vuelo temprano».",
    explanationHy: "Ճիշտ պատասխանն է A: Հիպերբատոն (սովորական շարադասություն՝ «La muerte levantó el vuelo temprano»)։"
  },
  {
    id: 246,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "46. Completa la definición: La literatura popular suele ser __________ y se transmite de forma __________.",
    questionHy: "46. Լրացրու բաց թողնված բառերը․ La literatura popular suele ser __________ y se transmite de forma __________.",
    options: [
      { id: "A", textEs: "A) anónima / oral", textHy: "A) anónima (անանուն) / oral (բանավոր)" },
      { id: "B", textEs: "B) escrita / fija", textHy: "B) escrita / fija" },
      { id: "C", textEs: "C) científica / impresa", textHy: "C) científica / impresa" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: anónima / oral.",
    explanationHy: "Ճիշտ պատասխանն է A: anónima (անանուն) / oral (բանավոր)։"
  },
  {
    id: 247,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "47. Completa la definición: El romance tiene versos __________ y rima __________ en los versos pares.",
    questionHy: "47. Լրացրու սահմանումը․ El romance tiene versos __________ y rima __________ en los versos pares.",
    options: [
      { id: "A", textEs: "A) octosílabos / asonante", textHy: "A) octosílabos (8-վանկանի) / asonante (ձայնավորային)" },
      { id: "B", textEs: "B) endecasílabos / consonante", textHy: "B) 11-վանկանի / կոնսոնանս" },
      { id: "C", textEs: "C) libres / perfecta", textHy: "C) ազատ / կատարյալ" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: versos octosílabos (8 sílabas) y rima asonante en los pares.",
    explanationHy: "Ճիշտ պատասխանն է A: octosílabos (8-վանկանի տողեր) և asonante (ձայնավորային հանգ զույգ տողերում)։"
  },
  {
    id: 248,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "48. Completa la definición: La __________ es una narración que mezcla elementos reales y fantásticos.",
    questionHy: "48. Լրացրու սահմանումը․ La __________ es una narración que mezcla elementos reales y fantásticos.",
    options: [
      { id: "A", textEs: "A) leyenda", textHy: "A) leyenda (ավանդազրույց)" },
      { id: "B", textEs: "B) noticia", textHy: "B) noticia" },
      { id: "C", textEs: "C) biografía", textHy: "C) biografía" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: leyenda.",
    explanationHy: "Ճիշտ պատասխանն է A: leyenda (ավանդազրույց)։"
  },
  {
    id: 249,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "49. Completa la definición: El __________ es una narración tradicional sobre dioses o el origen del mundo.",
    questionHy: "49. Լրացրու սահմանումը․ El __________ es una narración tradicional sobre dioses o el origen del mundo.",
    options: [
      { id: "A", textEs: "A) mito", textHy: "A) mito (առասպել)" },
      { id: "B", textEs: "B) romance", textHy: "B) romance" },
      { id: "C", textEs: "C) cuento moderno", textHy: "C) cuento moderno" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: mito.",
    explanationHy: "Ճիշտ պատասխանն է A: mito (առասպել)։"
  },
  {
    id: 250,
    part: "Parte 7: Ejercicios prácticos",
    partHy: "Մաս 7. Գործնական վարժություններ",
    questionEs: "50. Completa la definición: La __________ consiste en identificar un elemento real con otro imaginario por su semejanza.",
    questionHy: "50. Լրացրու սահմանումը․ La __________ consiste en identificar un elemento real con otro imaginario por su semejanza.",
    options: [
      { id: "A", textEs: "A) metáfora", textHy: "A) metáfora (փոխաբերություն)" },
      { id: "B", textEs: "B) anáfora", textHy: "B) anáfora" },
      { id: "C", textEs: "C) hipérbaton", textHy: "C) hipérbaton" }
    ],
    correctAnswer: "A",
    explanationEs: "Respuesta A: metáfora.",
    explanationHy: "Ճիշտ պատասխանն է A: metáfora (փոխաբերություն)։"
  }
];

// 8. SIMULACRO DE EXAMEN (TIPO TEST + PREGUNTA DE DESARROLLO)
export const SIMULACRO_PREGUNTAS: ExamQuestion[] = [
  {
    id: 87,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ (7-րդ դասարան)",
    questionEs: "87. ¿Qué figura literaria pertenece al nivel fónico?",
    questionHy: "87. Ո՞ր արտահայտչամիջոցն է պատկանում հնչյունային մակարդակին (nivel fónico)։",
    options: [
      { id: "A", textEs: "A. Aliteración", textHy: "A. Ալիտերացիա" },
      { id: "B", textEs: "B. Hipérbaton", textHy: "B. Հիպերբատոն" },
      { id: "C", textEs: "C. Metáfora", textHy: "C. Փոխաբերություն" },
      { id: "D", textEs: "D. Enumeración", textHy: "D. Թվարկում" }
    ],
    correctAnswer: "A",
    explanationEs: "La aliteración trabaja con los sonidos (fonemas), por lo que pertenece al nivel fónico (junto con onomatopeya, paronomasia y epanadiplosis).",
    explanationHy: "Ալիտերացիան հնչյունների կրկնությունն է և պատկանում է հնչյունային մակարդակին (onomatopeya-ի, paronomasia-ի և epanadiplosis-ի հետ միասին)։"
  },
  {
    id: 88,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "88. ¿Cuál tiene lenguaje literario?",
    questionHy: "88. Ո՞ր նախադասությունն ունի գեղարվեստական լեզու։",
    options: [
      { id: "A", textEs: "A. Hay viento.", textHy: "A. Քամի կա։" },
      { id: "B", textEs: "B. El viento cantó mi nombre.", textHy: "B. Քամին երգեց իմ անունը։" },
      { id: "C", textEs: "C. Está nublado.", textHy: "C. Ամպամած է։" },
      { id: "D", textEs: "D. La temperatura bajó.", textHy: "D) Ջերմաստիճանն իջավ։" }
    ],
    correctAnswer: "B",
    explanationEs: "«El viento cantó mi nombre» utiliza una personificación poética que busca belleza y emoción estética.",
    explanationHy: "«Քամին երգեց իմ անունը» գեղարվեստական պատկերավոր արտահայտություն է (անձնավորում)։"
  },
  {
    id: 89,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "89. Un relato en el que una diosa crea las montañas es…",
    questionHy: "89. Պատմությունը, որտեղ աստվածուհին ստեղծում է լեռները, հանդիսանում է…",
    options: [
      { id: "A", textEs: "A. un cuento realista", textHy: "A. ռեալիստական պատմվածք" },
      { id: "B", textEs: "B. una noticia", textHy: "B. լուր/հոդված" },
      { id: "C", textEs: "C. un mito", textHy: "C. առասպել (mito)" },
      { id: "D", textEs: "D. un romance", textHy: "D. ռոմանս" }
    ],
    correctAnswer: "C",
    explanationEs: "Es un mito porque interviene una diosa explicando el origen cósmico/geográfico del mundo.",
    explanationHy: "Առասպել է (mito), քանի որ աստվածային էակն է բացատրում բնության ծագումը։"
  },
  {
    id: 90,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "90. En un romance, los versos pares suelen tener rima…",
    questionHy: "90. Ռոմանսում զույգ տողերը սովորաբար ունեն ի՞նչ հանգ…",
    options: [
      { id: "A", textEs: "A. consonante", textHy: "A. բաղաձայնական (կոնսոնանս)" },
      { id: "B", textEs: "B. asonante", textHy: "B. ձայնավորային (ասոնանս)" },
      { id: "C", textEs: "C. siempre libre", textHy: "C. միշտ ազատ" },
      { id: "D", textEs: "D. ninguna", textHy: "D. ոչ մի" }
    ],
    correctAnswer: "B",
    explanationEs: "En el romance clásico, los versos pares tienen rima asonante y los impares quedan libres.",
    explanationHy: "Ռոմանսում զույգ տողերը ունեն ասոնանս (ձայնավորային) հանգ, իսկ կենտերը՝ ազատ են։"
  },
  {
    id: 91,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "91. ¿Qué diferencia hay entre aliteración y paronomasia?",
    questionHy: "91. Ի՞նչ տարբերություն կա ալիտերացիայի և պարոնոմազիայի միջև։",
    options: [
      { id: "A", textEs: "A. No hay diferencia", textHy: "A. Տարբերություն չկա" },
      { id: "B", textEs: "B. La primera repite sonidos; la segunda acerca palabras parecidas", textHy: "B. Առաջինը կրկնում է հնչյուններ, երկրորդը մոտեցնում է նմանահունչ բառեր" },
      { id: "C", textEs: "C. Las dos cambian el orden", textHy: "C. Երկուսն էլ փոխում են շարադասությունը" },
      { id: "D", textEs: "D. Las dos son metáforas", textHy: "D. Երկուսն էլ փոխաբերություններ են" }
    ],
    correctAnswer: "B",
    explanationEs: "Aliteración repite sonidos/letras («silban serpientes»). Paronomasia utiliza palabras diferentes pero muy parecidas en su forma fónica («casa / cosa», «hombre / hambre»).",
    explanationHy: "Ալիտերացիան կրկնում է հնչյուններ, իսկ պարոնոմազիան օգտագործում է նմանահունչ, բայց տարբեր իմաստ ունեցող բառեր։"
  },
  {
    id: 92,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "92. «Saltar, correr, reír». ¿Qué recursos pueden reconocerse?",
    questionHy: "92. «Saltar, correr, reír»։ Ի՞նչ գրական հնարքներ կարելի է ճանաչել։",
    options: [
      { id: "A", textEs: "A. Metáfora y mito", textHy: "A. Փոխաբերություն և առասպել" },
      { id: "B", textEs: "B. Hipérbaton y leyenda", textHy: "B. Հիպերբատոն և ավանդազրույց" },
      { id: "C", textEs: "C. Asíndeton y enumeración", textHy: "C. Ասինդետոն (առանց շաղկապի) և թվարկում" },
      { id: "D", textEs: "D. Solo polisíndeton", textHy: "D. Միայն պոլիսինդետոն" }
    ],
    correctAnswer: "C",
    explanationEs: "Es una enumeración de tres acciones y al mismo tiempo un asíndeton por la omisión de nexos conjuntivos.",
    explanationHy: "Ե՛վ թվարկում է (երեք գործողություն), և՛ ասինդետոն (շաղկապների բացակայություն)։"
  },
  {
    id: 93,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "93. ¿Dónde hay polisíndeton?",
    questionHy: "93. Որտե՞ղ կա պոլիսինդետոն (բազմաշաղկապություն)։",
    options: [
      { id: "A", textEs: "A. Ella corre, canta, juega.", textHy: "A. Ella corre, canta, juega." },
      { id: "B", textEs: "B. Ella corre y canta y juega y ríe.", textHy: "B. Ella corre y canta y juega y ríe." },
      { id: "C", textEs: "C. Corre rápido.", textHy: "C. Corre rápido." },
      { id: "D", textEs: "D. Ella está feliz.", textHy: "D. Ella está feliz." }
    ],
    correctAnswer: "B",
    explanationEs: "«Ella corre y canta y juega y ríe» repite expresamente la conjunción «y».",
    explanationHy: "«Ella corre y canta y juega y ríe» նախադասության մեջ «y» շաղկապը կրկնվում է բազմիցս։"
  },
  {
    id: 94,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "94. «Canto, dame fuerzas, canto». ¿Qué figura aparece?",
    questionHy: "94. «Canto, dame fuerzas, canto»։ Ո՞ր արտահայտչամիջոցն է։",
    options: [
      { id: "A", textEs: "A. Epanadiplosis", textHy: "A. Էպանադիպլոզիս" },
      { id: "B", textEs: "B. Anáfora", textHy: "B. Անաֆորա" },
      { id: "C", textEs: "C. Enumeración", textHy: "C. Թվարկում" },
      { id: "D", textEs: "D. Metáfora", textHy: "D. Փոխաբերություն" }
    ],
    correctAnswer: "A",
    explanationEs: "Epanadiplosis: la palabra «canto» se sitúa al comienzo y al final del enunciado.",
    explanationHy: "Էպանադիպլոզիս (epanadiplosis)․ «canto» բառը դրված է նախադասության սկզբում և վերջում։"
  },
  {
    id: 95,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "95. «Tus manos son nieve». ¿Qué estructura metafórica presenta?",
    questionHy: "95. «Tus manos son nieve»։ Ի՞նչ փոխաբերական կառուցվածք ունի։",
    options: [
      { id: "A", textEs: "A. B de A", textHy: "A. B de A" },
      { id: "B", textEs: "B. Solo B", textHy: "B. Solo B" },
      { id: "C", textEs: "C. A es B", textHy: "C. A es B" },
      { id: "D", textEs: "D. Ninguna", textHy: "D. Ոչ մեկը" }
    ],
    correctAnswer: "C",
    explanationEs: "Estructura A es B: A (manos) identificadas directamente con B (nieve).",
    explanationHy: "Կառուցվածքը՝ A es B (A = ձեռքեր, B = ձյուն)։"
  },
  {
    id: 96,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "96. «El hielo de sus manos». ¿Qué estructura presenta?",
    questionHy: "96. «El hielo de sus manos»։ Ի՞նչ կառուցվածք ունի։",
    options: [
      { id: "A", textEs: "A. B de A", textHy: "A. B de A" },
      { id: "B", textEs: "B. A es B", textHy: "B. A es B" },
      { id: "C", textEs: "C. Solo B", textHy: "C. Solo B" },
      { id: "D", textEs: "D. Comparación con como", textHy: "D. Համեմատություն como-ով" }
    ],
    correctAnswer: "A",
    explanationEs: "Estructura B de A: B (hielo, imaginario) + de + A (manos, real).",
    explanationHy: "Կառուցվածքը՝ B de A (B = սառույց + de + A = ձեռքեր)։"
  },
  {
    id: 97,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "97. «Vino la noche. Vino el silencio. Vino el miedo». ¿Cuál es la figura principal?",
    questionHy: "97. «Vino la noche. Vino el silencio. Vino el miedo»։ Ո՞րն է գլխավոր արտահայտչամիջոցը։",
    options: [
      { id: "A", textEs: "A. Pleonasmo", textHy: "A. Պլեոնազմ" },
      { id: "B", textEs: "B. Anáfora", textHy: "B. Անաֆորա (սկզբնակրկնություն)" },
      { id: "C", textEs: "C. Onomatopeya", textHy: "C. Օնոմատոպեա" },
      { id: "D", textEs: "D. Paronomasia", textHy: "D. Պարոնոմազիա" }
    ],
    correctAnswer: "B",
    explanationEs: "Anáfora: repetición del verbo «Vino» al inicio de cada una de las tres oraciones.",
    explanationHy: "Անաֆորա (anáfora)․ «Vino» բայի կրկնություն բոլոր երեք նախադասությունների սկզբում։"
  },
  {
    id: 98,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "98. ¿Cuál es una característica habitual del cuento?",
    questionHy: "98. Ո՞րն է պատմվածքի (cuento) սովորական հատկանիշը։",
    options: [
      { id: "A", textEs: "A. Siempre tiene dioses", textHy: "A. Միշտ ունի աստվածներ" },
      { id: "B", textEs: "B. Tiene infinitos personajes", textHy: "B. Ունի անթիվ կերպարներ" },
      { id: "C", textEs: "C. Es una narración breve con argumento sencillo", textHy: "C. Կարճ պատմվածք է՝ պարզ սյուժեով" },
      { id: "D", textEs: "D. Siempre está escrito en versos octosílabos", textHy: "D. Միշտ գրված է 8-վանկանի տողերով" }
    ],
    correctAnswer: "C",
    explanationEs: "El cuento es una narración breve con pocos personajes y trama directa y sencilla.",
    explanationHy: "Պատմվածքը կարճ ստեղծագործություն է՝ քիչ գործող անձանցով և պարզ սյուժեով։"
  },
  {
    id: 99,
    part: "Simulacro 7.º",
    partHy: "Քննության փորձնական տարբերակ",
    questionEs: "99. ¿Qué figura utiliza un orden gramatical alterado?",
    questionHy: "99. Ո՞ր արտահայտչամիջոցն է օգտագործում փոփոխված քերականական շարադասություն։",
    options: [
      { id: "A", textEs: "A. Hipérbaton", textHy: "A. Հիպերբատոն" },
      { id: "B", textEs: "B. Onomatopeya", textHy: "B. Օնոմատոպեա" },
      { id: "C", textEs: "C. Metáfora", textHy: "C. Փոխաբերություն" },
      { id: "D", textEs: "D. Polisíndeton", textHy: "D. Պոլիսինդետոն" }
    ],
    correctAnswer: "A",
    explanationEs: "El hipérbaton consiste precisamente en alterar el orden sintáctico habitual de la oración.",
    explanationHy: "Հիպերբատոնը նախադասության բառերի սովորական շարադասության փոփոխությունն է։"
  }
];

// 9. FLASHCARDS ORALES (PREGUNTAS ORALES RÁPIDAS + BONUS)
export const ORAL_FLASHCARDS: FlashcardItem[] = [
  {
    id: 1,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué significa literatura popular?",
    questionHy: "Ի՞նչ է նշանակում ժողովրդական գրականություն (literatura popular)։",
    answerEs: "Es la literatura creada por el pueblo, tradicionalmente anónima, de transmisión oral y que puede sufrir modificaciones a lo largo del tiempo.",
    answerHy: "Ժողովրդի կողմից ստեղծված գրականությունն է, որը սովորաբար անանուն է, փոխանցվում է բանավոր և ժամանակի ընթացքում կարող է փոփոխվել։"
  },
  {
    id: 2,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué diferencia principal hay entre mito y leyenda?",
    questionHy: "Ո՞րն է առասպելի և ավանդազրույցի գլխավոր տարբերությունը։",
    answerEs: "El mito explica el origen del mundo o de fenómenos naturales mediante dioses o seres sobrenaturales. La leyenda parte de un lugar o hecho histórico real y le añade elementos fantásticos.",
    answerHy: "Առասպելը բացատրում է աշխարհի ու բնության ծագումը աստվածների միջոցով։ Ավանդազրույցը հիմնվում է իրական վայրի կամ դեպքի վրա և ավելացնում ֆանտաստիկ տարրեր։"
  },
  {
    id: 3,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Cuántas sílabas tienen los versos de un romance y qué rima llevan?",
    questionHy: "Քանի՞ վանկ ունեն ռոմանսի տողերը և ի՞նչ հանգ ունեն։",
    answerEs: "Tienen 8 sílabas métricas (versos octosílabos). Llevan rima asonante en los versos pares, quedando libres los impares.",
    answerHy: "Ունեն 8 վանկ (octosílabos)։ Զույգ տողերը ունեն ասոնանս (ձայնավորային) հանգ, իսկ կենտերը մնում են ազատ։"
  },
  {
    id: 4,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué es una aliteración? Pon un ejemplo.",
    questionHy: "Ի՞նչ է ալիտերացիան։ Բեր մեկ օրինակ։",
    answerEs: "Es la repetición de sonidos semejantes para crear un efecto expresivo. Ejemplo: «Siete serpientes silban sin cesar» (repite el sonido /s/).",
    answerHy: "Նման հնչյունների կրկնությունն է արտահայտչականության համար։ Օրինակ՝ «Siete serpientes silban sin cesar» (կրկնվում է /s/ հնչյունը)։"
  },
  {
    id: 5,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué diferencia hay entre anáfora y epanadiplosis?",
    questionHy: "Ի՞նչ տարբերություն կա անաֆորայի և էպանադիպլոզիսի միջև։",
    answerEs: "La anáfora repite palabras al principio de varios versos o frases. La epanadiplosis repite la misma palabra al principio y al final de una sola frase o verso.",
    answerHy: "Անաֆորան բառերը կրկնում է մի քանի տողերի սկզբում։ Էպանադիպլոզիսը նույն բառը կրկնում է մեկ տողի սկզբում և վերջում։"
  },
  {
    id: 6,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué es el asíndeton y qué efecto produce?",
    questionHy: "Ի՞նչ է ասինդետոնը և ի՞նչ ազդեցություն է թողնում։",
    answerEs: "Es la eliminación u omisión voluntaria de conjunciones (como «y»). Produce un efecto de rapidez, dinamismo y agilidad.",
    answerHy: "Շաղկապների (օրինակ՝ «և») բացթողումն է։ Այն խոսքին հաղորդում է արագություն, դինամիզմ և աշխուժություն։"
  },
  {
    id: 7,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué es el polisíndeton?",
    questionHy: "Ի՞նչ է պոլիսինդետոնը։",
    answerEs: "Es la repetición insistente de conjunciones («y», «ni»), dando una sensación de lentitud, solemnidad o peso.",
    answerHy: "Շաղկապների («y», «ni») բազմակի կրկնությունն է՝ խոսքին հաղորդելով հանդիսավորություն կամ դանդաղություն։"
  },
  {
    id: 8,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué es el hipérbaton?",
    questionHy: "Ի՞նչ է հիպերբատոնը (շրջուն շարադասությունը)։",
    answerEs: "Es la alteración del orden habitual o lógico de las palabras en una oración para destacar un elemento o por motivos métricos.",
    answerHy: "Բառերի բնական կամ սովորական շարադասության խախտումն է՝ որևէ անդամ շեշտելու կամ չափի պահպանման նպատակով։"
  },
  {
    id: 9,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué es una metáfora y cómo se distingue de una comparación?",
    questionHy: "Ի՞նչ է փոխաբերությունը և ինչո՞վ է տարբերվում համեմատությունից։",
    answerEs: "La metáfora identifica directamente dos elementos por su semejanza (A es B: «Tus ojos son estrellas»). La comparación usa un nexo explícito («Tus ojos son como estrellas»).",
    answerHy: "Փոխաբերությունն ուղղակի նույնացնում է երկու տարր նմանությամբ («Tus ojos son estrellas»)։ Համեմատությունն օգտագործում է «ինչպես/como» շաղկապը։"
  },
  {
    id: 10,
    category: "Repaso Oral",
    categoryHy: "Բանավոր կրկնություն",
    questionEs: "¿Qué es la personificación (prosopopeya)?",
    questionHy: "Ի՞նչ է անձնավորումը (պրոսոպոպեան)։",
    answerEs: "Es atribuir cualidades, emociones o acciones humanas a animales, plantas, objetos inanimados o elementos de la naturaleza (ej. «El viento canta»).",
    answerHy: "Մարդկային հատկանիշներ, հույզեր կամ գործողություններ վերագրելն է անշունչ առարկաներին, կենդանիներին կամ բնությանը (օր.՝ «Քամին երգում է»)։"
  }
];

// 10. TEXTOS DE ANÁLISIS DE LA PARTE 2
export const TEXTO_A_DATA = {
  titleEs: "Texto A — La campana misteriosa",
  titleHy: "Տեքստ A — Խորհրդավոր զանգը",
  contentEs: `En un pequeño pueblo de Aragón existe un puente muy antiguo. Los habitantes cuentan que, cada noche, una campana invisible suena tres veces junto al puente.

Según los abuelos, la campana pertenece a un castillo que desapareció hace muchos años. Nadie ha conseguido encontrarla, pero la historia se transmite de padres a hijos.`,
  contentHy: `Արագոնի մի փոքրիկ գյուղում կա շատ հին կամուրջ։ Բնակիչները պատմում են, որ ամեն գիշեր կամրջի մոտ երեք անգամ ղողանջում է մի անտեսանելի զանգ։

Ըստ տատիկ-պապիկների՝ զանգը պատկանում է մի ամրոցի, որն անհետացել է երկար տարիներ առաջ։ Ոչ ոք չի կարողացել գտնել այն, բայց պատմությունը փոխանցվում է հայրերից որդիներին։`,
  questions: [
    {
      id: 79,
      questionEs: "79. ¿A qué género literario pertenece el texto: cuento, mito o leyenda?",
      questionHy: "79. Ի՞նչ գրական ժանրի է պատկանում տեքստը՝ cuento, mito, թե՞ leyenda։",
      options: [
        { id: "Leyenda", textEs: "Leyenda (Ավանդազրույց)", textHy: "Ավանդազրույց" },
        { id: "Mito", textEs: "Mito (Առասպել)", textHy: "Առասպել" },
        { id: "Cuento", textEs: "Cuento (Պատմվածք)", textHy: "Պատմվածք" }
      ],
      correctAnswer: "Leyenda",
      explanationEs: "Es una leyenda porque parte de una localización real (un pueblo y puente de Aragón) e incorpora elementos misteriosos y mágicos (una campana invisible).",
      explanationHy: "Ավանդազրույց է (Leyenda), քանի որ հիմնված է իրական վայրի վրա (Արագոնի գյուղ և հին կամուրջ) և ներառում է խորհրդավոր, կախարդական տարր (անտեսանելի զանգ)։"
    },
    {
      id: 80,
      questionEs: "80. Del texto A, encuentra un elemento real y uno fantástico.",
      questionHy: "80. Տեքստից գտիր մեկ իրական և մեկ երևակայական տարր։",
      options: [
        { id: "A", textEs: "Real: el pueblo de Aragón y el puente antiguo. Fantástico: la campana invisible que suena.", textHy: "Իրական՝ Արագոնի գյուղն ու հին կամուրջը։ Երևակայական՝ անտեսանելի զանգը, որը ղողանջում է։" },
        { id: "B", textEs: "Real: el fantasma del rey. Fantástico: los abuelos.", textHy: "Սխալ տարբերակ" }
      ],
      correctAnswer: "A",
      explanationEs: "Elemento real: un lugar geográfico identificable (pueblo de Aragón, puente). Elemento fantástico: una campana invisible.",
      explanationHy: "Իրական տարր՝ իրական վայր (Արագոնի գյուղ, կամուրջ)։ Ֆանտաստիկ տարր՝ անտեսանելի զանգը։"
    },
    {
      id: 81,
      questionEs: "81. ¿Qué significa «se transmite de padres a hijos»?",
      questionHy: "81. Ի՞նչ է նշանակում «se transmite de padres a hijos» արտահայտությունը։",
      options: [
        { id: "A", textEs: "Que se transmite oralmente de generación en generación.", textHy: "Որ այն բանավոր փոխանցվում է սերնդեսերունդ։" },
        { id: "B", textEs: "Que solo los padres pueden leerlo en un libro.", textHy: "Որ միայն հայրերը կարող են կարդալ գրքում։" }
      ],
      correctAnswer: "A",
      explanationEs: "Indica la transmisión oral generacional propia de la tradición popular.",
      explanationHy: "Նշանակում է բանավոր փոխանցում սերնդեսերունդ՝ ժողովրդական ավանդույթով։"
    },
    {
      id: 82,
      questionEs: "82. ¿Qué rasgo de la literatura popular tiene este texto?",
      questionHy: "82. Տեքստը ժողովրդական գրականությանը բնորոշ ո՞ր հատկանիշն ունի։",
      options: [
        { id: "A", textEs: "Transmisión oral y carácter anónimo tradicional.", textHy: "Բանավոր փոխանցում և ավանդական անանուն բնույթ։" },
        { id: "B", textEs: "Autor famoso contemporáneo con copyright.", textHy: "Ժամանակակից հայտնի հեղինակ։" }
      ],
      correctAnswer: "A",
      explanationEs: "Transmisión oral de generación en generación sin autor particular (literatura popular).",
      explanationHy: "Բանավոր փոխանցում սերունդների միջև՝ առանց հայտնի հեղինակի։"
    }
  ]
};

export const TEXTO_B_DATA = {
  titleEs: "Texto B — La noche de Ana",
  titleHy: "Տեքստ B — Անայի գիշերը",
  contentEs: `¡Plic, ploc! La lluvia golpeaba el tejado. Ana miró por la ventana. Su corazón era un tambor.

«Tengo miedo, tengo frío, tengo ganas de salir», pensó. Afuera, las calles estaban oscuras y silenciosas.`,
  contentHy: `¡Պլիկ, պլոկ! Անձրևը հարվածում էր տանիքին։ Անան նայեց պատուհանից։ Նրա սիրտը մի թմբուկ էր։

«Վախենում եմ, ցրտից մրսում եմ, դուրս գալու ցանկություն ունեմ», մտածեց նա։ Դրսում փողոցները մութ էին ու լուռ։`,
  questions: [
    {
      id: 83,
      questionEs: "83. Encuentra la imitación de sonido (onomatopeya) en el texto B.",
      questionHy: "83. Տեքստ B-ից գտիր ձայնի նմանակումը (onomatopeya)։",
      options: [
        { id: "A", textEs: "«¡Plic, ploc!» (el sonido de las gotas de lluvia)", textHy: "«¡Plic, ploc!» (անձրևի կաթիլների ձայնը)" },
        { id: "B", textEs: "«Su corazón»", textHy: "«Su corazón»" },
        { id: "C", textEs: "«La ventana»", textHy: "«La ventana»" }
      ],
      correctAnswer: "A",
      explanationEs: "«¡Plic, ploc!» es la onomatopeya que recrea el sonido del agua cayendo sobre el tejado.",
      explanationHy: "«¡Plic, ploc!» ձայնանմանակումն է, որը վերարտադրում է տանիքին կաթող անձրևի ձայնը։"
    },
    {
      id: 84,
      questionEs: "84. ¿En qué oración hay una metáfora y qué se identifica?",
      questionHy: "84. Ո՞ր նախադասության մեջ կա metáfora (փոխաբերություն) և ի՞նչն է նույնացվում։",
      options: [
        { id: "A", textEs: "«Su corazón era un tambor» (identifica corazón [A] con tambor [B]).", textHy: "«Su corazón era un tambor» (սիրտը [A] նույնացվում է թմբուկի [B] հետ)։" },
        { id: "B", textEs: "«Ana miró por la ventana»", textHy: "«Ana miró por la ventana»" },
        { id: "C", textEs: "«Las calles estaban oscuras»", textHy: "«Las calles estaban oscuras»" }
      ],
      correctAnswer: "A",
      explanationEs: "«Su corazón era un tambor» es una metáfora de estructura A es B (los latidos rápidos del corazón identificados con el golpeteo de un tambor).",
      explanationHy: "«Su corazón era un tambor» փոխաբերություն է (A es B կառուցվածք)․ սրտի արագ բաբախյունը նույնացվում է թմբուկի հետ։"
    },
    {
      id: 85,
      questionEs: "85. Encuentra la repetición parecida a anáfora en el pensamiento de Ana.",
      questionHy: "85. Գտիր anáfora-ին նմանվող կրկնությունը՝ նույն բառով սկսվող երեք արտահայտությունները։",
      options: [
        { id: "A", textEs: "«Tengo miedo, tengo frío, tengo ganas de salir» (repite «tengo»).", textHy: "«Tengo miedo, tengo frío, tengo ganas de salir» (կրկնվում է «tengo» բառը)։" },
        { id: "B", textEs: "«oscuras y silenciosas»", textHy: "«oscuras y silenciosas»" }
      ],
      correctAnswer: "A",
      explanationEs: "Repite «tengo» al inicio de cada cláusula («tengo miedo, tengo frío, tengo ganas...»).",
      explanationHy: "Կրկնվում է «tengo» բառը երեք արտահայտությունների սկզբում։"
    },
    {
      id: 86,
      questionEs: "86. ¿El texto B está escrito en prosa o en verso?",
      questionHy: "86. Տեքստը արձա՞կ է (prosa), թե՞ չափածո (verso)։",
      options: [
        { id: "Prosa", textEs: "Prosa (Արձակ)", textHy: "Արձակ" },
        { id: "Verso", textEs: "Verso (Չափածո)", textHy: "Չափածո" }
      ],
      correctAnswer: "Prosa",
      explanationEs: "Está en prosa: redactado en renglones continuos con oraciones y párrafos.",
      explanationHy: "Արձակ է (prosa)․ գրված է սովորական նախադասություններով և պարբերություններով։"
    }
  ]
};

// 11. ANÁLISIS DEL ROMANCE (EJERCICIO 4)
export const ROMANCE_ANALYSIS_DATA = {
  poemLines: [
    { num: 1, text: "Por el sendero del monte,", syllables: 8, metricBreakdown: "Por / el / sen / de / ro / del / mon / te" },
    { num: 2, text: "camina una niña clara.", syllables: 8, metricBreakdown: "ca / mi / nau / na / ni / ña / cla / ra (sinalefa: na-u)" },
    { num: 3, text: "El viento mueve las hojas", syllables: 8, metricBreakdown: "El / vien / to / mue / ve / las / ho / jas" },
    { num: 4, text: "y canta bajo las ramas.", syllables: 8, metricBreakdown: "y / can / ta / ba / jo / las / ra / mas" }
  ],
  questions: [
    {
      id: 21,
      questionEs: "21. ¿Cuántos versos tiene el poema?",
      questionHy: "21. Քանի՞ տող (verso) ունի բանաստեղծությունը։",
      answerEs: "Tiene 4 versos.",
      answerHy: "Ունի 4 տող (տուֆ / versos)։",
      explanationEs: "Cada línea escrita es un verso. Hay exactamente cuatro líneas.",
      explanationHy: "Յուրաքանչյուր բանաստեղծական տող կոչվում է verso։ Այստեղ կա 4 տող։"
    },
    {
      id: 22,
      questionEs: "22. ¿Cuántas sílabas métricas tiene cada verso? (Recuerda la sinalefa).",
      questionHy: "22. Քանի՞ վանկ ունի յուրաքանչյուր տող (հաշվի առնելով sinalefa-ն)։",
      answerEs: "Cada verso tiene 8 sílabas métricas (es un romance octosílabo).",
      answerHy: "Յուրաքանչյուր տող ունի 8 վանկ (octosílabo)։ Օրինակ՝ 2-րդ տողում «camina una» կազմում է սինալեֆա («ca-mi-nau-na...»)։",
      explanationEs: "Al aplicar la sinalefa en el verso 2 («camina_una»), todos los versos suman 8 sílabas métricas.",
      explanationHy: "2-րդ տողում «camina una» բառերի ձայնավորների միացումը (sinalefa) տալիս է 8 չափական վանկ։"
    },
    {
      id: 23,
      questionEs: "23. ¿Qué versos tienen rima asonante? ¿Qué vocales se repiten?",
      questionHy: "23. Ո՞ր տողերն ունեն ասոնանս հանգ, և ո՞ր ձայնավորներն են կրկնվում։",
      answerEs: "Los versos pares (verso 2 y verso 4): «clara» y «ramas». Riman en asonante con las vocales a-a.",
      answerHy: "Զույգ տողերը (տող 2 և տող 4)․ «clara» և «ramas»։ Կրկնվում են a-a ձայնավորները վերջին շեշտված վանկից սկսած։",
      explanationEs: "cl-A-r-A y r-A-m-A-s riman en asonante porque solo coinciden las vocales (a-a).",
      explanationHy: "clara և ramas բառերում համընկնում են միայն ձայնավորները՝ a-a։"
    },
    {
      id: 24,
      questionEs: "24. ¿Qué sucede con la rima de los versos impares?",
      questionHy: "24. Ի՞նչ է տեղի ունենում կենտ տողերի հանգի հետ։",
      answerEs: "Quedan libres o sueltos (no riman).",
      answerHy: "Կենտ տողերը (1 և 3) մնում են ազատ (առանց հանգի)։",
      explanationEs: "En el romance tradicional los versos impares quedan sin rima (versos libres o sueltos).",
      explanationHy: "Ռոմանսում կենտ տողերը չեն հանգավորվում (մնում են ազատ)։"
    }
  ]
};
