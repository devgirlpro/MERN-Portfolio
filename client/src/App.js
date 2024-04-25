import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Learn from './pages/Learn';
import Coursess from './pages/Courses';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/projects" element={<Projects />} />
      <Route  path="/courses" element={<Coursess />} />
      <Route  path="/resume" element={<Resume />} />
      
      
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/learn" element={<Learn />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
