import React from "react";
import { useNavigate } from "react-router-dom";

import "./case.scss";

import Button from "elements/Button";

import CaseImg from "assets/images/detail-case-1.png";

export default function Case() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0 based-case-container">
      <header className="case-bg">
        <div className="container">
          <p className="case-study-title">Case Study</p>
          <p className="case-study-subtitle">
            See the details of the process I did to solve user problems and
            design the product.
          </p>
          <div className="row">
            
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card img-fluid main-card-bg-1">
                <img
                  className="card-img-top img-for-home"
                  src={CaseImg}
                  alt="ruei"
                />
                <div className="card-img-overlay overlay-for-home d-flex flex-column justify-content-center">
                  <h4 className="case-title mx-auto">
                    Microsite Diving Indonesia
                  </h4>
                  <p className="case-subtitle mx-auto">
                    Diving Indonesia is a part of Kemenparekraf to promote and
                    increase diving tourism in Indonesia.
                  </p>
                  <div className="mx-auto">
                    <Button
                      type="button"
                      className="btn btn-outline-light btn-outline-custom"
                      onClick={() => navigate("/detail-case-study")}
                      style={{ paddingLeft: 20, paddingRight: 20 }}
                    >
                      See detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card img-fluid main-card-bg-1">
                <img
                  className="card-img-top img-for-home"
                  src={CaseImg}
                  alt="ruei"
                />
                <div className="card-img-overlay overlay-for-home d-flex flex-column justify-content-center">
                  <h4 className="case-title mx-auto">
                    Online Registration System
                  </h4>
                  <p className="case-subtitle mx-auto">
                    The online registration system was built to manage the
                    registration and selection process for foreign exchange
                    students.
                  </p>
                  <div className="mx-auto">
                    <Button
                      type="button"
                      className="btn btn-outline-light btn-outline-custom"
                      onClick={() => navigate("/coming-case-study")}
                      style={{ paddingLeft: 20, paddingRight: 20 }}
                    >
                      See detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}
