import React from 'react'
import Cart from './Cart'
import Logo from './Logo'
import Home from '../CBC/Home'

const Nav = () => {
  return (
    <div>
       <nav id='nav'>
        <Logo></Logo>
        <Cart></Cart>
        <Home></Home>
       </nav>
    </div>
  )
}

export default Nav