import React from 'react'
import './Resume.css'
import ReactCardSlider from './Slider/ReactCardSlider'
import ReactCardSliderBackend from './Slider/ReactCardSliderBackend'
import ReactCardSliderManage from './Slider/ReactCardSliderManage'
function Resume() {
  return (
    <div>
      <div className="fs-2 techIuse py-5">
        <b>Tech I Use </b>
        <div className='d-flex align-items-center mt-2'>
              <div className="round">
              </div>
              <div className="rounded-line">
              </div>
        </div>
        <div className=" techIuse1 fs-5 mt-5">These are, but not limited to, the tech I use for building client-side applications</div>
        <div className="bodyCardsSlider py-5">
          <ReactCardSlider />
        </div>
        <div className=" techIuse1 fs-5 mt-5">These are, but not limited to, the tech I use for building fast and scalable backend applications</div>
        <div className="bodyCardsSlider py-5">
          <ReactCardSliderBackend />
        </div>
        <div className=" techIuse1 fs-5 mt-5">Others...and more!</div>
        <div className="bodyCardsSlider py-5">
          <ReactCardSliderManage />
        </div>
      </div>
    </div>
  )
}

export default Resume