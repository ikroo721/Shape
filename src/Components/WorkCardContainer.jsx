import React from 'react'
import WorkCard from './WorkCard'
import WorkData from './WorkData'

const WorkCardContainer = () => {
    const Array=WorkData()
  return (
    <div className=" flex flex-wrap  xl:gap-[1.25rem] gap-[3rem] justify-center items-center">
        {Array.map((e, i) => (
          <WorkCard key={i} item={e} index={i} />
        ))}
      </div>
  )
}

export default WorkCardContainer