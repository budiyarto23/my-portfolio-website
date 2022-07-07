import React from "react";
import "./header.scss";

import Email from "assets/icons/email.svg";
import LinkedIn from "assets/icons/linkedin.svg";
import Figma from "assets/icons/figma.svg";
import Dribbble from "assets/icons/dribbble.svg";
import Upwork from "assets/icons/upwork.svg";

import Button from "elements/Button";

export default function index() {
  return (
    <div className="container header-position">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p className="large-title">
            Budiyarto is a product designer who loves to craft a good story.
          </p>
          <p className="large-description mb-5">
            I do website and mobile design. Currently I work at Binar Academy
            and open for new opportunity.
          </p>
          <div className="frame-cta">
            <Button
              type="button"
              className="btn btn-primary mb-5"
              onClick={"#"}
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
            <a className="socmed-position" href="/case-study">
              <img src={Email} alt="email-icon" />
            </a>
            <a className="socmed-position" href="/case-study">
              <img src={LinkedIn} alt="email-icon" />
            </a>
            <a className="socmed-position" href="/case-study">
              <img src={Figma} alt="email-icon" />
            </a>
            <a className="socmed-position" href="/case-study">
              <img src={Dribbble} alt="email-icon" />
            </a>
            <a className="socmed-position" href="/case-study">
              <img src={Upwork} alt="email-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
