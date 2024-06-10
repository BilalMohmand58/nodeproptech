import React from "react";
// import { getPagination, pagination } from "@/utilits";
// import Link from "next/link";
import CardBody from "./CardBody";
const BlogCard = ({ posts }) => {
  return (
    <>
      <div className="container">
        {/* Moving Blog List Shortcode */}
        <div className="neoh_fn_moving_blog">
          <ul>
            {posts.map((post) => (
              <li key={post?.fields.slug}>
                <CardBody post={post} />
              </li>
            ))}
          </ul>
        </div>
        {/* !Moving Blog List Shortcode */}
        {/* Pagination */}
        {/* <div className="neoh_fn_pagination">
          <ul>
            {state &&
              state.map((s, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={` ${active === s ? "current" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(s);
                    }}
                  >
                    {s}
                  </a>
                </li>
              ))}
          </ul>
        </div> */}
        {/* !Pagination */}
      </div>
    </>
  );
};

export default BlogCard;
