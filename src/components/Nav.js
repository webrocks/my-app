import { Link } from 'react-router-dom';
import { useNavSwitch } from '../context/NavSwitchContext';

function Nav() {
  const { isNavSwitchActive, navSwitchToggle } = useNavSwitch();

  return (
    <nav>
        <span
          className={`hamburger-menu ${isNavSwitchActive ? 'open' : ''}`}
          onClick={navSwitchToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#hero">About</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/">Order online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
  )
}

export default Nav;