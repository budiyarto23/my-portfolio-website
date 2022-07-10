import React, { useEffect } from 'react';

import './blog.scss';

import Navbar from 'components/Homepage/Navbar';
import Footer from 'components/Homepage/Footer';
import Card from 'elements/Blog';

import Dummy from 'assets/images/dummy-img-2.png';

export default function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className='container-fluid p-0'>
      <header className='case-study-bg'>
        <Navbar />

        <div className='container based-case-study-container'>
          <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='title-sub-container'>
              <p className='title-case-study'>Blog</p>
              <p className='subtitle-case-study'>I have crafted a story about product design on a simple blog.</p>
            </div>
            <div className='row'>
              <Card
                thumbnailImage={Dummy}
                productName={'this is title of blog'}
                productDescription={
                  'This is a subtitle of blog - regulary using lorem dolor sit amet for dummy text'
                }
                key={1}
                id={'https://www.youtube.com/'}
              />
              <Card
                thumbnailImage={Dummy}
                productName={'this is title of blog'}
                productDescription={
                  'This is a subtitle of blog - regulary using lorem dolor sit amet for dummy text'
                }
                key={1}
                id={'https://www.youtube.com/'}
              />
              <Card
                thumbnailImage={Dummy}
                productName={'this is title of blog'}
                productDescription={
                  'This is a subtitle of blog - regulary using lorem dolor sit amet for dummy text'
                }
                key={1}
                id={'https://www.youtube.com/'}
              />
              <Card
                thumbnailImage={Dummy}
                productName={'this is title of blog'}
                productDescription={
                  'This is a subtitle of blog - regulary using lorem dolor sit amet for dummy text'
                }
                key={1}
                id={'https://www.youtube.com/'}
              />
            </div>
          </div>
        </div>

        <Footer />
      </header>
    </div>
  );
}
