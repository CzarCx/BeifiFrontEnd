import React from 'react'
import DropDown from './DropDown'
import FilterButton from './FilterButton'

function FiltersContainer() {
  return (
    <div>
        <form className='flex flex-row justify-center items-center w-full mt-10'>
        <DropDown text="Elige un año"/>
        <DropDown text="Elige la categoría"/>
        <DropDown text="Elige el tipo de gráfica"/>
        <FilterButton/>
        </form>
    </div>
  )
}

export default FiltersContainer