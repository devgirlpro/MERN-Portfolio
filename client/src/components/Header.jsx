import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
   const [active, setActive] = useState('');
   const [scrolled, setScrolled] = useState(false);

  return (
    <>
      <div
        className={`items-center py-5 fixed top-0 block${
          scrolled ? 'bg-xprimary' : 'bg-transparent'
        }`}
      >
        <div >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Azadeh &nbsp;
              <span className="sm:hidden">
                {' '}
                | Fullstack Web Developer
              </span>
            </p>
          </Link>
        </div>
      </div>
      {/* <Navbar /> */}
    </>
  );
};

export default Header;
