import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="footer-title">SehatKeBaat</h3>
          <p className="footer-text">
            Pakistan's trusted healthcare platform connecting patients with
            doctors, pharmacies, labs, and ambulance services.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul>
            <li><a href="#herosection">Home</a></li>
            <li><a href="#featuressection">Features</a></li>
            <li><a href="#servicessection">Services</a></li>
            <li><a href="#howitworkssection">How It Works</a></li>
            <li><a href="#testimonialsection">Testimonials</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="footer-subtitle">Services</h4>
          <ul>
            <li>Doctor Consultation</li>
            <li>Medicine Delivery</li>
            <li>Lab Tests</li>
            <li>Ambulance Services</li>
            <li>Health Packages</li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="footer-subtitle">Contact Us</h4>
          <ul className="contact-list">
            <li>📍 G8/4 Islamabad, Pakistan</li>
            <li>📞 +92 343 9024736</li>
            <li>✉️ info@sehatkebaat.com</li>
            <li>💬 +92 311 8203633</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        © 2025 SehatKeBaat by Areeba Fatima. All rights reserved. |
        <a href="#"> Privacy Policy </a> |
        <a href="#"> Terms of Service </a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
