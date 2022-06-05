import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Shelf from "./components/Shelf/Shelf"

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <Navbar />
        <Routes>
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
