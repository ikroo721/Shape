import React from 'react'
import Block from './Block'
import VideoText from './VideoText'
import CoFounder from './CoFounder'

const VideoInnerContent = () => {
  return (
    <div className="h-full w-full  relative z-10 flex justify-between flex-col  ">
    <div className='flex relative '>
    <Block/>
    <VideoText/>
    </div>
    <CoFounder/>
    </div>
  )
}

export default VideoInnerContent