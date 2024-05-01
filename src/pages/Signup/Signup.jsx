import React from 'react'
import SquareContainer from '../../components/SquareContainer'
import SignupChildren from '../../components/SignupChildren'
import loginBackground from '../../../public/imgSignUp.svg'
const float = "left"
const borderRadius = "10px 0 0 10px" 
function Signup() {
  return (
    <div className="bg-[url('../public/b-login.svg')] bg-no-repeat bg-cover ">
      <SquareContainer background={`url(${loginBackground})`} float={`${float}`} borderRadius={`${borderRadius}`}>
            <SignupChildren/>
        </SquareContainer>
    </div>
  )
}

export default Signup