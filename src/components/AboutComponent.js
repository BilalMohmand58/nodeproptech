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
              <h3 className="fn_title">NODEPROP TECH</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Node PropTech redefines property ownership. With us, you can
                invest in properties for as little as you desire, opening the
                door to an affordable and flexible real estate journey.
              </p>
              <p>
                Whether you're a seasoned investor or a first-time buyer,
                fractional investment empowers you to diversify your portfolio,
                mitigate risks, and enjoy the privileges of property ownership
                without breaking the bank.
              </p>
            </div>
            <div className="buttons">
              <a
                href="/blog"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Our Blogs</span>
              </a>
              <a
                href="/product"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Our Products</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">About Us</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Node PropTech is your gateway to the future of real estate
                investment. We’re here to simplify the complex world of property
                investment, making it accessible to everyone, regardless of
                their financial capacity .
              </p>
              <p>
                At Node PropTech, we’re on a mission to revolutionize the real
                estate industry.
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
