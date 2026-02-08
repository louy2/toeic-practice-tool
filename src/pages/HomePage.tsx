import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { getOverallStats } from '../lib/storage'

const parts = [
  {
    to: '/practice/part5',
    label: 'Part 5',
    description: '短文穴埋め',
    questions: '15問',
  },
  {
    to: '/practice/part6',
    label: 'Part 6',
    description: '長文穴埋め',
    questions: '3パッセージ',
  },
]

export function HomePage() {
  const stats = getOverallStats()
  const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <Header title="TOEIC Practice" />

      <main className="flex flex-1 flex-col items-center gap-8 p-6 pt-10">
        {/* タイトル */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-600">TOEIC</h2>
          <p className="text-lg text-gray-500">Reading 練習</p>
        </div>

        {/* 累計成績 */}
        {stats.total > 0 && (
          <div className="w-full max-w-xs rounded-2xl bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-gray-500">累計正答率</p>
            <p className="mt-1 text-4xl font-bold text-blue-600">{percentage}%</p>
            <p className="mt-1 text-sm text-gray-400">
              {stats.correct} / {stats.total} 問
            </p>
          </div>
        )}

        {/* パート選択 */}
        <div className="flex w-full max-w-xs flex-col gap-3">
          {parts.map((part) => (
            <Link
              key={part.to}
              to={part.to}
              className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm transition active:bg-blue-50"
            >
              <div>
                <p className="text-lg font-bold text-gray-800">{part.label}</p>
                <p className="text-sm text-gray-500">{part.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{part.questions}</span>
                <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
