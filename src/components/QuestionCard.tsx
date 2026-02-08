import type { Question } from '../types'
import { ChoiceButton } from './ChoiceButton'

interface QuestionCardProps {
  question: Question
  selectedIndex: number | null
  onSelect: (index: number) => void
}

export function QuestionCard({ question, selectedIndex, onSelect }: QuestionCardProps) {
  const answered = selectedIndex !== null
  const isCorrect = selectedIndex === question.correctIndex

  function choiceState(index: number): 'default' | 'correct' | 'wrong' | 'dimmed' {
    if (!answered) return 'default'
    if (index === question.correctIndex) return 'correct'
    if (index === selectedIndex) return 'wrong'
    return 'dimmed'
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4">
      {/* 問題文 */}
      <div className="rounded-xl bg-slate-50 p-5">
        <p className="text-lg leading-relaxed text-gray-800">{question.sentence}</p>
      </div>

      {/* 選択肢 */}
      <div className="flex flex-col gap-3">
        {question.choices.map((choice, i) => (
          <ChoiceButton
            key={i}
            index={i}
            text={choice}
            state={choiceState(i)}
            disabled={answered}
            onSelect={() => onSelect(i)}
          />
        ))}
      </div>

      {/* 解説 */}
      {answered && (
        <div
          className={`rounded-xl border-l-4 p-4 ${
            isCorrect
              ? 'border-green-500 bg-green-50'
              : 'border-red-500 bg-red-50'
          }`}
        >
          <p className="mb-1 text-sm font-bold">
            {isCorrect ? '正解！' : '不正解'}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  )
}
