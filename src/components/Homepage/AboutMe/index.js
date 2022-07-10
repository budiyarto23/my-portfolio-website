import React from "react";
// import { useNavigate } from "react-router-dom";

import "./aboutme.scss";

import Button from "elements/Button";

export default function AboutMe() {
  // const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="about-me-container">
            <div className="d-flex flex-column">
            <p className="about-me-title">
            I occasionally take on freelance opportunities.
            </p>
            <p className="about-me-subtitle">Have an exciting project? Contact me by email and let's chat.</p>
            </div>
            <Button
              type="button"
              className="btn btn-light btn-light-custom"
              onClick={ () =>
                (window.location = "mailto:ahmadbudiyarto@gmail.com") }
              style={{ paddingLeft: 30, paddingRight: 30 }}
            >
              Contact me by email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
