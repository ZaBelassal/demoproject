// import React from 'react'
import { useState } from 'react';
import './Home.css'
import BusinessMan from '../../icons/businessMan.png'
import 'animate.css';
import { useMousePosition } from "./useMouse";
import desktop from '../../pictures/desktop.png'
import desktopScreen from '../../pictures/desktopScreen.png'
import desktopTable from '../../pictures/desktopTable.png'
import dashboard1 from '../../pictures/dashboard1.png'
import dashboard2 from '../../pictures/dashboard2.png'
import dashboard3 from '../../pictures/dashboard3.png'
import dashboard4 from '../../pictures/dashboard4.png'

function Home({style}){

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
                    <h2 className='mt-4 name'><b>
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
                    <div className="mt-2 animate__animated animate__fadeInDownBig animationDelay lh-base">
                    Full Stack developer @me <br/>( JS React || Angular || Node.js || PHP Laravel )
                      <div> Javascript enthusiast</div> 
                      <div>Technologies Buffer Always learning</div> 
                      <span>Football Fan</span>
                    </div>
                </div>

                <div className="col-md-8 my-5 py-5 justify-content-start">
                    <img src={BusinessMan} alt="businessMan" height="500px" width="850px" style={{position:"absolute",zIndex:2}}/> 
                </div>

                <div className="talk animate__animated animate__zoomIn py-3 mb-5"> Let's talk</div>
              </div>
              {/*cursor */}
              <div className="cursor overflow-hidden" style={{left: position.x + "px",top: position.y + "px"}}></div>
            </div>
        </section>


        {/* Services */}
        <section className='container ps-5'>
        <div className="ms-5 ps-3">
          <h2 className="fs-1"> <b>What I can do ?</b></h2>
          <div className="fs-4">Services Offers</div>
          <div className='d-flex align-items-center mt-2'>
            <div className="round">
            </div>
            <div className="rounded-line">
            </div>
          </div>

            <div className="rounded services-details" style={{backgroundColor:{style}}}>
              <div className="row mt-5">
                <div className="col-md-6">
                    <div className="p-5 text-center">
                      <h2>FRONTEND APPS</h2>
                      <div className="lh-base">
                        Build client-side applications with modern features like SPA and 
                        maintain semantic coding style among other best practices for optimisation. 
                        Use modern tech such as React.js, Vue.js.
                      </div>
                      
                      <div className='mt-5'>
                        <h2>BACKEND APPS</h2>
                        <div className="lh-base">
                          Build scalable and maintainable server applications using modern 
                          technology stacks such as Node.js, Express, and MongoDB
                        </div>
                      </div>

                      <div className='mt-5'>
                        <h2>NATIVE APPS</h2>
                        <div className="lh-base">
                          Use Flutter for building simple native mobile applications. React-Native. React Native is modern, fast , cross-platform,and popular
                        </div>
                      </div>
                      

                      <div className="seeworkContainer mt-5 position-relative">
                        <div className='seeworkTitle position-absolute'>SEE MY WORKS</div>
                        <div className="seeworkButton rounded-circle position-absolute"></div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <div>
                    <img src={dashboard1} alt="dashboard1" width='500px' height='500px' className='dashboard1 position-absolute'/>
                    </div>
                    <div>
                    <img src={dashboard2} alt="dashboard2" width='500px' height='500px' className='dashboard2 position-absolute'/>
                    </div>
                    <div>
                    <img src={dashboard3} alt="dashboard3" width='500px' height='500px' className='dashboard3 position-absolute'/>
                    </div>
                    <div>
                    <img src={dashboard4} alt="dashboard4" width='500px' height='500px' className='dashboard4 position-absolute'/>
                    </div>
                    <div>
                    <img src={desktopScreen} alt="desktopScreen"  width='500px' height='500px' className='desktopScreen position-absolute'/>
                    </div>
                    <div>
                    <img src={desktopTable} alt="desktopTable" width='500px' height='500px' className='desktopTable position-absolute'/>
                    </div>
                    <div>
                        <img src={desktop} alt="desktop" width='500px' height='500px' className="desktop position-absolute"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
        
        </section>
       </div>      
    )
  }
  export default Home

