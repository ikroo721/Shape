import React from 'react'
import VideoFile from '/assets/Video/shape-showreel-2024_looping-v3.mp4'
const Video = () => {
  return (
    <video
autoPlay
loop
muted
className="absolute inset-0 w-full h-full object-cover z-1"
src={VideoFile}
loading="lazy" preload='metadata' 
></video>
  )
}

export default Video