import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="p-5 bg-primary flex  justify-between border-b border-tertiary">
        <h1 className="text-tertiary text-lg font-semibold">Azadeh Galidari</h1>
        <h1 className="text-tertiary text-lg font-semibold">
          Fullstack Web Developer
        </h1>
        <h1 className="text-tertiary text-lg font-semibold">Portfolio</h1>
      </div>

      <nav>
        <ul className="p-5 bg-primary flex  justify-center ">
          <li className="text-secondary text-lg font-medium p-2">
            <Link to="/" className="border-b border-tertiary">
              Home
            </Link>
          </li>
          <li className="text-secondary text-lg font-medium  p-2">
            <Link to="/about" className="border-b border-tertiary">
              About me
            </Link>
          </li>
          <li className="text-secondary text-lg font-medium  p-2">
            <Link to="/resume" className="border-b border-tertiary">
              Resume
            </Link>
          </li>
          <li className="text-secondary text-lg font-medium  p-2 border-solid">
            <Link to="/projects" className="border-b border-tertiary">
              Projects
            </Link>
          </li>
          <li className="text-secondary text-lg font-medium  p-2">
            <Link to="/contact" className="border-b border-tertiary">
              Contact me
            </Link>
          </li>
          <li className="text-secondary text-lg font-medium  p-2">
            <Link to="/learn" className="border-b border-tertiary">
              Learn with me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
