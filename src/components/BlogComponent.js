import React, { useEffect, useState } from "react";

import CardBody from "./blog/CardBody";
const BlogComponent = ({ posts }) => {
  return (
    <>
      <div className="container" style={{ paddingTop: "30px" }}>
        {/* Moving Blog List Shortcode */}
        <div className="neoh_fn_moving_blog">
          <ul>
            {posts.slice(0, 3).map((post) => (
              <li key={post.id}>
                <CardBody post={post} />
              </li>
            ))}
          </ul>
        </div>
        {/* !Moving Blog List Shortcode */}
        {/* Pagination */}
      </div>
    </>
  );
};

export default BlogComponent;
