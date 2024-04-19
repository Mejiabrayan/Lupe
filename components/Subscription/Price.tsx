'use client';
import { CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

const Price = () => {
  const [isBasic, setIsBasic] = React.useState<boolean>(false); // Set the default to Pro

  const prices = [
    {
      title: 'Basic',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom website design',
        'Responsive layout',
        '1 year domain and hosting',
        'Basic SEO optimization',
        '5 pages',
      ],
      price: 1500,
    },
    {
      title: 'Pro',
      description: 'Ideal for growing businesses and online stores',
      features: [
        'Custom website design and development',
        'Responsive and mobile-friendly',
        '2 years domain and hosting',
        'Advanced SEO optimization',
        'E-commerce integration',
        '10 pages',
        'Ongoing maintenance and updates',
      ],
      price: 2500,
    },
  ];

  return (
    <>
      <div className='grid grid-cols-1 gap-6 place-content-center place-items-center'>
        {isBasic ? (
          <div className='border rounded-md p-5 bg-transparent shadow-md backdrop-blur-lg flex flex-col justify-between col-span-1'>
            <div className='space-y-3'>
              <h1 className='text-2xl font-bold'>{prices[1].title}</h1>
              <h2 className='text-2xl font-bold'>${prices[1].price}</h2>
              <Switch checked={isBasic} onClick={() => setIsBasic(!isBasic)} />
              <p className='text-sm text-gray-400'>{prices[1].description}</p>
            </div>
            <div className='space-y-3 mt-4'>
              {prices[1].features.map((feature, index) => {
                return (
                  <div key={index} className='flex items-center gap-1.5'>
                    <CheckCircle className='w-5 h-5 text-primary-accent/80' />
                    <h3 className='text-sm text-gray-400'>{feature}</h3>
                  </div>
                );
              })}
            </div>
            <Button className='w-full mt-4'>Start Now</Button>
          </div>
        ) : (
          <div className='border rounded-md p-5 bg-transparent shadow-md backdrop-blur-lg flex flex-col justify-between col-span-1'>
            <div className='space-y-3'>
              <h1 className='text-2xl font-bold'>{prices[0].title}</h1>
              <h2 className='text-2xl font-bold'>${prices[0].price}</h2>
              <Switch checked={isBasic} onClick={() => setIsBasic(!isBasic)} />
              <p className='text-sm text-gray-400'>{prices[0].description}</p>
            </div>
            <div className='space-y-3 mt-4'>
              {prices[0].features.map((feature, index) => {
                return (
                  <div key={index} className='flex items-center gap-1.5'>
                    <CheckCircle className='w-5 h-5 text-primary-accent/80' />
                    <h3 className='text-sm text-gray-400'>{feature}</h3>
                  </div>
                );
              })}
            </div>
            <Button className='w-full mt-4'>Start Now</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Price;
