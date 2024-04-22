'use client'
import React, { useState } from 'react';
import Project from './Project';
import Modal from './Modal';

const projects = [
  {
    title: 'Innovate Hub',
    src: '/project4.png',
    color: '#3366CC',
  },
  {
    title: 'Tech Fusion',
    src: '/project5.png',
    color: '#FF9900',
  },
  {
    title: 'Digital Nexus',
    src: '/project6.png',
    color: '#66CC33',
  },
];

const Index = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
};

export default Index;
