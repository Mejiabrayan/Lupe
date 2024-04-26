'use client';
import GooeyButton from '@/components/GooeyButton';
import About from '@/components/Sections/About';
import LandingPage from '@/components/Sections/Landing';
import Project from '@/components/Sections/Projects/';
import Price from '@/components/Sections/Subscription';
import React from 'react';

export default function page() {
  return (
    <>
      <LandingPage />
      <About />
      <Project />
      <Price />
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className='h-[50vh] flex bg-primary-subtleDark dark:bg-primary-accent text-black w-full py-4 -mt-20 rounded-md'>
      <div className='grid grid-cols-1 gap-6 place-content-center place-items-center p-5'>
        <h1 className='text-4xl font-bold  text-white '>Subscribe to our newsletter</h1>
        <p className='text-sm text-gray-400'>
          Get the latest news and updates from us.
        </p>
        <GooeyButton/>
      </div>
    </footer>
  );
}
