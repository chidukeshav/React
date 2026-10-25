// import React, { Fragment } from 'react'

// const User = (props) => {
//     console.log(props);
    
//   return (
//     <div >
//         {
//         props.lio.users.map((magic)=>{
//             console.log(magic);
//            return <Fragment>
//             <img src={magic.image} alt="" />
//             <h1 >{magic.id}</h1>
//             <h3>{magic.firstName}</h3>
//             <h5>{magic.role}</h5>
//            </Fragment>
            
//         })
//         }
//     </div>
//   )
// }

// export default User

import React, { Fragment } from 'react'

const User = (props) => {
  return (
    <div>{
          props.lio.users.map((magic)=>{
            console.log(magic);
            return <Fragment>
              <img src={magic.image} alt="" />
             
            </Fragment>
            
          })
    }</div>
  )
}

export default User