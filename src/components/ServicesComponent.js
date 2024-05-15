const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
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
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Why Choose Us?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title"> Streamlined Efficiency</h3>
                  <p className="fn_desc fn_animated_text">
                    Node PropTech is leveraging the latest advancements to make
                    property management and investment easier, Simplifying
                    complex processes, automating tasks,Centralizing data to
                    allow to manage real estate portfolio.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Data-Driven Insights</h3>
                  <p className="fn_desc fn_animated_text">
                    Offering powerful analytics and data visualization tools
                    that provide actionable insights into your real estate
                    assets. Make informed decisions, identify trends, and
                    optimize your property portfolio for maximum returns..
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title"> Exceptional support</h3>
                  <p className="fn_desc fn_animated_text">
                    Our dedicated customer support team is here to assist you
                    every step of the way. Whether you have questions, need
                    assistance, or encounter issues, we're committed to
                    providing responsive and helpful support. Rest assured, your
                    satisfaction is our top priority.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Proven Track Records</h3>
                  <p className="fn_desc fn_animated_text">
                    With a history of success and satisfied clients, we have a
                    strong track record in the prop-tech industry. Joining us
                    means aligning with a trusted partner who can help you
                    achieve your property management and investment goals.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
