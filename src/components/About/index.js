import React, { useEffect } from "react";

import "./about.scss";

import Navbar from "components/Homepage/Navbar";
import Footer from "components/Homepage/Footer";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid p-0">
      <header className="case-study-bg">
        <Navbar />

        <div className="container based-about-container">
          <div className="title-container d-flex flex-row justify-content-center">
            <p className="title-about">
            Hi, I'm Ahmad Budiyarto!
            </p>
          </div>
          <div className="container about-container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="first-container">
                  <p className="info-title">About me</p>
                  <p className="info-description">
                  I am dedicated to assisting companies in creating the best solutions for their digital products with a design-thinking approach. <br />
                  <br />
                  I have spent the last 4 years working in various areas of digital design, from Front-end Dev, UX/UI Design, UX/UI Design Mentor, and Product Design.
                    <br />
                    <br /> Currently, my role is Product Designer at Akar Inti Teknologi. These days my time is spent researching, designing, writing UX/UI articles, and coding.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="first-container">
                  <p className="info-title">Digital Capabilities</p>
                  <p className="info-subtitle">Digital Design</p>
                  <ul className="skill-list">
                    <li className="skill-list-item">UX Research</li>
                    <li className="skill-list-item">UI Design</li>
                    <li className="skill-list-item">Interaction Design</li>
                    <li className="skill-list-item">
                      Persuasive Design Strategy
                    </li>
                    <li className="skill-list-item">Usability Testing</li>
                  </ul>
                  <p className="info-subtitle">Web Development</p>
                  <ul className="skill-list">
                    <li className="skill-list-item">JavaScript</li>
                    {/* <li className="skill-list-item">TypeScript</li> */}
                    <li className="skill-list-item">ReactJS</li>
                    <li className="skill-list-item">CSS</li>
                    <li className="skill-list-item">HTML</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="first-container">
                  <p className="info-title">Contact</p>
                  <p className="info-subtitle">Contact me at</p>
                  <ul className="skill-list">
                    <li className="skill-list-item">
                      <a className="skill-list-item-a" href="mailto:ahmadbudiyarto@gmail.com">ahmadbudiyarto@gmail</a>
                    </li>
                    <li className="skill-list-item">
                      <a className="skill-list-item-a" href="https://www.linkedin.com/in/ahmad-budiyarto" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li className="skill-list-item">
                      <a className="skill-list-item-a" href="https://www.upwork.com/freelancers/~01b04ef28aee445c94" target="_blank" rel="noreferrer">Upwork</a>
                    </li>
                  </ul>
                  <p className="info-subtitle">Experience</p>
                  <ul className="skill-list">
                    <li className="skill-list-item">Product Designer</li>
                    <li className="skill-list-item">UX/UI Facilitator</li>
                    <li className="skill-list-item">Frontend Developer</li>
                  </ul>
                  <a className="download-link" href="https://urbancv.com/share-cv/ahmad75/deqSG7" target="_blank" rel="noreferrer">
                    Download Resume
                  </a>
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
