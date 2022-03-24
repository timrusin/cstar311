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
          className={click ? "images-hide" : "nav-item nav-links"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Images
          {dropdown && <Dropdown />}
        </li>
        <li className={click ? "nav-item" : "images-hide"}>Images</li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link to="/newborn" className="nav-links" onClick={closeMobileMenu}>
            newborn
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link to="/family" className="nav-links" onClick={closeMobileMenu}>
            famliy
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link to="/fineart" className="nav-links" onClick={closeMobileMenu}>
            fine art
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link
            to="/landscapes"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            landscapes
          </Link>
        </li>
        <li className={click ? "images-nav-item" : "images-hide"}>
          <Link
            to="/blackandwhite"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            black and white
          </Link>
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
          <img className="logo-large" src={logo} alt="large logo" />
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