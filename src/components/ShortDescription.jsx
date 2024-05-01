import React from 'react'

function ShortDescription({text}) {
  return (
    <div>
        <p className='text-s-description w-i-w text-left mt-2.5'>
            {text}
        </p>
    </div>
  )
}

export default ShortDescription