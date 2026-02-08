import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Part6Card } from '../components/Part6Card'
import { part6Passages } from '../data/part6'
import { usePart6Quiz } from '../hooks/usePart6Quiz'
import { appendAnswers } from '../lib/storage'

export function Part6PracticePage() {
  const navigate = useNavigate()
  const {
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
  } = usePart6Quiz(part6Passages, 2)

  useEffect(() => {
    if (finished) {
      appendAnswers(result.answers)
      navigate('/result', {
        state: { correct: result.correctCount, total: result.totalQuestions, part: 'part6' },
        replace: true,
      })
    }
  }, [finished, navigate, result])

  if (!currentPassage || !currentBlank) return null

  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header
        title="Part 6"
        showBack
        progress={`${answeredBlanks + 1} / ${totalBlanks}`}
      />

      {/* プログレスバー */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${((answeredBlanks + 1) / totalBlanks) * 100}%` }}
        />
      </div>

      <Part6Card
        passage={currentPassage}
        currentBlankIndex={blankIndex}
        currentBlank={currentBlank}
        selectedIndex={selectedIndex}
        blankAnswers={blankAnswers}
        passageIndex={passageIndex}
        onSelect={handleSelect}
      />

      {/* 次へボタン */}
      {selectedIndex !== null && (
        <div className="sticky bottom-0 border-t bg-white p-4">
          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-bold text-white active:bg-blue-700"
          >
            {answeredBlanks + 1 >= totalBlanks ? '結果を見る' : '次の空欄'}
          </button>
        </div>
      )}
    </div>
  )
}
