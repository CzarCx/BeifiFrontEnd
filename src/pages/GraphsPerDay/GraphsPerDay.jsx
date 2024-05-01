import React from 'react'
import SideBar from '../../components/Sidebar'
import PageTitle from '../../components/PageTitle'
import PageContainer from "../../components/PageContainer";
import ShortDescription from '../../components/ShortDescription';
import NavDescription from '../../components/NavDescription';
import ChartContainer from '../../components/ChartContainer.jsx';
import FiltersContainer from '../../components/FiltersContainer';
import DropDown from '../../components/DropDown';
import { Link } from "react-router-dom";

function GraphsPerDay() {
  return (
    <div className="overflow-y-hidden">
      <SideBar />
      <PageContainer>
        <PageTitle text="Gráfica por día" />
        <div className='flex flex-row'>
          <Link to={"/dashboard"}>
            <NavDescription text="Dashboard" color="text-normal-gray" />
          </Link>
          <NavDescription text="/Gráficas por día" color="text-xtrong-gray" />
        </div>
        <FiltersContainer/>
        <ChartContainer/>
      </PageContainer>
    </div>
  )
}

export default GraphsPerDay