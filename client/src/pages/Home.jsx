import React from 'react';
import Header from '../components/Header';
import Intro from './Intro';
// import Hero from './Hero';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Coursess from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        {/* <Hero />  */}
        <About />
        <Experiences />
        <Projects />
        <Coursess />
        <Contact /> 
        <Footer />
        <LeftSider />
      </div>
    </div>
  );
};

export default Home;
