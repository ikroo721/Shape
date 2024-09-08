/* eslint-disable no-unused-vars */
// export default ButtonWithCircle
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const ButtonWithCircle = ({ text, color, textColor }) => {
  return (
    <motion.div
      className="flex items-center"
      style={{ color: textColor ? 'white' : 'black' }}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.button
        style={{ backgroundColor: color }}
        className="xl:px-3 lg:px-3 slg:px-3 h-8 text-nowrap flex items-center justify-center lmd:px-3 md:px-3 sm:px-3 xsm:px-2 text-sm xsm:text-lg px-[6px] py-1 xl:py-1 rounded-full"
        variants={{
          rest: { x: 0 },
          hover: { x: -10 }, 
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.button>

      <motion.div
        style={{ backgroundColor: color }}
        className="h-8 w-8 -ml-1 xl:-ml-[5px] py-1 rounded-full flex items-center justify-center"
        variants={{
          rest: { x: 0 },
          hover: { x: 10 },
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="w-3 h-3 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ButtonWithCircle;

