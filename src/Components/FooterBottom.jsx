import React from 'react'
import Anchor from './Anchor'
import FooterBottomText from './FooterBottomText'

const FooterBottom = () => {
  return (
    <div className='w-full lg:h-1/2 min-h-[10%]  text-white flex justify-center'>
<div className='h-full lg:w-[85%] w-full  flex items-center justify-center'>
<div className='flex items-center justify-center w-full flex-col gap-1'>
  <h2 className='xsl:text-[9.5vw] text-[10vw] hidden lg:block lg:text-[9.8] text-nowrap font-semibold'>Crafting since 2010</h2>
 <FooterBottomText/>
</div>
</div> 
</div>
  )
}

export default FooterBottom