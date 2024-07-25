import React from 'react';

// div classnames vs div id : id must be unique targeting a specific element, class does not have to be and can target multiple elements 
// id has highest specificity in CSS 

// import images 

import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='py-10'>
    {/*py:padding all over ig*/}
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo  */ }
          {/*<a href="#">
            <img src={Logo} alt='' />
            </a>*/}
          {/*button*/}
          {/*<button className='btn btn-sm'>Resume</button>*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
