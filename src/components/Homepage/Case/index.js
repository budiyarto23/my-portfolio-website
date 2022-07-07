import React from "react";
import "./case.scss";

import Button from "elements/Button";

export default function Case(props) {
  return (
    <div className="container-fluid p-0 based-case-container">
      <header className="case-bg mt-5">
        <div className="container">
          <p className="case-study-title">Case Study</p>
          <div className="row">
            {props.data.map((item, index) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-6 col-xl-6"
                  key={index}
                >
                  <div className="card img-fluid main-card-bg-1">
                    <img className="card-img-top img-for-home" src={item.thumbnail} alt="ruei"/>
                    <div className="card-img-overlay overlay-for-home d-flex flex-column justify-content-center">
                      <h4 className="case-title mx-auto">{item.title}</h4>
                      <p className="case-subtitle mx-auto">{item.description}</p>
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
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}
