import React from 'react'

const Videoplayer = ({mac}) => {
  // console.log(mac);
  
  return (
    <div>
      <video height={400} width={800} controls autoPlay src={mac}></video>
    </div>
  )
}

export default Videoplayer