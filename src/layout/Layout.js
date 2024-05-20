import VideoPopup from "@/components/popup/VideoPopup";

import { Fragment, useEffect } from "react";
import {
  animationText,
  dataBgImg,
  neoh_fn_moving_blog,
  progressTotop,
  stickyNav,
} from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";

const Layout = ({ children, pageName }) => {
  useEffect(() => {
    animationText();
    neoh_fn_moving_blog();
    dataBgImg();

    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", progressTotop);
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <div className="neoh_fn_main" data-footer-sticky="">
        <Header />
        <div className="neoh_fn_content">{children}</div>
        <Footer />
        <ScrollTop />
      </div>

      <div className="neoh_fn_moving_box"></div>
    </Fragment>
  );
};
export default Layout;
