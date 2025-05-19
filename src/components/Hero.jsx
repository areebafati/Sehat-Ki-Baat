// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import doctorImage from '../assets/doc pic.webp'; // Make sure you save the image in assets

function Hero() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    { <section id="herosection"className="hero">
      <div className="hero-left">
        <h1>Pakistan's Trusted <br />Healthcare Platform</h1>
        <p>
          Connect with top doctors, order medicines, book lab tests, and get
          ambulance services – all in one platform. Affordable healthcare for every Pakistani.
        </p>
        <div className="hero-buttons">
        <a href="https://play.google.com/store/games?hl=en&pli=1" download>
        <button className="btn-primary">Download App</button>
      </a>
         
          <button className="btn-outline">Learn More</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={doctorImage} alt="Doctor examining scan" />
      </div>
    </section>}
  </motion.div>
    
   
  );
}

export default Hero;
