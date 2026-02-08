import { useState, useMemo, useCallback } from 'react'
import type { Question, AnswerRecord, SessionResult } from '../types'

function shuffle<T>(array: T[]): T[] {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function useQuiz(allQuestions: Question[], count: number = 10) {
  const questions = useMemo(
    () => shuffle(allQuestions).slice(0, count),
    [allQuestions, count],
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [finished, setFinished] = useState(false)

  const currentQuestion = questions[currentIndex] as Question | undefined

  const handleSelect = useCallback(
    (choiceIndex: number) => {
      if (selectedIndex !== null || !currentQuestion) return
      setSelectedIndex(choiceIndex)

      const record: AnswerRecord = {
        questionId: currentQuestion.id,
        isCorrect: choiceIndex === currentQuestion.correctIndex,
        selectedIndex: choiceIndex,
        timestamp: Date.now(),
      }
      setAnswers((prev) => [...prev, record])
    },
    [selectedIndex, currentQuestion],
  )

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrentIndex((i) => i + 1)
      setSelectedIndex(null)
    }
  }, [currentIndex, questions.length])

  const result: SessionResult = {
    answers,
    totalQuestions: questions.length,
    correctCount: answers.filter((a) => a.isCorrect).length,
  }

  return {
    currentQuestion,
    currentIndex,
    totalQuestions: questions.length,
    selectedIndex,
    finished,
    result,
    handleSelect,
    handleNext,
  }
}
