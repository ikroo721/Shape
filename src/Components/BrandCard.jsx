/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import {  motion, useAnimation } from "framer-motion";
const BrandCard = ({item,setHoverElem,hoverElem}) => {
    const [Hover, setHover] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);  
    const controls = useAnimation();
    const SwitchHoverToTrue = () => {
        if (isLargeScreen) {
      setHover(true);
      controls.start({ width: "12vw" });
      setHoverElem(item.name)
        }
    };
    const SwitchHoverToFalse = () => {
        if (isLargeScreen) {
      setHover(false);
      controls.start({ width: "0vw" });
      setHoverElem(false)
        }
    };
    useEffect(() => {
        const updateScreenSize = () => {
            const isLg = window.innerWidth >= 1024;
            setIsLargeScreen(isLg);
            if (!isLg) {
                controls.start({ width: "12vw" });
            }
            else{
                controls.start({ width: "0vw" });
            }
          };
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
      }, [controls]);
    
  return (
    <div
    onMouseEnter={SwitchHoverToTrue}
    onMouseLeave={SwitchHoverToFalse}
    className="slg:h-[12vw] md:h-[20vw] xsm:h-[15vw] h-[30vw] sm:h-[15vw] text-white 
    lmd:h-[15vw]  w-full  flex items-center px-2  lmd:gap-0 gap-3 border-b-[2px]"
  >
    <motion.div
      animate={controls}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="slg:h-[8vw] h-4/5 w-[25vw] xsm:w-[15vw] md:w-[20vw] slg:w-[12vw] lg:w-0 md:rounded-3xl rounded-xl overflow-hidden"
    >

        <img src={item.img} className='h-full w-full object-cover' alt={item.name} />
    </motion.div>
    <h2
    style={{opacity:hoverElem == item.name ? "1" : hoverElem == '' ? 1 : 0.6}}
    className={`xl:text-[6.8rem] lg:text-[4.3rem] text-[1.5rem] xsm:text-[3rem] sm:text-[4.3rem] md:text-[5.5rem] sxl:text-[6rem] tracking-tighter font-bold `}>
    {item.name}
    </h2>
  </div>
  )
}

export default BrandCard