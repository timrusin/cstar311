import { Route, Routes, Link } from 'react-router-dom'
import './App.css';
import logo from "./assets/photos/cstar311logo.png"
import Images from './screens/Images';
import About from './screens/About';
import Home from './screens/Home';

function App() {

  return (
    <div className="navbar">
      <nav className="navbar-nav">
        <Link to="/images" className="nav-item">Images</Link>
        <Link to="/">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Images" element={<Images/>}/>
        <Route path="About" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
