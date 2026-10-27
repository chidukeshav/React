import React from 'react'
import Printdata from './Printdata'

const SideVideos = ({max,play}) => {
    // console.log(play);
    
  return (
    <div id='SideVideos'>
        <Printdata max={max} play={play}></Printdata>
    </div>
  )
}

export default SideVideos