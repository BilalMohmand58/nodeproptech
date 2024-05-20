import { Fragment } from "react";
// import { FaLongArrowAltUp } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
const ScrollTop = () => {
  return (
    <Fragment>
      <a href="#" className="neoh_fn_totop">
        {/* <FaLongArrowAltUp size={30} /> */}
        <IoIosArrowRoundUp size={40} />
        {/* <span className="arrow">
          <img src="svg/right-arr.svg" alt="" className="fn__svg" />
        </span> */}
        {/* <span className="circle">
          <img src="svg/circle.svg" alt="" className="fn__svg" />
        </span> */}
      </a>
    </Fragment>
  );
};
export default ScrollTop;
