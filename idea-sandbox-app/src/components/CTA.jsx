import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section id="cta" className="cta section-padding">
      <div className="container">
        <h2>Ready to Transform Your Workplace?</h2>
        <p>
          Submit your best ideas and see them transform into actionable
          projects.
        </p>
        <Link to="/submit" className="btn btn-primary">
          Submit Idea
        </Link>
      </div>
    </section>
  );
}
