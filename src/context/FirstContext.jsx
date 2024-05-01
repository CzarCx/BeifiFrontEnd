import { createContext, useContext, useState } from "react";

export const FirstContext = createContext()
export const useFirst = () => {
    const context = useContext(FirstContext)
    if (!context){
        throw new Error("useFirst must be in authprovider")
    } 
    return context
} 
function FirstProvider({
    children
}) {
    const suma = (int1 , int2) =>{
        return int1 + int2
    }
    const multi = (int1 , int2) =>{
        return int1 * int2
    }
    
  return (
    <FirstContext.Provider value={{
        hola:"Sexo gratis",
        suma,
        multi
    }}>
        {children}
    </FirstContext.Provider>
  )
}

export default FirstProvider