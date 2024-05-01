import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function DropDown(props) {
  return (
    <div>
        <p className='flex flex-row items-center w-auto text-description border-b-[1px] border-b-normal-gray mr-32'>
            {props.text}<IoIosArrowDown className='ml-2'/>
        </p>
    </div>
  )
}

export default DropDown