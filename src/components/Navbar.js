import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/photos/cstar311logo.png'
import Dropdown from './Dropdown'

const Navbar = () => {
    const [click, setClick]=useState(false)
    const [dropdown, setDropdown]=useState(false)

    const handleClick = () => setClick(!click)
    
  return (
    <nav className="navbar">
      <Link to="/images" className="nav-item">
        Images
      </Link>
      {dropdown && <Dropdown/>}
      <Link to="/">
        <img className="logo" src={logo} alt="logo"></img>
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
      </ul>
    </nav>
  );
}

export default Navbar