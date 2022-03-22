import { useState, useEffect } from 'react'
import { SliderData } from './SliderData'

const ImageSlider = ( { slides } ) => {
  const[current, setCurrent]= useState(0)
  const length = slides.length

    useEffect(()=>{
      setTimeout(() => {
        nextSlide();
      }, 8000);
    },[current])
    
    const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current + 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0){
      return null
    }

  return (
    <div className='slider'>
      {SliderData.map((slider, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (<img src={slider.image} alt="testing" className="image"/>)}
            </div>
          );
      })}
    </div>
  );
}

export default ImageSlider  