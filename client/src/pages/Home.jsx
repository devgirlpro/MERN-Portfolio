import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Intro from './Intro';
import Hero from './Hero';
import About from './About';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Experiencess from './Experiencess';
import Tech from './Tech';
import Works from './Works';
import Projects from './Projects';
import Coursess from './Courses';
import ContactMe from './ContactMe';
import StarsCanvas from '../components/canvas/Stars';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import { useSelector } from 'react-redux';
import { styles } from '../styles';

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div className="relative z-0">
      <div className='relative z-0 bg-xprimary'>
        {/* <Header /> */}
        <Navbar />
      </div>

      {portfolioData && (
        <div >
          <Hero />
          {/* <Intro /> */}

          <AboutMe />
          <About />

          <Experiencess />
          {/* <Experiences /> */}
          <Tech />
          <Works />
          {/* <Projects /> */}
          {/* <Coursess /> */}

          <LeftSider />
          
          <div className='relative z-0'>
          <ContactMe />
          <StarsCanvas />
          </div>
          
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;

// className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
