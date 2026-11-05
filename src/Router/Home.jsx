import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Cart from "./Cart"

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">HOME PAGE</Link>
            </li>
             <li>
                <Link to="/login">LOGIN PAGE</Link>
            </li>
             <li>
                <Link to="/product"> PRODUCT</Link>
            </li>
            <li>
                <Link to="/cart">CART PAGE</Link>
            </li>
        </ul>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Home