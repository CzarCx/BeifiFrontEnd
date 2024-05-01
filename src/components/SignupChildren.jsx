import React from 'react'
import GeneralInput from './GeneralInput'
import GeneralFormButton from './GeneralFormButton'
import MediumTitle from './MediumTitle'
import ShortDescription from './ShortDescription'
import InputTitle from './InputTitle'
import { Link } from "react-router-dom";


function SignupChildren()  {
    return (
      <div className='flex flex-col justify-center items-center h-full'>
      <MediumTitle text="Crear una Cuenta" />
      <ShortDescription text="Por favor, ingresa tu información para crear a tu cuenta y comenzar a ¡explorar!" />
      <form>
        <InputTitle text="Usuario" />
        <GeneralInput type="text" placeholder="Ingresa tu usuario" />
        <InputTitle text="Correo electrónico" alignText="left" />
        <GeneralInput type="email" placeholder="Correo electrónico" />
        <InputTitle text="Contraseña" alignText="left" />
        <GeneralInput type="password" placeholder="Ingresa tu contraseña" />
        <InputTitle text="Confirmar contraseña" alignText="left" />
        <GeneralInput type="password" placeholder="Ingresa tu contraseña" />
        <div className='mt-10'>
        <GeneralFormButton text="Continuar" />
        </div>
      </form>
      <div className='flex flex-row'>
        <InputTitle text="Ya tengo una cuenta" />
        <Link to={"/login"} style={{ textDecoration: "none", color: "#1570EF", marginLeft: "5px" }}><InputTitle text="Iniciar Sesión" /></Link>
      </div>
    </div>
    )
  }

export default SignupChildren