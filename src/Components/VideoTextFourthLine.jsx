import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'

const VideoTextFourthLine = () => {
  return (
    <div className='xl:py-4 lg:py-4 slg:py-4 lmd:py-4 md:py-4 sm:py-3 xsm:py-2  py-0   xl:w-[24vw] min-h-10 lg:w-[35vw] slg:w-[35vw] xl:px-4 lg:px-4 slg:px-4 lmd:px-4 md:px-4 sm:px-3 xsm:px-2 px-2 flex items-center leading-none bg-white relative xl:rounded-bl-[1rem] lg:rounded-bl-[1rem] slg:rounded-bl-[1rem] lmd:rounded-bl-[1rem] md:rounded-bl-[1rem] sm:rounded-bl-0  rounded-br-[1rem] justify-between'>
<svg id="Layer_1" className="w-10 h-10 | lg:w-12 lg:h-12 text-white  fill-current absolute  xl:-right-[2.9rem] lg:-right-[3rem] slg:-right-[2.5rem] md:-right-[2.45rem] -right-[2.5rem] transform -top-0 dark:text-grayDark-600" version="1.1" x="0" y="0" viewBox="0 0 100 100" xmlSpace="preserve"><path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path></svg>
<svg id="Layer_1" className="w-10 h-10 | lg:w-12 lg:h-12 text-white fill-current absolute   
transform -bottom-[2.49rem] left-0 dark:text-grayDark-600 slg:hidden lg:hidden xl:hidden md:hidden lmd:hidden block" version="1.1" x="0" y="0" viewBox="0 0 100 100" xmlSpace="preserve"><path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path></svg>

<ButtonWithCircle text='View Our Work' color={'#010202'} textColor='white'/>
<div className='xl:block  lg:block slg:block hidden'>
<ButtonWithCircle text='Meet the team'/>

</div>
</div>
  )
}

export default VideoTextFourthLine