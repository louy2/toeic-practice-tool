import { Link, useLocation, Navigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { ResultSummary } from '../components/ResultSummary'

interface ResultState {
  correct: number
  total: number
}

export function ResultPage() {
  const location = useLocation()
  const state = location.state as ResultState | null

  if (!state) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <Header title="結果" />

      <main className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
        <ResultSummary correct={state.correct} total={state.total} />

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Link
            to="/practice"
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
