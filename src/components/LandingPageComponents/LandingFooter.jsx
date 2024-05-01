import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"

function LandingFooter() {
  return (
    <div className='bg-[#001C30] h-[284px] text-white text-[22px] flex place-content-around divide-x-2'>
        <div className='flex flex-col w-[20%] m-[50px]'>
            <p className='flex flex-row items-center w-[370px] mb-5'><FaLocationDot className='mr-3 text-[40px]' />Av Instituto Politécnico Nacional 2580, CDMX, México</p>
            <p className='flex flex-row items-center mb-5'><FaPhoneAlt className='mr-2 text-[30px]' />+52 55 5555 5555</p>
            <p className='flex flex-row items-center mb-5'><MdMailOutline className='mr-3 text-[40px]' />support@gmail.com</p>
        </div>
        <div className='w-[20%] m-[50px] pl-10'>
            <p className='text-[26px] font-semibold'>Navegar</p>
            <ul>
                <Link to={'/about'}>
                <p className='flex flex-row items-center'>Acerca de Nosotros<IoIosArrowForward/></p>
                </Link>
                <Link to={'/services'}>
                <p className='flex flex-row items-center'>Servicios<IoIosArrowForward/></p>
                </Link>
                <Link to={'/terms'}>
                <p className='flex flex-row items-center w-max'>Términos y condiciones<IoIosArrowForward/></p>
                </Link>
            </ul>
        </div>
        <div className='m-[50px] pl-10'>
                <p className='text-[26px] font-semibold'>
                    Instituto Politécnico Nacional
                </p>
                <p className='text-[22px] w-[380px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        
    </div>
  )
}

export default LandingFooter