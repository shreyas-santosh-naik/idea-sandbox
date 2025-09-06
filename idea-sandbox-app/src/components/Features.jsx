import React from "react";

export default function Features() {
  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card animate-scale-in">
            <div className="icon">💡</div>
            <h3>Idea Submission & Tagging</h3>
            <p>
              Employees can submit ideas with a clear title, detailed
              description, and tags for easy organization and searchability.
            </p>
          </div>

          <div className="feature-card animate-scale-in delay-200">
            <div className="icon">💬</div>
            <h3>Collaborative Development</h3>
            <p>
              Anyone can comment on an idea to offer feedback, suggest
              modifications, and contribute new perspectives. The platform
              tracks changes to show how ideas evolve.
            </p>
          </div>

          <div className="feature-card animate-scale-in delay-400">
            <div className="icon">📈</div>
            <h3>Community Voting & Refinement</h3>
            <p>
              Users can vote on and refine ideas, allowing the best concepts to
              rise to the top and be escalated to a management or innovation
              team for review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
