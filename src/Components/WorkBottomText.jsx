import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'

const WorkBottomText = () => {
  return (
    <div className="w-full min-h-[30vh]  flex xl:justify-start lg:items-start items-center lg:justify-start md:justify-end justify-center xl:-mt-[10vh]">
    <div className="h-full xsm:w-1/2  flex items-center  justify-center flex-col ">
      <div className="xl:w-2/3  flex flex-col justify-center  items-center gap-5 ">
        <h2 className="slg:text-5xl  text-center sxl:w-1/2 lg:w-2/3 w-2/3 font-semibold  xsm:text-4xl text-3xl">
          Like what you see?
        </h2>
        <div className="flex items-center justify-center">
          <ButtonWithCircle text="Contact us" color={"#D0FF71"} />
        </div>
        <div>
          <img
            src="/assets/Image/google-reviews-badge.webp"
            className="h-12"
            alt="Google Badge Review"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default WorkBottomText