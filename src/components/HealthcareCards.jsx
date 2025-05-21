import React from "react";
import "./HealthcareCards.css";
import gp from "../assets/gp.jpg";
import md from "../assets/md.jpg";
import cbc from "../assets/cbc.jpg";
import ea from "../assets/ea.jpg";
import sc from "../assets/sc.jpg";
import ff from "../assets/ff.jpg";
import { motion } from "framer-motion";

const services = [
  {
    title: "General Physician",
    description: "Consult with certified doctors for common illnesses and health concerns.",
    price: "PKR 3500–10000",
    rating: 4.8,
    image: gp,
  },
  {
    title: "Medicine Delivery",
    description: "Get prescribed medicines delivered in Islamabad.",
    price: "PKR 200 Delivery",
    rating: 4.7,
    image: md,
  },
  {
    title: "CBC Test",
    description: "Complete Blood Count test with home sample collection.",
    price: "PKR 1000",
    rating: 4.6,
    image: cbc,
  },
  {
    title: "Emergency Ambulance",
    description: "24/7 emergency services with trained paramedics",
    price: "It Depends On the Distance",
    rating: 4.8,
    image: ea,
  },
  {
    title: "Specialist Consultation",
    description: "Cardiologists, neurologists and other specialists available",
    price: "PKR 2500 to 3000",
    rating: 4.7,
    image: sc,
  },
  {
    title: "Full Body Checkup",
    description: "Comprehensive health package with 50+ tests",
    price: "PKR 5000",
    rating: 4.6,
    image: ff,
  },
];

const HealthcareCards = () => {
  return (
    <motion.div
      id="servicessection"
      className="card-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {services.map((service, index) => (
        <motion.div
          className="card"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <img src={service.image} alt={service.title} className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <div className="card-footer">
              <span className="price">{service.price}</span>
              <span className="rating">⭐ {service.rating}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HealthcareCards;
