import React from 'react';

// import images 

import Image from '../assets/tree.png';

// import icons from react-icon 

import { FaGithub, FaYoutube, FaGit } from 'react-icons/fa';

// import typing animation : install : npm install react-type-animation

import { TypeAnimation } from 'react-type-animation';

// import motion : install : npm install framer-motion 

import { motion } from 'framer-motion';

//import variants 

import { fadeIn } from '../variants';

import resumePDF from '../assets/Resume1.pdf';

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* flex allows it to strecth accordingly to resize, flex col puts it more towards the centered position, lg:flex-row makes it so items display in a row, items will not stretch, but can shrink, items will stretch to fill size of cross axis, lg: large devices(desktops) */}
        {/*text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('down', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='text-[50px] font-bold leading-[0.8] lg:text-[110px]'>
            {/* enlarge and bold text (name), leading : basically line spacing throughout all sub sections*/}
            <span>Raymond Guan</span>
            {/*span targets a section of text with js functions*/}
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            {/* margin bottom, increase text size, target/remove/change text or something then bring it back (i am a (insert) got bigger but the rest of the text didnt), bold font, uppercase font, leading:?...*/}
            <span className='text-white mr-4'>
            {/*mr-4: margin right*/}
            <TypeAnimation 
              sequence={[
                'Software Engineer',
                2000,
                'Aspiring Guitarist',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            /></span>
            {/* speed of type animation, sequence string font color change, string position on page change, infinite animation */}
          </motion.div>
          {/* putting the text div, p inside the div actually helps because if it wasn't, the text would be bolded as that section of text is bolded*/}
          <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-16 mx-auto lg:mx-0'>
            {/*mb: margin bottom pushed banner image down pads bottom of text*/}
            <button className='btn btn-lg' onClick={() => window.open('mailto:rayguanwe@gmail.com', '_blank')}>
              Contact Me
            </button>
            <a href={resumePDF} className='text-gradient btn-link' target="_blank" rel="noopener noreferrer">Resume</a>
          </motion.div>
        </div>
        {/*image*/}
        <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          //viewport={{once: false, amount:0.7}} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          {/* hidden: hides photo when screen is minimized to an extent, max limits how far the image can stretch (width) */}
          <img src={Image} alt='' />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
