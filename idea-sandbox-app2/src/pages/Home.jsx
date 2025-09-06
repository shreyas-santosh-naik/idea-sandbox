import React from 'react';

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the Idea Sandbox</h1>
      <p>Share your ideas and help us innovate!</p>
      <a href="/submit" className="btn btn-primary">Submit Your Idea</a>
      <a href="/history" className="btn btn-secondary">View Idea History</a>
    </div>
  );
}