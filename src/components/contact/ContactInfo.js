import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="desc_holder">
        <p>
          Make an Informed Real Estate Decision Today Sign up and witness your
          real estate wealth grow with Node Solutions.
        </p>
      </div>
      <div className="info_list">
        <ul>
          {/* <li>
          <p className="label">Address</p>
          <h3 className="value">69 Queen St, Melbourne Australia</h3>
        </li> */}

          <li>
            <p className="label">Email</p>
            <h3 className="value">
              <a href="#">info@nodeproptech.com</a>
            </h3>
          </li>
          <li>
            <p className="label">Support</p>
            <h3 className="value">
              <a href="#">support@nodeproptech.com</a>
            </h3>
          </li>
          <li>
            <p className="label">Address</p>
            <p>
              Islamabad, Blue Area, near Savour Foods, Fortune Plaza, 3rd Floor
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
