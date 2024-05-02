import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  console.log('CONTACT =>', contact[0]);
  const user = contact[0];

  console.log("USER ==> ", user)
  const { address, age, email, mobile, name } = contact[0];


return (
  <div className="bg-primary h-full p-10">
    <SectionTitle title="Say Hello" />

    <div className="flex items-center justify-between sm:flex-col">

      <div className="flex flex-col gap-1">
        <p className="text-white text-sm">{'{'}</p>
        <ul className="ml-5">
          {Object.keys(user).map((key) => (
            <li key={key} className="text-white text-sm ">
              <b>{key} : </b> {user[key]}
            </li>
          ))}
        </ul> 
        <p className="text-white text-sm">{'}'}</p>
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

// return (
//   <div className="bg-primary h-full p-10">
//     <SectionTitle title="Say Hello" />

//     <div className="flex items-center justify-between sm:flex-col">

//       <div className="flex flex-col gap-1">
//         <p className="text-white text-sm">{'{'}</p>
//         <ul className="ml-5">
//           {Object.entries(user).map(([key, value]) => (
//             <li key={key} className="text-white text-sm ">
//               <b>{key} : </b> {value}
//             </li>
//           ))}
//         </ul>
//         <p className="text-white text-sm">{'}'}</p>
//       </div>
//     </div>
//   </div>
// );
