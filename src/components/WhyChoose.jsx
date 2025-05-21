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
        "Track your health metrics, set medication reminders and get personalized recommendations.",
    },
    {
      icon: rupee,
      title: "Affordable Services",
      description:
        "Healthcare services at competitive prices, ensuring value for money.",
    },
  ];

  return (
    <motion.section
      id="featuressection"
      className="why-choose"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>
        Why Choose <span>SehatKeBaat</span>
      </h2>
      <p className="subtitle">
        We provide comprehensive healthcare services tailored for Pakistanis
      </p>
      <div className="services">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className="icon-wrapper">
              <img src={service.icon} alt={`${service.title} icon`} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChoose;
