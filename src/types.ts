export interface Question {
  id: string
  sentence: string
  choices: [string, string, string, string]
  correctIndex: number
  explanation: string
}

export interface AnswerRecord {
  questionId: string
  isCorrect: boolean
  selectedIndex: number
  timestamp: number
}

export interface SessionResult {
  answers: AnswerRecord[]
  totalQuestions: number
  correctCount: number
}

// Part 6: 長文穴埋め
export interface Part6Blank {
  blankId: string
  choices: [string, string, string, string]
  correctIndex: number
  explanation: string
}

export interface Part6Passage {
  id: string
  instruction: string
  passage: string // ____(1)____ 形式のマーカー付き
  blanks: Part6Blank[]
}
