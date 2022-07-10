import React from "react";
import "./blog.scss";
import BlogCard from "elements/Blog";

export default function Blog(props) {
  return (
    <div className="container-fluid p-0 based-blog-container">
      <header className="blog-bg mt-5">
        <div className="container">
          <div className="d-flex flex-row justify-content-between title-subtitle-container">
            <div className="d-flex flex-column">
              <p className="blog-title">Blog</p>
              <p className="blog-subtitle">
                I have crafted a story about product design on a simple blog.
              </p>
            </div>
            <a
              href="/blog"
              className="blog-expand"
            >
              See More
            </a>
          </div>
          <div className="row responsive-card">
            {props.data.map((item, index) => {
              return (
                <BlogCard
                  url={item.url}
                  className={"mobile-card"}
                  class={"height-responsive"}
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
      </header>
    </div>
  );
}
