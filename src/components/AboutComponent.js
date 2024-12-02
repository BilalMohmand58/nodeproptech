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
              <h3 className="fn_title">Node Proptech</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <h5>
                Pakistan’s Premier Hub for Transparent Real Estate Investment!
              </h5>
              <h6>
                <b>
                  Invest securely and start with any amount you desire. Begin
                  your journey now.
                </b>{" "}
              </h6>
              <p>
                • Valid Projects: Certified, verified, and validated projects.
                Licensed and NOC-approved for a positive experience. <br /> •
                Friendly Prices: Transparent and competitive pricing with no
                hidden charges. <br /> • Powered by Blockchain: Secure,
                transparent, and verifiable transactions. <br /> • Customized
                Plans: Whether buying, investing, managing, or seeking
                commissions, Node has you covered.
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">About Us</span>
                </a>
              </Link>

              <Link legacyBehavior href="/blog">
                <a className="neoh_fn_button only_text">
                  <span className="text">Our Blogs</span>
                </a>
              </Link>

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
