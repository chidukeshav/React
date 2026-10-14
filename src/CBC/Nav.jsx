import React, { Component } from "react";
import Logo from "./Logo";
import Cart from "./Cart";
import Home from "./Home";




export default class Nav extends Component{
    render(){
        return(
            <div>
                <nav id="nav">
                    <Logo></Logo>
                    <Cart></Cart>
                    <Home></Home>

                </nav>
            </div>
        )
    }
}