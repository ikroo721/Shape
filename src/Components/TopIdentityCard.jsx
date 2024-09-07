import React from 'react'
import TopIdentityLeftText from './TopIdentityLeftText'
import TopIdentityRightText from './TopIdentityRightText'

const TopIdentityCard = () => {
  return (
    <div className=" flex items-center justify-center  ">
        <div className="flex lg:flex-row flex-col lg:gap-0 lmd:gap-5  px-3 xsm:px-5 sm:px-7 lmd:px-0 slg:w-[88%]">
          <TopIdentityLeftText/>
          <TopIdentityRightText/>
        </div>
      </div>
  )
}

export default TopIdentityCard