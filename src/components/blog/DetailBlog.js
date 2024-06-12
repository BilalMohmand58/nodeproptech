import React from "react";
import Link from "next/link";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const DetailBlog = ({ blog }) => {
  if (!blog || !blog.fields) {
    return <p>Loading...</p>; // or handle this case appropriately
  }

  const {
    title,
    discription, // assuming this is a rich text field
    date,
    image,
    thumbnail,
    slug,
    shortDiscription,
  } = blog.fields;

  const articleUrl = `https://nodeproptech.com/blog/${slug}`;
  const shareUrl = encodeURIComponent(articleUrl);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={shortDiscription} />
      </Head>
      <div className="neoh_fn_blog_single neoh_fn_single">
        {/* Single Background */}
        <div className="single_bg" />
        {/* !Single Background */}
        {/* Single Content */}
        <div className="single_content">
          <div className="container" id="blog-single-content">
            <div className="neoh_fn_share">
              <h5 className="label">Share:</h5>
              <ul>
                <li>
                  <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`}>
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  >
                    <i className="fn-icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/share?url=${shareUrl}`}>
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`}
                  >
                    <i className="fn-icon-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="neoh_fn_breadcrumbs">
              <p>
                <Link href="/" legacyBehavior>
                  Home
                </Link>
                <span className="separator">/</span>
                <Link href="/blog" legacyBehavior>
                  Blog
                </Link>
                <span className="separator">/</span>
                <span className="current">{title}</span>
              </p>
            </div>
            <div className="single_img">
              {image &&
                image.fields &&
                image.fields.file &&
                image.fields.file.url && (
                  <img src={"https:" + image.fields.file.url} alt={title} />
                )}
            </div>
            {/* Page With Sidebar */}
            <div className="neoh_fn_wsidebar">
              {/* Left Sidebar */}
              <div className="sidebar_left">
                {/* Mini Items */}
                <div className="neoh_fn_minis">
                  <div className="m_item">
                    <a href="#">{date}</a>
                  </div>
                  <div className="m_item">
                    <span>
                      By <a href="#">Admin</a>
                    </span>
                  </div>
                </div>
                {/* !Mini Items */}
                {/* Single Title */}
                <div className="single_title">
                  <h2 className="fn_title">{title}</h2>
                  <div className="categories">
                    <a href="/">Technalogy</a>, <a href="/">Node</a>,{" "}
                    <a href="/">Property</a>
                  </div>
                </div>
                {/* !Single Title */}
                {/* Single Description */}
                <div className="single_desc">
                  {discription && documentToReactComponents(discription)}
                </div>
                {/* !Single Description */}
                {/* Tags */}
                <br />
                <div className="neoh_fn_tags">
                  <h4 className="label">Tags:</h4>
                  <a href="#">nodeprop</a>
                  <span>,</span>
                  <a href="#">proptech</a>
                  <span>,</span>
                  <a href="#">technalogy</a>
                  <span>,</span>
                  <a href="#">property</a>
                </div>
                {/* !Tags */}
              </div>
              {/* !Left Sidebar */}
              {/* Right Sidebar */}
              <div className="sidebar_right">
                {/* Widget (about) */}
                <div className="widget">
                  <div className="neoh_fn_widget_about">
                    <div className="about_img" />
                    <div className="afwa_title">
                      <h3>Node PropTech</h3>
                      <p>
                        <a href="info@themaidaan.com">info@themaidaan.com</a>
                      </p>
                    </div>
                    <div className="afwa_desc">
                      <p>
                        Immerse yourself in cutting-edge technologies and
                        services that are molding the future of property
                        investment and management.
                      </p>
                    </div>
                    <div className="afwa_signature">
                      <img
                        src="../../img/logo.png"
                        alt=""
                        style={{ width: "180px" }}
                      />
                    </div>
                  </div>
                </div>
                {/* !Widget (about) */}
                {/* Widget (social) */}
                <div className="widget widget-social">
                  <div className="wid-title">
                    <span className="text">Subscribe &amp; Follow</span>
                    <span className="icon" />
                  </div>
                  <div className="neoh_fn_widget_social">
                    <ul>
                      <li>
                        <a href="https://twitter.com/TheNodePropTech">
                          <i className="fn-icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/TheNodePropTech">
                          <i className="fn-icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/node.proptech/">
                          <i className="fn-icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/nodeproptech">
                          <i className="fn-icon-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* !Widget (social) */}
                {/* Widget (Banner) */}
                <div className="widget widget-banner">
                  {thumbnail &&
                    thumbnail.fields &&
                    thumbnail.fields.file &&
                    thumbnail.fields.file.url && (
                      <img src={"https:" + thumbnail.fields.file.url} alt="" />
                    )}
                </div>
                {/* !Widget (Banner) */}
              </div>
              {/* !Right Sidebar */}
            </div>
            {/* !Page With Sidebar */}
          </div>
        </div>
        {/* !Single Content */}
      </div>
    </>
  );
};

export default DetailBlog;
