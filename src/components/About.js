import React from 'react';

import Image from '../assets/cropped.png';

// import and install react-countup : npm install react-countup

import CountUp from 'react-countup';

// intersection observer hook : install : npm install react-intersection-observer --save 

import { useInView } from 'react-intersection-observer';

// import motion : install : npm install framer-motion

import { motion } from 'framer-motion';

// import variants 

import { fadeIn } from '../variants';

// ? below, 

const About = () => {
  const [ref, inView] =  useInView({
    threshold: 0.5, 
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* flex : contains everything into center ig, flex-col: stacks the contained contents, gap spacing between sections, flex-row: when stretched, images goes back to the left center, idk the rest, etc... */}
        {/* img */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about m-2 bg-contain bg-no-repeat h-[-2px] mix-blend-lighten bg-top rounded-full'>
          <img src={Image} alt='' />
        </motion.div>
        {/* adds transition animation to image, adjusts image sizing, position and transparency (mix-blend-lighten) */}
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'
        >
          <h2 className='h2 text-accent'>
            About Me  
          </h2>
          {/* text-accent changes the text color */}
          <h3 className='h3 mb-2'>
            Greetings! 
          </h3>
          {/* h3 : imported font, mb-4 : spacing */}
          <p className='mb-2'>
            My name is Raymond Guan. I'm a full stack developer based in California. 
            I'm a graduate of 2023 from University of California Santa Cruz with a degree in Techology Information Management.
            <br />
            <br />
            My story unfolds at the intersection of melodies, pixels, and lines of code. 
            Passionate about web development 
            Bridge the gap between cs and business, information technology, combining elements of technology, business, and information management
            prepare graduates for dynamic roles in today's technology-driven business environment
            I find joy in wearing multiple hats – from architecting sleek front-end interfaces to crafting robust back-end solutions.
            With proficiency in a myriad of languages and frameworks, I pride myself on being a versatile developer who thrives on challenges and embraces the ever-evolving nature of the tech world.
            <br />
            <br />
            Beyond the screen and lines of code, you'll find me exploring the world of melodies on my guitar or 
            actively gaming, navigating virtual worlds and conquering challenges that mirror the complexity of my coding endeavors.
            <br />
          </p>
          {/* mb-6 adjusts the spacing and margin around the section */}
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
