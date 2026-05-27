function HighscoreEntry({ entry, onDelete }) {
  return (
    <li>
      <span>{entry.name}</span>
      <span>{entry.score} / {entry.total}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default HighscoreEntry