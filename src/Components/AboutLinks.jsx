/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Anchor from './Anchor'

const AboutLinks = ({Array,ExtraClass,}) => {
  return (
    <div className={`${ExtraClass ? ExtraClass : 'flex  flex-col gap-4 w-1/2   items-start'}`}>
              <p className="font-semibold  text-xl text-gray-400 text-nowrap">{Array.header}</p>
              <div>
                {
                 Array.Arr.map((e,i)=>(   
                  e.icon ?    <div key={i} className='flex items-center gap-2'>{e.icon} 
                  <Anchor key={i} name={e.name} color="white" />
                  </div> : <Anchor key={i} name={e.name} color="white" />
                ))
                } 
              </div>
            </div>
  )
}

export default AboutLinks