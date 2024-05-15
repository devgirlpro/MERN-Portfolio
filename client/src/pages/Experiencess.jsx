import React from 'react';
import SectionTitle from '../components/SectionTitle';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import { styles } from '../styles';
// import experiences from '../constants/experiences';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motions';
import 'react-vertical-timeline-component/style.min.css';

import { useSelector } from 'react-redux';

const ExperienceCard = ({ experience }) => {
    // console.log("trst", experience.icon)
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        // date={experiense.date}
        iconStyle={{ background: experience.iconBg }}
         icon={
           <div className='flex justify-center items-center w-full h-full'>
            <p className=' text-[12px] text-secondary sm:text-[8px] md:text-[10px]' >{experience.company}</p>
           </div>
         }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold sm:text-[14px]'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company}
          </p>
          <p className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}>{experience.date}</p>
        </div>
  
        <div className='mt-5 list-disc ml-5 space-y-2 sm:ml-0'>
          <p>{experience.points}</p>
        </div>
      </VerticalTimelineElement>
    );
  };


const Experiencess = () => {
    const { portfolioData } = useSelector((state) => state.root);
    const { experinse } = portfolioData;

  return (
    <>
    <SectionTitle title="Experience" />
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText} sm:text-[16px]`}> What I have done so far</p>
        <h2 className={`${styles.heroSubText} sm:text-[18px]`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experinse.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experiencess, 'experiencess');
