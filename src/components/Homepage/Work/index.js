import React from "react";
import "./work.scss";

import Sachajuan from "assets/icons/sachajuan.svg";
import Kemenpar from "assets/icons/wonderful.svg";
import Binabud from "assets/icons/binabud.svg";
import Optimus from "assets/icons/optimus.svg";
import Binar from "assets/icons/binar.svg";
import PolresJakut from "assets/icons/polres.svg";

export default function Work() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <p className="client-title">A few clients I've worked with</p>
        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
          <img className="client-logo mx-auto d-block" src={Sachajuan} alt="sacahjuan" />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
          <img className="client-logo mx-auto d-block" src={Kemenpar} alt="kemenpar" />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
          <img className="client-logo mx-auto d-block" src={Optimus} alt="kemenpar" />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
          <img className="client-logo mx-auto d-block" src={PolresJakut} alt="kemenpar" />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
          <img className="client-logo mx-auto d-block" src={Binar} alt="kemenpar" />
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
          <img className="client-logo mx-auto d-block" src={Binabud} alt="kemenpar" />
        </div>
      </div>
    </div>
  );
}
