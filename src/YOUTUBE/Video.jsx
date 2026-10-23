import React from 'react'

const Video = (play) => {
    // console.log(play.lio);
    
  return (
    <div>
        <video src={play.lio} controls autoPlay muted height={200} width={200}></video>
    </div>
  )
}

export default Video