import React from "react";
import "./blog.scss";
import BlogCard from "elements/Blog";

export default function Blog(props) {
  return (
    <div className="container-fluid p-0 based-blog-container">
      <header className="blog-bg mt-5">

        <div className="container">
          <div className="d-flex flex-row justify-content-between title-subtitle-container">
            <p className="blog-title">Blog</p>
            <a
              href="https://www.youtube.com/"
              className="blog-expand"
              target="_blank"
              rel="noreferrer"
            >
              See More
            </a>
          </div>
              <div className="row responsive-card">
                  {props.data.map((item, index) => {
                    return (
                      <BlogCard
                        className={'mobile-card'}
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
