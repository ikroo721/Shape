import React from 'react'
import VideoFile from '/assets/Video/ShowReel.mp4'
const Video = () => {
  return (
    <video
autoPlay
loop
muted
className="absolute inset-0 w-full h-full object-cover z-1"
src={VideoFile}
loading="lazy"  
></video>
  )
}

export default Video