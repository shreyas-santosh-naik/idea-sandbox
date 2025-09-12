import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // Import the useAuth hook

export default function Header() {
  const { user, logout } = useAuth(); // Get user state and logout function

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/idea-sandbox_logo.png" alt="Idea Sandbox Logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
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
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup" className="nav-cta">Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}