// import Layout from "@/layout/Layout";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { dropData } from "../api/dropData";

// const ProductDetails = ({}) => {
//   const { slug } = useParams(); // Destructure slug directly from useParams

//   console.log("Params:", slug); // Debugging

//   const dropItem = dropData.find((item) => item.slug === slug);

//   if (!dropItem) {
//     return <div>Portfolio item not found!</div>;
//   }

//   const { title, banner, details } = dropItem;
//   return (
//     <>
//       <Layout pageName={"ProductDetails"}>
//         <div className="neoh_fn_blog_single neoh_fn_single">
//           {/* Single Background */}
//           <div className="single_bg" />
//           {/* !Single Background */}
//           {/* Single Content */}
//           <div className="single_content">
//             <div className="container" id="blog-single-content">
//               <div className="neoh_fn_breadcrumbs">
//                 <p>
//                   <Link href="/" legacyBehavior>
//                     Home
//                   </Link>
//                   <span className="separator">/</span>
//                   <Link href="/product" legacyBehavior>
//                     Product
//                   </Link>
//                   <span className="separator">/</span>
//                   <span className="current">{title}</span>
//                 </p>
//               </div>
//               <div className="single_img">
//                 <img src={banner} alt={title} />
//               </div>
//               {/* Page With Sidebar */}
//               <div className="neoh_fn_wsidebar">
//                 {/* Left Sidebar */}
//                 <div className="sidebar_left">
//                   {/* Mini Items */}
//                   {/* <div className="neoh_fn_minis">
//                     <div className="m_item">
//                       <a href="#">20/20/22</a>
//                     </div>
//                     <div className="m_item">
//                       <span>
//                         By <a href="#">Admin</a>
//                       </span>
//                     </div>
//                   </div> */}
//                   {/* !Mini Items */}
//                   {/* Single Title */}
//                   <div className="single_title">
//                     <h2 className="fn_title">{title}</h2>
//                     <div className="content_item">
//                       <div className="line">
//                         <span />
//                       </div>
//                     </div>

//                     {/* <div className="categories">
//                       <a href="/">Technology</a>, <a href="/">Node</a>,{" "}
//                       <a href="/">Property</a>
//                     </div> */}
//                   </div>
//                   {/* !Single Title */}
//                   {/* Single Description */}

//                   <div className="single_desc">{details}</div>

//                   <div className="neoh_fn_title">
//                     {/* <h3 className="fn_title">Our Latest Drops</h3> */}
//                     {/* <div className="line">
//                       <span />
//                     </div> */}
//                   </div>
//                   <div className="t_item_info">
//                     <br />
//                     <p className="fn_date">
//                       <span>Invest with Confidence:</span>
//                     </p>
//                     <h3 className="fn_title">
//                       <Link legacyBehavior href="/roadmap-single">
//                         Accept the Real Estate Challenge with Us
//                       </Link>
//                     </h3>
//                   </div>
//                   <br />
//                   <div className="road_item">
//                     <div className="t_item">
//                       <div className="t_item_img">
//                         <div className="neoh_fn_gallery_1_2">
//                           <div className="gallery_in">
//                             <div className="item row2">
//                               <img
//                                 src="https://images.ctfassets.net/jyd9wciqks30/3Vi9iwqkPGgMZ4PGkFDEJW/171b35977dc163ad0a7c933302bb7d1d/modern-city-concept-3d-illustration-form-circle.jpg"
//                                 alt=""
//                               />
//                             </div>
//                             <div className="item">
//                               <img
//                                 src="https://images.ctfassets.net/jyd9wciqks30/6hcKsHTBIdkUUQowfAh05z/b41a22dd2f34b79417457229d95f7b11/3d-cryptocurrency-rendering-design.jpg"
//                                 alt=""
//                               />
//                             </div>
//                             <div className="item">
//                               <img
//                                 src="https://images.ctfassets.net/jyd9wciqks30/26YGPRQNG5v8wcXVVt2dKy/3e3be9818ed1ca4df958bd4c140cc5bf/ai-cloud-concept-with-robot-arm.jpg"
//                                 alt=""
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="t_item_info">
//                         <br />

//                         <p className="fn_desc">
//                           Invest in properties with confidence, knowing that our
//                           platform prioritizes integrity and long-term value.
//                           Join us in revolutionizing the real estate landscape,
//                           one transparent investment at a time.
//                         </p>
//                         <p className="fn_read">
//                           <Link legacyBehavior href="/product">
//                             <a className="neoh_fn_button only_text">
//                               <span className="text">Product Page</span>
//                             </a>
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* !Single Description */}
//                   {/* Tags */}
//                   {/* <br />
//                   <div className="neoh_fn_tags">
//                     <h4 className="label">Tags:</h4>
//                     <a href="#">nodeprop</a>
//                     <span>,</span>
//                     <a href="#">proptech</a>
//                     <span>,</span>
//                     <a href="#">technology</a>
//                     <span>,</span>
//                     <a href="#">property</a>
//                   </div> */}
//                   {/* !Tags */}
//                 </div>
//                 {/* !Left Sidebar */}
//                 {/* Right Sidebar */}
//                 <div className="sidebar_right">
//                   {/* Widget (about) */}
//                   <div className="widget">
//                     <div className="neoh_fn_widget_about">
//                       <div className="about_img" />
//                       <div className="afwa_title">
//                         <h3>Node PropTech</h3>
//                         <p>
//                           <a href="mailto:info@nodeproptech.com">
//                             info@nodeproptech.com
//                           </a>
//                         </p>
//                       </div>
//                       <div className="afwa_desc">
//                         <p>
//                           Immerse yourself in cutting-edge technologies and
//                           services that are molding the future of property
//                           investment and management.
//                         </p>
//                       </div>
//                       <div className="afwa_signature">
//                         <img
//                           src="../../img/logo.png"
//                           alt="Node PropTech Logo"
//                           style={{ width: "180px" }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* !Widget (about) */}
//                   {/* Widget (social) */}
//                   <div className="widget widget-social">
//                     <div className="wid-title">
//                       <span className="text">Subscribe &amp; Follow</span>
//                       <span className="icon" />
//                     </div>
//                     <div className="neoh_fn_widget_social">
//                       <ul>
//                         <li>
//                           <a href="https://twitter.com/TheNodePropTech">
//                             <i className="fn-icon-twitter" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.facebook.com/TheNodePropTech">
//                             <i className="fn-icon-facebook" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.instagram.com/node.proptech/">
//                             <i className="fn-icon-instagram" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.linkedin.com/company/nodeproptech">
//                             <i className="fn-icon-linkedin" />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   {/* !Widget (social) */}
//                   {/* Widget (Banner) */}
//                   <div className="widget widget-banner">
//                     <img src={banner} alt="" />
//                   </div>
//                   {/* !Widget (Banner) */}
//                 </div>
//                 {/* !Right Sidebar */}
//               </div>
//               {/* !Page With Sidebar */}
//             </div>
//           </div>
//           {/* !Single Content */}
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default ProductDetails;

import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { dropData } from "../api/dropData";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query; // Destructure slug from router.query

  console.log("Params:", slug); // Debugging

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
                    <div className="content_item">
                      <div className="line">
                        <span />
                      </div>
                    </div>
                  </div>
                  <div className="single_desc">{details}</div>
                  <div className="neoh_fn_title"></div>
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
                              <img
                                src="https://images.ctfassets.net/jyd9wciqks30/3Vi9iwqkPGgMZ4PGkFDEJW/171b35977dc163ad0a7c933302bb7d1d/modern-city-concept-3d-illustration-form-circle.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item">
                              <img
                                src="https://images.ctfassets.net/jyd9wciqks30/6hcKsHTBIdkUUQowfAh05z/b41a22dd2f34b79417457229d95f7b11/3d-cryptocurrency-rendering-design.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item">
                              <img
                                src="https://images.ctfassets.net/jyd9wciqks30/26YGPRQNG5v8wcXVVt2dKy/3e3be9818ed1ca4df958bd4c140cc5bf/ai-cloud-concept-with-robot-arm.jpg"
                                alt=""
                              />
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
