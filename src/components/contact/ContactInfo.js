import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="desc_holder">
        <p>
          Make informed decisions, harness the power of fractional investment ,
          and explore sustainable living options with us.
        </p>
      </div>
      <div className="info_list">
        <ul>
          {/* <li>
          <p className="label">Address</p>
          <h3 className="value">69 Queen St, Melbourne Australia</h3>
        </li> */}
          <li>
            <p className="label">Phone</p>
            <h3 className="value">
              <a href="tel:+7068980751">(+92) 304-111-3309</a>
            </h3>
          </li>
          <li>
            <a href="mailto:example@domain.com" className="email">
              info@themaidaan.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
