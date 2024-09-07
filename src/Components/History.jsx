import React from 'react'
import HistoryLeftText from './HistoryLeftText'
import HistoryRightText from './HistoryRightText'


const History = () => {
  return (
    <div className='flex mt-[20%] lg:flex-row flex-col '>
        <HistoryLeftText/>
        <HistoryRightText/>
    </div>
  )
}

export default History