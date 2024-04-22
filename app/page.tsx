'use client';
import GooeyButton from '@/components/GooeyButton';
import About from '@/components/Sections/About';
import LandingPage from '@/components/Sections/Landing';
import Price from '@/components/Sections/Subscription';
import Project from '@/components/Sections/Projects/'
import React from 'react';

export default function page() {
  return (
    <>
      <LandingPage />
      <About />
      <Project />
      <Price />

    </>
  );
}
