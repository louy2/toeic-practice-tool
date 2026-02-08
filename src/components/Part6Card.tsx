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

  // パッセージ内のマーカーからグローバル番号一覧を取得
  const globalNumbers = (passage.passage.match(/____\((\d+)\)____/g) || []).map(
    (m) => m.match(/\d+/)![0],
  )

  function choiceState(index: number): 'default' | 'correct' | 'wrong' | 'dimmed' {
    if (!answered) return 'default'
    if (index === currentBlank.correctIndex) return 'correct'
    if (index === selectedIndex) return 'wrong'
    return 'dimmed'
  }

  // パッセージ内のマーカーをハイライト表示に変換
  // マーカーの表示番号（グローバル番号）はそのまま保持し、
  // blanks[] 配列へのインデックスは出現順で参照する
  function renderPassage() {
    const parts = passage.passage.split(/(____\(\d+\)____)/)
    let localIndex = 0
    return parts.map((part, i) => {
      const match = part.match(/____\((\d+)\)____/)
      if (!match) return <span key={i}>{part}</span>

      const displayNum = match[1] // 表示用のグローバル番号
      const blankLocalIndex = localIndex // blanks[] へのローカルインデックス
      localIndex++

      const isActive = blankLocalIndex === currentBlankIndex
      const key = `${passageIndex}-${blankLocalIndex}`
      const answeredChoice = blankAnswers[key]

      // 既に回答済みの空欄は正解を表示
      if (answeredChoice !== undefined && !isActive) {
        const blank = passage.blanks[blankLocalIndex]
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
            ({displayNum})
          </span>
        )
      }

      // まだ回答していない空欄
      return (
        <span key={i} className="inline-block min-w-[60px] border-b-2 border-gray-300 text-center text-gray-400">
          ({displayNum})
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

      {/* 空欄の問い — パッセージ内のグローバル番号を表示 */}
      <p className="text-sm font-bold text-blue-600">
        空欄 ({globalNumbers[currentBlankIndex]}) に入る最も適切なものを選んでください。
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
