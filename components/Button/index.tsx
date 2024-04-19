import { MoveUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import styles from './button.style.module.scss';
import React from 'react';

interface GooeyButtonProps {}


const GooeyButton = () => {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <div
      className='group relative inline-flex items-center'
      x-data='{ hover: false }'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width='0'
        height='0'
        className='absolute hidden'
        color-interpolation-filters='sRGB'
      >
        <defs>
          <filter id='buttonFilter'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='5'
              result='blur'
            ></feGaussianBlur>
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='buttonFilter'
            ></feColorMatrix>
            <feComposite
              in='SourceGraphic'
              in2='buttonFilter'
              operator='atop'
            ></feComposite>
            <feBlend in='SourceGraphic' in2='buttonFilter'></feBlend>
          </filter>
        </defs>
      </svg>
      <a
        href='#'
        className='group relative inline-flex outline-none focus:outline-none'
        style={{
          filter: 'url(#buttonFilter)',
        }}
      >
        <div className='border-default bg-[#aefa1b] relative inline-flex w-auto items-center justify-center overflow-hidden rounded-full px-5 py-2 leading-tight text-gray-600 shadow-none'>
          <div className='relative inline-flex flex-shrink-0'>
            <div>Start a project</div>
          </div>
        </div>
        <div className='bg-[#aefa1b] js-button-icon -ml-1 flex h-9 w-9 flex-shrink-0 transform items-center justify-center overflow-hidden rounded-full transition-transform xl:group-hover:translate-x-3 xl:group-hover:rotate-45 duration-300'></div>
      </a>
      <div className='js-button-arrow absolute right-0 top-0 z-20 flex h-9 w-9 transform items-center justify-center transition-transform xl:group-hover:translate-x-3 xl:group-hover:rotate-45 duration-300'>
        <div className='relative overflow-hidden text-gray-600'>
          <div className='js-button-arrow-icon-primary relative left-0 top-0 transform transition-transform duration-300'>
            <svg
              className='h-3 w-3 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path d='M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z'></path>
            </svg>
          </div>
          <div className='js-button-arrow-icon-secondary absolute left-0 top-0 -translate-x-full translate-y-full duration-300 transform transition-transform'>
            <svg
              className='h-3 w-3 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path d='M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z'></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GooeyButton;
