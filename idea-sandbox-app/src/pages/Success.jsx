import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Success() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/');
  };

  const handleSubmitAnotherIdea = () => {
    navigate('/submit');
  };

  return (
    <>
      <Header />
      <section className="success-page section-padding">
        <div className="container">
          <div className="glass-card text-center">
            <div className="success-icon">🎉</div>
            <h2 className="section-title">Idea Submitted Successfully!</h2>
            <p className="success-message">
              Thank you for contributing your idea to the Idea Sandbox. Your suggestion will now be reviewed by the team.
            </p>
            <div className="cta-buttons">
              <button onClick={handleGoToDashboard} className="btn btn-primary">
                Go to Dashboard
              </button>
              <button onClick={handleSubmitAnotherIdea} className="btn btn-secondary">
                Submit Another Idea
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
