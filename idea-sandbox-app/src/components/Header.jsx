import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // 1. Import useLocation
import { useAuth } from '../context/AuthContext.jsx';

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation(); // 2. Get the current page location

  // 3. Create the click handler function
  const handleHomeClick = () => {
    // If we are already on the homepage, scroll to the top
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // This creates the smooth scrolling effect
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <div className="logo-container">
              <img src="/idea-sandbox_logo.png" alt="Idea Sandbox Logo" />
            </div>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {/* 4. Add the onClick handler to the Home link */}
            <li>
              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#how-it-works">How It Works</a></li>

            {user ? (
              // If user is logged in
              <>
                <li><Link to="/history">My Ideas</Link></li>
                <li><button onClick={logout} className="nav-cta-logout">Log Out</button></li>
                <li><Link to="/submit" className="nav-cta">Submit Idea</Link></li>
              </>
            ) : (
              // If user is logged out
              <>
                <li><Link to="/login" className="nav-auth-btn">Log In</Link></li>
                <li><Link to="/signup" className="nav-auth-btn">Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}