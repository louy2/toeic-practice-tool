interface ResultSummaryProps {
  correct: number
  total: number
}

export function ResultSummary({ correct, total }: ResultSummaryProps) {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const filled = (percentage / 100) * circumference

  let color = 'text-red-500'
  if (percentage >= 80) color = 'text-green-500'
  else if (percentage >= 60) color = 'text-yellow-500'

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 円グラフ */}
      <div className="relative h-40 w-40">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            className={color}
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - filled}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-800">{percentage}%</span>
          <span className="text-sm text-gray-500">正答率</span>
        </div>
      </div>

      <p className="text-lg text-gray-700">
        <span className="font-bold text-blue-600">{correct}</span>
        <span> / {total} 問正解</span>
      </p>
    </div>
  )
}
