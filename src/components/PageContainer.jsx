import React from 'react'

function PageContainer(props) {
  return (
    <div  className="flex-grow flex flex-col items-start justify-start p-20  h-screen ">
        {props.children}
    </div>
  )
}

export default PageContainer