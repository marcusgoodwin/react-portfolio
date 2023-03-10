import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Bg from '../../assets/images/night.gif'
import {faQuestion, faPencil, faDollarSign, faDollar} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <body>
        <div className="container projects">
            <div className="text">
               <h1>Welcome to my Projects Page!</h1>
               <h2>PokeQuiz
               <a href="https://github.com/Jacob-Aston/buuzz-quiz">
        <FontAwesomeIcon icon={faQuestion} color="rgb(151, 233, 207)" />
      </a>
               </h2>
               <h2>Promptlio
               <a href="https://promptlio.herokuapp.com/">
        <FontAwesomeIcon icon={faPencil} color="rgb(151, 233, 207)" />
      </a>
               </h2>
               <h2>CashFlow
               <a href="https://cashflow.herokuapp.com/">
        <FontAwesomeIcon icon={faDollar} color="rgb(151, 233, 207)" />
      </a>
               </h2>
               <div className="product">
               </div>
            </div>
        </div>
        </body>
    )
}

export default Projects;