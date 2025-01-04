import WhyChooseus from "@/components/WhyChooseus";
import WhyOwnership from "@/components/WhyOwnership";
import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import Head from "next/head";
import Link from "next/link";

import { CiCircleCheck } from "react-icons/ci";

const About = () => {
  const page = "about";
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout pageName={"About"}>
        <PageBanner pageName={"About Us"} />
        <div className="neoh_fn_aboutpage">
          {/* Information Section */}
          <section id="information">
            <div className="container">
              {/* About Item #1 */}
              <div className="neoh_fn_about_item">
                <div className="img_item">
                  <img src="img/about/1.jpg" alt="" />
                </div>
                <div className="content_item">
                  <div className="neoh_fn_title" data-align="left">
                    <h3 className="fn_title">Our Story </h3>
                    <div className="line">
                      <span />
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                    At Node PropTech, we empower transparency in real estate investment via DLT technology. Our mission is to revolutionize the industry through technology, creating pathways to financial freedom and trust-based investments for everyone. Driven by a vision of a modern, tech-driven future, Node PropTech brings together the entire real estate ecosystem—investors and developers alike.

                    </p>
                    <p>
                    Our innovative platform enables fractional real estate ownership, streamlining everything from paperwork to Web3’s blockchain integration. We ensure security, efficiency, and accessibility at every step, redefining how real estate investments are made in today's digital age.

                    </p>
                  </div>
                  <div className="buttons">
                    <Link legacyBehavior href="/">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Home</span>
                      </a>
                    </Link>
                    <Link legacyBehavior href="/product">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Products</span>
                      </a>
                    </Link>
                    {/* <a
                      href="/product"
                      target="_blank"
                      rel="noreferrer"
                      className="neoh_fn_button"
                    >
                      <span className="icon">
                        <img
                          src="svg/search-engine.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                      <span className="text">Products</span>
                    </a> */}
                  </div>
                </div>
              </div>
              {/* !About Item #1 */}
              {/* Guarantee List */}
              <div className="neoh_fn_gualist">
                <ul>
                  <li>
                    <div className="item">
                      <span className="line" />
                      <CiCircleCheck color="#00DDD2" className="fn__svg" />
                      {/* <img
                        src="svg/search-engine.svg"
                        alt=""
                        className="fn__svg"
                      /> */}
                      <h3 className="fn_title">Our Mission </h3>
                      <p className="fn_desc fn_animated_text">
                      To revolutionize the real estate industry by leveraging Web 3 and Digital Ledger Technology to streamline property management and enhance investment opportunities.

                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="line" />
                      <CiCircleCheck color="#00DDD2" className="fn__svg" />
                      {/* <img
                        src="svg/management.svg"
                        alt=""
                        className="fn__svg"
                      /> */}
                      <h3 className="fn_title">Our Vision </h3>
                      <p className="fn_desc fn_animated_text">
                      To create a future where real estate investment is accessible to all, breaking down barriers and fostering a more inclusive, interconnected investment world.

                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="line" />
                      <CiCircleCheck color="#00DDD2" className="fn__svg  " />
                      {/* <img src="svg/discord.svg" alt="" className="fn__svg" /> */}
                      <h3 className="fn_title">Our Values</h3>
                      <p className="fn_desc fn_animated_text">
                      Integrity, innovation, and inclusivity drive us to continuously improve and adapt, ensuring we meet the diverse needs of our growing community.

                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* !Guarantee List */}
              {/* About Item #2 */}
              {/* <div className="neoh_fn_about_item reverse">
                <div className="img_item">
                  <img src="img/about/2.jpg" alt="" />
                </div>
                <div className="content_item">
                  <div className="neoh_fn_title" data-align="left">
                    <h3 className="fn_title">How It Works for You</h3>
                    <div className="line">
                      <span />
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      Unlock an affordable and flexible real estate journey.
                      Enjoy property ownership through our streamlined
                      one-window projects.
                    </p>
                    1. Sign-in <br /> 2. Invest <br /> 3. Monitor progress
                    <p></p>
                  </div>
                  <div className="buttons">
                    <a href="/blog" className="neoh_fn_button only_text">
                      <span className="text">Our Blog</span>
                    </a>
                  </div>
                </div>
              </div> */}
              
              {/* !About Item #2 */}
            </div>
          </section>
          <WhyOwnership/>
          {/* !Information Section */}
          {/* Video Section */}
          {/* <section id="video">
            {/* Dividers 
            <img
              src="svg/divider.svg"
              alt=""
              className="fn__svg fn__divider top_divider"
            />
            <img
              src="svg/divider.svg"
              alt=""
              className="fn__svg fn__divider bottom_divider"
            />
            {/* !Dividers */}
          {/* Video Shortcode 
            <div className="neoh_fn_video">
              <div className="bg_overlay">
                <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
                <div className="bg_color" />
              </div>
              <div className="v_content">
                <a
                  className="popup-youtube"
                  href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                >
                  <img src="svg/play.svg" alt="" className="fn__svg" />
                </a>
              </div>
            </div>
            {/* !Video Shortcode 
          </section> */}
          {/* !Video Section */}

          {/* Team Section */}
          {/* <section id="team">
            <div className="container">
           
              <div className="neoh_fn_title">
                <h3 className="fn_title">Our Team Members</h3>
                <div className="line">
                  <span />
                </div>
              </div>
            
              <div className="mw_650 fn_description">
                <p className="fn_desc fn_animated_text">
                  The idea was born in London and rapidly became a borderless
                  vision - A team of Neoh with a background in computer
                  graphics, crypto, technology, and art.
                </p>
              </div>
          
              <div className="neoh_fn_team">
                <ul className="team_list">
                  <li className="team_item">
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src="img/author/1.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">Tom Mccarthy</h3>
                          <p className="fn_desc">2D Artist</p>
                        </div>
                      </div>
                      <div className="person_social">
                        <ul>
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
                    </div>
                  </li>
                  <li className="team_item">
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src="img/author/2.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">Owen Bradley</h3>
                          <p className="fn_desc">2D Artist</p>
                        </div>
                      </div>
                      <div className="person_social">
                        <ul>
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
                    </div>
                  </li>
                  <li className="team_item">
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src="img/author/3.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">Daniel Bradley</h3>
                          <p className="fn_desc">2D Artist</p>
                        </div>
                      </div>
                      <div className="person_social">
                        <ul>
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
                    </div>
                  </li>
                  <li className="team_item">
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src="img/author/4.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">Skylar Jarvis</h3>
                          <p className="fn_desc">2D Artist</p>
                        </div>
                      </div>
                      <div className="person_social">
                        <ul>
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
                    </div>
                  </li>
                  <li className="team_item">
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src="img/author/5.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">Avery Briggs</h3>
                          <p className="fn_desc">2D Artist</p>
                        </div>
                      </div>
                      <div className="person_social">
                        <ul>
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
                    </div>
                  </li>
                  <li className="team_item">
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src="img/author/6.jpg" alt="" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">Bernard Green</h3>
                          <p className="fn_desc">2D Artist</p>
                        </div>
                      </div>
                      <div className="person_social">
                        <ul>
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
                    </div>
                  </li>
                </ul>
              </div>
         
            </div>
          </section> */}
          {/* !Team Section */}
        </div>
      </Layout>
    </>
  );
};
export default About;
