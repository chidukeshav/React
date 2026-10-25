import React, { useState } from 'react'
import json from './Video.json'
import Container from './Container'

const Video = () => {

    let[state,setState]=useState(json)

    let[vid,setVid]=useState(null)

    function dinga(meta){
      setVid(meta.videoUrl)
    }
  return (
    <div>
        <Container fun={dinga} max={state} lio={vid}></Container>
    </div>
  )
}

export default Video