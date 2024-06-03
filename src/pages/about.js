import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import Head from "next/head";

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
        <PageBanner pageName={"About"} />
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
                      Node PropTech started with the mission to empower
                      transparency in real estate investment. Our goal was to
                      revolutionize the industry through technology, ensuring
                      financial freedom and trust-based investments for all.
                      With a vision of a modern, tech-driven future, we launched
                      Node PropTech to bring the entire real estate
                      ecosystem—investors and developers—together
                    </p>
                    <p>
                      Our unique platform enables fractional real estate
                      ownership, from paperwork to Web3’s blockchain, ensuring
                      security and efficiency in every aspect.
                    </p>
                  </div>
                  <div className="buttons">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="neoh_fn_button"
                    >
                      <span className="icon">
                        <img
                          src="svg/management.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                      <span className="text">Home</span>
                    </a>
                    <a
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
                    </a>
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
                      <img
                        src="svg/search-engine.svg"
                        alt=""
                        className="fn__svg"
                      />
                      <h3 className="fn_title">Our Mission </h3>
                      <p className="fn_desc fn_animated_text">
                        To revolutionize the real estate industry by leveraging
                        our expertise and technologies, including blockchain,
                        IoT, FinTech, PropTech, and sustainable living.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="line" />
                      <img
                        src="svg/management.svg"
                        alt=""
                        className="fn__svg"
                      />
                      <h3 className="fn_title">Our Vision </h3>
                      <p className="fn_desc fn_animated_text">
                        To make real estate investment accessible to all,
                        breaking down barriers and fostering a more inclusive,
                        interconnected investment world. Projects
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="line" />
                      <img src="svg/discord.svg" alt="" className="fn__svg" />
                      <h3 className="fn_title">Our Values</h3>
                      <p className="fn_desc fn_animated_text">
                        Integrity, innovation, and inclusivity drive us to
                        constantly improve and adapt, ensuring we meet the
                        diverse needs of our community
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* !Guarantee List */}
              {/* About Item #2 */}
              <div className="neoh_fn_about_item reverse">
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
                      <p>
                        Unlock an affordable and flexible real estate journey.
                        Enjoy property ownership through our streamlined
                        one-window projects.
                      </p>
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
              </div>
              {/* !About Item #2 */}
            </div>
          </section>
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
