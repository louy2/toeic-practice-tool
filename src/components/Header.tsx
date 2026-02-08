import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  title: string
  progress?: string
  showBack?: boolean
}

export function Header({ title, progress, showBack }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-blue-600 px-4 py-3 text-white shadow-md">
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="rounded-full p-1 active:bg-blue-700"
            aria-label="戻る"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      {progress && <span className="text-sm font-medium">{progress}</span>}
    </header>
  )
}
