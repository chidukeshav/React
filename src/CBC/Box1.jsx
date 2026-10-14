import React, { Component } from 'react'
import Innerbox1 from './Innerbox1'
import Innerbox2 from './Innerbox2'

export default class Box1 extends Component {
  render() {
    return (
      <div id="box1">
        <Innerbox1></Innerbox1>
        <Innerbox2></Innerbox2>
      </div>
    )
  }
}
