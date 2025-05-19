import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import HealthcareCards from './components/HealthcareCards.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TestimonialSection from './components/Testimonialsection.jsx';
import CTASection from './components/CTASection.jsx';
import ContactUs from './components/ContactUs.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; 
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {/* Set login as default page */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Home Page after login */}
          <Route path="/home" element={<HomePage />} />

          {/* Contact Page */}
          <Route path="/contact" element={
            <>
              <Header />
              <ContactUs />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Services />
      <About />
      <HealthcareCards />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>

  );
}

export default App;
