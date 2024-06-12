import { Fragment } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
// import { FaLongArrowAltUp } from "react-icons/fa";

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
        <IoIosArrowRoundUp color="#00DDD2" size={30} />
        {/* <IoArrowUpCircle
          
          className="arrowicon_topup"
          style={{ background: "white" }}
        /> */}

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
