import './App.css';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import {Link , NavLink ,Routes , Route} from 'react-router-dom'
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Shelf from "./components/Shelf/Shelf"

function App() {
  const [mode , setMode] = useState(true)
  return (
    <div className="App">
      <div className='AppContainer'>
      <header className="alignImg">
            <div className='marginMail'>
                  <a className="bgchange text-decoration-none fs-4 p-2" href="mailto:zakariabelassal@gmail.com"><i className="fa-solid fa-envelope mx-2"></i>zakariabelassal@gmail.com</a>
            </div>
            <div onClick={() => setMode(prevCheck => !prevCheck)}>
              { mode ?
                 (
                <i className="fa-solid fa-sun fs-4"></i>
                )
                :
                (
                <i className="fa-solid fa-moon fs-4"></i>
                )

              }
            </div>
            <div>
              <Link className="bgchange text-decoration-none mx-2 fs-4 p-2" to="/portfolio"><i className="fa-solid fa-file mx-2"></i> Works</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-4 p-2" to="/resume"><i className="fa-solid fa-user-tie mx-2"></i>Resume</Link>
              <Link className="bgchange text-decoration-none mx-2 fs-4 p-2" to="/shelf"><i className="fa-solid fa-book mx-2"></i>Shelf</Link>
            </div>
          
        </header>

     
        <Routes>
            <Route exact path="/" element={<Home />} />
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
