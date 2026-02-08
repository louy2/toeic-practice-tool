import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PracticePage } from './pages/PracticePage'
import { Part6PracticePage } from './pages/Part6PracticePage'
import { ResultPage } from './pages/ResultPage'
import { StatsPage } from './pages/StatsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/practice/part5" element={<PracticePage />} />
      <Route path="/practice/part6" element={<Part6PracticePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  )
}

export default App
