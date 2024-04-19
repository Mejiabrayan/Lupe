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
      className={styles.project}
    >
        <h2>{title}</h2>
        <p>Design & Development</p>
    </div>
  );
};

export default Project;
