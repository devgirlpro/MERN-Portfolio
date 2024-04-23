import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <div>
      <SectionTitle title="About Me" />
      {/* <div className="flex">
        <div className="h-[70vh]">
          <dotlottie-player
            src="https://lottie.host/9013a071-9d85-4694-b576-aa5e60d52c80/BC5xGKYiY7.json"
            background="transparent"
            speed="1"
          ></dotlottie-player>
        </div>
      </div> */}

      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/c4e6b7e3-f131-4997-ac04-555219287033/YAX7JPvR3L.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>

        <div className="flex flex-col gap-5 w-1/2">
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
    </div>
  );
};

export default About;
