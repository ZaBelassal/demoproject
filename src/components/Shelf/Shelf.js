import React from 'react'
import './Shelf.css'

function Shelf() {
  return (
    <div className="fs-2 py-5">
      <div className="container-Shelf">
        <b className="fs-2">Blog </b>
        <div className='d-flex align-items-center mt-2'>
              <div className="round">
              </div>
              <div className="rounded-line">
              </div>
        </div>
      </div>
      <div className="cards d-flex justify-content-between align-items-center m-5">
        <div className="item p-5 fs-5 mx-4">
                Hooks are the new feature introduced in the React 16.8 version.It allows you tu use state and other React features without writing a class.
                Hooks are the functions which "hook into" React state and lifecylce features from function components. Its does not work inside classes.
                Hooks are backward-compatible, which means it does not contain any breaking changes.Also, it does not replace your knowledge of React concepts.
                
        </div>
        <div className="item p-5 fs-5 me-4">
                Hooks are the new feature introduced in the React 16.8 version.It allows you tu use state and other React features without writing a class.
                Hooks are the functions which "hook into" React state and lifecylce features from function components. Its does not work inside classes.
                Hooks are backward-compatible, which means it does not contain any breaking changes.Also, it does not replace your knowledge of React concepts.
        </div>
        <div className='item p-5 fs-5 me-4'>
        Hooks are the new feature introduced in the React 16.8 version.It allows you tu use state and other React features without writing a class.
                Hooks are the functions which "hook into" React state and lifecylce features from function components. Its does not work inside classes.
                Hooks are backward-compatible, which means it does not contain any breaking changes.Also, it does not replace your knowledge of React concepts.
        </div>
      </div>
    </div>
  )
}

export default Shelf