import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { QuestionCard } from '../components/QuestionCard'
import { questions as allQuestions } from '../data/questions'
import { useQuiz } from '../hooks/useQuiz'
import { appendAnswers } from '../lib/storage'

export function PracticePage() {
  const navigate = useNavigate()
  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedIndex,
    finished,
    result,
    handleSelect,
    handleNext,
  } = useQuiz(allQuestions, 10)

  useEffect(() => {
    if (finished) {
      appendAnswers(result.answers)
      navigate('/result', {
        state: { correct: result.correctCount, total: result.totalQuestions },
        replace: true,
      })
    }
  }, [finished, navigate, result])

  if (!currentQuestion) return null

  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header
        title="Part 5"
        showBack
        progress={`${currentIndex + 1} / ${totalQuestions}`}
      />

      {/* プログレスバー */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      />

      {/* 次へボタン */}
      {selectedIndex !== null && (
        <div className="sticky bottom-0 border-t bg-white p-4">
          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-bold text-white active:bg-blue-700"
          >
            {currentIndex + 1 >= totalQuestions ? '結果を見る' : '次の問題'}
          </button>
        </div>
      )}
    </div>
  )
}
