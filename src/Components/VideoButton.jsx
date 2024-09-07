import React from 'react'

const VideoButton = () => {
  return (
    <div className="">
    <div className="md:h-16 md:w-16 sm:w-12 sm:h-12 xsm:w-12 xsm:h-12 h-10 w-10 rounded-full bg-[#D0FF71] flex items-center justify-center xsm:mb-0 mb-20">
      <svg
        className="w-3 h-3 | md:w-4 md:h-4"
        width="12"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M384 256L0 32v448l384-224z"></path>
      </svg>
    </div>
  </div>
  )
}

export default VideoButton