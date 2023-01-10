import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <BsLinkedin />
            <BsGithub />
        </div>
        <p> &copy; 2022 sarathsmenon.com </p>
    </div>
  )
}

export default Footer