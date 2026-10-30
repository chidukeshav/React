import React, { use, useContext } from 'react'
import { ContextApi } from './ContextApp'


const Magic = () => {
    let max = useContext(ContextApi)
    console.log(max);
    
  return (
    <div>
     
    </div>
  )
}

export default Magic