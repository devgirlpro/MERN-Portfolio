import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useSelector } from 'react-redux';

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { description1, descriptin2, imageURL, skils } = about[0];
 
 
  return (
    <div className="bg-xprimary h-full p-10">
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col md:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full md:w-full">
          <dotlottie-player
            src={imageURL}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>

        <div className="flex flex-col gap-5 w-1/2 sm:w-full md:w-full ">
          <p className="text-white">{description1}</p>

          <p className="text-white">{descriptin2}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here is a few technologies I've been working recently:
        </h1>
      </div>

      <div className="flex flex-wrap gap-10 m-5 sm:gap-3 sm:m-2 md:gap-5 md:m-4 ">
        {skils.map((skill, index) => (
          <div
            key={index}
            className="border border-tertiary py-3 px-10 sm:py-1 sm:px-3 md:py-2 md:px-6"
          >
            <h1 className="text-tertiary">{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
