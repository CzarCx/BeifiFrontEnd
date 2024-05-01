import React from 'react'

function LandingTitle(props) {
  return (
    <div>
        <p className='text-[60px] font-bold w-[450px] text-white
        '>
        {props.text}
        </p>
    </div>
  )
}

export default LandingTitle