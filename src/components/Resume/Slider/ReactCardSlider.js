import React from 'react'
import './Slider.css'
import ReactLogo  from './SliderImages/reactLogo.png'
import bootstrapLogo  from './SliderImages/bootstrapLogo.png'
import cssLogo from './SliderImages/cssLogo.png'
import  firebaseLogo  from './SliderImages/firebaseLogo.png'
import htmlLogo  from './SliderImages/htmlLogo.png'
import javascriptLogo  from './SliderImages/javascriptLogo.png'
import tailwindLogo  from './SliderImages/tailwindLogo.png'
import ReactNativeLogo  from './SliderImages/reactLogo.png'
import ReduxLogo from './SliderImages/reduxLogo.png'
import Angular from './SliderImages/angularLogo.png.crdownload'


const ReactCardSlider=(props) =>{
    const slides = [
        {src:htmlLogo,title:'HTML'},
        {src:ReactLogo,title:'React Js'},
        {src:cssLogo,title:'CSS'},
        {src:javascriptLogo,title:'Javascript'},
        {src:tailwindLogo,title:"Tailwind"},
        {src:ReduxLogo,title:"Redux"},
        {src:ReactNativeLogo,title:'React Native'},
        {src:bootstrapLogo,title:'Bootstrap'},
        {src:firebaseLogo ,title:'Firebase'},
        {src:Angular ,title:'Angular'}
    ]

    const slideLeft = () => {
        var slider = document.querySelector('.slider');
        slider.scrollLeft = slider.scrollLeft+500;
    }
    const slideRight = () => {
        var slider = document.querySelector('.slider');
        slider.scrollRight = slider.scrollRight-500;
    }

  return (
      <div className="position-relative  d-flex align-items-center main-slider-container">
        <div onClick={slideLeft}><i className=" fa-solid fa-arrow-left bgArrowLeft p-2"></i></div>
        <div className="slider">
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

export default ReactCardSlider