import styles from './AnswerButton.module.css';

function AnswerButton({ answer, correctAnswer, isSelected, hasAnswered, onSelectAnswer }) {
  // Default class for the answer button
  let btnClass = styles['answer-btn'];

  // Apply conditional styling classes once the user has submitted an answer
  if (hasAnswered) {
    if (answer === correctAnswer) {
      // Always highlight the correct answer in green
      btnClass += ` ${styles.correct}`;
    } else if (isSelected) {
      // Highlight the selected answer in red if it was incorrect
      btnClass += ` ${styles.incorrect}`;
    } else {
      // Fade out the other incorrect answers to guide the user's focus
      btnClass += ` ${styles.fade}`;
    }
  }

  return (
    <button
      className={btnClass}
      onClick={() => onSelectAnswer(answer)}
      disabled={hasAnswered} // Lock the button after an answer is submitted to prevent multiple clicks
    >
      {/* decodeURIComponent decodes HTML entities (like &quot;) sent by the Open Trivia DB API */}
      {decodeURIComponent(answer)}
    </button>
  );
}

export default AnswerButton;