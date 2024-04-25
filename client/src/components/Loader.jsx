import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="flex flex-col items-center gap-10 text-3xl font-semibold sm:text-3xl">
        <h1 className="text-tertiary azadeh">Azadeh Galidari</h1>
        <h2 className="text-secondary fullstack">Full Stack </h2>
        <h3 className="text-secondary developer">Web Developer</h3>
      </div>
    </div>
  );
};

export default Loader;
