import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'

const TestimonialButtons = () => {
  return (
    <div className="h-16  bg-white py-2 px-2 absolute right-0 bottom-0 rounded-tl-[1.8rem] ">
    <svg
      id="Layer_1"
      className="w-12 h-12   | lg:w-12 lg:h-12 text-white fill-current absolute bottom-0 left-px transform -translate-x-full rotate-180 dark:text-grayDark-600"
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
    </svg>
    <svg
      id="Layer_1"
      className="w-12 h-12   | lg:w-12 lg:h-12 text-white  fill-current absolute  right-0 transform rotate-180 -top-12 dark:text-grayDark-600"
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
    </svg>
    <div>
      <div className="flex xsm:px-2 py-2 justify-center items-center gap-2">
        <div className="lg:flex hidden items-center">
          <ButtonWithCircle text="Play Video" color={"#D0FF71"} />
        </div>
        <ButtonWithCircle
          text="View more tesetimonials"
          color={"#010202"}
          textColor="white"
        />
      </div>
    </div>
  </div>
  )
}

export default TestimonialButtons