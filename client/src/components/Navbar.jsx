import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <ul className="p-5 bg-primary flex  justify-center sm:justify-between">
      <li className="text-secondary text-lg font-medium p-2 sm:p-0 sm:text-xs sm:font-extralight">
        <Link to="/" className="border-b border-tertiary">
          Home
        </Link>
      </li>
      <li className="text-secondary text-lg font-medium  p-2 sm:p-0 sm:text-xs sm:font-extralight">
        <Link to="/about" className="border-b border-tertiary">
          About
        </Link>
      </li>
      <li className="text-secondary text-lg font-medium  p-2 sm:p-0 sm:text-xs sm:font-extralight">
        <Link to="/resume" className="border-b border-tertiary">
          Resume
        </Link>
      </li>
      <li className="text-secondary text-lg font-medium  p-2  sm:p-0 sm:text-xs sm:font-extralight">
        <Link to="/projects" className="border-b border-tertiary">
          Projects
        </Link>
      </li>
      <li className="text-secondary text-lg font-medium  p-2 sm:p-0 sm:text-xs sm:font-extralight">
        <Link to="/contact" className="border-b border-tertiary">
          Contact
        </Link>
      </li>
      <li className="text-secondary text-lg font-medium  p-2 sm:p-0 sm:text-xs sm:font-extralight">
        <Link to="/learn" className="border-b border-tertiary">
          Learn
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar