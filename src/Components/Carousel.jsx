/* eslint-disable no-unused-vars */
import React from 'react';
import BrandSlider from './BrandSlider';
import IndependentTeamText from './IndependentTeamText';

const Carousel = () => {

  return (
    <div className='flex flex-col gap-5'>
       <IndependentTeamText/>
        <BrandSlider/>
    </div>
  )
}

export default Carousel