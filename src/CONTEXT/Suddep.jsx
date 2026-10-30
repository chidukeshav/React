import React from 'react'
import { ContextApi } from './ContextApp'

const Suddep = () => {
  return (
    <div>
        
        <ContextApi.Consumer>
           {
            (data)=>{
                    console.log(data);
           }
           }
        </ContextApi.Consumer>
    </div>
  )
}

export default Suddep