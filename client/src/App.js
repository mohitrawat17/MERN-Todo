import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const App = () => {
    const dark={
        backgroundColor: 'bg-black',
        textColor:"text-orange-200"
    }
  return (
    <div className={`min-h-screen ${dark.backgroundColor} ${dark.textColor} p-5`}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
