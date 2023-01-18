import React from 'react'
import img_1 from '../assets/images/B5_Green2.png'
import img_2 from '../assets/images/code.jpg'
import img_3 from '../assets/images/mush_extended.png'
import img_4 from '../assets/images/Flowers_mountain_blue_sky_grass_pixel.png'

export default function Carousel() {
  return (
    <div>

        <div id="carouselExampleCaptions" className="carousel slide relative bg-neutral-900 pb-10 w-screen h-80 flex items-center justify-center" data-bs-ride="carousel">
            
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex-row justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                ></button>
                
            </div>
            
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={img_1}
                        className="block w-full "
                        alt="..."
                    />
                    <p className='text-white absolute bottom-6 left-12 bg-neutral-900/70 p-1 rounded-2xl text-sm'>Personagens para games</p>
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={img_2}
                        className="block w-full"
                        alt="..."
                    />
                    <p className='text-white absolute top-12 left-12 bg-neutral-900/70 p-1 rounded-2xl text-sm'>Desenvolvimento web</p>
                    <p className='text-white absolute top-24 left-24 bg-neutral-900/70 p-1 rounded-2xl text-sm'>Aplicações mobile e Desktop</p>
                    <p className='text-white absolute top-36 left-36 bg-neutral-900/70 p-1 rounded-2xl text-sm'>Automação com python</p>
                    <p className='text-white absolute top-48 left-24 bg-neutral-900/70 p-1 rounded-2xl text-sm'>Aplicações multiplataforma</p>
                    <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item relative float-left w-full">
                <img
                    src={img_3}
                    className="block w-full"
                    alt="..."
                />
                <p className='text-white absolute bottom-12 left-12 bg-neutral-900/70 p-1 rounded-2xl text-sm'>Criação de mascotes</p>

                <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                
            </div>
            <div className="carousel-item relative float-left w-full">
                <img
                    src={img_4}
                    className="block w-full"
                    alt="..."
                />
                <p className='text-white absolute top-8 right-8 bg-neutral-900/70 p-1 rounded-2xl text-sm'>Pixel art</p>

                <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                
            </div>
            
            </div>
            
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                
            </button>
            
        </div>
    </div>
  )
}
