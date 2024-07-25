import React from 'react'

// import icons from react-icons website

import { FaGithub } from 'react-icons/fa';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

//import { motion } from 'framer-motion';

//import { fadeIn } from '../variants';

const Socials = () => {
  return (
    <div className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className='container mx-auto flex'>
            <div className='h-[96px] max-w-[460px] px-0 flex items-center justify-between text-2x1 text-white/50 text-[25px] gap-x-6 mx-auto lg:mx-0'>
                <a href='http://www.linkedin.com/in/raymondguan540'target="_blank">
                    <BsLinkedin />
                </a>
                <a href='https://github.com/Raymond540'target="_blank">
                    <FaGithub />
                </a>
                <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=rayguanwe@gmail.com' target="_blank">
                    <SiGmail />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100008736765927' target="_blank">
                    <BsFacebook />
                </a>
            </div>
        </div>
    </div>
  );
};

export default Socials;