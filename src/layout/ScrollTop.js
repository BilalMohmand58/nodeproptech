import { Fragment } from "react";
// import { FaLongArrowAltUp } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";
const ScrollTop = () => {
  return (
    <Fragment>
      <a href="#" className="neoh_fn_totop">
        {/* <FaLongArrowAltUp size={30} /> */}
        {/* <FaArrowCircleUp
          color="#00DDD2"
          size={30}
          Background="white"
          className="arrowicon_topup"
        /> */}
        <FaCircleArrowUp
          color="#00DDD2"
          size={30}
          Background="white"
          className="arrowicon_topup"
        />

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
