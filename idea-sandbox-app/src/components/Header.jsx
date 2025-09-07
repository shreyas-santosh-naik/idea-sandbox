import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <Link to="/history">Idea History</Link>
            </li>
            <li>
              <Link to="/submit" className="nav-cta">
                Submit Idea
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}