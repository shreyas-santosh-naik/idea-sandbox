import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function IdeaHistory() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Temporary user ID, will be updated with actual authentication later
  const userId = 'user_123';

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('http://localhost:5000/ideas?userId=' + userId);
        const data = await response.json();
        // Sort by timestamp descending
        data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setIdeas(data);
     
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
      setLoading(false);
    };
    fetchIdeas();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <section className="section-padding">
          <div className="container text-center">
            <h2 className="section-title">Loading...</h2>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">My Past Submissions</h2>
          <div className="idea-history-grid">
            {ideas.length === 0 ? (
              <p className="text-center" style={{ color: 'var(--text-muted)' }}>You haven't submitted any ideas yet.</p>
            ) : (
              ideas.map((idea) => (
                <div key={idea.id} className="idea-card glass-card animate-scale-in">
                  <h3>{idea.title}</h3>
                  <p>{idea.description}</p>
                  <div className="idea-tags">
                    {idea.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <p className="idea-timestamp">
                    Submitted on: {new Date(idea.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}