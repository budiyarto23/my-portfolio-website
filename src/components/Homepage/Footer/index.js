import React from "react";
import "./footer.scss";


export default function Footer() {
  return (
    <div className="container-fluid p-0 based-footer">
        <div className="d-flex flex-column justify-content-center">
          <p className="footer-title text-center" style={{ paddingTop: '36px'}}>
            © 2022 Budiyarto Portfolio
          </p>
        </div>
    </div>
  );
}
