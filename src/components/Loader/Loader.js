import React from 'react'
// import './Loader.css'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader() {
  return (
    <div>
     <ClimbingBoxLoader
            color={color} loading={loading} css={override} size={30} className="position-absolute"/>
    </div>
  )
}

export default Loader