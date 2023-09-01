import './footer.scss'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faScroll,
    faL
  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
<footer className="footer">
      <div>
        <p>Github</p>
        <a href="https://github.com/marcusgoodwin">
        <FontAwesomeIcon icon={faRobot} color="rgb(151, 233, 207)" />
      </a>
      </div>
      <div>
      <p>Email</p>
      <a href="mailto:mwgoodwin2000@gmail.com">
        <FontAwesomeIcon icon={faScroll} color="rgb(151, 233, 207)" />
        </a>
      </div>
      <div>
        <p>Linkedin</p>
        <a href="https://www.linkedin.com/in/marcus-goodwin-b745a2269/">
        <FontAwesomeIcon icon={faL} color="rgb(151, 233, 207)" />
        </a> 
      </div>

</footer>
);

export default Footer;
