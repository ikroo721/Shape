import React from 'react'

const Video = () => {
  return (
    <video
autoPlay
loop
muted
className="absolute inset-0 w-full h-full object-cover z-1"
src="/assets/Video/shape-showreel-2024_looping-v3.mp4"
loading="lazy" preload='metadata' 
></video>
  )
}

export default Video