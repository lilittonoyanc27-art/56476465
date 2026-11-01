import { useState } from 'react';
import { BookOpen, FileText, Sparkles, ChevronDown, ChevronUp, Check, Volume2 } from 'lucide-react';
import { TEXTO_A_DATA, TEXTO_B_DATA } from './data.ts';
import { QuestionCard } from './QuestionCard.tsx';

interface TextAnalysisViewProps {
  showHyAlways?: boolean;
}

export const ARMENIAN_CONCEPT_QUESTIONS = [
  {
    id: 67,
    qHy: "67. Ի՞նչ երեք հիմնական հատկանիշ ունի literatura popular-ը։",
    qEs: "67. ¿Qué tres características principales tiene la literatura popular?",
    answerHy: "1) Անանուն է (anónima) — հեղինակն անհայտ է։ 2) Բանավոր է փոխանցվում (oral) — բերանացի սերնդեսերունդ։ 3) Փոփոխական է (puede modificarse) — գոյություն ունեն բազմաթիվ տարբերակներ։",
    answerEs: "1) Es anónima (autor desconocido). 2) De transmisión oral. 3) Puede sufrir variaciones o modificaciones (múltiples versiones)."
  },
  {
    id: 68,
    qHy: "68. Ինչո՞վ է literatura culta-ն տարբերվում ժողովրդական գրականությունից։ Նշիր երեք տարբերություն։",
    qEs: "68. ¿En qué se diferencia la literatura culta de la popular? Señala tres diferencias.",
    answerHy: "1) Հեղինակը հայտնի է (autor conocido)։ 2) Գրավոր է (escrita)։ 3) Տեքստը ֆիքսված է և չի փոփոխվում (fija y estable)։",
    answerEs: "1) Tiene un autor conocido. 2) Se transmite por escrito (manuscritos, libros). 3) Su versión es fija y no cambia al transmitirse."
  },
  {
    id: 69,
    qHy: "69. Տատիկը թոռանը պատմում է հին երգ, որը սովորել է իր տատիկից։ Երգի հեղինակը հայտնի չէ։ Սա ո՞ր գրականությունն է՝ popular, թե՞ culta։ Ինչո՞ւ։",
    qEs: "69. Una abuela cuenta una canción antigua aprendida de su abuela. Autor desconocido. ¿Popular o culta? ¿Por qué?",
    answerHy: "Սա literatura popular է, քանի որ փոխանցվել է բանավոր, սերնդեսերունդ և հեղինակն անհայտ է (անանուն է)։",
    answerEs: "Es literatura popular, porque se transmite de forma oral de generación en generación y es anónima."
  },
  {
    id: 70,
    qHy: "70. «El trueno sonó: ¡bum!» Ո՞ր արտահայտչամիջոցն է օգտագործված՝ onomatopeya, թե՞ anáfora։",
    qEs: "70. «El trueno sonó: ¡bum!». ¿Qué figura se utiliza: onomatopeya o anáfora?",
    answerHy: "Օգտագործված է onomatopeya (բնաձայնություն), քանի որ «¡bum!» բառը նմանակում է որոտի իրական ձայնը։",
    answerEs: "Se utiliza una onomatopeya, ya que «¡bum!» recrea e imita el sonido real del trueno."
  },
  {
    id: 71,
    qHy: "71. «La casa no es la cosa». Ինչո՞ւ է սա paronomasia։",
    qEs: "71. «La casa no es la cosa». ¿Por qué es una paronomasia?",
    answerHy: "Որովհետև «casa» (տուն) և «cosa» (իր) բառերը շատ նման են հնչում, սակայն ունեն բոլորովին տարբեր իմաստներ։",
    answerEs: "Porque utiliza palabras de sonido casi idéntico («casa» y «cosa») pero con significados totalmente distintos."
  },
  {
    id: 72,
    qHy: "72. «Aquí vivo. Aquí sueño. Aquí canto». Ո՞ր արտահայտչամիջոցն է և ո՞ր բառն է կրկնվում։",
    qEs: "72. «Aquí vivo. Aquí sueño. Aquí canto». ¿Qué figura es y qué palabra se repite?",
    answerHy: "Սա anáfora է (սկզբնակրկնություն), իսկ կրկնվող բառն է «Aquí»-ն յուրաքանչյուր նախադասության սկզբում։",
    answerEs: "Es una anáfora, y la palabra que se repite al inicio de cada frase es «Aquí»."
  },
  {
    id: 73,
    qHy: "73. «Y llueve y truena y sopla el viento». Ինչո՞ւ է սա polisíndeton։",
    qEs: "73. «Y llueve y truena y sopla el viento». ¿Por qué es un polisíndeton?",
    answerHy: "Քանի որ «y» (և) շաղկապը կրկնվում է միտումնավոր մի քանի անգամ՝ դանդաղեցնելով և շեշտելով խոսքը։",
    answerEs: "Porque repite intencionadamente la conjunción «y» entre los verbos para dar mayor solemnidad y ritmo."
  },
  {
    id: 74,
    qHy: "74. «Estudia, lee, escribe». Ո՞րն է այստեղ asíndeton-ի հիմնական հատկանիշը։",
    qEs: "74. «Estudia, lee, escribe». ¿Cuál es el rasgo distintivo del asíndeton?",
    answerHy: "Շաղկապների (օրինակ՝ «y»-ի) ամբողջական բացակայությունը, ինչը խոսքին արագություն և դինամիկա է հաղորդում։",
    answerEs: "La eliminación total de conjunciones («y»), lo que otorga dinamismo y rapidez a la expresión."
  },
  {
    id: 75,
    qHy: "75. «Ella lo vio con sus propios ojos». Ո՞ր բառակապակցությունն է ավելորդ իմաստով, և ինչպե՞ս է կոչվում արտահայտչամիջոցը։",
    qEs: "75. «Ella lo vio con sus propios ojos». ¿Qué frase es redundante y cómo se llama la figura?",
    answerHy: "Ավելորդ է «con sus propios ojos» (սեփական աչքերով) արտահայտությունը (տեսնելը միայն աչքերով է լինում)։ Արտահայտչամիջոցը pleonasmo (պլեոնազմ) է։",
    answerEs: "La expresión redundante es «con sus propios ojos». La figura literaria es el pleonasmo."
  },
  {
    id: 76,
    qHy: "76. «Las flores de la montaña recogió Inés». Գտիր hipérbaton-ը և գրիր նախադասությունը սովորական շարադասությամբ։",
    qEs: "76. «Las flores de la montaña recogió Inés». Encuentra el hipérbaton y escribe el orden normal.",
    answerHy: "Հիպերբատոն է, քանի որ լրացումը դրված է սկզբում։ Սովորական շարադասություն՝ «Inés recogió las flores de la montaña» (Ենթակա + Ստորոգյալ + Ուղիղ խնդիր)։",
    answerEs: "Orden normal: «Inés recogió las flores de la montaña» (Sujeto + Verbo + Objeto)."
  },
  {
    id: 77,
    qHy: "77. «Sus dientes son perlas». Գտիր փոխաբերության իրական տարրը (A), երևակայական տարրը (B) և կառուցվածքը։",
    qEs: "77. «Sus dientes son perlas». Identifica A (real), B (imaginario) y la estructura.",
    answerHy: "A (իրական) = dientes (ատամներ), B (երևակայական) = perlas (մարգարիտներ)։ Կառուցվածքը՝ A es B։",
    answerEs: "Término real A = dientes; Término imaginario B = perlas. Estructura: A es B."
  },
  {
    id: 78,
    qHy: "78. Բացատրիր mito և leyenda հասկացությունների տարբերությունը՝ բերելով մեկական օրինակ։",
    qEs: "78. Explica la diferencia entre mito y leyenda con un ejemplo de cada uno.",
    answerHy: "Mito-ն (առասպել) բացատրում է տիեզերքի և բնության ծագումը աստվածների միջոցով (օր.՝ աստվածը ստեղծում է լույսը)։ Leyenda-ն (ավանդազրույց) հիմնված է իրական պատմական կամ աշխարհագրական վայրի վրա և ավելացնում է ֆանտաստիկ տարրեր (օր.՝ հին ամրոցի ուրվականը)։",
    answerEs: "El mito explica el origen del cosmos mediante dioses o seres sagrados (ej. creación del sol). La leyenda parte de un lugar o hecho real e incorpora elementos mágicos o fantásticos (ej. la campana invisible del puente)."
  }
];

export function TextAnalysisView({ showHyAlways = false }: TextAnalysisViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<'text_a' | 'text_b' | 'v9'>('text_a');
  const [expandedConceptId, setExpandedConceptId] = useState<number | null>(null);

  const playVoice = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      {/* Subtab navigation */}
      <div className="flex items-center gap-2 p-1 bg-slate-200/80 rounded-xl">
        <button
          onClick={() => setActiveSubTab('text_a')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'text_a'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Texto A: La campana misteriosa
        </button>
        <button
          onClick={() => setActiveSubTab('text_b')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'text_b'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Texto B: La noche de Ana
        </button>
        <button
          onClick={() => setActiveSubTab('v9')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'v9'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Վարժություն 9 (Հարցեր 67–78)
        </button>
      </div>

      {/* TEXTO A */}
      {activeSubTab === 'text_a' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  {TEXTO_A_DATA.titleEs}
                </h3>
                <span className="text-xs text-slate-500 font-normal">
                  {TEXTO_A_DATA.titleHy}
                </span>
              </div>
              <button
                onClick={() => playVoice(TEXTO_A_DATA.contentEs)}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Լսել իսպաներեն տեքստը"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-slate-900 leading-relaxed text-base sm:text-lg whitespace-pre-line font-serif shadow-xs">
                <div className="text-xs sm:text-sm font-sans font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  🇪🇸 Texto en español:
                </div>
                {TEXTO_A_DATA.contentEs}
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-200 text-slate-900 leading-relaxed text-base sm:text-lg whitespace-pre-line shadow-xs">
                <div className="text-xs sm:text-sm font-sans font-bold text-amber-950 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  🇦🇲 Հայերեն թարգմանություն․
                </div>
                {TEXTO_A_DATA.contentHy}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Վերլուծական հարցեր (Հարցեր 79–82)․
            </h4>
            <div className="grid grid-cols-1 gap-5">
              {TEXTO_A_DATA.questions.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={{
                    ...q,
                    part: "Texto A · Leyenda",
                    partHy: "Տեքստ A · Ավանդազրույց"
                  }}
                  index={idx}
                  showHyAlways={showHyAlways}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TEXTO B */}
      {activeSubTab === 'text_b' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  {TEXTO_B_DATA.titleEs}
                </h3>
                <span className="text-sm text-slate-500 font-normal">
                  {TEXTO_B_DATA.titleHy}
                </span>
              </div>
              <button
                onClick={() => playVoice(TEXTO_B_DATA.contentEs)}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                title="Լսել իսպաներեն տեքստը"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-slate-900 leading-relaxed text-base sm:text-lg whitespace-pre-line font-serif shadow-xs">
                <div className="text-xs sm:text-sm font-sans font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  🇪🇸 Texto en español:
                </div>
                {TEXTO_B_DATA.contentEs}
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-200 text-slate-900 leading-relaxed text-base sm:text-lg whitespace-pre-line shadow-xs">
                <div className="text-xs sm:text-sm font-sans font-bold text-amber-950 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  🇦🇲 Հայերեն թարգմանություն․
                </div>
                {TEXTO_B_DATA.contentHy}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Վերլուծական հարցեր (Հարցեր 83–86)․
            </h4>
            <div className="grid grid-cols-1 gap-5">
              {TEXTO_B_DATA.questions.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={{
                    ...q,
                    part: "Texto B · Recursos",
                    partHy: "Տեքստ B · Գրական հնարքներ"
                  }}
                  index={idx}
                  showHyAlways={showHyAlways}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* V9 - ARMENIAN QUESTIONS 67 TO 78 */}
      {activeSubTab === 'v9' && (
        <div className="space-y-5">
          <div className="p-4 bg-blue-50/80 border-2 border-blue-200 rounded-xl text-sm sm:text-base text-slate-800 leading-relaxed">
            💡 Այս բաժնում ներկայացված են <strong>Վարժություն 9-ի հարցերը (67–78)</strong>, որտեղ աշակերտը ստուգում է իր տեսական գիտելիքները։ Սեղմիր յուրաքանչյուր հարցի վրա՝ իսպաներեն և հայերեն ստույգ բացատրությունները բացելու համար։
          </div>

          <div className="space-y-4">
            {ARMENIAN_CONCEPT_QUESTIONS.map((item) => {
              const isExpanded = expandedConceptId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border-2 border-slate-200 p-5 transition-all hover:border-slate-300 shadow-xs"
                >
                  <div
                    onClick={() => setExpandedConceptId(isExpanded ? null : item.id)}
                    className="flex items-start justify-between gap-4 cursor-pointer select-text"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        🇦🇲 {item.qHy}
                      </div>
                      <div className="text-sm sm:text-base text-slate-600 font-normal">
                        🇪🇸 {item.qEs}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <span>Փակել</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Տեսնել պատասխանը</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-slate-200 space-y-3.5 animate-fadeIn">
                      <div className="p-4 bg-emerald-50 text-emerald-950 rounded-xl border border-emerald-300 text-base sm:text-lg">
                        <div className="text-xs sm:text-sm font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-700" />
                          🇪🇸 Respuesta en español:
                        </div>
                        <p className="leading-relaxed font-normal">
                          {item.answerEs}
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 text-slate-900 rounded-xl border border-amber-300 text-base sm:text-lg">
                        <div className="text-xs sm:text-sm font-bold text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          🇦🇲 Պատասխան հայերենով․
                        </div>
                        <p className="leading-relaxed font-normal">
                          {item.answerHy}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
