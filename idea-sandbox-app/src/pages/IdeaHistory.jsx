import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from '../context/AuthContext';

export default function IdeaHistory() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 1. Add state to track errors
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchIdeas = async () => {
      // Reset states on new fetch
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:5000/ideas?userId=${user.id}`
        );

        // Check if the server responded correctly
        if (!response.ok) {
          throw new Error('Failed to fetch ideas. Please make sure the API server is running.');
        }

        const data = await response.json();
        data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setIdeas(data);
      } catch (err) {
        console.error("Error fetching ideas:", err);
        setError(err.message); // Set the error message to display to the user
      } finally {
        setLoading(false); // 2. Always stop loading, even if there was an error
      }
    };

    fetchIdeas();
  }, [user]);

  const handleDelete = async (ideaId) => {
    // Keep the optimistic UI update but add error handling
    const originalIdeas = [...ideas];
    setIdeas(ideas.filter((idea) => idea.id !== ideaId));

    try {
      const response = await fetch(`http://localhost:5000/ideas/${ideaId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error('Failed to delete the idea on the server.');
      }
      console.log(`Idea with ID: ${ideaId} deleted.`);
    } catch (error) {
      console.error("Error deleting idea:", error);
      alert('Could not delete the idea. Please try again.');
      setIdeas(originalIdeas); // Revert to original state on error
    }
  };

  // 3. Helper function to render content based on state
  const renderContent = () => {
    if (loading) {
      return <h2 className="section-title">Loading...</h2>;
    }

    if (error) {
      return <p className="text-center" style={{ color: '#e0002f' }}>Error: {error}</p>;
    }

    if (ideas.length === 0) {
      return (
        <div className="text-center">
            <p style={{ color: "var(--text-muted)", marginBottom: '20px' }}>
                You haven't submitted any ideas yet.
            </p>
            <img src="/idea-sandbox_logo.png" alt="Idea Sandbox Logo" style={{ maxWidth: '200px', opacity: 0.2 }} />
        </div>
      );
    }

    return (
      <div className="idea-history-grid">
        {ideas.map((idea) => (
          <div key={idea.id} className="feature-card"> {/* Using feature-card for better styling */}
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <div className="idea-tags" style={{ marginTop: '15px' }}>
              {(Array.isArray(idea.tags) ? idea.tags : []).map(
                (tag, index) => tag && <span key={index} className="tag">{tag}</span>
              )}
            </div>
            <p className="idea-timestamp" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '15px' }}>
              Submitted on:{" "}
              {idea.timestamp
                ? new Date(idea.timestamp).toLocaleDateString()
                : "N/A"}
            </p>
            <button
              onClick={() => handleDelete(idea.id)}
              className="btn-delete"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <>
      <Header />
      <section className="section-padding" style={{ minHeight: '60vh' }}>
        <div className="container">
          <h2 className="section-title">
            {user?.role === 'admin' ? 'Admin View: My Submissions' : 'My Past Submissions'}
          </h2>
          {renderContent()}
        </div>
      </section>
      <Footer />
    </>
  );
}