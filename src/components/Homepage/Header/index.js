import React from "react";

import "./header.scss";

import Email from "assets/icons/email.png";
import LinkedIn from "assets/icons/linkedin.png";
import Figma from "assets/icons/figma.png";
import Dribbble from "assets/icons/dribbble.png";
import Github from "assets/icons/github.png";

import Button from "elements/Button";

export default function Header() {

  return (
    <div className="container header-position">
      
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p className="large-title">
            <span className="span-font">Budiyarto</span> is a product designer
            who loves to craft a good story.
          </p>
          <p className="large-description mb-5">
          I do website and mobile design. I am currently working at Binar Academy and am open to new opportunities.
          </p>
          <div className="frame-cta">
            <Button
              type="button"
              className="btn btn-primary mb-5"
              onClick={() =>
                (window.location = "mailto:ahmadbudiyarto@gmail.com")
              }
              style={{
                paddingLeft: 28,
                paddingRight: 28,
                paddingTop: 16,
                paddingBottom: 16,
              }}
            >
              Get in Touch
            </Button>
          </div>
          <div className="d-flex flex-row frame-socmed">
            <a
              className="socmed-position"
              href="mailto:ahmadbudiyarto@gmail.com"
            >
              <img className="socmed-icon" src={Email} alt="email-icon" />
            </a>
            <a
              className="socmed-position"
              href="https://www.linkedin.com/in/ahmad-budiyarto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socmed-icon" src={LinkedIn} alt="email-icon" />
            </a>
            <a
              className="socmed-position"
              href="https://www.figma.com/@bdyhm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socmed-icon" src={Figma} alt="email-icon" />
            </a>
            <a
              className="socmed-position"
              href="https://www.dribbble.com/bdyhm_dsgn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socmed-icon" src={Dribbble} alt="email-icon" />
            </a>
            {/* <a
              className="socmed-position"
              href="https://www.upwork.com/freelancers/~01b04ef28aee445c94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socmed-icon" src={Upwork} alt="email-icon" />
            </a> */}
            <a
              className="socmed-position"
              href="https://www.github.com/budiyarto23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socmed-icon" src={Github} alt="email-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
