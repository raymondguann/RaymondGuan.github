import React from 'react'

// import icons 

import { PythonOriginalWordmark,  JavascriptOriginal, JavaOriginal, Html5Original, Css3OriginalWordmark, COriginal, MysqlOriginal, GitOriginal, VscodeOriginal, FigmaOriginal, ReactOriginal, TailwindcssPlain, BootstrapPlain, NodejsOriginal } from 'devicons-react';

// import motion animation 

import { motion } from 'framer-motion';

// import variants (transitions, fadeIn)

import { fadeIn } from '../variants';

// import react carousel animation package 

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 364, min: 0 },
      items: 2
    }
  };

  return (
    <section className='section text-[50px] flex items-center' id='services'>
      <div className='container mx-auto'>
        <motion.h2 
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex font-primary text-[32px] mb-16 text-accent justify-content: space-evenly bg-transparent border-b py-10'>Skills</motion.h2> 
        <Carousel responsive={responsive}>
          <div className='item'>
            <PythonOriginalWordmark className=''/>
            <h3 className='text-[20px] text-gradient'>Python</h3>
          </div>
          <div className='item'>
            <JavascriptOriginal/>
            <h3 className='text-[20px] text-gradient'>Javascript</h3>
          </div>
          <div className='item'>
            <JavaOriginal/>
            <h3 className='text-[20px] text-gradient'>Java</h3>
          </div>
          <div className='item'>
            <Html5Original/>
            <h3 className='text-[20px] text-gradient'>HTML</h3>
          </div>
          <div className='item'>
            <Css3OriginalWordmark/>
            <h3 className='text-[20px] text-gradient'>CSS</h3>
          </div>
          <div className='item'>
            <COriginal/>
            <h3 className='text-[20px] text-gradient'>C</h3>
          </div>
          <div className='item'>
            <MysqlOriginal/>
            <h3 className='text-[20px] text-gradient'>SQL</h3>
          </div>
        </Carousel>
        <div className='mb-8'></div>
        <motion.h2 
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex font-primary text-[32px] mb-16 text-accent justify-content: space-evenly bg-transparent border-b py-10'>Technologies</motion.h2> 
        <Carousel responsive={responsive}>
        <div className='item'>
            <GitOriginal className=''/>
            <h3 className='text-[20px] text-gradient'>Git</h3>
          </div>
          <div className='item'>
            <VscodeOriginal/>
            <h3 className='text-[20px] text-gradient'>VS Code</h3>
          </div>
          <div className='item'>
            <FigmaOriginal/>
            <h3 className='text-[20px] text-gradient'>Figma</h3>
          </div>
          <div className='item'>
            <ReactOriginal/>
            <h3 className='text-[20px] text-gradient'>React</h3>
          </div>
          <div className='item'>
            <TailwindcssPlain/>
            <h3 className='text-[20px] text-gradient'>Tailwind</h3>
          </div>
          <div className='item'>
            <BootstrapPlain/>
            <h3 className='text-[20px] text-gradient'>Bootstrap</h3>
          </div>
          <div className='item'>
            <NodejsOriginal/>
            <h3 className='text-[20px] text-gradient'>Node Js</h3>
          </div>
        </Carousel>
      </div>
    </section>
    
    );
  }

  export default Services;

