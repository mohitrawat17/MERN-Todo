import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './HomePage'
import Register from './Register'
import Login from './Login'
import Body from './Body'

const App = () => {

  const appRouter=createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:"/home",
          element:<Body/>
        }
      ]
    }
  ])
    
  return (
    <div >
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
