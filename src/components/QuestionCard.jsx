import AnswerButton from './AnswerButton';
import styles from './QuestionCard.module.css';

function QuestionCard({ questionData, selectedAnswer, hasAnswered, onSelectAnswer }) {
  return (
    <div className={styles['question-card']}>
      {/* Decode HTML entities in the question text for proper rendering */}
      <h2>{decodeURIComponent(questionData.question)}</h2>
      
      <div className={styles['answers-container']}>
        {/* Map through the pre-shuffled array of answers to render each button */}
        {questionData.shuffledAnswers.map((answer, index) => (
          <AnswerButton
            key={index} // Required unique key prop for rendering lists in React
            answer={answer}
            correctAnswer={questionData.correct_answer}
            isSelected={selectedAnswer === answer}
            hasAnswered={hasAnswered}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;