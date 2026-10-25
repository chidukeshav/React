import React from 'react'

const Printdata = (props) => {
  // console.log(props);
  
  return (
    <div>
      <div onClick={()=>{props.fun(props.magic)}}>
      <img height={300} width={300} src={props.magic.thumbnailUrl} alt="" />
      <p>{props.magic.title}</p>
      </div>
    </div>
  )
}

export default Printdata