// components/Signup.jsx
// Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import './Loginsignup.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Signup = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (form.password.length < 6) {
        return toast.error("Password must be at least 6 characters long.");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, {
        displayName: `${form.firstName} ${form.lastName}`,
      });

      toast.success("🎉 Account created successfully!");
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create Account</h2>
        <p>Sign up to get started</p>
        <form onSubmit={handleSignup}>
          <div className="input-wrapper">
            <FaUser className="icon" />
            <input name="firstName" type="text" placeholder="First Name" required onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FaUser className="icon" />
            <input name="lastName" type="text" placeholder="Last Name" required onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FaEnvelope className="icon" />
            <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FaLock className="icon" />
            <input name="password" type="password" placeholder="Password (min 6 chars)" required onChange={handleChange} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default Signup;
