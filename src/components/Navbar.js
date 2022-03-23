import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/photos/cstar311logo.png'
import Dropdown from './Dropdown'

const Navbar = () => {
    const [dropdown, setDropdown]=useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/images" className="nav-item">
        Images
      </Link>
      {dropdown && <Dropdown />}
      <Link to="/">
        <img className="logo" src={logo} alt="logo"></img>
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
      <Link to="/contact" className="nav-item">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar