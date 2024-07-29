import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Socials from './components/Socials';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden gap-10 gap-y-100'>
      <Header />
      <Banner />
      <Nav />
      <Socials />
      <About />
      {<div className='h-[200px]'></div>}
      <Services />
      {<div className='h-[150px]'></div>}
      <Work />
      {<div className='h-[100px]'></div>}
      {/* ^adds extra space on the page on the bottom */}
    </div>
  );
};

export default App;
