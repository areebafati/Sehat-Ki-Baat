import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="services-container" id="servicessss">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="services-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Affordable healthcare solutions for every Pakistani
      </motion.p>

      <motion.div
        className="services-buttons"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className="btn btn-primary">All Services</button>
        <button className="btn">Doctors</button>
        <button className="btn">Medicine</button>
        <button className="btn">Lab Tests</button>
        <button className="btn">Ambulance</button>
      </motion.div>
    </section>
  );
};

export default About;
