import { useState, React } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css';
import logo from "./assets/photos/cstar311logo.png"

function App() {

  return (
    <Navbar></Navbar>
  );
}

function Navbar() {
  const [open, setOpen ]= useState(false)
  console.log(open)

  return (
    <div className="navbar">
      <nav className="navbar-nav">
        <button className="nav-item" onClick={()=>setOpen(!open)}>Images</button>
        <Link to="/">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
