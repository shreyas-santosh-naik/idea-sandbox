import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { useAuth } from '../context/AuthContext';    // 2. Import useAuth
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignupPage() {
  // 3. Add state for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 4. Get the login function and navigate hook
  const { login } = useAuth();
  const navigate = useNavigate();
  
  // 5. Create the submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // For our mock setup, we'll just "log in" the new user immediately
    login(email);
    // And then redirect them to the dashboard
    navigate('/');
  };

  return (
    <>
      <Header />
      <section className="auth-form-page section-padding">
        <div className="container">
          <div className="glass-card">
            <h2 className="section-title">Sign Up</h2>
            {/* 6. Attach the submit handler to the form */}
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
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}