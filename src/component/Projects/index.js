import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Bg from '../../assets/images/night.gif'
import {
  faQuestion,
  faPencil,
  faDollar,
} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <body>
      <div className="container-projects">
        <div className="text">
          <h2>Welcome to my Projects Page!</h2>
          <div>
          <h2>
            <a href="https://github.com/Jacob-Aston/buuzz-quiz">
            PokeQuiz
              <FontAwesomeIcon icon={faQuestion} color="rgb(151, 233, 207)" />
            </a>
            </h2>
            <p>I primarily worked on the back end portion of this project. I wrote the script for the quiz functionality, and the script that pushed the results to the api's we used!</p>
          </div>
          <div>
          <h2>
            Promptlio
            <a href="https://github.com/lbako801/Promptlio">
              <FontAwesomeIcon icon={faPencil} color="rgb(151, 233, 207)" />
            </a>
            </h2>
            <p>I did a fair amount of the frontend for this project!</p>
            </div>
            <div>
          <h2>
           W.I.P.
            <a href="https://github.com/marcusgoodwin/finance-refresh">
              <FontAwesomeIcon icon={faDollar} color="rgb(151, 233, 207)" />
            </a>
            </h2>
            <p>This is what I'm currently working on!</p>
          </div>
          <div className="product"></div>
        </div>
      </div>
    </body>
  )
}

export default Projects
