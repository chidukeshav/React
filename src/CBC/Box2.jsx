import React, { Component } from 'react'
import Inner2box from './Inner2box'
import Inner2box2 from './Inner2box2'
import Inner2box3 from './Inner2box3'

export default class Box2 extends Component {
  render() {
    return (
      <div id="box2">
        <Inner2box></Inner2box>
        <Inner2box2></Inner2box2>
        <Inner2box3></Inner2box3>
      </div>
    )
  }
}
