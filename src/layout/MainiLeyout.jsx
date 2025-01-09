import React from 'react'
import { Outlet } from 'react-router-dom'
import Menyu from '../components/Menyu'
import Navbar from '../components/Navbar'

function MainiLeyout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Menyu/>
    </div>
  )
}

export default MainiLeyout