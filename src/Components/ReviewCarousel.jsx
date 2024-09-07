/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import ReviewCarouselLeftContent from './ReviewCarouselLeftContent';
import SwiperContainer from './SwiperContainer';
const ReviewCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className=' flex xl:pl-24 sxl:pl-16 pl-5 sm:pl-8 min-h-[85vh] items-center lg:flex-row flex-col '>
        <ReviewCarouselLeftContent swiperInstance={swiperInstance} />
        <SwiperContainer setSwiperInstance={setSwiperInstance} />
    </div>
  )
}

export default ReviewCarousel