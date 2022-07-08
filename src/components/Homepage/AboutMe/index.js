import React from "react";
import "./aboutme.scss";

import Button from "elements/Button";

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="about-me-container">
            <p className="about-me-title">
              I have been able to provide a consistent approach during
              challenging development periods.
            </p>
            <Button
              type="button"
              className="btn btn-light btn-light-custom"
              onClick={"/detail-case-study"}
              style={{ paddingLeft: 30, paddingRight: 30 }}
            >
              Details about me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
