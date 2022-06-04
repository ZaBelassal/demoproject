import React from 'react'
import sheet from "../../icons/sheet.png"
import './Navbar.css'
import {Link , NavLink} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function Navbar(){
   
    return (
      
        <header className="alignImg">
          <img src=""/>
              <a href="#">Logo</a>
          <nav>
            <ul>
              <Link className="alignItems" to="/portfolio"><img src={sheet} alt="sheet" color='secondary'/> Works</Link>
              <Link className="alignItems" to="/resume"><img src={sheet} alt="sheet"/>Resume</Link>
              <Link className="alignItems" to="/shelf"><img src={sheet} alt="sheet"/>Shelf</Link>
              
            </ul>
          </nav>
        </header>
      
    )
  }
  export default Navbar

