import React from "react";
import propTypes from "prop-types";
import "./blog.scss";

export default function Blog(props) {
  const maxLengthDesc = 80;
  const maxLengthTitle = 60;

  return (
    <div className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 ${props.className}`}>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className={`card-product ${props.class}`}>
          <div className="card-item-product">
            <div className="embed-responsive">
              <img
                src={props.thumbnailImage}
                className="card-img-top"
                alt="alternate"
              />
            </div>
            <div className="card-info-product">
              <h2 className="card-title-product">
                {props.productName.length > maxLengthTitle
                  ? `${props.productName.substring(0, maxLengthTitle)} ...`
                  : props.productName}
              </h2>
              <p className="card-text-product">
                {props.productDescription.length > maxLengthDesc
                  ? `${props.productDescription.substring(
                      0,
                      maxLengthDesc
                    )} ...`
                  : props.productDescription}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

Blog.propTypes = {
  thumbnailImage: propTypes.string,
  productName: propTypes.string,
  productDescription: propTypes.string,
  url: propTypes.string,
  id: propTypes.string,
  className: propTypes.string,
  class: propTypes.string,
};
