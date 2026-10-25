import React, { Fragment } from 'react'

const User3 = (props) => {
    console.log(props);
    
  return (
    <div>{
        props.max.users.map((e)=>{
            return <Fragment>
                <img src={e.image} alt="" />
            </Fragment>
        })

    }</div>
  )
}

export default User3