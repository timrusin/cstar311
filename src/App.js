import { Route, Routes, Link } from 'react-router-dom'
import './App.css';
import Images from './screens/Images';
import About from './screens/About';
import Home from './screens/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Images" element={<Images/>}/>
        <Route path="About" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
