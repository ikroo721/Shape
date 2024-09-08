/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion,useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Anchor = ({name,text,href,color}) => {
    const control=useAnimation();
    const [first, setfirst] = useState(false)
    const handleEnter=()=>{
      setfirst(true);
      control.start({
        width:"100%",
      })
    }
    const handleLeave=()=>{
      setfirst(false);
      control.start({
        x:"100%",
      }).then(() => {
        control.set({ width: "0%", x: "0%" }); 
      });
    }
  return (
<div
style={{color:color && 'white'}}
className='overflow-hidden   flex items-center min-h-8'>
<motion.a
href="#"
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    className={`${text && "text-xl font-bold"} xl:text-[20px] lg:text-[20px] ${!color && 'slg:text-5xl' }  cursor-pointer  inline-block relative `}>{name}
    <motion.span
    animate={control}
    initial={{width:"0%"}}
    transition={{duration:.2}}
    style={{backgroundColor: color ? 'white' : 'black'}}
    className='xl:h-[1.4px] lg:h-[2px] h-1 slg:-bottom-[2px] left-0   absolute xl:-bottom-0 lg:-bottom-0'></motion.span>
    </motion.a>
</div>
  )
}

export default Anchor