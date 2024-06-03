import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import lupeSolid from '@/public/lupe solid.svg';

import AnimatedHeading from '@/components/AnimatedHeading';

const LandingPage = () => {
  return (
    <section className='relative w-full h-[600px] overflow-hidden rounded-xl'>
      <div className='relative z-20 flex items-center justify-center w-full h-full'>
        <div className='flex flex-col items-start w-full max-w-3xl p-8 bg-transparent text-center lg:text-left'>
          <h1 className='mb-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#010202] dark:text-white lg:leading-tight text-pretty mt-12'>
            <AnimatedHeading title='Web Development & Design Agency Based in San Francisco.' />
          </h1>
          <p className='mb-8 text-base text-balance font-medium tracking-tight leading-tight md:text-xl lg:text-2xl text-black dark:text-white'>
            We are a leading web development and design agency that crafts
            innovative solutions to help your business thrive.
          </p>
          <Link href='/book'>
            <Button variant='default'>Book Now</Button>
          </Link>
        </div>
      </div>
      <div className='absolute inset-0 bg-cover bg-center z-0 overflow-hidden rounded-xl '>
        <Image
          src={lupeSolid}
          alt='background image'
          quality={100}
          priority
          width={1920}
          height={1080}
          className='filter dark:brightness-[0.5] dark:grayscale dark:mix-blend-darken'
        />
        <div className='absolute inset-0 bg-gradient-to-tr from-white via-transparent to-transparent rounded-xl dark:bg-gradient-to-tr dark:from-primary-subtleDark dark:via-transparent dark:to-transparent' />
      </div>
    </section>
  );
};

export default LandingPage;