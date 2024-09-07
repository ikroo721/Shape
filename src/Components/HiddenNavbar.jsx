import React, { useState } from 'react'
import Logo from './Logo'
import ButtonWithCircle from './ButtonWithCircle'
import Anchor from './Anchor'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion/dom'
const HiddenNavbar = ({NavArray}) => {
    const [Toggle, setToggle] = useState(false)
  const Toggler=()=>{
   setToggle(!Toggle)
 }
  return (
    <div className="xl:hidden  h-full lg:hidden w-full relative z-[99] " >
    <div className={`flex items-center justify-between`}>
    <Logo/>
        <div onClick={Toggler} className="w-[60vw] xsm:w-[60vw] sm:w-[60vw]  h-10 mt-1   flex justify-end items-center px-2 relative">  
        <button onClick={Toggler} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm  rounded-lg xl:hidden   text-black" aria-controls="navbar-default" aria-expanded="false">
          <span  onClick={Toggler} className="sr-only">Open main menu</span>
          <svg onClick={Toggler} className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
        </div>
    </div>
        <div className={`  ${Toggle && 'min-h-[15vh]' } w-full flex flex-col gap-5   z-[100]`} id="navbar-default">
        <ul className="font-medium flex flex-col w-full  md:p-0  overflow-hidden   ">
          {
  
         Toggle &&    <motion.div
             initial={{y:"-300px"}}
             animate={{y:"0px"}}
             exit={{y:"-300px"}}
             transition={{duration:.2,ease:easeInOut}}
            className={` relative   w-full gap-2 mt-5 items-start  flex-col  flex  justify-center z-10  cursor-pointer
              `} > 
         {    NavArray.map((e) => (
          <Anchor key={e} name={e.name}/>
            ))
            }
            </motion.div>
          }
        </ul>
       {  Toggle &&  <ButtonWithCircle text='Start a project'/>}
      </div>
        </div>
  )
}

export default HiddenNavbar