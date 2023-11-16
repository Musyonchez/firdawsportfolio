import React from 'react';
import './footer.css';
import dribbleicon from '../../images/dribbbleicon.png';
import instagramicon from '../../images/instagrramicon.png';
import footerimage from '../../images/footerimage.png';

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
          <button className='button1'>
            <a href="https://dribbble.com/emon_pixels" target="_blank" rel="noopener noreferrer">
              <img src={dribbleicon} alt="" />
              <p>
                dribbble.com/ <br/> emon_pixels
              </p>
            </a>
          </button>
          <button className='button2'>
            <a href="https://instagram.com/emon.pixels/" target="_blank" rel="noopener noreferrer">
              <img src={instagramicon} alt="" />
              <p>
                Instagram.com/ <br/> emon.pixels/
              </p>
            </a>
          </button>
        </div>
      </div>
      <div className='footer-image'>
        <img src={footerimage} alt="" />
      </div>
    </div>
  );
}

export default Footer;
