'use client';

import Image from 'next/image';
import GooeyButton from '../ui/GooeyButton';
import lupeDash from '@/public/lupe dashed.svg';
import stock from '@/public/stock.jpg';

export const Footer = () => {
  return (
    <footer className='relative isolate h-[50vh] flex bg-transparent dark:bg-primary-subtleDark  text-black w-full py-4  rounded-md'>
      <div className='absolute inset-0 bg-cover bg-center -z-10 overflow-hidden rounded-xl '>
        <div className='absolute inset-0 bg-gradient-to-tr from-white via-transparent to-transparent rounded-xl dark:bg-gradient-to-tr dark:from-primary-subtleDark dark:via-transparent dark:to-transparent' />
        <Image
          src={'/lupe dashed.svg'}
          alt='background image'
          quality={100}
          priority={true}
          width={1920}
          height={1080}
          className='filter dark:brightness-[0.5] dark:grayscale dark:mix-blend-darken'
        />
      </div>
      <div className='grid grid-cols-1 gap-6 place-content-center place-items-center p-5'>
        <h1 className='text-6xl font-bold text-black  dark:text-white '>
          Get in touch with us
        </h1>
        <p className='text-sm text-gray-400'>
          Get the latest news and updates from us.
        </p>
        <GooeyButton />
      </div>
    </footer>
  );
};
