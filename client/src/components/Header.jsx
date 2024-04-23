import React from 'react';
import Navbar from './Navbar';

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
      <Navbar />
    </>
  );
};

export default Header;
