import React from 'react'
import FooterIconsData from './FooterIconsData'
import FooterSvgTopRight from './FooterSvgTopRight'
import FooterSvgTopLeft from './FooterSvgTopLeft'
import { easeInOut, motion } from 'framer-motion'
const FooterLeftIcons = () => {
      const Array=FooterIconsData()
  return (
    <div className='flex flex-col  justify-center items-center py-2 gap-1 absolute top-0  
rounded-br-[1.4rem]  rounded-tl-0 bg-white w-[55px]'>
{
    Array.map((e,i)=>(
        <motion.div
        whileHover={{backgroundColor:'black',color:'white'}}
        transition={{duration:.7,ease:easeInOut}}
        key={i} className='h-8 w-8 bg-[#D0FF71] rounded-full flex items-center justify-center'>
            {e.svg}
        </motion.div>
    ))
}
            <FooterSvgTopRight/>
            <FooterSvgTopLeft/>
</div>
  )
}

export default FooterLeftIcons