/* eslint-disable react/prop-types */
import React from 'react'
import Logo from './Logo'
import Anchor from './Anchor'
import ButtonWithCircle from './ButtonWithCircle'

const LargeScreenNavbar = ({NavArray}) => {
  return (
    <div className="xl:h-full lg:h-full xl:flex lg:flex hidden  h-full w-full items-center relative   justify-between">
    <Logo/>
     <div className="  xl:flex lg:flex items-center xl:w-[25vw] lg:gap-4 justify-between ">
       {NavArray.map((e)=>(
         <Anchor key={e.name} name={e.name}/>
       ))}
         </div>
     <div className="xl:h-full lg:h-full hidden lg:flex xl:flex items-center justify-between   ">
       <ButtonWithCircle text="Start a project" color={"#D0FF71"} />
     </div>
     
</div>
  )
}

export default LargeScreenNavbar