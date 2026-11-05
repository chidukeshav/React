import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
     <li>
       <Link to="/product/cosmetics">COSMETICS</Link>
     </li>
     <div>
      <Outlet></Outlet>
     </div>
    </div>
  )
}

export default Product