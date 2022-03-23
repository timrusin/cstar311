import React from 'react'
import ImageSlider from '../components/ImageSlider'
import logo from '../assets/photos/cstar311logo.png'
import './Home.css'


const Home = () => {
  return (
    <>
      <div className="center-mobile-logo">
        <img src={logo} className="mobile-logo fade-in-image" alt="logo" />
      </div>
      <ImageSlider />
    </>
  );
}

export default Home