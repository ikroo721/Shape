import React from 'react'
import Video from './Video'
import VideoInnerContent from './VideoInnerContent'

const Hero = () => {
  return (
    <div>
    <div className='flex items-center justify-center pt-5 lg:pt-10 pb-10'>
    <div className="xl:h-screen slg:h-screen lmd:h-[80vh] md:h-[80vh] xsm:h-[80vh] sm:h-[75vh] h-[65vh]  lg:h-[70vh] xl:w-[88%] w-[92%]  relative rounded-[1rem] overflow-hidden">
<Video/>
<VideoInnerContent/>
    </div>

    </div>
</div>
  )
}

export default Hero
