/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Photo from '/assets/Image/CEO Image.webp';
import { motion } from 'framer-motion';

const CoFounder = () => {
  const [isReversed, setIsReversed] = useState(false);

  const handleMouseEnter = () => {
    setIsReversed(true);
  };

  const handleMouseLeave = () => {
    setIsReversed(false);
  };

  return (
    <div
      className="flex xsm:px-10 py-2 xl:justify-end justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex gap-4  items-center p-1 px-2 bg-white rounded-full"
        style={{ display: 'flex', gap: '1rem' }}
      >
        <motion.div
          className="h-full xl:w-[55px] w-[50px] xsm:w-[40px] bg-black rounded-full overflow-hidden"
          animate={{ x: isReversed ? 170 : 0 }} 
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img src={Photo} className="h-full w-full object-cover" alt="CEO Photo" />
        </motion.div>
        <motion.div
          className="flex flex-col"
          animate={{ x: isReversed ? -60 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h2>Hi from Andy</h2>
          <p>Co-Founder of Shape</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoFounder;
