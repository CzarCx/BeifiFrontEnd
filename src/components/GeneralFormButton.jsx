import React from 'react'

function GeneralFormButton({text}) {
  return (
    <div>
        <input className='bg-xstrong-blue w-i-w h-[50px] rounded-[10px] text-white text-[16px' type="submit" value={text}/>
    </div>
  )
}

export default GeneralFormButton