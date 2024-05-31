// import React from "react";

// const SubscribeForm = () => {
//   return (
//     <div>
//       <div className="subscribe_form">
//         <div className="subscribe_in">
//           <input type="text" placeholder="Email..." />
//           <a href="#" className="neoh_fn_button only_text">
//             <span className="text">Subscribe</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscribeForm;
import React, { useState, useEffect } from "react";
import { sendSubscription } from "../../lib/api"; // Adjust the import path as necessary

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setSuccess(false);
    setError("");
    try {
      await sendSubscription(email);
      setSuccess(true);
      setMessage("Subscribe successful!");
      setEmail("");
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timeout = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [success, error]);

  return (
    <div>
      <div className="subscribe_form">
        <form onSubmit={handleSubmit}>
          <div className="subscribe_in">
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="neoh_fn_button only_text"
              style={{ background: "black" }}
            >
              <span className="text">
                {isLoading ? "Subscribing..." : "Subscribe"}
              </span>
            </button>
          </div>
        </form>
        {message && (
          <div className={`popup ${success ? "active" : ""}`}>{message}</div>
        )}
        {error && (
          <div className={`popup ${error ? "active" : ""}`}>{error}</div>
        )}
      </div>
    </div>
  );
};

export default SubscribeForm;
