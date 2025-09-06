import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../main';

export default function IdeaHistory() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Temporary user ID, will be updated with actual authentication later
  const userId = 'user_123';

  useEffect(() => {
    const q = query(
      collection(db, 'ideas'),
      where('userId', '==', userId),
      orderBy('timestamp', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ideasArray = [];
      snapshot.forEach((doc) => {
        ideasArray.push({ id: doc.id, ...doc.data() });
      });
      setIdeas(ideasArray);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener
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
                    Submitted on: {new Date(idea.timestamp.seconds * 1000).toLocaleDateString()}
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