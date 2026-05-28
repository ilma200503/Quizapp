import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import styles from './QuizPage.module.css';

function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve the custom configurations passed from the HomePage via React Router State
  // Fallback values are provided in case a user navigates to /quiz directly
  const { category, difficulty, amount } = location.state || { category: '9', difficulty: 'easy', amount: 10 };

  // State management for the quiz logic flow
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch quiz questions from the API when the component mounts or config changes
  useEffect(() => {
    // encode=url3986 URL-encodes special characters, making it safer to parse strings in React
    const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          // Format the API data by merging and shuffling incorrect and correct answers immediately
          const formattedQuestions = data.results.map((q) => {
            const allAnswers = [...q.incorrect_answers, q.correct_answer];
            // Simple random sort algorithm to shuffle the answer array
            const shuffled = allAnswers.sort(() => Math.random() - 0.5);
            return { ...q, shuffledAnswers: shuffled };
          });
          setQuestions(formattedQuestions);
        }
        setLoading(false); // Disable loading state once data is successfully fetched
      })
      .catch((err) => {
        console.error("Failed to fetch quiz questions:", err);
        setLoading(false);
      });
  }, [category, difficulty, amount]);

  // Handle user interaction when an answer button is clicked
  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    setHasAnswered(true);

    // Increment score if the user selected the correct answer
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Progress to the next question or redirect to the results page
  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < questions.length) {
      // Proceed to the next question and reset answering states
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      // Quiz complete: Pass final score and total questions to ResultsPage via Router State
      navigate('/results', { state: { score, total: questions.length } });
    }
  };

  // Conditional rendering based on loading and data availability states
  if (loading) return <main className={styles['loading-text']}><h2>Loading questions...</h2></main>;
  if (questions.length === 0) return <main className={styles['error-text']}><h2>No questions found. Please try different settings!</h2></main>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className={styles['quiz-container']}>
      {/* Header section tracking current progress and score */}
      <div className={styles['quiz-header']}>
        <span>Question: {currentQuestionIndex + 1} / {questions.length}</span>
        <span className={styles.score}>Score: {score}</span>
      </div>

      {/* Primary card component rendering the current question and answers */}
      <QuestionCard
        questionData={currentQuestion}
        selectedAnswer={selectedAnswer}
        hasAnswered={hasAnswered}
        onSelectAnswer={handleSelectAnswer}
      />

      {/* Conditional rendering: Only display the "Next" button after an answer is chosen */}
      {hasAnswered && (
        <button className={styles['next-btn']} onClick={handleNextQuestion}>
          {currentQuestionIndex + 1 === questions.length ? 'View Results' : 'Next Question'}
        </button>
      )}
    </main>
  );
}

export default QuizPage;