import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
const InfoContact = () => {
  return (
    <>
      <section style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="neoh_fn_about_item">
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <AiOutlineMail color="#00DDD2" className="fn__svg " />

                    {/* <img
                        src="svg/search-engine.svg"
                        alt=""
                        className="fn__svg"
                      /> */}
                    <h3 className="fn_title">Email </h3>
                    <p>info@nodeproptech.com</p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <CiCircleCheck color="#00DDD2" className="fn__svg" />

                    {/* <img
                        src="svg/management.svg"
                        alt=""
                        className="fn__svg"
                      /> */}
                    <h3 className="fn_title">Support </h3>
                    <p>support@nodeproptech.com</p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />

                    <CiLocationOn color="#00DDD2" className="fn__svg" />

                    {/* <img src="svg/discord.svg" alt="" className="fn__svg" /> */}
                    <h3 className="fn_title">Address</h3>
                    <p>
                      Islamabad, Blue Area, near Savour Foods, Fortune Plaza,
                      3rd Floor
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoContact;
