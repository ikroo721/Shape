/* eslint-disable react/prop-types */
import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'
import ReviewCarouselLeftButton from './ReviewCarouselLeftButton'
import ReviewCarouselRightButton from './ReviewCarouselRightButton'

const ReviewCarouselLeftContent = ({swiperInstance}) => {
  return (
    <div className='w-full lg:min-h-[66vh] flex lg:flex-col justify-between pr-2 '>
          <div className='flex  flex-col lg:gap-7 gap-6 sxl:gap-5'>
          <h4 className='flex gap-2 items-center '><span className='w-2 h-2 rounded-full bg-black'></span>Blog</h4>
          <h3 className='sxl:text-5xl lg:text-[2.3rem] text-[2rem] slg:text-[2.3rem] font-semibold lmd:text-[2.4rem] xsm:w-[55%] tracking-tight leading-none lg:font-semibold'>The latest from our design Studio</h3>
          <ButtonWithCircle text={"View the Blog"} color={"#D0FF71"}/>
          </div>
          <div className='flex gap-2 items-end '>
            <ReviewCarouselLeftButton swiperInstance={swiperInstance} />
            <ReviewCarouselRightButton swiperInstance={swiperInstance} />
          </div>
        </div>
  )
}

export default ReviewCarouselLeftContent