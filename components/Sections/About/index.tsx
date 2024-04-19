import React from 'react';

export default function About() {
  return (
    <section className="py-8 px-4 md:py-16 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 mb-8 md:mb-0">
          <p className="text-xl font-thin text-primary-accent">Who we are</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-medium text-black dark:text-white leading-loose">
            We are a team of experienced web developers and designers who are passionate about creating innovative and effective digital solutions for businesses of all sizes. Our mission is to help our clients succeed online by crafting custom websites and web applications that are both visually stunning and highly functional.
          </h3>
        </div>
      </div>
    </section>
  );
}
