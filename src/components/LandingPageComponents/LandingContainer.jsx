import React from 'react'

function LandingContainer(props) {
  return (
    <div className={`flex flex-col  h-[600px] w-full ${props.color}`}>
        {props.children}
    </div>
  )
}

export default LandingContainer