/* eslint-disable no-unused-vars */
import React from 'react'
import FooterData from './FooterData'
import AboutLinks from './AboutLinks'
const FooterTopAbout = () => {
    const {Arr1,Arr2,Arr3}=FooterData()
    const ExtraClass='flex flex-col  gap-4  sxl:w-1/2  w-full items-start'
  return (
    <div className="xl:w-[60%] sxl:w-[58%]  lg:w-[62%] w-full  md:flex-row flex-col h-full flex">
    <div className="md:w-[60%] w-full  h-full  flex items-center">
        <AboutLinks Array={Arr1} />
        <AboutLinks Array={Arr2} />
      </div>
      <div className="md:w-[40%] w-full  h-full flex items-center justify-center lg:pt-24 ">
        <AboutLinks Array={Arr3} ExtraClass={ExtraClass} />
      </div>
    </div>
  )
}
export default FooterTopAbout