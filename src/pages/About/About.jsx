import React from 'react'
import SideBar from '../../components/Sidebar'
import PageTitle from '../../components/PageTitle'
import PageContainer from "../../components/PageContainer";
import NavDescription from '../../components/NavDescription';

function About() {
  return (
    <div>
      <SideBar/>
      <PageContainer>
        <PageTitle text="Acerca de nosotros" />
        <div className='flex flex-row'>
            <NavDescription text="Más información" color="text-normal-gray" />
          <NavDescription text="/Acerca de nosotros" color="text-xtrong-gray" />
        </div>
      </PageContainer>
    </div>
  )
}

export default About