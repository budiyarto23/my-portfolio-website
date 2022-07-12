import React from "react";
import "./skills.scss";

import UXicon from "assets/icons/ux-icon.svg";
import UIicon from "assets/icons/ui-icon.svg";
import Button from "elements/Button";

export default function index() {
  return (
    <div className="container-fluid p-0 based-skill-container">
      <header className="skill-bg">
        <div className="container">
          <p className="skill-title">What can I provide you?</p>
          <p className="skill-subtitle">
            Here are the details of the things I will provide you.
          </p>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="skill-container-1 d-flex flex-column">
                <div className="frame-skill-icon">
                  <img className="skill-icon" src={UXicon} alt="dont-think" />
                </div>
                <p className="service-name">UX Design</p>
                <p className="delieverables-name">Deliverable Includes:</p>
                <ul className="deliverables-list">
                  <li className="deliverables-item">
                    Business Goals and Technical Specifications
                  </li>
                  <li className="deliverables-item">UX Research report</li>
                  <li className="deliverables-item">
                    Data synthesis (empathy map, user persona etc)
                  </li>
                  <li className="deliverables-item">
                    Sitemap, User Flow and Wireframe
                  </li>
                  <li className="deliverables-item">
                    User Testing and Usability Testing
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="skill-container-2 d-flex flex-column">
                <div className="frame-skill-icon">
                  <img className="skill-icon" src={UIicon} alt="dont-think" />
                </div>
                <p className="service-name">UI Design</p>
                <p className="delieverables-name">Deliverable Includes:</p>
                <ul className="deliverables-list">
                  <li className="deliverables-item">
                  Brand Identity (logo, color pallete, typography etc) 
                  </li>
                  <li className="deliverables-item">Design System</li>
                  <li className="deliverables-item">
                  Visual Design (high-fidelity design)
                  </li>
                  <li className="deliverables-item">Interactive Prototoype</li>
                  <li className="deliverables-item">Hi-fi & Protoype Documentation</li>
                </ul>
              </div>
            </div>

            <p className="skill-subtitle mt-5">
            Want to know the details of the service? Just hit the button below!
            </p>
            <div className="frame-skill-btn text-center">
              <Button
                type="button"
                className="btn btn-outline-light btn-outline-custom"
                onClick={() =>
                  (window.location = "mailto:ahmadbudiyarto@gmail.com")
                }
                style={{ paddingLeft: 20, paddingRight: 20 }}
              >
                Check it now
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
