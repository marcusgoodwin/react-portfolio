import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboard,
  faHandshake,
  faAddressCard,
  faFile,
  faM,
  faG,
} from '@fortawesome/free-solid-svg-icons'
// import Bg from '../../assets/images/night.gif'

const SideBar = () => (
  <body>
    <div className="nav">
      <h1>Full-Stack Developer</h1>
      <div className="logo">
        <NavLink exact="true" to="/react-portfolio">
          <FontAwesomeIcon icon={faM} color="rgb(151, 233, 207)" />
        </NavLink>
        <NavLink exact="true" to="/react-portfolio">
          <FontAwesomeIcon icon={faG} color="rgb(151, 233, 207)" />
        </NavLink>
      </div>
      <nav>
        <div>
          <p>Home</p>
          <NavLink exact="true" to="/react-portfolio">
            <FontAwesomeIcon icon={faAddressCard} color="rgb(151, 233, 207)" />
          </NavLink>
        </div>
        <div>
          <p>Projects</p>
          <NavLink exact="true" to="/react-portfolio/projects">
            <FontAwesomeIcon icon={faClipboard} color="rgb(151, 233, 207)" />
          </NavLink>
        </div>
        <div>
          <p>Resume</p>
          <NavLink exact="true" to="/react-portfolio/resume">
            <FontAwesomeIcon icon={faFile} color="rgb(151, 233, 207)" />
          </NavLink>
        </div>
      </nav>
    </div>
  </body>
)

export default SideBar
