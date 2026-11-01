import { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, Music, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ROMANCE_ANALYSIS_DATA } from './data.ts';

interface RomanceAnalyzerProps {
  showHyAlways?: boolean;
}

export function RomanceAnalyzer({ showHyAlways = false }: RomanceAnalyzerProps) {
  const [highlightRhyme, setHighlightRhyme] = useState(false);
  const [showSyllables, setShowSyllables] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState<{ [key: number]: boolean }>({});

  const toggleAnswer = (id: number) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const playPoem = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const text = ROMANCE_ANALYSIS_DATA.poemLines.map((l) => l.text).join('. ');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Music className="w-5 h-5 text-indigo-600" />
            Ejercicio 4. Analiza un romance · Ռոմանսի վերլուծություն
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Lee el poema, observa la métrica y la rima asonante en los versos pares.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHighlightRhyme(!highlightRhyme)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
              highlightRhyme
                ? 'bg-amber-100 border-amber-300 text-amber-900'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {highlightRhyme ? 'Հանգը նշված է' : 'Ցույց տալ հանգը (Rima a-a)'}
          </button>
          <button
            onClick={() => setShowSyllables(!showSyllables)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
              showSyllables
                ? 'bg-blue-100 border-blue-300 text-blue-900'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {showSyllables ? 'Վանկերը բացված են' : 'Վանկատում (8 sílabas)'}
          </button>
          <button
            onClick={playPoem}
            className="p-1.5 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-lg transition-colors"
            title="Լսել բանաստեղծությունը"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Poem Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-slate-50/80 to-blue-50/60 border-2 border-indigo-100 font-serif shadow-xs">
        <div className="max-w-lg mx-auto space-y-4">
          {ROMANCE_ANALYSIS_DATA.poemLines.map((line) => {
            const isEven = line.num % 2 === 0;

            return (
              <div
                key={line.num}
                className={`flex items-baseline justify-between p-3 rounded-xl transition-colors ${
                  isEven && highlightRhyme ? 'bg-amber-100/90' : 'hover:bg-white/80'
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-sans text-slate-400 font-bold tabular-nums w-5">
                    {line.num}
                  </span>
                  <div>
                    <span className="text-xl sm:text-2xl text-slate-900 font-medium">
                      {line.text.slice(0, line.text.lastIndexOf(' '))}
                      {' '}
                      {highlightRhyme && isEven ? (
                        <span className="font-bold text-amber-950 bg-amber-300 px-1.5 py-0.5 rounded-md">
                          {line.text.slice(line.text.lastIndexOf(' ') + 1)}
                        </span>
                      ) : (
                        <span>{line.text.slice(line.text.lastIndexOf(' ') + 1)}</span>
                      )}
                    </span>

                    {showSyllables && (
                      <div className="text-sm sm:text-base font-sans text-indigo-800 font-semibold mt-1">
                        {line.metricBreakdown} (8 sílabas)
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-sans text-slate-600 font-bold">
                  {isEven ? (
                    <span className="px-2 py-1 rounded-md bg-amber-200/80 text-amber-950">
                      Pares: -a-a
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded-md bg-slate-200/80 text-slate-700">
                      Impar (libre)
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Questions 21 to 24 */}
      <div className="space-y-4 pt-2">
        <h4 className="text-base sm:text-lg font-bold text-slate-900">
          Հարցեր և վերլուծություն (Preguntas de análisis):
        </h4>

        {ROMANCE_ANALYSIS_DATA.questions.map((q) => {
          const isOpen = revealedAnswers[q.id];

          return (
            <div key={q.id} className="border-2 border-slate-200 rounded-xl p-4 bg-slate-50/70 hover:border-slate-300 transition-all">
              <div
                onClick={() => toggleAnswer(q.id)}
                className="flex items-center justify-between gap-4 cursor-pointer select-text"
              >
                <div className="space-y-1">
                  <div className="text-base sm:text-lg font-bold text-slate-900">
                    {q.questionEs}
                  </div>
                  {(showHyAlways || isOpen) && (
                    <div className="text-sm sm:text-base text-slate-600 font-normal">
                      🇦🇲 {q.questionHy}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="px-3 py-1.5 text-xs sm:text-sm font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {isOpen ? (
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

              {isOpen && (
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 text-base leading-relaxed animate-fadeIn">
                  <div className="p-4 bg-emerald-50 text-emerald-950 rounded-xl border border-emerald-300 space-y-1">
                    <div className="font-bold text-emerald-900 flex items-center gap-1.5 text-base sm:text-lg">
                      <Check className="w-5 h-5 text-emerald-700" /> 🇪🇸 {q.answerEs}
                    </div>
                    <div className="text-sm sm:text-base text-slate-800 font-normal">
                      {q.explanationEs}
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 text-slate-900 rounded-xl border border-amber-300 space-y-1">
                    <div className="font-bold text-amber-950 flex items-center gap-1.5 text-base sm:text-lg">
                      <Sparkles className="w-5 h-5 text-amber-600" /> 🇦🇲 {q.answerHy}
                    </div>
                    <div className="text-sm sm:text-base text-slate-700 font-normal">
                      {q.explanationHy}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
