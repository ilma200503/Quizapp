// HomePage handles quiz settings and navigation to quiz
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './HomePage.module.css'

function HomePage() {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [amount, setAmount] = useState(10)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!category) {
      setError('Please select a category before starting.')
      return
    }
    setError('')
    navigate('/quiz', { state: { category, difficulty, amount } })
  }

return (
  <main>
    <h1>Quiz App</h1>
    <div className={styles.container}>
      <p className={styles.subtitle}>Choose your settings and test your knowledge</p>
      <form className={styles.form} onSubmit={handleSubmit}>

        <div className={styles.field}>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">-- Select category --</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="18">Science & Computers</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Difficulty</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Number of questions</label>
          <input
            type="number"
            min="5"
            max="20"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.button} type="submit">Start Quiz</button>
      </form>
    </div>
  </main>
)
}

export default HomePage