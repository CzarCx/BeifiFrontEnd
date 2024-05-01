import React from 'react';
import { Link } from 'react-router-dom';

function SideLink(props) {
    const hoverClass = props.disableHover ? '' : 'group-hover:bg-[#6CBEEC] group-hover:text-white group-hover:h-[50px] group-hover:rounded-[20px] duration-700 hover:px-3';

    return (
        <div className='group'>
            <Link to={props.link} onClick={props.onClick} style={{ color: props.color }}>
                <p 
                    className={`flex flex-row text-white font-semibold text-[17px]  my-2.5 items-center ${hoverClass} w-[210px]`} 
                    style={{ width: props.width }}>
                    <div className='text-3xl'>
                        {props.icon}
                    </div>
                    <p className='flex flex-row items-center'>{props.text}{props.icon2}</p>
                </p>
            </Link>
        </div>
    );
}

export default SideLink;
