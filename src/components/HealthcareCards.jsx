import React from "react";
import "./HealthcareCards.css";
import gp from "../assets/gp.jpg"
import md from "../assets/md.jpg";
import cbc from "../assets/cbc.jpg"
import ea from "../assets/ea.jpg";
import sc from "../assets/sc.jpg"
import ff from "../assets/ff.jpg"
import { motion } from 'framer-motion';




const services = [
  {
    title: "General Physician",
    descriptiongp : "Consult with certified doctors for common illnesses and health concerns.",
    price: "PKR 3500–10000",
    rating: 4.8,
    image: gp, // Replace with actual image path
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
    image: ea, // Replace with actual image path
  },
  {
    title: "Specialist Consultation",
    description: "Cardeologist, neurologists and other specialist available",
    price: "PKR 2500 to 3000",
    rating: 4.7,
    image: sc,
  },
  {
    title: "Full Body Checkup",
    description: "Compprehensive health package with 50+ tests",
    price: "PKR 5000",
    rating: 4.6,
    image: ff,
  },
];

const HealthcareCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
       <div id="servicessection" className="card-container">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <img src={service.image} alt={service.title} className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <div className="card-footer">
              <span className="price">{service.price}</span>
              <span className="rating">⭐ {service.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </motion.div>
   
  );
};

export default HealthcareCards;
