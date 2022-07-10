import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./navbar.scss";

import Logo from "assets/icons/nav-logo.svg";

export default function Header() {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg nav-custom"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo-brand" width={50} height={50} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav navs-menu">
            <li
              className={
                splitLocation[1] === ""
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "case-study"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/case-study" style={{ textDecoration: "none" }}>
                Case Study
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "blog"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/blog" style={{ textDecoration: "none" }}>
                Blog
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "about"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
}
