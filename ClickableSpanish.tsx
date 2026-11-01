import { useState } from 'react';
import { Volume2, Languages, Sparkles } from 'lucide-react';

interface ClickableSpanishProps {
  es: string;
  hy: string;
  showHyAlways?: boolean;
  className?: string;
  inline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function ClickableSpanish({
  es,
  hy,
  showHyAlways = false,
  className = '',
  inline = false,
  size = 'md'
}: ClickableSpanishProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const isVisible = showHyAlways || isOpen;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(es);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setSpeaking(false);
    }
  };

  const sizeClasses = {
    sm: 'text-base font-normal leading-relaxed',
    md: 'text-lg sm:text-xl font-medium leading-snug',
    lg: 'text-xl sm:text-2xl font-bold tracking-tight leading-snug'
  };

  if (inline) {
    return (
      <span className="relative inline-block group">
        <span
          onClick={() => setIsOpen(!isOpen)}
          className={`trans-target px-1.5 py-0.5 rounded cursor-pointer transition-colors text-base sm:text-lg font-medium ${
            isOpen ? 'bg-amber-100 text-amber-950 border-amber-500' : 'hover:bg-blue-50 text-slate-900'
          } ${className}`}
          title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար (Haz clic para ver armenio)"
        >
          {es}
        </span>
        {isVisible && (
          <span className="ml-2 inline-flex items-center text-sm sm:text-base font-normal text-amber-950 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-300 shadow-xs animate-fadeIn">
            🇦🇲 {hy}
          </span>
        )}
      </span>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start justify-between gap-3 p-3 rounded-xl cursor-pointer hover:bg-slate-100/90 transition-colors group select-text"
        title="Սեղմիր՝ հայերեն թարգմանությունը բացելու համար"
      >
        <span className={`text-slate-900 ${sizeClasses[size]}`}>
          {es}
        </span>
        <div className="flex items-center gap-1.5 shrink-0 pt-1">
          <button
            onClick={handleSpeak}
            className={`p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors ${
              speaking ? 'text-blue-600 animate-pulse' : ''
            }`}
            title="Լսել իսպաներեն արտասանությունը (Escuchar pronunciación)"
            type="button"
          >
            <Volume2 className="w-5 h-5" />
          </button>
          {!showHyAlways && (
            <span
              className={`px-2 py-1 rounded-md text-xs font-semibold transition-colors flex items-center gap-1 ${
                isOpen
                  ? 'bg-blue-100 text-blue-800'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/80'
              }`}
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs">Թարգմանել</span>
            </span>
          )}
        </div>
      </div>

      {isVisible && (
        <div className="pl-4 pr-3 py-2.5 text-slate-900 bg-amber-50/90 border-l-4 border-amber-500 text-base sm:text-lg font-normal rounded-r-xl shadow-2xs animate-fadeIn flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-1" />
          <span className="leading-relaxed font-normal">{hy}</span>
        </div>
      )}
    </div>
  );
}
