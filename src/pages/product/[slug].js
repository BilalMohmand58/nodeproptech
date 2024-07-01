import Layout from "@/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { dropData } from "../api/dropData";

const ProductDetails = ({}) => {
  const router = useRouter();
  const { slug } = router.query;
  // console.log("Params:", slug); // Debugging

  if (!slug) {
    // If slug is not available, render null to prevent further errors
    return null;
  }

  // Handle the case where slug is undefined
  if (!slug) {
    return <div>Loading...</div>;
  }

  const dropItem = dropData.find((item) => item.slug === slug);

  if (!dropItem) {
    return <div>Portfolio item not found!</div>;
  }

  const { title, banner, details } = dropItem;
  return (
    <>
      <Layout pageName={"ProductDetails"}>
        <div className="neoh_fn_blog_single neoh_fn_single">
          <div className="single_bg" />
          <div className="single_content">
            <div className="container" id="blog-single-content">
              <div className="neoh_fn_breadcrumbs">
                <p>
                  <Link href="/" legacyBehavior>
                    Home
                  </Link>
                  <span className="separator">/</span>
                  <Link href="/product" legacyBehavior>
                    Product
                  </Link>
                  <span className="separator">/</span>
                  <span className="current">{title}</span>
                </p>
              </div>
              <div className="single_img">
                <img src={banner} alt={title} />
              </div>
              <div className="neoh_fn_wsidebar">
                <div className="sidebar_left">
                  <div className="single_title">
                    <h2 className="fn_title">{title}</h2>

                    {/* <div className="categories">
                      <a href="/">Technology</a>, <a href="/">Node</a>,{" "}
                      <a href="/">Property</a>
                    </div> */}
                  </div>
                  <div className="single_desc">{details}</div>

                  <div className="neoh_fn_title">
                    {/* <h3 className="fn_title">Our Latest Drops</h3> */}
                    {/* <div className="line">
                      <span />
                    </div> */}
                  </div>
                  <div className="t_item_info">
                    <br />
                    <p className="fn_date">
                      <span>Invest with Confidence:</span>
                    </p>
                    <h3 className="fn_title">
                      <Link legacyBehavior href="/roadmap-single">
                        Accept the Real Estate Challenge with Us
                      </Link>
                    </h3>
                  </div>
                  <br />
                  <div className="road_item">
                    <div className="t_item">
                      <div className="t_item_img">
                        <div className="neoh_fn_gallery_1_2">
                          <div className="gallery_in">
                            <div className="item row2">
                              <img src="../../img/drops/01.jpg" alt="" />
                            </div>
                            <div className="item">
                              <img src="../../img/drops/02.jpg" alt="" />
                            </div>
                            <div className="item">
                              <img src="../../img/drops/03.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="t_item_info">
                        <br />

                        <p className="fn_desc">
                          Invest in properties with confidence, knowing that our
                          platform prioritizes integrity and long-term value.
                          Join us in revolutionizing the real estate landscape,
                          one transparent investment at a time.
                        </p>
                        <p className="fn_read">
                          <Link legacyBehavior href="/product">
                            <a className="neoh_fn_button only_text">
                              <span className="text">Product Page</span>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar_right">
                  <div className="widget">
                    <div className="neoh_fn_widget_about">
                      <div className="about_img" />
                      <div className="afwa_title">
                        <h3>Node PropTech</h3>
                        <p>
                          <a href="mailto:info@nodeproptech.com">
                            info@nodeproptech.com
                          </a>
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
                          alt="Node PropTech Logo"
                          style={{ width: "180px" }}
                        />
                      </div>
                    </div>
                  </div>
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
                  <div className="widget widget-banner">
                    <img src={banner} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
