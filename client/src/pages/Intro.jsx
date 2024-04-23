import React from 'react';

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className='text-white' >Hi, I am </h1>
      <h1 className='text-7xl text-tertiary font-semibold'>Azadeh</h1>
      <h1 className='text-6xl text-white font-semibold' >I build web applications</h1>
      <p className=' text-white w-2/3'>
        I am Fullstack Web Developer. <br /> Working as a React Developer also sharing
        my knowledge
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  );
};

export default Intro;
