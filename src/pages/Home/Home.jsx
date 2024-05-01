import { Link } from "react-router-dom";
import React from 'react'
import SideBar from '../../components/Sidebar'
import PageTitle from '../../components/PageTitle'
import PageContainer from "../../components/PageContainer";

function Home() {
  return (
    <div>
      <SideBar />
      <PageContainer>
        <PageTitle text="Bienvenido" />
        <Link to={"/login"} >
          <p>Iniciar Sesión</p>
        </Link>
        <Link to={"/register"}>
          <p>Registrarse</p>
        </Link>
      </PageContainer>
    </div>
  )
}

export default Home