import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';
import image9 from './images/image9.png';

export default function Hero() {
  return (
    <div className="hero">
      <div className='hero-slot-one'>
        <img className='hero--image' src={image1} alt='Woman baker holding assorted macaroons'/>
      </div>
    </div>
  )
}