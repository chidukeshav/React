import React, { useState } from 'react'

const Dislike = () => {
    let [state,setstate]= useState(0)
    let handleclick=()=>{
      setstate(state+1)
    }
  return (
    <div onClick={handleclick} id='Dislike'><h1>{state}</h1></div>
  )
}

export default Dislike