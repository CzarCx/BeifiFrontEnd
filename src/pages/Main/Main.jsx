import React, { useState } from 'react'
import { useFirst } from '../../context/FirstContext'


function Main() {
  const { multi } = useFirst()
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [res, setRes] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    const mul = multi(parseInt(num1) , parseInt(num2))
    setRes(mul)
  }
  return (
    <div onSubmit={handleSubmit}>
      <form>
      <input className="bg-strong-blue text-white text-xl rounded-xl" type="number" onChange={(e) => setNum1(e.target.value)} />
      <input type="number" onChange={(e) => setNum2(e.target.value)} />
      <input type="submit" value="Multiplicar" />
      </form>
      { res &&<p>{res}</p>}
    </div>
  )
}

export default Main