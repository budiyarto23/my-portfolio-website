import React, { useEffect } from 'react';
import './index.scss';

import Navbar from './Navbar';
import Header from './Header';
import Skills from './Skills';
import Work from './Work';
import Case from './Case';
import Blog from './Blog';
import Uikits from './UiKits';
import AboutMe from './AboutMe';
import Footer from './Footer';

import TheData from 'Json/homePage.json';


export default function Homepage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <header className='jumbo'>
      <div className='container-fluid p-0'>
        <Navbar />
        <Header />
        <Work />
        <Skills />
        <Case data={TheData.caseStudy} />
        <Blog data={TheData.blog} />
        <Uikits data={TheData.uikits}/>
        <AboutMe />
        <Footer />
      </div>
    </header>
  );
}
