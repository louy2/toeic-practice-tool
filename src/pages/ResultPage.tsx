import { Link, useLocation, Navigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { ResultSummary } from '../components/ResultSummary'
import { getGrowthTrend, getSessionHistory } from '../lib/storage'

interface ResultState {
  correct: number
  total: number
  part?: 'part5' | 'part6'
}

export function ResultPage() {
  const location = useLocation()
  const state = location.state as ResultState | null

  if (!state) {
    return <Navigate to="/" replace />
  }

  const trend = getGrowthTrend()
  const sessions = getSessionHistory()
  const retryPath = state.part === 'part6' ? '/practice/part6' : '/practice/part5'

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <Header title="結果" />

      <main className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
        <ResultSummary correct={state.correct} total={state.total} />

        {/* 成長フィードバック */}
        {sessions.length >= 2 && (
          <div className="w-full max-w-xs rounded-2xl bg-white p-4 text-center shadow-sm">
            {trend.direction === 'up' && (
              <p className="text-sm font-bold text-green-600">
                成長中！ 正答率が+{trend.diff}%上がっています
              </p>
            )}
            {trend.direction === 'down' && (
              <p className="text-sm font-bold text-orange-600">
                続けることが大切！ 練習を重ねましょう
              </p>
            )}
            {trend.direction === 'stable' && (
              <p className="text-sm font-bold text-blue-600">
                安定した実力です！
              </p>
            )}
            <Link to="/stats" className="mt-2 inline-block text-xs text-blue-500 font-medium">
              学習の記録を見る &rarr;
            </Link>
          </div>
        )}

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Link
            to={retryPath}
            className="rounded-2xl bg-blue-600 py-4 text-center text-lg font-bold text-white shadow-lg active:bg-blue-700"
          >
            もう一度
          </Link>
          <Link
            to="/"
            className="rounded-2xl border-2 border-gray-200 bg-white py-4 text-center text-lg font-bold text-gray-700 active:bg-gray-50"
          >
            ホームに戻る
          </Link>
        </div>
      </main>
    </div>
  )
}
