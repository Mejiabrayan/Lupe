'use client';

import { motion } from 'framer-motion';
import {
  staggerChildren,
  wordAnimation,
  opacityAnimation,
} from '@/lib/animations/index';
import React from 'react';

type AnimatedTextWrapperProps = {
  title: string;
};

const AnimatedTextWrapper: React.FC<AnimatedTextWrapperProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren} initial='initial' animate='animate'>
      {title.split(' ').map((word, idx) => (
        <motion.div
          key={idx}
          className='inline-flex overflow-auto leading-tight'
          variants={opacityAnimation}
        >
          <motion.h1 variants={wordAnimation}>{word + '\u00A0'}</motion.h1>
        </motion.div>
      ))}
    </motion.span>
  );
};

export default AnimatedTextWrapper;
