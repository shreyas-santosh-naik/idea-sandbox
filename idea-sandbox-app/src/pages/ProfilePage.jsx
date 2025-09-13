import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();
  const [ideaCount, setIdeaCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchUserIdeas = async () => {
      try {
        const response = await fetch(`http://localhost:5000/ideas?userId=${user.id}`);
        const data = await response.json();
        setIdeaCount(data.length);
      } catch (error) {
        console.error("Failed to fetch user ideas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserIdeas();
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">My Profile</h2>
          <div className="profile-card">
            <div className="profile-avatar">
              <span>{user.name ? user.name.charAt(0).toUpperCase() : '?'}</span>
            </div>
            <h3 className="profile-name">{user.name}</h3>
            <p className="profile-email">{user.email}</p>
            <hr className="profile-divider" />
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-value">{loading ? '...' : ideaCount}</span>
                <span className="stat-label">Ideas Submitted</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">#1</span>
                <span className="stat-label">Leaderboard Rank</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}