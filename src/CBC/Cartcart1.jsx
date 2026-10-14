import React, { Component } from 'react'
import CartCartbox1 from './CartCartbox1'
import CartCartbox2 from './CartCartbox2'
import CartCartbox3 from './CartCartbox3'

export default class Cartcart1 extends Component {
  render() {
    return (
      <div className='cartcart1'>
        <CartCartbox1></CartCartbox1>
        <CartCartbox2></CartCartbox2>
        <CartCartbox3></CartCartbox3>
      </div>
    )
  }
}
