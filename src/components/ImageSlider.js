import { useState, useEffect } from 'react'
import { SliderData } from './SliderData'

const ImageSlider = ( { slides } ) => {
  const[current, setCurrent]= useState(0)
  const length = slides.length
    useEffect(()=>{
      setTimeout(() => {
        nextSlide();
      }, 6000);
    },[current])
    
    const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current + 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0){
      return null
    }

  return (
    <div className='slider'>
      {SliderData.map((slider, i) => {
          return (
            <div className={i === current ? 'slide_active' : 'slide'} key={i}>
              {i === current && (<img src={slider.image} width="100%" alt="testing" className="image"/>)}
            </div>
          );
      })}
    </div>
  );
}

export default ImageSlider  