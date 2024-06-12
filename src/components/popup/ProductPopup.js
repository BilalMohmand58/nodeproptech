import Link from "next/link";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
const ProductPopup = ({ open, close, img, title, dec, slug }) => {
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
                  <Link legacyBehavior href={`product/${slug}`}>
                    <a className="neoh_fn_button only_text">
                      <span className="text">Product Details</span>
                    </a>
                  </Link>
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
