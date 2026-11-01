import { useState } from 'react';
import { Volume2, RotateCw, ChevronLeft, ChevronRight, Shuffle, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { ORAL_FLASHCARDS } from './data.ts';

interface FlashcardsViewProps {
  showHyAlways?: boolean;
}

export function FlashcardsView({ showHyAlways = false }: FlashcardsViewProps) {
  const [cards, setCards] = useState(ORAL_FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<number[]>([]);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  const toggleMastered = (id: number) => {
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const playVoice = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Bar for flashcard controller */}
      <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-slate-800">
            Քարտ {currentIndex + 1} / {cards.length}
          </span>
          <span className="text-xs text-slate-500">
            · {masteredIds.length} յուրացված
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Խառնել</span>
          </button>
          <button
            onClick={() => toggleMastered(currentCard.id)}
            className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              masteredIds.includes(currentCard.id)
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{masteredIds.includes(currentCard.id) ? 'Յուրացված է' : 'Նշել յուրացված'}</span>
          </button>
        </div>
      </div>

      {/* The 3D Flip Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative min-h-[320px] bg-white rounded-2xl border-2 border-slate-200/90 shadow-sm p-8 cursor-pointer hover:border-blue-400 transition-all flex flex-col justify-between select-text"
      >
        {/* Top hint tag */}
        <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-slate-100">
          <span className="font-semibold text-blue-600">
            {isFlipped ? 'RESPUESTA / ՊԱՏԱՍԽԱՆ' : 'PREGUNTA ORAL / ԲԱՆԱՎՈՐ ՀԱՐՑ'}
          </span>
          <span className="text-slate-400">
            Սեղմիր քարտին՝ շրջելու համար (Haz clic para girar)
          </span>
        </div>

        {/* Card Body */}
        <div className="my-auto py-6 space-y-5">
          {!isFlipped ? (
            /* FRONT: QUESTION */
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug tracking-tight">
                  {currentCard.questionEs}
                </h3>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    playVoice(currentCard.questionEs);
                  }}
                  className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors shrink-0 cursor-pointer"
                  title="Լսել հարցի իսպաներեն արտասանությունը"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
              </div>

              {(showHyAlways || isFlipped) && (
                <div className="p-4 bg-amber-50/90 rounded-xl border-l-4 border-amber-500 text-slate-900 text-base sm:text-lg font-normal leading-relaxed shadow-2xs">
                  🇦🇲 {currentCard.questionHy}
                </div>
              )}
            </div>
          ) : (
            /* BACK: ANSWER */
            <div className="space-y-5 animate-fadeIn">
              <div className="flex items-start justify-between gap-4">
                <div className="text-lg sm:text-xl font-medium text-emerald-950 leading-relaxed pl-4 border-l-4 border-emerald-500 bg-emerald-50/80 py-3 rounded-r-xl">
                  {currentCard.answerEs}
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    playVoice(currentCard.answerEs);
                  }}
                  className="p-2.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors shrink-0 cursor-pointer"
                  title="Լսել պատասխանի արտասանությունը"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 text-base sm:text-lg text-slate-900 space-y-1.5 shadow-2xs">
                <div className="text-sm font-bold text-amber-950 flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Բացատրություն հայերենով․
                </div>
                <p className="leading-relaxed font-normal">
                  {currentCard.answerHy}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer prompt */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1 text-slate-500">
            <RotateCw className="w-3.5 h-3.5" />
            <span>{isFlipped ? 'Տեսնել հարցը' : 'Տեսնել պատասխանը'}</span>
          </div>
          <span>{currentCard.category}</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-sm font-semibold text-slate-700 transition-colors shadow-xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Նախորդ (Anterior)</span>
        </button>

        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-4 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
        >
          {isFlipped ? 'Շրջել հարցին' : 'Բացել պատասխանը'}
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-xs cursor-pointer"
        >
          <span>Հաջորդ (Siguiente)</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
