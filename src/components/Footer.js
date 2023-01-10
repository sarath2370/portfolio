import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <a target="_blank" href="https://www.linkedin.com/in/sarath-sajiv-menon2370/"><BsLinkedin/></a>
            
            <a target="_blank" href="https://github.com/sarath2370"><BsGithub/></a>
        </div>
        <p> &copy; 2022 sarathsmenon.com </p>
    </div>
  )
}

export default Footer
