import React from "react";

export default function Features() {
  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="feature-grid">
          {/* Card 1: Idea Submission */}
          <div className="feature-card animate-scale-in">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.09 16.05a1 1 0 0 1-1.42 0L12 14.42l-1.67 1.63a1 1 0 0 1-1.42 0l-1.04-1.04a1 1 0 0 1 0-1.42L9.58 12l-1.63-1.67a1 1 0 0 1 0-1.42l1.04-1.04a1 1 0 0 1 1.42 0L12 9.58l1.67-1.63a1 1 0 0 1 1.42 0l1.04 1.04a1 1 0 0 1 0 1.42L14.42 12l1.63 1.67a1 1 0 0 1 0 1.42z"/><path d="M21.5 12a9.5 9.5 0 1 1-9.5-9.5A9.5 9.5 0 0 1 21.5 12z"/></svg>
            </div>
            <h3>Idea Submission & Tagging</h3>
            <p>
              Employees can submit ideas with a clear title, detailed
              description, and tags for easy organization and searchability.
            </p>
          </div>

          {/* Card 2: Collaborative Development */}
          <div className="feature-card animate-scale-in delay-200">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Collaborative Development</h3>
            <p>
              Anyone can comment on an idea to offer feedback, suggest
              modifications, and contribute new perspectives. The platform
              tracks changes to show how ideas evolve.
            </p>
          </div>

          {/* Card 3: Community Voting */}
          <div className="feature-card animate-scale-in delay-400">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8a2.5 2.5 0 0 1 0 5"/><path d="M14.2 12a2.5 2.5 0 0 1 0 5"/><path d="M9.7 15a2.5 2.5 0 0 1 0 5"/></svg>
            </div>
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
