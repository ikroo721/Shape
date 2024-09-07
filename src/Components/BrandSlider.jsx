/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';
import SvgArray from './SVG'
import CarouselDiv from './CarouselDiv';
import { useState } from 'react';


const BrandSlider = () => {
  const [SlidesToShow, setSlidesToShow] = useState(4)
  useEffect(() => {
  
    const updateSlides = () => {
      if(window.innerWidth < 350){
        setSlidesToShow(1)
      }
      else if(window.innerWidth < 640){
        setSlidesToShow(2)
      }
      else if (window.innerWidth < 770) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4); 
      }
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
      return () => {
        window.removeEventListener('resize', updateSlides);
      }
    }, [])
  return (
    <div className='h-[20vh] xl:px-7 flex items-center '>
    <div className='h-[15vh] relative w-full bg-white'>
        <div className='xl:block hidden absolute h-full w-8 left-0 blur-[10px] backdrop-blur-md z-[100]  bg-opacity-30 bg-slate-800'></div>
    <Swiper
spaceBetween={30}
centeredSlides={true}
slidesPerView={SlidesToShow}
loop={true} 
autoplay={{
delay: 0, 
disableOnInteraction: false, 
}}
pagination={{
clickable: true,
}}
speed={10000}
draggable={true}
navigation={false}
modules={[Autoplay]}
className="mySwiper"
>
{SvgArray.map((e,i)=>(
<SwiperSlide key={i}  >
  <CarouselDiv>
      {e.svg}
  </CarouselDiv>
</SwiperSlide>
))}
    </Swiper>

    <div className='xl:block hidden absolute h-full w-5 right-0 top-0 blur-[5px] backdrop-blur-sm z-[100]  bg-opacity-30 bg-white'></div>
    </div>
</div>
  )
}

export default BrandSlider