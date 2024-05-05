import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Intro from './Intro';
import Hero from './Hero';
import About from './About';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Tech from './Tech'
import Projects from './Projects';
import Coursess from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import { useSelector } from 'react-redux';
import { styles } from '../styles';


const Home = () => {


  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div className="relative z-0 bg-xprimary">
      <div>
        {/* <Header /> */}
        <Navbar />
        
      </div>
      
      {portfolioData && (
        <div className="bg-xprimary px-5">
          <Hero /> 
          {/* <Intro /> */}

          <AboutMe />
          <About />
          
          <Experiences />
          <Tech />
          <Projects />
          <Coursess />
          
          
          <LeftSider />

          <div className='relative z-0'>
          <Contact />
          <Footer />
          </div>

        </div>
        
      )}
    </div>
  );
};

export default Home;

// className="bg-hero-pattern bg-cover bg-no-repeat bg-center"