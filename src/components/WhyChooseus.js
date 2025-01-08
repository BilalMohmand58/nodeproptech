// import Link from "next/link";
// const WhyChooseus = () => {
//   return (
//     <section id="">
//       <div className="container">
//         {/* About Item #2 */}
//         <div className="neoh_fn_about_item reverse">
//           <div className="img_item">
//             <img src="img/about/2.jpg" alt="" />
//           </div>
//           <div className="content_item">
//             <div className="neoh_fn_title" data-align="left">
//               <h3 className="fn_title">Why Choose Node PropTech?</h3>
//               <div className="line">
//                 <span />
//               </div>
//             </div>
//             <div className="desc">
//               <p>
//               <b>Distributed Ledger Security</b><br/>
// Implement the foundational blockchain system to ensure all transactions are transparent, verifiable, and immutable.
// <br/>
// <b>Fractional Property Listing</b><br/>
// Property owners can list their real estate for fractional investment. This can be a limited selection, to begin with, to test the waters.
// <br/>
// <b>Property Tokenization</b><br/>
// Implement the initial framework to convert listed properties into tradable tokens, enabling fractional ownership.
// <br/>
// <b>Smart Contract Introduction</b><br/>
// A basic version of smart contracts to ensure that property transactions are automatically, transparently, and securely handled.
// <br/>
// <b>Streamlined Efficiency</b><br/>
// Making property management and investment easier by simplifying complex processes, automating tasks, and centralizing data.
// <br/>
// <b>Data-Driven Insights</b><br/>
// Offering powerful analytics and data visualization tools to make informed decisions and optimize your property portfolio for maximum returns.

//               </p>
//               {/* <p>
//                 • 100% tamper-proof transactions <br />• Real-time valuation
//                 <br /> • Global transactions
//                 <br /> • Flexible tradable tokens
//                 <br /> • Transparent investment portfolios
//                 <br /> • Easy token-to-cash conversions
//                 <br /> • Property learning hub
//                 <br /> • Market predictions
//               </p> */}
//             </div>
//             {/* <div className="buttons">
//               <Link legacyBehavior href="/contact">
//                 <a className="neoh_fn_button only_text">
//                   <span className="text">Contact Us</span>
//                 </a>
//               </Link>
//             </div> */}
//           </div>
//         </div>
//         {/* !About Item #2 */}
//       </div>
//     </section>
//   );
// };
// export default WhyChooseus;

import React from "react";
import { CiCircleCheck } from "react-icons/ci";

import { FaShieldAlt, FaExchangeAlt } from "react-icons/fa";

import { BsHouseDoor } from "react-icons/bs";

import { RiSecurePaymentFill } from "react-icons/ri";

import { AiOutlineCloudSync } from "react-icons/ai";

import { HiOutlineChartBar } from "react-icons/hi";

const WhyChooseus = () => {
  return (
    <div className="container">
      {/* Main Title */}
      <div className="neoh_fn_title" style={{ padding: "50px" }}>
        <h3 className="fn_title" >
          Why Choose Node PropTech?{" "}
        </h3>
        <div className="line">
          <span />
        </div>
      </div>
      <div className="neoh_fn_gualist">
        <ul>
          <li>
            <div className="item">
              <span className="line" />
              <FaShieldAlt color="#00DDD2" className="fn__svg" />
              <h3 className="fn_title">Distributed Ledger Security</h3>
              <p className="fn_desc fn_animated_text ">
                Implement the foundational blockchain system to ensure all
                transactions are transparent, verifiable, and immutable.
              </p>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="line" />
              <BsHouseDoor color="#00DDD2" className="fn__svg" />
              <h3 className="fn_title">Fractional Property Listing</h3>
              <p className="fn_desc fn_animated_text ">
                Property owners can list their real estate for fractional
                investment. This can be a limited selection, to begin with, to
                test the waters.
              </p>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="line" />
              <FaExchangeAlt color="#00DDD2" className="fn__svg" />
              <h3 className="fn_title">Property Tokenization</h3>
              <p className="fn_desc fn_animated_text ">
                Implement the initial framework to convert listed properties
                into tradable tokens, enabling fractional ownership.
              </p>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="line" />
              <RiSecurePaymentFill color="#00DDD2" className="fn__svg" />
              <h3 className="fn_title">Smart Contract Introduction</h3>
              <p className="fn_desc fn_animated_text ">
                A basic version of smart contracts to ensure that property
                transactions are automatically, transparently, and securely
                handled.
              </p>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="line" />
              <AiOutlineCloudSync color="#00DDD2" className="fn__svg" />
              <h3 className="fn_title">Streamlined Efficiency</h3>
              <p className="fn_desc fn_animated_text ">
                Making property management and investment easier by simplifying
                complex processes, automating tasks, and centralizing data.
              </p>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="line" />
              <HiOutlineChartBar color="#00DDD2" className="fn__svg" />
              <h3 className="fn_title">Data-Driven Insights</h3>
              <p className="fn_desc fn_animated_text ">
                Offering powerful analytics and data visualization tools to make
                informed decisions and optimize your property portfolio for
                maximum returns.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseus;
