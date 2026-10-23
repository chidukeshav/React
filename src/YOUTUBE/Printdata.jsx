import React from 'react'

const Printdata = (props) => {
    console.log(props);
    
  return (
    <div>
        <img onClick={()=>{props.mac(props.data.videoUrl)}} width={100} height={100} src={props.data.thumbnailUrl} alt="" />
    </div>
  )
}

export default Printdata