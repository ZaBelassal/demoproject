import React from 'react'
import './Navbar.css'
import {Link , NavLink} from 'react-router-dom'
import BusinessMan from '../../icons/businessMan.png'
import 'animate.css';

function Navbar(){
   
    return (
        <div>
        <header className="alignImg">
            <div>
              <img src=""/>
                  
                  <a className="bgchange text-decoration-none fs-4" href="mailto:zakariabelassal@gmail.com"><i className="fa-solid fa-envelope"></i>zakariabelassal@gmail.com</a>
            </div>
            <div>
              <Link className="bgchange text-decoration-none mx-2 fs-4" to="/portfolio"><i className="fa-solid fa-file mx-2"></i> Works</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-4" to="/resume"><i className="fa-solid fa-user-tie mx-2"></i>Resume</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-4" to="/shelf"><i className="fa-solid fa-book mx-2"></i>Shelf</Link>
            </div>
          
        </header>

        <section>
            <div className='container'>
              <div className='row overflow-hidden'>
                <div className='col-md-1 my-5 py-5'>
                    <ul>
                      <li><i class="fa-brands fa-linkedin"></i></li>
                      <li><i class="fa-brands fa-github"></i></li>
                      <li><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                </div>
                <div className="col-md-3 my-5 py-5">
                    <div className='btn btn-secondary color-white fs-2 animate__animated animate__fadeInDownBig'>
                      It's me
                    </div>
                    <h2 className='my-4 name'><b>Zakaria <span className='mx-5'>Belassal</span></b></h2>
                    <div>
                    Full Stack developer @me <br/>( JS React || Angular || Node.js || PHP Laravel )
                      <div> Javascript enthusiast</div> 
                      <div>Technologies Buffer Always learning</div> 
                      <span>Football Fan</span>
                    </div>
                </div>
                <div className="col-md-8 my-5 py-5 justify-content-start">
                    <img src={BusinessMan} alt="businessMan" height="500px" width="850px" style={{position:"absolute",zIndex:2}}/> 
                </div>
              </div>
            </div>
        </section>
       </div>      
    )
  }
  export default Navbar

