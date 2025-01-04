

    import Link from "next/link";
const WhyOwnership = () => {
  return (
    <section id="services">
      <div className="container">
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Why Fractional Ownership with NODE PROPTECH? </h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Node PropTech redefines property ownership. With us, you can invest in properties for as little as you desire, opening the door to an affordable and flexible real estate journey. Whether you're a seasoned investor or a first-time buyer, fractional investment empowers you to diversify your portfolio, mitigate risks, and enjoy the privileges of property ownership.
      </p>
              {/* <p>
                • 100% tamper-proof transactions <br />• Real-time valuation
                <br /> • Global transactions
                <br /> • Flexible tradable tokens
                <br /> • Transparent investment portfolios
                <br /> • Easy token-to-cash conversions
                <br /> • Property learning hub
                <br /> • Market predictions
              </p> */}
            </div>
            {/* <div className="buttons">
              <Link legacyBehavior href="/contact">
                <a className="neoh_fn_button only_text">
                  <span className="text">Contact Us</span>
                </a>
              </Link>
            </div> */}
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default WhyOwnership;