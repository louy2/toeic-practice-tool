import type { Part6Passage, Part6Blank } from '../types'
import { ChoiceButton } from './ChoiceButton'

interface Part6CardProps {
  passage: Part6Passage
  currentBlankIndex: number
  currentBlank: Part6Blank
  selectedIndex: number | null
  blankAnswers: Record<string, number>
  passageIndex: number
  onSelect: (index: number) => void
}

export function Part6Card({
  passage,
  currentBlankIndex,
  currentBlank,
  selectedIndex,
  blankAnswers,
  passageIndex,
  onSelect,
}: Part6CardProps) {
  const answered = selectedIndex !== null
  const isCorrect = selectedIndex === currentBlank.correctIndex

  function choiceState(index: number): 'default' | 'correct' | 'wrong' | 'dimmed' {
    if (!answered) return 'default'
    if (index === currentBlank.correctIndex) return 'correct'
    if (index === selectedIndex) return 'wrong'
    return 'dimmed'
  }

  // パッセージ内のマーカーをハイライト表示に変換
  function renderPassage() {
    const parts = passage.passage.split(/(____\(\d+\)____)/)
    return parts.map((part, i) => {
      const match = part.match(/____\((\d+)\)____/)
      if (!match) return <span key={i}>{part}</span>

      const blankNum = parseInt(match[1], 10) - 1
      const isActive = blankNum === currentBlankIndex
      const key = `${passageIndex}-${blankNum}`
      const answeredChoice = blankAnswers[key]

      // 既に回答済みの空欄は正解を表示
      if (answeredChoice !== undefined && !isActive) {
        const blank = passage.blanks[blankNum]
        return (
          <span key={i} className="font-semibold text-green-700 underline decoration-green-400">
            {blank.choices[blank.correctIndex]}
          </span>
        )
      }

      // 今の空欄はハイライト
      if (isActive) {
        return (
          <span
            key={i}
            className="inline-block min-w-[80px] rounded bg-blue-100 px-2 py-0.5 text-center font-bold text-blue-600"
          >
            ({blankNum + 1})
          </span>
        )
      }

      // まだ回答していない空欄
      return (
        <span key={i} className="inline-block min-w-[60px] border-b-2 border-gray-300 text-center text-gray-400">
          ({blankNum + 1})
        </span>
      )
    })
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* 指示文 */}
      <p className="text-sm font-medium text-gray-500">{passage.instruction}</p>

      {/* パッセージ */}
      <div className="rounded-xl bg-slate-50 p-4 text-[15px] leading-relaxed text-gray-800 whitespace-pre-line">
        {renderPassage()}
      </div>

      {/* 空欄の問い */}
      <p className="text-sm font-bold text-blue-600">
        空欄 ({currentBlankIndex + 1}) に入る最も適切なものを選んでください。
      </p>

      {/* 選択肢 */}
      <div className="flex flex-col gap-3">
        {currentBlank.choices.map((choice, i) => (
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
            {currentBlank.explanation}
          </p>
        </div>
      )}
    </div>
  )
}
