'use client'
import React, { useState } from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Lupe Studio',
    src: '/project1.png',
    color: '#0000',
  },
  {
    title: 'Office Studio',
    src: '/project2.png', // Corrected the src path
    color: '#0000',
  },
  {
    title: 'Creavio Agency',
    src: '/project3.png',
    color: '#0000',
  },
];

const Index = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      {/* <Modal modal={modal} projects={projects} /> */}
    </main>
  );
};

export default Index;
