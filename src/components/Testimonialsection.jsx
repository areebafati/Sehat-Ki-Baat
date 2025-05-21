import './Testimonialsection.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Areeba Fatima",
    city: "Islamabad",
    image: "https://i.pravatar.cc/100?img=1",
    review: "The medicine delivery service is a lifesaver for my elderly father in Islamabad. We get all his diabetes medications delivered within 2 hours."
  },
  {
    name: "Ali Khan",
    city: "Lahore",
    image: "https://i.pravatar.cc/100?img=2",
    review: "I consulted a doctor online and got the prescription instantly. Very convenient for someone with a busy schedule."
  },
  {
    name: "Ahmed",
    city: "Karachi",
    image: "https://i.pravatar.cc/100?img=3",
    review: "Their lab testing service is quick and affordable. Loved how they collected the sample from home."
  },
];

export default function TestimonialSection() {
  return (
    <motion.section
      id="testimonialsection"
      className="testimonial-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>What Pakistanis Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="testimonial-text">“{t.review}”</p>
            <div className="testimonial-footer">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-city">{t.city}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

