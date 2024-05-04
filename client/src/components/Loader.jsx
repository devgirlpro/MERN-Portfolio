import React from 'react';


const Loader = () => {
  return (
   
    <mesh className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <mesh className="flex flex-col items-center gap-10 text-3xl font-semibold sm:text-3xl">
        <mesh className="text-tertiary azadeh">Azadeh Galidari</mesh>
        <mesh className="text-secondary fullstack">Full Stack </mesh>
        <mesh className="text-secondary developer">Web Developer</mesh>
      </mesh>
    </mesh>
   
  );
};

export default Loader;
