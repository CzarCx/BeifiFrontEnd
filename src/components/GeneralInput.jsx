import React from 'react'

function GeneralInput({type, placeholder}) {
  return (
    <div>
        <input className='w-i-w h-[50px] rounded-[10px]  border-1.5 border-light-gray p-[10px] focus:border-i-blue focus:border-3 outline-none' type={type} placeholder={placeholder}/>
    </div>
  )
}

export default GeneralInput