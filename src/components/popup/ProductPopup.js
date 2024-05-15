import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
const ProductPopup = ({ open, close, img, title, dec }) => {
  return (
    <Fragment>
      <div className={`neoh_fn_modal product_modal ${open ? "opened" : ""}`}>
        <div className="modal_in">
          <div className="modal_closer">
            <a onClick={() => close()}>
              {/* <img src="svg/cancel.svg" alt="" className="fn__svg" /> */}
              <IoMdClose size={30} color="white" />
            </a>
          </div>
          <div className="modal_content">
            <div className="neoh_fn_product_modal">
              <div className="img_item">
                <img src={img} />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">{title}</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>{dec}</p>
                </div>
                <div className="buttons">
                  <a
                    href="/product"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button opensea"
                  >
                    <span className="icon">
                      <img src="svg/opensea.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Our Products</span>
                  </a>
                  <a
                    href="/product"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button discord disable"
                  >
                    <span className="icon">
                      <img src="svg/discord.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Our Products</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductPopup;
