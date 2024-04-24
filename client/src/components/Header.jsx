import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <div className="p-5 bg-primary flex  justify-between border-b border-tertiary sm:flex sm:justify-center">
        <h1 className="text-tertiary text-lg font-semibold sm:hidden">Azadeh Galidari</h1>
        <h1 className="text-tertiary text-lg font-semibold">
          Fullstack Web Developer
        </h1>
        <h1 className="text-tertiary text-lg font-semibold sm:hidden">Portfolio</h1>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
