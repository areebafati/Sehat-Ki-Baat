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
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <section id="testimonialsection" className="testimonial-section">
      <h2>What Pakistanis Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">“{t.review}”</p>
            <div className="testimonial-footer">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-city">{t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
   
  );
}
