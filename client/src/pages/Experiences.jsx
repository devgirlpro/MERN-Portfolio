import React from 'react';
import { experiences } from '../resources/experiences';
import SectionTitle from '../components/SectionTitle';
import { useState } from 'react';

const Experiences = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const selectHandler = (index) => {
    setSelectedItem(index);
  };
  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#cfa0f73e] w-2/5 sm:flex-row sm:w-full sm:overflow-x-scroll">
          {experiences.map((ex, index) => (
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
                {ex.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItem].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItem].company}
          </h1>
          <p className="text-white">{experiences[selectedItem].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
