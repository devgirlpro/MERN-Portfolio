import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Learn from './pages/Learn';
import Coursess from './pages/Courses';
import Loader from './components/Loader';
import { useState } from 'react'
import Experiences from './pages/Experiences';

function App() {
  const [showLoading, setShowLoading] = useState(false)
  return (
   <BrowserRouter>
   {showLoading ? <Loader /> : null}
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/exprience" element={<Experiences />} />
      <Route  path="/project" element={<Projects />} />
      <Route  path="/course" element={<Coursess />} />
      <Route  path="/resume" element={<Resume />} />
      
      
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/learn" element={<Learn />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
