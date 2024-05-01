import React from 'react'

function SectionTitle(props) {

  return (
    <div className={`${props.background}`}>
        <p className={`flex text-[30px] font-semibold text-black bg-white  items-center justify-center ${props.width} ${props.align} ${props.marginX} `}>
            {props.text}
        </p>
    </div>
  )
}

export default SectionTitle