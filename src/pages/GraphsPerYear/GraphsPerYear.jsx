import React from 'react'
import { Link } from "react-router-dom";
import SideBar from '../../components/Sidebar'
import PageTitle from '../../components/PageTitle'
import PageContainer from "../../components/PageContainer";
import NavDescription from '../../components/NavDescription';
import FiltersContainer from '../../components/FiltersContainer';
import ChartContainer from '../../components/ChartContainer.jsx';

function GraphsPerYear() {
  return (
    <div className="overflow-y-hidden">
      <SideBar />
      <PageContainer>
        <PageTitle text="Gráfica por año" />
        <div className='flex flex-row'>
          <Link to={"/dashboard"}>
            <NavDescription text="Dashboard" color="text-normal-gray" />
          </Link>
          <NavDescription text="/Gráficas por año" color="text-xtrong-gray" />
        </div>
        <FiltersContainer/>
      </PageContainer>
    </div>
  )
}

export default GraphsPerYear