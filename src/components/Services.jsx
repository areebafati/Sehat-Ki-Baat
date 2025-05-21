import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your account with phone/email (OTP verification available).",
  },
  {
    number: "2",
    title: "Select Service",
    description: "Choose from doctors, medicines, lab tests, or ambulance.",
  },
  {
    number: "3",
    title: "Book & Pay",
    description: "Pick your preferred option and pay via JazzCash, Easypaisa, or card.",
  },
  {
    number: "4",
    title: "Get Service",
    description: "Receive healthcare at home or visit as scheduled.",
  },
];

const Services = () => {
  return (
    <section id="howitworkssection" className="how-it-works">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        How it <span>Works</span>
      </motion.h2>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get started with SehatKiBaat in 4 simple steps.
      </motion.p>

      <br />

      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            className="step"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="step-circle">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
