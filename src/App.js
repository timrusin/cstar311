import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
      <div className="App">
        <nav>
          <Link to="/" className="button">Home</Link>
          <Link to="/about" className="button">About</Link>
          <Link to="/photos" className="button">Photos</Link>
          <Link to="/contact" className="button">Contact</Link>
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
