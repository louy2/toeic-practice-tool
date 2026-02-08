import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { getOverallStats, getGrowthTrend, getSessionHistory } from '../lib/storage'

const parts = [
  {
    to: '/practice/part5',
    label: 'Part 5',
    description: '短文穴埋め',
    questions: '50問',
  },
  {
    to: '/practice/part6',
    label: 'Part 6',
    description: '長文穴埋め',
    questions: '12パッセージ',
  },
]

export function HomePage() {
  const stats = getOverallStats()
  const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
  const trend = getGrowthTrend()
  const sessions = getSessionHistory()

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <Header title="TOEIC Practice" />

      <main className="flex flex-1 flex-col items-center gap-8 p-6 pt-10">
        {/* タイトル */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-600">TOEIC</h2>
          <p className="text-lg text-gray-500">Reading 練習</p>
        </div>

        {/* 累計成績 + 成長トレンド */}
        {stats.total > 0 && (
          <Link to="/stats" className="w-full max-w-xs rounded-2xl bg-white p-6 text-center shadow-sm active:bg-blue-50 transition">
            <p className="text-sm text-gray-500">累計正答率</p>
            <div className="mt-1 flex items-center justify-center gap-2">
              <p className="text-4xl font-bold text-blue-600">{percentage}%</p>
              {trend.direction === 'up' && (
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">+{trend.diff}%&#8593;</span>
              )}
              {trend.direction === 'down' && (
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">{trend.diff}%&#8595;</span>
              )}
              {trend.direction === 'stable' && (
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-500">安定</span>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-400">
              {stats.correct} / {stats.total} 問 ({sessions.length}回練習)
            </p>
            <p className="mt-2 text-xs text-blue-500 font-medium">学習の記録を見る &rarr;</p>
          </Link>
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
