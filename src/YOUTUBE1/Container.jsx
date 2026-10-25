import React from 'react'
import Printdata from './Printdata'
import Videoplayer from './Videoplayer'

const Container = ({max,lio,fun}) => {
  // console.log(fun);
  
  return (
    <div>
        <article>
            <aside>
              <Videoplayer mac={lio}></Videoplayer>

            </aside>
            <aside>{
              max.map((data)=>{
                //console.log(data);
                return <Printdata fun={fun} magic={data}></Printdata>
                
                
              })
            }
            </aside>
        </article>
    </div>
  )
}

export default Container