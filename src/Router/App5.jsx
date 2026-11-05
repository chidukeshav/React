import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Cart from './Cart'
import Product from './Product'
import Cosmetics from './Cosmetics'

let router=createBrowserRouter(
        [
            {
                path:"/",
                element:<Home></Home>,
                children:[
                    {
                        path:"/login",
                        element:<Login></Login>
                    },
                    {
                    path:"/cart",
                    element:<Cart></Cart>
                    },
                    {
                        path:"/product",
                        element:<Product></Product>,
                        children:[
                            {
                                    path:"/product/cosmetics",
                                    element:<Cosmetics></Cosmetics>
                            }
                        ]
                    }
                ]
            }
        ]
    )
const App5 = () => {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App5