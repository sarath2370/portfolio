import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import {AiOutlineBars} from 'react-icons/ai'


function Navbar() {
    const[expandNavbar , setExpandNavbar] = useState(false);

    const location = useLocation();
    
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])


  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button
                onClick={() =>{
                    setExpandNavbar((prev) => !prev);
                }}
            >
                <AiOutlineBars />
            </button>
        </div>
        <div className='links'>
            <Link to="/portfolio/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar