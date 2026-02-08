import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PracticePage } from './pages/PracticePage'
import { ResultPage } from './pages/ResultPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  )
}

export default App
