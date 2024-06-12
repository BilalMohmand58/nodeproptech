import { Fragment, useState } from "react";
import Timeline from "./Timeline";
import ProductPopup from "./popup/ProductPopup";
import { dropData } from "@/pages/api/dropData";

const Drops = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({ img: "", title: "" });

  const onClick = (value) => {
    setData(dropData[value - 1]);
    setToggle(true);
  };

  const { img, title, dec, slug } = data;

  return (
    <Fragment>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        dec={dec}
        title={title}
        slug={slug}
      />
      {/* Drops Section */}
      <section id="drop">
        <div className="container">
          {/* Main Title */}
          <div className="neoh_fn_title">
            <h3 className="fn_title">Our Featured Products</h3>
            <div className="line">
              <span />
            </div>
          </div>
          {/* !Main Title */}
          {/* Drops List */}
          <div className="neoh_fn_drops">
            <ul>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/1.jpeg"
                  data-modal-title="Blockchain"
                  data-modal-description="Our blockchain technology ensures transparency, security, and efficiency in real estate transactions, reducing fraud and optimizing property records.."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/1.jpeg" alt="" />
                    <a className="full_link" onClick={() => onClick(1)} />
                  </div>

                  <div className="title_holder" style={{ textAlign: "center" }}>
                    <h3 className="fn_title">Blockchain</h3>
                    <div className="buttons">
                      <a
                        onClick={() => onClick(1)}
                        className="neoh_fn_button only_text "
                        id="dropbutton"
                        style={{ display: "inline-block", marginTop: "20px" }}
                      >
                        <span className="text">Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/2.jpeg"
                  data-modal-title="IOT (Internet of Things)"
                  data-modal-description="We offer smart solutions for property management, enhancing operational efficiency, reducing costs, and providing a seamless tenant experience.."
                  data-modal-opensea-url=""
                  data-modal-discord-url="#"
                >
                  <div className="img_holder">
                    <img src="img/drops/2.jpeg" alt="" />
                    <a onClick={() => onClick(2)} className="full_link" />
                  </div>
                  <div className="title_holder" style={{ textAlign: "center" }}>
                    <h3 className="fn_title">IOT (Internet of Things)</h3>
                    <div className="buttons">
                      <a
                        onClick={() => onClick(2)}
                        className="neoh_fn_button only_text"
                        id="dropbutton"
                        style={{ display: "inline-block", marginTop: "20px" }}
                      >
                        <span className="text">Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/3.jpeg"
                  data-modal-title="FinTech"
                  data-modal-description="NodePropTech combines financial technology and real estate to empower investors with sustainable and profitable choices, redefining how real estate is financed and managed.."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/3.jpeg" alt="" />
                    <a onClick={() => onClick(3)} className="full_link" />
                  </div>

                  <div className="title_holder" style={{ textAlign: "center" }}>
                    <h3 className="fn_title">FinTech</h3>
                    <div className="buttons">
                      <a
                        onClick={() => onClick(3)}
                        className="neoh_fn_button only_text"
                        id="dropbutton"
                        style={{ display: "inline-block", marginTop: "20px" }}
                      >
                        <span className="text">Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/4.jpeg"
                  data-modal-title="PropTech"
                  data-modal-description="Our PropTech solutions simplify property transactions, making buying, selling, and managing properties more accessible and efficient for everyone.."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/4.jpeg" alt="" />
                    <a onClick={() => onClick(4)} className="full_link" />
                  </div>

                  <div className="title_holder" style={{ textAlign: "center" }}>
                    <h3 className="fn_title">PropTech</h3>
                    <div className="buttons">
                      <a
                        onClick={() => onClick(4)}
                        className="neoh_fn_button only_text"
                        id="dropbutton"
                        style={{ display: "inline-block", marginTop: "20px" }}
                      >
                        <span className="text">Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* Clearfix */}
            <div className="clearfix" />
          </div>
          {/* !Drops List */}
          {/* <Timeline /> */}
        </div>
      </section>
      {/* !Drops Section */}
    </Fragment>
  );
};
export default Drops;
