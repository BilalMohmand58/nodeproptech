const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      {/* <img
        src="svg/divider.png"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.png"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      /> */}
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">
            From Paperwork to Web3’s Blockchain Revolution!
          </h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_gualist">
          <ul>
            <li className="servicesessionli" style={{ width: "50%" }}>
              <div className="item">
                <span className="line" />

                {/* <img
                               src="svg/management.svg"
                               alt=""
                               className="fn__svg"
                             /> */}
                {/* <h3 className="fn_title">Our Vision </h3> */}
                <p className="fn_desc ">
                  In the past, real estate transactions involved mountains of
                  paperwork, extensive negotiations, and frustrating delays.
                  Buyers, sellers, and intermediaries shuffled through stacks of
                  documents, increasing the risk of errors and fraud. The
                  process was arduous, time-consuming, and often left parties
                  feeling uncertain about the deal's transparency.
                </p>
              </div>
            </li>
            <li className="servicesessionli" style={{ width: "50%" }}>
              <div className="item">
                <span className="line" />

                {/* <img src="svg/discord.svg" alt="" className="fn__svg" /> */}
                {/* <h3 className="fn_title">Our Values</h3> */}
                <p className="fn_desc ">
                  Our forward-thinking approach leverages blockchain technology,
                  smart contracts, and decentralized applications to ensure
                  transparency, security, and efficiency in every aspect of real
                  estate management. From property listings to transactions, our
                  platform harnesses the true power of Web 3.0, enabling a
                  seamless and decentralized experience for our valued clients.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <style jsx>
          {`
            @media (max-width: 700px) {
              .servicesessionli {
                width: 100% !important;
              }
            }
          `}
        </style>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
