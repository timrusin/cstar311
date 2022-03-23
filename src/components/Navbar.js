import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/photos/cstar311logo.png';
import Dropdown from './Dropdown';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      setDropdown(true)
    };
    const onMouseLeave = () => {
      setDropdown(false)
    };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item nav-links"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Images
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            <img
              className="logo"
              src={logo}
              alt="logo"
              onClick={closeMobileMenu}
            ></img>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar