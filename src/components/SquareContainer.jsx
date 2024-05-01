import React from 'react';

function SquareContainer(props) {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-large h-medium bg-white rounded-3xl drop-shadow-md">
        <div style={{ backgroundImage: props.background, float: props.float, borderRadius: props.borderRadius }} className="w-1/2  h-medium rounded-3xl rounded-l-none bg-cover bg-no-repeat">
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default SquareContainer;