/* eslint-disable react/prop-types */
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import WorkCardText from './WorkCardText';

const WorkCard = ({index,item}) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);  
  
 let control=useAnimation()
const MouseEnterHandler = () => {
    if (isLargeScreen) {
      control.start({
        top: '0%',
      });
    }
  };

  const MouseLeaveHandler = () => {
    if (isLargeScreen) {
        control.start({
          top: '-100%',
        });
      }
  };
            useEffect(() => {
                const updateScreenSize = () => {
                    const isLg = window.innerWidth >= 1024;
                    setIsLargeScreen(isLg);
                    if (!isLg) {
                      control.start({ top: '0%' });
                    }
                    else{
                      control.start({top:"-100%"})
                    }
                  };
                updateScreenSize();
                window.addEventListener('resize', updateScreenSize);
                return () => window.removeEventListener('resize', updateScreenSize);
              }, [control]);
  return (
    <div className={`xl:w-[43vw] lmd:w-[43vw] md:w-[43vw] w-[90vw] sm:w-[90vw] xsm:w-[90vw] slg:w-[44vw]  sxl:w-[43vw] lg:w-[45vw]  flex flex-col xl:gap-2 sxl:gap-5 slg:gap-2 mt-0 gap-5  ${index % 2 == 0 && "lg:-mt-[35vh] md:mt-[10%] sxl:-mt-[37.5vh]  xl:-mt-[30vh]"}`}>
    <motion.div
    onMouseEnter={MouseEnterHandler}
   onMouseLeave={MouseLeaveHandler}
    className="xl:h-[66vh] h-[35vh] sm:h-[54.8vh] xsm:h-[45vh] md:h-[30vh] lmd:h-[40vh] slg:h-[50vh] lg:h-[56vh] rounded-[2rem] sxl:h-[56vh] w-full xl:rounded-[1.4rem] lmd:rounded-[1.4rem] sxl:rounded-[2rem] bg-red-200 overflow-hidden  relative ">
    <motion.div
     animate={control}
     transition={{duration:.7,ease:'easeInOut'}}
    className='h-12 xl:w-64 gap-3 p-2  bg-white absolute right-0 slg:top-0 xl:-top-12 sxl:-top-12 lg:-top-12  !md:top-[0%]
    rounded-t-none
    rounded-bl-[1.4rem] flex   items-center justify-evenly ' >
<svg id="Layer_1" className="w-10 h-10 | lg:w-12 lg:h-12 text-white fill-current absolute 
-top-0 left-[1px] transform -translate-x-full rotate-90 dark:text-grayDark-600" version="1.1" x="0" y="0" viewBox="0 0 100 100" xmlSpace="preserve"><path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path></svg>
<svg id="Layer_1" className="w-10 h-10 | lg:w-12 lg:h-12 text-white  fill-current absolute  -right-0 transform rotate-90 -bottom-10 dark:text-grayDark-600" version="1.1" x="0" y="0" viewBox="0 0 100 100" xmlSpace="preserve"><path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
</svg>
<button className="px-2 py-1 rounded-full bg-gray-200">Branding</button>
<button className="px-2 py-1 rounded-full bg-gray-200">Website</button>
<button className="px-2 py-1 rounded-full hidden xl:flex sxl:flex lg:flex slg:float-start lmd:flex md:flex sm:flex xsm:flex bg-gray-200">SEO</button>
    </motion.div>
 {index == 0 ? <video  className='h-full w-full object-cover' src={item.img} alt="A Man" loading="lazy" preload='metadata' ></video> : <img src={item.img} className='h-full w-full object-cover' alt={item.head} ></img>}

    </motion.div>
    <WorkCardText item={item}/>
  </div>
  )
}

export default WorkCard