import React, { useContext, useState } from 'react'
import { ContextTheme } from './ContextTheme'

const Container = () => {
    let max=useContext(ContextTheme)

    let[state,setState]=useState(true)

    let handleClick=()=>{
            setState(!state)
            let jio=document.getElementById("jio")
    }
  return (
    <div>Container</div>
  )
}

export default Container