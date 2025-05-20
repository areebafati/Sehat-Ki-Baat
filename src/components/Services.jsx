import React from "react";
import "./Services.css";
import { motion } from 'framer-motion';


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
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <section  id="howitworkssection"className="how-it-works">
  
    <h2>
            How it <span> Works</span>

          </h2>
          <p className="subtitle">
           Get started with SehatKiBaat in 4 simple steps.
          </p>
          <br />
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-circle">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  </motion.div>

          
   
  );
};

export default Services;
