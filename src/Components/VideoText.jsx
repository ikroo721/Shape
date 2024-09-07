import React from 'react'
import VideoTextFirstLine from './VideoTextFirstLine'
import VideoTextSecondLine from './VideoTextSecondLine'
import VideoTextThirdLine from './VideoTextThirdLine'
import VideoTextFourthLine from './VideoTextFourthLine'

const VideoText = () => {
  return (
    <div className='xl:h-[50vh] xl:w-[42vw] flex flex-col  items-start font-school  '>
<VideoTextFirstLine/>
<VideoTextSecondLine/>
<VideoTextThirdLine/>
<VideoTextFourthLine/>
</div>
  )
}

export default VideoText