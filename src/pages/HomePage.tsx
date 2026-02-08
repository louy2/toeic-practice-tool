import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { getOverallStats } from '../lib/storage'

export function HomePage() {
  const stats = getOverallStats()
  const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <Header title="TOEIC Practice" />

      <main className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
        {/* ロゴ風タイトル */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-600">TOEIC</h2>
          <p className="text-lg text-gray-500">Part 5 練習</p>
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

        {/* 練習開始ボタン */}
        <Link
          to="/practice"
          className="w-full max-w-xs rounded-2xl bg-blue-600 py-4 text-center text-lg font-bold text-white shadow-lg transition active:bg-blue-700"
        >
          練習を始める
        </Link>
      </main>
    </div>
  )
}
