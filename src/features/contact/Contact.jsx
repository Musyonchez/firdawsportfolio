import React from 'react'
import './contact.css'
import contactimage from '../../images/contactimage.png'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <div className='contact-text'>
          <div className='contact-title'>
            <h5>Designer</h5>
            <h6>Firdaws Alnuur</h6>
          </div>
          <ul>
            <li>
                <h4>INSTAGRAM:</h4>
                <p><a href="https://www.instagram.com/firdaws_m.25" target="_blank">@firdaws_m.25</a></p>
            </li>
            <li>
                <h4>BEHANCE:</h4>
                <p><a href="https://www.behance.net/firdawsalnuur" target="_blank">firdawsalnuur</a></p>
            </li>
            <li>
                <h4>LINKEDIN:</h4>
                <p><a href="https://bit.ly/3LxGusX" target="_blank">bit.ly/3LxGusX</a></p>
            </li>
            <li>
                <h4>GMAIL:</h4>
                <p><a href="mailto:firdawsalnuur20@gmail.com">firdawsalnuur20@gmail.com</a></p>
            </li>
          </ul>
        </div>
        <div className='contact-image'>
          <img src={contactimage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact