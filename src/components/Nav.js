import React from 'react';

// import icons from react-icons website
// install : npm install react-icons --save 
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
// ^ import icons like this 

// import scroll animation, button on click 

import { Link } from 'react-scroll';
 
const Nav = () => {
  return (
    <nav className='fixed top-2 lg:top-8 w-full overflow-hidden z-50'>
      {/* puts the icon on the bottom of page with 2 sides,8 bottom padding 8*/}
      <div className='container mx-auto'>
        {/*asd*/}
        <div className='w-full bg-black/20 h-[96px] m-2 rounded-lg backdrop-blur-2x1 max-w-[460px] mx-auto px-5 flex items-center justify-between text-2x1 text-white/50'>
          {/* strectes container to size, makes it black with a height, trasparency blur, rounded edges, max width set auto based on page resize, center contents in container, justify between adds spacing bewteen icons...*/}
          <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            {/* setting cursor size, manage how icon grows or shrinks to fit space, aligns the icons/items on cross axis, */}
            <BiHomeAlt />
          </Link>
          <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            {/* activeClass : acts as its own exection(class), smooth scrolling*/}
            <BiUser />
          </Link>
          <Link to='services' activeClass='active' smooth={true} spy={true}className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          <Link to= 'work' activeClass='active' smooth={true} spy={true}className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
