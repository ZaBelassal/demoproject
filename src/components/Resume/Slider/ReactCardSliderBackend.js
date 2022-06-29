import React from 'react'
import './Slider.css'
import ExpressjsLogo  from './SliderBackendImages/expressjsLogo.png'
import laravelLogo  from './SliderBackendImages/laravelLogo.svg'
import mongodb from './SliderBackendImages/mongodb.png'
import  mysql  from './SliderBackendImages/mysql.png'
import nodejsLogo  from './SliderBackendImages/nodejsLogo.png'
import phpLogo  from './SliderBackendImages/phpLogo.png'
import typescript  from './SliderBackendImages/typescript.png'

const ReactCardSliderBackend=(props) =>{
    const slides = [
        {src:ExpressjsLogo,title:'Express.js'},
        {src:laravelLogo,title:'Laravel'},
        {src:mongodb,title:'Mongo DB'},
        {src:mysql,title:'My SQL'},
        {src:nodejsLogo,title:"Node js"},
        {src:phpLogo,title:"PHP"},
        {src:typescript,title:'Typescript'},
    ]

    const slideLeft = () => {
        var slider1 = document.getElementById('slider1');
        slider1.scrollLeft = slider1.scrollLeft+500;
    }
    const slideRight = () => {
        var slider1 = document.getElementById('slider1');
        slider1.scrollLeft = slider1.scrollLeft-500;
    }

  return (
      <div className="position-relative  d-flex align-items-center main-slider-container">
        <div onClick={slideLeft}><i className=" fa-solid fa-arrow-left bgArrowLeft p-2"></i></div>
        <div id="slider1">
        {
            slides.map((slide,index)=>{
                return (
                    <div className="slider-card text-center" key={index}>
                        <img src={slide.src} alt="slide" className="colore" height="40%" width="30%"/>
                        <p className="mt-4 ">{slide.title}</p>
                    </div>
                )
            })
        }
        </div>
        <div onClick={slideRight}><i className=" fa-solid fa-arrow-right bgArrowRight p-2"></i></div>
    </div>
  )
}

export default ReactCardSliderBackend