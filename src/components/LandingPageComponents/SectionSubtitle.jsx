import React from 'react'

function SectionSubtitle(props) {
  return (
    <div>
        <p className={`text-xstrong-blue font-semibold text-[20px] ${props.width} ${props.align}`}>
            {props.text}
        </p>
    </div>
  )
}

export default SectionSubtitle