import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'

const  IndependentTeamText = () => {
  return (
    <div className='min-h-[40vh]  px-8 xl:px-20 lg:px-20 slg:px-20 lmd:px-20 md:px-10 flex xl:flex-row lg:flex-row slg:flex-row lmd:flex-row md:flex-col flex-col'>
    <div className='xl:w-[30%]     px-2 '>
    <div className='flex gap-1 items-center'>
    <div className='h-1 w-1 bg-black'></div>
  <div>
<p>Hiya, we’re Shape</p>
</div>
<div>
<p>&#128075;</p>
</div>
    </div>
    </div>
    <div className='xl:w-[70%] lg:w-[70%] slg:w-[70%] lmd:w-[70%] sm:w-[85%] w-full xsm:w-[100%]  h-full xl:px-10 lg:px-10 slg:px-10 lmd:px-5 px-0  flex  flex-col gap-10 justify-between'>
        <h3 className='xl:text-[3vw] xsm:text-[5vw] text-[5vw] sm:text-[4vw] md:text-[4vw] lg:text-[4vw] leading-none'><span className='xl:inline-block lg:inline-block slg:inline-block lmd:inline-block hidden'>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span> An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.</h3>
        <div className='flex gap-2 flex-wrap '>
        <ButtonWithCircle text={"About the Shape"} color={"#D0FF71"}></ButtonWithCircle>
            <ButtonWithCircle text={"Meet the team"}></ButtonWithCircle>
        </div>
    </div>
</div>
  )
}

export default IndependentTeamText