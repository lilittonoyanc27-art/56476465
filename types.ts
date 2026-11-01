export type TabKey = 
  | 'repaso' 
  | 'ejercicios' 
  | 'armenian_exercises' 
  | 'new_50_exam' 
  | 'simulacro' 
  | 'orales' 
  | 'glosario';

export interface BilingualText {
  es: string;
  hy: string;
  explanationEs?: string;
  explanationHy?: string;
}

export interface QuestionOption {
  id: string; // 'A' | 'B' | 'C' | 'D' or specific text
  textEs: string;
  textHy: string;
}

export interface ExamQuestion {
  id: number;
  part: string;
  partHy: string;
  questionEs: string;
  questionHy: string;
  options?: QuestionOption[];
  correctAnswer: string; // e.g. 'A', 'B', 'Aliteración', 'Verdadero', etc.
  explanationEs: string;
  explanationHy: string;
  hintEs?: string;
  hintHy?: string;
  type?: 'choice' | 'true_false' | 'select' | 'open' | 'analysis';
}

export interface FlashcardItem {
  id: number;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
  category: string;
  categoryHy: string;
}

export interface FigureItem {
  nameEs: string;
  nameHy: string;
  level: 'fónico' | 'morfosintáctico' | 'semántico';
  levelHy: string;
  definitionEs: string;
  definitionHy: string;
  exampleEs: string;
  exampleHy: string;
  keyRuleEs: string;
  keyRuleHy: string;
}

export interface DifferenceItem {
  pair: string;
  pairHy: string;
  differenceEs: string;
  differenceHy: string;
  exampleEs?: string;
  exampleHy?: string;
}
