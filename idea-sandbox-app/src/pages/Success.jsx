import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Success() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/');
  };

const handleSubmitAnotherIdea = async () => {
  // Example idea data to save
  const newIdea = {
    title: "New Idea Title",
    description: "Description of the new idea",
    createdAt: new Date().toISOString()
  };

  try {
    await fetch('http://localhost:5000/ideas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIdea)
    });
    navigate('/submit');
  } catch (error) {
    console.error('Failed to save idea:', error);
    navigate('/submit');
  }
};
  return (
  <>
    <Header />
    <section className="success-page section-padding">
      <div className="success-content text-center">
        {/* New Animated Checkmark */}
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>

        <h2 className="section-title">Idea Submitted Successfully!</h2>
        <p className="success-message">
          Thank you for contributing to the Idea Sandbox. Your suggestion will now be reviewed by the team.
        </p>
        <div className="cta-buttons">
          <button onClick={handleGoToDashboard} className="btn btn-primary">
            Go to Dashboard
          </button>
          <button onClick={() => navigate('/submit')} className="btn btn-secondary">
            Submit Another Idea
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </>
);
}
