import React from "react";
// import { useNavigate } from "react-router-dom";

import "./header.scss";

import Email from "assets/icons/email.svg";
import LinkedIn from "assets/icons/linkedin.svg";
import Figma from "assets/icons/figma.svg";
import Dribbble from "assets/icons/dribbble.svg";
import Upwork from "assets/icons/upwork.svg";

import Button from "elements/Button";

export default function Header() {
  // const navigate = useNavigate();

  return (
    <div className="container header-position">
      
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p className="large-title">
            <span className="span-font">Budiyarto</span> is a product designer
            who loves to craft a good story.
          </p>
          <p className="large-description mb-5">
            I do website and mobile design. I am currently working at Binar
            Academy and am open to a new opportunities.
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
              <img src={Email} alt="email-icon" />
            </a>
            <a
              className="socmed-position"
              href="https://www.linkedin.com/in/ahmad-budiyarto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="email-icon" />
            </a>
            <a
              className="socmed-position"
              href="https://www.figma.com/@bdyhm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Figma} alt="email-icon" />
            </a>
            <a
              className="socmed-position"
              href="https://www.dribbble.com/bdyhm_dsgn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dribbble} alt="email-icon" />
            </a>
            <a
              className="socmed-position"
              href="https://www.upwork.com/freelancers/~01b04ef28aee445c94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Upwork} alt="email-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
