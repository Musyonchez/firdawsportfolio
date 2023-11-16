import React from 'react'
import './header.css'
import Navbar from '../../components/navbar/Navbar'
import heroimage from '../../images/heroimage.png'

const Header = () => {
  return (
    <div className='header-container' id='about'>
        <Navbar />
        <div className='header-content'>
          <div className='header-text'>
            <h2>Hi!! ...Am </h2>
            <h2>Firdaws Al-Nuur</h2>
            <p>UI/UX designer</p>
          </div>
          <div className='header-image'>
            <img src={heroimage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Header
