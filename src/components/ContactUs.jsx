// import React from "react";
import "./ContactUs.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Your message has been submitted successfully!");
    e.target.reset();
  };

  return (
    <section className="contact-section" id="ContactUs">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form glass" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
        </form>

        <div className="contact-info glass">
          <div className="contact-cards">
            <div className="card">
              <FaMapMarkerAlt /> <span>G8/4 Islamabad, Pakistan</span>
            </div>
            <div className="card">
              <FaPhone /> <span>+92 343 9024736</span>
            </div>
            <div className="card">
              <FaEnvelope /> <span>info@sehatkebaat.com</span>
            </div>
            <div className="card">
              <FaCommentDots /> <span>+92 311 8203633</span>
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
