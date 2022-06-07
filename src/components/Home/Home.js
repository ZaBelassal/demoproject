// import React from 'react'
import { useState } from 'react';
import './Home.css'
import BusinessMan from '../../icons/businessMan.png'
import 'animate.css';
import { useMousePosition } from "./useMouse";

function Home(){

  const position = useMousePosition();

        // console.log(mode)
  // }
  // const [MousePosition, setMousePosition] = useState({
  //   left: 0,
  //   top: 0
  //   })
  //   const cursor = document.querySelector(".cursor")
  //   cursor.onmousemove = function(event) {
  //   setMousePosition({
  //   left: event.pageX,
  //   top: event.pageY
  //         });
  //     }
    

  // const handleChange = (e) => {
  //   console.log("e", e.pageX);
  //   setMousePosition({
  //     left: position.x,
  //     top: position.y
  //   });
  // };

    return (
        <div className='overflow-hidden'>
        <section>
            <div className='container'>
              <div className='row overflow-hidden'>
                <div className='col-md-1 my-5 py-5 position-relative' style={{left:"-40px",top:"160px"}}>
                    <ul>
                    
                      <li className='list-unstyled fs-2 px-0'>
                          <a className="text-secondary" href="https://www.linkedin.com/in/zakaria-belassal-036a03153/" target="_blank" alt="link" title="myLinkedin">
                          <i className="fa-brands fa-linkedin"></i></a>
                      </li>

                      <li className='list-unstyled fs-2'>
                        <a className="text-secondary" href="https://github.com/ZaBelassal" target="_blank" alt="githubProfile">
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </li>

                      <li className='list-unstyled fs-2'>
                        <a className="text-secondary" href="https://twitter.com/ELMAHDI05" target="_blank" alt="githubProfile">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                </div>
                <div className="col-md-3 my-5 py-5">
                  <div className="animate__animated animate__heartBeat">
                    <div className='btn btn-dark color-white fs-2 p-2'>
                      It's me
                    </div>
                    <div className="arrow-down"></div>
                  </div>
                    <h2 className='my-4 name'><b>
                            <span className='letterZ animate__animated animate__zoomIn delay1'>Z</span>
                            {/* <div className="cursor" style={{left: position.x + "px",top: position.y + "px"}}></div> */}
                            <span className='animate__animated animate__zoomIn delay2'>a</span>
                            <span className='animate__animated animate__zoomIn delay3'>k</span>
                            <span className='animate__animated animate__zoomIn delay4'>a</span>  
                            <span className='animate__animated animate__zoomIn delay5'>r</span>  
                            <span className='animate__animated animate__zoomIn delay6'>i</span> 
                            <span className='animate__animated animate__zoomIn delay7'>a</span> 
                            <br/>
                            <span className='mx-5'>
                              <span className='animate__animated animate__zoomIn delay8'>B</span>
                              <span className='animate__animated animate__zoomIn delay9'>e</span>
                              <span className='animate__animated animate__zoomIn delay10'>l</span>
                              <span className='animate__animated animate__zoomIn delay11'>a</span>
                              <span className='animate__animated animate__zoomIn delay12'>s</span>
                              <span className='animate__animated animate__zoomIn delay13'>s</span>
                              <span className='animate__animated animate__zoomIn delay14'>a</span>
                              <span className='animate__animated animate__zoomIn delay15'>l</span>
                              </span>
                            </b>
                            </h2>
                    <div className="animate__animated animate__fadeInDownBig animationDelay">
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
              <div className="cursor overflow-hidden" style={{left: position.x + "px",top: position.y + "px"}}></div>
            </div>
        </section>
       </div>      
    )
  }
  export default Home

