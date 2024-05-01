import React from 'react'
import { Link } from 'react-router-dom'

function LandingButton(props) {
  return (
    <div>
        <Link to={props.link}>
        <button className={`${props.float} bg-xstrong-blue w-[240px] h-[50px] rounded-[15px] font-bold text-white mt-5`}>{props.text}</button>
        </Link>
    </div>
  )
}

export default LandingButton