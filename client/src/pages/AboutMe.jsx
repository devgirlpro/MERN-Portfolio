import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import services from '../constants/services';
import { fadeIn, textVariant } from '../utils/motions';

import { SectionWrapper } from '../hoc/index';
import SectionTitle from '../components/SectionTitle';

//new
import { useSelector } from 'react-redux';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiaryx rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

console.log('Services => ', services);
const AboutMe = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { aboutm } = portfolioData;
  const {
    title1,
    title2,
    descriptin,
    description1,
    descriptin2,
    imageURL,
    skils,
  } = aboutm[0];

  return (
    <>
      <SectionTitle title="About" />
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroHeadText}`}>{title1}</p>
        <h2 className={`${styles.heroHeadText}`}>{title2}</h2>
      </motion.div>

      <motion.p
        variants={('', '', 0.1, 1)}
        className="mt-4 text-secondaryx text-[17px] max-w-3xl leading-[30px] "
      >
        {descriptin}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="bg-xprimary h-full p-10">
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

        <div className="py-5 sm:hidden" >
          <h1 className="text-tertiary text-xl">
            Here is a few technologies I've been working recently:
          </h1>
        </div>

        <div className="flex flex-wrap gap-10 m-5  md:gap-5 md:m-4 sm:hidden">
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
    </>
  );
};

export default SectionWrapper(AboutMe, 'about');
