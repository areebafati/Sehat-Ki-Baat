import './CTASection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <motion.section
      id="ctasection"
      className="cta-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2>Ready to Experience Better Healthcare?</h2>
      <p>
        Join thousands of Pakistanis who trust SehatKeBaat for their medical needs.
      </p>
      <div className="cta-buttons">
        <a href="https://play.google.com/store/games?hl=en&pli=1" download>
          <button className="btn btn-filled">Download App</button>
        </a>
        <Link to="/contact">
          <button className="btn btn-outlined">Contact Us</button>
        </Link>
      </div>
    </motion.section>
  );
}
