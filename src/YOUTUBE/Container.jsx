import React from 'react'
import Video from './Video'
import Printdata from './Printdata';

const Container = ({max,lio,mac}) => {
  //console.log(max,lio);
  
  return (
    <div>
      <article>
        <Video lio={lio}></Video>

      </article>

      <article>
       
{
   max.map((data)=>{
          //console.log(data);
         return <Printdata data={data} mac={mac}></Printdata>
        })
}
        
      
      </article>
    </div>
  )
}

export default Container