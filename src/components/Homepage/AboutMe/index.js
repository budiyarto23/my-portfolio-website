import React from "react";
import "./aboutme.scss";

import Button from "elements/Button";

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="d-flex flex-row bg-light">
            <p className="about-me-title">
              I have been able to provide a consistent approach during
              challenging development periods.
            </p>
            <Button
              type="button"
              className="btn btn-outline-light btn-outline-custom"
              onClick={"/detail-case-study"}
              style={{ paddingLeft: 20, paddingRight: 20 }}
            >
              Details about me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
