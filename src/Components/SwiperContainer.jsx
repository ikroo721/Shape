/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,  } from 'swiper/modules';
import Data from './SwiperData';
import SwiperCard from './SwiperCard';
const SwiperContainer = ({ setSwiperInstance }) => {
    const swiperRef = useRef(null);
    const SwiperInfo=Data()
    useEffect(() => {
        if (swiperRef.current) {
          setSwiperInstance(swiperRef.current);
        }
      }, [setSwiperInstance]);
  return (
    <div className='lg:w-[73%] w-[100%] '>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          240: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween:40,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 90,
          },
          1284: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
{
    SwiperInfo.map((e,i)=>(
        <SwiperSlide key={i} className='pt-5 '>
        <SwiperCard item={e}/>
    </SwiperSlide>
    ))
}
      </Swiper>
        </div>
  )
}

export default SwiperContainer