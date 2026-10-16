import React from 'react'
import User from './User'

const Userdata = (props) => {
    console.log(props);
    
  return (
    <div>
        <User lio={props.max}></User>
    </div>
  )
}

export default Userdata