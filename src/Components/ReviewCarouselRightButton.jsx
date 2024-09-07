/* eslint-disable react/prop-types */
import React from 'react'
const ReviewCarouselRightButton = ({swiperInstance}) => {
    const handleNext = () => {
        if (swiperInstance) {
          swiperInstance.slideNext();
        }
      };
  return (
    <div onClick={handleNext} className='w-10 h-10 bg-[#EEEEEE] cursor-pointer rounded-full flex items-center justify-center'>
    <svg className="w-3 h-3 fill-current rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path></svg>
</div>
  )
}

export default ReviewCarouselRightButton