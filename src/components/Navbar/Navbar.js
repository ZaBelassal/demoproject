import React from 'react'
import './Navbar.css'
import {Link , NavLink} from 'react-router-dom'

function Navbar(){
   
    return (
      
        <header className="alignImg">
          <img src=""/>
              <a href="#">Logo</a>
          <nav>
            <ul>
              <Link className="alignItems" to="/">Works</Link>
              <Link className="alignItems" to="/works">Resume</Link>
              <Link className="alignItems" to="/resume">Resume</Link>
            </ul>
          </nav>
        </header>
      
    )
  }
  export default Navbar

