import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import services from '../constants/services';
import { fadeIn, textVariant } from '../utils/motions';

import { SectionWrapper } from '../hoc/index';

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
      //new
  const { portfolioData } = useSelector((state) => state.root);
  const { aboutme } = portfolioData;
  const { title1, title2, descriptin } = aboutme[0];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>{title1}</p>
        <h2 className={styles.sectionHeadText}>{title2}</h2>
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
    </>
  );
};

export default SectionWrapper(AboutMe, 'about');
