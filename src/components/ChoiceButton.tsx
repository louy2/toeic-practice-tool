const LABELS = ['A', 'B', 'C', 'D'] as const

interface ChoiceButtonProps {
  index: number
  text: string
  state: 'default' | 'correct' | 'wrong' | 'dimmed'
  disabled: boolean
  onSelect: () => void
}

export function ChoiceButton({ index, text, state, disabled, onSelect }: ChoiceButtonProps) {
  const base = 'w-full rounded-xl border-2 px-4 py-4 text-left text-base font-medium transition-colors'

  const styles: Record<typeof state, string> = {
    default: 'border-gray-200 bg-white active:bg-blue-50 active:border-blue-300',
    correct: 'border-green-500 bg-green-50 text-green-800',
    wrong: 'border-red-500 bg-red-50 text-red-800',
    dimmed: 'border-gray-100 bg-gray-50 text-gray-400',
  }

  return (
    <button
      className={`${base} ${styles[state]}`}
      disabled={disabled}
      onClick={onSelect}
    >
      <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
        {LABELS[index]}
      </span>
      {text}
    </button>
  )
}
