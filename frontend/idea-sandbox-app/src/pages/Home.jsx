import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero / Dashboard Section */}
      <section className="dashboard-section section-padding flex flex-col items-center justify-center text-center">
        <div className="glass-card mx-auto px-4 max-w-xl">
          <h2 className="section-title">Welcome to the Idea Sandbox!</h2>
          <p>Ready to start innovating? Share your ideas or check out what your colleagues have submitted.</p>
          <div className="cta-buttons" style={{ marginTop: '20px' }}>
            <Link to="/submit" className="btn btn-primary">
              Submit a New Idea
            </Link>
            <Link to="/submissions" className="btn btn-secondary" style={{ marginLeft: '10px' }}>
              View My Submissions
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="features-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">💡</span>
              <h3 className="feature-title">Idea Submission & Tagging</h3>
              <p className="feature-description">
                Employees can submit ideas with a clear title, a detailed description, and tags for easy organization and searchability.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💬</span>
              <h3 className="feature-title">Collaborative Development</h3>
              <p className="feature-description">
                Anyone can comment on an idea to offer feedback, suggest modifications, and contribute new perspectives. The platform would track changes to show how ideas evolve.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📈</span>
              <h3 className="feature-title">Gamified Voting & Ranking</h3>
              <p className="feature-description">
                Users can upvote ideas they support. Badges or points could be awarded for submitting impactful ideas or making valuable contributions.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✅</span>
              <h3 className="feature-title">Transparency and Status Tracking</h3>
              <p className="feature-description">
                The status of an idea is always visible to everyone: "Under Review," "Accepted for Development," or "Declined" (with a clear explanation).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section section-padding bg-gray-900">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Submit</h3>
              <p className="process-description">
                Share your idea with a clear title, detailed description, and relevant tags.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Collaborate</h3>
              <p className="process-description">
                Discuss and refine the idea with feedback and suggestions from colleagues.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Vote</h3>
              <p className="process-description">
                Vote on your favorite ideas to help surface the most impactful and popular concepts.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Innovate</h3>
              <p className="process-description">
                Top-voted ideas are escalated for review and potential implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">What People Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"This platform is a very useful way to tap into the collective intelligence of the workforce and make employees feel more engaged in the company's future."</p>
              <div className="author">- CEO, Company Name</div>
            </div>
            <div className="testimonial-card">
              <p>"I love how easy it is to share an idea and get instant feedback. It feels like my voice is heard."</p>
              <div className="author">- John Smith, Software Engineer</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
  