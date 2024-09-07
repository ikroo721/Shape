/* eslint-disable react/prop-types */
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const SwiperCardTopImage = ({item}) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    let control = useAnimation()
    const MouseEnterHandler = () => {
      if (isLargeScreen) {
        control.start({
          x: "0%",
          y: "0%",
        });
      }
    };
    const MouseLeaveHandler = () => {
      if (isLargeScreen) {
        control.start({
          x: "-100%",
          y: "100%",
        });
      }
    };
    useEffect(() => {
      const updateScreenSize = () => {
        const isLg = window.innerWidth >= 1024;
        setIsLargeScreen(isLg);
        if (!isLg) {
          control.start({
            x: "0%",
            y: "0%",
          });
        }
        else {
          control.start({
            x: "-100%",
            y: "100%",
          })
        }
      };
      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
      return () => window.removeEventListener('resize', updateScreenSize);
    }, [control]);
  return (
    <motion.div
    onMouseEnter={MouseEnterHandler}
    onMouseLeave={MouseLeaveHandler}
    style={{
      backgroundImage: `url(${item.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    className='sxl:h-[35vh] lmd:h-[40vh] lg:h-[23vh] lmd:w-[55vw] md:h-[33vh] md:w-[54vw] xsm:h-[25vh] xsm:w-[70vw] w-[70vw] h-[15vh] sm:w-[53vw] lg:w-[30vw]  relative rounded-[1.4rem] overflow-hidden'>
    <motion.div
      animate={control}
      transition={{ duration: .5, ease: 'easeInOut' }}
      className='bg-white lg:h-20 h-16 w-16 flex items-center justify-center lg:w-20 absolute  rounded-tr-[1.4rem] bottom-0'>
      <div
        style={{
          backgroundImage: `url(${item.inner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='lg:h-16 h-12  lg:w-16 w-12 bg-white  rounded-[1rem]'>

      </div>
      <svg
        id="Layer_1"
        className="w-10 h-10 | slg:w-12 slg:h-12 text-white  fill-current absolute  
          slg:-right-[2.9rem] -right-[2.5rem] transform -rotate-90 bottom-0 dark:text-grayDark-600"
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
      </svg>
      <svg
        id="Layer_1"
        className="w-10 h-10 | slg:w-12 slg:h-12 text-white  fill-current absolute  
          -left-0 transform -rotate-90 -top-10 slg:-top-12 dark:text-grayDark-600"
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
      </svg>
    </motion.div>
  </motion.div>
  )
}

export default SwiperCardTopImage