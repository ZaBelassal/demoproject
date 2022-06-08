import './App.css';
import { createContext, useContext, useState } from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import {Link , Routes , Route} from 'react-router-dom'
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Shelf from "./components/Shelf/Shelf";
import { ThemeContext } from './components/Theme/ThemeContext';
import  ToggleTheme  from './components/ToggleTheme/ToggleTheme'

function App() {
  
  const themeContext = useContext(ThemeContext);

  console.log(themeContext)
  
  let style = {};
  if(themeContext.theme === 'dark'){
    style= {
      background:'white',
      color:'#6c757d'
    }
   } else {
      style= {
      background:'dark',
      color:"#ffffff"
      }
    }
  

  return ( 
  
    
    <div className="App" style={style}>
      <ToggleTheme /> 
      <div className='AppContainer' style={style}>
      <header className="alignImg">
            <div className='marginMail'>
                  <a className="bgchange text-decoration-none fs-4 p-2" href="mailto:zakariabelassal@gmail.com"><i className="fa-solid fa-envelope mx-2"></i>zakariabelassal@gmail.com</a>
            </div>
            <div>
              <Link className="bgchange text-decoration-none mx-2 fs-4 p-2" to="/portfolio"><i className="fa-solid fa-file mx-2"></i> Works</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-4 p-2" to="/resume"><i className="fa-solid fa-user-tie mx-2"></i>Resume</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-4 p-2" to="/shelf"><i className="fa-solid fa-book mx-2"></i>Shelf</Link>
            </div>
          
        </header>

     
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/shelf" element={<Shelf />} />
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
