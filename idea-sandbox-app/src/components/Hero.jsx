import React from "react";
import { Link } from "react-router-dom";
import BackgroundParticles from "./BackgroundParticles";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-background-gradient" />
      <BackgroundParticles count={50} />
      <div className="container hero-container">
        <div className="glass-card">
          <h1 className="animate-fade-in-up">
            Turn Ideas into Real Innovation
          </h1>
          <p className="hero-description animate-fade-in-up delay-200">
            The Idea Sandbox is a dynamic and collaborative platform designed to
            replace the traditional, static suggestion box with a living space
            for company-wide innovation.
          </p>
          <div className="cta-buttons animate-fade-in-up delay-400">
            <Link to="/submit" className="btn btn-primary">
              Submit Your Idea
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
