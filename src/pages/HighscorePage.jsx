import { useState, useEffect } from 'react'
import HighscoreEntry from '../components/HighScoreEntry'
import styles from './HighscorePage.module.css'

function HighscorePage() {
  const [scores, setScores] = useState([])

  // ladda rekord med localstorage när sidan laddas
  useEffect(() => {
    const saved = localStorage.getItem('highscores')
    if (saved) {
      setScores(JSON.parse(saved))
    }
  }, [])

  // Ta bort en rekord med index
  function handleDelete(index) {
    const updated = scores.filter((_, i) => i !== index)
    setScores(updated)
    localStorage.setItem('highscores', JSON.stringify(updated))
  }

  return (
    <main>
      <h1>Highscore</h1>
      <div className={styles.container}>
        {scores.length === 0 ? (
          <p className={styles.empty}>No highscores yet. Play a quiz to get started!</p>
        ) : (
          <ul className={styles.list}>
            {scores.map((entry, index) => (
              <HighscoreEntry
                key={index}
                entry={entry}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default HighscorePage