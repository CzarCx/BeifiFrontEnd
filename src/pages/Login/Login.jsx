import React from 'react'
import SquareContainer from '../../components/SquareContainer'
import LoginChildren from '../../components/LoginChildren'
import loginBackground from '../../../public/imgLogin.svg'
const float = "right"
const borderRadius = "0 10px 10px 0" 

function Login() {
  return (
    <div className="bg-[url('../public/b-login.svg')] bg-no-repeat bg-cover">
      <SquareContainer background={`url(${loginBackground})`} float={`${float}`} borderRadius={`${borderRadius}`}>
        <LoginChildren />
      </SquareContainer>
    </div>

  )
}

export default Login