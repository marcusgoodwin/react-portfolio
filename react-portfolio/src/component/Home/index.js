// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Bg from '../../assets/images/night.gif'
import {faCodeFork} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <body>
        <div className="container home">
            <div className="text">
               <h1>Hello! <br></br> I'm Marcus Goodwin</h1>
               <div className="h2">
               <h2>Hard Worker</h2>
               <h2>Computer Geek</h2>
               </div>
               <div className="icon">
               <FontAwesomeIcon icon={faCodeFork} color="rgb(151, 233, 207)" />
               </div>
               <div className="product">
               <h2>Full-Stack Developer</h2>
               </div>
            </div>
        </div>
        </body>
    )
}

export default Home;