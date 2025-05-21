// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import doctorImage from '../assets/doc pic.webp';

function Hero() {
  return (
    <motion.section
      id="herosection"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pakistan's Trusted <br /> Healthcare Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Connect with top doctors, order medicines, book lab tests, and get ambulance services – all in one platform. Affordable healthcare for every Pakistani.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="https://play.google.com/store/games?hl=en&pli=1" download>
            <button className="btn-primary">Download App</button>
          </a>
          <button className="btn-outline">Learn More</button>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img src={doctorImage} alt="Doctor examining scan" />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
