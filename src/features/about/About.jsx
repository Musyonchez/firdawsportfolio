import React from 'react'
import './about.css';
import aboutimage from '../../images/aboutimage.png'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <div className='about-title'>
          <h3>About me</h3>
          <img src={aboutimage} alt="" />
        </div>
        <div className='about-text'>
          <p>
            I am Firdaws Alnuur, a passionate UI/UX designer driven by a deep-rooted fascination with the power of design to transform digital experiences. With a keen understanding of user-centric principles and a mastery of industry-standard tools like Figma, Adobe Illustrator, and Photoshop, I am committed to crafting visually captivating and intuitively functional interfaces that seamlessly blend aesthetics and usability.
          </p>
          <p>
            My design philosophy revolves around the unwavering belief that the user is at the heart of every successful digital product. I approach each project with a holistic mindset, meticulously conducting user research, prototyping, and iterative testing to ensure that the final design not only appeals to the eye but also aligns with user expectations and behaviors.
          </p>
          <p>
            I am eager to embark on new design challenges and partner with individuals and organizations who share my passion for creating exceptional digital experiences. If you are seeking a UI/UX designer who puts users first and delivers results that surpass expectations, I invite you to contact me. Let us transform your vision into a reality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About