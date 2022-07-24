import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./caseStudy.scss";

import Navbar from "components/Homepage/Navbar";
import Button from "elements/Button";
import Footer from "components/Homepage/Footer";

import ThumbnailDiving from "assets/images/case-thumbnail-1.png";
import ThumbnailAfs from "assets/images/case-thumbnail-2.png";

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0">
      <header className="case-study-bg">
        <Navbar />

        <div className="container based-case-study-container">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="title-sub-container">
              <p className="title-case-study">Case Study</p>
              <p className="subtitle-case-study">
                See the details of the process I did to solve user problems and
                design the product.
              </p>
            </div>

            <div className="card img-fluid main-card-bg">
              <img className="card-img-top" src={ThumbnailDiving} alt="ruei" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <h4 className="title-case mx-auto">Microsite Diving Indonesia</h4>
                <p className="subtitle-case mx-auto">
                  Diving Indonesia is a part of Kemenparekraf to promote and
                  increase diving tourism in Indonesia.
                </p>
                <div className="mx-auto">
                  <Button
                    type="button"
                    className="btn btn-outline-light btn-outline-custom"
                    onClick={ () => navigate('/detail-case-study') }
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                  >
                    See detail
                  </Button>
                </div>
              </div>
            </div>

            <div className="card img-fluid main-card-bg">
              <img className="card-img-top img-case-thumb" src={ThumbnailAfs} alt="ruei" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <h4 className="title-case mx-auto">Online Registration System</h4>
                <p className="subtitle-case mx-auto">
                  The online registration system was built to manage the
                  registration and selection process for foreign exchange
                  students.
                </p>
                <div className="mx-auto">
                  <Button
                    type="button"
                    className="btn btn-outline-light btn-outline-custom"
                    onClick={ () => navigate('/detail-case-study-or') }
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                  >
                    See detail
                  </Button>
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
