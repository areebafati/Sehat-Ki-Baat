// components/Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Loginsignup.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Link } from 'react-router-dom';


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
      }, 1500); // Wait 1.5 seconds
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign up Here!</h2>
      <br />
      <form onSubmit={handleSignup}>
        <input name="firstName" type="text" placeholder="First Name" required onChange={handleChange} />
        <input name="lastName" type="text" placeholder="Last Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password (min 6 chars)" required onChange={handleChange} />
        <button type="submit">Signup</button>
        <p>Back To Login? <Link to="/login">Click Here</Link></p>
        <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />

      </form>
    </div>
  );
};

export default Signup;
