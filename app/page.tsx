'use client';
import GooeyButton from '@/components/Button';
import About from '@/components/Sections/About';
import LandingPage from '@/components/Sections/Landing';
import Price from '@/components/Subscription/Price';
import React from 'react';
export default function page() {
  return (
    <>
      <LandingPage />
      <About />
      <section className='flex items-center justify-center w-full py-20'>
        <Price />
      </section>
    </>
  );
}
