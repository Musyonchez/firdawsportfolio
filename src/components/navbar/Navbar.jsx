import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-buttons'>
      <button onClick={() => {
            const homeSection = document.getElementById('home');
            homeSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            Home
          </button>

          <button onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            About
          </button>

          <button onClick={() => {
            const workSection = document.getElementById('work');
            workSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            Work
          </button>
      </div>
    </div>
  )
}

export default Navbar
