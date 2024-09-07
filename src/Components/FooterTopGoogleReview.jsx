import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'

const FooterTopGoogleReview = () => {
  return (
    <div className="md:h-full  xsl:w-[28%] w-full  flex  pl-12 xsm:px-9 xsm:pl-12 gap-5 lg:justify-center md:justify-evenly md:items-center md:flex-row flex-col lg:items-start lg:flex-col md:py-0 py-5">
    <h2 className="md:text-4xl text-xl xsm:text-2xl font-bold text-white">
      Do you like <br />
      what you see?
    </h2>
    <div className="flex gap-5 md:flex-row flex-col  lg:gap-2 sxl:flex-row lg:flex-col">
      <ButtonWithCircle text={"Start a project "} color={"#D0FF71"} />
      <div className="lg:h-12  lg:w-32 h-10 w-24 ">
        <img
          className="object-cover"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Google-Review-Vertical-Black.png?w=204&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1716892334&s=48bca58df30408df7c5032db540587dc"
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default FooterTopGoogleReview