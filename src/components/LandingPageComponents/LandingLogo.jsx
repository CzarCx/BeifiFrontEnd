import React from 'react'

function LandingLogo(props) {
    return (
        <div>
            <a href={props.href}>
                <img src={props.src} alt="logo" className='w-[250px] ' />
            </a>
        </div>
    )
}

export default LandingLogo