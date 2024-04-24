import React from 'react';
import { useState } from 'react';
import { Courses } from '../resources/experiences';

import SectionTitle from '../components/SectionTitle';

const Coursess = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const selectHandler = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="bg-primary h-full p-10">
      <SectionTitle title="Courses" />

      <div className="flex py-20 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#cfa0f73e] w-2/5 sm:flex-row sm:w-full sm:overflow-x-scroll">
          {Courses.map((crs, index) => (
            <div
              key={index}
              onClick={() => selectHandler(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItem === index
                    ? 'text-tertiary border-tertiary border-l-4 ml-[3px] bg-[#cfa0f73e] py-1 sm:w-full'
                    : 'text-white'
                }`}
              >
                {crs.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {Courses[selectedItem].title}
          </h1>
          <div className="flex items-center justify-center gap-10  sm:flex-col">
          <p className="text-white">{Courses[selectedItem].description}</p>

          <img
            src={Courses[selectedItem].image}
            alt=""
            className="h-52 w-80"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Coursess;
