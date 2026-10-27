import React from 'react'
import Hoc from './Hoc'

const Data = (props) => {
  console.log(props);
  
  return (
    <div>Data</div>
  )
}

export default Hoc(Data)