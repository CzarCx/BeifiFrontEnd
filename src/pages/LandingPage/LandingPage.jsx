import React from 'react'
import './LandingPage.css'
import LandingContainer from '../../components/LandingPageComponents/LandingContainer'
import NavBar from '../../components/LandingPageComponents/NavBar'
import LandingFooter from '../../components/LandingPageComponents/LandingFooter'
import SectionTitle from '../../components/LandingPageComponents/SectionTitle'
import SectionDescription from '../../components/LandingPageComponents/SectionDescription'
import LandingTitle from '../../components/LandingPageComponents/LandingTitle'
import LandingLogo from '../../components/LandingPageComponents/LandingLogo'
import LandingLogoContainer from '../../components/LandingPageComponents/LandigLogoContainer'
import SectionSubtitle from '../../components/LandingPageComponents/SectionSubtitle.jsx'
import LandingSubtiltle from '../../components/LandingPageComponents/LandingSubtiltle'
import escomLogo from '../../../public/LandingPage/escomLogo.svg'
import upiitaLogo from '../../../public/LandingPage/upiitaLogo.svg'
import cecyt9Logo from '../../../public/LandingPage/cecyt9Logo.svg'
import cdmxMap from '../../../public/LandingPage/cdmxMap.svg'
import LandingButton from '../../components/LandingPageComponents/LandingButton'
function LandingPage() {
  return (
    <div className="">
      <NavBar />
      <LandingContainer color="bg-strong-blue">
        <div className='flex flex-row justify-center items-center space-x-64 mt-10'>
          <div className='border-2 border-white w-[405px] h-[455px] border-y-[10px] border-x-[20px] flex justify-center items-center space-x-28'>

            <div className='flex flex-col bg-strong-blue z-[100] mr-32'>
              <LandingTitle text="RED CALIDAD DEL AIRE" />
              <LandingSubtiltle text="¡Ven y explora toda nuestra información!" />
            </div>
          </div>
          <img src={cdmxMap} alt="Mapa" className='w-[450px]' />
        </div>
      </LandingContainer>
      <LandingContainer>
        <div className='flex flex-row justify-center items-center space-x-40 h-full'>
          <div className='bg-xtrong-gray h-[380px] w-[380px] rounded-[60px] flex items-center justify-center'>
            <img src="../../../public/LandingPage/beifiLogo.svg" alt="" />
          </div>
          <div className='flex items-center h-full w-[500px] '>
            <div className='w-max h-max text-right '>
              <SectionSubtitle text="Un poco del Proyecto" align="text-right" width="w-[400px]" />
              <SectionTitle text="Sistema de Monitoreo Meteorológico Regional y Calidad del Aire en el Valle de México" align="text-right" width="w-[400px]" />
              <SectionDescription text="Es un proyecto de investigación desarrollado por estudiantes del Instituto Politécnico Nacional (IPN) con el objetivo de proporcionar información actualizada sobre la calidad del aire y las condiciones meteorológicas en la Ciudad de México (CDMX)." align="text-right" width="w-[400px]" />
              <LandingButton link={"/login"} text="Explorar" float="float-right" />
            </div>
          </div>
        </div>
      </LandingContainer>
      <LandingContainer color="bg-white">
        <div className='flex flex-row justify-center items-center mb-16'>
          <hr className='border-[6px] border-black w-[50%] rounded-full ' />
          <SectionTitle text="Escuelas involucradas en el desarrollo"
            background="bg-transparent"
            width="w-[355px]"
            align="text-center"
            marginX="mx-[50px]"
          />
          <hr className='border-[6px] border-black w-[50%] rounded-full' />

        </div>
        <div className='flex flex-row justify-center space-x-[190px] '>
          <LandingLogoContainer>
            <LandingLogo href="https://escom.ipn.mx/" src={escomLogo} />
          </LandingLogoContainer>
          <LandingLogoContainer>
            <LandingLogo href="https://upiita.ipn.mx/" src={upiitaLogo} />
          </LandingLogoContainer>
          <LandingLogoContainer>
            <LandingLogo href="https://cecyt9.ipn.mx/" src={cecyt9Logo} />
          </LandingLogoContainer>
        </div>
      </LandingContainer>
      <LandingFooter />
    </div>
  )
}

export default LandingPage