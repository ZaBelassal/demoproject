import React from 'react'
import './Navbar.css'
import {Link , NavLink} from 'react-router-dom'

function Navbar(){
   
    return (
      
        <header className="alignImg">
            <div>
              <img src=""/>
                  
                  <a className="text-decoration-none fs-4" href="mailto:zakariabelassal@gmail.com"><i className="fa-solid fa-envelope"></i>zakariabelassal@gmail.com</a>
            </div>
            <div>
              <Link className="bgchange text-decoration-none mx-2 fs-4" to="/portfolio"><i className="fa-solid fa-file"></i> Works</Link>
              <Link className="text-decoration-none mx-2 fs-4" to="/resume"><i className="fa-solid fa-user-tie"></i>Resume</Link>
              <Link className="text-decoration-none mx-2 fs-4" to="/shelf"><i className="fa-solid fa-book"></i>Shelf</Link>
            </div>
          
        </header>
      
    )
  }
  export default Navbar

