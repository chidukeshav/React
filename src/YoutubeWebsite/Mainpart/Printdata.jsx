import React from 'react'

const Printdata = ({ max, play }) => {
  return (
    <div className='VideoList'>
      {max.map((e) => {
        return (
          <div className='SideVideos1' key={e.id} onClick={() => play(e.videoUrl)}>
            <img src={e.thumbnailUrl} alt={e.title} />
            <h3>{e.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Printdata
