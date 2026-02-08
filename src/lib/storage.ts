import type { AnswerRecord } from '../types'

const STORAGE_KEY = 'toeic-answers'

export function loadAnswers(): AnswerRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AnswerRecord[]) : []
  } catch {
    return []
  }
}

export function saveAnswers(records: AnswerRecord[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export function appendAnswers(newRecords: AnswerRecord[]): void {
  const existing = loadAnswers()
  saveAnswers([...existing, ...newRecords])
}

export function getOverallStats(): { correct: number; total: number } {
  const answers = loadAnswers()
  return {
    total: answers.length,
    correct: answers.filter((a) => a.isCorrect).length,
  }
}
