import React from "react";
import "./caseStudy.scss";

import Navbar from "components/Homepage/Navbar";
import Button from "elements/Button";
import Footer from "components/Homepage/Footer";

import data from "Json/homePage.json";

export default function CaseStudy() {
  return (
    <div className="container-fluid p-0">
      <header className="case-study-bg">
        <Navbar />

        <div className="container based-case-study-container">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="title-sub-container">
              <p className="title-case-study">Case Study</p>
              <p className="subtitle-case-study">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                rutrum sed purus nec dapibus.
              </p>
            </div>
            {data.caseStudy.map((item, index) => {
              return (
                <div class="card img-fluid main-card-bg" key={index}>
                  <img class="card-img-top" src={item.thumbnail} alt="ruei" />
                  <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <h4 class="title-case mx-auto">{item.title}</h4>
                    <p class="subtitle-case mx-auto">{item.description}</p>
                    <div className="mx-auto">
                      <Button
                        type="button"
                        className="btn btn-outline-light btn-outline-custom"
                        onClick={"/detail-case-study"}
                        style={{ paddingLeft: 20, paddingRight: 20 }}
                      >
                        See Detail
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </header>
    </div>
  );
}
