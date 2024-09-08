import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'

const TopIdentityRightText = () => {
  return (
    <div className="md:w-[67%] w-[90%] flex lg:flex-row flex-col lg:gap-0 gap-5 justify-evenly sxl:gap-20 text-white">
            <div className="   lmd:w-4/5  lg:w-[65%] sxl:w-[60%]">
              <h3 className="xsm:text-[2.2rem] text-[2rem] md:text-[2.5rem] leading-none tracking-tighter sxl:text-[3rem]  ">
                <span className="hidden sxl:inline-block">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>{" "}
                How we take your business to the next level
              </h3>
            </div>
            <div className="xl:w-1/4 sxl:w-1/3 md:w-full  sm:w-4/5  lg:w-2/3 flex flex-col gap-5">
              <p className="sxl:text-[1.4rem] slg:text-[1.1rem] text-[14px] xsm:text-[16px] tracking-tighter  lg:text-[1.5rem] lmd:leading-none sxl:leading-normal  text-white ">
                We are a digital marketing agency with expertise, and we’re on a
                mission to help you take the next step in your business.
              </p>
              <ButtonWithCircle text="See all services" color={"#D0FF71"}  />
            </div>
          </div>
  )
}

export default TopIdentityRightText