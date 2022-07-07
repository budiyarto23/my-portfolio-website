import React from 'react';
import './about.scss';

import Navbar from 'components/Homepage/Navbar';
import Footer from 'components/Homepage/Footer';

export default function Blog() {
  return (
    <div className='container-fluid p-0'>
      <header className='case-study-bg'>
        <Navbar />

        <div className='container based-about-container'>
          <div className='title-container d-flex flex-row justify-content-center'>
            <p className='title-about'>
              Budiyarto is a product designer who loves to tell a good story
            </p>
          </div>
          <div className='container about-container'>
            <div className='row'>
              <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <div className='first-container'>
                  <p className='info-title'>Ahmad Budiyarto</p>
                  <p className='info-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi et nibh neque. Donec et diam ut risus imperdiet
                    lobortis nec congue felis. Fusce placerat tempor mauris sed
                    semper. Nunc nec turpis lacus. Maecenas pharetra pretium
                    quam, nec molestie diam rutrum eget. Mauris facilisis
                    egestas facilisis. Duis at sapien at tellus hendrerit
                    consequat sit amet sed ex. <br />
                    <br /> Vestibulum ex enim, gravida eleifend ipsum sit amet,
                    lacinia hendrerit mauris. Nunc eu mauris aliquam, malesuada
                    nisi ac, pulvinar leo. Maecenas nibh mauris, auctor id
                    imperdiet.
                  </p>
                </div>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <div className='first-container'>
                  <p className='info-title'>Digital Capabilities</p>
                  <p className='info-subtitle'>Digital Design</p>
                  <ul className='skill-list'>
                    <li className='skill-list-item'>UX Research</li>
                    <li className='skill-list-item'>UI Design</li>
                    <li className='skill-list-item'>Interaction Design</li>
                    <li className='skill-list-item'>
                      Persuasive Design Strategy
                    </li>
                    <li className='skill-list-item'>Testing</li>
                  </ul>
                  <p className='info-subtitle'>Digital Design</p>
                  <ul className='skill-list'>
                    <li className='skill-list-item'>UX Research</li>
                    <li className='skill-list-item'>UI Design</li>
                    <li className='skill-list-item'>Interaction Design</li>
                    <li className='skill-list-item'>
                      Persuasive Design Strategy
                    </li>
                    <li className='skill-list-item'>Testing</li>
                  </ul>
                </div>
                {/* <div className='about-divider'></div> */}
              </div>
              <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <div className='first-container'>
                  <p className='info-title'>Contact</p>
                  <p className='info-subtitle'>Contact me on</p>
                  <ul className='skill-list'>
                    <li className='skill-list-item'>ahmadbudiyarto@gmail.com</li>
                    <li className='skill-list-item'>LinkedIn</li>
                    <li className='skill-list-item'>Upwork</li>
                  </ul>
                  <p className='info-subtitle'>Experience</p>
                  <ul className='skill-list'>
                    <li className='skill-list-item'>Product Designer</li>
                    <li className='skill-list-item'>Interaction Designer</li>
                    <li className='skill-list-item'>Frontend Developer</li>
                  </ul>
                  <a className='download-link' href='httpd' >Download Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </header>
    </div>
  );
}
