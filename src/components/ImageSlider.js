import { HomeImages } from '../assets/photos/HomeImages'
import BackgroundSlider from 'react-background-slider'

const ImageSlider = () => {
  return (
    <div>
    <BackgroundSlider
    images={HomeImages}
    duration={4}
    transition={1}/>
    </div>
    );
}

export default ImageSlider  