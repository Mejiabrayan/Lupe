import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import lupeSolid from '@/public/lupe solid.svg';
import lupeDashed from '@/public/lupe dashed.svg';

import AnimatedHeading from '@/components/AnimatedHeading';
import dynamic from 'next/dynamic';
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});
const LandingPage = () => {
  return (
    <section className='md:mt-[250px] relative md:min-h-[375px]'>
      <div className='flex flex-col mt-[240px]'>
        <Link href='/updates/assistant'>
          <Button
            variant='outline'
            className='rounded-full border-border flex space-x-2 items-center'
          >
            <span className='font-mono text-xs'>Start your project today</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={12}
              height={12}
              fill='none'
            >
              <path
                fill='currentColor'
                d='M8.783 6.667H.667V5.333h8.116L5.05 1.6 6 .667 11.333 6 6 11.333l-.95-.933 3.733-3.733Z'
              />
            </svg>
          </Button>
        </Link>

        <h1 className='text-[30px] md:text-[90px] font-bold mt-6 leading-none'>
          <AnimatedHeading title='You think and we ship' />
        </h1>

        <p className='mt-4 md:mt-6 max-w-[600px]'>
          We are a team of designers, developers, and product managers who are
          passionate about building products that people love. We help startups
          and enterprises to design, develop, and ship products.
        </p>

        <div className='mt-8'>
          <div className='flex items-center space-x-4'>
            <Link href='/talk-to-us'>
              <Button
                variant='outline'
                className='border border-white/10 h-12 px-6'
              >
                Talk to us
              </Button>
            </Link>

            {/* <a href='/book'>
              <Button variant={'default'} className='h-12 px-5'>
                Book
              </Button>
            </a> */}
          </div>
        </div>

        <p className='text-xs text-[#707070] mt-8 font-mono'>
          Used by over{' '}
          <Link href='/open-startup' prefetch>
            <span className='underline'>3300+</span>
          </Link>{' '}
          businesses.
        </p>
      </div>

      <div className='scale-50 md:scale-100 -top-[500px] -right-[380px] pointer-events-none transform-gpu grayscale md:flex lg:animate-[open-scale-up-fade_1.5s_ease-in-out] absolute md:-right-[200px] xl:-right-[100px] w-auto h-auto md:-top-[200px]'>
        <Image src={lupeSolid} alt='Lupe Solid' width={1200} height={1200} className='' />
      </div>
    </section>
  );
};

export default LandingPage;
