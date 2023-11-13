import React from 'react'
import './footer.css'
import dribbleicon from '../../images/dribbbleicon.png'
import instagramicon from '../../images/instagrramicon.png'
import footerimage from '../../images/footerimage.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <h2>Thank You</h2>
        <h2>For Your Time!</h2>
        <div className='footer-content'>
          <p>
            Follow me for <br/> more
          </p>
          <button>
              <img src={dribbleicon} alt="" />
              <p>
              dribbble.com/ <br/> emon_pixels
              </p>
          </button>
          <button>  
              <img src={instagramicon} alt="" />
              <p>
              Instagram.com/ <br/> emon.pixels/
              </p>
          </button>
        </div>
        </div>
        <div className='footer-image'>
          <img src={footerimage} alt="" />
        </div>
    </div>
  )
}

export default Footer