import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'

const Home = () => {
  return (
   <ImageSlider slides={SliderData}/>
  )
}

export default Home