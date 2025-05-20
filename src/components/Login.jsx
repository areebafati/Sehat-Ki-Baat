// components/Login.jsx
// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate, Link } from 'react-router-dom';
// import './Loginsignup.css';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// Assuming you have a CSS file for styling

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             //   await signInWithEmailAndPassword(auth, email, password);
//             await signInWithEmailAndPassword(auth, email, password);
//             toast.success("✅ You are successfully logged in!");



//             setTimeout(() => {
//                 navigate('/home');
//             }, 1500); // Wait 1.5 seconds
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };
//     // Redirect to HomePage


//     return (
//         <div className="auth-container">
//             <h2>Login Here !</h2>
//             <br />
//             <form onSubmit={handleLogin}>
//                 <input type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Submit</button>
//             </form>
//             <p>New user? <Link to="/signup">Register Here</Link></p>
//             <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />

//         </div>
//     );
// };

// export default Login;

// Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import './Loginsignup.css';
import { toast, ToastContainer } from 'react-toastify';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("✅ You are successfully logged in!");
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
                <h2>Welcome Back!</h2>
                <p>Login to continue</p>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>New user? <Link to="/signup">Register here</Link></p>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
        </div>
    );
};

export default Login;
