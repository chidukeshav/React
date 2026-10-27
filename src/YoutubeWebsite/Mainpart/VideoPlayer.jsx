import React from 'react'
import Like from './Like'
import Dislike from './Dislike'

const VideoPlayer = ({ vid }) => {
  return (
    <div id='VideoPlayer'>
      <video key={vid} autoPlay controls src={vid}></video>
      <div id='liked'>
        <Like></Like>
        <Dislike></Dislike>
      </div>
    </div>
  )
}

export default VideoPlayer
