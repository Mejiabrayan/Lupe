import Image from 'next/image';
import React from 'react';
import BookingForm from './_components/booking-form';

const BookPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
      <div className='relative'>
        <Image
          src='/lupe dashed.svg'
          alt='Contact Person'
          layout='fill'
          className='rounded-lg bg-cover'
          draggable='false'
        />
      </div>
      <div className='flex flex-col items-center justify-center px-4 py-16'>
        <div className='w-full max-w-md'>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookPage;
