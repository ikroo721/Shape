/* eslint-disable react/prop-types */
import React from 'react'

const WorkCardText = ({item}) => {
  return (
    <div className="flex flex-col gap-2 ">
    <div className='flex gap-1 items-center text-lg'>
    <div>
<p>{item.year}</p>
 </div>
    <div className='h-1 w-1 bg-black'></div>
  <div>
<p>{item.tag}</p>
 </div>
    </div> 
    <h3 className="xl:text-4xl sxl:text-4xl lg:text-3xl slg:text-3xl lmd:text-3xl md:text-2xl sm:gap-2 sm:text-2xl xsm:text-2xl flex-row xsm:flex-col text-xl font-semibold xl:w-full xl:flex-nowrap flex xl:gap-2 xl:flex-row   flex-wrap "><span>{item.head}</span></h3>
    </div>
  )
}

export default WorkCardText