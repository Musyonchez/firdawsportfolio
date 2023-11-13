import React from 'react'
import './work.css'
import workimage1 from '../../images/workimage1.png'
import workimage2 from '../../images/workimage2.png'
import workimage3 from '../../images/workimage3.png'
import workimage4 from '../../images/workimage4.png'

const Work = () => {
  return (
    <div class="work-container">
        <p>My work</p>
      <div class="work-item">
      <img src={workimage1} alt="" className="image1" />
      </div>
      <div class="work-item">
      <img src={workimage2} alt="" className="image2" />
      </div>
      <div class="work-item">
      <img src={workimage3} alt="" className="image3" />

      </div>
      <div class="work-item">
      <img src={workimage4} alt="" className="image4" />
      </div>
    </div>
  )
}

export default Work