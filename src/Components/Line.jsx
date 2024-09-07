/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import React from 'react'

const Line = () => {
    const Arr=["1","2"]
  return (
    <div className='overflow-hidden text-black '>
         {
          Arr.map((e,i)=>( 
            <div key={e} className='flex flex-nowrap whitespace-nowrap'>
        <motion.div
        className='flex flex-nowrap whitespace-nowrap'
            animate={{x: i==0 ?  '-100%' :'100%' }}
            initial={{x:"-40%"}}
            transition={{duration:120,ease:'linear',repeat:Infinity}}           >
            <motion.h2 className='text-[13vw] xsm:text-[14vw] md:text-[10vw] font-bold flex items-center gap-2 tracking-tighter leading-tight'>Let's Work together. <span className='sxl:hidden xl:hidden flex items-center justify-center slg:h-[10vw]  slg:w-[10vw] sm:w-[8vw] sm:h-[8vw] rounded-full bg-yellow-400  h-[10vw] w-[10vw] '></span> </motion.h2>
            <motion.h2 className='text-[13vw] xsm:text-[14vw] md:text-[10vw] font-bold flex items-center gap-2 tracking-tighter leading-tight'>Let's Work together. <span className='sxl:hidden xl:hidden flex items-center justify-center slg:h-[10vw]  slg:w-[10vw] sm:w-[8vw] sm:h-[8vw] rounded-full bg-yellow-400  h-[10vw] w-[10vw] '></span> </motion.h2>
            <motion.h2 className='text-[13vw] xsm:text-[14vw] md:text-[10vw] font-bold flex items-center gap-2 tracking-tighter leading-tight'>Let's Work together. <span className='sxl:hidden xl:hidden flex items-center justify-center slg:h-[10vw]  slg:w-[10vw] sm:w-[8vw] sm:h-[8vw] rounded-full bg-yellow-400  h-[10vw] w-[10vw] '></span> </motion.h2>
           
            <motion.h2 className='text-[13vw] xsm:text-[14vw] md:text-[10vw] font-bold flex items-center gap-2 tracking-tighter leading-tight'>Let's Work together. <span className='sxl:hidden xl:hidden flex items-center justify-center slg:h-[10vw]  slg:w-[10vw] sm:w-[8vw] sm:h-[8vw] rounded-full bg-yellow-400  h-[10vw] w-[10vw] '></span> </motion.h2>
            <motion.h2 className='text-[13vw] xsm:text-[14vw] md:text-[10vw] font-bold flex items-center gap-2 tracking-tighter leading-tight'>Let's Work together. <span className='sxl:hidden xl:hidden flex items-center justify-center slg:h-[10vw]  slg:w-[10vw] sm:w-[8vw] sm:h-[8vw] rounded-full bg-yellow-400  h-[10vw] w-[10vw] '></span> </motion.h2>
            <motion.h2 className='text-[13vw] xsm:text-[14vw] md:text-[10vw] font-bold flex items-center gap-2 tracking-tighter leading-tight'>Let's Work together. <span className='sxl:hidden xl:hidden flex items-center justify-center slg:h-[10vw]  slg:w-[10vw] sm:w-[8vw] sm:h-[8vw] rounded-full bg-yellow-400  h-[10vw] w-[10vw] '></span> </motion.h2>
            <motion.h2 className='text-[13vw] xsm:text-[14vw] md:text-[10vw] font-bold flex items-center gap-2 tracking-tighter leading-tight'>Let's Work together. <span className='sxl:hidden xl:hidden flex items-center justify-center slg:h-[10vw]  slg:w-[10vw] sm:w-[8vw] sm:h-[8vw] rounded-full bg-yellow-400  h-[10vw] w-[10vw] '></span> </motion.h2>
            </motion.div>
        </div>
          ))
         }
    </div>
  )
}

export default Line