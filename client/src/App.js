import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Intro from './pages/Intro'
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Learn from './pages/Learn';
import Coursess from './pages/Courses';
import Experiences from './pages/Experiences';
import Loader from './components/Loader';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import {SetPortfolioData} from './redux/rootSlice'

function App() {
//const [showLoading, setShowLoading] = useState(false);
const {loading, portfolioData} = useSelector((state) => state.root)
const dispatch  = useDispatch();

const getPortfolioData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/portfolio")
    dispatch(SetPortfolioData(response.data))
  } catch (error) {
    console.log(error)
  }
}


useEffect(() => {
  getPortfolioData()
}, [])


useEffect(() => {
  console.log("portfolioData", portfolioData)
}, [getPortfolioData])

  return (
   <BrowserRouter>
   {loading ? <Loader /> : null}
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/intro" element={<Intro />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/exprience" element={<Experiences />} />
      <Route  path="/project" element={<Projects />} />
      <Route  path="/course" element={<Coursess />} />
      <Route  path="/contact" element={<Contact />} />

      <Route  path="/resume" element={<Resume />} />
      <Route  path="/learn" element={<Learn />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
