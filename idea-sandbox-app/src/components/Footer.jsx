import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/idea-sandbox_logo.jpg" alt="Idea Sandbox Logo" />
          </div>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Benefits</a>
            <Link to="/history">Idea History</Link>
            <Link to="/submit" className="nav-cta">
              Submit Idea
            </Link>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Twitter">
              <img src="/assets/icon-twitter.svg" alt="Twitter" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/assets/icon-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <p className="copyright">
          &copy; 2024 Idea Sandbox. All rights reserved.
        </p>
      </div>
    </footer>
  );
}