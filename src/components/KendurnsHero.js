import { useEffect, useState } from "react";

const KendurnsHero = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setActive(active >= 5 ? 1 : active + 1);
    }, 7000);
  });

  return (
    <div className="neoh_fn_hero">
      {/* Overlay (of hero header) */}
      <div className="bg_overlay">
        {/* Overlay Color */}
        <div className="bg_color" />
        {/* !Overlay Color */}
        {/* Overlay Slider */}
        <div
          className="overlay_slider vegas-slide vegas-container"
          style={{ height: `100%` }}
        >
          <div
            className="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out"
            style={{ transition: "all 1000ms ease 0s" }}
          >
            <div
              className={`vegas-slide-inner vegas-animation-${
                active % 2 ? "kenburnsRight" : "kenburnsLeft"
              }`}
              style={{
                backgroundImage: `url("img/drops/${active}.jpg")`,
                backgroundColor: "rgba(0, 0, 0, 0)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                animationDuration: "7000ms",
              }}
            />
          </div>
        </div>
        {/* !Overlay Slider */}
      </div>
      {/* Overlay (of hero header) */}
      <div className="hero_content">
        <div className="container">
          <div className="content">
            <div id="magic" />
            <h3 className="fn_title2" title="Neoh">
              Product
            </h3>

            {/* <b>Explore Our Projects:</b>*/}
            <p className="fn_desc fn_animated_text">
              Find the perfect path to owning premium real estate with just a
              click.
            </p>
          </div>
        </div>
      </div>
      <a href="#about" className="neoh_fn_down magic-hover magic-hover__square">
        <span className="text">Scroll Down</span>
        <span className="icon">
          <img src="svg/right-arr.svg" alt="" className="fn__svg" />
        </span>
      </a>
    </div>
  );
};
export default KendurnsHero;
