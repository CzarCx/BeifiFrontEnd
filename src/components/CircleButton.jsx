import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'

function CircleButton({className,onClick}) {
  return (
    <div >
        <button className='flex items-center justify-center w-[40px] h-[40px] bg-light-blue rounded-full float-end overflow-visible mr-[-15px] mt-[65px] mb-[-25px] hover:ring-8 hover:ring-[#6CBEEC] hover:duration-500 ' onClick={onClick}>
        <BiSolidRightArrow className={className}/>
        </button>
    </div>
  )
}

export default CircleButton