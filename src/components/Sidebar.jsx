import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BsBarChartLine } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { PiInfoLight } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import SideLink from './SideLink';
import CircleButton from './CircleButton';

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setSidebarTop(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDashboardClick = () => {
    setOpen2(!open2);
  };

  return (
    <div className="h-full">
      <div className={`${open ? "w-1/5" : "w-28"} bg-strong-blue h-screen w-1/6 float-start rounded-r-[3px] duration-500`} style={{ position: 'relative', top: `${sidebarTop}px` }}>
        <CircleButton className={`${open ? "text-xl text-white rotate-180" : "text-xl text-white rotate-0"} duration-500`} onClick={() => setOpen(!open)} />
        <div className='flex flex-col h-screen w-full'>
          {open ? (
          <>
          <Link to="/">
            <img className='mt-[-70px] ml-5 w-10 duration-500' src="../public/logo.svg" alt="logoBEIFI" />
            </Link>
          </>
          ) :
            (<div className='flex justify-center'>
              <img className='mt-[-100px]  w-10 ' src="../public/logo.svg" alt="logoBEIFI" />
            </div>)
          }
          <div className='flex flex-col mt-7 items-center text-white font-semibold text-normal'>
            <CgProfile className='text-[50px] items-center duration-500' />{open ? (<><p>Nombre de usuario</p></>) : (<></>)}
          </div>
          <div className='flex justify-center'>
            {open ? (
              <SideLink link="/graphpermonth" text="Home" icon={<HiOutlineHome className='mr-[10px]' />} />

            ) : (
              <>
                <SideLink link="/graphpermonth" icon={<HiOutlineHome className='text-5xl w-[50px] h-15 ' />} width="auto" />
              </>
            )}
          </div>
          <div className="flex justify-center flex-row cursor-pointer" onClick={handleDashboardClick}>
            {open ? (
              <SideLink
                text="Dashboard"
                icon={<RxDashboard className='mr-[10px]' />}
                icon2={!open2 && <IoIosArrowForward className='text-white ml-2' />}
              />
            ) : (<SideLink icon={<RxDashboard className='text-4xl' />} width="auto" />)}
          </div>
          <div className={`${open2 ? 'block' : 'hidden'}`}>
            {open ? (
              <div className='flex flex-col justify-center items-center'>
                <SideLink link="/graphperday" text={<p className='font-normal'>Gráficas por día</p>} icon={<BsBarChartLine className='text-2xl mr-[10px]' />} />
                <SideLink link="/graphpermonth" text={<p className='font-normal'>Gráficas por mes</p>} icon={<BsBarChartLine className='text-2xl mr-[10px]' />} />
                <SideLink link="/graphperyear" text={<p className='font-normal'>Gráficas por año</p>} icon={<BsBarChartLine className='text-2xl mr-[10px]' />} />
              </div>
            ) : (<div className='flex flex-col justify-center items-center'>
              <SideLink link="/graphperdays" icon={<BsBarChartLine />} width="auto" />
              <SideLink link="/graphpermonth" icon={<BsBarChartLine />} width="auto" />
              <SideLink link="/graphperyear" icon={<BsBarChartLine />} width="auto" />
            </div>)}
          </div>
          <hr className='border-t-white mx-5 mt-18' />
          <div className="flex justify-center flex-row cursor-pointer">
          {open ? (
            <SideLink link="/about" text="Más información" icon={<PiInfoLight className='mr-[10px]' />} />
          ) : (
            <div className='flex flex-col justify-center items-center'>
              <SideLink link="/about" icon={<PiInfoLight className='text-5xl' />} width="auto" />
            </div>
          )}
          </div>
          <div className="flex justify-center flex-row cursor-pointer">
            {open ? (
              <div className='cursor-pointer absolute bottom-0  '>
              <SideLink link="/" text={<p className='text-[#C04A4A]'>Cerrar Sesión</p>} icon={<TbLogout2 className='mr-[10px]' color='#C04A4A' />} disableHover={true} />
              </div>
            ) : (
              <div className='absolute bottom-0'>
              <SideLink link="/" icon={<TbLogout2 className='text-5xl' color='#C04A4A' />} width="auto" />
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
