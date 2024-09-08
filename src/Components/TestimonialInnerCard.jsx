import React from 'react'
import BG from '/assets/Image/TestimonialImage.webp'
import FirstLineTestimonial from './FirstLineTestimonial'
import SecondLineTestimonial from './SecondLineTestimonial'
import ThirdLineTestimonial from './ThirdLineTestimonial'
import FourthLineTestimonial from './FourthLineTestimonial'
import VideoButton from './VideoButton'
import TestimonialButtons from './TestimonialButtons'
const TestimonialInnerCard = () => {
  return (
    <div
    style={{backgroundImage:`url(${BG})`,backgroundPosition:"center",
backgroundSize:"cover"}}
    className="sxl:h-[65vh] lg:h-[62vh] slg:h-[40vh] lmd:h-[42vh] md:h-[40vh] xl:w-[88%]  xsm:h-[58vh] h-[52vh] w-[92%] sxl:w-[90%] relative overflow-hidden mt-[20%] flex flex-col justify-between rounded-[1.4rem] lg:px-10 slg:px-6 px-2 md:px-5 lmd:pt-10 lmd:py-3  md:py-5 md:pt-6 slg:py-5 lg:py-10  py-5   ">
          <div>
            <FirstLineTestimonial/>
            <SecondLineTestimonial/>
            <ThirdLineTestimonial/>
            <FourthLineTestimonial/>
          </div>
          <TestimonialButtons/>
          <VideoButton/>
        </div>
  )
}

export default TestimonialInnerCard