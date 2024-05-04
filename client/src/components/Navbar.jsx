import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { menu, close, logo } from '../assets';

import Header from './Header';

const Navbar = () => {
  // const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-10 fixed top-0 z-20 ${
        scrolled ? 'bg-xprimary' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[12px] font-bold cursor-pointer flex">
            Azadeh &nbsp;
            <span className="sm:hidden"> | Fullstack Web Developer</span>
          </p>
        </Link>

        <ul className="list-none flex gap-10 sm:hidden md:hidden">
          <li className="hover:text-[#915EFF] cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#915EFF]  cursor-pointer">
            <Link to="/exprience">Experinces</Link>
          </li>
          <li className="hover:text-[#915EFF]  cursor-pointer">
            <Link to="/project">Projects</Link>
          </li>
          <li className="hover:text-[#915EFF]  cursor-pointer">
            <Link to="/course">Courses</Link>
          </li>
          <li className="hover:text-[#915EFF] cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>



        <div className="sm:flex hidden flex-1 justify-end items-center md:flex">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li className="hover:text-secondaryx cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-secondaryx  cursor-pointer">
                <Link to="/exprience">Experinces</Link>
              </li>
              <li className="hover:text-secondaryx  cursor-pointer">
                <Link to="/project">Projects</Link>
              </li>
              <li className="hover:text-secondaryx  cursor-pointer">
                <Link to="/course">Courses</Link>
              </li>
              <li className="hover:text-secondaryx cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <ul className="p-5  flex  justify-center sm:justify-between">
            <li className="text-secondary text-lg font-medium  p-2 sm:p-0 sm:text-xs sm:font-extralight">
              <Link to="/about" className="border-b border-tertiary">
                About
              </Link>
            </li>

            <li className="text-secondary text-lg font-medium  p-2  sm:p-0 sm:text-xs sm:font-extralight">
              <Link to="/exprience" className="border-b border-tertiary">
                Experinces
              </Link>
            </li>

            <li className="text-secondary text-lg font-medium  p-2  sm:p-0 sm:text-xs sm:font-extralight">
              <Link to="/project" className="border-b border-tertiary">
                Projects
              </Link>
            </li>

            <li className="text-secondary text-lg font-medium  p-2 sm:p-0 sm:text-xs sm:font-extralight">
              <Link to="/course" className="border-b border-tertiary">
                Courses
              </Link>
            </li>

            <li className="text-secondary text-lg font-medium  p-2 sm:p-0 sm:text-xs sm:font-extralight">
              <Link to="/contact" className="border-b border-tertiary">
                Contact
              </Link>
            </li>
          </ul> */
}
