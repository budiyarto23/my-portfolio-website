import React from 'react';
import propTypes from 'prop-types';
import './kits.scss';

export default function UiKits(props) {
  const maxLengthTitle = 65;

  return (
    <div className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 ${props.className}`}>
      <a href={props.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        <div className='kits-product'>
          <div className='kits-item-product'>
            <div className='embed-responsive'>
              <img
                src={props.thumbnailImage}
                className='kits-img-top'
                alt='alternate'
              />
            </div>
            <div className='kits-info-product'>
              <h2 className='kits-title-product'>
                {props.productName.length > maxLengthTitle
                  ? `${props.productName.substring(0, maxLengthTitle)} ...`
                  : props.productName}
              </h2>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

UiKits.propTypes = {
  thumbnailImage: propTypes.string,
  productName: propTypes.string,
  id: propTypes.string,
  url: propTypes.string,
  className: propTypes.string
};
