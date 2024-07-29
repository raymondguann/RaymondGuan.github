import React from 'react';
// import motion 

import {motion} from 'framer-motion';

// import variants 

import { fadeIn } from '../variants'; 

// import images from assets folder  

import Img1 from '../assets/Portfolio.png';
import Img2 from '../assets/ExpenseL.png';
import Img3 from '../assets/TimWeb.png';
//import Img4 from '../assets/idea7.png';



const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          {/* edit this to change layout, this puts the first project under / bottom left of the screen with the block of section text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* edit this to change layout of block of text and project container 1 */}
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Projects
              </h2>
              {/* h2 : gives the text header font (predetermined font in files?, text-accent also seems to be predetermined as wel;*/}
              <button className='btn btn-sm' onClick={() => window.open('https://github.com/raymondguann?tab=repositories', '_blank', 'noopener,noreferrer')}>
                Show All Projects
                </button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* adds border to project containers, /50 decreases thickness, rounds edges*/}
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* hover effect, black transparent overlay */}
              {/* image*/}
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={Img1} 
                alt='' 
              />
              {/* hover effect but enchances image in background */}
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-500 z-50'>
                <span className='text-gradient'>React Js | Tailwind CSS</span>
              </div>
              {/* edit this to add project description, changes position of text that appears in hover effect and text transition animation popup effect*/}
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:top-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Personal Website</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-900 z-50'>
                <button className='btn btn-sm' onClick={() => window.open('https://github.com/raymondguann/RaymondGuan.github', '_blank', 'noopener,noreferrer')}>
                    Github Repo
                </button>
              </div>
              {/* there was text on the bottom margin of the container, still within the container, hides the text, gives it the same animation as pretitle */}
            </div>
          </motion.div>
          {/* end of block of left side (text and container 1), beginning of container 2 and 3  */}
          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* edit this to change layout of containers on the right side (2 and 3) */}
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* adds border to project containers, /50 decreases thickness, rounds edges*/}
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* hover effect, black transparent overlay */}
              {/* image*/}
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={Img2} 
                alt='' 
              />
              {/* hover effect but enchances image in background */}
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-500 z-50'>
                <span className='text-gradient'>HTML | CSS | Javascript</span>
              </div>
              {/* edit this to add project description, changes position of text that appears in hover effect and text transition animation popup effect*/}
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:top-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'> Expense Logger</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-900 z-50'>
                <button className='btn btn-sm' onClick={() => window.open('https://github.com/raymondguann/Expense-Logger', '_blank', 'noopener,noreferrer')}>
                    Github Repo
                </button>
              </div>
              {/* there was text on the bottom margin of the container, still within the container, hides the text, gives it the same animation as pretitle */}
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* adds border to project containers, /50 decreases thickness, rounds edges*/}
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* hover effect, black transparent overlay */}
              {/* image*/}
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={Img3} 
                alt='' 
              />
              {/* hover effect but enchances image in background */}
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-500 z-50'>
                <span className='text-gradient'>HTML | CSS</span>
              </div>
              {/* edit this to add project description, changes position of text that appears in hover effect and text transition animation popup effect*/}
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:top-24 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>TIM Website</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-900 z-50'>
                <button className='btn btn-sm' onClick={() => window.open('https://github.com/raymondguann/TIM-Website-', '_blank', 'noopener,noreferrer')}>
                    Github Repo
                </button>
              </div>
              {/* there was text on the bottom margin of the container, still within the container, hides the text, gives it the same animation as pretitle */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
