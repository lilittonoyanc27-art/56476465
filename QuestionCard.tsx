import { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Volume2, Sparkles, Check, X } from 'lucide-react';
import { ExamQuestion } from './types.ts';
import { ClickableSpanish } from './ClickableSpanish.tsx';

interface QuestionCardProps {
  question: ExamQuestion;
  index?: number;
  showHyAlways?: boolean;
  onAnswered?: (isCorrect: boolean) => void;
  instantCheck?: boolean;
}

export function QuestionCard({
  question,
  index,
  showHyAlways = false,
  onAnswered,
  instantCheck = true
}: QuestionCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const isCorrect = selectedId?.toLowerCase() === question.correctAnswer.toLowerCase();

  const handleSelect = (id: string) => {
    if (isChecked) return; // locked once checked until retry
    setSelectedId(id);
    if (instantCheck) {
      setIsChecked(true);
      setShowExplanation(true);
      if (onAnswered) {
        onAnswered(id.toLowerCase() === question.correctAnswer.toLowerCase());
      }
    }
  };

  const handleManualCheck = () => {
    if (!selectedId) return;
    setIsChecked(true);
    setShowExplanation(true);
    if (onAnswered) {
      onAnswered(selectedId.toLowerCase() === question.correctAnswer.toLowerCase());
    }
  };

  const handleReset = () => {
    setSelectedId(null);
    setIsChecked(false);
    setShowExplanation(false);
  };

  const playVoice = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`p-5 rounded-xl border transition-all ${
      isChecked
        ? isCorrect
          ? 'bg-emerald-50/40 border-emerald-300 shadow-sm'
          : 'bg-rose-50/40 border-rose-300 shadow-sm'
        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
    }`}>
      {/* Header index & category */}
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 text-sm">
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <span className="text-slate-900 font-bold">
            {index !== undefined ? `N.º ${index + 1}` : `Pregunta ${question.id}`}
          </span>
          <span>·</span>
          <span className="font-semibold text-blue-700">{question.part}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-slate-500 font-normal">{question.partHy}</span>
        </div>

        {isChecked && (
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-emerald-100 text-emerald-900">
                <Check className="w-4 h-4 stroke-[2.5]" /> ¡Correcto! / Ճիշտ է
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-rose-100 text-rose-900">
                <X className="w-4 h-4 stroke-[2.5]" /> ¡Incorrecto! / Սխալ է
              </span>
            )}
            <button
              onClick={handleReset}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1 cursor-pointer"
              title="Կրկնել հարցը (Reintentar)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Question Text */}
      <div className="mb-4">
        <ClickableSpanish
          es={question.questionEs}
          hy={question.questionHy}
          showHyAlways={showHyAlways}
          size="lg"
        />
      </div>

      {/* Options */}
      {question.options && question.options.length > 0 && (
        <div className="space-y-3 mb-4">
          {question.options.map((opt) => {
            const isThisSelected = selectedId === opt.id;
            const isThisCorrect = opt.id.toLowerCase() === question.correctAnswer.toLowerCase();

            let optionStyle = 'bg-slate-50 hover:bg-slate-100/90 border-slate-200 text-slate-900';

            if (isChecked) {
              if (isThisCorrect) {
                optionStyle = 'bg-emerald-100/90 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-400';
              } else if (isThisSelected && !isCorrect) {
                optionStyle = 'bg-rose-100/90 border-rose-400 text-rose-950 line-through';
              } else {
                optionStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-500';
              }
            } else if (isThisSelected) {
              optionStyle = 'bg-blue-50 border-blue-500 text-blue-950 ring-2 ring-blue-300';
            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                disabled={isChecked}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 ${optionStyle} ${
                  isChecked ? 'cursor-default' : 'cursor-pointer active:scale-[0.995]'
                }`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 ${
                  isChecked && isThisCorrect
                    ? 'bg-emerald-600 text-white'
                    : isChecked && isThisSelected && !isCorrect
                    ? 'bg-rose-600 text-white'
                    : isThisSelected
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-slate-300 text-slate-800'
                }`}>
                  {opt.id}
                </span>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-base sm:text-lg font-medium leading-relaxed">{opt.textEs}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        playVoice(opt.textEs);
                      }}
                      className="text-slate-400 hover:text-slate-700 shrink-0 p-1 rounded-md"
                      title="Լսել տարբերակը"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  {(showHyAlways || isChecked) && opt.textHy && opt.textHy !== opt.textEs && (
                    <div className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-0.5">
                      🇦🇲 {opt.textHy}
                    </div>
                  )}
                </div>

                {isChecked && isThisCorrect && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                )}
                {isChecked && isThisSelected && !isCorrect && (
                  <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Manual Check button when instantCheck is disabled */}
      {!instantCheck && !isChecked && (
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            disabled={!selectedId}
            onClick={handleManualCheck}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              selectedId
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Comprobar respuesta / Ստուգել պատասխանը
          </button>
        </div>
      )}

      {/* EXPLANATION SECTION IN BOTH SPANISH AND ARMENIAN */}
      {showExplanation && (
        <div className={`mt-5 p-5 rounded-xl border-2 text-base sm:text-lg leading-relaxed animate-fadeIn ${
          isCorrect
            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
            : 'bg-rose-50/90 border-rose-300 text-rose-950'
        }`}>
          <div className="flex items-center gap-2 font-bold text-base sm:text-lg pb-3 border-b border-current/15 mb-3">
            <HelpCircle className="w-5 h-5 shrink-0" />
            <span>
              {isCorrect ? 'Explicación detallada / Բացատրություն' : '¿Por qué no es correcta? / Ինչո՞ւ է սխալ և ո՞րն է ճիշտը'}
            </span>
          </div>

          {/* Spanish explanation */}
          <div className="mb-3.5 pl-3 border-l-4 border-current/40 space-y-1">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
              🇪🇸 Explicación en español:
            </div>
            <p className="leading-relaxed font-normal text-slate-900">
              {question.explanationEs}
            </p>
          </div>

          {/* Armenian explanation */}
          <div className="pt-2 pl-3 border-l-4 border-amber-500 bg-amber-50 p-3.5 rounded-r-xl space-y-1.5 shadow-2xs">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              🇦🇲 Բացատրություն հայերենով (Ճիշտ պատասխանի հիմնավորում)․
            </div>
            <p className="text-slate-900 leading-relaxed font-normal">
              {question.explanationHy}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
