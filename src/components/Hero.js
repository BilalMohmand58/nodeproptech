// import React, { useEffect, useState } from 'react'
// import { FaArrowDownLong } from 'react-icons/fa6'

// const Hero = () => {

//     const [isBigScreen, setIsBigScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsBigScreen(window.innerWidth >= 850);
//     };

//     // Set initial value
//     handleResize();

//     // Listen for window resize
//     window.addEventListener("resize", handleResize);

//     // Cleanup listener on unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
    // <div className="neoh_fn_hero">
    // {/* Overlay (of hero header) */}
    // <div className="bg_overlay">
    //   {/* Overlay Color */}
    //   <div className="bg_color" />
    //   {/* !Overlay Color */}
    //   {/* Overlay Image */}
    //   <div className="bg_image" data-bg-img="img/hero/1.jpeg" />
    //   {/* !Overlay Image */}
    // </div>
//     {/* Overlay (of hero header) */}
//     <div className="hero_content">
//       <div className="container" style={{
//         display: isBigScreen ? "flex" : "block",
       
//       }}>
//         <div className="content" style={{ paddingTop: "130px"}}>
//         <h2 className="fn_title2">Node</h2>
//           <h3 className="fn_title2">PropTech</h3>

//           <p className="fn_desc fn_animated_text">
//           Transforming global real estate through advanced DLT, web 3 & blockchain technology for transparent investments.
//           </p>
//         </div>
//         <div className="form_wrapper" style={{
//             marginTop:"80px",
//           marginBottom: "10px",
//           padding: "5px 30px",
//           color: "#fff",
    
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        
//           letterSpacing: "1px",
//           backgroundColor: "rgba(255, 255, 255, 0.1)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//           boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//           borderRadius: "8px",
//         }}>
//           <form>
//          <div style={{ margin: '10px auto' }} >Get In Touch</div> 
//             <div style={{ marginBottom: '10px' }}>
//               <label htmlFor="name" style={{ display: 'block', marginBottom: '2px' }}>Name</label>
//               <input type="text"  name="name" style={{ width: '100%' ,borderRadius: '5px', border: '1px solid #ccc' , backgroundColor: '#1b1b1b',}} />
//             </div>
//             <div style={{ marginBottom: '10px' }}>
//               <label htmlFor="email" style={{ display: 'block', marginBottom: '2px' }}>Email</label>
//               <input type="email"  name="email" style={{ width: '100%',  borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#1b1b1b',}} />
//             </div>
//             <div style={{ marginBottom: '10px' }}>
//               <label htmlFor="phone" style={{ display: 'block', marginBottom: '2px' }}>Phone</label>
//               <input type="text"  name="phone" style={{ width: '100%', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#1b1b1b',}} />
//             </div>
//             <button type="submit" style={{
//                  width: '100%',
//               padding: '10px 20px',
//               borderRadius: '5px',
//               backgroundColor: '#00DDD2',
//             //   color: 'white',
//             marginTop: '10px' ,
//               marginBottom: '5px' ,
//               border: '1px solid #ccc',
//               cursor: 'pointer'
//             }}>Send</button>
//           </form>
//         </div>
//       </div>
//       <a
//         href="#about"
//         className="neoh_fn_down magic-hover magic-hover__square"
//       >
//         <span className="text">Scroll Down</span>

//         <span>
//           <FaArrowDownLong className="icon" />
//           {/* <img src="svg/right-arr.svg" alt="" className="fn__svg" /> */}
//         </span>
//       </a>
//     </div>
//   </div>
//   )
// }

// export default Hero

import React, { useEffect, useState, useCallback } from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import emailjs from 'emailjs-com';

const Hero = () => {
  const [isBigScreen, setIsBigScreen] = useState(false); // Track screen size
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  }); // Form data state
  const [formStatus, setFormStatus] = useState(''); // Form status message

  // Optimized resize listener with debounce
  useEffect(() => {
    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };

    const handleResize = debounce(() => {
      setIsBigScreen(window.innerWidth >= 850);
    }, 200);

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []); // useCallback to prevent unnecessary re-creation

  // Send email using EmailJS
  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      setFormStatus('Sending...');

      emailjs
        .send(
          'service_0e792iq', // EmailJS service ID
          'template_agb9vej', // EmailJS template ID
          formData,
          'vKc7N5kNeYKiO_q7U' // EmailJS public key (user ID)
        )
        .then(
          () => {
            setFormStatus('Message sent successfully!');
            setTimeout(() => setFormStatus(''), 2000);
            setFormData({ name: '', email: '', phone: '' }); // Reset form
          },
          (error) => {
            console.error(error.text);
            setFormStatus('Failed to send message. Please try again.');
          }
        );
    },
    [formData] // Dependency ensures this updates if formData changes
  );

  return (
    <div className="neoh_fn_hero">
      {/* Overlay (of hero header) */}
      <div className="bg_overlay">
        <div className="bg_color" /> {/* Overlay color */}
        <div className="bg_image loaded" data-bg-img="img/hero/1.jpeg" /> {/* Background image */}
      </div>

      {/* Hero Content */}
      <div className="hero_content">
        <div
          className="container"
          style={{ display: isBigScreen ? 'flex' : 'block' }} // Dynamic layout
        >
          <div className="content" style={{ paddingTop: '130px' }}>
            <h5 className="fn_title2">Invest</h5>
            <h4 className="fn_title2">Transparently</h4>
            <p className="fn_desc">
              Transforming global real estate through advanced DLT, web 3 and
              blockchain technology for transparent investments.
            </p>
          </div>

          {/* Form Wrapper */}
          <div
            className="form_wrapper"
            style={{
              marginTop: '80px',
              marginBottom: '10px',
              padding: '5px 30px',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '8px',
            }}
          >
            <form onSubmit={sendEmail}>
              <div style={{ margin: '10px auto' }}>Get In Touch</div>

              {['name', 'email', 'phone'].map((field) => (
                <div key={field} style={{ marginBottom: '10px' }}>
                  <label
                    htmlFor={field}
                    style={{ display: 'block', marginBottom: '2px' }}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      backgroundColor: '#1b1b1b',
                    }}
                  />
                </div>
              ))}

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  backgroundColor: '#00DDD2',
                  marginTop: '10px',
                  marginBottom: '5px',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                Send
              </button>

              {formStatus && <p style={{ marginTop: '10px' }}>{formStatus}</p>}
            </form>
          </div>
        </div>

        <a href="#about" className="neoh_fn_down magic-hover magic-hover__square">
          <span className="text">Scroll Down</span>
          <span>
            <FaArrowDownLong className="icon" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;