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
