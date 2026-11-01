import { useState } from 'react';
import { Sparkles, HelpCircle, Layers, Volume2, Compass, Check, ArrowRight } from 'lucide-react';
import { PERSONIFICACION_EXERCISES, METAFORA_STRUCTURE_EXERCISES } from './data.ts';
import { QuestionCard } from './QuestionCard.tsx';

interface GuidesViewProps {
  showHyAlways?: boolean;
}

export function GuidesView({ showHyAlways = false }: GuidesViewProps) {
  const [activeGuide, setActiveGuide] = useState<'metafora' | 'personificacion'>('metafora');

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
      {/* Selector */}
      <div className="flex items-center gap-2 p-1 bg-slate-200/80 rounded-xl">
        <button
          onClick={() => setActiveGuide('metafora')}
          className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 ${
            activeGuide === 'metafora'
              ? 'bg-white text-blue-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4 text-blue-600" />
          <span>La Metáfora · Փոխաբերություն (A և B, 4 կառուցվածք)</span>
        </button>

        <button
          onClick={() => setActiveGuide('personificacion')}
          className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 ${
            activeGuide === 'personificacion'
              ? 'bg-white text-purple-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>Personificación (Prosopopeya) · Անձնավորում</span>
        </button>
      </div>

      {/* METÁFORA GUIDE */}
      {activeGuide === 'metafora' && (
        <div className="space-y-6">
          {/* Main Theory */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
            <div className="pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-6 h-6 text-blue-600" />
                  La metáfora — Փոխաբերություն
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Relaciona e identifica dos elementos por su semejanza (նմանության հիման վրա երկու տարրերի նույնացում)
                </p>
              </div>
              <button
                onClick={() => playVoice("La metáfora es una figura literaria que relaciona dos elementos por su semejanza. A es el término real, y B es el término imaginario.")}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shrink-0"
                title="Լսել բացատրությունը"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* A and B definition boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-blue-50/80 border-2 border-blue-200 space-y-2.5 shadow-2xs">
                <div className="text-sm font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">A</span>
                  Término real — Իրական տարր
                </div>
                <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
                  Es la realidad objetiva de la que se habla directamente.
                </p>
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  🇦🇲 Այն առարկան կամ երևույթը, որի մասին իրականում խոսում ենք (օր.՝ <strong>աչքեր, ատամներ, մազեր</strong>)։
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/80 border-2 border-purple-200 space-y-2.5 shadow-2xs">
                <div className="text-sm font-bold text-purple-950 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">B</span>
                  Término imaginario — Փոխաբերական տարր
                </div>
                <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
                  Es el elemento poético con el que se identifica o asimila el término real.
                </p>
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  🇦🇲 Այն փոխաբերական, բանաստեղծական կերպարը, որի հետ նույնացնում ենք իրական տարրը (օր.՝ <strong>աստղեր, մարգարիտներ, ոսկի</strong>)։
                </div>
              </div>
            </div>

            {/* The 4 Structures */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                Փոխաբերության 4 կառուցվածքները (Las 4 estructuras para el examen)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50/80 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-950 text-base sm:text-lg">1. Estructura «A es B»</span>
                    <span className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 font-bold">Tus ojos son estrellas</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    A-ն նույնացվում է B-ի հետ «ser» բայով։ Երկու տարրերն էլ անմիջապես ներկա են։
                  </p>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    A = ojos (real) · B = estrellas (imaginario)
                  </div>
                </div>

                <div className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50/80 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-950 text-base sm:text-lg">2. Estructura «B de A»</span>
                    <span className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-bold">Las estrellas de tus ojos</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Սկզբում փոխաբերական տարրն է (B), հետո՝ իրականը (A) «de» նախդիրով։
                  </p>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    B = estrellas · A = ojos
                  </div>
                </div>

                <div className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50/80 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-950 text-base sm:text-lg">3. Estructura «A de B»</span>
                    <span className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 font-bold">Sus dientes de perlas</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Սկզբում իրական տարրն է (A), հետո՝ փոխաբերականը (B) «de» նախդիրով։
                  </p>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    A = dientes · B = perlas
                  </div>
                </div>

                <div className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50/80 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-950 text-base sm:text-lg">4. Estructura «Solo B»</span>
                    <span className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 font-bold">Dos estrellas iluminan su rostro</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Իրական տարրը (A = ojos) բացակայում է և ամբողջությամբ փոխարինված է փոխաբերականով (B = estrellas)։
                  </p>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    B = estrellas (A = ojos implícito)
                  </div>
                </div>
              </div>
            </div>

            {/* Warning: Metáfora vs Comparación */}
            <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 space-y-2 shadow-xs">
              <div className="font-bold text-amber-950 text-base sm:text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-700" />
                ⚠️ Ուշադրություն քննության ժամանակ․ Metáfora vs Comparación
              </div>
              <p className="text-sm sm:text-base text-slate-900 leading-relaxed">
                <strong>«Tus ojos son como estrellas»</strong> արտահայտությունը <strong>comparación</strong> (համեմատություն) է, որովհետև օգտագործված է <strong>«como»</strong> շաղկապը։ Իսկ <strong>«Tus ojos son estrellas»</strong> արտահայտությունը <strong>metáfora</strong> (փոխաբերություն) է, որտեղ նույնացումն ուղղակի է։
              </p>
            </div>
          </div>

          {/* Practice Questions for Metáfora */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900">
              Գործնական վարժություններ՝ Metáfora-ի կառուցվածքները (8 հարց)․
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {METAFORA_STRUCTURE_EXERCISES.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  index={idx}
                  showHyAlways={showHyAlways}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PERSONIFICACIÓN GUIDE */}
      {activeGuide === 'personificacion' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
            <div className="pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  Personificación (Prosopopeya) — Անձնավորում
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Nivel semántico · Իմաստային մակարդակի գեղարվեստական արտահայտչամիջոց
                </p>
              </div>
              <button
                onClick={() => playVoice("La personificación es una figura literaria que consiste en atribuir cualidades o acciones humanas a animales, plantas o elementos inanimados.")}
                className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors shrink-0"
                title="Լսել բացատրությունը"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Definition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1">
                <div className="text-xs font-bold text-purple-900 uppercase tracking-wider">
                  🇪🇸 En español:
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  Consiste en atribuir cualidades, sentimientos o acciones humanas a animales, objetos, plantas o elementos de la naturaleza.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  🇦🇲 Հայերեն:
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  Անձնավորումը գեղարվեստական հնարք է, որի միջոցով կենդանիներին, առարկաներին կամ բնության երևույթներին վերագրվում են մարդկային հատկություններ կամ գործողություններ։
                </p>
              </div>
            </div>

            {/* How to recognize rule */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
              <div className="font-bold text-blue-900 text-sm flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-blue-600" />
                ¿Cómo reconocerla? — Ինչպե՞ս ճանաչել անձնավորումը։
              </div>
              <p className="text-xs sm:text-sm text-slate-800">
                Հարցրու ինքդ քեզ․ <strong>¿Un objeto o elemento de la naturaleza realiza una acción humana?</strong> (Արդյո՞ք անշունչ առարկան կամ բնությունը կատարում է մարդկային գործողություն)։
              </p>
              <div className="text-xs text-slate-600 bg-white/70 p-2.5 rounded-lg border border-blue-100">
                Օրինակ՝ «El viento susurra secretos» ➔ Քամին չի խոսում, բայց «susurra» (շշնջում է) մարդկային գործողություն է ➔ <strong>Կա անձնավորում</strong>։
              </div>
            </div>

            {/* Examples table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Քննական օրինակների ցանկ (Ejemplos clave):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>La luna sonríe.</span>
                  <span className="text-slate-500">Լուսինը ժպտում է։</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>El viento canta.</span>
                  <span className="text-slate-500">Քամին երգում է։</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>Las flores bailan.</span>
                  <span className="text-slate-500">Ծաղիկները պարում են։</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>Las nubes lloran.</span>
                  <span className="text-slate-500">Ամպերը լաց են լինում։</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>La montaña observa el pueblo.</span>
                  <span className="text-slate-500">Լեռը դիտում է գյուղին։</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span>El reloj me grita.</span>
                  <span className="text-slate-500">Ժամացույցը գոռում է ինձ վրա։</span>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Questions */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900">
              Գործնական վարժություն՝ Որոշիր՝ կա՞ անձնավորում (8 հարց)․
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {PERSONIFICACION_EXERCISES.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  index={idx}
                  showHyAlways={showHyAlways}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
