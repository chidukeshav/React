// import React,{Component} from "react";
// import Nav from "./CBC/Nav";
// import "./app.css"
// export default class App extends Component{
//   render(){
//     return(
//       <div>
//         <Nav>

//         </Nav>
//       </div>
//     )
// }
// }


// *****************************************************************
// import React from 'react'
// import "./app.css"
// import Nav from './FBC/Nav'

// const App = () => {
//   return (
//     <div>
//       <Nav id='nav'>
        
//       </Nav>
//     </div>
//   )
// }

// export default App
// *****************************************************************************

//States
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       subject:"JAVASCRIPT"
//     }
//   }
//   handleClick=()=>{
//     this.setState({subject:"REACTJS"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.subject}</h1>
//         <button onClick={this.handleClick}>CLICK</button>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   handleClick=()=>{
//     this.setState({count:this.state.count+1})
//  if(this.state.count>=0&&this.state.count<=5){
//       document.body.style.background="red"
//     }
//      if(this.state.count>=6&&this.state.count<=10){
//       document.body.style.background="blue"
//     }
//      if(this.state.count>=11){
//       document.body.style.background="green"
//     }
//   }
//    handleClick1=()=>{
//     this.setState({count:this.state.count-1})
//     if(this.state.count>=0&&this.state.count<=5){
//       document.body.style.background="red"
//     }
//      if(this.state.count>=6&&this.state.count<=10){
//       document.body.style.background="blue"
//     }
//      if(this.state.count>=11){
//       document.body.style.background="green"
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Increment</button>
//         <button onClick={this.handleClick1}>Decrement</button>
//       </div>
//     )
//   }
// }
// ***********************************************************
// import React, { Component } from 'react'
// import ON from './photos/on.jpg'
// import OFF from './photos/off.jpg'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       bulb:OFF
//     }
    
//   }
//   handleBulb=()=>{
//     this.setState({bulb:ON})
//   }
//   handleBulb1=()=>{
//     this.setState({bulb:OFF})
//   }

//   render() {
//     return (
//       <div>
//         <img height={200} width={200} src={ this.state.bulb} alt="" />
//         <button onClick={this.handleBulb}>on</button>
//         <button onClick={this.handleBulb1}>Of</button>
//       </div>
//     )
//   }
// }
// ***********************************************************************
// import React, { Component } from 'react'
// import VIDEO from './Video/virat.mp4'
// import { FaGooglePlay } from "react-icons/fa";
// import { FaPauseCircle } from "react-icons/fa";
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       video:true
//     }
//   }
//   handleplay=()=>{
//     this.setState({video:!this.state.video})
//     this.max=document.getElementById("max")
//     if(this.state.video==true){
//       this.max.play()
  
//     // this.setState({video:VIDEO})
//   }
//   else{
//     this.max.pause()
//   }
// }
//   render() {
//     return (
//       <div>
//        <video id="max" height={300} width={150} src={VIDEO}></video>
//         <button onClick={this.handleplay}>
//           {this.state.video ? <FaGooglePlay></FaGooglePlay>:< FaPauseCircle ></FaPauseCircle>}
//         </button>
//       </div>
//     )
//   }
// }
// *******************************************************************
// import React, { useState } from 'react'

// const App = () => {
//   let [state,setState]=useState("JAVASCRIPT")
//   let handleClick=()=>{
//     setState("REACT")
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App
// *******************************************************************




// import React, { useState } from 'react'

// const App = () => {
//   let[state,setState]=useState(0)
//   let handleClick=()=>{
//     setState(state+1)
//   }
//   let handleClick1=()=>{
//     setState(state-1)
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleClick}> Increment</button>
//       <button onClick={handleClick1}>Decrement</button>

//     </div>
//   )
// }

// export default App

// ****************************************************************************



// import React, { use, useState } from 'react'
// import VID from "./Video/virat.mp4"
// const App = () => {
//     let[state,setState]=useState(true)
//         let handleplay=()=>{
//             setState(!state)
//             let max=document.getElementById("max")
//             if(state){
//                 max.play()
                
//             }
//             else{
//                 max.pause()
//             }
//         }
    
//   return (
//     <div>
//         <video id='max' width={150} height={330} src={VID}></video>
//         <button onClick={handleplay}>pause</button>
//     </div>
//   )
// }
// ************************************************************




// import React, { useState } from 'react'
// import "./app.css"

// const App = () => {

//     let[state,setState]=useState(null)
//     let red=(e)=>{
//         e.stopPropagation()
//         setState('red')
//         x.innerHTML='red'
//     }
//      let blue=(e)=>{
//         e.stopPropagation()
//         setState('green')
//         x.innerHTML='green'
//     }
//      let green=(e)=>{
//         e.stopPropagation()
//         setState('blue')
//         x.innerHTML='blue'
//     }

//   return (
//      <div id='black'>
//         <div id='container'>
//             <div className='box1'>
//                 <div onClick={red}  className='inbox1'>
                    
                    
//                 </div>
//                 <div onClick={blue} className='inbox2'>
                    
//                 </div>
//                 <div onClick={green} className='inbox3'>
                    
//                 </div>
//             </div>
//             <div style={{ backgroundColor: state }} className='box2'>

//             </div>
//         </div>
//     </div>
//   )
// }
// export default App


// import React, { useState } from 'react'
// import "./app.css"

// const Task2 = () => {
//     let [color,setColor] = useState('')
//     let handlekey = (e)=>{
       
      


//         setColor(e.target.value)
//     }
//   return (
//     <div id='container' style={{backgroundColor:color}}>
//         <input type="text" name="" id="inp" onKeyUp={handlekey}/>
//     </div>
//   )
// }
// export default Task2





// ********************************************************************************
//props
// import React from 'react'
// import Userdata from './props/Userdata'
// import USER from './props/User.json'

// const App = () => {
//   return (
//     <div>
//       <Userdata max={USER}></Userdata>
//     </div>
//   )
// }
// export default App

import React from 'react'
import Userdata from './props/Userdata'
import USER from './props/User.json'


const App = () => {
  return (
    <div>
      <Userdata max={USER}></Userdata>
    </div>
  )
}

export default App




// ***********************************************************************
// import React, { useState } from 'react'
// import json from './video.json'
// import Container from './YOUTUBE/Container'

// const App = () => {
//   let[state,setState]=useState(json)
//   let[vid,setVid]=useState(null)
//   function mac(ma){
//     setVid(ma)
    // alert(ma)
    
//   }
//   return (
//     <div>
//       <Container mac={mac} max={state} lio={vid}></Container>
//     </div>
//   )
// }

//export default App

//CBC
// ---------------------------------------------------------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       count:0
//     }
//   }
//     handleclick=()=>{
//       this.setState({count:this.state.count+1})
//     }
//     // componentDidMount=()=>{
//     //   alert("hiii")
//     // }
//     // componentDidUpdate=()=>{
//     //   alert("hello")
//     // }
//     componentWillUnmount=()=>{
//       alert("hhhhhh")
//     }
//   render() {

//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleclick}>click</button>
//       </div>
//     )
//   }
// }
// ***********************************
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       delete:false

//     }

//   }
//   render() {
//     return (
//       <div>
//         <h1>magic:</h1>
//         <button onClick={()=>{this.setState({delete:true})}}> Delete All</button>
//         {
//           this.state.delete==true?null:<Data></Data>
//         }
//       </div>
//     )
//   }
// }
// class Data extends Component{
//   componentWillUnmount=()=>{
//     alert("i will delete")
//   }
//   render(){
//     return(
      
//         <div>
//           <h1>name is chidu</h1>
//         </div>
//     )
//   }
// }
// ****************************************************
// import React, { Component } from 'react'
// import Product from './WORK1/Product'

// export default class 
// hi extends Component {
//   render() {
//     return (
//       <div>
//         <Product></Product>
//         <Product></Product>
//         <Product></Product>
//       </div>
//     )
//   }
// }
// **************************************************************
// //Practice 
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       subject:"JavaScript"

//     }

//   }
//  handleclick=()=>{
//       this.setState({subject:"React"})
//  }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.subject}</h1>
//         <button onClick={this.handleclick}>Click</button>
//       </div>
//     )
//   }
// }


