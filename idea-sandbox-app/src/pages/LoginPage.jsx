import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // The missing import for <Link> is now included
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
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
            <h2 className="section-title">Log In</h2>
            <form onSubmit={handleSubmit} className="auth-form-container">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">
                Log In
              </button>
              <div className="auth-switch-link">
                <p>Haven't created an account? <Link to="/signup">Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}