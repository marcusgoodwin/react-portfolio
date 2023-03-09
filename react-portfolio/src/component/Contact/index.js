import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRobot,
    faScroll,
    faL
  } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className="container about">
      <div className="text">
        <h1>
         Contact Me!
        </h1>
        <h2>
          These are the best ways to contact me:
        </h2>
        <ul>
          Click the icons to redirect to the respected website.
          <li>
            Github:
        <a href="https://github.com/marcusgoodwin">
        <FontAwesomeIcon icon={faRobot} color="rgb(151, 233, 207)" />
      </a>
          </li>
          <li>
            Email:
        <a href="mailto:mwgoodwin2000@gmail.com">
        <FontAwesomeIcon icon={faScroll} color="rgb(151, 233, 207)" />
        </a>
          </li>
          <li>
            LinkedIn:
        <a href="https://www.linkedin.com/in/marcus-goodwin-b745a2269/">
        <FontAwesomeIcon icon={faL} color="rgb(151, 233, 207)" />
        </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;