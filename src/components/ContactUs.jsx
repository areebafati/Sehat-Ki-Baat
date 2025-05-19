// import React from "react";
import "./ContactUs.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const ContactUs = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("✅ Your message has been submitted successfully!", {
      position: "bottom-right",
      autoClose: 3000,        // Close after 3 seconds
      hideProgressBar: false, // Show progress bar
      closeOnClick: true,     // Close when clicked
      pauseOnHover: true,     // Pause when hovered
      draggable: true,        // Allow dragging
      progress: undefined,    // Default progress behavior
      theme: "colored",       // Or "light", "dark"
    });
    e.target.reset(); // Optional: reset form
  };

  return (
    <section className="contact-section" id="ContactUs">
      <h2>Contact Us</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          <ToastContainer position="bottom-right" autoClose={3000} />

               {/* Success Message */}
            
  



        </form>

   

        {/* Contact Info & Map */}
        <div className="contact-info">
          <div className="contact-cards">
            <div className="card">
              📍 <span>Location: G8/4 Islamabad, Pakistan</span>
            </div>
            <div className="card">
              📞 <span>Phone no.:+92 343 9024736</span>
            </div>
            <div className="card">
              ✉️ <span>Gmail: info@sehatkebaat.com</span>
            </div>
            <div className="card">
              💬 <span>Personal: +92 311 8203633</span>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=G8/4%20Islamabad,%20Pakistan&output=embed"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
