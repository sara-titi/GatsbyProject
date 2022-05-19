import React from 'react'
import Navbar from "./Navbar"
import '../styles/global.css'
export default function Layout({children}) {
    //to wrap all pages 
  return (
    <div>
        <Navbar />
        <div className='content'>
            {/* content for each page */}
            {children}
        </div>
        <div>
            <h2  className='copyWite'>copywrite @2022  </h2>
        </div>

    </div>
  )
}
