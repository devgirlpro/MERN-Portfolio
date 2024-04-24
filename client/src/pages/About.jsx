import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'Tailwind.css',
    'javaScript',
    'TypeScript',
    'React.js',
    'Vue.js',
    'Node.js',
    'Express.js',
    'Mongodb',
    'Version contlor',
  ];
  return (
    <div className="bg-primary h-full pb-10">
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col md:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full md:w-full">
          <dotlottie-player
            src="https://lottie.host/c4e6b7e3-f131-4997-ac04-555219287033/YAX7JPvR3L.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>

        <div className="flex flex-col gap-5 w-1/2 sm:w-full md:w-full">
          <p className="text-white">
            Hello! my name is Azadeh. I enjoy creating things that live on
            internet. My interest in web development started back in 2015 Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. In tempore
            laborum reiciendis? Dolorem repudiandae, nemo alias a dolores atque
            id quasi debitis autem molestias, voluptate laudantium, adipisci
            neque excepturi consequuntur!
          </p>

          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            tempora. Odit dolore sunt nemo fugiat quo beatae incidunt voluptate,
            eum perferendis facere quod dolorum excepturi. Voluptatem ad
            voluptates tempora modi?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores fuga odit est dignissimos.?
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here is a few technologies I've been working recently:
        </h1>
      </div>

      <div className="flex flex-wrap gap-10 m-5 sm:gap-3 sm:m-2 md:gap-5 md:m-4">
        {skills.map((skill, index) => (
          <div key={index} className="border border-tertiary py-3 px-10 sm:py-1 sm:px-3 md:py-2 md:px-6">
            <h1 className="text-tertiary">{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
