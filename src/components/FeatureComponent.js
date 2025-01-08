const FeatureComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.png"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.png"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">To whom we offer?           </h3>
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
                  <h3 className="fn_title">Developers </h3>
                  {/* <p className="fn_desc fn_animated_text"> */}
                  <p className="fn_desc">
                    Node Proptech serves as the premier buyer, streamlining the
                    selling process through the power of Web 3, Distributed
                    Ledger Technology (DLT), blockchain, and fractionalization.
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
                  <h3 className="fn_title">Building Management </h3>
                  <p className="fn_desc">
                    Node Proptech's subsidiary performs tasks to ensure seamless
                    operations, supporting building management in maintaining
                    their assets.
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
                  <h3 className="fn_title"> Investor/Buyer </h3>
                  <p className="fn_desc">
                    Catering to investors and buyers seeking property
                    appreciation, comfortable living or rental units. With
                    fractional ownership, it is affordable to invest in
                    high-quality properties, with less money in renowned units.
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
                  <h3 className="fn_title"> Realtors</h3>
                  <p className="fn_desc">
                    Node Proptech provides realtors with opportunities for
                    higher commissions, leveraging their innovative platform and
                    services.
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
export default FeatureComponent;
