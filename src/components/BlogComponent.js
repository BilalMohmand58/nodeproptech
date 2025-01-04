import React, { useEffect, useState } from "react";

import CardBody from "./blog/CardBody";
const BlogComponent = ({ posts }) => {
  return (
    <>
      <section id="services">
        {/* Dividers */}
        {/* <img
          src="svg/divider.png"
          alt=""
          className="fn__svg fn__divider top_divider"
        /> */}
        <img
          src="svg/divider.png"
          alt=""
          className="fn__svg fn__divider bottom_divider"
        />
        {/* !Dividers */}
        <div className="container">
        <div className="neoh_fn_title" style={{ padding: "30px" }}>
        <h3 className="fn_title" >
        Our Latest Blogs{" "}
        </h3>
        <div className="line">
          <span />
        </div>
      </div>
          {/* Moving Blog List Shortcode */}
          <div className="neoh_fn_moving_blog">
            <ul>
              {posts.slice(0, 3).map((post) => (
                <li key={post?.fields.slug}>
                  <CardBody post={post} />
                </li>
              ))}
            </ul>
          </div>
          {/* !Moving Blog List Shortcode */}
          {/* Pagination */}
        </div>
      </section>
    </>
  );
};

export default BlogComponent;
