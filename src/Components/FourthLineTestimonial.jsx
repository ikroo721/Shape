/* eslint-disable no-unused-vars */
import React from 'react'
import Hannah from '/assets/Image/TestimoniallHannah.webp'
const FourthLineTestimonial = () => {
  return (
    <div
              className=" xl:w-[15vw]  px-2  sxl:w-[20vw] lg:w-[25vw] slg:w-[25vw] lmd:w-[22vw] md:w-[27vw] sm:w-[30vw] xsm:w-[38vw] w-[58vw] slg:px-3  bg-white relative rounded-bl-[.8rem] 
         sxl:p-4 lg:p-1  md:py-2 p-1  rounded-br-[.8rem]"
            >
              <svg
                id="Layer_1"
                className="md:w-12  md:h-12 sm:w-10 sm:h-10 h-8 w-8 | slg:w-12 slg:h-12  text-white  fill-current absolute  
               md:-right-[3rem] sm:-right-[2.5rem] xsm:-right-[2rem]  -right-[2rem] transform top-0 dark:text-grayDark-600"
                version="1.1"
                x="0"
                y="0"
                viewBox="0 0 100 100"
                xmlSpace="preserve"
              >
                <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
              </svg>
              <div className="flex  items-center gap-2">
                <div
                    style={{backgroundImage:`url(${Hannah})`,backgroundPosition:"center",
                    backgroundSize:"cover"}}
                className="lg:w-12 rounded-lg lg:h-12 slg:h-10 slg:w-10 xsm:h-8 xsm:w-8  h-7 w-7"></div>
                <div className="flex flex-col tracking-tight leading-tight ">
                  <h5 className="font-semibold">Hannah Wessel</h5>
                  <p className="md:text-sm xsm:text-[13px] text-[12px] text-gray-400">
                    Co-Founder, Stoneletters
                  </p>
                </div>
              </div>
            </div>
  )
}

export default FourthLineTestimonial