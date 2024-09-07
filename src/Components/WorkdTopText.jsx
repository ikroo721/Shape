import React from 'react'

const WorkdTopText = () => {
  return (
    <div className="w-full min-h-[30vh]  flex xl:justify-end sxl:justify-end lg:justify-end justify-start">
    <div className="min-h-[10vh] min-w-1/2  flex xl:items-center sxl:items-center lg:items-center items-start xl:px-0 xsm:px-7 px-2  justify-center flex-col gap-1">
      <div className="xl:w-2/3 lg:w-2/3 slg:w-2/3 lmd:w-2/3 xsm:w-2/3  md:w-3/4 flex flex-col">
        <div className="flex gap-1 items-center">
          <div className="h-1 w-1 bg-black"></div>
          <div>
            <p className="tracking-tighter">Our Work</p>
          </div>
        </div>
        <h2 className="xl:text-7xl sxl:text-6xl  lg:text-5xl slg:text-4xl lmd:text-4xl md:text-4xl sm:text-4xl xsm:text-4xl text-3xl font-semibold ">
          Take a look at our projects
        </h2>
      </div>
    </div>
  </div>
  )
}

export default WorkdTopText