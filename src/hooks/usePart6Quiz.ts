import { useState, useMemo, useCallback } from 'react'
import type { Part6Passage, AnswerRecord, SessionResult } from '../types'

function shuffle<T>(array: T[]): T[] {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function usePart6Quiz(allPassages: Part6Passage[], count: number = 2) {
  const passages = useMemo(
    () => shuffle(allPassages).slice(0, count),
    [allPassages, count],
  )

  const [passageIndex, setPassageIndex] = useState(0)
  const [blankIndex, setBlankIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  // 各パッセージの各空欄の回答を記録 { [passageIdx-blankIdx]: selectedIndex }
  const [blankAnswers, setBlankAnswers] = useState<Record<string, number>>({})
  const [finished, setFinished] = useState(false)

  const currentPassage = passages[passageIndex] as Part6Passage | undefined
  const currentBlank = currentPassage?.blanks[blankIndex]

  const totalBlanks = useMemo(
    () => passages.reduce((sum, p) => sum + p.blanks.length, 0),
    [passages],
  )

  const answeredBlanks = answers.length

  const handleSelect = useCallback(
    (choiceIndex: number) => {
      if (selectedIndex !== null || !currentBlank) return
      setSelectedIndex(choiceIndex)

      const key = `${passageIndex}-${blankIndex}`
      setBlankAnswers((prev) => ({ ...prev, [key]: choiceIndex }))

      const record: AnswerRecord = {
        questionId: currentBlank.blankId,
        isCorrect: choiceIndex === currentBlank.correctIndex,
        selectedIndex: choiceIndex,
        timestamp: Date.now(),
      }
      setAnswers((prev) => [...prev, record])
    },
    [selectedIndex, currentBlank, passageIndex, blankIndex],
  )

  const handleNext = useCallback(() => {
    if (!currentPassage) return

    if (blankIndex + 1 < currentPassage.blanks.length) {
      // 同じパッセージの次の空欄
      setBlankIndex((i) => i + 1)
      setSelectedIndex(null)
    } else if (passageIndex + 1 < passages.length) {
      // 次のパッセージ
      setPassageIndex((i) => i + 1)
      setBlankIndex(0)
      setSelectedIndex(null)
    } else {
      setFinished(true)
    }
  }, [blankIndex, passageIndex, currentPassage, passages.length])

  const result: SessionResult = {
    answers,
    totalQuestions: totalBlanks,
    correctCount: answers.filter((a) => a.isCorrect).length,
  }

  return {
    currentPassage,
    currentBlank,
    passageIndex,
    blankIndex,
    totalBlanks,
    answeredBlanks,
    selectedIndex,
    blankAnswers,
    finished,
    result,
    handleSelect,
    handleNext,
  }
}
