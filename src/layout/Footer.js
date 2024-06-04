import SubscribeForm from "@/components/newsletter/SubscribeForm";
import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img
                    src="img/footer-logo.png"
                    alt=""
                    style={{ width: "50px" }}
                  />
                </div>
                <h3 className="fn_title">Join Now For Early Access</h3>
                <p className="fn_desc">
                  Make an Informed Real Estate Decision Today Sign up and
                  witness your real estate wealth grow with Node Solutions.
                </p>
              </div>
              <SubscribeForm />
              <div className="neoh_fn_social_list">
                <ul>
                  <li>
                    <a href="https://twitter.com/TheNodePropTech">
                      <i className="fn-icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/TheNodePropTech">
                      <i className="fn-icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/node.proptech/">
                      <i className="fn-icon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/nodeproptech">
                      <i className="fn-icon-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>
                  Copyright {new Date().getFullYear()} -{" "}
                  <a href="/" target="_blank" rel="noreferrer">
                    Node PropTech
                  </a>
                </p>
              </div>
              <div className="fb_right">
                <ul>
                  {/* <li>
                    <Link legacyBehavior href="/roadmap">
                      RoadMap
                    </Link>
                  </li> */}
                  {/* <li>
                    <a href="/contact">Contact</a>
                  </li> */}
                  {/* <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
