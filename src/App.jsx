import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './PAGE/Layout'
import Home from './PAGE/Home'
import About from './PAGE/About'
import Contact from './PAGE/Contact'
import Login from './PAGE/Login'
import Service from './PAGE/Service'
import Register from './PAGE/Register'


const App = () => {
  const router = createBrowserRouter([
    {
      path :'/',
      element:<Layout />,
      children :[
        {path:"/", element:<Home />    },
        {path:"/About", element:<About />    },
        {path:"/Service", element:<Service />    },
        {path:"/Contact", element:<Contact />    },
        {path:"/Login", element:<Login />    },
        {path:"/Register", element:<Register />    },
        { path: '*', element: <Navigate to='/'/> }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
