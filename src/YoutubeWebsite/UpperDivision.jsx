import React from 'react'
import Hamburgeroption from './upperpart/Hamburgeroption'
import Logo from './upperpart/Logo'
import Searchbar from './upperpart/Searchbar'
import Mic from './upperpart/Mic'
import Create from './upperpart/Create'
import Notify from './upperpart/Notify'
import Profile from './upperpart/Profile'

const UpperDivision = () => {
  return (
    <div id='nav'>
        <Hamburgeroption></Hamburgeroption>
        <Logo></Logo>
        <Searchbar></Searchbar>
        <Mic></Mic>
        <Create></Create>
        <Notify></Notify>
        <Profile></Profile>
    </div>
  )
}

export default UpperDivision