import React from 'react'
import './Slider.css'
import githubLogo  from './SliderBackendManage/githubLogo.png'
import gitLogo from './SliderBackendManage/gitLogo.png'
import npmLogo  from './SliderBackendManage/npmLogo.png'
import postmanLogo  from './SliderBackendManage/postmanLogo.png'


const ReactCardSliderManage=(props) =>{
    const slides = [
        {src:githubLogo,title:'Github'},
        {src:gitLogo,title:'GIT'},
        {src:npmLogo,title:'NPM'},
        {src:postmanLogo,title:'postmanLogo'}
    ]

    const slideLeft = () => {
        var slider2 = document.querySelector('.slider2');
        slider2.scrollLeft = slider2.scrollLeft+500;
    }
    const slideRight = () => {
        var slider2 = document.querySelector('.slider2');
        slider2.scrollRight = slider2.scrollRight-500;
    }

  return (
      <div className="position-relative  d-flex align-items-center main-slider-container">
        <div onClick={slideLeft}><i className=" fa-solid fa-arrow-left bgArrowLeft p-2"></i></div>
        <div className="slider2">
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

export default ReactCardSliderManage