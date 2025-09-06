import React from "react";

export default function Steps() {
  return (
    <section id="how-it-works" className="how-it-works section-padding">
      <div className="container">
        <h2 className="section-title">What Makes It Unique</h2>
        <div className="steps-grid">
          <div className="step-card animate-fade-in-left">
            <span className="step-number">1</span>
            <h3>Fosters Collective Intelligence</h3>
            <p>
              The platform taps into the creativity of the entire workforce, not
              just a select few in R&D or management.
            </p>
          </div>

          <div className="step-card animate-fade-in-left delay-200">
            <span className="step-number">2</span>
            <h3>Boosts Employee Engagement</h3>
            <p>
              It empowers employees by giving them a voice and a stake in the
              company's direction, fostering a culture of trust and shared
              purpose.
            </p>
          </div>

          <div className="step-card animate-fade-in-left delay-400">
            <span className="step-number">3</span>
            <h3>Transparent Path to Action</h3>
            <p>
              It's a dynamic, interactive workshop where ideas are collectively
              sculpted, with a clear path to implementation that turns a simple
              suggestion into a valued asset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
