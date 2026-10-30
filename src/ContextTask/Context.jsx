import React, { createContext } from 'react'

export let Context=createContext()

let count=()=>{
   return <Context.Provider value={{}}>

   </Context.Provider>
}
export default count