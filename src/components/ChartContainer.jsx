import React from 'react'

function ChartContainer() {
  return (
    <>
        <div className='flex  items-center justify-center w-full mt-10'>
            <canvas className='flex flex-col items-center justify-center w-[900px] h-[550px]  bg-white rounded-[10px] drop-shadow-xl'>
            </canvas>
        </div>
    </>
  )
}

export default ChartContainer