// import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Home.css'
import BusinessMan from '../../icons/businessMan.png'
import 'animate.css';
import { useMousePosition } from "./useMouse";
import me from '../../pictures/me.jpg'
import desktop from '../../pictures/desktop.png'
import desktopScreen from '../../pictures/desktopScreen.png'
import desktopTable from '../../pictures/desktopTable.png'
import dashboard1 from '../../pictures/dashboard1.png'
import dashboard2 from '../../pictures/dashboard2.png'
import dashboard3 from '../../pictures/dashboard3.png'
import dashboard4 from '../../pictures/dashboard4.png'
import demo1 from '../../videos/demo1.mp4'
import demo2 from '../../videos/demo2.mkv'
import demo3 from '../../videos/demo3.mkv'
import demo4 from '../../videos/demo4.mkv'
import demo5 from '../../videos/demo5.mkv'

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
                            <span className='ltrZ animate__animated animate__zoomIn delay1'>Z</span>
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
                <div className="animate__animated animate__zoomIn">
                    <div className="talk pt-4 mb-5 text-white"> Let's talk</div>
                </div>
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
                      
                    <Link to="/portfolio">
                      <div className="seeworkContainer mt-5 position-relative">
                        <div className='seeworkTitle position-absolute'>SEE MY WORKS</div>
                      </div>
                    </Link>
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


        {/*Read Me */}
        <section className='mt-5 py-5'>
          <div className='row'>
            <div className="col-md-4"></div>

            <div className='col-md-6'>
              
              <div className="aboutme py-5 px-3">
                <div className="d-flex py-5">
                  <div>
                    <img className="roundedImg" src={me} alt="me" width="400px" height="600px"/>
                  </div>

                  <div className="ps-3 lh-base">
                    <i className="fa-solid fa-microscope fs-3 "></i> <span className='ms-3 fs-6'>Building My own product</span><br/>
                    <i className="fa-solid fa-seedling fs-3"></i><span className='ms-4 fs-6'>Learning blockchain</span><br/>
                    <i className="fa-solid fa-futbol fs-3"></i><span className='ms-4 fs-6'>Big Football Fan</span><br/>
                    <i className="fa-solid fa-gamepad fs-3"></i><span className='ms-3 fs-6'>Video Games Buffer</span><br/>
                    <i className="fa-solid fa-microscope fs-3 "></i> <span className='ms-3 fs-6'>Always learning</span><br/>
                  </div>
                </div>
                <div className="fs-4 mt-5">READ ME</div>
                <div className='d-flex align-items-center mt-2'>
                  <div className="round">
                  </div>
                  <div className="rounded-line">
                  </div>
                </div>
                <div className="mt-5 ">
                  <p>
                      I am a full stack developer with a passion for thoughtful UI design. and blockchain aspects
                  </p>
                 <p className="lh-lg">I am Besides participating in many tech programs where I have been trained to have both technical and soft skills, I have acquired decent level programming knowledge from taking online courses on Udemy, Pluralsight, bagging a Node.js certificate </p>
                 <p className="lh-lg">
                     When I am not coding, I am either playing football, playing video games or playing some snnoker frames with my friends. Other times I am reading or learning a new language or framework. 
                 </p>
                </div>
              </div>
              
              
            </div>

            <div className='col-md-2'>
            </div>

          </div>
        </section>

        {/*My Works */}

        <section>
          <div className='container'>

          <div className='myworks'>
            <h2 className="fs-1"> <b>My Works</b></h2>
            <div className="fs-4 mt-3">Some of my projects</div>
            <div className='d-flex align-items-center mt-2'>
              <div className="round">
              </div>
              <div className="rounded-line">
              </div>
            </div>

            <div className="fs-2 mt-3">Web Applications</div>
            
              <div className="row pb-5">
                <div className="col-md-6">
                  <a href="https://zabelassal.github.io/NetflixHO/" target="_blank">
                  <div className='videoContainer video1 ltr-effect'>
                  <video src={demo1} type="video/mp4" width="100%" height="100%" className="video1 " autoPlay muted loop playInline ></video>
                  </div>
                  </a>
                </div>

                <div className="col-md-6">
                  <a href="https://zabelassal.github.io/TestPizza/" target="_blank">
                  <div className='videoContainer video1 ltr-effect1'>
                    <video src={demo2} type="video/mp4" width="100%" height="100%" className="video1" autoPlay muted loop playInline ></video>
                  </div>
                  </a>
                </div>


                <div className="col-md-6 my-4">
                  <a href="https://zabelassal.github.io/NetflixHO/" target="_blank">
                  <div className='videoContainer video1 ltr-effect2'>
                  <video src={demo3} type="video/mp4" width="100%" height="100%" className="video1" autoPlay muted loop playInline ></video>
                  </div>
                  </a>
                </div>

                <div className="col-md-6 my-4">
                <a href="https://zabelassal.github.io/instagram/" target="_blank">
                  <div className='videoContainer video1 ltr-effect3'>
                  <video src={demo4} type="video/mp4" width="100%" height="100%" className="video1" autoPlay muted loop playInline ></video>
                  </div>
                  </a>
                </div>

                <div className="col-md-6">
                <a href="https://zabelassal.github.io/FishAndChips/" target="_blank">
                  <div className='videoContainer video1 ltr-effect4'>
                  <video src={demo5} type="video/mp4" width="100%" height="100%" className="video1" autoPlay muted loop playInline ></video>
                  </div>
                  </a>
                </div>

                <div className="col-md-6">
                  <video src={demo1} type="video/mp4" width="100%" height="100%" className="video1" autoPlay muted loop playInline ></video>
                </div>

              </div>
                        <p className="text-center pt-5 fs-2 ms-5 ps-5">Stay Connected</p>
                        <p className="text-center fs-5 text-muted ms-5 ps-5">Casablanca , Morocco</p>
                        <p className="text-center pb-2 fs-2">
                          <div className='marginMail'>
                              <a className="bgchange text-decoration-none fs-4 me-5 py-2 pe-3" href="mailto:zakariabelassal@gmail.com"><i className="fa-solid fa-envelope mx-2"></i>zakariabelassal@gmail.com</a>
                          </div>
                        </p>
                        <p className="text-center ms-5"><a href="https://www.instagram.com/zakariabelassal5/" className='text-secondary'><i className="fa-brands fa-telegram ms-5 me-3 fs-3"></i></a><i className="fa-brands fa-instagram fs-3"></i></p>
          </div>

          </div>
        </section>
       </div>      
    )
  }
  export default Home

