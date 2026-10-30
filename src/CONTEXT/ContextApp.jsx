import React, { Children, createContext } from 'react'

export let ContextApi=createContext()


let Rajajinagar=({children})=>{
    return <ContextApi.Provider value={{leo:"Chidu"}}>
{children}
        
    </ContextApi.Provider>
}
export default Rajajinagar