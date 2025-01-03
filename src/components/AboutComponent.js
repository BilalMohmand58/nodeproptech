import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/1.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Who are we?</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <h5>
              Node Proptech is a forward-thinking company in the dynamic real estate sector.
              </h5>
              {/* <h6>
                <b>
                  Invest securely and start with any amount you desire. Begin
                  your journey now.
                </b>{" "}
              </h6> */}
              <p>
              We use <b>Web 3</b>  via <b>Distributed Ledger Technology (DLT) </b> to revolutionize how we perceive, assess, and authenticate property investments. Our goal is to democratize and decentralize real estate, removing barriers and creating opportunities for global investors. 

Our unique platform enables the fractionalization of real estate, making transparent investment accessible to everyone, regardless of their financial capacity. We believe in blockchain's transformative potential to bring trust and transparency to the real estate industry. 

              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">Read more</span>
                </a>
              </Link>

              {/* <Link legacyBehavior href="/blog">
                <a className="neoh_fn_button only_text">
                  <span className="text">Our Blogs</span>
                </a>
              </Link> */}

              {/* <a
                href="/blog"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <a className="neoh_fn_button only_text">
                  <span className="text">Our Blog</span>
                </a>
              </a> */}
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
      </div>
    </section>
  );
};
export default AboutComponent;
