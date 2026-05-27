import styles from '../pages/HighscorePage.module.css'

function HighscoreEntry({ entry, onDelete }) {
  return (
    <li className={styles.entry}>
      <span className={styles.name}>{entry.name}</span>
      <span className={styles.score}>{entry.score} / {entry.total}</span>
      <button className={styles.deleteButton} onClick={onDelete}>Delete</button>
    </li>
  )
}

export default HighscoreEntry