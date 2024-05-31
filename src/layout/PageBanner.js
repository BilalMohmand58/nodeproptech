import Link from "next/link";
const PageBanner = ({ pageName, pagetext, pagetext2 }) => {
  return (
    <div className="neoh_fn_pagetitle">
      <div className="bg_overlay">
        <div className="bg_color" />
        <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
      </div>
      <div className="pt_content">
        <div className="container">
          <h3
            className="fn_title fn_animated_text"
            data-wait={1000}
            data-speed={8}
          >
            {pageName}
          </h3>
          <p className="fn_desc">
            <b>
              <span className="current">{pagetext}</span>
            </b>
          </p>
          <p className="fn_desc">
            <span className="current">{pagetext2}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
