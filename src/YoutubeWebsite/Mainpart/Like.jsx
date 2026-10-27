import React, { use, useState } from 'react'

const Like = () => {
  let [state,setstate]= useState(0)
  let handleclick=()=>{
    setstate(state+1)
  }
  return (
    <div onClick={handleclick} id='Like'><h1>{state}</h1></div>
  )
}

export default Like