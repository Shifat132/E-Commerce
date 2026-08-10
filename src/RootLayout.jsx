import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { Outlet } from 'react-router'
import NavBar from './components/NavBar'

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
