import React from "react";
import "./WhyChoose.css";
import doctorIcon from "./icons/doctor.png.png";
import medicineIcon from "./icons/drugs.png";
import labIcon from "./icons/tube.png";
import ambulance from "./icons/ambulance.png";
import heart from "./icons/heart-beat.png";
import rupee from "./icons/rupee.png";
import { motion } from 'framer-motion';

const WhyChoose = () => {
  const services = [
    {
      icon: doctorIcon,
      title: "Doctor Consultation",
      description:
        "Book appointments with top Pakistani doctors or consult online via video call for quick medical advice.",
    },
    {
      icon: medicineIcon,
      title: "Medicine Delivery",
      description:
        "Order prescribed medicines from trusted Pakistani pharmacies with home delivery in major cities.",
    },
    {
      icon: labIcon,
      title: "Lab Tests",
      description:
        "Book diagnostic tests from Chughtai, Shaukat Khanum, ICD and other leading labs with home sample collection.",
    },
    {
        icon: ambulance,
        title: "Emergency Services",
        description:
          "24/7 live ambulance services available in Islamabad.",
      },
      {
        icon: heart,
        title: "Health Monitoring",
        description:
          "Track your health metrices, set medication reminders and get personalized recommendations",
      },
      {
        icon: rupee,
        title: "Affordable Services",
        description:
          "Healthcare services at competitive precises, ensuring value of money",
      },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
      <section id="featuressection"className="why-choose">
      <h2>
        Why Choose <span>SehatKeBaat</span>
      </h2>
      <p className="subtitle">
        We provide comprehensive healthcare services tailored for Pakistanis
      </p>
      <div className="services">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-wrapper">
              <img src={service.icon} alt={`${service.title} icon`} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
 
  );
};

export default WhyChoose;
