import Image from 'next/image';
import React from 'react';
import BookingForm from './_components/booking-form';

const BookPage = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-16 '>
      <div className='flex flex-col items-center w-full max-w-7xl space-y-8'>
        <div className='flex flex-col md:flex-row justify-between w-full items-center space-y-8 md:space-y-0'>
          <div className='space-y-4 md:w-2/3'>
            <h1 className='text-8xl font-bold tracking-tight '>
              It&apos;s nice to meet ya
            </h1>
          </div>
          <div className='md:w-1/3 flex justify-center'>
            <Image
              src='/stock.jpg'
              alt='Contact Person'
              width={200}
              height={200}
              className='rounded-lg'
              draggable='false'
            />
          </div>
        </div>
        <div className='w-full h-px bg-gray-200 dark:bg-white/10' />
        <BookingForm />
      </div>
    </div>
  );
};

export default BookPage;
