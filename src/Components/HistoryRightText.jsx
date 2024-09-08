/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import ButtonWithCircle from './ButtonWithCircle'

const HistoryRightText = () => {
  return (
    <div className='lg:w-[50%]  p-2 px-4 md:px-10  lg:p-10'>
          <div className='sxl:w-[75%]  flex flex-col gap-10 text-lg'>
          <p className='tracking-tight  lg:text-[16px] sxl:text-[21px]'>Born in 2010, MadeByShape is an Award-Winning Web Design Agency based in Manchester specialising in <span className='underline'> Web Design, Branding, eCommerce,</span> Digital Marketing and <span className='underline'>Organic SEO.</span></p>
            <p className='tracking-tight  lg:text-[16px] sxl:text-[21px]'>Our content management system of choice is <span className='underline'>Craft CMS</span> rather than WordPress, allowing you to manage your website pages, content and SEO easily. We're proud to be a verified Craft CMS and <span className='underline'>Craft Commerce</span> professional partner.</p>
            <p className='tracking-tight lg:text-[16px]  sxl:text-[21px]'>So, if you need a professional Manchester Web Design Agency to support you with your branding or website design, <span  className='underline'>get in touch</span> with us today.</p>
            <ButtonWithCircle text="About Shape" color={"#D0FF71"} />
          </div>
        </div>
  )
}

export default HistoryRightText