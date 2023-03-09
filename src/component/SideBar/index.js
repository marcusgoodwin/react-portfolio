import './index.scss'
import {  NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faClipboard,
  faHandshake,
  faAddressCard,
  faFile,
  faM,
  faG
} from '@fortawesome/free-solid-svg-icons'
// import Bg from '../../assets/images/night.gif'

const SideBar = () => (
  <body>
  <div className="nav">
  <h2>Full-Stack Developer</h2>
    <div className="logo">
    <NavLink exact="true" to="/">
        <FontAwesomeIcon icon={faM} color="rgb(151, 233, 207)" />
      </NavLink>
      <NavLink exact="true" to="/">
        <FontAwesomeIcon icon={faG} color="rgb(151, 233, 207)" />
      </NavLink>
    </div>
    <nav>
      <NavLink exact="true" to="/">
        <FontAwesomeIcon icon={faAddressCard} color="rgb(151, 233, 207)" />
      </NavLink>
      <NavLink exact="true" to="/projects">
        <FontAwesomeIcon icon={faClipboard} color="rgb(151, 233, 207)" />
      </NavLink>
      <NavLink exact="true" to="/contact">
        <FontAwesomeIcon icon={faHandshake} color="rgb(151, 233, 207)" />
      </NavLink>
      <NavLink exact="true" to="/resume">
        <FontAwesomeIcon icon={faFile} color="rgb(151, 233, 207)" />
      </NavLink>
    </nav>
  </div>
  </body>
)

export default SideBar
