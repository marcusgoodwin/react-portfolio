import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse, faClipboard, faAddressBook, faHandshake } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => (
<div className="nav">
    <Link className='logo' to='/'>
        <img src="http://placehold.it/" />
    </Link>
    <nav>
        <NavLink exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon icon={ faHouse } color="rgb(151, 233, 207)"/>
        </NavLink>
        <NavLink exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon icon={ faClipboard } color="rgb(151, 233, 207)"/>
        </NavLink>
        <NavLink exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon icon={ faHandshake } color="rgb(151, 233, 207)"/>
        </NavLink>
    </nav>
</div>
);

export default SideBar;