import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className='dflex'>
        <div className="letterZ">
            <div className="letterZ0">Z</div>
            <div className="letterZ1">Z</div>
        </div>
        <div>
              <Link className="bgchange text-decoration-none mx-2 fs-5 p-2" to="/portfolio"><i className="fa-solid fa-file mx-2"></i> Works</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-5 p-2" to="/resume"><i className="fa-solid fa-user-tie mx-2"></i>Resume</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-5 p-2" to="/shelf"><i className="fa-solid fa-book mx-2"></i>Shelf</Link>
        </div>
      </div>
      <div className='pb-5'>
        <div className="first-div"></div>
        <div className="second-div"></div>
        <div className="third-div"></div>
        <div className="forth-div"></div>
      </div>
    </div>
  )
}

export default Footer