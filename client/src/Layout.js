import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const dark={
    backgroundColor: 'bg-black',
    textColor:"text-orange-200"
}


  return (
    <div className={`min-h-screen ${dark.backgroundColor} ${dark.textColor} p-5`}>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
