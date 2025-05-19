import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className='.main-content'>
    {<header className="main-header" >
      <div className="logo">
        <span role="img" aria-label="heart">💙</span>
        <span className="logo-text">SehatKeBaat</span>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
     <Link className='nav-link' to="/home" state={{ scrollTo: "herosection" }}>Home</Link>
     <Link to="/home" state={{ scrollTo: "featuressection" }}>Features</Link>
     <Link to="/home" state={{ scrollTo: "servicessss" }}>Services</Link>
     <Link to="/home" state={{ scrollTo: "howitworkssection" }}>How It Works</Link>
     <Link to="/home" state={{ scrollTo: "testimonialsection" }}>Testimonials</Link>
     <Link to="/contact">Contact Us</Link>

     <div className="auth-buttons">
      <Link to="/login">
          <button className="login-btn">Login</button>    
      </Link>
      <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
            
      </Link>
        
        
      </div>
      
      </nav>
  
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </header>}
      
    </div>
   
  </motion.div>
    
  );
}

export default Header;
