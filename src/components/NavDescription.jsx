import React from 'react';

function NavDescription(props) {
  return (
    <div>
        <p className={`text-description ${props.color} font-semibold w-auto text-left mt-2.5`}>
            {props.text}
        </p>
    </div>
  )
}

export default NavDescription;
