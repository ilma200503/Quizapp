import { useLocation, useNavigate } from 'react-router-dom'
import styles from './ResultsPage.module.css'


function ResultsPage() { 

    //return the results page 
    return (
    <main>
        <h1 className={styles.test}>Results</h1>
        <div>
            <p>Here are your results!</p>
        </div>
    </main>)
}  
    
export default ResultsPage
