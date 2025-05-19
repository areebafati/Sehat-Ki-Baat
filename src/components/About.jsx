import React from 'react';
import './About.css';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {<div  className="services-container" id="servicessss">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Affordable healthcare solutions for every Pakistani
      </p>
      <div className="services-buttons">
        <button className="btn btn-primary">All Services</button>
        <button className="btn">Doctors</button>
        <button className="btn">Medicine</button>
        <button className="btn">Lab Tests</button>
        <button className="btn">Ambulance</button>
      </div>
    </div>}
    </motion.div>
    
  );
};






export default About;
