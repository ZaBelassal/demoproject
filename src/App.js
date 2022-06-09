import './App.css';
import { useContext, useEffect, useState } from 'react';
// import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import Shelf from "./components/Shelf/Shelf";
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import {Link , Routes , Route} from 'react-router-dom'
import { ThemeContext } from './components/Theme/ThemeContext';
import  ToggleTheme  from './components/ToggleTheme/ToggleTheme'
import { ClimbingBoxLoader } from 'react-spinners';


function App() {
  
  const themeContext = useContext(ThemeContext);

  const [loader , setLoader] = useState(false)

  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },3000)
  },[])
  
  let style = {};
  let style1 = {};
  if(themeContext.theme === 'black'){
    style= {
      background:'white',
      color:'#6c757d'
    }
    style1={
      background:'f2f0ee'
    }
   } else {
      style= {
      background:'black',
      color:"#ffffff"
      }
      style1={
        background:'#111111'
      }
    }
    
    if(themeContext.theme === 'white'){
      style= {
        background:'black',
        color:'#ffffff'
      }
      style1={
        background:'#111111'
      }
     } else {
        style= {
        background:'white',
        color:"#6c757d"
        }
        style1={
          background:'#f2f0ee'
        }
      }
    
   

  return loader ? (

    <ClimbingBoxLoader size={30} color={'#E45447'} loader={loader} />
  ) 
    : (
    <div className="App" style={style1}>
      
      <div className='AppContainer' style={style}>
      <header className="alignImg">
            <div className='marginMail'>
                  <a className="bgchange text-decoration-none fs-4 p-2" href="mailto:zakariabelassal@gmail.com"><i className="fa-solid fa-envelope mx-2"></i>zakariabelassal@gmail.com</a>
                  
            </div>
            <ToggleTheme /> 
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
