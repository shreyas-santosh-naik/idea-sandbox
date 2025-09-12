import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. IMPORT useAuth to get the logged-in user

// 2. REMOVED unused Firebase imports and db
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../main';

export default function SubmitIdea() {
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // 3. ADD loading state for the form
  const navigate = useNavigate();
  const { user } = useAuth(); // 4. GET the current user from the context

  // 5. REMOVED the temporary hardcoded userId
  // const userId = 'user_123';

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      alert("Please log in to submit an idea.");
      return;
    }

    setIsSubmitting(true); // Disable button on submission

    try {
      await fetch('http://localhost:5000/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: ideaTitle,
          description: ideaDescription,
          tags: tags.split(',').map(tag => tag.trim()),
          userId: user.id, // 6. USE the actual user's ID from the context
          timestamp: new Date().toISOString()
        })
      });
      // On success, navigate to the success page
      navigate('/success');
    } catch (e) {
      console.error('Error adding idea to mock API: ', e);
      alert('There was an error submitting your idea. Please try again.'); // 7. SHOW error to user
    } finally {
      setIsSubmitting(false); // Re-enable button whether it succeeds or fails
    }
  };

  return (
    <>
      <Header />
      <section className="idea-form section-padding">
        <div className="container">
          <div className="glass-card">
            <h2 className="section-title">Submit Your Idea</h2>
            <div className="form-layout-container">
              <div className="form-content">
                <p className="form-description">
                  Share a clear title, detailed description, and tags to help others find your idea.
                </p>
                <form onSubmit={handleSubmit}>
                  {/* --- Idea Title Input --- */}
                  <div className="form-group">
                    <label htmlFor="ideaTitle">Idea Title</label>
                    <input
                      type="text"
                      id="ideaTitle"
                      placeholder="Concise title"
                      value={ideaTitle}
                      onChange={(e) => setIdeaTitle(e.target.value)}
                      required
                    />
                  </div>
                  {/* --- Description Input --- */}
                  <div className="form-group">
                    <label htmlFor="ideaDescription">Description</label>
                    <textarea
                      id="ideaDescription"
                      rows="8"
                      placeholder="Describe your idea..."
                      value={ideaDescription}
                      onChange={(e) => setIdeaDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  {/* --- Tags Input --- */}
                  <div className="form-group">
                    <label htmlFor="tags">Tags (comma separated)</label>
                    <input
                      type="text"
                      id="tags"
                      placeholder="e.g., productivity, hr, automation"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                  {/* --- Submit Button --- */}
                  <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Idea'}
                  </button>
                </form>
              </div>
              <div className="form-tips">
                <h3>Tips for a great idea</h3>
                <ul>
                  <li><strong>Be specific:</strong> Clearly explain the problem you're solving.</li>
                  <li><strong>Think impact:</strong> How will this benefit the company or employees?</li>
                  <li><strong>Consider feasibility:</strong> Is your idea realistic and actionable?</li>
                  <li><strong>Add details:</strong> The more context you provide, the better.</li>
                  <li><strong>Be open:</strong> Welcome feedback and collaboration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}