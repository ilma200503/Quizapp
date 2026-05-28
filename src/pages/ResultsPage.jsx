import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './ResultsPage.module.css'


function ResultsPage() { 
    // define location and navigate hooks to get the score and total from the quiz page and navigate back to the quiz page
    const location = useLocation()
    const navigate = useNavigate()
    const { score, total } = location.state || {}

    useEffect(() => {
  if (score === undefined || total === undefined) return;

  const nyPost = {
    score: score,
    total: total,
    date: new Date().toISOString()
  };

  const befintliga = JSON.parse(localStorage.getItem("highscores") || "[]");
  localStorage.setItem("highscores", JSON.stringify([...befintliga, nyPost]));
}, []);
    
    // calculate the percentage score
    const percentage = Math.round((score / total) * 100)
    //return the results page 
    return (
    <main>
        <h1>Results</h1>
        <div className={styles.container}>
            <p className={styles.resultText}>Here are your results!</p>
            <p className={styles.resultText}>You scored {score} out of {total}.</p>
            <p className={styles.resultText}>That gives you a total of {percentage}% accuracy.</p>
            <div className={styles.buttonContainer}>
                <button onClick={() => navigate('/')}>Take Quiz Again</button>
            </div>
        </div>
    </main>)
}  
    
export default ResultsPage
