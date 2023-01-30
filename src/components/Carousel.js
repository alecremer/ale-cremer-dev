import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel  } from 'react-responsive-carousel' ;
import img_1 from '../assets/images/B5_Green2.png'
import img_2 from '../assets/images/code.jpg'
import img_3 from '../assets/images/mush_extended.png'
import img_4 from '../assets/images/Flowers_mountain_blue_sky_grass_pixel.png'
import "../App.css";



export default function Carousel2() {
    return (
        <div className='w-full'>
            <Carousel showThumbs={false}>
                <div>
                    <img src={img_1} className="carousel-img"/>
                    <p className="legend">Legend 1</p>
                </div>
                {/* <div>
                    <img src={img_2} className="carousel-img"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img_3} className="carousel-img"/>
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>

        </div>
    )
}
