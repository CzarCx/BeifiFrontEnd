import React from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function NavBar() {
  return (
    <div>
      <nav className="bg-strong-blue h-[90px] w-full text-white flex flex-direction-row place-content-between pt-[20px]">
        <ul className="flex flex-direction-row w-[40%] mt-3 place-content-between">
          <Link>
            <p className="flex flex-direction-row items-center">Acerca de Nosotros<IoIosArrowDown /></p>
          </Link>
          <Link>
            <p className="flex flex-direction-row items-center ">Servicios<IoIosArrowDown /></p>
          </Link>
          <Link>
            <p className="flex flex-direction-row items-center">Contacto<IoIosArrowDown /></p>
          </Link>
        </ul>
        <a href="#" class="justify-center w-[20%]">
          <img className="w-[50px] h-[50px]" src="../public/logoLanding.svg" alt="logo" />
        </a>
        <ul class="flex flex-direction-row mb-5 items-center divide-x-2 w-[25%]">
          <Link to="/register" class="pr-5 ml-28">
            <p>Registrarse</p>
          </Link>
          <Link to="/login" class="pl-5">
            <p>Iniciar Sesión</p>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar