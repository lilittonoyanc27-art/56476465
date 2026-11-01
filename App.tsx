import { useState, useMemo } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  GraduationCap, 
  Languages, 
  Search, 
  Sparkles, 
  Trophy, 
  Volume2, 
  RotateCcw,
  Layers,
  Compass,
  ArrowRight
} from 'lucide-react';
import { TabKey, FigureItem } from './types.ts';
import { 
  REPASO_CONCEPTOS, 
  FIGURAS_LITERARIAS, 
  DIFERENCIAS_IMPORTANTES, 
  EJERCICIOS_PARTE_1,
  EXAMEN_50_PREGUNTAS,
  SIMULACRO_PREGUNTAS
} from './data.ts';
import { ClickableSpanish } from './ClickableSpanish.tsx';
import { QuestionCard } from './QuestionCard.tsx';
import { RomanceAnalyzer } from './RomanceAnalyzer.tsx';
import { TextAnalysisView } from './TextAnalysisView.tsx';
import { FlashcardsView } from './FlashcardsView.tsx';
import { GuidesView } from './GuidesView.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('repaso');
  const [showHyAlways, setShowHyAlways] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fontSizeMode, setFontSizeMode] = useState<'normal' | 'large' | 'xlarge'>('large');
  
  // Exercise filters & progress
  const [exerciseFilter, setExerciseFilter] = useState<string>('all');
  const [examPartFilter, setExamPartFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<'all' | 'fónico' | 'morfosintáctico' | 'semántico'>('all');

  // Written Question 100 state
  const [metaforaInput, setMetaforaInput] = useState('');
  const [hiperbatonInput, setHiperbatonInput] = useState('');
  const [showQ100Rubric, setShowQ100Rubric] = useState(false);

  // Sound playback
  const playVoice = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  };

  // Filtered glossary / figures
  const filteredFigures = useMemo(() => {
    return FIGURAS_LITERARIAS.filter((f) => {
      const matchesLevel = levelFilter === 'all' || f.level === levelFilter;
      const matchesSearch = 
        f.nameEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.nameHy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.definitionEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.definitionHy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.exampleEs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLevel && matchesSearch;
    });
  }, [levelFilter, searchQuery]);

  const fontSizeClass = {
    normal: 'font-size-normal',
    large: 'font-size-large',
    xlarge: 'font-size-xlarge'
  }[fontSizeMode];

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col ${fontSizeClass}`}>
      {/* TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl shadow-sm">
              7º
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                Lengua Castellana y Literatura
              </h1>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                7.º curso · Քննության նախապատրաստում (Español & Հայերեն)
              </div>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600">
            <button
              onClick={() => setActiveTab('repaso')}
              className={`px-3 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'repaso' ? 'bg-blue-100 text-blue-900 shadow-2xs' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              📚 Տեսություն
            </button>
            <button
              onClick={() => setActiveTab('ejercicios')}
              className={`px-3 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'ejercicios' ? 'bg-blue-100 text-blue-900 shadow-2xs' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              ✍️ Վարժություններ 1–8
            </button>
            <button
              onClick={() => setActiveTab('armenian_exercises')}
              className={`px-3 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'armenian_exercises' ? 'bg-blue-100 text-blue-900 shadow-2xs' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              🇦🇲 Տեքստեր & Վարժ. 9–10
            </button>
            <button
              onClick={() => setActiveTab('new_50_exam')}
              className={`px-3 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'new_50_exam' ? 'bg-blue-100 text-blue-900 shadow-2xs' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              🎯 50 Քննական հարցեր
            </button>
            <button
              onClick={() => setActiveTab('simulacro')}
              className={`px-3 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'simulacro' ? 'bg-blue-100 text-blue-900 shadow-2xs' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              📝 Սիմուլյատոր
            </button>
            <button
              onClick={() => setActiveTab('orales')}
              className={`px-3 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'orales' ? 'bg-blue-100 text-blue-900 shadow-2xs' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              🗣️ Բանավոր
            </button>
            <button
              onClick={() => setActiveTab('glosario')}
              className={`px-3 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'glosario' ? 'bg-blue-100 text-blue-900 shadow-2xs' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              📖 Բառարան
            </button>
          </nav>

          {/* Zone 3: Global Switch for Armenian Translation Mode & Font Zoom */}
          <div className="flex items-center gap-2">
            {/* Font Size Zoom Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setFontSizeMode('normal')}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  fontSizeMode === 'normal' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Սովորական տառաչափ"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeMode('large')}
                className={`px-2.5 py-1 text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                  fontSizeMode === 'large' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Մեծ տառաչափ (Առաջարկվող)"
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeMode('xlarge')}
                className={`px-2.5 py-1 text-base font-bold rounded-lg transition-colors cursor-pointer ${
                  fontSizeMode === 'xlarge' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Շատ մեծ տառաչափ"
              >
                A++
              </button>
            </div>

            <button
              onClick={() => setShowHyAlways(!showHyAlways)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer border-2 ${
                showHyAlways 
                  ? 'bg-amber-100 text-amber-950 border-amber-400 shadow-2xs' 
                  : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
              }`}
              title="Միացնել կամ անջատել հայերեն թարգմանությունների մշտական ցուցադրումը"
            >
              <Languages className="w-4 h-4 text-amber-700" />
              <span className="hidden sm:inline">
                {showHyAlways ? '🇦🇲 Հայերենը՝ ՄԻԱՑՎԱԾ' : '🇪🇸 Սեղմիր իսպաներենին'}
              </span>
              <span className="sm:hidden">
                {showHyAlways ? '🇦🇲 Հայ' : '🇪🇸 Իսպ'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Tab Scroller */}
        <div className="xl:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2.5 border-t border-slate-100 text-xs sm:text-sm font-bold scrollbar-none">
          <button
            onClick={() => setActiveTab('repaso')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'repaso' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            📚 Տեսություն
          </button>
          <button
            onClick={() => setActiveTab('ejercicios')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'ejercicios' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            ✍️ Վարժ. 1–8
          </button>
          <button
            onClick={() => setActiveTab('armenian_exercises')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'armenian_exercises' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🇦🇲 Տեքստեր & Վարժ. 9–10
          </button>
          <button
            onClick={() => setActiveTab('new_50_exam')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'new_50_exam' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🎯 50 Քննական
          </button>
          <button
            onClick={() => setActiveTab('simulacro')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'simulacro' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            📝 Սիմուլյատոր
          </button>
          <button
            onClick={() => setActiveTab('orales')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'orales' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🗣️ Բանավոր
          </button>
          <button
            onClick={() => setActiveTab('glosario')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'glosario' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            📖 Բառարան
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8">
        
        {/* TAB 1: REPASO RÁPIDO & TEORÍA */}
        {activeTab === 'repaso' && (
          <div className="space-y-8">
            {/* Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl text-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                  7.º curso · Examen Oficial de Lengua Castellana y Literatura
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  1. Repaso rápido — Արագ կրկնություն
                </h2>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Գրական բոլոր հիմնական հասկացությունները, ժանրերը (Romance, Leyenda, Mito, Cuento) և գեղարվեստական արտահայտչամիջոցները՝ իսպաներեն և հայերեն բացատրություններով։
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-xs">
                  <span className="bg-white/10 px-3 py-1 rounded-lg text-white font-medium">
                    💡 Կարող ես սեղմել ցանկացած իսպաներեն տեքստի վրա՝ հայերենը բացելու համար
                  </span>
                  <span className="bg-white/10 px-3 py-1 rounded-lg text-white font-medium">
                    🔊 Աուդիո կոճակով լսիր իսպաներեն արտասանությունը
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Concepts Grid (Literatura popular, culta, romance, leyenda, mito, etc.) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Գրականության տեսակներ և հիմնական ժանրեր (Conceptos clave)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {REPASO_CONCEPTOS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all space-y-3.5"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <span className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight">
                          {item.concept}
                        </span>
                        <div className="text-sm sm:text-base text-slate-600 font-semibold">
                          🇦🇲 {item.conceptHy}
                        </div>
                      </div>
                      <button
                        onClick={() => playVoice(item.es)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-normal">
                      🇪🇸 {item.es}
                    </p>

                    {(showHyAlways) && (
                      <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-300 text-base sm:text-lg text-slate-900 leading-relaxed font-normal shadow-2xs">
                        🇦🇲 {item.hy}
                      </div>
                    )}

                    {/* Bullet features */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Հատկանիշներ (Características):
                      </div>
                      <ul className="text-sm sm:text-base space-y-1.5 text-slate-800">
                        {item.traitsEs.map((t, i) => (
                          <li key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                            <span className="font-medium">• {t}</span>
                            <span className="text-slate-500 text-xs sm:text-sm font-normal">{item.traitsHy[i]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Figures of Speech by Level (Los 3 Niveles) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    2. Figuras literarias — Գեղարվեստական արտահայտչամիջոցներ (3 մակարդակ)
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    Nivel fónico, Nivel morfosintáctico և Nivel semántico
                  </p>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl text-xs sm:text-sm font-bold">
                  <button
                    onClick={() => setLevelFilter('all')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${levelFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
                  >
                    Բոլորը ({FIGURAS_LITERARIAS.length})
                  </button>
                  <button
                    onClick={() => setLevelFilter('fónico')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${levelFilter === 'fónico' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'}`}
                  >
                    Fónico
                  </button>
                  <button
                    onClick={() => setLevelFilter('morfosintáctico')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${levelFilter === 'morfosintáctico' ? 'bg-white text-purple-700 shadow-xs' : 'text-slate-600'}`}
                  >
                    Morfosintáctico
                  </button>
                  <button
                    onClick={() => setLevelFilter('semántico')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${levelFilter === 'semántico' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'}`}
                  >
                    Semántico
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredFigures.map((fig, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs space-y-3.5 flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                            fig.level === 'fónico'
                              ? 'bg-blue-100 text-blue-800'
                              : fig.level === 'morfosintáctico'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {fig.level}
                          </span>
                          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                            {fig.nameEs}
                          </h4>
                          <div className="text-sm sm:text-base text-slate-600 font-semibold">
                            🇦🇲 {fig.nameHy}
                          </div>
                        </div>

                        <button
                          onClick={() => playVoice(`${fig.nameEs}. ${fig.exampleEs}`)}
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                          title="Լսել արտասանությունը"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="text-base sm:text-lg text-slate-900 leading-relaxed font-normal">
                        <span className="font-bold text-slate-950">Definición: </span>
                        {fig.definitionEs}
                      </div>

                      {showHyAlways && (
                        <div className="text-base sm:text-lg text-slate-900 bg-amber-50/90 p-3 rounded-xl border border-amber-300 leading-relaxed font-normal shadow-2xs">
                          🇦🇲 {fig.definitionHy}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                        Օրինակ (Ejemplo):
                      </div>
                      <div className="text-base sm:text-lg font-serif italic text-blue-950 bg-blue-50/70 p-3 rounded-xl border border-blue-200">
                        «{fig.exampleEs}»
                      </div>
                      {showHyAlways && (
                        <div className="text-sm sm:text-base text-slate-600 font-normal">
                          🇦🇲 {fig.exampleHy}
                        </div>
                      )}
                      <div className="text-sm sm:text-base font-bold text-emerald-900 pt-1">
                        🔑 Կանոն․ {fig.keyRuleHy}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Differences Table: NO CONFUNDIR */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    5. Las diferencias más importantes — Տարբերակիր իրար նման հասկացությունները
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1 font-normal">
                    Քննության ժամանակ ամենաշատ շփոթվող զույգերը (No confundir):
                  </p>
                </div>
              </div>

              <div className="divide-y divide-slate-200/80">
                {DIFERENCIAS_IMPORTANTES.map((diff, i) => (
                  <div key={i} className="py-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
                      <span className="font-extrabold text-slate-900 text-base sm:text-xl">
                        {diff.pair}
                      </span>
                      <span className="text-sm sm:text-base text-blue-700 font-semibold">
                        🇦🇲 {diff.pairHy}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base sm:text-lg">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 leading-relaxed">
                        <strong className="text-slate-950 font-bold block mb-1">🇪🇸 Diferencia: </strong>
                        {diff.differenceEs}
                      </div>
                      <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-slate-900 leading-relaxed shadow-2xs">
                        <strong className="text-amber-950 font-bold block mb-1">🇦🇲 Տարբերություն: </strong>
                        {diff.differenceHy}
                      </div>
                    </div>

                    {diff.exampleEs && (
                      <div className="text-base sm:text-lg font-serif italic text-blue-950 bg-blue-50/60 p-3.5 rounded-xl border border-blue-200">
                        «{diff.exampleEs}»
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Deep Dive Section: Metáfora & Personificación Guides */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  Խորացված ուսումնական բաժին (Guías detalladas con ejercicios)
                </h3>
              </div>
              <GuidesView showHyAlways={showHyAlways} />
            </div>
          </div>
        )}

        {/* TAB 2: ORIGINAL EXERCISES (EJERCICIOS 1-8) */}
        {activeTab === 'ejercicios' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  PARTE 1 — Ejercicios en español (Վարժություններ 1–8)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Լրացրու առաջադրանքները։ Սխալ պատասխանի դեպքում անմիջապես կբացվի մանրամասն բացատրություն <strong>իսպաներեն և հայերեն</strong>։
                </p>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setExerciseFilter('all')}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    exerciseFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Բոլորը ({EJERCICIOS_PARTE_1.length})
                </button>
                <button
                  onClick={() => setExerciseFilter('popular_culta')}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    exerciseFilter === 'popular_culta' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Վարժ. 1–2
                </button>
                <button
                  onClick={() => setExerciseFilter('generos')}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    exerciseFilter === 'generos' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Վարժ. 3
                </button>
                <button
                  onClick={() => setExerciseFilter('fonico')}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    exerciseFilter === 'fonico' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Վարժ. 6 (Fónico)
                </button>
                <button
                  onClick={() => setExerciseFilter('sintactico')}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    exerciseFilter === 'sintactico' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Վարժ. 7 (Sintáctico)
                </button>
              </div>
            </div>

            {/* Interactive Romance Analysis (Ejercicio 4) always accessible or when viewing all */}
            {(exerciseFilter === 'all' || exerciseFilter === 'generos') && (
              <RomanceAnalyzer showHyAlways={showHyAlways} />
            )}

            {/* Questions Grid */}
            <div className="grid grid-cols-1 gap-5">
              {EJERCICIOS_PARTE_1
                .filter((q) => {
                  if (exerciseFilter === 'all') return true;
                  if (exerciseFilter === 'popular_culta') return q.part.includes('Ejercicio 1') || q.part.includes('Ejercicio 2');
                  if (exerciseFilter === 'generos') return q.part.includes('Ejercicio 3');
                  if (exerciseFilter === 'fonico') return q.part.includes('Ejercicio 6');
                  if (exerciseFilter === 'sintactico') return q.part.includes('Ejercicio 7');
                  return true;
                })
                .map((q, idx) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    index={idx}
                    showHyAlways={showHyAlways}
                  />
                ))}
            </div>
          </div>
        )}

        {/* TAB 3: ARMENIAN EXERCISES & TEXT ANALYSIS (PARTE 2) */}
        {activeTab === 'armenian_exercises' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">
                PARTE 2 — Վարժություններ հայերեն (Վարժություն 9 և 10)
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Տեքստային վերլուծություն («La campana misteriosa», «La noche de Ana») և տեսական հասկացությունների ստուգում հայերենով։
              </p>
            </div>

            <TextAnalysisView showHyAlways={showHyAlways} />
          </div>
        )}

        {/* TAB 4: 50 NEW OFFICIAL EXAM QUESTIONS */}
        {activeTab === 'new_50_exam' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    EXAMEN DE LENGUA CASTELLANA Y LITERATURA · 50 Նոր հարցեր
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    7.º curso — Քննական հարցեր և պատասխաններ (Հարցեր 1–50)՝ իսպաներեն և հայերեն բացատրություններով։
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    50 Քննական հարց
                  </span>
                </div>
              </div>

              {/* Part selector */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 text-xs">
                <button
                  onClick={() => setExamPartFilter('all')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Բոլորը (1–50)
                </button>
                <button
                  onClick={() => setExamPartFilter('parte1')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'parte1' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Մաս 1 (Popular y Culta)
                </button>
                <button
                  onClick={() => setExamPartFilter('parte2')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'parte2' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Մաս 2 (Géneros)
                </button>
                <button
                  onClick={() => setExamPartFilter('parte3')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'parte3' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Մաս 3 (Verso y Prosa)
                </button>
                <button
                  onClick={() => setExamPartFilter('parte4')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'parte4' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Մաս 4 (Nivel fónico)
                </button>
                <button
                  onClick={() => setExamPartFilter('parte5')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'parte5' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Մաս 5 (Morfosintáctico)
                </button>
                <button
                  onClick={() => setExamPartFilter('parte6')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'parte6' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Մաս 6 (Metáforas)
                </button>
                <button
                  onClick={() => setExamPartFilter('parte7')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    examPartFilter === 'parte7' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Մաս 7 (Գործնական)
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="grid grid-cols-1 gap-5">
              {EXAMEN_50_PREGUNTAS
                .filter((q) => {
                  if (examPartFilter === 'all') return true;
                  if (examPartFilter === 'parte1') return q.part.includes('Parte 1');
                  if (examPartFilter === 'parte2') return q.part.includes('Parte 2');
                  if (examPartFilter === 'parte3') return q.part.includes('Parte 3');
                  if (examPartFilter === 'parte4') return q.part.includes('Parte 4');
                  if (examPartFilter === 'parte5') return q.part.includes('Parte 5');
                  if (examPartFilter === 'parte6') return q.part.includes('Parte 6');
                  if (examPartFilter === 'parte7') return q.part.includes('Parte 7');
                  return true;
                })
                .map((q, idx) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    index={idx}
                    showHyAlways={showHyAlways}
                  />
                ))}
            </div>
          </div>
        )}

        {/* TAB 5: SIMULACRO DE EXAMEN (MOCK EXAM) */}
        {activeTab === 'simulacro' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                <Trophy className="w-4 h-4 text-amber-300" />
                Simulacro de examen oficial · 13 preguntas tipo test + Pregunta de desarrollo
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                PARTE 3 — Simulacro de examen (Հարցեր 87–100)
              </h2>
              <p className="text-sm text-indigo-100 leading-relaxed max-w-2xl">
                Քննության փորձնական տարբերակ։ Աշակերտը լրացնում է առանց օգնության, իսկ սխալվելու դեպքում ստանում է ամբողջական բացատրություն իսպաներեն և հայերեն։
              </p>
            </div>

            {/* 13 Test Questions (87-99) */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-800">
                Հարցեր 87–99 (Preguntas tipo test)․
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {SIMULACRO_PREGUNTAS.map((q, idx) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    index={idx}
                    showHyAlways={showHyAlways}
                  />
                ))}
              </div>
            </div>

            {/* Question 100: Pregunta de desarrollo */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-sm font-extrabold uppercase tracking-wider text-blue-600">
                    Pregunta 100 · Գրավոր առաջադրանք
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    Pregunta de desarrollo — Գրավոր շարադրանք
                  </h3>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-base sm:text-lg leading-relaxed">
                <div className="font-bold text-slate-950">
                  🇪🇸 Escribe dos oraciones: una con una metáfora y otra con un hipérbaton. Después, explica qué figura has utilizado.
                </div>
                <div className="text-slate-900 font-normal bg-amber-50/80 p-3.5 rounded-xl border border-amber-200/80">
                  🇦🇲 Գրիր երկու նախադասություն՝ մեկում փոխաբերություն (metáfora), մյուսում՝ շրջուն շարադասություն (hipérbaton)։ Այնուհետև բացատրիր յուրաքանչյուր արտահայտչամիջոցը։
                </div>
              </div>

              {/* Input areas for student */}
              <div className="space-y-5 pt-2">
                <div className="space-y-2">
                  <label className="text-sm sm:text-base font-bold text-slate-800">
                    1. Oración con metáfora y explicación (Փոխաբերություն)․
                  </label>
                  <textarea
                    rows={3}
                    value={metaforaInput}
                    onChange={(e) => setMetaforaInput(e.target.value)}
                    placeholder="Ejemplo: Tu voz es música para mis oídos. Explicación: He identificado la voz con la música por su agradable sonido..."
                    className="w-full p-4 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm sm:text-base font-bold text-slate-800">
                    2. Oración con hipérbaton y explicación (Հիպերբատոն)․
                  </label>
                  <textarea
                    rows={3}
                    value={hiperbatonInput}
                    onChange={(e) => setHiperbatonInput(e.target.value)}
                    placeholder="Ejemplo: De flores hermosas estaba lleno el campo. Explicación: He alterado el orden habitual cambiando el predicado al principio..."
                    className="w-full p-4 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setShowQ100Rubric(!showQ100Rubric)}
                    className="px-5 py-3 rounded-xl text-sm sm:text-base font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer shadow-sm"
                  >
                    {showQ100Rubric ? 'Թաքցնել ստուգման չափանիշները' : 'Ստուգել օրինակելի պատասխանը (Ver solución modelo)'}
                  </button>
                </div>

                {showQ100Rubric && (
                  <div className="mt-5 p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-base sm:text-lg space-y-4 animate-fadeIn">
                    <div className="font-extrabold text-emerald-950 flex items-center gap-2 text-lg sm:text-xl">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      Օրինակելի քննական պատասխան և գնահատման չափանիշներ (Solución modelo):
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-white/95 rounded-xl border border-emerald-200 space-y-2">
                        <div className="text-sm sm:text-base font-extrabold text-emerald-900">
                          1. Օրինակելի փոխաբերություն (Metáfora):
                        </div>
                        <p className="text-slate-950 font-semibold italic text-lg sm:text-xl">
                          «Las perlas de tu boca brillan al sonreír».
                        </p>
                        <p className="text-sm sm:text-base text-slate-800">
                          🇪🇸 <strong>Explicación:</strong> Es una metáfora de estructura «B de A» (o «Solo B» si no se mencionan dientes). Se identifican los dientes (A) con perlas (B) por su blancura y brillo.
                        </p>
                        <p className="text-sm sm:text-base text-slate-800 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200">
                          🇦🇲 <strong>Հայերեն բացատրություն․</strong> Ատամները (իրական A) նույնացվում են մարգարիտների (փոխաբերական B) հետ իրենց սպիտակության և փայլի պատճառով։
                        </p>
                      </div>

                      <div className="p-4 bg-white/95 rounded-xl border border-emerald-200 space-y-2">
                        <div className="text-sm sm:text-base font-extrabold text-emerald-900">
                          2. Օրինակելի հիպերբատոն (Hipérbaton):
                        </div>
                        <p className="text-slate-950 font-semibold italic text-lg sm:text-xl">
                          «Por la ventana entraba la suave brisa».
                        </p>
                        <p className="text-sm sm:text-base text-slate-800">
                          🇪🇸 <strong>Explicación:</strong> Se ha alterado el orden habitual Sujeto + Verbo + Complemento («La suave brisa entraba por la ventana») colocando el complemento circunstancial al principio para crear efecto poético.
                        </p>
                        <p className="text-sm sm:text-base text-slate-800 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200">
                          🇦🇲 <strong>Հայերեն բացատրություն․</strong> Խախտվել է սովորական շարադասությունը՝ պարագան դնելով նախադասության սկզբում (սովորական շարադասություն՝ «La suave brisa entraba por la ventana»)։
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: ORAL FLASHCARDS */}
        {activeTab === 'orales' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. Preguntas orales rápidas — Արագ բանավոր ստուգում
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Քննությունից առաջ կամ դասի վերջում բանավոր ստուգման 10+10 հարցեր։ Շրջիր քարտը, լսիր իսպաներեն արտասանությունը և համեմատիր քո պատասխանը։
              </p>
            </div>

            <FlashcardsView showHyAlways={showHyAlways} />
          </div>
        )}

        {/* TAB 7: GLOSSARY & SEARCH */}
        {activeTab === 'glosario' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Բառարան և որոնում (Glosario & Buscador)
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">
                    Արագ որոնիր ցանկացած գրական հասկացություն կամ գեղարվեստական հնարք իսպաներենով կամ հայերենով։
                  </p>
                </div>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="w-6 h-6 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Որոնել (ej. Metáfora, Aliteración, Romance, Անձնավորում, Շրջուն շարադասություն)..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                />
              </div>
            </div>

            {/* Glossary items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredFigures.map((fig, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-blue-950">
                        {fig.nameEs}
                      </h4>
                      <div className="text-sm sm:text-base text-slate-600 font-bold mt-0.5">
                        🇦🇲 {fig.nameHy}
                      </div>
                    </div>
                    <button
                      onClick={() => playVoice(`${fig.nameEs}. ${fig.exampleEs}`)}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                      title="Լսել"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-normal">
                    <strong className="text-slate-950 font-bold">Definición: </strong>
                    {fig.definitionEs}
                  </p>

                  <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-300 text-base sm:text-lg text-slate-900 leading-relaxed shadow-2xs font-normal">
                    🇦🇲 {fig.definitionHy}
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                      Օրինակ (Ejemplo):
                    </div>
                    <div className="text-base sm:text-lg font-serif italic text-blue-950 bg-blue-50/70 p-3 rounded-xl border border-blue-200">
                      «{fig.exampleEs}»
                    </div>
                    <div className="text-sm sm:text-base text-slate-600 font-normal">
                      🇦🇲 {fig.exampleHy}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-medium text-slate-700">
            Examen de Lengua Castellana y Literatura — 7.º curso (Español & Հայերեն)
          </p>
          <p>
            Նյութերը պատրաստված են 7-րդ դասարանի իսպաներենի և գրականության պաշտոնական ծրագրի համաձայն։
          </p>
        </div>
      </footer>
    </div>
  );
}
