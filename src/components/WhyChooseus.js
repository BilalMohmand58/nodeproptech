import Link from "next/link";
const WhyChooseus = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Why Choose Node PropTech?</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                A cutting-edge platform offering high ROI opportunities for
                everyone. Leveraging technology to provide:
              </p>
              <p>
                • 100% tamper-proof transactions <br />• Real-time valuation
                <br /> • Global transactions
                <br /> • Flexible tradable tokens
                <br /> • Transparent investment portfolios
                <br /> • Easy token-to-cash conversions
                <br /> • Property learning hub
                <br /> • Market predictions
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="/contact">
                <a className="neoh_fn_button only_text">
                  <span className="text">Contact Us</span>
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
export default WhyChooseus;
