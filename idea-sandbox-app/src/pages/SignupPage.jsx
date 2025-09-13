import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // The missing import for <Link> is now included
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate('/');
  };

  return (
    <>
      <Header />
      <section className="auth-form-page section-padding">
        <div className="container">
          <div className="glass-card">
            <h2 className="section-title">Sign Up</h2>
            <form onSubmit={handleSubmit} className="auth-form-container">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Create a password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">
                Create Account
              </button>
              <div className="auth-switch-link">
                <p>Already have an account? <Link to="/login">Log In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}