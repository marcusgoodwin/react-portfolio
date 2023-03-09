import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faScroll,
    faL
  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
<footer className="footer">
	<p>
        <a href="https://github.com/marcusgoodwin">
        <FontAwesomeIcon icon={faRobot} color="rgb(151, 233, 207)" />
      </a>
      </p>
      <p>
      <a href="mailto:mwgoodwin2000@gmail.com">
        <FontAwesomeIcon icon={faScroll} color="rgb(151, 233, 207)" />
        </a>
        </p>
        <p>
        <a href="https://www.linkedin.com/in/marcus-goodwin-b745a2269/">
        <FontAwesomeIcon icon={faL} color="rgb(151, 233, 207)" />
        </a> 
      </p>

</footer>
);

export default Footer;
