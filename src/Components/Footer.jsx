/* eslint-disable no-unused-vars */

import React from 'react'
import FooterLeftIcons from './FooterLeftIcons'
import FooterTopRightText from './FooterTopRightText'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
const Footer = () => {
 
  return (
    <footer className='min-h-screen w-full sxl:px-10 lg:px-6 px-4 sm:px-5 md:px-4   py-10 '>
<div className='md:h-[95vh] h-[110vh] w-full bg-[#010202] relative rounded-[1.4rem] rounded-t-none overflow-hidden'>
<FooterLeftIcons/>
<FooterTopRightText/>
<FooterTop/>
<FooterBottom/>
        </div>

    </footer>
  )
}

export default Footer