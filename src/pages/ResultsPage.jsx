import { useLocation, useNavigate } from 'react-router-dom'
import styles from './ResultsPage.module.css'


function ResultsPage() { 
    const location = useLocation()
    const navigate = useNavigate()
    const { score, total } = location.state || { score: 25, total: 100 } // default values if no state is passed
    
    const percentage = Math.round((score / total) * 100)
    //return the results page 
    return (
    <main>
        <h1 className={styles.test}>Results</h1>
        <div>
            <p>Here are your results!</p>
            <p>You scored {score} out of {total}.</p>
            <p>{percentage}%</p>
        </div>
    </main>)
}  
    
export default ResultsPage
