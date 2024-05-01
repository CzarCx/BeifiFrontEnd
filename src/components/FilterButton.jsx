import React from 'react'

function FilterButton() {
  return (
    <div>
        <input className='bg-light-blue w-[100px] h-[50px] rounded-[10px] text-white animate-pulse hover:animate-none duration-1000' type="submit" value="Filtrar" />
    </div>
  )
}

export default FilterButton