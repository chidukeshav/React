import React, { Component } from 'react'
import Cart from './Cart'
export default class Product extends Component {
constructor() {
    super()
    this.state = {
        "Book A": 0,
        "Book B": 0
    }
  } 
  clickhandle=() => {
     this.setState({"Book A":this.state["Book A"]+1})
  } 
   clickhandle1=() => {
    this.setState({"Book B":this.state["Book B"]+1})
  }       
  render() {
    return (

       <div id='product'>
        
        
        
        <article>
            <h3>Product</h3>
            <div className='pro'>
            <h1>{this.state["Book A"]}</h1> 
        
        <h3>Book A <button onClick={this.clickhandle}>AddToCart</button></h3>
        </div>
        <div className='pro'>
            <h1>{this.state["Book B"]}</h1>
        <h3>Book B <button onClick={this.clickhandle1}>AddToCart</button></h3>
        </div>
        </article>
        <Cart></Cart>
    </div>
    )
  }
}
