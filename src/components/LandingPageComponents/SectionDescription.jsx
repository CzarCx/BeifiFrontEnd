import React from 'react'

function SectionDescription(props) {
  return (
    <div>
        <p className={`text-[20px] font-normal ${props.align} ${props.width}`}>
        {props.text}
        </p>
    </div>
  )
}

export default SectionDescription