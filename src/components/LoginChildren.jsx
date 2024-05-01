import React from 'react'
import GeneralInput from './GeneralInput'
import GeneralFormButton from './GeneralFormButton'
import MediumTitle from './MediumTitle'
import ShortDescription from './ShortDescription'
import InputTitle from './InputTitle'
import { Link } from "react-router-dom";
function LoginChildren() {
  return (
    <div className='flex flex-col items-center mt-20'>
    <MediumTitle text="Iniciar Sesión" />
    <ShortDescription text="Por favor, ingresa tu información para acceder a tu cuenta y comenzar a ¡explorar!" />
    <form>
      <InputTitle text="Email" />
      <GeneralInput type="email" placeholder="Email" />
      <InputTitle text="Contraseña" alignText="left" />
      <GeneralInput type="password" placeholder="Ingresa tu contraseña" />
      <div className='mt-10'>
      <GeneralFormButton text="Continuar" />
      </div>
    </form>
    <div className='flex flex-row'>
      <InputTitle text="¿No tienes una cuenta? " />
      <Link to={"/register"} style={{ textDecoration: "none", color: "#1570EF", marginLeft: "5px" }}><InputTitle text="Registrate" /></Link>
    </div>
  </div>
  )
}

export default LoginChildren