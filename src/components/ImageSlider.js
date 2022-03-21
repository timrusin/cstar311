import { useState, React } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const ImageSlider = ( { slides } ) => {
    const[current, setCurrent]= useState(0)
    const length = slides.length
    if (!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

  return (
    <div className='slider'>
      <FaArrowAltCircleRight className="arrow" onClick={nextSlide}/>
      {SliderData.map((slider, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (<img src={slider.image} width="80%" alt="testing" className="image"/>)}
            </div>
          );
      })}
    </div>
  );
}

export default ImageSlider  