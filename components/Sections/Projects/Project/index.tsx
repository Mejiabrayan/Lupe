'use client';
import React from 'react';
import styles from './projects.styles.module.scss';
const Project = ({ index, title, setModal }: any) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex flex-col w-full justify-center items-center p-5 border-r border-gray-300 cursor-pointer transition duration-200 gap-1 last:border-r-0 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="text-5xl m-0 font-normal transition-all duration-400 hover:-translate-x-2.5">
        {title}
      </h2>
      <p className="font-light transition-all duration-400 hover:translate-x-2.5">
        Design, Development
      </p>
    </div>
  );
};

export default Project;

// .project:hover h2{
//   transform: translateX(-10px);
// }

// .project:hover p{
//   transform: translateX(10px);
// }

// .project h2{
//   font-size: 60px;
//   margin: 0px;
//   font-weight: 400;
//   transition: all 0.4s;
// }

// .project p{
//   transition: all 0.4s;
//   font-weight: 300;
// }