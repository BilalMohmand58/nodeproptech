import React, { useEffect, useState } from "react";
import ContactInfo from "./ContactInfo";
import { sendContactForm } from "../../lib/api";

const initValues = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
};

const initState = {
  isLoading: false,
  error: "",
  success: false,
  values: initValues,
};

const ContactForm = () => {
  const [state, setState] = useState(initState);

  const { values, isLoading, error, success } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState({ ...initState, success: true });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  useEffect(() => {
    if (success || error) {
      const timeout = setTimeout(() => {
        setState((prev) => ({ ...prev, success: false, error: "" }));
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [success, error]);

  return (
    <div>
      <div className="mw_500">
        <form
          action="/"
          method="post"
          className="contact_form"
          id="contact_form"
          autoComplete="off"
        >
          <div className="input_list">
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="youremail@mail.com"
                  required
                />
              </li>
              <li>
                <label htmlFor="number">Phone Number</label>
                <input
                  value={values.number}
                  onChange={handleChange}
                  id="number"
                  name="number"
                  type="text"
                  placeholder="(+92) 30*-***-****"
                  required
                />
              </li>
              <li>
                <label htmlFor="subject">Subject</label>
                <input
                  value={values.subject}
                  onChange={handleChange}
                  id="subject"
                  name="subject"
                  type="text"
                  required
                />
              </li>
              <li>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </li>
              <li>
                <button
                  disabled={!values.name || !values.email || !values.number}
                  onClick={onSubmit}
                  className="neoh_fn_button only_text"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </li>
            </ul>
          </div>
          {/* Popup Messages */}
          <div className={`popup ${success ? "active" : ""}`}>
            Message sent successfully!
          </div>
          <div className={`popup ${error ? "active" : ""}`}>
            {error && `Error: ${error}`}
            <br />
            Fill All Fields
          </div>
        </form>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactForm;
