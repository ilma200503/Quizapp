import { useState, useEffect } from 'react'
import HighscoreEntry from '../components/HighscoreEntry'

function HighscorePage() {
  const [scores, setScores] = useState([])

  // Ladda scores från localstorage när sidan laddas 
  useEffect(() => {
    const saved = localStorage.getItem('highscores')
    if (saved) {
      setScores(JSON.parse(saved))
    }
  }, [])

  // Ta bort score med index 
  function handleDelete(index) {
    const updated = scores.filter((_, i) => i !== index)
    setScores(updated)
    localStorage.setItem('highscores', JSON.stringify(updated))
  }

  return (
    <main>
      <h1>Highscore</h1>

      {scores.length === 0 ? (
        <p>No highscores yet. Play a quiz to get started!</p>
      ) : (
        <ul>
          {scores.map((entry, index) => (
            <HighscoreEntry
              key={index}
              entry={entry}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      )}
    </main>
  )
}

export default HighscorePage