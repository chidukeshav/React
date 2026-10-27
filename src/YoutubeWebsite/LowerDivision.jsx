import React, { useState } from 'react'
import VideoPlayer from './Mainpart/VideoPlayer'
import SideVideos from './Mainpart/SideVideos'
import video from './Mainpart/Yt.json'

const LowerDivision = () => {
  let [state,setState] = useState(video)
  let [vid,setVid] = useState(video[0]?.videoUrl ?? "")
  function play(current){
    setVid(current)
  }
  return (
    <div id='LowerDivision'>
        <VideoPlayer vid={vid}>
          
        </VideoPlayer>
        <SideVideos play={play} max={state}></SideVideos>
    </div>
  )
}

export default LowerDivision
