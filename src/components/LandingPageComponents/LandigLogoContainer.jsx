import React from 'react'

function LandigLogoContainer(props) {
    return (
        <>
            <div className='flex w-[380px] h-[380px] justify-center items-center border-[15px] border-strong-blue rounded-full  hover:animate-pulse'>
                {props.children}
            </div>
        </>

    )
}

export default LandigLogoContainer