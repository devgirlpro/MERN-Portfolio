import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const user = {
    name: 'Azadeh Galidari',
    age: 'null',
    email: 'galidariazadeh@gmail.com',
    mobile: '+4915229990701',
    country: 'Germany',
  };
  return (
    <div className="bg-primary h-full p-10">
      <SectionTitle title="Say Hello" />

      <div className="flex items-center justify-between sm:flex-col">

        <div className="flex flex-col gap-1">
          <p className="text-white text-sm">{'{'}</p>
          <ul className="ml-5">
            {Object.entries(user).map(([key, value]) => (
              <li key={key} className="text-white text-sm ">
                <b>{key} : </b> {value}
              </li>
            ))}
          </ul>
          <p className="text-white text-sm">{'}'}</p>
        </div>

        <div className='h-52'>
          <dotlottie-player
            src="https://lottie.host/1ff736c3-b067-4610-a8ce-03249218027e/9H3z91T54Q.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>

      </div>
    </div>
  );
};

export default Contact;

// {Object.keys(user).map((key) => (
//   <h1>
//     <span className='text-white'>{key}</span> :{" "}
//     <span className='text-white'>{user[key]}</span>
//   </h1>
// ))}
