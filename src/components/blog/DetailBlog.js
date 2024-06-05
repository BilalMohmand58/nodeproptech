import React from "react";
import Link from "next/link";
import Head from "next/head";
const DetailBlog = ({ blog }) => {
  const { title, discription, date, image, thumbnail, slug, shortDiscription } =
    blog?.fields;

  const articleUrl = `https://nodeproptech.com/blog/${slug}`;

  const shareUrl = encodeURIComponent(articleUrl);
  return (
    <>
      <Head>
        <title>Blog | {title}</title>
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
                <Link legacyBehavior href="/">
                  Home
                </Link>
                <span className="separator">/</span>
                <Link legacyBehavior href="/blog">
                  Blog
                </Link>
                <span className="separator">/</span>
                <span className="current">{title}</span>
              </p>
            </div>
            <div className="single_img">
              <img src={"https:" + image?.fields?.file?.url} alt="" />
            </div>
            {/* Page With Sidebar */}
            <div className="neoh_fn_wsidebar">
              {/* Left Sidebar */}
              <div className="sidebar_left">
                {/* Mini Items  */}
                <div className="neoh_fn_minis">
                  <div className="m_item">
                    <a href="#">{date}</a>
                  </div>
                  <div className="m_item">
                    <span>
                      By <a href="#">Admin</a>
                    </span>
                  </div>
                  {/* <div className="m_item">
                    <a href="#comments">3 Comments</a>
                  </div> */}
                </div>
                {/* !Mini Items  */}
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
                  <p>{discription}</p>

                  {/* <p>
                    Suspendisse dignissim ultricies iaculis. Suspendisse
                    ultrices turpis mi, non tincidunt orci interdum tempor.
                    Praesent venenatis, lorem egestas consequat tempor, nunc
                    neque venenatis risus, vitae interdum ipsum ipsum eget
                    purus. Proin ac leo non est imperdiet commodo. Donec dictum
                    augue ut odio feugiat vulputate. Pellentesque ultricies
                    augue in posuere ornare. Pellentesque pretium non nunc ac
                    sodales.
                  </p>
                  <p>
                    Nam et malesuada ante, in convallis libero. Aenean
                    sollicitudin egestas ante, eget porttitor leo fringilla sit
                    amet. Nam cursus neque ligula, in egestas elit porttitor
                    vel. Vestibulum ultricies tempus orci a auctor. Curabitur
                    sed pretium lacus, eget cursus dui. Aliquam at ex sit amet
                    urna interdum dignissim vel non dolor. Pellentesque mi nibh,
                    sollicitudin at neque id, tincidunt molestie lorem. Nulla
                    facilisi. Phasellus viverra mi ut sapien efficitur, sit amet
                    suscipit lorem commodo. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p> */}
                </div>
                {/* !Single Description */}
                {/* Author Information Box */}
                {/* <div className="neoh_fn_author_info">
                  <div className="info_img">
                    <img
                      src="https://www.themaidaan.com/_next/static/media/logo.ec4dcbc9.png"
                      alt=""
                    />
                  </div>
                  <div className="info_desc">
                    <h4 className="fn_title">Maidaan</h4>
                    <p className="fn_desc">
                      Comprehensive real estate marketing solutions under one
                      roof.
                    </p>
                    {/* <ul className="social">
                      <li>
                        <a href="#">
                          <i className="fn-icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-behance" />
                        </a>
                      </li>
                    </ul> 
                  </div> 
                </div> */}
                {/* !Author Information Box */}
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
                    <div className="about_img">
                      {/* <div className="img_inner">
                        <img src="../../img/thumbs/1-1.jpg" alt="" />
                         <div
                          className="abs_img"
                          data-bg-img="../../img/widgets/about.jpg"
                        /> 
                      </div>*/}
                    </div>
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
                  <img src={"https:" + thumbnail?.fields?.file?.url} alt="" />
                </div>
                {/* !Widget (Banner) */}
                {/* Widget (Subscribe) */}
                {/* <div className="widget widget-subscribe">
                  <div className="neoh_fn_widget_subscribe">
                    <div className="desc">
                      <img
                        src="../../svg/email.svg"
                        alt=""
                        className="fn__svg"
                      />
                      <h3 className="fn_title">Newsletter</h3>
                      <p className="fn_desc">
                        Get to know about the latest trends, the best in crypto.
                      </p>
                    </div>
                    <div className="form">
                      <input type="text" placeholder="Email Address" />
                      <a href="#" className="neoh_fn_button only_text">
                        <span className="text">Subscribe</span>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* !Widget (Subscribe) */}
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
