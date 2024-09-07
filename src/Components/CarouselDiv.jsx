/* eslint-disable react/prop-types */
import React from 'react'

const CarouselDiv = ({children}) => {
  return (
    <div className='min-w-[219.333px]  h-[15vh] flex items-center justify-center'>
        {children}
    </div>
  )
}

export default CarouselDiv