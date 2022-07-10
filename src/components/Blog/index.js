import React, { useEffect } from "react";

import "./blog.scss";

import Navbar from "components/Homepage/Navbar";
import Footer from "components/Homepage/Footer";
import BlogCard from "elements/Blog";

import data from "Json/homePage.json";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid p-0">
      <header className="case-study-bg">
        <Navbar />

        <div className="container based-case-study-container">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="title-sub-container">
              <p className="title-case-study">Blog</p>
              <p className="subtitle-case-study">
                I have crafted a story about product design on a simple blog.
              </p>
            </div>
            <div className="row">
              {data.blog.map((item, index) => {
                return (
                  <BlogCard
                    url={item.url}
                    className={"mobile-card"}
                    thumbnailImage={item.thumbnail}
                    productName={item.title}
                    productDescription={item.description}
                    key={index}
                    id={item._id}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </header>
    </div>
  );
}
