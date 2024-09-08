/* eslint-disable no-unused-vars */
import React from 'react'
import FooterTextGoHiddenAfterLG from './FooterTextGoHiddenAfterLG'
import FooterTextHiddenOnLG from './FooterTextHiddenOnLG'

const FooterBottomText = () => {
  return (
    <div className='w-full min-h-12 px-5'>
       <FooterTextGoHiddenAfterLG/>
       <div>
       <FooterTextHiddenOnLG/>
       </div>

  </div>
  )
}

export default FooterBottomText