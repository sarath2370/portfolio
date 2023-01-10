import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import '../styles/Home.css';


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, My name is Sarath. </h2>
            <div className='prompt'>
                <p>
                  A Computer Science Student with a passion to learn and create
                </p>
                <a target="_blank" href="https://www.linkedin.com/in/sarath-sajiv-menon2370/"><BsLinkedin/></a>
                
                <a target="_blank" href="https://github.com/sarath2370"><BsGithub/></a>
                
            </div>
        </div>
        <div className='skills'>
              <h1>Skills</h1>
              <ol className='list'>
                <li className="item">
                  <h2>Languages</h2>
                  <span>
                    JavaScript, Java, Python, C, C++, Go, LATex
                  </span>
                </li>
                <li className="item">
                  <h2>Technologies Used</h2>
                  <span>
                    VS Code, Pycharm, PIP, GitHub , NPM, Yarn
                  </span>
                </li>
                <li className="item">
                  <h2>Languages Spoken</h2>
                  <span>
                    English (Fluent), French (Intermediate),Hindi (Intermediate), Malayalam (Spoken)
                  </span>
                </li>
                <li className="item">
                  <h2>Soft Skills</h2>
                  <span>
                    Public Speaking, Team Player, Organised
                  </span>
                </li>
                
              </ol>
        </div>
    </div>
  )
}

export default Home
