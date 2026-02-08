import type { AnswerRecord } from '../types'

const STORAGE_KEY = 'toeic-answers'

export function loadAnswers(): AnswerRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AnswerRecord[]) : []
  } catch {
    return []
  }
}

export function saveAnswers(records: AnswerRecord[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export function appendAnswers(newRecords: AnswerRecord[]): void {
  const existing = loadAnswers()
  saveAnswers([...existing, ...newRecords])
}

export function getOverallStats(): { correct: number; total: number } {
  const answers = loadAnswers()
  return {
    total: answers.length,
    correct: answers.filter((a) => a.isCorrect).length,
  }
}

// セッション情報
export interface SessionStats {
  startTime: number
  part: 'part5' | 'part6' | 'mixed'
  correct: number
  total: number
  percentage: number
}

// 回答をセッション単位にグループ化（10分以上の間隔で分割）
export function getSessionHistory(): SessionStats[] {
  const answers = loadAnswers()
  if (answers.length === 0) return []

  const sorted = [...answers].sort((a, b) => a.timestamp - b.timestamp)
  const SESSION_GAP = 10 * 60 * 1000 // 10分

  const sessions: AnswerRecord[][] = []
  let current: AnswerRecord[] = [sorted[0]]

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].timestamp - sorted[i - 1].timestamp > SESSION_GAP) {
      sessions.push(current)
      current = []
    }
    current.push(sorted[i])
  }
  sessions.push(current)

  return sessions.map((records) => {
    const correct = records.filter((r) => r.isCorrect).length
    const total = records.length
    const hasP5 = records.some((r) => r.questionId.startsWith('p5-'))
    const hasP6 = records.some((r) => r.questionId.startsWith('p6-'))
    const part: SessionStats['part'] = hasP5 && hasP6 ? 'mixed' : hasP5 ? 'part5' : 'part6'
    return {
      startTime: records[0].timestamp,
      part,
      correct,
      total,
      percentage: Math.round((correct / total) * 100),
    }
  })
}

// パート別の成績
export function getPartStats(partPrefix: 'p5' | 'p6'): { correct: number; total: number } {
  const answers = loadAnswers().filter((a) => a.questionId.startsWith(`${partPrefix}-`))
  return {
    total: answers.length,
    correct: answers.filter((a) => a.isCorrect).length,
  }
}

// 成長トレンド: 直近3セッション vs それ以前を比較
export function getGrowthTrend(): {
  recentAvg: number | null
  previousAvg: number | null
  direction: 'up' | 'down' | 'stable' | 'none'
  diff: number
} {
  const sessions = getSessionHistory()
  if (sessions.length < 2) {
    return { recentAvg: sessions[0]?.percentage ?? null, previousAvg: null, direction: 'none', diff: 0 }
  }

  const recentCount = Math.min(3, Math.floor(sessions.length / 2))
  const recent = sessions.slice(-recentCount)
  const previous = sessions.slice(0, -recentCount)

  const recentAvg = Math.round(recent.reduce((s, r) => s + r.percentage, 0) / recent.length)
  const previousAvg = Math.round(previous.reduce((s, r) => s + r.percentage, 0) / previous.length)
  const diff = recentAvg - previousAvg

  const direction = diff >= 5 ? 'up' : diff <= -5 ? 'down' : 'stable'

  return { recentAvg, previousAvg, direction, diff }
}
