import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import {
  getSessionHistory,
  getPartStats,
  getGrowthTrend,
  getOverallStats,
  type SessionStats,
} from '../lib/storage'

function formatDate(ts: number): string {
  const d = new Date(ts)
  return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`
}

function partLabel(part: SessionStats['part']): string {
  if (part === 'part5') return 'Part 5'
  if (part === 'part6') return 'Part 6'
  return 'Part 5+6'
}

function TrendBadge({ direction, diff }: { direction: string; diff: number }) {
  if (direction === 'none') return null
  if (direction === 'up')
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-semibold text-green-700">
        +{diff}% <span aria-hidden>&#8593;</span>
      </span>
    )
  if (direction === 'down')
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-semibold text-red-600">
        {diff}% <span aria-hidden>&#8595;</span>
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-semibold text-gray-600">
      安定 &rarr;
    </span>
  )
}

function encourageMessage(direction: string, recentAvg: number | null): string {
  if (recentAvg === null) return '練習を始めましょう！'
  if (direction === 'up') return '成長しています！この調子で頑張りましょう！'
  if (direction === 'down') return '少しペースダウンしていますが、続けることが大切です！'
  if (direction === 'stable') return '安定した実力がついています！'
  return '練習を重ねて成長を実感しましょう！'
}

export function StatsPage() {
  const overall = getOverallStats()
  const sessions = getSessionHistory()
  const trend = getGrowthTrend()
  const p5Stats = getPartStats('p5')
  const p6Stats = getPartStats('p6')

  const overallPct = overall.total > 0 ? Math.round((overall.correct / overall.total) * 100) : 0
  const p5Pct = p5Stats.total > 0 ? Math.round((p5Stats.correct / p5Stats.total) * 100) : 0
  const p6Pct = p6Stats.total > 0 ? Math.round((p6Stats.correct / p6Stats.total) * 100) : 0

  // 棒グラフ用: 直近10セッション
  const recentSessions = sessions.slice(-10)
  const maxBarHeight = 80

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <Header title="学習の記録" showBack />

      <main className="flex flex-col gap-5 p-5">
        {overall.total === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-lg text-gray-500">まだ練習記録がありません</p>
            <Link to="/" className="mt-4 inline-block text-blue-600 font-semibold">
              練習を始める
            </Link>
          </div>
        ) : (
          <>
            {/* 応援メッセージ */}
            <div className="rounded-2xl bg-blue-600 p-5 text-center text-white shadow-sm">
              <p className="text-lg font-bold">{encourageMessage(trend.direction, trend.recentAvg)}</p>
              {trend.recentAvg !== null && (
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-3xl font-extrabold">{trend.recentAvg}%</span>
                  <TrendBadge direction={trend.direction} diff={trend.diff} />
                </div>
              )}
              <p className="mt-1 text-sm text-blue-200">直近の正答率</p>
            </div>

            {/* パート別成績 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-medium text-gray-400">Part 5</p>
                <p className="mt-1 text-2xl font-bold text-gray-800">{p5Pct}%</p>
                <p className="text-xs text-gray-400">{p5Stats.correct}/{p5Stats.total} 問</p>
              </div>
              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-medium text-gray-400">Part 6</p>
                <p className="mt-1 text-2xl font-bold text-gray-800">{p6Pct}%</p>
                <p className="text-xs text-gray-400">{p6Stats.correct}/{p6Stats.total} 問</p>
              </div>
            </div>

            {/* 累計 */}
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium text-gray-400">累計</p>
              <p className="mt-1 text-2xl font-bold text-blue-600">{overallPct}%</p>
              <p className="text-xs text-gray-400">{overall.correct}/{overall.total} 問正解</p>
            </div>

            {/* セッション正答率推移 */}
            {recentSessions.length >= 2 && (
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="mb-3 text-sm font-bold text-gray-700">正答率の推移</p>
                <div className="flex items-end gap-1.5" style={{ height: maxBarHeight + 20 }}>
                  {recentSessions.map((s, i) => {
                    const h = Math.max(4, (s.percentage / 100) * maxBarHeight)
                    const color =
                      s.percentage >= 80
                        ? 'bg-green-400'
                        : s.percentage >= 60
                          ? 'bg-yellow-400'
                          : 'bg-red-400'
                    return (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <span className="text-[10px] text-gray-500">{s.percentage}%</span>
                        <div className={`w-full rounded-t ${color}`} style={{ height: h }} />
                        <span className="text-[9px] text-gray-400">{formatDate(s.startTime).split(' ')[0]}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* セッション履歴 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-bold text-gray-700">セッション履歴</p>
              <div className="flex flex-col gap-2">
                {[...sessions].reverse().slice(0, 20).map((s, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-100 py-2 last:border-0">
                    <div>
                      <p className="text-sm text-gray-700">{formatDate(s.startTime)}</p>
                      <p className="text-xs text-gray-400">{partLabel(s.part)}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${s.percentage >= 80 ? 'text-green-600' : s.percentage >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
                        {s.percentage}%
                      </p>
                      <p className="text-xs text-gray-400">{s.correct}/{s.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
