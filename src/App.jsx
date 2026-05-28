import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'
import HighscorePage from './pages/HighscorePage'
import Navbar from './components/Navbar'
import StatsPage from './pages/StatsPage'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/highscore" element={<HighscorePage />} />
        <Route path="/stats" element={<StatsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App