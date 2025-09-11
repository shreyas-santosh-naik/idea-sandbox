import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background-gradient"></div>
      {/* <div className="background-particles"></div> */}
      <div className="container hero-container">
        <div className="glass-card animate-scale-in">
          {/* New H1 tag for the welcome message */}
          <h1 className="animate-fade-in-up">
            Welcome to the Idea Sandbox!
          </h1>
          {/* Existing H1 changed to H3 for the subheading */}
          <h2 className="animate-fade-in-up delay-100">
            Turn Ideas into Real Innovation
          </h2>
          <br></br>
          <p className="hero-description animate-fade-in-up delay-200">
            The Idea Sandbox is a dynamic and collaborative platform designed to replace the traditional, static suggestion box with a living space for company-wide innovation.
          </p>
          <div className="cta-buttons animate-fade-in-up delay-400">
            <Link to="/submit" className="btn btn-primary">
              Submit Your Idea
            </Link>
            <a href="#how-it-works" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}