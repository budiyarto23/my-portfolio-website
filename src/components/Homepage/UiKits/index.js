import React from "react";
import "./uikits.scss";
import Kits from "elements/Kits";


export default function UiKits(props) {
  return (
    <div className="container-fluid p-0 based-uikits-container">
      <header className="uikits-bg">
        <div className="container">
          <p className="uikits-title">UI Kits</p>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="row responsive-card">
              {props.data.map((item, index) => {
                return (
                  <Kits
                    className={"mobile-card"}
                    thumbnailImage={item.thumbnail}
                    productName={item.title}
                    key={index}
                    id={item._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}