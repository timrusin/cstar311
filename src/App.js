import { Route, Routes } from 'react-router-dom'
import './App.css';
import Images from './screens/Images';
import About from './screens/About';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Contact from './screens/Contact';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
